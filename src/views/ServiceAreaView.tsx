/**
 * Hub-Seite eines Leistungsfelds (/leistungen/strategie, /technologie-automation, /wachstum-marketing,
 * /sales-revenue-operations). Inhalte aus src/data/serviceAreas.ts.
 */
import React, { lazy, Suspense } from 'react';
import { getArea, servicesOf, SERVICE_AREAS, type AreaId } from '../data/serviceAreas';
import { SERVICES } from '../data/services';
import {
  Breadcrumb,
  CheckList,
  Container,
  CtaButton,
 
  FaqList,
  FinalCta,
  ResourceLinks,
  SectionHeading,
  TeaserCard,
  TestimonialQuote,
  ToolLinks,
} from '../components/bp/Blocks';
import { CHALLENGE_PAGES, isChallengeSlug } from '../data/challenges';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import Link from '../components/Link';

const InteractiveGrowthCalculator = lazy(() => import('../components/InteractiveGrowthCalculator'));

/** Passende Kundenstimme je Feld (nur bestehende, wörtliche Zitate). */
const AREA_TESTIMONIAL: Record<AreaId, string> = {
  strategie: 'tiago-garcia',
  'technologie-automation': 'carla-carcaiso',
  'wachstum-marketing': 'ibrahim-akyol',
  'sales-revenue-operations': 'simon-karrica',
};

export default function ServiceAreaView({ id }: { id: AreaId }) {
  const area = getArea(id);
  const services = servicesOf(area);
  const others = SERVICE_AREAS.filter((a) => a.id !== id);
  const groups = area.serviceGroups ?? [{ label: '', services: area.services }];

  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id={`area-${id}`}>
      {/* HERO */}
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: area.label }]} />
          <div className="max-w-4xl space-y-6">
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
              {area.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">{area.definition}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CtaButton label={area.ctaLabel} location={`hub_${id}_hero`} pageSlug={id} />
            </div>
          </div>
        </Container>
      </section>

      {/* AUSGANGSLAGE + ERGEBNISSE */}
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-10 space-y-6">
            <SectionHeading title="Kommt Ihnen das bekannt vor?" />
            <ul className="space-y-3">
              {area.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-body-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#686DF4] shrink-0 mt-2" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#686DF4]/[0.04] border border-[#CACCFB]/60 rounded-3xl p-7 sm:p-10 space-y-6">
            <SectionHeading title="Ziele der Zusammenarbeit" />
            <CheckList items={area.outcomes} />
            <p className="text-xs text-slate-500 leading-relaxed">
              Welche Ziele in Ihrem Fall realistisch sind und woran wir sie messen, legen wir zu Beginn gemeinsam fest.
            </p>
          </div>
        </Container>
      </section>

      {/* LEISTUNGEN */}
      <section>
        <Container className="space-y-10">
          <SectionHeading title={`Leistungen im Bereich ${area.shortLabel}`} />
          {groups.map((g) => (
            <div key={g.label || 'all'} className="space-y-4">
              {g.label && <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">{g.label}</h3>}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.services
                  .map((slug) => services.find((s) => s.slug === slug))
                  .filter((s): s is (typeof SERVICES)[number] => Boolean(s))
                  .map((s) => (
                    <TeaserCard key={s.slug} href={`/leistungen/${s.slug}`} title={s.title} desc={s.shortDesc} linkText="Zur Leistung" />
                  ))}
              </div>
            </div>
          ))}
          {area.topics.length > 0 && (
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">Weitere Themen in diesem Bereich</h3>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-10">
                {area.topics.map((t) => (
                  <div key={t.title}>
                    <dt className="font-display font-semibold text-slate-900">{t.title}</dt>
                    <dd className="mt-1.5 text-body-sm text-slate-600 leading-relaxed">{t.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </Container>
      </section>

      {/* RECHNER (nur Growth) */}
      {id === 'wachstum-marketing' && (
        <section className="bg-white border-y border-[#E2E8F0]/40 py-20 md:py-28">
          <Container className="space-y-12">
            <SectionHeading
              align="center"
              title="Was eine bessere Anfragequote bringen kann"
              intro="Tragen Sie Ihre eigenen Werte ein. Der Rechner zeigt grob, wie sich höhere Anfrage- und Abschlussquoten auf Ihren Umsatz auswirken. Eine Schätzung, keine Prognose."
            />
            <Suspense fallback={<div className="min-h-[480px]" aria-busy="true" />}>
              <InteractiveGrowthCalculator />
            </Suspense>
          </Container>
        </section>
      )}

      {/* BRANCHEN (nur Growth): bestehende Branchenseiten */}
      {id === 'wachstum-marketing' && (
        <section>
          <Container className="space-y-6">
            <SectionHeading title="Kundengewinnung für Ihre Branche" intro="Wie Neukundengewinnung in Ihrer Branche funktioniert: typische Hürden, unser Vorgehen und ein passender Rechner." />
            <ul className="flex flex-wrap gap-2.5">
              {Object.values(SOLUTIONS_SECTORS).map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={`/loesungen/${sector.slug}`}
                    className="inline-block text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2 hover:border-[#686DF4]/50 hover:text-[#4f54d6] transition-colors"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* REFERENZ */}
      <section>
        <Container className="max-w-4xl">
          <TestimonialQuote id={AREA_TESTIMONIAL[id]} />
        </Container>
      </section>

      {/* CHECKS, LÖSUNGEN, RATGEBER */}
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading title="Passende Checks aus der Skill-Factory" as="h2" />
            <ToolLinks ids={area.tools} />
          </div>
          <div className="lg:col-span-5 space-y-8">
            {area.solutions.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-display font-semibold text-slate-900">Passende Lösungen</h2>
                <ul className="space-y-3">
                  {area.solutions.map((href) => {
                    const slug = href.replace('/loesungen/', '');
                    const label = isChallengeSlug(slug) ? CHALLENGE_PAGES[slug].label : 'Lösungen nach Branche';
                    return (
                      <li key={href}>
                        <TeaserLinkInline href={href} label={label} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {area.resources.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-display font-semibold text-slate-900">Aus dem Ratgeber</h2>
                <ResourceLinks slugs={area.resources} />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading title={`Fragen zu ${area.shortLabel}`} />
          <FaqList items={area.faq} />
        </Container>
      </section>

      {/* ANDERE FELDER */}
      <section>
        <Container className="space-y-8">
          <SectionHeading title="Die anderen Leistungsfelder" intro="Die besten Ergebnisse entstehen, wenn Strategie, Technologie, Marketing und Vertrieb aufeinander abgestimmt sind." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((o) => (
              <TeaserCard key={o.id} href={`/leistungen/${o.id}`} title={o.shortLabel} desc={o.teaser} />
            ))}
          </div>
        </Container>
      </section>

      <FinalCta
        title="Lassen Sie uns über Ihre Ausgangslage sprechen."
        text="30 Minuten, kostenlos und unverbindlich. Sie schildern, wo Sie stehen, und wir sagen Ihnen offen, wo wir Potenzial sehen und ob wir der richtige Partner dafür sind."
        ctaLabel={area.ctaLabel}
        location={`hub_${id}_footer`}
        pageSlug={id}
      />
    </div>
  );
}

function TeaserLinkInline({ href, label }: { href: string; label: string }) {
  return (
    <TeaserCard href={href} title={label} linkText="Ansehen" />
  );
}
