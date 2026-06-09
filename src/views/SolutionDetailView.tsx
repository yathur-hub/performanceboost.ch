/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useState, useEffect } from 'react';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import { 
  ArrowLeft, CheckCircle2, AlertOctagon, HelpCircle, ChevronDown, Check,
  ArrowUpRight, Target, ShieldAlert, KeyRound, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PREMIUM_EASE, DURATIONS, buttonPressProps } from '../lib/motion';

// Import all calculators statically for robust compilation
import BeratungsPipelineRechner from '../components/hero-tools/BeratungsPipelineRechner';
import SaasRevenueLeckRechner from '../components/hero-tools/SaasRevenueLeckRechner';
import LeerstandskostenRechner from '../components/hero-tools/LeerstandskostenRechner';
import KanzleiWachstumsCheck from '../components/hero-tools/KanzleiWachstumsCheck';
import AngebotsPipelineRechner from '../components/hero-tools/AngebotsPipelineRechner';
import RecurringRevenuePotenzialRechner from '../components/hero-tools/RecurringRevenuePotenzialRechner';
import ProjektpipelineCheck from '../components/hero-tools/ProjektpipelineCheck';
import PlacementEffizienzRechner from '../components/hero-tools/PlacementEffizienzRechner';
import KursFunnelRechner from '../components/hero-tools/KursFunnelRechner';
import NeupatientenPotenzialCheck from '../components/hero-tools/NeupatientenPotenzialCheck';
import AuftragsPipelineRechner from '../components/hero-tools/AuftragsPipelineRechner';
import KanzleiAuslastungsCheck from '../components/hero-tools/KanzleiAuslastungsCheck';
import FlottenauslastungsRechner from '../components/hero-tools/FlottenauslastungsRechner';
import DirektbuchungsRechner from '../components/hero-tools/DirektbuchungsRechner';

const CALCULATOR_MAP: { [key: string]: React.ComponentType | any } = {
  'BeratungsPipelineRechner': BeratungsPipelineRechner,
  'SaasRevenueLeckRechner': SaasRevenueLeckRechner,
  'LeerstandskostenRechner': LeerstandskostenRechner,
  'KanzleiWachstumsCheck': KanzleiWachstumsCheck,
  'AngebotsPipelineRechner': AngebotsPipelineRechner,
  'RecurringRevenuePotenzialRechner': RecurringRevenuePotenzialRechner,
  'ProjektpipelineCheck': ProjektpipelineCheck,
  'PlacementEffizienzRechner': PlacementEffizienzRechner,
  'KursFunnelRechner': KursFunnelRechner,
  'NeupatientenPotenzialCheck': NeupatientenPotenzialCheck,
  'AuftragsPipelineRechner': AuftragsPipelineRechner,
  'KanzleiAuslastungsCheck': KanzleiAuslastungsCheck,
  'FlottenauslastungsRechner': FlottenauslastungsRechner,
  'DirektbuchungsRechner': DirektbuchungsRechner,
};

interface SolutionDetailViewProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function SolutionDetailView({ slug, onNavigate }: SolutionDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sector = SOLUTIONS_SECTORS[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!sector) {
    return (
      <div className="pt-32 pb-24 text-center max-w-md mx-auto space-y-6">
        <h2 className="text-xl font-bold text-slate-900">Lösung nicht gefunden</h2>
        <p className="text-xs text-slate-500">
          Die gesuchte Branchenlösung existiert leider nicht oder wurde verschoben.
        </p>
        <button
          onClick={() => onNavigate('/')}
          className="bg-[#686DF4] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full cursor-pointer"
        >
          Zurück zur Startseite
        </button>
      </div>
    );
  }

  const ActiveCalculator = CALCULATOR_MAP[sector.calculatorComponent];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-24 pb-16 space-y-20 text-slate-800 bg-[#f6f6f6]" id="solutions-detail-view">
      
      {/* SECTOR HERO HEADER */}
      <section className="px-4 sm:px-6 lg:px-8 bg-white py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-6">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686DF4] hover:text-[#686DF4]/80 transition-colors uppercase tracking-widest cursor-pointer mb-2 bg-transparent border-none"
          >
            <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
              <span className="inline-block text-[10px] font-mono font-bold uppercase text-[#686DF4] tracking-widest bg-[#686DF4]/5 border border-[#686DF4]/10 px-3 py-1 rounded-full">
                {sector.title}
              </span>
              <h1 className="text-3xl sm:text-4.5xl font-display font-medium text-slate-955 tracking-tight leading-[1.1]">
                {sector.subtitle}
              </h1>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                {sector.heroDesc}
              </p>
              
              <div className="pt-4 border-t border-slate-100 space-y-3.5">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block">WAS DICH ERWARTET:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Echtzeit-Potenzial-Prüfung</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Transparente Benchmarks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Check className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Keine Kaltakquise nötig</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embed matching interactive hero calculator */}
            <div className="lg:col-span-7">
              <div className="bg-[#fcfcfc] border border-slate-150/80 rounded-3xl p-1 shadow-sm">
                {ActiveCalculator ? (
                  <ActiveCalculator />
                ) : (
                  <div className="p-8 text-center text-slate-400">Rechner ist in Vorbereitung.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPISCHE ENGPAESSE SEKTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <span className="text-[9px] font-mono text-red-651 font-bold uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100/40">DIE DILEMMATA</span>
          <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-slate-900 tracking-tight">
            Typische Wachstums-Engpässe bei {sector.title}
          </h2>
          <p className="text-xs text-slate-500 font-semibold max-w-sm mx-auto">
            Warum herkömmliche Vermarktungsversuche in diesem Sektor oft verpuffen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sector.problems.map((problem, idx) => (
            <div key={idx} className="bg-white border border-[#E0E0E0]/65 p-6 rounded-3xl space-y-3.5 shadow-sm text-center">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold font-mono text-xs mx-auto border border-red-100/40">
                !
              </div>
              <h3 className="text-xs font-bold text-slate-900 leading-tight">{problem.title}</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">{problem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WAS WIR AUFBAUEN SEKTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white border border-slate-900 rounded-3xl p-8 sm:p-12 space-y-12 shadow-[var(--shadow-premium-lg)]">
          <div className="text-center space-y-2">
            <span className="text-[9px] font-mono text-[#686DF4] tracking-widest uppercase font-black">DER MASSNAHMENPLAN</span>
            <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-white tracking-tight">& was wir nutzenorientiert aufbauen</h2>
            <p className="text-xs text-slate-300 font-semibold max-w-md mx-auto">
              Ein lückenloser, systematischer Prozess zur Skalierung deiner Marktpositionierung in der Schweiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 text-left">
            {sector.approach.map((step, idx) => (
              <div key={idx} className="space-y-3 relative">
                <span className="absolute -top-3 right-0 text-3xl font-black font-mono text-[#686DF4]/20">
                  {step.step}
                </span>
                <span className="text-[10px] font-semibold text-[#686DF4] uppercase font-mono tracking-widest">
                  PHASE {step.step}
                </span>
                <h3 className="text-xs font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-[11.5px] text-slate-300 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[9px] font-mono text-[#686DF4] font-black uppercase tracking-widest">IHR PROFIT</span>
          <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-slate-905 tracking-tight">Die messbaren Vorzüge</h2>
        </div>

        <div className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-5 shadow-sm text-left">
          {sector.benefits.map((benefit, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-800 font-bold leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDIAN */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[9px] font-mono text-slate-400 font-bold tracking-widest uppercase">DETAILFRAGEN</span>
          <h2 className="text-xl sm:text-2.5xl font-display font-semibold text-slate-905 tracking-tight">FAQ zum Ablauf</h2>
        </div>

        <div className="bg-white border border-[#E0E0E0]/65 rounded-2xl p-5 sm:p-8 space-y-3 shadow-sm text-left">
          {sector.faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-100 last:border-none pb-4 last:pb-0 pt-3">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center text-left font-bold text-slate-900 text-xs sm:text-sm hover:text-[#686DF4] transition-colors cursor-pointer bg-transparent border-none py-1"
              >
                <span className="flex items-center gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#686DF4] shrink-0" /> {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-[#686DF4]' : ''}`} />
              </button>
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2.5 text-xs text-slate-500 leading-relaxed pl-6.5 font-semibold">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* BIO MODULE: YATHUR NATHAN (+30% Larger Visual spacing) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-[var(--shadow-premium-md)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3">
            <div className="relative">
              <img 
                src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=350&fit=crop&q=80";
                }}
                alt="Yathur Nathan" 
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover opacity-95 border-2 border-[#686DF4]/30"
              />
              <span className="absolute bottom-1 right-1 w-4.5 h-4.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="text-center">
              <h4 className="text-sm font-bold text-slate-900 leading-none">Yathur Nathan</h4>
              <p className="text-[10px] text-slate-500 font-bold tracking-wide mt-1 uppercase">Inhaber & Experte</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-5">
            <span className="text-[9px] font-mono text-[#686DF4] font-black tracking-widest uppercase">PERSÖNLICHE BEGLEITUNG</span>
            <p className="text-[12.5px] font-medium leading-relaxed text-slate-600">
              Als dein persönlicher Experte analysiere ich deine Customer Journey ganzheitlich und begleite dich operativ bei der Umsetzung deiner Umsatzhebel im Neukunden-Erstgespräch. Ich unterstütze Schweizer Unternehmen dabei, Wachstumspotenziale sichtbar zu machen und in messbare Resultate zu übersetzen.
            </p>
            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 font-mono">
                📞 Telefon-Audit & Strategieentwurf (30 Min.)
              </span>
              <a
                href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
                target="_blank"
                className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full cursor-pointer transition-all inline-block text-center shadow-sm shrink-0 w-full sm:w-auto"
              >
                Termin buchen
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
