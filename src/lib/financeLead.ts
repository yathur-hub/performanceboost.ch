import { flatCampaignFields } from './attribution';
import type { LeadContext } from './leadPayload';
import type { SegmentCode } from '../data/financeLanding';

export const SEGMENT_OPTIONS: { value: SegmentCode; label: string }[] = [
  { value: 'HY', label: 'Hypothek & Eigenheim' },
  { value: 'VS', label: 'Vorsorge & Pensionsplanung' },
  { value: 'FP', label: 'Finanzplanung' },
  { value: 'VM', label: 'Versicherung (Broker)' },
  { value: 'GA', label: 'Versicherung (Generalagentur)' },
  { value: 'VV', label: 'Vermögensverwaltung' },
  { value: 'TR', label: 'Treuhand mit Finanzberatung' },
  { value: 'other', label: 'Anderes' },
];

export const TEAM_SIZE_OPTIONS = [
  { value: '1', label: 'Nur ich' },
  { value: '2-5', label: '2–5' },
  { value: '6-15', label: '6–15' },
  { value: '16-30', label: '16–30' },
  { value: '31-50', label: '31–50' },
  { value: '50+', label: 'mehr als 50' },
] as const;

export const GOAL_OPTIONS = [
  { value: 'more_meetings', label: 'Mehr Erstgespräche' },
  { value: 'better_leads', label: 'Bessere Anfragen statt mehr' },
  { value: 'measurement', label: 'Wissen, was mein Marketing bringt' },
  { value: 'new_topic', label: 'Neues Thema oder neue Region bekannt machen' },
  { value: 'other', label: 'Anderes' },
] as const;

export const TIMELINE_OPTIONS = [
  { value: '0-3m', label: 'In den nächsten 3 Monaten' },
  { value: '3-6m', label: 'In 3–6 Monaten' },
  { value: 'info', label: 'Ich informiere mich erst' },
] as const;

/** Mediabudget des Kunden (an Google/Meta), nicht das Honorar. */
export const AD_BUDGET_OPTIONS = [
  { value: 'under_1k', label: "Unter CHF 1'000" },
  { value: '1k_2_5k', label: "CHF 1'000–2'500" },
  { value: '2_5k_5k', label: "CHF 2'500–5'000" },
  { value: 'over_5k', label: "Über CHF 5'000" },
  { value: 'open', label: 'Noch offen' },
] as const;

export const REFERRAL_OPTIONS = [
  { value: 'google', label: 'Google-Suche' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'empfehlung', label: 'Empfehlung' },
  { value: 'nachricht_pb', label: 'Nachricht von performanceboost' },
  { value: 'other', label: 'Anderes' },
] as const;

export interface FinanceLeadValues {
  segment: SegmentCode | '';
  teamSize: string;
  goal: string;
  timeline: string;
  firstName: string;
  lastName: string;
  company: string;
  companyWebsite: string;
  email: string;
  phone: string;
  adBudget: string;
  referral: string;
  message: string;
  /** Honeypot: für Menschen unsichtbar, muss leer bleiben. */
  hp_url: string;
}

export const EMPTY_FINANCE_LEAD: FinanceLeadValues = {
  segment: '',
  teamSize: '',
  goal: '',
  timeline: '',
  firstName: '',
  lastName: '',
  company: '',
  companyWebsite: '',
  email: '',
  phone: '',
  adBudget: '',
  referral: '',
  message: '',
  hp_url: '',
};

export type FinanceField = Exclude<keyof FinanceLeadValues, 'hp_url'>;
export type FinanceErrors = Partial<Record<FinanceField, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DOMAIN_RE = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i;

export function validateFinanceStep1(v: FinanceLeadValues): FinanceErrors {
  const errors: FinanceErrors = {};
  if (!v.segment) errors.segment = 'Bitte wählen Sie Ihren Schwerpunkt.';
  if (!v.teamSize) errors.teamSize = 'Bitte wählen Sie eine Grösse.';
  return errors;
}

export function validateFinanceStep2(v: FinanceLeadValues): FinanceErrors {
  const errors: FinanceErrors = {};
  if (!v.firstName.trim()) errors.firstName = 'Bitte geben Sie Ihren Vornamen ein.';
  if (!v.lastName.trim()) errors.lastName = 'Bitte geben Sie Ihren Nachnamen ein.';
  if (!v.company.trim()) errors.company = 'Bitte geben Sie den Namen Ihrer Firma ein.';
  if (v.companyWebsite.trim() && !DOMAIN_RE.test(v.companyWebsite.trim())) {
    errors.companyWebsite = 'Diese Adresse sieht unvollständig aus.';
  }
  if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Bitte prüfen Sie die E-Mail-Adresse.';
  if (v.phone.trim() && v.phone.replace(/[^\d]/g, '').length < 7) errors.phone = 'Bitte prüfen Sie die Nummer.';
  return errors;
}

export const isLargeFirm = (v: FinanceLeadValues) => v.teamSize === '50+';

const labelOf = (options: readonly { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label || '–';

/**
 * Lesbare Zusammenfassung für Mail und Cockpit. Der Workflow v3 übernimmt `message` unverändert,
 * deshalb landen die Qualifizierungsangaben ohne Schemaänderung bei der Person, die antwortet.
 */
export function composeFinanceMessage(v: FinanceLeadValues, toolContext?: string): string {
  const lines = [
    'Anfrage-Check (Finanz-Landingpage)',
    `Schwerpunkt: ${labelOf(SEGMENT_OPTIONS, v.segment)}`,
    `Grösse: ${labelOf(TEAM_SIZE_OPTIONS, v.teamSize)}`,
    `Ziel: ${labelOf(GOAL_OPTIONS, v.goal)}`,
    `Start: ${labelOf(TIMELINE_OPTIONS, v.timeline)}`,
    `Website: ${v.companyWebsite.trim() || '–'}`,
    `Werbebudget pro Monat: ${labelOf(AD_BUDGET_OPTIONS, v.adBudget)}`,
    `Aufmerksam geworden über: ${labelOf(REFERRAL_OPTIONS, v.referral)}`,
  ];
  if (toolContext) lines.push(`Wachstumscheck: ${toolContext}`);
  lines.push('', 'Nachricht:', v.message.trim() || '–');
  return lines.join('\n');
}

/** Request-Body: Vertrag v3 (docs/lead-payload-v3.md) plus Block `qualification`. */
export function buildFinanceLeadPayload(v: FinanceLeadValues, ctx: LeadContext, toolContext?: string) {
  return {
    formId: ctx.formId,
    formName: ctx.formName,
    formLocation: ctx.formLocation,
    source: ctx.formLocation,
    pageType: ctx.pageType,
    salutation: '',
    firstName: v.firstName.trim(),
    lastName: v.lastName.trim(),
    company: v.company.trim(),
    email: v.email.trim(),
    phone: v.phone.trim(),
    annualRevenue: '',
    message: composeFinanceMessage(v, toolContext),
    website: 'performanceboost.ch',
    pageUrl: ctx.pageUrl,
    conversionPath: ctx.conversionPath,
    submittedAt: ctx.submittedAt,
    formStartedAt: ctx.formStartedAt,
    hp_url: v.hp_url,
    qualification: {
      segment: v.segment,
      teamSize: v.teamSize,
      goal: v.goal,
      timeline: v.timeline,
      companyWebsite: v.companyWebsite.trim(),
      adBudget: v.adBudget,
      referral: v.referral,
      toolContext: toolContext || '',
    },
    ...flatCampaignFields(ctx.attribution),
    attribution: ctx.attribution,
  };
}
