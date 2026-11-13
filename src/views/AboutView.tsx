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
  };

  const CORE_VALUES = [
    {
      icon: Eye,
      title: 'Transparenz',
      desc: 'Sie sehen, was das System tut und was es bringt. Protokolle, Kennzahlen, Werbekonten und Auswertungen sind für Sie jederzeit einsehbar.'
    },
    {
      icon: RefreshCw,
      title: 'Umsetzen, dann verbessern',
      desc: 'Wir bringen Abläufe früh in Betrieb, zuerst so, dass Agenten nur vorschlagen, und verbessern sie anhand der Zahlen, die tatsächlich hereinkommen.'
    },
    {
      icon: Award,
      title: 'Passende Anfragen statt viele',
      desc: 'Zehn Anfragen von Unternehmen, die zu Ihrem Angebot passen, sind mehr wert als hundert, die Ihr Team nur Zeit kosten.'
    },
    {
      icon: Cpu,
      title: 'Technik, die mitarbeitet',
      desc: 'Wir planen Abläufe so, dass Automatisierung und KI von Anfang an Teil davon sind. Eingesetzt wird, was Ihnen verlässlich Arbeit abnimmt, oft eine einfache Regel und wo es sich lohnt ein Agent.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 md:space-y-28 text-slate-800" id="about-us-view">
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-white pt-12 pb-16 md:py-28 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#686CFA]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            Ein AI-First-Scaling-Partner, der selbst baut und betreibt.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold"
          >
            performanceboost baut mit Schweizer KMU Systeme für Marketing, Vertrieb und Abläufe, die auf KI aufbauen. Dahinter steht Yathur Nathan, Marketingfachmann mit eidgenössischem Fachausweis und Experte für MarTech und KI. Daten, Integrationen und KI-Agenten baut er selbst, und das eigene Unternehmen läuft auf denselben Systemen. performanceboost ist inhabergeführt und hat seinen Sitz in Fläsch.
          </motion.p>
        </div>
      </section>

      {/* WARUM PERFORMANCEBOOST? */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div 
          className="space-y-6"
        >
          <h2 className="text-2.5xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight leading-snug">Zwischen Strategie, Systemen und Auftrag geht zu viel verloren.</h2>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            Viele KMU investieren in Werbung, eine neue Website, ein CRM oder KI-Tools, aber die Teile arbeiten nicht zusammen. Die Agentur optimiert Klicks, das CRM bildet den Verkauf nicht ab, Daten werden von Hand übertragen und Anfragen zu spät beantwortet. Am Ende weiss niemand, was die Investitionen tatsächlich gebracht haben.
          </p>
          <p className="text-xs text-slate-550 leading-relaxed font-semibold">
            Deshalb baut performanceboost die ganze Kette als ein System, das auf KI aufbaut, von den Daten über Marketing und Vertrieb bis zur Messung. Erst dann kann ein Unternehmen wachsen, ohne dass die Handarbeit im gleichen Mass mitwächst.
          </p>
        </div>

        <div 
          className="bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl space-y-6 shadow-[var(--shadow-premium-md)]"
        >
          <h3 className="text-sm font-bold text-slate-900 border-l-3 border-[#686CFA] pl-4">Auf einen Blick</h3>
          
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
              <span className="text-xs font-mono font-bold text-[#686CFA] text-right">MarTech · KI in Marketing & Growth</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-500 font-semibold">Arbeitsweise</span>
              <span className="text-xs font-mono font-bold text-emerald-600">Analyse, Umsetzung, laufende Auswertung</span>
            </div>
          </div>
        </div>
      </section>

      {/* PERSÖNLICHE VISION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div 
          className="md:col-span-5 relative group"
        >
          <div className="absolute -inset-2 bg-[#686CFA]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
          <img loading="lazy" decoding="async" 
            src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
            alt="Yathur Nathan" 
            className="w-full h-auto aspect-[4/5] object-cover rounded-3xl border border-[#E0E0E0]/65 shadow-[var(--shadow-premium-md)] relative z-10"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="md:col-span-7 space-y-6 text-left"
        >
          <h2 className="text-2.5xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight leading-snug">Über Yathur Nathan</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
            <p>
              Ich bin Marketer und baue die Technik dahinter selbst. Angefangen habe ich im Performance Marketing, mit Search, Shopping, Performance Max, Video und Social Ads. Heute arbeite ich vor allem dort, wo Marketing auf Technologie trifft, also an CRM-Datenmodellen, Tracking im Browser und auf dem Server, Integrationen über APIs und Workflows, Webentwicklung und KI-Agenten, die mit klaren Rechten Schritte in Abläufen übernehmen.
            </p>
            <p>
              In vielen Unternehmen sind diese Aufgaben auf mehrere Dienstleister verteilt, und an den Übergaben geht Wissen verloren. Bei mir liegen sie bei einer Person, und ich setze sie selbst um. Was ich empfehle, habe ich meistens zuerst selbst gebaut und betrieben, vom eigenen ERP bis zum Lead-Eingang ohne Abtippen. Gemessen wird die Arbeit an Anfragen, Aufträgen und eingesparten Stunden. Als Kunde arbeiten Sie direkt mit mir, vom Erstgespräch bis zur Auswertung.
            </p>
            <div className="border-t border-slate-200 pt-4">
              <p className="text-slate-900 font-bold">Ausbildung und Zertifikate</p>
              <ul className="mt-2 space-y-1.5">
                <li>Marketingfachmann mit eidgenössischem Fachausweis</li>
                <li>MBA, Kalaidos Fachhochschule (laufend)</li>
                <li>CAS Management agiler Projekte, Kalaidos Fachhochschule (laufend)</li>
                <li>Google-Zertifizierungen Search Ads 360 und Display & Video 360</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-xs font-bold">
              <a href="/martech" onClick={(e) => { e.preventDefault(); onNavigate('/martech'); }} className="text-[#686CFA] hover:text-[#4f54d6]">MarTech-Wissen →</a>
              <a href="/werkzeuge" onClick={(e) => { e.preventDefault(); onNavigate('/werkzeuge'); }} className="text-[#686CFA] hover:text-[#4f54d6]">Werkzeuge →</a>
              <a href="/labor" onClick={(e) => { e.preventDefault(); onNavigate('/labor'); }} className="text-[#686CFA] hover:text-[#4f54d6]">Labor →</a>
            </div>
          </div>
        </div>
      </section>

      {/* WAS UNS UNTERSCHEIDET */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div 
            className="text-center space-y-3"
          >
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Was performanceboost unterscheidet</h2>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#686CFA]/5 text-[#686CFA] flex items-center justify-center border border-[#CBCBFC]/20">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Klare Etappen statt Pauschale ohne Ergebnis</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Wir arbeiten in nachvollziehbaren Etappen. Sie sehen in jeder Phase, was aufgebaut, getestet und live geschaltet wurde und was es bewirkt hat.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#686CFA]/5 text-[#686CFA] flex items-center justify-center border border-[#CBCBFC]/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Wer plant, setzt auch um</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Strategie, Systeme, Automatisierungen, Tracking und Kampagnen liegen bei derselben Person. So gehen bei Übergaben keine Informationen verloren, und Sie haben einen Ansprechpartner für alles.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#686CFA]/5 text-[#686CFA] flex items-center justify-center border border-[#CBCBFC]/20">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Gemessen an Ihren Geschäftszahlen</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                Reichweite, Klicks oder ein neues Tool sind kein Ziel an sich. Wir messen unsere Arbeit an dem, was für Ihr Unternehmen zählt: Anfragen, Aufträge, Reaktionszeiten oder eingesparte Stunden.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ARBEITSPHILOSOPHIE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div 
          className="text-center space-y-3"
        >
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Wie wir vorgehen</h2>
        </div>

        <div className="space-y-6">
          <div 
            className="bg-white border border-slate-100 p-8 rounded-3xl space-y-3 shadow-[var(--shadow-premium-sm)]"
          >
            <span className="text-xs font-mono font-bold text-[#686CFA]">Zuerst das Geschäft verstehen, dann Werkzeuge wählen</span>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Bevor wir Massnahmen oder Tools empfehlen, verstehen wir Ihr Geschäft: Wer sind Ihre besten Kunden, was ist ein Auftrag wert, wie laufen Verkauf und Abläufe heute? Software wählen wir erst, wenn klar ist, was sie abbilden soll.
            </p>
          </div>

          <div 
            className="bg-white border border-slate-100 p-8 rounded-3xl space-y-3 shadow-[var(--shadow-premium-sm)]"
          >
            <span className="text-xs font-mono font-bold text-[#686CFA]">Grundlagen aufbauen, die bleiben</span>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
              Eine einzelne Kampagne läuft irgendwann aus. Wir bauen deshalb auch auf, was Ihnen langfristig bleibt: saubere Daten, CRM-Abläufe, Automatisierungen, Landingpages und Auswertungen. Alles ist dokumentiert, damit Ihr Team damit weiterarbeiten kann.
            </p>
          </div>
        </div>
      </section>

      {/* CORE GUIDING VALUES */}
      <section className="bg-slate-950 text-white border-y border-slate-900 py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div 
            className="text-center space-y-3 animate-fadeIn"
          >
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold tracking-tight text-white">Worauf Sie sich verlassen können</h2>
          </div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {CORE_VALUES.map((val, k) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={k} 
                  whileHover={{ y: -4, borderColor: "rgba(104, 109, 244, 0.55)" }}
                  className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#686CFA]/20 text-[#A0A3F9] flex items-center justify-center border border-slate-700/70">
                    <IconComp className="w-5 h-5 text-[#A0A3F9]" />
                  </div>
                  <h3 className="text-base font-bold tracking-tight text-white">{val.title}</h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <LeadCtaSection formLocation="ueber_uns" title="Lernen wir uns kennen." visual="balance" />

    </div>
  );
}
