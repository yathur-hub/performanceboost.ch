/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertTriangle, CheckCircle, Target, ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  neue_mandate: number;
  empfehlungsanteil: number;
  ø_mandat: number;
  ziel_mandate: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

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
      desc: `Über 90% Ihrer neuen Mandate kommen über persönliche Empfehlungen. Das ist ein Klumpenrisiko: Verändert sich Ihr Netzwerk, geht ein wichtiger Empfehlungsgeber in Pension oder wird ein Mitbewerber aktiver, kann der Zufluss deutlich zurückgehen. Planbares Wachstum ist so schwierig. Ein zweiter Kanal braucht Zeit, bis er trägt. Darum lohnt es sich, früh damit zu beginnen.`,
    },
    strukturell: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-100 text-orange-800 border-orange-250',
      label: 'Strukturelle Abhängigkeit',
      desc: 'Empfehlungen tragen Ihr Wachstum, ein digitaler Kanal fehlt aber fast vollständig. In stabilen Phasen funktioniert das. Es bremst Sie jedoch, wenn Sie aktiv wachsen wollen oder das Netzwerk einmal ruhiger wird. Mit einer Präsenz auf LinkedIn, guter lokaler Auffindbarkeit bei Google und einem Newsletter für Mandanten lässt sich schrittweise ein zweiter Kanal aufbauen.',
    },
    ausgewogen: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-100 text-green-800 border-green-250',
      label: 'Ausgewogen, aber ausbaufähig',
      desc: 'Ihre Mandate kommen bereits aus mehreren Quellen, und der digitale Kanal trägt etwas bei. Hier ist noch Potenzial vorhanden: Wenn Sie den digitalen Kanal systematisch ausbauen, kann sein Anteil weiter wachsen.',
    },
    diversifiziert: {
      color: 'text-indigo-700 bg-[#686DF4]/5 border-[#686DF4]/10',
      badgeBg: 'bg-[#686DF4]/10 text-[#686DF4] border-[#686DF4]/20',
      label: 'Breit abgestützt',
      desc: 'Ihre neuen Mandate kommen aus mehreren Kanälen. Der nächste Schritt liegt in der Qualität: mehr Anfragen aus den bestehenden Website-Besuchern, LinkedIn für anspruchsvolle Mandate und zusätzliche Leistungen für bestehende Mandanten.',
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
        <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Rechner Treuhand & Beratung</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Kanzlei-Wachstums-Check</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          Schätzen Sie, wie stark Ihre Kanzlei von Empfehlungen abhängt und wie viele Mandate digital dazukommen müssten. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
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
            <p className="text-[11px] text-slate-400 font-medium font-mono">Neue Mandate im letzten Jahr</p>
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
            <p className="text-[11px] text-slate-400 font-medium font-mono">Anteil Mandate über Empfehlungen und Kontakte</p>
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
            <p className="text-[11px] text-slate-400 font-medium font-mono">Ø Jahreshonorar pro Mandat</p>
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
              <p className="text-amber-600 text-[11px] font-bold mt-1">
                Ihr Ziel liegt unter dem Vorjahr. Wir zeigen trotzdem Ihren aktuellen Kanal-Mix.
              </p>
            )}
          </div>
        </div>

        {/* Right Outcomes */}
        <div className="md:col-span-7 space-y-6">
          <div className="p-5 bg-slate-950 text-white rounded-2xl flex flex-col justify-between space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-850">
              <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                Unabhängigkeit von Empfehlungen
              </span>
              <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-black ${results.stufe === 'klumpenrisiko' ? 'bg-red-800 text-red-100' : 'bg-[#686DF4] text-white'}`}>
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
            <p className="text-[11px] text-slate-400 font-mono pt-1">
              Aktuell {inputs.neue_mandate - results.mandate_empfehlung} von {inputs.neue_mandate} Mandaten über digitale Kanäle gewonnen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 space-y-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Wachstumslücke</span>
              <h4 className="text-lg font-bold text-slate-900">{formatCHFCompact(results.chf_potenzial_digital)}</h4>
              <p className="text-[11px] text-slate-450 font-semibold leading-normal pt-1">
                {results.digital_gap} Mandate fehlen digital bis zum Ziel von {inputs.ziel_mandate} Mandaten (Annahme: Empfehlungen wachsen um 5%)
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-200 rounded-xl p-4 space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-wider block">Nötiger digitaler Beitrag</span>
              <h4 className="text-lg font-bold text-[#686DF4]">{results.notwendiger_digitaler_beitrag_n} Mandat(e)</h4>
              <p className="text-[11px] text-slate-450 font-semibold leading-normal pt-1">
                entspricht rund {formatCHFCompact(results.notwendiger_digitaler_beitrag_chf)} Honorar
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Block & Bottom Form */}
      <div className="border-t border-slate-100 pt-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="text-left font-semibold text-slate-550 text-xs max-w-md">
            <strong>Ergebnis gemeinsam einordnen.</strong> In einem kostenlosen Erstgespräch von 30 Minuten schauen wir Ihre Zahlen an und besprechen, wo bei Ihnen der grösste Hebel liegt.
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              track('hero_tool_cta_primary_clicked', {
                page: 'treuhand-unternehmensberatung',
                element_id: 'kanzlei-wachstums-check',
                stufe: results.stufe,
              });
              window.dispatchEvent(new CustomEvent('open-contact-modal'));
            }}
            className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto transition-colors cursor-pointer border-0"
          >
            Ergebnis besprechen
          </button>
        </div>

      </div>
    </div>
  );
}
