/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PREMIUM_EASE, DURATIONS } from '../lib/motion';
import { trackEvent } from '../lib/analytics';
import { getAttribution } from '../lib/attribution';
import { parseRoute } from '../lib/routes';
import { CONTACT_WEBHOOK_URL, SITE } from '../config/site';
import Link from './Link';
import {
  EMPTY_LEAD_FORM,
  REVENUE_OPTIONS,
  buildLeadPayload,
  isConfirmedLead,
  validateLead,
  type LeadField,
  type LeadFormValues,
} from '../lib/leadPayload';

interface ContactFormProps {
  onSuccess?: () => void;
  formName?: string;
  /** Wo das Formular eingebettet ist, z.B. `kontakt_seite` oder `modal`. */
  formLocation?: string;
  submitButtonText?: string;
  className?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full bg-white border border-slate-300 focus:border-[#686DF4] focus:ring-3 focus:ring-[#686DF4]/15 rounded-xl py-3 px-3.5 text-base sm:text-sm text-slate-900 placeholder:text-slate-400 transition-colors outline-none aria-[invalid=true]:border-red-400';

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-semibold text-slate-800">
        {label}
        {required ? (
          <span className="text-[#686DF4] ml-0.5" aria-hidden="true">*</span>
        ) : (
          <span className="ml-1.5 text-xs font-normal text-slate-500">(optional)</span>
        )}
      </label>
      {children}
      {hint && !error && <p id={`${id}-hint`} className="text-xs text-slate-500">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({
  onSuccess,
  formName = 'Kontaktformular',
  formLocation = 'kontakt_seite',
  submitButtonText = 'Anfrage senden',
  className = '',
}: ContactFormProps) {
  const [values, setValues] = useState<LeadFormValues>(EMPTY_LEAD_FORM);
  const [errors, setErrors] = useState<Partial<Record<LeadField, string>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const startedAtRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const trackingBase = () => ({
    form_id: 'contact',
    form_name: formName,
    form_location: formLocation,
    page_type: parseRoute(window.location.pathname).pageType,
  });

  const handleFirstInteraction = () => {
    if (startedAtRef.current) return;
    startedAtRef.current = new Date().toISOString();
    trackEvent('form_start', trackingBase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as LeadField]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const validation = validateLead(values);
    const invalid = Object.keys(validation) as LeadField[];
    if (invalid.length) {
      setErrors(validation);
      trackEvent('form_error', { ...trackingBase(), error_type: 'validation', error_fields: invalid.join(',') });
      formRef.current?.querySelector<HTMLElement>(`[name="${invalid[0]}"]`)?.focus();
      return;
    }

    setStatus('submitting');
    trackEvent('form_submit', { ...trackingBase(), annual_revenue: values.annualRevenue });

    const route = parseRoute(window.location.pathname);
    const payload = buildLeadPayload(values, {
      formId: 'contact',
      formName,
      formLocation,
      pageType: route.pageType,
      pageUrl: `${window.location.origin}${window.location.pathname}`,
      conversionPath: route.path,
      formStartedAt: startedAtRef.current,
      submittedAt: new Date().toISOString(),
      attribution: getAttribution(),
    });

    try {
      const response = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        // text/plain vermeidet den CORS-Preflight; n8n parst den JSON-String.
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });

      if (!(await isConfirmedLead(response))) {
        throw new Error(`Lead nicht bestätigt (HTTP ${response.status})`);
      }

      // Primäre Conversion: erst nach Speicherbestätigung durch n8n.
      trackEvent('generate_lead', { ...trackingBase(), annual_revenue: values.annualRevenue });
      setStatus('success');
      setValues(EMPTY_LEAD_FORM);
      startedAtRef.current = null;
      onSuccess?.();
    } catch {
      trackEvent('form_error', { ...trackingBase(), error_type: 'submit' });
      setStatus('error');
    }
  };

  const describedBy = (field: LeadField, hasHint = false) =>
    errors[field] ? `form-${field}-error` : hasHint ? `form-${field}-hint` : undefined;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
        className={`rounded-2xl border border-[#686DF4]/25 bg-[#686DF4]/5 p-6 space-y-3 ${className}`}
        role="status"
        id="form-feedback-success"
      >
        <CheckCircle2 className="w-6 h-6 text-[#686DF4]" aria-hidden="true" />
        <h3 className="text-lg font-display font-semibold text-slate-950">Danke, Ihre Anfrage ist bei uns angekommen.</h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          Yathur Nathan meldet sich innert eines Arbeitstags persönlich bei Ihnen, per E-Mail oder telefonisch. Im
          Erstgespräch klären wir Ihre Ausgangslage und ob eine Zusammenarbeit sinnvoll ist. Das Gespräch ist
          kostenlos und unverbindlich.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onFocusCapture={handleFirstInteraction}
      noValidate
      className={`relative space-y-4 ${className}`}
      aria-label={formName}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="form-firstName" label="Vorname" required error={errors.firstName}>
          <input id="form-firstName" name="firstName" type="text" autoComplete="given-name" required
            value={values.firstName} onChange={handleChange} className={inputClass}
            aria-invalid={!!errors.firstName} aria-describedby={describedBy('firstName')} />
        </Field>
        <Field id="form-lastName" label="Nachname" required error={errors.lastName}>
          <input id="form-lastName" name="lastName" type="text" autoComplete="family-name" required
            value={values.lastName} onChange={handleChange} className={inputClass}
            aria-invalid={!!errors.lastName} aria-describedby={describedBy('lastName')} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="form-company" label="Unternehmen" required error={errors.company}>
          <input id="form-company" name="company" type="text" autoComplete="organization" required
            value={values.company} onChange={handleChange} className={inputClass}
            aria-invalid={!!errors.company} aria-describedby={describedBy('company')} />
        </Field>
        <Field id="form-annualRevenue" label="Jahresumsatz" required error={errors.annualRevenue}>
          <div className="relative">
            <select id="form-annualRevenue" name="annualRevenue" required
              value={values.annualRevenue} onChange={handleChange}
              className={`${inputClass} appearance-none pr-10 cursor-pointer ${values.annualRevenue ? '' : 'text-slate-500'}`}
              aria-invalid={!!errors.annualRevenue} aria-describedby={describedBy('annualRevenue')}>
              <option value="" disabled>Bitte wählen</option>
              {REVENUE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} className="text-slate-900">{o.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" aria-hidden="true" />
          </div>
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field id="form-email" label="Geschäftliche E-Mail" required error={errors.email}>
          <input id="form-email" name="email" type="email" autoComplete="email" inputMode="email" required
            value={values.email} onChange={handleChange} className={inputClass}
            aria-invalid={!!errors.email} aria-describedby={describedBy('email')} />
        </Field>
        <Field id="form-phone" label="Telefon" hint="Falls Sie lieber einen Rückruf möchten." error={errors.phone}>
          <input id="form-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel"
            value={values.phone} onChange={handleChange} className={inputClass} placeholder="+41"
            aria-invalid={!!errors.phone} aria-describedby={describedBy('phone', true)} />
        </Field>
      </div>

      <Field id="form-message" label="Worum geht es?" required
        hint="Zum Beispiel: Wir schalten Google Ads, aber die Anfragen passen selten."
        error={errors.message}>
        <textarea id="form-message" name="message" rows={4} required
          value={values.message} onChange={handleChange} className={`${inputClass} resize-y min-h-[110px]`}
          aria-invalid={!!errors.message} aria-describedby={describedBy('message', true)} />
      </Field>

      {/* Honeypot: für Screenreader und Tastatur ausgeblendet. */}
      <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
        <label htmlFor="form-hp_url">Website</label>
        <input id="form-hp_url" name="hp_url" type="text" tabIndex={-1} autoComplete="off"
          value={values.hp_url} onChange={handleChange} />
      </div>

      <div className="pt-1 space-y-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full min-h-12 bg-slate-950 text-white font-semibold text-base sm:text-sm py-3.5 px-6 rounded-xl hover:bg-[#4f54d6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/40 transition-colors cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-wait"
        >
          {status === 'submitting' ? (
            <>
              <span className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin" aria-hidden="true" />
              <span>Wird gesendet …</span>
            </>
          ) : (
            <>
              <span>{submitButtonText}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="text-xs text-slate-500 leading-relaxed">
          Antwort innert eines Arbeitstags. Ihre Angaben verwenden wir nur zur Bearbeitung Ihrer Anfrage, siehe{' '}
          <Link href="/datenschutz" className="underline hover:text-slate-800">Datenschutzerklärung</Link>.
        </p>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
            className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-900 flex items-start gap-3"
            role="alert"
            id="form-feedback-error"
          >
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" aria-hidden="true" />
            <div className="space-y-1">
              <p className="font-semibold">Ihre Anfrage konnte leider nicht gesendet werden.</p>
              <p className="text-red-800">
                Ihre Eingaben sind noch da. Bitte versuchen Sie es erneut, oder erreichen Sie uns direkt unter{' '}
                <a href={SITE.phoneHref} className="underline font-semibold">{SITE.phoneDisplay}</a> bzw.{' '}
                <a href={`mailto:${SITE.email}`} className="underline font-semibold">{SITE.email}</a>.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
