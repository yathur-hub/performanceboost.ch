/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Rocket, Briefcase, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  mandate: number;
  placements: number;
  provision: number;
  marketing_anteil: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function PlacementEffizienzRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    mandate: 8,
    placements: 3,
    provision: 12000,
    marketing_anteil: 20,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [companySub, setCompanySub] = useState('');
  const [agenturTyp, setAgenturTyp] = useState('Recruiting-Agentur (Direktvermittlung)');
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
    const { mandate, placements, provision, marketing_anteil } = inputs;
    if (mandate < 1 || provision < 2000) return null;

    // Placements cannot exceed mandates
    const safePlacements = Math.min(mandate, placements);

    const placement_rate = (safePlacements / mandate) * 100;
    const monatlicher_umsatz = safePlacements * provision;
    const jahresumsatz = monatlicher_umsatz * 12;

    const benchmark_placements = mandate * 0.45;
    const benchmark_umsatz_monat = benchmark_placements * provision;
    const placement_leck_monat = Math.max(0, benchmark_umsatz_monat - monatlicher_umsatz);
    const placement_leck_jahr = placement_leck_monat * 12;

    const marketing_gap = Math.max(0, 35 - marketing_anteil);

    const optimiert_placements = mandate * ((placement_rate + 10) / 100);
    const potenzial_jahr = Math.max(0, (optimiert_placements - safePlacements) * provision * 12);

    const placement_score = Math.min(70, (placement_rate / 45) * 70);
    const marketing_score = Math.min(30, (marketing_anteil / 35) * 30);
    const score = Math.round(placement_score + marketing_score);

    let score_stufe: "kritisch" | "potenzial" | "gut" | "top";
    if (score <= 35) score_stufe = "kritisch";
    else if (score <= 60) score_stufe = "potenzial";
    else if (score <= 80) score_stufe = "gut";
    else score_stufe = "top";

    return {
      placement_rate,
      monatlicher_umsatz,
      jahresumsatz,
      benchmark_placements,
      benchmark_umsatz_monat,
      placement_leck_monat,
      placement_leck_jahr,
      marketing_gap,
      optimiert_placements,
      potenzial_jahr,
      placement_score,
      marketing_score,
      score,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'personalvermittler-recruiting', tool: 'placement-effizienz-rechner' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      if (results) {
        track('hero_tool_output_shown', {
          page: 'personalvermittler-recruiting',
          tool: 'placement-effizienz-rechner',
          jahresumsatz: results.jahresumsatz,
          placement_leck_jahr: results.placement_leck_jahr,
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
      page: 'personalvermittler-recruiting',
      placement_leck_jahr: results?.placement_leck_jahr,
      score: results?.score,
      score_stufe: results?.score_stufe,
      agenturtyp: agenturTyp,
    });
  };

  const stufeConfigs = {
    kritisch: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      label: 'Grosses Potenzial',
      desc: 'Nach Ihren Angaben gibt es deutliche Lücken bei der Vermittlungsquote oder bei der Gewinnung neuer Mandate. Oft helfen schon ein sauber geführtes CRM und konsequentes Nachfassen nach Erstgesprächen, um aus denselben Mandaten mehr Vermittlungen zu machen.',
      rec: 'Nachfassen automatisieren, offene Mandate im CRM bereinigen und auf LinkedIn gezielt neue Auftraggeber ansprechen.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-700 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Sie haben eine funktionierende Basis, es bleibt aber spürbar Umsatz liegen. Häufig fehlt ein systematisches Nachfassen oder ein Kanal für neue Mandate, der über das persönliche Netzwerk hinausgeht.',
      rec: 'Nach Offerten systematisch nachfassen, Inhalte aufbauen, die Anfragen bringen, und das CRM einheitlich nutzen.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-700 text-white',
      label: 'Gut aufgestellt',
      desc: 'Ihre Werte liegen nahe an den angenommenen Richtwerten oder darüber. Als Nächstes geht es darum, mehr Mandate zu gewinnen und die Vermittlungsquote weiter zu verbessern.',
      rec: 'Mit Inhalten und LinkedIn mehr Mandate gewinnen und die Direktansprache auf neue Zielbranchen ausweiten.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Sehr gut aufgestellt',
      desc: 'Ihre Vermittlungsquote und Mandatsgewinnung sind nach Ihren Angaben sehr gut. Weiteres Wachstum kommt vor allem über mehr qualifizierte Mandate, etwa aus neuen Branchen oder Regionen.',
      rec: 'Neue Märkte erschliessen, Wunschkunden gezielt ansprechen und Inhalte breiter verteilen.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Personalvermittlung</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Placement-Effizienz-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie viel Umsatz zwischen Mandat und erfolgreicher Vermittlung verloren geht. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        {/* Left Inputs */}
        <div className="md:col-span-12 lg:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Aktive Mandate pro Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.mandate}</span>
            </label>
            <div className="relative">
              <input aria-label="Aktive Mandate pro Monat"
                type="number"
                min={1}
                max={100}
                value={inputs.mandate}
                onChange={(e) => handleInputChange('mandate', parseInt(e.target.value) || 1)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Laufende Suchaufträge im Durchschnitt</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Erfolgreiche Vermittlungen / Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.placements}</span>
            </label>
            <input aria-label="Erfolgreiche Vermittlungen / Monat"
              type="number"
              min={0}
              max={55}
              value={inputs.placements}
              onChange={(e) => handleInputChange('placements', parseInt(e.target.value) || 0)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            {inputs.placements > inputs.mandate && (
              <p className="text-amber-600 text-[11px] font-bold mt-1">
                Es kann nicht mehr Vermittlungen als Mandate geben.
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Provision pro Vermittlung (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.provision)}</span>
            </label>
            <div className="relative">
              <input aria-label="Ø Provision pro Vermittlung (CHF)"
                type="number"
                min={2000}
                max={80000}
                step={500}
                value={inputs.provision}
                onChange={(e) => handleInputChange('provision', parseInt(e.target.value) || 2000)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <CircleDollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Anteil Mandate aus digitalen Kanälen</span>
              <span className="text-[#686DF4] font-semibold">{inputs.marketing_anteil}%</span>
            </label>
            <input aria-label="Anteil Mandate aus digitalen Kanälen"
              type="range"
              min={0}
              max={80}
              step={5}
              value={inputs.marketing_anteil}
              onChange={(e) => handleInputChange('marketing_anteil', parseInt(e.target.value) || 0)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[11px] text-slate-400 font-medium">Richtwert (Annahme): 35% über Marketing und Direktansprache</p>
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

              {/* Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Jahresumsatz heute</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.jahresumsatz)}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    ({results.placement_rate.toFixed(1)}% Vermittlungsquote)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[11px] font-mono font-bold text-red-650 block uppercase">Abstand zum Richtwert</span>
                  <h4 className="text-base font-black text-red-700 mt-1">
                    {results.placement_leck_jahr > 0 ? `-${formatCHF(results.placement_leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    Annahme: 45% Vermittlungsquote
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-mono font-bold text-green-700 block uppercase">Möglich bei 10 Prozentpunkten mehr Quote</span>
                    <p className="text-[11px] text-slate-500 font-semibold">Grobe Schätzung, z.B. durch konsequentes Nachfassen</p>
                  </div>
                  <h4 className="text-base font-black text-green-700">+{formatCHF(results.potenzial_jahr)} / J.</h4>
                </div>
              </div>

              {/* Diagnostics text */}
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
              Bitte geben Sie mindestens 1 Mandat und eine Provision ab CHF 2'000 ein.
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
                  page: 'personalvermittler-recruiting',
                  cta_type: 'primary',
                  placement_leck_jahr: results.placement_leck_jahr
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
