/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, SlidersHorizontal, ArrowRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PREMIUM_EASE } from '../../lib/motion';
import AnimatedSection from '../ui/animated-section';
import { AnimatedGroup, AnimatedChild } from '../ui/animated-group';

export interface Skill {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  github: string;
  difficulty: 'Einstieg' | 'Fortgeschritten' | 'Expert';
}

const skills: Skill[] = [
  // STRATEGIE
  {
    id: 'growth-opportunity-assessment',
    title: 'Growth Opportunity Assessment',
    description: 'Wachstumschancen nach Marktpotenzial und Kapazität priorisieren.',
    category: 'strategie',
    categoryLabel: 'Strategie',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/growth-opportunity-assessment.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'go-to-market-diagnostic',
    title: 'Go-To-Market Diagnostic',
    description: 'GTM-Strategie auf ICP, Channel und Messaging prüfen.',
    category: 'strategie',
    categoryLabel: 'Strategie',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/go-to-market-diagnostic.md',
    difficulty: 'Expert',
  },
  {
    id: 'icp-segment-prioritization',
    title: 'ICP & Segment Prioritization',
    description: 'Idealen Kundentypus anhand von Buying Triggern schärfen.',
    category: 'strategie',
    categoryLabel: 'Strategie',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/icp-segment-prioritization.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'competitive-positioning-review',
    title: 'Competitive Positioning Review',
    description: 'Differenzierungsschärfe und Messaging aus Kundensicht bewerten.',
    category: 'strategie',
    categoryLabel: 'Strategie',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/competitive-positioning-review.md',
    difficulty: 'Fortgeschritten',
  },

  // NACHFRAGEGENERIERUNG
  {
    id: 'demand-generation-gap-analysis',
    title: 'Demand Generation Gap Analysis',
    description: 'Lücke zwischen aktuellem Lead-Volumen und Umsatzziel berechnen.',
    category: 'nachfragegenerierung',
    categoryLabel: 'Nachfragegenerierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/demand-generation-gap-analysis.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'pipeline-coverage-assessment',
    title: 'Pipeline Coverage Assessment',
    description: 'Pipeline-Deckungsgrad für Quartalsziele mit Coverage Ratio messen.',
    category: 'nachfragegenerierung',
    categoryLabel: 'Nachfragegenerierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/pipeline-coverage-assessment.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'content-to-pipeline-audit',
    title: 'Content-to-Pipeline Audit',
    description: 'Welcher Content beiträgt zur Pipeline — nicht nur zu Traffic.',
    category: 'nachfragegenerierung',
    categoryLabel: 'Nachfragegenerierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/content-to-pipeline-audit.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'lead-generation-diagnostic',
    title: 'Lead Generation Diagnostic',
    description: 'Vollständige Diagnose: Kanäle, Conversion-Pfade und MQL-Qualität.',
    category: 'nachfragegenerierung',
    categoryLabel: 'Nachfragegenerierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/lead-generation-diagnostic.md',
    difficulty: 'Fortgeschritten',
  },

  // REVENUE OPERATIONS
  {
    id: 'revenue-operations-maturity-assessment',
    title: 'Revenue Operations Maturity Assessment',
    description: 'Fünfstufiges Reifegradmodell für Prozesse, Daten und Forecasting.',
    category: 'revenue-operations',
    categoryLabel: 'Revenue Operations',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/revenue-operations-maturity-assessment.md',
    difficulty: 'Expert',
  },
  {
    id: 'funnel-leakage-detector',
    title: 'Funnel Leakage Detector',
    description: 'Wo geht Revenue verloren — CHF-Impact je Leckagestelle quantifizieren.',
    category: 'revenue-operations',
    categoryLabel: 'Revenue Operations',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/funnel-leakage-detector.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'lead-routing-assessment',
    title: 'Lead Routing Assessment',
    description: 'Leads richtig, schnell und nachvollziehbar zu den richtigen Reps.',
    category: 'revenue-operations',
    categoryLabel: 'Revenue Operations',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/lead-routing-assessment.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'lifecycle-stage-audit',
    title: 'Lifecycle Stage Audit',
    description: 'CRM-Lifecycle-Stages auf Definition und Konsistenz prüfen.',
    category: 'revenue-operations',
    categoryLabel: 'Revenue Operations',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/lifecycle-stage-audit.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'crm-data-quality-check',
    title: 'CRM Data Quality Check',
    description: 'Vollständigkeit, Aktualität und Duplikate im CRM systematisch bewerten.',
    category: 'revenue-operations',
    categoryLabel: 'Revenue Operations',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/crm-data-quality-check.md',
    difficulty: 'Einstieg',
  },

  // MARKETING AUTOMATION
  {
    id: 'marketing-automation-maturity-assessment',
    title: 'Marketing Automation Maturity Assessment',
    description: 'Reifegradmodell von manuellen E-Mails bis verhaltensbasiertem Multi-Touch-Nurturing.',
    category: 'marketing-automation',
    categoryLabel: 'Marketing Automation',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/marketing-automation-maturity-assessment.md',
    difficulty: 'Expert',
  },
  {
    id: 'lead-nurturing-assessment',
    title: 'Lead Nurturing Assessment',
    description: 'Nurturing-Flows entlang der Buyer Journey auf Wirkung prüfen.',
    category: 'marketing-automation',
    categoryLabel: 'Marketing Automation',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/lead-nurturing-assessment.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'workflow-opportunity-scanner',
    title: 'Workflow Opportunity Scanner',
    description: 'Manuelle Prozesse identifizieren, die automatisiert werden könnten.',
    category: 'marketing-automation',
    categoryLabel: 'Marketing Automation',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/workflow-opportunity-scanner.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'conversion-path-analysis',
    title: 'Conversion Path Analysis',
    description: 'Alle Wege vom Erstkontakt bis MQL mit Drop-off-Punkten analysieren.',
    category: 'marketing-automation',
    categoryLabel: 'Marketing Automation',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/conversion-path-analysis.md',
    difficulty: 'Fortgeschritten',
  },

  // VERTRIEB
  {
    id: 'sales-process-assessment',
    title: 'Sales Process Assessment',
    description: 'Stage-Definition, Qualifikation, Velocity und Win/Loss vollständig diagnostizieren.',
    category: 'vertrieb',
    categoryLabel: 'Vertrieb',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/sales-process-assessment.md',
    difficulty: 'Expert',
  },
  {
    id: 'sales-enablement-audit',
    title: 'Sales Enablement Audit',
    description: 'Hat der Vertrieb das richtige Material zur richtigen Zeit?',
    category: 'vertrieb',
    categoryLabel: 'Vertrieb',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/sales-enablement-audit.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'pipeline-hygiene-review',
    title: 'Pipeline Hygiene Review',
    description: 'Stale Deals, Stage-Klumpen und unrealistische Forecasts aufdecken.',
    category: 'vertrieb',
    categoryLabel: 'Vertrieb',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/pipeline-hygiene-review.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'follow-up-effectiveness-review',
    title: 'Follow-Up Effectiveness Review',
    description: 'Geschwindigkeit, Konsistenz und Qualität von Lead-Follow-ups analysieren.',
    category: 'vertrieb',
    categoryLabel: 'Vertrieb',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/follow-up-effectiveness-review.md',
    difficulty: 'Einstieg',
  },

  // KI & AUTOMATISIERUNG
  {
    id: 'ai-readiness-assessment',
    title: 'AI Readiness Assessment',
    description: 'Bereitschaft für AI prüfen: Datenbasis, Prozessreife und Quick-Wins.',
    category: 'ki-automatisierung',
    categoryLabel: 'KI & Automatisierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/ai-readiness-assessment.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'agentic-automation-opportunity-scanner',
    title: 'Agentic Automation Opportunity Scanner',
    description: 'Prozesse für autonome AI-Agents identifizieren und nach Impact priorisieren.',
    category: 'ki-automatisierung',
    categoryLabel: 'KI & Automatisierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/agentic-automation-opportunity-scanner.md',
    difficulty: 'Expert',
  },
  {
    id: 'process-automation-assessment',
    title: 'Process Automation Assessment',
    description: 'Repetitive Prozesse kartieren und CHF-Einsparpotenzial je Prozess bewerten.',
    category: 'ki-automatisierung',
    categoryLabel: 'KI & Automatisierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/process-automation-assessment.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'ai-use-case-discovery',
    title: 'AI Use Case Discovery',
    description: 'Von AI-Ideation über Feasibility bis zum konkreten Business Case.',
    category: 'ki-automatisierung',
    categoryLabel: 'KI & Automatisierung',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/ai-use-case-discovery.md',
    difficulty: 'Fortgeschritten',
  },

  // DATEN & ANALYTICS
  {
    id: 'tracking-attribution-audit',
    title: 'Tracking & Attribution Audit',
    description: 'Tracking-Infrastruktur vollständig diagnostizieren — Datenlücken und Fehlattributionen finden.',
    category: 'daten-analytics',
    categoryLabel: 'Daten & Analytics',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/tracking-attribution-audit.md',
    difficulty: 'Expert',
  },
  {
    id: 'dashboard-effectiveness-assessment',
    title: 'Dashboard Effectiveness Assessment',
    description: 'Unterstützen Dashboards echte Entscheidungen oder zeigen sie nur Aktivität?',
    category: 'daten-analytics',
    categoryLabel: 'Daten & Analytics',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/dashboard-effectiveness-assessment.md',
    difficulty: 'Einstieg',
  },
  {
    id: 'revenue-analytics-diagnostic',
    title: 'Revenue Analytics Diagnostic',
    description: 'Kann Reporting profitable Kanäle, Verluste und echten LTV benennen?',
    category: 'daten-analytics',
    categoryLabel: 'Daten & Analytics',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/revenue-analytics-diagnostic.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'kpi-clarity-review',
    title: 'KPI Clarity Review',
    description: 'Vanity Metrics und fehlende Leading Indicators aufdecken.',
    category: 'daten-analytics',
    categoryLabel: 'Daten & Analytics',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/kpi-clarity-review.md',
    difficulty: 'Einstieg',
  },

  // WACHSTUM
  {
    id: 'growth-bottleneck-finder',
    title: 'Growth Bottleneck Finder',
    description: 'Den primären Wachstumsengpass identifizieren — basierend auf Theory of Constraints.',
    category: 'wachstum',
    categoryLabel: 'Wachstum',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/growth-bottleneck-finder.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'growth-pain-assessment',
    title: 'Growth Pain Assessment',
    description: 'Tieferliegende Ursachen von Wachstumsstagnation über Symptome hinaus diagnostizieren.',
    category: 'wachstum',
    categoryLabel: 'Wachstum',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/growth-pain-assessment.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'scale-readiness-review',
    title: 'Scale Readiness Review',
    description: 'Sind Prozesse, Team und Revenue Engine bereit für Skalierung?',
    category: 'wachstum',
    categoryLabel: 'Wachstum',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/scale-readiness-review.md',
    difficulty: 'Expert',
  },
  {
    id: 'revenue-growth-blueprint',
    title: 'Revenue Growth Blueprint',
    description: 'Alle Diagnose-Findings in einen priorisierten 12-Monats-Plan synthetisieren.',
    category: 'wachstum',
    categoryLabel: 'Wachstum',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/revenue-growth-blueprint.md',
    difficulty: 'Expert',
  },

  // E-COMMERCE
  {
    id: 'ecommerce-growth-diagnostic',
    title: 'E-Commerce Growth Diagnostic',
    description: '5-dimensionales Shop-Audit: Acquisition, Conversion, Retention, Analytics und Technik.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/ecommerce-growth-diagnostic.md',
    difficulty: 'Expert',
  },
  {
    id: 'customer-lifetime-value-assessment',
    title: 'Customer Lifetime Value Assessment',
    description: 'LTV berechnen, CAC-Relation verstehen und Retention-Investment steuern.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/customer-lifetime-value-assessment.md',
    difficulty: 'Fortgeschritten',
  },
  {
    id: 'paid-social-efficiency-audit',
    title: 'Paid Social Efficiency Audit',
    description: 'Echte Profitabilität hinter ROAS: Deckungsbeitrag, Creative Fatigue und Attribution.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    github: 'https://github.com/performanceboost/performanceboost-skill-factory/blob/main/paid-social-efficiency-audit.md',
    difficulty: 'Fortgeschritten',
  },
];

const categories = [
  { value: 'alle', label: 'Alle', count: 36 },
  { value: 'strategie', label: 'Strategie', count: 4 },
  { value: 'nachfragegenerierung', label: 'Nachfragegenerierung', count: 4 },
  { value: 'revenue-operations', label: 'Revenue Operations', count: 5 },
  { value: 'marketing-automation', label: 'Marketing Automation', count: 4 },
  { value: 'vertrieb', label: 'Vertrieb', count: 4 },
  { value: 'ki-automatisierung', label: 'KI & Automatisierung', count: 4 },
  { value: 'daten-analytics', label: 'Daten & Analytics', count: 4 },
  { value: 'wachstum', label: 'Wachstum', count: 4 },
  { value: 'ecommerce', label: 'E-Commerce', count: 3 },
];

const categoryColors: Record<string, string> = {
  strategie: 'text-violet-700 bg-violet-50/80 border border-violet-100',
  nachfragegenerierung: 'text-blue-700 bg-blue-50/80 border border-blue-100',
  'revenue-operations': 'text-red-700 bg-red-50/80 border border-red-100',
  'marketing-automation': 'text-orange-700 bg-orange-50/80 border border-orange-100',
  vertrieb: 'text-green-700 bg-green-50/80 border border-green-100',
  'ki-automatisierung': 'text-indigo-700 bg-indigo-50/80 border border-indigo-100',
  'daten-analytics': 'text-cyan-700 bg-cyan-50/80 border border-cyan-100',
  wachstum: 'text-emerald-700 bg-emerald-50/80 border border-emerald-100',
  ecommerce: 'text-pink-700 bg-pink-50/80 border border-pink-100',
};

const difficultyColors: Record<string, string> = {
  Einstieg: 'text-green-700 bg-green-50/80 border border-green-100',
  Fortgeschritten: 'text-amber-700 bg-amber-50/80 border border-amber-100',
  Expert: 'text-purple-700 bg-purple-50/80 border border-purple-100',
};

interface SkillsDirectoryProps {
  onNavigate?: (path: string) => void;
}

export default function SkillsDirectory({ onNavigate }: SkillsDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('alle');

  const filteredSkills = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory =
        activeCategory === 'alle' || skill.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        query === '' ||
        skill.title.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.categoryLabel.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const handleBookMeeting = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/kontakt');
    } else {
      window.location.href = '/kontakt';
    }
  };

  return (
    <div className="bg-[#f6f6f6] min-h-screen text-slate-850" id="skills-directory-root">
      {/* 1. Hero Section */}
      <AnimatedSection className="bg-[#F6F6F6] border-b border-slate-200/60 py-16 md:py-24 relative overflow-hidden">
        {/* Ambient background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-[#EEEEFF] text-[#686DF4] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase font-mono shadow-sm">
            <Github className="w-3.5 h-3.5" />
            Skill Factory
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#1A1A2E] tracking-tight leading-tight">
            Diagnose zuerst.<br className="hidden sm:inline"/> Dann wachsen.
          </h1>
          
          <p className="text-[#505050] text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            36 strukturierte Analyse-Frameworks für jeden Engpass entlang der Revenue Engine. Für Gründer, GTM-Verantwortliche und Ops-Teams, die Probleme an der Wurzel lösen wollen — nicht mit Vermutungen.
          </p>

          <div className="flex items-center justify-center gap-10 pt-4 pb-2">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#686DF4]">36</div>
              <div className="text-xs text-[#505050] font-bold mt-1 uppercase tracking-wider font-mono">Diagnose-Frameworks</div>
            </div>
            <div className="h-10 w-px bg-slate-300"></div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#686DF4]">9</div>
              <div className="text-xs text-[#505050] font-bold mt-1 uppercase tracking-wider font-mono">Kategorien</div>
            </div>
          </div>

          <p className="text-xs text-slate-400 font-semibold bg-white/70 backdrop-blur-xs px-4 py-2 rounded-xl border border-slate-200/55 shadow-[0_2px_8px_rgba(0,0,0,0.01)] inline-block">
            🎁 Alle Frameworks sind kostenlos auf GitHub verfügbar — keine Anmeldung, kein Lead-Gate.
          </p>
        </div>
      </AnimatedSection>

      {/* 2. Filter & Suchleiste (Sticky Top-0) */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Framework suchen — z. B. „Funnel“, „Pipeline“ oder „AI“ …"
                className="w-full text-slate-800 text-xs text-slate-800 rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-[#686DF4] focus:border-[#686DF4] focus:bg-white transition-all font-medium placeholder:text-slate-400/80 shadow-[0_2px_4px_rgba(0,0,0,0.01)]"
                aria-label="Framework suchen"
              />
            </div>

            {/* Total count display */}
            <div className="hidden lg:block shrink-0 text-slate-500 font-bold font-mono text-xs bg-slate-100 border border-slate-200/60 px-3 py-1.5 rounded-lg">
              {filteredSkills.length} Framework{filteredSkills.length !== 1 ? 's' : ''} gefunden
            </div>

          </div>

          {/* Horizontally scrolling Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scroller-hidden pt-3.5 pb-0.5 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  role="tab"
                  aria-selected={isActive}
                  className={`rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#686DF4] text-white border-[#686DF4] shadow-[0_2px_8px_rgba(104,109,244,0.3)] scale-[1.02]'
                      : 'bg-white text-[#505050] border-slate-200 hover:border-[#686DF4] hover:text-[#686DF4] hover:bg-[#686DF4]/[0.02] shadow-xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* 3. Skills Grid container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Dynamic Mobile Count Indicator */}
        <div className="lg:hidden text-center mb-6 text-[11px] text-slate-500 font-bold font-mono uppercase tracking-wider">
          💡 {filteredSkills.length} Framework{filteredSkills.length !== 1 ? 's' : ''} für die Auswahl
        </div>

        <AnimatePresence mode="wait">
          {filteredSkills.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: PREMIUM_EASE }}
            >
              <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill) => (
                  <AnimatedChild key={skill.id} className="h-full">
                    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col gap-4 group h-full">
                      
                      {/* Badge Row */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide uppercase ${
                          categoryColors[skill.category] || 'text-slate-700 bg-slate-50'
                        }`}>
                          {skill.categoryLabel}
                        </span>
                        
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide uppercase ${
                          difficultyColors[skill.difficulty] || 'text-slate-700 bg-slate-50'
                        }`}>
                          {skill.difficulty}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="space-y-1.5">
                        <h3 className="text-slate-900 font-bold text-sm tracking-tight leading-snug group-hover:text-[#686DF4] transition-colors line-clamp-1">
                          {skill.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 min-h-[36px]">
                          {skill.description}
                        </p>
                      </div>

                      {/* GitHub Link Button with Icon */}
                      <div className="mt-auto pt-2">
                        <a 
                          href={skill.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white px-4 py-2.5 text-xs font-bold text-[#505050] hover:border-[#686DF4] hover:text-[#686DF4] transition-all hover:shadow-xs group/item"
                        >
                          <ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover/item:scale-110" />
                          Auf GitHub öffnen
                        </a>
                      </div>

                    </div>
                  </AnimatedChild>
                ))}
              </AnimatedGroup>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 bg-white rounded-2xl border border-slate-200 shadow-xs max-w-xl mx-auto px-6 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <SlidersHorizontal className="w-5 h-5" />
              </div>
              <p className="text-[#505050] text-sm md:text-base font-bold">
                Kein Framework gefunden für „{searchQuery}“.
              </p>
              <p className="text-slate-400 text-xs">
                Versuch es mit einem anderen Begriff oder setze die Filter zurück.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('alle'); }}
                className="text-[#686DF4] font-bold hover:underline text-xs inline-flex items-center gap-1 cursor-pointer"
              >
                Zurücksetzen & alle anzeigen <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Final CTA Section (Ende der Seite) */}
      <section className="bg-[#1A1A2E] py-20 relative overflow-hidden text-center text-white" id="skills-cta-bottom">
        {/* Visual lighting background grids */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-slate-800/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
            Nicht sicher, womit du anfangen sollst?
          </h2>
          
          <p className="text-[#A0A0B8] text-xs md:text-sm leading-relaxed max-w-xl mx-auto font-semibold">
            Die meisten Unternehmen lösen die falschen Probleme — weil sie nie systematisch diagnostiziert haben, was wirklich bremst. Ein 30-minütiges Gespräch reicht, um den richtigen Einstiegspunkt zu finden.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="/kontakt"
              onClick={handleBookMeeting}
              className="w-full sm:w-auto bg-[#686DF4] hover:bg-[#5558e0] text-white rounded-xl px-6 py-3 text-xs font-extrabold tracking-wide uppercase shadow-[0_4px_14px_rgba(104,109,244,0.4)] transition-all transform hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 cursor-pointer select-none"
            >
              Kostenloses Erstgespräch buchen
            </a>

            <a 
              href="https://github.com/performanceboost/performanceboost-skill-factory"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-[#A0A0B8] hover:text-white text-xs font-bold py-3 px-6 transition-colors flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Github className="w-4 h-4" />
              Alle Frameworks auf GitHub ansehen <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
