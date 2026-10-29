/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Rocket, Gauge, ChevronUp, ChevronDown, Inbox, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  anfragen: number;
  angebotsquote: number;
  abschlussquote: number;
  auftragswert: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function AngebotsPipelineRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    anfragen: 25,
    angebotsquote: 60,
    abschlussquote: 28,
    auftragswert: 35000,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [branche, setBranche] = useState('Metallbau / Maschinenbau');
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
    const { anfragen, angebotsquote, abschlussquote, auftragswert } = inputs;

    const angebote_monat = anfragen * (angebotsquote / 100);
    const abschluesse_monat = angebote_monat * (abschlussquote / 100);
    const revenue_monat = abschluesse_monat * auftragswert;
    const revenue_jahr = revenue_monat * 12;

    const BENCH_ANGEBOTSQUOTE = 0.70;
    const BENCH_ABSCHLUSSQUOTE = 0.35;

    const benchmark_angebote = anfragen * BENCH_ANGEBOTSQUOTE;
    const benchmark_abschluesse = benchmark_angebote * BENCH_ABSCHLUSSQUOTE;
    const benchmark_revenue_monat = benchmark_abschluesse * auftragswert;
    const benchmark_revenue_jahr = benchmark_revenue_monat * 12;

    const leck_monat = Math.max(0, benchmark_revenue_monat - revenue_monat);
    const leck_jahr = leck_monat * 12;

    const optimiert_abschluesse = angebote_monat * ((abschlussquote + 10) / 100);
    const optimiert_revenue_jahr = optimiert_abschluesse * auftragswert * 12;
    const follow_up_potenzial = Math.max(0, optimiert_revenue_jahr - revenue_jahr);

    const angebots_score = Math.min(50, (angebotsquote / 70) * 50);
    const abschluss_score = Math.min(50, (abschlussquote / 35) * 50);
    const effizienz_score = Math.round(angebots_score + abschluss_score);

    let score_stufe: 'kritisch' | 'potenzial' | 'gut' | 'top';
    if (effizienz_score <= 40) score_stufe = 'kritisch';
    else if (effizienz_score <= 65) score_stufe = 'potenzial';
    else if (effizienz_score <= 85) score_stufe = 'gut';
    else score_stufe = 'top';

    return {
      angebote_monat,
      abschluesse_monat,
      revenue_monat,
      revenue_jahr,
      benchmark_angebote,
      benchmark_abschluesse,
      benchmark_revenue_monat,
      benchmark_revenue_jahr,
      leck_monat,
      leck_jahr,
      optimiert_abschluesse,
      optimiert_revenue_jahr,
      follow_up_potenzial,
      effizienz_score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'b2b-industrie-kmu', tool: 'angebots-pipeline-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      track('hero_tool_output_shown', {
        page: 'b2b-industrie-kmu',
        tool: 'angebots-pipeline-rechner',
        revenue_jahr: results.revenue_jahr,
        leck_jahr: results.leck_jahr,
        follow_up_potenzial: results.follow_up_potenzial,
        effizienz_score: results.effizienz_score,
        score_stufe: results.score_stufe,
      });
      return next;
    });
  };

  const handleSubmitLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub || !nameSub) return;
    setFormSubbed(true);
    track('hero_tool_lead_captured', {
      page: 'b2b-industrie-kmu',
      element_id: 'angebots-pipeline-rechner',
      score_stufe: results.score_stufe,
      branche: branche,
    });
  };

  const stufenConfig = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben geht zwischen Anfrage und Auftrag deutlich mehr Umsatz verloren als nötig. Oft helfen schon einfache Schritte: Offerten konsequent nachfassen und einen klaren Ablauf für Angebote festlegen. Der grösste Hebel ist meist nicht die bessere Offerte, sondern dass überhaupt nachgefasst wird.',
      rec: `CRM einrichten, Ablauf für das Nachfassen festlegen und die Abschlussquote schrittweise von ${inputs.abschlussquote}% Richtung 35% entwickeln.`,
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihr Weg von der Anfrage zum Auftrag funktioniert, es bleibt aber spürbar Umsatz liegen. Häufige Ursachen sind Lücken beim Nachfassen oder eine unklare erste Einschätzung der Anfragen. Hier lohnt es sich, gezielt anzusetzen.',
      rec: 'Nachfassen systematisch regeln, Interessenten bei langen Entscheidungszeiten weiterbegleiten und das CRM konsequenter nutzen.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/60',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut, aber ausbaufähig',
      desc: 'Ihre Quoten liegen nahe an den angenommenen Richtwerten oder darüber. Das ist eine solide Basis. Als Nächstes geht es darum, mehr passende Anfragen zu gewinnen und die Abschlussquote weiter zu verbessern.',
      rec: 'Mehr qualifizierte Anfragen gewinnen, Wunschkunden gezielt ansprechen und Interessenten weiterbegleiten.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Sie machen nach Ihren Angaben bereits sehr viel aus Ihren Anfragen. Weiteres Wachstum kommt jetzt vor allem über die Menge: mehr qualifizierte Anfragen bei gleicher Abschlussquote.',
      rec: 'Fokus auf neue Anfragen: mehr Wunschkunden erreichen, die Sie dann zuverlässig abschliessen.',
    },
  };

  const currentStufe = stufenConfig[results.score_stufe];

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Industrie</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Offerten-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel Umsatz zwischen Anfrage, Offerte und Auftrag verloren geht. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Column Fields */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anfragen pro Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.anfragen}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={1}
                max={500}
                value={inputs.anfragen}
                onChange={(e) => handleInputChange('anfragen', parseInt(e.target.value) || 1)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Inbox className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Alle eingehenden Kundenanfragen</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Angebotsquote</span>
              <span className="text-[#686DF4] font-semibold">{inputs.angebotsquote}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={inputs.angebotsquote}
              onChange={(e) => handleInputChange('angebotsquote', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Richtwert (Annahme): 70% der Anfragen werden zu Offerten</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Abschlussquote</span>
              <span className="text-[#686DF4] font-semibold">{inputs.abschlussquote}%</span>
            </label>
            <input
              type="range"
              min={5}
              max={80}
              step={1}
              value={inputs.abschlussquote}
              onChange={(e) => handleInputChange('abschlussquote', parseInt(e.target.value) || 5)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Richtwert (Annahme): 35% der Offerten führen zum Auftrag</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Auftragswert (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.auftragswert)}</span>
            </label>
            <div className="relative">
              <input
                type="number"
                min={1000}
                max={2000000}
                step={1000}
                value={inputs.auftragswert}
                onChange={(e) => handleInputChange('auftragswert', parseInt(e.target.value) || 1000)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium font-mono">Durchschnittlicher Auftragswert in CHF</p>
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                Effizienz-Wert
              </span>
              <div className="text-2xl font-black text-slate-905">{results.effizienz_score} / 100</div>
            </div>
            <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
              {currentStufe.label}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
              <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Jahresumsatz aus Anfragen heute</span>
              <h4 className="text-lg font-black text-slate-900 mt-1">{formatCHF(results.revenue_jahr)}</h4>
              <p className="text-[11px] text-slate-450 leading-relaxed font-semibold">
                {results.abschluesse_monat.toFixed(1)} Abschlüsse/Mt à {formatCHF(inputs.auftragswert)}
              </p>
            </div>

            <div className={`border rounded-xl p-4 ${results.leck_jahr > 0 ? 'bg-red-50 border-red-100' : 'bg-green-50 border-green-150'}`}>
              <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Abstand zum Richtwert</span>
              <h4 className={`text-lg font-black mt-1 ${results.leck_jahr > 0 ? 'text-red-600' : 'text-green-700'}`}>
                {results.leck_jahr > 0 ? `-${formatCHF(results.leck_jahr)} / J.` : 'Auf oder über Richtwert'}
              </h4>
              <p className="text-[11px] text-slate-450 font-semibold leading-relaxed">
                Annahme: 70% Offertquote / 35% Abschlussquote
              </p>
            </div>

            <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich durch konsequentes Nachfassen</span>
                <p className="text-[11px] text-slate-450 font-semibold">Geschätztes Plus, wenn die Abschlussquote um 10 Prozentpunkte steigt</p>
              </div>
              <h4 className="text-lg font-black text-green-700 ml-4">+{formatCHF(results.follow_up_potenzial)} / J.</h4>
            </div>
          </div>

          {/* Diagnostic Text */}
          <div className={`p-4 sm:p-5 rounded-2xl border ${currentStufe.color} space-y-2`}>
            <p className="text-xs font-semibold leading-relaxed text-slate-800">
              {currentStufe.desc}
            </p>
            <p className="text-xs font-bold text-slate-900 pt-1 border-t border-slate-100/50 font-mono">
              Empfehlung: {currentStufe.rec}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Box and collapsible Email */}
      <div className="border-t border-slate-100 pt-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="text-left font-semibold text-slate-500 text-[11px] leading-relaxed max-w-md">
            <strong>Ergebnis gemeinsam einordnen.</strong> In einem kostenlosen Erstgespräch von 30 Minuten schauen wir Ihre Zahlen an und besprechen, wo bei Ihnen der grösste Hebel liegt.
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              track('hero_tool_cta_clicked', {
                page: 'b2b-industrie-kmu',
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

        {/* Lead Capture */}

      </div>
    </div>
  );
}
