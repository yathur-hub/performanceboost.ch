/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, Rocket, Briefcase, ChevronUp, ChevronDown, CircleDollarSign } from 'lucide-react';

interface Inputs {
  mandate: number;
  placements: number;
  provision: number;
  marketing_anteil: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

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
      label: 'Hohes Verbesserungspotenzial',
      desc: 'Eure Placement-Rate und/oder Mandatsgewinnung hat erhebliche Lücken. Das Revenue-Leck ist real und bezifferbar. Schon ein strukturiertes CRM und konsequentes Follow-up nach Erstgesprächen würde messbar mehr Placements aus denselben Mandaten herausholen.',
      rec: 'Follow-up-Automation einrichten, CRM-Pipeline bereinigen, LinkedIn-Outreach für Mandatsgewinnung aufbauen.',
    },
    potenzial: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      label: 'Potenzial vorhanden',
      desc: 'Ihr habt eine funktionierende Basis — aber signifikantes Revenue liegt noch brach. Wahrscheinlich fehlt es an systematischem Follow-up oder an einem skalierbaren Kanal für die Mandatsgewinnung jenseits des persönlichen Netzwerks.',
      rec: 'Follow-up-Sequenz nach Offerten einrichten, Content-Assets für Lead-Generierung aufbauen, CRM-Nutzung konsolidieren.',
    },
    gut: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      label: 'Gut aufgestellt',
      desc: 'Eure Pipeline-Effizienz liegt über dem Branchendurchschnitt. Jetzt geht es darum, das Mandatsvolumen zu steigern und die letzten Prozentpunkte bei der Placement-Rate auszuschöpfen.',
      rec: 'Mandatsgewinnung durch Content und LinkedIn skalieren, Outreach auf neue Zielbranchen ausweiten.',
    },
    top: {
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200/50',
      badgeBg: 'bg-[#686DF4] text-white',
      label: 'Top-Performer',
      desc: 'Eure Placement-Rate und Mandatsgewinnung sind ausgezeichnet. Das nächste Wachstumspotenzial liegt im Volumen: mehr qualifizierte Mandate, mehr Branchen, mehr Regionen — bei gleicher Effizienz.',
      rec: 'Fokus auf Skalierung: neue Märkte, ABM für Wunschmandanten, Content-Distribution ausbauen.',
    },
  };

  const currentStufe = results ? stufeConfigs[results.score_stufe] : stufeConfigs.potenzial;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">RECRUITING CALCULATOR</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Placement-Effizienz-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Messen Sie Ausfälle in Ihrer Recruiting-Mandants-Pipeline im Vergleich zu Schweizer Vermittler-Benchmarks.
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
              <input
                type="number"
                min={1}
                max={100}
                value={inputs.mandate}
                onChange={(e) => handleInputChange('mandate', parseInt(e.target.value) || 1)}
                className="w-full bg-slate-50 border border-slate-250 p-2.5 pl-10 rounded-xl text-xs font-semibold focus:outline-none"
              />
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <p className="text-[9px] text-slate-400 font-medium">Laufende Suchaufträge o.ä. im Durchschnitt</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Erfolgreiche Placements / Monat</span>
              <span className="text-[#686DF4] font-semibold">{inputs.placements}</span>
            </label>
            <input
              type="number"
              min={0}
              max={55}
              value={inputs.placements}
              onChange={(e) => handleInputChange('placements', parseInt(e.target.value) || 0)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            {inputs.placements > inputs.mandate && (
              <p className="text-amber-600 text-[10px] font-bold mt-1">
                Placements können Mandate nicht übersteigen.
              </p>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Provision pro Placement (CHF)</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.provision)}</span>
            </label>
            <div className="relative">
              <input
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
              <span>Anteil Mandate digital generiert</span>
              <span className="text-[#686DF4] font-semibold">{inputs.marketing_anteil}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={80}
              step={5}
              value={inputs.marketing_anteil}
              onChange={(e) => handleInputChange('marketing_anteil', parseInt(e.target.value) || 0)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium">B2B Richtwert aus Marketing/Outreach: 35%</p>
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
                    PIPELINE EFFIZIENZ SCORE
                  </span>
                  <div className="text-2xl font-black text-slate-905 mt-1">{results.score} / 100</div>
                </div>
                <span className={`px-2.5 py-1 rounded text-[8px] font-mono font-black uppercase ${currentStufe.badgeBg}`}>
                  {currentStufe.label}
                </span>
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">Jahresumsatz aktuell</span>
                  <h4 className="text-base font-black text-slate-900 mt-1">{formatCHF(results.jahresumsatz)}</h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    ({results.placement_rate.toFixed(1)}% Placement-Rate)
                  </p>
                </div>

                <div className="bg-red-50 border border-red-150 rounded-xl p-4">
                  <span className="text-[9px] font-mono font-bold text-red-650 block uppercase">Umsatz-Leck vs. Benchmark</span>
                  <h4 className="text-base font-black text-red-600 mt-1">
                    {results.placement_leck_jahr > 0 ? `-${formatCHF(results.placement_leck_jahr)} / J.` : 'CHF 0'}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold leading-relaxed">
                    Soll-Benchmark-Placement-Rate: 45%
                  </p>
                </div>

                <div className="sm:col-span-2 bg-green-50 border border-green-150 rounded-xl p-4 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono font-bold text-green-700 block uppercase">Zusatzpotenzial bei +10% Rate</span>
                    <p className="text-[10px] text-slate-500 font-semibold">Durch systematisches Follow-Up und CRM-Qualität</p>
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
                  Dringlichster Hebel: {currentStufe.rec}
                </p>
              </div>
            </>
          ) : (
            <div className="p-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-3xl">
              Bitte qualifizieren Sie Ihre Eingaben (Mindestprovision CHF 2'000).
            </div>
          )}
        </div>
      </div>

      {/* CTA Box & Lead Capture */}
      {results && (
        <div className="border-t border-slate-100 pt-6 space-y-6">
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-sm">
              <strong>Wie effizient ist Ihre Mandatspipeline wirklich?</strong> In 30 Minuten zeigen wir Ihnen, wo Ihre Pipeline hakt — und wie Sie systemisch wachsen.
            </div>
            <a
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              onClick={() => track('hero_tool_cta_clicked', {
                page: 'personalvermittler-recruiting',
                cta_type: 'primary',
                placement_leck_jahr: results.placement_leck_jahr
              })}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer"
            >
              Pipeline-Gespräch buchen
            </a>
          </div>

          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_form_opened', {
                  page: 'personalvermittler-recruiting',
                  placement_leck_jahr: results.placement_leck_jahr,
                  score: results.score,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Vollständige Auswertung per E-Mail erhalten →</span>
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
                        placeholder="recruiting@firma.ch"
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
                        placeholder="Vermittlung / Executive AG"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Agenturtyp</label>
                      <select
                        value={agenturTyp}
                        onChange={(e) => setAgenturTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Temporärbüro / Personalverleih</option>
                        <option>Executive Search / Headhunting</option>
                        <option>Recruiting-Agentur (Direktvermittlung)</option>
                        <option>RPO-Anbieter</option>
                        <option>Andere</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Auswertung anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Keine Werbe-Kampagnen. Einmaliger, personalisierter Report samt Schweizer Vermittler-Benchmarks.
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
