/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Rocket, Users, CircleDollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  kunden: number;
  mrr_pro_kunde: number;
  vertragsanteil: number;
  churn: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

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
      label: 'Grosses Potenzial',
      desc: 'Ihr wiederkehrender Umsatz ist noch im Aufbau. Ein grosser Teil Ihrer Kunden hat noch keinen Managed-Services-Vertrag, und Kündigungen schmälern Ihre Basis regelmässig. Gerade hier lohnt es sich, systematisch anzusetzen.',
      rec: 'Bestehende Kunden gezielt auf Verträge umstellen, Kündigungssignale früh erkennen und ein CRM einrichten.',
    },
    'aufbauphase': {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-700 text-white',
      label: 'Aufbauphase',
      desc: 'Sie haben eine Basis, aber noch deutlich Luft nach oben. Entweder liegt die Vertragsquote unter dem angenommenen Richtwert von 75%, oder die Kündigungsrate ist hoch, oder beides. Am meisten bringt es meist, sich zuerst auf einen dieser Punkte zu konzentrieren.',
      rec: 'Vertragsquote Richtung 75% entwickeln, regelmässige Jahresgespräche einführen und Kündigungen früh sichtbar machen.',
    },
    'gutes-fundament': {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-700 text-white',
      label: 'Gutes Fundament',
      desc: 'Ihr wiederkehrender Umsatz steht auf einer soliden Basis, nahe am angenommenen Richtwert oder darüber. Weiteres Wachstum kommt aus zwei Quellen: neue Kunden und zusätzliche Leistungen für bestehende Vertragskunden.',
      rec: 'Neukundengewinnung planbar machen, LinkedIn und Fachinhalte nutzen und einen Leitfaden für Zusatzverkäufe erstellen.',
    },
    'scale-ready': {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Bereit für Wachstum',
      desc: 'Ihr wiederkehrender Umsatz ist nach Ihren Angaben sehr gut abgestützt: hohe Vertragsquote, wenige Kündigungen. Jetzt lohnt es sich, die Neukundengewinnung deutlich auszubauen.',
      rec: 'Neukundengewinnung ausbauen, Nachfrage gezielt aufbauen und auf LinkedIn als Fachexperte sichtbar werden.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.aufbauphase;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner IT-Dienstleister</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Rechner für wiederkehrenden Umsatz</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel monatlich wiederkehrender Umsatz (MRR) in Ihren bestehenden Kunden steckt. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
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
              <input aria-label="Aktive Kunden"
                type="number"
                min={5}
                max={500}
                value={inputs.kunden}
                onChange={(e) => handleInputChange('kunden', parseInt(e.target.value) || 5)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Anzahl bestehender Kunden, inklusive Supportkunden</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø MRR pro Vertragskunde</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.mrr_pro_kunde)}</span>
            </label>
            <div className="relative">
              <input aria-label="Ø MRR pro Vertragskunde"
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
            <p className="text-[11px] text-slate-400 font-medium">Monatlicher Umsatz pro Kunde mit festem Vertrag</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Vertragsquote</span>
              <span className="text-[#686DF4] font-semibold">{inputs.vertragsanteil}%</span>
            </label>
            <input aria-label="Vertragsquote"
              type="range"
              min={10}
              max={100}
              step={1}
              value={inputs.vertragsanteil}
              onChange={(e) => handleInputChange('vertragsanteil', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Anteil Kunden mit festem Managed-Services-Vertrag</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Monatliche Kündigungsrate</span>
              <span className="text-[#686DF4] font-semibold font-mono">{inputs.churn}%</span>
            </label>
            <input aria-label="Monatliche Kündigungsrate"
              type="range"
              min={0.5}
              max={10}
              step={0.5}
              value={inputs.churn}
              onChange={(e) => handleInputChange('churn', parseFloat(e.target.value) || 0.5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Anteil wiederkehrender Umsatz, der pro Monat durch Kündigungen wegfällt</p>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="md:col-span-7 space-y-6">
          {results ? (
            <>
              {/* Score Header */}
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

              {/* Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Jährlich wiederkehrender Umsatz heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.aktueller_arr)}</h4>
                  <p className="text-[11px] text-slate-500 leading-normal font-semibold">
                    {formatCHF(results.aktueller_mrr)} / Monat • {Math.round(inputs.kunden * inputs.vertragsanteil / 100)} Kunden mit Vertrag
                  </p>
                </div>

                <div className="bg-green-50 border border-green-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Mögliches Potenzial bei Bestandskunden</span>
                  <h4 className="text-base font-black text-green-700 mt-1">+{formatCHF(results.ungenutztes_arr)} / J.</h4>
                  <p className="text-[11px] text-green-600 leading-normal font-semibold">
                    {inputs.vertragsanteil === 100 ? 'Alle Kunden haben bereits einen Vertrag' : `Grobe Schätzung, wenn alle Kunden einen Vertrag hätten`}
                  </p>
                </div>

                <div className={`sm:col-span-2 border rounded-xl p-4 flex items-center justify-between ${inputs.churn <= 1.5 ? 'bg-green-50/50 border-green-150' : 'bg-red-50/50 border-red-150'}`}>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-slate-500 block uppercase">Umsatzverlust durch Kündigungen pro Jahr</span>
                    <p className="text-[11px] text-slate-400">Vereinfachte Schätzung bei {inputs.churn}% Kündigungsrate pro Monat</p>
                  </div>
                  <h4 className="text-base font-black text-red-700">-{formatCHF(results.churn_verlust_arr)} / J.</h4>
                </div>
              </div>

              {/* Stufen-Diagnose */}
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
            <div className="p-8 text-center border border-dashed border-slate-200 rounded-3xl text-slate-405">
              Bitte geben Sie mindestens 5 Kunden und einen MRR ab CHF 200 ein.
            </div>
          )}
        </div>
      </div>

      {/* CTA section & Lead Form */}
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
                  page: 'it-dienstleister-msps',
                  cta_type: 'primary',
                  ungenutztes_arr: results.ungenutztes_arr,
                  score: results.score,
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
