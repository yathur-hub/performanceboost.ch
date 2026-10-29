/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Heart, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  visits: number;
  anfragen: number;
  online_quote: number;
  patient_wert: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function NeupatientenPotenzialCheck() {
  const [inputs, setInputs] = useState<Inputs>({
    visits: 800,
    anfragen: 35,
    online_quote: 15,
    patient_wert: 1200,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [praxisTyp, setPraxisTyp] = useState('Zahnarztpraxis / Kieferorthopädie');
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
    const { visits, anfragen, online_quote, patient_wert } = inputs;
    if (visits < 50 || patient_wert < 100) return null;

    const neupatienten_monat = anfragen;
    const neupatienten_jahr = neupatienten_monat * 12;
    const umsatz_jahr = neupatienten_jahr * patient_wert;

    const BENCH_VISIT_CONVERSION = 0.08; // 8% should convert
    const BENCH_ONLINE_QUOTE = 55; // 55% of bookings online

    const soll_neupatienten_monat = visits * BENCH_VISIT_CONVERSION;
    const soll_umsatz_jahr = soll_neupatienten_monat * 12 * patient_wert;
    const umsatz_gap = Math.max(0, soll_umsatz_jahr - umsatz_jahr);

    const online_gap = Math.max(0, BENCH_ONLINE_QUOTE - online_quote);

    const potential_umsatz_jahr = online_gap > 0 ? (visits * 0.03 * patient_wert * 12) : 0;

    const conversion_score = Math.min(50, ((anfragen / visits) / BENCH_VISIT_CONVERSION) * 50);
    const online_score = Math.min(50, (online_quote / BENCH_ONLINE_QUOTE) * 50);
    const score = Math.round(conversion_score + online_score);

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (score <= 35) score_stufe = "kritisch";
    else if (score <= 60) score_stufe = "potenzial";
    else if (score <= 80) score_stufe = "gut";
    else score_stufe = "top";

    return {
      neupatienten_monat,
      neupatienten_jahr,
      umsatz_jahr,
      soll_neupatienten_monat,
      soll_umsatz_jahr,
      umsatz_gap,
      online_gap,
      potential_umsatz_jahr,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'gesundheitswesen', tool: 'neupatienten-potenzial-check' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'gesundheitswesen',
          tool: 'neupatienten-potenzial-check',
          umsatz_jahr: results.umsatz_jahr,
          umsatz_gap: results.umsatz_gap,
          potential_umsatz_jahr: results.potential_umsatz_jahr,
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
      page: 'gesundheitswesen',
      score_stufe: results?.score_stufe,
      praxistyp: praxisTyp,
      umsatz_gap: results?.umsatz_gap,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben werden aus vielen Website-Besuchern keine Patienten, etwa weil eine einfache Online-Terminbuchung fehlt oder die Praxis bei lokalen Suchanfragen schlecht gefunden wird. Eine unkomplizierte Online-Terminlösung (z.B. OneDoc) und eine gute lokale Auffindbarkeit bei Google sind hier meist die ersten Schritte.',
      rec: 'Online-Terminkalender einbinden und das Google-Unternehmensprofil vollständig pflegen.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-700 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Sie gewinnen bereits Patienten online, auf dem Weg zum Termin gehen aber noch einige verloren. Häufige Gründe sind ein unvollständiges Google-Profil oder ein umständlicher Buchungsweg auf der Website.',
      rec: 'Den Buchungsbutton sichtbarer platzieren, die Ladezeit der Website verkürzen und Patienten aktiv um Google-Bewertungen bitten.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-700 text-white',
      label: 'Gut aufgestellt',
      desc: 'Aus Ihren Website-Besuchern werden bereits viele Patienten, und die Online-Buchung wird gut genutzt. Um weiter zu wachsen, brauchen Sie vor allem mehr passende Besucher auf Ihrer Website.',
      rec: 'Mehr Besucher gewinnen: lokale Auffindbarkeit bei Google und Google Ads für die Fachbereiche, die Sie ausbauen möchten.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Der Weg von der Website zum Termin funktioniert nach Ihren Angaben sehr gut, mit vielen Online-Buchungen. Jetzt können Sie die Auslastung gezielt steuern und mehr Patienten für Ihre Behandlungsschwerpunkte gewinnen.',
      rec: 'Spezialisierte Leistungen (z.B. Implantologie, Ästhetik) online gezielt bekannt machen.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Praxen</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Neupatienten-Potenzial-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viele zusätzliche Patienten Ihre Arzt- oder Zahnarztpraxis über die Website gewinnen könnte. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Web-Besucher pro Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.visits.toLocaleString('de-CH')}</span>
            </label>
            <input aria-label="Web-Besucher pro Monat"
              type="number"
              min={50}
              max={15000}
              step={50}
              value={inputs.visits}
              onChange={(e) => handleInputChange('visits', parseInt(e.target.value) || 50)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[11px] text-slate-400 font-medium">Durchschnittliche Besucher auf Ihrer Praxis-Website</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Neupatienten pro Monat (Schnitt)</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anfragen}</span>
            </label>
            <input aria-label="Neupatienten pro Monat (Schnitt)"
              type="number"
              min={1}
              max={500}
              value={inputs.anfragen}
              onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[11px] text-slate-400 font-medium">Heutige Anzahl neuer Patienten pro Monat</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anteil Online-Terminbuchungen</span>
              <span className="text-[#686DF4] font-semibold">{inputs.online_quote}%</span>
            </label>
            <input aria-label="Anteil Online-Terminbuchungen"
              type="range"
              min={0}
              max={100}
              step={5}
              value={inputs.online_quote}
              onChange={(e) => handleInputChange('online_quote', parseInt(e.target.value) || 0)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Wie viel % buchen direkt online statt per Telefon/E-Mail?</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Patientenwert / Jahr (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.patient_wert)}</span>
            </label>
            <div className="relative">
              <input aria-label="Ø Patientenwert / Jahr (CHF)"
                type="number"
                min={100}
                max={25000}
                step={100}
                value={inputs.patient_wert}
                onChange={(e) => handleInputChange('patient_wert', parseInt(e.target.value) || 100)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium font-mono">Durchschnittlicher Umsatz pro neuem Patienten im 1. Jahr</p>
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
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Umsatz aus Neupatienten heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.umsatz_jahr)} / J.</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    ({results.neupatienten_jahr} Neupatienten / Jahr insgesamt)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-655 block uppercase">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-700 mt-1">
                    {results.umsatz_gap > 0 ? `-${formatCHF(results.umsatz_gap)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: 8% der Besucher werden Patienten
                  </p>
                </div>

                {inputs.online_quote < 55 && (
                  <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich mit Online-Terminbuchung</span>
                      <p className="text-[11px] text-slate-500 font-semibold">Grobe Schätzung bei 55% Online-Buchungen (Annahme: +3% der Besucher)</p>
                    </div>
                    <h4 className="text-base font-black text-green-700">+{formatCHF(results.potential_umsatz_jahr)} / J.</h4>
                  </div>
                )}
              </div>

              {/* Diagnostics block */}
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
              Bitte geben Sie mindestens 50 Besucher und einen Patientenwert ab CHF 100 ein.
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
                  page: 'gesundheitswesen',
                  cta_type: 'primary',
                  umsatz_gap: results.umsatz_gap
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
