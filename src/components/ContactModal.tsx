/**
 * Overlay «Potenzial besprechen» mit qualifizierender Formularstrecke.
 * Die Strecke wird beim Öffnen aus dem aktuellen Pfad bestimmt (src/data/leadFlows.ts).
 * Mobil als Vollbild-Sheet, ab sm als zentriertes Fenster. Escape und Klick auf den Hintergrund schliessen.
 */
import React, { useEffect, useMemo, useRef } from 'react';
import { X, Phone, Clock, ShieldCheck, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LeadFunnel from './LeadFunnel';
import { SITE } from '../config/site';
import { resolveFlow } from '../data/leadFlows';
import { trackEvent } from '../lib/analytics';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/** form_location je Seite, z. B. `overlay_leistungen_marketing-automation`. */
export function overlayLocation(pathname: string): string {
  const p = pathname.replace(/\/+$/, '').replace(/^\//, '').replace(/\//g, '_');
  return `overlay_${p || 'startseite'}`.slice(0, 120);
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const { flow, location } = useMemo(() => {
    if (!isOpen || typeof window === 'undefined') return { flow: resolveFlow('/'), location: 'overlay' };
    return { flow: resolveFlow(window.location.pathname), location: overlayLocation(window.location.pathname) };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const t = window.setTimeout(() => modalRef.current?.focus(), 50);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalStyle;
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-[10000] w-full sm:max-w-4xl h-[100dvh] sm:h-auto sm:max-h-[92vh] bg-white sm:rounded-3xl shadow-2xl flex flex-col sm:flex-row overflow-hidden outline-none"
          >
            {/* Seitenleiste (ab sm): Ansprechperson und Versprechen */}
            <aside className="hidden sm:flex sm:w-[280px] shrink-0 flex-col bg-slate-950 text-white p-7">
              <img
                src={SITE.portraitUrl}
                alt="Yathur Nathan"
                width={72}
                height={72}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-2xl object-cover border border-white/15"
              />
              <p className="mt-4 font-display font-semibold">Yathur Nathan</p>
              <p className="text-xs text-slate-400">Inhaber, Ihr direkter Ansprechpartner</p>
              <ul className="mt-8 space-y-4 text-sm text-slate-300">
                <li className="flex gap-2.5"><Clock className="w-4.5 h-4.5 text-[#9fa2f7] shrink-0" aria-hidden="true" /> Persönliche Antwort innert eines Arbeitstags</li>
                <li className="flex gap-2.5"><UserCheck className="w-4.5 h-4.5 text-[#9fa2f7] shrink-0" aria-hidden="true" /> Erstgespräch mit dem Inhaber, 30 Minuten</li>
                <li className="flex gap-2.5"><ShieldCheck className="w-4.5 h-4.5 text-[#9fa2f7] shrink-0" aria-hidden="true" /> Kostenlos und unverbindlich</li>
              </ul>
              <a
                href={SITE.phoneHref}
                onClick={() => trackEvent('phone_click', { cta_location: 'overlay' })}
                className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#9fa2f7]"
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> Lieber anrufen? {SITE.phoneDisplay}
              </a>
            </aside>

            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between gap-4 px-5 sm:px-8 pt-5 sm:pt-7">
                <h2 id="lead-modal-title" className="text-sm font-semibold text-slate-500">
                  {flow.title} <span className="text-slate-300">·</span> ca. 1 Minute
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Schliessen"
                  className="w-9 h-9 shrink-0 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#696EEF]"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-5 sm:px-8 pt-5 pb-8">
                <LeadFunnel flow={flow} formLocation={location} onDone={onClose} />
              </div>
              <a
                href={SITE.phoneHref}
                onClick={() => trackEvent('phone_click', { cta_location: 'overlay' })}
                className="sm:hidden border-t border-slate-100 px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] text-sm text-slate-600 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#696EEF]" aria-hidden="true" /> Lieber anrufen? <span className="font-semibold text-slate-900">{SITE.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
