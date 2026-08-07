/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Calendar, 
  Clock, 
  Mail, 
  Linkedin, 
  MapPin, 
  MessageSquare
} from 'lucide-react';
import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { 
  PREMIUM_EASE, 
  DURATIONS 
} from '../lib/motion';

export default function ContactView() {
  const DIRECT_CHANNELS = [
    {
      icon: Mail,
      label: 'DIREKTE E-MAIL',
      value: 'hallo@performanceboost.ch',
      href: 'mailto:hallo@performanceboost.ch'
    },
    {
      icon: Linkedin,
      label: 'LINKEDIN NETZWERK',
      value: 'company/performanceboost',
      href: 'https://linkedin.com/company/performanceboost'
    },
    {
      icon: MapPin,
      label: 'CH-ORGANISATION',
      value: 'Patschär 4 • 7306 Fläsch',
      href: 'https://maps.google.com'
    }
  ];

  const NEXT_STEPS = [
    {
      step: '01',
      title: 'Terminauswahl',
      desc: 'Wähle im Kalender einen passenden 30-Minuten-Zeitraum aus oder sende uns eine Anfrage.'
    },
    {
      step: '02',
      title: 'Kurze Diagnose-Analyse',
      desc: 'Vor unserem Gespräch analysieren wir deine Marktpräsenz, das Tracking und gefundene Pipeline-Lücken.'
    },
    {
      step: '03',
      title: 'Gemeinsames Audit',
      desc: 'Wir präsentieren dir im Web-Call konkrete, messbare Lösungsvorschläge für deine B2B-Anforderungen.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-28 text-slate-800" id="contact-primary-view">
      
      {/* HERO TITLE BLOCK */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-white py-24 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="inline-block text-[10px] font-mono font-bold uppercase text-[#686DF4] tracking-widest bg-[#686DF4]/5 border border-[#686DF4]/10 px-4 py-1.5 rounded-full animate-fadeIn"
          >
            LET'S CONVERT
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.15]"
          >
            Setze den nächsten B2B Wachstumshebel an.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold animate-fadeIn"
          >
            Sichere dir direkt einen Termin für ein B2B-Wachstums-Audit oder sende uns deine individuellen Projekt-Herausforderungen.
          </motion.p>
        </div>
      </section>

      {/* CORE CONTACT LAYOUT: CALENDAR OR FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Form column (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="lg:col-span-12 xl:col-span-7 bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl space-y-8 shadow-[var(--shadow-premium-lg)]"
          id="contact-form-container"
        >
          <div className="space-y-2 border-b border-slate-100 pb-5">
            <h2 className="text-xl font-display font-semibold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#686DF4]" /> Nachricht an Yathur senden
            </h2>
            <p className="text-xs text-slate-450 font-semibold font-mono uppercase tracking-wider">Unkomplizierte Kontaktaufnahme direkt ins Postfach des Inhabers.</p>
          </div>

          <ContactForm formName="Kontaktseite Formular" />
        </motion.div>

        {/* Info Column (5 cols) */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8" id="contact-info-panel">
          
          {/* Direct channels card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-6 shadow-[var(--shadow-premium-sm)]"
          >
            <h3 className="text-sm font-bold text-slate-900 border-l-3 border-[#686DF4] pl-4">Zusätzliche Kontaktkanäle</h3>
            
            <div className="space-y-4">
              {DIRECT_CHANNELS.map((ch, idx) => {
                const IconComp = ch.icon;
                return (
                  <a
                    key={idx}
                    href={ch.href}
                    target={idx === 1 ? "_blank" : undefined}
                    rel={idx === 1 ? "noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#686DF4]/20 hover:bg-[#686DF4]/[0.01] transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-550 flex items-center justify-center shrink-0 group-hover:bg-[#686DF4] group-hover:text-white transition-all">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[8px] font-mono font-bold text-slate-400 uppercase tracking-widest">{ch.label}</span>
                      <span className="block text-xs font-bold text-slate-805 group-hover:text-[#686DF4] transition-colors">{ch.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick FAQ / Next Step timeline card */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="bg-slate-950 text-white border border-slate-900 p-8 rounded-3xl space-y-6 shadow-[var(--shadow-premium-sm)]"
          >
            <h3 className="text-sm font-bold text-white border-l-3 border-[#686DF4] pl-4 font-display">Ablauf der Diagnostic</h3>
            
            <div className="space-y-6 relative pl-4 border-l border-slate-800">
              {NEXT_STEPS.map((ns, idx) => (
                <div key={idx} className="relative space-y-1.5" id={`next-step-${ns.step}`}>
                  {/* Absolute positioning of step dot badge */}
                  <div className="absolute -left-[25px] top-1 w-[18px] h-[18px] bg-slate-950 border-2 border-[#686DF4] rounded-full flex items-center justify-center text-[8px] font-bold text-white font-mono">
                    {idx + 1}
                  </div>
                  
                  <h4 className="text-xs font-bold tracking-tight text-white">{ns.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-normal font-semibold opacity-90">{ns.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
