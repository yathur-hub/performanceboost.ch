import { useEffect } from 'react';
import { trackEvent } from '../lib/analytics';
import { SERVICES } from '../data/services';
import { RESOURCES_DATA } from '../data/resources';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import { FINANCE_PAGES, isFinanceSlug } from '../data/financeLanding';
import { SITE } from '../config/site';
import type { ParsedRoute } from '../lib/routes';
import { isAreaId, getArea, primaryAreaOf, servicesOf } from '../data/serviceAreas';
import { CHALLENGE_PAGES, isChallengeSlug } from '../data/challenges';
import { EXTENDED_SERVICES_DATA } from '../data/servicesExtendedData';

interface SEOHeadProps {
  route: ParsedRoute;
}

const ORG_ID = `${SITE.baseUrl}/#organization`;
const WEBSITE_ID = `${SITE.baseUrl}/#website`;

const ORGANIZATION = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.baseUrl,
  logo: SITE.logoUrl,
  image: SITE.portraitUrl,
  slogan: 'We boost business performance.',
  description:
    'Business Performance Partner für Schweizer KMU. Strategie, Technologie und Umsetzung aus einer Hand: Wachstums- und Digitalstrategie, Automatisierung und KI, CRM und Revenue Operations, Performance Marketing und SEO.',
  knowsAbout: [
    'Wachstumsstrategie',
    'Digitalstrategie',
    'Prozessautomatisierung',
    'Systemintegration',
    'Künstliche Intelligenz',
    'CRM',
    'Marketing Automation',
    'Revenue Operations',
    'Lead Management',
    'Performance Marketing',
    'Google Ads',
    'Suchmaschinenoptimierung',
    'Conversion-Optimierung',
    'Tracking und Reporting',
  ],
  sameAs: [SITE.linkedinPerson],
  email: SITE.email,
  founder: { '@type': 'Person', name: SITE.owner, sameAs: [SITE.linkedinPerson] },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.street,
    postalCode: SITE.postalCode,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    addressCountry: SITE.country,
  },
  areaServed: { '@type': 'Country', name: 'Schweiz' },
};

function truncate(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/[\s,.;:–-]+\S*$/, '')}…`;
}

function webPage(type: string, url: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'de-CH',
  };
}

const crumbList = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
});

const faqPage = (url: string, faq: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

const HOME_CRUMB = { name: 'Startseite', url: `${SITE.baseUrl}/` };

interface Meta {
  title: string;
  description: string;
  schema: object | null;
  ogType: 'website' | 'article';
  indexable: boolean;
}

export function buildMeta(route: ParsedRoute): Meta {
  const url = `${SITE.baseUrl}${route.path === '/' ? '' : route.path}`;
  const base = { ogType: 'website' as const, indexable: true };

  switch (route.view) {
    case 'home': {
      const title = 'Business Performance Partner für Schweizer KMU | performanceboost';
      const description =
        'Wir verbessern Marketing, Vertrieb und Abläufe von Schweizer KMU. Strategie, Technologie und Umsetzung aus einer Hand, persönlich betreut vom Inhaber.';
      return {
        ...base,
        title,
        description,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebSite', '@id': WEBSITE_ID, url: SITE.baseUrl, name: SITE.name, inLanguage: 'de-CH', publisher: { '@id': ORG_ID } },
            ORGANIZATION,
          ],
        },
      };
    }
    case 'leistungsfeld': {
      if (!route.slug || !isAreaId(route.slug)) return { title: 'Seite nicht gefunden | performanceboost', description: '', schema: null, ogType: 'website', indexable: false };
      const area = getArea(route.slug);
      const title = area.seoTitle;
      const description = truncate(area.seoDescription);
      return {
        ...base,
        title,
        description,
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            {
              ...webPage('CollectionPage', url, title, description),
              '@context': undefined,
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: servicesOf(area).map((s, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: s.title,
                  url: `${SITE.baseUrl}/leistungen/${s.slug}`,
                })),
              },
            },
            crumbList([HOME_CRUMB, { name: 'Leistungen', url: `${SITE.baseUrl}/leistungen` }, { name: area.label, url }]),
            faqPage(url, area.faq),
          ],
        },
      };
    }
    case 'leistungen': {
      const service = route.slug ? SERVICES.find((s) => s.slug === route.slug) : undefined;
      if (service) {
        const title = `${service.title} | performanceboost`;
        const description = truncate(`${service.shortDesc} ${service.description}`);
        const area = primaryAreaOf(service.slug);
        const faq = EXTENDED_SERVICES_DATA.find((e) => e.slug === service.slug)?.faq ?? [];
        const crumbs = [
          HOME_CRUMB,
          { name: 'Leistungen', url: `${SITE.baseUrl}/leistungen` },
          ...(area ? [{ name: area.label, url: `${SITE.baseUrl}/leistungen/${area.id}` }] : []),
          { name: service.title, url },
        ];
        return {
          ...base,
          title,
          description,
          schema: {
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: service.title,
                description: service.shortDesc,
                url,
                provider: { '@id': ORG_ID },
                areaServed: { '@type': 'Country', name: 'Schweiz' },
                ...(area ? { category: area.label } : {}),
              },
              crumbList(crumbs),
              ...(faq.length ? [faqPage(url, faq)] : []),
            ],
          },
        };
      }
      const title = 'Leistungen: Strategie, Technologie, Wachstum, Vertrieb | performanceboost';
      const description =
        'Alle Leistungen von performanceboost für Schweizer KMU im Überblick: Wachstumsstrategie, KI und Automatisierung, Kampagnen, CRM und Vertrieb.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'loesungen': {
      const title = 'Lösungen nach Herausforderung und Branche | performanceboost';
      const description =
        'Mehr Kunden gewinnen, Vertrieb verbessern, Abläufe automatisieren: Finden Sie den passenden Einstieg für Ihre Situation oder Ihre Branche, von Treuhand bis Industrie.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'loesung_herausforderung': {
      if (!route.slug || !isChallengeSlug(route.slug)) return { title: 'Seite nicht gefunden | performanceboost', description: '', schema: null, ogType: 'website', indexable: false };
      const page = CHALLENGE_PAGES[route.slug];
      return {
        ...base,
        title: page.seoTitle,
        description: truncate(page.seoDescription),
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            { ...webPage('WebPage', url, page.seoTitle, page.seoDescription), '@context': undefined },
            crumbList([HOME_CRUMB, { name: 'Lösungen', url: `${SITE.baseUrl}/loesungen` }, { name: page.label, url }]),
            faqPage(url, page.faq),
          ],
        },
      };
    }
    case 'referenzen': {
      const title = 'Referenzen & Kundenstimmen | performanceboost';
      const description =
        'Was Schweizer Unternehmerinnen und Unternehmer über die Zusammenarbeit mit performanceboost sagen: von Kampagnen und Onlineshops bis zum eigenen ERP-System.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'loesungen_detail': {
      const sector = Object.values(SOLUTIONS_SECTORS).find((s) => s.slug === route.slug);
      const title = sector ? `Neukundengewinnung für ${sector.title} | performanceboost` : 'Branchenlösung | performanceboost';
      const description = truncate(sector ? sector.heroDesc : '');
      return { ...base, title, description, schema: webPage('WebPage', url, title, description) };
    }
    case 'finanz': {
      const page = route.slug && isFinanceSlug(route.slug) ? FINANCE_PAGES[route.slug] : undefined;
      if (!page) return { title: 'Seite nicht gefunden | performanceboost', description: '', schema: null, ogType: 'website', indexable: false };
      const crumbs = [
        { name: 'Lösungen', url: `${SITE.baseUrl}/loesungen` },
        { name: 'Finanzdienstleister', url: `${SITE.baseUrl}/loesungen/finanzdienstleister` },
        ...(page.slug === 'finanzdienstleister' ? [] : [{ name: page.label, url }]),
      ];
      return {
        ...base,
        title: page.seoTitle,
        description: truncate(page.seoDescription),
        schema: {
          '@context': 'https://schema.org',
          '@graph': [
            { ...webPage('WebPage', url, page.seoTitle, page.seoDescription), '@context': undefined },
            {
              '@type': 'BreadcrumbList',
              itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
            },
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
              mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
            },
          ],
        },
      };
    }
    case 'about': {
      const title = 'Über uns: Yathur Nathan & performanceboost | performanceboost';
      const description =
        'performanceboost ist der Business Performance Partner für Schweizer KMU, inhabergeführt aus Fläsch (GR). Strategie und Umsetzung aus einer Hand, direkt mit Yathur Nathan.';
      return {
        ...base,
        title,
        description,
        schema: { ...webPage('AboutPage', url, title, description), mainEntity: ORGANIZATION.founder },
      };
    }
    case 'kontakt': {
      const title = 'Kontakt & Erstgespräch | performanceboost';
      const description =
        'Schildern Sie uns kurz Ihre Ausgangslage. Sie erhalten innert eines Arbeitstags eine persönliche Antwort von Yathur Nathan.';
      return { ...base, title, description, schema: webPage('ContactPage', url, title, description) };
    }
    case 'impressum':
      return { ...base, title: 'Impressum | performanceboost', description: `Rechtliche Angaben zu ${SITE.name}, ${SITE.street}, ${SITE.postalCode} ${SITE.locality}.`, schema: null };
    case 'datenschutz':
      return { ...base, title: 'Datenschutzerklärung | performanceboost', description: 'Wie performanceboost Personendaten nach Schweizer DSG und DSGVO bearbeitet.', schema: null };
    case 'skills': {
      const title = 'Skill-Factory: Checks & Rechner für KMU | performanceboost';
      const description = 'Die Skill-Factory: kostenlose Checks und Rechner zu Strategie, Vertrieb, CRM, Automatisierung, KI und Daten. Prüfen Sie selbst, wo es bremst.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'ressourcen': {
      const item = route.slug ? RESOURCES_DATA.find((r) => r.slug === route.slug) : undefined;
      if (item) {
        return {
          ...base,
          ogType: 'article',
          title: `${item.title} | performanceboost`,
          description: truncate(item.description),
          schema: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${url}#article`,
            url,
            headline: item.title,
            description: item.description,
            author: { '@type': 'Person', name: item.author, url: `${SITE.baseUrl}/ueber-uns` },
            publisher: { '@id': ORG_ID },
            inLanguage: 'de-CH',
          },
        };
      }
      const section = route.subSection === 'blog' ? 'Fachbeiträge' : route.subSection === 'guides' ? 'Leitfäden' : 'Ratgeber & Fachbeiträge';
      const title = `${section} | performanceboost`;
      const description = 'Praxisbeiträge zu Wachstum, Vertrieb, Automatisierung, KI, Tracking und Datenschutz für Schweizer KMU.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'not_found':
    default:
      return { title: 'Seite nicht gefunden | performanceboost', description: 'Diese Seite existiert nicht.', schema: null, ogType: 'website', indexable: false };
  }
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export interface HeadTags {
  title: string;
  metas: { attr: 'name' | 'property'; key: string; content: string }[];
  /** Nur bei indexierbaren Seiten gesetzt. */
  canonical: string | null;
  schema: object | null;
}

/** Kopfdaten einer Route. Wird im Browser (SEOHead) und beim Prerendern (scripts/prerender.mjs) verwendet. */
export function buildHeadTags(route: ParsedRoute): HeadTags {
  const meta = buildMeta(route);
  const canonicalUrl = `${SITE.baseUrl}${route.path === '/' ? '/' : route.path}`;
  return {
    title: meta.title,
    metas: [
      { attr: 'name', key: 'description', content: meta.description },
      { attr: 'name', key: 'robots', content: meta.indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow' },
      { attr: 'property', key: 'og:title', content: meta.title },
      { attr: 'property', key: 'og:description', content: meta.description },
      { attr: 'property', key: 'og:url', content: canonicalUrl },
      { attr: 'property', key: 'og:type', content: meta.ogType },
      { attr: 'property', key: 'og:site_name', content: SITE.name },
      { attr: 'property', key: 'og:image', content: SITE.portraitUrl },
      { attr: 'property', key: 'og:locale', content: 'de_CH' },
      { attr: 'name', key: 'twitter:card', content: 'summary_large_image' },
    ],
    canonical: meta.indexable ? canonicalUrl : null,
    schema: meta.schema,
  };
}

/**
 * Zuletzt gemeldete URL. Den ersten Seitenaufruf zählt der GA4-Konfigurationstag selbst; danach meldet
 * jeder Routenwechsel einen virtuellen Seitenaufruf (GTM-Tag «GA4 Event | page_view (SPA)»).
 * Modulvariable statt useRef, damit StrictMode-Doppelaufrufe keinen zusätzlichen Aufruf erzeugen.
 */
let lastTrackedUrl: string | null = null;

function trackVirtualPageView() {
  const url = window.location.href;
  if (lastTrackedUrl === null) {
    lastTrackedUrl = url;
    return;
  }
  if (url === lastTrackedUrl) return;
  trackEvent('virtual_page_view', { page_location: url, page_title: document.title, page_referrer: lastTrackedUrl });
  lastTrackedUrl = url;
}

export default function SEOHead({ route }: SEOHeadProps) {
  useEffect(() => {
    const head = buildHeadTags(route);

    document.title = head.title;
    for (const m of head.metas) setMeta(m.attr, m.key, m.content);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (head.canonical) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = head.canonical;
    } else if (canonical) {
      canonical.remove();
    }

    document.getElementById('perf-boost-jsonld')?.remove();
    if (head.schema) {
      const script = document.createElement('script');
      script.id = 'perf-boost-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(head.schema);
      document.head.appendChild(script);
    }

    trackVirtualPageView();
  }, [route]);

  return null;
}
