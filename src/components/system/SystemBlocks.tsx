/**
 * Premium-Bausteine des dunklen Designsystems (Stile in src/styles/system.css, unter .pbx).
 * - SystemConsole: Beispielablauf einer Website-Anfrage (Regel, KI, Agent, Freigabe) als Produkt-Visual
 * - ScrollStatement: Wörter hellen mit dem Scrollfortschritt auf (nur Farbe, kein Layout)
 * - ComparisonRows: Vergleichszeilen werden aktiv, sobald sie die Bildmitte erreichen
 * Alle respektieren prefers-reduced-motion (Endzustand sofort sichtbar).
 */
import React from 'react';
import Link from '../Link';

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

/* ---------------------------------------------------------------------------------------------
 * AgentNetwork: Netzwerk aus Agenten, die Aufgaben weitergeben. Alles fliesst in das Ergebnis «Performance».
 * Ein Knoten «Ihr Team» gibt frei (Governance). Eine Nachrichtenzeile zeigt, wer gerade was an wen übergibt.
 * Beispielhafte Darstellung, keine Kennzahlen.
 * ------------------------------------------------------------------------------------------- */
type NodeKey = 'M' | 'R' | 'S' | 'P' | 'T' | 'D';
const NET_NODES: Record<NodeKey, { x: number; y: number; name: string; role: string; human?: boolean }> = {
  M: { x: 110, y: 92, name: 'Marketing-Agent', role: 'Kampagnen auswerten' },
  R: { x: 320, y: 44, name: 'Recherche-Agent', role: 'Firmen recherchieren' },
  S: { x: 530, y: 92, name: 'Sales-Agent', role: 'Anfragen einordnen' },
  P: { x: 530, y: 372, name: 'Prozess-Agent', role: 'Offerten vorbereiten' },
  T: { x: 320, y: 420, name: 'Ihr Team', role: 'Freigeben', human: true },
  D: { x: 110, y: 372, name: 'Daten-Agent', role: 'CRM synchronisieren' },
};
const CENTER = { x: 320, y: 232 };
const RING: [NodeKey, NodeKey][] = [['M', 'R'], ['R', 'S'], ['S', 'P'], ['P', 'T'], ['T', 'D'], ['D', 'M']];
const edgeId = (a: NodeKey, b: NodeKey) => `${a}${b}`;
/** Leicht gebogene Verbindung zwischen zwei Knoten (zur Mitte hin gekrümmt). */
function curve(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  const cx = mx + (CENTER.x - mx) * 0.28, cy = my + (CENTER.y - my) * 0.28;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}
const MESSAGES: { from: NodeKey; to: NodeKey; text: string }[] = [
  { from: 'M', to: 'R', text: 'Neue Anfrage aus der Kampagne · Firma prüfen' },
  { from: 'R', to: 'S', text: 'Recherche fertig · Gesprächsvorbereitung bereit' },
  { from: 'S', to: 'P', text: 'Passt zum Angebot · Offerte vorbereiten' },
  { from: 'P', to: 'T', text: 'Offertentwurf · wartet auf Freigabe' },
  { from: 'T', to: 'D', text: 'Freigegeben · CRM und Auftrag aktualisieren' },
  { from: 'D', to: 'M', text: 'Auftrag zurück an die Werbekonten · Budget lernt mit' },
];

export function AgentNetwork() {
  const [step, setStep] = React.useState(0);
  const [reduced, setReduced] = React.useState(false);
  const packetRef = React.useRef<SVGAnimateMotionElement>(null);
  React.useEffect(() => {
    const r = prefersReduced(); setReduced(r);
    if (r) return;
    let id = 0;
    const start = window.setTimeout(() => {
      id = window.setInterval(() => setStep((s) => (s + 1) % MESSAGES.length), 2200);
    }, 1800);
    return () => { window.clearTimeout(start); window.clearInterval(id); };
  }, []);
  React.useEffect(() => { try { packetRef.current?.beginElement(); } catch { /* SMIL nicht verfügbar */ } }, [step]);

  const msg = MESSAGES[step];
  const active = edgeId(msg.from, msg.to);
  return (
    <div className="pbx-net w-full max-w-[680px]" role="img" aria-label="Beispiel: Agenten für Marketing, Recherche, Sales, Prozesse und Daten geben Aufgaben weiter, Ihr Team gibt frei, alles fliesst in das Ergebnis Performance">
      <div className="pbx-console-bar">
        <span className="pbx-live" aria-hidden="true" />
        <span>Agenten-Netzwerk · live</span>
        <span className="ml-auto">Beispiel</span>
      </div>
      <svg viewBox="0 0 640 470" className="w-full h-auto block" aria-hidden="true">
        <defs>
          <radialGradient id="net-core" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#2a2c5c" />
            <stop offset="100%" stopColor="#181923" />
          </radialGradient>
          <radialGradient id="net-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#686CFA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#686CFA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Speichen: jeder Agent liefert in das Ergebnis */}
        {(Object.keys(NET_NODES) as NodeKey[]).map((k, i) => {
          const n = NET_NODES[k];
          const d = `M ${n.x} ${n.y} L ${CENTER.x} ${CENTER.y}`;
          return (
            <g key={`sp-${k}`}>
              <path id={`net-sp-${k}`} d={d} className="pbx-net-spoke" style={{ ['--d' as string]: `${500 + i * 70}ms` }} />
              {!reduced && (
                <circle r="2.6" className="pbx-net-pulse">
                  <animateMotion dur="2.8s" begin={`${1.6 + i * 0.45}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines="0.4 0 0.2 1">
                    <mpath href={`#net-sp-${k}`} />
                  </animateMotion>
                </circle>
              )}
            </g>
          );
        })}

        {/* Ring: Übergaben zwischen den Agenten */}
        {RING.map(([a, b], i) => (
          <path key={edgeId(a, b)} id={`net-${edgeId(a, b)}`} d={curve(NET_NODES[a], NET_NODES[b])}
            className={`pbx-net-edge${edgeId(a, b) === active && !reduced ? ' on' : ''}`} style={{ ['--d' as string]: `${700 + i * 90}ms` }} />
        ))}
        {!reduced && (
          <circle r="4.5" className="pbx-net-packet" key={step}>
            <animateMotion ref={packetRef} dur="1.4s" begin="indefinite" fill="freeze" calcMode="spline" keyPoints="0;1" keyTimes="0;1" keySplines="0.65 0 0.35 1">
              <mpath href={`#net-${active}`} />
            </animateMotion>
          </circle>
        )}

        {/* Ergebnis in der Mitte */}
        <g className="pbx-net-core" style={{ ['--d' as string]: '300ms' }}>
          <circle cx={CENTER.x} cy={CENTER.y} r="96" fill="url(#net-glow)" className="pbx-net-glow" />
          <circle cx={CENTER.x} cy={CENTER.y} r="70" className="pbx-net-ring" />
          <circle cx={CENTER.x} cy={CENTER.y} r="58" fill="url(#net-core)" stroke="#686CFA" strokeWidth="1.25" />
          <text x={CENTER.x} y={CENTER.y - 6} textAnchor="middle" className="pbx-net-core-t">Performance</text>
          <text x={CENTER.x} y={CENTER.y + 14} textAnchor="middle" className="pbx-net-core-s">Outcome</text>
        </g>

        {/* Knoten */}
        {(Object.keys(NET_NODES) as NodeKey[]).map((k, i) => {
          const n = NET_NODES[k];
          const isOn = !reduced && (k === msg.from || k === msg.to);
          return (
            <g key={k} className={`pbx-net-node${n.human ? ' human' : ''}${isOn ? ' on' : ''}`} style={{ ['--d' as string]: `${150 + i * 90}ms` }}>
              <rect x={n.x - 78} y={n.y - 24} width="156" height="48" rx="12" />
              <circle cx={n.x - 62} cy={n.y} r="4" className="pbx-net-dot" />
              <text x={n.x - 52} y={n.y - 4} className="pbx-net-name">{n.name}</text>
              <text x={n.x - 52} y={n.y + 12} className="pbx-net-role">{n.role}</text>
              <text x={n.x - 50} y={n.y + 7} className="pbx-net-short">{n.name.replace('-Agent', '')}</text>
            </g>
          );
        })}
      </svg>
      <div className="pbx-net-log" aria-hidden="true">
        <span className="pbx-kind" data-k={msg.to === 'T' || msg.from === 'T' ? 'mensch' : 'agent'}>
          {NET_NODES[msg.from].name.replace('-Agent', '')} → {NET_NODES[msg.to].name.replace('-Agent', '')}
        </span>
        <span key={step} className="pbx-net-msg">{msg.text}</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------------------------------------
 * CardDeck: überlappende Karten in 3D. Desktop: nebeneinander, leicht in die Tiefe gedreht. Hover oder Fokus
 * dreht die Karte nach vorne, sie erweitert sich nach rechts und zeigt den Inhalt.
 * Touch und schmale Bildschirme: Stapel untereinander, erster Tipp öffnet, zweiter Tipp folgt dem Link.
 * ------------------------------------------------------------------------------------------- */
export function CardDeck({ items }: { items: { area: string; title: string; desc: string; href: string; linkText: string }[] }) {
  const [active, setActive] = React.useState(0);
  // Zustand beim Berühren merken: Der Fokus öffnet die Karte sonst schon vor dem Klick
  const wasOpenAtPress = React.useRef<boolean | null>(null);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (min-width: 1024px)').matches;
  return (
    <div className="pbx pbx-deck" data-rv-skip>
      {items.map((c, i) => {
        const on = i === active;
        return (
          <Link
            key={c.title}
            href={c.href}
            className={`pbx-card${on ? ' on' : ''}`}
            style={{ ['--i' as string]: i, zIndex: on ? 50 : i + 1 }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onPointerDown={() => { wasOpenAtPress.current = on; }}
            onClick={(e) => {
              // Touch: erster Tipp öffnet die Karte, zweiter Tipp folgt dem Link
              const wasOpen = wasOpenAtPress.current ?? on;
              wasOpenAtPress.current = null;
              if (!wasOpen && !canHover()) { e.preventDefault(); setActive(i); }
            }}
          >
            <span className="pbx-card-spine" aria-hidden={on}>
              <span className="pbx-label">0{i + 1}</span>
              <span className="pbx-card-spine-t">{c.title}</span>
            </span>
            <span className="pbx-card-body">
              <span className="pbx-card-inner">
                <span className="flex items-center gap-3">
                  <span className="pbx-label">0{i + 1}</span>
                  <span className="pbx-label" style={{ color: '#A0A3F9' }}>{c.area}</span>
                </span>
                <span className="block mt-5 font-display font-semibold text-xl leading-snug" style={{ color: 'var(--pbx-ink)' }}>{c.title}</span>
                <span className="block mt-3 text-body-sm leading-relaxed" style={{ color: 'var(--pbx-text)' }}>{c.desc}</span>
                <span className="pbx-card-link mt-6">
                  {c.linkText}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------------------------------------
 * PhaseAgentRail: durchgehendes Band unter den vier Phasen. Zeigt, was KI und Agenten in jeder Phase beitragen,
 * mit einer Lichtspur, die durch alle Phasen läuft.
 * ------------------------------------------------------------------------------------------- */
const PHASE_AI = [
  'Agenten-Architektur, Rechte, Kontext und Testset entwerfen',
  'Agenten mit echten Fällen testen, zuerst nur mit Vorschlägen',
  'Team prüft Vorschläge, gibt frei und kann jederzeit stoppen',
  'Agenten werten aus, Spielraum wächst mit belegter Zuverlässigkeit',
];
export function PhaseAgentRail({ className = '' }: { className?: string }) {
  return (
    <div className={`pbx-phase-rail ${className}`} data-rv-skip>
      <div className="pbx-phase-rail-head">
        <span className="pbx-live" aria-hidden="true" />
        <span>KI- und Agenten-Ebene · durch alle Phasen</span>
        <span className="ml-auto hidden sm:inline">laufend iteriert</span>
      </div>
      <div className="pbx-phase-rail-track" aria-hidden="true" />
      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 px-5 pb-5">
        {PHASE_AI.map((t, i) => (
          <li key={t} className="flex items-start gap-2.5 text-[13px] leading-snug text-slate-700">
            <span className="pbx-phase-rail-dot" aria-hidden="true" />
            <span><span className="pbx-label mr-1.5">0{i + 1}</span>{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Schmales Band unter Schrittfolgen: zeigt die agentische Ebene, die durch alle Schritte läuft. */
export function AgentBand({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`pbx-phase-rail ${className}`} data-rv-skip>
      <div className="pbx-phase-rail-head">
        <span className="pbx-live" aria-hidden="true" />
        <span>KI- und Agenten-Ebene · durch alle Schritte</span>
        <span className="ml-auto hidden sm:inline">laufend iteriert</span>
      </div>
      <div className="pbx-phase-rail-track" aria-hidden="true" />
      <p className="px-5 pb-5 text-[13.5px] leading-relaxed text-slate-700">{text}</p>
    </div>
  );
}
