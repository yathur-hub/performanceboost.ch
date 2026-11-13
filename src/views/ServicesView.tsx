import React from 'react';
import { VISUAL_BY_SERVICE } from '../components/Visual3D';
import { SERVICES } from '../data/services';
import { 
  TrendingUp, Megaphone, Users, Cpu, Layers, Sparkles, PieChart, ShieldAlert,
  ArrowRight, ArrowLeft, Check, CheckCircle2, Award, ChevronDown, ChevronUp, HelpCircle,
  ShoppingCart, RefreshCcw, Bot,
  PiggyBank, Cloud, Home, Briefcase, Factory, Compass, GraduationCap, Stethoscope, Hammer, Scale, Truck, Hotel
} from 'lucide-react';
import { motion } from 'motion/react';
import { EXTENDED_SERVICES_DATA } from '../data/servicesExtendedData';
import { readRememberedResult } from '../data/problemFinder';
import { SERVICE_AREAS, primaryAreaOf, relatedServices } from '../data/serviceAreas';
import { PHASES } from '../data/approach';
import Link from '../components/Link';
import { Breadcrumb, TeaserCard } from '../components/bp/Blocks';
import { HeroTrust, LeadCtaSection, OpenLeadButton } from '../components/bp/Conversion';
import { Diagram } from '../components/diagrams/Diagram';
import { SERVICE_DIAGRAMS } from '../data/diagrams';
import { trackEvent } from '../lib/analytics';


interface ServicesViewProps {
  currentSlug?: string;
  onNavigate: (path: string) => void;
}

/** Ergebnis-Pakete auf /leistungen (Preise werden nicht öffentlich genannt). */
const RESULT_PACKAGES = [
  {
    title: 'KI-Einführung',
    desc: 'Standortbestimmung, Einrichtung der wichtigsten Anwendungen, Schulung des Teams und schriftliche Regeln für Daten und Tools.',
    result: 'Drei bis fünf KI-Anwendungen sind im Alltag im Einsatz, das Team ist geschult, die Regeln sind verabschiedet.',
    href: '/leistungen/ki-im-unternehmen',
    linkText: 'Agentic AI',
  },
  {
    title: 'Stack aufräumen',
    desc: 'Inventur aller Tools, Zielbild, Umbau und Verbindung von CRM, Website, E-Mail und Tracking.',
    result: 'Weniger Lizenzen, Daten werden nur einmal erfasst, jede Anfrage ist bis zum Auftrag nachvollziehbar.',
    href: '/leistungen/martech-stack',
    linkText: 'MarTech-Stack',
  },
  {
    title: 'Lead-System',
    desc: 'Angebot und Botschaft schärfen, Landingpage, Formular mit Vorqualifizierung, Messung bis ins CRM und die passenden Kampagnen.',
    result: 'Jede Anfrage wird mit Quelle im CRM erfasst, und Sie kennen die Kosten pro qualifizierter Anfrage.',
    href: '/leistungen/marketing',
    linkText: 'Marketing',
  },
];

export default function ServicesView({ currentSlug, onNavigate }: ServicesViewProps) {
  // Ergebnis aus dem Problem-Finder der Startseite (nur in dieser Sitzung).
  const [finderHint] = React.useState(() => readRememberedResult());
  
  const servicesIcons: { [key: string]: any } = {
    'growth-strategy': TrendingUp,
    'demand-generation': Megaphone,
    'lead-generation': Users,
    'marketing-automation': Cpu,
    'sales-enablement': ShieldAlert,
    'revenue-operations': Layers,
    'ai-automation': Sparkles,
    'ki-agenten': Bot,
    'martech-stack': Layers,
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
      benefit: 'Ihr Team arbeitet sicher und wirksam mit KI.',
      desc: 'Standortbestimmung, Einführung in die bestehenden Abläufe, Schulung mit eigenen Beispielen und klare Regeln, welche Daten in welches Tool dürfen.'
    },
    'ki-agenten': {
      benefit: 'Ganze Abläufe laufen, Ihr Team gibt frei.',
      desc: 'KI-Agenten prüfen Anfragen, recherchieren, tragen ins CRM ein und bereiten Antworten vor. Nach aussen geht nichts ohne Freigabe.'
    },
    'martech-stack': {
      benefit: 'Weniger Tools, die zusammenarbeiten.',
      desc: 'Stack-Check, Aufräumen und Verbinden von CRM, Website, E-Mail und Tracking. Weniger Lizenzen, weniger Handarbeit, klare Zahlen.'
    },
    'data-analytics': {
      benefit: 'Sie sehen, was funktioniert und wo Budget verloren geht.',
      desc: 'Datenschutzkonformes Tracking, Dashboards und Berichte, damit Sie nach Zahlen entscheiden. Wir messen die Website und ordnen den Umsatz den Kanälen zu, aus denen er kommt.'
    },
    'dtc-growth-acquisition': {
      benefit: 'Kundengewinnung, deren Kosten Sie kennen.',
      desc: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine verlässliche Kundengewinnung. Wir ordnen Ihre Kampagnen, verbessern den Shop und messen Kosten pro Kunde und Kundenwert.'
    },
    'customer-retention': {
      benefit: 'Bestehende Kunden halten und Inaktive zurückholen.',
      desc: 'Einen Kunden zu halten ist meist günstiger, als einen neuen zu gewinnen. Wir bauen automatische E-Mails nach dem Kauf, Rückgewinnungsstrecken und Treueprogramme auf.'
    },
    'paid-social-ecommerce': {
      benefit: 'Anzeigen nach Deckungsbeitrag statt nur nach ROAS.',
      desc: 'Viele Shops steuern ihre Werbung nach Umsatz. Wir beziehen Marge, Versand und Retouren ein und steuern Meta und TikTok nach dem, was am Ende übrig bleibt.'
    }
  };

  const handleConsultation = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent('cta_click', { cta_location: 'leistung_hero', cta_target: 'overlay', page_slug: currentSlug });
    onNavigate('/kontakt');
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
            className="text-[#686CFA] font-bold hover:underline bg-transparent border-none cursor-pointer"
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
        <div className="pt-32 md:pt-36 pb-20 text-slate-800 space-y-16 md:space-y-28 animate-fadeIn" id={`service-detail-${service.slug}`}>
          
          {/* Breadcrumb: Startseite / Leistungen / Leistungsfeld / Leistung */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <Breadcrumb
              items={[
                { label: 'Startseite', href: '/' },
                { label: 'Leistungen', href: '/leistungen' },
                ...(primaryAreaOf(service.slug)
                  ? [{ label: primaryAreaOf(service.slug)!.shortLabel, href: `/leistungen/${primaryAreaOf(service.slug)!.id}` }]
                  : []),
                { label: service.title },
              ]}
            />
          </div>

          {/* HERO SECTION WITH DYNAMIC INTERACTIVE AUDITS */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="hero-enter lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#686CFA] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
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
                      <span className="text-lg font-bold font-display text-[#686CFA] block leading-none">{met.value}</span>
                      <span className="text-[11px] text-slate-400 font-bold uppercase font-mono tracking-wider block">{met.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {finderHint && finderHint.serviceSlug === service.slug && (
                <div className="rounded-2xl border border-[#686CFA]/30 bg-[#686CFA]/5 p-4 text-left space-y-1">
                  <p className="text-sm font-semibold text-slate-900">Passend zu Ihrer Angabe «{finderHint.problemLabel}»</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Im kostenlosen Erstgespräch schauen wir uns an, wie das bei Ihnen konkret aussieht und was der erste sinnvolle Schritt ist.
                  </p>
                </div>
              )}

              <div className="pt-2 text-left">
                <button 
                  onClick={handleConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/40"
                >
                  {primaryAreaOf(service.slug)?.ctaLabel ?? 'Potenzial besprechen'} <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
              <HeroTrust className="pt-1" />
            </div>

            {/* Themengrafik (ersetzt den früheren interaktiven Rechner) */}
            <div className="lg:col-span-7 w-full space-y-4">
              {SERVICE_DIAGRAMS[service.slug] && (
                <>
                  <div>
                    <h2 className="text-lg sm:text-xl font-display font-semibold text-slate-900">{SERVICE_DIAGRAMS[service.slug].title}</h2>
                    <p className="mt-1.5 text-body-sm text-slate-600 leading-relaxed">{SERVICE_DIAGRAMS[service.slug].text}</p>
                  </div>
                  <Diagram spec={SERVICE_DIAGRAMS[service.slug].spec} />
                </>
              )}
            </div>
          </section>

          {/* PROBLEM SECTION */}
          <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-16 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center animate-fadeIn">
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
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">
                {extendedContent.leistet.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {extendedContent.leistet.items.map((item, idx) => (
                <div key={idx} className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-4 shadow-[var(--shadow-premium-sm)] hover:border-[#686CFA]/25 hover:shadow-[var(--shadow-premium-lg)] transition-all duration-300 group">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-150 font-mono text-xs font-bold text-slate-400 group-hover:bg-[#686CFA] group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-[#686CFA] transition-colors leading-tight">
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
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">
                {extendedContent.approach.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {extendedContent.approach.items.map((item, idx) => (
                <div key={idx} className="bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-8 rounded-3xl space-y-4 relative shadow-[var(--shadow-premium-sm)]">
                  <div className="bg-[#686CFA]/10 text-[#686CFA] text-[11px] tracking-widest font-mono font-bold px-2.5 py-1 rounded-md w-fit border border-[#CBCBFC]/20">
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
                <div className="border-l-4 border-[#686CFA] pl-4 space-y-1">
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
                          <span className="w-1.5 h-1.5 bg-[#686CFA] rounded-full shrink-0" />
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
                  <div className="bg-[#686CFA]/5 border-l-4 border-[#686CFA] p-8 rounded-r-3xl max-w-4xl text-left">
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                      {sec.text}
                    </p>
                  </div>
                )}

                {sec.type === 'list' && sec.bullets && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-8 rounded-3xl text-left">
                    {sec.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex gap-2.5 items-start">
                        <div className="w-4 h-4 rounded-full bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center shrink-0 mt-0.5 border border-[#CBCBFC]/25">
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
                      <div key={iIdx} className="bg-white border-2 border-slate-100 hover:border-[#686CFA] p-8 rounded-3xl space-y-4 transition-colors flex flex-col justify-between shadow-[var(--shadow-premium-sm)] text-left">
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-900 text-[11px] uppercase tracking-widest pb-2 border-b border-slate-100 font-mono">
                            {it.title}
                          </h4>
                          <p className="text-[#686CFA] font-display font-medium text-2xl">
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
              <div className="border-l-4 border-[#686CFA] pl-4">
                <h2 className="text-xl font-display font-semibold tracking-tight text-slate-900 text-left leading-none">Ihr Nutzen</h2>
                <p className="text-xs text-slate-400 text-left mt-1.5 font-semibold">Was sich für Ihr Unternehmen konkret verbessert.</p>
              </div>
              <div className="space-y-4 text-left">
                {service.benefits.map((ben, idx) => (
                  <div key={idx} className="flex gap-4 bg-[#f6f6f6]/55 p-5 border border-slate-200/50 rounded-2xl shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-[#686CFA]/5 text-[#686CFA] flex items-center justify-center shrink-0 mt-0.5 border border-[#CBCBFC]/25">
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
          <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-16 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="text-center space-y-3">
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
                        <span className="text-[#686CFA] shrink-0">
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

          {/* PASSENDE LEISTUNGEN (aus src/data/serviceAreas.ts) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">Passende Leistungen</h2>
              </div>
              {primaryAreaOf(service.slug) && (
                <Link
                  href={`/leistungen/${primaryAreaOf(service.slug)!.id}`}
                  className="text-xs font-bold text-[#686CFA] inline-flex items-center gap-1.5"
                >
                  Alles zu {primaryAreaOf(service.slug)!.shortLabel} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {relatedServices(service.slug).map((r) => (
                <TeaserCard key={r.slug} href={`/leistungen/${r.slug}`} title={r.title} desc={r.shortDesc} linkText="Zur Leistung" />
              ))}
            </div>
          </section>


          {/* ANFRAGE (eingebettetes Formular) */}
          <LeadCtaSection
            title={extendedContent.cta.headline}
            intro={extendedContent.cta.subheadline}
            formLocation={`leistung_${service.slug}`}
            visual={VISUAL_BY_SERVICE[service.slug]}
          />

        </div>
      );
    }
  }

  // ----------------------------------------------------
  // GENERAL OVERVIEW: GRID OF ALL 8 SERVICES
  // ----------------------------------------------------
  return (
    <div className="pt-24 pb-16 space-y-16 md:space-y-28 text-slate-800" id="services-overview-page text-center">
      
      {/* Hero section */}
      <section className="relative bg-white pt-12 pb-16 md:py-28 border-b border-slate-100 overflow-hidden text-center animate-fadeIn">
        <div className="absolute top-0 left-10 w-80 h-80 bg-[#686CFA]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]">
            Marketing, Sales und Processes als ein System.
          </h1>
          <p className="text-slate-500 text-body-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Wir verbessern die drei Bereiche, in denen Schweizer KMU heute am meisten Umsatz und Zeit verlieren, und setzen KI-Agenten dort ein, wo sie verlässlich arbeiten. Jede Leistung gehört zu einem Bereich, das Vorgehen ist in allen gleich. Inhaber Yathur Nathan setzt sie persönlich um.
          </p>
        </div>
      </section>

      {/* Vorgehen (Details auf /ansatz) */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-14 md:py-20 animate-fadeIn" id="zusammenarbeit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">Ein Vorgehen für alle Bereiche</h2>
              <p className="text-body-sm text-slate-600 leading-relaxed">Vier Phasen, je nach Ausgangslage unterschiedlich gewichtet. Sie steigen dort ein, wo Ihr Unternehmen heute steht.</p>
            </div>
            <Link href="/ansatz" className="text-xs font-bold text-[#686CFA] inline-flex items-center gap-1.5 shrink-0">
              Zum Ansatz <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PHASES.map((p, idx) => (
              <li key={p.label} className="bg-white border border-[#E0E0E0]/65 p-6 rounded-3xl">
                <span className="text-[11px] font-bold font-mono text-[#686CFA]">0{idx + 1}</span>
                <p lang="en" className="mt-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">{p.label}</p>
                <h3 className="mt-1 text-base font-bold text-slate-900 leading-tight">{p.title}</h3>
                <p className="mt-2 text-body-sm text-slate-500 leading-relaxed">{p.result}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leistungen nach Leistungsfeld */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 animate-fadeIn">
        {SERVICE_AREAS.filter((a) => a.kind === 'area').map((area) => {
          const areaServices = SERVICES.filter((s) => primaryAreaOf(s.slug)?.id === area.id);
          return (
            <div key={area.id} className="space-y-8" id={`leistungsfeld-${area.id}`}>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E0E0E0]/80 pb-5">
                <div className="space-y-2 max-w-3xl">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#686CFA]">{area.label} · {area.subtitle}</p>
                  <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">{area.cardTitle}</h2>
                  <p className="text-body-sm text-slate-600 leading-relaxed">{area.teaser}</p>
                </div>
                <Link href={`/leistungen/${area.id}`} className="text-xs font-bold text-[#686CFA] inline-flex items-center gap-1.5 shrink-0">
                  Alles zu {area.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
              {(area.serviceGroups ?? [{ label: '', services: areaServices.map((x) => x.slug) }]).map((g) => (
              <div key={g.label || 'all'} className="space-y-4">
              {g.label && <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">{g.label}</h3>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {g.services.map((slug) => areaServices.find((x) => x.slug === slug)).filter((x): x is (typeof SERVICES)[number] => Boolean(x)).map((s) => {
                  const IconComp = servicesIcons[s.slug] || TrendingUp;
                  const localized = servicesCopyOverride[s.slug] || { benefit: s.shortDesc, desc: s.description };
                  return (
                    <Link
                      key={s.slug}
                      href={`/leistungen/${s.slug}`}
                      className="bg-white border border-[#E0E0E0]/65 hover:border-[#686CFA]/40 rounded-3xl p-7 flex flex-col transition-all duration-300 shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:-translate-y-0.5 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30"
                    >
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-150 flex items-center justify-center shrink-0 group-hover:bg-[#686CFA] group-hover:border-transparent transition-all duration-300">
                        <IconComp className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" aria-hidden="true" />
                      </div>
                      <h3 className="mt-5 text-base font-bold text-slate-900 group-hover:text-[#4f54d6] transition-colors leading-tight">{s.title}</h3>
                      <p className="text-[11px] text-[#686CFA] font-bold tracking-widest leading-relaxed mt-3 uppercase font-mono">{localized.benefit}</p>
                      <p className="text-body-sm text-slate-500 leading-relaxed mt-3 line-clamp-4">{localized.desc}</p>
                      <span className="mt-auto pt-6 text-xs text-[#686CFA] font-bold inline-flex items-center gap-1.5">
                        Details <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </Link>
                  );
                })}
              </div>
              </div>
              ))}
            </div>
          );
        })}
      </section>

      {/* ERGEBNIS-PAKETE (statt Kombinationen von Tätigkeiten) */}
      <section className="bg-[#f6f6f6]/50 border-y border-[#E0E0E0]/30 py-16 md:py-32 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Pakete mit einem klaren Ergebnis</h2>
            <p className="text-body-sm text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
              Sie kaufen keine Stunden und keine einzelnen Tätigkeiten, sondern ein Ergebnis, das vor dem Start feststeht. Jedes Paket hat einen Festpreis, den Sie nach dem Erstgespräch schriftlich erhalten.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RESULT_PACKAGES.map((pkg) => (
              <div key={pkg.title} className="bg-white border border-[#E0E0E0]/65 p-8 rounded-3xl space-y-5 shadow-[var(--shadow-premium-sm)] text-left flex flex-col">
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-slate-900 leading-tight">{pkg.title}</h3>
                  <p className="text-body-sm text-slate-500 leading-relaxed font-medium">{pkg.desc}</p>
                  <p className="text-body-sm text-slate-800 leading-relaxed">
                    <span className="font-bold text-[#686CFA]">Ergebnis:</span> {pkg.result}
                  </p>
                </div>
                <Link href={pkg.href} className="mt-auto pt-2 text-xs text-[#686CFA] font-bold w-fit inline-flex items-center gap-1.5 hover:text-[#4f54d6]">
                  {pkg.linkText} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHENLOESUNGEN CARDS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#fcfcfc] border-y border-[#E2E8F0]/30 py-16 md:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight">Lösungen für Schweizer Branchen</h2>
            <p className="text-body-sm text-slate-500 font-medium leading-relaxed">
              Wählen Sie Ihre Branche. Sie sehen, woran die Neukundengewinnung dort oft scheitert, wie wir vorgehen und was Sie davon haben.
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
                desc: 'Weniger Aufwand mit Belegen und mehr Mandate, die zu Ihnen passen.',
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
                desc: 'Wiederkehrende Umsätze ausbauen, mit klar beschriebenen Servicepaketen.',
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
                desc: 'Mehr Wirtschafts- und Spezialmandate gewinnen, ohne viel Zusatzaufwand.',
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
                <Link
                  key={ind.slug}
                  id={`industry-card-${ind.slug}`}
                  href={`/loesungen/${ind.slug}`}
                  className="bg-white border border-[#E0E0E0]/65 p-6 rounded-3xl flex flex-col justify-between shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-md)] hover:border-[#686CFA]/25 transition-all duration-300 cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-2.5 bg-[#f6f6f6] rounded-xl border border-slate-100 group-hover:bg-[#686CFA]/5 group-hover:border-[#686CFA]/25 group-hover:text-[#686CFA] transition-colors">
                        <IconComp className="w-5 h-5 text-slate-400 group-hover:text-[#686CFA] transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#686CFA] transition-colors">
                        {ind.title}
                      </h3>
                      <p className="text-body-sm text-slate-500 font-medium leading-relaxed">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#686CFA]">
                      Zur Branchenseite
                    </span>
                    <span className="text-xs text-[#686CFA] group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </motion.section>

      <LeadCtaSection formLocation="leistungen" title="Welche Leistung passt zu Ihrem Unternehmen?" />

    </div>
  );
}
