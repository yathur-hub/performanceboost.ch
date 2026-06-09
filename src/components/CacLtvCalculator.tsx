import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, HelpCircle, Check, ArrowRight, Sparkles, AlertTriangle, Coins, Target } from 'lucide-react';
import { formatCHF, track, LeadCaptureForm } from './heroUtils';

const rateMap: Record<string, number> = {
  "unter_5":   0.025,
  "5_15":      0.10,
  "15_30":     0.225,
  "ueber_30":  0.375
};

export default function CacLtvCalculator() {
  const [adBudget, setAdBudget] = useState<string>('');
  const [newCustomers, setNewCustomers] = useState<string>('');
  const [avgOrderValue, setAvgOrderValue] = useState<string>('');
  const [repurchaseRateKey, setRepurchaseRateKey] = useState<string>('');

  useEffect(() => {
    track("hero_tool_viewed", {
      page: "dtc-growth-acquisition",
      element_id: "dtc-cac-ltv-rechner"
    });
  }, []);

  const vAdBudget = parseFloat(adBudget) || 0;
  const vNewCustomers = parseFloat(newCustomers) || 0;
  const vAvgOrderValue = parseFloat(avgOrderValue) || 0;

  const [started, setStarted] = useState(false);
  const handleInputChange = (field: 'budget' | 'customers' | 'aov' | 'rate', value: string) => {
    if (!started) {
      track("hero_tool_started", {
        page: "dtc-growth-acquisition",
        element_id: "dtc-cac-ltv-rechner"
      });
      setStarted(true);
    }

    if (field === 'budget') setAdBudget(value);
    else if (field === 'customers') setNewCustomers(value);
    else if (field === 'aov') setAvgOrderValue(value);
    else if (field === 'rate') setRepurchaseRateKey(value);
  };

  const isFormValid =
    vAdBudget >= 100 &&
    vNewCustomers > 0 &&
    vAvgOrderValue > 0 &&
    repurchaseRateKey !== '';

  const calculateResult = () => {
    if (!isFormValid) return null;

    const r = rateMap[repurchaseRateKey] || 0.025;
    const cac = vAdBudget / vNewCustomers;
    const ltv = vAvgOrderValue * (1 / (1 - r));
    const ratio = ltv / cac;
    
    // Jährliches Retention-Revenue: Neukunden/Monat * 12 * AOV * (r * 12) (vereinfacht, linear laut MD)
    const annualRetentionRevenue = vNewCustomers * 12 * vAvgOrderValue * (r * 12);
    const cacAboveAov = cac > vAvgOrderValue;

    let level: 'KRITISCH' | 'AKZEPTABEL' | 'GESUND' | 'SKALIERUNGSKANDIDAT' = 'KRITISCH';
    if (ratio >= 5) level = 'SKALIERUNGSKANDIDAT';
    else if (ratio >= 3) level = 'GESUND';
    else if (ratio >= 2) level = 'AKZEPTABEL';

    return {
      cac,
      ltv,
      ratio,
      level,
      annualRetentionRevenue,
      cacAboveAov
    };
  };

  const result = calculateResult();

  useEffect(() => {
    if (result) {
      track("hero_tool_output_shown", {
        page: "dtc-growth-acquisition",
        element_id: "dtc-cac-ltv-rechner",
        cac: result.cac,
        ltv: result.ltv,
        ratio: result.ratio,
        level: result.level,
        annual_retention_revenue: result.annualRetentionRevenue
      });
    }
  }, [isFormValid, adBudget, newCustomers, avgOrderValue, repurchaseRateKey]);

  // Styling helper for the ratio and badge colors
  const getLevelStyles = (lvl: string) => {
    switch (lvl) {
      case 'SKALIERUNGSKANDIDAT':
        return {
          text: 'text-violet-600',
          bg: 'bg-violet-50 border-violet-200/50',
          badgeText: 'text-violet-700 font-bold',
          badgeBg: 'bg-violet-100',
        };
      case 'GESUND':
        return {
          text: 'text-emerald-600',
          bg: 'bg-emerald-50 border-emerald-200/50',
          badgeText: 'text-emerald-700 font-bold',
          badgeBg: 'bg-emerald-100',
        };
      case 'AKZEPTABEL':
        return {
          text: 'text-amber-600',
          bg: 'bg-amber-50 border-amber-200/50',
          badgeText: 'text-amber-700 font-bold',
          badgeBg: 'bg-amber-100',
        };
      default:
        return {
          text: 'text-red-600',
          bg: 'bg-red-50 border-red-200/50',
          badgeText: 'text-red-700 font-bold',
          badgeBg: 'bg-red-105 bg-red-100',
        };
    }
  };

  const levelStyle = result ? getLevelStyles(result.level) : null;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-premium-lg)] text-left" id="dtc-cac-ltv-rechner">
      <div className="mb-8 border-b border-slate-100 pb-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center shrink-0">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-md sm:text-lg font-display font-semibold text-slate-900 tracking-tight leading-snug">
            CAC/LTV-Rechner
          </h3>
          <p className="text-xs text-slate-500 leading-normal mt-1 font-medium select-none">
            Ist dein Acquisition-System gesund oder kritisch? Berechne dein LTV:CAC-Verhältnis in 30 Sekunden.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left: Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Field 1: Monatliches Ad-Budget */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Monatliches Ad-Budget (CHF)
            </label>
            <div className="relative">
              <input
                type="number"
                min="100"
                max="10000000"
                placeholder="z. B. 3'000"
                value={adBudget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Monat
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Gesamtes Paid-Media-Budget pro Monat (Meta, Google, TikTok etc.)
            </p>
          </div>

          {/* Field 2: Neukunden pro Monat */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Neukunden pro Monat
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="100000"
                placeholder="z. B. 60"
                value={newCustomers}
                onChange={(e) => handleInputChange('customers', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                Kunden
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Neue zahlende Kunden, die durch Paid-Media gewonnen wurden
            </p>
          </div>

          {/* Field 3: Ø Bestellwert */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Ø Bestellwert (CHF)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="100000"
                placeholder="z. B. 85"
                value={avgOrderValue}
                onChange={(e) => handleInputChange('aov', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / AOV
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Durchschnittlicher Warenkorb eines Neukunden
            </p>
          </div>

          {/* Field 4: Wiederkaufrate */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Wiederkaufrate (in den nächsten 12 Monaten)
            </label>
            <select
              value={repurchaseRateKey}
              onChange={(e) => handleInputChange('rate', e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-905 transition-all font-semibold cursor-pointer text-slate-800"
            >
              <option value="">Bitte wählen</option>
              <option value="unter_5">Unter 5% (Mittelwert 2.5%)</option>
              <option value="5_15">5–15% (Mittelwert 10%)</option>
              <option value="15_30">15–30% (Mittelwert 22.5%)</option>
              <option value="ueber_30">Über 30% (Mittelwert 37.5%)</option>
            </select>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Wie viel % deiner Neukunden kaufen innerhalb eines Jahres erneut?
            </p>
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
                <div className="space-y-4 opacity-40 select-none pointer-events-none">
                  <div className="text-center py-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">LTV : CAC Verhältnis</span>
                    <span className="text-4xl sm:text-5xl font-bold font-display text-slate-400 block tracking-tight my-1">
                      3.4 : 1
                    </span>
                    <span className="inline-flex px-3 py-1 text-[9px] font-bold font-mono uppercase bg-slate-200 text-slate-500 rounded-md">
                      GESUND
                    </span>
                  </div>

                  <div className="border-t border-b border-slate-250 py-3 grid grid-cols-2 gap-4 text-xs">
                    <div className="text-left font-medium">Dein CAC: <strong className="text-slate-900">CHF 50</strong></div>
                    <div className="text-left font-medium">Dein LTV: <strong className="text-slate-900">CHF 170</strong></div>
                  </div>
                </div>

                <div className="pt-4 text-center space-y-1.5 self-center w-full">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#686DF4] bg-[#686DF4]/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Gib deine Zahlen ein
                  </div>
                  <p className="text-[9.5px] text-slate-400/90 font-mono">
                    Beispielrechnung · Wir vergleichen deinen Kundenwert mit deinen Kosten.
                  </p>
                </div>
              </motion.div>
            ) : (
              // ACTIVE RESULT STATE
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-5 flex flex-col justify-between h-full"
              >
                {result && (
                  <div className="space-y-4">
                    {result.cacAboveAov && (
                      <div className="bg-red-50 border border-red-200/60 rounded-xl p-3 flex gap-2 items-start text-left">
                        <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-[10px] text-red-700 leading-snug font-bold">
                          Achtung: Dein CAC ({formatCHF(result.cac)}) übersteigt deinen durchschnittlichen Bestellwert ({formatCHF(vAvgOrderValue)}). Du verlierst mit jedem Neukunden sofort Geld!
                        </p>
                      </div>
                    )}

                    <div className="text-center py-2">
                      <span className="text-[10px] font-mono font-bold text-slate-450 block uppercase">LTV : CAC VERHÄLTNIS</span>
                      <span className={`text-4xl sm:text-5xl font-bold font-display tracking-tight my-1 block ${levelStyle?.text}`}>
                        {result.ratio.toFixed(1)} : 1
                      </span>
                      <span className={`inline-flex px-3 py-1 text-[9px] font-bold font-mono uppercase bg-white border rounded-md ${levelStyle?.badgeText} ${levelStyle?.badgeBg}`}>
                        {result.level}
                      </span>
                    </div>

                    <div className="border-t border-b border-slate-200/60 py-3 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-750">
                      <div className="text-left">
                        <span className="text-[9px] text-slate-400 block font-mono uppercase">Dein CAC:</span>
                        <span className="text-sm font-bold text-slate-850 text-slate-800">{formatCHF(result.cac)}</span>
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] text-slate-400 block font-mono uppercase">Dein LTV:</span>
                        <span className="text-sm font-bold text-slate-850 text-slate-800">{formatCHF(result.ltv)}</span>
                      </div>
                    </div>

                    {/* Jährliches Retention Revenue */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[9px] font-mono text-slate-400 block uppercase font-bold">Retention-Umsatz pro Jahr:</span>
                        <span className="text-xs text-slate-500 font-semibold italic">aus bestehenden Neukunden gerechnet</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900 font-display">
                        {formatCHF(result.annualRetentionRevenue)}
                      </span>
                    </div>

                    {/* Diagnose text dynamically */}
                    <div className={`p-4 rounded-xl border italic text-xs leading-relaxed font-semibold text-slate-700 ${levelStyle?.bg}`}>
                      {result.level === 'KRITISCH' && (
                        <span>
                          Dein CAC liegt gefährlich nah am LTV. Jeder Neukunde kostet dich fast so viel, wie er einbringt — nach Produktkosten und Logistik machst du mit grösster Wahrscheinlichkeit Verlust. Das ist kein Skalierungsproblem, das ist ein Systemfehler. Ohne Korrekturen auf CAC- oder LTV-Ebene wird mehr Werbebudget die Situation nur verschlimmern.
                        </span>
                      )}
                      {result.level === 'AKZEPTABEL' && (
                        <span>
                          Dein Verhältnis ist noch im vertretbaren Bereich, aber die Marge ist dünn. Bei jedem Algo-Shift, jeder Preiserhöhung in der Auktion wird es schnell eng. Hier gibt es konkrete Hebel — auf CAC-Seite (Funnel-Effizienz, Creative-Testing) und auf LTV-Seite (Wiederkaufrate, AOV). Beides zusammen kann deine Ratio innerhalb von 90 Tagen merklich verbessern.
                        </span>
                      )}
                      {result.level === 'GESUND' && (
                        <span>
                          Solide Grundlage. Dein Acquisition-System funktioniert — jetzt geht es darum, es zu skalieren ohne die Ratio zu verschlechtern. Das ist die entscheidende Herausforderung beim nächsten Wachstumsschritt: Mehr Budget bedeutet teurere Zielgruppen und steigenden CPA. Wer das nicht antizipiert, skaliert sich in die Akzeptabel-Zone zurück.
                        </span>
                      )}
                      {result.level === 'SKALIERUNGSKANDIDAT' && (
                        <span>
                          Deine Zahlen zeigen einen echten Skalierungskandidaten. Dein LTV rechtfertigt deutlich höhere Acquisition-Ausgaben, als du aktuell tätigst. Die Frage ist nicht ob du skalieren kannst — sondern wie schnell und über welche Kanäle, ohne die Ratio zu gefährden. Das ist exakt die Arbeit, die wir machen.
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200/50">
                  <a
                    href="/kontakt"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "dtc-growth-acquisition", variant: "booking" });
                      window.location.href = "/kontakt";
                    }}
                    className="w-full text-center bg-[#686DF4] hover:bg-slate-950 text-white font-bold text-xs py-4 px-5 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all"
                  >
                    <span>Kostenloses Erstgespräch buchen →</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </a>
                  <p className="text-[9px] text-slate-400 text-center font-mono mt-2">
                    Wir schauen uns deine Zahlen an — konkret, nicht generisch. 30 Minuten, kein Deck, kein Pitch.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Accordion form for Lead captures (only shown on Critial or Acceptable levels) */}
      {isFormValid && result && (result.level === 'KRITISCH' || result.level === 'AKZEPTABEL') && (
        <div className="mt-4">
          <LeadCaptureForm
            pageId="dtc-growth-acquisition"
            secondaryCTAText="Welche drei Massnahmen senken deinen CAC am schnellsten? →"
            danachText="Vielen Dank! Wir schicken dir in Kürze eine strukturierte, datenbasierte Einschätzung dazu, mit welchen Hebeln du deine CAC/LTV-Ratio optimieren kannst."
            additionalFields={[
              {
                type: 'select',
                name: 'companySize',
                placeholder: 'Unternehmensgrösse *',
                options: ['Unter CHF 200k', 'CHF 200k–1M', 'CHF 1M–3M', 'Über CHF 3M'],
                required: true
              }
            ]}
            onSubmitted={(data) => {
              track("hero_tool_lead_captured", {
                page: "dtc-growth-acquisition",
                element_id: "dtc-cac-ltv-rechner",
                level: result.level,
                ratio: result.ratio,
                company_size: data.companySize
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
