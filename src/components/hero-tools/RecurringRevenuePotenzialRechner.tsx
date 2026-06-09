/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Rocket, Users, CircleDollarSign, ChevronDown, ChevronUp } from 'lucide-react';

interface Inputs {
  kunden: number;
  mrr_pro_kunde: number;
  vertragsanteil: number;
  churn: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function RecurringRevenuePotenzialRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    kunden: 45,
    mrr_pro_kunde: 1800,
    vertragsanteil: 55,
    churn: 2.5,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [itTyp, setItTyp] = useState('MSP / Managed Services');
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
    const { kunden, mrr_pro_kunde, vertragsanteil, churn } = inputs;
    if (kunden < 5 || mrr_pro_kunde < 200) return null;

    const aktueller_mrr = kunden * (vertragsanteil / 100) * mrr_pro_kunde;
    const aktueller_arr = aktueller_mrr * 12;

    const potenzial_mrr_voll = kunden * mrr_pro_kunde;
    const ungenutztes_mrr = potenzial_mrr_voll - aktueller_mrr;
    const ungenutztes_arr = ungenutztes_mrr * 12;

    const churn_verlust_arr = aktueller_arr * (churn / 100) * 12;

    const BENCH_VERTRAGSANTEIL = 0.75;
    const benchmark_mrr = kunden * BENCH_VERTRAGSANTEIL * mrr_pro_kunde;
    const benchmark_gap_mrr = Math.max(0, benchmark_mrr - aktueller_mrr);
    const benchmark_gap_arr = benchmark_gap_mrr * 12;

    const vertrags_score = Math.min(60, (vertragsanteil / 75) * 60);
    const churn_score = Math.max(0, 40 - (churn - 1.5) * 6);
    const score = Math.round(vertrags_score + churn_score);

    let score_stufe: "ungenutztes-potenzial" | "aufbauphase" | "gutes-fundament" | "scale-ready";
    if (score <= 35) score_stufe = "ungenutztes-potenzial";
    else if (score <= 60) score_stufe = "aufbauphase";
    else if (score <= 80) score_stufe = "gutes-fundament";
    else score_stufe = "scale-ready";

    return {
      aktueller_mrr,
      aktueller_arr,
      potenzial_mrr_voll,
      ungenutztes_mrr,
      ungenutztes_arr,
      churn_verlust_arr,
      benchmark_mrr,
      benchmark_gap_mrr,
      benchmark_gap_arr,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'it-dienstleister-msps', tool: 'recurring-revenue-potenzial-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'it-dienstleister-msps',
          tool: 'recurring-revenue-potenzial-rechner',
          aktueller_arr: results.aktueller_arr,
          ungenutztes_arr: results.ungenutztes_arr,
          churn_verlust_arr: results.churn_verlust_arr,
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
      page: 'it-dienstleister-msps',
      element_id: 'recurring-revenue-potenzial-rechner',
      score_stufe: results?.score_stufe,
      typ: itTyp,
    });
  };

  const stufeConfigs = {
    'ungenutztes-potenzial': {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Wachstumspotenzial ungenutzt',
      desc: 'Dein MRR-Fundament ist noch im Aufbau. Ein grosser Teil deiner Kunden ist nicht auf Managed Service Verträge umgestellt — und die Churn-Rate frisst regelmässig an deiner Basis. Das ist kein Versagen: Wer hier systematisch ansetzt, hat den grössten Hebel aller Phasen.',
      rec: 'Bestandskundenkonvertierung starten, Churn-Signale sichtbar machen, CRM einrichten.',
    },
    'aufbauphase': {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Aufbauphase',
      desc: 'Du hast eine Basis — aber noch deutlich Luft nach oben. Entweder liegt die Vertragsquote unter dem Richtwert (75%), oder die Churn-Rate ist zu hoch, oder beides. Fokus auf einen dieser Hebel bringt den grössten Zuwachs.',
      rec: 'Vertragsquote auf 75% steigern, Jahresgespräche systematisieren, Churn-Frühwarn-Dashboard aufbauen.',
    },
    'gutes-fundament': {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gutes Fundament',
      desc: 'Dein Recurring Revenue Fundament ist solide. Du bist nahe am MSP-Benchmark oder darüber. Das nächste Wachstum kommt aus zwei Quellen: Neukundengewinnung und Upselling bestehender Verträge.',
      rec: 'Neukundenakquise systematisieren, LinkedIn und Content aktivieren, Upselling-Playbook erstellen.',
    },
    'scale-ready': {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Scale-Ready',
      desc: 'Dein MRR-Fundament ist ausgezeichnet. Hohe Vertragsquote, tiefe Churn-Rate — du verlierst wenig und wandelst gut um. Jetzt ist der Moment, die Neukundenakquise kräftig zu skalieren.',
      rec: 'Skalierung der Neukundengewinnung, Demand Generation aufbauen, LinkedIn-Thought-Leadership ausbauen.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.aufbauphase;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">IT REVENUE CALCULATOR</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Recurring Revenue Potenzial-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Analysieren Sie Ihr Bestandsportfolio und berechnen Sie das Potential einer Managed Service Umstellung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Input Fields */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Aktive Kunden</span>
              <span className="text-[#686DF4] font-semibold">{inputs.kunden}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={5}
                max={500}
                value={inputs.kunden}
                onChange={(e) => handleInputChange('kunden', parseInt(e.target.value) || 5)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium">Bestehende Portfolio-Zahl, inklusive Supportkunden</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø MRR pro MS-Kunde</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.mrr_pro_kunde)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={200}
                max={20000}
                step={100}
                value={inputs.mrr_pro_kunde}
                onChange={(e) => handleInputChange('mrr_pro_kunde', parseInt(e.target.value) || 200)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium">Monatlicher Durchschnitt bei festen Verträgen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Vertragsquote</span>
              <span className="text-[#686DF4] font-semibold">{inputs.vertragsanteil}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={1}
              value={inputs.vertragsanteil}
              onChange={(e) => handleInputChange('vertragsanteil', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Anteil Kunden mit festen managed Service Verträgen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Monatliche Churn Rate</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.churn}%</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={10}
              step={0.5}
              value={inputs.churn}
              onChange={(e) => handleInputChange('churn', parseFloat(e.target.value) || 0.5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">Wertverlust durch Kündigungen/Soll-Abwanderung</p>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="md:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score Header */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 block uppercase">
                    MRR DIAGNOSE SCORE
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Aktueller ARR</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.aktueller_arr)}</h4>
                  <p className="text-[9.5px] text-slate-500 leading-normal font-semibold">
                    {formatCHF(results.aktueller_mrr)} / Monat • {Math.round(inputs.kunden * inputs.vertragsanteil / 100)} Kunden konvertiert
                  </p>
                </div>

                <div className="bg-green-50 border border-green-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Ungenutztes Bestandspotenzial</span>
                  <h4 className="text-base font-black text-green-700 mt-1">+{formatCHF(results.ungenutztes_arr)} / J.</h4>
                  <p className="text-[9.5px] text-green-600 leading-normal font-semibold">
                    {inputs.vertragsanteil === 100 ? 'Alle Kunden auf Managed Service' : `Zusatz bei 100% Umstellquote`}
                  </p>
                </div>

                <div className={`sm:col-span-2 border rounded-xl p-4 flex items-center justify-between ${inputs.churn <= 1.5 ? 'bg-green-50/50 border-green-150' : 'bg-red-50/50 border-red-150'}`}>
                  <div>
                    <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase">Flaschenhals: Jährlicher Churn-Ausfall</span>
                    <p className="text-[9.5px] text-slate-400">Bei aktuellen {inputs.churn}% Churn wird MRR-Zuwachs behindert</p>
                  </div>
                  <h4 className="text-base font-black text-red-600">-{formatCHF(results.churn_verlust_arr)} / J.</h4>
                </div>
              </div>

              {/* Stufen-Diagnose */}
              <div className={`p-4 rounded-xl border ${currentStufe.color} space-y-1.5`}>
                <p className="text-xs font-semibold leading-relaxed text-slate-800">
                  {currentStufe.desc}
                </p>
                <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
                  Beste Massnahme: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center border border-dashed border-slate-200 rounded-3xl text-slate-405">
              Bitte qualifizieren Sie Ihre Eingabewerte (mind. 5 Kunden).
            </div>
          )}
        </div>
      </div>

      {/* CTA section & Lead Form */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Wie viel ungenutztes MRR liegt in deinem Portfolio?</strong> In 30 Minuten ermitteln wir deine Potenziale und erstellen ein klares Massnahmen-Playbook.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'it-dienstleister-msps',
                cta_type: 'primary',
                ungenutztes_arr: results.ungenutztes_arr,
                score: results.score,
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              MRR-Gespräch buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'it-dienstleister-msps',
                  ungenutztes_arr: results.ungenutztes_arr,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Umfassende MRR-Analyse per E-Mail erhalten →</span>
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
                        placeholder="it@firma.ch"
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
                        placeholder="Systemhaus / MSP AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Infrastruktur-Typ</label>
                      <select
                        value={itTyp}
                        onChange={(e) => setItTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>MSP / Managed Services</option>
                        <option>Cloud-Anbieter / Hosting</option>
                        <option>IT-Support / Systemhaus</option>
                        <option>Cybersecurity-Dienstleister</option>
                        <option>Anderer IT-Dienstleister</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Analyse kostenlos senden
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Wir halten deine Daten sicher. Einmalige MRR-Kalkulation und Branchenbenchmarks per E-Mail.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-bold text-xs">
                    Kombination erhalten! Der personalisierte MRR-Report ist auf dem Weg in deinen Posteingang.
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
