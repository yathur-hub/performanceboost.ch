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
            Rechner: Umsatz mit Bestandskunden
          </h3>
          <p className="text-xs text-slate-500 leading-normal mt-1 font-medium select-none">
            Wie viel Umsatz steckt in Ihren bestehenden Kunden? Schätzen Sie Ihr Potenzial aus Wiederkäufen in rund 30 Sekunden.
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
              <input aria-label="Aktive Kunden (letzte 12 Monate)"
                type="number"
                min="1"
                max="10000000"
                placeholder="z. B. 800"
                value={kunden}
                onChange={(e) => handleInputChange('kunden', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 font-bold uppercase select-none">
                Kunden
              </span>
            </div>
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Kunden, die in den letzten 12 Monaten mindestens einmal gekauft haben
            </p>
          </div>

          {/* Field 2: Ø Jahresumsatz pro Kunde */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Ø Jahresumsatz pro Kunde (CHF)
            </label>
            <div className="relative">
              <input aria-label="Ø Jahresumsatz pro Kunde (CHF)"
                type="number"
                min="1"
                max="1000000"
                placeholder="z. B. 450"
                value={avgUmsatz}
                onChange={(e) => handleInputChange('umsatz', e.target.value)}
                className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-950 transition-all font-semibold"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-400 font-bold uppercase select-none">
                CHF / Jahr
              </span>
            </div>
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Durchschnittlicher Umsatz eines aktiven Kunden pro Jahr
            </p>
          </div>

          {/* Field 3: Aktuelle Retention-Rate */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
              Aktuelle Wiederkaufrate
            </label>
            <select aria-label="Aktuelle Wiederkaufrate"
              value={retentionKey}
              onChange={(e) => handleInputChange('retention', e.target.value)}
              className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-50/50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-905 transition-all font-semibold cursor-pointer text-slate-800"
            >
              <option value="">Bitte wählen</option>
              <option value="unter_20">Unter 20%: kaum Stammkunden</option>
              <option value="20_40">20% – 40%: Potenzial vorhanden</option>
              <option value="40_60">40% – 60%: solide Basis</option>
              <option value="60_80">60% – 80%: gut, aber steigerbar</option>
              <option value="ueber_80">Über 80%: viele Stammkunden</option>
            </select>
            <p className="text-[11px] text-slate-450 leading-relaxed font-medium select-none">
              Wie viel Prozent Ihrer Kunden kaufen im nächsten Jahr erneut?
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
                  <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Mögliches Umsatzplus</span>
                  <span className="text-3xl sm:text-4xl font-bold font-display text-slate-400 block tracking-tight my-1">
                    + CHF 54'000 / Jahr
                  </span>
                  <span className="inline-flex px-3 py-1 text-[11px] font-bold font-mono uppercase bg-slate-200 text-slate-500 rounded-md">
                    Ausbaufähig
                  </span>
                </div>

                <div className="pt-4 text-center space-y-1.5 self-center w-full">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#686DF4] bg-[#686DF4]/5 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" /> Ihre Zahlen eingeben
                  </div>
                  <p className="text-[11px] text-slate-400/90 font-mono">
                    Beispielrechnung · Wir schätzen Ihren möglichen Zusatzumsatz mit Bestandskunden.
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
                        <span>Ihr heutiger Umsatz aus Wiederkäufen:</span>
                        <strong className="text-slate-800">{formatCHF(result.aktuellerRetentionUmsatz)} / Jahr</strong>
                      </div>
                      <div className="flex justify-between text-emerald-600">
                        <span>Mögliches Ziel (Annahme: +15 Prozentpunkte):</span>
                        <strong>{formatCHF(result.zielRetentionUmsatz)} / Jahr</strong>
                      </div>
                    </div>

                    <div className="text-center py-2">
                      <span className="text-[11px] font-mono font-bold text-slate-400 block uppercase">Mögliches Umsatzplus pro Jahr</span>
                      <span className="text-3xl sm:text-4xl font-bold font-display text-emerald-600 tracking-tight my-1 block">
                        + {formatCHF(result.mehrUmsatz)} / Jahr
                      </span>
                      <span className="text-[11px] font-medium text-emerald-700 block select-none">
                        grobe Schätzung, ohne zusätzliche Neukunden
                      </span>

                      <div className="mt-2">
                        {result.diagnose === 'kritisch' && (
                          <span className="inline-flex px-3 py-1 text-[11px] font-bold font-mono uppercase bg-red-100 border border-red-200/50 text-red-700 rounded-md">
                            ⚠️ Kundenbindung: kritisch
                          </span>
                        )}
                        {result.diagnose === 'ausbaufähig' && (
                          <span className="inline-flex px-3 py-1 text-[11px] font-bold font-mono uppercase bg-amber-100 border border-amber-200/50 text-amber-700 rounded-md">
                            ⚠️ Kundenbindung: ausbaufähig
                          </span>
                        )}
                        {result.diagnose === 'stark' && (
                          <span className="inline-flex px-3 py-1 text-[11px] font-bold font-mono uppercase bg-emerald-100 border border-emerald-200/50 text-emerald-700 rounded-md">
                            ✓ Kundenbindung: stark
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Diagnose-Text */}
                    <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 italic text-xs leading-relaxed font-semibold text-slate-700">
                      {result.diagnose === 'kritisch' && (
                        <span>
                          Ein grosser Teil Ihrer Kunden kauft nur einmal. Das liegt selten am Produkt, sondern meist daran, dass nach dem ersten Kauf nichts Systematisches passiert. So bezahlen Sie immer wieder für die Gewinnung neuer Kunden, statt bestehende zu halten. Ehemalige Kunden zurückzugewinnen, ist in der Regel aufwendiger, als sie gar nicht erst zu verlieren.
                        </span>
                      )}
                      {result.diagnose === 'ausbaufähig' && (
                        <span>
                          Sie haben eine Basis, aber das Potenzial ist noch nicht ausgeschöpft. Die Rechnung oben geht von 15 Prozentpunkten mehr Wiederkäufen aus. Ob das bei Ihnen erreichbar ist, hängt von Sortiment und Kundschaft ab. Gute erste Schritte: E-Mails nach dem Kauf, eine Rückgewinnungs-Serie für Kunden, die länger nicht gekauft haben, und ein eigenes Segment für Ihre Stammkunden.
                        </span>
                      )}
                      {result.diagnose === 'stark' && (
                        <span>
                          Ihre Kundenbindung ist bereits gut. Weiteres Potenzial liegt weniger in der Kaufhäufigkeit als im Kundenwert: passende Zusatzangebote, eine Einteilung nach Kundenwert und gezielte Pflege Ihrer wichtigsten Kunden. Die Schätzung von {formatCHF(result.mehrUmsatz)} ist so möglich, etwa mit Ergänzungs- und Upgrade-Angeboten zum richtigen Zeitpunkt.
                        </span>
                      )}
                    </div>

                    {/* Edge case label / warnings */}
                    {vKunden < 50 && (
                      <p className="text-[11px] text-slate-450 text-left font-mono">
                        * Bei einer kleinen Kundenbasis fällt jeder verlorene Kunde stark ins Gewicht. Hier lohnt es sich besonders, Abwanderung früh zu erkennen.
                      </p>
                    )}
                    {vAvgUmsatz > 50000 && (
                      <p className="text-[11px] text-indigo-500 text-left font-mono font-bold">
                        * Bei einem hohen Umsatz pro Kunde lohnt es sich besonders, Abwanderung zu verhindern. Ein gehaltener Kunde ersetzt hier oft mehrere Neukunden.
                      </p>
                    )}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200/50">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      track("hero_tool_cta_click", { page: "customer-retention", variant: "booking" });
                      window.dispatchEvent(new CustomEvent('open-contact-modal'));
                    }}
                    className="w-full text-center bg-[#686DF4] hover:bg-slate-950 text-white font-bold text-xs py-4 px-5 rounded-xl uppercase tracking-wider inline-flex items-center justify-between transition-all cursor-pointer border-0"
                  >
                    <span>Ergebnis besprechen: 30 Min., kostenlos</span>
                    <ArrowRight className="w-4 h-4 text-white shrink-0" />
                  </button>
                  <p className="text-[11px] text-slate-400 text-center font-mono mt-2">
                    Im Erstgespräch schätzen wir gemeinsam ab, wie viel Umsatz in Ihren bestehenden Kunden steckt und was es braucht, um ihn zu nutzen.
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
            secondaryCTAText="Berechnung und Einschätzung per E-Mail erhalten →"
            danachText="Vielen Dank! Wir senden Ihnen in Kürze eine persönliche Einschätzung zur Kundenbindung per E-Mail."
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
