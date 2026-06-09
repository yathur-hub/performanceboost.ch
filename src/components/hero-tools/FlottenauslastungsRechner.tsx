/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Truck, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';

interface Inputs {
  flottengroesse: number;
  umsatz_fahrzeug: number;
  auslastung: number;
  betriebskosten: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function FlottenauslastungsRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    flottengroesse: 15,
    umsatz_fahrzeug: 12500,
    auslastung: 78,
    betriebskosten: 38,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [logistikTyp, setLogistikTyp] = useState('Strassentransport / Fracht (national)');
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
    const { flottengroesse, umsatz_fahrzeug, auslastung, betriebskosten } = inputs;
    if (flottengroesse < 1 || umsatz_fahrzeug < 500) return null;

    const voll_potenzial_jahr = flottengroesse * umsatz_fahrzeug * 12;
    const aktueller_umsatz_jahr = voll_potenzial_jahr * (auslastung / 100);
    const leerstands_verlust_jahr = voll_potenzial_jahr - aktueller_umsatz_jahr;

    const BENCH_AUSLASTUNG = 85; // 85% is high solid benchmark
    const benchmark_umsatz_jahr = voll_potenzial_jahr * (BENCH_AUSLASTUNG / 100);
    const optimierungs_marge_jahr = Math.max(0, benchmark_umsatz_jahr - aktueller_umsatz_jahr);

    const kosten_pro_jahr = aktueller_umsatz_jahr * (betriebskosten / 100);
    const gewinn_jahr = aktueller_umsatz_jahr - kosten_pro_jahr;

    const target_increased_utilization = Math.min(95, auslastung + 5);
    const plus_5_umsatz = voll_potenzial_jahr * (target_increased_utilization / 100) - aktueller_umsatz_jahr;

    const utilization_score = Math.min(70, (auslastung / 88) * 70);
    const cost_score = Math.max(0, 30 - ((betriebskosten - 30) * 1.5));
    const score = Math.round(utilization_score + cost_score);

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (score <= 40) score_stufe = "kritisch";
    else if (score <= 65) score_stufe = "potenzial";
    else if (score <= 85) score_stufe = "gut";
    else score_stufe = "top";

    return {
      voll_potenzial_jahr,
      aktueller_umsatz_jahr,
      leerstands_verlust_jahr,
      optimierungs_marge_jahr,
      kosten_pro_jahr,
      gewinn_jahr,
      plus_5_umsatz,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'logistik-transport', tool: 'flottenauslastungs-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'logistik-transport',
          tool: 'flottenauslastungs-rechner',
          aktueller_umsatz_jahr: results.aktueller_umsatz_jahr,
          leerstands_verlust_jahr: results.leerstands_verlust_jahr,
          optimierungs_marge_jahr: results.optimierungs_marge_jahr,
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
      page: 'logistik-transport',
      score_stufe: results?.score_stufe,
      logistiktyp: logistikTyp,
      optimierungs_marge_jahr: results?.optimierungs_marge_jahr,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Geringe Auslastung / Hoher Leerstand',
      desc: 'Deine Flottenauslastung liegt spürbar unter dem soliden Richtwert (85%). Das bedeutet ungenutzte Ladebühnen und Lkw, die Fixkosten verursachen, aber keine Deckungsbeiträge einfahren. Durch gezieltes digitales Marketing (z.B. Sichtbarkeit für Teilladungsverkehre, B2B-Auftrags-Akquise) lässt sich dieser Hebel rasch drehen.',
      rec: 'Aufbau eines digitalen Direktvertriebskanals, um Leerfahrten und Spotmarkt-Abhängigkeit zu senken.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Spürbares Potenzial',
      desc: 'Deine Flotte läuft ordentlich — doch das verdeckte Marge-Leck ist echt und bezifferbar. Schon kleine Effizienzsteigerungen bei der Auslastung von nur +5% würden dir erhebliche Direct-Revenues einbringen.',
      rec: 'Laufende Sichtbarkeit bei Bestandskunden optimieren, regelmässiges B2B-Outreach für Frachtkapazitäten.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Solide Auslastung',
      desc: 'Deine Werte liegen nahe an den Benchmarks. Das ist ein gesundes Transportgeschäft. Die Herausforderung liegt nun darin, die Betriebskosten zu minimieren oder den durchschnittlichen Frachtsatz pro Kilometer durch strategischere Tourengestaltung zu steigern.',
      rec: 'Fokus auf margenstärkere Direktkunden statt reiner Subunternehmer-Verkehre.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Spitzen-Performer',
      desc: 'Deine Flotte fährt auf exzellentem Niveau — hervorragende Toureneffizienz und tiefe Leerstands-Verluste. Du solltest über eine gezielte Expansion der Flottengrösse nachdenken, da du die Kapazitäten offenbar erstklassig auslastest.',
      rec: 'Strategische Kundengewinnung für Flottenerweiterung und Erschliessung neuer Linienverkehre.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">LOGISTICS OPTIMIZER</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Flottenauslastungs-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Kalkuliere das verdeckte Umsatz-Potenzial ungenutzter Ladeflächen und Leerfahrten in deiner Transportflotte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Flottengrösse (Fahrzeuge)</span>
              <span className="text-[#686DF4] font-semibold">{inputs.flottengroesse}</span>
            </label>
            <input
              type="number"
              min={1}
              max={500}
              value={inputs.flottengroesse}
              onChange={(e) => handleInputChange('flottengroesse', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Anzahl Lkws, Lieferwagen oder Frachteinheiten</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Umsatz pro Fahrzeug / Monat</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.umsatz_fahrzeug)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={500}
                max={100000}
                step={500}
                value={inputs.umsatz_fahrzeug}
                onChange={(e) => handleInputChange('umsatz_fahrzeug', parseInt(e.target.value) || 500)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium font-mono">Durschnittlicher Bruttoumsatz bei 100% Auslastung</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Aktuelle Flottenauslastung</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.auslastung}%</span>
            </label>
            <input
              type="range"
              min={40}
              max={100}
              step={1}
              value={inputs.auslastung}
              onChange={(e) => handleInputChange('auslastung', parseInt(e.target.value) || 40)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Ladevolumen- / Toureneffizienz im Jahresdurchschnitt</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Variable Betriebs- & Dieselkosten</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.betriebskosten}%</span>
            </label>
            <input
              type="range"
              min={15}
              max={70}
              step={1}
              value={inputs.betriebskosten}
              onChange={(e) => handleInputChange('betriebskosten', parseInt(e.target.value) || 15)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Wert in % des Umsatzes</p>
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
                    FLOTTEN EFFIZIENZ SCORE
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
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Bestehender Flottenumsatz</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.aktueller_umsatz_jahr)} / J.</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    (Auslastungsverlust: {formatCHF(results.leerstands_verlust_jahr)} / Jahr)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-red-655 block uppercase">Umsatzverlust vs. 85% Soll-Schnitt</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.optimierungs_marge_jahr > 0 ? `-${formatCHF(results.optimierungs_marge_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Soll-Tourenauslastung nationaler Benchmark: 85%
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Zusatzpotenzial bei +5% Auslastung</span>
                    <p className="text-[10px] text-slate-500 font-semibold">Durch strukturierten B2B-Direktvertrieb gefüllte Touren</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.plus_5_umsatz)} / J.</h4>
                </div>
              </div>

              {/* Diagnostic block */}
              <div className={`p-4 rounded-xl border ${currentStufe.color} space-y-1.5`}>
                <p className="text-xs font-semibold leading-relaxed text-slate-800">
                  {currentStufe.desc}
                </p>
                <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
                  Flotten-Hebel: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte qualifiziere deine Eingaben (mind. 1 Fahrzeug).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Möchtest du Leerfahrten auf lukrativen Strecken minimieren?</strong> In 30 Minuten analysieren wir deinen Direktvertrieb und deine digitale Präsenz.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'logistik-transport',
                cta_type: 'primary',
                optimierungs_marge_jahr: results.optimierungs_marge_jahr
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Touren-Gespräch buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'logistik-transport',
                  optimierungs_marge_jahr: results.optimierungs_marge_jahr,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Umfassende Flottenauswertungs-Report per E-Mail erhalten →</span>
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
                        placeholder="logistik@firma.ch"
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
                        placeholder="Vorname"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Unternehmensname</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Müller Transporte AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Logistik-Schwerpunkt</label>
                      <select
                        value={logistikTyp}
                        onChange={(e) => setLogistikTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Strassentransport / Fracht (national)</option>
                        <option>Internationale Spedition / Luft- & Seefracht</option>
                        <option>Express- / Kurierdienstleistungen</option>
                        <option>Kühllogistik / Pharma-Transporte</option>
                        <option>Lager- & Umzugslogistik</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Report anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Keine Werbeflut. Einmaliger, personalisierter Report samt Schweizer Transportbenchmarks im Logistiksektor.
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
