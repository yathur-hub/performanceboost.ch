import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ArrowRight, Sparkles, Check, AlertTriangle, ArrowDown } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

const BENCHMARK_MQL_TO_OPP = 0.35;   // 35%
const BENCHMARK_OPP_TO_CLOSE = 0.30; // 30%

export default function RevenuLeakDetector() {
  const [mqlText, setMqlText] = useState<number | ''>('');
  const [mqlToOpp, setMqlToOpp] = useState<number | ''>('');
  const [oppToClose, setOppToClose] = useState<number | ''>('');
  const [auftragswert, setAuftragswert] = useState<number | ''>('');

  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    track("hero_tool_viewed", { page: "revenue-operations" });
  }, []);

  const handleFieldChange = (field: string, val: any) => {
    if (!hasStarted) {
      setHasStarted(true);
      track("hero_tool_started", { page: "revenue-operations" });
    }
    if (field === 'mql') setMqlText(val === '' ? '' : Math.max(1, Number(val)));
    else if (field === 'mqlToOpp') setMqlToOpp(val === '' ? '' : Number(val));
    else if (field === 'oppToClose') setOppToClose(val === '' ? '' : Number(val));
    else if (field === 'auftragswert') setAuftragswert(val === '' ? '' : Math.max(1, Number(val)));
  };

  const isComplete = mqlText !== '' && mqlToOpp !== '' && oppToClose !== '' && auftragswert !== '';

  const results = React.useMemo(() => {
    if (!isComplete) return null;

    const m = Number(mqlText);
    const mToOpp = Number(mqlToOpp);
    const oToClose = Number(oppToClose);
    const val = Number(auftragswert);

    // Actual
    const istOpps = m * mToOpp;
    const istKunden = istOpps * oToClose;
    const istRevenue = istKunden * val;

    // Best in Class
    const bicOpps = m * BENCHMARK_MQL_TO_OPP;
    const bicKunden = bicOpps * BENCHMARK_OPP_TO_CLOSE;
    const bicRevenue = bicKunden * val;

    // Leak
    const leckMonatlich = Math.max(0, bicRevenue - istRevenue);
    const leckJaehrlich = leckMonatlich * 12;

    const abweichungMqlToOpp = BENCHMARK_MQL_TO_OPP - mToOpp;
    const abweichungOppToClose = BENCHMARK_OPP_TO_CLOSE - oToClose;
    const engpass = abweichungMqlToOpp >= abweichungOppToClose ? "mql_to_opp" : "opp_to_close";

    const uberBenchmark = istRevenue >= bicRevenue;

    return {
      istOpps,
      istKunden,
      istRevenue,
      bicOpps,
      bicKunden,
      bicRevenue,
      leckMonatlich,
      leckJaehrlich,
      engpass,
      uberBenchmark,
      mToOppSelected: mToOpp,
      oToCloseSelected: oToClose
    };
  }, [mqlText, mqlToOpp, oppToClose, auftragswert, isComplete]);

  useEffect(() => {
    if (results) {
      track("hero_tool_output_shown", {
        page: "revenue-operations",
        leck_monatlich: results.leckMonatlich,
        leck_jaehrlich: results.leckJaehrlich,
        engpass: results.engpass,
        uber_benchmark: results.uberBenchmark
      });
    }
  }, [results]);

  const handleBooking = () => {
    track("hero_tool_cta_click", { page: "revenue-operations", variant: "booking" });
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-5xl mx-auto text-left" id="revenue-leak-detector">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <Layers className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Umsatz-Check: Wo gehen Aufträge verloren?
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/40">
          Rechner
        </span>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-8 font-semibold">
        Rechnen Sie in rund einer Minute durch, an welcher Stelle zwischen Anfrage und Auftrag bei Ihnen am meisten verloren geht.
      </p>

      {/* Two columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Side: Inputs */}
        <div className="lg:col-span-6 space-y-6">
          <h4 className="text-sm font-semibold text-slate-900 font-display">Ihre heutigen Zahlen</h4>
          
          {/* Field 1 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-850 block">Qualifizierte Anfragen pro Monat</label>
            <input aria-label="Qualifizierte Anfragen pro Monat"
              type="number"
              min="1"
              max="100000"
              placeholder="z. B. 100"
              value={mqlText}
              onChange={e => handleFieldChange('mql', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs animate-fadeIn"
            />
            <p className="text-[11px] text-slate-400 font-medium">Anfragen, die das Marketing als bereit für den Vertrieb einstuft.</p>
          </div>

          {/* Field 2 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-850 block">Anteil Anfragen, aus denen ein Verkaufsgespräch wird (%)</label>
            <select aria-label="Anteil Anfragen, aus denen ein Verkaufsgespräch wird (%)"
              value={mqlToOpp}
              onChange={e => handleFieldChange('mqlToOpp', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              <option value="">Bitte wählen...</option>
              <option value="0.03">Unter 5% (gering)</option>
              <option value="0.075">5% – 10% (mittel)</option>
              <option value="0.15">10% – 20% (gut)</option>
              <option value="0.25">20% – 30% (sehr gut)</option>
              <option value="0.35">Über 30% (sehr hoch)</option>
            </select>
            <p className="text-[11px] text-slate-400 font-medium">Anteil der Anfragen, die zu einem konkreten Verkaufsgespräch oder Angebot führen.</p>
          </div>

          {/* Field 3 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-850 block">Abschlussquote (%)</label>
            <select aria-label="Abschlussquote (%)"
              value={oppToClose}
              onChange={e => handleFieldChange('oppToClose', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              <option value="">Bitte wählen...</option>
              <option value="0.07">Unter 10% (gering)</option>
              <option value="0.15">10% – 20% (mittel)</option>
              <option value="0.25">20% – 30% (gut)</option>
              <option value="0.35">Über 30% (sehr hoch)</option>
            </select>
            <p className="text-[11px] text-slate-400 font-medium">Anteil der Verkaufsgespräche bzw. Angebote, aus denen ein Auftrag wird.</p>
          </div>

          {/* Field 4 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-850 block">Durchschnittlicher Auftragswert (CHF)</label>
            <input aria-label="Durchschnittlicher Auftragswert (CHF)"
              type="number"
              min="100"
              max="10000000"
              placeholder="z. B. 8'000"
              value={auftragswert}
              onChange={e => handleFieldChange('auftragswert', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
            />
          </div>

        </div>

        {/* Right Side: Funnel visualization */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {!results ? (
            <div className="bg-[#f6f6f6]/55 border border-slate-200/50 rounded-2xl p-8 text-center min-h-[340px] flex flex-col justify-center items-center shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Vorschau
              </h4>
              <p className="text-xs text-slate-450 leading-relaxed font-semibold text-slate-500 max-w-xs">
                Füllen Sie alle Felder aus, um Ihren Anfrageprozess und die Abweichung zum Richtwert zu sehen.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 text-center"
            >
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block text-left">
                Ihr Weg von der Anfrage zum Auftrag
              </span>

              {/* Funnel SVG Illustration */}
              <div className="w-full h-56 flex justify-center items-center relative py-2">
                <svg viewBox="0 0 320 200" className="w-full h-full max-w-[280px]">
                  
                  {/* Outer / BIC boundary reference (Dashed polygon outline) */}
                  <polygon 
                    points="20,10 300,10 240,80 80,80" 
                    fill="none" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.5" 
                    strokeDasharray="3,3"
                  />
                  <polygon 
                    points="80,85 240,85 200,155 120,155" 
                    fill="none" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.5" 
                    strokeDasharray="3,3"
                  />
                  <polygon 
                    points="120,160 200,160 180,195 140,195" 
                    fill="none" 
                    stroke="#CBD5E1" 
                    strokeWidth="1.5" 
                    strokeDasharray="3,3"
                  />

                  {/* Red Shrunk "Lost" Area behind actual layer for Stage 2 & 3 */}
                  {!results.uberBenchmark && (
                    <>
                      <polygon 
                        points="80,85 240,85 200,155 120,155" 
                        fill="#E63946" 
                        fillOpacity="0.08"
                      />
                      <polygon 
                        points="120,160 200,160 180,195 140,195" 
                        fill="#E63946" 
                        fillOpacity="0.08"
                      />
                    </>
                  )}

                  {/* Stage 1: MQL bar (Full actual size) */}
                  <polygon 
                    points="24,10 296,10 236,75 84,75" 
                    fill={results.uberBenchmark ? "#2A9D8F" : "#4A5568"} 
                    fillOpacity="0.85"
                  />

                  {/* Stage 2: Opportunities polygon (proportional shrink) */}
                  {(() => {
                    const actualRate = results.mToOppSelected;
                    const bicRate = BENCHMARK_MQL_TO_OPP;
                    const widthFactor = Math.min(1.0, actualRate / bicRate);
                    const leftInset = 80 + (80 * (1 - widthFactor));
                    const rightInset = 240 - (80 * (1 - widthFactor));
                    const bottomLeftInset = 120 + (40 * (1 - widthFactor));
                    const bottomRightInset = 200 - (40 * (1 - widthFactor));

                    return (
                      <polygon 
                        points={`${leftInset},85 ${rightInset},85 ${bottomRightInset},150 ${bottomLeftInset},150`} 
                        fill={results.uberBenchmark ? "#2A9D8F" : "#718096"} 
                        fillOpacity="0.8"
                      />
                    );
                  })()}

                  {/* Stage 3: Kunden polygon (proportional shrink) */}
                  {(() => {
                    const actualRate = results.oToCloseSelected;
                    const bicRate = BENCHMARK_OPP_TO_CLOSE;
                    const widthFactor = Math.min(1.0, actualRate / bicRate);
                    const leftInset = 120 + (40 * (1 - widthFactor));
                    const rightInset = 200 - (40 * (1 - widthFactor));
                    const bottomLeftInset = 140 + (20 * (1 - widthFactor));
                    const bottomRightInset = 160 - (20 * (1 - widthFactor));

                    return (
                      <polygon 
                        points={`${leftInset},155 ${rightInset},155 ${bottomRightInset},195 ${bottomLeftInset},195`} 
                        fill={results.uberBenchmark ? "#2A9D8F" : "#4A5568"} 
                        fillOpacity="0.9"
                      />
                    );
                  })()}

                  {/* Graph Text overlay indicators */}
                  <text x="160" y="45" fill="white" fontStyle="normal" fontWeight="bold" fontSize="9" textAnchor="middle">
                    {formatNumber(Number(mqlText))} Anfragen
                  </text>
                  <text x="160" y="125" fill="white" fontStyle="normal" fontWeight="bold" fontSize="9" textAnchor="middle">
                    {formatNumber(results.istOpps, 1)} Verkaufsgespräche
                  </text>
                  <text x="160" y="180" fill="white" fontStyle="normal" fontWeight="bold" fontSize="8" textAnchor="middle">
                    {formatNumber(results.istKunden, 1)} Aufträge
                  </text>

                </svg>

                {/* Vertical rate arrows badges (left: actual, right: BIC in gray) */}
                <div className="absolute left-1 top-[42%] translate-y-1 bg-white border border-slate-200 shadow-3xs rounded-md px-1.5 py-0.5 text-[11px] font-mono leading-none">
                  Ist: <strong className={results.uberBenchmark ? "text-emerald-500" : "text-amber-500"}>{Math.round(results.mToOppSelected * 100)}%</strong>
                </div>
                <div className="absolute right-1 top-[42%] translate-y-1 bg-slate-100 border border-slate-200 text-slate-500 rounded-md px-1.5 py-0.5 text-[11px] font-mono leading-none">
                  Richtwert: <strong>35%</strong>
                </div>

                <div className="absolute left-1 bottom-[16%] translate-y-1 bg-white border border-slate-200 shadow-3xs rounded-md px-1.5 py-0.5 text-[11px] font-mono leading-none">
                  Ist: <strong className={results.uberBenchmark ? "text-emerald-500" : "text-amber-500"}>{Math.round(results.oToCloseSelected * 100)}%</strong>
                </div>
                <div className="absolute right-1 bottom-[16%] translate-y-1 bg-slate-100 border border-slate-200 text-slate-500 rounded-md px-1.5 py-0.5 text-[11px] font-mono leading-none">
                  Richtwert: <strong>30%</strong>
                </div>

              </div>

            </motion.div>
          )}
        </div>

      </div>

      {/* Output statistics region below on complete state */}
      <AnimatePresence>
        {isComplete && results && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-10 space-y-8 pt-8 border-t border-slate-200"
          >
            
            {/* Giant alert banner if leak is exceptionally massive */}
            {results.leckMonatlich > 200000 && (
              <div className="bg-red-50 border border-red-200 p-5 rounded-2xl text-left flex gap-4 items-center">
                <AlertTriangle className="w-6 h-6 text-[#E63946] shrink-0" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#E63946] font-display">
                    Sehr grosse Abweichung zum Richtwert
                  </h5>
                  <p className="text-[11px] text-[#E63946] font-semibold leading-relaxed mt-1">
                    Bei einer Abweichung dieser Grösse lohnt es sich, Ihre Eingaben und den Anfrageprozess genau anzuschauen. Oft liegt die Ursache eher in der Strategie als im Tagesgeschäft.
                  </p>
                </div>
              </div>
            )}

            {/* Main output numbers banner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200/85 p-6 sm:p-8 rounded-2xl">
              
              <div className="space-y-1 text-left">
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block leading-none">
                  {results.uberBenchmark ? "Über dem Richtwert" : "Mögliches Umsatzpotenzial pro Monat"}
                </span>
                
                {results.uberBenchmark ? (
                  <div className="text-2xl sm:text-3xl font-black font-display text-emerald-500">
                    Keine grosse Lücke erkennbar
                  </div>
                ) : (
                  <div className="text-3xl sm:text-4xl font-extrabold font-display leading-tight text-[#E63946] tracking-tight">
                    {formatCHF(results.leckMonatlich)}
                  </div>
                )}
                <p className="text-[11px] text-slate-405 text-slate-405 text-slate-400 font-semibold uppercase tracking-wider font-mono">
                  {results.uberBenchmark ? "Sie liegen rechnerisch über dem Richtwert" : "Grobe Schätzung gegenüber dem Richtwert"}
                </p>
              </div>

              {!results.uberBenchmark && (
                <div className="space-y-1 text-left border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
                  <span className="text-[11px] font-mono text-slate-450 text-slate-400 font-bold uppercase tracking-widest block leading-none">
                    Mögliches Umsatzpotenzial pro Jahr
                  </span>
                  <div className="text-xl sm:text-2xl font-black font-display text-slate-800">
                    {formatCHF(results.leckJaehrlich)}
                  </div>
                  <p className="text-[11px] text-slate-455 text-slate-400 font-semibold uppercase tracking-wider font-mono">
                    Grobe Schätzung, kein Versprechen
                  </p>
                </div>
              )}

            </div>

            {/* Benchmark Tabular statistics */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                Vergleich mit Richtwerten (Annahmen)
              </span>

              <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-3xs">
                <table className="w-full text-left text-xs text-slate-650 font-semibold border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 text-slate-405 text-slate-400 text-[11px] font-mono uppercase tracking-wider">
                      <th className="py-3 px-4">Stufe</th>
                      <th className="py-3 px-4">Ihre Werte</th>
                      <th className="py-3 px-4">Richtwert (35% / 30%)</th>
                      <th className="py-3 px-4 text-right">Differenz</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="py-3 px-4 text-slate-800 font-bold">Anfrage → Verkaufsgespräch</td>
                      <td className="py-3 px-4">{(results.mToOppSelected * 105 - results.mToOppSelected * 5).toFixed(1)}%</td>
                      <td className="py-3 px-4">35.0%</td>
                      <td className={`py-3 px-4 text-right font-mono ${results.mToOppSelected < 0.35 ? 'text-[#E63946]' : 'text-emerald-500'}`}>
                        {results.mToOppSelected < 0.35 ? '-' : '+'}{(Math.abs(0.35 - results.mToOppSelected) * 100).toFixed(1)}%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-800 font-bold">Verkaufsgespräch → Auftrag</td>
                      <td className="py-3 px-4">{(results.oToCloseSelected * 100).toFixed(1)}%</td>
                      <td className="py-3 px-4">30.0%</td>
                      <td className={`py-3 px-4 text-right font-mono ${results.oToCloseSelected < 0.30 ? 'text-[#E63946]' : 'text-emerald-500'}`}>
                        {results.oToCloseSelected < 0.30 ? '-' : '+'}{(Math.abs(0.30 - results.oToCloseSelected) * 100).toFixed(1)}%
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-slate-800 font-bold">Aufträge / Monat</td>
                      <td className="py-3 px-4 font-mono">{formatNumber(results.istKunden, 1)}</td>
                      <td className="py-3 px-4 font-mono">{formatNumber(results.bicKunden, 1)}</td>
                      <td className={`py-3 px-4 text-right font-mono ${results.istKunden < results.bicKunden ? 'text-[#E63946]' : 'text-emerald-500'}`}>
                        {formatNumber(results.istKunden - results.bicKunden, 1)} Aufträge / Mt.
                      </td>
                    </tr>
                    <tr className="bg-slate-50 font-bold">
                      <td className="py-3.5 px-4 text-slate-900">Umsatz / Monat</td>
                      <td className="py-3.5 px-4 font-mono">{formatCHF(results.istRevenue)}</td>
                      <td className="py-3.5 px-4 font-mono">{formatCHF(results.bicRevenue)}</td>
                      <td className={`py-3.5 px-4 text-right font-mono text-sm ${results.istRevenue < results.bicRevenue ? 'text-[#E63946]' : 'text-emerald-500'}`}>
                        {results.istRevenue < results.bicRevenue ? '-' : '+'}{formatCHF(Math.abs(results.bicRevenue - results.istRevenue))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Diagnostic insights mapping */}
            <div className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold text-slate-705 text-slate-600 bg-slate-50 border border-slate-200/50 p-5 rounded-2xl space-y-3">
              <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest block leading-none">
                Wo Sie ansetzen sollten
              </span>

              {results.uberBenchmark ? (
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center shrink-0">
                      ✓
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                      Ihre Quoten liegen über dem Richtwert.
                    </h5>
                  </div>
                  <p className="text-xs text-slate-550 leading-relaxed">
                    Das ist eine gute Ausgangslage. Jetzt geht es darum, mehr qualifizierte Anfragen zu gewinnen, ohne dass die Qualität oder die guten Quoten leiden.
                  </p>
                </div>
              ) : results.engpass === 'mql_to_opp' ? (
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 font-display flex items-center gap-1.5 mb-1 text-amber-600 font-semibold leading-none">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                    Grösste Lücke: Anfrage → Verkaufsgespräch ({(results.mToOppSelected * 100).toFixed(1)}% vs. Richtwert 35%)
                  </h5>
                  <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                    Das deutet eher auf ein Problem bei der Übergabe hin als auf zu wenig Nachfrage. Entweder sind die Anfragen nicht wirklich passend, oder gute Anfragen bleiben zwischen Marketing und Vertrieb liegen.
                  </p>
                </div>
              ) : (
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 font-display flex items-center gap-1.5 mb-1 text-amber-600 font-semibold leading-none">
                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                    Grösste Lücke: Verkaufsgespräch → Auftrag ({(results.oToCloseSelected * 100).toFixed(1)}% vs. Richtwert 30%)
                  </h5>
                  <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                    Das deutet auf eine Schwachstelle im Verkauf hin. Gute Verkaufschancen gehen verloren, etwa wegen fehlender Verkaufsunterlagen, unklarer Entscheidungswege beim Kunden oder eines zu langen Verkaufsprozesses.
                  </p>
                </div>
              )}
            </div>

            {/* Action booking trigger */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                Ergebnis besprechen <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Lead capture form */}
            <LeadCaptureForm
              secondaryCTAText="Auswertung per E-Mail erhalten →"
              danachText="Wir senden Ihnen eine Einschätzung, welche Massnahmen Ihren Weg von der Anfrage zum Auftrag am meisten verbessern dürften."
              pageId="revenue-operations"
              additionalFields={[
                {
                  type: 'select',
                  name: 'companySize',
                  placeholder: 'Unternehmensgrösse',
                  options: ['1–10 Personen', '11–50 Personen', '51–200 Personen', 'Mehr als 200 Personen']
                }
              ]}
            />

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
export { RevenuLeakDetector as RevenueLeakDetector };
