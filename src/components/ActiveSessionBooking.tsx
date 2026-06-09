import React, { useState } from 'react';
import { Calendar, Clock, User, CheckCircle, Globe, ChevronRight, AlertCircle, ArrowLeft, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Step = 'focus' | 'date-time' | 'details' | 'success';

const FOCUS_OPTIONS = [
  { id: 'allround-audit', title: 'Genereller 360° Revenue- & Flow-Audit', duration: '45 Min', desc: 'Wir beleuchten Ihre gesamte Marketing- und Vertriebs-Pipeline nach Lecks.' },
  { id: 'demand-gen-boost', title: 'Demand Gen & Paid Ads Beratung', duration: '30 Min', desc: 'Aufbau von Kaufinteresse und Skalierung via LinkedIn & Google Search.' },
  { id: 'crm-automation', title: 'CRM & Automation Optimierung', duration: '30 Min', desc: 'Ablösung manueller Routinearbeit durch HubSpot, n8n & Automatisierungen.' },
  { id: 'outbound-sales', title: 'B2B Inbound & Outbound Lead Gen', duration: '30 Min', desc: 'Wege zu verlässlichen monatlichen Demo-Terminen mit Ihrer Wunschzielgruppe.' }
];

const AVAILABLE_DAYS = [
  { date: 'Di, 9. Juni', key: '2026-06-09' },
  { date: 'Mi, 10. Juni', key: '2026-06-10' },
  { date: 'Do, 11. Juni', key: '2026-06-11' },
  { date: 'Fr, 12. Juni', key: '2026-06-12' },
  { date: 'Mo, 15. Juni', key: '2026-06-15' }
];

const TIME_SLOTS = ['09:00', '10:30', '13:30', '15:00', '16:15'];

export default function ActiveSessionBooking() {
  const [step, setStep] = useState<Step>('focus');
  const [selectedFocus, setSelectedFocus] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    bottleneck: '',
    revenueRange: ''
  });
  
  const [errorMsg, setErrorMsg] = useState('');

  const currentFocusDetails = FOCUS_OPTIONS.find(o => o.id === selectedFocus);
  const currentDayLabel = AVAILABLE_DAYS.find(d => d.key === selectedDay)?.date;

  const handleNextToDateTime = () => {
    if (!selectedFocus) {
      setErrorMsg('Bitte wähle zuerst einen Beratungsschwerpunkt aus.');
      return;
    }
    setErrorMsg('');
    setStep('date-time');
  };

  const handleNextToDetails = () => {
    if (!selectedDay || !selectedTime) {
      setErrorMsg('Bitte wähle Datum und Uhrzeit für das Gespräch.');
      return;
    }
    setErrorMsg('');
    setStep('details');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      setErrorMsg('Bitte fülle Name, Geschäfts-E-Mail und Firmenname aus.');
      return;
    }
    setErrorMsg('');
    setStep('success');
  };

  const resetAll = () => {
    setStep('focus');
    setSelectedFocus('');
    setSelectedDay('');
    setSelectedTime('');
    setFormData({
      name: '',
      email: '',
      company: '',
      website: '',
      bottleneck: '',
      revenueRange: ''
    });
    setErrorMsg('');
  };

  return (
    <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl overflow-hidden shadow-[var(--shadow-premium-lg)] text-slate-800" id="meeting-scheduler">
      {/* Top Progress bar */}
      <div className="h-1 bg-slate-100 w-full relative">
        <div 
          className="absolute top-0 left-0 h-1 bg-[#686DF4] transition-all duration-300"
          style={{ 
            width: step === 'focus' ? '25%' : step === 'date-time' ? '50%' : step === 'details' ? '75%' : '100%' 
          }}
        />
      </div>

      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Left Side: Summary Panel */}
        <div className="w-full md:w-1/3 bg-[#f6f6f6]/55 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-100 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest block mb-1.5">KOSTENFREIER WORKSHOP</span>
              <h3 className="text-xl font-display font-semibold text-slate-905 tracking-tight leading-none">Wachstums-Call</h3>
              <p className="text-xs text-slate-500 mt-3 font-semibold leading-relaxed">
                Analysiere deine Sales-Pipeline lösungsorientiert mit Yathur Nathan. 1-zu-1 Live-Videokonferenz.
              </p>
            </div>

            {selectedFocus && (
              <div className="space-y-4 pt-5 border-t border-slate-100">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-lg bg-[#686DF4]/5 border border-[#CACCFB]/25 flex items-center justify-center text-[#686DF4] shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] text-slate-400 uppercase font-bold tracking-wider font-mono">FOKUS</h4>
                    <p className="text-xs font-semibold text-slate-800 leading-snug">{currentFocusDetails?.title}</p>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-1 font-mono">
                      <Clock className="w-3.5 h-3.5" /> {currentFocusDetails?.duration}
                    </span>
                  </div>
                </div>

                {selectedDay && selectedTime && (
                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-lg bg-[#686DF4]/5 border border-[#CACCFB]/25 flex items-center justify-center text-[#686DF4] shrink-0 mt-0.5">
                      <Calendar className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-[9px] text-slate-400 uppercase font-bold tracking-wider font-mono">ZEITPUNKT</h4>
                      <p className="text-xs font-semibold text-slate-800 leading-snug">{currentDayLabel} um {selectedTime} Uhr</p>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-1 font-mono">
                        <Globe className="w-3.5 h-3.5" /> Europe/Zurich (GMT+1)
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="text-[10px] text-slate-400 pt-6 border-t border-slate-100 mt-6 md:mt-2 font-mono leading-relaxed">
            * 100% KOSTENLOS. KEINE VERPFLICHTUNG. UNSER GEGENSEITIGER FOKUS LIEGT AUF REINEM WIRKUNGSWERT.
          </div>
        </div>

        {/* Right Side: Step-by-Step Forms Container */}
        <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: FOCUS OPTION */}
            {step === 'focus' && (
              <motion.div 
                key="step-focus"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-base font-display font-semibold text-slate-900">1. Welchen Bereich möchtest du primär analysieren?</h4>
                  <p className="text-xs text-slate-500 mt-1 font-semibold">Wähle das passende Thema aus, damit wir uns optimal vorbereiten können.</p>
                </div>

                <div className="space-y-3">
                  {FOCUS_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedFocus(opt.id)}
                      className={`w-full text-left p-4.5 rounded-2xl border transition-all flex justify-between items-start gap-4 hover:border-slate-300 hover:shadow-sm cursor-pointer ${
                        selectedFocus === opt.id 
                          ? 'border-[#686DF4] bg-[#686DF4]/5 shadow-xs' 
                          : 'border-slate-205 bg-[#f6f6f6]/55'
                      }`}
                    >
                      <div className="space-y-1 text-left">
                        <div className="font-semibold text-xs flex items-center gap-2">
                          <span className={selectedFocus === opt.id ? 'text-[#686DF4] font-bold' : 'text-slate-805 font-semibold'}>
                            {opt.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed font-semibold">{opt.desc}</p>
                      </div>
                      <span className="text-[9px] font-mono font-bold bg-slate-50 text-slate-450 border border-slate-150 px-2 py-0.5 rounded shrink-0 whitespace-nowrap">
                        {opt.duration}
                      </span>
                    </button>
                  ))}
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-xl text-xs font-semibold animate-fadeIn">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" /> {errorMsg}
                  </div>
                )}

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleNextToDateTime}
                    className="bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-7 py-3.5 rounded-full inline-flex items-center gap-1.5 transition-all cursor-pointer uppercase tracking-widest"
                  >
                    Weiter zur Zeitwahl <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: DATE & TIME */}
            {step === 'date-time' && (
              <motion.div 
                key="step-date-time"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={() => { setErrorMsg(''); setStep('focus'); }}
                    className="text-slate-400 hover:text-slate-800 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" />
                  </button>
                  <div>
                    <h4 className="text-base font-display font-semibold text-slate-900">2. Wähle deinen passenden Termin</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-semibold">Freie Kalenderslots für die kommenden Tage.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">TAG SELEKTIEREN</span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {AVAILABLE_DAYS.map((day) => (
                        <button
                          key={day.key}
                          type="button"
                          onClick={() => { setSelectedDay(day.key); setSelectedTime(''); }}
                          className={`p-3 rounded-xl border text-center text-xs transition-all cursor-pointer font-bold ${
                            selectedDay === day.key 
                              ? 'border-[#686DF4] bg-[#686DF4]/5 text-[#686DF4]' 
                              : 'border-slate-205 hover:bg-slate-50 text-slate-500 font-semibold'
                          }`}
                        >
                          {day.date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedDay ? (
                    <div className="space-y-2.5 pt-2 animate-fadeIn">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">FREIE UHRZEIT</span>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border text-center text-xs transition-all cursor-pointer font-bold ${
                              selectedTime === time 
                                ? 'border-[#686DF4] bg-[#686DF4] text-white shadow-xs' 
                                : 'border-slate-205 hover:bg-slate-50 text-slate-500 font-semibold'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-slate-400 border border-dashed border-slate-200 rounded-2xl text-xs font-semibold bg-[#f6f6f6]/55">
                      Wähle zunächst oben einen Wunschtag aus, um die verfügbaren Zeiten anzuzeigen.
                    </div>
                  )}
                </div>

                {errorMsg && (
                  <div className="flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-xl text-xs font-semibold animate-fadeIn">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0" /> {errorMsg}
                  </div>
                )}

                <div className="flex justify-between items-center pt-5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => { setErrorMsg(''); setStep('focus'); }}
                    className="text-slate-400 hover:text-slate-800 text-xs font-bold px-2 py-1 bg-transparent border-none cursor-pointer"
                  >
                    Zurück
                  </button>
                  <button
                    type="button"
                    onClick={handleNextToDetails}
                    className="bg-slate-950 hover:bg-[#686DF4] text-white font-bold text-xs px-7 py-3.5 rounded-full inline-flex items-center gap-1.5 transition-all cursor-pointer uppercase tracking-widest"
                  >
                    Angaben vervollständigen <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DETAILS FORM */}
            {step === 'details' && (
              <motion.div 
                key="step-details"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2">
                  <button 
                    type="button"
                    onClick={() => { setErrorMsg(''); setStep('date-time'); }}
                    className="text-slate-400 hover:text-slate-800 transition-colors bg-transparent border-none cursor-pointer"
                  >
                    <ArrowLeft className="w-4.5 h-4.5" />
                  </button>
                  <div>
                    <h4 className="text-base font-display font-semibold text-slate-900">3. Wer nimmt am Workshop-Call teil?</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-semibold">Damit die Videokonferenz-Einladung an die richtigen Personen zugestellt wird.</p>
                  </div>
                </div>

                <form onSubmit={handleCompleteBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest font-mono block">Ihr Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="Beat Müller"
                          className="w-full bg-[#f6f6f6]/60 border border-slate-205 rounded-xl py-3 pl-10 pr-4 text-xs text-slate-900 focus:outline-none focus:border-[#686DF4] focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest font-mono block">Geschäfts-E-Mail *</label>
                      <div className="relative">
                        <Globe className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="name@firma.ch"
                          className="w-full bg-[#f6f6f6]/60 border border-slate-205 rounded-xl py-3 pl-10 pr-4 text-xs text-slate-900 focus:outline-none focus:border-[#686DF4] focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest font-mono block">Firma *</label>
                      <div className="relative">
                        <Building2 className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleFormChange}
                          placeholder="Firma AG"
                          className="w-full bg-[#f6f6f6]/60 border border-slate-205 rounded-xl py-3 pl-10 pr-4 text-xs text-slate-900 focus:outline-none focus:border-[#686DF4] focus:bg-white transition-all font-semibold"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest font-mono block">Unternehmens-Website</label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleFormChange}
                        placeholder="https://firma.ch"
                        className="w-full bg-[#f6f6f6]/60 border border-slate-205 rounded-xl py-3 px-4 text-xs text-slate-900 focus:outline-none focus:border-[#686DF4] focus:bg-white transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] text-slate-400 font-bold uppercase tracking-widest font-mono block">Grösster Pipeline-Engpass</label>
                    <select
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleFormChange}
                      className="w-full bg-[#f6f6f6]/60 border border-slate-205 rounded-xl py-3 px-4 text-xs text-slate-800 focus:outline-none focus:border-[#686DF4] focus:bg-white transition-all font-semibold"
                    >
                      <option value="">Bitte wählen...</option>
                      <option value="zu-wenig-termine">Zu wenig planbare Demo-Gespräche / Termine</option>
                      <option value="hohe-werbekosten">Zu hohe Werbekosten (LinkedIn/Google Ads) ohne Ergebnisse</option>
                      <option value="manuelle-prozesse">Zu viel zeitraubende manuelle Administration</option>
                      <option value="silo-marketing-vertrieb">Silos zwischen Marketing und Vertrieb</option>
                    </select>
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-2 bg-red-50 text-red-600 p-4 rounded-xl text-xs font-semibold animate-fadeIn">
                      <AlertCircle className="w-4.5 h-4.5 shrink-0" /> {errorMsg}
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-5 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => { setErrorMsg(''); setStep('date-time'); }}
                      className="text-slate-400 hover:text-slate-800 text-xs font-bold px-2 py-1 bg-transparent border-none cursor-pointer"
                    >
                      Zurück
                    </button>
                    <button
                      type="submit"
                      className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full inline-flex items-center gap-1.5 transition-all cursor-pointer uppercase tracking-widest shadow-xs"
                    >
                      Termin reservieren
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 4: SUCCESS */}
            {step === 'success' && (
              <motion.div 
                key="step-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-10 space-y-6 flex flex-col items-center justify-center h-full min-h-[400px]"
              >
                <div className="w-16 h-16 bg-[#686DF4]/5 text-[#686DF4] rounded-full flex items-center justify-center border border-[#CACCFB]/30 shadow-[0_4px_16px_rgba(104,109,244,0.15)] animate-bounce">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2.5 max-w-md mx-auto">
                  <h4 className="text-2xl font-display font-semibold text-slate-950 tracking-tight">Wachstums-Call bestätigt!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                    Vielen Dank, <strong className="text-slate-900">{formData.name}</strong>. Deine Buchung am <strong className="text-slate-900">{currentDayLabel}</strong> um <strong className="text-slate-900">{selectedTime} Uhr</strong> für <strong className="text-slate-900">{formData.company}</strong> wurde erfolgreich registriert.
                  </p>
                </div>

                <div className="bg-[#f6f6f6]/55 border border-slate-200/50 p-5 rounded-2xl text-left max-w-sm w-full divide-y divide-slate-200/50">
                  <p className="pb-3.5 text-xs text-slate-500 leading-relaxed font-semibold">
                    Wir haben eine Google Meet Kalender-Einladung an deine E-Mail <strong className="text-[#686DF4]">{formData.email}</strong> versandt.
                  </p>
                  <div className="pt-3.5 flex items-center gap-3">
                    <div className="bg-[#686DF4]/5 border border-[#CACCFB]/25 text-[#686DF4] w-12 h-12 rounded-xl flex items-center justify-center text-[10px] font-mono font-bold leading-tight shrink-0 uppercase">
                      VIDEO<br/>CALL
                    </div>
                    <div className="text-xs">
                      <span className="font-semibold block text-slate-800 leading-snug">Videoteam-Konferenz</span>
                      <span className="text-slate-405 text-slate-400 font-semibold text-[10px]">Der Link wird 5 Min. vor dem Treffen freigeschaltet.</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetAll}
                  className="text-xs text-[#686DF4] hover:text-[#686DF4]/80 underline font-semibold bg-transparent border-none cursor-pointer"
                >
                  Anderes Treffen koordinieren
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
