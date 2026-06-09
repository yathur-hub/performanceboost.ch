import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, Laptop, Landmark, TrendingUp, Layers, Users, Cpu, FileText, Megaphone, AlertCircle, ChevronDown, Check } from 'lucide-react';
import InteractiveGrowthCalculator from '../components/InteractiveGrowthCalculator';
import RevenuePotenzialCheck from '../components/RevenuePotenzialCheck';
import { motion, AnimatePresence } from 'motion/react';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [showPotenzialCheck, setShowPotenzialCheck] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/kontakt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-32 md:space-y-48 pb-24 text-slate-800" id="home-view">
      
      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-white/60 backdrop-blur-xs">
        {/* Soft background glows with elegant animated breathing scale effect */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
          className="absolute top-20 left-10 w-80 h-80 bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" 
        />
        <motion.div 
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 right-10 w-110 h-110 bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-4xl sm:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-slate-900 leading-[1.08] max-w-3xl mx-auto select-none"
            >
              Mehr qualifizierte Anfragen.<br/>
              Planbares <span className="text-[#686DF4] italic font-serif">Wachstum statt Zufall.</span>
            </motion.h1>

            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-slate-500 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium"
            >
              performanceboost ist dein Revenue Growth Partner. Wir verbinden Growth Strategy, Demand Generation und Revenue Operations zu messbarem Wachstum — frei von Agentur-Theater.
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <a
                href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-display font-bold px-8 py-4 rounded-full shadow-[var(--shadow-premium-md)] hover:shadow-[var(--shadow-premium-lg)] hover:-translate-y-0.5 transition-all text-center cursor-pointer text-xs sm:text-sm tracking-wide"
              >
                Wachstumsgespräch buchen <span className="text-xs font-normal text-slate-100 opacity-90">(30 Min, kostenlos)</span> <ArrowRight className="w-5 h-5 text-white" />
              </a>
              <button
                type="button"
                onClick={() => setShowPotenzialCheck(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-350 font-display font-bold px-8 py-4 rounded-full shadow-xs hover:-translate-y-0.5 transition-all text-center cursor-pointer text-xs sm:text-sm tracking-wide select-none outline-none"
              >
                Potenzial-Check <span className="text-xs font-normal text-slate-450 opacity-90">(unter 60 Sek)</span>
              </button>
            </motion.div>

            {/* Swiss Trust Strip */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.4, duration: 0.8 } }
              }}
              className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 pt-12 text-[10px] text-slate-400 font-mono uppercase tracking-widest font-bold"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50/80 border border-slate-200 rounded-md select-none">
                <ShieldCheck className="w-4 h-4 text-[#686DF4]" /> 100% DSG & DSGVO konform
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50/80 border border-slate-200 rounded-md select-none">
                <CheckCircle2 className="w-4 h-4 text-[#686DF4]" /> Schweizer Rechenzentrum
              </span>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* POSITIONING SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center shadow-[var(--shadow-premium-md)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#686DF4]/2 rounded-full blur-xl pointer-events-none transition-transform duration-1000 group-hover:scale-150" />
          <div className="lg:col-span-8 space-y-6">
            <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">POSITIONIERUNG</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-bold text-slate-900 tracking-tight">Du brauchst keine Marketingagentur.</h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              Du brauchst einen Partner, der Wachstum systematisch aufbaut. Der Demand erzeugt, Leads qualifiziert, Marketing und Vertrieb verbindet — und Revenue planbar macht.
            </p>
            <p className="text-slate-505 text-xs sm:text-sm leading-relaxed font-medium">
              Genau das ist performanceboost. Wir arbeiten mit B2B-Unternehmen, die wachsen wollen. Nicht mit vagen Versprechungen, sondern mit erprobten Systemen, die funktionieren.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center">
            <motion.div 
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="p-8 bg-[#f6f6f6]/80 border border-slate-200/60 rounded-2xl shadow-[var(--shadow-premium-sm)] text-center space-y-4 max-w-xs cursor-default"
            >
              <span className="text-3xl block">🤝</span>
              <h4 className="text-xs font-bold text-slate-900 uppercase font-display tracking-wider">Gemeinsamer Fokus</h4>
              <p className="text-[10.5px] text-slate-500 leading-relaxed font-semibold">Marketing & Sales vereint in einem einzigen Mess- und Steuerungssystem.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">REALITÄTSCHECK</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">Erkennst du das wieder?</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            'Dein Vertrieb hat zu wenig qualifizierte Pipeline.',
            'Marketing und Sales arbeiten aneinander vorbei.',
            'Leads kommen rein — aber nur wenige werden zu Kunden.',
            'Kein funktionierendes System für Demand Generation und Lead Nurturing.',
            'Revenue-Zahlen sind schwer vorhersagbar.'
          ].map((prob, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -4, borderColor: "#686DF4" }}
              className="bg-white border border-[#E0E0E0]/60 p-6 md:p-8 rounded-2xl flex gap-4 items-start shadow-[var(--shadow-premium-sm)] duration-305 transition-all"
            >
              <span className="w-6 h-6 rounded-lg bg-red-50 border border-red-100 text-red-650 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 font-mono">!</span>
              <div>
                <p className="text-xs font-bold text-slate-850 leading-relaxed">{prob}</p>
              </div>
            </motion.div>
          ))}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="bg-red-50/10 border border-dashed border-red-200 p-6 md:p-8 rounded-2xl flex flex-col justify-center items-center text-center space-y-2 select-none"
          >
            <span className="text-xs font-bold uppercase text-red-650 tracking-wider font-display">Das Fazit</span>
            <p className="text-xs text-slate-750 font-bold leading-relaxed font-semibold">Das sind keine reinen Marketing-Probleme.<br/>Das sind fundamentale Revenue-Probleme.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* LEISTUNGS-SEKTION */}
      <motion.section 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        viewport={{ once: true, margin: "-120px" }} 
        transition={{ duration: 0.6 }} 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E0E0E0]/80 pb-6"
        >
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">WIE WIR HELFEN</span>
            <h2 className="text-3xl font-display font-semibold text-slate-900 tracking-tight">Was wir aufbauen — nutzenorientiert.</h2>
          </div>
          <button
            onClick={() => {
              onNavigate('/leistungen');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-[#686DF4] hover:text-[#686DF4]/80 inline-flex items-center gap-1.5 cursor-pointer font-sans"
          >
            Alle Leistungen ansehen <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Mehr qualifizierte Pipeline generieren',
              desc: 'Demand Strategies, die systematisch Interesse erzeugen und kaufbereite Leads in den Vertrieb liefern. Nicht Klicks. Echte Pipeline.'
            },
            {
              title: 'Nachfrage systematisch aufbauen',
              desc: 'Multi-Channel Demand Generation, die deine Zielgruppe dort trifft, wo sie ist — und sie konsequent durch den Funnel begleitet.'
            },
            {
              title: 'Leads automatisiert entwickeln',
              desc: 'Marketing Automation und Lead Nurturing, die dein Team entlasten und Konversionsraten erhöhen. Ohne manuelle Prozesse.'
            },
            {
              title: 'Marketing und Vertrieb verbinden',
              desc: 'Revenue Operations, die aus zwei Silos ein gemeinsames System machen. Gemeinsame Metriken. Gemeinsamer Fokus.'
            },
            {
              title: 'Wachstum planbar machen',
              desc: 'Data & Analytics, die Entscheidungen auf Fakten stützen — nicht auf Bauchgefühl. Du weisst jederzeit, was wirkt.'
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-5 hover:border-[#686DF4]/30 duration-300 transition-all shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)] group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center font-mono font-bold text-xs text-slate-400 group-hover:bg-[#686DF4] group-hover:text-white transition-colors duration-300">
                0{idx + 1}
              </div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
            </motion.div>
          ))}
          
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ scale: 1.005 }}
            className="bg-[#686DF4]/5 border border-[#CACCFB]/50 p-8 rounded-3xl flex flex-col justify-between shadow-[var(--shadow-premium-sm)] hover:border-[#686DF4]/20 transition-all duration-300"
          >
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#686DF4] uppercase font-display tracking-wider">DEINE PRIORITÄT?</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">Wir kombinieren unsere Bausteine passend zu deiner individuellen Struktur und deinen Ressourcen.</p>
            </div>
            <button
              onClick={() => {
                onNavigate('/leistungen');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-[#686DF4] font-bold flex items-center gap-1.5 group mt-4 cursor-pointer hover:text-[#686DF4]/80"
            >
              Zu den Einzelleistungen <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* SIMULATOR */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white border-y border-[#E2E8F0]/30 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">WATHUR-TUNED ROI</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Errechnen Sie Ihr Wachstumspotenzial</h2>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              Passen Sie die Parameter an, um zu sehen, wie eine professionelle Trichter-Optimierung die Rentabilität Ihres gesamten Unternehmens vervielfacht.
            </p>
          </div>
          <InteractiveGrowthCalculator />
        </div>
      </motion.section>

      {/* ANSATZ-SEKTION */}
      <section className="bg-white border-y border-[#E2E8F0]/30 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-3"
          >
            <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">DAS WACHSTUMSSYSTEM</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-905 tracking-tight">Wie wir arbeiten</h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                num: '1',
                title: 'Diagnose — Wo verlierst du Revenue?',
                desc: 'Erste Session: Wir schauen genau hin. Welche Hebel sind ungenutzt? Wo bricht deise Pipeline ab? Echte Zahlen, echte Probleme.'
              },
              {
                num: '2',
                title: 'Strategie — Partner mit grösster Wirkung',
                desc: 'Nicht alles zeitgleich. Wir priorisieren die 20% Massnahmen, die 80% des Wachstums liefern. Fokus statt Gieskannen-Prinzip.'
              },
              {
                num: '3',
                title: 'Umsetzung — Schnell und messbar',
                desc: 'Wöchentlicher Fortschritt. Transparente Kommunikation in Echtzeit auf Slack. Keine bösen Überraschungen.'
              },
              {
                num: '4',
                title: 'Datengesteuerte Optimierung',
                desc: 'Was funktioniert, skalieren wir. Was nicht funktioniert, stellen wir ab. Entscheidungen auf Basis von Daten, nicht Bauchgefühl.'
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -5 }}
                className="bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-8 rounded-3xl relative pt-16 space-y-4 shadow-[var(--shadow-premium-sm)] hover:border-[#686DF4]/30 hover:shadow-[var(--shadow-premium-md)] transition-all duration-300"
              >
                <span className="absolute top-5 left-8 text-[11px] font-bold font-mono bg-[#686DF4]/5 text-[#686DF4] px-3 py-1 rounded-lg border border-[#CACCFB]/30 shadow-xs">
                  0{step.num}
                </span>
                <h4 className="text-sm font-bold text-slate-900 font-display leading-tight">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* DIFFERENZIERUNG SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">ALLEINGANGS-MERKMAL</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900">Warum performanceboost, nicht eine Agentur?</h2>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Wir denken in Revenue, nicht in Kampagnen.',
              desc: 'Erfolg ist kein Klick, sondern direkter Erlös.'
            },
            {
              title: 'Wir verbinden Marketing, Sales und Daten — nicht nur einen Kanal.',
              desc: 'Aus einem Patchwork an Insellösungen bauen wir ein stimmiges Gesamtsystem'
            },
            {
              title: 'Du sprichst mit uns direkt — kein Account Manager dazwischen.',
              desc: 'Wir arbeiten persönlich an deinem Projekt, ohne Reibungsverluste.'
            },
            {
              title: 'Wir arbeiten mit deinen Zahlen — Erfolg ist messbar, nicht gefühlt.',
              desc: 'Integrierte Attributionsmodelle zeigen dir den direkten ROI.'
            },
            {
              title: 'KMU und Mid-Market sind unsere Welt — nicht Konzerne.',
              desc: 'Wir kennen deine Budgetrestriktionen und Handlungsbedarfe genau.'
            }
          ].map((diff, idx) => (
            <motion.div 
              key={idx} 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -4, borderColor: "#686DF4" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl flex gap-4.5 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] transition-all duration-300"
            >
              <Check className="w-5 h-5 text-[#686DF4] shrink-0 mt-1" />
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 font-display leading-[1.3]">{diff.title}</h4>
                <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">{diff.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PERSONAL BIO SECTION (HOMEPAGE CORRESPONDING SECTION) */}
      <motion.section 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)] transition duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            <div className="md:col-span-4 shrink-0 flex justify-center md:justify-start">
              <img 
                src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
                alt="Yathur Nathan" 
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-slate-200 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-8 space-y-4">
              <div>
                <h3 className="text-lg font-display font-semibold text-slate-900 leading-tight">Yathur Nathan</h3>
                <p className="text-xs font-mono font-bold text-[#686DF4] tracking-wider uppercase mt-1">Gründer &amp; Inhaber</p>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Ich unterstütze Schweizer Unternehmen dabei, Wachstumspotenziale sichtbar zu machen und in messbare Resultate zu übersetzen. Dabei verbinde ich Marketing, Technologie, Daten und Vertrieb zu einem System, das nicht auf Vermutungen, sondern auf Fakten basiert.
              </p>
              <p className="text-xs text-[#686DF4] font-bold leading-relaxed pt-1.5 border-t border-slate-100 italic">
                Als Ihr persönlicher Experte analysiere ich Ihre Customer Journey ganzheitlich und begleite Sie operativ bei der Umsetzung Ihrer Umsatzhebel im Neukunden-Erstgespräch.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">FRAGEN & ANTWORTEN</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900">FAQ</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 md:p-10 shadow-[var(--shadow-premium-sm)]"
        >
          {[
            {
              q: 'Sind das Marketing- oder Vertriebsleistungen?',
              a: 'Beides. Wachstum entsteht, wenn Marketing und Sales zusammen funktionieren. Wir bauen genau das auf — Revenue Operations, die beide Seiten verbinden.'
            },
            {
              q: 'Für wen ist performanceboost richtig?',
              a: 'B2B-Unternehmen, die planbar wachsen wollen. KMU und Mid-Market. Unternehmen mit konkretem Pipeline-Problem, nicht mit diffusem "Marketing-Bedarf".'
            },
            {
              q: 'Wie schnell sehen wir erste Resultate?',
              a: 'Bei Paid Demand Generation oft in 2-4 Wochen. Bei organischen Strategien und Marketing Automation: 3-6 Monate bis messbare Wirkung. Wir setzen realistische Erwartungen — keine Versprechen.'
            },
            {
              q: 'Was kostet eine Zusammenarbeit?',
              a: 'Das hängt vom Umfang ab. Wir reden darüber im ersten Gespräch. Transparent, keine Überraschungen.'
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0 pt-4 first:pt-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-slate-805 text-xs sm:text-sm hover:text-[#686DF4] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4.5 h-4.5 text-[#686DF4] shrink-0" /> {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#686DF4]' : ''}`} />
              </button>
              {openFaq === index && (
                <p className="mt-3 text-xs text-slate-500 leading-relaxed pl-7 font-medium animate-fadeIn">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </section>

      {/* FINALE CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-slate-950 text-white border border-slate-900 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden shadow-[var(--shadow-premium-lg)]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 relative z-10 max-w-2xl">
            <span className="text-[9px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">JETZT STARTEN</span>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">Bereit, Wachstum planbar zu machen?</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium opacity-90">
              30 Minuten. Keine Verpflichtung. Konkrete Diagnose. Wir schauen gemeinsam, wo deine grössten Wachstumshebel liegen — und ob wir der richtige Partner dafür sind.
            </p>
          </div>

          <a
            href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 text-center inline-block cursor-pointer shrink-0 z-10"
          >
            Wachstumsgespräch buchen
          </a>
        </motion.div>
      </section>

      <AnimatePresence>
        {showPotenzialCheck && (
          <RevenuePotenzialCheck 
            onClose={() => setShowPotenzialCheck(false)} 
            onNavigate={onNavigate}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
