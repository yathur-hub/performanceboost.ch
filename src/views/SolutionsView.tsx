/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, Check, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import { 
  PREMIUM_EASE, 
  DURATIONS, 
  staggerContainer, 
  staggeredChildVariants, 
  buttonPressProps, 
  hoverLiftProps 
} from '../lib/motion';

interface SolutionsViewProps {
  onNavigate: (path: string) => void;
}

export default function SolutionsView({ onNavigate }: SolutionsViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/kontakt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const WACHSTUMSBEREICHE = [
    {
      num: '01',
      title: 'Wachstumsstrategie',
      desc: 'Bevor wir Massnahmen umsetzen, legen wir die Richtung fest: über welche Kanäle, bei welchen Zielkunden und mit welchem Angebot Ihre neuen Kunden kommen sollen.',
      notText: '«Wir machen eine Kampagne.»',
      butText: '«Das ist Ihr Plan für die Vermarktung in den nächsten 12 Monaten.»',
      path: 'growth-strategy'
    },
    {
      num: '02',
      title: 'Nachfrage aufbauen',
      desc: 'Ihre Zielkunden sollen Sie kennen, bevor der Vertrieb anruft. Wir machen Ihr Angebot über mehrere Kanäle sichtbar und begleiten Interessenten bis zur Anfrage.',
      notText: '«Wir schalten Anzeigen.»',
      butText: '«Wir sorgen für einen stetigen Eingang passender Anfragen.»',
      path: 'demand-generation'
    },
    {
      num: '03',
      title: 'Lead-Generierung',
      desc: 'Aus Interesse werden Anfragen. Wir richten Formulare, Landingpages und Abläufe ein, die Anfragen erfassen, bewerten und automatisch weiterbearbeiten.',
      notText: '«Wir erstellen Inhalte.»',
      butText: '«Wir erstellen Inhalte, die messbar zu Anfragen führen.»',
      path: 'lead-generation'
    },
    {
      num: '04',
      title: 'Marketing-Automation & CRM',
      desc: 'Manuelle Abläufe kosten Zeit und führen zu Fehlern. Wir richten Ihr CRM und automatische Abläufe so ein, dass Ihr Team entlastet wird und Interessenten nicht vergessen gehen.',
      notText: '«Wir richten HubSpot ein.»',
      butText: '«Wir sorgen dafür, dass Interessenten automatisch weiterbegleitet und rechtzeitig an den Vertrieb übergeben werden.»',
      path: 'marketing-automation'
    },
    {
      num: '05',
      title: 'Vertriebsunterstützung',
      desc: 'Vertrieb und Marketing müssen zusammenarbeiten. Wir schaffen gemeinsame Kennzahlen, eine klare Übergabe von Anfragen und Unterlagen für jede Phase des Verkaufs.',
      notText: '«Wir schreiben Verkaufsunterlagen.»',
      butText: '«Wir machen Ihren Vertrieb wirksamer, mit klaren Abläufen statt mehr Aufwand.»',
      path: 'sales-enablement'
    },
    {
      num: '06',
      title: 'Marketing, Vertrieb & Daten verbinden',
      desc: 'Wenn Marketing, Vertrieb und Kundenbetreuung nicht abgestimmt sind, geht Umsatz verloren. Wir schaffen gemeinsame Abläufe, Daten und Systeme für alle Teams.',
      notText: '«Wir optimieren Prozesse.»',
      butText: '«Wir schaffen die Grundlage, auf der Ihr Umsatz planbar wachsen kann.»',
      path: 'revenue-operations'
    },
    {
      num: '07',
      title: 'KI & Automatisierung',
      desc: 'Richtig eingesetzt spart KI Zeit. Wir richten KI-gestützte Abläufe für Recherche, Personalisierung, Texte und Auswertungen ein, dort, wo sie sich lohnen.',
      notText: '«Wir nutzen ChatGPT.»',
      butText: '«Wir setzen KI dort ein, wo sie Ihrem Geschäft messbar hilft.»',
      path: 'ai-automation'
    },
    {
      num: '08',
      title: 'Daten & Auswertung',
      desc: 'Entscheidungen auf Basis von Zahlen statt Bauchgefühl. Wir richten Tracking, Dashboards und Berichte ein, die Ihnen zeigen, was funktioniert und wo Umsatz verloren geht.',
      notText: '«Wir erstellen Berichte.»',
      butText: '«Wir schaffen die Datengrundlage, mit der Sie Wachstum steuern können.»',
      path: 'data-analytics'
    }
  ];

  const COMBINATIONS = [
    {
      title: 'Rasch zu ersten Anfragen',
      combo: 'Nachfrage aufbauen + Lead-Generierung',
      desc: 'Möglichst rasch erste Anfragen gewinnen, mit bezahlten Kampagnen und organischer Sichtbarkeit.',
      timeline: 'Richtwert: erste Daten nach 2–4 Wochen.'
    },
    {
      title: 'Anfragen gewinnen und weiterbegleiten',
      combo: 'Nachfrage aufbauen + Marketing-Automation + CRM',
      desc: 'Nachfrage aufbauen, Interessenten weiterbegleiten, automatisch bewerten und an den Vertrieb übergeben.',
      timeline: 'Richtwert: Aufbau in rund 8–12 Wochen.'
    },
    {
      title: 'Marketing und Vertrieb auf einer Linie',
      combo: 'Marketing, Vertrieb & Daten + Vertriebsunterstützung + Auswertung',
      desc: 'Marketing und Vertrieb arbeiten mit gemeinsamen Zielen, Zahlen und Abläufen.',
      timeline: 'Richtwert: Grundstruktur in rund 6–8 Wochen, danach laufende Optimierung.'
    },
    {
      title: 'Gesamte Vermarktung aus einer Hand',
      combo: 'Wachstumsstrategie + die passenden Leistungen',
      desc: 'Von der Analyse über die Strategie bis zur Umsetzung und laufenden Betreuung.',
      timeline: 'Richtwert: Zusammenarbeit über 12 Monate oder länger.'
    }
  ];

  const FAQS = [
    {
      q: 'Können wir mit einer einzigen Leistung starten?',
      a: 'Ja. Wir empfehlen aber, mit einer kurzen Analyse zu beginnen, damit wir die richtige Priorität setzen. Nicht jede Leistung bringt jedem Unternehmen gleich viel.'
    },
    {
      q: 'Wie lange dauert es, bis wir Resultate sehen?',
      a: 'Das hängt von der Leistung ab. Bei bezahlten Kampagnen sehen Sie meist nach 2–4 Wochen erste Daten und nach 4–8 Wochen belastbare Zahlen. Automatisierung und CRM-Aufbau brauchen in der Regel 6–12 Wochen, bis sie ihre Wirkung zeigen.'
    },
    {
      q: 'Arbeiten Sie mit unseren bestehenden Tools?',
      a: 'Ja. Wir arbeiten mit Ihren bestehenden Tools, etwa HubSpot, Salesforce, Pipedrive oder Google Workspace. Einen Wechsel empfehlen wir nur, wenn er Ihnen wirklich etwas bringt.'
    },
    {
      q: 'Was kostet eine Zusammenarbeit?',
      a: 'Das klären wir im Erstgespräch. Sie erhalten danach eine klare Offerte. Wir arbeiten je nach Bedarf mit Projektpreisen oder einem monatlichen Pauschalbetrag.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-28 text-slate-800" id="solutions-view">
      
      {/* HERO SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 bg-white py-28 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="inline-block text-[11px] font-mono font-bold uppercase text-[#686DF4] tracking-widest bg-[#686DF4]/5 border border-[#686DF4]/10 px-4 py-1.5 rounded-full"
          >
            Branchen und Leistungen
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            Neue Kunden gewinnen, abgestimmt auf Ihre Branche
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-body-lg max-w-xl mx-auto leading-relaxed font-medium"
          >
            Ob Treuhand, Industrie, IT, Immobilien, Gesundheitswesen, Handwerk oder Hotellerie: Wir stellen Ihre Lösung aus den Leistungen zusammen, die in Ihrer Branche wirken. Unten sehen Sie die einzelnen Bausteine und sinnvolle Kombinationen.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.3 }}
            className="pt-6"
          >
            <motion.button
              {...buttonPressProps}
              onClick={() => onNavigate('/kontakt')}
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all cursor-pointer shadow-md inline-block text-center border-0"
            >
              Erstgespräch vereinbaren
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* BRANCHEN-ÜBERSICHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" aria-labelledby="branchen-heading">
        <div className="space-y-3 max-w-2xl">
          <h2 id="branchen-heading" className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-slate-950">
            Ihre Branche
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Neukundengewinnung funktioniert in einer Treuhandkanzlei anders als in einem Handwerksbetrieb. Wählen Sie Ihre Branche,
            um typische Hürden, unser Vorgehen und einen passenden Rechner zu sehen.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.values(SOLUTIONS_SECTORS).map((sector) => (
            <li key={sector.slug}>
              <a
                href={`/loesungen/${sector.slug}`}
                onClick={(e) => {
                  if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                  e.preventDefault();
                  onNavigate(`/loesungen/${sector.slug}`);
                }}
                className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#686DF4]/50 hover:shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30"
              >
                <span className="space-y-1">
                  <span className="block font-display font-semibold text-slate-950 group-hover:text-[#4f54d6]">{sector.title}</span>
                  <span className="block text-sm text-slate-600 leading-snug">{sector.subtitle}</span>
                </span>
                <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-slate-400 group-hover:text-[#686DF4]" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* POSITIONIERUNGS-SEKTION */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-950 text-white border border-slate-900 rounded-3xl p-10 md:p-14 relative overflow-hidden space-y-6 text-center shadow-[var(--shadow-premium-lg)]">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#686DF4] uppercase">Zuerst die Analyse</span>
          <blockquote className="text-body-lg sm:text-xl font-bold leading-relaxed max-w-2xl mx-auto italic opacity-95">
            «Viele Unternehmen fragen zuerst nach dem richtigen Kanal oder Tool. Wichtiger ist, wo heute passende Anfragen verloren gehen, warum Interessenten nicht zu Kunden werden und wie Wachstum planbar wird.»
          </blockquote>
          <p className="text-[11px] text-slate-400 font-mono tracking-wide uppercase">
            Darum beginnen wir mit einer Analyse Ihrer Situation, nicht mit einem Pauschalangebot.
          </p>
        </div>
      </motion.section>

      {/* WACHSTUMSBEREICHE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="text-center space-y-3"
        >
          <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">Leistungen</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Unsere Leistungsbereiche</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {WACHSTUMSBEREICHE.map((item) => (
            <motion.div 
              key={item.num} 
              variants={staggeredChildVariants}
              whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.35)" }}
              className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl flex flex-col justify-between shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)] transition-all duration-300 group"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono font-bold bg-[#f6f6f6] text-slate-400 px-3 py-1 rounded-lg border border-slate-200/50 group-hover:bg-[#686DF4]/5 group-hover:text-[#686DF4] group-hover:border-[#686DF4]/20 transition-all duration-300">
                    {item.num}
                  </span>
                  <button 
                    onClick={() => {
                      onNavigate(`/leistungen/${item.path}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[11px] text-[#686DF4] hover:text-[#686DF4]/80 font-bold tracking-wide transition-colors cursor-pointer bg-transparent border-none"
                  >
                    Details →
                  </button>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors">{item.title}</h3>
                <p className="text-body-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 space-y-3.5">
                <div className="text-[11px]">
                  <span className="block text-slate-400 font-bold uppercase tracking-widest leading-none mb-1.5 font-mono">Nicht:</span>
                  <span className="text-red-700 font-bold block bg-red-50/40 px-2 py-1 rounded border border-red-100/30 line-through">{item.notText}</span>
                </div>
                <div className="text-[11px]">
                  <span className="block text-slate-400 font-bold uppercase tracking-widest leading-none mb-1.5 font-mono">Sondern:</span>
                  <span className="text-[#686DF4] font-bold block bg-[#686DF4]/5 px-2 py-1 rounded border border-[#CACCFB]/20">{item.butText}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* COMBINATIONS SECTION */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="text-center space-y-3"
          >
            <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">Kombinationen</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-medium text-slate-900 tracking-tight">Kombinationen, die funktionieren</h2>
            <p className="text-body-sm text-slate-500 leading-relaxed max-w-lg mx-auto font-medium">
              Einzelne Leistungen wirken für sich. Sinnvoll kombiniert verstärken sie sich gegenseitig.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {COMBINATIONS.map((c, idx) => (
              <motion.div 
                key={idx} 
                variants={staggeredChildVariants}
                whileHover={{ y: -4, borderColor: "rgba(104, 109, 244, 0.2)" }}
                className="bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl flex flex-col justify-between shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] transition-all duration-300"
              >
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">{c.combo}</span>
                    <h3 className="text-lg font-bold text-slate-900 font-display">{c.title}</h3>
                  </div>
                  <p className="text-body-sm text-slate-500 leading-relaxed font-medium">{c.desc}</p>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold tracking-wide bg-slate-50 border border-slate-150 px-3 py-1.5 rounded-lg">
                    {c.timeline}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="text-center space-y-3"
        >
          <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest">Fragen und Antworten</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Häufig gestellte Fragen</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
          className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 md:p-10 space-y-4 shadow-[var(--shadow-premium-sm)]"
        >
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0 pt-4 first:pt-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left py-2 font-bold text-slate-805 text-sm sm:text-base hover:text-[#686DF4] transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4.5 h-4.5 text-[#686DF4] shrink-0" /> {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#686DF4]' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-body-sm text-slate-500 leading-relaxed pl-7 font-medium">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
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
          <span className="text-[11px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">Erstgespräch</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-white leading-tight">Welche Lösung passt zu Ihrem Unternehmen?</h2>
          <p className="text-body text-slate-300 leading-relaxed max-w-xl mx-auto opacity-90 font-medium">
            In einem unverbindlichen Gespräch von 30 Minuten klären wir Ihre Ausgangslage und Ziele. Danach wissen Sie, welche Massnahmen für Ihr Unternehmen am meisten bringen.
          </p>

          <motion.button
            {...buttonPressProps}
            onClick={() => onNavigate('/kontakt')}
            className="bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest cursor-pointer shadow-[var(--shadow-premium-md)] inline-block text-center border-0"
          >
            Erstgespräch vereinbaren
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
}
