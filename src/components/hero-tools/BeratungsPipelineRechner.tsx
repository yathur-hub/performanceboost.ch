/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, AlertCircle, CheckCircle, Target, Calculator } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

interface Inputs {
  berater: number;
  gespraeche: number;
  abschlussquote: number;
  jahresvolumen: number;
}

const track = (eventName: string, params: Record<string, string | number | boolean | undefined>) => trackEvent(eventName, params);

export default function BeratungsPipelineRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    berater: 3,
    gespraeche: 8,
    abschlussquote: 25,
    jahresvolumen: 45000,
  });

  const [hasInteracted, setHasInteracted] = useState(false);

  const formatCHF = (value: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'percent',
      minimumFractionDigits: 0,
      maximumFractionDigits: 1,
    }).format(value / 100);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('de-CH', { maximumFractionDigits: 1 }).format(value);
  };

  const results = useMemo(() => {
    const { berater, gespraeche, abschlussquote, jahresvolumen } = inputs;

    const gespraeche_total = berater * gespraeche * 12;
    const abschluesse_jahr = gespraeche_total * (abschlussquote / 100);
    const aktueller_jahresumsatz = abschluesse_jahr * jahresvolumen;

    const benchmark_gespraeche = berater * 10 * 12;
    const benchmark_abschluesse = benchmark_gespraeche * 0.30;
    const benchmark_umsatz = benchmark_abschluesse * jahresvolumen;

    const revenue_leck = Math.max(0, benchmark_umsatz - aktueller_jahresumsatz);

    const optimierte_quote = Math.min(60, abschlussquote + 10);
    const umsatz_optimiert = gespraeche_total * (optimierte_quote / 100) * jahresvolumen;
    const potenzial_optimiert = umsatz_optimiert - aktueller_jahresumsatz;

    const effizienz_score = Math.min(100, Math.round((aktueller_jahresumsatz / benchmark_umsatz) * 100));

    const abschluesse_monat = abschluesse_jahr / 12;
    const umsatz_pro_berater = aktueller_jahresumsatz / berater;

    let score_stufe: 'kritisch' | 'entwicklung' | 'benchmark' | 'wachstum' = 'entwicklung';
    if (effizienz_score <= 40) score_stufe = 'kritisch';
    else if (effizienz_score <= 70) score_stufe = 'entwicklung';
    else if (effizienz_score <= 90) score_stufe = 'benchmark';
    else score_stufe = 'wachstum';

    return {
      gespraeche_total,
      abschluesse_jahr,
      aktueller_jahresumsatz,
      benchmark_umsatz,
      revenue_leck,
      potenzial_optimiert,
      effizienz_score,
      abschluesse_monat,
      umsatz_pro_berater,
      score_stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('pipeline_rechner_started', { page: 'finanzdienstleister' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      track('pipeline_rechner_input_change', {
        field,
        value,
        effizienz_score: results.effizienz_score,
        status_stufe: results.score_stufe,
      });
      return next;
    });
  };

  const stufenConfig = {
    kritisch: {
      badge: 'Effizienz: deutlich unter Richtwert',
      headline: 'Ihre Beratungsgespräche bringen deutlich weniger Umsatz als der Richtwert.',
      color: 'text-red-650 bg-red-50 border-red-200/50',
      iconColor: 'text-red-500',
      btnText: 'Ergebnis besprechen',
      text: `Nach Ihren Angaben erzielen Sie rund ${formatCHF(results.aktueller_jahresumsatz)} pro Jahr. Mit den angenommenen Richtwerten wären es bei Ihrer Teamgrösse rund ${formatCHF(results.benchmark_umsatz)}, also eine Lücke von etwa ${formatCHF(results.revenue_leck)} pro Jahr. Steigt Ihre Abschlussquote um 10 Prozentpunkte, wären grob geschätzt ${formatCHF(results.potenzial_optimiert)} zusätzlich möglich.`,
    },
    entwicklung: {
      badge: 'Effizienz: ausbaufähig',
      headline: 'Solide Basis mit spürbarem Potenzial.',
      color: 'text-amber-700 bg-amber-50 border-amber-200/50',
      iconColor: 'text-amber-500',
      btnText: 'Ergebnis besprechen',
      text: `Sie erreichen rund ${results.effizienz_score}% des Umsatzes, den die angenommenen Richtwerte für Ihr Team ergeben. Die Lücke von etwa ${formatCHF(results.revenue_leck)} pro Jahr zeigt, wo es sich lohnt, Interessenten besser weiterzubegleiten und das CRM konsequent zu nutzen. Mit 10 Prozentpunkten mehr Abschlussquote wären grob geschätzt ${formatCHF(results.potenzial_optimiert)} mehr Jahresumsatz möglich.`,
    },
    benchmark: {
      badge: 'Effizienz: nahe am Richtwert',
      headline: 'Ihre Beratungsgespräche sind gut aufgestellt.',
      color: 'text-green-700 bg-green-50 border-green-200/50',
      iconColor: 'text-green-500',
      btnText: 'Ergebnis besprechen',
      text: `Sie liegen nahe an den angenommenen Richtwerten. Das ist eine gute Ausgangslage für den nächsten Schritt: Mit einem zusätzlichen digitalen Kanal für Neukunden könnten Sie mehr Erstgespräche führen und Ihre bewährte Beratung auf mehr Interessenten anwenden. Grob geschätztes Potenzial bei 10 Prozentpunkten mehr Abschlussquote: ${formatCHF(results.potenzial_optimiert)}.`,
    },
    wachstum: {
      badge: 'Effizienz: über Richtwert',
      headline: 'Sie liegen über dem Richtwert. Jetzt lohnt sich mehr Volumen.',
      color: 'text-[#686DF4] bg-[#686DF4]/5 border-[#686DF4]/10',
      iconColor: 'text-[#686DF4]',
      btnText: 'Ergebnis besprechen',
      text: `Ihre Abschlussquote und Ihre Anzahl Gespräche liegen über den angenommenen Richtwerten. Damit lohnt es sich, einen zweiten digitalen Kanal für Neukunden aufzubauen: mehr qualifizierte Erstgespräche bei gleich guter Beratung. Grob geschätztes Potenzial bei 10 Prozentpunkten mehr Abschlussquote: ${formatCHF(results.potenzial_optimiert)}.`,
    },
  };

  const currentStufe = stufenConfig[results.score_stufe];

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto">
      <div className="border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">Beratungs-Rechner</h3>
        </div>
        <p className="text-xs text-slate-500 mt-1 font-semibold leading-relaxed">
          Schätzen Sie, wie viel Umsatz Ihre Beratungsgespräche heute bringen und wo Potenzial liegt. Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Inputs */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex justify-between">
              <span>Aktive Berater</span>
              <span className="text-[#686DF4]">{inputs.berater}</span>
            </label>
            <input aria-label="Aktive Berater"
              type="number"
              min={1}
              max={50}
              value={inputs.berater}
              onChange={(e) => handleInputChange('berater', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:border-[#686DF4] focus:ring-1 focus:ring-[#686DF4]/30"
            />
            <p className="text-[11px] text-slate-400 font-medium">Anzahl Berater, die aktiv Kundengespräche führen</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex justify-between">
              <span>Gespräche / Monat (je Berater)</span>
              <span className="text-[#686DF4]">{inputs.gespraeche}</span>
            </label>
            <input aria-label="Gespräche / Monat (je Berater)"
              type="number"
              min={1}
              max={30}
              value={inputs.gespraeche}
              onChange={(e) => handleInputChange('gespraeche', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:border-[#686DF4] focus:ring-1 focus:ring-[#686DF4]/30"
            />
            <p className="text-[11px] text-slate-400 font-medium">Durchschnittliche Gespräche pro Berater im Monat</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex justify-between">
              <span>Abschlussquote</span>
              <span className="text-[#686DF4] font-mono">{inputs.abschlussquote}%</span>
            </label>
            <div className="flex items-center gap-4">
              <input aria-label="Abschlussquote"
                type="range"
                min={5}
                max={60}
                value={inputs.abschlussquote}
                onChange={(e) => handleInputChange('abschlussquote', parseInt(e.target.value) || 5)}
                className="w-full accent-[#686DF4]"
              />
            </div>
            <p className="text-[11px] text-slate-400 font-medium">Anteil Gespräche, die zu einem Abschluss führen</p>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wide flex justify-between">
              <span>Ø Jahresvolumen pro Abschluss</span>
              <span className="text-[#686DF4]">{formatCHF(inputs.jahresvolumen)}</span>
            </label>
            <input aria-label="Ø Jahresvolumen pro Abschluss"
              type="number"
              min={5000}
              max={500000}
              step={5000}
              value={inputs.jahresvolumen}
              onChange={(e) => handleInputChange('jahresvolumen', parseInt(e.target.value) || 5000)}
              className="w-full bg-slate-50 border border-slate-250 rounded-xl p-3 text-xs font-semibold focus:outline-none focus:border-[#686DF4] focus:ring-1 focus:ring-[#686DF4]/30"
            />
            <p className="text-[11px] text-slate-400 font-medium">Jahresprämie oder verwaltetes Volumen eines neuen Mandats</p>
          </div>
        </div>

        {/* Right Column: Outcomes */}
        <div className="md:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4.5 space-y-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Jahresumsatz heute</span>
              <h4 className="text-xl font-bold text-slate-900 leading-none">{formatCHF(results.aktueller_jahresumsatz)}</h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-normal pt-1.5 border-t border-slate-100 mt-2">
                {formatNumber(results.abschluesse_jahr)} Abschlüsse/Jahr • Schnitt {formatCHF(inputs.jahresvolumen)}
              </p>
            </div>

            <div className={`border rounded-2xl p-4.5 space-y-1 ${results.revenue_leck > 0 ? 'bg-red-50/30 border-red-100' : 'bg-green-50/30 border-green-100'}`}>
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Abstand zum Richtwert</span>
              <h4 className={`text-xl font-bold leading-none ${results.revenue_leck > 0 ? 'text-red-650' : 'text-green-700'}`}>
                {results.revenue_leck > 0 ? formatCHF(results.revenue_leck) : 'CHF 0'}
              </h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-normal pt-1.5 border-t border-slate-100 mt-2">
                {results.revenue_leck > 0 ? 'Annahme: 30% Quote bei 10 Gespr./Mt' : 'Auf oder über Richtwert'}
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4.5 space-y-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Potenzial +10% Abschlussquote</span>
              <h4 className="text-xl font-bold text-green-700 leading-none">
                {inputs.abschlussquote >= 60 ? 'Bereits am Maximum' : `+${formatCHF(results.potenzial_optimiert)}`}
              </h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-normal pt-1.5 border-t border-slate-100 mt-2">
                Grobe Schätzung, Quote max. 60%
              </p>
            </div>

            <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-4.5 space-y-1">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Effizienz-Wert</span>
              <div className="flex items-center gap-3">
                <h4 className="text-xl font-bold text-slate-900 leading-none">{results.effizienz_score} / 100</h4>
                <div className="w-16 bg-slate-200 h-2 rounded-full overflow-hidden shrink-0">
                  <div 
                    className="bg-[#686DF4] h-full transition-all duration-500" 
                    style={{ width: `${results.effizienz_score}%` }} 
                  />
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-semibold leading-normal pt-1.5 border-t border-slate-100 mt-2 font-mono">
                Richtwert = 100
              </p>
            </div>
          </div>

          {/* Status Diagnostic Card */}
          <div className={`p-5 rounded-2xl border ${currentStufe.color} text-left space-y-2`}>
            <span className="text-[11px] font-mono font-bold tracking-widest uppercase">
              {currentStufe.badge}
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{currentStufe.headline}</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">{currentStufe.text}</p>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row gap-5 items-center justify-between">
        <div className="text-[11px] text-slate-450 leading-relaxed font-semibold text-center sm:text-left text-balance max-w-md">
          {results.score_stufe === 'kritisch' || results.score_stufe === 'entwicklung' ? (
            <span><strong>Ergebnis gemeinsam einordnen.</strong> In einem kostenlosen Erstgespräch von 30 Minuten schauen wir Ihre Zahlen an und besprechen, wo bei Ihnen der grösste Hebel liegt.</span>
          ) : (
            <span><strong>Ergebnis gemeinsam einordnen.</strong> In einem kostenlosen Erstgespräch von 30 Minuten besprechen wir, ob und wie ein zusätzlicher digitaler Kanal für Neukunden bei Ihnen sinnvoll ist.</span>
          )}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            track('pipeline_rechner_cta_click', {
              cta_text: currentStufe.btnText,
              effizienz_score: results.effizienz_score,
              status_stufe: results.score_stufe,
            });
            window.dispatchEvent(new CustomEvent('open-contact-modal'));
          }}
          className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto cursor-pointer transition-colors shadow-sm border-0"
        >
          {currentStufe.btnText}
        </button>
      </div>
      <p className="text-[11px] text-slate-400 font-mono text-center">
        *Grobe Schätzung auf Basis Ihrer Angaben und angenommener Richtwerte, keine Garantie für Ergebnisse. Sie dient der Orientierung, nicht der betriebswirtschaftlichen Planung.
      </p>
    </div>
  );
}
