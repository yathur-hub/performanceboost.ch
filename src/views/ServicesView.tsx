import React from 'react';
import { SERVICES } from '../data/services';
import { 
  TrendingUp, Megaphone, Users, Cpu, Layers, Sparkles, PieChart, ShieldAlert,
  ArrowRight, ArrowLeft, Check, CheckCircle2, Award, ChevronDown, ChevronUp, HelpCircle,
  ShoppingCart, RefreshCcw
} from 'lucide-react';
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
      benefit: 'Du weisst, wohin du wächst — und warum.',
      desc: 'Kein Wachstum ohne Richtung. Wir entwickeln deine Go-to-Market-Strategie, definieren Zielgruppen, Positionierung und Wachstumshebel. Das Ergebnis: Ein klarer Plan, der dein Team auf ein gemeinsames Ziel ausrichtet.'
    },
    'demand-generation': {
      benefit: 'Dein Vertrieb bekommt konstant qualifizierte Leads.',
      desc: 'Multi-Channel Demand Generation, die systematisch Nachfrage erzeugt. Paid Media, Content, LinkedIn, Email — koordiniert zu einer Pipeline-Maschine. Nicht Klicks. Kaufbereite Leads.'
    },
    'lead-generation': {
      benefit: 'Aus anonymen Besuchern werden qualifizierte Interessenten.',
      desc: 'Organische und bezahlte Lead-Generierung. Content-Strategien, die ranken und konvertieren. Landing Pages, die Leads erfassen. Lead-Scoring, das Qualität sicherstellt.'
    },
    'marketing-automation': {
      benefit: 'Dein Team arbeitet weniger manuell — und erzielt mehr.',
      desc: 'Automation-Workflows, die Leads nurturen, qualifizieren und übergeben. CRM-Strukturen, die deinem Sales-Team geben, was es braucht. Skalierbar. Ohne Prozess-Chaos.'
    },
    'sales-enablement': {
      benefit: 'Dein Vertrieb schliesst schneller — mit besseren Tools.',
      desc: 'Marketing und Sales sprechen dieselbe Sprache. Wir bauen Übergabeprozesse, Sales-Content and Enablement-Strukturen, die den Vertrieb produktiver machen.'
    },
    'revenue-operations': {
      benefit: 'Marketing, Sales und Customer Success arbeiten als System.',
      desc: 'Wenn deine Teams nicht koordiniert sind, verlierst du Revenue. Wir bauen die operativen Grundlagen: Prozesse, Daten-Infrastruktur, Tool-Integration — damit alle Teams auf ein gemeinsames Ziel hinarbeiten.'
    },
    'ai-automation': {
      benefit: 'Mehr Geschwindigkeit. Weniger manuelle Arbeit.',
      desc: 'AI-gestützte Workflows für Research, Content, Personalisierung und Analyse. Wir implementieren dort, wo AI messbaren Einfluss auf dein Wachstum hat — nicht als Experiment, sondern als Produktivitätshebel.'
    },
    'data-analytics': {
      benefit: 'Du weisst jederzeit, was funktioniert — und wo Revenue verloren geht.',
      desc: 'Dashboards, Tracking-Strukturen und Reporting-Systeme, die Entscheidungen auf Fakten stützen. Von Funnel-Analytics bis Attribution. Daten als Wachstumssteuerung.'
    },
    'dtc-growth-acquisition': {
      benefit: 'Skalierbare Kundengewinnung & CAC/LTV-Steuerung.',
      desc: 'Viele Schweizer Online-Brands haben ein starkes Produkt – aber ein brüchiges Acquisition-System. Wir strukturieren deine Kampagnen, optimieren den Funnel und steigern die Performance.'
    },
    'customer-retention': {
      benefit: 'Bestandskunden systematisch aktivieren und halten.',
      desc: 'Ein Neukunde kostet das 5- bis 7-fache eines Bestandskunden. Wir etablieren automatisierte Kundenlebenszyklus-Flows, Win-Back-Schlaufen und Loyalitäts-Pipelines.'
    },
    'paid-social-ecommerce': {
      benefit: 'Ads optimiert auf echten Deckungsbeitrag statt eitlen ROAS.',
      desc: 'Die meisten E-Commerce-Shops optimieren auf Umsatz-ROAS. Wir rücken Datenpräzision runderherum in den Fokus und optimieren auf echten Deckungsbeitrag unter Abzug aller Logistikkosten.'
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
              <ArrowLeft className="w-3.5 h-3.5" /> ZURÜCK ZUR LEISTUNGSÜBERSICHT
            </button>
          </div>

          {/* HERO SECTION WITH DYNAMIC INTERACTIVE AUDITS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#686DF4] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-3 py-1 rounded-lg">
                  DIAGNOSTIZIERTER HEBEL
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1] text-left">
                {extendedContent.hero.headline}
              </h1>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold text-left">
                {extendedContent.hero.subheadline}
              </p>
              
              {/* Secondary block with metrics info */}
              <div className="bg-slate-50/70 border border-slate-200/50 p-6 rounded-2xl text-left space-y-3.5">
                <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400">PROGNOSTIZIERTER IMPACT:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {service.metrics.map((met, index) => (
                    <div key={index} className="space-y-0.5">
                      <span className="text-lg font-bold font-display text-[#686DF4] block leading-none">{met.value}</span>
                      <span className="text-[8px] text-slate-400 font-bold uppercase font-mono tracking-wider block">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>

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
              <span className="text-[10px] font-mono text-red-650 font-bold uppercase tracking-widest bg-red-50/50 px-3 py-1.5 rounded-lg border border-red-100/20">
                IST-SITUATION
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-medium text-slate-900 tracking-tight">
                {extendedContent.problem.title}
              </h2>
              <div className="space-y-6 max-w-2xl mx-auto">
                {extendedContent.problem.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* LEISTET SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">WIRKUNGSBEREICH</span>
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
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-[#686DF4] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* APPROACH SECTION */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3">
              <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">IMPLEMENTIERUNGSFLOW</span>
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">
                {extendedContent.approach.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {extendedContent.approach.items.map((item, idx) => (
                <div key={idx} className="bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-8 rounded-3xl space-y-4 relative shadow-[var(--shadow-premium-sm)]">
                  <div className="bg-[#686DF4]/10 text-[#686DF4] text-[9px] tracking-widest font-mono font-bold px-2.5 py-1 rounded-md w-fit border border-[#CACCFB]/20">
                    PHASE {idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm pt-1 border-b border-slate-100 pb-3 leading-tight">
                    {item.title.replace(/^Phase \d+:\s*/, '')}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
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
                          <h4 className="font-bold text-slate-900 text-[10px] uppercase tracking-widest pb-2 border-b border-slate-100 font-mono">
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
                <h2 className="text-xl font-display font-semibold tracking-tight text-slate-900 text-left leading-none">Ihr konkreter Nutzen</h2>
                <p className="text-xs text-slate-400 text-left mt-1.5 font-semibold">Warum sich diese Struktur für dein Vertriebsteam bezahlt macht.</p>
              </div>
              <div className="space-y-4 text-left">
                {service.benefits.map((ben, idx) => (
                  <div key={idx} className="flex gap-4 bg-[#f6f6f6]/55 p-5 border border-slate-200/50 rounded-2xl shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-[#686DF4]/5 text-[#686DF4] flex items-center justify-center shrink-0 mt-0.5 border border-[#CACCFB]/25">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs text-slate-600 font-semibold leading-relaxed">{ben}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="space-y-6">
              <div className="border-l-4 border-slate-950 pl-4">
                <h2 className="text-xl font-display font-semibold tracking-tight text-slate-900 text-left leading-none font-sans">Schlüsselfertige Deliverables</h2>
                <p className="text-xs text-slate-400 text-left mt-1.5 font-semibold">Das übergeben wir strukturiert und betriebsbereit.</p>
              </div>
              <div className="space-y-4 text-left">
                {service.deliverables.map((del, idx) => (
                  <div key={idx} className="flex gap-4 bg-white p-5 border border-[#E0E0E0]/65 rounded-2xl items-center shadow-xs">
                    <span className="w-6 h-6 bg-[#f6f6f6] text-slate-400 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold border border-slate-100">
                      0{idx + 1}
                    </span>
                    <p className="text-xs font-bold text-slate-805 leading-snug">{del}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ ACCORDION SECTION */}
          <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-24 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-3">
                <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">PROZESSQUALITÄT</span>
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
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 pr-4 leading-snug">
                          {fq.q}
                        </h4>
                        <span className="text-[#686DF4] shrink-0">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-slate-400 font-bold" />}
                        </span>
                      </button>
                      
                      {isOpen && (
                        <div className="p-6 pt-0 border-t border-slate-100/50 bg-slate-50/20 text-left animate-fadeIn">
                          <p className="text-xs text-slate-500 leading-relaxed font-semibold">
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
                  <h3 className="text-lg font-display font-semibold text-slate-900 leading-tight">Yathur Nathan</h3>
                  <p className="text-xs font-mono font-bold text-[#686DF4] tracking-wider uppercase mt-1">Gründer &amp; Inhaber</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Als Gründer von performanceboost unterstütze ich Schweizer Unternehmen dabei, isolierte Massnahmen in messbare Revenue-Infrastrukturen zu transformieren. Mit fundiertem technologischem Know-how und strategischer Klarheit begleite ich Sie persönlich bei jedem Schritt zur Optimierung Ihrer Customer Journey.
                </p>
                <p className="text-xs text-[#686DF4] font-bold leading-relaxed pt-1.5 border-t border-slate-100 italic">
                  {(() => {
                    const personalHighlights: { [key: string]: string } = {
                      'growth-strategy': 'Gemeinsam schärfen wir Ihre Marktpositionierung und definieren die genauesten ICP-Kriterien, um Ihr Wachstum strategisch auf ein solides Fundament zu stellen.',
                      'demand-generation': 'Wir konzipieren und steuern Ihre B2B-Paid-Kampagnen so, dass sie bei Ihrer Zielgruppe konsistent Relevanz erzeugen und messbare Pipeline aufbauen.',
                      'lead-generation': 'Mit intelligenten Inbound-Magneten und datenkonformem Outbound Prospecting etablieren wir ein Neukundensystem, das planbar Demo-Termine generiert.',
                      'marketing-automation': 'Wir automatisieren Ihre Lead-Nurturing-Strecken und optimieren Ihre HubSpot-Datenhygiene, damit Ihr Vertrieb ohne Reibungsverluste abschliessen kann.',
                      'sales-enablement': 'Ich statte Ihr Sales-Team mit psychologisch optimierten Verkaufsargumenten und Playbooks aus, die Ihre Abschlussquote nachweislich erhöhen.',
                      'revenue-operations': 'Wir lösen Ihre abteilungsübergreifenden Datensilos auf und verknüpfen Marketing, Sales und Service zu einem hocheffizienten Gesamtsystem.',
                      'ai-automation': 'Ich implementiere produktive KI-Workflows, die Routineaufgaben im Handumdrehen erledigen und die Kapazität Ihres Teams massgeblich vergrössern.',
                      'data-analytics': 'Mit sauberem First-Party Server-Side Tracking und transparenten Attributionsmodellen machen wir Ihren Return on Ad Spend (ROAS) glasklar messbar.'
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
            PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]">
            Leistungen, die Revenue erzeugen.
          </h1>
          <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold">
            Wir beschreiben unsere Lösungen nicht als nackte Tätigkeiten — sondern als valide Resultate, die wir für dich errichten.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fadeIn">
        <div className="text-center space-y-3">
          <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest">UNSER PORTFOLIO</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Leistungsbereiche</h2>
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
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#686DF4] transition-colors leading-tight">{s.title}</h3>
                    <p className="text-[10px] text-[#686DF4] font-bold tracking-widest leading-relaxed mt-3 uppercase font-mono">{localized.benefit}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-3.5 line-clamp-4 font-semibold">{localized.desc}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-8 flex justify-between items-center">
                  <span className="text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                    PROGNOSTIZIERBAR
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
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">SYNERGIEEFFEKTE</span>
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Wie wir Leistungen kombinieren</h2>
            <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed font-semibold">
              Einzelne Leistungen verändern vieles. Integrierte Gesamtsysteme skalieren dein gesamtes Wachstum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Combo 1 */}
            <div className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-5 shadow-[var(--shadow-premium-sm)] text-left flex flex-col justify-between hover:border-[#686DF4]/10 transition-colors duration-300">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-2.5 py-1 rounded-md">SCHNELLE PIPELINE</span>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">Demand Generation + Lead Generation</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Sofort Leads in die vertriebliche Pipeline leiten. Organische Suchmaschinenoptimierung und intelligente Paid Kampagnen exakt orchestriert. Erste Resultate in 2-4 Wochen.
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
                <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-2.5 py-1 rounded-md">SKALIERBARE WACHSTUMS-MASCHINE</span>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">Demand Gen + Automation + CRM</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Moderne Nachfrageerzeugung gekoppelt mit systematischem Lead Nurturing und synchronisierter CRM-Übergabe. Keine manuellen Reibungsverluste im B2B Funnel.
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
                <span className="text-[10px] font-mono text-[#686DF4] font-bold uppercase tracking-widest bg-[#686DF4]/5 px-2.5 py-1 rounded-md">REVENUE Operations</span>
                <h3 className="text-sm font-bold text-slate-900 leading-tight">RevOps + Sales Enablement + Analytics</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Marketing und Sales auf aufeinander abgestützte Ziele ausrichten. Silos auflösen, so dass alle Abteilungen auf gemeinsamen Daten-Dashboards arbeiten.
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

      {/* FINAL CALLOUT AND CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 animate-fadeIn">
        <div className="bg-slate-950 text-white border border-slate-900 rounded-3xl p-10 md:p-14 text-center space-y-8 shadow-[var(--shadow-premium-lg)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#686DF4]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[9px] font-mono font-bold text-[#686DF4] tracking-widest uppercase">STRATEGISCHE PRIORITÄT</span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-white leading-tight">Welche Leistung braucht dein Unternehmen?</h2>
          <p className="text-xs text-slate-300 leading-relaxed max-w-xl mx-auto opacity-95 font-medium">
            Wir unterstützen dich unkompliziert dabei, die wirksamsten Prioritäten zu isolieren — in einem unverbindlichen 30-minütigen Gespräch.
          </p>

          <a
            href="https://calendar.app.google/7oGfyaAEKsdWRTFW8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#686DF4] hover:bg-[#686DF4]/90 text-white font-bold text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 inline-block text-center cursor-pointer"
          >
            Wachstumsgespräch buchen
          </a>
        </div>
      </section>

    </div>
  );
}
