/**
 * MarTech-Wissen: Übersicht mit Landkarte (/martech) und Fachthemen (/martech/<slug>).
 * Inhalte: src/data/martechWissen.ts. Zielgruppe Fachebene; oben jeweils drei Sätze für die Geschäftsleitung.
 */
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from '../components/Link';
import { Breadcrumb, Container, CtaButton, SectionHeading, TeaserCard } from '../components/bp/Blocks';
import { LeadCtaSection } from '../components/bp/Conversion';
import { SimpleMarkdown } from '../components/SimpleMarkdown';
import { MartechMap } from '../components/martech/MartechMap';
import { SITE } from '../config/site';
import { FACTS_CHECKED, MARTECH_LAYERS, MARTECH_TOPICS, getLayer, getTopic } from '../data/martechWissen';

function AuthorLine() {
  return (
    <div className="flex items-center gap-3">
      <img src={SITE.portraitUrl} alt="Yathur Nathan" width={40} height={40} className="w-10 h-10 rounded-xl object-cover border border-slate-200" referrerPolicy="no-referrer" />
      <div className="text-xs leading-snug">
        <p className="font-semibold text-slate-900">Yathur Nathan</p>
        <p className="text-slate-500">Marketing, MarTech und KI in Marketing & Growth</p>
      </div>
    </div>
  );
}

export default function MartechView({ slug }: { slug?: string }) {
  if (slug) return <TopicPage slug={slug} />;
  return <HubPage />;
}

function HubPage() {
  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id="martech-hub">
      <section className="pt-36 md:pt-40 pb-4 bg-white/60">
        <Container className="space-y-7">
          <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'MarTech-Wissen' }]} />
          <div className="max-w-4xl space-y-6">
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">
              MarTech-Wissen aus der Praxis.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Wie Marketing-Systeme gebaut sind, wie sie miteinander reden, was sie im Betrieb kosten und wo KI-Agenten dazugehören.
              Für Leitungen Marketing, Vertrieb und Marketing Ops, die Entscheidungen auf einer technischen Grundlage treffen wollen.
              Jedes Thema beginnt mit drei Sätzen für die Geschäftsleitung, darunter folgt der technische Teil mit Quellen.
            </p>
            <AuthorLine />
          </div>
        </Container>
      </section>

      <section>
        <Container className="space-y-10">
          <SectionHeading
            title="Die MarTech-Landkarte"
            intro="Fast jeder Stack lässt sich in fünf Schichten lesen. Die Schichten sind keine Rangfolge. Sie helfen bei der Frage, wo ein Problem tatsächlich liegt: Ein schlechtes Reporting hat seine Ursache oft in der Erfassung oder in Prozessen, die das CRM falsch befüllen."
          />
          <MartechMap />
        </Container>
      </section>

      <section>
        <Container className="space-y-12">
          <SectionHeading title="Alle Fachthemen" intro={`Fakten und Preise geprüft am ${FACTS_CHECKED}. Lizenzen und Preise ändern sich, die Quellen stehen bei jedem Thema.`} />
          {MARTECH_LAYERS.filter((l) => MARTECH_TOPICS.some((t) => t.layer === l.id)).map((l) => (
            <div key={l.id} className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 font-display">
                Schicht {l.nr} · {l.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MARTECH_TOPICS.filter((t) => t.layer === l.id).map((t) => (
                  <TeaserCard key={t.slug} href={`/martech/${t.slug}`} title={t.title} desc={t.teaser} linkText="Thema lesen" />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <TeaserCard href="/werkzeuge" title="Werkzeuge" desc="Womit Yathur Nathan selbst arbeitet, nach Schicht geordnet und mit einem Satz zum Einsatz." linkText="Werkzeuge ansehen" />
          <TeaserCard href="/labor" title="Labor" desc="Eigene Experimente mit KI-Agenten und Automatisierung, mit ehrlichem Reifegrad." linkText="Zum Labor" />
          <TeaserCard href="/ressourcen/martech" title="MarTech für KMU" desc="Einsteigerbeiträge für die Geschäftsleitung: Stack-Inventur, CRM-Auswahl, Open Source oder Lizenz." linkText="Beiträge lesen" />
        </Container>
      </section>

      <LeadCtaSection
        formLocation="martech_hub"
        title="Ihr Stack, von aussen angeschaut."
        intro="Schildern Sie kurz, welche Systeme Sie heute nutzen und wo es hakt. Sie erhalten innert eines Arbeitstags eine persönliche Antwort von Yathur Nathan."
      />
    </div>
  );
}

function TopicPage({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  const layer = getLayer(topic.layer);
  const siblings = MARTECH_TOPICS.filter((t) => t.layer === topic.layer && t.slug !== topic.slug);
  const others = siblings.length >= 2 ? siblings.slice(0, 3) : [...siblings, ...MARTECH_TOPICS.filter((t) => t.layer !== topic.layer)].slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-24 pb-24 text-slate-800" id={`martech-${slug}`}>
      <article>
        <section className="pt-36 md:pt-40 pb-4 bg-white/60">
          <Container className="max-w-4xl space-y-7">
            <Breadcrumb items={[{ label: 'Startseite', href: '/' }, { label: 'MarTech-Wissen', href: '/martech' }, { label: topic.title }]} />
            <h1 className="text-[2rem] sm:text-5xl font-display font-semibold tracking-tight text-slate-900 leading-[1.1] text-balance">{topic.title}</h1>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <AuthorLine />
              <p className="text-xs text-slate-500">Fakten geprüft am {FACTS_CHECKED}</p>
            </div>
          </Container>
        </section>

        <Container className="max-w-4xl space-y-12 pt-10">
          <aside className="rounded-3xl border border-[#CBCBFC]/70 bg-[#686CFA]/[0.05] p-7 sm:p-9 space-y-3">
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#4f54d6]">Für die Geschäftsleitung</p>
            <p className="text-lg text-slate-900 leading-relaxed font-medium">{topic.management}</p>
          </aside>

          <div className="space-y-2">
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">Technischer Teil</p>
            <SimpleMarkdown text={topic.content} />
          </div>

          <div className="border-t border-slate-200 pt-8 space-y-4">
            <h2 className="text-lg font-display font-semibold text-slate-900">Quellen</h2>
            {topic.sources.length > 0 ? (
              <ul className="space-y-2">
                {topic.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 text-sm text-[#4f54d6] hover:text-[#686CFA] break-words">
                      <ExternalLink className="w-3.5 h-3.5 mt-1 shrink-0" aria-hidden="true" />
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-600">Dieses Thema ist eine fachliche Einordnung aus der eigenen Arbeit, ohne externe Quelle.</p>
            )}
            <p className="text-xs text-slate-500 leading-relaxed">
              Alle Angaben zu Preisen, Lizenzen und Funktionen entsprechen dem Stand vom {FACTS_CHECKED}. Keine Rechtsberatung.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-950 text-white p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-lg font-display font-semibold">Das Thema betrifft Ihren Stack?</p>
              <Link href={topic.related.href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#CBCBFC] hover:text-white">
                Passende Leistung: {topic.related.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <CtaButton label="Erstgespräch vereinbaren" location={`martech_${slug}`} pageSlug={slug} className="shrink-0" />
          </div>
        </Container>
      </article>

      <section>
        <Container className="space-y-8">
          <SectionHeading title="Weitere Fachthemen" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {others.map((t) => (
              <TeaserCard key={t.slug} href={`/martech/${t.slug}`} title={t.title} desc={t.teaser} linkText="Thema lesen" />
            ))}
          </div>
          <Link href="/martech" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] hover:text-[#4f54d6]">
            Zur MarTech-Landkarte <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </Container>
      </section>
    </div>
  );
}
