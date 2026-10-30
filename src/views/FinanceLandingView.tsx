import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2, ChevronDown, KeyRound, LineChart, Phone, Quote, ShieldCheck, UserRound, X,
} from 'lucide-react';
import Link from '../components/Link';
import FinanceLeadForm from '../components/FinanceLeadForm';
import FinanceGrowthCheck from '../components/FinanceGrowthCheck';
import { TESTIMONIALS_DATA } from '../components/home/ClientTestimonials';
import { SITE } from '../config/site';
import { trackEvent } from '../lib/analytics';
import {
  AD_CHECK_NOTE, BENEFITS, BUILDING_BLOCKS, CONTACT_PERSON_TEXT, DATA_LOCATION, DONT_DO, FINANCE_PAGES, FIT,
  FORM_EXPECTATIONS, ICP_CARDS, PACKAGES, PACKAGE_NOTES, PACKAGE_OPTIONS, PAIN_HEADING, PAIN_INTRO, PROCESS_STEPS,
  REFERENCES, REFERENCES_INTRO, TRUST_POINTS, type FinanceSlug, type ReferenceCard,
} from '../data/financeLanding';

interface FinanceLandingViewProps {
  slug: FinanceSlug;
}

const TRUST_ICONS = [KeyRound, LineChart, ShieldCheck, UserRound];

const overlineClass = 'text-[11px] font-mono font-bold uppercase tracking-widest text-[#686DF4]';
const h2Class = 'text-2xl sm:text-3xl font-display font-semibold text-slate-950 tracking-tight';
const primaryBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-base sm:text-sm font-semibold text-white hover:bg-[#4f54d6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/40 transition-colors cursor-pointer';
const secondaryBtn =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-base sm:text-sm font-semibold text-slate-900 hover:border-[#686DF4] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30 transition-colors cursor-pointer';

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const ReferenceCardView: React.FC<{ card: ReferenceCard }> = ({ card }) => {
  const [expanded, setExpanded] = useState(false);
  const testimonial = card.testimonialId ? TESTIMONIALS_DATA.find((t) => t.id === card.testimonialId) : undefined;
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:p-7">
      <p className={overlineClass}>{card.label}</p>
      {card.intro && <p className="text-sm text-slate-700">{card.intro}</p>}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-slate-900">Unsere Arbeit</p>
        <ul className="space-y-1.5">
          {card.work.map((w) => (
            <li key={w} className="flex gap-2 text-sm text-slate-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#686DF4]" aria-hidden="true" />
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </div>
      {card.status && <p className="text-sm text-slate-600">{card.status}</p>}
      {testimonial && (
        <figure className="mt-auto space-y-3 border-t border-slate-100 pt-4">
          <Quote className="h-5 w-5 text-[#686DF4]/60" aria-hidden="true" />
          <blockquote className={`text-sm leading-relaxed text-slate-700 ${expanded ? '' : 'line-clamp-4'}`}>
            «{testimonial.quote}»
          </blockquote>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="text-sm font-semibold text-[#4f54d6] underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0"
          >
            {expanded ? 'Weniger anzeigen' : 'Ganzes Zitat lesen'}
          </button>
          <figcaption className="text-sm">
            <span className="font-semibold text-slate-900">{testimonial.name}</span>
            <span className="text-slate-600">, {testimonial.role}, {testimonial.company}</span>
          </figcaption>
        </figure>
      )}
    </article>
  );
};

export default function FinanceLandingView({ slug }: FinanceLandingViewProps) {
  const page = FINANCE_PAGES[slug];
  const isHub = slug === 'finanzdienstleister';
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toolContext, setToolContext] = useState<string | undefined>();
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const formSectionRef = useRef<HTMLElement>(null);

  // Sticky-CTA (mobil): erst nach dem Hero zeigen, ausblenden sobald das Formular sichtbar ist.
  useEffect(() => {
    const hero = heroRef.current;
    const form = formSectionRef.current;
    if (!hero || !form || typeof IntersectionObserver === 'undefined') return;
    let heroVisible = true;
    let formVisible = false;
    const update = () => setShowSticky(!heroVisible && !formVisible);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === form) formVisible = entry.isIntersecting;
      }
      update();
    });
    observer.observe(hero);
    observer.observe(form);
    return () => observer.disconnect();
  }, [slug]);

  const ctaClick = (location: string, target: 'anfrage' | 'wachstumscheck') => {
    trackEvent('cta_click', { cta_location: location, cta_target: target, page_slug: slug });
    scrollToId(target);
  };

  const handleDiscuss = (context: string) => {
    setToolContext(context);
    scrollToId('anfrage');
  };

  return (
    <div className="bg-[#f6f6f6] pb-24 text-slate-800" id="finance-landing">
      {/* 1. HERO */}
      <section ref={heroRef} className="border-b border-slate-100 bg-white px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <Link
            href={isHub ? '/loesungen' : '/loesungen/finanzdienstleister'}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4f54d6] hover:text-[#686DF4]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {isHub ? 'Alle Branchen' : 'Finanzdienstleister'}
          </Link>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <p className={overlineClass}>{page.overline}</p>
              <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl">
                {page.h1}
              </h1>
              <p className="max-w-[62ch] text-body-lg leading-relaxed text-slate-600">{page.sub}</p>

              {isHub && (
                <nav aria-label="Ihr Schwerpunkt" className="space-y-2">
                  <p className="text-sm font-semibold text-slate-900">Ihr Schwerpunkt</p>
                  <ul className="flex flex-wrap gap-2">
                    {ICP_CARDS.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/loesungen/${c.slug}`}
                          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-900 hover:border-[#686DF4] hover:text-[#4f54d6]"
                        >
                          {c.title} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                <div className="space-y-1.5">
                  <button type="button" className={`${primaryBtn} w-full sm:w-auto`} onClick={() => ctaClick('hero', 'anfrage')}>
                    Anfrage-Check anfragen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <p className="text-xs text-slate-500">30 Minuten, kostenlos. Wir sehen uns Ihre Website vorher an.</p>
                </div>
                <button type="button" className={`${secondaryBtn} w-full sm:w-auto`} onClick={() => ctaClick('hero', 'wachstumscheck')}>
                  Wachstumscheck starten (2 Min.)
                </button>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-[#fcfcfc] p-6 sm:p-8">
                <img
                  src={SITE.portraitUrl}
                  alt="Yathur Nathan"
                  width={112}
                  height={112}
                  loading="eager"
                  decoding="async"
                  className="h-24 w-24 shrink-0 rounded-full border-2 border-[#686DF4]/30 object-cover sm:h-28 sm:w-28"
                />
                <div className="space-y-1.5">
                  <p className="font-display text-lg font-semibold text-slate-950">Sie sprechen direkt mit Yathur Nathan</p>
                  <p className="text-sm text-slate-600">Gründer und Inhaber von performanceboost. Kein Account Manager dazwischen.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. VERTRAUENSLEISTE */}
      <section aria-label="Grundsätze" className="border-b border-slate-100 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
          {TRUST_POINTS.map((t, i) => {
            const Icon = TRUST_ICONS[i];
            return (
              <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                <Icon className="h-5 w-5 shrink-0 text-[#686DF4]" aria-hidden="true" />
                <span>{t}</span>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="space-y-24 pt-20">
        {/* 3. AUSGANGSLAGE */}
        <section className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className={overlineClass}>Ausgangslage</p>
            <h2 className={h2Class}>{PAIN_HEADING}</h2>
            <p className="text-slate-600">{PAIN_INTRO}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {page.pains.map((p) => (
              <div key={p.title} className="space-y-2 rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold text-slate-950">{p.title}</h3>
                <p className="text-body-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. NUTZEN */}
        <section className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <p className={overlineClass}>Ihr Nutzen</p>
            <h2 className={h2Class}>Was sich für Sie ändert</h2>
          </div>
          <ul className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#686DF4]" aria-hidden="true" />
                <p className="text-body-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-950">{b.title}</strong> {b.desc}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. LEISTUNGEN */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 rounded-3xl bg-slate-950 p-8 text-white sm:p-12">
            <div className="max-w-3xl space-y-3">
              <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#CACCFB]">Leistungen</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Was wir für Sie aufbauen und betreiben
              </h2>
              <p className="text-slate-300">
                Vier Bausteine, die zusammenarbeiten. Je nach Ausgangslage beginnen wir bei der Messung oder bei den Kampagnen.
              </p>
            </div>
            <ol className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-4">
              {BUILDING_BLOCKS.map((b, i) => (
                <li key={b.title} className="space-y-3">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#CACCFB]">
                    Baustein {i + 1}
                  </span>
                  <h3 className="font-semibold text-white">{b.title}</h3>
                  <p className="text-body-sm leading-relaxed text-slate-300">{b.desc}</p>
                  <ul className="space-y-1">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#CACCFB]" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Werbe-Check vor dem Start</p>
              <p className="mt-1 text-sm text-slate-300">{AD_CHECK_NOTE}</p>
            </div>
          </div>
        </section>

        {/* 6. ANWENDUNGSFÄLLE */}
        {isHub ? (
          <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-3">
              <p className={overlineClass}>Anwendungsfälle</p>
              <h2 className={h2Class}>Für welche Beratungen wir arbeiten</h2>
            </div>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {ICP_CARDS.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/loesungen/${c.slug}`}
                    className="group flex h-full flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 hover:border-[#686DF4]/50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30"
                  >
                    <h3 className="font-display text-lg font-semibold text-slate-950 group-hover:text-[#4f54d6]">{c.title}</h3>
                    <p className="text-body-sm leading-relaxed text-slate-600">{c.desc}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-[#4f54d6]">
                      {c.linkText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          page.icpDetail && (
            <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl space-y-3">
                <p className={overlineClass}>{page.overline}</p>
                <h2 className={h2Class}>{page.icpDetail.heading}</h2>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-950">Typische Anlässe</h3>
                  <ul className="space-y-1.5">
                    {page.icpDetail.occasions.map((o) => (
                      <li key={o} className="flex gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#686DF4]" aria-hidden="true" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-950">Was wir bauen</h3>
                  <p className="text-sm leading-relaxed text-slate-700">{page.icpDetail.build}</p>
                  {page.icpDetail.note && <p className="text-sm leading-relaxed text-slate-600">{page.icpDetail.note}</p>}
                </div>
                <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-950">Was wir bewusst nicht tun</h3>
                  <ul className="space-y-1.5">
                    {page.icpDetail.avoid.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-slate-700">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )
        )}

        {/* 7. REFERENZEN */}
        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className={overlineClass}>Referenzen</p>
            <h2 className={h2Class}>Mit wem wir in der Finanzbranche arbeiten</h2>
            <p className="text-slate-600">{REFERENCES_INTRO}</p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {page.references.map((id) => (
              <ReferenceCardView key={id} card={REFERENCES[id]} />
            ))}
          </div>
        </section>

        {/* 8. WACHSTUMSCHECK */}
        <section id="wachstumscheck" className="mx-auto max-w-6xl scroll-mt-24 space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className={overlineClass}>Wachstumscheck</p>
            <h2 className={h2Class}>Wie viele Erstgespräche brauchen Sie wirklich?</h2>
            <p className="text-slate-600">
              Rechnen Sie mit Ihren eigenen Annahmen. Wir verwenden keine Branchendurchschnitte, die es für Schweizer
              Beratungsfirmen in verlässlicher Form nicht gibt.
            </p>
          </div>
          <FinanceGrowthCheck pageSlug={slug} onDiscuss={handleDiscuss} />
        </section>

        {/* 9. ABLAUF */}
        <section className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <p className={overlineClass}>Ablauf</p>
            <h2 className={h2Class}>So arbeiten wir zusammen</h2>
          </div>
          <ol className="relative space-y-6 border-l-2 border-[#CACCFB] pl-8">
            {PROCESS_STEPS.map((s, i) => (
              <li key={s.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-[#686DF4] font-mono text-sm font-bold text-white"
                >
                  {i + 1}
                </span>
                <h3 className="font-semibold text-slate-950">
                  <span className="sr-only">Schritt {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-1 text-body-sm leading-relaxed text-slate-600">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 10. PAKETE (ohne Preise, Entscheid D3) */}
        <section className="mx-auto max-w-6xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <p className={overlineClass}>Pakete</p>
            <h2 className={h2Class}>Drei Pakete, je nach Grösse Ihrer Beratung</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col gap-4 rounded-3xl border bg-white p-6 ${p.recommended ? 'border-[#686DF4] ring-2 ring-[#686DF4]/15 lg:order-2' : 'border-slate-200'} ${p.name === 'Start' ? 'lg:order-1' : ''} ${p.name === 'Ausbau' ? 'lg:order-3' : ''}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-slate-950">{p.name}</h3>
                  {p.recommended && (
                    <span className="rounded-full bg-[#686DF4]/10 px-3 py-1 text-xs font-semibold text-[#4f54d6]">Empfohlen</span>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-700">{p.audience}</p>
                <ul className="space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#686DF4]" aria-hidden="true" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {PACKAGE_NOTES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <details className="rounded-2xl border border-slate-200 bg-white p-5 text-sm">
            <summary className="cursor-pointer font-semibold text-slate-900">
              Optionen wie CRM-Einführung, zusätzliche Landingpages oder Zweitsprache
            </summary>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              {PACKAGE_OPTIONS.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </details>
        </section>

        {/* 11. REGULIERUNG & DATENSCHUTZ */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className={overlineClass}>Regulierung & Datenschutz</p>
              <h2 className={h2Class}>Was wir bewusst nicht tun</h2>
              <ul className="space-y-2">
                {DONT_DO.map((d) => (
                  <li key={d} className="flex gap-2 text-sm text-slate-700">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 md:border-l md:border-slate-100 md:pl-8">
              <h3 className="font-display text-lg font-semibold text-slate-950">Wo Ihre Daten liegen</h3>
              <p className="text-sm leading-relaxed text-slate-700">{DATA_LOCATION}</p>
            </div>
          </div>
        </section>

        {/* 12. ANSPRECHPERSON */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 md:grid-cols-12">
            <div className="flex flex-col items-center gap-3 md:col-span-4">
              <img
                src={SITE.portraitUrl}
                alt="Yathur Nathan"
                width={144}
                height={144}
                loading="lazy"
                decoding="async"
                className="h-32 w-32 rounded-full border-2 border-[#686DF4]/30 object-cover sm:h-36 sm:w-36"
              />
              <div className="text-center">
                <p className="font-semibold text-slate-950">Yathur Nathan</p>
                <p className="text-sm text-slate-600">Gründer und Inhaber</p>
              </div>
            </div>
            <div className="space-y-5 md:col-span-8">
              <p className="text-body-sm leading-relaxed text-slate-700">{CONTACT_PERSON_TEXT}</p>
              <p className="text-sm text-slate-500">
                {SITE.name} · {SITE.street} · {SITE.postalCode} {SITE.locality} GR
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="button" className={primaryBtn} onClick={() => ctaClick('ansprechperson', 'anfrage')}>
                  Anfrage-Check anfragen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href={SITE.phoneHref}
                  onClick={() => trackEvent('phone_click', { cta_location: 'ansprechperson', page_slug: slug })}
                  className="inline-flex min-h-12 items-center justify-center gap-2 px-2 text-sm font-semibold text-slate-900 underline-offset-2 hover:underline"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> 078 675 40 97
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 14. FAQ */}
        <section className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <p className={overlineClass}>Fragen</p>
            <h2 className={h2Class}>Häufige Fragen</h2>
          </div>
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white px-5 sm:px-8">
            {page.faqs.map((faq, idx) => {
              const open = openFaq === idx;
              return (
                <div key={faq.q} className="py-4">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : idx)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${idx}`}
                      id={`faq-button-${idx}`}
                      className="flex w-full items-center justify-between gap-4 bg-transparent py-1 text-left font-semibold text-slate-950 hover:text-[#4f54d6] cursor-pointer border-0"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={`faq-panel-${idx}`}
                        role="region"
                        aria-labelledby={`faq-button-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-2 text-body-sm leading-relaxed text-slate-600">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* 13 + 15. QUALIFIZIERUNG UND FORMULAR */}
        <section
          id="anfrage"
          ref={formSectionRef}
          className="mx-auto max-w-6xl scroll-mt-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:col-span-7">
              <div className="space-y-2">
                <h2 className={h2Class}>Anfrage-Check anfragen</h2>
                <p className="text-slate-600">
                  Erzählen Sie uns kurz, worum es geht. Wir sehen uns Ihre Website vor dem Gespräch an und melden uns
                  innert eines Arbeitstags.
                </p>
              </div>
              <FinanceLeadForm pageSlug={slug} defaultSegment={page.defaultSegment} toolContext={toolContext} />
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <div className="space-y-4 rounded-3xl bg-slate-950 p-6 text-white sm:p-8">
                <h3 className="font-display text-lg font-semibold">Was Sie erwartet</h3>
                <ol className="space-y-3">
                  {FORM_EXPECTATIONS.map((e, i) => (
                    <li key={e} className="flex gap-3 text-sm text-slate-200">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#686DF4] font-mono text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-slate-950">Passt das zu Ihnen?</h3>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">Gut passend</p>
                  <p className="text-sm text-slate-700">{FIT.good}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-slate-900">Weniger passend</p>
                  <p className="text-sm text-slate-700">{FIT.less}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* STICKY-CTA (nur mobil) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur lg:hidden"
          >
            <button type="button" className={`${primaryBtn} w-full`} onClick={() => ctaClick('sticky_mobile', 'anfrage')}>
              Anfrage-Check anfragen <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
