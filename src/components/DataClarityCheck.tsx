import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, ArrowRight, RefreshCw, ChevronDown, ChevronUp, AlertTriangle, Check, BookOpen } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

interface BlindspotDetails {
  key: string;
  titel: string;
  severity_label: 'Kritisch' | 'Hoch' | 'Mittel';
  severity_color: string;
  erklaerung: string;
  konsequenz: string;
  naechster_schritt: string;
}

const blindspotStore: Record<string, BlindspotDetails> = {
  f5: {
    key: "f5",
    titel: "Fehlende Revenue-Attribution",
    severity_label: "Kritisch",
    severity_color: "#E63946",
    erklaerung: "Du weisst nicht, welche Kampagne oder welcher Kanal zu welchem Abschluss geführt hat. Attribution ist das schwierigste — aber wertvollste — Datenproblem im B2B-Marketing.",
    konsequenz: "Konsequenz: Du optimierst Budget auf Basis von Annahmen statt Fakten. Kampagnen, die gut aussehen (Klicks, Leads), können schlechte Revenue-Ergebnisse haben — und umgekehrt.",
    naechster_schritt: "→ Nächster Schritt: Multi-Touch-Attribution einrichten. HubSpot oder GA4 mit CRM verbinden, Closed-Loop-Reporting aufbauen."
  },
  f2: {
    key: "f2",
    titel: "ROI einzelner Massnahmen nicht messbar",
    severity_label: "Kritisch",
    severity_color: "#E63946",
    erklaerung: "Du kannst nicht in CHF ausdrücken, was eine Kampagne, ein Kanal oder eine Massnahme gebracht hat. Alles wird in Aktivitäts-Metriken gemessen — nicht in tatsächlichen Ergebnissen.",
    konsequenz: "Konsequenz: Budgetentscheidungen basieren im Alltag auf reiner Intuition. Es ist unmöglich zu argumentieren, warum Budget erhöht oder umgeschichtet werden sollte.",
    naechster_schritt: "→ Nächster Schritt: Revenue-Tracking vom Lead bis zum Abschluss. CRM-Daten mit Marketing-Daten verbinden."
  },
  f4: {
    key: "f4",
    titel: "Conversion-Tracking fehlerhaft oder unvollständig",
    severity_label: "Kritisch",
    severity_color: "#E63946",
    erklaerung: "Wenn Conversion-Events nicht korrekt erfasst werden, sind alle darauf aufbauenden Metriken falsch — Cost-per-Lead, Attribution, ROAS, alles. Schlechtes Tracking ist schlimmer als kein Tracking, weil es falsche Sicherheit erzeugt.",
    konsequenz: "Konsequenz: Optimierungsentscheidungen basieren auf falschen Daten. AI-Bidding (Google, Meta) optimiert auf die falschen Signale.",
    naechster_schritt: "→ Nächster Schritt: Tracking-Audit. GA4 Events, Conversion-Bestätigungsseiten, CRM-Integration gründlich prüfen."
  },
  f1: {
    key: "f1",
    titel: "Kanal-Attribution unklar",
    severity_label: "Hoch",
    severity_color: "#F4A261",
    erklaerung: "Du weisst nicht verlässlich, welcher Kanal die qualifiziertesten Leads bringt — nicht nur die meisten. Volume und Qualität sind oft in ganz verschiedenen Kanälen.",
    konsequenz: "Konsequenz: Budget-Allokation nach 'wir haben immer so investiert' statt nach Daten. Der am Ende ertragreichste Kanal ist wahrscheinlich drastisch unterskaliert.",
    naechster_schritt: "→ Nächster Schritt: Lead-Qualitäts-Tracking nach Kanal einrichten. SQL-Rate und Abschlussrate nach Quelle auswerten."
  },
  f3: {
    key: "f3",
    titel: "Kein aktiv genutztes Dashboard",
    severity_label: "Mittel",
    severity_color: "#E9C46A",
    erklaerung: "Selbst wenn Daten vorhanden sind, fehlt oft die Routine, Entscheidungen datenbasiert zu treffen. Ein Dashboard, das nicht genutzt wird, ist ein teures Datengrab.",
    konsequenz: "Konsequenz: Daten werden nur in Krisenzeiten konsultiert, nicht als regelmässige strategische Steuerungsgrundlage.",
    naechster_schritt: "→ Nächster Schritt: Ein einfaches wöchentliches Dashboard mit 5 Kern-KPIs einrichten. Nicht mehr — Einfachheit fördert die tatsächliche Nutzung."
  }
};

const SURVEY_FIELDS = [
  { id: 'f5', text: "Wir können Revenue konkret auf Kampagnen oder Kanäle zurückführen.", prio: 1, severity: "kritisch" },
  { id: 'f2', text: "Ich kann den ROI einzelner Marketing-Massnahmen in CHF messen.", prio: 2, severity: "kritisch" },
  { id: 'f4', text: "Unser Conversion-Tracking ist korrekt und vollständig eingerichtet.", prio: 3, severity: "kritisch" },
  { id: 'f1', text: "Ich weiss jederzeit, welcher Kanal die meisten qualifizierten Leads bringt.", prio: 4, severity: "hoch" },
  { id: 'f3', text: "Unser Team nutzt ein Dashboard mindestens wöchentlich für Entscheidungen.", prio: 5, severity: "mittel" }
];

export default function DataClarityCheck() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({
    f1: null,
    f2: null,
    f3: null,
    f4: null,
    f5: null
  });

  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [expandedNextSteps, setExpandedNextSteps] = useState<Record<string, boolean>>({});

  useEffect(() => {
    track("hero_tool_viewed", { page: "data-analytics" });
  }, []);

  const handleToggle = (qId: string, val: boolean) => {
    if (!hasStarted) {
      setHasStarted(true);
      track("hero_tool_started", { page: "data-analytics" });
    }

    setAnswers(prev => ({ ...prev, [qId]: val }));

    track("hero_tool_answer_given", {
      page: "data-analytics",
      question: qId,
      answer: val
    });
  };

  const completedQuestions = Object.values(answers).filter(val => val !== null).length;
  const allSet = completedQuestions === 5;
  const jaCount = Object.values(answers).filter(val => val === true).length;
  const score = Math.round((jaCount / 5) * 100);

  const levelInfo = React.useMemo(() => {
    if (score === 0) {
      return {
        key: "dunkel",
        color: "#E63946",
        label: "Keine messbare Entscheidungsgrundlage",
        desc: "Du triffst Entscheidungen über Budget, Kanäle und Prioritäten ohne verlässliche Daten. Das ist nicht ungewöhnlich für wachsende Unternehmen — aber es ist der Zustand, der am Ende am teuersten ist."
      };
    } else if (score <= 40) {
      return {
        key: "lueckenhaft",
        color: "#E63946",
        label: "Lückenhaft — an kritischen Stellen fehlt Klarheit",
        desc: "Du hast Teildaten. Aber genau dort wo schwere Budget-Entscheidungen getroffen werden — Attribution, ROI, Conversion — fehlt die grundlegende Basis."
      };
    } else if (score <= 60) {
      return {
        key: "teilweise",
        color: "#F4A261",
        label: "Teilweise klar — Grundlage vorhanden",
        desc: "Du hast ein solides Fundament. Die verbleibenden Blindspots betreffen meistens die 'letzten Meter' — wie viel bringt eine Marketingmassnahme wirklich, und welchem Kanal ist ein Abschluss zweifelsfrei zuzuschreiben?"
      };
    } else if (score <= 80) {
      return {
        key: "gut",
        color: "#57CC99",
        label: "Gut aufgestellt — ein Blindspot verbleibt",
        desc: "Du bist besser aufgestellt als die meisten Schweizer B2B-Unternehmen. Der letzte offene Punkt ist Feinschliff — kann aber an Entscheidungsqualität einen riesigen Unterschied machen."
      };
    } else {
      return {
        key: "exzellent",
        color: "#2A9D8F",
        label: "Best-in-Class Daten-Klarheit",
        desc: "Du hast die Grundlage, die andere fieberhaft suchen. Jetzt geht es um die Vertiefung: bessere Attribution, prädiktive Analytik, und eine saubere A/B-Testing-Infrastruktur."
      };
    }
  }, [score]);

  // Sorting blindspots (false answers) in priority order Map F5 -> F2 -> F4 -> F1 -> F3
  const activeBlindspots = React.useMemo(() => {
    if (!allSet) return [];
    
    const elements = SURVEY_FIELDS.filter(f => answers[f.id] === false);
    return elements.map(f => blindspotStore[f.id]).filter(Boolean);
  }, [answers, allSet]);

  // Is multi-blindspot warning showing? (3 critical blindspots false)
  // Critical keys are f5, f2, f4
  const criticalFalseCount = React.useMemo(() => {
    let count = 0;
    if (answers.f5 === false) count++;
    if (answers.f2 === false) count++;
    if (answers.f4 === false) count++;
    return count;
  }, [answers]);

  const hasThreeCriticalBlindspots = allSet && criticalFalseCount === 3;

  useEffect(() => {
    if (allSet) {
      track("hero_tool_output_shown", {
        page: "data-analytics",
        score: score,
        level: levelInfo.key,
        blindspot_count: activeBlindspots.length,
        top_blindspot: activeBlindspots[0]?.key || "none"
      });
    }
  }, [score, allSet, levelInfo.key, activeBlindspots]);

  const toggleNextStepExpanded = (key: string) => {
    setExpandedNextSteps(prev => {
      const nextState = !prev[key];
      if (nextState) {
        track("hero_tool_blindspot_expanded", {
          page: "data-analytics",
          blindspot: key
        });
      }
      return { ...prev, [key]: nextState };
    });
  };

  const handleBooking = () => {
    window.open('https://calendar.app.google/7oGfyaAEKsdWRTFW8', '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setAnswers({
      f1: null,
      f2: null,
      f3: null,
      f4: null,
      f5: null
    });
    setHasStarted(false);
    setExpandedNextSteps({});
  };

  // Circular gauge config
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const percentageOffset = circumference - (score / 100) * circumference;

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-[760px] mx-auto text-left" id="data-clarity-check">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <PieChart className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Data-Clarity-Check
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-[10px] text-slate-400 hover:text-slate-900 flex items-center gap-1 border border-slate-200/50 bg-[#f6f6f6]/60 rounded-lg px-2.5 py-1.5 font-bold uppercase font-mono cursor-pointer transition-colors"
        >
          <RefreshCw className="w-3 h-3" /> Reset
        </button>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-8 font-semibold">
        Wie viele Entscheidungen triffst du auf Basis lückenhafter Daten? Beantworte diese 5 Aussagen ehrlich.
      </p>

      {/* Survey controls layout - first person claims */}
      <div className="space-y-4">
        {SURVEY_FIELDS.map((field) => {
          const cAns = answers[field.id];
          return (
            <div 
              key={field.id}
              className={`p-4 rounded-2xl border transition-all duration-200 ${
                cAns !== null ? 'bg-slate-50 border-slate-200/70' : 'bg-transparent border-slate-100'
              } flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
            >
              <div className="space-y-1.5">
                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                  &ldquo;{field.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-md leading-none border ${
                    field.severity === 'kritisch' 
                      ? 'bg-red-50 text-[#E63946] border-red-100/10' 
                      : field.severity === 'hoch' 
                      ? 'bg-amber-50 text-[#F4A261] border-amber-100/10'
                      : 'bg-yellow-50 text-yellow-600 border-yellow-100/10'
                  }`}>
                    Prio {field.prio} • Severity: {field.severity}
                  </span>
                </div>
              </div>

              {/* Toggle controls */}
              <div className="flex shrink-0 gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleToggle(field.id, true)}
                  className={`flex-1 sm:flex-none text-xs font-bold font-mono tracking-wider uppercase px-4.5 py-2.5 rounded-xl border transition-all cursor-pointer ${
                    cAns === true
                      ? 'bg-emerald-500 text-white border-transparent shadow-xs'
                      : 'bg-transparent text-slate-400 border-slate-200/55 hover:bg-slate-50'
                  }`}
                >
                  Ja
                </button>
                <button
                  type="button"
                  onClick={() => handleToggle(field.id, false)}
                  className={`flex-1 sm:flex-none text-xs font-bold font-mono tracking-wider uppercase px-4.5 py-2.5 rounded-xl border transition-all cursor-pointer ${
                    cAns === false
                      ? 'bg-red-500 text-white border-transparent shadow-xs'
                      : 'bg-transparent text-slate-400 border-slate-200/55 hover:bg-slate-50'
                  }`}
                >
                  Nein
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Symmetrical live circle Donut Progress chart */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-6">
        
        {/* SVG circular Donut Gauge */}
        <div className="relative w-32 h-32 shrink-0">
          <svg className="w-full h-full transform -rotate-90">
            {/* Symmetrical base path track */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="#E2E8F0"
              strokeWidth="10"
              fill="transparent"
            />
            {/* Animated percentage progress stroke */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke={levelInfo.color}
              strokeWidth="10"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={percentageOffset}
              strokeLinecap="round"
              className="transition-all duration-500 ease-out"
            />
          </svg>
          {/* Centered value numerals */}
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-black font-mono leading-none tracking-tight" style={{ color: levelInfo.color }}>
              {score}%
            </span>
            <span className="text-[8px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-widest">
              CLARITY
            </span>
          </div>
        </div>

        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">
            RECHTEN SCHWIERIGKEITS-INDEX
          </h4>
          <p className="text-lg font-bold font-display leading-tight" style={{ color: levelInfo.color }}>
            {levelInfo.label}
          </p>
          <p className="text-[10px] text-slate-400 font-medium">
            Beantworte alle 5 Hebel-Aussagen für deine personalisierten Blindspots. ({completedQuestions}/5 abgeschlossen)
          </p>
        </div>

      </div>

      {/* Output details area */}
      <AnimatePresence>
        {allSet && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden space-y-6 mt-8"
          >
            {/* Level description block */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
              <p className="text-xs sm:text-sm text-slate-650 text-slate-650 text-slate-600 leading-relaxed font-semibold">
                {levelInfo.desc}
              </p>
            </div>

            {/* Special warning banner triggers if 3 critical questions are wrong */}
            {hasThreeCriticalBlindspots && (
              <div className="bg-red-50 border border-red-200 p-5 rounded-2xl flex gap-4 text-left items-center">
                <AlertTriangle className="w-6 h-6 text-[#E63946] shrink-0" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-[#E63946] font-display">
                    Drei hochgradig abhängige Defizite identifiziert
                  </h5>
                  <p className="text-[11px] text-[#E63946] font-semibold leading-relaxed mt-1">
                    ⚠ Alle drei sind abhängig voneinander — starte mit dem Tracking-Fundament (F4). Ohne saubere Conversion-Aktivitäten sind Attributionen (F5) und Hebelberechnungen (F2) unzuverlässig und führen zu falschen Ad-Budgets.
                  </p>
                </div>
              </div>
            )}

            {/* Rendered prioritized Blindspot Cards */}
            {activeBlindspots.length > 0 ? (
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  Identifizierte Daten-Blindspots:
                </span>

                {activeBlindspots.map((bs) => {
                  const isNSExpanded = !!expandedNextSteps[bs.key];
                  return (
                    <div 
                      key={bs.key}
                      className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs relative text-left transition-all hover:border-slate-300"
                      style={{ borderLeftWidth: '5px', borderLeftColor: bs.severity_color }}
                    >
                      <div className="p-5 space-y-3">
                        
                        {/* Header badge severity */}
                        <div className="flex justify-between items-start gap-4">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-950 font-display">
                            {bs.titel}
                          </h4>
                          <span 
                            className="px-2.5 py-0.5 rounded-md text-[9px] font-mono font-black uppercase tracking-wider text-white shrink-0 shadow-3xs"
                            style={{ backgroundColor: bs.severity_color }}
                          >
                            {bs.severity_label}
                          </span>
                        </div>

                        {/* Description and italics impact */}
                        <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                          {bs.erklaerung}
                        </p>
                        <p className="text-[11px] text-slate-750 font-semibold italic text-slate-700 leading-relaxed pt-1">
                          {bs.konsequenz}
                        </p>

                        {/* Accordion next step within card context */}
                        <div className="border-t border-slate-100 pt-3 mt-1">
                          <button
                            onClick={() => toggleNextStepExpanded(bs.key)}
                            className="text-[9px] font-mono uppercase tracking-wider font-bold text-slate-400 hover:text-slate-905 bg-transparent border-none outline-none cursor-pointer flex items-center gap-1"
                          >
                            {isNSExpanded ? 'Schritt verbergen ▲' : 'Nächster Schritt einsehen ▼'}
                          </button>

                          <AnimatePresence>
                            {isNSExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="mt-3 p-3.5 bg-blue-50/50 border border-blue-105 border-indigo-150/15 text-xs text-[#686DF4] rounded-xl font-bold leading-relaxed font-sans">
                                  {bs.naechster_schritt}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>
            ) : (
              // All answers are "Ja" congratulations block
              <div className="bg-emerald-50/50 p-6 rounded-2xl text-left flex gap-4 items-start border border-emerald-100/50">
                <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-emerald-805 font-display text-emerald-800">
                    Hervorragend! Keine Blindspots im Datenbestand gefunden
                  </h5>
                  <p className="text-xs text-emerald-700 leading-relaxed font-semibold mt-1">
                    Ihr habt die volle Daten-Klarheit, die andere B2B-Unternehmen suchen. Eure Go-to-Market-Systeme können datengesteuert exzellent skaliert werden.
                  </p>
                </div>
              </div>
            )}

            {/* Action booking CTA wrapper */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                {activeBlindspots.length === 0 ? "Wie bringst du deine Daten-Infrastruktur auf das nächste Level?" : "Daten-Gespräch buchen — kostenlos, 30 Min"} <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Customizable tool select checkboxes on lead capture */}
            <LeadCaptureForm
              secondaryCTAText="Data-Audit-Bericht per E-Mail erhalten →"
              danachText="Wir schicken dir eine Einschätzung deiner Daten-Situation und eine priorisierte Liste der Quick Wins."
              pageId="data-analytics"
              additionalFields={[
                {
                  type: 'checkbox-group',
                  name: 'activeTools',
                  placeholder: 'Welche Daten-Tools verwendet ihr aktuell?',
                  options: ['Google Analytics 4', 'HubSpot', 'Salesforce', 'Looker Studio / Data Studio', 'Anderes / Keines']
                }
              ]}
            />

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
export { DataClarityCheck };
