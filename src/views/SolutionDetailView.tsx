/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useEffect } from 'react';
import { AgentBand } from '../components/system/SystemBlocks';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import { sectorDiagram } from '../data/diagrams';
import { Diagram } from '../components/diagrams/Diagram';
import { CtaButton } from '../components/bp/Blocks';
import { HeroTrust, LeadCtaSection } from '../components/bp/Conversion';
import Link from '../components/Link';
import { 
  ArrowLeft, CheckCircle2, AlertOctagon, HelpCircle, ChevronDown, Check,
  ArrowUpRight, Target, ShieldAlert, KeyRound, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PREMIUM_EASE, DURATIONS, buttonPressProps } from '../lib/motion';

// Import all calculators statically for robust compilation


interface SolutionDetailViewProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function SolutionDetailView({ slug, onNavigate }: SolutionDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sector = SOLUTIONS_SECTORS[slug];

  // Scroll-Position steuert App.tsx (oben bei neuer Seite, gemerkt bei Zurück).

  if (!sector) {
    return (
      <div className="pt-32 pb-24 text-center max-w-md mx-auto space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Lösung nicht gefunden</h2>
        <p className="text-xs text-slate-500">
          Diese Branchenseite gibt es nicht oder sie wurde verschoben.
        </p>
        <button
          onClick={() => onNavigate('/')}
          className="bg-[#686CFA] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full cursor-pointer hover:bg-[#5a5fe0]"
        >
          Zurück zur Startseite
        </button>
      </div>
    );
  }

  const diagram = sectorDiagram(slug, sector.title);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 space-y-20 text-slate-800 bg-canvas" id="solutions-detail-view">
      
      {/* SECTOR HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 bg-surface py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <button
            onClick={() => onNavigate('/loesungen')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] hover:text-[#686CFA]/80 transition-colors uppercase tracking-widest cursor-pointer mb-2 bg-transparent border-none"
          >
            <ArrowLeft className="w-4 h-4" /> Alle Branchen
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="hero-enter lg:col-span-5 space-y-4 pr-0 lg:pr-6">
              <h1 className="text-3xl sm:text-4.5xl font-display font-medium text-slate-955 tracking-tight leading-[1.1]">
                {sector.subtitle}
              </h1>
              <p className="text-slate-500 text-body-lg leading-relaxed font-medium">
                {sector.heroDesc}
              </p>
              
              <div className="pt-2 space-y-4">
                <CtaButton label="Potenzial besprechen" location={`branche_${slug}_hero`} pageSlug={slug} />
                <HeroTrust />
              </div>
            </div>

            {/* Themengrafik (ersetzt den früheren Branchen-Rechner) */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <h2 className="text-lg sm:text-xl font-display font-semibold text-slate-900">{diagram.title}</h2>
                <p className="mt-1.5 text-body-sm text-slate-600 leading-relaxed">{diagram.text}</p>
              </div>
              <Diagram spec={diagram.spec} />
            </div>
          </div>
        </div>
      </section>

      {/* TYPISCHE ENGPAESSE SEKTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-slate-900 tracking-tight">
            Typische Hürden in der Branche {sector.title}
          </h2>
          <p className="text-xs text-slate-500 font-semibold max-w-sm mx-auto">
            Was Wachstum in dieser Branche heute bremst.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sector.problems.map((problem, idx) => (
            <div key={idx} className="bg-surface border border-line/65 p-6 rounded-3xl space-y-3.5 shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-700 flex items-center justify-center font-bold font-mono text-xs mx-auto border border-red-100/40">
                !
              </div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">{problem.title}</h3>
              <p className="text-body-sm text-slate-500 leading-relaxed font-medium">{problem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAS WIR AUFBAUEN SEKTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-deep text-white border border-deep rounded-3xl p-8 sm:p-12 space-y-12 shadow-[var(--shadow-premium-lg)]">
          <div className="text-center space-y-2">
            <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-white tracking-tight">Was wir mit Ihnen aufbauen</h2>
            <p className="text-body-sm text-slate-300 font-medium max-w-md mx-auto">
              Drei Bausteine von der Anfrage bis zum Auftrag. Bei jedem ist festgelegt, was automatisch läuft und wo Ihr Team entscheidet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 text-left">
            {sector.approach.map((step, idx) => (
              <div key={idx} className="space-y-3 relative">
                <span aria-hidden="true" className="absolute -top-3 right-0 text-3xl font-black font-mono text-[#686CFA]/20">
                  {step.step}
                </span>
                <h3 className="text-sm font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-body-sm text-slate-300 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <AgentBand className="mt-6" text="In jedem Schritt arbeiten KI und Agenten mit. Regeln übernehmen das Wiederkehrende, Agenten bereiten vor, Ihr Team entscheidet und gibt frei. Ergebnisse fliessen zurück, und das System wird laufend nachgeschärft." />
        </div>
      </section>

      {/* BENEFITS CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-slate-905 tracking-tight">Was Sie davon haben</h2>
        </div>

        <div className="bg-surface border border-line/65 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5 shadow-sm text-left">
          {sector.benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <p className="text-body-sm text-slate-800 font-semibold leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {sector.related && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {(Array.isArray(sector.related) ? sector.related : [sector.related]).map((rel) => (
          <Link
            key={rel.href}
            href={rel.href}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface border border-line/65 rounded-3xl p-6 sm:p-8 shadow-sm text-left hover:border-[#686CFA]/50 transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30"
          >
            <div className="space-y-1.5">
              <h2 className="text-lg font-display font-semibold text-slate-900 tracking-tight">{rel.title}</h2>
              <p className="text-body-sm text-slate-600 leading-relaxed">{rel.desc}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong shrink-0">
              {rel.linkText} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </Link>
          ))}
        </section>
      )}

      {/* FAQ ACCORDIAN */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-slate-905 tracking-tight">Häufige Fragen</h2>
        </div>

        <div className="bg-surface border border-line/65 rounded-2xl p-5 sm:p-8 space-y-3 shadow-sm text-left">
          {sector.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-100 last:border-none pb-4 last:pb-0 pt-3">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center text-left font-bold text-slate-900 text-sm sm:text-base hover:text-[#686CFA] transition-colors cursor-pointer bg-transparent border-none py-1"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#686CFA] shrink-0" /> {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#686CFA]' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2.5 text-body-sm text-slate-500 leading-relaxed pl-6.5 font-medium">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* ANFRAGE (eingebettetes Formular) */}
      <LeadCtaSection
        title="Wo stehen Sie heute bei der Kundengewinnung?"
        intro="Schildern Sie kurz Ihre Ausgangslage. Sie erhalten innert eines Arbeitstags eine persönliche Antwort und einen Terminvorschlag für ein kostenloses Erstgespräch."
        formLocation={`branche_${slug}`}
      />

    </div>
  );
}
