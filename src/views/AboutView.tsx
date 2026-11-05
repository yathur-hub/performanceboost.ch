/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LeadCtaSection } from '../components/bp/Conversion';
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
      title: 'Transparenz',
      desc: 'Sie sehen, wofür Ihr Budget eingesetzt wird, was es bringt und was nicht. Werbekonten und Auswertungen sind für Sie jederzeit einsehbar.'
    },
    {
      icon: RefreshCw,
      title: 'Umsetzen, dann verbessern',
      desc: 'Ein Konzept in der Schublade bringt keine Ergebnisse. Wir bringen Massnahmen zügig live und verbessern sie anhand echter Zahlen.'
    },
    {
      icon: Award,
      title: 'Passende Anfragen statt viele',
      desc: 'Zehn Anfragen von Unternehmen, die zu Ihrem Angebot passen, sind mehr wert als hundert, die Ihr Team nur Zeit kosten.'
    },
    {
      icon: Cpu,
      title: 'Technik, die mitarbeitet',
      desc: 'CRM, Tracking, Automatisierung und KI-Werkzeuge setzen wir dort ein, wo sie Ihnen Arbeit abnehmen, nicht um ihrer selbst willen.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 md:space-y-28 text-slate-800" id="about-us-view">
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-white pt-12 pb-16 md:py-28 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            Ihr Business Performance Partner aus Graubünden.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold"
          >
            performanceboost ist inhabergeführt und hat seinen Sitz in Fläsch. Wir helfen Schweizer KMU, ihre Performance in Marketing, Vertrieb und Abläufen zu verbessern, und verbinden dafür Strategie, Technologie und Umsetzung. We boost business performance.
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
          <h2 className="text-2.5xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight leading-snug">Zwischen Strategie, Systemen und Auftrag geht zu viel verloren.</h2>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            Viele KMU investieren in Werbung, eine neue Website, ein CRM oder KI-Tools, aber die Teile arbeiten nicht zusammen. Die Agentur optimiert Klicks, das CRM bildet den Verkauf nicht ab, Daten werden von Hand übertragen und Anfragen zu spät beantwortet. Am Ende weiss niemand, was die Investitionen tatsächlich gebracht haben.
          </p>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            performanceboost betrachtet deshalb die ganze Strecke: von der Strategie über Systeme und Abläufe bis zu Marketing, Vertrieb und Messung. Erst wenn diese Kette funktioniert, lohnt es sich, mehr Budget oder neue Tools einzusetzen.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl space-y-6 shadow-[var(--shadow-premium-md)]"
        >
          <h3 className="text-sm font-bold text-slate-900 border-l-3 border-[#686DF4] pl-4">Auf einen Blick</h3>
          
          <div className="space-y-5">
            <div className="pb-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Sitz</span>
              <span className="text-xs font-mono font-bold text-slate-900">Fläsch, Graubünden</span>
            </div>
            
            <div className="pb-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Ansprechpartner</span>
              <span className="text-xs font-mono font-bold text-slate-900">Yathur Nathan, Inhaber</span>
            </div>

            <div className="pb-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Schwerpunkt</span>
              <span className="text-xs font-mono font-bold text-[#686DF4]">Strategy · Technology · Growth</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Arbeitsweise</span>
              <span className="text-xs font-mono font-bold text-emerald-600">Analyse, Umsetzung, laufende Auswertung</span>
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
          <img loading="lazy" decoding="async" 
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
          <h2 className="text-2.5xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight leading-snug">Über Yathur Nathan</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
            <p>
              Ich unterstütze Schweizer KMU dabei, ihre Unternehmensperformance zu verbessern: mehr passende Kunden, effizientere Abläufe und Zahlen, auf die man sich verlassen kann. Dafür verbinde ich Strategie, Performance Marketing, Webentwicklung, Daten und Automatisierung, Aufgaben, die sonst oft auf mehrere Dienstleister verteilt sind und dabei aneinander vorbeilaufen.
            </p>
            <p>
              In den vergangenen Jahren habe ich mit Unternehmen aus unterschiedlichen Branchen gearbeitet, vom Onlineshop über Beratungsunternehmen bis zum Dienstleister, für den ich Website und ERP-System entwickelt habe. Dabei hat sich immer wieder gezeigt: Gute Ergebnisse entstehen nicht durch eine einzelne Kampagne oder ein neues Tool, sondern wenn Strategie, Systeme, Abläufe und Messung zusammenpassen. Als Kunde arbeiten Sie direkt mit mir, vom Erstgespräch bis zur Auswertung.
            </p>
          </div>
        </motion.div>
      </section>

      {/* WAS UNS UNTERSCHEIDET */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="text-center space-y-3"
          >
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
              <h3 className="text-sm font-bold text-slate-900">Klare Etappen statt Pauschale ohne Ergebnis</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Wir arbeiten in nachvollziehbaren Etappen. Sie sehen in jeder Phase, was aufgebaut, getestet und live geschaltet wurde und was es bewirkt hat.
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
              <h3 className="text-sm font-bold text-slate-900">Strategie und Umsetzung aus einer Hand</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Strategie, Systeme, Automatisierungen, Tracking und Kampagnen kommen aus einer Hand. Dadurch gehen bei Übergaben keine Informationen verloren, und Sie haben einen einzigen Ansprechpartner.
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
              <h3 className="text-sm font-bold text-slate-900">Gemessen an Ihren Geschäftszahlen</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Reichweite, Klicks oder ein neues Tool sind kein Ziel an sich. Wir messen unsere Arbeit an dem, was für Ihr Unternehmen zählt: Anfragen, Aufträge, Reaktionszeiten oder eingesparte Stunden.
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
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Wie wir vorgehen</h2>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="bg-white border border-slate-100 p-8 rounded-3xl space-y-3 shadow-[var(--shadow-premium-sm)]"
          >
            <span className="text-xs font-mono font-bold text-[#686DF4]">Grundsatz 1: Erst verstehen, dann handeln</span>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Bevor wir Massnahmen oder Tools empfehlen, verstehen wir Ihr Geschäft: Wer sind Ihre besten Kunden, was ist ein Auftrag wert, wie laufen Verkauf und Abläufe heute? Software wählen wir erst, wenn klar ist, was sie abbilden soll.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="bg-white border border-slate-100 p-8 rounded-3xl space-y-3 shadow-[var(--shadow-premium-sm)]"
          >
            <span className="text-xs font-mono font-bold text-[#686DF4]">Grundsatz 2: Aufbauen, was bleibt</span>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Eine einzelne Kampagne läuft irgendwann aus. Wir bauen zusätzlich Dinge auf, die Ihnen langfristig gehören: saubere Daten, CRM-Abläufe, Automatisierungen, Landingpages und Auswertungen. Alles ist dokumentiert, damit Ihr Team damit weiterarbeiten kann.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE GUIDING VALUES */}
      <section className="bg-slate-950 text-white border-y border-slate-900 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="text-center space-y-3 animate-fadeIn"
          >
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold tracking-tight text-white">Worauf Sie sich verlassen können</h2>
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
                  whileHover={{ y: -4, borderColor: "rgba(104, 109, 244, 0.55)" }}
                  className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#686DF4]/20 text-[#A0A3F9] flex items-center justify-center border border-slate-700/70">
                    <IconComp className="w-5 h-5 text-[#A0A3F9]" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-white">{val.title}</h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      <LeadCtaSection formLocation="ueber_uns" title="Lernen wir uns kennen." />

    </div>
  );
}
