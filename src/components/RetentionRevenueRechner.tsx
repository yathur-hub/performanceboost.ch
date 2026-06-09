import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RefreshCcw, HelpCircle, Check, ArrowRight, Sparkles, AlertTriangle } from 'lucide-react';
import { formatCHF, track, LeadCaptureForm } from './heroUtils';

interface RetentionOption {
  value: number;
  segment: 'kritisch' | 'ausbaufähig' | 'stark';
}

const retentionMap: Record<string, RetentionOption> = {
  "unter_20":  { value: 0.15, segment: "kritisch" },
  "20_40":     { value: 0.30, segment: "kritisch" },
  "40_60":     { value: 0.50, segment: "ausbaufähig" },
  "60_80":     { value: 0.70, segment: "ausbaufähig" },
  "ueber_80":  { value: 0.82, segment: "stark" }
};

export default function RetentionRevenueRechner() {
  const [kunden, setKunden] = useState<string>('');
  const [avgUmsatz, setAvgUmsatz] = useState<string>('');
  const [retentionKey, setRetentionKey] = useState<string>('');

  useEffect(() => {
    track("hero_tool_viewed", {
      page: "customer-retention",
      element_id: "retention-revenue-rechner"
    });
  }, []);

  const vKunden = parseFloat(kunden) || 0;
  const vAvgUmsatz = parseFloat(avgUmsatz) || 0;

  const [started, setStarted] = useState(false);
  const handleInputChange = (field: 'kunden' | 'umsatz' | 'retention', value: string) => {
    if (!started) {
      track("hero_tool_started", {
        page: "customer-retention",
        element_id: "retention-revenue-rechner"
      });
      setStarted(true);
    }
    
    if (field === 'kunden') setKunden(value);
    else if (field === 'umsatz') setAvgUmsatz(value);
    else if (field === 'retention') setRetentionKey(value);
  };

  const isFormValid =
    vKunden > 0 &&
    vAvgUmsatz > 0 &&
    retentionKey !== '';

  const calculateResult = () => {
    if (!isFormValid) return null;

    const opt = retentionMap[retentionKey];
    if (!opt) return null;

    const aktRetention = opt.value;
    const diagnose = opt.segment;

    const aktuellerRetentionUmsatz = vKunden * vAvgUmsatz * aktRetention;
    const zielRetention = Math.min(aktRetention + 0.15, 0.90);
    const zielRetentionUmsatz = vKunden * vAvgUmsatz * zielRetention;
    const mehrUmsatz = vKunden * vAvgUmsatz * (zielRetention - aktRetention);
    const isStark = diagnose === "stark";

    return {
      aktuellerRetentionUmsatz,
      zielRetentionUmsatz,
      mehrUmsatz,
      aktRetention,
      zielRetention,
      diagnose,
      isStark
    };
  };

  const result = calculateResult();

  useEffect(() => {
    if (result) {
      track("hero_tool_output_shown", {
        page: "customer-retention",
        element_id: "retention-revenue-rechner",
        aktueller_retention_umsatz: result.aktuellerRetentionUmsatz,
        mehr_umsatz: result.mehrUmsatz,
        diagnose: result.diagnose,
        ist_stark: result.isStark
      });
    }
  }, [isFormValid, kunden, avgUmsatz, retentionKey]);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[var(--shadow-premium-lg)] text-left" id="retention-revenue-rechner">
      <div className="mb-8 border-b border-slate-100 pb-6 flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center shrink-0">
          <RefreshCcw className="w-5 h-5 animate-spin-slow" />
        </div>
        <div>
          <h3 className="text-md sm:text-lg font-display font-semibold text-slate-900 tracking-tight leading-snug">
            Retention-Revenue-Rechner
          </h3>
          <p className="text-xs text-slate-500 leading-normal mt-1 font-medium select-none">
            Wie viel Umsatz liegt in deiner bestehenden Kundenbasis? Berechne dein Retention-Potenzial in 30 Sekunden.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left: Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Field 1: Aktive Kunden */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Aktive Kunden (letzte 12 Monate)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="10000000"
                placeholder="z. B. 800"
                value={kunden}
                onChange={(e) => handleInputChange('kunden', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                Kunden
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Kunden, die in den letzten 12 Monaten mindestens einmal gekauft haben
            </p>
          </div>

          {/* Field 2: Ø Jahresumsatz pro Kunde */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Ø Jahresumsatz pro Kunde (CHF)
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="1000000"
                placeholder="z. B. 450"
                value={avgUmsatz}
                onChange={(e) => handleInputChange('umsatz', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Jahr
              </span>
            </div>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Durchschnittlicher Umsatz eines aktiven Kunden pro Jahr
            </p>
          </div>

          {/* Field 3: Aktuelle Retention-Rate */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Aktuelle Wiederkauf- / Retention-Rate
            </label>
            <select
              value={retentionKey}
              onChange={(e) => handleInputChange('retention', e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-905 transition-all font-semibold cursor-pointer text-slate-800"
            >
              <option value="">Bitte wählen</option>
              <option value="unter_20">Unter 20% — kaum Stammkunden</option>
              <option value="20_40">20% – 40% — Potenzial vorhanden</option>
              <option value="40_60">40% – 60% — solide Basis</option>
              <option value="60_80">60% – 80% — gut, aber steigerbar</option>
              <option value="ueber_80">Über 80% — starke Retention</option>
            </select>
            <p className="text-[10px] text-slate-450 leading-relaxed font-medium select-none">
              Wie viel % deiner Kunden kaufen im nächsten Jahr erneut?
            </p>
          </div>
        </div>

        {/* Right Column: Live Output Panel */}
        <div className="lg:col-span-6 bg-[#f6f6f6]/60 border border-slate-200/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between self-stretch relative min-h-[320px]">
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
                <div className="space-y-4 opacity-40 select-none pointer-events-none text-center py-4">
                  <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">Zukünftiger Umsatz-Gewinn</span>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-slate-400 block tracking-tight my-1">
                    + CHF 54'000 / Jahr
                  </span>
                  <span className="inline-flex px-3 py-1 text-[9px] font-bold font-mono uppercase bg-slate-200 text-slate-500 rounded-md">
                    Ausbaufähig
                  </span>
                </div>

                <div className="pt-4 text-center space-y-1.5 self-center w-full">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#686DF4] bg-[#686DF4]/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Gib deine Zahlen ein
                  </div>
                  <p className="text-[9.5px] text-slate-400/90 font-mono">
                    Beispielrechnung · Wir berechnen deinen zusätzlichen Bestandskundenumsatz.
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
                    <div className="space-y-2 text-left text-xs font-semibold text-slate-500 border-b border-slate-200/50 pb-3">
                      <div className="flex justify-between">
                        <span>Dein aktueller Retention-Umsatz:</span>
                        <strong className="text-slate-800">{formatCHF(result.aktuellerRetentionUmsatz)} / Jahr</strong>
                      </div>
                      <div className="flex justify-between text-emerald-600">
                        <span>Zukünftiger Ziel-Umsatz (+15%):</span>
                        <strong>{formatCHF(result.zielRetentionUmsatz)} / Jahr</strong>
                      </div>
                    </div>

                    <div className="text-center py-2">
                      <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">ZUSÄTZLICHE JAHRES-MARGE</span>
                      <span className="text-3xl sm:text-4xl font-bold font-display text-emerald-600 tracking-tight my-1 block">
                        + {formatCHF(result.mehrUmsatz)} / Jahr
                      </span>
                      <span className="text-[10px] font-medium text-emerald-700 block select-none">
                        jährlich mehr Umsatz — ohne einen einzigen Neukunden.
                      </span>

                      <div className="mt-2">
                        {result.diagnose === 'kritisch' && (
                          <span className="inline-flex px-3 py-1 text-[9px] font-bold font-mono uppercase bg-red-100 border border-red-200/50 text-red-700 rounded-md">
                            ⚠️ Retention-Level: Kritisch
                          </span>
                        )}
                        {result.diagnose === 'ausbaufähig' && (
                          <span className="inline-flex px-3 py-1 text-[9px] font-bold font-mono uppercase bg-amber-100 border border-amber-200/50 text-amber-700 rounded-md">
                            ⚠️ Retention-Level: Ausbaufähig
                          </span>
                        )}
                        {result.diagnose === 'stark' && (
                          <span className="inline-flex px-3 py-1 text-[9px] font-bold font-mono uppercase bg-emerald-100 border border-emerald-200/50 text-emerald-700 rounded-md">
                            ✓ Retention-Level: Stark
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Diagnose-Text */}
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 italic text-xs leading-relaxed font-semibold text-slate-700">
                      {result.diagnose === 'kritisch' && (
                        <span>
                          Über 70% deiner Kunden kaufen nur einmal. Das ist kein Produktproblem — es ist fehlende Retention-Infrastruktur. Jeder Monat ohne System ist verlorener Umsatz: du zahlst wiederholt CHF 40–120 Akquise-Kosten für Kunden, die du längst hättest halten können. Win-Back ist fünfmal teurer als Retention.
                        </span>
                      )}
                      {result.diagnose === 'ausbaufähig' && (
                        <span>
                          Du hast eine Basis, aber das Potenzial liegt noch brach. Mit strukturierten Flows und Lifecycle-Kommunikation sind +15 Prozentpunkte Retention innerhalb von sechs Monaten realistisch — das zeigt das Ergebnis oben. Die niedrig hängenden Früchte: eine Post-Purchase-Sequenz, ein Win-Back-Flow für 90-Tage-Inaktive, und ein einfaches VIP-Segment für Kunden mit mehr als zwei Bestellungen.
                        </span>
                      )}
                      {result.diagnose === 'stark' && (
                        <span>
                          Gute Retention-Basis. Der nächste Hebel liegt in der Tiefe: Upsell-Systematik, LTV-Segmentierung und Churn-Prävention bei Hochwertkunden. CHF {formatCHF(result.mehrUmsatz)} sind trotzdem erreichbar — nicht durch höhere Frequenz, sondern durch höheren Kundenwert: Cross-Sell-Automatisierung und Upgrade-Angebote zum richtigen Zeitpunkt.
                        </span>
                      )}
                    </div>

                    {/* Edge case label / warnings */}
                    {vKunden < 50 && (
                      <p className="text-[10px] text-slate-450 text-left font-mono">
                        * Bei kleiner Kundenbasis hat jede Abwanderung überproportionalen Impact — Churn-Prävention hat hier besonders hohe Hebelwirkung.
                      </p>
                    )}
                    {vAvgUmsatz > 50000 && (
                      <p className="text-[10px] text-indigo-500 text-left font-mono font-bold">
                        * Bei hohem Einzelkundenwert lohnt sich Churn-Prävention besonders — ein gehaltener Kunde ersetzt 5–7 Neukunden-Abschlüsse.
                      </p>
                    )}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200/50">
                  <a
                    href="/kontakt"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "customer-retention", variant: "booking" });
                      window.location.href = "/kontakt";
                    }}
                    className="w-full text-center bg-[#686DF4] hover:bg-slate-950 text-white font-bold text-xs py-4 px-5 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all"
                  >
                    <span>Retention-Potenzial besprechen — 30 Min, kostenlos</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </a>
                  <p className="text-[9px] text-slate-400 text-center font-mono mt-2">
                    In 30 Minuten berechnen wir gemeinsam, wie viel Umsatz in deiner bestehenden Kundenbasis liegt — und was es braucht, ihn zu aktivieren.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Accordion form for Lead captures (only shown on Critical or Ausbaufaehig levels) */}
      {isFormValid && result && (result.diagnose === 'kritisch' || result.diagnose === 'ausbaufähig') && (
        <div className="mt-4">
          <LeadCaptureForm
            pageId="customer-retention"
            secondaryCTAText="Berechnung + Retention-Audit per E-Mail erhalten →"
            danachText="Vielen Dank! Wir schicken dir in Kürze deien individuellen Bericht über deine Retention Hebel."
            additionalFields={[
              {
                type: 'select',
                name: 'businessModel',
                placeholder: 'Geschäftsmodell *',
                options: ['E-Commerce', 'B2B SaaS', 'B2B Dienstleistung', 'Anderes'],
                required: true
              }
            ]}
            onSubmitted={(data) => {
              track("hero_tool_lead_captured", {
                page: "customer-retention",
                element_id: "retention-revenue-rechner",
                diagnose: result.diagnose,
                mehr_umsatz: result.mehrUmsatz,
                business_model: data.businessModel
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
