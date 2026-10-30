import React, { useState, lazy, Suspense } from 'react';
import { 
  ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, Laptop, Landmark, TrendingUp, Layers, Users, Cpu, FileText, Megaphone, AlertCircle, ChevronDown, Check,
  PiggyBank, Cloud, Home, Briefcase, Factory, GraduationCap, Stethoscope, Hammer, Scale, Truck, Hotel
} from 'lucide-react';
import InteractiveGrowthCalculator from '../components/InteractiveGrowthCalculator';
const ProblemFinder = lazy(() => import('../components/home/ProblemFinder'));
import { motion, AnimatePresence } from 'motion/react';
import { RevenueSystemGraphic } from '../components/home/RevenueSystemGraphic';
import { HeroGrowthLayer } from '../components/home/HeroGrowthLayer';
import { ClientTestimonials } from '../components/home/ClientTestimonials';
import { SITE } from '../config/site';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [showProblemFinder, setShowProblemFinder] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleConsultationClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    onNavigate('/kontakt');
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-24 md:space-y-36 pb-24 text-slate-800" id="home-view">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden bg-white/60 backdrop-blur-xs">
        {/* Subtles, high-end multi-layered growth & data background visual */}
        <HeroGrowthLayer />

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
            className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto"
          >
            
            <motion.h1 
              variants={{
                hidden: { opacity: 1, y: 0 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-[2.1rem] sm:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] max-w-3xl mx-auto"
            >
              Mehr passende Kundenanfragen für Ihr KMU.{' '}
              <span className="text-[#696EEF] italic font-serif">Planbar statt zufällig.</span>
            </motion.h1>

            <motion.div 
              variants={{
                hidden: { opacity: 1, y: 0 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              <p>
                Wir planen, bauen und betreuen Ihre digitale Neukundengewinnung: Kampagnen auf Google, Meta und LinkedIn,
                Landingpages, die Anfragen auslösen, und ein Tracking, das zeigt, was Ihr Werbebudget einbringt.
                Persönlich umgesetzt von Inhaber Yathur Nathan.
              </p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            >
              <a
                href="/kontakt"
                onClick={handleConsultationClick}
                data-cta="hero_primary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 bg-slate-950 hover:bg-[#4f54d6] text-white font-display font-semibold px-7 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/40"
              >
                Erstgespräch vereinbaren <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setShowProblemFinder(true)}
                data-cta="hero_secondary"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-display font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30"
              >
                Welches Problem möchten Sie lösen?
              </button>
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
        <div className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center shadow-[var(--shadow-premium-md)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#686DF4]/2 rounded-full blur-xl pointer-events-none transition-transform duration-1000 group-hover:scale-150" />
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3.5xl font-display font-bold text-slate-900 tracking-tight">Mehr Klicks allein bringen keine neuen Kunden.</h2>
            <p className="text-slate-700 text-body font-semibold text-balance">
              Wenn die Landingpage nicht überzeugt, Anfragen im Postfach liegen bleiben oder niemand weiss, welche Kampagne welchen Auftrag gebracht hat, verpufft auch ein gutes Werbebudget. Deshalb betrachten wir die ganze Strecke: von der Anzeige über die Website bis zur Anfrage in Ihrem CRM.
            </p>
            <p className="text-slate-500 text-body-sm leading-relaxed font-medium text-balance">
              So sehen Sie, was Ihr Marketing tatsächlich einbringt, und wir können gezielt dort nachbessern, wo heute Anfragen verloren gehen.
            </p>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 flex items-center justify-center lg:justify-end w-full min-w-0">
            <RevenueSystemGraphic />
          </div>
        </div>
      </motion.section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <ClientTestimonials />

      {/* PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3"
        >
          <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Typische Ausgangslage</span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight">Kommt Ihnen das bekannt vor?</h2>
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
            'Sie investieren in Werbung, wissen aber nicht genau, welche Anfragen daraus entstehen.',
            'Es kommen Anfragen, aber viele passen nicht zu Ihrem Angebot.',
            'Die Website sieht gut aus, bringt aber kaum Kontaktanfragen.',
            'Neue Kunden kommen vor allem über Empfehlungen, und das lässt sich schlecht planen.',
            'Marketing läuft nebenbei, weil intern niemand richtig Zeit dafür hat.'
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
                <p className="text-body-sm font-semibold text-slate-850 leading-relaxed">{prob}</p>
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
            <span className="text-xs font-bold uppercase text-red-650 tracking-wider font-display">Unsere Erfahrung</span>
            <p className="text-body-sm text-slate-750 font-semibold leading-relaxed">Meist liegt es nicht an einem einzelnen Kanal, sondern daran, dass Anzeigen, Website und Nachbearbeitung nicht zusammenspielen.</p>
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
            <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Was wir übernehmen</span>
            <h2 className="text-3xl font-display font-semibold text-slate-900 tracking-tight">Von der Anzeige bis zur Anfrage im Postfach</h2>
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
              title: 'Kampagnen auf Google, Meta und LinkedIn',
              desc: 'Wir planen, schalten und optimieren Ihre Anzeigen laufend. Ziel sind passende Anfragen, nicht möglichst viele Klicks.'
            },
            {
              title: 'Landingpages und Website',
              desc: 'Seiten, die in wenigen Sekunden erklären, was Sie anbieten und für wen, und den Weg zur Anfrage einfach machen.'
            },
            {
              title: 'Tracking und Reporting',
              desc: 'Saubere Messung mit Google Analytics und Tag Manager. Sie sehen, welcher Kanal welche Anfragen bringt und was eine Anfrage kostet.'
            },
            {
              title: 'Marketing Automation und CRM',
              desc: 'Anfragen landen automatisch im CRM, werden vorqualifiziert und rechtzeitig nachgefasst. Weniger Handarbeit, weniger verlorene Interessenten.'
            },
            {
              title: 'Strategie und Positionierung',
              desc: 'Wen wollen Sie gewinnen, mit welcher Botschaft und welchem Budget? Das klären wir, bevor Geld in Werbung fliesst.'
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
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors">{item.title}</h3>
              <p className="text-body-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
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
              <h4 className="text-xs font-bold text-[#686DF4] uppercase font-display tracking-wider">Nicht sicher, was Sie brauchen?</h4>
              <p className="text-body-sm text-slate-600 leading-relaxed font-medium">Im Erstgespräch finden wir heraus, wo der grösste Hebel liegt. Oft ist es nicht der Kanal, an den man zuerst denkt.</p>
            </div>
            <button
              onClick={() => {
                onNavigate('/leistungen');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs text-[#686DF4] font-bold flex items-center gap-1.5 group mt-4 cursor-pointer hover:text-[#686DF4]/80"
            >
              Leistungen im Detail <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Was eine bessere Anfragequote bringen kann</h2>
            <p className="text-body-sm text-slate-500 font-medium leading-relaxed">
              Tragen Sie Ihre eigenen Werte ein. Der Rechner zeigt grob, wie sich höhere Anfrage- und Abschlussquoten auf Ihren Umsatz auswirken. Eine Schätzung, keine Prognose.
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
            <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Vorgehen</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-905 tracking-tight">So arbeiten wir zusammen</h2>
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
                title: 'Erstgespräch und Analyse',
                desc: 'Wir schauen uns Ihre heutige Kundengewinnung an: Website, Kampagnen, Tracking und Zahlen. Danach wissen Sie, wo Anfragen verloren gehen.'
              },
              {
                num: '2',
                title: 'Plan mit klaren Prioritäten',
                desc: 'Sie erhalten einen konkreten Massnahmenplan mit Aufwand, Budget und Zielen. Wir beginnen mit dem, was am meisten bewirkt.'
              },
              {
                num: '3',
                title: 'Umsetzung',
                desc: 'Wir setzen um: Kampagnen, Seiten, Tracking und Automatisierungen. Sie erhalten regelmässig einen kurzen Zwischenstand, ohne Fachchinesisch.'
              },
              {
                num: '4',
                title: 'Messen und verbessern',
                desc: 'Jeden Monat schauen wir gemeinsam auf die Zahlen. Was funktioniert, bauen wir aus. Was nicht funktioniert, passen wir an oder stoppen es.'
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
                <h4 className="text-base font-bold text-slate-900 font-display leading-tight">{step.title}</h4>
                <p className="text-body-sm text-slate-500 leading-relaxed font-medium">{step.desc}</p>
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
          <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Der Unterschied</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900">Was die Zusammenarbeit mit uns ausmacht</h2>
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
              title: 'Gemessen wird an Anfragen und Umsatz, nicht an Klicks.',
              desc: 'Unsere Auswertungen zeigen, was für Ihr Geschäft zählt.'
            },
            {
              title: 'Kampagnen, Website, Tracking und CRM aus einer Hand.',
              desc: 'Keine Abstimmung zwischen drei Dienstleistern und keine Lücken an den Schnittstellen.'
            },
            {
              title: 'Sie sprechen direkt mit dem Inhaber.',
              desc: 'Yathur Nathan betreut Ihr Projekt persönlich, ohne Account Manager dazwischen.'
            },
            {
              title: 'Sie sehen jederzeit, was passiert.',
              desc: 'Sie haben Einblick in Werbekonten und Auswertungen und wissen, wofür Ihr Budget eingesetzt wird.'
            },
            {
              title: 'Auf KMU ausgerichtet.',
              desc: 'Lösungen müssen zu Ihren Budgets, Abläufen und Ressourcen passen, nicht zu denen eines Konzerns.'
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
                <h4 className="text-sm font-bold text-slate-900 font-display leading-[1.3]">{diff.title}</h4>
                <p className="text-body-sm text-slate-500 font-medium leading-relaxed">{diff.desc}</p>
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
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-white border border-[#E0E0E0]/65 p-10 md:p-14 rounded-[2rem] shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)] transition duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center text-left">
            <div className="md:col-span-5 shrink-0 flex justify-center md:justify-start">
              <img loading="lazy" decoding="async" 
                src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
                alt="Yathur Nathan" 
                className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-[1.5rem] border border-slate-205 shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight">Yathur Nathan</h3>
                <p className="text-xs sm:text-sm font-mono font-bold text-[#686DF4] tracking-wider uppercase mt-1">Gründer &amp; Inhaber</p>
              </div>
              <p className="text-body text-slate-600 leading-relaxed font-medium">
                Ich unterstütze Schweizer KMU dabei, aus Werbebudget messbar Kundenanfragen zu machen. Dafür verbinde ich Performance Marketing, Webentwicklung, Tracking und Automatisierung, also Aufgaben, die sonst oft auf mehrere Dienstleister verteilt sind.
              </p>
              <p className="text-body text-[#686DF4] font-semibold leading-relaxed pt-3 border-t border-slate-100 italic">
                Wenn Sie mit performanceboost arbeiten, arbeiten Sie mit mir: vom Erstgespräch über die Umsetzung bis zur monatlichen Auswertung.
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
          <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Häufige Fragen</span>
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
              q: 'Für welche Unternehmen eignet sich performanceboost?',
              a: 'Für Schweizer KMU, meist ab rund CHF 1 Mio. Jahresumsatz, die mehr Neukunden über digitale Kanäle gewinnen möchten: Dienstleister, B2B-Unternehmen und Onlineshops. Wichtig ist ein klares Angebot und die Kapazität, zusätzliche Kunden auch bedienen zu können.'
            },
            {
              q: 'Was unterscheidet Sie von einer klassischen Marketingagentur?',
              a: 'Viele Agenturen betreuen einen einzelnen Kanal. Wir betrachten die ganze Strecke von der Anzeige bis zur Anfrage im CRM und setzen Website, Tracking und Automatisierung selbst um. Und Sie arbeiten direkt mit dem Inhaber.'
            },
            {
              q: 'Wie schnell sehen wir erste Ergebnisse?',
              a: 'Bei Google Ads und Meta Ads liegen meist nach vier bis acht Wochen belastbare Zahlen vor. Suchmaschinenoptimierung und Automatisierungen brauchen länger, oft drei bis sechs Monate. Was in Ihrem Fall realistisch ist, sagen wir Ihnen im Erstgespräch offen.'
            },
            {
              q: 'Wie messen Sie den Erfolg?',
              a: 'An der Zahl und Qualität der Anfragen, an den Kosten pro Anfrage und, wo möglich, am daraus entstandenen Umsatz. Dafür richten wir das Tracking so ein, dass jede Anfrage ihrer Quelle zugeordnet werden kann.'
            },
            {
              q: 'Wie viel Aufwand habe ich als Kunde?',
              a: 'Zu Beginn brauchen wir Ihr Wissen über Angebot, Kunden und Abläufe sowie die nötigen Zugänge. Danach genügt in der Regel ein kurzer regelmässiger Austausch. Die Umsetzung übernehmen wir.'
            },
            {
              q: 'Was kostet eine Zusammenarbeit?',
              a: 'Das hängt vom Umfang ab: Eine einmalige Analyse ist etwas anderes als die laufende Betreuung mehrerer Kanäle. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit klar definiertem Umfang. Das Erstgespräch selbst ist kostenlos.'
            }
          ].map((faq, index) => (
            <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0 pt-4 first:pt-4">
              <button
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-slate-805 text-sm sm:text-base hover:text-[#686DF4] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4.5 h-4.5 text-[#686DF4] shrink-0" /> {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#686DF4]' : ''}`} />
              </button>
              {openFaq === index && (
                <p className="mt-3 text-body-sm text-slate-500 leading-relaxed pl-7 font-medium animate-fadeIn">
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
            <span className="text-[11px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">Nächster Schritt</span>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">Lassen Sie uns über Ihre Neukundengewinnung sprechen.</h3>
            <p className="text-body text-slate-300 leading-relaxed font-medium opacity-90">
              30 Minuten, kostenlos und unverbindlich. Sie schildern Ihre Ausgangslage, wir sagen Ihnen offen, wo wir Potenzial sehen und ob wir der richtige Partner dafür sind.
            </p>
            <p className="text-sm text-slate-300">
              Lieber direkt telefonieren?{' '}
              <a href={SITE.phoneHref} className="font-semibold text-white underline underline-offset-2">{SITE.phoneDisplay}</a>
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/kontakt')}
            className="w-full md:w-auto min-h-12 bg-[#686DF4] hover:bg-[#5a5fe6] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 text-center inline-block cursor-pointer shrink-0 z-10"
          >
            Erstgespräch vereinbaren
          </button>
        </motion.div>
      </section>

      <Suspense fallback={null}>
      <AnimatePresence>
        {showProblemFinder && (
          <ProblemFinder
            onClose={() => setShowProblemFinder(false)}
            onNavigate={onNavigate}
          />
        )}
      </AnimatePresence>
      </Suspense>
    </div>
  );
}
