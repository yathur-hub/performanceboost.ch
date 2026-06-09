import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, ArrowRight, Sparkles, RefreshCw, AlertTriangle, CheckSquare } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

const frictionDetails = {
  s1: {
    titel: "Lead-Definition: Marketing und Sales sprechen nicht dieselbe Sprache",
    text: "Wenn Marketing und Sales unterschiedliche Vorstellungen haben, wer ein qualifizierter Lead ist, bekommt der Vertrieb Leads, die er nicht bearbeiten kann — und Marketing wundert sich warum.",
    impact: "→ Wirkung: Sales verschwendet Zeit auf falsche Leads. Marketing fühlt sich nicht wertgeschätzt. Frustration auf beiden Seiten."
  },
  s2: {
    titel: "Marketing-Content landet nicht im Vertrieb",
    text: "Wenn Sales eigene Unterlagen baut, fehlt Konsistenz. Messaging in Gesprächen weicht vom Markenversprechen ab. Und Marketing investiert Zeit in Content, den niemand nutzt.",
    impact: "→ Wirkung: Inkonsistente Kundenkommunikation, verschwendetes Marketing-Budget, doppelte Arbeit."
  },
  s3: {
    titel: "Keine gemeinsamen Revenue-KPIs",
    text: "Marketing misst Leads. Sales misst Deals. Niemand misst Revenue. Das ist das strukturelle Problem hinter fast jeder Marketing-Sales-Spannung. Wer unterschiedliche Ziele hat, kann nicht als Team funktionieren.",
    impact: "→ Wirkung: Budget wird in die falsche Richtung alloziert, weil niemand gemeinsam auf Revenue optimiert."
  },
  s4: {
    titel: "Keine SLAs für Lead-Follow-up",
    text: "Ohne definierten Zeitrahmen für das Follow-up entscheidet Tagesgeschäft, wann ein Lead kontaktiert wird. Aber: Die Kontaktchance sinkt um den Faktor 100 wenn mehr als 30 Minuten vergehen.",
    impact: "→ Wirkung: Qualifizierte Leads verlieren Kaufinteresse, bevor Sales sie je kontaktiert hat."
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
        desc: "Marketing und Sales arbeiten gegeneinander — nicht zusammen. Das ist keine Kommunikations-Frage. Es ist eine Struktur-Frage. Ohne gemeinsame Sprache, gemeinsame Metriken und klare Prozesse kostet jede Woche Deals, die schliessbar wären."
      };
    } else if (score <= 12) {
      return {
        key: "spuerbar",
        label: "Spürbare Reibung",
        color: "#F4A261",
        desc: "Marketing und Sales arbeiten — aber nicht als eingespieltes Team. Es gibt zwar oberflächliche Zusammenarbeit, aber an kritischen Übergabepunkten entstehen spürbare Verluste. Leads werden zu spät bearbeitet, Content nicht ausreichend genutzt, oder Handoffs laufen nicht sauber."
      };
    } else if (score <= 16) {
      return {
        key: "teilweise",
        label: "Teilweise aligned",
        color: "#E9C46A",
        desc: "Gute Grundlage — mit verbesserungswürdigen Stellen. Du bist besser aligned als die meisten B2B-Unternehmen. Die verbleibenden Reibungspunkte verhindern aber noch, dass dein Go-to-Market-System sein volles Potenzial entfaltet."
      };
    } else {
      return {
        key: "gut",
        label: "Gut aligned",
        color: "#2A9D8F",
        desc: "Starkes Alignment zwischen Marketing und Sales. Du hast die strukturellen Voraussetzungen, die die meisten Schweizer B2B-Unternehmen suchen. Jetzt geht es um die kontinuierliche Feinoptimierung und Skalierung des Systems."
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
    window.open('https://calendar.app.google/7oGfyaAEKsdWRTFW8', '_blank', 'noopener,noreferrer');
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
            Marketing-Sales Alignment-Check
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
        Wo geht Lead-Potenzial zwischen Marketing und Sales verloren? Bewege jeden der 4 Schieberegler mindestens einmal.
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
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Jeder versteht es anders</span>
            <span className="text-slate-500 font-medium font-sans">Schriftlich dokumentiert, beide aligned</span>
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
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Sales macht eigene Unterlagen</span>
            <span className="text-slate-500 font-medium font-sans">Marketing-Content aktiv im Einsatz</span>
          </div>
        </div>

        {/* Slider 3 */}
        <div className="space-y-2">
          <div className="flex justify-between items-start gap-4">
            <label className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
              Haben Marketing und Sales gemeinsame Erfolgsmetriken?
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
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Verschiedene Metriken</span>
            <span className="text-slate-500 font-medium font-sans">Gemeinsame Revenue-KPIs, regelmässiges Sync</span>
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
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>Kein SLA — manchmal Tage</span>
            <span className="text-slate-500 font-medium font-sans">SLA definiert, meistens &lt; 1 Stunde</span>
          </div>
        </div>

      </div>

      {/* Audit Output Result card */}
      <div className="mt-10">
        {!allSet ? (
          <div className="bg-[#f6f6f6]/55 border border-dashed border-slate-200 rounded-2xl p-8 text-center shadow-xs">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
              Statusvorbereitung
            </h4>
            <p className="text-xs text-slate-450 leading-relaxed font-semibold text-slate-500 max-w-sm mx-auto">
              Slide alle Regler um deinen Score zu sehen. (Noch {Object.values(touched).filter(t => !t).length} Schieber unbewegt)
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
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block leading-none">
                    AUSWERTUNG MARKETING-SALES-ALIGNMENT
                  </span>
                  <p className="text-2xl font-bold font-display mt-2 leading-none" style={{ color: levelInfo.color }}>
                    {levelInfo.label}
                  </p>
                </div>
                <div 
                  className="px-4 py-1.5 rounded-full text-xs font-black font-mono tracking-wider uppercase text-white shadow-xs w-fit"
                  style={{ backgroundColor: levelInfo.color }}
                >
                  {score} / 20 PUNKTE
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold text-slate-700 border-t border-slate-200/50 pt-4">
                {levelInfo.desc}
              </p>

            </div>

            {/* Friction Blocks */}
            {levelInfo.key !== 'gut' && topFrictionKeys.length > 0 && (
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  Top-2 Reibungspunkte (Priorisiert):
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
                    Euer Go-To-Market-Schnittpunkt ist sauber dokumentiert und eure Teams arbeiten synchronisiert. Hervorragende Arbeit!
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
                {levelInfo.key === 'gut' ? "Wie skalierst du die Pipeline weiter?" : "Sales-Gespräch buchen — kostenlos, 30 Min"} <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Reusable capture form alignment setup */}
            <LeadCaptureForm
              secondaryCTAText="Alignment-Report per E-Mail erhalten →"
              danachText="Wir schicken dir eine personalisierte Einschätzung der 2 grössten Alignment-Hebel für dein Unternehmen."
              pageId="sales-enablement"
              additionalFields={[
                {
                  type: 'select',
                  name: 'teamSize',
                  placeholder: 'Grösse des Sales-Teams',
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
