/**
 * Conversion-Bausteine für Unterseiten (CRO-Landingpage-Muster):
 * - LeadFormSection: eingebettetes Anfrageformular (#anfrage) mit Erwartungen ans Erstgespräch und Ansprechperson
 * - HeroTrust: Vertrauenszeile unter dem Hero-CTA
 * - goToLead(): Haupt-CTA springt zum Formular auf der Seite, sonst öffnet sich das Modal
 * - StickyMobileCta: fixierter CTA-Balken auf Mobile, ausgeblendet im Hero und wenn das Formular sichtbar ist
 * Payload und n8n bleiben unverändert (ContactForm, nur formLocation unterscheidet die Einbettung).
 */
import React, { useEffect, useState } from 'react';
import { ArrowRight, Check, Clock, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import ContactForm from '../ContactForm';
import { SITE } from '../../config/site';
import { trackEvent } from '../../lib/analytics';

export const LEAD_ANCHOR = 'anfrage';

/** Scrollt zum eingebetteten Formular; gibt false zurück, wenn die Seite keins hat. */
export function goToLead(): boolean {
  if (typeof document === 'undefined') return false;
  const el = document.getElementById(LEAD_ANCHOR);
  if (!el) return false;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => el.querySelector<HTMLInputElement>('input:not([type=hidden])')?.focus({ preventScroll: true }), 600);
  return true;
}

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
          <Icon className="w-4 h-4 text-[#696EEF]" aria-hidden="true" /> {text}
        </li>
      ))}
    </ul>
  );
}

export function LeadFormSection({
  title = 'Lassen Sie uns über Ihr Potenzial sprechen.',
  intro = 'Schildern Sie kurz Ihre Ausgangslage. Sie erhalten innert eines Arbeitstags eine persönliche Antwort und einen Terminvorschlag für ein kostenloses Erstgespräch.',
  formLocation,
  points = [
    'Wir schauen uns Ihre heutige Situation und Ihre Ziele an.',
    'Sie erfahren, wo wir den grössten Hebel sehen, und ob wir der richtige Partner sind.',
    'Danach entscheiden Sie in Ruhe. Kein Verkaufsdruck, keine Verpflichtung.',
  ],
}: {
  title?: string;
  intro?: string;
  formLocation: string;
  points?: string[];
}) {
  return (
    <section id={LEAD_ANCHOR} className="scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
          <div className="lg:col-span-5 bg-slate-950 text-white p-7 sm:p-10 flex flex-col">
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
                  href={SITE.phoneHref}
                  onClick={() => trackEvent('phone_click', { cta_location: formLocation })}
                  className="mt-1 inline-flex items-center gap-1.5 text-white hover:text-[#9fa2f7] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" /> {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 p-6 sm:p-10">
            <ContactForm formName="Anfrage Unterseite" formLocation={formLocation} submitButtonText="Potenzial besprechen" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Fixierter CTA-Balken auf Mobile. Erscheint nach dem Hero, verschwindet beim Formular. */
export const StickyMobileCta: React.FC<{ onFallback: () => void }> = ({ onFallback }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById(LEAD_ANCHOR);
      const formTop = form ? form.getBoundingClientRect().top : Infinity;
      const formVisible = formTop < window.innerHeight && (form?.getBoundingClientRect().bottom ?? 0) > 0;
      setVisible(window.scrollY > 520 && !formVisible);
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
            trackEvent('cta_click', { cta_location: 'sticky_mobile', cta_target: document.getElementById(LEAD_ANCHOR) ? 'formular_inline' : 'kontakt' });
            if (!goToLead()) onFallback();
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 min-h-12 rounded-full bg-[#696EEF] hover:bg-[#5a5fe0] text-white font-display font-semibold whitespace-nowrap"
        >
          Potenzial besprechen <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
        <a
          href={SITE.phoneHref}
          tabIndex={visible ? 0 : -1}
          onClick={() => trackEvent('phone_click', { cta_location: 'sticky_mobile' })}
          aria-label={`Anrufen: ${SITE.phoneDisplay}`}
          className="w-12 h-12 shrink-0 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-800"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};
