/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ChevronDown, Check, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
      title: 'Growth Strategy',
      desc: 'Bevor Massnahmen umgesetzt werden, braucht es eine Richtung. Wir definieren, wo dein Wachstum herkommt — welche Kanäle, welche Zielgruppen, welche Hebel.',
      notText: '"Wir machen eine Kampagne."',
      butText: '"Das ist dein Go-to-Market-Plan für die nächsten 12 Monate."',
      path: 'growth-strategy'
    },
    {
      num: '02',
      title: 'Demand Generation',
      desc: 'Qualifizierte Nachfrage erzeugen, bevor der Vertrieb anruft. Multi-Channel Strategien, die deine Zielgruppe systematisch auf dich aufmerksam machen und durch den Funnel begleiten.',
      notText: '"Wir schalten Ads."',
      butText: '"Wir bauen eine Maschine, die konstant qualifizierte Pipeline liefert."',
      path: 'demand-generation'
    },
    {
      num: '03',
      title: 'Lead Generation',
      desc: 'Aus Interesse Anfragen machen. Aus Anonymen Qualifizierten. Strategien und Systeme, die Leads erfassen, bewerten und entwickeln — automatisiert.',
      notText: '"Wir erstellen Content."',
      butText: '"Wir bauen Content-Systeme, die messbar Leads erzeugen."',
      path: 'lead-generation'
    },
    {
      num: '04',
      title: 'Marketing Automation & CRM',
      desc: 'Manuelle Prozesse kosten Zeit und erzeugen Fehler. Wir implementieren Automation-Workflows und CRM-Strukturen, die dein Team entlasten und Lead-Nurturing skalieren.',
      notText: '"Wir richten HubSpot ein."',
      butText: '"Wir bauen ein System, das Leads automatisch entwickelt und übergabebereit macht."',
      path: 'marketing-automation'
    },
    {
      num: '05',
      title: 'Sales Enablement',
      desc: 'Vertrieb und Marketing müssen zusammenarbeiten. Wir bauen die Brücke: Gemeinsame Metriken, Übergabeprozesse, Content für jede Phase des Sales-Zyklus.',
      notText: '"Wir schreiben Verkaufsunterlagen."',
      butText: '"Wir machen deinen Vertrieb effektiver — mit Systemen, nicht mit mehr Aufwand."',
      path: 'sales-enablement'
    },
    {
      num: '06',
      title: 'Revenue Operations',
      desc: 'Wenn Marketing, Sales und Customer Success nicht koordiniert sind, verlierst du Revenue. Wir bauen die operativen Grundlagen: Prozesse, Daten, Systeme, die alle Teams verbinden.',
      notText: '"Wir optimieren Prozesse."',
      butText: '"Wir bauen das Betriebssystem für dein Revenue-Wachstum."',
      path: 'revenue-operations'
    },
    {
      num: '07',
      title: 'AI & Automation',
      desc: 'AI ist kein Hype — es ist ein Produktivitätshebel. Wir implementieren AI-gestützte Workflows, die Recherche, Personalisierung, Content und Analyse beschleunigen. Sinnvoll eingesetzt, nicht wahllos.',
      notText: '"Wir nutzen ChatGPT."',
      butText: '"Wir integrieren AI dort, wo sie messbaren Einfluss auf dein Wachstum hat."',
      path: 'ai-automation'
    },
    {
      num: '08',
      title: 'Data & Analytics',
      desc: 'Entscheidungen auf Basis von Daten treffen. Wir bauen Dashboards, Tracking-Strukturen und Reporting-Systeme, die dir genau zeigen, was funktioniert — und wo Revenue verloren geht.',
      notText: '"Wir erstellen Reports."',
      butText: '"Wir bauen die Datenbasis, die Wachstum steuerbar macht."',
      path: 'data-analytics'
    }
  ];

  const COMBINATIONS = [
    {
      title: 'Schnelle Pipeline-Generierung',
      combo: 'Demand Generation + Lead Generation',
      desc: 'Sofort Leads in die Pipeline bringen. Organisch und Paid kombiniert.',
      timeline: 'Timeline: Erste Leads in 2-4 Wochen.'
    },
    {
      title: 'Skalierbare Wachstumsmaschine',
      combo: 'Demand Generation + Marketing Automation + CRM',
      desc: 'Demand erzeugen, Leads nurturen, automatisch qualifizieren und übergeben.',
      timeline: 'Timeline: Vollständig operativ in 8-12 Wochen.'
    },
    {
      title: 'Revenue-Alignment',
      combo: 'Revenue Operations + Sales Enablement + Data & Analytics',
      desc: 'Marketing und Sales auf gemeinsame Ziele ausrichten. Aus zwei Silos ein System.',
      timeline: 'Timeline: Grundstruktur in 6-8 Wochen, Optimierung laufend.'
    },
    {
      title: 'Komplettes Go-to-Market System',
      combo: 'Growth Strategy + alle relevanten Leistungen kombiniert',
      desc: 'Strategie zu Umsetzung. Von der Diagnose bis zur skalierbaren Pipeline.',
      timeline: 'Timeline: 12+ Monate kontinuierliche Zusammenarbeit.'
    }
  ];

  const FAQS = [
    {
      q: 'Können wir mit einer einzigen Leistung starten?',
      a: 'Ja. Wir empfehlen aber, mit einer klaren Diagnose zu beginnen — damit wir die richtige Priorität setzen. Nicht alle Leistungen haben für jedes Unternehmen die gleiche Wirkung.'
    },
    {
      q: 'Wie lange dauert es, bis wir Resultate sehen?',
      a: 'Das hängt von der Leistung ab. Demand Generation mit Paid Media zeigt erste Daten in 2-4 Wochen. Marketing Automation und Revenue Operations brauchen 6-12 Wochen für vollen Impact. Wir setzen realistische Erwartungen — immer.'
    },
    {
      q: 'Arbeitet ihr mit unserem bestehenden Tech-Stack?',
      a: 'Ja. Wir integrieren uns in deine bestehende Infrastruktur — HubSpot, Salesforce, Pipedrive, Google Workspace oder was du verwendest. Kein erzwungener Tool-Wechsel.'
    },
    {
      q: 'Was kostet eine Zusammenarbeit?',
      a: 'Das klären wir im ersten Gespräch. Transparent, keine versteckten Kosten. Wir arbeiten mit projekt- und retainerbasiertem Modell — je nach Bedarf.'
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
            className="inline-block text-[10px] font-mono font-bold uppercase text-[#686DF4] tracking-widest bg-[#686DF4]/5 border border-[#686DF4]/10 px-4 py-1.5 rounded-full"
          >
            UNSER LÖSUNGS-FRAMEWORK
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            Dein Wachstumsproblem bestimmt die Lösung — nicht andersrum.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold"
          >
            Wir bauen Revenue-Systeme für B2B-Unternehmen. Kein Vollservice-Chaos — sondern fokussierte Strategien, die dein spezifisches Problem direkt anpacken.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.3 }}
            className="pt-6"
          >
            <motion.a
              {...buttonPressProps}
              href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all cursor-pointer shadow-md inline-block text-center"
            >
              Wachstumsgespräch buchen
            </motion.a>
          </motion.div>
        </div>
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
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#686DF4] uppercase">DIAGNOSE ZUERST</span>
          <blockquote className="text-lg sm:text-xl font-bold leading-relaxed max-w-2xl mx-auto italic opacity-95">
            "Die meisten Unternehmen suchen nach einem Kanal. Einer Plattform. Einem Tool. Das ist die falsche Frage. Die richtige Frage ist: Wo verlieren wir qualifizierte Leads? Warum konvertiert unsere Pipeline nicht? Wie machen wir Wachstum planbar?"
          </blockquote>
          <p className="text-[10px] text-slate-400 font-mono tracking-wide uppercase">
            Wir starten genau dort — nicht mit einem Pauschalangebot, sondern mit einer professionellen Diagnose.
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
          <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">DIE SYSTEMBAUSTEINE</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Unsere Wachstumsbereiche</h2>
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
                  <span className="text-[10px] font-mono font-bold bg-[#f6f6f6] text-slate-400 px-3 py-1 rounded-lg border border-slate-200/50 group-hover:bg-[#686DF4]/5 group-hover:text-[#686DF4] group-hover:border-[#686DF4]/20 transition-all duration-300">
                    {item.num}
                  </span>
                  <button 
                    onClick={() => {
                      onNavigate(`/leistungen/${item.path}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[10px] text-[#686DF4] hover:text-[#686DF4]/80 font-bold tracking-wide transition-colors cursor-pointer bg-transparent border-none"
                  >
                    Details →
                  </button>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">{item.desc}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 space-y-3.5">
                <div className="text-[10px]">
                  <span className="block text-slate-400 font-bold uppercase tracking-widest leading-none mb-1.5 font-mono">NICHT:</span>
                  <span className="text-red-600 font-bold block bg-red-50/40 px-2 py-1 rounded border border-red-100/30 line-through">{item.notText}</span>
                </div>
                <div className="text-[10px]">
                  <span className="block text-slate-400 font-bold uppercase tracking-widest leading-none mb-1.5 font-mono">SONDERN:</span>
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
            <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">SYNERGIEN MAXIMIEREN</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-medium text-slate-900 tracking-tight">Kombinationen, die funktionieren</h2>
            <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto font-semibold">
              Einzelne Leistungen haben Wirkung. Intelligent verknüpft entfalten sie ihre volle Hebelwirkung.
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
                    <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">{c.combo}</span>
                    <h3 className="text-lg font-bold text-slate-900 font-display">{c.title}</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{c.desc}</p>
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
          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">FRAGEN & ANTWORTEN</span>
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
                className="w-full flex justify-between items-center text-left py-2 font-bold text-slate-805 text-xs sm:text-sm hover:text-[#686DF4] transition-colors cursor-pointer"
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
                    <p className="mt-3 text-xs text-slate-500 leading-relaxed pl-7 font-medium">
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
          <span className="text-[9px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">MEHR ERFAHREN</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-white leading-tight">Welche Lösung braucht dein Unternehmen?</h2>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto opacity-90 font-medium">
            30 Minuten unverbindliches Gespräch. Wir hören zu, stellen die richtigen strategischen Fragen — und empfehlen die wirkungsvollsten Hebel für dein Geschäftsmodell.
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
