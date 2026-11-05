/** Problemorientierte Lösungsseite (/loesungen/prozessautomatisierung, /loesungen/vertrieb-optimieren). */
import React from 'react';
import { CHALLENGE_PAGES, type ChallengeSlug } from '../data/challenges';
import { SERVICES } from '../data/services';
import {
  Breadcrumb,
  CheckList,
  Container,
  CtaButton,
 
  FaqList,
  FinalCta,
  SectionHeading,
  TeaserCard,
  TestimonialQuote,
  ToolLinks,
} from '../components/bp/Blocks';

const CHALLENGE_TESTIMONIAL: Record<ChallengeSlug, string> = {
  prozessautomatisierung: 'carla-carcaiso',
  'vertrieb-optimieren': 'simon-karrica',
};

export default function ChallengeView({ slug }: { slug: ChallengeSlug }) {
  const page = CHALLENGE_PAGES[slug];
  const services = page.services
    .map((s) => SERVICES.find((x) => x.slug === s))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));

  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id={`challenge-${slug}`}>
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'Lösungen', href: '/loesungen' }, { label: page.label }]} />
          <div className="max-w-4xl space-y-6">
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">{page.h1}</h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">{page.intro}</p>
            <CtaButton label={page.ctaLabel} location={`challenge_${slug}_hero`} pageSlug={slug} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading title="Woran Sie das Problem erkennen" />
            <ul className="space-y-3">
              {page.symptoms.map((s) => (
                <li key={s} className="flex gap-3 text-body-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#686DF4] shrink-0 mt-2" aria-hidden="true" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading title="Warum das in vielen KMU so ist" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {page.causes.map((c) => (
                <div key={c.title} className="bg-white border border-[#E0E0E0]/80 rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-slate-900 text-sm">{c.title}</h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-y border-[#E2E8F0]/40 py-20 md:py-24">
        <Container className="space-y-10">
          <SectionHeading title="So gehen wir vor" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {page.approach.map((a, i) => (
              <li key={a.title} className="bg-[#f6f6f6]/60 border border-[#E0E0E0]/80 rounded-2xl p-6 space-y-3">
                <span className="text-[11px] font-bold font-mono text-[#686DF4]">0{i + 1}</span>
                <h3 className="font-display font-semibold text-slate-900">{a.title}</h3>
                <p className="text-body-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading title="Typische Ansatzpunkte" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {page.examples.map((e) => (
                <div key={e.title}>
                  <dt className="font-display font-semibold text-slate-900">{e.title}</dt>
                  <dd className="mt-1.5 text-body-sm text-slate-600 leading-relaxed">{e.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5 bg-[#686DF4]/[0.04] border border-[#CACCFB]/60 rounded-3xl p-7 sm:p-9 space-y-5 self-start">
            <h2 className="text-lg font-display font-semibold text-slate-900">Worauf wir hinarbeiten</h2>
            <CheckList items={page.outcomes} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="max-w-4xl">
          <TestimonialQuote id={CHALLENGE_TESTIMONIAL[slug]} sentences={3} />
        </Container>
      </section>

      <section>
        <Container className="space-y-8">
          <SectionHeading title="Diese Leistungen helfen dabei" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((s) => (
              <TeaserCard key={s.slug} href={`/leistungen/${s.slug}`} title={s.title} desc={s.shortDesc} linkText="Zur Leistung" />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-6">
          <SectionHeading title="Wo stehen Sie heute?" />
          <ToolLinks ids={page.tools} />
        </Container>
      </section>

      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading title={`Fragen zu ${page.label}`} />
          <FaqList items={page.faq} />
        </Container>
      </section>

      <FinalCta
        title="Wo verliert Ihr Unternehmen heute Zeit oder Umsatz?"
        text="Im kostenlosen Erstgespräch schauen wir uns Ihre Abläufe an und sagen Ihnen offen, wo wir ansetzen würden."
        ctaLabel={page.ctaLabel}
        location={`challenge_${slug}_footer`}
        pageSlug={slug}
      />
    </div>
  );
}
