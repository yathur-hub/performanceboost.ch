/**
 * Immobilien-Landingpages (/loesungen/erstvermietung-ostschweiz, /loesungen/verkaufsmandate-makler).
 * Aufbau nach CRO-Landingpage-Muster: Hero mit einem Primär-CTA und Vertrauensleiste, Problem mit Quellen,
 * Nutzen, Vorgehen, Bausteine, Rechenbeispiel (optional Rechner), Gründe, FAQ, Abschluss-CTA.
 * Alle CTAs öffnen das Overlay; die Formularstrecke wird über den Pfad gewählt (src/data/leadFlows.ts).
 */
import React from 'react';
import { ArrowUpRight, Check, KeyRound, LineChart, ShieldCheck, UserRound } from 'lucide-react';
import Link from '../components/Link';
import { Visual3D } from '../components/Visual3D';
import { LeadCtaSection } from '../components/bp/Conversion';
import { Breadcrumb, CheckList, Container, CtaButton, FaqList, SectionHeading } from '../components/bp/Blocks';
import LeerstandskostenRechner from '../components/hero-tools/LeerstandskostenRechner';
import { REAL_ESTATE_PAGES, type RealEstateSlug } from '../data/realEstateLanding';

const TRUST_ICONS = [LineChart, KeyRound, ShieldCheck, UserRound];

export default function RealEstateLandingView({ slug }: { slug: RealEstateSlug }) {
  const page = REAL_ESTATE_PAGES[slug];
  const loc = (part: string) => `immobilien_${slug}_${part}`;

  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id={`immobilien-${slug}`}>
      {/* 1. HERO */}
      <section className="pt-36 md:pt-40 pb-4 bg-surface/60">
        <Container className="space-y-7">
          <Breadcrumb
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Lösungen', href: '/loesungen' },
              { label: 'Immobilien', href: '/loesungen/immobilien' },
              { label: page.label },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="hero-enter lg:col-span-8 space-y-6">
              <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
                {page.h1}
                <span className="block mt-2 italic text-[#686CFA]">{page.accent}</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">{page.sub}</p>
              <CtaButton label={page.ctaLabel} location={loc('hero')} pageSlug={slug} />
            </div>
            <div className="hidden lg:flex lg:col-span-4 justify-center" aria-hidden="true">
              <Visual3D id={page.visual} priority sizes="320px" className="h-64 w-auto max-w-full" />
            </div>
          </div>
          <ul aria-label="Grundsätze" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-2xl border border-line/80 bg-surface p-5">
            {page.trust.map((t, i) => {
              const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
              return (
                <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-slate-800">
                  <Icon className="w-5 h-5 shrink-0 text-[#686CFA]" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 3. PROBLEM */}
      <section>
        <Container className="space-y-10">
          <SectionHeading title={page.pain.heading} intro={page.pain.intro} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {page.pain.cards.map((c) => (
              <div key={c.title} className="flex flex-col gap-3 bg-surface border border-line/80 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-slate-900">{c.title}</h3>
                <p className="text-body-sm text-slate-600 leading-relaxed">{c.desc}</p>
                {c.source && <p className="mt-auto pt-2 text-xs text-slate-500">{c.source}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. NUTZEN */}
      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading title={page.benefitsHeading} />
          <ul className="space-y-5 rounded-3xl border border-line/80 bg-surface p-6 sm:p-8">
            {page.benefits.map((b) => (
              <li key={b.title} className="flex gap-3">
                <Check className="mt-1 w-5 h-5 shrink-0 text-[#686CFA]" aria-hidden="true" />
                <p className="text-body-sm leading-relaxed text-slate-700">
                  <strong className="text-slate-900">{b.title}</strong> {b.desc}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 5. VORGEHEN */}
      <section className="bg-surface border-y border-line/40 py-20 md:py-24">
        <Container className="space-y-10">
          <SectionHeading title={page.approachHeading} />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.approach.map((a, i) => (
              <li key={a.title} className="bg-canvas/60 border border-line/80 rounded-2xl p-6 space-y-3">
                <span className="text-[11px] font-bold font-mono text-[#686CFA]">0{i + 1}</span>
                <h3 className="font-display font-semibold text-slate-900">{a.title}</h3>
                <p className="text-body-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </li>
            ))}
          </ol>
          <CtaButton label={page.ctaLabel} location={loc('vorgehen')} pageSlug={slug} variant="light" />
        </Container>
      </section>

      {/* 6. BAUSTEINE */}
      <section>
        <Container>
          <div className="space-y-10 rounded-3xl bg-deep p-8 text-white sm:p-12">
            <h2 className="max-w-3xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Was Sie konkret bekommen
            </h2>
            <ul className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-2 lg:grid-cols-4">
              {page.blocks.map((b) => (
                <li key={b.title} className="space-y-3">
                  <h3 className="font-semibold text-white">{b.title}</h3>
                  <ul className="space-y-1.5">
                    {b.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-slate-300">
                        <Check className="mt-0.5 w-4 h-4 shrink-0 text-[#CBCBFC]" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300">{page.scopeNote}</p>
          </div>
        </Container>
      </section>

      {/* 7. RECHENBEISPIEL (+ RECHNER) */}
      <section id="rechenbeispiel" className="scroll-mt-28">
        <Container className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <SectionHeading title={page.example.heading} />
              <p className="text-body text-slate-700 leading-relaxed">{page.example.text}</p>
              <p className="text-xs text-slate-500">{page.example.note}</p>
            </div>
            {page.showCalculator && (
              <div className="lg:col-span-7">
                <LeerstandskostenRechner />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* 8. WARUM PERFORMANCEBOOST */}
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading title="Was Sie von uns erwarten können" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {page.why.map((w) => (
                <div key={w.title}>
                  <dt className="font-display font-semibold text-slate-900">{w.title}</dt>
                  <dd className="mt-1.5 text-body-sm text-slate-600 leading-relaxed">{w.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5 bg-[#686CFA]/[0.04] border border-[#CBCBFC]/60 rounded-3xl p-7 sm:p-9 space-y-5 self-start">
            <h2 className="text-lg font-display font-semibold text-slate-900">Im Erstgespräch klären wir</h2>
            <CheckList items={page.final.points} />
            <CtaButton label={page.ctaLabel} location={loc('erwartung')} pageSlug={slug} />
          </div>
        </Container>
      </section>

      {/* 9. FAQ */}
      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading title="Häufige Fragen" />
          <FaqList items={page.faq} />
        </Container>
      </section>

      {/* QUERVERWEIS */}
      <section>
        <Container className="max-w-4xl">
          <Link
            href={page.related.href}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-line/80 bg-surface p-6 hover:border-[#686CFA]/50"
          >
            <span className="space-y-1">
              <span className="block text-lg font-display font-semibold text-slate-900">{page.related.title}</span>
              <span className="block text-body-sm text-slate-600 leading-relaxed">{page.related.desc}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-strong whitespace-nowrap">
              {page.related.linkText} <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </Link>
        </Container>
      </section>

      {/* 10. ABSCHLUSS */}
      <LeadCtaSection
        formLocation={loc('abschluss')}
        title={page.final.title}
        intro={page.final.intro}
        points={page.final.points}
        ctaLabel={page.ctaLabel}
        visual={page.finalVisual}
      />
    </div>
  );
}
