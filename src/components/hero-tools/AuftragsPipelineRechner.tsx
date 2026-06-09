/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Hammer, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';

interface Inputs {
  anfragen: number;
  offerten_quote: number;
  zuschlag_quote: number;
  projektwert: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

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
      label: 'Starkes Optimierungspotenzial',
      desc: 'Dein Betrieb lässt signifikant Umsatz liegen. Das Angebotsschreiben dauert zu lange (offerten_quote hinkt) oder die Abschlussquote bei Offerten ist wegen ungenügender Nachfassung zu tief. Beides bremst das Wachstum von Handwerksbetrieben massiv. Einfache Prozesse bringen rasch Entlastung.',
      rec: 'Angebotserstellung beschleunigen, systematisches Nachtelefonieren am 3. Tag einführen.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Deine Auftrags-Pipeline läuft solide, aber du verschenkst immer noch wertvolles Umsatz-Volumen. Meistens liegt das am fehlenden Follow-up von Angeboten oder an unklaren Erstqualifizierungen von Anfragen.',
      rec: 'Angebotsschreiben strukturieren, Follow-up-Prozess definieren, CRM zur Ausfallkontrolle.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut aufgestellt',
      desc: 'Deine Konvertierungsquoten liegen über dem Branchenschnitt. Das ist ein solides Fundament. Um weiter zu wachsen, solltest du das Anfrage-Volumen durch aktive, zielgerichtete Sichtbarkeit im Raum erhöhen.',
      rec: 'Lokale SEO-Dominanz ausbauen, gezielte Google Such-Anzeigen für besonders margenstarke Gewirke.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Spitzen-Performer',
      desc: 'Dein Vermarktungs- und Angebotsprozess ist hervorragend. Nahezu optimale Zuschlagsquoten. Konzentriere dich nun darauf, noch hochwertigere Bauherren- und Wunschprojekte systematisch anzuziehen.',
      rec: 'Sichtbarkeit gezielt auf lukrative Premiumobjekte (Umbau/Sanierung) ausrichten.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left font-sans">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">HANDWERK CALCULATOR</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Auftrags-Pipeline-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Kalkuliere verdeckten Umsatz-Ausfall in deinen Angebots- und Nachfass-Prozessen im Handwerksbetrieb.
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
            <input
              type="number"
              min={1}
              max={200}
              value={inputs.anfragen}
              onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium">Alle schriftlichen und telefonischen Kundenanfragen pro Monat</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Angebotsquote (Offerten / Anfragen)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.offerten_quote}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={inputs.offerten_quote}
              onChange={(e) => handleInputChange('offerten_quote', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Richtwert: 80% der Anfragen erhalten eine schriftliche Offerte</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Zuschlagsquote (Aufträge / Offerten)</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.zuschlag_quote}%</span>
            </label>
            <input
              type="range"
              min={5}
              max={80}
              step={1}
              value={inputs.zuschlag_quote}
              onChange={(e) => handleInputChange('zuschlag_quote', parseInt(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Richtwert: 35% der Offerten führen zum definitiven Auftrag</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Projektwert (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.projektwert)}</span>
            </label>
            <div className="relative">
              <input
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
                  <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    PIPELINE WIRKUNGS SCORE
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
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Betriebs-Umsatz aktuell</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.revenue_jahr)} / J.</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    ({results.auftraege_monat.toFixed(1)} Aufträge / Monat insgesamt)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-red-655 block uppercase">Umsatz-Verlust vs. Benchmark</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.leck_jahr > 0 ? `-${formatCHF(results.leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Soll-Benchmark-Verluste (80% Offerten / 35% Zuschlag)
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Zusatz bei aktivem Follow-Up (+10%)</span>
                    <p className="text-[10px] text-slate-500 font-semibold">Durch systematisches Nachtelefonieren gelöster Umsatz</p>
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
                  Betriebs-Hebel: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte qualifiziere deine Eingaben (visits mind. 1'000).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Möchtest du mehr wertige Aufträge statt Papierkram?</strong> In 30 Minuten analysieren wir deine Laufwege und beseitigen Schreib-Engpässe.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'handwerk',
                cta_type: 'primary',
                leck_jahr: results.leck_jahr
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Betriebs-Gespräch buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'handwerk',
                  leck_jahr: results.leck_jahr,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Umfassende Angebots-Analyse per E-Mail anfordern →</span>
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
                        placeholder="handwerk@firma.ch"
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
                        placeholder="Inhaber / Geschäftsführer"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Betriebsname</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Müller Bedachungen AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Sparte / Gewirk</label>
                      <select
                        value={gewerk}
                        onChange={(e) => setGewerk(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Sanitär / Heizung / Lüftung</option>
                        <option>Holzbau / Zimmerei / Dachdeckerei</option>
                        <option>Elektroinstallationen / PV</option>
                        <option>Maler / Gipser / Innenausbau</option>
                        <option>Metallbau / Stahlbau</option>
                        <option>Andere Sparten</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Report anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Keine Werbe-Flut. Einmalige, personalisierte Auswertung mit Tipps zur Angebots-Büroautomation.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                    Vielen Dank! Der Report mit Branchenbenchmarks wird gesendet.
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
