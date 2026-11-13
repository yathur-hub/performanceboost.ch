/**
 * Bereichsseite (/leistungen/marketing, /sales, /prozesse) und übergreifende Seite Agentic AI
 * (/leistungen/ki-im-unternehmen). Inhalte aus src/data/serviceAreas.ts, Phasen aus src/data/approach.ts.
 * Reihenfolge: Hero · Grafik · Ausgangslage/Ziele · Leistungen + Kompetenzfelder · Agenten (bzw. Stufen) ·
 * So gehen wir vor · eigene Praxis · Branchen (Marketing) · Referenz · Checks/Lösungen/Ratgeber · FAQ · andere Bereiche · CTA.
 */
import { Visual3D, VISUAL_BY_AREA } from '../components/Visual3D';
import React from 'react';
import { Bot, ShieldCheck, RotateCcw, ArrowRight } from 'lucide-react';
import { getArea, servicesOf, SERVICE_AREAS, AGENTIC_LEVELS, type AreaId } from '../data/serviceAreas';
import { PHASES } from '../data/approach';
import { BrandVisual } from '../components/BrandVisual';
import { SERVICES } from '../data/services';
import {
  Breadcrumb,
  CheckList,
  Container,
  CtaButton,
 
  FaqList,
  ResourceLinks,
  SectionHeading,
  TeaserCard,
  TestimonialQuote,
  ToolLinks,
} from '../components/bp/Blocks';
import { CHALLENGE_PAGES, isChallengeSlug } from '../data/challenges';
import { AREA_DIAGRAMS } from '../data/diagrams';
import { Diagram } from '../components/diagrams/Diagram';
import { HeroTrust, LeadCtaSection } from '../components/bp/Conversion';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import Link from '../components/Link';


/** Passende Kundenstimme je Bereich (nur bestehende, wörtliche Zitate). Agentic AI: Systembau bei CarlaCares. */
const AREA_TESTIMONIAL: Record<AreaId, string> = {
  marketing: 'ibrahim-akyol',
  sales: 'simon-karrica',
  prozesse: 'kathirsan-kathirgamanathan',
  'ki-im-unternehmen': 'carla-carcaiso',
};

export default function ServiceAreaView({ id }: { id: AreaId }) {
  const area = getArea(id);
  const services = servicesOf(area);
  const others = SERVICE_AREAS.filter((a) => a.id !== id);
  const isArea = area.kind === 'area';
  const groups = area.serviceGroups ?? [{ label: '', services: area.services }];

  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id={`area-${id}`}>
      {/* HERO */}
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'Leistungen', href: '/leistungen' }, { label: area.shortLabel }]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="hero-enter lg:col-span-8 max-w-4xl space-y-6">
            <p className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.18em] text-[#686CFA]">
              {area.label} <span className="text-slate-400">·</span> {area.subtitle}
            </p>
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
              {area.headline}
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">{area.definition}</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <CtaButton label={area.ctaLabel} location={`hub_${id}_hero`} pageSlug={id} />
            </div>
            <HeroTrust />
          </div>
          <div className="hidden lg:flex lg:col-span-4 justify-center rocket-in">
            <Visual3D id={VISUAL_BY_AREA[id]} priority sizes="340px" className="max-h-80 w-auto max-w-full animate-float" />
          </div>
          </div>
        </Container>
      </section>

      {/* THEMENGRAFIK */}
      {AREA_DIAGRAMS[id] && (
        <section>
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <SectionHeading title={AREA_DIAGRAMS[id].title} />
              <p className="text-body text-slate-600 leading-relaxed">{AREA_DIAGRAMS[id].text}</p>
              <CtaButton label={area.ctaLabel} location={`hub_${id}_grafik`} pageSlug={id} variant="light" />
            </div>
            <div className="lg:col-span-7">
              <Diagram spec={AREA_DIAGRAMS[id].spec} />
            </div>
          </Container>
        </section>
      )}

      {/* AUSGANGSLAGE + ERGEBNISSE */}
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-10 space-y-6">
            <SectionHeading title="Typische Ausgangslagen" />
            <ul className="space-y-3">
              {area.challenges.map((c) => (
                <li key={c} className="flex gap-3 text-body-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#686CFA] shrink-0 mt-2" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#686CFA]/[0.04] border border-[#CBCBFC]/60 rounded-3xl p-7 sm:p-10 space-y-6">
            <SectionHeading title="Ziele der Zusammenarbeit" />
            <CheckList items={area.outcomes} />
            <p className="text-xs text-slate-500 leading-relaxed">
              Welche Ziele in Ihrem Fall realistisch sind und woran wir sie messen, legen wir zu Beginn gemeinsam fest.
            </p>
          </div>
        </Container>
      </section>

      {/* EINORDNUNG MIT EIGENER INFOGRAFIK */}
      {area.insight && (
        <section>
          <Container className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="md:col-span-5 lg:col-span-4 max-w-sm md:max-w-none mx-auto w-full">
              <BrandVisual id={area.insight.visual} sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 92vw" />
            </div>
            <div className="md:col-span-7 lg:col-span-8 space-y-4 max-w-2xl">
              <SectionHeading title={area.insight.title} />
              <p className="text-body text-slate-600 leading-relaxed">{area.insight.text}</p>
              <CtaButton label={area.ctaLabel} location={`hub_${id}_einordnung`} pageSlug={id} variant="light" />
            </div>
          </Container>
        </section>
      )}

      {/* LEISTUNGEN */}
      <section>
        <Container className="space-y-10">
          <SectionHeading
            title={isArea ? `Leistungen im Bereich ${area.label}` : 'Passende Leistungen'}
            intro={isArea ? area.role : undefined}
          />
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
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">{isArea ? 'Weitere Kompetenzfelder' : 'Was dazugehört'}</h3>
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


      {/* AGENTEN IM BEREICH bzw. STUFEN (Agentic-AI-Seite) */}
      {area.agentic && (
        <section className="bg-white border-y border-[#E2E8F0]/40 py-16 md:py-24">
          <Container className="space-y-8">
            {area.agentic.visual ? (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="md:col-span-7 lg:col-span-8 space-y-4">
                  <SectionHeading title={area.agentic.title} intro={area.agentic.intro} />
                  {area.agentic.visualCaption && <p className="text-body-sm text-slate-500 leading-relaxed max-w-2xl">{area.agentic.visualCaption}</p>}
                </div>
                <div className="md:col-span-5 lg:col-span-4 max-w-sm md:max-w-none mx-auto w-full">
                  <BrandVisual id={area.agentic.visual} sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 92vw" />
                </div>
              </div>
            ) : (
              <SectionHeading title={area.agentic.title} intro={area.agentic.intro} />
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {area.agentic.items.map((it) => (
                <div key={it.task} className="rounded-3xl border border-[#E0E0E0]/80 bg-[#f6f6f6]/50 p-7 flex flex-col">
                  <span className="w-9 h-9 rounded-xl bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center">
                    <Bot className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display font-semibold text-slate-900">{it.task}</h3>
                  <p className="mt-2 text-body-sm text-slate-600 leading-relaxed">{it.desc}</p>
                  <p className="mt-auto pt-4 flex gap-2 text-xs font-semibold text-slate-800 leading-relaxed">
                    <ShieldCheck className="w-4 h-4 text-[#686CFA] shrink-0" aria-hidden="true" /> {it.human}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/leistungen/ki-im-unternehmen" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] hover:text-[#4f54d6]">
              Regel, KI oder Agent: wie wir entscheiden <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </Container>
        </section>
      )}
      {!isArea && (
        <section className="bg-white border-y border-[#E2E8F0]/40 py-16 md:py-24">
          <Container className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="md:col-span-7 lg:col-span-8 space-y-4">
                <SectionHeading
                  title="Von der Regel bis zum Agenten"
                  intro="Für jeden Ablauf wählen wir die einfachste Lösung, die verlässlich funktioniert. Oft ist das eine feste Regel und kein Agent. Die menschliche Steuerung gilt auf jeder Stufe."
                />
                <p className="text-body-sm text-slate-500 leading-relaxed max-w-2xl">
                  Mehr Spielraum bekommt ein Agent erst, wenn die Stufe davor nachweislich hält: zuerst lesen, dann vorschlagen, dann mit
                  Freigabe schreiben und erst danach innerhalb fester Limits selbst handeln. Was die nächste Stufe rechtfertigt, legen wir
                  vorher fest.
                </p>
              </div>
              <div className="md:col-span-5 lg:col-span-4 max-w-sm md:max-w-none mx-auto w-full">
                <BrandVisual id="autonomie-als-treppe" sizes="(min-width: 1024px) 400px, (min-width: 768px) 40vw, 92vw" />
              </div>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AGENTIC_LEVELS.map((l, i) => (
                <li key={l.title} className={`rounded-3xl border p-6 flex flex-col ${i === 3 ? 'bg-slate-950 border-slate-950 text-white' : 'bg-[#f6f6f6]/60 border-[#E0E0E0]/80'}`}>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${i === 3 ? 'text-[#CBCBFC]' : 'text-[#686CFA]'}`}>{l.label}</span>
                  <h3 className={`mt-2 font-display font-semibold leading-snug ${i === 3 ? 'text-white' : 'text-slate-900'}`}>{l.title}</h3>
                  <p className={`mt-2 text-body-sm leading-relaxed ${i === 3 ? 'text-slate-300' : 'text-slate-600'}`}>{l.desc}</p>
                  <p className={`mt-3 text-xs leading-relaxed ${i === 3 ? 'text-slate-400' : 'text-slate-500'}`}>{l.example}</p>
                  <p className={`mt-auto pt-4 text-xs font-bold ${i === 3 ? 'text-[#CBCBFC]' : 'text-[#4f54d6]'}`}>{l.decides}</p>
                </li>
              ))}
            </ol>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {SERVICE_AREAS.filter((a) => a.kind === 'area').map((a) => (
                <TeaserCard key={a.id} href={`/leistungen/${a.id}`} title={a.agentic?.title ?? a.label} desc={a.agentic?.intro} linkText={`Zu ${a.label}`} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* SO GEHEN WIR VOR (vier Phasen, bereichsspezifisch) */}
      {area.phaseExamples && (
        <section>
          <Container className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <SectionHeading
                title={`So gehen wir im Bereich ${area.label} vor`}
                intro="Wir steigen in der Phase ein, die zu Ihrer Ausgangslage passt. Nicht jedes Vorhaben braucht alle vier."
              />
              <Link href="/ansatz" className="text-xs font-bold text-[#686CFA] hover:text-[#4f54d6] inline-flex items-center gap-1.5 shrink-0">
                Mehr zum Ansatz <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PHASES.map((p, i) => (
                <li key={p.label} className="rounded-3xl border border-[#E0E0E0]/80 bg-white p-6">
                  <span className="flex items-center justify-between">
                    <span className="text-[11px] font-bold font-mono text-[#686CFA]">0{i + 1}</span>
                    {i >= 2 && <RotateCcw className="w-4 h-4 text-[#686CFA]/70" aria-label="wiederkehrend" />}
                  </span>
                  <p lang="en" className="mt-3 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">{p.label}</p>
                  <h3 className="mt-1 font-display font-semibold text-slate-900 leading-snug">{p.title}</h3>
                  <p className="mt-2 text-body-sm text-slate-600 leading-relaxed">{area.phaseExamples![i]}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      )}

      {/* EIGENE PRAXIS (z. B. KI im Unternehmen): bestätigte Abläufe aus dem eigenen Betrieb */}
      {area.practice && (
        <section>
          <Container className="space-y-8">
            <SectionHeading title={area.practice.title} intro={area.practice.intro} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {area.practice.items.map((it) => (
                <div key={it.title} className="bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-8 space-y-2">
                  <h3 className="font-display font-semibold text-slate-900">{it.title}</h3>
                  <p className="text-body-sm text-slate-600 leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* BRANCHEN (nur Growth): bestehende Branchenseiten */}
      {id === 'marketing' && (
        <section>
          <Container className="space-y-6">
            <SectionHeading title="Kundengewinnung für Ihre Branche" intro="Für jede Branche beschreiben wir die typischen Hürden bei der Neukundengewinnung, unser Vorgehen und einen passenden Rechner." />
            <ul className="flex flex-wrap gap-2.5">
              {Object.values(SOLUTIONS_SECTORS).map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={`/loesungen/${sector.slug}`}
                    className="inline-block text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2 hover:border-[#686CFA]/50 hover:text-[#4f54d6] transition-colors"
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
          <SectionHeading title={`Fragen zu ${area.label}`} />
          <FaqList items={area.faq} />
        </Container>
      </section>

      {/* ANDERE FELDER */}
      <section>
        <Container className="space-y-8">
          <SectionHeading
            title={isArea ? 'Ein System, drei Bereiche' : 'Die drei Bereiche'}
            intro="Marketing, Sales und Processes hängen voneinander ab. Am meisten bringt es, wenn man sie zusammen betrachtet und den grössten Engpass zuerst angeht."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((o) => (
              <TeaserCard key={o.id} href={`/leistungen/${o.id}`} title={o.label} desc={o.teaser} />
            ))}
          </div>
        </Container>
      </section>

      <LeadCtaSection formLocation={`hub_${id}`} ctaLabel={area.ctaLabel} />
    </div>
  );
}

function TeaserLinkInline({ href, label }: { href: string; label: string }) {
  return (
    <TeaserCard href={href} title={label} linkText="Ansehen" />
  );
}
