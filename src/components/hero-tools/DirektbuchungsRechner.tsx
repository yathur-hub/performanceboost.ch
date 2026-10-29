/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Hotel, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  zimmerumsatz: number;
  ota_anteil: number;
  commission_fee: number;
  direkt_ziel: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function DirektbuchungsRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    zimmerumsatz: 45000,
    ota_anteil: 68,
    commission_fee: 15,
    direkt_ziel: 45,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [hotelTyp, setHotelTyp] = useState('Ferienhotel / Resort');
  const [formSubmitted, setFormSubbed] = useState(false);

  const formatCHF = (value: number): string => {
    if (value >= 1000000) {
      const mio = value / 1000000;
      return `CHF ${mio.toFixed(1).replace(".", "'")} Mio.`;
    }
    if (value >= 10000) {
      const gerundet = Math.round(value / 1000) * 1000;
      return "CHF " + gerundet.toLocaleString("de-CH");
    }
    if (value >= 1000) {
      return "CHF " + Math.round(value).toLocaleString("de-CH");
    }
    return "CHF " + Math.round(value);
  };

  const results = useMemo(() => {
    const { zimmerumsatz, ota_anteil, commission_fee, direkt_ziel } = inputs;
    if (zimmerumsatz < 1000 || commission_fee < 5) return null;

    const ota_umsatz_monat = zimmerumsatz * (ota_anteil / 100);
    const ota_provision_monat = ota_umsatz_monat * (commission_fee / 100);
    const ota_provision_jahr = ota_provision_monat * 12;

    const BENCH_OTA_ANTEIL = 40; // OTA should be max 40%
    const soll_ota_umsatz_monat = zimmerumsatz * (BENCH_OTA_ANTEIL / 100);
    const soll_provision_jahr = soll_ota_umsatz_monat * (commission_fee / 100) * 12;
    const provisions_marge_leck_jahr = Math.max(0, ota_provision_jahr - soll_provision_jahr);

    const target_increased_direct = Math.max(0, ota_anteil * (direkt_ziel / 100)); // Target direct shift
    const commission_saving_jahr = ota_provision_jahr * (direkt_ziel / 100);

    const independence_score = Math.round(100 - (ota_anteil * 0.9));

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (independence_score <= 40) score_stufe = "kritisch";
    else if (independence_score <= 65) score_stufe = "potenzial";
    else if (independence_score <= 85) score_stufe = "gut";
    else score_stufe = "top";

    return {
      ota_umsatz_monat,
      ota_provision_monat,
      ota_provision_jahr,
      provisions_marge_leck_jahr,
      commission_saving_jahr,
      independence_score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'hospitality', tool: 'direktbuchungs-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'hospitality',
          tool: 'direktbuchungs-rechner',
          ota_provision_jahr: results.ota_provision_jahr,
          provisions_marge_leck_jahr: results.provisions_marge_leck_jahr,
          commission_saving_jahr: results.commission_saving_jahr,
          score: results.independence_score,
          score_stufe: results.score_stufe,
        });
      }
      return next;
    });
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub || !nameSub) return;
    setFormSubbed(true);
    track('hero_tool_lead_captured', {
      page: 'hospitality',
      score_stufe: results?.score_stufe,
      hoteltyp: hotelTyp,
      commission_saving_jahr: results?.commission_saving_jahr,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Hohe OTA-Abhängigkeit',
      desc: 'Nach Ihren Angaben zahlt Ihr Betrieb hohe Provisionen an Booking.com, Expedia & Co. Mit gezieltem Direktmarketing, einer Hotelwebsite, auf der das Buchen einfach ist, und klaren Vorteilen für Direktbucher lässt sich ein Teil dieser Buchungen auf den eigenen Kanal verlagern.',
      rec: 'Eine einfache Buchungsmaske auf der Website einbinden und die Vorteile einer Direktbuchung klar kommunizieren.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Sie gewinnen bereits Gäste direkt, ein grosser Teil der Buchungen läuft aber weiterhin über Portale. Schon wenn ein kleiner Teil davon direkt bucht, sparen Sie Provision. Wie viel, sehen Sie oben in der Schätzung.',
      rec: 'Frühere Gäste nach der Abreise per E-Mail wieder ansprechen und Landingpages für Pauschalen verbessern.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gesunde Buchungs-Verteilung',
      desc: 'Ihr Portal-Anteil liegt im Bereich des angenommenen Richtwerts. Das ist eine gute Basis. Den Direktanteil können Sie mit besserer Sichtbarkeit bei Ihren Wunschgästen und gezielten Anzeigen auf Google (z.B. Google Hotel Ads) weiter ausbauen.',
      rec: 'Google-Unternehmensprofil pflegen, Google Hotel Ads schalten und auf Social Media sichtbar bleiben.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Starker Direktvertrieb',
      desc: 'Ihr Anteil an Direktbuchungen ist hoch, die Marge bleibt also grösstenteils im Haus. Der nächste Schritt: den durchschnittlichen Zimmerpreis mit attraktiven Zusatzangeboten weiter anheben.',
      rec: 'Vor der Anreise automatisch Zusatzangebote für Wellness, Kulinarik und Erlebnisse anbieten.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Hotellerie</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Direktbuchungs-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel Provision Sie an Buchungsportale zahlen und was mehr Direktbuchungen sparen könnten. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Unterkunfts-Umsatz pro Monat</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.zimmerumsatz)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={1000}
                max={500000}
                step={2500}
                value={inputs.zimmerumsatz}
                onChange={(e) => handleInputChange('zimmerumsatz', parseInt(e.target.value) || 1000)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Reiner Zimmer- bzw. Logis-Umsatz im Durchschnitt pro Monat</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anteil Buchungsportale (Booking & Co.)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.ota_anteil}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={1}
              value={inputs.ota_anteil}
              onChange={(e) => handleInputChange('ota_anteil', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Anteil der Buchungen über Portale</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Portal-Provision</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.commission_fee}%</span>
            </label>
            <input
              type="range"
              min={5}
              max={25}
              step={0.5}
              value={inputs.commission_fee}
              onChange={(e) => handleInputChange('commission_fee', parseFloat(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Beispielwert: häufig rund 15%</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ziel: Anteil, der direkt bucht</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.direkt_ziel}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={80}
              step={5}
              value={inputs.direkt_ziel}
              onChange={(e) => handleInputChange('direkt_ziel', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Wie viel % der Portal-Gäste sollen künftig direkt buchen?</p>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    Unabhängigkeit von Portalen
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.independence_score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Portal-Provisionen gesamt</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.ota_provision_jahr)} / J.</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    ({formatCHF(results.ota_provision_monat)} im Monat)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-655 block uppercase font-mono">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.provisions_marge_leck_jahr > 0 ? `-${formatCHF(results.provisions_marge_leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: Portal-Anteil max. 40%
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Mögliche Ersparnis bei Zielerreichung</span>
                    <p className="text-[11px] text-slate-500 font-semibold">Geschätzte Ersparnis, wenn {inputs.direkt_ziel}% der Portal-Buchungen direkt eingehen</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.commission_saving_jahr)} / J.</h4>
                </div>
              </div>

              {/* Diagnostic block */}
              <div className={`p-4 rounded-xl border ${currentStufe.color} space-y-1.5`}>
                <p className="text-xs font-semibold leading-relaxed text-slate-800">
                  {currentStufe.desc}
                </p>
                <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
                  Empfehlung: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte geben Sie einen Zimmerumsatz ab CHF 1'000 und eine Provision ab 5% ein.
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[11px] leading-relaxed max-w-sm">
              <strong>Ergebnis gemeinsam einordnen.</strong> In einem kostenlosen Erstgespräch von 30 Minuten schauen wir Ihre Zahlen an und besprechen, wo bei Ihnen der grösste Hebel liegt.
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                track('hero_tool_cta_clicked', {
                  page: 'hospitality',
                  cta_type: 'primary',
                  unleashed_saving: results.commission_saving_jahr
                });
                window.dispatchEvent(new CustomEvent('open-contact-modal'));
              }}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer border-0"
            >
              Ergebnis besprechen
            </button>
          </div>


        </div>
      )}
    </div>
  );
}
