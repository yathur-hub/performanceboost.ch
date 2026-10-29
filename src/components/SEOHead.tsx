import { useEffect } from 'react';
import { SERVICES } from '../data/services';
import { RESOURCES_DATA } from '../data/resources';
import { SOLUTIONS_SECTORS } from '../data/solutionsData';
import { SITE } from '../config/site';
import type { ParsedRoute } from '../lib/routes';

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
  description:
    'Beratung für digitale Neukundengewinnung: Performance Marketing, Landingpages, Tracking und Marketing Automation für Schweizer KMU.',
  telephone: SITE.phoneDisplay,
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
      const title = 'Mehr qualifizierte Kundenanfragen für Schweizer KMU | performanceboost';
      const description =
        'Wir helfen Schweizer KMU, über Google, Meta und LinkedIn planbar neue Kunden zu gewinnen: mit sauberer Messung, Landingpages, die anfragen auslösen, und laufender Optimierung.';
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
    case 'leistungen': {
      const service = route.slug ? SERVICES.find((s) => s.slug === route.slug) : undefined;
      if (service) {
        const title = `${service.title} | performanceboost`;
        const description = truncate(`${service.shortDesc} ${service.description}`);
        return {
          ...base,
          title,
          description,
          schema: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': `${url}#service`,
            name: service.title,
            description: service.shortDesc,
            url,
            provider: { '@id': ORG_ID },
            areaServed: { '@type': 'Country', name: 'Schweiz' },
          },
        };
      }
      const title = 'Leistungen: Performance Marketing, Tracking & Automation | performanceboost';
      const description =
        'Was wir für Schweizer KMU umsetzen: Kampagnen auf Google, Meta und LinkedIn, Landingpages, Tracking und Marketing Automation. Mit klaren Zielen und transparentem Reporting.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'loesungen': {
      const title = 'Neukundengewinnung nach Branche | performanceboost';
      const description =
        'Wie digitale Neukundengewinnung in Ihrer Branche funktioniert: Vorgehen, typische Hürden und konkrete Ansätze für Treuhand, Industrie, IT, Immobilien, Gesundheit und weitere Branchen.';
      return { ...base, title, description, schema: webPage('CollectionPage', url, title, description) };
    }
    case 'loesungen_detail': {
      const sector = Object.values(SOLUTIONS_SECTORS).find((s) => s.slug === route.slug);
      const title = sector ? `Neukundengewinnung für ${sector.title} | performanceboost` : 'Branchenlösung | performanceboost';
      const description = truncate(sector ? sector.heroDesc : '');
      return { ...base, title, description, schema: webPage('WebPage', url, title, description) };
    }
    case 'about': {
      const title = 'Über uns: Yathur Nathan & performanceboost | performanceboost';
      const description =
        'performanceboost ist eine inhabergeführte Beratung aus Fläsch (GR). Sie arbeiten direkt mit Yathur Nathan, ohne Account Manager dazwischen.';
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
        'Schildern Sie uns kurz Ihre Ausgangslage. Sie erhalten innert eines Arbeitstags eine persönliche Antwort von Yathur Nathan. Telefon +41 78 675 40 97.';
      return { ...base, title, description, schema: webPage('ContactPage', url, title, description) };
    }
    case 'impressum':
      return { ...base, title: 'Impressum | performanceboost', description: `Rechtliche Angaben zu ${SITE.name}, ${SITE.street}, ${SITE.postalCode} ${SITE.locality}.`, schema: null };
    case 'datenschutz':
      return { ...base, title: 'Datenschutzerklärung | performanceboost', description: 'Wie performanceboost Personendaten nach Schweizer DSG und DSGVO bearbeitet.', schema: null };
    case 'skills': {
      const title = 'Selbst-Checks & Rechner für Ihre Neukundengewinnung | performanceboost';
      const description = 'Kostenlose Selbst-Checks und Rechner, mit denen Sie in wenigen Minuten einschätzen, wo Ihre Neukundengewinnung Potenzial verschenkt.';
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
      const title = 'Ratgeber & Fachbeiträge | performanceboost';
      const description = 'Praxisbeiträge zu Neukundengewinnung, Tracking, Datenschutz und Marketing Automation für Schweizer KMU.';
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

export default function SEOHead({ route }: SEOHeadProps) {
  useEffect(() => {
    const meta = buildMeta(route);
    const canonicalUrl = `${SITE.baseUrl}${route.path === '/' ? '/' : route.path}`;

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.indexable ? 'index, follow, max-image-preview:large' : 'noindex, follow');

    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:type', meta.ogType);
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:image', SITE.portraitUrl);
    setMeta('property', 'og:locale', 'de_CH');
    setMeta('name', 'twitter:card', 'summary_large_image');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (meta.indexable) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    } else if (canonical) {
      canonical.remove();
    }

    document.getElementById('perf-boost-jsonld')?.remove();
    if (meta.schema) {
      const script = document.createElement('script');
      script.id = 'perf-boost-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(meta.schema);
      document.head.appendChild(script);
    }
  }, [route]);

  return null;
}
