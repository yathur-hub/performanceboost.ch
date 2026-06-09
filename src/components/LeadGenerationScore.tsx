import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, ArrowRight, Sparkles, Check, ChevronDown, ChevronUp, AlertCircle, TrendingDown } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

const BENCHMARK_MEDIAN = 0.015;  // 1.5% B2B-Median
const BENCHMARK_TOP    = 0.035;  // 3.5% Top-Performer

const diagnoseDetails = {
  null_leads: {
    titel: "Keine Lead-Erfassung aktiv",
    text: "Es gibt keinen messbaren Conversion-Pfad auf deiner Website. Besucher haben keine Möglichkeit, ihr Interesse zu signalisieren — ausser dich direkt zu kontaktieren. Das ist die höchste Hürde, die du setzen kannst."
  },
  keine_magnete: {
    titel: "Kein Lead-Magnet vorhanden",
    text: "Ein einzelnes Kontaktformular konvertiert nur die Besucher, die bereits kaufbereit sind — das sind 2–5% deines Traffics. Ein Lead-Magnet (Guide, Tool, Analyse) spricht auch Besucher in früheren Kaufphasen an."
  },
  wenig_magnete: {
    titel: "Zu wenige Conversion-Pfade",
    text: "Du hast 1–2 Angebote — aber Besucher sind in unterschiedlichen Kaufphasen. Jemand, der zum ersten Mal auf deine Website kommt, möchte nicht sofort buchen. Ein gestuftes System (Awareness → Interest → Decision) erhöht die Gesamtkonversion."
  },
  cr_unter_benchmark: {
    titel: "Conversion Rate unter B2B-Benchmark (1.5%)",
    text: "Der B2B-Median liegt bei ~1.5%. Das bedeutet: Bei gleichem Traffic generieren bessere Websites mehr als doppelt so viele Leads. Die Ursachen sind meistens: unklare CTAs, fehlende Lead-Magnete, oder Landing Pages ohne klaren nächsten Schritt."
  }
};

export default function LeadGenerationScore() {
  const [trafficMid, setTrafficMid] = useState<number | ''>('');
  const [leads, setLeads] = useState<number | ''>('');
  const [leadMagnete, setLeadMagnete] = useState<number | ''>('');

  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [diagnoseOpen, setDiagnoseOpen] = useState<boolean>(false);

  useEffect(() => {
    track("hero_tool_viewed", { page: "lead-generation" });
  }, []);

  const handleFieldSet = (field: string, value: any) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track("hero_tool_started", { page: "lead-generation" });
    }
    if (field === 'traffic') setTrafficMid(value === '' ? '' : Number(value));
    else if (field === 'leads') setLeads(value === '' ? '' : Math.max(0, Number(value)));
    else if (field === 'leadMagnete') setLeadMagnete(value === '' ? '' : Number(value));
  };

  const isTrafficSelected = trafficMid !== '';
  const isLeadsSet = leads !== '';
  const isMagneteSelected = leadMagnete !== '';

  const hasValidationError = isTrafficSelected && isLeadsSet && Number(leads) > Number(trafficMid);

  const calculatedOutput = React.useMemo(() => {
    if (!isTrafficSelected || !isLeadsSet || !isMagneteSelected || hasValidationError) {
      return null;
    }

    const tMid = Number(trafficMid);
    const currLeads = Number(leads);
    const magnets = Number(leadMagnete);

    const cr = currLeads / tMid;

    // Grade logic
    let note: "A" | "B" | "C" | "D" | "F";
    let color: string;
    let title: string;
    let benefitText: string;

    if (cr >= 0.03 && magnets >= 3) {
      note = "A";
      color = "#2A9D8F"; // Grün
      title = "Starke Performance — du bist im oberen Quartil.";
      benefitText = "Deine Conversion Rate liegt über dem B2B-Benchmark. Jetzt geht es um Qualität: Sind die Leads auch wirklich qualifiziert? Und welche Inhalte bringen die besten?";
    } else if (cr >= 0.02 || (cr >= 0.015 && magnets >= 3)) {
      note = "B";
      color = "#57CC99"; // Hellgrün
      title = "Überdurchschnittlich — mit Luft nach oben.";
      benefitText = "Du performst besser als der B2B-Median. Top-Performer erreichen 3–5% — da ist noch weiteres Potenzial verborgen.";
    } else if (cr >= 0.01) {
      note = "C";
      color = "#F4A261"; // Orange
      title = "Durchschnittlich — aber du verlierst wertvolle Leads.";
      benefitText = "Du bist im soliden Mittelfeld — aber B2B-Mittelfeld bedeutet eben auch, dass du jeden Monat potenzielle Abschlüsse vergisst.";
    } else if (cr >= 0.005) {
      note = "D";
      color = "#E9C46A"; // Gelb-Orange
      title = "Unter B2B-Benchmark — erhebliches Potenzial ungenutzt.";
      benefitText = "Fast jeder Besucher verlässt deine Website, ohne einen nächsten konkreten Schritt zu machen. Das ist fast nie ein Traffic-Problem — sondern ein Erfassungsproblem.";
    } else {
      note = "F";
      color = "#E63946"; // Rot
      title = "Kritisch — deine Website konvertiert kaum Leads.";
      benefitText = "Deine Website hat Traffic — aber kein System, diesen Traffic in Leads zu verwandeln. Das ist das Problem, das zuerst gelöst werden muss.";
    }

    // Lost leads at benchmarks
    const verloreneLeads_median = Math.max(0, Math.round(tMid * BENCHMARK_MEDIAN - currLeads));
    const verloreneLeads_top    = Math.max(0, Math.round(tMid * BENCHMARK_TOP - currLeads));

    // Determine diagnose causes
    const diagnoses: string[] = [];
    if (magnets === 0) diagnoses.push("null_leads"); // Wait, spec says: if magnets === 0, add. Wait, if magnets === 0 is "keine_magnete" or "null_leads"? The spec rules say:
    // "if (leadMagnete === 0) diagnose.push("keine_magnete"); else if (leadMagnete === 1) diagnose.push("wenig_magnete");
    // if (cr < BENCHMARK_MEDIAN) diagnose.push("cr_unter_benchmark");
    // if (cr === 0) diagnose.push("null_leads");"
    if (magnets === 0) diagnoses.push("keine_magnete");
    else if (magnets === 1) diagnoses.push("wenig_magnete");
    if (cr < BENCHMARK_MEDIAN) diagnoses.push("cr_unter_benchmark");
    if (cr === 0) diagnoses.push("null_leads");

    return {
      cr,
      note,
      color,
      title,
      benefitText,
      verloreneLeads_median,
      verloreneLeads_top,
      diagnoses,
    };
  }, [trafficMid, leads, leadMagnete, hasValidationError, isTrafficSelected, isLeadsSet, isMagneteSelected]);

  // Trigger metrics tracking
  useEffect(() => {
    if (calculatedOutput) {
      track("hero_tool_output_shown", {
        page: "lead-generation",
        note: calculatedOutput.note,
        cr_percent: Math.round(calculatedOutput.cr * 1000) / 10,
        verlorene_leads: calculatedOutput.verloreneLeads_median
      });
    }
  }, [calculatedOutput]);

  const toggleDiagnose = () => {
    const nextState = !diagnoseOpen;
    setDiagnoseOpen(nextState);
    if (nextState && calculatedOutput) {
      track("hero_tool_diagnose_expanded", {
        page: "lead-generation",
        note: calculatedOutput.note
      });
    }
  };

  const handleBooking = () => {
    window.open('https://calendar.app.google/7oGfyaAEKsdWRTFW8', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-[760px] mx-auto text-left" id="lead-generation-score">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <Users className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Content-to-Lead-Score
          </h3>
        </div>
        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/40">
          CONVERSION AUDIT
        </span>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed mt-2 mb-8 font-semibold">
        Wie effektiv verwandelt eure Website Besucher in qualifizierte Leads? Beantworte diese 3 kurzen Fragen.
      </p>

      {/* Input controls layout */}
      <div className="space-y-6">
        
        {/* Input F1 */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold text-slate-800 leading-snug flex items-center gap-2">
              <span>Wie viele Besucher hat eure Website pro Monat?</span>
              {isTrafficSelected && (
                <span className="text-emerald-500 text-xs flex items-center font-bold" title="Ausgefüllt">
                  <Check className="w-3.5 h-3.5" />
                </span>
              )}
            </label>
          </div>
          <select
            value={trafficMid}
            onChange={e => handleFieldSet('traffic', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
          >
            <option value="">Bitte wählen...</option>
            <option value="250">Unter 500 Besucher / Mt.</option>
            <option value="1250">500 – 2&apos;000 Besucher / Mt.</option>
            <option value="6000">2&apos;000 – 10&apos;000 Besucher / Mt.</option>
            <option value="15000">Über 10&apos;000 Besucher / Mt.</option>
          </select>
        </div>

        {/* Input F2 */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-800 leading-snug flex items-center gap-2">
            <span>Wie viele Leads erfasst ihr monatlich über die Website?</span>
            {isLeadsSet && !hasValidationError && (
              <span className="text-emerald-500 text-xs flex items-center font-bold">
                <Check className="w-3.5 h-3.5" />
              </span>
            )}
          </label>
          <input
            type="number"
            min="0"
            max="10000"
            placeholder="0 wenn keine"
            value={leads}
            onChange={e => handleFieldSet('leads', e.target.value)}
            className={`w-full px-4 py-3 bg-white border rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs ${
              hasValidationError ? 'border-red-300 focus:border-red-500' : 'border-slate-200'
            }`}
          />
          <p className="text-[10px] text-slate-400 leading-snug font-medium">
            Kontaktformulare, Downloads, Demobuchungen, Newsletter-Anmeldungen — was auch immer ihr als Lead zählt.
          </p>

          {/* Inline Validation Alert */}
          {hasValidationError && (
            <div className="bg-red-50 text-[#E63946] p-3 rounded-lg flex items-center gap-2 text-[10px] font-bold border border-red-100/30">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>Leads können nicht mehr als Besucher sein</span>
            </div>
          )}
        </div>

        {/* Input F3 */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-800 leading-snug flex items-center gap-2">
            <span>Wie viele Conversion-Angebote hat eure Website?</span>
            {isMagneteSelected && (
              <span className="text-emerald-500 text-xs flex items-center font-bold">
                <Check className="w-3.5 h-3.5" />
              </span>
            )}
          </label>
          <select
            value={leadMagnete}
            onChange={e => handleFieldSet('leadMagnete', e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
          >
            <option value="">Bitte wählen...</option>
            <option value="0">Keines (nur standard Kontaktformular)</option>
            <option value="1">1–2 (z. B. Kontakt + Case Study/PDF-Download)</option>
            <option value="3">3–5 Conversion-Pfade</option>
            <option value="5">Mehr als 5 Conversion-Pfade im Funnel</option>
          </select>
          <p className="text-[10px] text-slate-400 leading-snug font-medium">
            Z. B. Kontaktformular, PDF-Inhalte, Tools, Newsletter, Demo-Buchung, Gratis-Analyse...
          </p>
        </div>

      </div>

      {/* Output Representation wrapper */}
      <div className="mt-10">
        {!calculatedOutput ? (
          <div className="bg-[#f6f6f6]/55 border border-dashed border-slate-200 rounded-2xl p-8 text-center">
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider font-mono">
              Fülle alle Felder aus um deinen Score zu berechnen
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-8"
          >
            {/* Visual Grade output card */}
            <div className="bg-slate-50 border border-slate-200/85 rounded-2xl p-6 sm:p-8 space-y-6 text-center sm:text-left relative overflow-hidden">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pb-6 border-b border-slate-250 border-slate-200">
                
                {/* Centre Badge Note Grade A-F */}
                <div 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-slate-100 flex items-center justify-center shrink-0 shadow-sm"
                  style={{ backgroundColor: `${calculatedOutput.color}15`, borderColor: `${calculatedOutput.color}40` }}
                >
                  <span 
                    className="text-5xl sm:text-6xl font-black font-display font-sans tracking-tight"
                    style={{ color: calculatedOutput.color }}
                  >
                    {calculatedOutput.note}
                  </span>
                </div>

                {/* Score Meta text info */}
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-[10px] font-mono text-slate-450 text-slate-400 font-bold uppercase tracking-widest block">
                    ERMITTELTES LEADERGEBNIS
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug font-display">
                    {calculatedOutput.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold font-mono">
                    Deine Conversion Rate: <span className="text-slate-800 font-extrabold">{(calculatedOutput.cr * 100).toFixed(2)}%</span>
                  </p>
                </div>
              </div>

              {/* Proportional Benchmark Double/Triple Horizontal bars */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block mb-2">
                  B2B BENCHMARK-VERGLEICH
                </span>

                <div className="space-y-3">
                  {/* Your CR bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-650">
                      <span>Deine Konversionsrate</span>
                      <span className="font-bold font-mono">{(calculatedOutput.cr * 100).toFixed(2)}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-lg overflow-hidden relative">
                      <div 
                        className="h-full rounded-lg transition-all duration-350"
                        style={{
                          width: `${Math.min(100, (calculatedOutput.cr / BENCHMARK_TOP) * 100)}%`,
                          backgroundColor: calculatedOutput.color
                        }}
                      />
                    </div>
                  </div>

                  {/* Median B2B CR Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-450 font-bold">
                      <span className="text-slate-400 font-mono">B2B-Median</span>
                      <span className="font-mono text-slate-500">1.50%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-lg overflow-hidden">
                      <div 
                        className="h-full rounded-lg bg-slate-400"
                        style={{ width: `${(BENCHMARK_MEDIAN / BENCHMARK_TOP) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Top-Performer B2B CR Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-450 font-bold">
                      <span className="text-slate-400 font-mono">Top-Performer (Best-in-Class)</span>
                      <span className="font-mono text-slate-550 text-slate-600">3.50%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-lg overflow-hidden">
                      <div 
                        className="h-full rounded-lg bg-emerald-500"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Benchmark interpretation description */}
              <div className="border-t border-slate-200 pt-4 leading-relaxed text-xs sm:text-sm text-slate-650 font-semibold">
                {calculatedOutput.benefitText}
              </div>

              {/* Core loss metric representation - Emotional Kernzahl */}
              {calculatedOutput.verloreneLeads_median > 0 && (
                <div className="bg-red-50 p-5 rounded-xl border border-red-100/30 text-left space-y-1">
                  <p className="text-[9px] text-[#E63946] font-bold uppercase tracking-widest font-mono">
                    UNGENUTZTES POTENZIAL IM VERGLEICH ZUM MEDIAN
                  </p>
                  <div className="text-2xl sm:text-3xl font-black font-display text-[#E63946]">
                    {formatNumber(calculatedOutput.verloreneLeads_median)} Leads / Monat verloren
                  </div>
                  <p className="text-[10px] text-slate-550 text-slate-500 leading-normal font-semibold">
                    Diese Kontakte besuchen zwar die Webseite, verlassen sie jedoch, ohne ein Zeichen zu hinterlassen, weil die passenden Handlungsaufrufe fehlen.
                  </p>
                </div>
              )}

              {/* Diagnose Accordion structure logic */}
              {calculatedOutput.diagnoses.length > 0 && (
                <div className="border-t border-slate-250 pt-1 pt-4 border-slate-200">
                  <button
                    onClick={toggleDiagnose}
                    className="w-full flex justify-between items-center py-2 bg-transparent border-none cursor-pointer outline-none font-bold text-xs hover:text-[#686DF4] transition-colors"
                  >
                    <span className="font-display font-semibold tracking-tight text-slate-800">Warum habe ich diesen Score? Diagnose anzeigen</span>
                    <span>
                      {diagnoseOpen ? <ChevronUp className="w-4 h-4 text-[#686DF4]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {diagnoseOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden text-left space-y-3 mt-3"
                      >
                        {calculatedOutput.diagnoses.map((key) => {
                          const cause = (diagnoseDetails as any)[key];
                          if (!cause) return null;
                          return (
                            <div key={key} className="p-4 bg-white rounded-xl border border-slate-200/60 shadow-xs space-y-1 animate-fadeIn">
                              <h5 className="text-xs font-bold text-slate-900 font-display flex items-center gap-1.5 leading-none">
                                <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                                {cause.titel}
                              </h5>
                              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                                {cause.text}
                              </p>
                            </div>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

            </div>

            {/* CTA action wrapper */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-sm text-[#f6f6f6]"
              >
                Lead-Gespräch buchen — kostenlos, 30 Min <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Accordion lead capture form */}
            <LeadCaptureForm
              secondaryCTAText="Website-Analyse per E-Mail erhalten →"
              danachText="Wir schauen uns deine Website an und schicken dir eine persönliche Einschätzung zu den grössten Conversion-Hebeln."
              pageId="lead-generation"
              additionalFields={[
                { type: 'text', name: 'websiteUrl', placeholder: 'Website-URL', required: false }
              ]}
            />

          </motion.div>
        )}
      </div>

    </div>
  );
}

function HoverHelp({ text }: { text: string }) {
  return (
    <div className="group relative cursor-help inline-block text-slate-400 hover:text-slate-900 transition-colors">
      <AlertCircle className="w-3.5 h-3.5" />
      <div className="absolute right-0 bottom-full mb-2 w-48 bg-slate-900 text-white text-[10px] font-medium leading-relaxed p-2.5 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
        {text}
      </div>
    </div>
  );
}
