/**
 * Design-Prototypen zur Freigabe (Branch design/premium-directions, nicht indexiert):
 *   /design/light  Richtung A «Refined Light»
 *   /design/dark   Richtung B «Premium Dark / Hybrid»
 * Hero mit einer durchgehenden Choreografie, Statement mit scrollgesteuerter Aufhellung,
 * Vergleich mit Zeilen, die beim Scrollen fortschreiten. Texte aus der bestehenden Startseite.
 */
import React from 'react';
import '../styles/prototype.css';
import Link from '../components/Link';

type Variant = 'light' | 'dark';

const STEPS: { kind: 'regel' | 'ki' | 'agent' | 'mensch'; label: string; title: string; sub: string; state: 'done' | 'wait'; shimmer?: boolean }[] = [
  { kind: 'regel', label: 'Regel', title: 'Anfrage übernommen, Kontakt und Firma im CRM angelegt', sub: 'Formular → Workflow → CRM · Bestätigung an die anfragende Person', state: 'done' },
  { kind: 'ki', label: 'KI', title: 'Eingeordnet nach Ihren Kriterien, mit Begründung', sub: 'Anliegen zusammengefasst · Passung zum Angebot geprüft', state: 'done' },
  { kind: 'agent', label: 'Agent', title: 'Recherche für das Erstgespräch vorbereitet', sub: 'Website, öffentliche Quellen und CRM-Verlauf auf einer Seite', state: 'done', shimmer: true },
  { kind: 'mensch', label: 'Mensch', title: 'Antwortentwurf wartet auf Ihre Freigabe', sub: 'Versendet wird erst nach Prüfung', state: 'wait' },
];

const COMPARISON = [
  { topic: 'Wachstum', classic: 'Mehr Aufträge brauchen mehr Personal, mehr Dienstleister und mehr Abstimmung.', aiFirst: 'Kapazität wächst über Abläufe, in denen Regeln und Agenten die Vorarbeit übernehmen.' },
  { topic: 'Systeme', classic: 'Einzelne Tools, Daten werden von Hand übertragen.', aiFirst: 'Ein verbundenes System mit gemeinsamer Datenbasis und einem führenden System pro Datentyp.' },
  { topic: 'Rolle der KI', classic: 'Einzelne Mitarbeitende nutzen KI für Texte, jede Person auf ihre Weise.', aiFirst: 'KI ist Teil jedes Ablaufs, mit Unternehmenskontext, festen Rechten, Freigaben und Protokollen.' },
  { topic: 'Steuerung', classic: 'Gemessen werden Klicks, Reichweite und Aktivitäten.', aiFirst: 'Gemessen werden Anfragen, Aufträge, Reaktionszeiten und Kosten pro Fall, die Daten fliessen zurück.' },
  { topic: 'Zusammenarbeit', classic: 'Konzept, Umsetzung und Betrieb liegen bei verschiedenen Partnern.', aiFirst: 'Wir entwerfen, bauen und verbessern das System mit Ihrem Team, ohne Übergaben zwischen Partnern.' },
];

const STATEMENT =
  'In vielen KMU wächst mit jedem Auftrag die Handarbeit mit. Wir bauen Marketing, Vertrieb und Abläufe als ein System, in dem Daten, Automatisierung und Agenten die Vorarbeit übernehmen und Ihr Team dort entscheidet, wo es zählt.';

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function useReducedMotion() {
  const [r, setR] = React.useState(false);
  React.useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)');
    setR(m.matches);
    const on = () => setR(m.matches);
    m.addEventListener('change', on);
    return () => m.removeEventListener('change', on);
  }, []);
  return r;
}

/** Wörter hellen sich mit dem Scrollfortschritt auf (nur Farbe, kein Layout). */
function ScrollStatement({ text }: { text: string }) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const words = React.useMemo(() => text.split(' '), [text]);
  const [lit, setLit] = React.useState(0);
  React.useEffect(() => {
    if (reduced) { setLit(words.length); return; }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 wenn der Absatz unten eintritt, 1 wenn er das obere Drittel erreicht
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.85 - vh * 0.3 + r.height * 0.6)));
      setLit(Math.round(p * words.length));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [reduced, words.length]);
  return (
    <p ref={ref} className="pbx-statement pbx-h2 max-w-5xl">
      {words.map((w, i) => (
        <span key={i} className={`w${i < lit ? ' on' : ''}`}>{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </p>
  );
}

/** Vergleichszeilen werden aktiv, sobald sie die Bildschirmmitte erreichen. */
function ComparisonRows() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const rows = ref.current?.querySelectorAll<HTMLElement>('.pbx-row') ?? [];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { rows.forEach((r) => r.classList.add('on')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { rootMargin: '0px 0px -45% 0px', threshold: 0 },
    );
    rows.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref}>
      <div className="hidden md:grid grid-cols-12 gap-8 pb-4">
        <span className="pbx-label col-span-3">Thema</span>
        <span className="pbx-label col-span-4">Klassisch</span>
        <span className="pbx-label col-span-5" lang="en" style={{ color: 'var(--pbx-accent)' }}>AI First</span>
      </div>
      {COMPARISON.map((row, i) => (
        <div key={row.topic} className="pbx-row grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 md:py-8">
          <div className="md:col-span-3 flex items-baseline gap-3">
            <span className="pbx-label" aria-hidden="true">0{i + 1}</span>
            <span className="font-display font-semibold text-lg" style={{ color: 'var(--pbx-ink)' }}>{row.topic}</span>
          </div>
          <p className="pbx-classic md:col-span-4 text-[15px] leading-relaxed" style={{ color: 'var(--pbx-muted)' }}>
            <span className="md:hidden pbx-label block mb-1">Klassisch</span>
            {row.classic}
          </p>
          <div className="pbx-new md:col-span-5">
            <span className="md:hidden pbx-label block mb-1 mt-3" lang="en" style={{ color: 'var(--pbx-accent)' }}>AI First</span>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--pbx-ink)' }}>{row.aiFirst}</p>
            <span className="pbx-tick block h-px mt-4" style={{ background: 'var(--pbx-accent)' }} aria-hidden="true" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Console() {
  return (
    <div className="pbx-console w-full max-w-[640px]" role="img" aria-label="Beispielablauf einer Website-Anfrage: Regel, KI, Agent und Freigabe durch einen Menschen">
      <div className="pbx-console-bar">
        <span className="pbx-live" aria-hidden="true" />
        <span>Ablauf · Neue Website-Anfrage</span>
        <span className="ml-auto">Beispiel</span>
      </div>
      <div className="relative">
        {/* Verbindungslinie zwischen den Statuspunkten */}
        <svg className="absolute left-[24px] top-[22px] h-[calc(100%-44px)] w-2 overflow-visible" aria-hidden="true">
          <line x1="1" y1="0" x2="1" y2="100%" className="pbx-wire" style={{ ['--d' as string]: '840ms', strokeOpacity: 0.45 }} />
        </svg>
        {STEPS.map((s, i) => {
          const d = `${860 + i * 240}ms`;
          return (
            <div key={s.title} className="pbx-step" style={{ ['--d' as string]: d }}>
              <span className="pbx-dot relative z-10" data-state={s.state} style={{ background: 'var(--pbx-panel)' }}>
                {s.state === 'done' && (
                  <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2.5 6.2l2.3 2.3 4.7-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </span>
              <div>
                <p className={`pbx-step-title${s.shimmer ? ' pbx-shimmer' : ''}`}>{s.title}</p>
                <p className="pbx-step-sub">{s.sub}</p>
                {s.state === 'wait' && (
                  <span className="pbx-approve" aria-hidden="true"><span>Freigeben</span><span>Bearbeiten</span></span>
                )}
              </div>
              <span className="pbx-kind" data-k={s.kind}>{s.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function DesignPrototypeView({ variant }: { variant: Variant }) {
  // Hybrid: Header ist dunkel über dunklen Flächen und wird hell, sobald der helle Abschnitt darunter liegt.
  React.useEffect(() => {
    if (variant !== 'dark') return;
    const body = document.body;
    body.classList.add('pbx-dark-header');
    let raf = 0;
    const check = () => {
      raf = 0;
      const light = document.querySelector('.pbx-light-surface');
      const top = light ? light.getBoundingClientRect().top : Infinity;
      const bottom = light ? light.getBoundingClientRect().bottom : -Infinity;
      body.classList.toggle('pbx-dark-header', !(top < 72 && bottom > 72));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(check); };
    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); body.classList.remove('pbx-dark-header'); };
  }, [variant]);
  const dark = variant === 'dark';

  return (
    <div className="pbx" data-theme={variant}>
      {/* Umschalter zwischen den Richtungen (nur im Prototyp) */}
      <div className="fixed bottom-24 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-1 p-1 rounded-full border text-[11px] sm:text-xs font-semibold backdrop-blur-md whitespace-nowrap"
        style={{ borderColor: 'var(--pbx-line)', background: dark ? 'rgba(20,21,28,0.8)' : 'rgba(255,255,255,0.85)' }}>
        <Link href="/design/light" className={`px-3 py-2 rounded-full ${!dark ? 'bg-[#686CFA] text-white' : 'text-[#c9c9d6]'}`}>A <span className="hidden sm:inline">· Refined Light</span></Link>
        <Link href="/design/dark" className={`px-3 py-2 rounded-full ${dark ? 'bg-[#686CFA] text-white' : 'text-slate-600'}`}>B <span className="hidden sm:inline">· Dark / Hybrid</span></Link>
      </div>

      {/* HERO: Claim über die volle Breite, darunter Text links und Konsole rechts */}
      <section className="pbx-hero pt-36 sm:pt-44 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)] sm:px-8 lg:px-10">
          <h1 lang="en" className="pbx-h1 max-w-[15ch] lg:max-w-none">
            <span className="pbx-line"><span style={{ ['--d' as string]: '80ms' }}>Boost your performance</span></span>
            <span className="pbx-line"><span className="pbx-accent" style={{ ['--d' as string]: '200ms' }}>through agentic marketing,</span></span>
            <span className="pbx-line"><span className="pbx-accent" style={{ ['--d' as string]: '320ms' }}>sales &amp; processes.</span></span>
          </h1>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            <div className="lg:col-span-5 lg:pt-4">
              <p className="pbx-lead pbx-seq" style={{ ['--d' as string]: '520ms' }}>
                performanceboost ist der AI-First-Scaling-Partner für Schweizer KMU. Wir bauen Marketing, Vertrieb und Abläufe als ein
                System, das auf KI aufbaut, damit Ihr Unternehmen wachsen kann, ohne dass mit jedem Auftrag die Handarbeit mitwächst.
              </p>
              <div className="pbx-seq mt-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6" style={{ ['--d' as string]: '640ms' }}>
                <Link href="/kontakt" className="pbx-btn w-full sm:w-auto justify-center whitespace-nowrap">Ausgangslage besprechen <Arrow /></Link>
                <Link href="/ansatz" className="pbx-link">So bauen wir das System <Arrow /></Link>
              </div>
            </div>
            <div className="lg:col-span-7 flex lg:justify-end">
              <Console />
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT: Aufhellung beim Scrollen */}
      <section className="pt-8 pb-28 sm:pb-40">
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)] sm:px-8 lg:px-10">
          <div className="h-px mb-16 sm:mb-24" style={{ background: 'var(--pbx-line)' }} />
          <ScrollStatement text={STATEMENT} />
        </div>
      </section>

      {/* VERGLEICH: in B als heller Abschnitt (Hybrid) */}
      {dark && <div className="pbx-edge" aria-hidden="true" />}
      <section className={`${dark ? 'pbx-light-surface' : ''} pt-10 sm:pt-16 pb-28 sm:pb-40`}>
        <div className="max-w-7xl mx-auto px-[var(--page-gutter)] sm:px-8 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-5">
              <h2 className="pbx-h2">Klassisch wachsen oder <span lang="en" className="whitespace-nowrap">AI First</span></h2>
              <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: 'var(--pbx-text)' }}>
                Der Unterschied zeigt sich darin, wie Abläufe, Daten und KI zusammengebaut sind.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ComparisonRows />
          </div>
        </div>
      </section>
    </div>
  );
}
