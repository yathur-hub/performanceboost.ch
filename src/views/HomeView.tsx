/**
 * Startseite (Business-Performance-Positionierung, Konzept: docs/business-performance-repositioning/04).
 * 7 Abschnitte: Hero · Herausforderungen · Säulen + Zusammenspiel · Leistungsfelder · Vorgehen ·
 * Referenzen + Über uns · FAQ + Abschluss-CTA. Der Umsatzrechner liegt seit dem Umbau auf /leistungen/wachstum-marketing.
 */
import { Visual3D, VISUAL_BY_AREA, VISUAL_BY_PILLAR } from '../components/Visual3D';
import React, { useState, lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const ProblemFinder = lazy(() => import('../components/home/ProblemFinder'));
import { RevenueSystemGraphic } from '../components/home/RevenueSystemGraphic';
import { ClientTestimonials } from '../components/home/ClientTestimonials';
import { SITE } from '../config/site';
import Link from '../components/Link';
import { Container, CtaButton, FaqList, SectionHeading, TeaserCard } from '../components/bp/Blocks';
import { PILLARS, SERVICE_AREAS, servicesOf } from '../data/serviceAreas';
import { CHALLENGE_CARDS } from '../data/challenges';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const STEPS = [
  { title: 'Analyse und Verständnis', desc: 'Wir schauen uns Ziele, Zahlen, Abläufe und Systeme an. Danach wissen Sie, wo Umsatz, Zeit oder Daten verloren gehen.' },
  { title: 'Strategie und Prioritäten', desc: 'Sie erhalten einen konkreten Plan mit Aufwand, Budget und Kennzahlen. Wir beginnen mit dem, was am meisten bewirkt.' },
  { title: 'Umsetzung und Integration', desc: 'Wir setzen selbst um: Kampagnen, Seiten, CRM, Automatisierungen und Auswertungen. Alles ist dokumentiert, damit Ihr Team weiterarbeiten kann.' },
  { title: 'Messen und verbessern', desc: 'Regelmässig schauen wir gemeinsam auf die Zahlen. Was funktioniert, bauen wir aus. Was nicht funktioniert, passen wir an oder stoppen es.' },
];

const DIFFERENCES = [
  { title: 'Strategie und Umsetzung aus einer Hand', desc: 'Kein Konzept, das in der Schublade landet, und keine Lücken zwischen drei Dienstleistern.' },
  { title: 'Gemessen an Ihren Geschäftszahlen', desc: 'Anfragen, Aufträge, Reaktionszeiten oder eingesparte Stunden statt Klicks und Reichweite.' },
  { title: 'Direkt mit dem Inhaber', desc: 'Yathur Nathan betreut Ihr Projekt persönlich, ohne Account Manager dazwischen.' },
];

const FAQ = [
  {
    q: 'Was macht ein Business Performance Partner?',
    a: 'Wir verbessern die Bereiche, in denen KMU heute am meisten Umsatz und Zeit verlieren: Marketing, Vertrieb, Daten und digitale Abläufe. Wir planen mit Ihnen, setzen selbst um und messen die Arbeit an Ihren Geschäftszahlen statt an Klicks.',
  },
  {
    q: 'Für welche Unternehmen eignet sich performanceboost?',
    a: 'Für Schweizer KMU, meist ab rund CHF 1 Mio. Jahresumsatz, die wachsen oder effizienter arbeiten möchten: Dienstleister, B2B-Unternehmen und Onlineshops. Wichtig ist eine Geschäftsleitung, die mitentscheidet, und die Bereitschaft, Abläufe zu verändern.',
  },
  {
    q: 'Was unterscheidet Sie von einer Marketingagentur oder einer Unternehmensberatung?',
    a: 'Eine Marketingagentur betreut meist einzelne Kanäle, eine Unternehmensberatung liefert oft Konzepte. Wir kümmern uns um die ganze Strecke bis zum Auftrag, also auch um Systeme und Abläufe, und setzen selbst um. Finanz-, Rechts- oder Organisationsberatung bieten wir nicht an.',
  },
  {
    q: 'Müssen wir alle Leistungen beziehen?',
    a: 'Nein. Viele Projekte beginnen mit einem klar umrissenen Thema, etwa Kampagnen, einem CRM oder einer Automatisierung. Wir achten darauf, dass es zum Rest passt, und erweitern nur, wenn es sich für Sie lohnt.',
  },
  {
    q: 'Wie viel Aufwand habe ich als Kunde?',
    a: 'Zu Beginn brauchen wir Ihr Wissen über Angebot, Kunden und Abläufe sowie die nötigen Zugänge. Danach genügt in der Regel ein kurzer regelmässiger Austausch. Die Umsetzung übernehmen wir.',
  },
  {
    q: 'Was kostet eine Zusammenarbeit?',
    a: 'Das hängt vom Umfang ab: Eine einmalige Analyse ist etwas anderes als die laufende Betreuung. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit klar definiertem Umfang. Das Erstgespräch selbst ist kostenlos.',
  },
];

export default function HomeView({ onNavigate }: HomeViewProps) {
  const [showProblemFinder, setShowProblemFinder] = useState(false);

  return (
    <div className="space-y-16 md:space-y-32 pb-24 text-slate-800" id="home-view">
      {/* 1 HERO: Text links, Raketen-Visual rechts (mobil darunter) */}
      <section className="relative pt-36 pb-14 md:pt-40 md:pb-16 overflow-hidden bg-white">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="hero-enter lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-[2.1rem] sm:text-5xl lg:text-[3.1rem] xl:text-[3.6rem] font-display font-semibold tracking-tight text-slate-900 leading-[1.08]">
                Mehr Performance für Ihr Unternehmen.{' '}
                <span className="text-[#696EEF] italic font-serif">Strategie, Technologie und Wachstum.</span>
              </h1>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Wir verbinden Strategie, Technologie und Umsetzung, damit Marketing, Vertrieb und Abläufe in Ihrem Unternehmen besser
                zusammenarbeiten. Wir analysieren, setzen selbst um und verbessern laufend. Ihr Ansprechpartner ist Inhaber Yathur Nathan.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center lg:justify-start items-center">
                <CtaButton label="Potenzial besprechen" location="home_hero" pageSlug="home" />
                <button
                  type="button"
                  onClick={() => setShowProblemFinder(true)}
                  data-cta="hero_secondary"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 bg-white hover:bg-slate-50 whitespace-nowrap text-slate-900 border border-slate-300 font-display font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#696EEF]/30"
                >
                  Welches Problem möchten Sie lösen?
                </button>
              </div>
            </div>

            {/* Rakete in zwei Ebenen: Rauch statisch, Rakete animiert (Naht liegt weich in den Flammen) */}
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

      {/* 2 HERAUSFORDERUNGEN */}
      <section>
        <Container className="space-y-10">
          <motion.div {...reveal}>
            <SectionHeading
              title="Wo KMU heute Umsatz und Zeit verlieren"
              intro="Selten liegt es an einem einzelnen Kanal oder Tool. Meist greifen Marketing, Vertrieb und Abläufe nicht sauber ineinander."
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHALLENGE_CARDS.map((c) => (
              <TeaserCard key={c.title} href={c.href} title={c.title} desc={c.desc} linkText={c.linkText} />
            ))}
          </div>
        </Container>
      </section>

      {/* 3 SÄULEN + ZUSAMMENSPIEL */}
      <section className="bg-white border-y border-[#E2E8F0]/40 py-20 md:py-28">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div {...reveal} className="lg:col-span-6 xl:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3.5xl font-display font-semibold text-slate-900 tracking-tight text-balance">
                Eine Kampagne, ein Tool oder ein Strategiepapier allein reicht selten.
              </h2>
              <p className="text-body text-slate-700 leading-relaxed">
                Gute Anzeigen verpuffen, wenn Anfragen im Postfach liegen bleiben. Ein neues CRM bringt wenig, wenn niemand festgelegt hat,
                wann ein Interessent an den Vertrieb geht. Und die beste Strategie hilft nicht, wenn sie nie umgesetzt wird.
              </p>
              <p className="text-body-sm text-slate-500 leading-relaxed">
                Deshalb schauen wir uns die ganze Strecke an, von der ersten Anzeige bis zum unterschriebenen Auftrag. Wir verbessern die
                Kampagnen und ebenso die Abläufe danach, bis zum Verkaufsabschluss.
              </p>
            </motion.div>
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end w-full min-w-0">
              <RevenueSystemGraphic />
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PILLARS.map((p, i) => (
              <li key={p.id}>
                <Link
                  href={p.href}
                  className="group flex flex-col h-full rounded-3xl border border-[#E0E0E0]/80 bg-[#f6f6f6]/50 p-7 sm:p-8 transition-all duration-300 hover:border-[#686DF4]/50 hover:bg-white hover:shadow-[var(--shadow-premium-md)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/30"
                >
                  <span className="h-24 mb-5 flex items-end">
                    <Visual3D id={VISUAL_BY_PILLAR[p.id]} sizes="96px" className="h-full w-auto transition-transform duration-500 group-hover:-translate-y-1.5" />
                  </span>
                  <span className="flex items-baseline justify-between">
                    <span className="text-2xl font-display font-semibold text-slate-900">{p.label}</span>
                    <span className="text-[11px] font-mono font-bold text-[#686DF4]">0{i + 1}</span>
                  </span>
                  <span className="mt-4 text-base font-display font-semibold text-slate-800">{p.title}</span>
                  <span className="mt-2 text-body-sm text-slate-600 leading-relaxed">{p.desc}</span>
                  <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-5">
                    {p.points.map((pt) => (
                      <li key={pt} className="text-sm text-slate-700 flex gap-2.5">
                        <span className="w-1 h-1 rounded-full bg-[#686DF4] mt-2 shrink-0" aria-hidden="true" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#686DF4]">
                    Mehr erfahren <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 4 LEISTUNGSFELDER */}
      <section>
        <Container className="space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#E0E0E0]/80 pb-6">
            <SectionHeading title="Vier Leistungsfelder, die ineinandergreifen" />
            <Link href="/leistungen" className="text-xs font-bold text-[#686DF4] hover:text-[#4f54d6] inline-flex items-center gap-1.5 shrink-0">
              Alle Leistungen ansehen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SERVICE_AREAS.map((a) => (
              <article key={a.id} className="relative bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-9 flex flex-col">
                <Visual3D id={VISUAL_BY_AREA[a.id]} sizes="112px" className="hidden sm:block absolute top-6 right-6 h-24 w-28" />
                <h3 className="mt-3 text-xl font-display font-semibold text-slate-900 sm:pr-32">
                  <Link href={`/leistungen/${a.id}`} className="hover:text-[#4f54d6] transition-colors">
                    {a.shortLabel}
                  </Link>
                </h3>
                <p className="mt-2 text-body-sm text-slate-600 leading-relaxed sm:pr-32">{a.teaser}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {servicesOf(a).length < 3 &&
                    a.topics.slice(0, 3 - servicesOf(a).length).map((t) => (
                      <li key={t.title} className="inline-block text-xs font-semibold text-slate-500 bg-white border border-dashed border-slate-200 rounded-full px-3 py-1.5">
                        {t.title}
                      </li>
                    ))}
                  {servicesOf(a)
                    .slice(0, 4)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/leistungen/${s.slug}`}
                          className="inline-block text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 hover:border-[#686DF4]/50 hover:text-[#4f54d6] transition-colors"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
                <Link href={`/leistungen/${a.id}`} className="mt-auto pt-6 inline-flex items-center gap-1.5 text-xs font-bold text-[#686DF4]">
                  Zum Leistungsfeld <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5 VORGEHEN */}
      <section className="bg-white border-y border-[#E2E8F0]/40 py-20 md:py-28">
        <Container className="space-y-12">
          <SectionHeading align="center" title="So arbeiten wir zusammen" />
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, idx) => (
              <li
                key={step.title}
                className="bg-[#f6f6f6]/55 border border-[#E0E0E0]/80 p-7 rounded-3xl relative pt-14 space-y-3"
              >
                <span className="absolute top-5 left-7 text-[11px] font-bold font-mono bg-[#686DF4]/5 text-[#686DF4] px-3 py-1 rounded-lg border border-[#CACCFB]/30">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-display leading-tight">{step.title}</h3>
                <p className="text-body-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 6 REFERENZEN + ÜBER performanceboost */}
      <ClientTestimonials />

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
              <div>
                <h2 className="mt-2 text-2xl sm:text-3xl font-display font-semibold text-slate-900 leading-tight">
                  Ein Partner, der Strategie auch selbst umsetzt.
                </h2>
              </div>
              <p className="text-body text-slate-600 leading-relaxed">
                performanceboost ist inhabergeführt und in Graubünden zu Hause. Yathur Nathan verbindet Strategie, Performance Marketing,
                Webentwicklung, Daten und Automatisierung, also Aufgaben, die sonst oft auf mehrere Dienstleister verteilt sind.
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
                <Link href="/ueber-uns" className="text-[#686DF4] inline-flex items-center gap-1.5">
                  Mehr über uns <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link href="/referenzen" className="text-[#686DF4] inline-flex items-center gap-1.5">
                  Alle Referenzen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 7 FAQ + ABSCHLUSS */}
      <section>
        <Container className="max-w-4xl space-y-8">
          <SectionHeading align="center" title="FAQ" />
          <FaqList items={FAQ} />
        </Container>
      </section>

      <section>
        <Container>
          <div className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 shadow-[var(--shadow-premium-lg)]">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white leading-tight">
                Wo lohnt es sich in Ihrem Unternehmen am meisten?
              </h2>
              <p className="text-body text-slate-300 leading-relaxed">
                30 Minuten, kostenlos und unverbindlich. Sie schildern Ihre Ausgangslage, wir sagen Ihnen offen, wo wir ansetzen würden und ob
                wir der richtige Partner dafür sind.
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
              <CtaButton label="Potenzial besprechen" location="home_footer" pageSlug="home" variant="accent" />
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
