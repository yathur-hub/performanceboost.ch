/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, TrendingUp, Calculator, RefreshCw, HelpCircle, Layers, Settings2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function InteractiveGrowthCalculator() {
  // Input States
  const [budget, setBudget] = useState<number>(2500); // Monatliches Marketingbudget im Ads-Sektor
  const [organic, setOrganic] = useState<number>(500); // Organische & Direct Sessions
  const [cpc, setCpc] = useState<number>(1.50); // Ø Kosten pro Klick / Paid Session
  const [leadConversion, setLeadConversion] = useState<number>(1.2); // Inbound-zu-Lead in %
  const [salesConversion, setSalesConversion] = useState<number>(8.0); // Lead-zu-Deal Close-Rate in %
  const [dealValue, setDealValue] = useState<number>(15000); // Ø Auftragsvolumen / Deal (ACV) in CHF

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

  // Boosted calculated metrics
  const boostedMetrics = useMemo(() => {
    // Optimization of campaigns: reduces average CPC wastage by 15%
    const boostedCpc = Math.max(0.40, cpc * 0.85);
    // Content structure & Organic visibility boost: +30% organic visitor growth
    const boostedOrganic = Math.round(organic * 1.30);
    const boostedTraffic = boostedOrganic + Math.round(budget / boostedCpc);

    // Better landing page experiences, copy & CTA placements: +40% Lead Conversion Efficiency
    const boostedLeadConv = leadConversion * 1.40;
    // CRM Automation, rapid initial response & sales enablement tools: +25% Sales close efficiency
    const boostedSalesConv = salesConversion * 1.25;

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
  }, [budget, organic, cpc, leadConversion, salesConversion, dealValue]);

  const revenueUpliftPercentage = currentMetrics.monthlyRevenue === 0
    ? 0
    : Math.round(((boostedMetrics.monthlyRevenue - currentMetrics.monthlyRevenue) / currentMetrics.monthlyRevenue) * 100);

  const formattedValue = (val: number) => {
    return new Intl.NumberFormat('de-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(val);
  };

  const handleReset = () => {
    setBudget(2500);
    setOrganic(500);
    setCpc(1.50);
    setLeadConversion(1.2);
    setSalesConversion(8.0);
    setDealValue(15000);
  };

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
              <h3 className="text-lg font-display font-bold text-slate-900 tracking-tight">B2B Revenue & Budget Simulator</h3>
            </div>
            <button 
              onClick={handleReset} 
              className="text-xs text-slate-400 hover:text-slate-950 flex items-center gap-1.5 transition-colors bg-slate-50 hover:bg-slate-100 border border-slate-200/60 px-3 py-1.5 rounded-xl font-bold font-mono cursor-pointer"
              title="Simulator zurücksetzen"
            >
              <RefreshCw className="w-3 h-3" /> RESET
            </button>
          </div>
          
          <p className="text-xs text-slate-500 font-semibold leading-relaxed">
            Wie stark wirkt sich ein optimiertes Media-Budget auf deine echten Abschlüsse aus? Dieser Simulator kalibriert sich automatisch anhand realer B2B-Benchmarks für deinen Deal-Scope.
          </p>

          <div className="space-y-6">
            
            {/* --- Section 1: Akquisition & Traffic --- */}
            <div className="space-y-4 pt-1">
              <span className="flex items-center gap-1.5 text-[9.5px] font-mono tracking-widest font-bold text-[#686DF4] uppercase bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md w-fit">
                <Settings2 className="w-3 h-3 text-[#686DF4]" /> 1. AKQUISITION &amp; ACQUISITION DRIVERS
              </span>

              {/* Marketing budget Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-bold font-display">Monatl. Ads-Budget (Google/LinkedIn)</span>
                  <span className="font-bold text-[#686DF4] font-mono">{formattedValue(budget)} / Mt.</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15000"
                  step="250"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-250 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
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
                <input
                  type="range"
                  min="0.50"
                  max="4.00"
                  step="0.10"
                  value={cpc}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
                  <span>CHF 0.50</span>
                  <span>CHF 2.25</span>
                  <span>CHF 4.00</span>
                </div>
              </div>

              {/* Organic/Direct Visitors slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-bold font-display">Organische Sessions / Direct-Traffic</span>
                  <span className="font-bold text-slate-800 font-mono">{organic.toLocaleString('de-CH')} Sessions</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={organic}
                  onChange={(e) => setOrganic(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
                  <span>100</span>
                  <span>2\'500</span>
                  <span>5\'000</span>
                </div>
              </div>

              {/* Resulting aggregate Traffic Display */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 flex justify-between items-center shadow-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-[#686DF4] font-mono font-bold uppercase tracking-wider block">BERECHNETE INBOUND SESSIONS</span>
                  <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                    Aus {organic.toLocaleString('de-CH')} SEO-Visits + {Math.round(budget/cpc).toLocaleString('de-CH')} paid Clicks (Ads)
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-display font-bold text-white block">
                    {currentMetrics.traffic.toLocaleString('de-CH')}
                  </span>
                  <span className="text-[9px] text-[#686DF4] font-mono font-bold block uppercase">sessions / mt.</span>
                </div>
              </div>

            </div>

            {/* --- Section 2: Conversions & ACV --- */}
            <div className="space-y-4 pt-2">
              <span className="flex items-center gap-1.5 text-[9.5px] font-mono tracking-widest font-bold text-[#686DF4] uppercase bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md w-fit">
                <Layers className="w-3 h-3 text-[#686DF4]" /> 2. TRICHTER-EFFIZIENZ &amp; DEALS
              </span>

              {/* Lead Conversion slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-750 text-slate-700 font-bold font-display">Inbound-zu-Lead Konvertierung</span>
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" title="Prozentsatz der Besucher, die ein Formular ausfüllen oder Kontakt aufnehmen." />
                  </div>
                  <span className="font-bold text-[#686DF4] font-mono">{leadConversion.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="4.0"
                  step="0.1"
                  value={leadConversion}
                  onChange={(e) => setLeadConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
                  <span>0.2%</span>
                  <span>2.1%</span>
                  <span>4.0%</span>
                </div>
              </div>

              {/* Sales Close rate Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-700 font-bold font-display">Lead-zu-Deal Abschlussrate (Sales)</span>
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" title="Prozentsatz der qualifizierten Leads, die erfolgreich zum Abschluss geführt werden." />
                  </div>
                  <span className="font-bold text-[#686DF4] font-mono">{salesConversion.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="25.0"
                  step="0.5"
                  value={salesConversion}
                  onChange={(e) => setSalesConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
                  <span>1.0%</span>
                  <span>13.0%</span>
                  <span>25.0%</span>
                </div>
              </div>

              {/* Deal Value Slider */}
              <div className="space-y-2 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-700 font-bold font-display">Ø Auftragswert pro Neukunde (ACV)</span>
                  <span className="font-bold text-[#686DF4] font-mono">{formattedValue(dealValue)}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="80000"
                  step="2000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-mono font-bold">
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
            <span className="inline-flex items-center gap-1.5 bg-[#686DF4]/5 text-[#686DF4] text-[10px] font-bold px-3.5 py-1 rounded-full border border-[#CACCFB]/25 uppercase tracking-widest font-mono">
              <Sparkles className="w-3.5 h-3.5" /> EFFEKT-ANALYSE &amp; UPLIFT
            </span>

            {/* B2B Calibrated indicator badge */}
            <div className="bg-amber-50 border border-amber-200/50 rounded-2xl p-4.5 space-y-1.5">
              <p className="text-[10px] font-mono tracking-wider font-bold text-amber-800 uppercase flex items-center gap-1">
                🛡️ B2B REALITY CALIBRATION ACTIVE
              </p>
              <p className="text-[11px] text-amber-900/80 leading-relaxed font-semibold">
                Da teurere B2B-Deals (aktuell {formattedValue(dealValue)}) naturgemäss komplexere Vertriebszyklen haben, wurden deine Conversion-Raten automatisch konservativ für die B2B-Wirklichkeit tariert:
              </p>
              <div className="flex gap-4 pt-1.5 text-[10px] font-mono text-amber-850 font-semibold border-t border-amber-200/40">
                <div>Lead CR: <span className="font-bold text-slate-900">{currentMetrics.calibratedLeadCR}%</span> <span className="text-slate-400 text-[9px]">(Tariert)</span></div>
                <div>Sales CR: <span className="font-bold text-slate-900">{currentMetrics.calibratedSalesCR}%</span> <span className="text-slate-400 text-[9px]">(Tariert)</span></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Box Current */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200">
                <p className="text-[9px] text-slate-400 tracking-widest uppercase mb-2 font-bold font-mono">STATUS QUO (MONATLICH)</p>
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-bold text-slate-800 font-display">
                    {formattedValue(currentMetrics.monthlyRevenue)} <span className="text-[10px] text-slate-400 font-normal">/ Mt.</span>
                  </div>
                  <div className="text-[10.5px] text-slate-500 font-semibold leading-relaxed border-t border-slate-50 pt-2 space-y-0.5">
                    <div>Qual. Leads: <strong className="text-slate-800">{currentMetrics.leads} / Mt.</strong></div>
                    <div>Geschlossene Deals: <strong className="text-slate-800">{currentMetrics.sales} / Mt.</strong></div>
                  </div>
                </div>
              </div>

              {/* Box Boosted */}
              <div className="bg-[#686DF4]/5 p-5 rounded-2xl border border-[#CACCFB]/35 shadow-xs">
                <p className="text-[9px] text-[#686DF4] tracking-widest uppercase mb-2 flex items-center gap-1 font-bold font-mono">
                  <TrendingUp className="w-3 h-3 text-[#686DF4]" /> OPTIMIERT (MIT BENCHMARKS)
                </p>
                <div className="space-y-2">
                  <div className="text-lg sm:text-xl font-extrabold text-[#686DF4] font-display">
                    {formattedValue(boostedMetrics.monthlyRevenue)} <span className="text-[10px] text-slate-450 font-normal">/ Mt.</span>
                  </div>
                  <div className="text-[10.5px] text-slate-600 font-semibold leading-relaxed border-t border-[#686DF4]/10 pt-2 space-y-0.5">
                    <div>Qual. Leads: <strong className="text-[#686DF4]">{boostedMetrics.leads} / Mt.</strong></div>
                    <div>Geschlossene Deals: <strong className="text-[#686DF4]">{boostedMetrics.sales} / Mt.</strong></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Uplift representation */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-xs">
              <p className="text-[9px] text-slate-400 mb-1.5 font-bold uppercase tracking-widest font-mono">ZUSÄTZLICHES REVENUE-POTENZIAL / JAHR</p>
              <div className="text-2xl sm:text-3.5xl font-display font-extrabold text-[#686DF4] tracking-tight">
                +{formattedValue((boostedMetrics.monthlyRevenue - currentMetrics.monthlyRevenue) * 12)}
              </div>
              <p className="text-xs text-slate-600 font-semibold mt-3 flex items-center justify-center gap-1.5 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                <span>🚀 Planbarer <strong>+{revenueUpliftPercentage}%</strong> Umsatzaufbau durch Beseitigung von Werbebudget-Verschwendung (-15% CPC) und optimiertes Lead-Nurturing.</span>
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200/80 mt-8 flex flex-col sm:flex-row gap-5 items-center justify-between">
            <div className="text-[10px] text-slate-450 leading-relaxed text-center sm:text-left font-semibold">
              *Simulation berechnet auf Basis von Branchenstandards für B2B Lead-Verarbeitung, CRM-Automatisierung und Media-Buying-Optimierung von performanceboost.
            </div>
            <a 
              href="/kontakt"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('navigation-change', { detail: '/kontakt' }));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-[#686DF4] text-white text-xs font-bold px-7 py-4 rounded-full transition-all cursor-pointer uppercase tracking-wider text-[#f6f6f6]"
            >
              Umsatz heben <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
