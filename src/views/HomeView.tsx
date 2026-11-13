/**
 * Startseite (Positionierung «Boost your performance through agentic marketing, sales & processes.»,
 * Konzept: docs/agentic-positioning/01, Kapitel 5).
 *
 * Dramaturgie vom Geschäftsproblem zur Kontaktaufnahme, ohne doppelte Leistungsdarstellung:
 * Hero · Herausforderungen · Drei Bereiche · Zusammenspiel (Systemdiagramm + Stufen der Automatisierung) ·
 * Vorgehen (vier Phasen, modular) · Kundenstimmen · Inhaber + Wissen · FAQ · Abschluss-CTA.
 */
import { Visual3D, VISUAL_BY_AREA } from '../components/Visual3D';
import React, { useState, lazy, Suspense } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
const ProblemFinder = lazy(() => import('../components/home/ProblemFinder'));
import { RevenueSystemGraphic } from '../components/home/RevenueSystemGraphic';
import { ClientTestimonials } from '../components/home/ClientTestimonials';
import { SITE } from '../config/site';
import Link from '../components/Link';
import { Container, CtaButton, FaqList, SectionHeading } from '../components/bp/Blocks';
import { AREAS, AGENTIC_LEVELS } from '../data/serviceAreas';
import { PHASES } from '../data/approach';
import { CHALLENGE_CARDS } from '../data/challenges';
import { BrandVisual } from '../components/BrandVisual';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}


const DIFFERENCES = [
  { title: 'Bauen statt nur beraten', desc: 'Wir entwerfen die Architektur und setzen sie selbst um, von der Datenbasis bis zum Agenten.' },
  { title: 'Im eigenen Betrieb erprobt', desc: 'Anfragen, Recherche und Entwürfe laufen bei uns über dieselben Systeme, die wir empfehlen.' },
  { title: 'Direkt mit dem Inhaber', desc: 'Yathur Nathan arbeitet persönlich an Ihrem System, ohne Account Manager dazwischen.' },
];

/** Vergleich klassisches Wachstum vs. AI First (Startseite). Keine Zahlen, keine Versprechen. */
const COMPARISON = [
  { topic: 'Wachstum', classic: 'Mehr Aufträge brauchen mehr Personal, mehr Dienstleister und mehr Abstimmung.', aiFirst: 'Kapazität wächst über Abläufe, in denen Regeln und Agenten die Vorarbeit übernehmen.' },
  { topic: 'Systeme', classic: 'Einzelne Tools, Daten werden von Hand übertragen.', aiFirst: 'Ein verbundenes System mit gemeinsamer Datenbasis und einem führenden System pro Datentyp.' },
  { topic: 'Rolle der KI', classic: 'Einzelne Mitarbeitende nutzen KI für Texte, jede Person auf ihre Weise.', aiFirst: 'KI ist Teil jedes Ablaufs, mit Unternehmenskontext, festen Rechten, Freigaben und Protokollen.' },
  { topic: 'Steuerung', classic: 'Gemessen werden Klicks, Reichweite und Aktivitäten.', aiFirst: 'Gemessen werden Anfragen, Aufträge, Reaktionszeiten und Kosten pro Fall, die Daten fliessen zurück.' },
  { topic: 'Zusammenarbeit', classic: 'Konzept, Umsetzung und Betrieb liegen bei verschiedenen Partnern.', aiFirst: 'Wir entwerfen, bauen und verbessern das System mit Ihrem Team, ohne Übergaben zwischen Partnern.' },
];

const FAQ = [
  {
    q: 'Was heisst «agentic marketing, sales & processes»?',
    a: 'Wir gestalten Marketing, Vertrieb und die Abläufe dahinter als ein System und planen Automatisierung und KI von Anfang an mit. Feste Regeln übernehmen, was immer gleich abläuft. KI-Agenten bearbeiten Aufgaben über mehrere Schritte, etwa recherchieren, vorqualifizieren oder Entwürfe vorbereiten, mit klar begrenzten Rechten. Ihr Team gibt frei und entscheidet.',
  },
  {
    q: 'Sind Sie eine Agentur oder eine Beratung?',
    a: 'Keines von beiden im klassischen Sinn. Eine Agentur liefert Kampagnen, eine Beratung liefert Konzepte. Wir entwerfen mit Ihnen die Architektur, bauen das System selbst und verbessern es im Betrieb. Kampagnen, CRM und Automatisierungen sind Bausteine dieses Systems. Gemessen wird an Ihren Geschäftszahlen, und wo eine einfache Regel verlässlicher ist als ein Agent, bauen wir die Regel.',
  },
  {
    q: 'Was ist der Unterschied zwischen Automatisierung und einem KI-Agenten?',
    a: 'Eine Automatisierung folgt festen Regeln und läuft immer gleich ab, zum Beispiel wenn eine Anfrage ins CRM übernommen wird. Ein KI-Agent bearbeitet eine Aufgabe über mehrere Schritte und wählt innerhalb eines festen Rahmens selbst den nächsten Schritt, zum Beispiel wenn er ein Unternehmen recherchiert und eine Gesprächsvorbereitung schreibt. In der Praxis werden beide kombiniert.',
  },
  {
    q: 'Woher weiss ein Agent, was in unserem Unternehmen richtig ist?',
    a: 'Aus dem Kontext, den wir mit Ihnen aufbauen. Dazu gehören Angebote, Zielkunden-Kriterien, Markenregeln sowie freigegebene Texte und Unterlagen. Faktenaussagen wie Preise oder Leistungsumfang stützt ein Agent nur auf diese Quellen. Fehlt eine Quelle, geht nichts hinaus. Den Kontext pflegen wir laufend, denn er bestimmt die Qualität mehr als das Sprachmodell.',
  },
  {
    q: 'Für welche Unternehmen eignet sich performanceboost?',
    a: 'Für Schweizer KMU, meist ab rund CHF 1 Mio. Jahresumsatz, die wachsen oder effizienter arbeiten möchten, vor allem Dienstleister und B2B-Unternehmen, aber auch Onlineshops. Wichtig ist eine Geschäftsleitung, die mitentscheidet, und die Bereitschaft, Abläufe zu verändern.',
  },
  {
    q: 'Müssen wir alle drei Bereiche und alle Phasen beziehen?',
    a: 'Nein. Viele Projekte beginnen mit einem klar umrissenen Thema, etwa Kampagnen, einem CRM oder einer Automatisierung, und in der Phase, die zu Ihrer Ausgangslage passt. Wir achten darauf, dass es zum Rest passt, und erweitern nur, wenn es sich für Sie lohnt.',
  },
  {
    q: 'Wie viel Aufwand habe ich als Kunde?',
    a: 'Zu Beginn brauchen wir Ihr Wissen über Angebot, Kunden und Abläufe sowie die nötigen Zugänge. Danach genügt in der Regel ein kurzer regelmässiger Austausch. Die Umsetzung übernehmen wir.',
  },
  {
    q: 'Was kostet eine Zusammenarbeit?',
    a: 'Wir arbeiten mit Festpreisen für definierte Ergebnisse, nicht nach Stunden. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit Umfang, Ergebnis und Preis. Das Erstgespräch selbst ist kostenlos.',
  },
];

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [showProblemFinder, setShowProblemFinder] = useState(false);

  return (
    <div className="space-y-16 md:space-y-28 pb-24 text-slate-800" id="home-view">
      {/* 1 HERO: Claim, konkreter Nutzen, Rakete wie bisher */}
      <section className="relative pt-[8.25rem] pb-8 sm:pt-36 sm:pb-14 md:pt-40 md:pb-16 overflow-hidden bg-white">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
            <div className="hero-enter lg:col-span-8 xl:col-span-7 lg:space-y-7 text-left">
              <h1 lang="en" className="text-[2.1rem] sm:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] font-display font-semibold tracking-tight text-slate-900 leading-[1.08] text-balance">
                <span className="hero-line"><span>Boost your performance</span></span>{' '}
                <span className="hero-line text-[#686CFA] italic font-serif"><span>through agentic marketing, sales &amp; processes.</span></span>
              </h1>
              <p className="text-slate-600 lg:text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl">
                performanceboost ist der AI-First-Scaling-Partner für Schweizer KMU. Wir bauen Marketing, Vertrieb und Abläufe als ein System,
                das auf KI aufbaut, damit Ihr Unternehmen wachsen kann, ohne dass mit jedem Auftrag die Handarbeit mitwächst.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 justify-start items-stretch sm:items-center lg:pt-1">
                <CtaButton label="Ausgangslage besprechen" location="home_hero" pageSlug="home" />
                <button
                  type="button"
                  onClick={() => setShowProblemFinder(true)}
                  data-cta="hero_secondary"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 bg-white hover:bg-slate-50 whitespace-nowrap text-slate-900 border border-slate-300 font-display font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30 max-sm:min-h-11 max-sm:border-transparent max-sm:bg-transparent max-sm:hover:bg-transparent max-sm:px-0 max-sm:py-2 max-sm:text-[15px] max-sm:font-medium max-sm:text-slate-700 max-sm:active:text-[#4f54d6]"
                >
                  Welches Problem möchten Sie lösen? <ArrowRight className="w-4 h-4 shrink-0 sm:hidden" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Rakete in zwei Ebenen: Rauch statisch, Rakete animiert */}
            <div className="lg:col-span-4 xl:col-span-5 flex justify-end hero-parallax -mt-6 sm:-mt-2 lg:mt-0">
              <div className="relative w-[132px] min-[380px]:w-[150px] sm:w-[190px] lg:w-[280px] xl:w-[400px] aspect-[650/1024] select-none">
                <img
                  src="/images/hero-smoke-650.webp"
                  srcSet="/images/hero-smoke-400.webp 400w, /images/hero-smoke-650.webp 650w"
                  sizes="(min-width: 1280px) 400px, (min-width: 1024px) 280px, (min-width: 640px) 190px, 150px"
                  width={650}
                  height={1024}
                  alt=""
                  decoding="async"
                  draggable={false}
                  className="smoke-in absolute inset-0 h-full w-full"
                />
                <div className="rocket-in absolute inset-0">
                  <img
                    src="/images/hero-rocket-650.webp"
                    srcSet="/images/hero-rocket-400.webp 400w, /images/hero-rocket-650.webp 650w"
                    sizes="(min-width: 1280px) 400px, (min-width: 1024px) 280px, (min-width: 640px) 190px, 150px"
                    width={650}
                    height={1024}
                    alt="Startende Rakete in den Farben von performanceboost"
                    fetchPriority="high"
                    decoding="async"
                    draggable={false}
                    className="absolute inset-0 h-full w-full animate-rocket"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 HERAUSFORDERUNGEN: Einstieg über das Geschäftsproblem */}
      <section>
        <Container className="space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 space-y-5">
              <SectionHeading
                title="Wachstum, das heute an Handarbeit hängt"
                intro="In vielen KMU wächst der Aufwand mit jedem Auftrag mit. Mehr Anfragen bedeuten mehr Abtippen, mehr Nachfassen und mehr Abstimmung, und KI wird nur für einzelne Aufgaben genutzt."
              />
              <p className="text-body-sm text-slate-500 leading-relaxed max-w-2xl">
                Sichtbar wird oft nur das Symptom, etwa liegengebliebene Anfragen, Offerten ohne Nachfassen oder Zahlen, die nicht stimmen.
                Die Ursache liegt meist in Abläufen, Daten und Übergaben, die nie als System gebaut wurden. Genau dort setzen wir an.
              </p>
            </div>
            <div className="hidden lg:block lg:col-span-4">
              <BrandVisual id="ursachen-unter-der-oberflaeche" sizes="(min-width: 1280px) 400px, 30vw" className="max-w-[340px] ml-auto" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHALLENGE_CARDS.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="group flex flex-col h-full bg-white border border-[#E0E0E0]/80 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:border-[#686CFA]/45 hover:shadow-[var(--shadow-premium-md)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30"
              >
                <span className="w-fit text-[10px] font-mono font-bold uppercase tracking-widest text-[#4f54d6] bg-[#CBCBFC]/40 rounded-full px-2.5 py-1">{c.area}</span>
                <span className="mt-4 text-lg font-display font-semibold text-slate-900 leading-snug">{c.title}</span>
                <span className="mt-2 text-body-sm text-slate-600 leading-relaxed">{c.desc}</span>
                <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA]">
                  {c.linkText} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 2b VERGLEICH: klassisch wachsen vs. AI First */}
      <section>
        <Container className="space-y-8">
          <SectionHeading
            title="Klassisch wachsen oder AI First"
            intro="Der Unterschied zeigt sich darin, wie Abläufe, Daten und KI zusammengebaut sind."
          />
          <div className="rounded-3xl border border-[#E0E0E0]/80 bg-white overflow-hidden">
            <div className="hidden md:grid md:grid-cols-12 gap-6 px-8 py-4 border-b border-slate-200/80 bg-[#f6f6f6]/60 text-[11px] font-mono font-bold uppercase tracking-widest">
              <span className="md:col-span-2 text-slate-400">Thema</span>
              <span className="md:col-span-5 text-slate-500">Klassisch</span>
              <span lang="en" className="md:col-span-5 text-[#4f54d6]">AI First</span>
            </div>
            <dl className="divide-y divide-slate-200/80">
              {COMPARISON.map((row) => (
                <div key={row.topic} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 px-6 sm:px-8 py-5">
                  <dt className="md:col-span-2 font-display font-semibold text-slate-900">{row.topic}</dt>
                  <dd className="md:col-span-5 text-body-sm text-slate-500 leading-relaxed">
                    <span className="md:hidden text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">Klassisch</span>
                    {row.classic}
                  </dd>
                  <dd className="md:col-span-5 text-body-sm text-slate-800 leading-relaxed">
                    <span lang="en" className="md:hidden text-[11px] font-mono font-bold uppercase tracking-widest text-[#4f54d6] block mb-1 mt-2">AI First</span>
                    {row.aiFirst}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* 3 DREI BEREICHE, EIN SYSTEM */}
      <section>
        <Container className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E0E0E0]/80 pb-6">
            <SectionHeading
              title="Drei Bereiche, eine gemeinsame KI-Basis"
              intro="Agentic Marketing, Agentic Sales und Agentic Processes laufen auf derselben Datenbasis, demselben Unternehmenskontext und denselben Regeln für Agenten. Deshalb bauen wir sie als ein System und beginnen dort, wo der Engpass heute am grössten ist."
            />
            <Link href="/leistungen" className="text-xs font-bold text-[#686CFA] hover:text-[#4f54d6] inline-flex items-center gap-1.5 shrink-0">
              Alle Leistungen ansehen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {AREAS.map((a, i) => (
              <li key={a.id}>
                <Link
                  href={`/leistungen/${a.id}`}
                  className="group flex flex-col h-full rounded-3xl border border-[#E0E0E0]/80 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-[#686CFA]/50 hover:shadow-[var(--shadow-premium-md)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span className="text-[11px] font-mono font-bold text-[#686CFA]">0{i + 1}</span>
                      <span className="block mt-1 text-2xl font-display font-semibold text-slate-900">{a.label}</span>
                      <span className="block text-sm text-slate-500">{a.subtitle}</span>
                    </span>
                    <Visual3D id={VISUAL_BY_AREA[a.id]} sizes="88px" className="h-20 w-auto shrink-0 transition-transform duration-500 group-hover:-translate-y-1.5" />
                  </span>
                  <span className="mt-6 text-lg font-display font-semibold text-slate-900 leading-snug">{a.cardTitle}</span>
                  <span className="mt-2 text-body-sm text-slate-600 leading-relaxed">{a.teaser}</span>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {a.fields.map((f) => (
                      <li key={f} className="text-[12px] font-semibold text-slate-600 bg-[#f6f6f6] border border-[#E0E0E0] rounded-full px-2.5 py-1">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 pt-5 border-t border-slate-200/80 text-body-sm text-slate-800 leading-relaxed">
                    <span className="font-bold text-[#686CFA]">Ergebnis:</span> {a.outcome}
                  </span>
                  <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA]">
                    Zu {a.labelZu} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 4 ZUSAMMENSPIEL: Systemdiagramm und Stufen von der Regel bis zum Agenten */}
      <section className="bg-white border-y border-[#E2E8F0]/40 py-20 md:py-28">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-32">
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight text-balance">
                Zuerst der Engpass, dann das nächste Tool.
              </h2>
              <p className="text-body text-slate-700 leading-relaxed">
                Marketing und Vertrieb hängen voneinander ab. Der Vertrieb kann nur abschliessen, was das Marketing an passenden Anfragen
                bringt, und das Marketing wird nur besser, wenn es erfährt, welche Anfragen zu Aufträgen werden. Getragen wird beides von
                Systemen, Daten und Abläufen. Auf genau dieser Grundlage arbeiten auch die Agenten.
              </p>
              <p className="text-body-sm text-slate-500 leading-relaxed">
                Viele Unternehmen setzen KI heute für einzelne Aufgaben ein, etwa für Texte oder Zusammenfassungen. Wirkung entsteht erst,
                wenn ein Ablauf von der Anfrage bis zum Auftrag durchgehend verbunden ist. Deshalb beginnen wir beim grössten Engpass, etwa
                Anfragen, die tagelang liegen bleiben, Kampagnen ohne Messung bis zum Auftrag oder Daten, die von Hand übertragen werden.
              </p>
            </div>
            <div className="lg:col-span-7 min-w-0">
              <RevenueSystemGraphic />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <SectionHeading
                as="h3"
                title="Agenten arbeiten, Ihr Team entscheidet"
                intro="Wir legen pro Schritt fest, ob eine Regel, ein Modell oder ein Agent ihn übernimmt. Wie viel ein Agent selbst ausführen darf, hängt davon ab, wie teuer ein Fehler wäre und ob er sich rückgängig machen lässt."
              />
              <Link href="/leistungen/ki-im-unternehmen" className="text-xs font-bold text-[#686CFA] hover:text-[#4f54d6] inline-flex items-center gap-1.5 shrink-0">
                Governance für KI-Agenten <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AGENTIC_LEVELS.map((l, i) => (
                <li
                  key={l.title}
                  className={`rounded-3xl border p-6 flex flex-col ${i === 3 ? 'bg-slate-950 border-slate-950 text-white' : 'bg-[#f6f6f6]/60 border-[#E0E0E0]/80'}`}
                >
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${i === 3 ? 'text-[#CBCBFC]' : 'text-[#686CFA]'}`}>{l.label}</span>
                  <h4 className={`mt-2 font-display font-semibold leading-snug ${i === 3 ? 'text-white' : 'text-slate-900'}`}>{l.title}</h4>
                  <p className={`mt-2 text-body-sm leading-relaxed ${i === 3 ? 'text-slate-300' : 'text-slate-600'}`}>{l.desc}</p>
                  <p className={`mt-3 text-xs leading-relaxed ${i === 3 ? 'text-slate-400' : 'text-slate-500'}`}>{l.example}</p>
                  <p className={`mt-auto pt-4 text-xs font-bold ${i === 3 ? 'text-[#CBCBFC]' : 'text-[#4f54d6]'}`}>{l.decides}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 5 VORGEHEN: vier Phasen, modular */}
      <section>
        <Container className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <SectionHeading
              title="Wie wir vorgehen"
              intro="Vier Phasen für Systeme mit Automatisierung und KI-Agenten, je nach Ausgangslage unterschiedlich gewichtet. Sie steigen dort ein, wo Ihr Unternehmen heute steht. Enablement und Optimierung wiederholen sich, solange wir zusammenarbeiten."
            />
            <Link href="/ansatz" className="text-xs font-bold text-[#686CFA] hover:text-[#4f54d6] inline-flex items-center gap-1.5 shrink-0">
              Mehr zum Ansatz <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PHASES.map((p, idx) => (
              <li key={p.label} className="relative bg-white border border-[#E0E0E0]/80 p-7 rounded-3xl flex flex-col">
                <span className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono bg-[#686CFA]/5 text-[#686CFA] px-3 py-1 rounded-lg border border-[#CBCBFC]/40">0{idx + 1}</span>
                  {idx >= 2 && <RotateCcw className="w-4 h-4 text-[#686CFA]/70" aria-label="wiederkehrend" />}
                </span>
                <p lang="en" className="mt-5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">{p.label}</p>
                <h3 className="mt-1 text-base font-bold text-slate-900 font-display leading-tight">{p.title}</h3>
                <p className="mt-3 text-body-sm text-slate-600 leading-relaxed">{p.result}</p>
                <p className="mt-auto pt-5 text-xs text-slate-500 leading-relaxed border-t border-slate-100">
                  <span className="font-bold text-slate-700">Einstieg, wenn:</span> {p.entry}
                </p>
              </li>
            ))}
          </ol>
          <p className="text-body-sm text-slate-500 leading-relaxed max-w-3xl">
            Viele Kunden beginnen mit einer Performance-Analyse von zwei bis drei Wochen. Sie ist ein eigener, abgeschlossener Auftrag.
            Ob und wie es danach weitergeht, entscheiden Sie auf Basis der Ergebnisse.
          </p>
        </Container>
      </section>

      {/* 6 KUNDENSTIMMEN (unverändert) */}
      <ClientTestimonials />

      {/* 7 INHABER + WISSEN */}
      <section>
        <Container>
          <div className="bg-white border border-[#E0E0E0]/65 p-8 md:p-12 rounded-[2rem] grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 flex justify-center md:justify-start">
              <img
                loading="lazy"
                decoding="async"
                src={SITE.portraitUrl}
                alt="Yathur Nathan, Gründer und Inhaber von performanceboost"
                width={320}
                height={320}
                className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-[1.5rem] border border-slate-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-8 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 leading-tight">
                Wir bauen, was wir empfehlen, und betreiben es selbst.
              </h2>
              <p className="text-body text-slate-600 leading-relaxed">
                performanceboost ist inhabergeführt und in Graubünden zu Hause. Unser eigenes Unternehmen läuft auf denselben Systemen, die
                wir bei Kunden bauen. Website-Anfragen gehen automatisch geprüft in ein selbst gebautes ERP, ein Agent bereitet Erstgespräche
                vor, und Entwürfe gehen erst nach Freigabe hinaus. Yathur Nathan verbindet Marketing, Vertrieb, Daten, Integration und
                KI-Agenten in einer Person, ohne Übergaben zwischen Dienstleistern.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DIFFERENCES.map((d) => (
                  <li key={d.title} className="border-t border-slate-200 pt-4">
                    <h3 className="text-sm font-bold text-slate-900 font-display leading-snug">{d.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{d.desc}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold">
                <Link href="/ueber-uns" className="text-[#686CFA] inline-flex items-center gap-1.5">
                  Mehr über uns <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link href="/martech" className="text-[#686CFA] inline-flex items-center gap-1.5">
                  MarTech-Wissen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link href="/labor" className="text-[#686CFA] inline-flex items-center gap-1.5">
                  Labor: was wir selbst bauen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link href="/referenzen" className="text-[#686CFA] inline-flex items-center gap-1.5">
                  Alle Referenzen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 8 FAQ */}
      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading align="center" title="Häufige Fragen" />
          <FaqList items={FAQ} />
        </Container>
      </section>

      {/* 9 ABSCHLUSS-CTA */}
      <section>
        <Container>
          <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-[var(--shadow-premium-lg)]">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">
                Wo bremst Handarbeit heute Ihr Wachstum?
              </h2>
              <p className="text-body text-slate-300 leading-relaxed">
                30 Minuten, kostenlos. Sie schildern einen Ablauf in Marketing, Vertrieb oder Administration, der heute viel Handarbeit
                kostet. Wir sagen Ihnen offen, wie wir ihn als System bauen würden und ob wir der richtige Partner dafür sind.
              </p>
              <p className="text-sm text-slate-300">
                Lieber direkt schreiben?{' '}
                <a href={`mailto:${SITE.email}`} className="font-semibold text-white underline underline-offset-2">
                  {SITE.email}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-8 shrink-0">
              <Visual3D id="launch-platform" shadow="dark" sizes="120px" className="hidden lg:block h-44 w-auto" />
              <CtaButton label="Erstgespräch vereinbaren" location="home_footer" pageSlug="home" variant="accent" />
            </div>
          </div>
        </Container>
      </section>

      <Suspense fallback={null}>
        <AnimatePresence>
          {showProblemFinder && <ProblemFinder onClose={() => setShowProblemFinder(false)} onNavigate={onNavigate} />}
        </AnimatePresence>
      </Suspense>
    </div>
  );
}
