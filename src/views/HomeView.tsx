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
import { ArrowRight, Check, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const HERO_OUTCOMES = ['Mehr passende Anfragen', 'Schneller vom Erstkontakt zum Auftrag', 'Weniger Handarbeit in Vertrieb und Administration'];

const DIFFERENCES = [
  { title: 'Strategie und Umsetzung aus einer Hand', desc: 'Kein Konzept, das in der Schublade landet, und keine Lücken zwischen drei Dienstleistern.' },
  { title: 'Gemessen an Ihren Geschäftszahlen', desc: 'Anfragen, Aufträge, Reaktionszeiten oder eingesparte Stunden statt Klicks und Reichweite.' },
  { title: 'Direkt mit dem Inhaber', desc: 'Yathur Nathan arbeitet persönlich an Ihrem Projekt, ohne Account Manager dazwischen.' },
];

const FAQ = [
  {
    q: 'Was heisst «agentic marketing, sales & processes»?',
    a: 'Marketing, Vertrieb und die Abläufe dahinter arbeiten als ein System statt als drei getrennte Bereiche. Dort, wo es verlässlich funktioniert, übernehmen KI-Agenten Teilaufgaben, zum Beispiel recherchieren, vorqualifizieren oder Entwürfe vorbereiten. Ihr Team gibt frei und entscheidet.',
  },
  {
    q: 'Sind Sie eine KI-Agentur?',
    a: 'Nein. Wir verbessern Marketing, Vertrieb und Geschäftsprozesse und messen die Arbeit an Ihren Geschäftszahlen. KI und Automatisierung setzen wir ein, wenn sie dafür das beste Mittel sind. Oft reicht eine einfache Regel.',
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
      <section className="relative pt-36 pb-14 md:pt-40 md:pb-16 overflow-hidden bg-white">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="hero-enter lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
              <p className="text-xs sm:text-[13px] font-mono font-bold uppercase tracking-[0.18em] text-[#686CFA]">
                Business Performance Partner für Schweizer KMU
              </p>
              <h1 lang="en" className="text-[2.1rem] sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem] font-display font-semibold tracking-tight text-slate-900 leading-[1.08] text-balance">
                Boost your performance{' '}
                <span className="text-[#686CFA] italic font-serif">through agentic marketing, sales &amp; processes.</span>
              </h1>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Wir verbinden Ihr Marketing, Ihren Vertrieb und die Abläufe dahinter zu einem System. KI-Agenten übernehmen dabei klar
                umrissene Aufgaben, die Entscheidungen bleiben bei Ihrem Team.
              </p>
              <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2.5 justify-center lg:justify-start text-left max-w-2xl mx-auto lg:mx-0">
                {HERO_OUTCOMES.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-slate-900">
                    <span className="w-5 h-5 rounded-full bg-[#686CFA]/12 text-[#686CFA] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start items-center pt-1">
                <CtaButton label="Ausgangslage besprechen" location="home_hero" pageSlug="home" />
                <button
                  type="button"
                  onClick={() => setShowProblemFinder(true)}
                  data-cta="hero_secondary"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 bg-white hover:bg-slate-50 whitespace-nowrap text-slate-900 border border-slate-300 font-display font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30"
                >
                  Welches Problem möchten Sie lösen?
                </button>
              </div>
              <p className="text-sm text-slate-500">
                Für Unternehmen ab rund CHF 1 Mio. Umsatz. Ihr Ansprechpartner ist Inhaber Yathur Nathan.
              </p>
            </div>

            {/* Rakete in zwei Ebenen: Rauch statisch, Rakete animiert */}
            <div className="hidden lg:col-span-5 lg:flex justify-end">
              <div className="relative w-[260px] sm:w-[320px] lg:w-[400px] aspect-[650/1024] select-none">
                <img
                  src="/images/hero-smoke-650.webp"
                  srcSet="/images/hero-smoke-400.webp 400w, /images/hero-smoke-650.webp 650w"
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 260px"
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
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 260px"
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
            <motion.div {...reveal} className="lg:col-span-8 space-y-5">
              <SectionHeading
                title="Wo KMU heute Umsatz und Zeit verlieren"
                intro="Selten liegt es an einem einzelnen Kanal oder Tool. Meist greifen Marketing, Vertrieb und Abläufe nicht sauber ineinander."
              />
              <p className="text-body-sm text-slate-500 leading-relaxed max-w-2xl">
                Sichtbar wird oft nur das Symptom: zu wenige Anfragen, liegengebliebene Offerten, Zahlen, die nicht stimmen. Die Ursachen
                liegen meist tiefer, in Abläufen, Unterlagen und Übergaben, die niemand verantwortet. Dort setzen wir an.
              </p>
            </motion.div>
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

      {/* 3 DREI BEREICHE, EIN SYSTEM */}
      <section>
        <Container className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E0E0E0]/80 pb-6">
            <SectionHeading
              title="Drei Bereiche, ein System"
              intro="Marketing gewinnt Nachfrage, der Vertrieb macht daraus Aufträge, und die Abläufe dahinter verbinden beides. Wir verbessern die drei Bereiche gemeinsam, weil ein Engpass in einem Bereich auch die anderen bremst."
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
                    Zu {a.label} <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
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
            <motion.div {...reveal} className="lg:col-span-5 space-y-5 lg:sticky lg:top-32">
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight text-balance">
                Zuerst der Engpass, dann das nächste Tool.
              </h2>
              <p className="text-body text-slate-700 leading-relaxed">
                Marketing und Vertrieb hängen voneinander ab. Der Vertrieb kann nur abschliessen, was das Marketing an passenden Anfragen
                bringt, und das Marketing wird nur besser, wenn es erfährt, welche Anfragen zu Aufträgen werden. Getragen wird beides von
                Systemen, Daten und Abläufen.
              </p>
              <p className="text-body-sm text-slate-500 leading-relaxed">
                Wenn ein Glied dieser Kette schwach ist, bringt mehr Werbebudget oder eine neue Software wenig. Deshalb schauen wir uns das
                ganze System an und beginnen dort, wo heute am meisten verloren geht. Typische Engpässe sind Anfragen, die tagelang liegen
                bleiben, Kampagnen ohne Messung bis zum Auftrag oder Daten, die von Hand zwischen Systemen übertragen werden.
              </p>
            </motion.div>
            <div className="lg:col-span-7 min-w-0">
              <RevenueSystemGraphic />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <SectionHeading
                as="h3"
                title="Agenten arbeiten, Ihr Team entscheidet"
                intro="Nicht jede Aufgabe braucht KI. Wir wählen pro Ablauf die einfachste Lösung, die verlässlich funktioniert, und legen fest, wo ein Mensch freigibt."
              />
              <Link href="/leistungen/ki-im-unternehmen" className="text-xs font-bold text-[#686CFA] hover:text-[#4f54d6] inline-flex items-center gap-1.5 shrink-0">
                Wie wir Agentic AI einsetzen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
              intro="Vier Phasen, die je nach Ausgangslage unterschiedlich gewichtet werden. Sie steigen dort ein, wo Ihr Unternehmen heute steht. Enablement und Optimierung wiederholen sich, solange wir zusammenarbeiten."
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
                Ein Partner, der Strategie auch selbst umsetzt.
              </h2>
              <p className="text-body text-slate-600 leading-relaxed">
                performanceboost ist inhabergeführt und in Graubünden zu Hause. Yathur Nathan verbindet Marketing, Vertrieb, Daten,
                Systemintegration und KI-Agenten, also Aufgaben, die sonst oft auf mehrere Dienstleister verteilt sind. Was wir Ihnen
                empfehlen, betreiben wir im eigenen Unternehmen.
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
                Wo verliert Ihr Unternehmen heute am meisten?
              </h2>
              <p className="text-body text-slate-300 leading-relaxed">
                30 Minuten, kostenlos. Sie schildern Ihre Ausgangslage in Marketing, Vertrieb oder Abläufen. Wir sagen Ihnen offen, wo wir
                ansetzen würden und ob wir der richtige Partner dafür sind.
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
