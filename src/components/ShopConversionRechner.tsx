import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, HelpCircle, Check, ArrowRight, TrendingUp, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

function formatBestellungen(value: number): string {
  return Math.round(value).toLocaleString('de-CH');
}

export default function ShopConversionRechner() {
  const [besucher, setBesucher] = useState<string>('');
  const [aktuellerCR, setAktuellerCR] = useState<string>('');
  const [warenkorbwert, setWarenkorbwert] = useState<string>('');

  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    track("hero_tool_viewed", {
      page: "ecommerce-performance",
      tool: "shop-conversion-rechner"
    });
  }, []);

  // Parse values safely
  const vBesucher = parseFloat(besucher);
  const vWarenkorbwert = parseFloat(warenkorbwert);
  const vCR = parseFloat(aktuellerCR);

  // Trigger started event once the user begins inputting
  const [started, setStarted] = useState(false);
  const handleInputChange = (field: 'besucher' | 'cr' | 'warenkorbwert', value: string) => {
    if (!started) {
      track("hero_tool_started", { page: "ecommerce-performance" });
      setStarted(true);
    }
    
    if (field === 'besucher') {
      setBesucher(value);
    } else if (field === 'cr') {
      setAktuellerCR(value);
    } else if (field === 'warenkorbwert') {
      // Validate average order value
      if (value !== '' && parseFloat(value) === 0) {
        setValidationError('Bitte gültigen Wert eingeben');
      } else {
        setValidationError(null);
      }
      setWarenkorbwert(value);
    }
  };

  const isFormValid = 
    vBesucher >= 100 && 
    !isNaN(vCR) && 
    vWarenkorbwert > 0 && 
    !validationError;

  // Perform Calculations
  const getBenchmarkCR = (cr: number) => {
    if (cr <= 0.005) return 0.018; // Great potential
    if (cr <= 0.01)  return 0.022;
    if (cr <= 0.015) return 0.028;
    if (cr <= 0.02)  return 0.032;
    if (cr <= 0.03)  return 0.040;
    return null; // Special case: CR already > 3%
  };

  const calculateOutput = () => {
    if (!isFormValid) return null;

    // Special case: already over 3%
    if (vCR > 0.03) {
      const currentRevenue = vBesucher * vCR * vWarenkorbwert;
      return {
        sonderfall: "uber_benchmark",
        aktuellerUmsatz: currentRevenue,
      };
    }

    const benchmarkCR = getBenchmarkCR(vCR);
    if (!benchmarkCR) return null;

    // Erreichbare CR in 6 Monaten: Halfway to the benchmark (conservative)
    const erreichbareCR = vCR + (benchmarkCR - vCR) * 0.5;

    const aktuellerUmsatz = vBesucher * vCR * vWarenkorbwert;
    const potenziellerUmsatz = vBesucher * erreichbareCR * vWarenkorbwert;
    const mehrUmsatz = potenziellerUmsatz - aktuellerUmsatz;

    const aktuelleBestellungen = vBesucher * vCR;
    const potenzielleBestellungen = vBesucher * erreichbareCR;
    const mehrBestellungen = potenzielleBestellungen - aktuelleBestellungen;

    return {
      sonderfall: null,
      aktuellerCR: vCR,
      erreichbareCR,
      benchmarkCR,
      aktuellerUmsatz,
      potenziellerUmsatz,
      mehrUmsatz,
      aktuelleBestellungen,
      potenzielleBestellungen,
      mehrBestellungen,
    };
  };

  const result = calculateOutput();

  useEffect(() => {
    if (result) {
      track("hero_tool_output_shown", {
        page: "ecommerce-performance",
        aktueller_cr: vCR,
        besucher: vBesucher,
        warenkorbwert: vWarenkorbwert,
        mehr_umsatz: result.sonderfall === null ? result.mehrUmsatz : 0,
        sonderfall: result.sonderfall ?? "none"
      });
    }
  }, [isFormValid, vCR, vBesucher, vWarenkorbwert]);

  // Diagnose text based on CR
  const getDiagnoseText = (cr: number) => {
    if (cr <= 0.005) return "Eine CR unter 0.5% deutet meist auf ein grundlegendes Problem hin — Vertrauen, Mobile UX oder Checkout. Hier liegt das grösste Hebelfeld.";
    if (cr <= 0.01)  return "Eine CR in diesem Bereich hat fast immer strukturelle Ursachen: schwacher Checkout, fehlende Vertrauenselemente oder zu komplexe Navigation. Alles optimierbar.";
    if (cr <= 0.015) return "Solide Basis. Die grösste Verbesserung liegt jetzt im Checkout-Flow und in gezielten A/B-Tests auf den Top-Produktseiten.";
    if (cr <= 0.02)  return "Guter Stand. Der nächste Hebel liegt in Produktseiten-Optimierung, Social Proof und schnellerer Ladezeit — besonders auf Mobile.";
    return "Du bist bereits im oberen Drittel. Weitere Verbesserungen kommen aus datengetriebenen Tests, nicht aus offensichtlichen Fixes.";
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-premium-lg)] text-left" id="shop-conversion-rechner">
      <div className="mb-8 border-b border-slate-100 pb-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center shrink-0">
          <ShoppingCart className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-md sm:text-lg font-display font-semibold text-slate-900 tracking-tight leading-snug">
            Shop-Conversion-Rechner
          </h3>
          <p className="text-xs text-slate-500 leading-normal mt-1 font-medium select-none">
            Berechne, wie viel mehr Umsatz dein bestehender Traffic bringen könnte — ohne einen Rappen mehr für Werbung auszugeben.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Field 1: Monatliche Besucher */}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Monatliche Besucher im Shop
            </label>
            <div className="relative">
              <input
                type="number"
                min="100"
                max="10000000"
                placeholder="z. B. 8'000"
                value={besucher}
                onChange={(e) => handleInputChange('besucher', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                Besucher / Mt.
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Sessions laut Google Analytics oder Shopify Analytics
            </p>
          </div>

          {/* Field 2: Aktuelle Conversion-Rate */}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Aktuelle Conversion-Rate
            </label>
            <select
              value={aktuellerCR}
              onChange={(e) => handleInputChange('cr', e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-905 text-slate-705 transition-all font-semibold cursor-pointer"
            >
              <option value="">Bitte wählen</option>
              <option value="0.003">Unter 0.5% (z. B. 0.3%)</option>
              <option value="0.0075">0.5% – 1% (z. B. 0.75%)</option>
              <option value="0.0125">1% – 1.5% (z. B. 1.25%)</option>
              <option value="0.0175">1.5% – 2% (z. B. 1.75%)</option>
              <option value="0.025">2% – 3% (z. B. 2.5%)</option>
              <option value="0.035">Über 3% (z. B. 3.5%)</option>
            </select>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Bestellungen ÷ Besucher × 100 — im Shop-Analytics einsehbar
            </p>
          </div>

          {/* Field 3: Durchschnittlicher Warenkorbwert */}
          <div className="space-y-1.5 text-left">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Ø Warenkorbwert (CHF)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="100000"
                placeholder="z. B. 85"
                value={warenkorbwert}
                onChange={(e) => handleInputChange('warenkorbwert', e.target.value)}
                className={`w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold ${
                  validationError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                }`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / AOV
              </span>
            </div>
            {validationError ? (
              <p className="text-[10px] text-red-500 leading-none font-bold animate-pulse mt-1 select-none">
                {validationError}
              </p>
            ) : (
              <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
                Ø Bestellwert ohne Versandkosten
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Live Output Panel */}
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
                <div className="space-y-4 opacity-35 select-none pointer-events-none">
                  <div className="grid grid-cols-2 gap-4 border-b border-slate-200/50 pb-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Heute:</span>
                      <span className="text-sm sm:text-md font-bold font-display text-slate-900 block leading-tight">CHF 7'200</span>
                      <span className="text-[9px] text-slate-450 block font-mono">pro Monat (1.0% CR)</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Erreichbar:</span>
                      <span className="text-sm sm:text-md font-bold font-display text-emerald-600 block leading-tight">CHF 12'600</span>
                      <span className="text-[9px] text-slate-450 block font-mono">pro Monat (1.75% CR)</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 space-y-1 text-center">
                    <span className="text-xl font-bold text-emerald-600 block leading-none">+ CHF 5'400 / Monat</span>
                    <span className="text-[10px] font-medium text-emerald-700 block">
                      mehr — ohne zusätzlichen Traffic, nur durch bessere Conversion.
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/40 text-center space-y-1.5 self-center w-full">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#686DF4] bg-[#686DF4]/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Gib deine Zahlen ein
                  </div>
                  <p className="text-[9.5px] text-slate-400/90 font-mono">
                    Beispielrechnung · Gib deine realen Shopdaten links ein für dein Ergebnis
                  </p>
                </div>
              </motion.div>
            ) : result?.sonderfall === "uber_benchmark" ? (
              // VARIANT B: SPECIAL CASE CR > 3%
              <motion.div
                key="uber_benchmark"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5 text-left h-full flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">
                      Spitzenklasse erreicht
                    </span>
                  </div>

                  <h4 className="text-md font-display font-semibold text-slate-950 leading-snug">
                    Deine Conversion-Rate ist bärenstark.
                  </h4>

                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    Eine Conversion-Rate über 3% ist bereits deutlich über dem Schweizer Branchendurchschnitt. Das bedeutet, dass euer Vertrauensaufbau, euer Checkout und eure mobile Experience bereits exzellent funktionieren.
                  </p>

                  <div className="p-4 rounded-xl bg-[#686DF4]/5 border border-[#686DF4]/10 space-y-2">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">DEIN NÄCHSTER HEBEL:</span>
                    <p className="text-xs text-[#686DF4] font-bold leading-relaxed">
                      Der nächste grosse Wachstumshebel liegt für euch nicht in der mühsamen Erhöhung der Erstkonversion, sondern in <strong>Retention (Bestandskunden)</strong> und <strong>Average Order Value (AOV)</strong>:
                    </p>
                    <p className="text-[11px] text-slate-500 italic leading-snug font-medium pt-1 border-t border-slate-100/55">
                      ↑ Wiederholkäufer um 10% zu reaktivieren bringt dir in dieser Phase typischerweise mehr stabilen Deckungsbeitrag als deine Conversion-Rate nochmals mühsam zu verdoppeln.
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="text-[9px] font-mono text-slate-400 font-bold block uppercase select-none">AKTUELLER UMSATZ MIT DIESER CR:</span>
                    <span className="text-md sm:text-lg font-bold text-slate-900 block leading-tight">
                      {formatCHF(result.aktuellerUmsatz)} <span className="text-xs text-slate-400 font-mono font-medium">/ Monat</span>
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50">
                  <a
                    href="/kontakt"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "ecommerce-performance", variant: "booking" });
                      window.location.href = "/kontakt";
                    }}
                    className="w-full bg-[#686DF4] hover:bg-slate-950 text-white font-bold text-xs py-4 px-4 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all"
                  >
                    <span>Wie erhöht ihr euren LTV und Wiederholkaufanteil?</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </a>
                </div>
              </motion.div>
            ) : (
              // VARIANT A: POTENTIAL FOUND (NORMAL CASE)
              <motion.div
                key="potential_found"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  {/* Option C: Very huge impact banner */}
                  {result && result.mehrUmsatz > 50000 && (
                    <div className="bg-red-50 border border-red-200/60 rounded-xl p-3 flex gap-2 items-start shrink-0">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-red-700 leading-snug font-bold">
                        Das ist kein kleines Optimierungs-Problem. {formatCHF(result.mehrUmsatz)}/Monat Differenz bedeutet, dass jeder weitere Tag mit der aktuellen Conversion-Rate bares Geld kostet.
                      </p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 border-b border-slate-200/60 pb-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">HEUTE:</span>
                      <span className="text-md sm:text-lg font-bold font-display text-slate-805 text-slate-800 block leading-none">
                        {formatCHF(result.aktuellerUmsatz)}
                      </span>
                      <span className="text-[9.5px] text-slate-450 block font-mono">
                        pro Monat ({((result.aktuellerCR || 0) * 100).toFixed(2).replace(/\.?0+$/, '')}% CR)
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">IN 6 MONATEN ERREICHBAR:</span>
                      <span className="text-md sm:text-lg font-bold font-display text-emerald-600 block leading-none">
                        {formatCHF(result.potenziellerUmsatz)}
                      </span>
                      <span className="text-[9.5px] text-emerald-500 block font-mono">
                        pro Monat ({((result.erreichbareCR || 0) * 100).toFixed(2).replace(/\.?0+$/, '')}% CR)
                      </span>
                    </div>
                  </div>

                  {/* DIFFERENCE DISPLAY */}
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4.5 space-y-1 text-center">
                    <span className="text-xl sm:text-2xl font-bold text-emerald-600 block leading-none">
                      + {formatCHF(result.mehrUmsatz)} / Monat mehr
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 block leading-normal">
                      ohne zusätzlichen Traffic — nur durch strukturierte Conversion-Rate Optimierung.
                    </span>
                    <div className="text-[9.5px] text-emerald-500 font-mono font-bold pt-1.5 border-t border-emerald-100/50 mt-1.5 uppercase tracking-wide">
                      = {formatCHF(result.mehrUmsatz * 12)} pro Jahr zusätzliche Marge
                    </div>
                  </div>

                  {/* Diagnosis sentence and context log */}
                  <div className="space-y-2 pt-1 border-t border-slate-200/40">
                    <p className="text-[10.5px] text-slate-600 italic font-medium leading-relaxed">
                      ➔ {getDiagnoseText(result.aktuellerCR)}
                    </p>
                    <p className="text-[9px] text-slate-400/90 leading-normal font-mono">
                      Basis: {formatBestellungen(result.aktuelleBestellungen)} Bestellungen heute ➔ {formatBestellungen(result.potenzielleBestellungen)} erreichbar. Die branchenübliche Richtlinie auf diesem Absprungniveau liegt bei {((result.benchmarkCR || 0) * 100).toFixed(1)}%.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50 space-y-1">
                  <a
                    href="/kontakt"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "ecommerce-performance", variant: "booking" });
                      window.location.href = "/kontakt";
                    }}
                    className="w-full text-center bg-[#686DF4] hover:bg-slate-905 bg-slate-900 text-white hover:bg-slate-950 font-bold text-xs py-4 px-5 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5"
                  >
                    <span>Shop-Gespräch buchen — kostenlos, 30 Min</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                  <p className="text-[9px] text-slate-400 text-center font-mono mt-2">
                    Wir analysieren eure Zahlen und zeigen dir die 3 grössten Conversion-Hebel in deiner spezifischen Situation.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      {/* LEAD CAPTURE SECTION (ACCORDION STYLE) */}
      {isFormValid && result?.sonderfall !== "uber_benchmark" && (
        <div className="mt-4">
          <LeadCaptureForm
            pageId="ecommerce-performance"
            secondaryCTAText="Detaillierte Shop-Analyse per E-Mail →"
            danachText="Vielen Dank! Wir schicken dir in Kürze eine strukturierte, datenbasierte Einschätzung darüber, wo euer Shop die grössten Conversion Quick-Wins hat."
            additionalFields={[
              {
                type: 'select',
                name: 'shopSystem',
                placeholder: 'Welches Shop-System nutzt ihr? *',
                options: ['Shopify', 'WooCommerce', 'Shopware', 'Magento / Adobe Commerce', 'Custom / Andere'],
                required: true
              }
            ]}
            onSubmitted={(data) => {
              track("hero_tool_lead_captured", {
                page: "ecommerce-performance",
                mehr_umsatz: result?.mehrUmsatz,
                shop_system: data.shopSystem
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
