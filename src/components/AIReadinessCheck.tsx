import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, RefreshCw, CheckCircle, HelpCircle, ChevronDown, ChevronUp, Bot } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

interface UseCaseData {
  id: string;
  titel: string;
  warum: string;
  was: string;
  impact: string;
  zeitrahmen: string;
}

const useCaseStore: Record<string, UseCaseData> = {
  content_research: {
    id: "content_research",
    titel: "Content- und Research-Automation",
    warum: "Ihr erstellt Inhalte oder Research heute hauptsächlich manuell — das ist der häufigste Zeitkiller in B2B-Marketing-Teams.",
    was: "AI-Workflows für Erstentwürfe, Wettbewerbs-Research, Content-Briefings und automatisierte Report-Generierung. Euer Team übernimmt Strategie und Qualitätssicherung, AI übernimmt den ersten zeitaufwendigen Aufwand.",
    impact: "Typische Zeitersparnis: 5–15 Stunden / Woche bei einem 2-3-köpfigen Marketing-Team.",
    zeitrahmen: "Erste Workflows operational: ~2 Wochen"
  },
  lead_enrichment: {
    id: "lead_enrichment",
    titel: "AI-gestützte Lead-Recherche & Enrichment",
    warum: "Euer Ziel: Mehr qualifizierte Leads gewinnen. AI kann Prospect-Daten automatisch und hochgradig personalisiert anreichern, bevor Sales den ersten Kontakt macht.",
    was: "Clay, Apollo oder ähnliche Tools mit intelligenten LLM-Workflows verbinden: Unternehmensgrösse, Technologie-Stack, Wachstumssignale, LinkedIn-Aktivität — vollautomatisch für jeden neuen Prospect im HubSpot/Salesforce.",
    impact: "Sales geht in Gespräche besser vorbereitet. Durchschnittlich 2–3x höhere Qualität des ersten Kontakts.",
    zeitrahmen: "Operational: ~3–4 Wochen"
  },
  sales_prep: {
    id: "sales_prep",
    titel: "AI-gestützte Gesprächsvorbereitung",
    warum: "Sales-Zyklen sind oft unnötig lang, weil Vorbereitung Zeit kostet. AI kann in Minuten liefern, wofür ein Mensch sonst Stunden braucht.",
    was: "Automatisierte Pre-Call-Briefings: Unternehmen, Entscheidungsträger, Buying Signals, Wettbewerbssituation. Plus: AI-gestützte Analyse von aufgezeichneten Sales-Calls für Muster und Best Practices.",
    impact: "Kürzere Ramp-up-Zeit für neue Sales-Mitarbeiter. Höhere Win-Rate durch bessere Gesprächsvorbereitung.",
    zeitrahmen: "Operational: ~4–6 Wochen"
  },
  workflow_automation: {
    id: "workflow_automation",
    titel: "Workflow-Automation für repetitive Prozesse",
    warum: "Kapazität skalieren ohne mehr Personal braucht intelligente Automation. AI erledigt die Arbeit, die keine menschliche Kreativität braucht.",
    was: "E-Mail-Klassifizierung, Datenbereinigung, Meeting-Nachbereitung, Report-Generierung, CRM-Datenpflege. Intelligente Workflows in Make/n8n/Zapier, die mit LLMs verbunden sind.",
    impact: "3–8 Stunden manueller Arbeit pro Person und Woche eliminiert.",
    zeitrahmen: "Erste Automationen: ~1–2 Wochen"
  },
  ai_analysis: {
    id: "ai_analysis",
    titel: "AI-gestützte Datenanalyse & Insights",
    warum: "Ihr habt zwar Daten — aber die detaillierte Auswertung dauert zu lange oder passiert zu selten.",
    was: "AI-gestützte Analyse von CRM-Daten, Customer Feedback und Kampagnen-Performance. Anomalie-Erkennung, Trend-Identifikation und automatische Handlungsempfehlungen aus Reports.",
    impact: "Wöchentliche Insights statt monatlicher Reports. Entscheidungen auf Basis aktueller Daten, nicht veralteter Snapshots.",
    zeitrahmen: "Grundsetup: ~3 Wochen"
  },
  personalization_scale: {
    id: "personalization_scale",
    titel: "Personalisierung at Scale",
    warum: "Du hast die Infrastruktur — jetzt kannst du segmentiert personalisieren, was manuell schlicht nicht koordinierbar wäre.",
    was: "Personalisierte E-Mail-Sequenzen, dynamische Website-Inhalte und massgeschneiderte B2B-Angebote — basierend auf Realtime-Verhalten, Unternehmensdaten und Interaktionshistorie.",
    impact: "Durchschnittlich 2–4x höhere Engagement-Rate gegenüber Standard-Kommunikation.",
    zeitrahmen: "Erste Workflows: ~3–4 Wochen"
  }
};

export default function AIReadinessCheck() {
  const [f1, setF1] = useState<number | null>(null); // Process Doc
  const [f2, setF2] = useState<number | null>(null); // CRM Quality
  const [f3, setF3] = useState<'ja' | 'nein' | null>(null); // Manual content
  const [f4, setF4] = useState<number | null>(null); // AI usage
  const [f5, setF5] = useState<string>(''); // Growth goal

  // Card expand tracking
  const [expandedCases, setExpandedCases] = useState<Record<string, boolean>>({});

  useEffect(() => {
    track("hero_tool_viewed", { page: "ai-automation" });
  }, []);

  const handleFieldSet = (field: 'f1' | 'f2' | 'f3' | 'f4' | 'f5', val: any) => {
    track("hero_tool_started", { page: "ai-automation" });
    if (field === 'f1') setF1(val);
    else if (field === 'f2') setF2(val);
    else if (field === 'f3') setF3(val);
    else if (field === 'f4') setF4(val);
    else if (field === 'f5') setF5(val);
  };

  // Readiness Score: F1 + F2 + F4
  const isReadinessCalculable = f1 !== null || f2 !== null || f4 !== null;
  
  const score = (f1 || 0) + (f2 || 0) + (f4 || 0); // 0-6

  const levelInfo = React.useMemo(() => {
    if (!isReadinessCalculable) return null;
    
    if (score <= 1) {
      return {
        key: "beginner",
        label: "Beginner",
        color: "#F4A261",
        desc: "Der Einstieg ist genau jetzt richtig. Du musst nicht perfekt vorbereitet sein, um mit AI anzufangen. Die besten ersten Schritte sind die, die schnell messbaren Wert liefern — ohne grosse technische Infrastruktur."
      };
    } else if (score <= 4) {
      return {
        key: "intermediate",
        label: "Intermediate",
        color: "#4361EE",
        desc: "Du hast Ansätze — jetzt geht es um Systematisierung. Einzelne AI-Tools existieren vielleicht schon. Aber AI als integrierter Teil deiner Prozesse — das ist der nächste Schritt. Der hat messbaren Impact."
      };
    } else {
      return {
        key: "advanced",
        label: "Advanced",
        color: "#2A9D8F",
        desc: "Du hast die Grundlagen — Zeit für echte Skalierung. Deine Infrastruktur und Datenqualität erlauben es, AI dort einzusetzen, wo andere noch experimentieren. Die Use-Cases für dich sind komplexer — und wertvoller."
      };
    }
  }, [score, isReadinessCalculable]);

  const isComplete = f1 !== null && f2 !== null && f3 !== null && f4 !== null && f5 !== '';

  // Deduplicated empfohlen Use Cases logic
  const recommendedCases = React.useMemo(() => {
    if (!isComplete || !levelInfo) return [];

    const goal = f5;
    const levelKey = levelInfo.key;
    const isManual = f3 === 'ja';

    const cases: string[] = [];

    // Use Case 1: Base Trigger
    if (isManual) {
      cases.push("content_research");
    } else {
      // Fallback goal mapping
      const backupMap: Record<string, string> = {
        leads:               "lead_enrichment",
        sales_speed:         "sales_prep",
        marketing_efficiency: "workflow_automation",
        data:                "ai_analysis",
        scale:               "workflow_automation"
      };
      cases.push(backupMap[goal] || "workflow_automation");
    }

    // Use Case 2: Basierend auf Goal
    const goalMap: Record<string, string> = {
      leads:               "lead_enrichment",
      sales_speed:         "sales_prep",
      marketing_efficiency: "content_research",
      data:                "ai_analysis",
      scale:               "workflow_automation"
    };
    const goalCase = goalMap[goal] || "workflow_automation";
    if (!cases.includes(goalCase)) {
      cases.push(goalCase);
    }

    // Use Case 3: Basierend auf Level
    let levelCase = "content_research";
    if (levelKey === "advanced") levelCase = "personalization_scale";
    else if (levelKey === "intermediate") levelCase = "workflow_automation";

    if (!cases.includes(levelCase)) {
      cases.push(levelCase);
    }

    // Ensure we have exactly 3 DISTINCT use cases, by filling from all remaining list keys if short
    const allKeys = ["content_research", "lead_enrichment", "sales_prep", "workflow_automation", "ai_analysis", "personalization_scale"];
    for (const key of allKeys) {
      if (cases.length >= 3) break;
      if (!cases.includes(key)) {
        cases.push(key);
      }
    }

    return cases.slice(0, 3).map(id => useCaseStore[id]);
  }, [f3, f5, levelInfo, isComplete]);

  useEffect(() => {
    if (isComplete && levelInfo) {
      track("hero_tool_output_shown", {
        page: "ai-automation",
        level: levelInfo.key,
        goal: f5,
        use_cases: recommendedCases.map(c => c.id).join(",")
      });
    }
  }, [isComplete, levelInfo, f5, recommendedCases]);

  const toggleCaseExpanded = (id: string) => {
    setExpandedCases(prev => {
      const nextState = !prev[id];
      if (nextState) {
        track("hero_tool_usecase_expanded", {
          page: "ai-automation",
          use_case: id
        });
      }
      return { ...prev, [id]: nextState };
    });
  };

  const handleBooking = () => {
    window.open('https://calendar.app.google/7oGfyaAEKsdWRTFW8', '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setF1(null);
    setF2(null);
    setF3(null);
    setF4(null);
    setF5('');
    setExpandedCases({});
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-[760px] mx-auto text-left" id="ai-readiness-check">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <Bot className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            AI-Readiness-Check
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
        Welche AI-Use-Cases machen für euch am meisten Sinn? Beantworte diese 5 strategischen Hebel-Fragen.
      </p>

      {/* Input survey items */}
      <div className="space-y-5">
        
        {/* F1 */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm text-slate-800 font-bold block leading-snug">
            Sind eure wichtigsten wiederkehrenden Prozesse dokumentiert?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Ja', val: 2 },
              { label: 'Teilweise', val: 1 },
              { label: 'Nein', val: 0 }
            ].map(lvl => (
              <button
                key={lvl.label}
                type="button"
                onClick={() => handleFieldSet('f1', lvl.val)}
                className={`text-xs font-bold px-3 py-2.5 rounded-xl border transition-all cursor-pointer ${
                  f1 === lvl.val
                    ? 'bg-[#686DF4] text-white border-transparent shadow-xs'
                    : 'bg-transparent text-slate-400 border-slate-200/55 hover:bg-slate-50'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Z. B. im Onboarding, der Lead-Bearbeitung, Content-Erstellung.</p>
        </div>

        {/* F2 */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm text-slate-800 font-bold block leading-snug">
            Sind eure CRM-Daten aktuell und sauber gepflegt?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Ja', val: 2 },
              { label: 'Teilweise', val: 1 },
              { label: 'Nein', val: 0 }
            ].map(lvl => (
              <button
                key={lvl.label}
                type="button"
                onClick={() => handleFieldSet('f2', lvl.val)}
                className={`text-xs font-bold px-3 py-2.5 rounded-xl border transition-all cursor-pointer ${
                  f2 === lvl.val
                    ? 'bg-[#686DF4] text-white border-transparent shadow-xs'
                    : 'bg-transparent text-slate-400 border-slate-200/55 hover:bg-slate-50'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Vollständige Kontaktdaten, keine Duplikate, gepflegte Dealstage-Status.</p>
        </div>

        {/* F3 */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm text-slate-800 font-bold block leading-snug">
            Wird Research, Content oder Reporting heute hauptsächlich manuell erstellt?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Ja', val: 'ja' },
              { label: 'Nein', val: 'nein' }
            ].map(lvl => (
              <button
                key={lvl.label}
                type="button"
                onClick={() => handleFieldSet('f3', lvl.val)}
                className={`text-xs font-bold px-3 py-2.5 rounded-xl border transition-all cursor-pointer ${
                  f3 === lvl.val
                    ? 'bg-[#686DF4] text-white border-transparent shadow-xs'
                    : 'bg-transparent text-slate-400 border-slate-200/55 hover:bg-slate-50'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-medium font-sans">Manuelle Handarbeit = Hohe Automations-Hebelwirkung.</p>
        </div>

        {/* F4 */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm text-slate-800 font-bold block leading-snug">
            Wird AI in eurem Unternehmen bereits eingesetzt?
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Aktiv', val: 2 },
              { label: 'Experimentell', val: 1 },
              { label: 'Nein', val: 0 }
            ].map(lvl => (
              <button
                key={lvl.label}
                type="button"
                onClick={() => handleFieldSet('f4', lvl.val)}
                className={`text-xs font-bold px-2 py-2.5 rounded-xl border transition-all cursor-pointer ${
                  f4 === lvl.val
                    ? 'bg-[#686DF4] text-white border-transparent shadow-xs'
                    : 'bg-transparent text-slate-400 border-slate-200/55 hover:bg-slate-50'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Z. B. via ChatGPT, Copilot, native AI-Features in Hubspot/Notion etc.</p>
        </div>

        {/* F5 */}
        <div className="space-y-1.5">
          <label className="text-xs sm:text-sm text-slate-800 font-bold block leading-snug">
            Was ist euer primäres Wachstumsziel in den nächsten 6 Monaten?
          </label>
          <select
            value={f5}
            onChange={e => handleFieldSet('f5', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors cursor-pointer shadow-xs"
          >
            <option value="">Bitte wählen...</option>
            <option value="leads">Mehr qualifizierte Leads gewinnen</option>
            <option value="sales_speed">Sales-Zyklen verkürzen</option>
            <option value="marketing_efficiency">Marketing-Team effizienter machen</option>
            <option value="data">Bessere Entscheidungsgrundlagen (Daten)</option>
            <option value="scale">Team-Kapazität skalieren ohne mehr Personal</option>
          </select>
        </div>

      </div>

      {/* Live Readiness badge (shown dès question 1 is changed, without waiting layout finish) */}
      {levelInfo && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-4"
        >
          <div 
            className="px-4 py-2 rounded-xl text-xs font-black font-mono uppercase text-white shadow-xs tracking-wider"
            style={{ backgroundColor: levelInfo.color }}
          >
            {levelInfo.label}
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-900 font-display">
              AI-Readiness Status
            </h5>
            <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
              {levelInfo.desc}
            </p>
          </div>
        </motion.div>
      )}

      {/* Recommended Use-Cases on complete survey state */}
      <div className="mt-10">
        {!isComplete ? (
          <div className="bg-[#f6f6f6]/55 border border-dashed border-slate-200 rounded-2xl p-8 text-center shadow-xs">
            <p className="text-xs text-slate-405 text-slate-400 font-semibold uppercase tracking-wider font-mono">
              Fülle alle 5 Felder oben aus, um passgenaue Use-Cases anzuzeigen
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
              DIAGNOSTIZIERTE EMPEHLUNGEN (3 USE-CASES)
            </span>

            {/* Staggered animated cards */}
            <div className="space-y-5">
              {recommendedCases.map((usecase, index) => {
                const isExpanded = !!expandedCases[usecase.id];
                return (
                  <motion.div
                    key={usecase.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="bg-white border border-slate-200 hover:border-[#686DF4]/25 shadow-xs hover:shadow-sm rounded-2xl p-6 text-left transition-all duration-350"
                  >
                    <div className="flex gap-4 items-start pb-4 border-b border-slate-100 mb-4">
                      {/* Counter Index number */}
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#686DF4] border border-indigo-150 flex items-center justify-center font-display font-bold text-xs shrink-0 shadow-2xs">
                        {index + 1}
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {usecase.titel}
                        </h4>
                        <span className="bg-[#686DF4]/5 text-[#686DF4] text-[9px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded-md leading-none border border-[#686DF4]/10">
                          {usecase.zeitrahmen}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold leading-relaxed text-slate-600">
                        <strong className="text-slate-800 font-display">Herausforderung:</strong> {usecase.warum}
                      </p>

                      {/* Prominent highlighted Impact metric */}
                      <div className="bg-emerald-50/50 text-emerald-800 px-4 py-3 rounded-xl text-xs font-bold border border-emerald-100/50 shadow-2xs">
                        🚀 {usecase.impact}
                      </div>
                    </div>

                    {/* Expandable detail region */}
                    <div className="pt-3">
                      <button
                        onClick={() => toggleCaseExpanded(usecase.id)}
                        className="text-[10px] font-mono leading-none tracking-wider uppercase text-slate-400 hover:text-slate-950 font-bold bg-transparent border-none cursor-pointer flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>Details verbergen <ChevronUp className="w-3 h-3 text-[#686DF4]" /></>
                        ) : (
                          <>Details anzeigen ▼</>
                        )}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mt-3 text-slate-500 text-xs sm:text-sm leading-relaxed"
                          >
                            <div className="p-4 bg-slate-50 border border-slate-200/50 rounded-xl space-y-1.5 animate-fadeIn">
                              <h5 className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-405 text-slate-400">
                                WIE DIE ERRICHTUNG AUSSIEHT
                              </h5>
                              <p className="text-xs text-slate-650 text-slate-600 font-semibold leading-relaxed">
                                {usecase.was}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </motion.div>
                );
              })}
            </div>

            {/* CTA action section */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                AI-Gespräch buchen — kostenlos, 30 Min <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Custom capture model trigger */}
            <LeadCaptureForm
              secondaryCTAText="AI-Roadmap per E-Mail erhalten →"
              danachText="Wir schicken dir eine priorisierte AI-Roadmap mit konkreten Umsetzungsschritten für dein spezifisches Setup."
              pageId="ai-automation"
              additionalFields={[
                {
                  type: 'select',
                  name: 'teamSize',
                  placeholder: 'Grösse des Gesamtteams',
                  options: ['1–5 Personen', '6–20 Personen', '21–100 Personen', 'Mehr als 100 Personen']
                }
              ]}
            />

          </motion.div>
        )}
      </div>

    </div>
  );
}
export { AIReadinessCheck };
