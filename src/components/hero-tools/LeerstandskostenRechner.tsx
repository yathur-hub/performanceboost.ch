/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { TrendingDown, AlertCircle, CheckCircle, TrendingUp, Clock, Gauge } from 'lucide-react';

interface Inputs {
  objekte: number;
  miete_pro_monat: number;
  vermarktung_aktuell: number;
  vermarktung_ziel: number;
}

const track = (eventName: string, params: any) => {
  console.log(`[Tracking] ${eventName}`, params);
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
};

export default function LeerstandskostenRechner() {
  const [inputs, setInputs] = useState<Inputs>({
    objekte: 12,
    miete_pro_monat: 2800,
    vermarktung_aktuell: 4.5,
    vermarktung_ziel: 2.5,
  });

  const [hasInteracted, setHasInteracted] = useState(false);

  const formatCHF = (value: number): string => {
    if (value >= 1000000) {
      return `CHF ${(value / 1000000).toFixed(1).replace('.', "'")} Mio.`;
    }
    return `CHF ${Math.round(value).toLocaleString('de-CH').replace(/,/g, "'")}`;
  };

  const formatMonate = (value: number): string => {
    return `${value} ${value === 1 ? 'Monat' : 'Monate'}`;
  };

  const results = useMemo(() => {
    const { objekte, miete_pro_monat, vermarktung_aktuell, vermarktung_ziel } = inputs;
    if (!objekte || !miete_pro_monat || objekte < 1 || miete_pro_monat < 500) {
      return null;
    }

    const isValid = vermarktung_ziel < vermarktung_aktuell;
    if (!isValid) return { isValid: false } as any;

    const leerstand_aktuell = objekte * miete_pro_monat * vermarktung_aktuell;
    const leerstand_ziel = objekte * miete_pro_monat * vermarktung_ziel;
    const einsparung_jahr = leerstand_aktuell - leerstand_ziel;

    const kosten_pro_tag = (miete_pro_monat * objekte) / 30;
    const diff_tage = (vermarktung_aktuell - vermarktung_ziel) * 30;

    const reduktion_pct = ((vermarktung_aktuell - vermarktung_ziel) / vermarktung_aktuell) * 100;
    const score = Math.max(0, Math.min(100, 100 - reduktion_pct * 1.5));

    const benchmark = 2.8;
    const abweichung_pct = ((vermarktung_aktuell - benchmark) / benchmark) * 100;

    let stufe: 'A' | 'B' | 'C' | 'D' = 'B';
    if (einsparung_jahr > 100000) stufe = 'A';
    else if (einsparung_jahr >= 30000) stufe = 'B';
    else if (einsparung_jahr >= 5000) stufe = 'C';
    else stufe = 'D';

    return {
      isValid: true,
      leerstand_aktuell,
      leerstand_ziel,
      einsparung_jahr,
      kosten_pro_tag,
      diff_tage: Math.round(diff_tage),
      score: Math.round(score),
      abweichung_pct: Math.round(abweichung_pct),
      stufe,
    };
  }, [inputs]);

  const handleInputChange = (field: keyof Inputs, value: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track('leerstandsrechner_started', { page: 'immobilien' });
    }
    setInputs((prev) => {
      const next = { ...prev, [field]: value };
      
      const res = {
        objekte: next.objekte,
        miete_pro_monat: next.miete_pro_monat,
        vermarktung_aktuell: next.vermarktung_aktuell,
        vermarktung_ziel: next.vermarktung_ziel
      };
      
      const isVal = next.vermarktung_ziel < next.vermarktung_aktuell;
      if (next.objekte && next.miete_pro_monat && isVal) {
        const leerstand_aktuell = next.objekte * next.miete_pro_monat * next.vermarktung_aktuell;
        const leerstand_ziel = next.objekte * next.miete_pro_monat * next.vermarktung_ziel;
        track('leerstandsrechner_berechnet', {
          objekte: next.objekte,
          miete_pro_monat: next.miete_pro_monat,
          vermarktung_aktuell: next.vermarktung_aktuell,
          vermarktung_ziel: next.vermarktung_ziel,
          einsparung_jahr: leerstand_aktuell - leerstand_ziel
        });
      }
      return next;
    });
  };

  const stufeConfigs = {
    A: {
      color: 'text-red-700 bg-red-50 border-red-200/50',
      badgeBg: 'bg-red-500 text-white',
      accent: 'border-red-500',
      label: 'Hohes Optimierungspotenzial',
      desc: `Ihr Portfolio verliert aktuell über ${formatCHF(100000)} pro Jahr durch Leerstand. Mit systematischer Vermarktung ist das direkt angehbar.`,
    },
    B: {
      color: 'text-orange-700 bg-orange-50 border-orange-200/50',
      badgeBg: 'bg-orange-500 text-white',
      accent: 'border-orange-500',
      label: 'Spürbares Potenzial',
      desc: `Eine Optimierung der Vermarktungsdauer um ${results?.diff_tage} Tage pro Objekt spart Ihnen ${results ? formatCHF(results.einsparung_jahr) : ''}/Jahr.`,
    },
    C: {
      color: 'text-green-700 bg-green-50 border-green-200/50',
      badgeBg: 'bg-green-500 text-white',
      accent: 'border-green-500',
      label: 'Solide Basis',
      desc: 'Sie sind schon gut aufgestellt. Systematisches Follow-up und Qualifizierung können dieses Potenzial noch heben.',
    },
    D: {
      color: 'text-[#686DF4] bg-[#686DF4]/5 border-[#686DF4]/10',
      badgeBg: 'bg-[#686DF4] text-white',
      accent: 'border-[#686DF4]',
      label: 'Schon effizient',
      desc: 'Ihr Vermarktungsprozess ist bereits nah am Optimum. Der nächste Hebel liegt in der Lead-Qualität, nicht in der Dauer.',
    },
  };

  const currentStufe = results?.isValid ? stufeConfigs[results.stufe] : null;

  return (
    <div className="bg-white border border-slate-205 rounded-3xl p-6 md:p-8 shadow-[var(--shadow-premium-md)] space-y-8 max-w-4xl mx-auto text-slate-800 text-left">
      <div className="border-b border-slate-100 pb-5">
        <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">HERO DIAGNOSE-TOOL</span>
        <h3 className="text-lg font-display font-medium text-slate-905 tracking-tight mt-1">Leerstandskosten-Rechner</h3>
        <p className="text-xs text-slate-400 mt-1 font-semibold">
          In 30 Sekunden — berechnen Sie die genauen Leerstandskosten Ihres Immobilien-Portfolios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="md:col-span-5 space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Objekte zur Vermarktung pro Jahr</span>
              <span className="text-[#686DF4] font-semibold">{inputs.objekte}</span>
            </label>
            <input
              type="number"
              min={1}
              max={200}
              value={inputs.objekte}
              onChange={(e) => handleInputChange('objekte', parseInt(e.target.value) || 1)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium">Anzahl Miet- oder Verkaufsobjekte pro Jahr</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ø Miete oder Provision / Objekt</span>
              <span className="text-[#686DF4] font-semibold">{formatCHF(inputs.miete_pro_monat)}</span>
            </label>
            <input
              type="number"
              min={500}
              max={50000}
              step={100}
              value={inputs.miete_pro_monat}
              onChange={(e) => handleInputChange('miete_pro_monat', parseInt(e.target.value) || 500)}
              className="w-full bg-slate-50 border border-slate-250 p-2.5 rounded-xl text-xs font-semibold focus:outline-none"
            />
            <p className="text-[9px] text-slate-400 font-medium">Feste monatliche Nettomiete oder Provision</p>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Aktuelle Vermarktungsdauer</span>
              <span className="text-[#686DF4] font-semibold">{formatMonate(inputs.vermarktung_aktuell)}</span>
            </label>
            <input
              type="range"
              min={1}
              max={18}
              step={0.5}
              value={inputs.vermarktung_aktuell}
              onChange={(e) => handleInputChange('vermarktung_aktuell', parseFloat(e.target.value) || 1)}
              className="w-full accent-[#686DF4]"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-widest flex justify-between">
              <span>Ziel-Vermarktungsdauer</span>
              <span className="text-[#686DF4] font-semibold">{formatMonate(inputs.vermarktung_ziel)}</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={12}
              step={0.5}
              value={inputs.vermarktung_ziel}
              onChange={(e) => handleInputChange('vermarktung_ziel', parseFloat(e.target.value) || 0.5)}
              className="w-full accent-[#686DF4]"
            />
            {inputs.vermarktung_ziel >= inputs.vermarktung_aktuell && (
              <p className="text-red-500 text-[10px] font-bold mt-1">
                Zieldauer muss kürzer sein als aktuelle Dauer.
              </p>
            )}
          </div>
        </div>

        {/* Right Outcomes */}
        <div className="md:col-span-7 space-y-6">
          {results && results.isValid ? (
            <>
              {/* Three cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-3.5 space-y-1">
                  <span className="text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Leerstand aktuell</span>
                  <h4 className="text-sm font-black text-slate-900">{formatCHF(results.leerstand_aktuell)} / J.</h4>
                </div>
                <div className="bg-green-50 border border-green-150 rounded-xl p-3.5 space-y-1">
                  <span className="text-[8.5px] font-mono font-bold text-green-700 uppercase tracking-wider block">Mögl. Einsparung</span>
                  <h4 className="text-sm font-black text-green-700">+{formatCHF(results.einsparung_jahr)} / J.</h4>
                </div>
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-3.5 space-y-1">
                  <span className="text-[8.5px] font-mono font-bold text-slate-400 uppercase tracking-wider block">Verlust pro Tag</span>
                  <h4 className="text-sm font-black text-red-600">{formatCHF(results.kosten_pro_tag)}</h4>
                </div>
              </div>

              {/* Progress and score */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between font-bold">
                  <span>Efficiency-Score</span>
                  <span>{results.score} / 100</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden relative">
                  <div 
                    className="bg-[#686DF4] h-full transition-all duration-700" 
                    style={{ width: `${results.score}%` }} 
                  />
                </div>
              </div>

              {/* Benchmark marker */}
              <div className="text-[11px] text-slate-500 font-semibold flex items-center gap-1.5 pt-1">
                <Clock className="w-4 h-4 text-[#686DF4]" />
                <span>Schweizer Benchmark-Durchschnitt: 2.8 Monate. Ihraktueller Schnitt liegt {results.abweichung_pct > 0 ? `${results.abweichung_pct}% über` : `${Math.abs(results.abweichung_pct)}% unter`} dem Benchmark.</span>
              </div>

              {/* Diagnostics */}
              {currentStufe && (
                <div className={`p-4 rounded-xl border ${currentStufe.color} space-y-1 text-left`}>
                  <span className="text-[8px] font-mono font-black tracking-widest uppercase">{currentStufe.label}</span>
                  <p className="text-xs font-semibold leading-relaxed text-slate-800">{currentStufe.desc}</p>
                </div>
              )}
            </>
          ) : (
            <div className="h-full flex items-center justify-center p-8 border border-dashed border-red-200 rounded-3xl bg-red-50/20 text-center">
              <p className="text-slate-450 text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0" /> Zieldauer muss kürzer sein als die aktuelle Dauer, um Ergebnisse zu berechnen.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      {results && results.isValid && (
        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row gap-5 items-center justify-between">
          <div className="text-left font-semibold text-slate-500 text-[10px] leading-relaxed max-w-md">
            <strong>Möchten Sie das konkret angehen?</strong> Yathur schaut sich Ihre aktuelle Vermarktungssituation an und zeigt, welche Hebel den schnellsten Effekt haben.
          </div>
          <a
            href={`/kontakt?quelle=leerstandsrechner&einsparung=${results.einsparung_jahr}&objekte=${inputs.objekte}`}
            onClick={() => track('leerstandsrechner_cta_click', {
              einsparung_jahr: results.einsparung_jahr,
              output_stufe: results.stufe
            })}
            className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full inline-block text-center shrink-0 w-full sm:w-auto transition-colors"
          >
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      )}
      <p className="text-[8.5px] text-slate-400 font-mono text-center">
        *Keine Verpflichtung. 30 Minuten, konkrete Einschätzung.
      </p>
    </div>
  );
}
