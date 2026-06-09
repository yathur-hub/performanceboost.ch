import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, HelpCircle, Flame } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

export default function GrowthStrategyIndicator() {
  const [s1, setS1] = useState<number>(3); // ICP Clarity
  const [s2, setS2] = useState<number>(3); // Pipeline Match
  const [s3, setS3] = useState<number>(3); // Math-Sales Coord
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    track("hero_tool_viewed", { page: "growth-strategy" });
  }, []);

  const handleSliderChange = (slider: number, val: number) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track("hero_tool_started", { page: "growth-strategy" });
    }
    if (slider === 1) setS1(val);
    else if (slider === 2) setS2(val);
    else if (slider === 3) setS3(val);
  };

  const score = s1 + s2 + s3;

  const getLevel = (scoreValue: number) => {
    if (scoreValue <= 6) return { key: "reaktiv", label: "Reaktiv", color: "#E63946" };
    if (scoreValue <= 10) return { key: "teilstrukturiert", label: "Teilstrukturiert", color: "#F4A261" };
    if (scoreValue <= 13) return { key: "strukturiert", label: "Strukturiert", color: "#2A9D8F" };
    return { key: "strategisch", label: "Strategisch", color: "#264653" };
  };

  const level = getLevel(score);

  const getWeakestArea = (v1: number, v2: number, v3: number) => {
    const minVal = Math.min(v1, v2, v3);
    if (v1 === minVal) return "icp";
    if (v2 === minVal) return "pipeline";
    return "alignment";
  };

  const weakest = getWeakestArea(s1, s2, s3);

  // Trigger output shown tracking when first interacted
  useEffect(() => {
    if (hasInteracted) {
      track("hero_tool_output_shown", {
        page: "growth-strategy",
        score: score,
        level: level.key
      });
    }
  }, [s1, s2, s3, hasInteracted]);

  // Content Mapping
  const getOutputTexts = () => {
    if (level.key === "reaktiv") {
      let hebel = "";
      if (weakest === "icp") {
        hebel = "→ ICP definieren: Erst wenn klar ist, wer dein idealer Kunde ist, kann jede Massnahme auf ihn ausgerichtet werden. Das ist der erste Schritt.";
      } else if (weakest === "pipeline") {
        hebel = "→ Pipeline-Quellen identifizieren: Woher kommen Leads heute wirklich? Erst wenn das klar ist, kann Wachstum gesteuert werden.";
      } else {
        hebel = "→ Marketing und Sales auf ein Ziel ausrichten: Getrennte Ziele bedeuten verlorene Revenue. Ein gemeinsames ICP, ein gemeinsames Reporting.";
      }
      return {
        main: "Dein Wachstum hängt von Zufall ab. Kein ICP, keine Vorhersehbarkeit, keine koordinierten Teams — das sind die drei Voraussetzungen für planbares Wachstum. Ohne sie ist jede Massnahme ein Experiment ohne System.",
        hebelTitle: "Deine grössten Wachstumshebel:",
        hebelText: hebel
      };
    } else if (level.key === "teilstrukturiert") {
      let hebel = "";
      if (weakest === "icp") {
        hebel = "→ ICP präzisieren: Du hast eine Vorstellung deiner Zielgruppe — aber noch keine messerscharfe Definition. Präzisiertes ICP verbessert Kampagnen-Performance sofort und verkürzt Sales-Zyklen.";
      } else if (weakest === "pipeline") {
        hebel = "→ Pipeline-Vorhersage aufbauen: Wachstum ohne Vorhersehbarkeit ist nicht steuerbar. Welche Kanäle liefern verlässlich? Ein einfaches Tracking-Setup beantwortet das.";
      } else {
        hebel = "→ Alignment strukturieren: Marketing und Sales haben unterschiedliche Ziele — das erklärt den Reibungsverlust. Ein gemeinsames Meeting-Format und ein SLA-Dokument lösen das häufig.";
      }
      return {
        main: "Du hast Ansätze, die funktionieren — aber kein System dahinter. Wachstum hängt noch zu stark von einzelnen Aktionen ab. Wenn eine Kampagne gut läuft, wächst du. Wenn nicht, stagnierst du. Das ist kein Fehler — aber auch nicht skalierbar.",
        hebelTitle: "Wo du als nächstes ansetzen solltest:",
        hebelText: hebel
      };
    } else if (level.key === "strukturiert") {
      let hebel = "";
      if (weakest === "icp") {
        hebel = "→ ICP verfeinern: Dein ICP ist gut — aber gibt es ein Tier-1-Segment, das signifikant besser konvertiert? Dieser Fokus ist der Unterschied zwischen Wachstum und exponentiellem Wachstum.";
      } else if (weakest === "pipeline") {
        hebel = "→ Attribution schärfen: Du weisst grob, woher Leads kommen. Aber welcher Kanal bringt die qualifiziertesten Leads? Das ist die Zahl, die Budget-Entscheidungen steuert.";
      } else {
        hebel = "→ Gemeinsame Revenue-Metriken: Marketing und Sales funktionieren — aber messen sie dasselbe? Pipeline-Velocity und gemeinsames Revenue-Forecasting als nächster Schritt.";
      }
      return {
        main: "Gute Basis. Du hast Strukturen, die funktionieren. Was jetzt fehlt: koordinierte Priorisierung. Welche 20% der Massnahmen bringen 80% des Wachstums? Das ist die nächste Frage — und oft die schwierigste.",
        hebelTitle: "Nächste Wachstumsstufe:",
        hebelText: hebel
      };
    } else {
      // strategisch
      return {
        main: "Starke Grundlage. Du hast das, was die meisten Unternehmen suchen. Jetzt geht es um Skalierung: Wie wächst du auf das nächste Level, ohne die Qualität zu verlieren? Welche Kanäle oder Segmente sind noch ungenutzt?",
        hebelTitle: "Nächster Wachstumsschritt:",
        hebelText: "→ Neue Marktsegmente: Dein Kern-ICP ist erschlossen. Zeit für einen zweiten ICP oder eine geografische Expansion.\n→ Skalierungsmodell: Wie wächst du bei gleichbleibendem oder sinkendem CAC? Das ist die strategische Frage."
      };
    }
  };

  const texts = getOutputTexts();

  const handleBooking = () => {
    window.open('https://calendar.app.google/7oGfyaAEKsdWRTFW8', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-[760px] mx-auto text-left" id="growth-strategy-indicator">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <TrendingUp className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Wachstumspotenzial-Indikator
          </h3>
        </div>
        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/40">
          30-SEC DIAGNOSE
        </span>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mt-4 mb-8 font-semibold">
        Wie planbar ist dein Wachstum heute? Drei Fragen. Schiebe die Regler unten entsprechend deiner aktuellen Einschätzung.
      </p>

      {/* Sliders Section */}
      <div className="space-y-8">
        
        {/* Slider 1 */}
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-805 font-bold text-slate-800 leading-snug">
              Wie klar ist euer Ideal Customer Profile definiert?
            </label>
            <span className="font-extrabold text-[#686DF4] font-mono text-sm bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md border border-[#686DF4]/10 shrink-0">
              {s1}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s1}
            onChange={(e) => handleSliderChange(1, Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[10px] text-slate-450 text-slate-400 font-mono leading-tight">
            <span className="max-w-[40%] text-left">Vage Vorstellung</span>
            <span className="max-w-[40%] text-right text-slate-500 font-medium">Dokumentiert & mit Sales aligned</span>
          </div>
        </div>

        {/* Slider 2 */}
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-805 font-bold text-slate-800 leading-snug">
              Wie gut könnt ihr vorhersagen, woher nächsten Monat Leads kommen?
            </label>
            <span className="font-extrabold text-[#686DF4] font-mono text-sm bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md border border-[#686DF4]/10 shrink-0">
              {s2}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s2}
            onChange={(e) => handleSliderChange(2, Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[10px] text-slate-450 text-slate-400 font-mono leading-tight">
            <span className="max-w-[40%] text-left">Keine Ahnung</span>
            <span className="max-w-[40%] text-right text-slate-500 font-medium">Verlässliche Prognose</span>
          </div>
        </div>

        {/* Slider 3 */}
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-805 font-bold text-slate-800 leading-snug">
              Wie koordiniert arbeiten Marketing und Sales auf gemeinsame Ziele?
            </label>
            <span className="font-extrabold text-[#686DF4] font-mono text-sm bg-[#686DF4]/5 px-2.5 py-0.5 rounded-md border border-[#686DF4]/10 shrink-0">
              {s3}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s3}
            onChange={(e) => handleSliderChange(3, Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[10px] text-slate-450 text-slate-400 font-mono leading-tight">
            <span className="max-w-[40%] text-left">Silos, kaum Austausch</span>
            <span className="max-w-[40%] text-right text-slate-500 font-medium">Gemeinsame KPIs, wöchentlicher Sync</span>
          </div>
        </div>

      </div>

      {/* Reactive Output Section */}
      <div className="mt-10">
        {!hasInteracted ? (
          <div className="bg-[#f6f6f6]/55 border border-dashed border-slate-200 rounded-2xl p-8 text-center">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider font-mono">
              Schiebe die Regler, um deinen Score zu sehen
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {/* Score Display Card */}
            <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
              {/* Level Progress Indicator - Full Width */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-200">
                <div 
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${(score / 15) * 100}%`,
                    backgroundColor: level.color
                  }}
                />
              </div>

              {/* Header with Score and Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">DEIN POSITIONSMUSTER</span>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span 
                      className="text-3xl font-bold font-display"
                      style={{ color: level.color }}
                    >
                      {level.label}
                    </span>
                    <span className="text-sm text-slate-405 text-slate-400 font-mono font-bold">
                      ({score} / 15 Punkte)
                    </span>
                  </div>
                </div>
                <div 
                  className="px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase text-white shadow-xs w-fit"
                  style={{ backgroundColor: level.color }}
                >
                  Stufe {score <= 6 ? 1 : score <= 10 ? 2 : score <= 13 ? 3 : 4}
                </div>
              </div>

              {/* Main Analysis Text */}
              <div className="border-t border-slate-200/50 pt-4">
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold text-slate-700 whitespace-pre-line">
                  {texts.main}
                </p>
              </div>

              {/* Recommendation Hebel block */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/60 shadow-xs space-y-2">
                <h4 className="text-xs font-bold text-slate-900 font-display">
                  {texts.hebelTitle}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold whitespace-pre-line">
                  {texts.hebelText}
                </p>
              </div>

            </div>

            {/* Call to action section */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                Strategiegespräch buchen — kostenlos, 30 Min <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Accordion form logic */}
            <LeadCaptureForm
              secondaryCTAText="Vollständige Analyse per E-Mail erhalten →"
              danachText={`Danke — du erhältst die Analyse in den nächsten Minuten.\nOder buche direkt ein Gespräch: https://calendar.app.google/7oGfyaAEKsdWRTFW8`}
              pageId="growth-strategy"
            />

          </motion.div>
        )}
      </div>

    </div>
  );
}
