import { describe, expect, it } from 'vitest';
import { LEAD_FLOWS, resolveFlow } from '../../data/leadFlows';
import { EMPTY_CONTACT, buildQualifierPayload, validateContact } from '../qualifierLead';
import { overlayLocation } from '../../components/ContactModal';

const ctx = {
  formId: 'qualifier', formName: 'Test', formLocation: 'overlay_x', pageType: 'leistung', pageUrl: 'https://performanceboost.ch/x',
  conversionPath: '/x', formStartedAt: null, submittedAt: '2026-11-06T10:00:00.000Z', attribution: { firstTouch: null, lastTouch: null },
} as const;

describe('Formularstrecken', () => {
  it('ordnet Seiten der passenden Strecke zu', () => {
    expect(resolveFlow('/').id).toBe('general');
    expect(resolveFlow('/leistungen/marketing-automation').id).toBe('automation');
    expect(resolveFlow('/leistungen/wachstum-marketing').id).toBe('marketing');
    expect(resolveFlow('/leistungen/paid-social-ecommerce').id).toBe('ecommerce');
    expect(resolveFlow('/loesungen/vertrieb-optimieren').id).toBe('sales');
    expect(resolveFlow('/loesungen/handwerk').id).toBe('branch');
    expect(resolveFlow('/referenzen/').id).toBe('general');
  });

  it('jede Strecke endet mit Grösse und Zeitpunkt, alle Fragen haben Optionen', () => {
    for (const f of Object.values(LEAD_FLOWS)) {
      expect(f.questions.slice(-2).map((q) => q.id)).toEqual(['size', 'timing']);
      for (const q of f.questions) expect(q.options.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('overlayLocation ist pro Seite eindeutig', () => {
    expect(overlayLocation('/')).toBe('overlay_startseite');
    expect(overlayLocation('/leistungen/ai-automation/')).toBe('overlay_leistungen_ai-automation');
  });
});

describe('Kontaktangaben', () => {
  it('verlangt Anrede, Firma, Name, E-Mail und Datenschutz-Einwilligung; Telefon und Marketing optional', () => {
    expect(Object.keys(validateContact(EMPTY_CONTACT)).sort()).toEqual(['company', 'email', 'firstName', 'lastName', 'privacyConsent', 'salutation']);
    const ok = { ...EMPTY_CONTACT, salutation: 'Frau' as const, company: 'Muster AG', firstName: 'Anna', lastName: 'Muster', email: 'anna@muster.ch', privacyConsent: true };
    expect(validateContact(ok)).toEqual({});
  });

  it('Payload: formId qualifier, kein Jahresumsatz, Antworten und Einwilligungen in message', () => {
    const flow = LEAD_FLOWS.sales;
    const v = { ...EMPTY_CONTACT, salutation: 'Herr' as const, company: 'Muster AG', firstName: 'Max', lastName: 'Muster', email: 'max@muster.ch', privacyConsent: true, marketingConsent: false };
    const p = buildQualifierPayload(flow, { problem: ['Anfragen bleiben liegen'], size: ['10–49'] }, v, ctx);
    expect(p.formId).toBe('qualifier');
    expect(p.annualRevenue).toBe('');
    expect(p.salutation).toBe('Herr');
    expect(p.message).toContain('Anfragen bleiben liegen');
    expect(p.message).toContain('Einwilligung Datenschutz: ja');
    expect(p.message).toContain('Einwilligung Marketing (E-Mail): nein');
    expect(p.qualification.answers).toHaveLength(2);
    expect(p.consent.privacy).toBe(true);
  });
});
