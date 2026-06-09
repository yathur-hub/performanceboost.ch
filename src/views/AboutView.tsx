/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Heart, Award, Cpu, Eye, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { 
  PREMIUM_EASE, 
  DURATIONS, 
  staggerContainer, 
  staggeredChildVariants, 
  hoverLiftProps, 
  buttonPressProps 
} from '../lib/motion';

interface AboutViewProps {
  onNavigate: (path: string) => void;
}

export default function AboutView({ onNavigate }: AboutViewProps) {
  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/kontakt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CORE_VALUES = [
    {
      icon: Eye,
      title: 'Transparenz statt Blackbox',
      desc: 'Keine Geheimniskrämerei um Klickpreise oder Funnel-Strukturen. Du besitzt deine Konten, deine Daten und dein System komplett.'
    },
    {
      icon: RefreshCw,
      title: 'Iterieren statt Philosophieren',
      desc: 'Ein perfektes Konzept, das in der Schublade verstaubt, bringt keinen Umsatz. Wir bringen Ideen schnell live und optimieren auf Basis echter Daten.'
    },
    {
      icon: Award,
      title: 'Qualität vor blanker Quantität',
      desc: 'Lieber 10 handverlesene B2B-Pipeline-Anfragen mit hohem Deal-Wert als 100 wertlose Newsletter-Abonnenten.'
    },
    {
      icon: Cpu,
      title: 'Technologischer Vorsprung',
      desc: 'CRM-Systeme, AI-Funktionalität und Server-Side Automation sind für uns kein Neuland, sondern das tägliche Handwerkszeug.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-28 text-slate-800" id="about-us-view">
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-white py-28 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="inline-block text-[10px] font-mono font-bold uppercase text-[#686DF4] tracking-widest bg-[#686DF4]/5 border border-[#686DF4]/10 px-4 py-1.5 rounded-full"
          >
            ÜBER PERFORMANCEBOOST
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            Wir bauen die Wachstumssysteme der Schweizer B2B-Zukunft.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold"
          >
            Wir sind keine Event-Agentur, die bunte Broschüren entwirft. Wir sind ein fokussiertes Team aus B2B-Spezialisten, das datengetriebene Revenue-Infrastrukturen entwirft, testet und skaliert.
          </motion.p>
        </div>
      </section>

      {/* WARUM PERFORMANCEBOOST? */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="space-y-6"
        >
          <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest block">UNSERE ENSTEHUNG</span>
          <h2 className="text-2.5xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight leading-snug">Die Lücke zwischen Kreativität und harter Pipeline.</h2>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            B2B-Wachstum scheitert selten an fehlender Kreativität. Es scheitert fast immer an mangelnder Systematisierung. Die meisten B2B-Unternehmen agieren in Silos: Marketing schaltet isolierte LinkedIn-Kampagnen und der Vertrieb telefoniert alten Kaltakquise-Listen hinterher.
          </p>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            Wir haben performanceboost gegründet, um diese Lücke zu schliessen. Wir betrachten Marketing und Sales als ein einziges, zusammenhängendes Revenue-System, das planbar, datengetrieben und skalierbar funktionieren muss.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl space-y-6 shadow-[var(--shadow-premium-md)]"
        >
          <h3 className="text-sm font-bold text-slate-900 border-l-3 border-[#686DF4] pl-4">Zahlen & Fakten</h3>
          
          <div className="space-y-5">
            <div className="pb-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Gegründet in der Schweiz</span>
              <span className="text-xs font-mono font-bold text-slate-900">Graubünden</span>
            </div>
            
            <div className="pb-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Schweizer B2B-Kunden</span>
              <span className="text-xs font-mono font-bold text-slate-900">35+ KMUs in verschiedenen Bereichen</span>
            </div>

            <div className="pb-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Mittelwert ROI Hebel</span>
              <span className="text-xs font-mono font-bold text-[#686DF4]">3.4x Pipeline Boost</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Arbeitsweise</span>
              <span className="text-xs font-mono font-bold text-emerald-600">100% Umsetzungsfokus</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PERSÖNLICHE VISION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="md:col-span-5 relative group"
        >
          <div className="absolute -inset-2 bg-[#686DF4]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          <img 
            src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
            alt="Yathur Nathan" 
            className="w-full h-auto aspect-[4/5] object-cover rounded-3xl border border-[#E0E0E0]/65 shadow-[var(--shadow-premium-md)] relative z-10"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
          className="md:col-span-7 space-y-6 text-left"
        >
          <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest block">PERSÖNLICHES ENGAGEMENT & VISION</span>
          <h2 className="text-2.5xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight leading-snug">Über Yathur Nathan</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
            <p>
              Ich unterstütze Unternehmen dabei, Wachstumspotenziale sichtbar zu machen und in messbare Resultate zu übersetzen. Dabei verbinde ich Marketing, Technologie, Daten und Vertrieb zu einem System, das nicht auf Vermutungen, sondern auf Fakten basiert. Mein Fokus liegt auf der Entwicklung skalierbarer Lösungen in den Bereichen Demand Generation, Leadgenerierung, Marketing Automation, CRM und Revenue Operations.
            </p>
            <p>
              In den vergangenen Jahren durfte ich mit Unternehmen unterschiedlichster Branchen zusammenarbeiten – von KMU bis zu etablierten Marktführern. Aus dieser Erfahrung ist eine klare Überzeugung entstanden: Nachhaltiges Wachstum entsteht nicht durch einzelne Kampagnen oder Tools, sondern durch das Zusammenspiel von Strategie, Prozessen, Technologie und konsequenter Umsetzung. Genau dort setzt performanceboost an.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WAS UNS UNTERSCHEIDET */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="text-center space-y-3"
          >
            <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">UNSER ALLEINSTELLUNGSMERKMAL</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Was performanceboost unterscheidet</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={staggeredChildVariants}
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#686DF4]/5 text-[#686DF4] flex items-center justify-center border border-[#CACCFB]/20">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Keine lose Retainer-Bequemlichkeit</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Bequeme Langzeitverträge ohne echten Output lehnen wir ab. Wir arbeiten meilensteinbasiert. Du siehst in jeder Phase exakt, welche Pipeline-Infrastrukturen aufgebaut, getestet und live geschaltet werden.
              </p>
            </motion.div>

            <motion.div 
              variants={staggeredChildVariants}
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#686DF4]/5 text-[#686DF4] flex items-center justify-center border border-[#CACCFB]/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">100% Inhouse-Umsetzungskompetenz</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Wir lagern nichts an anonyme Subunternehmer aus. Strategie, Copywriting, technisches Tracking-Setup, CRM-Workflows und Ads-Management werden von festen B2B-Experten in der Schweiz umgesetzt.
              </p>
            </motion.div>

            <motion.div 
              variants={staggeredChildVariants}
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#686DF4]/5 text-[#686DF4] flex items-center justify-center border border-[#CACCFB]/20">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Fokus auf Closed-Won Revenue</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Bunte Impressionen und billige Klicks interessieren unseren CFO nicht — und deinen auch nicht. Wir optimieren Kampagnen und CRM-Leads konsequent auf tatsächliche Kaufabschlüsse (Closed-Won Revenue).
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ARBEITSPHILOSOPHIE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="text-center space-y-3"
        >
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">WIE WIR TICKEN</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Unsere Arbeitsphilosophie</h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="bg-white border border-slate-100 p-8 rounded-3xl space-y-3 shadow-[var(--shadow-premium-sm)]"
          >
            <span className="text-xs font-mono font-bold text-[#686DF4]">PRINZIP 1: DETEKTIV-ARBEIT GEHT DER UMSETZUNG VORAN</span>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Wir verändern kein Marketing-Kampagnen-Konto, bevor wir nicht deine Daten verstanden haben. Erst wenn wir deine Zielgruppe, deinen Lifetime-Value, deinen Sales-Schnitt und deine Pipeline analysiert haben, schlagen wir präzise Hebel vor.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="bg-white border border-slate-100 p-8 rounded-3xl space-y-3 shadow-[var(--shadow-premium-sm)]"
          >
            <span className="text-xs font-mono font-bold text-[#686DF4]">PRINZIP 2: SYSTEMATIC BUILD-OVER-CAMPAIGN-CHAOS</span>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Kreative Marketing-Entwürfe sind toll, aber temporär. Wir bauen langlebige Vermögenswerte (Digital Assets) für dein Unternehmen — zum Beispiel strukturierte HubSpot-Workflows, serverbasierte Custom-Dashboards oder ein lückenloses First-Party Tracking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE GUIDING VALUES */}
      <section className="bg-slate-950 text-white border-y border-slate-900 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="text-center space-y-3 animate-fadeIn"
          >
            <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">WERTE, DIE REVENUE BESTIMMEN</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold tracking-tight">Unsere inneren Leitwerte</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {CORE_VALUES.map((val, k) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={k} 
                  variants={staggeredChildVariants}
                  whileHover={{ y: -4, borderColor: "rgba(104, 109, 244, 0.45)" }}
                  className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl space-y-4 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center border border-slate-800">
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-sm font-bold tracking-tight">{val.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-semibold opacity-90">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* CTA BOTTOM BLOCK */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="bg-slate-950 text-white border border-slate-900 rounded-3xl p-10 md:p-14 text-center space-y-8 shadow-[var(--shadow-premium-lg)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[9px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">JETZT DURCHSTARTEN</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-white leading-tight">Lass uns dein Pipeline-System diagnostizieren</h2>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto opacity-90 font-medium">
            Entscheide nach 30 Minuten, ob du mit uns den Hebel ansetzen willst. Kein Druck, kein aggressiver Vertrieb — nur echte Analysen für dein Wachstum.
          </p>

          <motion.a
            {...buttonPressProps}
            href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest cursor-pointer shadow-[var(--shadow-premium-md)] inline-block text-center"
          >
            Wachstumsgespräch buchen
          </motion.a>
        </div>
      </motion.section>

    </div>
  );
}
