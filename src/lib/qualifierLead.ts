/**
 * Payload der qualifizierenden Formularstrecke (formId `qualifier`), kompatibel mit n8n contact-v3:
 * - kein Jahresumsatz (n8n: `qualifier` muss in REVENUE_OPTIONAL stehen)
 * - Anrede als `salutation` (Herr/Frau, von n8n bereits verarbeitet)
 * - Antworten lesbar in `message` (Pflichtfeld in n8n) und strukturiert in `qualification`
 * - Einwilligungen in `message` (damit sie in Tabelle, Mail und Cockpit landen) und strukturiert in `consent`
 */
import { flatCampaignFields } from './attribution';
import type { LeadContext } from './leadPayload';
import type { LeadFlow } from '../data/leadFlows';

export const QUALIFIER_FORM_ID = 'qualifier';

export const PRIVACY_CONSENT_TEXT =
  'Ich bin damit einverstanden, dass performanceboost meine Angaben zur Bearbeitung meiner Anfrage speichert und verwendet (Datenschutzerklärung).';
export const MARKETING_CONSENT_TEXT =
  'Ich möchte gelegentlich Fachbeiträge und Angebote von performanceboost per E-Mail erhalten. Abmeldung jederzeit möglich.';

export interface ContactValues {
  salutation: '' | 'Herr' | 'Frau';
  company: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  /** Honeypot: für Menschen unsichtbar, muss leer bleiben. */
  hp_url: string;
}

export const EMPTY_CONTACT: ContactValues = {
  salutation: '',
  company: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  privacyConsent: false,
  marketingConsent: false,
  hp_url: '',
};

export type ContactField = Exclude<keyof ContactValues, 'hp_url' | 'marketingConsent'>;
export type Answers = Record<string, string[]>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v: ContactValues): Partial<Record<ContactField, string>> {
  const e: Partial<Record<ContactField, string>> = {};
  if (!v.salutation) e.salutation = 'Bitte wählen Sie eine Anrede.';
  if (!v.company.trim()) e.company = 'Bitte geben Sie Ihr Unternehmen an.';
  if (!v.firstName.trim()) e.firstName = 'Bitte geben Sie Ihren Vornamen an.';
  if (!v.lastName.trim()) e.lastName = 'Bitte geben Sie Ihren Nachnamen an.';
  if (!v.email.trim()) e.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Diese E-Mail-Adresse scheint unvollständig zu sein.';
  if (v.phone.trim() && v.phone.replace(/[^\d]/g, '').length < 7) e.phone = 'Bitte prüfen Sie die Telefonnummer oder lassen Sie das Feld leer.';
  if (!v.privacyConsent) e.privacyConsent = 'Bitte bestätigen Sie die Datenschutzerklärung.';
  return e;
}

/** Lesbare Zusammenfassung für E-Mail, Data Table und Cockpit. */
export function buildMessage(flow: LeadFlow, answers: Answers, v: ContactValues): string {
  const lines = [`Anfrage über «${flow.title}» (Strecke: ${flow.id})`, ''];
  for (const q of flow.questions) {
    const a = answers[q.id];
    if (a?.length) lines.push(`- ${q.label} ${a.join(', ')}`);
  }
  lines.push('', `Einwilligung Datenschutz: ${v.privacyConsent ? 'ja' : 'nein'}`, `Einwilligung Marketing (E-Mail): ${v.marketingConsent ? 'ja' : 'nein'}`);
  return lines.join('\n');
}

export function buildQualifierPayload(flow: LeadFlow, answers: Answers, v: ContactValues, ctx: LeadContext) {
  return {
    formId: QUALIFIER_FORM_ID,
    formName: ctx.formName,
    formLocation: ctx.formLocation,
    source: ctx.formLocation,
    pageType: ctx.pageType,
    salutation: v.salutation,
    firstName: v.firstName.trim(),
    lastName: v.lastName.trim(),
    company: v.company.trim(),
    email: v.email.trim(),
    phone: v.phone.trim(),
    annualRevenue: '',
    message: buildMessage(flow, answers, v),
    website: 'performanceboost.ch',
    pageUrl: ctx.pageUrl,
    conversionPath: ctx.conversionPath,
    submittedAt: ctx.submittedAt,
    formStartedAt: ctx.formStartedAt,
    hp_url: v.hp_url,
    qualification: {
      flow: flow.id,
      answers: flow.questions.filter((q) => answers[q.id]?.length).map((q) => ({ id: q.id, question: q.label, answer: answers[q.id] })),
    },
    consent: {
      privacy: v.privacyConsent,
      marketing: v.marketingConsent,
      privacyText: PRIVACY_CONSENT_TEXT,
      marketingText: MARKETING_CONSENT_TEXT,
      at: ctx.submittedAt,
    },
    ...flatCampaignFields(ctx.attribution),
    attribution: ctx.attribution,
  };
}
