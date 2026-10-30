import React, { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, AlertCircle, CheckCircle2, ChevronDown, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { PREMIUM_EASE, DURATIONS } from '../lib/motion';
import { trackEvent } from '../lib/analytics';
import { getAttribution } from '../lib/attribution';
import { parseRoute } from '../lib/routes';
import { isConfirmedLead } from '../lib/leadPayload';
import { CONTACT_WEBHOOK_URL, SITE } from '../config/site';
import { Field, inputClass } from './ContactForm';
import Link from './Link';
import type { SegmentCode } from '../data/financeLanding';
import {
  AD_BUDGET_OPTIONS,
  EMPTY_FINANCE_LEAD,
  GOAL_OPTIONS,
  REFERRAL_OPTIONS,
  SEGMENT_OPTIONS,
  TEAM_SIZE_OPTIONS,
  TIMELINE_OPTIONS,
  buildFinanceLeadPayload,
  isLargeFirm,
  validateFinanceStep1,
  validateFinanceStep2,
  type FinanceErrors,
  type FinanceField,
  type FinanceLeadValues,
} from '../lib/financeLead';

interface FinanceLeadFormProps {
  /** Seiten-Slug, z.B. `hypothekarberatung`; landet als `finanz_<slug>` in form_location. */
  pageSlug: string;
  defaultSegment?: SegmentCode;
  /** Nicht personenbezogenes Ergebnis des Wachstumschecks, falls genutzt. */
  toolContext?: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FORM_ID = 'finance';
const FORM_NAME = 'Anfrage-Check Finanz';

function Select({
  id,
  name,
  value,
  options,
  onChange,
  invalid,
  describedBy,
  placeholder = 'Bitte wählen',
}: {
  id: string;
  name: FinanceField;
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  invalid?: boolean;
  describedBy?: string;
  placeholder?: string;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${inputClass} appearance-none pr-10 cursor-pointer ${value ? '' : 'text-slate-500'}`}
        aria-invalid={invalid}
        aria-describedby={describedBy}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} className="text-slate-900">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" aria-hidden="true" />
    </div>
  );
}

export default function FinanceLeadForm({ pageSlug, defaultSegment, toolContext }: FinanceLeadFormProps) {
  const [values, setValues] = useState<FinanceLeadValues>({ ...EMPTY_FINANCE_LEAD, segment: defaultSegment || '' });
  const [errors, setErrors] = useState<FinanceErrors>({});
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<Status>('idle');
  const [submittedName, setSubmittedName] = useState('');
  const [submittedLarge, setSubmittedLarge] = useState(false);
  const startedAtRef = useRef<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const formLocation = `finanz_${pageSlug}`;

  const trackingBase = () => ({
    form_id: FORM_ID,
    form_name: FORM_NAME,
    form_location: formLocation,
    page_type: parseRoute(window.location.pathname).pageType,
    segment: values.segment || undefined,
    team_size: values.teamSize || undefined,
  });

  const handleFirstInteraction = () => {
    if (startedAtRef.current) return;
    startedAtRef.current = new Date().toISOString();
    trackEvent('form_start', trackingBase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as FinanceField]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const focusFirstInvalid = (fields: string[]) => {
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>(`[name="${fields[0]}"]`)?.focus();
    });
  };

  const goToStep2 = () => {
    const validation = validateFinanceStep1(values);
    const invalid = Object.keys(validation);
    if (invalid.length) {
      setErrors(validation);
      trackEvent('form_error', { ...trackingBase(), error_type: 'validation', error_fields: invalid.join(','), form_step: 1 });
      focusFirstInvalid(invalid);
      return;
    }
    trackEvent('form_step_complete', { ...trackingBase(), form_step: 1, goal: values.goal || undefined, timeline: values.timeline || undefined });
    setStep(2);
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>('[name="firstName"]')?.focus();
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      goToStep2();
      return;
    }
    if (status === 'submitting') return;

    const validation = validateFinanceStep2(values);
    const invalid = Object.keys(validation);
    if (invalid.length) {
      setErrors(validation);
      trackEvent('form_error', { ...trackingBase(), error_type: 'validation', error_fields: invalid.join(','), form_step: 2 });
      focusFirstInvalid(invalid);
      return;
    }

    setStatus('submitting');
    trackEvent('form_submit', trackingBase());

    const route = parseRoute(window.location.pathname);
    const payload = buildFinanceLeadPayload(
      values,
      {
        formId: FORM_ID,
        formName: FORM_NAME,
        formLocation,
        pageType: route.pageType,
        pageUrl: `${window.location.origin}${window.location.pathname}`,
        conversionPath: route.path,
        formStartedAt: startedAtRef.current,
        submittedAt: new Date().toISOString(),
        attribution: getAttribution(),
      },
      toolContext,
    );

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
      trackEvent('generate_lead', trackingBase());
      setSubmittedName(values.firstName.trim());
      setSubmittedLarge(isLargeFirm(values));
      setStatus('success');
      setValues({ ...EMPTY_FINANCE_LEAD, segment: defaultSegment || '' });
      startedAtRef.current = null;
    } catch {
      trackEvent('form_error', { ...trackingBase(), error_type: navigator.onLine ? 'submit' : 'offline', form_step: 2 });
      setStatus('error');
    }
  };

  const describedBy = (field: FinanceField, hasHint = false) =>
    errors[field] ? `ff-${field}-error` : hasHint ? `ff-${field}-hint` : undefined;

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATIONS.medium, ease: PREMIUM_EASE }}
        className="rounded-2xl border border-[#686DF4]/25 bg-[#686DF4]/5 p-6 space-y-3"
        role="status"
      >
        <CheckCircle2 className="w-6 h-6 text-[#686DF4]" aria-hidden="true" />
        <h3 className="text-lg font-display font-semibold text-slate-950">
          Danke{submittedName ? `, ${submittedName}` : ''}. Ihre Anfrage ist bei uns.
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed">
          {submittedLarge
            ? 'Wir lesen Ihre Anfrage persönlich und melden uns innert zwei Arbeitstagen.'
            : 'Wir sehen uns Ihre Website an und melden uns innert eines Arbeitstags, um einen Termin für den Anfrage-Check zu vereinbaren.'}
        </p>
        <p className="text-sm text-slate-600">
          Lieber sofort sprechen? <a href={SITE.phoneHref} className="underline font-semibold">{SITE.phoneDisplay}</a>
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
      className="relative space-y-5"
      aria-label={FORM_NAME}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-slate-900">
          {step === 1 ? 'Ihre Beratung' : 'Ihre Kontaktdaten'}
        </p>
        <p className="text-xs font-mono text-slate-500" aria-live="polite">
          Schritt {step} von 2
        </p>
      </div>
      <div className="h-1 rounded-full bg-slate-100 overflow-hidden" aria-hidden="true">
        <div className={`h-full bg-[#686DF4] transition-all duration-300 ${step === 1 ? 'w-1/2' : 'w-full'}`} />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <Field id="ff-segment" label="Ihr Schwerpunkt" required error={errors.segment}>
            <Select id="ff-segment" name="segment" value={values.segment} options={SEGMENT_OPTIONS} onChange={handleChange}
              invalid={!!errors.segment} describedBy={describedBy('segment')} />
          </Field>
          <Field id="ff-teamSize" label="Wie viele Personen arbeiten in Ihrer Firma?" required error={errors.teamSize}>
            <Select id="ff-teamSize" name="teamSize" value={values.teamSize} options={TEAM_SIZE_OPTIONS} onChange={handleChange}
              invalid={!!errors.teamSize} describedBy={describedBy('teamSize')} />
          </Field>
          <Field id="ff-goal" label="Was möchten Sie vor allem erreichen?">
            <Select id="ff-goal" name="goal" value={values.goal} options={GOAL_OPTIONS} onChange={handleChange} />
          </Field>
          <Field id="ff-timeline" label="Wann möchten Sie starten?">
            <Select id="ff-timeline" name="timeline" value={values.timeline} options={TIMELINE_OPTIONS} onChange={handleChange} />
          </Field>
          <button
            type="submit"
            className="w-full min-h-12 bg-slate-950 text-white font-semibold text-base sm:text-sm py-3.5 px-6 rounded-xl hover:bg-[#4f54d6] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686DF4]/40 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Weiter zu Schritt 2</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
          <p className="text-xs text-slate-500">Diese Angaben helfen uns, das Gespräch vorzubereiten. Noch keine Kontaktdaten nötig.</p>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          {isLargeFirm(values) && (
            <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <Info className="w-5 h-5 shrink-0 text-[#686DF4]" aria-hidden="true" />
              <p>
                Unser Angebot ist auf Firmen bis 50 Mitarbeitende ausgerichtet. Schreiben Sie uns trotzdem, wenn es um ein
                einzelnes Team oder einen Standort geht.
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="ff-firstName" label="Vorname" required error={errors.firstName}>
              <input id="ff-firstName" name="firstName" type="text" autoComplete="given-name"
                value={values.firstName} onChange={handleChange} className={inputClass}
                aria-invalid={!!errors.firstName} aria-describedby={describedBy('firstName')} />
            </Field>
            <Field id="ff-lastName" label="Nachname" required error={errors.lastName}>
              <input id="ff-lastName" name="lastName" type="text" autoComplete="family-name"
                value={values.lastName} onChange={handleChange} className={inputClass}
                aria-invalid={!!errors.lastName} aria-describedby={describedBy('lastName')} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="ff-company" label="Firma" required error={errors.company}>
              <input id="ff-company" name="company" type="text" autoComplete="organization" placeholder="z. B. Muster Finanzberatung GmbH"
                value={values.company} onChange={handleChange} className={inputClass}
                aria-invalid={!!errors.company} aria-describedby={describedBy('company')} />
            </Field>
            <Field id="ff-companyWebsite" label="Website Ihrer Firma" error={errors.companyWebsite}
              hint="Damit wir uns Ihre Website vor dem Gespräch ansehen können.">
              <input id="ff-companyWebsite" name="companyWebsite" type="text" inputMode="url" autoComplete="url" placeholder="www.ihre-firma.ch"
                value={values.companyWebsite} onChange={handleChange} className={inputClass}
                aria-invalid={!!errors.companyWebsite} aria-describedby={describedBy('companyWebsite', true)} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="ff-email" label="Geschäftliche E-Mail" required error={errors.email}>
              <input id="ff-email" name="email" type="email" autoComplete="email" inputMode="email" placeholder="name@ihre-firma.ch"
                value={values.email} onChange={handleChange} className={inputClass}
                aria-invalid={!!errors.email} aria-describedby={describedBy('email')} />
            </Field>
            <Field id="ff-phone" label="Telefon" hint="Falls Sie lieber angerufen werden." error={errors.phone}>
              <input id="ff-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="079 123 45 67"
                value={values.phone} onChange={handleChange} className={inputClass}
                aria-invalid={!!errors.phone} aria-describedby={describedBy('phone', true)} />
            </Field>
          </div>

          <Field id="ff-adBudget" label="Werbebudget pro Monat, das Sie einsetzen könnten"
            hint="Gemeint ist das Budget für Google oder Meta, nicht unser Honorar.">
            <Select id="ff-adBudget" name="adBudget" value={values.adBudget} options={AD_BUDGET_OPTIONS} onChange={handleChange}
              describedBy={describedBy('adBudget', true)} />
          </Field>

          <Field id="ff-referral" label="Wie sind Sie auf uns aufmerksam geworden?">
            <Select id="ff-referral" name="referral" value={values.referral} options={REFERRAL_OPTIONS} onChange={handleChange} />
          </Field>

          <Field id="ff-message" label="Möchten Sie uns noch etwas mitteilen?"
            hint="Bitte keine Daten Ihrer Kundinnen und Kunden eintragen.">
            <textarea id="ff-message" name="message" rows={3} placeholder="z. B. was Sie bisher versucht haben"
              value={values.message} onChange={handleChange} className={`${inputClass} resize-y min-h-[90px]`}
              aria-describedby={describedBy('message', true)} />
          </Field>

          {/* Honeypot: für Screenreader und Tastatur ausgeblendet. */}
          <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
            <label htmlFor="ff-hp_url">Website</label>
            <input id="ff-hp_url" name="hp_url" type="text" tabIndex={-1} autoComplete="off"
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
                  <span>Anfrage-Check anfragen</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 underline-offset-2 hover:underline cursor-pointer bg-transparent border-0 p-0"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Zurück zu Schritt 1
            </button>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ihre Angaben verwenden wir nur zur Bearbeitung Ihrer Anfrage, siehe{' '}
              <Link href="/datenschutz" className="underline hover:text-slate-800">Datenschutzerklärung</Link>.
            </p>
          </div>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-900 flex items-start gap-3" role="alert">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-700" aria-hidden="true" />
              <p>
                {typeof navigator !== 'undefined' && !navigator.onLine
                  ? 'Keine Internetverbindung. Ihre Angaben bleiben erhalten.'
                  : <>Das hat leider nicht geklappt. Bitte versuchen Sie es noch einmal oder schreiben Sie direkt an{' '}
                      <a href={`mailto:${SITE.email}`} className="underline font-semibold">{SITE.email}</a>.</>}
              </p>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
