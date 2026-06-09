/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertTriangle, CheckCircle, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface Inputs {
  neue_mandate: number;
  empfehlungsanteil: number;
  ø_mandat: number;
  ziel_mandate: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function KanzleiWachstumsCheck() {
  const [inputs, setInputs] = useState<Inputs>({
    neue_mandate: 12,
    empfehlungsanteil: 85,
    ø_mandat: 8500,
    ziel_mandate: 18,
  });

  const [hasInteracted, setHasInteracted] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [emailSub, setEmailSub] = useState('');
  const [nameSub, setNameSub] = useState('');
  const [kanzleiTyp, setKanzleiTyp] = useState('Treuhandbüro / Buchhaltung');
  const [formSubmitted, setFormSubbed] = useState(false);

  const formatCHF = (value: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatCHFCompact = (value: number) => {
    if (value >= 1000000) {
      return 'CHF ' + (value / 1000000).toFixed(1).replace('.', "'") + ' Mio.';
    }
    return formatCHF(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('de-CH').format(Math.round(value));
  };

  const formatPercent = (value: number) => {
    return Math.round(value) + ' %';
  };

  const results = useMemo(() => {
    const { neue_mandate, empfehlungsanteil, ø_mandat, ziel_mandate } = inputs;

    const mandate_empfehlung = neue_mandate * (empfehlungsanteil / 100);
    const mandate_digital = neue_mandate * ((100 - empfehlungsanteil) / 100);
    const aktueller_jahresumsatz_neu = neue_mandate * ø_mandat;

    const natuerliches_empfehlungswachstum = neue_mandate * 0.05;
    const wachstums_lücke = Math.max(0, ziel_mandate - neue_mandate);
    const digital_gap = Math.max(0, wachstums_lücke - natuerliches_empfehlungswachstum);

    const chf_potenzial_digital = Math.max(0, digital_gap * ø_mandat);

    const abhängigkeits_score = Math.round(100 - (empfehlungsanteil * 0.8));

    let stufe: 'klumpenrisiko' | 'strukturell' | 'ausgewogen' | 'diversifiziert' = 'strukturell';
    if (empfehlungsanteil > 90) stufe = 'klumpenrisiko';
    else if (empfehlungsanteil > 70) stufe = 'strukturell';
    else if (empfehlungsanteil > 50) stufe = 'ausgewogen';
    else stufe = 'diversifiziert';

    const ziel_erreichbar_durch_empfehlung = mandate_empfehlung * 1.10;
    const notwendiger_digitaler_beitrag_n = Math.max(0, ziel_mandate - ziel_erreichbar_durch_empfehlung);
    const notwendiger_digitaler_beitrag_chf = notwendiger_digitaler_beitrag_n * ø_mandat;

    return {
      mandate_empfehlung: Math.round(mandate_empfehlung),
      mandate_digital: Math.round(mandate_digital),
      aktueller_jahresumsatz_neu,
      wachstums_lücke: Math.round(wachstums_lücke),
      digital_gap: Math.ceil(digital_gap),
      chf_potenzial_digital,
      abhängigkeits_score,
      stufe,
      notwendiger_digitaler_beitrag_n: Math.ceil(notwendiger_digitaler_beitrag_n),
      notwendiger_digitaler_beitrag_chf,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('hero_tool_started', { page: 'treuhand-unternehmensberatung', element_id: 'kanzlei-wachstums-check' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      track('hero_tool_output_shown', {
        page: 'treuhand-unternehmensberatung',
        element_id: 'kanzlei-wachstums-check',
        empfehlungsanteil: next.empfehlungsanteil,
        stufe: results.stufe,
        abhängigkeits_score: results.abhängigkeits_score,
        chf_potenzial_digital: results.chf_potenzial_digital,
        notwendiger_dig_beitrag_n: results.notwendiger_digitaler_beitrag_n,
      });
      return next;
    });
  };

  const stufenConfigs = {
    klumpenrisiko: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-100 text-red-800 border-red-250',
      label: 'Hohes Klumpenrisiko',
      desc: `Über 90% Ihrer neuen Mandate kommen über persönliche Empfehlungen. Das ist ein erhebliches Konzentrationsrisiko: Ein verändertes Netzwerk, eine Pensionierung, ein aktiver Wettbewerber — und der Zufluss bricht ein. Kanzleien mit dieser Abhängigkeit wachsen nicht planbar. Sie hoffen. Der Aufbau eines zweiten Kanals dauert 3–6 Monate. Die beste Zeit, damit anzufangen, war vor einem Jahr — die zweitbeste ist jetzt.`,
    },
    strukturell: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-100 text-orange-800 border-orange-250',
      label: 'Strukturelle Abhängigkeit',
      desc: 'Empfehlungen tragen Ihr Wachstum — aber der digitale Kanal fehlt fast vollständig. Das funktioniert in stabilen Phasen. Es bremst Sie aber, wenn Sie aktiv wachsen wollen oder wenn das Netzwerk einmal stiller wird. Mit LinkedIn-Präsenz, lokalem SEO und einem Mandanten-Newsletter wäre innerhalb von 6 Monaten ein spürbarer zweiter Kanal aufgebaut.',
    },
    ausgewogen: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-100 text-green-800 border-green-250',
      label: 'Ausgewogen, aber ausbaufähig',
      desc: 'Sie haben bereits eine gewisse Diversifizierung. Der digitale Kanal trägt messbar — aber das Potenzial liegt noch brach. Systematisierung und Ausbau würden den digitalen Anteil innert 3–4 Monaten verdoppeln können.',
    },
    diversifiziert: {
      color: 'text-indigo-700 bg-[#686DF4]/5 border-[#686DF4]/10',
      badgeBg: 'bg-[#686DF4]/10 text-[#686DF4] border-[#686DF4]/20',
      label: 'Diversifizierter Kanal-Mix',
      desc: 'Ihr Kanal-Mix ist überdurchschnittlich gut diversifiziert. Der nächste Hebel liegt in der Qualifizierung: bessere Conversion aus bestehendem Traffic, LinkedIn-Inbound für hochwertige Mandate und systematisches Cross-Selling im bestehenden Kundenstamm.',
    },
  };

  const handleFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub) return;
    setFormSubbed(true);
    track('hero_tool_lead_captured', {
      page: 'treuhand-unternehmensberatung',
      element_id: 'kanzlei-wachstums-check',
      stufe: results.stufe,
      kanzleityp: kanzleiTyp,
      chf_potenzial: results.chf_potenzial_digital,
    });
  };

  const currentStufe = stufenConfigs[results.stufe];

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">KANZLEI-DIAGNOSE</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Kanzlei-Wachstums-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Analysieren Sie Ihre Kanzlei-Abhängigkeiten und berechnen Sie Ihre digitale Wachstumslücke.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Neue Mandate / 12 Mt.</span>
              <span className="text-[#686DF4] font-semibold">{inputs.neue_mandate}</span>
            </label>
            <input
              type="number"
              min={1}
              max={200}
              value={inputs.neue_mandate}
              onChange={(e) => handleInputChange('neue_mandate', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Neue Mandate im letzten Jahr</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Empfehlungsanteil</span>
              <span className="text-[#686DF4] font-semibold">{inputs.empfehlungsanteil}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={inputs.empfehlungsanteil}
              onChange={(e) => handleInputChange('empfehlungsanteil', parseInt(e.target.value) || 10)}
              className="w-full accent-[#686DF4]"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Anteil Mandate über Kontakte</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Jahresumsatz pro Mandat</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.ø_mandat)}</span>
            </label>
            <input
              type="number"
              min={1000}
              max={200000}
              step={500}
              value={inputs.ø_mandat}
              onChange={(e) => handleInputChange('ø_mandat', parseInt(e.target.value) || 1000)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium font-mono">Ø Jahreshonorar pro Mandat</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Wachstumsziel (Mandate)</span>
              <span className="text-[#686DF4] font-semibold">{inputs.ziel_mandate}</span>
            </label>
            <input
              type="number"
              min={1}
              max={500}
              value={inputs.ziel_mandate}
              onChange={(e) => handleInputChange('ziel_mandate', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            {inputs.ziel_mandate < inputs.neue_mandate && (
              <p className="text-amber-600 text-[10px] font-bold mt-1">
                Ihr Ziel liegt unter dem Vorjahr — wir berechnen trotzdem den aktuellen Kanal-Mix.
              </p>
            )}
          </div>
        </div>

        {/* Right Outcomes */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-5 bg-slate-950 text-white rounded-2xl flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-850">
              <span className="text-[8.5px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                DIAGNORSTIZIERTER DIVERSIFIKATIONS-SCORE
              </span>
              <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-black ${results.stufe === 'klumpenrisiko' ? 'bg-red-800 text-red-100' : 'bg-[#686DF4] text-white'}`}>
                {currentStufe.label}
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4.5xl font-black font-display text-white">{results.abhängigkeits_score}</span>
              <span className="text-xs text-slate-400 font-bold">/ 100</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
              {currentStufe.desc}
            </p>
            <p className="text-[9.5px] text-slate-400 font-mono pt-1">
              Aktuell {inputs.neue_mandate - results.mandate_empfehlung} von {inputs.neue_mandate} Mandaten über digitale Kanäle gewonnen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 space-y-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Wachstumslücke</span>
              <h4 className="text-lg font-bold text-slate-900">{formatCHFCompact(results.chf_potenzial_digital)}</h4>
              <p className="text-[10px] text-slate-450 font-semibold leading-normal pt-1">
                {results.digital_gap} Mandate fehlen digital bis zum Ziel ({inputs.ziel_mandate} Mandate Zuwachs)
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 space-y-1">
              <span className="text-[9px] font-mono font-bold text-[#686DF4] uppercase tracking-wider block">Dringlichkeit digitaler Beitrag</span>
              <h4 className="text-lg font-bold text-[#686DF4]">{results.notwendiger_digitaler_beitrag_n} Mandat(e)</h4>
              <p className="text-[10px] text-slate-450 font-semibold leading-normal pt-1">
                entspricht {formatCHFCompact(results.notwendiger_digitaler_beitrag_chf)} Honorarpipeline
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Block & Bottom Form */}
      <div className="border-t border-slate-100 pt-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="text-left font-semibold text-slate-550 text-xs max-w-md">
            <strong>Wie unabhängig ist Ihre Kanzlei von Empfehlungen?</strong> In einem 30-minütigen Gespräch analysieren wir Ihre Sichtbarkeit live und ehrlich — ohne Verkaufsdruck.
          </div>
          <a
            href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('hero_tool_cta_primary_clicked', {
              page: 'treuhand-unternehmensberatung',
              element_id: 'kanzlei-wachstums-check',
              stufe: results.stufe,
            })}
            className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto transition-colors"
          >
            Kostenloses Erstgespräch buchen
          </a>
        </div>

        {/* Lead Capture for high dependency levels */}
        {(results.stufe === 'klumpenrisiko' || results.stufe === 'strukturell') && (
          <div className="border border-slate-150 rounded-2xl overflow-hidden text-left bg-slate-50/40">
            <button
              onClick={() => {
                setAccordionOpen(!accordionOpen);
                track('hero_tool_lead_capture_opened', {
                  page: 'treuhand-unternehmensberatung',
                  element_id: 'kanzlei-wachstums-check',
                  stufe: results.stufe,
                });
              }}
              className="w-full p-4 flex justify-between items-center text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              <span>Analyse per E-Mail erhalten — mit konkretem Massnahmenplan →</span>
              {accordionOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-450" />}
            </button>

            {accordionOpen && (
              <div className="p-4 border-t border-slate-150 bg-white space-y-4 animate-fadeIn">
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmission} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">E-Mail Adresse *</label>
                      <input
                        type="email"
                        required
                        value={emailSub}
                        onChange={(e) => setEmailSub(e.target.value)}
                        placeholder="kanzlei@firma.ch"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Dein Name</label>
                      <input
                        type="text"
                        value={nameSub}
                        onChange={(e) => setNameSub(e.target.value)}
                        placeholder="z.B. Müller"
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none focus:border-[#686DF4]"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase font-mono">Kanzleityp</label>
                      <select
                        value={kanzleiTyp}
                        onChange={(e) => setKanzleiTyp(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 p-2 text-xs font-semibold rounded-lg focus:outline-none"
                      >
                        <option>Treuhandbüro / Buchhaltung</option>
                        <option>Steuerberatung / Wirtschaftsprüfung</option>
                        <option>Unternehmensberatung (Strategy/Operations)</option>
                        <option>Nachlassplanung / Family Office</option>
                        <option>Anderes / gemischt</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest py-3 rounded-lg text-center"
                    >
                      Analyse jetzt anfordern
                    </button>
                    <p className="sm:col-span-2 text-[8px] text-slate-400 font-mono text-center">
                      Kein Newsletter. Einmalige, personalisierte Einschätzung auf Basis Ihrer Eingaben — innert 48 Stunden.
                    </p>
                  </form>
                ) : (
                  <div className="p-4 text-center text-green-700 bg-green-50 border border-green-150 rounded-xl font-semibold text-xs">
                    Vielen Dank! Wir senden Ihnen Ihre personalisierte Kanzlei-Analyse und drei konkrete Massnahmen-Ideen innert Kürze per E-Mail zu.
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
