import { describe, it, expect, beforeEach, vi } from 'vitest';
import { buildTouch, hasCampaignSignal, flatCampaignFields, type Attribution } from '../attribution';
import { parseRoute, indexablePaths } from '../routes';
import { buildLeadPayload, isConfirmedLead, validateLead, EMPTY_LEAD_FORM } from '../leadPayload';
import { trackEvent } from '../analytics';

describe('attribution', () => {
  it('liest UTM-Parameter und Click-IDs, verwirft übrige Query-Parameter', () => {
    const t = buildTouch(
      'https://performanceboost.ch/leistungen?utm_source=google&utm_medium=cpc&gclid=abc&email=x@y.ch',
      'https://www.google.com/search?q=geheim',
      new Date('2026-10-29T10:00:00Z'),
    );
    expect(t.utm_source).toBe('google');
    expect(t.utm_medium).toBe('cpc');
    expect(t.gclid).toBe('abc');
    expect(t.landingPage).toBe('https://performanceboost.ch/leistungen?utm_source=google&utm_medium=cpc&gclid=abc');
    expect(t.landingPage).not.toContain('email');
    // Nur Origin des Referrers, kein Suchbegriff
    expect(t.referrer).toBe('https://www.google.com');
    expect(t.timestamp).toBe('2026-10-29T10:00:00.000Z');
  });

  it('ignoriert interne Referrer', () => {
    const t = buildTouch('https://performanceboost.ch/kontakt', 'https://performanceboost.ch/');
    expect(t.referrer).toBe('');
    expect(hasCampaignSignal(t)).toBe(false);
  });

  it('flache Felder nehmen Last-Touch mit Signal, sonst First-Touch', () => {
    const first = buildTouch('https://performanceboost.ch/?utm_source=linkedin&utm_medium=paid', '');
    const lastNoSignal = buildTouch('https://performanceboost.ch/kontakt', '');
    const attr: Attribution = { firstTouch: first, lastTouch: lastNoSignal };
    expect(flatCampaignFields(attr).utm_source).toBe('linkedin');
    const lastGoogle = buildTouch('https://performanceboost.ch/?gclid=g1', '');
    expect(flatCampaignFields({ firstTouch: first, lastTouch: lastGoogle }).gclid).toBe('g1');
    expect(flatCampaignFields({ firstTouch: null, lastTouch: null }).utm_source).toBe('');
  });
});

describe('routes', () => {
  it('erkennt bekannte Seiten und Slugs', () => {
    expect(parseRoute('/').view).toBe('home');
    expect(parseRoute('/leistungen/').view).toBe('leistungen');
    expect(parseRoute('/leistungen/growth-strategy')).toMatchObject({ view: 'leistungen', slug: 'growth-strategy', pageType: 'leistung' });
    expect(parseRoute('/loesungen/handwerk')).toMatchObject({ view: 'loesungen_detail', slug: 'handwerk' });
  });

  it('Artikel ohne Kategorie werden als Artikel erkannt (früherer Fehler)', () => {
    expect(parseRoute('/ressourcen/b2b-gtm-playbook-dach')).toMatchObject({ view: 'ressourcen', slug: 'b2b-gtm-playbook-dach' });
    expect(parseRoute('/ressourcen/blog')).toMatchObject({ view: 'ressourcen', subSection: 'blog' });
    expect(parseRoute('/ressourcen/blog').slug).toBeUndefined();
  });

  it('liefert not_found statt Startseite für unbekannte URLs', () => {
    for (const p of ['/gibt-es-nicht', '/leistungen/xyz', '/loesungen/xyz', '/ressourcen/xyz', '/wp-sitemap.xml']) {
      expect(parseRoute(p).view).toBe('not_found');
    }
  });

  it('alle indexierbaren Pfade sind auflösbar', () => {
    for (const p of indexablePaths()) expect(parseRoute(p).view, p).not.toBe('not_found');
  });
});

describe('leadPayload', () => {
  const valid = {
    ...EMPTY_LEAD_FORM,
    firstName: 'Test',
    lastName: 'Person',
    company: 'Muster AG',
    email: 'test@muster.ch',
    annualRevenue: '1m_5m' as const,
    message: 'Wir möchten mehr Anfragen über Google gewinnen.',
  };

  it('validiert Pflichtfelder und E-Mail', () => {
    expect(validateLead(valid)).toEqual({});
    const errs = validateLead({ ...EMPTY_LEAD_FORM, email: 'kaputt@', phone: '12' });
    expect(Object.keys(errs).sort()).toEqual(['annualRevenue', 'company', 'email', 'firstName', 'lastName', 'message', 'phone']);
  });

  it('baut Payload v3 inkl. Rückwärtskompatibilität', () => {
    const attribution: Attribution = {
      firstTouch: buildTouch('https://performanceboost.ch/?utm_source=google&utm_campaign=kmu', ''),
      lastTouch: null,
    };
    const p = buildLeadPayload(valid, {
      formId: 'contact',
      formName: 'Kontaktformular',
      formLocation: 'modal',
      pageType: 'home',
      pageUrl: 'https://performanceboost.ch/',
      conversionPath: '/',
      formStartedAt: '2026-10-29T10:00:00.000Z',
      submittedAt: '2026-10-29T10:01:00.000Z',
      attribution,
    });
    expect(p.company).toBe('Muster AG');
    expect(p.source).toBe('modal');
    expect(p.website).toBe('performanceboost.ch');
    expect(p.utm_source).toBe('google');
    expect(p.utm_campaign).toBe('kmu');
    expect(p.hp_url).toBe('');
    expect(p.attribution.firstTouch?.utm_source).toBe('google');
  });

  it('zählt nur bestätigte Leads', async () => {
    const ok = new Response(JSON.stringify({ success: true, leadId: '1' }), { status: 200 });
    const okNoFlag = new Response('{"received":true}', { status: 200 });
    const notJson = new Response('OK', { status: 200 });
    const err = new Response(JSON.stringify({ success: false }), { status: 500 });
    expect(await isConfirmedLead(ok)).toBe(true);
    expect(await isConfirmedLead(okNoFlag)).toBe(false);
    expect(await isConfirmedLead(notJson)).toBe(false);
    expect(await isConfirmedLead(err)).toBe(false);
  });
});

describe('trackEvent', () => {
  beforeEach(() => {
    vi.stubGlobal('window', { dataLayer: [] });
  });

  it('benennt GA4-reservierte Parameter um und setzt Parameter danach zurück', () => {
    trackEvent('form_submit', { source: 'modal', form_id: 'contact' });
    const dl = (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer;
    expect(dl[0]).toEqual({ event: 'form_submit', ui_source: 'modal', form_id: 'contact' });
    expect(dl[0]).not.toHaveProperty('source');
    expect(dl[1]).toEqual({ ui_source: undefined, form_id: undefined });
  });
});
