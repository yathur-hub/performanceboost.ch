import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingDown, 
  Users, 
  Filter, 
  Settings, 
  BarChart3, 
  Map, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2,
  TrendingUp,
  Megaphone,
  Cpu,
  ShieldAlert,
  Layers,
  PieChart,
  X,
  Compass
} from 'lucide-react';
import { PREMIUM_EASE } from '../../lib/motion';

// Types
export type ProblemId = 
  | 'pipeline' 
  | 'alignment' 
  | 'conversion' 
  | 'manual' 
  | 'data' 
  | 'strategy';

export type SetupId = 
  | 'greenfield' 
  | 'fragmented' 
  | 'scaling';

export interface ServiceRecommendation {
  slug: string;
  title: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  reasoning: string;
  deliverablesSummary: string;
}

export interface RevenueNavigatorProps {
  onNavigate?: (path: string) => void;
  onClose?: () => void;
  isModal?: boolean;
}

// 1. Step 1 Options (Problems)
const PROBLEM_OPTIONS: {
  id: ProblemId;
  label: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  {
    id: 'pipeline',
    label: 'Zu wenig qualifizierte Pipeline',
    subtext: 'Vertrieb hat zu wenig Termine mit echten, kaufbereiten Entscheidern.',
    icon: TrendingDown,
  },
  {
    id: 'alignment',
    label: 'Marketing und Vertrieb arbeiten aneinander vorbei',
    subtext: 'MQLs konvertieren nicht zu Kunden, interne Silos bremsen den Umsatz.',
    icon: Users,
  },
  {
    id: 'conversion',
    label: 'Leads kommen rein, werden aber nicht zu Kunden',
    subtext: 'Conversion-Lecks und fehlendes Lead Nurturing im Sales-Funnel.',
    icon: Filter,
  },
  {
    id: 'manual',
    label: 'Zu viele manuelle Prozesse',
    subtext: 'Repetitive Aufgaben im Vertrieb & Marketing fressen wertvolle Zeit.',
    icon: Settings,
  },
  {
    id: 'data',
    label: 'Keine klare Datenbasis / Entscheidungen aus dem Bauch',
    subtext: 'Unklares Tracking, fehlende Attribution und Blindflug bei zentralen KPIs.',
    icon: BarChart3,
  },
  {
    id: 'strategy',
    label: 'Keine klare Go-to-Market-Strategie',
    subtext: 'Fehlendes ICP, unklare Positionierung und unstrukturierte Kanäle.',
    icon: Map,
  },
];

// 2. Step 2 Options (Current Setup)
const SETUP_OPTIONS: {
  id: SetupId;
  label: string;
  subtext: string;
}[] = [
  {
    id: 'greenfield',
    label: 'Wir starten quasi bei null — kein System vorhanden',
    subtext: 'Noch keine festen Prozesse, Tools oder erprobten Funnels etabliert.',
  },
  {
    id: 'fragmented',
    label: 'Wir haben einzelne Tools, aber sie sprechen nicht miteinander',
    subtext: 'Fragmentierter Stack (CRM, Ads, Mail) ohne durchgängige Datenbrücke.',
  },
  {
    id: 'scaling',
    label: 'Wir haben ein System, aber es skaliert nicht wie gewünscht',
    subtext: 'Grundlagen stehen, aber das Wachstum stagniert oder wird zu teuer.',
  },
];

// 3. Service Definitions & Meta
const SERVICE_META: Record<string, { title: string; icon: React.ComponentType<{ className?: string }> }> = {
  'growth-strategy': {
    title: 'Growth Strategy & Advisory',
    icon: TrendingUp,
  },
  'demand-generation': {
    title: 'Demand Generation & Paid Ads',
    icon: Megaphone,
  },
  'lead-generation': {
    title: 'Inbound & Outbound Lead Generation',
    icon: Users,
  },
  'marketing-automation': {
    title: 'Marketing Automation & CRM',
    icon: Cpu,
  },
  'sales-enablement': {
    title: 'Sales Enablement & Playbooks',
    icon: ShieldAlert,
  },
  'revenue-operations': {
    title: 'Revenue Operations (RevOps)',
    icon: Layers,
  },
  'ai-automation': {
    title: 'AI & Inbound/Outbound Automation',
    icon: Sparkles,
  },
  'data-analytics': {
    title: 'Data, Analytics & Web Tracking',
    icon: PieChart,
  },
};

// 4. Recommendation Matrix (6 x 3 = 18 fully mapped cases)
const RECOMMENDATION_MATRIX: Record<ProblemId, Record<SetupId, { slug: string; reasoning: string; deliverablesSummary: string }>> = {
  pipeline: {
    greenfield: {
      slug: 'growth-strategy',
      reasoning: 'Ohne bestehendes Fundament musst du zuerst dein Ideal Customer Profile (ICP) und Go-to-Market-Messaging schärfen, bevor du Budget in Kampagnen investierst.',
      deliverablesSummary: 'ICP-Definition, Go-to-Market Playbook & 12-Monats-Wachstums-Roadmap.',
    },
    fragmented: {
      slug: 'demand-generation',
      reasoning: 'Deine Kanäle müssen koordiniert nachfrageorientiert bespielt werden, um echte Kaufbereitschaft bei deiner Zielgruppe vor dem ersten Kontakt zu erzeugen.',
      deliverablesSummary: 'Multi-Channel Paid Ads (LinkedIn & Google), ABM-Kampagnen & Pipeline-Tracking.',
    },
    scaling: {
      slug: 'lead-generation',
      reasoning: 'Um deine bestehende Pipeline auf das nächste Level zu heben, etablieren wir systematische Inbound- und Outbound-Engines mit präziser Vorqualifizierung.',
      deliverablesSummary: 'SEO-Content Funnel, Schweizer Outbound-Sequenzen & automatisches Lead-Scoring.',
    },
  },
  alignment: {
    greenfield: {
      slug: 'sales-enablement',
      reasoning: 'Bevor komplexe Systeme gebaut werden, müssen Vertrieb und Marketing dieselbe Sprache sprechen und einheitliche Übergabekriterien (MQL zu SQL) definieren.',
      deliverablesSummary: 'Sales Playbook, standardisierte Einwandbehandlung & interaktive Decks.',
    },
    fragmented: {
      slug: 'revenue-operations',
      reasoning: 'RevOps bricht die Datensilos zwischen Marketing-Tools, CRM und Vertrieb auf und schafft eine verlässliche Single Source of Truth.',
      deliverablesSummary: 'Tech-Stack Harmonisierung, einheitliche Pipeline-Phasen & C-Level KPI Dashboards.',
    },
    scaling: {
      slug: 'sales-enablement',
      reasoning: 'Mit schlüsselfertigen Sales Playbooks, interaktiven Decks und klarer Nutzenargumentation machen wir die Übergabe nahtlos und steigern eure Abschlussquote.',
      deliverablesSummary: 'Verkürzung der Sales Cycles, Battle-Cards & praxiserprobte Verkaufsunterlagen.',
    },
  },
  conversion: {
    greenfield: {
      slug: 'sales-enablement',
      reasoning: 'Um Erstkontakte verlässlich in zahlende Kunden zu verwandeln, benötigt dein Team professionelle Gesprächsleitfäden und überzeugende Präsentations-Assets.',
      deliverablesSummary: 'Kompakte Argumentationsketten, ROI-Rechner für Kunden & Einwandbehandlung.',
    },
    fragmented: {
      slug: 'marketing-automation',
      reasoning: 'Mit automatisierten Nurturing-Strecken und CRM-Workflows begleiten wir unentschlossene Kontakte systematisch, bis sie abschlussbereit beim Vertrieb ankommen.',
      deliverablesSummary: 'Automatisierte E-Mail-Workflows, Lead-Scoring & CRM-Pipeline-Architektur.',
    },
    scaling: {
      slug: 'revenue-operations',
      reasoning: 'Wir identifizieren und beheben die genauen Reibungspunkte und Conversion-Lecks entlang des gesamten Übergabeprozesses von Marketing zu Sales.',
      deliverablesSummary: 'Funnel-Leak Audit, Prozess-Optimierung & LTV-gestützte Pipeline-Steuerung.',
    },
  },
  manual: {
    greenfield: {
      slug: 'marketing-automation',
      reasoning: 'Wir bauen von Grund auf saubere Standard-Workflows und CRM-Automationen auf, die manuelle Routineaufgaben sofort eliminieren.',
      deliverablesSummary: 'Lead-Routing Regeln, automatisierte Follow-ups & HubSpot/CRM-Setup.',
    },
    fragmented: {
      slug: 'revenue-operations',
      reasoning: 'Wir verknüpfen deine isolierten Tools über intelligente Schnittstellen und synchronisieren deine Datenflüsse vollautomatisch.',
      deliverablesSummary: 'Tool-Konsolidierung, automatisierte Datenhygiene & Prozess-Dokumentation.',
    },
    scaling: {
      slug: 'ai-automation',
      reasoning: 'Intelligente AI-Agenten übernehmen Lead-Recherche, Datenanreicherung und Routine-Kommunikation, damit dein Team ohne personelle Engpässe skaliert.',
      deliverablesSummary: 'Make/n8n AI-Workflows, automatisierte Lead-Anreicherung & KI-Qualifizierer.',
    },
  },
  data: {
    greenfield: {
      slug: 'data-analytics',
      reasoning: 'Wir etablieren ein sauberes First-Party Webtracking und ein zentrales KPI-Dashboard, damit du von Tag 1 an datengestützte Entscheidungen triffst.',
      deliverablesSummary: 'Server-Side GTM Setup, GA4/Matomo Konfiguration & DSG-konformes Tracking.',
    },
    fragmented: {
      slug: 'data-analytics',
      reasoning: 'Wir führen deine verstreuten Tool-Daten in einheitlichen Attributions-Modellen zusammen, damit du genau siehst, welcher Kanal echten Umsatz bringt.',
      deliverablesSummary: 'Conversion APIs (CAPI), Multi-Touch Attribution & Looker Studio Dashboards.',
    },
    scaling: {
      slug: 'revenue-operations',
      reasoning: 'Wir transformieren deine fragmentierten Kennzahlen in ein ganzheitliches Revenue-Dashboard mit verlässlichem Umsatz-Forecasting.',
      deliverablesSummary: 'Customer Lifetime Value (LTV) Modelle, Forecasting-System & KPI-Harmonisierung.',
    },
  },
  strategy: {
    greenfield: {
      slug: 'growth-strategy',
      reasoning: 'Gemeinsam erarbeiten wir dein Ideal Customer Profile (ICP), schärfen dein Nutzenversprechen und erstellen eine 12-Monats-Wachstums-Roadmap.',
      deliverablesSummary: 'ICP- & Buyer-Persona-Matrizen, Positionierung & Kanal-Allokation.',
    },
    fragmented: {
      slug: 'growth-strategy',
      reasoning: 'Wir richten deine vorhandenen Kanäle und Tools strategisch auf die ertragreichsten Kundensegmente und Marktchancen aus.',
      deliverablesSummary: 'Go-to-Market Neuausrichtung, Wertversprechen-Framework & Budget-Modellierung.',
    },
    scaling: {
      slug: 'demand-generation',
      reasoning: 'Wir übersetzen deine Strategie in eine zielgerichtete Multi-Channel Demand Engine, die planbar hochwertige B2B-Kaufanfragen erzeugt.',
      deliverablesSummary: 'Skalierbare Paid Acquisition, Demand Capture & Full-Funnel Content.',
    },
  },
};

export const RevenueNavigator: React.FC<RevenueNavigatorProps> = ({ onNavigate, onClose, isModal = false }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedProblem, setSelectedProblem] = useState<ProblemId | null>(null);
  const [selectedSetup, setSelectedSetup] = useState<SetupId | null>(null);

  // Close on Escape key if in modal mode
  useEffect(() => {
    if (!isModal && !onClose) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModal, onClose]);

  const navigateTo = (path: string) => {
    if (onClose) onClose();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.dispatchEvent(new CustomEvent('navigation-change', { detail: path }));
    }
  };

  const handleSelectProblem = (id: ProblemId) => {
    setSelectedProblem(id);
    // Smooth auto-advance to step 2
    setTimeout(() => {
      setCurrentStep(2);
    }, 160);
  };

  const handleSelectSetup = (id: SetupId) => {
    setSelectedSetup(id);
    // Smooth auto-advance to step 3
    setTimeout(() => {
      setCurrentStep(3);
    }, 160);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedProblem(null);
    setSelectedSetup(null);
  };

  const handleBack = () => {
    if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  // Resolve recommendation
  const recommendation = selectedProblem && selectedSetup
    ? {
        ...RECOMMENDATION_MATRIX[selectedProblem][selectedSetup],
        ...SERVICE_META[RECOMMENDATION_MATRIX[selectedProblem][selectedSetup].slug],
      }
    : null;

  const cardContent = (
    <div className={`bg-white border border-[#E0E0E0] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[var(--shadow-premium-md)] max-w-4xl mx-auto relative overflow-hidden ${isModal ? 'w-full max-h-[88vh] overflow-y-auto' : ''}`}>
      {/* Subtle Decorative Ambient Layer */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#686DF4]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#CACCFB]/20 rounded-full blur-2xl pointer-events-none" />

      {/* CARD TOP BAR: Back Navigation + Progress Indicator + Modal Close */}
      <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E0E0E0]/80 relative z-10">
        <div className="flex items-center gap-3">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              aria-label="Zurück zum vorherigen Schritt"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#686DF4] bg-slate-100/80 hover:bg-[#686DF4]/10 px-3 py-1.5 rounded-full transition-all cursor-pointer select-none"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Zurück</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#686DF4]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                Revenue Navigator
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-4">
          {/* 3-Step Progress Indicators */}
          <div className="flex items-center gap-2" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={3}>
            <span className="sr-only">Schritt {currentStep} von 3</span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map((stepNumber) => {
                const isActive = currentStep === stepNumber;
                const isCompleted = currentStep > stepNumber;
                return (
                  <div
                    key={stepNumber}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-7 bg-[#686DF4]' 
                        : isCompleted 
                        ? 'w-5 bg-[#686DF4]/60' 
                        : 'w-3 bg-slate-200'
                    }`}
                  />
                );
              })}
            </div>
            <span className="text-[11.5px] font-mono font-medium text-slate-500 ml-1">
              {currentStep === 3 ? 'Ergebnis' : `${currentStep}/3`}
            </span>
          </div>

          {/* Close button if in modal mode */}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 bg-slate-100/80 hover:bg-slate-200/80 rounded-full transition-colors cursor-pointer outline-none ml-1"
              aria-label="Modal schliessen"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* STEP CONTENT CONTAINER WITH ANIMATE PRESENCE */}
      <div className="relative z-10 min-h-[360px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* STEP 1: PROBLEM SELECTION */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: PREMIUM_EASE }}
              className="space-y-6"
            >
              <div className="space-y-1.5">
                <span className="text-[11.5px] font-mono font-bold uppercase tracking-widest text-[#686DF4]">
                  SCHRITT 1 VON 2
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Was ist aktuell euer grösstes Wachstumsproblem?
                </h3>
                <p className="text-slate-500 text-body-sm">
                  Wähle die Option, die euren aktuellen Engpass am genauesten beschreibt.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                {PROBLEM_OPTIONS.map((option) => {
                  const IconComponent = option.icon;
                  const isSelected = selectedProblem === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectProblem(option.id)}
                      aria-pressed={isSelected}
                      className={`group relative text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4] focus-visible:ring-offset-2 ${
                        isSelected
                          ? 'border-[#686DF4] bg-[#686DF4]/6 shadow-sm ring-1 ring-[#686DF4]/30'
                          : 'border-[#E0E0E0] bg-white hover:border-[#686DF4]/70 hover:bg-slate-50/70 hover:-translate-y-0.5 hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-[#686DF4] text-white' 
                          : 'bg-[#686DF4]/10 text-[#686DF4] group-hover:bg-[#686DF4] group-hover:text-white'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1 pr-2">
                        <p className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#686DF4] transition-colors">
                          {option.label}
                        </p>
                        <p className="text-slate-500 text-xs sm:text-body-sm leading-relaxed">
                          {option.subtext}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 2: CONTEXT / SETUP SELECTION */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: PREMIUM_EASE }}
              className="space-y-6"
            >
              <div className="space-y-1.5">
                <span className="text-[11.5px] font-mono font-bold uppercase tracking-widest text-[#686DF4]">
                  SCHRITT 2 VON 2
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Wie sieht euer aktuelles Setup aus?
                </h3>
                <p className="text-slate-500 text-body-sm">
                  Damit bestimmen wir die exakte Flughöhe und den optimalen Einstiegspunkt.
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {SETUP_OPTIONS.map((option, idx) => {
                  const isSelected = selectedSetup === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectSetup(option.id)}
                      aria-pressed={isSelected}
                      className={`group w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4] focus-visible:ring-offset-2 ${
                        isSelected
                          ? 'border-[#686DF4] bg-[#686DF4]/6 shadow-sm ring-1 ring-[#686DF4]/30'
                          : 'border-[#E0E0E0] bg-white hover:border-[#686DF4]/70 hover:bg-slate-50/70 hover:-translate-y-0.5 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-[#686DF4]/10 text-slate-700 group-hover:text-[#686DF4] flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors">
                          0{idx + 1}
                        </span>
                        <div className="space-y-1">
                          <p className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-[#686DF4] transition-colors">
                            {option.label}
                          </p>
                          <p className="text-slate-500 text-xs sm:text-body-sm leading-relaxed">
                            {option.subtext}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#686DF4] group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 3: RESULT RECOMMENDATION CARD */}
          {currentStep === 3 && recommendation && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: PREMIUM_EASE }}
              className="space-y-6 py-2"
            >
              {/* Result Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#686DF4]/10 border border-[#686DF4]/25">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#686DF4]" />
                  <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">
                    DEINE EMPFEHLUNG
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Basiert auf deinen 2 Angaben
                </span>
              </div>

              {/* Main Recommendation Feature Box */}
              <div className="bg-slate-50/80 border border-[#E0E0E0] rounded-2xl p-6 sm:p-7 space-y-4 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#686DF4] text-white flex items-center justify-center shrink-0 shadow-sm">
                      {recommendation.icon ? (
                        <recommendation.icon className="w-6 h-6" />
                      ) : (
                        <Sparkles className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase text-slate-500 tracking-wider">
                        Leistungsbereich
                      </span>
                      <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                        {recommendation.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Tailored Reasoning */}
                <div className="space-y-2 pt-2 border-t border-[#E0E0E0]/70">
                  <p className="text-slate-800 text-body font-medium leading-relaxed">
                    {recommendation.reasoning}
                  </p>
                  <p className="text-xs sm:text-body-sm text-slate-500 leading-relaxed font-medium">
                    <span className="font-semibold text-slate-700">Fokus-Ergebnisse:</span> {recommendation.deliverablesSummary}
                  </p>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => navigateTo(`/leistungen/${recommendation.slug}`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-display font-bold px-6 py-4 rounded-full shadow-[var(--shadow-premium-md)] hover:shadow-[var(--shadow-premium-lg)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm tracking-wide cursor-pointer text-center"
                >
                  <span>Mehr zu {recommendation.title.split('&')[0].trim()} erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('/kontakt')}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-350 font-display font-semibold px-6 py-4 rounded-full shadow-xs hover:-translate-y-0.5 transition-all text-xs sm:text-sm tracking-wide cursor-pointer text-center"
                >
                  <span>Direkt unverbindliches Gespräch buchen</span>
                </button>
              </div>

              {/* Reset Trigger */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#686DF4] transition-colors cursor-pointer select-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Nochmal von vorne starten</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  // If rendered as a Modal Overlay
  if (isModal || onClose) {
    return (
      <div 
        className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-10" 
        id="revenue-navigator-modal-wrapper"
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 cursor-pointer" 
          id="revenue-navigator-backdrop"
        />

        {/* Modal Motion Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.35, ease: PREMIUM_EASE }}
          className="relative z-50 w-full max-w-4xl"
          id="revenue-navigator-modal-container"
        >
          {cardContent}
        </motion.div>
      </div>
    );
  }

  // Standalone inline section
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12" id="revenue-navigator">
      {/* SECTION HEADER */}
      <div className="text-center space-y-3 max-w-3xl mx-auto mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#686DF4]/8 border border-[#686DF4]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#686DF4]" />
          <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">
            IN 60 SEKUNDEN
          </span>
        </div>
        <h2 className="text-2xl sm:text-3.5xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Finde in 3 Fragen deinen grössten Hebel
        </h2>
        <p className="text-slate-600 text-body font-medium max-w-xl mx-auto">
          Kein Rätselraten. Wir zeigen dir sofort, wo du ansetzen solltest.
        </p>
      </div>

      {cardContent}
    </section>
  );
};

export default RevenueNavigator;
