/**
 * Qualifizierende Formularstrecke («Potenzial besprechen»), im Overlay und auf /kontakt.
 * Schritte: Auswahlfragen der Strecke (src/data/leadFlows.ts) → Kontaktangaben mit Einwilligungen.
 * Tracking: form_start, form_step_complete (form_step = Fragen-ID), form_submit, generate_lead (nur nach n8n-Bestätigung),
 * form_error. Keine Personendaten im dataLayer.
 */
import React, { useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, AlertCircle, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { trackEvent } from '../lib/analytics';
import { getAttribution } from '../lib/attribution';
import { parseRoute } from '../lib/routes';
import { CONTACT_WEBHOOK_URL, SITE } from '../config/site';
import { isConfirmedLead } from '../lib/leadPayload';
import type { LeadFlow } from '../data/leadFlows';
import {
  EMPTY_CONTACT,
  MARKETING_CONSENT_TEXT,
  QUALIFIER_FORM_ID,
  buildQualifierPayload,
  validateContact,
  type Answers,
  type ContactField,
  type ContactValues,
} from '../lib/qualifierLead';
import Link from './Link';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-surface border border-slate-300 focus:border-[#686CFA] focus:ring-3 focus:ring-[#686CFA]/15 rounded-xl py-3 px-3.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors outline-none aria-[invalid=true]:border-red-400';

export default function LeadFunnel({ flow, formLocation, onDone }: { flow: LeadFlow; formLocation: string; onDone?: () => void }) {
  const total = flow.questions.length + 1;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [values, setValues] = useState<ContactValues>(EMPTY_CONTACT);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const startedAt = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const tracking = useMemo(
    () => () => ({
      form_id: QUALIFIER_FORM_ID,
      form_name: flow.title,
      form_location: formLocation,
      page_type: parseRoute(window.location.pathname).pageType,
      segment: flow.id,
    }),
    [flow, formLocation],
  );

  const start = () => {
    if (startedAt.current) return;
    startedAt.current = new Date().toISOString();
    trackEvent('form_start', tracking());
  };

  const question = step < flow.questions.length ? flow.questions[step] : null;
  const progress = Math.round(((step + (status === 'success' ? 1 : 0)) / total) * 100);

  const completeQuestion = (id: string) => {
    trackEvent('form_step_complete', { ...tracking(), form_step: id });
    setStep((s) => s + 1);
  };

  const choose = (opt: string) => {
    if (!question) return;
    start();
    if (question.multi) {
      setAnswers((prev) => {
        const cur = prev[question.id] ?? [];
        return { ...prev, [question.id]: cur.includes(opt) ? cur.filter((o) => o !== opt) : [...cur, opt] };
      });
    } else {
      setAnswers((prev) => ({ ...prev, [question.id]: [opt] }));
      window.setTimeout(() => completeQuestion(question.id), 180);
    }
  };

  const set = <K extends keyof ContactValues>(key: K, value: ContactValues[K]) => {
    start();
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key as ContactField]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    const validation = validateContact(values);
    const invalid = Object.keys(validation) as ContactField[];
    if (invalid.length) {
      setErrors(validation);
      trackEvent('form_error', { ...tracking(), error_type: 'validation', error_fields: invalid.join(',') });
      formRef.current?.querySelector<HTMLElement>(`[name="${invalid[0]}"]`)?.focus();
      return;
    }
    setStatus('submitting');
    trackEvent('form_submit', tracking());
    const route = parseRoute(window.location.pathname);
    const payload = buildQualifierPayload(flow, answers, values, {
      formId: QUALIFIER_FORM_ID,
      formName: `Formularstrecke ${flow.title}`,
      formLocation,
      pageType: route.pageType,
      pageUrl: `${window.location.origin}${window.location.pathname}`,
      conversionPath: route.path,
      formStartedAt: startedAt.current,
      submittedAt: new Date().toISOString(),
      attribution: getAttribution(),
    });
    try {
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        // text/plain vermeidet den CORS-Preflight; n8n parst den JSON-String.
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });
      if (!(await isConfirmedLead(res))) throw new Error(`Lead nicht bestätigt (HTTP ${res.status})`);
      trackEvent('generate_lead', tracking());
      setStatus('success');
    } catch {
      trackEvent('form_error', { ...tracking(), error_type: 'submit' });
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div role="status" className="py-6 text-center space-y-4">
        <span className="mx-auto w-14 h-14 rounded-full bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" aria-hidden="true" />
        </span>
        <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-950">Danke, Ihre Anfrage ist angekommen.</h3>
        <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
          Yathur Nathan meldet sich innert eines Arbeitstags persönlich bei Ihnen, mit einer ersten Einschätzung und einem
          Terminvorschlag für das kostenlose Erstgespräch.
        </p>
        {onDone && (
          <button type="button" onClick={onDone} className="text-sm font-semibold text-accent-strong hover:text-[#686CFA]">
            Schliessen
          </button>
        )}
      </div>
    );
  }

  const err = (f: ContactField) => errors[f] && (
    <p id={`lf-${f}-error`} className="mt-1 text-xs text-red-600">{errors[f]}</p>
  );
  const aria = (f: ContactField) => ({ 'aria-invalid': !!errors[f], 'aria-describedby': errors[f] ? `lf-${f}-error` : undefined });

  return (
    <div className="space-y-6">
      {/* Fortschritt */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span>Schritt {Math.min(step + 1, total)} von {total}</span>
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-slate-900">
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" /> Zurück
            </button>
          )}
        </div>
        <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
          <div className="h-full bg-[#686CFA] transition-all duration-500" style={{ width: `${Math.max(6, progress)}%` }} />
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={question ? question.id : 'contact'}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -24 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
      {question ? (
        <fieldset className="space-y-4">
          <legend className="text-xl sm:text-2xl font-display font-semibold text-slate-950 leading-snug">{question.label}</legend>
          {question.hint && <p className="text-sm text-slate-500 -mt-2">{question.hint}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {question.options.map((opt) => {
              const selected = answers[question.id]?.includes(opt) ?? false;
              return (
                <button
                  key={opt}
                  type="button"
                  role={question.multi ? 'checkbox' : 'radio'}
                  aria-checked={selected}
                  onClick={() => choose(opt)}
                  className={`group flex items-center justify-between gap-3 text-left rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-all min-h-[56px] ${
                    selected
                      ? 'border-[#686CFA] bg-[#686CFA]/8 text-slate-950 shadow-[0_0_0_1px_#686CFA]'
                      : 'border-slate-200 bg-surface text-slate-800 hover:border-[#686CFA]/50 hover:bg-[#686CFA]/[0.03]'
                  }`}
                >
                  <span>{opt}</span>
                  <span
                    className={`w-5 h-5 shrink-0 flex items-center justify-center border transition-colors ${question.multi ? 'rounded-md' : 'rounded-full'} ${
                      selected ? 'bg-[#686CFA] border-[#686CFA] text-white' : 'border-slate-300 text-transparent'
                    }`}
                    aria-hidden="true"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
          {question.multi && (
            <button
              type="button"
              disabled={!answers[question.id]?.length}
              onClick={() => completeQuestion(question.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full bg-[#686CFA] hover:bg-[#5a5fe0] disabled:bg-slate-200 disabled:text-slate-400 text-white font-display font-semibold transition-colors"
            >
              Weiter <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </fieldset>
      ) : (
        <form ref={formRef} onSubmit={submit} noValidate className="space-y-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-950 leading-snug">Wohin dürfen wir Ihre Einschätzung senden?</h3>
            <p className="mt-1 text-sm text-slate-500">Sie erhalten innert eines Arbeitstags eine persönliche Antwort.</p>
          </div>

          <fieldset>
            <legend className="block text-sm font-semibold text-slate-800 mb-1.5">Anrede <span className="text-[#686CFA]">*</span></legend>
            <div className="flex gap-2.5" role="radiogroup">
              {(['Frau', 'Herr'] as const).map((s) => (
                <label key={s} className={`flex-1 sm:flex-none cursor-pointer rounded-xl border px-5 py-2.5 text-sm font-semibold text-center transition-colors ${values.salutation === s ? 'border-[#686CFA] bg-[#686CFA]/8 text-slate-950' : 'border-slate-300 text-slate-700 hover:border-[#686CFA]/50'}`}>
                  <input type="radio" name="salutation" value={s} checked={values.salutation === s} onChange={() => set('salutation', s)} className="sr-only" {...aria('salutation')} />
                  {s}
                </label>
              ))}
            </div>
            {err('salutation')}
          </fieldset>

          <div>
            <label htmlFor="lf-company" className="block text-sm font-semibold text-slate-800 mb-1.5">Unternehmen <span className="text-[#686CFA]">*</span></label>
            <input id="lf-company" name="company" autoComplete="organization" className={inputClass} value={values.company} onChange={(e) => set('company', e.target.value)} {...aria('company')} />
            {err('company')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lf-firstName" className="block text-sm font-semibold text-slate-800 mb-1.5">Vorname <span className="text-[#686CFA]">*</span></label>
              <input id="lf-firstName" name="firstName" autoComplete="given-name" className={inputClass} value={values.firstName} onChange={(e) => set('firstName', e.target.value)} {...aria('firstName')} />
              {err('firstName')}
            </div>
            <div>
              <label htmlFor="lf-lastName" className="block text-sm font-semibold text-slate-800 mb-1.5">Nachname <span className="text-[#686CFA]">*</span></label>
              <input id="lf-lastName" name="lastName" autoComplete="family-name" className={inputClass} value={values.lastName} onChange={(e) => set('lastName', e.target.value)} {...aria('lastName')} />
              {err('lastName')}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lf-email" className="block text-sm font-semibold text-slate-800 mb-1.5">E-Mail-Adresse <span className="text-[#686CFA]">*</span></label>
              <input id="lf-email" name="email" type="email" inputMode="email" autoComplete="email" className={inputClass} value={values.email} onChange={(e) => set('email', e.target.value)} {...aria('email')} />
              {err('email')}
            </div>
            <div>
              <label htmlFor="lf-phone" className="block text-sm font-semibold text-slate-800 mb-1.5">Telefonnummer <span className="font-normal text-slate-400">(optional)</span></label>
              <input id="lf-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+41" className={inputClass} value={values.phone} onChange={(e) => set('phone', e.target.value)} {...aria('phone')} />
              {err('phone')}
            </div>
          </div>

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="lf-hp">Website</label>
            <input id="lf-hp" name="hp_url" tabIndex={-1} autoComplete="off" value={values.hp_url} onChange={(e) => setValues((v) => ({ ...v, hp_url: e.target.value }))} />
          </div>

          <div className="space-y-3 pt-1">
            <label className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed cursor-pointer">
              <input type="checkbox" name="privacyConsent" checked={values.privacyConsent} onChange={(e) => set('privacyConsent', e.target.checked)} className="mt-0.5 w-4.5 h-4.5 shrink-0 accent-[#686CFA]" {...aria('privacyConsent')} />
              <span>
                Ich bin damit einverstanden, dass performanceboost meine Angaben zur Bearbeitung meiner Anfrage speichert und verwendet. Details in der{' '}
                <Link href="/datenschutz" target="_blank" className="underline underline-offset-2 hover:text-accent-strong">Datenschutzerklärung</Link>. <span className="text-[#686CFA]">*</span>
              </span>
            </label>
            {err('privacyConsent')}
            <label className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed cursor-pointer">
              <input type="checkbox" name="marketingConsent" checked={values.marketingConsent} onChange={(e) => set('marketingConsent', e.target.checked)} className="mt-0.5 w-4.5 h-4.5 shrink-0 accent-[#686CFA]" />
              <span>{MARKETING_CONSENT_TEXT} <span className="text-slate-400">(optional)</span></span>
            </label>
          </div>

          {status === 'error' && (
            <p role="alert" className="flex gap-2 rounded-xl bg-red-50 border border-red-100 p-3 text-sm text-red-700">
              <AlertCircle className="w-4.5 h-4.5 shrink-0 mt-0.5" aria-hidden="true" />
              Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an {SITE.email}.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full inline-flex items-center justify-center gap-2 min-h-12 px-7 rounded-full bg-[#686CFA] hover:bg-[#5a5fe0] disabled:opacity-70 text-white font-display font-semibold transition-colors whitespace-nowrap"
          >
            {status === 'submitting' ? 'Wird gesendet …' : 'Anfrage senden'} {status !== 'submitting' && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
          </button>
          <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <Lock className="w-3.5 h-3.5" aria-hidden="true" /> Kostenlos und unverbindlich. Keine Weitergabe an Dritte zu Werbezwecken.
          </p>
        </form>
      )}
      </motion.div>
      </AnimatePresence>
    </div>
  );
}
