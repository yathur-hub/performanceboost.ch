import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, ArrowRight, Sparkles, AlertCircle, RefreshCw, Calendar, CheckCircle } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

interface Question {
  id: 'f1' | 'f2' | 'f3' | 'f4' | 'f5';
  text: string;
  subtext: string;
  priority: number;
  label: string;
}

const QUESTIONS: Question[] = [
  {
    id: 'f1',
    text: "Werden neue Leads automatisch im CRM erfasst?",
    subtext: "Ohne manuelle Dateneingabe durch jemanden im Team",
    priority: 3,
    label: "crm_erfassung"
  },
  {
    id: 'f2',
    text: "Gibt es automatische Follow-up-Sequenzen nach Lead-Eingang?",
    subtext: "Z. B. eine E-Mail-Sequenz, die automatisch startet wenn ein Lead reinkommt",
    priority: 1,
    label: "follow_up"
  },
  {
    id: 'f3',
    text: "Wird Lead-Scoring eingesetzt?",
    subtext: "Automatische Bewertung, wie kaufbereit ein Lead ist",
    priority: 2,
    label: "scoring"
  },
  {
    id: 'f4',
    text: "Ist der Übergabeprozess von Marketing an Sales klar definiert?",
    subtext: "Mit schriftlichen Kriterien, wann ein Lead an den Vertrieb übergeben wird",
    priority: 4,
    label: "uebergabe"
  },
  {
    id: 'f5',
    text: "Wird Nurturing auf Nutzerverhalten angepasst?",
    subtext: "Z. B. andere E-Mail-Sequenz wenn jemand eine Preisseite besucht vs. einen Blogpost liest",
    priority: 5,
    label: "verhalten"
  }
];

const naechsteSchritte = {
  follow_up: {
    titel: "Nächster Schritt: Automatische Follow-up-Sequenz",
    text: "Das ist der höchste ROI-Schritt im B2B-Marketing-Automation. 70% der Leads, die nicht sofort nachgefasst werden, kaufen nie. Eine einfache 3-E-Mail-Sequenz kann das in 2 Wochen lösen — in deinem bestehenden CRM oder E-Mail-Tool.",
    zeitrahmen: "Operational in: ~2 Wochen"
  },
  scoring: {
    titel: "Nächster Schritt: Lead-Scoring einrichten",
    text: "Dein Vertrieb behandelt alle Leads gleich — auch wenn manche 10x kaufbereiter sind als andere. Lead-Scoring gibt deinem Team ein Prioritätssignal. Einfaches Setup: Punkte für Seitenbesuche, E-Mail-Öffnungen, Downloads.",
    zeitrahmen: "Operational in: ~3 Wochen"
  },
  crm_erfassung: {
    titel: "Nächster Schritt: Automatische CRM-Erfassung",
    text: "Manuelle Dateneingabe ist fehleranfällig und zeitraubend. Jedes Kontaktformular, jede Buchung sollte automatisch im CRM landen. Das ist das Fundament für alles andere.",
    zeitrahmen: "Operational in: ~1 Woche"
  },
  uebergabe: {
    titel: "Nächster Schritt: Übergabeprozess definieren",
    text: "Ohne klare Übergabekriterien bekommen Sales-Teams entweder zu früh übergebene (unqualifizierte) oder vergessene Leads. Ein einfaches SLA-Dokument und eine CRM-Statusänderung als Trigger löst das.",
    zeitrahmen: "Operational in: ~1–2 Wochen"
  },
  verhalten: {
    titel: "Nächster Schritt: Verhaltensbasiertes Nurturing",
    text: "Statische Sequenzen behandeln alle gleich. Verhaltensbasiertes Nurturing erkennt: Hat jemand die Preisseite besucht? Hat er ein Case Study gelesen? Und sendet entsprechend. Erhöht Conversion in der Regel um 20–40%.",
    zeitrahmen: "Operational in: ~4–6 Wochen"
  }
};

export default function AutomationMaturityCheck() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({
    f1: null,
    f2: null,
    f3: null,
    f4: null,
    f5: null
  });

  const [hasStarted, setHasStarted] = useState<boolean>(false);

  useEffect(() => {
    track("hero_tool_viewed", { page: "marketing-automation" });
  }, []);

  const handleToggle = (qId: 'f1' | 'f2' | 'f3' | 'f4' | 'f5', val: boolean) => {
    if (!hasStarted) {
      setHasStarted(true);
      track("hero_tool_started", { page: "marketing-automation" });
    }
    
    // Set answer
    setAnswers(prev => ({ ...prev, [qId]: val }));
    
    // Tracking answer given event
    track("hero_tool_answer_given", {
      page: "marketing-automation",
      question: qId,
      answer: val
    });
  };

  const completedQuestions = Object.values(answers).filter(val => val !== null).length;
  const allSet = completedQuestions === 5;
  const jaCount = Object.values(answers).filter(val => val === true).length;

  const stufe = React.useMemo(() => {
    if (jaCount <= 1) return 1;
    if (jaCount === 2) return 2;
    if (jaCount === 3) return 3;
    if (jaCount === 4) return 4;
    return 5;
  }, [jaCount]);

  const levelInfo = React.useMemo(() => {
    switch (stufe) {
      case 1:
        return {
          title: "Stufe 1 — Manuell",
          color: "#E63946",
          main: "Fast alles läuft manuell. Das bedeutet: Leads fallen durch die Ritzen. Follow-ups werden vergessen. Und dein Team investiert Zeit in Aufgaben, die ein System übernehmen kann.",
          context: "Teams ohne Automation verlieren durchschnittlich 60–70% ihrer Leads — weil kein Follow-up stattfindet."
        };
      case 2:
        return {
          title: "Stufe 2 — Erste Ansätze",
          color: "#F4A261",
          main: "Du hast begonnen — aber die kritischen Lücken sind noch offen. Zwei Dinge funktionieren bereits. Das ist mehr als die meisten. Aber die grössten Revenue-Verluste entstehen wahrscheinlich durch das, was noch fehlt.",
          context: ""
        };
      case 3:
        return {
          title: "Stufe 3 — Grundstruktur vorhanden",
          color: "#E9C46A",
          main: "Solide Basis — die Grundstruktur steht. Du hast mehr als die meisten B2B-Unternehmen. Die verbleibenden Lücken kosten dich Qualität und Skalierbarkeit — keine einzelnen Leads mehr, sondern systematische Ineffizienz.",
          context: ""
        };
      case 4:
        return {
          title: "Stufe 4 — Fortgeschritten",
          color: "#57CC99",
          main: "Stark aufgestellt — ein wichtiger Hebel fehlt noch. Dein System definiert Prozesse gut. Der letzte offene Punkt ist keine Grundvoraussetzung mehr — sondern ein grosser Qualitäts- und Effizienzgewinn.",
          context: ""
        };
      default:
        return {
          title: "Stufe 5 — Reif",
          color: "#2A9D8F",
          main: "Best-in-Class Automation-Setup. Du hast alles, was ein modernes B2B-Marketing-System braucht. Jetzt geht es um Optimierung und Skalierung — nicht mehr um Grundlagen.",
          context: "Glückwunsch! Deine Automatisierung ist operativ hervorragend abgestimmt."
        };
    }
  }, [stufe]);

  // Prioritized next step
  const naechsterStepKey = React.useMemo(() => {
    if (!allSet) return null;
    
    const prioritaeten = [
      { key: "f2", label: "follow_up" },
      { key: "f3", label: "scoring" },
      { key: "f1", label: "crm_erfassung" },
      { key: "f4", label: "uebergabe" },
      { key: "f5", label: "verhalten" }
    ];

    const found = prioritaeten.find(p => answers[p.key] === false);
    return found ? found.label : null;
  }, [answers, allSet]);

  const chosenNextStep = naechsterStepKey ? (naechsteSchritte as any)[naechsterStepKey] : null;

  useEffect(() => {
    if (allSet) {
      track("hero_tool_output_shown", {
        page: "marketing-automation",
        stufe: stufe,
        ja_count: jaCount,
        naechster_schritt: naechsterStepKey
      });
    }
  }, [stufe, allSet, jaCount, naechsterStepKey]);

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
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-[760px] mx-auto text-left" id="automation-maturity-check">
      
      {/* Header section with brand info */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <Cpu className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Automation-Reifegrad-Check
          </h3>
        </div>
        <button
          onClick={handleReset}
          className="text-[10px] text-slate-400 hover:text-slate-900 flex items-center gap-1 border border-slate-200/50 bg-[#f6f6f6]/60 rounded-lg px-2.5 py-1.5 font-bold uppercase font-mono cursor-pointer transition-colors"
          title="Prüfung zurücksetzen"
        >
          <RefreshCw className="w-3 h-3" /> Reset
        </button>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-8 font-semibold">
        In 60 Sekunden: Wie weit ist euer Marketing-Automation-Setup wirklich? Beantworte alle 5 Fragen mit Ja oder Nein.
      </p>

      {/* Toggle Survey Questions Stack */}
      <div className="space-y-5">
        {QUESTIONS.map((q) => {
          const cAns = answers[q.id];
          return (
            <div 
              key={q.id} 
              className={`p-4 rounded-2xl border transition-all duration-200 ${
                cAns !== null ? 'bg-slate-50 border-slate-200/70' : 'bg-transparent border-slate-100'
              } flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
            >
              <div className="space-y-1">
                <span className="text-[10px] text-[#686DF4] font-bold font-mono uppercase tracking-wider block leading-none">
                  Faktor #{q.priority}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                  {q.text}
                </h4>
                <p className="text-[10px] text-slate-400 leading-snug font-medium font-sans">
                  {q.subtext}
                </p>
              </div>

              {/* Two adjacent styled buttons */}
              <div className="flex shrink-0 gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleToggle(q.id, true)}
                  className={`flex-1 sm:flex-none text-xs font-bold font-mono tracking-wider uppercase px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                    cAns === true
                      ? 'bg-[#686DF4] text-white border-transparent shadow-xs'
                      : 'bg-transparent text-slate-400 border-slate-200/55 hover:border-slate-350 hover:bg-slate-50'
                  }`}
                >
                  Ja
                </button>
                <button
                  type="button"
                  onClick={() => handleToggle(q.id, false)}
                  className={`flex-1 sm:flex-none text-xs font-bold font-mono tracking-wider uppercase px-4 py-2.5 rounded-xl border transition-all cursor-pointer ${
                    cAns === false
                      ? 'bg-slate-850 bg-slate-800 text-white border-transparent shadow-xs'
                      : 'bg-transparent text-slate-400 border-slate-200/55 hover:border-slate-350 hover:bg-slate-50'
                  }`}
                >
                  Nein
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Horizontal Maturity level scale */}
      <div className="mt-10 pt-6 border-t border-slate-100">
        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block mb-4">
          REIFEGRAD-FORTSCHRITT
        </span>
        <div className="flex items-center justify-between gap-2 max-w-sm">
          {[1, 2, 3, 4, 5].map((lvl) => {
            const isCurrent = lvl === stufe;
            const isPassed = lvl < stufe;
            return (
              <div key={lvl} className="flex flex-col items-center gap-1.5 flex-1">
                <div 
                  className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-black text-sm transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#686DF4] text-white ring-4 ring-indigo-100'
                      : isPassed
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white border border-slate-200 text-slate-400'
                  }`}
                >
                  {lvl}
                </div>
                <span className="text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  {isCurrent ? "STAT" : isPassed ? "DONE" : "WAIT"}
                </span>
              </div>
            );
          })}
        </div>
        
        {/* Helper prompt below check */}
        {!allSet && (
          <div className="text-[10px] text-slate-405 text-slate-400 mt-4 leading-none font-semibold">
            *Beantworte noch {5 - completedQuestions} Frage(n) für das vollständige Audit.
          </div>
        )}
      </div>

      {/* Output results on fully filled survey */}
      <AnimatePresence>
        {allSet && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden mt-8 space-y-6"
          >
            {/* Level results card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block leading-none">
                  AUDIT ERGEBNISSE
                </span>
                <span className="w-1.5 h-1.5 bg-[#686DF4] rounded-full shrink-0" />
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  {jaCount} / 5 Ja-Antworten
                </span>
              </div>

              <div>
                <span 
                  className="text-2xl sm:text-3xl font-extrabold font-display leading-none"
                  style={{ color: levelInfo.color }}
                >
                  {levelInfo.title}
                </span>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold text-slate-705 text-slate-600 mt-3">
                  {levelInfo.main}
                </p>
              </div>

              {levelInfo.context && (
                <div className="text-[11px] text-red-650 text-red-600 bg-red-50/50 p-3.5 rounded-xl border border-red-100/10 font-bold">
                  {levelInfo.context}
                </div>
              )}

              {/* Next Step Recommendation block */}
              {chosenNextStep && (
                <div className="bg-blue-50 border border-indigo-100 p-5 sm:p-6 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-indigo-200/25">
                    <h5 className="text-xs font-black text-[#686DF4] font-display uppercase tracking-wider">
                      {chosenNextStep.titel}
                    </h5>
                    <div className="flex items-center gap-1.5 shrink-0 bg-[#686DF4]/10 text-[#686DF4] text-[9px] font-mono font-bold px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {chosenNextStep.zeitrahmen}
                    </div>
                  </div>
                  <p className="text-xs text-slate-650 text-slate-700 leading-relaxed font-semibold">
                    {chosenNextStep.text}
                  </p>
                </div>
              )}

            </div>

            {/* Action cta trigger */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                {stufe === 5 ? "Wie skalierst du dein System auf das nächste Level?" : "Automation-Gespräch buchen — kostenlos, 30 Min"} <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Lead capture form */}
            <LeadCaptureForm
              secondaryCTAText="Automation-Roadmap per E-Mail erhalten →"
              danachText="Wir schicken dir eine priorisierte Automation-Roadmap passend zu deinem Reifegrad und deinem Tool-Setup."
              pageId="marketing-automation"
              additionalFields={[
                {
                  type: 'select',
                  name: 'crmUsed',
                  placeholder: 'Welches CRM verwendet ihr?',
                  options: ['HubSpot', 'Salesforce', 'Pipedrive', 'ActiveCampaign', 'Anderes', 'Keines / Excel']
                }
              ]}
            />

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
