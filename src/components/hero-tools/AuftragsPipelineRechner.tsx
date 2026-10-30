/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Hammer, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  anfragen: number;
  offerten_quote: number;
  zuschlag_quote: number;
  projektwert: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function AuftragsPipelineRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    anfragen: 18,
    offerten_quote: 75,
    zuschlag_quote: 25,
    projektwert: 15000,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [gewerk, setGewerk] = useState('Sanitär / Heizung / Lüftung');
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
    const { anfragen, offerten_quote, zuschlag_quote, projektwert } = inputs;
    if (anfragen < 1 || projektwert < 1000) return null;

    const offerten_monat = anfragen * (offerten_quote / 100);
    const auftraege_monat = offerten_monat * (zuschlag_quote / 100);
    const revenue_monat = auftraege_monat * projektwert;
    const revenue_jahr = revenue_monat * 12;

    const BENCH_OFFERT_CONV = 80;
    const BENCH_WIN_CONV = 35;

    const soll_offerten_monat = anfragen * (BENCH_OFFERT_CONV / 100);
    const soll_auftraege_monat = soll_offerten_monat * (BENCH_WIN_CONV / 100);
    const soll_revenue_jahr = soll_auftraege_monat * projektwert * 12;
    const leck_jahr = Math.max(0, soll_revenue_jahr - revenue_jahr);

    const optimiert_auftraege = offerten_monat * ((zuschlag_quote + 10) / 100);
    const potenzial_jahr = Math.max(0, (optimiert_auftraege - auftraege_monat) * projektwert * 12);

    const off_score = Math.min(50, (offerten_quote / 80) * 50);
    const win_score = Math.min(50, (zuschlag_quote / 35) * 50);
    const score = Math.round(off_score + win_score);

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (score <= 40) score_stufe = "kritisch";
    else if (score <= 65) score_stufe = "potenzial";
    else if (score <= 85) score_stufe = "gut";
    else score_stufe = "top";

    return {
      offerten_monat,
      auftraege_monat,
      revenue_monat,
      revenue_jahr,
      leck_jahr,
      potenzial_jahr,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'handwerk', tool: 'auftrags-pipeline-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'handwerk',
          tool: 'auftrags-pipeline-rechner',
          revenue_jahr: results.revenue_jahr,
          leck_jahr: results.leck_jahr,
          potenzial_jahr: results.potenzial_jahr,
          score: results.score,
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
      page: 'handwerk',
      score_stufe: results?.score_stufe,
      gewerk: gewerk,
      leck_jahr: results?.leck_jahr,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben lässt Ihr Betrieb spürbar Umsatz liegen. Entweder erhalten zu wenige Anfragen eine Offerte, oder zu wenige Offerten werden zum Auftrag, oft weil nicht nachgefasst wird. Mit einfachen, klaren Abläufen lässt sich hier meist schnell etwas verbessern.',
      rec: 'Offerten schneller erstellen und ein paar Tage nach Versand systematisch nachtelefonieren.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-700 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihr Weg von der Anfrage zum Auftrag läuft solide, es bleibt aber noch Umsatz liegen. Häufige Ursachen sind fehlendes Nachfassen bei Offerten oder eine unklare erste Einschätzung der Anfragen.',
      rec: 'Offerten einheitlich aufbauen, das Nachfassen klar regeln und offene Offerten in einem CRM im Blick behalten.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-700 text-white',
      label: 'Gut aufgestellt',
      desc: 'Ihre Quoten liegen nahe an den angenommenen Richtwerten oder darüber. Das ist eine solide Basis. Um weiter zu wachsen, brauchen Sie vor allem mehr passende Anfragen aus Ihrer Region.',
      rec: 'Lokale Sichtbarkeit bei Google ausbauen und gezielte Suchanzeigen für Ihre margenstärksten Arbeiten schalten.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Sie machen nach Ihren Angaben bereits sehr viel aus Ihren Anfragen. Der nächste Schritt: gezielt mehr Anfragen für die Projekte gewinnen, die Sie am liebsten ausführen.',
      rec: 'Sichtbarkeit gezielt auf lukrative Projekte wie Umbau oder Sanierung ausrichten.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left font-sans">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Handwerk</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Auftrags-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel Umsatz zwischen Anfrage, Offerte und Auftrag verloren geht. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anfragen pro Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anfragen}</span>
            </label>
            <input aria-label="Anfragen pro Monat"
              type="number"
              min={1}
              max={200}
              value={inputs.anfragen}
              onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[11px] text-slate-400 font-medium">Alle schriftlichen und telefonischen Kundenanfragen pro Monat</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Angebotsquote (Offerten / Anfragen)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.offerten_quote}%</span>
            </label>
            <input aria-label="Angebotsquote (Offerten / Anfragen)"
              type="range"
              min={10}
              max={100}
              step={5}
              value={inputs.offerten_quote}
              onChange={(e) => handleInputChange('offerten_quote', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Richtwert (Annahme): 80% der Anfragen erhalten eine schriftliche Offerte</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Zuschlagsquote (Aufträge / Offerten)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.zuschlag_quote}%</span>
            </label>
            <input aria-label="Zuschlagsquote (Aufträge / Offerten)"
              type="range"
              min={5}
              max={80}
              step={1}
              value={inputs.zuschlag_quote}
              onChange={(e) => handleInputChange('zuschlag_quote', parseInt(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium font-mono">Richtwert (Annahme): 35% der Offerten führen zum Auftrag</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Projektwert (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.projektwert)}</span>
            </label>
            <div className="relative">
              <input aria-label="Ø Projektwert (CHF)"
                type="number"
                min={1000}
                max={500000}
                step={1000}
                value={inputs.projektwert}
                onChange={(e) => handleInputChange('projektwert', parseInt(e.target.value) || 1000)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>
        </div>

        {/* Right Output */}
        <div className="md:col-span-12 lg:col-span-12 xl:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    Effizienz-Wert
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Jahresumsatz aus Anfragen heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.revenue_jahr)} / J.</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    ({results.auftraege_monat.toFixed(1)} Aufträge / Monat insgesamt)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-655 block uppercase">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-700 mt-1">
                    {results.leck_jahr > 0 ? `-${formatCHF(results.leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: 80% Offertquote / 35% Zuschlagsquote
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich durch konsequentes Nachfassen</span>
                    <p className="text-[11px] text-slate-500 font-semibold">Geschätztes Plus, wenn die Zuschlagsquote um 10 Prozentpunkte steigt</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.potenzial_jahr)} / J.</h4>
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
              Bitte geben Sie mindestens 1 Anfrage und einen Projektwert ab CHF 1'000 ein.
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
                  page: 'handwerk',
                  cta_type: 'primary',
                  leck_jahr: results.leck_jahr
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
