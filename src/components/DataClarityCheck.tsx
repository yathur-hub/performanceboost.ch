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
    titel: "Umsatz lässt sich keinem Kanal zuordnen",
    severity_label: "Kritisch",
    severity_color: "#E63946",
    erklaerung: "Sie wissen nicht, welche Kampagne oder welcher Kanal zu welchem Auftrag geführt hat. Diese Zuordnung ist im B2B-Marketing anspruchsvoll, aber besonders wertvoll.",
    konsequenz: "Folge: Budget wird nach Annahmen statt nach Fakten verteilt. Kampagnen mit vielen Klicks und Anfragen können wenig Umsatz bringen, und umgekehrt.",
    naechster_schritt: "→ Nächster Schritt: Kontaktpunkte bis zum Auftrag erfassen. HubSpot oder GA4 mit dem CRM verbinden, damit Aufträge an die Marketingdaten zurückgemeldet werden."
  },
  f2: {
    key: "f2",
    titel: "Ertrag einzelner Massnahmen nicht messbar",
    severity_label: "Kritisch",
    severity_color: "#E63946",
    erklaerung: "Sie können nicht in CHF sagen, was eine Kampagne, ein Kanal oder eine Massnahme gebracht hat. Gemessen werden Aktivitäten wie Klicks, nicht die tatsächlichen Ergebnisse.",
    konsequenz: "Folge: Budgetentscheide beruhen im Alltag auf Bauchgefühl. Es lässt sich kaum begründen, warum Budget erhöht oder umgeschichtet werden sollte.",
    naechster_schritt: "→ Nächster Schritt: Umsatz von der ersten Anfrage bis zum Auftrag nachverfolgen. CRM-Daten mit Marketingdaten verbinden."
  },
  f4: {
    key: "f4",
    titel: "Tracking von Anfragen fehlerhaft oder unvollständig",
    severity_label: "Kritisch",
    severity_color: "#E63946",
    erklaerung: "Werden Anfragen und andere Ziele nicht korrekt erfasst, stimmen alle Kennzahlen nicht, die darauf aufbauen: Kosten pro Anfrage, Zuordnung zu Kanälen, Werbeertrag. Fehlerhaftes Tracking ist heikel, weil es falsche Sicherheit gibt.",
    konsequenz: "Folge: Entscheide beruhen auf falschen Daten. Die automatische Gebotssteuerung von Google und Meta richtet sich nach den falschen Signalen.",
    naechster_schritt: "→ Nächster Schritt: Tracking prüfen lassen. GA4-Ereignisse, Bestätigungsseiten und die Anbindung ans CRM sorgfältig kontrollieren."
  },
  f1: {
    key: "f1",
    titel: "Unklar, welcher Kanal die besten Anfragen bringt",
    severity_label: "Hoch",
    severity_color: "#F4A261",
    erklaerung: "Sie wissen nicht verlässlich, welcher Kanal die passendsten Anfragen bringt, nicht nur die meisten. Menge und Qualität kommen oft aus ganz unterschiedlichen Kanälen.",
    konsequenz: "Folge: Budget wird verteilt wie bisher, nicht nach Daten. Gut möglich, dass der ertragreichste Kanal zu wenig Budget bekommt.",
    naechster_schritt: "→ Nächster Schritt: Qualität der Anfragen nach Kanal erfassen. Auswerten, wie viele Anfragen pro Quelle zu Verkaufsgesprächen und Aufträgen werden."
  },
  f3: {
    key: "f3",
    titel: "Kein aktiv genutztes Dashboard",
    severity_label: "Mittel",
    severity_color: "#E9C46A",
    erklaerung: "Selbst wenn Daten vorhanden sind, fehlt oft die Routine, auf ihrer Basis zu entscheiden. Ein Dashboard, das niemand anschaut, kostet Geld und bringt nichts.",
    konsequenz: "Folge: Die Zahlen werden erst angeschaut, wenn es brennt, statt regelmässig für die Steuerung.",
    naechster_schritt: "→ Nächster Schritt: Ein einfaches wöchentliches Dashboard mit rund 5 wichtigen Kennzahlen einrichten. Je einfacher, desto eher wird es genutzt."
  }
};

const SURVEY_FIELDS = [
  { id: 'f5', text: "Wir können unseren Umsatz konkret einzelnen Kampagnen oder Kanälen zuordnen.", prio: 1, severity: "kritisch" },
  { id: 'f2', text: "Ich kann den Ertrag einzelner Marketingmassnahmen in CHF messen.", prio: 2, severity: "kritisch" },
  { id: 'f4', text: "Unser Tracking von Anfragen ist korrekt und vollständig eingerichtet.", prio: 3, severity: "kritisch" },
  { id: 'f1', text: "Ich weiss jederzeit, welcher Kanal die meisten passenden Anfragen bringt.", prio: 4, severity: "hoch" },
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
        desc: "Sie entscheiden über Budget, Kanäle und Prioritäten ohne verlässliche Daten. Das ist bei wachsenden Unternehmen nicht ungewöhnlich, wird mit der Zeit aber teuer."
      };
    } else if (score <= 40) {
      return {
        key: "lueckenhaft",
        color: "#E63946",
        label: "Lückenhaft, an wichtigen Stellen fehlt Klarheit",
        desc: "Teilweise sind Daten vorhanden. Aber gerade dort, wo grosse Budgetentscheide fallen, also bei der Zuordnung zu Kanälen, beim Ertrag und beim Tracking von Anfragen, fehlt die Grundlage."
      };
    } else if (score <= 60) {
      return {
        key: "teilweise",
        color: "#F4A261",
        label: "Teilweise klar, Grundlage vorhanden",
        desc: "Das Fundament steht. Die offenen Punkte betreffen meist die letzten Meter: Wie viel bringt eine Massnahme wirklich, und welchem Kanal ist ein Auftrag zuzuordnen?"
      };
    } else if (score <= 80) {
      return {
        key: "gut",
        color: "#57CC99",
        label: "Gut aufgestellt, ein offener Punkt",
        desc: "Sie sind gut aufgestellt. Der letzte offene Punkt ist Feinschliff, kann für die Qualität Ihrer Entscheide aber viel ausmachen."
      };
    } else {
      return {
        key: "exzellent",
        color: "#2A9D8F",
        label: "Sehr gute Datenbasis",
        desc: "Die Grundlage ist vorhanden. Jetzt geht es um Vertiefung: genauere Zuordnung zu Kanälen, Prognosen und saubere A/B-Tests."
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
    track("hero_tool_cta_click", { page: "data-analytics", variant: "booking" });
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
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
            Daten-Check: Wie gut kennen Sie Ihre Zahlen?
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-[11px] text-slate-400 hover:text-slate-900 flex items-center gap-1 border border-slate-200/50 bg-[#f6f6f6]/60 rounded-lg px-2.5 py-1.5 font-bold uppercase font-mono cursor-pointer transition-colors"
        >
          <RefreshCw className="w-3 h-3" /> Zurücksetzen
        </button>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-8 font-semibold">
        Wie viele Ihrer Entscheide beruhen auf lückenhaften Daten? Beantworten Sie die fünf Aussagen ehrlich.
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
                  <span className={`text-[11px] font-mono font-bold uppercase px-1.5 py-0.5 rounded-md leading-none border ${
                    field.severity === 'kritisch' 
                      ? 'bg-red-50 text-[#E63946] border-red-100/10' 
                      : field.severity === 'hoch' 
                      ? 'bg-amber-50 text-[#F4A261] border-amber-100/10'
                      : 'bg-yellow-50 text-yellow-600 border-yellow-100/10'
                  }`}>
                    Priorität {field.prio} • Dringlichkeit: {field.severity}
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
            <span className="text-[11px] font-mono font-bold text-slate-400 mt-1 uppercase tracking-widest">
              Klarheit
            </span>
          </div>
        </div>

        <div className="space-y-1.5 text-center sm:text-left">
          <h4 className="text-xs font-mono font-black uppercase text-slate-400 tracking-wider">
            Ihre Datenbasis
          </h4>
          <p className="text-lg font-bold font-display leading-tight" style={{ color: levelInfo.color }}>
            {levelInfo.label}
          </p>
          <p className="text-[11px] text-slate-400 font-medium">
            Beantworten Sie alle 5 Aussagen, um Ihre Lücken zu sehen. ({completedQuestions}/5 beantwortet)
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
                    Drei zusammenhängende Lücken
                  </h5>
                  <p className="text-[11px] text-[#E63946] font-semibold leading-relaxed mt-1">
                    Diese drei Punkte hängen zusammen. Beginnen Sie mit dem Tracking. Solange Anfragen nicht sauber erfasst werden, sind die Zuordnung zu Kanälen und die Ertragsberechnung unzuverlässig, und Werbebudget wird falsch verteilt.
                  </p>
                </div>
              </div>
            )}

            {/* Rendered prioritized Blindspot Cards */}
            {activeBlindspots.length > 0 ? (
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  Ihre Lücken in den Daten:
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
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-black uppercase tracking-wider text-white shrink-0 shadow-3xs"
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
                            className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-400 hover:text-slate-905 bg-transparent border-none outline-none cursor-pointer flex items-center gap-1"
                          >
                            {isNSExpanded ? 'Schritt ausblenden ▲' : 'Nächsten Schritt anzeigen ▼'}
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
                    Keine Lücken gefunden
                  </h5>
                  <p className="text-xs text-emerald-700 leading-relaxed font-semibold mt-1">
                    Nach Ihren Angaben ist Ihre Datenbasis vollständig. Damit können Sie Marketing und Vertrieb gezielt nach Zahlen steuern.
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
                {activeBlindspots.length === 0 ? "Ergebnis besprechen" : "Erstgespräch vereinbaren"} <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Customizable tool select checkboxes on lead capture */}
            <LeadCaptureForm
              secondaryCTAText="Auswertung per E-Mail erhalten →"
              danachText="Wir senden Ihnen eine Einschätzung Ihrer Datensituation und eine Liste der Schritte, die sich schnell umsetzen lassen."
              pageId="data-analytics"
              additionalFields={[
                {
                  type: 'checkbox-group',
                  name: 'activeTools',
                  placeholder: 'Welche Tools nutzen Sie heute?',
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
