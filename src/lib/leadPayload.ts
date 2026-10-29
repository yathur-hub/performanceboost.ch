import { flatCampaignFields, type Attribution } from './attribution';

export const REVENUE_OPTIONS = [
  { value: 'under_1m', label: 'Unter CHF 1 Mio.' },
  { value: '1m_5m', label: 'CHF 1 bis 5 Mio.' },
  { value: '5m_20m', label: 'CHF 5 bis 20 Mio.' },
  { value: 'over_20m', label: 'Über CHF 20 Mio.' },
] as const;

export type RevenueBand = (typeof REVENUE_OPTIONS)[number]['value'];

export interface LeadFormValues {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  annualRevenue: RevenueBand | '';
  message: string;
  /** Honeypot: für Menschen unsichtbar, muss leer bleiben. */
  hp_url: string;
}

export const EMPTY_LEAD_FORM: LeadFormValues = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  annualRevenue: '',
  message: '',
  hp_url: '',
};

export type LeadField = Exclude<keyof LeadFormValues, 'hp_url'>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Gibt pro ungültigem Feld eine verständliche Fehlermeldung zurück. */
export function validateLead(values: LeadFormValues): Partial<Record<LeadField, string>> {
  const errors: Partial<Record<LeadField, string>> = {};
  if (!values.firstName.trim()) errors.firstName = 'Bitte geben Sie Ihren Vornamen an.';
  if (!values.lastName.trim()) errors.lastName = 'Bitte geben Sie Ihren Nachnamen an.';
  if (!values.company.trim()) errors.company = 'Bitte geben Sie Ihr Unternehmen an.';
  if (!values.email.trim()) errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'Diese E-Mail-Adresse scheint unvollständig zu sein.';
  if (values.phone.trim() && values.phone.replace(/[^\d]/g, '').length < 7) {
    errors.phone = 'Bitte prüfen Sie die Telefonnummer oder lassen Sie das Feld leer.';
  }
  if (!values.annualRevenue) errors.annualRevenue = 'Bitte wählen Sie eine Grössenordnung.';
  if (values.message.trim().length < 10) errors.message = 'Bitte beschreiben Sie Ihr Anliegen in ein, zwei Sätzen.';
  return errors;
}

export interface LeadContext {
  formId: string;
  formName: string;
  formLocation: string;
  pageType: string;
  pageUrl: string;
  conversionPath: string;
  formStartedAt: string | null;
  submittedAt: string;
  attribution: Attribution;
}

/** Baut den Request-Body gemäss docs/lead-payload-v3.md. */
export function buildLeadPayload(values: LeadFormValues, ctx: LeadContext) {
  return {
    formId: ctx.formId,
    formName: ctx.formName,
    formLocation: ctx.formLocation,
    source: ctx.formLocation,
    pageType: ctx.pageType,
    salutation: '',
    firstName: values.firstName.trim(),
    lastName: values.lastName.trim(),
    company: values.company.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    annualRevenue: values.annualRevenue,
    message: values.message.trim(),
    website: 'performanceboost.ch',
    pageUrl: ctx.pageUrl,
    conversionPath: ctx.conversionPath,
    submittedAt: ctx.submittedAt,
    formStartedAt: ctx.formStartedAt,
    hp_url: values.hp_url,
    ...flatCampaignFields(ctx.attribution),
    attribution: ctx.attribution,
  };
}

/** Nur eine ausdrückliche Erfolgsbestätigung von n8n zählt als verarbeiteter Lead. */
export async function isConfirmedLead(response: Response): Promise<boolean> {
  if (!response.ok) return false;
  try {
    const body = await response.json();
    return body?.success === true;
  } catch {
    return false;
  }
}
