/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Hotel, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';

interface Inputs {
  zimmerumsatz: number;
  ota_anteil: number;
  commission_fee: number;
  direkt_ziel: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

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
      desc: 'Dein Betrieb zahlt erhebliche Jahres-Provisionen an Booking.com, Expedia & Co. (ota_provision_jahr). Du verschenkst wertvollen Ertrag. Mit gezieltem, emotionalem Direktmarketing, einer optimierten Hotelwebsite und smarten Anreizen für Direktbucher lässt sich das Buchungsverhalten spürbar modernisieren.',
      rec: 'Integration eines modernen Direktbuchungs-Widgets auf der Website, Besserpreis-Garantien klar kommunizieren.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Messbares Potenzial',
      desc: 'Du gewinnst bereits Gäste direkt — doch der Großteil fliesst unaufhaltsam über Drittportale. Das verdeckte Provisions-Marge-Leck ist echt und bezifferbar. Eine Umschichtung von nur 15-20% der Buchungen auf den Direktkanal spart Tausende Franken an Provision.',
      rec: 'Gäste-Reaktivierung über automatisches E-Mail-Marketing nach Abreise, Landingpages für Pauschalen optimieren.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gesunde Buchungs-Verteilung',
      desc: 'Deine OTA-Abhängigkeit liegt im gesunden Schweizer Branchendurchschnitt. Ein gutes Fundament. Erweitere deine Direktquote weiter durch exzellente Zielgruppen-Sichtbarkeit und zielgerichtete Such-Anzeigen auf Google (Google Hotel Ads).',
      rec: 'Optimierung des Google My Business Profils, Schaltung von Google Hotel Ads und Social Media Branding.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Spitzen-Direktvertrieb',
      desc: 'Dein Direktbuchungs-Anteil ist vorbildlich hoch. Du behältst die Marge fast vollständig bei dir im Haus. Konzentriere dich darauf, den durchschnittlichen Zimmerpreis (ADR) durch exklusivere Upsee-Angebote weiter anzuheben.',
      rec: 'Automatisierte Zusatzverkäufe (Up-Selling) vor Anreise für Wellness, Kulinarik und Erlebnisse.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">HOSPITALITY REVENUE</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Direktbuchungs-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Erreche die an OTAs gezahlten Provisionen und das Einsparungspotenzial durch konsequenten Direktvertrieb.
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
            <p className="text-[9px] text-slate-400 font-medium">Reiner Zimmer- oder Logis-Umsatz im Schnitt pro Monat</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Plattform-Anteil (Booking, OTA)</span>
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
            <p className="text-[9px] text-slate-400 font-medium font-mono">Anteil der Buchungen über Drittanbieter</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Plattform-Gebühr (Kommission)</span>
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
            <p className="text-[9px] text-slate-400 font-medium">Schnitt für Kommissionen: meist 15%</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>OTA-Direktbucher Umschichtugs-Ziel</span>
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
            <p className="text-[9px] text-slate-400 font-medium">Wieviel % der OTA-Gäste wollen wir direkt konvertieren?</p>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    PROVISIONSUNABHÄNGIGKEITS-SCORE
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.independence_score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Bezahlte OTA-Gebühren gesamt</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.ota_provision_jahr)} / J.</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    ({formatCHF(results.ota_provision_monat)} im Monat)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-red-655 block uppercase font-mono">Gebühren-Leck vs. Benchmark</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.provisions_marge_leck_jahr > 0 ? `-${formatCHF(results.provisions_marge_leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Nationaler Soll-OTA-Verteilungs-Kanal: max. 40%
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Provisionsmarge gerettet bei Zielerreichung</span>
                    <p className="text-[10px] text-slate-500 font-semibold">Umsatzersparnis bei Umschichtung von {inputs.direkt_ziel}% der OTA-Buchungen</p>
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
                  Deine Massnahme: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte qualifiziere deine Eingaben (Zimmerumsatz mind. CHF 1'000).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Möchtest du mehr Marge am Gast behalten?</strong> In 30 Minuten analysieren wir deine Website-Conversion und skizzieren Einsparungen.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'hospitality',
                cta_type: 'primary',
                unleashed_saving: results.commission_saving_jahr
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Marge-Gespräch buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'hospitality',
                  commission_saving_jahr: results.commission_saving_jahr,
                  score: results.independence_score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Detaillierten Hospitality-Report per E-Mail erhalten →</span>
              {accordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-440" />}
            </button>

            {accordionOpen && (
              <div className="p-4 border-t border-slate-150 bg-white space-y-4 animate-fadeIn">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmitLead} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">E-Mail Adresse *</label>
                      <input
                        type="email"
                        required
                        value={emailSub}
                        onChange={(e) => setEmailSub(e.target.value)}
                        placeholder="rezeption@hotel.ch"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Dein Name *</label>
                      <input
                        type="text"
                        required
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                        placeholder="Inhaber / Hoteldirektor"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Hotelname / Betrieb</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Hotel Krone AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Unterkunftsart</label>
                      <select
                        value={hotelTyp}
                        onChange={(e) => setHotelTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Ferienhotel / Resort</option>
                        <option>Stadthotel / Businesshotel</option>
                        <option>Boutique Hotel / Garni</option>
                        <option>Ferienwohnungen / Chalet-Park</option>
                        <option>Anderer Übernachtungsbetrieb</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Report anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Keine Werbebelästigung. Einmaliger, vertraulicher Report mit Branchenbenchmarks zur Direktvertriebs-Optimierung.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                    Vielen Dank! Die PDF-Auswertung ist in Kürze in Ihrem Posteingang.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
