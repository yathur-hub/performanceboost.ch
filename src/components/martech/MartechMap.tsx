import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from '../Link';
import { MARTECH_LAYERS, MARTECH_TOPICS, type LayerId } from '../../data/martechWissen';

/**
 * MarTech-Landkarte: fünf Schichten zum Anklicken (oben Steuerung, unten Systeme).
 * Rechts Beschreibung, Beispiele, Fachthemen der Schicht und die passende Leistung.
 */
export function MartechMap({ initial = 'daten' }: { initial?: LayerId }) {
  const [active, setActive] = useState<LayerId>(initial);
  const layer = MARTECH_LAYERS.find((l) => l.id === active)!;
  const topics = MARTECH_TOPICS.filter((t) => t.layer === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
      <div className="lg:col-span-5 space-y-2.5" role="group" aria-label="Schichten des MarTech-Stacks">
        {MARTECH_LAYERS.map((l) => {
          const on = l.id === active;
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => setActive(l.id)}
              aria-pressed={on}
              className={`w-full text-left flex items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30 ${
                on
                  ? 'bg-[#686CFA] border-[#686CFA] text-white shadow-[0_12px_40px_-12px_rgba(105,110,239,0.55)]'
                  : 'bg-white border-[#E0E0E0]/80 text-slate-900 hover:border-[#686CFA]/50'
              }`}
            >
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono text-sm font-bold ${on ? 'bg-white/15 text-white' : 'bg-[#686CFA]/10 text-[#686CFA]'}`}>
                {l.nr}
              </span>
              <span className="min-w-0">
                <span className="block font-display font-semibold leading-tight">{l.title}</span>
                <span className={`block mt-0.5 text-xs ${on ? 'text-white/80' : 'text-slate-500'}`}>{l.short}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-7 bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-9 space-y-6" aria-live="polite">
        <div className="space-y-3">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#686CFA]">Schicht {layer.nr}</p>
          <h3 className="text-2xl font-display font-semibold text-slate-900">{layer.title}</h3>
          <p className="text-body text-slate-600 leading-relaxed">{layer.desc}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {layer.examples.map((e) => (
            <li key={e} className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
              {e}
            </li>
          ))}
        </ul>
        {topics.length > 0 && (
          <div className="space-y-2 border-t border-slate-100 pt-5">
            <p className="text-sm font-bold text-slate-900">Fachthemen in dieser Schicht</p>
            <ul className="space-y-1.5">
              {topics.map((t) => (
                <li key={t.slug}>
                  <Link href={`/martech/${t.slug}`} className="group inline-flex items-start gap-2 text-sm font-semibold text-[#4f54d6] hover:text-[#686CFA]">
                    <ArrowRight className="w-3.5 h-3.5 mt-1 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link href={layer.service.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] hover:text-[#4f54d6]">
          Passende Leistung: {layer.service.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
