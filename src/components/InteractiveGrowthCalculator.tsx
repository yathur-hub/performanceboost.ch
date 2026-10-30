/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight, TrendingUp, Calculator, RefreshCw, HelpCircle, Layers, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';
import { trackEvent } from '../lib/analytics';

const TOOL_NAME = 'revenue_budget_simulator';

/**
 * Verbesserungen, mit denen das Rechenbeispiel rechnet. Bewusst vom Besucher einstellbar und vorsichtig
 * vorbelegt: Es gibt keine belegten Durchschnittswerte, die wir als Erwartung angeben könnten (P14/P16).
 */
const DEFAULT_IMPROVEMENTS = { cpcCut: 5, organicGain: 10, leadGain: 10, closeGain: 5 };
type Improvements = typeof DEFAULT_IMPROVEMENTS;

const IMPROVEMENT_SLIDERS: { key: keyof Improvements; label: string; hint: string; max: number; sign: '−' | '+' }[] = [
  { key: 'cpcCut', label: 'Tiefere Klickkosten', hint: 'z. B. durch genauere Suchbegriffe und Ausschlüsse', max: 30, sign: '−' },
  { key: 'organicGain', label: 'Mehr Besuche ohne Werbung', hint: 'z. B. durch bessere Inhalte und Auffindbarkeit', max: 50, sign: '+' },
  { key: 'leadGain', label: 'Höhere Anfragequote', hint: 'z. B. durch eine klarere Anfrageseite', max: 60, sign: '+' },
  { key: 'closeGain', label: 'Höhere Abschlussquote', hint: 'z. B. durch schnellere Antwort und Vorqualifizierung', max: 40, sign: '+' },
];

export default function InteractiveGrowthCalculator() {
  // Input States
  const [budget, setBudget] = useState<number>(2500); // Monatliches Marketingbudget im Ads-Sektor
  const [organic, setOrganic] = useState<number>(500); // Organische & Direct Sessions
  const [cpc, setCpc] = useState<number>(1.50); // Ø Kosten pro Klick / Paid Session
  const [leadConversion, setLeadConversion] = useState<number>(1.2); // Inbound-zu-Lead in %
  const [salesConversion, setSalesConversion] = useState<number>(8.0); // Lead-zu-Deal Close-Rate in %
  const [dealValue, setDealValue] = useState<number>(15000); // Ø Auftragsvolumen / Deal (ACV) in CHF
  const [improvements, setImprovements] = useState<Improvements>(DEFAULT_IMPROVEMENTS);

  useEffect(() => { trackEvent('tool_view', { tool_name: TOOL_NAME }) }, []);

  const hasInteractedRef = useRef(false);
  function commitStep(stepId: string, value: number) {
    trackEvent('tool_step', { tool_name: TOOL_NAME, step_id: stepId, value });
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;
      trackEvent('tool_complete', { tool_name: TOOL_NAME });
    }
  }

  // Current calculated metrics with B2B Calibration Engine
  const currentMetrics = useMemo(() => {
    // Total Traffic is organic + (budget divided by CPC)
    const traffic = organic + Math.round(budget / (cpc || 1));
    
    // B2B Calibration Engine: Keeps conversion rates realistic for high-ticket deals.
    // Highly expensive B2B deals have lower conversion rates than low-ticket transactional sales.
    const acvScale = Math.max(1, dealValue / 12000);
    const calibratedLeadCR = leadConversion / Math.pow(acvScale, 0.18); 
    const calibratedSalesCR = salesConversion / Math.pow(acvScale, 0.28);

    const leads = traffic * (calibratedLeadCR / 100);
    const sales = leads * (calibratedSalesCR / 100);
    const monthlyRevenue = sales * dealValue;

    return {
      traffic,
      leads: Math.round(leads),
      sales: parseFloat(sales.toFixed(1)),
      monthlyRevenue: Math.round(monthlyRevenue),
      calibratedLeadCR: parseFloat(calibratedLeadCR.toFixed(2)),
      calibratedSalesCR: parseFloat(calibratedSalesCR.toFixed(2))
    };
  }, [budget, organic, cpc, leadConversion, salesConversion, dealValue]);

  // Metrics with the improvements the visitor has set
  const boostedMetrics = useMemo(() => {
    const boostedCpc = Math.max(0.40, cpc * (1 - improvements.cpcCut / 100));
    const boostedOrganic = Math.round(organic * (1 + improvements.organicGain / 100));
    const boostedTraffic = boostedOrganic + Math.round(budget / boostedCpc);

    const boostedLeadConv = leadConversion * (1 + improvements.leadGain / 100);
    const boostedSalesConv = salesConversion * (1 + improvements.closeGain / 100);

    const acvScale = Math.max(1, dealValue / 12000);
    const calibratedLeadCR = boostedLeadConv / Math.pow(acvScale, 0.18); 
    const calibratedSalesCR = boostedSalesConv / Math.pow(acvScale, 0.28);

    const leads = boostedTraffic * (calibratedLeadCR / 100);
    const sales = leads * (calibratedSalesCR / 100);
    const monthlyRevenue = sales * dealValue;

    return {
      traffic: boostedTraffic,
      leads: Math.round(leads),
      sales: parseFloat(sales.toFixed(1)),
      monthlyRevenue: Math.round(monthlyRevenue),
      calibratedLeadCR: parseFloat(calibratedLeadCR.toFixed(2)),
      calibratedSalesCR: parseFloat(calibratedSalesCR.toFixed(2)),
      optCpc: parseFloat(boostedCpc.toFixed(2)),
      optOrganic: boostedOrganic
    };
  }, [budget, organic, cpc, leadConversion, salesConversion, dealValue, improvements]);

  const revenueUpliftPercentage = currentMetrics.monthlyRevenue === 0
    ? 0
    : Math.round(((boostedMetrics.monthlyRevenue - currentMetrics.monthlyRevenue) / currentMetrics.monthlyRevenue) * 100);

  const formattedValue = (val: number) => {
    return new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(val);
  };

  const handleReset = () => {
    trackEvent('tool_reset', { tool_name: TOOL_NAME });
    setBudget(2500);
    setOrganic(500);
    setCpc(1.50);
    setLeadConversion(1.2);
    setSalesConversion(8.0);
    setDealValue(15000);
    setImprovements(DEFAULT_IMPROVEMENTS);
  };

  const improvementSummary = IMPROVEMENT_SLIDERS.filter((s) => improvements[s.key] > 0)
    .map((s) => `${s.sign}${improvements[s.key]}% ${s.label.replace(/^(Tiefere|Mehr|Höhere) /, '')}`)
    .join(', ');

  return (
    <div className="bg-white border border-[#E2E8F0]/65 rounded-3xl p-6 md:p-10 text-slate-800 relative overflow-hidden shadow-[var(--shadow-premium-lg)]" id="growth-calculator">
      {/* Soft branding glow background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
        
        {/* Left Side: Inputs and Sliders */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex justify-between items-center pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <Calculator className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
              <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">Umsatz- und Budgetrechner</h3>
            </div>
            <button 
              onClick={handleReset} 
              className="text-xs text-slate-400 hover:text-slate-950 flex items-center gap-1.5 transition-colors bg-slate-50 hover:bg-slate-100 border border-slate-200/60 px-3 py-1.5 rounded-xl font-bold font-mono cursor-pointer"
              title="Rechner zurücksetzen"
            >
              <RefreshCw className="w-3 h-3" /> Zurücksetzen
            </button>
          </div>
          
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Rechnen Sie durch, wie sich Werbebudget, Klickkosten und Abschlussquoten auf Ihre Aufträge auswirken. Die Werte sind Beispiele: Passen Sie sie an Ihre eigenen Zahlen an.
          </p>

          <div className="space-y-6">
            
            {/* --- Section 1: Akquisition & Traffic --- */}
            <div className="space-y-4 pt-1">
              <span className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest font-bold text-[#686DF4] uppercase bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md w-fit">
                <Settings2 className="w-3 h-3 text-[#686DF4]" /> 1. Besucher und Werbung
              </span>

              {/* Marketing budget Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-bold font-display">Werbebudget pro Monat (Google, LinkedIn)</span>
                  <span className="font-bold text-[#686DF4] font-mono">{formattedValue(budget)} / Mt.</span>
                </div>
                <input aria-label="Werbebudget pro Monat (Google, LinkedIn)"
                  type="range"
                  min="0"
                  max="15000"
                  step="250"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  onMouseUp={(e) => commitStep('ads_budget', Number(e.currentTarget.value))}
                  onTouchEnd={(e) => commitStep('ads_budget', Number(e.currentTarget.value))}
                  onKeyUp={(e) => commitStep('ads_budget', Number(e.currentTarget.value))}
                  className="w-full h-1.5 bg-slate-250 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                  <span>CHF 0</span>
                  <span>CHF 7\'500</span>
                  <span>CHF 15\'000</span>
                </div>
              </div>

              {/* Inbound CPC Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-705 text-slate-700 font-bold font-display">Ø Kosten pro Klick (CPC)</span>
                  <span className="font-bold text-amber-600 font-mono">CHF {cpc.toFixed(2)}</span>
                </div>
                <input aria-label="Ø Kosten pro Klick (CPC)"
                  type="range"
                  min="0.50"
                  max="4.00"
                  step="0.10"
                  value={cpc}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  onMouseUp={(e) => commitStep('cpc', Number(e.currentTarget.value))}
                  onTouchEnd={(e) => commitStep('cpc', Number(e.currentTarget.value))}
                  onKeyUp={(e) => commitStep('cpc', Number(e.currentTarget.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                  <span>CHF 0.50</span>
                  <span>CHF 2.25</span>
                  <span>CHF 4.00</span>
                </div>
              </div>

              {/* Organic/Direct Visitors slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-bold font-display">Besuche ohne Werbung (Google-Suche, direkt)</span>
                  <span className="font-bold text-slate-800 font-mono">{organic.toLocaleString('de-CH')} Besuche</span>
                </div>
                <input aria-label="Besuche ohne Werbung (Google-Suche, direkt)"
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={organic}
                  onChange={(e) => setOrganic(Number(e.target.value))}
                  onMouseUp={(e) => commitStep('organic_sessions', Number(e.currentTarget.value))}
                  onTouchEnd={(e) => commitStep('organic_sessions', Number(e.currentTarget.value))}
                  onKeyUp={(e) => commitStep('organic_sessions', Number(e.currentTarget.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                  <span>100</span>
                  <span>2\'500</span>
                  <span>5\'000</span>
                </div>
              </div>

              {/* Resulting aggregate Traffic Display */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 flex justify-between items-center shadow-xs">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-[#686DF4] font-mono font-bold uppercase tracking-wider block">Besuche pro Monat (berechnet)</span>
                  <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                    Aus {organic.toLocaleString('de-CH')} Besuchen ohne Werbung + {Math.round(budget/cpc).toLocaleString('de-CH')} Klicks aus Anzeigen
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-display font-bold text-white block">
                    {currentMetrics.traffic.toLocaleString('de-CH')}
                  </span>
                  <span className="text-[11px] text-[#686DF4] font-mono font-bold block uppercase">Besuche / Mt.</span>
                </div>
              </div>

            </div>

            {/* --- Section 2: Conversions & ACV --- */}
            <div className="space-y-4 pt-2">
              <span className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest font-bold text-[#686DF4] uppercase bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md w-fit">
                <Layers className="w-3 h-3 text-[#686DF4]" /> 2. Anfragen und Aufträge
              </span>

              {/* Lead Conversion slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-750 text-slate-700 font-bold font-display">Anteil Besucher, die anfragen</span>
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" title="Prozentsatz der Besucher, die ein Formular ausfüllen oder Kontakt aufnehmen." />
                  </div>
                  <span className="font-bold text-[#686DF4] font-mono">{leadConversion.toFixed(1)}%</span>
                </div>
                <input aria-label="Anteil Besucher, die anfragen"
                  type="range"
                  min="0.2"
                  max="4.0"
                  step="0.1"
                  value={leadConversion}
                  onChange={(e) => setLeadConversion(Number(e.target.value))}
                  onMouseUp={(e) => commitStep('lead_conversion_rate', Number(e.currentTarget.value))}
                  onTouchEnd={(e) => commitStep('lead_conversion_rate', Number(e.currentTarget.value))}
                  onKeyUp={(e) => commitStep('lead_conversion_rate', Number(e.currentTarget.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                  <span>0.2%</span>
                  <span>2.1%</span>
                  <span>4.0%</span>
                </div>
              </div>

              {/* Sales Close rate Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-700 font-bold font-display">Abschlussquote (Anfrage zu Auftrag)</span>
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" title="Anteil der Anfragen, aus denen ein Auftrag wird." />
                  </div>
                  <span className="font-bold text-[#686DF4] font-mono">{salesConversion.toFixed(1)}%</span>
                </div>
                <input aria-label="Abschlussquote (Anfrage zu Auftrag)"
                  type="range"
                  min="1.0"
                  max="25.0"
                  step="0.5"
                  value={salesConversion}
                  onChange={(e) => setSalesConversion(Number(e.target.value))}
                  onMouseUp={(e) => commitStep('sales_close_rate', Number(e.currentTarget.value))}
                  onTouchEnd={(e) => commitStep('sales_close_rate', Number(e.currentTarget.value))}
                  onKeyUp={(e) => commitStep('sales_close_rate', Number(e.currentTarget.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                  <span>1.0%</span>
                  <span>13.0%</span>
                  <span>25.0%</span>
                </div>
              </div>

              {/* Deal Value Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-bold font-display">Ø Auftragswert pro Neukunde</span>
                  <span className="font-bold text-[#686DF4] font-mono">{formattedValue(dealValue)}</span>
                </div>
                <input aria-label="Ø Auftragswert pro Neukunde"
                  type="range"
                  min="2000"
                  max="80000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  onMouseUp={(e) => commitStep('deal_value', Number(e.currentTarget.value))}
                  onTouchEnd={(e) => commitStep('deal_value', Number(e.currentTarget.value))}
                  onKeyUp={(e) => commitStep('deal_value', Number(e.currentTarget.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                  <span>CHF 2\'000</span>
                  <span>CHF 41\'000</span>
                  <span>CHF 80\'000</span>
                </div>
              </div>

            </div>


          </div>
        </div>

        {/* Right Side: Boosted Results Output */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between bg-[#f8fafc]/75 border border-[#E2E8F0] rounded-3xl p-6 sm:p-8 relative shadow-[var(--shadow-premium-sm)]">
          
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-[#686DF4]/5 text-[#686DF4] text-[11px] font-bold px-3.5 py-1 rounded-full border border-[#CACCFB]/25 uppercase tracking-widest font-mono">
              <Sparkles className="w-3.5 h-3.5" /> Rechenbeispiel
            </span>

            {/* B2B Calibrated indicator badge */}
            <div className="bg-amber-50 border border-amber-200/50 rounded-2xl p-4.5 space-y-1.5">
              <p className="text-[11px] font-mono tracking-wider font-bold text-amber-800 uppercase flex items-center gap-1">
                Anpassung an den Auftragswert
              </p>
              <p className="text-[11px] text-amber-900/80 leading-relaxed font-semibold">
                Bei höheren Auftragswerten (aktuell {formattedValue(dealValue)}) dauert der Verkauf meist länger. Der Rechner senkt Ihre Quoten deshalb mit einer vereinfachten Annahme etwas ab:
              </p>
              <div className="flex gap-4 pt-1.5 text-[11px] font-mono text-amber-850 font-semibold border-t border-amber-200/40">
                <div>Anfragequote: <span className="font-bold text-slate-900">{currentMetrics.calibratedLeadCR}%</span> <span className="text-slate-400 text-[11px]">(angepasst)</span></div>
                <div>Abschlussquote: <span className="font-bold text-slate-900">{currentMetrics.calibratedSalesCR}%</span> <span className="text-slate-400 text-[11px]">(angepasst)</span></div>
              </div>
            </div>

            {/* Improvements set by the visitor, directly above their effect */}
            <div className="space-y-3">
              <span className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest font-bold text-[#686DF4] uppercase bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md w-fit">
                <TrendingUp className="w-3 h-3 text-[#686DF4]" /> Ihre Annahmen
              </span>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Welche Verbesserung halten Sie für realistisch? Die Startwerte sind bewusst vorsichtig gewählt. Bei 0% ändert sich nichts.
              </p>

              {IMPROVEMENT_SLIDERS.map((s) => (
                <div key={s.key} className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex justify-between items-center text-xs gap-3">
                    <div>
                      <span className="text-slate-700 font-bold font-display block">{s.label}</span>
                      <span className="text-[11px] text-slate-400 font-semibold">{s.hint}</span>
                    </div>
                    <span className="font-bold text-[#686DF4] font-mono shrink-0">{s.sign}{improvements[s.key]}%</span>
                  </div>
                  <input aria-label={s.label}
                    type="range"
                    min="0"
                    max={s.max}
                    step="5"
                    value={improvements[s.key]}
                    onChange={(e) => setImprovements((prev) => ({ ...prev, [s.key]: Number(e.target.value) }))}
                    onMouseUp={(e) => commitStep(`improvement_${s.key}`, Number(e.currentTarget.value))}
                    onTouchEnd={(e) => commitStep(`improvement_${s.key}`, Number(e.currentTarget.value))}
                    onKeyUp={(e) => commitStep(`improvement_${s.key}`, Number(e.currentTarget.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono font-bold">
                    <span>0%</span>
                    <span>{s.max}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box Current */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <p className="text-[11px] text-slate-400 tracking-widest uppercase mb-2 font-bold font-mono">Heute (pro Monat)</p>
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-bold text-slate-800 font-display">
                    {formattedValue(currentMetrics.monthlyRevenue)} <span className="text-[11px] text-slate-400 font-normal">/ Mt.</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-semibold leading-relaxed border-t border-slate-50 pt-2 space-y-0.5">
                    <div>Anfragen: <strong className="text-slate-800">{currentMetrics.leads} / Mt.</strong></div>
                    <div>Aufträge: <strong className="text-slate-800">{currentMetrics.sales} / Mt.</strong></div>
                  </div>
                </div>
              </div>

              {/* Box Boosted */}
              <div className="bg-[#686DF4]/5 p-5 rounded-2xl border border-[#CACCFB]/35 shadow-xs">
                <p className="text-[11px] text-[#686DF4] tracking-widest uppercase mb-2 flex items-center gap-1 font-bold font-mono">
                  <TrendingUp className="w-3 h-3 text-[#686DF4]" /> Mit Ihren Annahmen
                </p>
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-extrabold text-[#686DF4] font-display">
                    {formattedValue(boostedMetrics.monthlyRevenue)} <span className="text-[11px] text-slate-450 font-normal">/ Mt.</span>
                  </div>
                  <div className="text-[11px] text-slate-600 font-semibold leading-relaxed border-t border-[#686DF4]/10 pt-2 space-y-0.5">
                    <div>Anfragen: <strong className="text-[#686DF4]">{boostedMetrics.leads} / Mt.</strong></div>
                    <div>Aufträge: <strong className="text-[#686DF4]">{boostedMetrics.sales} / Mt.</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Uplift representation */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
              <p className="text-[11px] text-slate-400 mb-1.5 font-bold uppercase tracking-widest font-mono">Mögliches zusätzliches Umsatzpotenzial pro Jahr</p>
              <div className="text-2xl sm:text-3.5xl font-display font-extrabold text-[#686DF4] tracking-tight">
                +{formattedValue((boostedMetrics.monthlyRevenue - currentMetrics.monthlyRevenue) * 12)}
              </div>
              <p className="text-xs text-slate-600 font-semibold mt-3 flex items-center justify-center gap-1.5 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span>
                  {improvementSummary
                    ? <>Rechnerisch <strong>+{revenueUpliftPercentage}%</strong> mit Ihren Annahmen ({improvementSummary}). Ein Rechenbeispiel, kein Versprechen.</>
                    : <>Ohne angenommene Verbesserung ändert sich nichts. Stellen Sie oben unter «Ihre Annahmen» ein, was Sie für realistisch halten.</>}
                </span>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200/80 mt-8 flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-[11px] text-slate-450 leading-relaxed text-center sm:text-left font-semibold">
              *Grobe Schätzung mit vereinfachten Annahmen. Wie viel davon in Ihrem Fall realistisch ist, klären wir gerne im Erstgespräch.
            </div>
            <a 
              href="/kontakt"
              onClick={(e) => {
                e.preventDefault();
                trackEvent('tool_cta_click', { tool_name: TOOL_NAME, cta_label: 'Umsatz heben' });
                window.dispatchEvent(new CustomEvent('navigation-change', { detail: '/kontakt' }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#686DF4] text-white text-xs font-bold px-7 py-4 rounded-full transition-all cursor-pointer uppercase tracking-wider text-[#f6f6f6]"
            >
              Ergebnis besprechen <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
