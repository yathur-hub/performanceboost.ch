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
          text: 'text-red-700',
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
            Rechner: Kundenwert und Akquisekosten
          </h3>
          <p className="text-xs text-slate-500 leading-normal mt-1 font-medium select-none">
            Bringt ein Neukunde mehr ein, als seine Gewinnung kostet? Berechnen Sie Ihr Verhältnis von Kundenwert (LTV) zu Akquisekosten (CAC).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left: Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Field 1: Monatliches Ad-Budget */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Monatliches Werbebudget (CHF)
            </label>
            <div className="relative">
              <input aria-label="Monatliches Werbebudget (CHF)"
                type="number"
                min="100"
                max="10000000"
                placeholder="z. B. 3'000"
                value={adBudget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Monat
              </span>
            </div>
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Gesamtes Budget für bezahlte Anzeigen pro Monat (Meta, Google, TikTok usw.)
            </p>
          </div>

          {/* Field 2: Neukunden pro Monat */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Neukunden pro Monat
            </label>
            <div className="relative">
              <input aria-label="Neukunden pro Monat"
                type="number"
                min="1"
                max="100000"
                placeholder="z. B. 60"
                value={newCustomers}
                onChange={(e) => handleInputChange('customers', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 font-bold uppercase select-none">
                Kunden
              </span>
            </div>
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Neue zahlende Kunden, die über bezahlte Anzeigen gewonnen wurden
            </p>
          </div>

          {/* Field 3: Ø Bestellwert */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Ø Bestellwert (CHF)
            </label>
            <div className="relative">
              <input aria-label="Ø Bestellwert (CHF)"
                type="number"
                min="1"
                max="100000"
                placeholder="z. B. 85"
                value={avgOrderValue}
                onChange={(e) => handleInputChange('aov', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Bestellung
              </span>
            </div>
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Durchschnittlicher Warenkorb eines Neukunden
            </p>
          </div>

          {/* Field 4: Wiederkaufrate */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Wiederkaufrate (in den nächsten 12 Monaten)
            </label>
            <select aria-label="Wiederkaufrate (in den nächsten 12 Monaten)"
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
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Wie viel Prozent Ihrer Neukunden kaufen innert eines Jahres erneut?
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
                    <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Verhältnis LTV : CAC</span>
                    <span className="text-4xl sm:text-5xl font-bold font-display text-slate-400 block tracking-tight my-1">
                      3.4 : 1
                    </span>
                    <span className="inline-flex px-3 py-1 text-[11px] font-bold font-mono uppercase bg-slate-200 text-slate-500 rounded-md">
                      GESUND
                    </span>
                  </div>

                  <div className="border-t border-b border-slate-250 py-3 grid grid-cols-2 gap-4 text-xs">
                    <div className="text-left font-medium">Ihr CAC: <strong className="text-slate-900">CHF 50</strong></div>
                    <div className="text-left font-medium">Ihr LTV: <strong className="text-slate-900">CHF 170</strong></div>
                  </div>
                </div>

                <div className="pt-4 text-center space-y-1.5 self-center w-full">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#686DF4] bg-[#686DF4]/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Ihre Zahlen eingeben
                  </div>
                  <p className="text-[11px] text-slate-400/90 font-mono">
                    Beispielrechnung · Wir vergleichen Ihren Kundenwert mit Ihren Akquisekosten.
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
                        <p className="text-[11px] text-red-700 leading-snug font-bold">
                          Achtung: Ihre Akquisekosten ({formatCHF(result.cac)}) liegen über Ihrem durchschnittlichen Bestellwert ({formatCHF(vAvgOrderValue)}). Die erste Bestellung deckt die Gewinnung eines Neukunden also nicht.
                        </p>
                      </div>
                    )}

                    <div className="text-center py-2">
                      <span className="text-[11px] font-mono font-bold text-slate-450 block uppercase">Verhältnis LTV : CAC</span>
                      <span className={`text-4xl sm:text-5xl font-bold font-display tracking-tight my-1 block ${levelStyle?.text}`}>
                        {result.ratio.toFixed(1)} : 1
                      </span>
                      <span className={`inline-flex px-3 py-1 text-[11px] font-bold font-mono uppercase bg-white border rounded-md ${levelStyle?.badgeText} ${levelStyle?.badgeBg}`}>
                        {result.level}
                      </span>
                    </div>

                    <div className="border-t border-b border-slate-200/60 py-3 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-750">
                      <div className="text-left">
                        <span className="text-[11px] text-slate-400 block font-mono uppercase">Ihr CAC:</span>
                        <span className="text-sm font-bold text-slate-850 text-slate-800">{formatCHF(result.cac)}</span>
                      </div>
                      <div className="text-left">
                        <span className="text-[11px] text-slate-400 block font-mono uppercase">Ihr LTV:</span>
                        <span className="text-sm font-bold text-slate-850 text-slate-800">{formatCHF(result.ltv)}</span>
                      </div>
                    </div>

                    {/* Jährliches Retention Revenue */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[11px] font-mono text-slate-400 block uppercase font-bold">Umsatz aus Wiederkäufen pro Jahr:</span>
                        <span className="text-xs text-slate-500 font-semibold italic">grobe Schätzung auf Basis Ihrer Neukunden</span>
                      </div>
                      <span className="text-sm font-bold text-slate-900 font-display">
                        {formatCHF(result.annualRetentionRevenue)}
                      </span>
                    </div>

                    {/* Diagnose text dynamically */}
                    <div className={`p-4 rounded-xl border italic text-xs leading-relaxed font-semibold text-slate-700 ${levelStyle?.bg}`}>
                      {result.level === 'KRITISCH' && (
                        <span>
                          Ihre Akquisekosten liegen sehr nah am Kundenwert. Ein Neukunde kostet Sie fast so viel, wie er einbringt. Nach Produkt- und Versandkosten bleibt so wahrscheinlich ein Verlust. Mehr Werbebudget würde das eher verschärfen. Zuerst sollten die Akquisekosten sinken oder der Kundenwert steigen.
                        </span>
                      )}
                      {result.level === 'AKZEPTABEL' && (
                        <span>
                          Ihr Verhältnis ist noch vertretbar, aber der Spielraum ist klein. Steigen die Klickpreise oder ändern die Plattformen ihre Auslieferung, wird es schnell eng. Ansatzpunkte gibt es auf beiden Seiten: bei den Akquisekosten (Anfrageprozess, Tests von Anzeigenmotiven) und beim Kundenwert (Wiederkaufrate, Warenkorbwert).
                        </span>
                      )}
                      {result.level === 'GESUND' && (
                        <span>
                          Eine solide Grundlage. Ihre Neukundengewinnung funktioniert. Jetzt geht es darum, das Budget zu erhöhen, ohne dass das Verhältnis kippt. Mehr Budget heisst meist teurere Zielgruppen und höhere Kosten pro Kunde. Wer das nicht einplant, landet schnell wieder im knappen Bereich.
                        </span>
                      )}
                      {result.level === 'SKALIERUNGSKANDIDAT' && (
                        <span>
                          Ihre Zahlen sprechen dafür, mehr in die Neukundengewinnung zu investieren. Ihr Kundenwert würde höhere Akquisekosten tragen, als Sie heute ausgeben. Offen ist vor allem, wie schnell und über welche Kanäle Sie das Budget erhöhen, ohne das Verhältnis zu gefährden.
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200/50">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "dtc-growth-acquisition", variant: "booking" });
                      window.dispatchEvent(new CustomEvent('open-contact-modal'));
                    }}
                    className="w-full text-center bg-[#686DF4] hover:bg-slate-950 text-white font-bold text-xs py-4 px-5 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all cursor-pointer border-0"
                  >
                    <span>Erstgespräch vereinbaren</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center font-mono mt-2">
                    Wir schauen uns Ihre Zahlen gemeinsam an und besprechen konkrete nächste Schritte. 30 Minuten, kostenlos.
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
            secondaryCTAText="Wie senken Sie Ihre Akquisekosten? Einschätzung per E-Mail →"
            danachText="Vielen Dank! Wir senden Ihnen in Kürze eine Einschätzung, wie Sie das Verhältnis von Kundenwert zu Akquisekosten verbessern können."
            additionalFields={[
              {
                type: 'select',
                name: 'companySize',
                placeholder: 'Jahresumsatz *',
                options: ['Unter CHF 200\'000', 'CHF 200\'000–1 Mio.', 'CHF 1–3 Mio.', 'Über CHF 3 Mio.'],
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
