import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, ArrowRight, Sparkles, CheckCircle2, AlertTriangle, Info } from 'lucide-react';
import { formatCHF, formatNumber, track, LeadCaptureForm } from './heroUtils';

export default function DemandPipelineGap() {
  const [neukunden, setNeukunden] = useState<number | ''>('');
  const [abschlussrate, setAbschlussrate] = useState<number | ''>('');
  const [aktuelleLeads, setAktuelleLeads] = useState<number | ''>('');
  const [auftragswert, setAuftragswert] = useState<number | ''>('');

  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    track("hero_tool_viewed", { page: "demand-generation" });
  }, []);

  const handleFieldChange = (field: string, value: any) => {
    if (!hasInteracted) {
      setHasInteracted(true);
      track("hero_tool_started", { page: "demand-generation" });
    }
    if (field === 'neukunden') setNeukunden(value === '' ? '' : Math.max(1, Number(value)));
    else if (field === 'abschlussrate') setAbschlussrate(value === '' ? '' : Number(value));
    else if (field === 'aktuelleLeads') setAktuelleLeads(value === '' ? '' : Math.max(0, Number(value)));
    else if (field === 'auftragswert') setAuftragswert(value === '' ? '' : Math.max(0, Number(value)));
  };

  const isFormComplete = neukunden !== '' && abschlussrate !== '' && aktuelleLeads !== '' && auftragswert !== '';

  const results = React.useMemo(() => {
    if (!isFormComplete) return null;

    const nCustomers = Number(neukunden);
    const crLeads = Number(abschlussrate);
    const currLeads = Number(aktuelleLeads);
    const dealVol = Number(auftragswert);

    const benoetigteLeads = Math.ceil(nCustomers / crLeads);
    const gap = benoetigteLeads - currLeads;
    const revenuePotenzial = gap > 0 ? gap * dealVol : 0;
    const jahresPotenzial = revenuePotenzial * 12;
    const istAufKurs = gap <= 0;

    return {
      benoetigteLeads,
      gap,
      revenuePotenzial,
      jahresPotenzial,
      istAufKurs,
      crLeadsSelected: crLeads
    };
  }, [neukunden, abschlussrate, aktuelleLeads, auftragswert, isFormComplete]);

  // Track results once fully visible
  useEffect(() => {
    if (results) {
      track("hero_tool_output_shown", {
        page: "demand-generation",
        gap: results.gap,
        revenue_potenzial: results.revenuePotenzial,
        ist_auf_kurs: results.istAufKurs
      });
    }
  }, [results]);

  const handleBooking = () => {
    track("hero_tool_cta_click", { page: "demand-generation", variant: "booking" });
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-10 text-slate-800 shadow-[var(--shadow-premium-md)] max-w-5xl mx-auto text-left" id="demand-pipeline-gap">
      
      {/* Brand Header */}
      <div className="flex justify-between items-center pb-5 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2.5">
          <Calculator className="w-5.5 h-5.5 text-[#686DF4] shrink-0" />
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight font-display">
            Rechner: Wie viele Anfragen fehlen Ihnen?
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg border border-slate-200/40">
          Schnellrechnung
        </span>
      </div>

      {/* Two column grid on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Spalte: Inputs */}
        <div className="lg:col-span-6 space-y-6">
          <h4 className="text-sm font-semibold text-slate-900 font-display">
            Eingaben
          </h4>
          
          {/* Field 1 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 leading-snug block">
              Wie viele Neukunden brauchen Sie pro Monat?
            </label>
            <div className="relative">
              <input aria-label="Wie viele Neukunden brauchen Sie pro Monat?"
                type="number"
                min="1"
                max="1000"
                placeholder="z. B. 5"
                value={neukunden}
                onChange={e => handleFieldChange('neukunden', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono uppercase font-bold text-slate-400">
                Neukunden / Mt.
              </span>
            </div>
          </div>

          {/* Field 2 */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-slate-800 leading-snug">
                Wie hoch ist Ihre Abschlussquote (Lead → Kunde)?
              </label>
              <HoverHelp text="Anteil der vom Vertrieb angenommenen Leads, die am Ende unterschreiben." />
            </div>
            <select aria-label="Wie hoch ist Ihre Abschlussquote (Lead → Kunde)?"
              value={abschlussrate}
              onChange={e => handleFieldChange('abschlussrate', e.target.value)}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-750 text-slate-800 transition-colors cursor-pointer shadow-xs"
            >
              <option value="">Bitte wählen...</option>
              <option value="0.01">1%</option>
              <option value="0.02">2%</option>
              <option value="0.05">5%</option>
              <option value="0.10">10%</option>
              <option value="0.20">20%</option>
            </select>
            <p className="text-[11px] text-slate-400 leading-snug font-medium">
              Wie viel Prozent Ihrer Leads werden zu zahlenden Kunden?
            </p>
          </div>

          {/* Field 3 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 leading-snug block">
              Wie viele qualifizierte Leads erhält Ihr Vertrieb heute pro Monat?
            </label>
            <div className="relative">
              <input aria-label="Wie viele qualifizierte Leads erhält Ihr Vertrieb heute pro Monat?"
                type="number"
                min="0"
                max="10000"
                placeholder="z. B. 20"
                value={aktuelleLeads}
                onChange={e => handleFieldChange('aktuelleLeads', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono uppercase font-bold text-slate-400">
                Leads / Mt.
              </span>
            </div>
          </div>

          {/* Field 4 */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-800 leading-snug block">
              Durchschnittlicher Auftragswert (CHF)
            </label>
            <div className="relative">
              <input aria-label="Durchschnittlicher Auftragswert (CHF)"
                type="number"
                min="100"
                max="1000000"
                placeholder="z. B. 5'000"
                value={auftragswert}
                onChange={e => handleFieldChange('auftragswert', e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#686DF4] text-slate-800 transition-colors shadow-xs"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[11px] font-mono uppercase font-bold text-slate-400">
                CHF
              </span>
            </div>
          </div>

        </div>

        {/* Right Spalte: Live-Output-Panel */}
        <div className="lg:col-span-6">
          {!results ? (
            <div className="bg-[#f6f6f6]/55 border border-slate-200/50 rounded-2xl p-8 text-center h-full flex flex-col justify-center items-center min-h-[300px] shadow-xs">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Ihre Auswertung
              </h4>
              <p className="text-xs text-slate-450 leading-relaxed font-semibold max-w-xs text-slate-500">
                Füllen Sie alle 4 Felder aus, um zu sehen, wie viele Anfragen Ihnen fehlen und wie viel Umsatz damit möglich wäre.
              </p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6 h-full flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div className="space-y-6">
                
                {/* Variant C: Warning header if Gap is giant */}
                {results.gap > Number(aktuelleLeads) * 2 && results.gap > 0 ? (
                  <div className="bg-red-50 border border-red-200/50 rounded-xl p-4 flex gap-3 text-left">
                    <AlertTriangle className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#E63946] font-display">Grosse Lücke</h5>
                      <p className="text-[11px] text-[#E63946] leading-normal font-semibold mt-1">
                        ⚠ Eine Lücke von {formatNumber(results.gap)} Leads pro Monat lässt sich kaum mit einer einzelnen Kampagne schliessen. Dafür braucht es mehrere Kanäle, die laufend zusammenspielen.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/40">
                    <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest">
                      Ergebnis
                    </span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: results.istAufKurs ? '#2A9D8F' : '#E63946' }} />
                  </div>
                )}

                {/* Primary Metric Score */}
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest block">
                    {results.istAufKurs ? "Status" : "Lücke pro Monat"}
                  </span>
                  
                  {results.istAufKurs ? (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100 flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold font-display" style={{ color: '#2A9D8F' }}>
                        Ihre Anfragen reichen aus.
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-none" style={{ color: '#E63946' }}>
                      {formatNumber(results.gap)} Leads fehlen Ihnen pro Monat
                    </div>
                  )}
                </div>

                {/* Equation section in tabular visual representation */}
                <div className="bg-white rounded-xl border border-slate-200/50 p-4 space-y-2.5 shadow-xs">
                  <div className="flex justify-between text-xs pt-1">
                    <span className="text-slate-500 font-medium">Ziel:</span>
                    <span className="font-bold text-slate-800 font-mono">{formatNumber(Number(neukunden))} Neukunden / Monat</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-500 font-medium">Benötigt:</span>
                    <span className="font-bold text-slate-800 font-mono">{formatNumber(results.benoetigteLeads)} qualifizierte Leads</span>
                  </div>
                  <div className="flex justify-between text-xs pb-1">
                    <span className="text-slate-500 font-medium">Aktuell:</span>
                    <span className="font-bold text-slate-800 font-mono">{formatNumber(Number(aktuelleLeads))} Leads</span>
                  </div>
                  <div className="border-t border-slate-100 pt-2.5 flex justify-between text-xs font-bold">
                    <span className="text-slate-800 font-display">Lücke:</span>
                    <span className="font-mono text-sm" style={{ color: results.istAufKurs ? '#2A9D8F' : '#E63946' }}>
                      {results.istAufKurs ? '0' : formatNumber(results.gap)} Leads fehlen
                    </span>
                  </div>
                </div>

                {/* Profit/Loss Potential representation */}
                {!results.istAufKurs && (
                  <div className="bg-red-50/40 p-5 rounded-xl border border-red-100/20 text-left space-y-1.5">
                    <p className="text-[11px] text-[#E63946] mb-0.5 font-bold uppercase tracking-widest font-mono">
                      Mögliches Umsatzpotenzial
                    </p>
                    <div className="text-xl sm:text-2xl font-bold font-display text-[#E63946] leading-none">
                      {formatCHF(results.revenuePotenzial)} <span className="text-[11px] text-red-400 font-normal">/ Monat</span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-semibold font-mono">
                      {formatCHF(results.jahresPotenzial)} pro Jahr (grobe Schätzung)
                    </div>
                  </div>
                )}

                {/* Interpretation Paragraphs */}
                <div className="pt-2 text-xs text-slate-500 leading-relaxed font-semibold">
                  {results.istAufKurs ? (
                    <span>
                      Mit {formatNumber(Number(aktuelleLeads))} Leads pro Monat und einer Abschlussquote von {formatNumber(results.crLeadsSelected * 100)}% erreichen Sie Ihr Ziel von {neukunden} Neukunden. Als Nächstes lohnt es sich, die Qualität der Anfragen zu verbessern und die Kosten pro Lead zu senken, oder ein höheres Ziel anzupeilen.
                    </span>
                  ) : (
                    <span>
                      Mehr Werbebudget allein schliesst eine solche Lücke selten. Es braucht ein abgestimmtes Vorgehen, das Nachfrage über mehrere Kanäle aufbaut und Interessenten bis zur Anfrage begleitet.
                    </span>
                  )}
                </div>

              </div>

              {/* Action Button within the card context */}
              <div className="pt-5 mt-6 border-t border-slate-200/40">
                <button
                  onClick={handleBooking}
                  className="w-full bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-6 py-4 rounded-xl uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-xs text-[#f6f6f6]"
                >
                  {results.istAufKurs ? "Nächste Schritte besprechen: kostenlos, 30 Min." : "Ergebnis besprechen: kostenlos, 30 Min."} <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </motion.div>
          )}
        </div>

      </div>

      {/* Accordion form logic below */}
      {isFormComplete && (
        <LeadCaptureForm
          secondaryCTAText="Einschätzung per E-Mail erhalten →"
          danachText="Wir senden Ihnen eine persönliche Einschätzung, wie Sie die fehlenden Anfragen gewinnen können."
          pageId="demand-generation"
        />
      )}

    </div>
  );
}

function HoverHelp({ text }: { text: string }) {
  return (
    <div className="group relative cursor-help inline-block text-slate-400 hover:text-slate-900 transition-colors">
      <Info className="w-3.5 h-3.5" />
      <div className="absolute right-0 bottom-full mb-2 w-48 bg-slate-900 text-white text-[11px] font-medium leading-relaxed p-2.5 rounded-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200 z-50">
        {text}
      </div>
    </div>
  );
}
