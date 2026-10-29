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
import { trackEvent } from '../../lib/analytics';

const TOOL_NAME = 'revenue_navigator';

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
    label: 'Zu wenig passende Anfragen',
    subtext: 'Der Vertrieb hat zu wenige Termine mit Entscheidern, die wirklich kaufen wollen.',
    icon: TrendingDown,
  },
  {
    id: 'alignment',
    label: 'Marketing und Vertrieb arbeiten aneinander vorbei',
    subtext: 'Anfragen aus dem Marketing werden selten zu Kunden, jeder arbeitet für sich.',
    icon: Users,
  },
  {
    id: 'conversion',
    label: 'Anfragen kommen rein, werden aber nicht zu Kunden',
    subtext: 'Interessenten springen unterwegs ab, und niemand fasst systematisch nach.',
    icon: Filter,
  },
  {
    id: 'manual',
    label: 'Zu viele manuelle Prozesse',
    subtext: 'Wiederkehrende Aufgaben in Vertrieb und Marketing kosten viel Zeit.',
    icon: Settings,
  },
  {
    id: 'data',
    label: 'Keine verlässlichen Zahlen, Entscheide aus dem Bauch',
    subtext: 'Unklar, welcher Kanal welche Anfrage bringt und wie sich die wichtigsten Kennzahlen entwickeln.',
    icon: BarChart3,
  },
  {
    id: 'strategy',
    label: 'Keine klare Vermarktungsstrategie',
    subtext: 'Wunschkunde nicht definiert, Positionierung unklar, Kanäle ohne Plan.',
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
    label: 'Wir starten praktisch bei null',
    subtext: 'Noch keine festen Abläufe, Tools oder erprobten Anfragewege.',
  },
  {
    id: 'fragmented',
    label: 'Wir haben einzelne Tools, aber sie sprechen nicht miteinander',
    subtext: 'CRM, Werbekonten und E-Mail-Tool laufen getrennt, Daten fliessen nicht durch.',
  },
  {
    id: 'scaling',
    label: 'Wir haben ein System, aber es wächst nicht wie gewünscht mit',
    subtext: 'Grundlagen stehen, aber das Wachstum stagniert oder wird zu teuer.',
  },
];

// 3. Service Definitions & Meta
const SERVICE_META: Record<string, { title: string; icon: React.ComponentType<{ className?: string }> }> = {
  'growth-strategy': {
    title: 'Strategie & Beratung',
    icon: TrendingUp,
  },
  'demand-generation': {
    title: 'Werbekampagnen & Nachfrageaufbau',
    icon: Megaphone,
  },
  'lead-generation': {
    title: 'Neukundengewinnung & Direktansprache',
    icon: Users,
  },
  'marketing-automation': {
    title: 'Marketing-Automatisierung & CRM',
    icon: Cpu,
  },
  'sales-enablement': {
    title: 'Vertriebsunterstützung & Leitfäden',
    icon: ShieldAlert,
  },
  'revenue-operations': {
    title: 'Prozess- und Datenintegration',
    icon: Layers,
  },
  'ai-automation': {
    title: 'KI-Automatisierung',
    icon: Sparkles,
  },
  'data-analytics': {
    title: 'Tracking & Datenanalyse',
    icon: PieChart,
  },
};

// 4. Recommendation Matrix (6 x 3 = 18 fully mapped cases)
const RECOMMENDATION_MATRIX: Record<ProblemId, Record<SetupId, { slug: string; reasoning: string; deliverablesSummary: string }>> = {
  pipeline: {
    greenfield: {
      slug: 'growth-strategy',
      reasoning: 'Ohne bestehendes Fundament lohnt es sich, zuerst Ihren Wunschkunden und Ihre Kernbotschaft zu klären, bevor Budget in Kampagnen fliesst.',
      deliverablesSummary: 'Zielkundenprofil, Vermarktungsleitfaden und Massnahmenplan für 12 Monate.',
    },
    fragmented: {
      slug: 'demand-generation',
      reasoning: 'Ihre Kanäle brauchen eine gemeinsame Linie, damit Ihre Zielgruppe Sie schon vor dem ersten Kontakt kennt und Interesse aufbaut.',
      deliverablesSummary: 'Kampagnen auf LinkedIn und Google, gezielte Ansprache von Wunschkunden und Messung der Anfragen.',
    },
    scaling: {
      slug: 'lead-generation',
      reasoning: 'Damit mehr passende Anfragen kommen, bauen wir neben Ihren bestehenden Kanälen gezielte Wege über Google, Inhalte und Direktansprache auf, mit klarer Vorqualifizierung.',
      deliverablesSummary: 'SEO-Inhalte, Direktansprache im Schweizer Markt und automatische Bewertung von Anfragen.',
    },
  },
  alignment: {
    greenfield: {
      slug: 'sales-enablement',
      reasoning: 'Bevor Systeme gebaut werden, sollten Marketing und Vertrieb dieselbe Sprache sprechen und gemeinsam festlegen, ab wann eine Anfrage an den Vertrieb geht.',
      deliverablesSummary: 'Vertriebsleitfaden, Antworten auf typische Einwände und Präsentationsunterlagen.',
    },
    fragmented: {
      slug: 'revenue-operations',
      reasoning: 'Wir verbinden Marketing-Tools, CRM und Vertrieb, damit alle mit denselben Daten arbeiten.',
      deliverablesSummary: 'Abgestimmte Tools, einheitliche Verkaufsphasen und ein Kennzahlen-Dashboard für die Geschäftsleitung.',
    },
    scaling: {
      slug: 'sales-enablement',
      reasoning: 'Mit Vertriebsleitfäden, Präsentationsunterlagen und einer klaren Nutzenargumentation sorgen wir für eine saubere Übergabe, damit mehr Anfragen zu Aufträgen werden können.',
      deliverablesSummary: 'Klarere Verkaufsabläufe, Argumentationshilfen gegenüber Mitbewerbern und Verkaufsunterlagen.',
    },
  },
  conversion: {
    greenfield: {
      slug: 'sales-enablement',
      reasoning: 'Damit aus Erstkontakten zahlende Kunden werden, braucht Ihr Team klare Gesprächsleitfäden und überzeugende Präsentationsunterlagen.',
      deliverablesSummary: 'Kompakte Argumentation, Nutzenrechner für Ihre Kunden und Antworten auf typische Einwände.',
    },
    fragmented: {
      slug: 'marketing-automation',
      reasoning: 'Mit automatisierten E-Mail-Strecken und CRM-Abläufen begleiten wir unentschlossene Kontakte weiter, bis sie bereit für ein Gespräch mit dem Vertrieb sind.',
      deliverablesSummary: 'Automatisierte E-Mail-Abläufe, Bewertung von Anfragen und saubere Verkaufsphasen im CRM.',
    },
    scaling: {
      slug: 'revenue-operations',
      reasoning: 'Wir finden heraus, an welchen Stellen zwischen Marketing und Vertrieb Interessenten verloren gehen, und beheben diese Schwachstellen.',
      deliverablesSummary: 'Analyse des Anfrageprozesses, verbesserte Abläufe und Steuerung nach Kundenwert.',
    },
  },
  manual: {
    greenfield: {
      slug: 'marketing-automation',
      reasoning: 'Wir bauen saubere Standardabläufe und CRM-Automatisierungen auf, die Ihrem Team wiederkehrende Routineaufgaben abnehmen.',
      deliverablesSummary: 'Regeln für die Verteilung von Anfragen, automatisches Nachfassen und Einrichtung von HubSpot oder einem anderen CRM.',
    },
    fragmented: {
      slug: 'revenue-operations',
      reasoning: 'Wir verbinden Ihre bisher getrennten Tools über Schnittstellen, damit Daten automatisch dort ankommen, wo sie gebraucht werden.',
      deliverablesSummary: 'Weniger, besser verbundene Tools, automatische Datenpflege und dokumentierte Abläufe.',
    },
    scaling: {
      slug: 'ai-automation',
      reasoning: 'KI-gestützte Abläufe übernehmen Recherche, Datenergänzung und Routinekommunikation, damit Ihr Team mehr bewältigen kann, ohne sofort neue Stellen zu schaffen.',
      deliverablesSummary: 'KI-Abläufe mit Make oder n8n, automatische Ergänzung von Kontaktdaten und Vorqualifizierung von Anfragen.',
    },
  },
  data: {
    greenfield: {
      slug: 'data-analytics',
      reasoning: 'Wir richten ein sauberes Website-Tracking und ein zentrales Kennzahlen-Dashboard ein, damit Sie von Anfang an auf Basis von Daten entscheiden können.',
      deliverablesSummary: 'Serverseitiges Google Tag Manager Setup, Konfiguration von GA4 oder Matomo und Tracking mit Blick auf das Schweizer Datenschutzgesetz.',
    },
    fragmented: {
      slug: 'data-analytics',
      reasoning: 'Wir führen die Daten aus Ihren verschiedenen Tools zusammen, damit Sie sehen, welcher Kanal tatsächlich Umsatz bringt.',
      deliverablesSummary: 'Serverseitige Datenübermittlung an Werbeplattformen, Auswertung über mehrere Kontaktpunkte und Dashboards in Looker Studio.',
    },
    scaling: {
      slug: 'revenue-operations',
      reasoning: 'Wir bringen Ihre verstreuten Kennzahlen in ein gemeinsames Umsatz-Dashboard mit einer nachvollziehbaren Umsatzprognose.',
      deliverablesSummary: 'Berechnung des Kundenwerts über die gesamte Kundenbeziehung, Umsatzprognose und einheitliche Kennzahlen.',
    },
  },
  strategy: {
    greenfield: {
      slug: 'growth-strategy',
      reasoning: 'Gemeinsam definieren wir Ihren Wunschkunden, schärfen Ihr Nutzenversprechen und erstellen einen Massnahmenplan für die nächsten 12 Monate.',
      deliverablesSummary: 'Zielkundenprofile, Positionierung und Verteilung des Budgets auf die Kanäle.',
    },
    fragmented: {
      slug: 'growth-strategy',
      reasoning: 'Wir richten Ihre vorhandenen Kanäle und Tools auf die Kundengruppen und Marktchancen aus, die für Sie am meisten Ertrag versprechen.',
      deliverablesSummary: 'Neuausrichtung der Vermarktung, geschärftes Nutzenversprechen und Budgetplanung.',
    },
    scaling: {
      slug: 'demand-generation',
      reasoning: 'Wir setzen Ihre Strategie in abgestimmte Kampagnen über mehrere Kanäle um, mit dem Ziel, regelmässig passende B2B-Anfragen zu gewinnen.',
      deliverablesSummary: 'Bezahlte Kampagnen, die mit dem Budget mitwachsen, Abholen bestehender Nachfrage und Inhalte für jede Phase der Kaufentscheidung.',
    },
  },
};

export const RevenueNavigator: React.FC<RevenueNavigatorProps> = ({ onNavigate, onClose, isModal = false }) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedProblem, setSelectedProblem] = useState<ProblemId | null>(null);
  const [selectedSetup, setSelectedSetup] = useState<SetupId | null>(null);

  useEffect(() => { trackEvent('tool_view', { tool_name: TOOL_NAME, is_modal: isModal }) }, [isModal]);

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
    trackEvent('tool_step', { tool_name: TOOL_NAME, step: 1, step_id: 'problem', value: id });
    // Smooth auto-advance to step 2
    setTimeout(() => {
      setCurrentStep(2);
    }, 160);
  };

  const handleSelectSetup = (id: SetupId) => {
    setSelectedSetup(id);
    trackEvent('tool_step', { tool_name: TOOL_NAME, step: 2, step_id: 'setup', value: id });
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

  useEffect(() => {
    if (recommendation) {
      trackEvent('tool_complete', { tool_name: TOOL_NAME, result_label: recommendation.slug });
    }
  }, [recommendation?.slug]);

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
                Wegweiser: Wo stehen Sie?
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
              aria-label="Fenster schliessen"
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
                  Schritt 1 von 2
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Was bremst Ihr Wachstum derzeit am meisten?
                </h3>
                <p className="text-slate-500 text-body-sm">
                  Wählen Sie die Option, die Ihre Situation am besten beschreibt.
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
                  Schritt 2 von 2
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Wie sind Sie heute aufgestellt?
                </h3>
                <p className="text-slate-500 text-body-sm">
                  Daraus ergibt sich, wo ein sinnvoller Einstieg liegt.
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
                    Ihre Empfehlung
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Basiert auf Ihren 2 Angaben
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
                    <span className="font-semibold text-slate-700">Typische Bausteine:</span> {recommendation.deliverablesSummary}
                  </p>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => { trackEvent('tool_cta_click', { tool_name: TOOL_NAME, cta_label: 'mehr_erfahren', result_label: recommendation.slug }); navigateTo(`/leistungen/${recommendation.slug}`) }}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-display font-bold px-6 py-4 rounded-full shadow-[var(--shadow-premium-md)] hover:shadow-[var(--shadow-premium-lg)] hover:-translate-y-0.5 transition-all text-xs sm:text-sm tracking-wide cursor-pointer text-center"
                >
                  <span>Mehr zu {recommendation.title.split('&')[0].trim()} erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => { trackEvent('tool_cta_click', { tool_name: TOOL_NAME, cta_label: 'gespraech_buchen', result_label: recommendation.slug }); navigateTo('/kontakt') }}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-350 font-display font-semibold px-6 py-4 rounded-full shadow-xs hover:-translate-y-0.5 transition-all text-xs sm:text-sm tracking-wide cursor-pointer text-center"
                >
                  <span>Erstgespräch vereinbaren</span>
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
                  <span>Neu starten</span>
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
            Rund 1 Minute
          </span>
        </div>
        <h2 className="text-2xl sm:text-3.5xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
          In zwei Fragen zum passenden Ansatzpunkt
        </h2>
        <p className="text-slate-600 text-body font-medium max-w-xl mx-auto">
          Sie sehen direkt, wo es sich bei Ihnen am ehesten lohnt anzusetzen.
        </p>
      </div>

      {cardContent}
    </section>
  );
};

export default RevenueNavigator;
