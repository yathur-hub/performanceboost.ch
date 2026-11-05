/**
 * Themengrafiken pro Unterseite (Typen: src/components/diagrams/Diagram.tsx).
 * Jede Grafik hat eine Überschrift und einen erklärenden Absatz, damit sie als eigener Abschnitt funktioniert.
 * Keine Zahlen oder Ergebnisversprechen.
 */
import type { DiagramSpec } from '../components/diagrams/Diagram';

export interface PageDiagram {
  title: string;
  text: string;
  spec: DiagramSpec;
}

/** Leistungsseiten /leistungen/<slug> */
export const SERVICE_DIAGRAMS: Record<string, PageDiagram> = {
  'growth-strategy': {
    title: 'Vom Ist-Zustand zum umsetzbaren Plan',
    text: 'Wir beginnen bei Ihren Zahlen und Kunden, nicht bei Kanälen. Erst wenn klar ist, wen Sie mit welcher Botschaft gewinnen wollen, legen wir Kanäle und Budget fest.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Bestandsaufnahme', sub: 'Kanäle, Anfragen, Kunden, Zahlen', icon: 'Search' },
        { title: 'Zielkunden & Positionierung', sub: 'Wen gewinnen, mit welchem Versprechen', icon: 'Target' },
        { title: 'Kanäle & Budget', sub: 'Was eine Anfrage kosten darf', icon: 'PiggyBank' },
        { title: 'Plan für 12 Monate', sub: 'Prioritäten, Verantwortung, Kennzahlen', icon: 'Calendar' },
      ],
    },
  },
  'demand-generation': {
    title: 'Vom ersten Kontakt bis zur Anfrage',
    text: 'Viele künftige Kunden suchen heute noch nicht aktiv. Deshalb kombinieren wir Kanäle, die Bekanntheit aufbauen, mit Kanälen, die bestehende Nachfrage abholen.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Zielgruppe erreichen', sub: 'LinkedIn, Meta, Inhalte', icon: 'Megaphone' },
        { title: 'Interesse festigen', sub: 'Retargeting, Fallbeispiele', icon: 'Repeat' },
        { title: 'Suchende abholen', sub: 'Google Ads, Suchbegriffe', icon: 'Search' },
        { title: 'Anfrage', sub: 'Landingpage mit klarem Angebot', icon: 'MousePointerClick' },
        { title: 'Übergabe an den Vertrieb', sub: 'Mit Quelle im CRM', icon: 'Handshake' },
      ],
    },
  },
  'lead-generation': {
    title: 'Ihre Website als Zentrum der Anfragen',
    text: 'Gefunden werden, überzeugen, anfragen: Alle Wege führen auf Ihre Website. Wir sorgen dafür, dass jeder dieser Wege dort mit einer passenden Anfrage endet.',
    spec: {
      type: 'hub',
      center: { title: 'Ihre Website', sub: 'Klares Angebot, einfacher Weg zur Anfrage', icon: 'Globe' },
      nodes: [
        { title: 'SEO', sub: 'Gefunden werden', icon: 'Search' },
        { title: 'Inhalte', sub: 'Fachwissen zeigen', icon: 'FileText' },
        { title: 'Direktansprache', sub: 'LinkedIn, E-Mail', icon: 'Send' },
        { title: 'Landingpages', sub: 'Pro Angebot eine Seite', icon: 'MousePointerClick' },
        { title: 'Formulare', sub: 'Kurz und klar', icon: 'MessageSquare' },
        { title: 'Lead-Bewertung', sub: 'Wer passt am besten', icon: 'Star' },
      ],
    },
  },
  'marketing-automation': {
    title: 'Was nach einer Anfrage automatisch passiert',
    text: 'Keine Anfrage bleibt im Posteingang liegen: Sie landet mit Quelle im CRM, wird bewertet, zugewiesen und begleitet, bis der Vertrieb übernimmt.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Anfrage geht ein', sub: 'Website, Formular, Kampagne', icon: 'Mail' },
        { title: 'Automatisch im CRM', sub: 'Mit Quelle und Angaben', icon: 'Database' },
        { title: 'Bewertung & Zuweisung', sub: 'Passung, Dringlichkeit, Zuständigkeit', icon: 'Filter' },
        { title: 'Nachfass-Strecke', sub: 'E-Mails und Erinnerungen', icon: 'Repeat' },
        { title: 'Übergabe an den Vertrieb', sub: 'Zum richtigen Zeitpunkt', icon: 'Handshake' },
      ],
    },
  },
  'sales-enablement': {
    title: 'Für jede Verkaufsphase das passende Werkzeug',
    text: 'Ihr Vertrieb geht in jede Phase vorbereitet: mit Leitfäden, Unterlagen und Vorlagen, die im Alltag genutzt werden, statt in einem Ordner zu liegen.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Erstkontakt', sub: 'Gesprächsleitfaden, Kurzprofil', icon: 'Phone' },
        { title: 'Bedarfsanalyse', sub: 'Fragenkatalog, Qualifizierung', icon: 'Search' },
        { title: 'Angebot', sub: 'Vorlagen, Fallbeispiele, Nutzenargumente', icon: 'FileText' },
        { title: 'Nachfassen', sub: 'Erinnerungen und Textbausteine', icon: 'Repeat' },
        { title: 'Abschluss', sub: 'Klarer nächster Schritt', icon: 'Handshake' },
      ],
    },
  },
  'revenue-operations': {
    title: 'Ein gemeinsames Fundament für alle Teams',
    text: 'Wenn Marketing, Vertrieb und Kundenbetreuung mit unterschiedlichen Zahlen arbeiten, geht Umsatz verloren. RevOps schafft gemeinsame Daten, Abläufe und Ziele.',
    spec: {
      type: 'hub',
      center: { title: 'Gemeinsame Daten & Ziele', sub: 'Eine Pipeline, eine Wahrheit', icon: 'Target' },
      nodes: [
        { title: 'Marketing', sub: 'Anfragen mit Quelle', icon: 'Megaphone' },
        { title: 'Vertrieb', sub: 'Verkaufschancen', icon: 'Handshake' },
        { title: 'Kundenbetreuung', sub: 'Bestandskunden', icon: 'Users' },
        { title: 'CRM', sub: 'Saubere Daten', icon: 'Database' },
        { title: 'Abläufe', sub: 'Klare Übergaben', icon: 'Settings' },
        { title: 'Reporting', sub: 'Gemeinsame Kennzahlen', icon: 'BarChart3' },
      ],
    },
  },
  'ai-automation': {
    title: 'KI braucht ein solides Fundament',
    text: 'KI bringt erst dann etwas, wenn Daten und Abläufe stimmen. Wir bauen von unten nach oben auf, und die Entscheidung bleibt bei Ihrem Team.',
    spec: {
      type: 'layers',
      nodes: [
        { title: 'Ihr Team entscheidet', sub: 'Mensch prüft und gibt frei', icon: 'UserCheck' },
        { title: 'KI-Unterstützung', sub: 'Recherche, Entwürfe, Zusammenfassungen', icon: 'Sparkles' },
        { title: 'Automatisierte Abläufe', sub: 'Wiederkehrende Schritte laufen allein', icon: 'Settings' },
        { title: 'Saubere Daten & klare Prozesse', sub: 'Die Grundlage für alles darüber', icon: 'Database' },
      ],
    },
  },
  'data-analytics': {
    title: 'Vom Klick bis zum Umsatz nachvollziehbar',
    text: 'Wir verbinden Website-Messung mit den Daten aus Ihrem CRM. So sehen Sie, welcher Kanal nicht nur Klicks, sondern Anfragen und Aufträge bringt.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Sauberes Tracking', sub: 'Google Analytics, Tag Manager, DSG-konform', icon: 'MousePointerClick' },
        { title: 'Zuordnung', sub: 'Welcher Kanal bringt welche Anfrage', icon: 'Filter' },
        { title: 'Verknüpfung mit dem CRM', sub: 'Anfrage, Angebot, Auftrag', icon: 'Database' },
        { title: 'Dashboard', sub: 'Wenige Kennzahlen, die zählen', icon: 'BarChart3' },
        { title: 'Bessere Entscheidungen', sub: 'Budget dorthin, wo Aufträge entstehen', icon: 'LineChart' },
      ],
    },
  },
  'ecommerce-performance': {
    title: 'Wo Ihr Shop Käufer verliert',
    text: 'Wir untersuchen jede Stufe vom Besuch bis zum Kauf, finden die grössten Abbrüche und verbessern sie mit überprüfbaren Tests.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Besuch', sub: 'Kampagnen, Suche, Direkt', icon: 'Globe' },
        { title: 'Produktansicht', sub: 'Bilder, Nutzen, Vertrauen', icon: 'Search' },
        { title: 'Warenkorb', sub: 'Versand, Preise, Hürden', icon: 'ShoppingCart' },
        { title: 'Checkout', sub: 'Zahlungsarten, Formular', icon: 'Wallet' },
        { title: 'Kauf', sub: 'Und der Weg zum Wiederkauf', icon: 'CheckCircle2' },
      ],
    },
  },
  'dtc-growth-acquisition': {
    title: 'Der Kreislauf profitabler Kundengewinnung',
    text: 'Entscheidend ist nicht der günstigste Erstkauf, sondern was ein Kunde über die Zeit einbringt. Daran richten wir Budget und Kampagnen aus.',
    spec: {
      type: 'cycle',
      center: 'Profitables Wachstum',
      nodes: [
        { title: 'Kunden gewinnen', sub: 'Kosten pro Neukunde kennen', icon: 'Target' },
        { title: 'Erstkauf', sub: 'Shop, Angebot, Vertrauen', icon: 'ShoppingCart' },
        { title: 'Wiederkauf', sub: 'Kundenwert steigern', icon: 'Repeat' },
        { title: 'Budget reinvestieren', sub: 'Dort, wo es sich rechnet', icon: 'PiggyBank' },
      ],
    },
  },
  'customer-retention': {
    title: 'Aus Erstkäufern werden Stammkunden',
    text: 'Automatische E-Mails und Angebote begleiten Ihre Kunden nach dem Kauf, holen sie zurück und machen aus einmaligen Käufern wiederkehrende.',
    spec: {
      type: 'cycle',
      center: 'Stammkunden',
      nodes: [
        { title: 'Erstkauf', sub: 'Der Anfang der Beziehung', icon: 'ShoppingCart' },
        { title: 'Willkommensstrecke', sub: 'Danke, Tipps, Vertrauen', icon: 'Mail' },
        { title: 'Wiederkauf-Impulse', sub: 'Zur richtigen Zeit', icon: 'Zap' },
        { title: 'Rückgewinnung', sub: 'Inaktive Kunden zurückholen', icon: 'RefreshCw' },
      ],
    },
  },
  'paid-social-ecommerce': {
    title: 'Vom Umsatz zum tatsächlichen Gewinn',
    text: 'Ein guter ROAS heisst noch nicht, dass Sie verdienen. Wir steuern Meta und TikTok nach dem, was nach allen Kosten übrig bleibt.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Werbeumsatz', sub: 'Was die Plattform als ROAS zeigt', icon: 'TrendingUp' },
        { title: 'Abzüglich Warenkosten', sub: 'Einkauf, Produktion', icon: 'ShoppingCart' },
        { title: 'Abzüglich Versand & Retouren', sub: 'Logistik, Rücksendungen', icon: 'RefreshCw' },
        { title: 'Abzüglich Werbekosten', sub: 'Mediabudget', icon: 'Megaphone' },
        { title: 'Deckungsbeitrag', sub: 'Danach steuern wir', icon: 'Wallet' },
      ],
    },
  },
};

/** Hubs /leistungen/<feld> */
export const AREA_DIAGRAMS: Record<string, PageDiagram> = {
  strategie: {
    title: 'Unser Weg von der Analyse zur Wirkung',
    text: 'Strategie ist bei uns kein Dokument, sondern der erste Schritt einer Umsetzung. Jede Phase baut auf der vorherigen auf und wird gemessen.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Analyse', sub: 'Zahlen, Kunden, Abläufe, Systeme', icon: 'Search' },
        { title: 'Prioritäten', sub: 'Was den grössten Hebel hat', icon: 'Filter' },
        { title: 'Strategie', sub: 'Wachstum, Digitalisierung, Technologie', icon: 'Compass' },
        { title: 'Umsetzung', sub: 'Selbst umgesetzt oder begleitet', icon: 'Settings' },
        { title: 'Messbare Wirkung', sub: 'Kennzahlen, die alle verstehen', icon: 'LineChart' },
      ],
    },
  },
  'technologie-automation': {
    title: 'Ihre Systeme, verbunden statt verstreut',
    text: 'Im Zentrum stehen saubere Kundendaten. Darum herum verbinden wir die Tools, die Sie heute nutzen, damit Daten nur einmal erfasst werden.',
    spec: {
      type: 'hub',
      center: { title: 'Zentrale Kundendaten', sub: 'CRM als gemeinsame Basis', icon: 'Database' },
      nodes: [
        { title: 'Website & Formulare', icon: 'Globe' },
        { title: 'E-Mail & Kalender', icon: 'Mail' },
        { title: 'Offerte & Buchhaltung', icon: 'FileText' },
        { title: 'Projekte & Aufgaben', icon: 'Briefcase' },
        { title: 'Reporting', icon: 'BarChart3' },
        { title: 'KI-Assistenz', icon: 'Sparkles' },
      ],
    },
  },
  'wachstum-marketing': {
    title: 'Wachstum entlang der ganzen Strecke',
    text: 'Wir optimieren nicht einzelne Kampagnen, sondern den gesamten Weg vom ersten Kontakt bis zum Auftrag. Jede Stufe wird gemessen und verbessert.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Sichtbarkeit', sub: 'Google, LinkedIn, Meta, SEO', icon: 'Megaphone' },
        { title: 'Besuch', sub: 'Landingpages mit klarem Angebot', icon: 'Globe' },
        { title: 'Anfrage', sub: 'Conversion-Optimierung', icon: 'MousePointerClick' },
        { title: 'Erstgespräch', sub: 'Schnelle Reaktion, Vorqualifizierung', icon: 'Phone' },
        { title: 'Auftrag', sub: 'Messbar bis zum Umsatz', icon: 'Handshake' },
      ],
    },
  },
  'sales-revenue-operations': {
    title: 'Eine Pipeline, die zeigt, wo Umsatz entsteht',
    text: 'Klare Phasen, Zuständigkeiten und Übergaben im CRM machen sichtbar, wo Verkaufschancen stehen und wo sie verloren gehen.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Neue Anfrage', sub: 'Automatisch erfasst und zugewiesen', icon: 'Mail' },
        { title: 'Qualifiziert', sub: 'Gemeinsame Definition mit Marketing', icon: 'Filter' },
        { title: 'Angebot', sub: 'Vorlagen und Nachfass-Erinnerungen', icon: 'FileText' },
        { title: 'Verhandlung', sub: 'Nächste Schritte im Blick', icon: 'MessageSquare' },
        { title: 'Auftrag', sub: 'Mit Quelle bis zum Umsatz', icon: 'Handshake' },
      ],
    },
  },
};

/** Lösungen nach Herausforderung /loesungen/<slug> */
export const CHALLENGE_DIAGRAMS: Record<string, PageDiagram> = {
  prozessautomatisierung: {
    title: 'Ein Beispiel: eine Anfrage ohne Handarbeit',
    text: 'So kann ein typischer Ablauf aussehen, wenn Ihre Systeme verbunden sind. Jeder Schritt, der heute von Hand passiert, läuft automatisch.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Anfrage auf der Website', sub: 'Formular oder E-Mail', icon: 'Globe' },
        { title: 'Automatisch im CRM', sub: 'Kontakt, Firma, Quelle', icon: 'Database' },
        { title: 'Aufgabe & Info ans Team', sub: 'Zuständige Person wird benachrichtigt', icon: 'Users' },
        { title: 'Daten an Offerte & Buchhaltung', sub: 'Ohne erneutes Abtippen', icon: 'FileText' },
        { title: 'Bericht an die Geschäftsleitung', sub: 'Regelmässig und automatisch', icon: 'BarChart3' },
      ],
    },
  },
  'vertrieb-optimieren': {
    title: 'Wo im Vertrieb Umsatz verloren geht',
    text: 'Zwischen Anfrage und Auftrag liegen mehrere Stufen. An jeder kann ein Interessent verloren gehen, meist ohne dass es jemand merkt.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Anfrage', sub: 'Kommt sie beim Richtigen an?', icon: 'Mail' },
        { title: 'Erstreaktion', sub: 'Wie schnell wird geantwortet?', icon: 'Zap' },
        { title: 'Gespräch', sub: 'Ist der Bedarf klar?', icon: 'Phone' },
        { title: 'Angebot', sub: 'Wird konsequent nachgefasst?', icon: 'FileText' },
        { title: 'Auftrag', sub: 'Und weiss man, woher er kam?', icon: 'Handshake' },
      ],
    },
  },
};

/** Branchenseiten /loesungen/<branche>: gleicher Ablauf, branchenspezifisches Ziel. */
const SECTOR_GOAL: Record<string, { goal: string; sub: string; first: string }> = {
  'saas-software': { goal: 'Demo & Abschluss', sub: 'Qualifizierte Demo-Termine', first: 'Google, LinkedIn, Vergleichsportale' },
  immobilien: { goal: 'Passende Interessenten', sub: 'Besichtigung, Vertrag', first: 'Portale, Google, Meta' },
  'treuhand-unternehmensberatung': { goal: 'Neues Mandat', sub: 'Passend zu Ihrem Angebot', first: 'Google, LinkedIn, Empfehlungen' },
  'b2b-industrie-kmu': { goal: 'Auftrag', sub: 'Projekt oder Rahmenvertrag', first: 'Google, LinkedIn, Messen' },
  'it-dienstleister-msps': { goal: 'Managed-Service-Vertrag', sub: 'Wiederkehrender Umsatz', first: 'Google, LinkedIn' },
  'ingenieur-planungsbuero': { goal: 'Auftrag', sub: 'Private Bauherren, Unternehmen', first: 'Google, Referenzprojekte' },
  'personalvermittler-recruiting': { goal: 'Suchmandat', sub: 'Und passende Kandidaten', first: 'LinkedIn, Google, Stellenportale' },
  'bildung-weiterbildung': { goal: 'Anmeldung', sub: 'Lehrgang, Kurs, Seminar', first: 'Google, Meta, LinkedIn' },
  gesundheitswesen: { goal: 'Neupatientin / Neupatient', sub: 'Termin in Ihrer Praxis', first: 'Google, Bewertungen, Verzeichnisse' },
  handwerk: { goal: 'Direktauftrag', sub: 'Aus Ihrer Region', first: 'Google, Bewertungen, Meta' },
  rechtsanwaelte: { goal: 'Mandat', sub: 'In Ihrem Rechtsgebiet', first: 'Google, Fachartikel, Empfehlungen' },
  'logistik-transport': { goal: 'Direktkunde', sub: 'Weniger Leerfahrten', first: 'Google, LinkedIn' },
  hospitality: { goal: 'Direktbuchung', sub: 'Ohne Provision', first: 'Google, Meta, Hotel-Website' },
};

export function sectorDiagram(slug: string, sectorTitle: string): PageDiagram {
  const g = SECTOR_GOAL[slug] ?? { goal: 'Auftrag', sub: 'Neue Kundin, neuer Kunde', first: 'Google, LinkedIn, Meta' };
  return {
    title: `So entstehen Anfragen für ${sectorTitle}`,
    text: 'Wir bauen den ganzen Weg auf, nicht nur einzelne Kampagnen: vom ersten Kontakt bis zum Abschluss, mit messbaren Übergaben dazwischen.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Gefunden werden', sub: g.first, icon: 'Search' },
        { title: 'Vertrauen aufbauen', sub: 'Klare Website, Referenzen, Inhalte', icon: 'Star' },
        { title: 'Anfrage', sub: 'Einfacher Weg per Formular oder Telefon', icon: 'MousePointerClick' },
        { title: 'Schnelle Reaktion', sub: 'Im CRM erfasst, nachgefasst', icon: 'Zap' },
        { title: g.goal, sub: g.sub, icon: 'Handshake' },
      ],
    },
  };
}
