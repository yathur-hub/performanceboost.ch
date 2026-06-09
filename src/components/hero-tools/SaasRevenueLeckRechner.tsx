/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, AlertCircle, CheckCircle, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

interface Inputs {
  trials: number;
  conversion: number;
  mrr_pro_account: number;
  churn: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function SaasRevenueLeckRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    trials: 80,
    conversion: 15,
    mrr_pro_account: 290,
    churn: 3.5,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setOpenAccordion] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [trialBucket, setTrialBucket] = useState('20–100 Trials');
  const [arrBucket, setArrBucket] = useState('CHF 100k–500k');
  const [formSubmitted, setFormSubbed] = useState(false);

  const formatCHF = (value: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatCHFKompakt = (value: number) => {
    if (value >= 1000000) {
      return 'CHF ' + (value / 1000000).toFixed(1).replace('.', '.') + ' Mio.';
    }
    if (value >= 100000) {
      return 'CHF ' + Math.round(value / 1000) + "'000";
    }
    return formatCHF(value);
  };

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'saas-software', element_id: 'saas-revenue-leck-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      track('hero_tool_output_shown', {
        page: 'saas-software',
        element_id: 'saas-revenue-leck-rechner',
        conversion: next.conversion,
        churn: next.churn,
        trials: next.trials,
        mrr_pro_account: next.mrr_pro_account,
      });
      return next;
    });
  };

  const results = useMemo(() => {
    const { trials, conversion, mrr_pro_account, churn } = inputs;
    if (!trials || !mrr_pro_account || trials < 5 || mrr_pro_account < 50) return null;

    // --- Aktuell ---
    const neue_accounts = trials * (conversion / 100);
    const neuer_mrr = neue_accounts * mrr_pro_account;
    const churn_verlust_mrr = (neue_accounts * 12 * mrr_pro_account) * (churn / 100);
    const aktueller_arr = neue_accounts * mrr_pro_account * 12;

    // --- Benchmark: 22% Conversion, 2% Churn ---
    const benchmark_accounts = trials * 0.22;
    const benchmark_mrr = benchmark_accounts * mrr_pro_account;
    const benchmark_churn = (benchmark_accounts * 12 * mrr_pro_account) * 0.02;
    const benchmark_arr = benchmark_accounts * mrr_pro_account * 12;

    // --- Revenue-Leck ---
    const conversion_leck_mrr = Math.max(0, (benchmark_accounts - neue_accounts) * mrr_pro_account);
    const churn_leck_arr = Math.max(0, churn_verlust_mrr * 12 - benchmark_churn * 12);
    const total_leck_arr = Math.max(0, conversion_leck_mrr * 12 + churn_leck_arr);
    const arr_potenzial = Math.max(0, benchmark_arr - aktueller_arr);

    // --- Score ---
    const conv_score = Math.min(70, (conversion / 22) * 70);
    const churn_score = Math.max(0, 30 - Math.max(0, (churn - 2) * 5));
    const gesamt_score = Math.round(conv_score + churn_score);

    let stufe: 'kritisch' | 'aufbauphase' | 'wachstumsmodus' | 'scale_ready' = 'aufbauphase';
    if (gesamt_score <= 30) stufe = 'kritisch';
    else if (gesamt_score <= 55) stufe = 'aufbauphase';
    else if (gesamt_score <= 80) stufe = 'wachstumsmodus';
    else stufe = 'scale_ready';

    return {
      neue_accounts: Math.round(neue_accounts),
      neuer_mrr,
      aktueller_arr,
      benchmark_arr,
      conversion_leck_arr: conversion_leck_mrr * 12,
      churn_leck_arr,
      total_leck_arr,
      arr_potenzial,
      gesamt_score,
      stufe,
      benchmark_accounts: Math.round(benchmark_accounts),
      conv_score: Math.round(conv_score),
      churn_score: Math.round(churn_score),
    };
  }, [inputs]);

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setFormSubbed(true);
    track('hero_tool_lead_captured', {
      page: 'saas-software',
      element_id: 'saas-revenue-leck-rechner',
      stufe: results?.stufe,
      total_leck_arr: results?.total_leck_arr,
      arr_bucket: arrBucket,
      trial_bucket: trialBucket,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-100 text-red-800 border-red-200',
      label: 'KRITISCH',
      desc: 'Euer Funnel verliert auf beiden Fronten: Conversion und Retention.',
      btnText: 'Revenue-Leck beheben — Strategy-Call buchen',
    },
    aufbauphase: {
      color: 'text-amber-700 bg-amber-50 border-amber-200/50',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
      label: 'AUFBAUPHASE',
      desc: 'Euer Funnel ist in der Aufbauphase — Grundstrukturen sind da.',
      btnText: 'ARR-Potenzial ausschöpfen — Strategy-Call buchen',
    },
    wachstumsmodus: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-100 text-green-800 border-green-200',
      label: 'WACHSTUMSMODUS',
      desc: 'Euer Funnel funktioniert gut — ihr seid nahe am Benchmark.',
      btnText: 'Skalierungsstrategie besprechen',
    },
    scale_ready: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      label: 'SCALE-READY',
      desc: 'Starke Funnel-Gesundheit. Conversion und Retention über Benchmark.',
      btnText: 'Skalierungspfad besprechen — Strategy-Call buchen',
    },
  };

  const config = results ? stufeConfigs[results.stufe] : stufeConfigs.aufbauphase;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800">
      <div className="border-b border-slate-100 pb-5">
        <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">SaaS Revenue-Leck-Rechner</h3>
        <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">
          Berechne monatliche und jährliche Verluste durch schlechte Trial-to-Paid Conversion und Churn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Inputs */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Trials/Monat</span>
              <span className="text-[#686DF4]">{inputs.trials}</span>
            </label>
            <input
              type="number"
              min={5}
              max={2000}
              value={inputs.trials}
              onChange={(e) => handleInputChange('trials', parseInt(e.target.value) || 5)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#686DF4]"
            />
            <p className="text-[9.5px] text-slate-400 font-medium">Alle Trial-Signups und Demo-Requests kombiniert</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Trial-to-Paid CR</span>
              <span className="text-[#686DF4] font-mono">{inputs.conversion}%</span>
            </label>
            <input
              type="range"
              min={1}
              max={60}
              value={inputs.conversion}
              onChange={(e) => handleInputChange('conversion', parseInt(e.target.value) || 1)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9.5px] text-slate-400 font-medium flex justify-between">
              <span>B2B-SaaS Benchmark: 18–25%</span>
              <span className="font-mono text-[#686DF4]/80">Marker: 22%</span>
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Ø MRR pro Account</span>
              <span className="text-[#686DF4]">{formatCHF(inputs.mrr_pro_account)}</span>
            </label>
            <input
              type="number"
              min={50}
              max={5000}
              step={10}
              value={inputs.mrr_pro_account}
              onChange={(e) => handleInputChange('mrr_pro_account', parseInt(e.target.value) || 50)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#686DF4]"
            />
            <p className="text-[9.5px] text-slate-400 font-medium">Durchschnittlicher MRR je zahlendem Kunden</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Monatliche Churn Rate</span>
              <span className="text-[#686DF4] font-mono">{inputs.churn}%</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={15}
              step={0.5}
              value={inputs.churn}
              onChange={(e) => handleInputChange('churn', parseFloat(e.target.value) || 0.5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9.5px] text-slate-400 font-medium flex justify-between">
              <span>Schnitt: 1–2%</span>
              <span className="font-mono text-[#686DF4]/80">Marker: 2%</span>
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="md:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score Header */}
              <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 block uppercase">FUNNEL SCORE</span>
                  <div className="text-3xl font-black text-slate-900 leading-none mt-1">{results.gesamt_score} <span className="text-xs text-slate-400 font-bold">/ 100</span></div>
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-mono font-black border ${config.badgeBg}`}>
                  {config.label}
                </div>
              </div>

              {/* Kacheln */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50/50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Conversion-Leck (ARR)</span>
                  <h4 className="text-sm font-bold text-red-600 mt-1">{formatCHFKompakt(results.conversion_leck_arr)} / Jahr</h4>
                </div>

                <div className="bg-slate-50/50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Retention-Leck (ARR)</span>
                  <h4 className="text-sm font-bold text-red-600 mt-1">{formatCHFKompakt(results.churn_leck_arr)} / Jahr</h4>
                </div>

                <div className="sm:col-span-2 bg-[#686DF4]/5 border border-[#CACCFB]/40 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold text-[#686DF4] uppercase tracking-wider block">Gesamtes ARR-Potenzial</span>
                    <p className="text-[10px] text-slate-400 font-semibold mb-1">Bei Benchmark-Niveau (22% Conv, 2% Churn)</p>
                  </div>
                  <h4 className="text-xl font-black text-[#686DF4]">{formatCHFKompakt(results.arr_potenzial)} / Jahr</h4>
                </div>
              </div>

              {/* Benchmark bars */}
              <div className="space-y-2 pt-2">
                <span className="text-[9.5px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Benchmark-Vergleich</span>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span>Conversion Rate</span>
                    <span>{inputs.conversion}% <span className="text-slate-400 text-[10px]">(vs 22% Bench)</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#686DF4] h-full" style={{ width: `${Math.min(100, (inputs.conversion / 22) * 100)}%` }} />
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span>Churn Rate</span>
                    <span>{inputs.churn}% <span className="text-slate-400 text-[10px]">(vs 2% Bench)</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    {/* Higher churn is worse, so fill gets colored red if high */}
                    <div className={`${inputs.churn > 2 ? 'bg-red-500' : 'bg-green-500'} h-full`} style={{ width: `${Math.min(100, (2 / inputs.churn) * 100)}%` }} />
                  </div>
                </div>
              </div>

              {/* Diagnostics */}
              <div className={`p-4 sm:p-5 rounded-2xl border ${config.color} space-y-2`}>
                <h5 className="text-xs font-bold text-slate-900">{config.desc}</h5>
                <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                  {results.stufe === 'kritisch' && `Bei ${inputs.conversion}% Trial-to-Paid und ${inputs.churn}% monatlichem Churn liegt das jährliche Revenue-Leck bei ${formatCHF(results.total_leck_arr)}. Das ist ein strukturelles Go-to-Market-Problem: Nurturing, Lead Scoring und CRM-Setup sind eure stärksten Hebel.`}
                  {results.stufe === 'aufbauphase' && `Bei Benchmark-Werten wäre ein ARR-Potenzial von ${formatCHFKompakt(results.arr_potenzial)} zusätzlich erreichbar. Die grössten Hebel: Nurturing-Sequenzen und Churn-Analyse.`}
                  {results.stufe === 'wachstumsmodus' && `Mit ${inputs.conversion}% Conversion und ${inputs.churn}% Churn arbeitet ihr nahe am Optimum. Das nächste Level ist die Skalierung des Inputs (mehr qualifizierte Trials durch ABM).`}
                  {results.stufe === 'scale_ready' && `Euer Funnel ist voll skalierungsfähig. Jetzt könnt ihr euer Demand-Gen Budget erhöhen, ohne Angst vor Churn-Leaks.`}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte gib gültige Werte für Trials und MRR ein.
            </div>
          )}
        </div>
      </div>

      {/* CTA Bottom Call */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left max-w-md">
              <h5 className="text-xs font-bold text-slate-900 leading-tight">Wie viel Pipeline verliert ihr gerade?</h5>
              <p className="text-[10px] text-slate-450 leading-relaxed mt-0.5 font-semibold">
                In einem 30-minütigen Gespräch analysieren wir eure Zahlen strukturiert. Kein Pitch, kein Theater.
              </p>
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'saas-software',
                element_id: 'saas-revenue-leck-rechner',
                stufe: results.stufe,
                cta: 'primary',
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              {config.btnText}
            </a>
          </div>

          {/* E-mail capture collapsible */}
          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/30">
            <button
              onClick={() => setOpenAccordion(!accordionOpen)}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Ergebnisse &amp; konkrete nächste Schritte per E-Mail erhalten</span>
              {accordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-450" />}
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
                        placeholder="deine.mail@firma.ch"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Vorname</label>
                      <input
                        type="text"
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                        placeholder="Vorname"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Aktueller ARR</label>
                      <select
                        value={arrBucket}
                        onChange={(e) => setArrBucket(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Unter CHF 100k</option>
                        <option>CHF 100k–500k</option>
                        <option>CHF 500k–2M</option>
                        <option>Über CHF 2M</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Unternehmensname</label>
                      <input
                        type="text"
                        value={companySub}
                        onChange={(e) => setCompanySub(e.target.value)}
                        placeholder="Firma AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Ergebnisse jetzt zusenden
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Kein Newsletter. Einmalige Zusendung eurer berechneten Zahlen mit konkreten Analyse-Ideen.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                    Vielen Dank! Die Auswertung mit deinen individuellen Werten wird zusammengestellt und ist in Kürze in deinem Posteingang.
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
