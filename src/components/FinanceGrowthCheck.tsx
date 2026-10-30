import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { trackEvent } from '../lib/analytics';
import { inputClass } from './ContactForm';

interface FinanceGrowthCheckProps {
  pageSlug: string;
  /** Übergibt das Ergebnis (nur Zahlen, keine Personendaten) an das Formular und scrollt dorthin. */
  onDiscuss: (context: string) => void;
}

/**
 * Wachstumscheck gemäss Content-Blueprint Kap. 8: rechnet nur mit den Angaben der Besucherin,
 * ohne Branchendurchschnitte oder CHF-Beträge.
 */
export function requiredMeetingsPerMonth(mandatesPerYear: number, conversionOutOfTen: number): number {
  if (mandatesPerYear <= 0 || conversionOutOfTen <= 0) return 0;
  return Math.ceil(mandatesPerYear / (conversionOutOfTen / 10) / 12);
}

const toNumber = (s: string) => {
  const n = Number(s.replace(',', '.'));
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

export default function FinanceGrowthCheck({ pageSlug, onDiscuss }: FinanceGrowthCheckProps) {
  const [mandates, setMandates] = useState('');
  const [quote, setQuote] = useState('3');
  const [referrals, setReferrals] = useState('');
  const [capacity, setCapacity] = useState('');
  const trackedRef = useRef(false);

  const result = useMemo(() => {
    const m = toNumber(mandates);
    const q = toNumber(quote);
    if (!m || !q) return null;
    const perMonth = requiredMeetingsPerMonth(m, q);
    const cap = capacity.trim() ? toNumber(capacity) : null;
    return { mandates: m, quote: q, perMonth, cap, fits: cap === null ? null : perMonth <= cap };
  }, [mandates, quote, capacity]);

  useEffect(() => {
    if (!result || trackedRef.current) return;
    trackedRef.current = true;
    trackEvent('calculator_complete', { tool_name: 'wachstumscheck_finanz', page_slug: pageSlug });
  }, [result, pageSlug]);

  const handleDiscuss = () => {
    if (!result) return;
    const parts = [
      `${result.mandates} zusätzliche Mandate/Jahr`,
      `Quote ${result.quote} von 10`,
      `≈ ${result.perMonth} zusätzliche Erstgespräche/Monat`,
    ];
    if (referrals.trim()) parts.push(`heute ${toNumber(referrals)} Gespräche/Monat über Empfehlungen`);
    if (result.cap !== null) parts.push(`Kapazität ${result.cap}/Monat`);
    trackEvent('calculator_cta_click', { tool_name: 'wachstumscheck_finanz', page_slug: pageSlug });
    onDiscuss(parts.join(', '));
  };

  const numberField = (
    id: string,
    label: string,
    hint: string,
    value: string,
    set: (v: string) => void,
    extra: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800">{label}</label>
      <input id={id} type="number" inputMode="numeric" min={0} value={value}
        onChange={(e) => set(e.target.value)} className={inputClass} aria-describedby={`${id}-hint`} {...extra} />
      <p id={`${id}-hint`} className="text-xs text-slate-500">{hint}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5">
        {numberField('gc-mandates', 'Wie viele neue Mandate möchten Sie pro Jahr zusätzlich gewinnen?',
          'Zum Beispiel 12, also eines pro Monat.', mandates, setMandates)}
        <div className="space-y-1.5">
          <label htmlFor="gc-quote" className="block text-sm font-semibold text-slate-800">
            Von zehn Erstgesprächen: Wie viele werden heute ungefähr zu einem Mandat?
          </label>
          <div className="flex items-center gap-4">
            <input id="gc-quote" type="range" min={1} max={10} step={1} value={quote}
              onChange={(e) => setQuote(e.target.value)} className="flex-1 accent-[#686DF4]" aria-describedby="gc-quote-hint" />
            <output htmlFor="gc-quote" className="w-14 text-right font-mono text-sm font-semibold text-slate-900">{quote} / 10</output>
          </div>
          <p id="gc-quote-hint" className="text-xs text-slate-500">Ihre eigene Schätzung genügt.</p>
        </div>
        {numberField('gc-referrals', 'Wie viele Erstgespräche kommen heute pro Monat über Empfehlungen?',
          'Optional, hilft uns im Gespräch.', referrals, setReferrals)}
        {numberField('gc-capacity', 'Wie viele Erstgespräche pro Monat können Ihre Beraterinnen und Berater zusätzlich führen?',
          'Optional. Damit sehen Sie, ob das Ziel in Ihren Kalender passt.', capacity, setCapacity)}
      </div>

      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6" aria-live="polite">
        {result ? (
          <div className="space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#CACCFB]">Ihr Ergebnis</p>
            <p className="text-lg leading-relaxed">
              Für {result.mandates} zusätzliche Mandate pro Jahr brauchen Sie bei Ihrer Quote rund{' '}
              <strong className="text-white">{result.perMonth} zusätzliche Erstgespräche pro Monat</strong>.
            </p>
            {result.fits === true && <p className="text-slate-300">Das passt in Ihre Kapazität.</p>}
            {result.fits === false && (
              <p className="text-slate-300">
                Das übersteigt die Kapazität, die Sie angegeben haben. Dann lohnt sich zuerst eine strengere Vorqualifizierung.
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#CACCFB]">Ihr Ergebnis</p>
            <p className="text-slate-300">Geben Sie links die Zahl der Mandate ein, die Sie zusätzlich gewinnen möchten.</p>
          </div>
        )}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleDiscuss}
            disabled={!result}
            className="w-full min-h-12 bg-[#686DF4] text-white font-semibold text-sm py-3.5 px-6 rounded-xl hover:bg-[#4f54d6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/40 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Ergebnis in 30 Minuten besprechen <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <p className="text-xs text-slate-400">
            Die Rechnung beruht nur auf Ihren Angaben. Sie ist eine Orientierung, keine Prognose.
          </p>
        </div>
      </div>
    </div>
  );
}
