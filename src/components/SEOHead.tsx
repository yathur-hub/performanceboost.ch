import React, { useEffect } from 'react';
import { SERVICES } from '../data/services';
import { RESOURCES_DATA } from '../data/resources';

interface SEOHeadProps {
  currentPath: string;
}

export default function SEOHead({ currentPath }: SEOHeadProps) {
  useEffect(() => {
    // Normalise pathname
    const path = currentPath.replace(/\/$/, '') || '/';
    const baseUrl = 'https://performanceboost.ch';
    const canonicalUrl = `${baseUrl}${path}`;

    // Metadata definition based on current active route
    let seoTitle = 'Performance Boost - B2B & SaaS Growth Strategy & RevOps';
    let seoDesc = 'Ihr Revenue Growth Partner in der Schweiz. Wir verbinden B2B Growth Strategy, Demand Generation und Revenue Operations (RevOps) zu messbarem & planbarem Wachstum — frei von Agentur-Theater.';
    let keywords = 'B2B Growth, Revenue Operations, RevOps Schweiz, Demand Generation, B2B Marketing Agentur Schweiz, SaaS Growth Consulting, HubSpot CRM Integration, Lead Generation, n8n Automation';
    let schemaMarkup: any = null;
    let pageType = 'website';

    // 1. Home Page
    if (path === '/') {
      seoTitle = 'B2B Growth Strategy & Revenue Systems Schweiz | performanceboost';
      seoDesc = 'B2B & SaaS Growth Partner in der Schweiz. Wir vereinen Growth Strategy, Demand Generation & RevOps für planbares, messbares Wachstum. Buchen Sie Ihr kostenloses Wachstumsgespräch.';
      keywords = 'B2B Marketing Schweiz, Revenue Growth Partner, Growth Consulting Graubünden, Demand Gen B2B, Revenue Operations Partner, B2B SaaS Beratung, Leads generieren Schweiz, HubSpot Partner';
      
      // Home JSON-LD (Combining WebSite, Organization & LocalBusiness)
      schemaMarkup = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${baseUrl}/#website`,
            'url': baseUrl,
            'name': 'performanceboost',
            'description': seoDesc,
            'publisher': { '@id': `${baseUrl}/#organization` },
            'inLanguage': 'de-CH'
          },
          {
            '@type': 'LocalBusiness',
            '@id': `${baseUrl}/#organization`,
            'name': 'performanceboost',
            'url': baseUrl,
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://github.com/yathur-hub/performanceboost-brandassets/blob/main/performanceboost%20favicon.png?raw=true'
            },
            'image': 'https://github.com/yathur-hub/performanceboost-brandassets/blob/main/performanceboost%20favicon.png?raw=true',
            'description': 'B2B & SaaS Growth Strategy, Demand Generation und Revenue Operations Beratung für Schweizer KMUs.',
            'telephone': '+41 79 174 15 44',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Chur',
              'postalCode': '7000',
              'addressRegion': 'Graubünden',
              'addressCountry': 'CH'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '46.8508',
              'longitude': '9.5320'
            },
            'priceRange': '$$$',
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+41 79 174 15 44',
              'contactType': 'sales',
              'email': 'yathur@performanceboost.ch',
              'availableLanguage': ['German', 'English']
            },
            'sameAs': [
              'https://www.linkedin.com/company/performanceboost',
              'https://github.com/yathur-hub'
            ]
          }
        ]
      };
    }
    // 2. Solutions View
    else if (path === '/loesungen') {
      seoTitle = 'Ehem. zufälliges B2B-Wachstum automatisieren | Lösungen | performanceboost';
      seoDesc = 'Wir konzipieren branchenspezifische B2B-Wachstumssysteme für B2B Software & Tech (SaaS), Consulting & Professional Services sowie die High-Tech verarbeitende Industrie. Massgeschneidert.';
      keywords = 'B2B SaaS GTM Playbook, Consulting Neukundengewinnung, Industrie Lead Generierung, Schweizer Industrie Digitalisierung, B2B Verkaufstrichter';
      
      schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${canonicalUrl}/#webpage`,
        'url': canonicalUrl,
        'name': seoTitle,
        'description': seoDesc,
        'isPartOf': { '@id': `${baseUrl}/#website` },
        'inLanguage': 'de-CH'
      };
    }
    // 3. About Us View
    else if (path === '/ueber-uns') {
      seoTitle = 'Hinter performanceboost: Growth Strategy ohne Theater & Blabla';
      seoDesc = 'Ihr inhabergeführtes Growth-Beratungshaus in Graubünden. Keine stumpfe Werbeagentur, sondern messerscharfe RevOps & Demand-Exponenten. Lernen Sie Yathur Nathan kennen.';
      keywords = 'Yathur Nathan, performanceboost Team, B2B Berater Schweiz, Growth Advisory Graubünden, Inhouse Growth Partner, RevOps Experte CH, HubSpot Experte';
      
      schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}/#webpage`,
        'url': canonicalUrl,
        'name': seoTitle,
        'description': seoDesc,
        'isPartOf': { '@id': `${baseUrl}/#website` },
        'inLanguage': 'de-CH',
        'mainEntity': {
          '@type': 'Person',
          'name': 'Yathur Nathan',
          'jobTitle': 'Founder & Growth Advisor',
          'worksFor': { '@id': `${baseUrl}/#organization` },
          'sameAs': [
            'https://www.linkedin.com/in/yathurnathan/'
          ]
        }
      };
    }
    // 4. Contact View
    else if (path === '/kontakt') {
      seoTitle = 'Kostenloses B2B-Wachstumsgespräch buchen | performanceboost';
      seoDesc = 'Vereinbaren Sie Ihren unverbindlichen 15-minütigen Growth Audit oder Ihr 30-minütiges Wachstumsgespräch mit Yathur Nathan. Wir analysieren Ihre B2B & SaaS Pipeline live.';
      keywords = 'B2B Growth Audit, Erstgespräch performanceboost, Calendly Buchung, Growthsgespräch, HubSpot Audit Schweiz, Marketing Beratung Chur, RevOps Audit';
      
      schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${canonicalUrl}/#webpage`,
        'url': canonicalUrl,
        'name': seoTitle,
        'description': seoDesc,
        'isPartOf': { '@id': `${baseUrl}/#website` },
        'inLanguage': 'de-CH'
      };
    }
    // 5. Legal Views
    else if (path === '/impressum') {
      seoTitle = 'Impressum & rechtliche Informationen | performanceboost';
      seoDesc = 'Rechtliche Angaben und Kontaktadresse von performanceboost — Yathur Nathan, ansässig in Chur, Graubünden, Schweiz.';
      keywords = 'Impressum performanceboost, Rechtliche Hinweise, Yathur Nathan Chur, Handelsregister Graubünden';
    }
    else if (path === '/datenschutz') {
      seoTitle = 'Datenschutzerklärung (CH-DSG & DSGVO) | performanceboost';
      seoDesc = 'Unsere Richtlinien zum Schutz Ihrer persönlichen Daten bei performanceboost. Erfahren Sie, wie wir Daten DSG- und DSGVO-konform erheben, speichern und tracken.';
      keywords = 'Datenschutzerklärung performanceboost, DSG Compliance, Cookies Tracking, Server Side Tagging Privacy';
    }
    // 6. Dynamic Services / Leistungen Individual Page or Overview
    else if (path.startsWith('/leistungen')) {
      const slug = path.split('/leistungen/')[1];
      const service = SERVICES.find(s => s.slug === slug);

      if (service) {
        // Individual Service SEO
        seoTitle = `${service.title} | B2B Services Schweiz | performanceboost`;
        seoDesc = `${service.shortDesc} ${service.description.substring(0, 110)}... Entdecken Sie deliverables, Metriken und unseren 4-Schritt-Prozess.`;
        keywords = `${service.title}, B2B ${service.title} Schweiz, ${service.id} consulting, HubSpot RevOps, Lead Generation DACH`;
        
        schemaMarkup = {
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${canonicalUrl}/#service`,
          'name': service.title,
          'description': service.shortDesc,
          'provider': { '@id': `${baseUrl}/#organization` },
          'offers': {
            '@type': 'Offer',
            'priceCurrency': 'CHF',
            'priceSpecification': {
              '@type': 'PriceSpecification',
              'description': 'Preise auf individuelle Anfrage basierend auf Komplexität und Scope.'
            }
          }
        };
      } else {
        // Services Overview Page
        seoTitle = 'B2B Marketing & Sales Operations Services | performanceboost';
        seoDesc = 'Unser Leistungsspektrum für B2B & SaaS: Growth Strategy, Demand Generation, Marketing Automation, Sales Playbooks, RevOps, KI n8n-Automation und DSG Tracking.';
        keywords = 'B2B-Leistungen, RevOps Beratung, Demand Generation Agentur, Lead Generation, CRM Automation, Marketing Automation Graubünden, Server-Side Tracking CH';
        
        schemaMarkup = {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${canonicalUrl}/#webpage`,
          'url': canonicalUrl,
          'name': seoTitle,
          'description': seoDesc,
          'isPartOf': { '@id': `${baseUrl}/#website` },
          'inLanguage': 'de-CH'
        };
      }
    }
    // 7. Dynamic Resources Individual Page or Overview
    else if (path.startsWith('/ressourcen')) {
      const parts = path.split('/ressourcen/');
      const afterRessourcen = parts[1];

      if (afterRessourcen) {
        const subParts = afterRessourcen.split('/');
        const fileSlug = subParts.length === 1 ? subParts[0] : subParts[1];
        const resourceItem = RESOURCES_DATA.find(r => r.slug === fileSlug);

        if (resourceItem) {
          // Individual Blog Post or Guide SEO
          pageType = 'article';
          seoTitle = `${resourceItem.title} | performanceboost Playbook`;
          seoDesc = `${resourceItem.description.substring(0, 155)}... B2B Guide von ${resourceItem.author}. Erschienen am ${resourceItem.publishDate}.`;
          keywords = `${resourceItem.tags.join(', ')}, B2B Blog Schweiz, ${resourceItem.title} Leitfaden, Growth Marketing Playbook`;

          schemaMarkup = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${canonicalUrl}/#article`,
            'url': canonicalUrl,
            'headline': resourceItem.title,
            'description': resourceItem.description,
            'datePublished': '2026-06-09T09:54:37Z', // Standard Swiss Time mapping
            'author': {
              '@type': 'Person',
              'name': resourceItem.author,
              'url': `${baseUrl}/ueber-uns`
            },
            'publisher': {
              '@type': 'Organization',
              '@id': `${baseUrl}/#organization`,
              'name': 'performanceboost'
            },
            'inLanguage': 'de-CH'
          };
        }
      } else {
        // Resources Overview Page
        seoTitle = 'B2B Playbooks, Guides & Inbound Ressourcen | performanceboost';
        seoDesc = 'Holen Sie sich erprobte B2B Growth Playbooks, detaillierte Marketing-Guides und DSG-Informationen völlig ungegated. Von Growth Strategen für KMU.';
        keywords = 'B2B Whitepaper, Growth Guides, GTM Tutorials, n8n Automation Vorlagen, LinkedIn Ads Blueprint, Server-Side Tracking Guide, Schweizer DSG-Regeln';
        
        schemaMarkup = {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${canonicalUrl}/#webpage`,
          'url': canonicalUrl,
          'name': seoTitle,
          'description': seoDesc,
          'isPartOf': { '@id': `${baseUrl}/#website` },
          'inLanguage': 'de-CH'
        };
      }
    }

    // Apply Meta updates to DOM
    document.title = seoTitle;

    // Helper to find or create Meta elements
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Standard Description and Keywords
    setMetaTag('name', 'description', seoDesc);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Geo Meta Tags (Crucial for Swiss/Locational target keywords)
    setMetaTag('name', 'geo.region', 'CH-GR');
    setMetaTag('name', 'geo.placename', 'Chur');
    setMetaTag('name', 'geo.position', '46.8508;9.5320');
    setMetaTag('name', 'ICBM', '46.8508, 9.5320');

    // Open Graph Metadata
    setMetaTag('property', 'og:title', seoTitle);
    setMetaTag('property', 'og:description', seoDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', pageType);
    setMetaTag('property', 'og:site_name', 'performanceboost');
    setMetaTag('property', 'og:image', 'https://github.com/yathur-hub/performanceboost-brandassets/blob/main/performanceboost%20favicon.png?raw=true');
    setMetaTag('property', 'og:locale', 'de_CH');

    // Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seoTitle);
    setMetaTag('name', 'twitter:description', seoDesc);
    setMetaTag('name', 'twitter:image', 'https://github.com/yathur-hub/performanceboost-brandassets/blob/main/performanceboost%20favicon.png?raw=true');

    // Dynamic Canonical Link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Dynamic JSON-LD injection
    const existingScript = document.getElementById('perf-boost-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schemaMarkup) {
      const scriptElement = document.createElement('script');
      scriptElement.id = 'perf-boost-jsonld';
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.innerHTML = JSON.stringify(schemaMarkup);
      document.head.appendChild(scriptElement);
    }
  }, [currentPath]);

  return null; // Side effect element only
}
