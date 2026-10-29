import { SERVICES } from '../data/services';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import { RESOURCES_DATA } from '../data/resources';

export type RouteView =
  | 'home'
  | 'skills'
  | 'loesungen'
  | 'loesungen_detail'
  | 'about'
  | 'kontakt'
  | 'impressum'
  | 'datenschutz'
  | 'leistungen'
  | 'ressourcen'
  | 'not_found';

export interface ParsedRoute {
  view: RouteView;
  slug?: string;
  subSection?: string;
  /** Normalisierter Pfad ohne Slash am Ende. */
  path: string;
  /** Seitentyp für Tracking und Lead-Payload. */
  pageType: string;
}

const RESOURCE_SECTIONS = ['blog', 'guides'];
const SOLUTION_SLUGS = Object.values(SOLUTIONS_SECTORS).map((s) => s.slug);

export function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

export function parseRoute(pathname: string): ParsedRoute {
  const path = normalizePath(pathname);
  const notFound: ParsedRoute = { view: 'not_found', path, pageType: 'not_found' };

  if (path === '/') return { view: 'home', path, pageType: 'home' };
  if (path === '/skills') return { view: 'skills', path, pageType: 'tools' };
  if (path === '/loesungen') return { view: 'loesungen', path, pageType: 'loesungen' };
  if (path === '/ueber-uns') return { view: 'about', path, pageType: 'ueber_uns' };
  if (path === '/kontakt') return { view: 'kontakt', path, pageType: 'kontakt' };
  if (path === '/impressum') return { view: 'impressum', path, pageType: 'rechtliches' };
  if (path === '/datenschutz') return { view: 'datenschutz', path, pageType: 'rechtliches' };

  if (path.startsWith('/loesungen/')) {
    const slug = path.slice('/loesungen/'.length);
    if (!SOLUTION_SLUGS.includes(slug)) return notFound;
    return { view: 'loesungen_detail', slug, path, pageType: 'loesung' };
  }

  if (path === '/leistungen') return { view: 'leistungen', path, pageType: 'leistungen' };
  if (path.startsWith('/leistungen/')) {
    const slug = path.slice('/leistungen/'.length);
    if (!SERVICES.some((s) => s.slug === slug)) return notFound;
    return { view: 'leistungen', slug, path, pageType: 'leistung' };
  }

  if (path === '/ressourcen') return { view: 'ressourcen', path, pageType: 'ressourcen' };
  if (path.startsWith('/ressourcen/')) {
    const parts = path.slice('/ressourcen/'.length).split('/');
    const isArticle = (slug: string) => RESOURCES_DATA.some((r) => r.slug === slug);
    if (parts.length === 1) {
      if (RESOURCE_SECTIONS.includes(parts[0])) {
        return { view: 'ressourcen', subSection: parts[0], path, pageType: 'ressourcen' };
      }
      // Artikel-Links ohne Kategorie (/ressourcen/<slug>) direkt als Artikel darstellen.
      if (isArticle(parts[0])) return { view: 'ressourcen', slug: parts[0], path, pageType: 'artikel' };
      return notFound;
    }
    if (parts.length === 2 && RESOURCE_SECTIONS.includes(parts[0]) && isArticle(parts[1])) {
      return { view: 'ressourcen', subSection: parts[0], slug: parts[1], path, pageType: 'artikel' };
    }
    return notFound;
  }

  return notFound;
}

/** Alle indexierbaren URLs (für sitemap.xml, siehe scripts/generate-sitemap.ts). */
export function indexablePaths(): string[] {
  return [
    '/',
    '/leistungen',
    ...SERVICES.map((s) => `/leistungen/${s.slug}`),
    '/loesungen',
    ...SOLUTION_SLUGS.map((slug) => `/loesungen/${slug}`),
    '/ressourcen',
    ...RESOURCES_DATA.filter((r) => r.type !== 'case-study').map((r) => `/ressourcen/${r.slug}`),
    '/ueber-uns',
    '/kontakt',
    '/skills',
    '/impressum',
    '/datenschutz',
  ];
}
