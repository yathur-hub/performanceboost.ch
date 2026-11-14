/**
 * Systemdiagramm der Startseite: Marketing, Sales und Ergebnis bilden einen Kreislauf,
 * Prozesse (Systeme, Daten, Automatisierung) ist der Kern, der alle drei verbindet.
 * Agenten arbeiten auf den Verbindungen zwischen Kern und Bereichen, ein Mensch gibt frei.
 *
 * Konzept: docs/agentic-positioning/01, Kapitel 6. Desktop als skalierendes SVG, mobil als gestapelte Karten
 * mit Prozess-Schiene. Ein Klick (oder Fokus) auf einen Knoten zeigt darunter, was dort passiert,
 * was Agenten übernehmen und wer entscheidet. Das Detailfeld ist zugleich die Textalternative.
 */
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Bot, ShieldCheck, RotateCcw } from 'lucide-react';
import Link from '../Link';

type NodeId = 'marketing' | 'sales' | 'ergebnis' | 'prozesse';

interface NodeInfo {
  id: NodeId;
  title: string;
  sub: string;
  what: string;
  agent: string;
  human: string;
  href: string;
  linkText: string;
}

const NODES: Record<NodeId, NodeInfo> = {
  marketing: {
    id: 'marketing',
    title: 'Agentic Marketing',
    sub: 'Nachfrage gewinnen',
    what: 'Ihr Unternehmen wird gefunden, überzeugt und gewinnt Anfragen. Jede Anfrage geht mit Quelle und Kontext an den Vertrieb.',
    agent: 'Ursachen von Abweichungen finden, Inhalte aus freigegebenen Unterlagen entwerfen, Anfragen einordnen.',
    human: 'Budget und Veröffentlichungen gibt Ihr Team frei.',
    href: '/leistungen/marketing',
    linkText: 'Zu Agentic Marketing',
  },
  sales: {
    id: 'sales',
    title: 'Agentic Sales',
    sub: 'Qualifizieren und abschliessen',
    what: 'Anfragen werden eingeordnet, beantwortet und in Offerten und Aufträge verwandelt. Der Vertrieb meldet zurück, welche Anfragen zu Aufträgen werden.',
    agent: 'Anfragen vorqualifizieren, Gespräche mit Recherche vorbereiten, Nachfassen entwerfen.',
    human: 'Gespräch, Offerte und Entscheid bleiben beim Vertrieb.',
    href: '/leistungen/sales',
    linkText: 'Zu Agentic Sales',
  },
  ergebnis: {
    id: 'ergebnis',
    title: 'Ergebnis',
    sub: 'Aufträge, Umsatz, Kunden',
    what: 'Aufträge, Umsatz und Kunden, die bleiben. Die Zahlen fliessen zurück und zeigen, welche Kanäle, Botschaften und Abläufe wirken.',
    agent: 'Feste Abläufe führen Kennzahlen zusammen, ein Modell erklärt Abweichungen.',
    human: 'Prioritäten für den nächsten Schritt setzt die Geschäftsleitung.',
    href: '/ansatz',
    linkText: 'Wie wir laufend verbessern',
  },
  prozesse: {
    id: 'prozesse',
    title: 'Agentic Processes',
    sub: 'Systeme · Daten · Automatisierung',
    what: 'Website, CRM, E-Mail, Offerte und Reporting sind verbunden. Daten werden nur einmal erfasst, Übergaben laufen automatisch, und alle arbeiten mit denselben Zahlen.',
    agent: 'Daten nach festen Regeln übertragen, Dokumente lesen und einordnen, unklare Fälle vorbereiten und an eine Person geben.',
    human: 'Was nach aussen geht, Geld kostet oder Daten löscht, gibt ein Mensch frei.',
    href: '/leistungen/prozesse',
    linkText: 'Zu Agentic Processes',
  },
};

/** Welche Verbindungen beim Auswählen eines Knotens hervorgehoben werden. */
const EDGES_OF: Record<NodeId, string[]> = {
  marketing: ['ms', 'sm', 'em', 'spoke-m'],
  sales: ['ms', 'sm', 'se', 'spoke-s'],
  ergebnis: ['se', 'em', 'spoke-e'],
  prozesse: ['spoke-m', 'spoke-s', 'spoke-e'],
};

const ACCENT = '#686CFA';
const SOFT = '#CBCBFC';
const LINE = '#2C2D3A';
const TEXT = '#B9BACB';
const INK = '#F2F2F7';
const NODE = '#181923';

export function RevenueSystemGraphic() {
  const [selected, setSelected] = useState<NodeId>('prozesse');
  // Erstes Erscheinen: Knoten, dann Verbindungen, dann Beschriftungen, sobald das Diagramm sichtbar wird
  const svgWrap = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = svgWrap.current;
    if (!el || !('IntersectionObserver' in window)) return setDrawn(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delay = (ms: number) => ({ transitionDelay: drawn ? `${ms}ms` : '0ms' });
  const info = NODES[selected];
  const lit = (edge: string) => EDGES_OF[selected].includes(edge);

  const nodeProps = (id: NodeId) => ({
    role: 'button',
    tabIndex: 0,
    'aria-pressed': selected === id,
    'aria-label': `${NODES[id].title}: ${NODES[id].sub}`,
    onClick: () => setSelected(id),
    onFocus: () => setSelected(id),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSelected(id);
      }
    },
    className: 'sys-node cursor-pointer outline-none [&:focus-visible>rect:first-child]:stroke-[3]',
  });

  const edgeStroke = (edge: string) => (lit(edge) ? ACCENT : '#4A4DA8');
  const edgeOpacity = (edge: string) => (lit(edge) ? 1 : 0.55);

  return (
    <figure className="w-full min-w-0 space-y-5">
      {/* DESKTOP UND TABLET: SVG skaliert mit der Breite */}
      <div ref={svgWrap} className={`hidden sm:block ${drawn ? 'sys-drawn' : ''}`}>
        <svg viewBox="0 0 600 500" className="w-full h-auto select-none" role="group" aria-label="Agentic Marketing, Sales und Processes als ein System">
          <defs>
            <marker id="sys-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill={ACCENT} />
            </marker>
            <marker id="sys-arrow-soft" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 1 L 9 5 L 0 9 z" fill="#4A4DA8" />
            </marker>
            <radialGradient id="sys-core" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#262848" />
              <stop offset="100%" stopColor={NODE} />
            </radialGradient>
          </defs>

          {/* Speichen: Datenflüsse zwischen Kern und Bereichen */}
          {[
            { id: 'spoke-m', d: 'M 300 255 L 132 129' },
            { id: 'spoke-s', d: 'M 300 255 L 468 129' },
            { id: 'spoke-e', d: 'M 300 255 L 300 411' },
          ].map((s) => (
            <path key={s.id} d={s.d} stroke={lit(s.id) ? ACCENT : '#3B3E86'} strokeWidth={lit(s.id) ? 2 : 1.5} fill="none" className={`flow-dash ${lit(s.id) ? 'is-lit' : ''}`} style={{ transition: 'stroke 300ms var(--ease-out), stroke-width 300ms var(--ease-out)' }} />
          ))}

          {/* Kreislauf: Marketing → Sales → Ergebnis → Marketing, plus Rückmeldung Sales → Marketing */}
          <g fill="none" strokeWidth="1.75" className="transition-all duration-300">
            <path d="M 194 84 L 404 84" pathLength={1} strokeDasharray="1" className="sys-edge" style={delay(520)} stroke={edgeStroke('ms')} opacity={edgeOpacity('ms')} markerEnd={lit('ms') ? 'url(#sys-arrow)' : 'url(#sys-arrow-soft)'} />
            <path d="M 406 108 L 196 108" className="sys-label" style={delay(760)} stroke={edgeStroke('sm')} opacity={edgeOpacity('sm')} strokeDasharray="5 5" markerEnd={lit('sm') ? 'url(#sys-arrow)' : 'url(#sys-arrow-soft)'} />
            <path d="M 500 131 C 505 300, 460 420, 396 444" pathLength={1} strokeDasharray="1" className="sys-edge" style={delay(640)} stroke={edgeStroke('se')} opacity={edgeOpacity('se')} markerEnd={lit('se') ? 'url(#sys-arrow)' : 'url(#sys-arrow-soft)'} />
            <path d="M 206 446 C 140 420, 95 300, 100 133" className="sys-label" style={delay(860)} stroke={edgeStroke('em')} opacity={edgeOpacity('em')} strokeDasharray="5 5" markerEnd={lit('em') ? 'url(#sys-arrow)' : 'url(#sys-arrow-soft)'} />
          </g>
          <g fontFamily="Inter, sans-serif" fontSize="11.5" fill={TEXT} className="sys-label" style={delay(900)}>
            <text x="300" y="74" textAnchor="middle" fontWeight="600">Anfragen mit Kontext</text>
            <text x="300" y="127" textAnchor="middle">Rückmeldung: was zu Aufträgen wird</text>
            <text x="464" y="318" textAnchor="end" fontWeight="600">Aufträge</text>
            <text x="136" y="312" textAnchor="start" fontWeight="600">Daten &amp;</text>
            <text x="136" y="327" textAnchor="start" fontWeight="600">Feedback</text>
          </g>

          {/* Agentic AI: Umlaufbahn um den Kern mit einem Agenten je Verbindung */}
          <circle cx="300" cy="255" r="110" className="sys-label" style={delay(380)} fill="none" stroke={ACCENT} strokeOpacity="0.35" strokeDasharray="2 5" />
          <text x="300" y="166" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="700" letterSpacing="1.5" fill="#A0A3F9">
            AGENTIC AI
          </text>
          {[
            { id: 'spoke-m', x: 212, y: 189 },
            { id: 'spoke-s', x: 388, y: 189 },
            { id: 'spoke-e', x: 300, y: 365 },
          ].map((a) => (
            <g key={a.id} aria-hidden="true" className="sys-label" style={delay(440)}>
              <circle key={`${a.id}-${selected}`} cx={a.x} cy={a.y} r="13" fill={ACCENT} className={`agent-ping ${lit(a.id) ? 'is-lit' : ''}`} />
              <circle cx={a.x} cy={a.y} r="12" fill={NODE} stroke={ACCENT} strokeWidth={lit(a.id) ? 2 : 1.25} />
              <path
                d={`M ${a.x} ${a.y - 6.5} L ${a.x + 1.8} ${a.y - 1.8} L ${a.x + 6.5} ${a.y} L ${a.x + 1.8} ${a.y + 1.8} L ${a.x} ${a.y + 6.5} L ${a.x - 1.8} ${a.y + 1.8} L ${a.x - 6.5} ${a.y} L ${a.x - 1.8} ${a.y - 1.8} Z`}
                fill={ACCENT}
              />
            </g>
          ))}

          {/* Kern: Prozesse */}
          <g {...nodeProps('prozesse')} style={delay(80)}>
            <circle cx="300" cy="255" r="78" fill="url(#sys-core)" stroke={ACCENT} strokeWidth={selected === 'prozesse' ? 2.5 : 1.25} className="transition-all duration-300" />
            <text x="300" y="232" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="16" fontWeight="700" fill={INK}><tspan x="300">Agentic</tspan><tspan x="300" dy="19">Processes</tspan></text>
            <text x="300" y="270" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill={TEXT}>Systeme · Daten</text>
            <text x="300" y="285" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill={TEXT}>Automatisierung</text>
          </g>

          {/* Bereiche und Ergebnis */}
          {[
            { id: 'marketing' as const, x: 10, y: 63 },
            { id: 'sales' as const, x: 410, y: 63 },
            { id: 'ergebnis' as const, x: 210, y: 413 },
          ].map((n) => {
            const isResult = n.id === 'ergebnis';
            const active = selected === n.id;
            return (
              <g key={n.id} {...nodeProps(n.id)} style={delay(n.id === 'marketing' ? 180 : n.id === 'sales' ? 280 : 380)}>
                <rect
                  x={n.x}
                  y={n.y}
                  width="180"
                  height="66"
                  rx="18"
                  fill={isResult ? ACCENT : NODE}
                  stroke={active ? ACCENT : isResult ? ACCENT : LINE}
                  strokeWidth={active ? 2.5 : 1.25}
                  className="transition-all duration-300"
                  style={{ filter: active ? 'drop-shadow(0 10px 18px rgba(104,108,250,0.25))' : undefined }}
                />
                <text x={n.x + 90} y={n.y + 29} textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize={isResult ? 17 : 15.5} fontWeight="700" fill={isResult ? '#FFFFFF' : INK}>
                  {NODES[n.id].title}
                </text>
                <text x={n.x + 90} y={n.y + 48} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill={isResult ? '#EEEEFE' : TEXT}>
                  {NODES[n.id].sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* MOBIL: gestapelte Karten, Prozesse als durchgehende Schiene */}
      <div className="sm:hidden">
        <div className="relative pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-9 rounded-2xl bg-[#CBCBFC]/45 border border-[#686CFA]/30 flex items-center justify-center" aria-hidden="true">
            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-accent-strong">
              Agentic Processes · Daten
            </span>
          </div>
          <ol className="space-y-2">
            {(['marketing', 'sales', 'ergebnis'] as const).map((id, i) => {
              const n = NODES[id];
              const active = selected === id;
              const isResult = id === 'ergebnis';
              return (
                <li key={id} className="relative">
                  <span className="absolute -left-3 top-1/2 w-3 border-t border-dashed border-[#686CFA]/60" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={() => setSelected(id)}
                    aria-pressed={active}
                    className={`w-full text-left rounded-2xl border px-4 py-3 transition-all ${
                      isResult ? 'bg-[#686CFA] border-[#686CFA] text-white' : active ? 'bg-surface border-[#686CFA]' : 'bg-surface border-line'
                    }`}
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span>
                        <span className={`block font-display font-semibold ${isResult ? 'text-white' : 'text-slate-900'}`}>{n.title}</span>
                        <span className={`block text-xs ${isResult ? 'text-white/85' : 'text-slate-500'}`}>{n.sub}</span>
                      </span>
                      {!isResult && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-[#686CFA] bg-[#686CFA]/10 rounded-full px-2 py-1">
                          <Bot className="w-3 h-3" aria-hidden="true" /> Agent
                        </span>
                      )}
                    </span>
                  </button>
                  {i < 2 && (
                    <p className="flex items-center gap-1.5 py-1.5 pl-4 text-[11px] font-semibold text-slate-500">
                      <ArrowDown className="w-3.5 h-3.5 text-[#686CFA]" aria-hidden="true" />
                      {i === 0 ? 'Anfragen mit Kontext, Rückmeldung zurück' : 'Aufträge'}
                    </p>
                  )}
                </li>
              );
            })}
          </ol>
          <p className="mt-2 flex items-center gap-1.5 pl-4 text-[11px] font-semibold text-slate-500">
            <RotateCcw className="w-3.5 h-3.5 text-[#686CFA]" aria-hidden="true" /> Daten und Feedback fliessen zurück ins Marketing
          </p>
          <button
            type="button"
            onClick={() => setSelected('prozesse')}
            aria-pressed={selected === 'prozesse'}
            className={`mt-3 w-full text-left rounded-2xl border px-4 py-3 transition-all ${selected === 'prozesse' ? 'bg-surface border-[#686CFA]' : 'bg-[#CBCBFC]/25 border-[#CBCBFC]'}`}
          >
            <span className="block font-display font-semibold text-slate-900">Agentic Processes</span>
            <span className="block text-xs text-slate-500">Verbindet alle Stufen: Systeme, Daten, Automatisierung</span>
          </button>
        </div>
      </div>

      {/* Detail zum gewählten Knoten (zugleich Textalternative) */}
      <figcaption aria-live="polite" className="rounded-3xl border border-line bg-canvas/60 p-5 sm:p-6 transition-colors">
        <div key={selected} className="motion-swap">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-display font-semibold text-slate-900">
            {info.title} <span className="font-normal text-slate-500">· {info.sub}</span>
          </p>
          <p className="text-[11px] text-slate-400 hidden sm:block">Knoten anklicken für Details</p>
        </div>
        <p className="mt-2 text-body-sm text-slate-700 leading-relaxed">{info.what}</p>
        <dl className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex gap-2.5">
            <Bot className="w-4 h-4 text-[#686CFA] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold text-slate-900">Agenten übernehmen</dt>
              <dd className="text-xs text-slate-600 leading-relaxed">{info.agent}</dd>
            </div>
          </div>
          <div className="flex gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#686CFA] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <dt className="text-xs font-bold text-slate-900">Ihr Team entscheidet</dt>
              <dd className="text-xs text-slate-600 leading-relaxed">{info.human}</dd>
            </div>
          </div>
        </dl>
        <Link href={info.href} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] hover:text-accent-strong">
          {info.linkText} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        </div>
      </figcaption>
    </figure>
  );
}
