import { describe, expect, it } from 'vitest';
import { SERVICE_AREAS, AREAS, primaryAreaOf, relatedServices } from '../../data/serviceAreas';
import { PHASES } from '../../data/approach';
import { readFileSync } from 'node:fs';
import { CHALLENGE_CARDS, CHALLENGE_PAGES } from '../../data/challenges';
import { SERVICES } from '../../data/services';
import { SKILLS } from '../../data/skills';
import { RESOURCES_DATA } from '../../data/resources';
import { indexablePaths, parseRoute } from '../routes';

const serviceSlugs = SERVICES.map((s) => s.slug);
const skillIds = SKILLS.map((s) => s.id);
const resourceSlugs = RESOURCES_DATA.map((r) => r.slug);
const paths = new Set(indexablePaths());

describe('Leistungsfelder', () => {
  it('jede Leistung hat ein Hauptfeld', () => {
    for (const slug of serviceSlugs) expect(primaryAreaOf(slug), slug).toBeDefined();
  });

  it('alle Verweise zeigen auf existierende Inhalte', () => {
    for (const a of SERVICE_AREAS) {
      for (const s of a.services) expect(serviceSlugs, `${a.id}: ${s}`).toContain(s);
      for (const t of a.tools) expect(skillIds, `${a.id}: ${t}`).toContain(t);
      for (const r of a.resources) expect(resourceSlugs, `${a.id}: ${r}`).toContain(r);
      for (const href of a.solutions) expect(paths.has(href), `${a.id}: ${href}`).toBe(true);
      for (const g of a.serviceGroups ?? []) for (const s of g.services) expect(a.services).toContain(s);
    }
  });

  it('Hubs sind routbar und indexierbar, kollidieren nicht mit Leistungs-Slugs', () => {
    for (const a of SERVICE_AREAS) {
      expect(serviceSlugs).not.toContain(a.id);
      expect(parseRoute(`/leistungen/${a.id}`)).toMatchObject({ view: 'leistungsfeld', slug: a.id });
      expect(paths.has(`/leistungen/${a.id}`)).toBe(true);
    }
  });

  it('genau drei Kompetenzbereiche, jede Leistung hat genau einen Hauptbereich', () => {
    expect(AREAS.map((a) => a.id)).toEqual(['marketing', 'sales', 'prozesse']);
    for (const slug of serviceSlugs) expect(AREAS.filter((a) => a.services.includes(slug)), slug).toHaveLength(1);
    for (const a of AREAS) expect(a.phaseExamples, a.id).toHaveLength(PHASES.length);
  });

  it('alte Hub-URLs leiten per 301 weiter, Ziele sind indexierbar', () => {
    const redirects = readFileSync('public/_redirects', 'utf8');
    for (const [from, to] of [
      ['/leistungen/wachstum-marketing', '/leistungen/marketing'],
      ['/leistungen/sales-revenue-operations', '/leistungen/sales'],
      ['/leistungen/technologie-automation', '/leistungen/prozesse'],
      ['/leistungen/strategie', '/ansatz'],
    ]) {
      expect(redirects).toMatch(new RegExp(`^${from}\\s+${to}\\s+301$`, 'm'));
      expect(paths.has(to), to).toBe(true);
      expect(parseRoute(from).view, from).toBe('not_found');
    }
  });

  it('passende Leistungen: 3 Einträge, existierend, nie die Seite selbst', () => {
    for (const slug of serviceSlugs) {
      const rel = relatedServices(slug);
      expect(rel, slug).toHaveLength(3);
      expect(rel.map((r) => r.slug)).not.toContain(slug);
    }
  });
});

describe('Lösungen nach Herausforderung', () => {
  it('alle Karten verlinken auf indexierbare Seiten', () => {
    for (const c of CHALLENGE_CARDS) expect(paths.has(c.href), c.href).toBe(true);
  });

  it('Lösungsseiten sind routbar und verweisen auf existierende Inhalte', () => {
    for (const p of Object.values(CHALLENGE_PAGES)) {
      expect(parseRoute(`/loesungen/${p.slug}`)).toMatchObject({ view: 'loesung_herausforderung', slug: p.slug });
      for (const s of p.services) expect(serviceSlugs).toContain(s);
      for (const t of p.tools) expect(skillIds).toContain(t);
    }
  });

  it('/referenzen ist routbar', () => {
    expect(parseRoute('/referenzen').view).toBe('referenzen');
  });
});

import { SERVICE_DIAGRAMS, AREA_DIAGRAMS, CHALLENGE_DIAGRAMS, sectorDiagram } from '../../data/diagrams';
import { SOLUTIONS_SECTORS } from '../../data/solutionsData';

describe('Themengrafiken', () => {
  it('jede Leistung, jedes Feld und jede Lösungsseite hat eine Grafik', () => {
    for (const s of SERVICES) expect(SERVICE_DIAGRAMS[s.slug], s.slug).toBeDefined();
    for (const a of SERVICE_AREAS) expect(AREA_DIAGRAMS[a.id], a.id).toBeDefined();
    for (const c of Object.keys(CHALLENGE_PAGES)) expect(CHALLENGE_DIAGRAMS[c], c).toBeDefined();
    for (const sec of Object.values(SOLUTIONS_SECTORS)) expect(sectorDiagram(sec.slug, sec.title).spec.type).toBe('flow');
  });
});
