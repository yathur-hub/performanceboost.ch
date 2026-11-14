/**
 * Themengrafiken für Unterseiten (ersetzen die früheren interaktiven Rechner).
 * Fünf Typen, alle datengetrieben (src/data/diagrams.ts), im Stil der Startseiten-Grafik:
 * weisse Karten, Icon-Kachel, gestrichelte Verbindungen, Abschluss-Knoten in #686CFA.
 * Reines HTML/CSS + SVG, vorgerendert, ohne Interaktion.
 */
import React from 'react';
import {
  ArrowDown, ArrowRight, BarChart3, Bot, Briefcase, Calendar, CheckCircle2, Compass, Cpu, Database, FileText,
  Filter, Globe, Handshake, Layers, LineChart, Mail, Megaphone, MessageSquare, MousePointerClick, Phone, PiggyBank,
  RefreshCw, Repeat, Search, Send, Settings, ShoppingCart, Sparkles, Star, Target, TrendingUp, UserCheck, Users,
  Wallet, Zap,
} from 'lucide-react';

const ICONS = {
  ArrowRight, BarChart3, Bot, Briefcase, Calendar, CheckCircle2, Compass, Cpu, Database, FileText, Filter, Globe,
  Handshake, Layers, LineChart, Mail, Megaphone, MessageSquare, MousePointerClick, Phone, PiggyBank, RefreshCw, Repeat,
  Search, Send, Settings, ShoppingCart, Sparkles, Star, Target, TrendingUp, UserCheck, Users, Wallet, Zap,
} as const;

export type IconName = keyof typeof ICONS;

export interface DiagramNode {
  title: string;
  sub?: string;
  icon?: IconName;
}

export type DiagramSpec =
  | { type: 'flow'; nodes: DiagramNode[]; caption?: string }
  | { type: 'hub'; center: DiagramNode; nodes: DiagramNode[]; caption?: string }
  | { type: 'funnel'; nodes: DiagramNode[]; caption?: string }
  | { type: 'layers'; nodes: DiagramNode[]; caption?: string }
  | { type: 'cycle'; center: string; nodes: DiagramNode[]; caption?: string };

function NodeIcon({ name, active }: { name?: IconName; active?: boolean }) {
  const Icon = ICONS[name ?? 'CheckCircle2'];
  return (
    <span
      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
        active ? 'bg-white/20 text-white' : 'bg-[#686CFA]/10 text-[#686CFA]'
      }`}
    >
      <Icon className="w-4.5 h-4.5" aria-hidden="true" />
    </span>
  );
}

const NodeCard: React.FC<{ node: DiagramNode; index?: number; active?: boolean; compact?: boolean; stacked?: boolean }> = ({ node, index, active, compact, stacked }) => {
  return (
    <div
      className={`relative flex ${stacked ? 'flex-col gap-2 h-full' : 'items-start gap-3'} rounded-2xl border ${compact ? 'p-3' : 'p-3.5 sm:p-4'} ${
        active
          ? 'bg-[#686CFA] border-[#686CFA] text-white shadow-[0_12px_30px_-12px_rgba(105,110,239,0.6)]'
          : 'bg-surface border-slate-200/80 shadow-[0_4px_16px_-8px_rgba(15,23,42,0.12)]'
      }`}
    >
      <NodeIcon name={node.icon} active={active} />
      <span className="min-w-0">
        {index !== undefined && (
          <span className={`block font-mono text-[10px] font-bold ${active ? 'text-white/70' : 'text-[#686CFA]'}`}>
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <span className={`block text-sm font-display font-semibold leading-snug [overflow-wrap:anywhere] hyphens-auto ${active ? 'text-white' : 'text-slate-900'}`}>
          {node.title}
        </span>
        {node.sub && <span className={`block mt-0.5 text-xs leading-snug ${active ? 'text-white/80' : 'text-slate-500'}`}>{node.sub}</span>}
      </span>
    </div>
  );
};

/** Ablauf: vertikal mit Pfeilen (gut lesbar in jeder Spaltenbreite). Letzter Knoten = Ergebnis. */
function Flow({ nodes }: { nodes: DiagramNode[] }) {
  return (
    <ol className="space-y-0">
      {nodes.map((n, i) => (
        <li key={n.title} style={{ ['--d' as string]: i } as React.CSSProperties}>
          <NodeCard node={n} index={i} active={i === nodes.length - 1} />
          {i < nodes.length - 1 && (
            <span className="flex justify-center py-1.5 text-[#686CFA]/50" aria-hidden="true">
              <ArrowDown className="w-4 h-4" />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** Hub: Zentrum mit Satelliten, verbunden über gestrichelte Linien (Desktop), mobil als Raster. */
function Hub({ center, nodes }: { center: DiagramNode; nodes: DiagramNode[] }) {
  const slots = [
    [0, 0], [1, 0], [2, 0],
    [0, 2], [1, 2], [2, 2],
  ].slice(0, Math.min(nodes.length, 6));
  return (
    <div>
      {/* Desktop/Tablet: 3×3-Raster mit Zentrum */}
      <div className="hidden sm:block relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300" preserveAspectRatio="none" aria-hidden="true">
          {slots.map(([c, r], i) => (
            <line key={i} x1={150} y1={150} x2={50 + c * 100} y2={50 + r * 100} stroke="#686CFA" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <div className="relative grid grid-cols-3 grid-rows-3 gap-3 min-h-[360px]">
          {nodes.slice(0, 6).map((n, i) => (
            <div key={n.title} className="flex items-center" style={{ gridColumn: slots[i][0] + 1, gridRow: slots[i][1] + 1, ['--d' as string]: i + 1 } as React.CSSProperties}>
              <div className="w-full"><NodeCard node={n} compact /></div>
            </div>
          ))}
          <div className="flex items-center" style={{ gridColumn: 2, gridRow: 2, ['--d' as string]: 0 } as React.CSSProperties}>
            <div className="w-full"><NodeCard node={center} active compact /></div>
          </div>
        </div>
      </div>
      {/* Mobil: Zentrum oben, Satelliten als Raster */}
      <div className="sm:hidden space-y-3">
        <div style={{ ['--d' as string]: 0 } as React.CSSProperties}><NodeCard node={center} active /></div>
        <div className="grid grid-cols-2 gap-2.5">
          {nodes.map((n, i) => <div key={n.title} style={{ ['--d' as string]: i + 1 } as React.CSSProperties}><NodeCard node={{ ...n, sub: undefined }} compact stacked /></div>)}
        </div>
      </div>
    </div>
  );
}

/** Trichter: Stufen werden schmaler, die letzte Stufe ist das Ziel. */
function Funnel({ nodes }: { nodes: DiagramNode[] }) {
  const n = nodes.length;
  return (
    <ol className="space-y-2">
      {nodes.map((node, i) => {
        const width = 100 - (i * 40) / Math.max(1, n - 1);
        const active = i === n - 1;
        const Icon = ICONS[node.icon ?? 'CheckCircle2'];
        return (
          <li key={node.title} className="flex flex-col items-center" style={{ ['--d' as string]: i } as React.CSSProperties}>
            <div
              className={`flex items-center gap-3 rounded-2xl px-4 py-3 border transition-colors ${
                active ? 'bg-[#686CFA] border-[#686CFA] text-white' : 'bg-surface border-slate-200/80'
              }`}
              style={{ width: `${width}%`, backgroundColor: active ? undefined : `rgba(105,110,239,${0.04 + i * 0.05})` }}
            >
              <Icon className={`w-4.5 h-4.5 shrink-0 ${active ? 'text-white' : 'text-[#686CFA]'}`} aria-hidden="true" />
              <span className="min-w-0">
                <span className={`block text-sm font-display font-semibold leading-snug ${active ? 'text-white' : 'text-slate-900'}`}>{node.title}</span>
                {node.sub && <span className={`block text-xs leading-snug ${active ? 'text-white/80' : 'text-slate-500'}`}>{node.sub}</span>}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Ebenen: Hierarchie von der Grundlage (unten) zum Ziel (oben). nodes[0] = oberste Ebene. */
function LayersDiagram({ nodes }: { nodes: DiagramNode[] }) {
  const n = nodes.length;
  return (
    <ol className="space-y-2">
      {nodes.map((node, i) => {
        const width = 64 + (i * 36) / Math.max(1, n - 1);
        return (
          <li key={node.title} className="flex justify-center" style={{ ['--d' as string]: i } as React.CSSProperties}>
            <div style={{ width: `${width}%` }}>
              <NodeCard node={node} active={i === 0} compact />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Kreislauf: vier Schritte im Kreis um ein Zentrum. */
function Cycle({ center, nodes }: { center: string; nodes: DiagramNode[] }) {
  const items = nodes.slice(0, 4);
  return (
    <div className="relative">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 200" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="100" cy="100" rx="62" ry="58" fill="none" stroke="#686CFA" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="relative grid grid-cols-2 gap-x-3 gap-y-16 sm:gap-y-20">
        {[items[0], items[1], items[3], items[2]].map((node, i) =>
          node ? (
            <div key={node.title} style={{ ['--d' as string]: [0, 1, 3, 2][i] } as React.CSSProperties}><NodeCard node={node} index={[0, 1, 3, 2][i]} compact /></div>
          ) : (
            <span key={i} />
          ),
        )}
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#686CFA] text-white text-xs font-semibold px-4 py-2 shadow-[0_10px_24px_-10px_rgba(105,110,239,0.7)]">
          <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" /> {center}
        </span>
      </div>
    </div>
  );
}

export function Diagram({ spec, className = '' }: { spec: DiagramSpec; className?: string }) {
  return (
    <figure className={`diagram-enter rounded-3xl bg-gradient-to-b from-surface to-surface-2 border border-slate-200/70 p-4 sm:p-6 ${className}`}>
      {spec.type === 'flow' && <Flow nodes={spec.nodes} />}
      {spec.type === 'hub' && <Hub center={spec.center} nodes={spec.nodes} />}
      {spec.type === 'funnel' && <Funnel nodes={spec.nodes} />}
      {spec.type === 'layers' && <LayersDiagram nodes={spec.nodes} />}
      {spec.type === 'cycle' && <Cycle center={spec.center} nodes={spec.nodes} />}
      {spec.caption && <figcaption className="mt-4 text-center text-xs text-slate-500">{spec.caption}</figcaption>}
    </figure>
  );
}

export default Diagram;
