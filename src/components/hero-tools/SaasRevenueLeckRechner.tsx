/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, AlertCircle, CheckCircle, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  trials: number;
  conversion: number;
  mrr_pro_account: number;
  churn: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

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
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben geht an zwei Stellen Umsatz verloren: bei der Umwandlung von Tests in zahlende Kunden und bei Kündigungen.',
      btnText: 'Ergebnis besprechen',
    },
    aufbauphase: {
      color: 'text-amber-700 bg-amber-50 border-amber-200/50',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-200',
      label: 'Aufbauphase',
      desc: 'Die Grundlagen sind da, es bleibt aber noch spürbar Potenzial.',
      btnText: 'Ergebnis besprechen',
    },
    wachstumsmodus: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-100 text-green-800 border-green-200',
      label: 'Gut aufgestellt',
      desc: 'Ihr Anfrageprozess funktioniert gut und liegt nahe an den angenommenen Richtwerten.',
      btnText: 'Ergebnis besprechen',
    },
    scale_ready: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      label: 'Bereit für Wachstum',
      desc: 'Umwandlung und Kundenbindung liegen über den angenommenen Richtwerten.',
      btnText: 'Ergebnis besprechen',
    },
  };

  const config = results ? stufeConfigs[results.stufe] : stufeConfigs.aufbauphase;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800">
      <div className="border-b border-slate-100 pb-5">
        <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">Umsatzverlust-Rechner für Software-Anbieter</h3>
        <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">
          Schätzen Sie, wie viel Umsatz durch wenige Abschlüsse nach dem Test und durch Kündigungen verloren geht. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Inputs */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Tests (Trials) / Monat</span>
              <span className="text-[#686DF4]">{inputs.trials}</span>
            </label>
            <input aria-label="Tests (Trials) / Monat"
              type="number"
              min={5}
              max={2000}
              value={inputs.trials}
              onChange={(e) => handleInputChange('trials', parseInt(e.target.value) || 5)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Alle Testanmeldungen und Demo-Anfragen zusammen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Umwandlung Test → zahlend</span>
              <span className="text-[#686DF4] font-mono">{inputs.conversion}%</span>
            </label>
            <input aria-label="Umwandlung Test → zahlend"
              type="range"
              min={1}
              max={60}
              value={inputs.conversion}
              onChange={(e) => handleInputChange('conversion', parseInt(e.target.value) || 1)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium flex justify-between">
              <span>Richtwert (Annahme): 18–25%</span>
              <span className="font-mono text-[#686DF4]/80">Annahme: 22%</span>
            </p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Ø MRR pro Kunde</span>
              <span className="text-[#686DF4]">{formatCHF(inputs.mrr_pro_account)}</span>
            </label>
            <input aria-label="Ø MRR pro Kunde"
              type="number"
              min={50}
              max={5000}
              step={10}
              value={inputs.mrr_pro_account}
              onChange={(e) => handleInputChange('mrr_pro_account', parseInt(e.target.value) || 50)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none focus:border-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Durchschnittlicher monatlicher Umsatz je zahlendem Kunden</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-850 uppercase tracking-widest flex justify-between">
              <span>Monatliche Kündigungsrate</span>
              <span className="text-[#686DF4] font-mono">{inputs.churn}%</span>
            </label>
            <input aria-label="Monatliche Kündigungsrate"
              type="range"
              min={0.5}
              max={15}
              step={0.5}
              value={inputs.churn}
              onChange={(e) => handleInputChange('churn', parseFloat(e.target.value) || 0.5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium flex justify-between">
              <span>Richtwert (Annahme): 1–2%</span>
              <span className="font-mono text-[#686DF4]/80">Annahme: 2%</span>
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
                  <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 block uppercase">Effizienz-Wert</span>
                  <div className="text-3xl font-black text-slate-900 leading-none mt-1">{results.gesamt_score} <span className="text-xs text-slate-400 font-bold">/ 100</span></div>
                </div>
                <div className={`px-3 py-1 rounded-full text-[11px] font-mono font-black border ${config.badgeBg}`}>
                  {config.label}
                </div>
              </div>

              {/* Kacheln */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50/50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Verlust bei Umwandlung</span>
                  <h4 className="text-sm font-bold text-red-700 mt-1">{formatCHFKompakt(results.conversion_leck_arr)} / Jahr</h4>
                </div>

                <div className="bg-slate-50/50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Verlust durch Kündigungen</span>
                  <h4 className="text-sm font-bold text-red-700 mt-1">{formatCHFKompakt(results.churn_leck_arr)} / Jahr</h4>
                </div>

                <div className="sm:col-span-2 bg-[#686DF4]/5 border border-[#CACCFB]/40 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-wider block">Mögliches Potenzial pro Jahr</span>
                    <p className="text-[11px] text-slate-400 font-semibold mb-1">Annahme: 22% Umwandlung, 2% Kündigungen</p>
                  </div>
                  <h4 className="text-xl font-black text-[#686DF4]">{formatCHFKompakt(results.arr_potenzial)} / Jahr</h4>
                </div>
              </div>

              {/* Benchmark bars */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Vergleich mit Richtwert</span>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span>Umwandlung</span>
                    <span>{inputs.conversion}% <span className="text-slate-400 text-[11px]">(Richtwert 22%)</span></span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#686DF4] h-full" style={{ width: `${Math.min(100, (inputs.conversion / 22) * 100)}%` }} />
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span>Kündigungsrate</span>
                    <span>{inputs.churn}% <span className="text-slate-400 text-[11px]">(Richtwert 2%)</span></span>
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
                  {results.stufe === 'kritisch' && `Bei ${inputs.conversion}% Umwandlung und ${inputs.churn}% monatlicher Kündigungsrate liegt der jährliche Verlust grob geschätzt bei ${formatCHF(results.total_leck_arr)}. Das deutet auf ein grundsätzliches Problem in der Vermarktung hin. Am meisten bringen meist: Interessenten nach dem Test weiterbegleiten, Anfragen nach Abschlusschance bewerten und ein sauberes CRM.`}
                  {results.stufe === 'aufbauphase' && `Mit den angenommenen Richtwerten wären grob geschätzt ${formatCHFKompakt(results.arr_potenzial)} mehr Jahresumsatz möglich. Ansatzpunkte: E-Mail-Serien, die Testnutzer weiterbegleiten, und eine genaue Analyse der Kündigungen.`}
                  {results.stufe === 'wachstumsmodus' && `Mit ${inputs.conversion}% Umwandlung und ${inputs.churn}% Kündigungsrate liegen Sie nahe an den angenommenen Richtwerten. Der nächste Schritt: mehr qualifizierte Testanmeldungen, etwa durch gezielte Ansprache von Wunschkunden.`}
                  {results.stufe === 'scale_ready' && `Ihre Werte liegen über den angenommenen Richtwerten. Damit kann es sich lohnen, mehr Budget in die Gewinnung neuer Interessenten zu stecken.`}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte geben Sie mindestens 5 Tests und einen MRR ab CHF 50 ein.
            </div>
          )}
        </div>
      </div>

      {/* CTA Bottom Call */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left max-w-md">
              <h5 className="text-xs font-bold text-slate-900 leading-tight">Ergebnis gemeinsam einordnen.</h5>
              <p className="text-[11px] text-slate-450 leading-relaxed mt-0.5 font-semibold">
                In einem kostenlosen Erstgespräch von 30 Minuten schauen wir Ihre Zahlen an und besprechen, wo bei Ihnen der grösste Hebel liegt.
              </p>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                track('hero_tool_cta_clicked', {
                  page: 'saas-software',
                  element_id: 'saas-revenue-leck-rechner',
                  stufe: results.stufe,
                  cta: 'primary',
                });
                window.dispatchEvent(new CustomEvent('open-contact-modal'));
              }}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer border-0"
            >
              {config.btnText}
            </button>
          </div>

          {/* E-mail capture collapsible */}

        </div>
      )}
    </div>
  );
}
