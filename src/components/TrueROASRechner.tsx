import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, HelpCircle, Check, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { formatCHF, track, LeadCaptureForm } from './heroUtils';

const marginMap: Record<string, number> = {
  "margin_low":      0.15,
  "margin_mid_low":  0.275,
  "margin_mid":      0.425,
  "margin_mid_high": 0.575,
  "margin_high":     0.70
};

export default function TrueROASRechner() {
  const [adSpend, setAdSpend] = useState<string>('');
  const [adRevenue, setAdRevenue] = useState<string>('');
  const [marginKey, setMarginKey] = useState<string>('');
  const [shippingCost, setShippingCost] = useState<string>('');

  useEffect(() => {
    track("hero_tool_viewed", {
      page: "paid-social-ecommerce",
      element_id: "paid-social-true-roas-rechner"
    });
  }, []);

  const vSpend = parseFloat(adSpend) || 0;
  const vRevenue = parseFloat(adRevenue) || 0;
  const vShipping = parseFloat(shippingCost) || 0;

  const [started, setStarted] = useState(false);
  const handleInputChange = (field: 'spend' | 'revenue' | 'margin' | 'shipping', value: string) => {
    if (!started) {
      track("hero_tool_started", {
        page: "paid-social-ecommerce",
        element_id: "paid-social-true-roas-rechner"
      });
      setStarted(true);
    }

    if (field === 'spend') setAdSpend(value);
    else if (field === 'revenue') setAdRevenue(value);
    else if (field === 'margin') setMarginKey(value);
    else if (field === 'shipping') setShippingCost(value);
  };

  const isFormValid =
    vSpend > 0 &&
    vRevenue >= 0 &&
    marginKey !== '';

  const calculateResult = () => {
    if (!isFormValid) return null;

    const margin = marginMap[marginKey] || 0.15;
    
    // Reported ROAS
    const reportedROAS = vRevenue > 0 && vSpend > 0 ? vRevenue / vSpend : null;

    // Estimated orders based on average checkout size order threshold of CHF 80 (standard Swiss)
    const avgOrderValue = 80;
    const estimatedOrders = vRevenue > 0 ? vRevenue / avgOrderValue : 0;

    const grossContribution = vRevenue * margin;
    const shippingTotal = estimatedOrders * vShipping;
    const trueProfit = grossContribution - vSpend - shippingTotal;

    const shippingRatioOfRevenue = vRevenue > 0 ? shippingTotal / vRevenue : 0;
    const effectiveMarginForBreakEven = margin - shippingRatioOfRevenue;
    const breakEvenROAS = effectiveMarginForBreakEven > 0
      ? (1 / effectiveMarginForBreakEven)
      : null;

    const profitMarginRatio = vSpend > 0 ? trueProfit / vSpend : 0;
    
    let status: 'profitable' | 'break_even' | 'unprofitable' = 'unprofitable';
    if (profitMarginRatio > 0.05) status = 'profitable';
    else if (profitMarginRatio >= -0.05) status = 'break_even';

    const lowMarginWarning = margin <= 0.15;

    return {
      reportedROAS,
      trueProfit,
      breakEvenROAS,
      grossContribution,
      shippingTotal,
      status,
      lowMarginWarning
    };
  };

  const result = calculateResult();

  useEffect(() => {
    if (result) {
      track("hero_tool_output_shown", {
        page: "paid-social-ecommerce",
        element_id: "paid-social-true-roas-rechner",
        reported_roas: result.reportedROAS,
        true_profit: result.trueProfit,
        break_even_roas: result.breakEvenROAS,
        status: result.status,
        low_margin_warning: result.lowMarginWarning
      });
    }
  }, [isFormValid, adSpend, adRevenue, marginKey, shippingCost]);

  // Translate status styles
  const getStatusStyles = (sta: string) => {
    switch (sta) {
      case 'profitable':
        return {
          banner: 'bg-emerald-50 border-emerald-200 text-emerald-800',
          profitText: 'text-emerald-600',
          iconColor: 'text-emerald-500',
          badgeText: 'text-emerald-700',
          bg: 'bg-emerald-50'
        };
      case 'break_even':
        return {
          banner: 'bg-amber-50 border-amber-200 text-amber-800',
          profitText: 'text-amber-600',
          iconColor: 'text-amber-500',
          badgeText: 'text-amber-700',
          bg: 'bg-amber-50'
        };
      default:
        return {
          banner: 'bg-red-50 border-red-200 text-red-800',
          profitText: 'text-red-600 font-bold',
          iconColor: 'text-red-500',
          badgeText: 'text-red-700',
          bg: 'bg-red-50 text-red-700'
        };
    }
  };

  const statusStyle = result ? getStatusStyles(result.status) : null;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-premium-lg)] text-left" id="paid-social-true-roas-rechner">
      <div className="mb-8 border-b border-slate-100 pb-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center shrink-0">
          <ShoppingCart className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-md sm:text-lg font-display font-semibold text-slate-900 tracking-tight leading-snug">
            True-ROAS-Rechner
          </h3>
          <p className="text-xs text-slate-500 leading-normal mt-1 font-medium select-none">
            Wie profitabel sind deine Paid-Ads wirklich? Berechne deinen echten Profit und Break-Even-ROAS.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left column: Inputs */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Field 1: Ad-Spend */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Monatlicher Ad-Spend (CHF) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="10000000"
                placeholder="z. B. 5'000"
                value={adSpend}
                onChange={(e) => handleInputChange('spend', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Spend
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Gesamtes Paid-Social-Budget pro Monat (Meta + TikTok kombiniert)
            </p>
          </div>

          {/* Field 2: Ad-Umsatz */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Monatlicher Umsatz aus Ads (CHF) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="1000000000"
                placeholder="z. B. 18'000"
                value={adRevenue}
                onChange={(e) => handleInputChange('revenue', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
                required
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Umsatz
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Umsatz aus Ads (aus Meta / TikTok Ads Manager attribuiert)
            </p>
          </div>

          {/* Field 3: Produktmarge Dropdown */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Durchschnittliche Produktmarge *
            </label>
            <select
              value={marginKey}
              onChange={(e) => handleInputChange('margin', e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-905 transition-all font-semibold cursor-pointer text-slate-800"
              required
            >
              <option value="">Bitte wählen</option>
              <option value="margin_low">Unter 20% (z.B. 15%)</option>
              <option value="margin_mid_low">20–35% (z.B. 27.5%)</option>
              <option value="margin_mid">35–50% (z.B. 42.5%)</option>
              <option value="margin_mid_high">50–65% (z.B. 57.5%)</option>
              <option value="margin_high">Über 65% (z.B. 70%)</option>
            </select>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Marge nach Produktkosten, vor Marketing und Versand
            </p>
          </div>

          {/* Field 4: Versandkosten optional */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Versandkosten pro Bestellung (CHF, optional)
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="1000"
                placeholder="z. B. 7"
                value={shippingCost}
                onChange={(e) => handleInputChange('shipping', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Order
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Leer lassen, wenn Versand bereits im Produktpreis kalkuliert ist
            </p>
          </div>
        </div>

        {/* Right column: Live Output Compare */}
        <div className="lg:col-span-6 bg-[#f6f6f6]/60 border border-slate-200/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between self-stretch relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {!isFormValid ? (
              // PLACEHOLDER STATE
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 flex flex-col justify-between h-full select-none"
              >
                <div className="space-y-4 opacity-40 select-none pointer-events-none text-left">
                  <div className="grid grid-cols-2 gap-4 border-b border-slate-200/50 pb-4">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Gemeldeter ROAS:</span>
                      <strong className="text-xl font-display text-slate-900 block leading-tight">3.6x</strong>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Echter Profit:</span>
                      <strong className="text-xl font-display text-slate-900 block leading-tight">CHF 4'200</strong>
                    </div>
                  </div>

                  <div className="space-y-1 text-center py-2">
                    <span className="text-xs font-semibold block text-slate-500">Break-Even-ROAS: 2.9x</span>
                    <span className="text-[10px] text-slate-400 block">Ab diesem Wert arbeiten deine Social Ads im grünen Bereich.</span>
                  </div>
                </div>

                <div className="pt-4 text-center space-y-1.5 self-center w-full">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#686DF4] bg-[#686DF4]/5 px-3 py-1.5 rounded-full uppercase tracking-wider animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" /> Gib deine Zahlen ein
                  </div>
                  <p className="text-[9.5px] text-slate-400/90 font-mono">
                    Wir vergleichen deinen echten Warenertrag mit den Media-Ausgaben.
                  </p>
                </div>
              </motion.div>
            ) : (
              // RESULT STATE
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5 flex flex-col justify-between h-full text-left"
              >
                {result && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 border-b border-slate-200/50 pb-4">
                      <div>
                        <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">GEMELDETER ROAS:</span>
                        <strong className="text-xl sm:text-2xl font-display text-slate-900 block">
                          {result.reportedROAS ? `${result.reportedROAS.toFixed(1)}x` : '—'}
                        </strong>
                        <span className="text-[9px] text-slate-400 font-medium block mt-0.5">Umsatz / Spend</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">ECHTER PROFIT:</span>
                        <strong className={`text-xl sm:text-2xl font-display select-none block ${result.trueProfit < 0 ? 'text-red-500 animate-pulse' : 'text-emerald-600'}`}>
                          {result.trueProfit < 0 ? 'CHF −' : 'CHF +'}
                          {Math.abs(Math.round(result.trueProfit)).toLocaleString('de-CH')}
                        </strong>
                        <span className="text-[9px] text-slate-450 block mt-0.5">nach Marge & Logistik</span>
                      </div>
                    </div>

                    <div className="space-y-1 text-center py-1">
                      <span className="text-xs font-bold text-slate-700 block select-none">
                        Break-Even-ROAS: <strong className="text-indigo-600 font-extrabold">{result.breakEvenROAS ? `${result.breakEvenROAS.toFixed(1)}x` : '—'}</strong>
                      </span>
                      <p className="text-[10px] text-slate-400 leading-normal select-none">
                        Das ist der ROAS, ab dem deine Ads profitabel sind.
                      </p>
                    </div>

                    {/* Status Banner */}
                    <div className={`p-4 rounded-xl border italic text-xs leading-relaxed font-semibold ${statusStyle?.banner}`}>
                      {result.status === 'profitable' && (
                        <span>
                          ✅ Echte Profitabilität erreicht. Reported ROAS von {result.reportedROAS?.toFixed(1)}x liegt über deinem Break-Even-Wert von {result.breakEvenROAS?.toFixed(1)}x. Potenzial: Kontrollierte Skalierung ist möglich — aber nur solange der CPA beim Hochskalieren nicht über die Break-Even-Grenze steigt.
                        </span>
                      )}
                      {result.status === 'break_even' && (
                        <span>
                          ⚠️ Deine Ads laufen an der Profitabilitätsgrenze. Bei leicht steigendem CPA oder einer höheren Retouren-Quote wirst du unprofitabel — ohne es sofort zu merken. Eine Optimierung auf Deckungsbeitrag lohnt sich jetzt.
                        </span>
                      )}
                      {result.status === 'unprofitable' && (
                        <span>
                          🔴 Deine Ads verlieren Geld — trotz ROAS von {result.reportedROAS?.toFixed(1)}x. Dein gemeldeter ROAS berücksichtigt deine Marge nicht. Break-Even liegt bei {result.breakEvenROAS?.toFixed(1)}x. Du bist zu weit unten. Jeden Monat verlierst du {formatCHF(Math.abs(result.trueProfit))} an Werbebudget.
                        </span>
                      )}
                    </div>

                    {/* Margin Warning */}
                    {result.lowMarginWarning && (
                      <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 text-orange-900 text-xs leading-relaxed font-semibold">
                        <span className="block font-bold text-[10px] font-mono tracking-wider uppercase mb-1">⚠️ Strukturelle Margen-Warnung:</span>
                        Bei einer Produktmarge unter 20% ist profitables Paid Social strukturell schwierig. Dein Break-Even-ROAS liegt über 5x — ein Wert, den Meta und TikTok-Ads in wettbewerbsintensiven Märkten selten dauerhaft erreichen. Wir empfehlen, Preiskalkulationen anzupassen, bevor du Budgets vergrösserst.
                      </div>
                    )}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200/50">
                  <a
                    href="/kontakt"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "paid-social-ecommerce", variant: "booking" });
                      window.location.href = "/kontakt";
                    }}
                    className="w-full text-center bg-[#686DF4] hover:bg-slate-950 text-white font-bold text-xs py-4 px-5 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all"
                  >
                    <span>Kostenlosen Ads-Audit buchen</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </a>
                  <p className="text-[9px] text-slate-400 text-center font-mono mt-2">
                    Wir analysieren deine Kampagnen kostenlos auf echte Profitabilität — inklusive Deckungsbeitrag. 30 Minuten, keine Verkaufsshow.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Optional Lead capture block */}
      {isFormValid && result && (
        <div className="mt-4">
          <LeadCaptureForm
            pageId="paid-social-ecommerce"
            secondaryCTAText="Ergebnis per E-Mail erhalten →"
            danachText="Vielen Dank! Wir schicken dir in Kürze deien individuellen Bericht über deine Paid-Hebel per E-Mail."
            additionalFields={[
              {
                type: 'select',
                name: 'spendRange',
                placeholder: 'Aktueller monatlicher Spend *',
                options: ['Unter CHF 2\'000', 'CHF 2\'000–5\'000', 'CHF 5\'000–15\'000', 'Über CHF 15\'000'],
                required: true
              }
            ]}
            onSubmitted={(data) => {
              track("hero_tool_lead_captured", {
                page: "paid-social-ecommerce",
                element_id: "paid-social-true-roas-rechner",
                status: result.status,
                true_profit: result.trueProfit,
                spend_range: data.spendRange
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
