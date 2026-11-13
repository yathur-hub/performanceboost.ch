/**
 * Conversion-Bausteine für Unterseiten (CRO-Landingpage-Muster):
 * - LeadCtaSection: Abschluss-Block mit Erwartungen ans Erstgespräch, Ansprechperson und Button zum Overlay
 * - HeroTrust: Vertrauenszeile unter dem Hero-CTA
 * - OpenLeadButton: öffnet das Overlay mit der qualifizierenden Formularstrecke (src/components/LeadFunnel.tsx)
 * - StickyMobileCta: fixierter CTA-Balken auf Mobile, ausgeblendet im Hero und wenn das Formular sichtbar ist
 * Alle CTAs öffnen dasselbe Overlay; die Strecke richtet sich nach der aktuellen Seite.
 */
import { Visual3D, type VisualId } from '../Visual3D';
import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Clock, ListChecks, Send, ShieldCheck, UserCheck, Mail } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';
import { SITE } from '../../config/site';
import { trackEvent } from '../../lib/analytics';

export function HeroTrust({ className = '', align = 'left' }: { className?: string; align?: 'left' | 'center' }) {
  const items = [
    { icon: UserCheck, text: 'Persönlich vom Inhaber' },
    { icon: Clock, text: 'Antwort innert eines Arbeitstags' },
    { icon: ShieldCheck, text: 'Erstgespräch kostenlos' },
  ];
  return (
    <ul className={`flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-600 ${align === 'center' ? 'justify-center' : ''} ${className}`}>
      {items.map(({ icon: Icon, text }) => (
        <li key={text} className="inline-flex items-center gap-1.5">
          <Icon className="w-4 h-4 text-[#686CFA]" aria-hidden="true" /> {text}
        </li>
      ))}
    </ul>
  );
}

export function LeadCtaSection({
  title = 'Lassen Sie uns über Ihre Ziele sprechen.',
  intro = 'Schildern Sie kurz Ihre Ausgangslage. Sie erhalten innert eines Arbeitstags eine persönliche Antwort und einen Terminvorschlag für ein kostenloses Erstgespräch.',
  formLocation,
  points = [
    'Wir schauen uns Ihre heutige Situation und Ihre Ziele an.',
    'Sie erfahren, wo wir den grössten Hebel sehen, und ob wir der richtige Partner sind.',
    'Danach entscheiden Sie in Ruhe. Kein Verkaufsdruck, keine Verpflichtung.',
  ],
  visual,
  ctaLabel,
}: {
  title?: string;
  intro?: string;
  formLocation: string;
  points?: string[];
  /** Dekoratives 3D-Objekt oben in der dunklen Spalte. */
  visual?: VisualId;
  /** Beschriftung des Buttons, Standard «Potenzial besprechen». */
  ctaLabel?: string;
}) {
  return (
    <section id="lead-cta" className="scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
          <div className="lg:col-span-5 bg-slate-950 text-white p-7 sm:p-10 flex flex-col">
            {visual && (
              <div className="h-24 sm:h-32 mb-6 flex items-end">
                <Visual3D id={visual} shadow="dark" sizes="(min-width: 640px) 200px, 150px" className="h-full w-auto max-w-[220px]" />
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl font-display font-semibold leading-tight">{title}</h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">{intro}</p>
            <p className="hidden sm:block mt-8 text-sm font-semibold text-white">So läuft das Erstgespräch ab</p>
            <ul className="hidden sm:block mt-3 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                  <Check className="w-4.5 h-4.5 text-[#9fa2f7] shrink-0 mt-0.5" aria-hidden="true" /> {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6 sm:pt-8 mt-6 sm:mt-auto flex items-center gap-4 border-t border-white/10">
              <img
                src={SITE.portraitUrl}
                alt="Yathur Nathan"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-2xl object-cover border border-white/15"
              />
              <div className="text-sm">
                <p className="font-display font-semibold">Yathur Nathan</p>
                <p className="text-slate-400">Inhaber, Ihr direkter Ansprechpartner</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-1 inline-flex items-center gap-1.5 text-white hover:text-[#9fa2f7] font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" /> {SITE.email}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center">
            <p className="text-lg font-display font-semibold text-slate-900">In drei Schritten zum Erstgespräch</p>
            <ol className="mt-5 space-y-4">
              {[
                { icon: ListChecks, title: 'Ein paar kurze Fragen', text: 'Zu Ihrer Situation und Ihren Zielen, mit Auswahlantworten. Dauert rund eine Minute.' },
                { icon: Send, title: 'Kontaktangaben', text: 'Damit wir Ihnen persönlich antworten können.' },
                { icon: Clock, title: 'Antwort innert eines Arbeitstags', text: 'Mit einer ersten Einschätzung und einem Terminvorschlag.' },
              ].map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="w-10 h-10 rounded-xl bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center shrink-0">
                    <s.icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900">{i + 1}. {s.title}</span>
                    <span className="block text-sm text-slate-600 leading-relaxed">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-7">
              <OpenLeadButton location={formLocation} label={ctaLabel} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Öffnet das Overlay mit der Formularstrecke der aktuellen Seite. */
export function OpenLeadButton({ location, label = 'Potenzial besprechen' }: { location: string; label?: string }) {
  const { openContactModal } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => {
        trackEvent('cta_click', { cta_location: location, cta_target: 'overlay' });
        openContactModal();
      }}
      className="btn-press w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 px-8 rounded-full bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/40"
    >
      {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </button>
  );
}

/** Fixierter CTA-Balken auf Mobile. Erscheint nach dem Hero, verschwindet beim Abschluss-Block. */
export const StickyMobileCta: React.FC<{ onFallback: () => void; label?: string }> = ({ onFallback, label = 'Gespräch anfragen' }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById('lead-cta');
      const formTop = form ? form.getBoundingClientRect().top : Infinity;
      const formVisible = formTop < window.innerHeight && (form?.getBoundingClientRect().bottom ?? 0) > 0;
      const footer = document.getElementById('site-footer');
      const footerVisible = footer ? footer.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(window.scrollY > 520 && !formVisible && !footerVisible);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 bg-white/95 backdrop-blur border-t border-slate-200 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex gap-2.5">
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={() => {
            trackEvent('cta_click', { cta_location: 'sticky_mobile', cta_target: 'overlay' });
            onFallback();
          }}
          className="btn-press flex-1 inline-flex items-center justify-center gap-2 min-h-12 rounded-full bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold whitespace-nowrap"
        >
          {label} <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
