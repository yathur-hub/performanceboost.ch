/**
 * Premium-Bausteine des dunklen Designsystems (Stile in src/styles/system.css, unter .pbx).
 * - SystemConsole: Beispielablauf einer Website-Anfrage (Regel, KI, Agent, Freigabe) als Produkt-Visual
 * - ScrollStatement: Wörter hellen mit dem Scrollfortschritt auf (nur Farbe, kein Layout)
 * - ComparisonRows: Vergleichszeilen werden aktiv, sobald sie die Bildmitte erreichen
 * Alle respektieren prefers-reduced-motion (Endzustand sofort sichtbar).
 */
import React from 'react';

const STEPS: { kind: 'regel' | 'ki' | 'agent' | 'mensch'; label: string; title: string; sub: string; state: 'done' | 'wait'; shimmer?: boolean }[] = [
  { kind: 'regel', label: 'Regel', title: 'Anfrage übernommen, Kontakt und Firma im CRM angelegt', sub: 'Formular → Workflow → CRM · Bestätigung an die anfragende Person', state: 'done' },
  { kind: 'ki', label: 'KI', title: 'Eingeordnet nach Ihren Kriterien, mit Begründung', sub: 'Anliegen zusammengefasst · Passung zum Angebot geprüft', state: 'done' },
  { kind: 'agent', label: 'Agent', title: 'Recherche für das Erstgespräch vorbereitet', sub: 'Website, öffentliche Quellen und CRM-Verlauf auf einer Seite', state: 'done', shimmer: true },
  { kind: 'mensch', label: 'Mensch', title: 'Antwortentwurf wartet auf Ihre Freigabe', sub: 'Versendet wird erst nach Prüfung', state: 'wait' },
];

const prefersReduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function SystemConsole() {
  return (
    <div className="pbx-console w-full max-w-[640px]" role="img" aria-label="Beispielablauf einer Website-Anfrage: Regel, KI, Agent und Freigabe durch einen Menschen">
      <div className="pbx-console-bar">
        <span className="pbx-live" aria-hidden="true" />
        <span>Ablauf · Neue Website-Anfrage</span>
        <span className="ml-auto">Beispiel</span>
      </div>
      <div className="relative">
        <svg className="absolute left-[24px] top-[22px] h-[calc(100%-44px)] w-2 overflow-visible" aria-hidden="true">
          <line x1="1" y1="0" x2="1" y2="100%" className="pbx-wire" style={{ ['--d' as string]: '840ms', strokeOpacity: 0.45 }} />
        </svg>
        {STEPS.map((s, i) => (
          <div key={s.title} className="pbx-step" style={{ ['--d' as string]: `${860 + i * 240}ms` }}>
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
        ))}
      </div>
    </div>
  );
}

export function ScrollStatement({ text, className = '' }: { text: string; className?: string }) {
  const ref = React.useRef<HTMLParagraphElement>(null);
  const words = React.useMemo(() => text.split(' '), [text]);
  const [lit, setLit] = React.useState(0);
  React.useEffect(() => {
    if (prefersReduced()) { setLit(words.length); return; }
    let raf = 0;
    const tick = () => {
      raf = 0;
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.55 + r.height * 0.6)));
      setLit(Math.round(p * words.length));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, [words.length]);
  return (
    <p ref={ref} className={`pbx-statement pbx-h2 ${className}`}>
      {words.map((w, i) => (
        <span key={i} className={`w${i < lit ? ' on' : ''}`}>{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </p>
  );
}

export function ComparisonRows({ rows }: { rows: { topic: string; classic: string; aiFirst: string }[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>('.pbx-row') ?? [];
    if (prefersReduced() || !('IntersectionObserver' in window)) { els.forEach((r) => r.classList.add('on')); return; }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('on'); }),
      { rootMargin: '0px 0px -45% 0px', threshold: 0 },
    );
    els.forEach((r) => io.observe(r));
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-rv-skip>
      <div className="hidden md:grid grid-cols-12 gap-8 pb-4">
        <span className="pbx-label col-span-3">Thema</span>
        <span className="pbx-label col-span-4">Klassisch</span>
        <span className="pbx-label col-span-5" lang="en" style={{ color: '#A0A3F9' }}>AI First</span>
      </div>
      {rows.map((row, i) => (
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
            <span className="md:hidden pbx-label block mb-1 mt-3" lang="en" style={{ color: '#A0A3F9' }}>AI First</span>
            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--pbx-ink)' }}>{row.aiFirst}</p>
            <span className="pbx-tick block h-px mt-4" style={{ background: 'var(--pbx-accent)' }} aria-hidden="true" />
          </div>
        </div>
      ))}
    </div>
  );
}
