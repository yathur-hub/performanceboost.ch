/**
 * Leistungsfelder (Business-Performance-Positionierung).
 *
 * Zentrale Quelle für: Hub-Seiten /leistungen/<id>, Gruppierung der Leistungsübersicht, Mega-Menü,
 * Footer, «Passende Leistungen» auf Detailseiten und Startseiten-Teaser.
 * Neue Leistung: in services.ts anlegen und hier in `services` (und ggf. `alsoIn`) eines Feldes eintragen.
 *
 * Texte: Sie-Form, keine Zahlen oder Ergebnisse ohne belegten Kundenfall (docs/business-performance-repositioning/02).
 */
import { SERVICES } from './services';

export type AreaId = 'strategie' | 'technologie-automation' | 'wachstum-marketing' | 'sales-revenue-operations';
export type Pillar = 'strategy' | 'technology' | 'growth';

export interface ServiceArea {
  id: AreaId;
  pillar: Pillar;
  /** Markenbegriff, z. B. «Strategy & Consulting». */
  label: string;
  /** Deutscher Kurzname für Fliesstext und Menüs. */
  shortLabel: string;
  headline: string;
  /** Zitierbare Definition (2–3 Sätze) direkt unter dem H1. */
  definition: string;
  /** Ein Satz für Teaser-Karten. */
  teaser: string;
  ctaLabel: string;
  seoTitle: string;
  seoDescription: string;
  /** Detailseiten (Slugs aus SERVICES), die zu diesem Feld gehören. Reihenfolge = Anzeige. */
  services: string[];
  /** Untergruppe innerhalb des Feldes (z. B. E-Commerce), nur Anzeige. */
  serviceGroups?: { label: string; services: string[] }[];
  /** Themen ohne eigene Detailseite. */
  topics: { title: string; desc: string }[];
  challenges: string[];
  outcomes: string[];
  /** IDs aus SKILLS (/skills). */
  tools: string[];
  /** Slugs aus RESOURCES_DATA. */
  resources: string[];
  /** Pfade zu passenden Lösungsseiten. */
  solutions: string[];
  faq: { q: string; a: string }[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'strategie',
    pillar: 'strategy',
    label: 'Strategy & Consulting',
    shortLabel: 'Strategie & Beratung',
    headline: 'Gute Entscheidungen sind die Grundlage für bessere Ergebnisse.',
    definition:
      'Wir analysieren, wo Ihr Unternehmen heute Umsatz, Zeit oder Daten liegen lässt, setzen Prioritäten und entwickeln eine Wachstums- und Digitalstrategie, die Ihr Team auch umsetzen kann. Grundlage sind Ihre Ziele und Zahlen, nicht ein Standardkonzept.',
    teaser: 'Potenziale erkennen, Prioritäten setzen und eine Strategie entwickeln, die sich umsetzen lässt.',
    ctaLabel: 'Strategie besprechen',
    seoTitle: 'Strategie & Beratung für KMU | performanceboost',
    seoDescription:
      'Wir analysieren, wo Ihr Unternehmen Potenzial liegen lässt, setzen Prioritäten und entwickeln Wachstums- und Digitalstrategien, die sich umsetzen lassen.',
    services: ['growth-strategy'],
    topics: [
      { title: 'Business- und Performance-Analyse', desc: 'Wo entsteht heute Umsatz, wo geht Zeit verloren, welche Zahlen fehlen? Eine nüchterne Bestandsaufnahme von Marketing, Vertrieb und Abläufen.' },
      { title: 'Wachstumsstrategie und Go-to-Market', desc: 'Wunschkunden, Positionierung, Kanäle und Budget: welche Märkte Sie wie angehen und in welcher Reihenfolge.' },
      { title: 'Digitalstrategie', desc: 'Welche Systeme, Daten und Abläufe Ihr Unternehmen in den nächsten Jahren braucht und was davon zuerst kommt.' },
      { title: 'Technologie- und Automationsstrategie', desc: 'Wir klären Ziele, Abläufe und Datenbedarf, bevor über Tools entschieden wird. So richtet sich die Software nach Ihrem Unternehmen und nicht umgekehrt.' },
      { title: 'Strategische Marketingberatung', desc: 'Kernbotschaften, Angebot und Kanalmix für Unternehmen, die Marketing bisher nebenbei betreiben.' },
    ],
    challenges: [
      'Es gibt viele Ideen, aber keine klare Reihenfolge.',
      'Marketing, Vertrieb und Geschäftsleitung verfolgen unterschiedliche Ziele.',
      'Investitionen in Tools oder Kampagnen haben nicht gebracht, was erwartet wurde.',
      'Entscheidungen basieren mehr auf Bauchgefühl als auf Zahlen.',
    ],
    outcomes: [
      'Ein gemeinsames Bild davon, wo das grösste Potenzial liegt',
      'Ein Massnahmenplan mit Prioritäten, Aufwand und Verantwortlichkeiten',
      'Wenige, klar definierte Kennzahlen, an denen Fortschritt gemessen wird',
      'Entscheidungen über Tools und Budgets auf nachvollziehbarer Grundlage',
    ],
    tools: ['growth-opportunity-assessment', 'go-to-market-diagnostic', 'icp-segment-prioritization', 'growth-bottleneck-finder'],
    resources: ['b2b-gtm-playbook-dach'],
    solutions: ['/loesungen/vertrieb-optimieren', '/loesungen/prozessautomatisierung'],
    faq: [
      { q: 'Was ist der Unterschied zu einer klassischen Unternehmensberatung?', a: 'Wir konzentrieren uns auf Marketing, Vertrieb, Daten und digitale Abläufe und setzen die Strategie anschliessend auch selbst um. Finanz-, Rechts- oder Organisationsberatung bieten wir nicht an.' },
      { q: 'Wie läuft eine Strategiearbeit ab?', a: 'Nach einer Bestandsaufnahme Ihrer Zahlen, Kanäle und Abläufe klären wir in einem Workshop Ziele und Wunschkunden. Danach erhalten Sie einen Plan mit Prioritäten, Aufwand und Kennzahlen, den Ihr Team oder wir umsetzen.' },
      { q: 'Brauchen wir zuerst eine Strategie, bevor wir etwas umsetzen?', a: 'Nicht immer. Oft lassen sich offensichtliche Lücken sofort schliessen, etwa ein fehlendes Tracking oder liegengebliebene Anfragen. Eine Strategie lohnt sich, sobald mehrere Massnahmen um Budget und Zeit konkurrieren.' },
      { q: 'Für welche Unternehmen eignet sich das?', a: 'Für Schweizer KMU, die wachsen möchten und dafür Marketing, Vertrieb und Abläufe besser aufeinander abstimmen wollen, typischerweise mit einer Geschäftsleitung, die selbst mitentscheidet.' },
    ],
  },
  {
    id: 'technologie-automation',
    pillar: 'technology',
    label: 'Technology & Automation',
    shortLabel: 'Technologie & Automatisierung',
    headline: 'Intelligente Technologien. Effizientere Prozesse.',
    definition:
      'Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und setzen KI dort ein, wo sie Ihrem Team nachweisbar Arbeit abnimmt. Dabei bauen wir auf den Tools auf, die Sie bereits nutzen, und führen neue nur ein, wenn sie einen klaren Zweck haben.',
    teaser: 'Systeme verbinden, Abläufe automatisieren und KI dort einsetzen, wo sie Arbeit abnimmt.',
    ctaLabel: 'Prozesse besprechen',
    seoTitle: 'KI, Automatisierung & Systemintegration für KMU | performanceboost',
    seoDescription:
      'Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und setzen KI dort ein, wo sie Ihrem Team nachweisbar Arbeit abnimmt.',
    services: ['ai-automation', 'marketing-automation', 'data-analytics'],
    topics: [
      { title: 'Prozessautomatisierung', desc: 'Wiederkehrende Abläufe wie Datenübertragungen, Benachrichtigungen, Freigaben oder Berichte laufen automatisch statt von Hand.' },
      { title: 'Systemintegration', desc: 'Website, Formulare, CRM, E-Mail und weitere Tools tauschen Daten direkt aus. Weniger doppelte Erfassung, weniger Übertragungsfehler.' },
      { title: 'Datenintegration und Reporting', desc: 'Zahlen aus verschiedenen Quellen in einer Auswertung zusammenführen, damit alle mit denselben Werten arbeiten.' },
      { title: 'KI-Anwendungen', desc: 'Recherche, Texte, Zusammenfassungen und Vorqualifizierung mit KI, eingebettet in bestehende Abläufe und mit menschlicher Kontrolle.' },
    ],
    challenges: [
      'Daten werden mehrfach erfasst oder per Excel zwischen Systemen kopiert.',
      'Wichtige Abläufe hängen an einzelnen Personen.',
      'Die Tools sind vorhanden, werden aber kaum oder unterschiedlich genutzt.',
      'Es ist unklar, wo KI im eigenen Unternehmen tatsächlich hilft.',
    ],
    outcomes: [
      'Weniger manuelle Arbeit in wiederkehrenden Abläufen',
      'Weniger Übertragungsfehler und eine höhere Datenqualität',
      'Schnellere Bearbeitung von Anfragen und Aufgaben',
      'Ein dokumentierter Ablauf, den Ihr Team versteht und weiterführen kann',
    ],
    tools: ['workflow-opportunity-scanner', 'process-automation-assessment', 'ai-readiness-assessment', 'ai-use-case-discovery'],
    resources: ['ai-automation-b2b-sales', 'swiss-dsg-tracking-compliance'],
    solutions: ['/loesungen/prozessautomatisierung'],
    faq: [
      { q: 'Müssen wir neue Software kaufen?', a: 'Meist nicht. Wir prüfen zuerst, was Ihre bestehenden Tools können und welche Abläufe sich damit verbinden lassen. Neue Software empfehlen wir nur, wenn sie eine konkrete Lücke schliesst.' },
      { q: 'Wo fängt man mit Automatisierung am besten an?', a: 'Bei Abläufen, die häufig vorkommen, klar geregelt sind und heute viel Handarbeit verursachen, zum Beispiel die Übernahme von Anfragen ins CRM oder wiederkehrende Berichte. Automatisierung repariert allerdings keinen unklaren Ablauf: Der Prozess muss zuerst sauber definiert sein.' },
      { q: 'Wie setzen KMU KI sinnvoll ein?', a: 'Schrittweise und entlang konkreter Anwendungsfälle. Ziel ist selten die vollautomatische Lösung, sondern eine Kombination aus der Erfahrung Ihres Teams und KI, die Vorarbeit leistet. Voraussetzung sind brauchbare Daten und klare Abläufe.' },
      { q: 'Wie gehen Sie mit Datenschutz um?', a: 'Wir klären vor der Umsetzung, welche Personendaten wohin fliessen, wählen Anbieter mit passenden Datenschutzbedingungen und dokumentieren die Datenflüsse, damit Sie Ihre Pflichten nach dem Schweizer DSG erfüllen können.' },
    ],
  },
  {
    id: 'wachstum-marketing',
    pillar: 'growth',
    label: 'Growth & Marketing',
    shortLabel: 'Wachstum & Marketing',
    headline: 'Gezieltes Wachstum statt einzelner Marketingmassnahmen.',
    definition:
      'Wir bauen planbare Nachfrage auf: mit Kampagnen auf Google, Meta und LinkedIn, Suchmaschinenoptimierung und Landingpages, die auf Anfragen und Umsatz ausgerichtet sind und nicht auf Klicks. Jede Massnahme wird gemessen und laufend verbessert.',
    teaser: 'Kampagnen, SEO, Landingpages und Conversion-Optimierung, ausgerichtet auf Anfragen und Umsatz.',
    ctaLabel: 'Wachstumspotenzial prüfen',
    seoTitle: 'Performance Marketing, SEO & Conversion für KMU | performanceboost',
    seoDescription:
      'Kampagnen auf Google, Meta und LinkedIn, SEO, Landingpages und Conversion-Optimierung, abgestimmt auf Ihre Umsatzziele statt auf Klicks.',
    services: ['demand-generation', 'lead-generation', 'ecommerce-performance', 'dtc-growth-acquisition', 'paid-social-ecommerce', 'customer-retention'],
    serviceGroups: [
      { label: 'B2B und Dienstleistung', services: ['demand-generation', 'lead-generation'] },
      { label: 'E-Commerce und Online-Marken', services: ['ecommerce-performance', 'dtc-growth-acquisition', 'paid-social-ecommerce', 'customer-retention'] },
    ],
    topics: [
      { title: 'Performance Marketing', desc: 'Google Ads, Meta Ads und LinkedIn Ads, gesteuert nach Kosten pro Anfrage und Abschluss.' },
      { title: 'Suchmaschinenoptimierung und GEO', desc: 'Inhalte und Technik so aufbereiten, dass Suchmaschinen und KI-Assistenten Ihr Angebot verstehen und empfehlen können.' },
      { title: 'Conversion-Optimierung', desc: 'Wir finden heraus, warum Besucher nicht anfragen, formulieren überprüfbare Hypothesen und testen Verbesserungen.' },
      { title: 'Landingpages', desc: 'Seiten, die in wenigen Sekunden erklären, was Sie anbieten und für wen, und den Weg zur Anfrage einfach machen.' },
    ],
    challenges: [
      'Das Werbebudget steigt, die Zahl passender Anfragen nicht.',
      'Die Website hat Besucher, aber kaum Anfragen.',
      'Neue Kunden kommen fast nur über Empfehlungen.',
      'Niemand weiss genau, welcher Kanal welche Aufträge bringt.',
    ],
    outcomes: [
      'Mehr passende Anfragen aus den Kanälen, die für Sie funktionieren',
      'Höhere Anfragequoten auf Website und Landingpages',
      'Transparenz darüber, was eine Anfrage und ein Neukunde kosten',
      'Budget, das dorthin fliesst, wo Aufträge entstehen',
    ],
    tools: ['demand-generation-gap-analysis', 'lead-generation-diagnostic', 'conversion-path-analysis', 'content-to-pipeline-audit'],
    resources: ['b2b-gtm-playbook-dach', 'why-b2b-lead-gen-is-dead'],
    solutions: ['/loesungen'],
    faq: [
      { q: 'Welche Kanäle eignen sich für B2B-KMU?', a: 'Das hängt davon ab, wo Ihre Wunschkunden stehen. Wer aktiv sucht, ist über Google erreichbar. Wer sein Problem noch nicht kennt, braucht gezielte Ansprache, etwa über LinkedIn. Meist funktioniert eine Kombination besser als ein einzelner Kanal.' },
      { q: 'Wie schnell sehen wir erste Ergebnisse?', a: 'Bei Google Ads und Meta Ads liegen meist nach vier bis acht Wochen belastbare Zahlen vor. Suchmaschinenoptimierung braucht länger, oft drei bis sechs Monate.' },
      { q: 'Was ist Conversion-Optimierung?', a: 'Die systematische Verbesserung von Website und Landingpages, damit mehr Besucher anfragen oder kaufen. Wir starten mit Daten und Beobachtungen, formulieren eine überprüfbare Hypothese, testen die Änderung und messen sie an einer Geschäftskennzahl.' },
      { q: 'Was bedeutet GEO?', a: 'Generative Engine Optimization: Inhalte so aufbereiten, dass KI-Assistenten wie ChatGPT, Perplexity oder Googles KI-Übersichten Ihr Angebot korrekt verstehen und wiedergeben können. Eine Sichtbarkeit in KI-Antworten kann niemand garantieren; klare, strukturierte Inhalte verbessern aber die Grundlage.' },
    ],
  },
  {
    id: 'sales-revenue-operations',
    pillar: 'growth',
    label: 'Sales & Revenue Operations',
    shortLabel: 'Vertrieb & Revenue Operations',
    headline: 'Marketing, Vertrieb und Prozesse greifen ineinander.',
    definition:
      'Wir sorgen dafür, dass aus Anfragen Aufträge werden: mit klaren Abläufen im CRM, einer gemeinsamen Bewertung von Interessenten, verlässlichem Nachfassen und einer Pipeline, die zeigt, wo Umsatz entsteht und wo er verloren geht.',
    teaser: 'CRM, Lead-Management und Vertriebsabläufe, damit aus Anfragen Aufträge werden.',
    ctaLabel: 'Vertrieb besprechen',
    seoTitle: 'CRM, Lead Management & Revenue Operations | performanceboost',
    seoDescription:
      'Wir verbinden Marketing und Vertrieb: CRM, Lead-Bewertung, Nachfassen und eine Pipeline, die zeigt, wo Umsatz entsteht und wo er verloren geht.',
    services: ['revenue-operations', 'sales-enablement', 'marketing-automation'],
    topics: [
      { title: 'CRM-Strategie', desc: 'Welche Daten, Phasen und Zuständigkeiten Ihr CRM abbilden muss, damit es im Alltag genutzt wird.' },
      { title: 'Lead-Management und Lead-Scoring', desc: 'Eine gemeinsame Definition, wann ein Interessent an den Vertrieb geht, und eine Bewertung, die Prioritäten sichtbar macht.' },
      { title: 'Funnel-Optimierung', desc: 'Wo verlieren Sie Interessenten zwischen Anfrage, Angebot und Abschluss? Wir machen die Stufen messbar und schliessen Lücken.' },
      { title: 'Marketing-Sales-Alignment', desc: 'Gemeinsame Ziele und Kennzahlen bis zum Auftrag statt einer Übergabe, nach der niemand mehr hinschaut.' },
      { title: 'Service-Prozesse', desc: 'Anfragen von Kundinnen und Kunden strukturiert erfassen, zuweisen und nachverfolgen.' },
    ],
    challenges: [
      'Anfragen bleiben liegen oder werden zu spät beantwortet.',
      'Das CRM ist unvollständig, und niemand vertraut den Zahlen.',
      'Marketing und Vertrieb sind sich nicht einig, was ein guter Lead ist.',
      'Nachfassen hängt am Gedächtnis einzelner Personen.',
    ],
    outcomes: [
      'Kürzere Reaktionszeiten auf neue Anfragen',
      'Eine Pipeline, die zeigt, wo Verkaufschancen stehen',
      'Klare Zuständigkeiten zwischen Marketing und Vertrieb',
      'Bessere Datenqualität im CRM',
    ],
    tools: ['funnel-leakage-detector', 'lead-routing-assessment', 'crm-data-quality-check', 'follow-up-effectiveness-review'],
    resources: ['why-b2b-lead-gen-is-dead', 'ai-automation-b2b-sales'],
    solutions: ['/loesungen/vertrieb-optimieren'],
    faq: [
      { q: 'Was ist Revenue Operations?', a: 'Revenue Operations (RevOps) bedeutet, dass Marketing, Vertrieb und Kundenbetreuung mit denselben Daten, Abläufen und Zielen arbeiten. Statt drei getrennter Bereiche entsteht ein durchgehender Prozess von der ersten Anfrage bis zum Auftrag.' },
      { q: 'Wir haben schon ein CRM. Warum funktioniert es nicht richtig?', a: 'Häufig fehlt nicht die Technik, sondern die Grundlage: eine gemeinsame Definition, wann ein Interessent an den Vertrieb geht, klare Übergaben, gepflegte Daten und ein Team, das weiss, wie das System gedacht ist. Dort setzen wir zuerst an.' },
      { q: 'Welches CRM empfehlen Sie?', a: 'Das hängt von Ihren Abläufen, Ihrer Teamgrösse und Ihren bestehenden Tools ab. Wir wählen das System erst, wenn klar ist, was es abbilden soll, und arbeiten mit den gängigen Lösungen.' },
      { q: 'Was ist Lead-Scoring?', a: 'Eine Bewertung von Interessenten nach Passung und Interesse. Sie hilft dem Vertrieb, sich zuerst um die Anfragen zu kümmern, die am ehesten zu einem Auftrag führen.' },
    ],
  },
];

export const AREA_IDS = SERVICE_AREAS.map((a) => a.id);

export function isAreaId(slug: string): slug is AreaId {
  return (AREA_IDS as string[]).includes(slug);
}

export function getArea(id: AreaId): ServiceArea {
  const area = SERVICE_AREAS.find((a) => a.id === id);
  if (!area) throw new Error(`Unbekanntes Leistungsfeld: ${id}`);
  return area;
}

/** Hauptfeld einer Leistung = erstes Feld, das sie in `services` führt (marketing-automation → Technologie). */
export function primaryAreaOf(serviceSlug: string): ServiceArea | undefined {
  return SERVICE_AREAS.find((a) => a.services.includes(serviceSlug));
}

/**
 * Passende Leistungen für eine Detailseite: zuerst Geschwister im Hauptfeld, dann Leistungen aus weiteren Feldern,
 * in denen die Leistung ebenfalls vorkommt, zuletzt explizite Querverweise. E-Commerce und B2B werden nicht gemischt.
 */
const CROSS_LINKS: Record<string, string[]> = {
  'growth-strategy': ['data-analytics', 'revenue-operations', 'demand-generation'],
  'demand-generation': ['lead-generation', 'data-analytics', 'marketing-automation'],
  'lead-generation': ['demand-generation', 'marketing-automation', 'growth-strategy'],
  'marketing-automation': ['revenue-operations', 'ai-automation', 'sales-enablement'],
  'sales-enablement': ['revenue-operations', 'marketing-automation', 'ai-automation'],
  'revenue-operations': ['marketing-automation', 'data-analytics', 'sales-enablement'],
  'ai-automation': ['marketing-automation', 'data-analytics', 'sales-enablement'],
  'data-analytics': ['revenue-operations', 'growth-strategy', 'demand-generation'],
  'ecommerce-performance': ['paid-social-ecommerce', 'customer-retention', 'data-analytics'],
  'dtc-growth-acquisition': ['paid-social-ecommerce', 'ecommerce-performance', 'customer-retention'],
  'paid-social-ecommerce': ['dtc-growth-acquisition', 'ecommerce-performance', 'data-analytics'],
  'customer-retention': ['ecommerce-performance', 'marketing-automation', 'dtc-growth-acquisition'],
};

export function relatedServices(serviceSlug: string, limit = 3) {
  const ids = (CROSS_LINKS[serviceSlug] ?? []).filter((s) => s !== serviceSlug);
  return ids
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s))
    .slice(0, limit);
}

export function servicesOf(area: ServiceArea) {
  return area.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));
}

/** Die drei strategischen Säulen für Startseite und Über uns. */
export const PILLARS: { id: Pillar; label: string; title: string; desc: string; points: string[]; href: string }[] = [
  {
    id: 'strategy',
    label: 'Strategy',
    title: 'Klare Prioritäten',
    desc: 'Wir klären, wo Ihr Unternehmen Potenzial liegen lässt und welche Massnahmen zuerst kommen.',
    points: ['Potenzial- und Performance-Analyse', 'Wachstums- und Digitalstrategie', 'Positionierung und Zielkunden'],
    href: '/leistungen/strategie',
  },
  {
    id: 'technology',
    label: 'Technology',
    title: 'Systeme, die zusammenarbeiten',
    desc: 'Wir verbinden Ihre Tools, automatisieren Routinearbeit und setzen KI gezielt ein.',
    points: ['Prozessautomatisierung und Integration', 'CRM und Marketing Automation', 'Tracking, Daten und Reporting'],
    href: '/leistungen/technologie-automation',
  },
  {
    id: 'growth',
    label: 'Growth',
    title: 'Nachfrage, die zu Aufträgen wird',
    desc: 'Wir gewinnen passende Interessenten und sorgen dafür, dass der Vertrieb sie in Aufträge verwandelt.',
    points: ['Performance Marketing und SEO', 'Landingpages und Conversion', 'Lead-Management und Vertrieb'],
    href: '/leistungen/wachstum-marketing',
  },
];
