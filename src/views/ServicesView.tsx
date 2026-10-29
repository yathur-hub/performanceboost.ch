import React from 'react';
import { SERVICES } from '../data/services';
import { 
  TrendingUp, Megaphone, Users, Cpu, Layers, Sparkles, PieChart, ShieldAlert,
  ArrowRight, ArrowLeft, Check, CheckCircle2, Award, ChevronDown, ChevronUp, HelpCircle,
  ShoppingCart, RefreshCcw,
  PiggyBank, Cloud, Home, Briefcase, Factory, Compass, GraduationCap, Stethoscope, Hammer, Scale, Truck, Hotel
} from 'lucide-react';
import { motion } from 'motion/react';
import { EXTENDED_SERVICES_DATA } from '../data/servicesExtendedData';

import GrowthStrategyIndicator from '../components/GrowthStrategyIndicator';
import DemandPipelineGap from '../components/DemandPipelineGap';
import LeadGenerationScore from '../components/LeadGenerationScore';
import AutomationMaturityCheck from '../components/AutomationMaturityCheck';
import SalesAlignmentCheck from '../components/SalesAlignmentCheck';
import RevenueLeakDetector from '../components/RevenuLeakDetector';
import AIReadinessCheck from '../components/AIReadinessCheck';
import DataClarityCheck from '../components/DataClarityCheck';
import ShopConversionRechner from '../components/ShopConversionRechner';
import CacLtvCalculator from '../components/CacLtvCalculator';
import RetentionRevenueRechner from '../components/RetentionRevenueRechner';
import TrueROASRechner from '../components/TrueROASRechner';

interface ServicesViewProps {
  currentSlug?: string;
  onNavigate: (path: string) => void;
}

export default function ServicesView({ currentSlug, onNavigate }: ServicesViewProps) {
  
  const servicesIcons: { [key: string]: any } = {
    'growth-strategy': TrendingUp,
    'demand-generation': Megaphone,
    'lead-generation': Users,
    'marketing-automation': Cpu,
    'sales-enablement': ShieldAlert,
    'revenue-operations': Layers,
    'ai-automation': Sparkles,
    'data-analytics': PieChart,
    'ecommerce-performance': ShoppingCart,
    'dtc-growth-acquisition': TrendingUp,
    'customer-retention': RefreshCcw,
    'paid-social-ecommerce': TrendingUp
  };

  const servicesCopyOverride: { [key: string]: { benefit: string, desc: string } } = {
    'growth-strategy': {
      benefit: 'Sie wissen, wen Sie ansprechen und womit.',
      desc: 'Wir legen mit Ihnen fest, wer Ihre Wunschkunden sind, wie Sie sich positionieren und über welche Kanäle Sie diese erreichen. Daraus entsteht ein Plan, mit dem Ihr Team arbeiten kann.'
    },
    'demand-generation': {
      benefit: 'Regelmässig passende Anfragen für Ihren Vertrieb.',
      desc: 'Kampagnen auf Google, LinkedIn und Meta, abgestimmt mit Inhalten und E-Mail. Wir messen den Erfolg an Anfragen, nicht an Klicks.'
    },
    'lead-generation': {
      benefit: 'Aus Website-Besuchern werden Anfragen.',
      desc: 'Inhalte und SEO, die bei Google gefunden werden, Landingpages, die Anfragen erfassen, und eine Bewertung, die zeigt, welche Anfragen Vorrang haben.'
    },
    'marketing-automation': {
      benefit: 'Weniger Handarbeit, keine vergessenen Anfragen.',
      desc: 'Automatische Abläufe, die Interessenten weiterbegleiten und zur richtigen Zeit an den Vertrieb übergeben. Dazu ein CRM, das Ihr Team gerne nutzt.'
    },
    'sales-enablement': {
      benefit: 'Ihr Vertrieb geht besser vorbereitet ins Gespräch.',
      desc: 'Marketing und Vertrieb arbeiten mit denselben Kriterien. Wir erarbeiten Übergaben, Verkaufsunterlagen und Leitfäden, die im Alltag genutzt werden.'
    },
    'revenue-operations': {
      benefit: 'Marketing, Vertrieb und Kundenbetreuung arbeiten mit denselben Zahlen.',
      desc: 'Wenn Ihre Teams mit unterschiedlichen Daten arbeiten, geht Umsatz verloren. Wir ordnen Abläufe, Daten und Tools so, dass alle auf dasselbe Ziel hinarbeiten.'
    },
    'ai-automation': {
      benefit: 'Weniger Routinearbeit im Vertrieb und Marketing.',
      desc: 'KI-gestützte Abläufe für Recherche, Texte, Personalisierung und Auswertungen. Wir setzen KI dort ein, wo sie Ihrem Team nachweisbar Zeit spart.'
    },
    'data-analytics': {
      benefit: 'Sie sehen, was funktioniert und wo Budget verloren geht.',
      desc: 'Datenschutzkonformes Tracking, Dashboards und Berichte, die Entscheidungen auf Zahlen stützen. Von der Website-Messung bis zur Zuordnung von Umsatz zu Kanälen.'
    },
    'dtc-growth-acquisition': {
      benefit: 'Kundengewinnung, deren Kosten Sie kennen.',
      desc: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine verlässliche Kundengewinnung. Wir ordnen Ihre Kampagnen, verbessern den Shop und messen Kosten pro Kunde und Kundenwert.'
    },
    'customer-retention': {
      benefit: 'Bestehende Kunden gezielt halten und zurückholen.',
      desc: 'Einen Kunden zu halten ist meist günstiger, als einen neuen zu gewinnen. Wir bauen automatische E-Mails nach dem Kauf, Rückgewinnungsstrecken und Treueprogramme auf.'
    },
    'paid-social-ecommerce': {
      benefit: 'Anzeigen nach Deckungsbeitrag statt nur nach ROAS.',
      desc: 'Viele Shops steuern ihre Werbung nach Umsatz. Wir beziehen Marge, Versand und Retouren ein und steuern Meta und TikTok nach dem, was am Ende übrig bleibt.'
    }
  };

  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate('/kontakt');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ----------------------------------------------------
  // SUB-PAGE: SINGLE SERVICE DETAIL VIEW
  // ----------------------------------------------------
  if (currentSlug) {
    const service = SERVICES.find(s => s.slug === currentSlug);
    
    if (!service) {
      return (
        <div className="pt-32 pb-16 text-center text-slate-800 space-y-4">
          <p className="text-slate-500">Leistung "{currentSlug}" wurde nicht gefunden.</p>
          <button 
            onClick={() => onNavigate('/leistungen')}
            className="text-[#686DF4] font-bold hover:underline bg-transparent border-none cursor-pointer"
          >
            Zurück zur Übersicht
          </button>
        </div>
      );
    }

    const IconComponent = servicesIcons[service.slug] || TrendingUp;
    const localized = servicesCopyOverride[service.slug] || { benefit: service.shortDesc, desc: service.description };
    const extendedContent = EXTENDED_SERVICES_DATA.find(e => e.slug === currentSlug);

    if (extendedContent) {
      return (
        <div className="pt-24 pb-20 text-slate-800 space-y-28 animate-fadeIn" id={`service-detail-${service.slug}`}>
          
          {/* Back Link and Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/leistungen');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-900 transition-colors cursor-pointer font-bold uppercase tracking-wider bg-transparent border-none outline-none font-mono"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Zurück zur Leistungsübersicht
            </button>
          </div>

          {/* HERO SECTION WITH DYNAMIC INTERACTIVE AUDITS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#686DF4] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-3 py-1 rounded-lg">
                  Leistung
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1] text-left">
                {extendedContent.hero.headline}
              </h1>
              <p className="text-slate-500 text-body-lg leading-relaxed font-medium text-left">
                {extendedContent.hero.subheadline}
              </p>
              
              {/* Secondary block with metrics info */}
              {service.metrics.length > 0 && (
              <div className="bg-slate-50/70 border border-slate-200/50 p-6 rounded-2xl text-left space-y-3.5">
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Kennzahlen</h4>
                <div className="grid grid-cols-2 gap-4">
                  {service.metrics.map((met, index) => (
                    <div key={index} className="space-y-0.5">
                      <span className="text-lg font-bold font-display text-[#686DF4] block leading-none">{met.value}</span>
                      <span className="text-[11px] text-slate-400 font-bold uppercase font-mono tracking-wider block">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              )}

              <div className="pt-2 text-left">
                <button 
                  onClick={handleConsultation}
                  className="bg-slate-900 hover:bg-[#686DF4] text-white font-bold text-xs px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer uppercase tracking-widest shadow-md hover:-translate-y-0.5"
                >
                  {extendedContent.hero.ctaText} <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Interactive Hero Calculator/Audit */}
            <div className="lg:col-span-7 w-full animate-fadeIn">
              {(() => {
                switch (service.slug) {
                  case 'growth-strategy':
                    return <GrowthStrategyIndicator />;
                  case 'demand-generation':
                    return <DemandPipelineGap />;
                  case 'lead-generation':
                    return <LeadGenerationScore />;
                  case 'marketing-automation':
                    return <AutomationMaturityCheck />;
                  case 'sales-enablement':
                    return <SalesAlignmentCheck />;
                  case 'revenue-operations':
                    return <RevenueLeakDetector />;
                  case 'ai-automation':
                    return <AIReadinessCheck />;
                  case 'data-analytics':
                    return <DataClarityCheck />;
                  case 'ecommerce-performance':
                    return <ShopConversionRechner />;
                  case 'dtc-growth-acquisition':
                    return <CacLtvCalculator />;
                  case 'customer-retention':
                    return <RetentionRevenueRechner />;
                  case 'paid-social-ecommerce':
                    return <TrueROASRechner />;
                  default:
                    return null;
                }
              })()}
            </div>
          </section>

          {/* PROBLEM SECTION */}
          <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center animate-fadeIn">
              <span className="text-[11px] font-mono text-red-650 font-bold uppercase tracking-widest bg-red-50/50 px-3 py-1.5 rounded-lg border border-red-100/20">
                Ausgangslage
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-medium text-slate-900 tracking-tight">
                {extendedContent.problem.title}
              </h2>
              <div className="space-y-6 max-w-2xl mx-auto">
                {extendedContent.problem.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-500 text-body leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* LEISTET SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">Leistungsumfang</span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">
                {extendedContent.leistet.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedContent.leistet.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] hover:border-[#686DF4]/25 hover:shadow-[var(--shadow-premium-lg)] transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-150 font-mono text-xs font-bold text-slate-400 group-hover:bg-[#686DF4] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#686DF4] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* APPROACH SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">Vorgehen</span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">
                {extendedContent.approach.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {extendedContent.approach.items.map((item, idx) => (
                <div key={idx} className="bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-8 rounded-3xl space-y-4 relative shadow-[var(--shadow-premium-sm)]">
                  <div className="bg-[#686DF4]/10 text-[#686DF4] text-[11px] tracking-widest font-mono font-bold px-2.5 py-1 rounded-md w-fit border border-[#CACCFB]/20">
                    PHASE {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-1 border-b border-slate-100 pb-3 leading-tight">
                    {item.title.replace(/^Phase \d+:\s*/, '')}
                  </h3>
                  <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* DYNAMIC EXTRA SECTIONS */}
          {extendedContent.extraSections && extendedContent.extraSections.map((sec, sIdx) => {
            if (sec.type === 'cases') return null; // Ensure we strip out any remaining case studies
            return (
              <section key={sIdx} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="border-l-4 border-[#686DF4] pl-4 space-y-1">
                  <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 tracking-tight text-left">
                    {sec.title}
                  </h2>
                  {sec.subtitle && (
                    <p className="text-xs text-slate-400 font-bold text-left tracking-wide uppercase font-mono">
                      {sec.subtitle}
                    </p>
                  )}
                </div>

                {sec.type === 'grid' && sec.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sec.items.map((it, iIdx) => (
                      <div key={iIdx} className="bg-white border border-[#E0E0E0]/65 p-6 rounded-3xl shadow-[var(--shadow-premium-sm)] space-y-2 text-left">
                        <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2 leading-tight">
                          <span className="w-1.5 h-1.5 bg-[#686DF4] rounded-full shrink-0" />
                          {it.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {it.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === 'text' && sec.text && (
                  <div className="bg-[#686DF4]/5 border-l-4 border-[#686DF4] p-8 rounded-r-3xl max-w-4xl text-left">
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                      {sec.text}
                    </p>
                  </div>
                )}

                {sec.type === 'list' && sec.bullets && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-8 rounded-3xl text-left">
                    {sec.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex gap-2.5 items-start">
                        <div className="w-4 h-4 rounded-full bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center shrink-0 mt-0.5 border border-[#CACCFB]/25">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <p className="text-xs text-slate-600 font-semibold leading-normal">
                          {b}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.type === 'investment' && sec.items && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
                    {sec.items.map((it, iIdx) => (
                      <div key={iIdx} className="bg-white border-2 border-slate-100 hover:border-[#686DF4] p-8 rounded-3xl space-y-4 transition-colors flex flex-col justify-between shadow-[var(--shadow-premium-sm)] text-left">
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest pb-2 border-b border-slate-100 font-mono">
                            {it.title}
                          </h4>
                          <p className="text-[#686DF4] font-display font-medium text-2xl">
                            {it.desc}
                          </p>
                        </div>
                        <p className="text-xs text-slate-500 pt-2 leading-relaxed font-semibold">
                          {it.extra}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}

          {/* BENEFITS & DELIVERABLES */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 pt-4">
            {/* Benefits */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#686DF4] pl-4">
                <h2 className="text-xl font-display font-semibold tracking-tight text-slate-900 text-left leading-none">Ihr Nutzen</h2>
                <p className="text-xs text-slate-400 text-left mt-1.5 font-semibold">Was sich für Ihr Unternehmen konkret verbessert.</p>
              </div>
              <div className="space-y-4 text-left">
                {service.benefits.map((ben, idx) => (
                  <div key={idx} className="flex gap-4 bg-[#f6f6f6]/55 p-5 border border-slate-200/50 rounded-2xl shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-[#686DF4]/5 text-[#686DF4] flex items-center justify-center shrink-0 mt-0.5 border border-[#CACCFB]/25">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-body-sm text-slate-600 font-medium leading-relaxed">{ben}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-6">
              <div className="border-l-4 border-slate-950 pl-4">
                <h2 className="text-xl font-display font-semibold tracking-tight text-slate-900 text-left leading-none font-sans">Was Sie erhalten</h2>
                <p className="text-xs text-slate-400 text-left mt-1.5 font-semibold">Diese Ergebnisse übergeben wir dokumentiert und einsatzbereit.</p>
              </div>
              <div className="space-y-4 text-left">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-5 border border-[#E0E0E0]/65 rounded-2xl items-center shadow-xs">
                    <span className="w-6 h-6 bg-[#f6f6f6] text-slate-400 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold border border-slate-100">
                      0{idx + 1}
                    </span>
                    <p className="text-body-sm font-semibold text-slate-805 leading-snug">{del}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ ACCORDION SECTION */}
          <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">Häufige Fragen</span>
                <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">
                  Fragen zur Umsetzung
                </h2>
              </div>

              <div className="space-y-4 max-w-3xl mx-auto">
                {extendedContent.faq.map((fq, fidx) => {
                  const [isOpen, setIsOpen] = React.useState(false);
                  return (
                    <div key={fidx} className="bg-white border border-[#E0E0E0]/65 rounded-2xl overflow-hidden shadow-[var(--shadow-premium-sm)] transition-colors">
                      <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full text-left p-5 flex justify-between items-center bg-transparent cursor-pointer border-none outline-none"
                      >
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 pr-4 leading-snug">
                          {fq.q}
                        </h4>
                        <span className="text-[#686DF4] shrink-0">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-400 font-bold" />}
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div className="p-6 pt-0 border-t border-slate-100/50 bg-slate-50/20 text-left animate-fadeIn">
                          <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                            {fq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* PERSONAL BIO SECTION */}
          <section className="bg-white border border-[#E0E0E0]/65 p-8 md:p-10 rounded-3xl max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)] transition duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
              <div className="md:col-span-4 shrink-0 flex justify-center md:justify-start">
                <img 
                  src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
                  alt="Yathur Nathan" 
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl border border-slate-200 shadow-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-8 space-y-4">
                <div>
                  <h3 className="text-[#686DF4] text-xl font-display font-bold leading-tight">Yathur Nathan</h3>
                  <p className="text-xs font-mono font-bold text-[#686DF4] tracking-wider uppercase mt-1">Gründer &amp; Inhaber</p>
                </div>
                <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                  Als Gründer von performanceboost helfe ich Schweizer KMU, über Google, Meta, LinkedIn und die eigene Website planbar Kundenanfragen zu gewinnen. Kampagnen, Landingpages, Tracking und Automatisierung setze ich persönlich um, und Sie haben von der ersten Analyse bis zum Bericht einen festen Ansprechpartner.
                </p>
                <p className="text-body-sm text-[#686DF4] font-semibold leading-relaxed pt-1.5 border-t border-slate-100 italic">
                  {(() => {
                    const personalHighlights: { [key: string]: string } = {
                      'growth-strategy': 'Gemeinsam schärfen wir Ihre Positionierung und beschreiben Ihre Wunschkunden, damit jede weitere Massnahme auf einem klaren Plan aufbaut.',
                      'demand-generation': 'Ich plane und betreue Ihre Kampagnen auf Google, LinkedIn und Meta so, dass sie bei Ihrer Zielgruppe ankommen und messbar Anfragen bringen.',
                      'lead-generation': 'Mit nützlichen Inhalten, SEO und einer persönlichen Direktansprache bauen wir einen Weg auf, über den regelmässig Anfragen für Erstgespräche entstehen.',
                      'marketing-automation': 'Wir automatisieren das Nachfassen bei Interessenten und bringen Ordnung in Ihr CRM, damit Ihr Vertrieb sich auf die richtigen Gespräche konzentrieren kann.',
                      'sales-enablement': 'Ich erarbeite mit Ihrem Vertrieb Argumente, Unterlagen und Leitfäden, die im Verkaufsgespräch tatsächlich genutzt werden.',
                      'revenue-operations': 'Wir bringen die Daten von Marketing, Vertrieb und Kundenbetreuung zusammen, damit alle mit denselben Zahlen arbeiten.',
                      'ai-automation': 'Ich setze KI-Abläufe dort ein, wo sie Ihrem Team Routinearbeit abnehmen, und lasse sie weg, wo sie nichts bringen.',
                      'data-analytics': 'Mit sauberem, datenschutzkonformem Tracking und nachvollziehbaren Berichten sehen Sie, welche Kanäle Ihnen Kunden und Umsatz bringen.'
                    };
                    return personalHighlights[service.slug] || '';
                  })()}
                </p>
              </div>
            </div>
          </section>

          {/* CTA CALLOUT */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-950 text-white rounded-3xl p-10 md:p-14 text-center space-y-8 shadow-[var(--shadow-premium-lg)] relative overflow-hidden border border-slate-900">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none" />
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold tracking-tight max-w-2xl mx-auto leading-tight text-white">
                {extendedContent.cta.headline}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto opacity-95 font-medium">
                {extendedContent.cta.subheadline}
              </p>

              <button
                onClick={handleConsultation}
                className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                {extendedContent.cta.buttonText}
              </button>
            </div>
          </section>

        </div>
      );
    }
  }

  // ----------------------------------------------------
  // GENERAL OVERVIEW: GRID OF ALL 8 SERVICES
  // ----------------------------------------------------
  return (
    <div className="pt-24 pb-16 space-y-28 text-slate-800" id="services-overview-page text-center">
      
      {/* Hero section */}
      <section className="relative bg-white py-28 border-b border-slate-100 overflow-hidden text-center animate-fadeIn">
        <div className="absolute top-0 left-10 w-80 h-80 bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Leistungen
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]">
            Mehr Kundenanfragen über Google, Meta, LinkedIn und Ihre Website.
          </h1>
          <p className="text-slate-500 text-body-lg max-w-xl mx-auto leading-relaxed font-medium">
            performanceboost unterstützt Schweizer KMU bei der digitalen Neukundengewinnung. Wir planen und betreuen Kampagnen auf Google, Meta und LinkedIn, bauen Landingpages, die aus Besuchern Anfragen machen, richten sauberes Tracking und verständliche Berichte ein und automatisieren das Nachfassen mit Marketing Automation. Alles aus einer Hand, persönlich umgesetzt von Inhaber Yathur Nathan.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fadeIn">
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">Übersicht</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Unsere Leistungen im Detail</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s) => {
            const IconComp = servicesIcons[s.slug] || TrendingUp;
            const localized = servicesCopyOverride[s.slug] || { benefit: s.shortDesc, desc: s.description };
            return (
              <div 
                key={s.slug}
                className="bg-white border border-[#E0E0E0]/65 hover:border-[#686DF4]/25 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)] hover:-translate-y-1 group"
              >
                <div className="space-y-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center shrink-0 group-hover:bg-[#686DF4] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <IconComp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors leading-tight">{s.title}</h3>
                    <p className="text-[11px] text-[#686DF4] font-bold tracking-widest leading-relaxed mt-3 uppercase font-mono">{localized.benefit}</p>
                    <p className="text-body-sm text-slate-500 leading-relaxed mt-3.5 line-clamp-4 font-medium">{localized.desc}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-8 flex justify-between items-center">
                  <span className="text-[11px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                    Leistung
                  </span>
                  <button
                    onClick={() => {
                      onNavigate(`/leistungen/${s.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-[#686DF4] font-bold inline-flex items-center gap-1.5 cursor-pointer hover:text-[#686DF4]/80"
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW WE COMBINE SERVICES */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-24 md:py-32 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
          
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-widest">Kombinationen</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Wie wir Leistungen kombinieren</h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed font-semibold">
              Einzelne Leistungen bringen schon viel. Am meisten erreichen Sie, wenn Kampagnen, Website, Tracking und Vertrieb aufeinander abgestimmt sind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Combo 1 */}
            <div className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-5 shadow-[var(--shadow-premium-sm)] text-left flex flex-col justify-between hover:border-[#686DF4]/10 transition-colors duration-300">
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-2.5 py-1 rounded-md">Schnell Anfragen</span>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Online-Werbung + Lead-Generierung</h3>
                <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                  Google Ads bringen ab den ersten Wochen Anfragen, belastbare Daten liegen meist nach 4–8 Wochen vor. SEO und Inhalte bauen parallel Sichtbarkeit auf, die über mehrere Monate wächst.
                </p>
              </div>
              <button 
                onClick={() => {
                  onNavigate('/leistungen');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-[#686DF4] font-bold w-fit mt-5 inline-flex items-center gap-1.5 cursor-pointer hover:text-[#686DF4]/80"
              >
                Kombinationen ansehen <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Combo 2 */}
            <div className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-5 shadow-[var(--shadow-premium-sm)] text-left flex flex-col justify-between hover:border-[#686DF4]/10 transition-colors duration-300">
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-2.5 py-1 rounded-md">Anfragen weiterbegleiten</span>
                <h3 className="text-base font-bold text-slate-900 leading-tight">Online-Werbung + Automation + CRM</h3>
                <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                  Kampagnen bringen neue Kontakte, automatische E-Mails begleiten sie weiter, und das CRM übergibt sie zur richtigen Zeit an Ihren Vertrieb. So geht unterwegs keine Anfrage verloren.
                </p>
              </div>
              <button 
                onClick={() => {
                  onNavigate('/leistungen');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-[#686DF4] font-bold w-fit mt-5 inline-flex items-center gap-1.5 cursor-pointer hover:text-[#686DF4]/80"
              >
                Kombinationen ansehen <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Combo 3 */}
            <div className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-5 shadow-[var(--shadow-premium-sm)] text-left flex flex-col justify-between hover:border-[#686DF4]/10 transition-colors duration-300">
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-2.5 py-1 rounded-md">Gemeinsame Zahlen</span>
                <h3 className="text-base font-bold text-slate-900 leading-tight">RevOps + Vertriebsunterstützung + Tracking</h3>
                <p className="text-body-sm text-slate-500 leading-relaxed font-medium">
                  Marketing und Vertrieb arbeiten mit gemeinsamen Zielen und denselben Daten. Ein gemeinsames Dashboard zeigt allen, woher Anfragen kommen und was daraus wird.
                </p>
              </div>
              <button 
                onClick={() => {
                  onNavigate('/leistungen');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-[#686DF4] font-bold w-fit mt-5 inline-flex items-center gap-1.5 cursor-pointer hover:text-[#686DF4]/80"
              >
                Kombinationen ansehen <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* BRANCHENLOESUNGEN CARDS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#fcfcfc] border-y border-[#E2E8F0]/30 py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-[11px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">Branchen</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Lösungen für Schweizer Branchen</h2>
            <p className="text-body-sm text-slate-500 font-medium leading-relaxed">
              Wählen Sie Ihre Branche und schätzen Sie mit unseren Rechnern grob ab, wie viel Potenzial bei Anfragen und Umsatz noch offen ist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {[
              {
                title: 'Finanzdienstleister',
                slug: 'finanzdienstleister',
                desc: 'Regelkonforme Kundengewinnung für Vermögensverwalter und Finanzberater.',
                icon: PiggyBank,
                tool: 'Beratungs-Pipeline-Rechner'
              },
              {
                title: 'SaaS & Software',
                slug: 'saas-software',
                desc: 'Weniger verlorene Anfragen zwischen erstem Kontakt und Vertragsabschluss.',
                icon: Cloud,
                tool: 'Revenue-Leck-Rechner'
              },
              {
                title: 'Immobilien',
                slug: 'immobilien',
                desc: 'Neubauten und Gewerbeflächen schneller vermarkten.',
                icon: Home,
                tool: 'Leerstandskosten-Rechner'
              },
              {
                title: 'Treuhand & UB',
                slug: 'treuhand-unternehmensberatung',
                desc: 'Weniger Aufwand mit Belegen und gezielt passende Mandate gewinnen.',
                icon: Briefcase,
                tool: 'Kanzlei-Wachstums-Check'
              },
              {
                title: 'Industrie & KMU',
                slug: 'b2b-industrie-kmu',
                desc: 'Mehr qualifizierte Anfragen und Offerten für Industriekunden.',
                icon: Factory,
                tool: 'Angebots-Pipeline-Rechner'
              },
              {
                title: 'IT-Dienstleister & MSPs',
                slug: 'it-dienstleister-msps',
                desc: 'Wiederkehrende Umsätze ausbauen, mit klar verpackten Serviceangeboten.',
                icon: Cpu,
                tool: 'Recurring Revenue Rechner'
              },
              {
                title: 'Ingenieur- & Planungsbüros',
                slug: 'ingenieur-planungsbuero',
                desc: 'Weniger Abhängigkeit von einzelnen Auftraggebern, mehr Kontakte zu Bauherren.',
                icon: Compass,
                tool: 'Projektpipeline-Check'
              },
              {
                title: 'Personalvermittler',
                slug: 'personalvermittler-recruiting',
                desc: 'Mehr Suchmandate von Arbeitgebern und mehr passende Kandidaten.',
                icon: Users,
                tool: 'Placement-Effizienz-Rechner'
              },
              {
                title: 'Bildung & Weiterbildung',
                slug: 'bildung-weiterbildung',
                desc: 'Mehr Anmeldungen für CAS-Lehrgänge, Seminare und Studiengänge.',
                icon: GraduationCap,
                tool: 'Kurs-Funnel-Rechner'
              },
              {
                title: 'Gesundheitswesen',
                slug: 'gesundheitswesen',
                desc: 'Marketing für Praxen und Kliniken, um Zuweiser und Selbstzahler zu gewinnen.',
                icon: Stethoscope,
                tool: 'Neupatienten-Potenzial-Check'
              },
              {
                title: 'Handwerk & Bau',
                slug: 'handwerk',
                desc: 'Offerten schneller erstellen und weniger Papierkram.',
                icon: Hammer,
                tool: 'Auftrags-Pipeline-Rechner'
              },
              {
                title: 'Rechtsanwälte',
                slug: 'rechtsanwaelte',
                desc: 'Gezielt Wirtschafts- und Spezialmandate gewinnen, mit wenig Zusatzaufwand.',
                icon: Scale,
                tool: 'Kanzlei-Auslastungs-Check'
              },
              {
                title: 'Logistik & Transport',
                slug: 'logistik-transport',
                desc: 'Leerfahrten reduzieren und freie Kapazitäten besser auslasten.',
                icon: Truck,
                tool: 'Flottenauslastungs-Rechner'
              },
              {
                title: 'Hospitality & Hotels',
                slug: 'hospitality',
                desc: 'Mehr Direktbuchungen und weniger Kommissionen an Buchungsplattformen.',
                icon: Hotel,
                tool: 'Direktbuchungs-Rechner'
              }
            ].map((ind) => {
              const IconComp = ind.icon;
              return (
                <div 
                  key={ind.slug}
                  id={`industry-card-${ind.slug}`}
                  onClick={() => {
                    onNavigate(`/loesungen/${ind.slug}`);
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }}
                  className="bg-white border border-[#E0E0E0]/65 p-6 rounded-3xl flex flex-col justify-between shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[#686DF4]/25 transition-all duration-300 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-2.5 bg-[#f6f6f6] rounded-xl border border-slate-100 group-hover:bg-[#686DF4]/5 group-hover:border-[#686DF4]/25 group-hover:text-[#686DF4] transition-colors">
                        <IconComp className="w-5 h-5 text-slate-400 group-hover:text-[#686DF4] transition-colors" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#686DF4] bg-[#686DF4]/5 border border-[#686DF4]/10 px-2 py-0.5 rounded uppercase">
                        Branche
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-body-sm text-slate-500 font-medium leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#686DF4]">
                      {ind.tool}
                    </span>
                    <span className="text-xs text-[#686DF4] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* FINAL CALLOUT AND CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 animate-fadeIn">
        <div className="bg-slate-950 text-white border border-slate-900 rounded-3xl p-10 md:p-14 text-center space-y-8 shadow-[var(--shadow-premium-lg)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[11px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">Erstgespräch</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-white leading-tight">Welche Leistung passt zu Ihrem Unternehmen?</h2>
          <p className="text-body text-slate-300 leading-relaxed max-w-xl mx-auto opacity-95 font-medium">
            In einem unverbindlichen Gespräch von 30 Minuten schauen wir auf Ihre Situation und klären, womit Sie am sinnvollsten beginnen.
          </p>

          <button
            type="button"
            onClick={() => onNavigate('/kontakt')}
            className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 inline-block text-center cursor-pointer border-0"
          >
            Erstgespräch vereinbaren
          </button>
        </div>
      </section>

    </div>
  );
}
