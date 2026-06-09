/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Heart, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';

interface Inputs {
  visits: number;
  anfragen: number;
  online_quote: number;
  patient_wert: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

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
      label: 'Hohes Digital-Potenzial',
      desc: 'Ihre Praxis verliert viele potenzielle Patienten auf der Website, weil moderne Online-Buchungsmöglichkeiten fehlen oder die Sichtbarkeit bei lokalen Suchanfragen ungenügend ist. Mit einer unkomplizierten Online-Terminloesung (z.B. OneDoc) und lokalem SEO lässt sich der Strom erfreulich rasch optimieren.',
      rec: 'Integration eines vollautomatischen Online-Terminkalenders & Google My Business Optimierung.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Ungelöstes Potenzial',
      desc: 'Sie gewinnen bereits Patienten online — doch der Flaschenhals ist eng. Entspricht Ihr Google Profil nicht den modernen Erwartungen, oder ist der Online-Buchungsweg zu umständlich? Hier liegt ein bezifferbares Zusatz-Umsatzpotenzial.',
      rec: 'Buchungsbutton präsenter platzieren, Ladezeit reduzieren, Bewertungen auf Google systematisch fördern.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut aufgestellt',
      desc: 'Ihre Konvertierungsraten sind solide, und Ihre Patienten nutzen die Online-Kanäle überdurchschnittlich gut. Um weiter organisch zu wachsen, sollten Sie Ihre Reichweite digital erweitern (mehr Klicks auf Ihre Seite holen).',
      rec: 'Fokus auf Traffic-Aufbau: Lokale Kampagnen (SEO & Google Ads) für besonders lukrative Fachbereiche.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Spitzen-Performer',
      desc: 'Ihr Neupatienten-Funnel ist exzellent. Hohe Online-Buchungsquoten, starke Webkonvertierung. Optimieren Sie jetzt gezielt die Auslastung und lenken Sie Ihren Service-Fokus auf hochqualitative Behandlungsschwerpunkte.',
      rec: 'Fokus auf Spezialisierungen und Premium-Services (z.B. Implantologie, Ästhetik) per Digital-Marketing.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">MEDICAL INSIGHTS</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Neupatienten-Potenzial-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Ermitteln Sie die ungenutzten Wachstumspotentiale Ihrer Arzt- oder Zahnarztpraxis per Online-Patientenmarketing.
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
            <input
              type="number"
              min={50}
              max={15000}
              step={50}
              value={inputs.visits}
              onChange={(e) => handleInputChange('visits', parseInt(e.target.value) || 50)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium">Durchschnittliche Besucher auf Ihrer Praxis-Webseite</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Neupatienten pro Monat (Schnitt)</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anfragen}</span>
            </label>
            <input
              type="number"
              min={1}
              max={500}
              value={inputs.anfragen}
              onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium">Bestehender monatlicher Zustrom an Neupatienten</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anteil Online-Terminbuchungen</span>
              <span className="text-[#686DF4] font-semibold">{inputs.online_quote}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={inputs.online_quote}
              onChange={(e) => handleInputChange('online_quote', parseInt(e.target.value) || 0)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Wie viel % buchen direkt online statt per Telefon/E-Mail?</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Patientenwert / Jahr (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.patient_wert)}</span>
            </label>
            <div className="relative">
              <input
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
            <p className="text-[9px] text-slate-400 font-medium font-mono">Durschnittlicher Umsatz pro Neupatient im 1. Jahr</p>
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
                    DIGITAL-REICHWEITEN SCORE
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards column */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Umsatz aus Neupatienten aktuell</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.umsatz_jahr)} / J.</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    ({results.neupatienten_jahr} Neupatienten / Jahr insgesamt)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-red-655 block uppercase">Umsatz-Lücke vs. Modern-Target</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.umsatz_gap > 0 ? `-${formatCHF(results.umsatz_gap)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Soll-Modern-Target: 8% Website-Konvertierungsrate
                  </p>
                </div>

                {inputs.online_quote < 55 && (
                  <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Potenzial durch Online-Terminkalender</span>
                      <p className="text-[10px] text-slate-500 font-semibold">Umsatzzuwachs bei Erhöhung der Online-Buchbarkeit auf 55%</p>
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
                  Konkreter Hebel: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte qualifizieren Sie Ihre Eingaben (visits mind. 50).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Entspricht Ihre Website den modernen Erwartungen Ihrer Patienten?</strong> In 30 Minuten analysieren wir Ihre Online-Auffindbarkeit.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'gesundheitswesen',
                cta_type: 'primary',
                umsatz_gap: results.umsatz_gap
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Praxis-Analyse buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'gesundheitswesen',
                  umsatz_gap: results.umsatz_gap,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Detaillierten Praxis-Report per E-Mail anfordern →</span>
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
                        placeholder="praxis@arzt.ch"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Ihr Name *</label>
                      <input
                        type="text"
                        required
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                        placeholder="Dr. Med. Meier"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Praxisname / Klinik</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Praxiszentrum Dr. Müller"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Praxisrichtung</label>
                      <select
                        value={praxisTyp}
                        onChange={(e) => setPraxisTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Zahnarztpraxis / Kieferorthopädie</option>
                        <option>Hausarztmedizin / Gruppenpraxis</option>
                        <option>Physiotherapie / Ostheopathie</option>
                        <option>Ästhetische Medizin / Dermatologie</option>
                        <option>Andere Spezialdisziplinen</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Report anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Datenschutzkonform (DSG). Einmaliger, personalisierter Report samt Schweizer Praxis-Benchmarks im Gesundheitssektor.
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
