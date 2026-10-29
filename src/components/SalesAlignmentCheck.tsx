import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, ArrowRight, Sparkles, RefreshCw, AlertTriangle, CheckSquare } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

const frictionDetails = {
  s1: {
    titel: "Marketing und Vertrieb verstehen unter einem guten Lead nicht dasselbe",
    text: "Wenn Marketing und Vertrieb unterschiedliche Vorstellungen davon haben, wer ein qualifizierter Lead ist, erhält der Vertrieb Anfragen, mit denen er wenig anfangen kann. Das Marketing wiederum versteht nicht, warum seine Leads liegen bleiben.",
    impact: "→ Folge: Der Vertrieb verliert Zeit mit unpassenden Anfragen, und auf beiden Seiten wächst der Frust."
  },
  s2: {
    titel: "Marketing-Content landet nicht im Vertrieb",
    text: "Wenn der Vertrieb eigene Unterlagen erstellt, wirkt der Auftritt uneinheitlich. Was im Kundengespräch gesagt wird, passt nicht immer zum Markenversprechen, und das Marketing erstellt Inhalte, die kaum jemand nutzt.",
    impact: "→ Folge: Uneinheitliche Kommunikation gegenüber Kunden und doppelte Arbeit im Team."
  },
  s3: {
    titel: "Keine gemeinsamen Umsatzkennzahlen",
    text: "Das Marketing zählt Leads, der Vertrieb zählt Abschlüsse, aber niemand schaut gemeinsam auf den Umsatz. Das steckt oft hinter Spannungen zwischen den beiden Teams, denn mit unterschiedlichen Zielen arbeitet man schwer zusammen.",
    impact: "→ Folge: Budget fliesst in Massnahmen, die zwar Leads bringen, aber wenig Umsatz."
  },
  s4: {
    titel: "Keine verbindliche Reaktionszeit für neue Anfragen",
    text: "Ohne vereinbarte Reaktionszeit entscheidet das Tagesgeschäft, wann eine Anfrage beantwortet wird. Je länger es dauert, desto eher hat sich der Interessent bereits anderswo gemeldet.",
    impact: "→ Folge: Gute Anfragen verlieren an Interesse, bevor der Vertrieb sich meldet."
  }
};

export default function SalesAlignmentCheck() {
  const [s1, setS1] = useState<number>(3); // Lead-Definition
  const [s2, setS2] = useState<number>(3); // Content Use
  const [s3, setS3] = useState<number>(3); // Shared KPIs
  const [s4, setS4] = useState<number>(3); // SLA Follow up

  // Track touches to confirm all 4 have been moved at least once
  const [touched, setTouched] = useState<Record<string, boolean>>({
    s1: false,
    s2: false,
    s3: false,
    s4: false
  });

  const allSet = Object.values(touched).every(t => t === true);

  useEffect(() => {
    track("hero_tool_viewed", { page: "sales-enablement" });
  }, []);

  const handleSliderChange = (slider: 's1' | 's2' | 's3' | 's4', value: number) => {
    setTouched(prev => ({ ...prev, [slider]: true }));
    if (slider === 's1') setS1(value);
    else if (slider === 's2') setS2(value);
    else if (slider === 's3') setS3(value);
    else if (slider === 's4') setS4(value);

    track("hero_tool_started", { page: "sales-enablement" });
  };

  const score = s1 + s2 + s3 + s4; // 4-20

  const levelInfo = React.useMemo(() => {
    if (score <= 8) {
      return {
        key: "kritisch",
        label: "Kritische Reibung",
        color: "#E63946",
        desc: "Marketing und Vertrieb arbeiten eher nebeneinander als miteinander. Das liegt selten an der Kommunikation, sondern meist an der Struktur. Ohne gemeinsame Begriffe, gemeinsame Kennzahlen und klare Abläufe gehen Abschlüsse verloren, die möglich wären."
      };
    } else if (score <= 12) {
      return {
        key: "spuerbar",
        label: "Spürbare Reibung",
        color: "#F4A261",
        desc: "Marketing und Vertrieb arbeiten zusammen, aber noch nicht als eingespieltes Team. An den Übergaben geht etwas verloren: Anfragen werden zu spät bearbeitet, Unterlagen zu wenig genutzt oder die Übergabe vom Marketing an den Vertrieb ist nicht klar geregelt."
      };
    } else if (score <= 16) {
      return {
        key: "teilweise",
        label: "Teilweise abgestimmt",
        color: "#E9C46A",
        desc: "Eine gute Grundlage mit einzelnen Schwachstellen. Die verbleibenden Reibungspunkte bremsen aber noch, wie gut Marketing und Vertrieb gemeinsam neue Kunden gewinnen."
      };
    } else {
      return {
        key: "gut",
        label: "Gut abgestimmt",
        color: "#2A9D8F",
        desc: "Marketing und Vertrieb sind gut aufeinander abgestimmt. Die Grundlagen stehen. Jetzt geht es um laufende Verbesserungen und darum, das Vorgehen auf mehr Anfragen auszubauen."
      };
    }
  }, [score]);

  // Top 2 friction point keys
  const topFrictionKeys = React.useMemo(() => {
    if (!allSet) return [];
    
    // Sort logic s3 > s4 > s1 > s2
    const items = [
      { key: 's3', value: s3, prio: 1 },
      { key: 's4', value: s4, prio: 2 },
      { key: 's1', value: s1, prio: 3 },
      { key: 's2', value: s2, prio: 4 }
    ];

    // lowest value is worse friction, lower prio number breaks tie
    items.sort((a, b) => {
      if (a.value !== b.value) {
        return a.value - b.value;
      }
      return a.prio - b.prio;
    });

    return items.slice(0, 2).map(it => it.key);
  }, [s1, s2, s3, s4, allSet]);

  // Output triggers tracking
  useEffect(() => {
    if (allSet) {
      track("hero_tool_output_shown", {
        page: "sales-enablement",
        score: score,
        level: levelInfo.key,
        top2_reibung: topFrictionKeys.join(",")
      });
    }
  }, [score, allSet, levelInfo.key, topFrictionKeys]);

  const handleBooking = () => {
    track("hero_tool_cta_click", { page: "sales-enablement", variant: "booking" });
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  const handleReset = () => {
    setS1(3);
    setS2(3);
    setS3(3);
    setS4(3);
    setTouched({
      s1: false,
      s2: false,
      s3: false,
      s4: false
    });
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-[760px] mx-auto text-left" id="sales-alignment-check">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <ShieldAlert className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Check: Marketing und Vertrieb
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
        Wo gehen Anfragen zwischen Marketing und Vertrieb verloren? Bewegen Sie jeden der 4 Schieberegler mindestens einmal.
      </p>

      {/* Sliders Area */}
      <div className="space-y-6">
        
        {/* Slider 1 */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
              Wie klar ist die gemeinsame Definition eines qualifizierten Leads?
            </label>
            <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 ${
              touched.s1 ? 'bg-[#686DF4]/5 text-[#686DF4] border border-[#686DF4]/10' : 'bg-slate-100 text-slate-400'
            }`}>
              {s1}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s1}
            onChange={e => handleSliderChange('s1', Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Jeder versteht es anders</span>
            <span className="text-slate-500 font-medium font-sans">Schriftlich festgehalten, beide einig</span>
          </div>
        </div>

        {/* Slider 2 */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
              Wie viel des Marketing-Contents wird vom Vertrieb tatsächlich genutzt?
            </label>
            <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 ${
              touched.s2 ? 'bg-[#686DF4]/5 text-[#686DF4] border border-[#686DF4]/10' : 'bg-slate-100 text-slate-400'
            }`}>
              {s2}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s2}
            onChange={e => handleSliderChange('s2', Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Vertrieb macht eigene Unterlagen</span>
            <span className="text-slate-500 font-medium font-sans">Marketing-Content aktiv im Einsatz</span>
          </div>
        </div>

        {/* Slider 3 */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
              Haben Marketing und Vertrieb gemeinsame Erfolgskennzahlen?
            </label>
            <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 ${
              touched.s3 ? 'bg-[#686DF4]/5 text-[#686DF4] border border-[#686DF4]/10' : 'bg-slate-100 text-slate-400'
            }`}>
              {s3}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s3}
            onChange={e => handleSliderChange('s3', Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Verschiedene Kennzahlen</span>
            <span className="text-slate-500 font-medium font-sans">Gemeinsame Umsatzkennzahlen, regelmässiger Austausch</span>
          </div>
        </div>

        {/* Slider 4 */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
              Wie schnell werden übergebene Leads vom Vertrieb kontaktiert?
            </label>
            <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-lg shrink-0 ${
              touched.s4 ? 'bg-[#686DF4]/5 text-[#686DF4] border border-[#686DF4]/10' : 'bg-slate-150 bg-slate-100 text-slate-400'
            }`}>
              {s4}/5
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={s4}
            onChange={e => handleSliderChange('s4', Number(e.target.value))}
            className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#686DF4]"
          />
          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>Keine Vorgabe, manchmal Tage</span>
            <span className="text-slate-500 font-medium font-sans">Reaktionszeit vereinbart, meist &lt; 1 Stunde</span>
          </div>
        </div>

      </div>

      {/* Audit Output Result card */}
      <div className="mt-10">
        {!allSet ? (
          <div className="bg-[#f6f6f6]/55 border border-dashed border-slate-200 rounded-2xl p-8 text-center shadow-xs">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Auswertung folgt
            </h4>
            <p className="text-xs text-slate-450 leading-relaxed font-semibold text-slate-500 max-w-sm mx-auto">
              Bewegen Sie alle Regler, um Ihre Auswertung zu sehen. (Noch {Object.values(touched).filter(t => !t).length} Regler offen)
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {/* Visual alignment level card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
              
              {/* Traffic light bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-200">
                <div 
                  className="h-full transition-all duration-300"
                  style={{
                    width: `${(score / 20) * 100}%`,
                    backgroundColor: levelInfo.color
                  }}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block leading-none">
                    Auswertung Marketing und Vertrieb
                  </span>
                  <p className="text-2xl font-bold font-display mt-2 leading-none" style={{ color: levelInfo.color }}>
                    {levelInfo.label}
                  </p>
                </div>
                <div 
                  className="px-4 py-1.5 rounded-full text-xs font-black font-mono tracking-wider uppercase text-white shadow-xs w-fit"
                  style={{ backgroundColor: levelInfo.color }}
                >
                  {score} / 20 Punkte
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold text-slate-700 border-t border-slate-200/50 pt-4">
                {levelInfo.desc}
              </p>

            </div>

            {/* Friction Blocks */}
            {levelInfo.key !== 'gut' && topFrictionKeys.length > 0 && (
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  Die 2 wichtigsten Reibungspunkte:
                </span>

                {topFrictionKeys.map((key, index) => {
                  const friction = (frictionDetails as any)[key];
                  if (!friction) return null;
                  return (
                    <div key={key} className="bg-white border border-slate-200 rounded-xl p-5 relative shadow-xs flex gap-5 items-start">
                      {/* Counter circle left top corner */}
                      <div className="w-7 h-7 rounded-lg bg-red-50 text-[#E63946] border border-red-100 flex items-center justify-center shrink-0 font-display font-medium text-xs mt-0.5 shadow-2xs">
                        {index + 1}
                      </div>

                      <div className="space-y-2 text-left">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                          {friction.titel}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                          {friction.text}
                        </p>
                        <p className="text-[11px] text-[#E63946] italic font-semibold leading-relaxed pt-1 font-sans">
                          {friction.impact}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Glückwunsch State when good aligned */}
            {levelInfo.key === 'gut' && (
              <div className="bg-emerald-50/40 p-5 sm:p-6 border border-emerald-100 rounded-xl space-y-2 flex gap-4 items-start text-left shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-display font-extrabold text-sm shrink-0">
                  ✓
                </div>
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-emerald-800 font-display">
                    Keine kritischen Reibungspunkte gefunden
                  </h5>
                  <p className="text-[11px] text-emerald-700 font-semibold leading-relaxed">
                    Die Übergabe zwischen Marketing und Vertrieb ist klar geregelt, und Ihre Teams arbeiten abgestimmt.
                  </p>
                </div>
              </div>
            )}

            {/* CTA panel buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                {levelInfo.key === 'gut' ? "Nächste Schritte besprechen" : "Ergebnis besprechen: kostenlos, 30 Min."} <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Reusable capture form alignment setup */}
            <LeadCaptureForm
              secondaryCTAText="Auswertung per E-Mail erhalten →"
              danachText="Wir senden Ihnen eine persönliche Einschätzung, wo Marketing und Vertrieb in Ihrem Unternehmen am meisten gewinnen können."
              pageId="sales-enablement"
              additionalFields={[
                {
                  type: 'select',
                  name: 'teamSize',
                  placeholder: 'Grösse des Vertriebsteams',
                  options: ['1 Person', '2–5 Personen', '6–15 Personen', 'Mehr als 15 Personen']
                }
              ]}
            />

          </motion.div>
        )}
      </div>

    </div>
  );
}
