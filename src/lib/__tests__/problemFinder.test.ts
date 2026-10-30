import { describe, it, expect } from 'vitest';
import { PROBLEM_OPTIONS, SETUP_OPTIONS, MODEL_OPTIONS, recommend } from '../../data/problemFinder';
import { SERVICES } from '../../data/services';
import { EXTENDED_SERVICES_DATA } from '../../data/servicesExtendedData';
import { parseRoute } from '../routes';

describe('problemFinder', () => {
  it('jede Empfehlung zeigt auf eine existierende Leistung mit Detailseite', () => {
    for (const model of MODEL_OPTIONS) {
      for (const p of PROBLEM_OPTIONS[model.id]) {
        expect(SERVICES.some((s) => s.slug === p.serviceSlug), p.serviceSlug).toBe(true);
        expect(EXTENDED_SERVICES_DATA.some((e) => e.slug === p.serviceSlug), p.serviceSlug).toBe(true);
        expect(parseRoute(`/leistungen/${p.serviceSlug}`).view).toBe('leistungen');
      }
    }
  });

  it('liefert erst nach allen drei Antworten ein Ergebnis', () => {
    expect(recommend({ model: 'b2b' })).toBeNull();
    expect(recommend({ model: 'b2b', problemId: 'zu_wenig_anfragen' })).toBeNull();
    const r = recommend({ model: 'b2b', problemId: 'zu_wenig_anfragen', setup: 'kaum' });
    expect(r?.serviceSlug).toBe('lead-generation');
    expect(r?.reason).toContain(SETUP_OPTIONS.find((s) => s.id === 'kaum')!.addition);
  });

  it('Problem-IDs aus dem falschen Geschäftsmodell ergeben kein Ergebnis', () => {
    expect(recommend({ model: 'shop', problemId: 'zu_wenig_anfragen', setup: 'intern' })).toBeNull();
  });
});
