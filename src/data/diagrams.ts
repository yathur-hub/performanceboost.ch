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
    text: 'Wir beginnen bei Ihren Zahlen und Kunden, nicht bei Kanälen. Recherche und Auswertung laufen KI-gestützt, die Entscheide fallen im Workshop. Am Ende steht ein Plan, mit dem Ihr Team und Ihre Systeme arbeiten können.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Recherche & Daten', sub: 'Markt, Mitbewerber, eigene Anfragen', icon: 'Search' },
        { title: 'Zielkunden & Positionierung', sub: 'Wen gewinnen, mit welchem Versprechen', icon: 'Target' },
        { title: 'Kanäle & Budget', sub: 'Was eine Anfrage kosten darf', icon: 'PiggyBank' },
        { title: 'Kriterien für Systeme', sub: 'Lead-Scoring, Kampagnenziele, Kennzahlen', icon: 'Filter' },
        { title: 'Plan für 12 Monate', sub: 'Prioritäten, Verantwortung, Automatisierung', icon: 'Calendar' },
      ],
    },
  },
  'demand-generation': {
    title: 'Kampagnen, die aus Aufträgen lernen',
    text: 'Die Werbeplattformen optimieren auf das, was man ihnen meldet. Deshalb fliessen qualifizierte Anfragen aus dem CRM zurück in die Werbekonten, wo die Plattform es zulässt. Feste Prüfungen laufen täglich, über Budget und Gebote entscheidet ein Mensch.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Zielgruppe erreichen', sub: 'LinkedIn, Meta, Inhalte', icon: 'Megaphone' },
        { title: 'Suchende abholen', sub: 'Google Ads, Suchbegriffe', icon: 'Search' },
        { title: 'Anfrage', sub: 'Landingpage mit klarem Angebot', icon: 'MousePointerClick' },
        { title: 'Im CRM bewertet', sub: 'Mit Quelle, zurück an die Werbekonten', icon: 'Repeat' },
        { title: 'Übergabe an den Vertrieb', sub: 'Budget und Gebote gibt ein Mensch frei', icon: 'Handshake' },
      ],
    },
  },
  'lead-generation': {
    title: 'Ihre Website als Zentrum der Anfragen',
    text: 'Interessenten finden Sie über Google, KI-Assistenten, Inhalte oder die Direktansprache. Auf der Website fragen sie einfach an, und jede Anfrage kommt angereichert und bewertet beim Vertrieb an.',
    spec: {
      type: 'hub',
      center: { title: 'Ihre Website', sub: 'Klares Angebot, einfacher Weg zur Anfrage', icon: 'Globe' },
      nodes: [
        { title: 'SEO & GEO', sub: 'Bei Google und in KI-Antworten', icon: 'Search' },
        { title: 'Inhalte', sub: 'KI-Entwurf, Fachwissen von Ihnen', icon: 'FileText' },
        { title: 'Direktansprache', sub: 'Recherchiert, nach Freigabe versendet', icon: 'Send' },
        { title: 'Landingpages', sub: 'Pro Angebot eine Seite', icon: 'MousePointerClick' },
        { title: 'Anreicherung', sub: 'Firmendaten aus öffentlichen Quellen', icon: 'Database' },
        { title: 'Lead-Scoring', sub: 'Regel mit Begründung', icon: 'Star' },
      ],
    },
  },
  'marketing-automation': {
    title: 'Was nach einer Anfrage automatisch passiert',
    text: 'Erfassung und Zuweisung laufen nach festen Regeln, weil sie dort am verlässlichsten sind. KI fasst zusammen und bereitet Entwürfe vor. Was persönlich an Kunden geht, gibt Ihr Team frei.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Anfrage geht ein', sub: 'Website, Formular, Kampagne', icon: 'Mail' },
        { title: 'Automatisch im CRM', sub: 'Regel: mit Quelle, zugewiesen', icon: 'Database' },
        { title: 'Zusammenfassung & Bewertung', sub: 'KI fasst zusammen, Scoring ordnet ein', icon: 'Sparkles' },
        { title: 'Nachfass-Strecke', sub: 'E-Mails aus freigegebenen Bausteinen', icon: 'Repeat' },
        { title: 'Übergabe an den Vertrieb', sub: 'Zum richtigen Zeitpunkt', icon: 'Handshake' },
      ],
    },
  },
  'sales-enablement': {
    title: 'Vorbereitet in jedes Gespräch',
    text: 'Verkaufswissen liegt an einem Ort, auf den Ihr Team und ein Agent zugreifen. Der Agent bereitet vor und fasst nach, das Gespräch und die Offerte bleiben bei Ihrem Vertrieb.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Termin im CRM', sub: 'Löst die Vorbereitung aus', icon: 'Calendar' },
        { title: 'Recherche', sub: 'Firma, Personen, Verlauf, Referenzen', icon: 'Bot' },
        { title: 'Gespräch', sub: 'Ihr Vertrieb führt', icon: 'Phone' },
        { title: 'Nachbereitung', sub: 'Notizen, Aufgaben, Nachfass-Entwurf', icon: 'FileText' },
        { title: 'Freigabe & Abschluss', sub: 'Offerte und Versand durch Ihr Team', icon: 'Handshake' },
      ],
    },
  },
  'revenue-operations': {
    title: 'Ein gemeinsames Fundament für alle Teams',
    text: 'Revenue Operations (RevOps) sorgt dafür, dass Marketing, Vertrieb und Kundenbetreuung mit denselben Daten, Definitionen und Zielen arbeiten. Auf diesem Fundament prüfen feste Regeln laufend Datenqualität und Pipeline, ein Agent übernimmt die unklaren Fälle.',
    spec: {
      type: 'hub',
      center: { title: 'Gemeinsame Daten & Definitionen', sub: 'Alle sehen dieselben Zahlen', icon: 'Target' },
      nodes: [
        { title: 'Marketing', sub: 'Anfragen mit Quelle', icon: 'Megaphone' },
        { title: 'Vertrieb', sub: 'Verkaufschancen', icon: 'Handshake' },
        { title: 'Kundenbetreuung', sub: 'Bestandskunden', icon: 'Users' },
        { title: 'CRM', sub: 'Saubere, geprüfte Daten', icon: 'Database' },
        { title: 'Prüfungen & KI', sub: 'Regeln zuerst, Agent für Unklares', icon: 'Bot' },
        { title: 'Reporting', sub: 'Gemeinsame Kennzahlen', icon: 'BarChart3' },
      ],
    },
  },
  'ai-automation': {
    title: 'Für jeden Schritt die passende Stufe',
    text: 'KI bringt erst dann etwas, wenn Daten, Unternehmenskontext und Abläufe stimmen. Wir bauen von unten nach oben auf und wählen pro Schritt die einfachste Lösung, die verlässlich funktioniert. Die Entscheidung bleibt bei Ihrem Team.',
    spec: {
      type: 'layers',
      nodes: [
        { title: 'Ihr Team entscheidet', sub: 'Prüft, gibt frei, spricht mit Kunden', icon: 'UserCheck' },
        { title: 'KI-Unterstützung', sub: 'Recherche, Entwürfe, Zusammenfassungen', icon: 'Sparkles' },
        { title: 'Feste Regeln', sub: 'Wiederkehrende Schritte laufen allein', icon: 'Settings' },
        { title: 'Daten, Kontext & Regeln', sub: 'Freigegebene Tools und Unterlagen', icon: 'Database' },
      ],
    },
  },
  'ki-agenten': {
    title: 'Ein Ablauf, den ein Agent übernimmt',
    text: 'Eine feste Regel filtert den offensichtlichen Spam, der Agent erledigt die Schritte zwischen den Systemen und legt das Ergebnis im CRM ab. Bevor etwas nach aussen geht, prüft und entscheidet Ihr Team.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Neue Anfrage', sub: 'Formular oder E-Mail, auch am Wochenende', icon: 'Mail' },
        { title: 'Prüfen und einordnen', sub: 'Regel für Spam, Agent für den Rest', icon: 'Filter' },
        { title: 'Recherche und CRM', sub: 'Firma, Kontakt, Anfrage angelegt', icon: 'Database' },
        { title: 'Antwortentwurf', sub: 'Aus Ihrem Unternehmenskontext', icon: 'Bot' },
        { title: 'Freigabe', sub: 'Ihr Team prüft und sendet', icon: 'UserCheck' },
      ],
    },
  },
  'martech-stack': {
    title: 'Vom Tool-Wildwuchs zum verbundenen Stack',
    text: 'Zuerst wissen, was da ist und was es kostet. Dann festlegen, welches System führend ist, die Tools verbinden und Zugänge mit klaren Rechten einrichten, damit Automatisierungen und Agenten verlässlich darauf arbeiten.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Inventur', sub: 'Tools, Kosten, Datenflüsse, Schnittstellen', icon: 'Search' },
        { title: 'Zielbild', sub: 'Führende Systeme, was bleibt, was weg kann', icon: 'Target' },
        { title: 'Verbinden', sub: 'Daten nur einmal erfassen', icon: 'Layers' },
        { title: 'Rechte & Protokolle', sub: 'Eigener Zugang pro Workflow und Agent', icon: 'UserCheck' },
        { title: 'Laufend überwacht', sub: 'Schnittstellen, Kosten, neue Tools', icon: 'RefreshCw' },
      ],
    },
  },
  'data-analytics': {
    title: 'Vom Klick bis zum Umsatz, und zurück an die Werbekonten',
    text: 'Wir verbinden Website-Messung mit den Daten aus Ihrem CRM. So sehen Sie, welcher Kanal Aufträge bringt, und die Gebotsalgorithmen der Werbeplattformen lernen aus denselben Daten.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Sauberes Tracking', sub: 'Tag Manager, auch serverseitig, mit Einwilligung', icon: 'MousePointerClick' },
        { title: 'Verknüpfung mit dem CRM', sub: 'Anfrage, Angebot, Auftrag', icon: 'Database' },
        { title: 'Rückmeldung', sub: 'Aufträge an die Plattformen, wo zulässig', icon: 'Repeat' },
        { title: 'Tägliche Prüfung', sub: 'Regeln prüfen, ein Modell ordnet ein', icon: 'Zap' },
        { title: 'Bessere Entscheidungen', sub: 'Budget dorthin, wo Aufträge entstehen', icon: 'LineChart' },
      ],
    },
  },
  'ecommerce-performance': {
    title: 'Wo Ihr Shop Käufer verliert',
    text: 'Wir untersuchen jede Stufe vom Besuch bis zum Kauf, finden die grössten Abbrüche und verbessern sie mit überprüfbaren Tests. Feste Prüfungen laufen täglich über alle Stufen, damit ein Einbruch nicht erst im Monatsbericht auffällt.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Besuch', sub: 'Kampagnen nach Marge, Suche, Direkt', icon: 'Globe' },
        { title: 'Produktansicht', sub: 'Texte, Feed, Vertrauen', icon: 'Search' },
        { title: 'Warenkorb', sub: 'Versand, Preise, Hürden', icon: 'ShoppingCart' },
        { title: 'Checkout', sub: 'Zahlungsarten, Formular, Ausfälle', icon: 'Wallet' },
        { title: 'Kauf', sub: 'Und der Weg zum Wiederkauf', icon: 'CheckCircle2' },
      ],
    },
  },
  'dtc-growth-acquisition': {
    title: 'Der Kreislauf profitabler Kundengewinnung',
    text: 'Ein günstiger Erstkauf allein sagt wenig. Wichtiger ist, was ein Kunde über die Zeit einbringt. Diese Zahlen berechnet ein fester Ablauf jede Woche neu, und danach richten wir Budget und Kampagnen aus.',
    spec: {
      type: 'cycle',
      center: 'Profitables Wachstum',
      nodes: [
        { title: 'Kunden gewinnen', sub: 'Mit Neukundensignal, wo verfügbar', icon: 'Target' },
        { title: 'Erstkauf', sub: 'Shop, Angebot, Vertrauen', icon: 'ShoppingCart' },
        { title: 'Wiederkauf', sub: 'Kundenwert steigern', icon: 'Repeat' },
        { title: 'Budget reinvestieren', sub: 'Nach wöchentlich berechnetem Kundenwert', icon: 'PiggyBank' },
      ],
    },
  },
  'customer-retention': {
    title: 'Aus Erstkäufern werden Stammkunden',
    text: 'Die Abläufe reagieren auf das Verhalten einzelner Kunden statt auf den Kalender. Feste Regeln lösen aus, KI bereitet Texte und Vorschläge vor, und Angebote legt Ihr Team fest.',
    spec: {
      type: 'cycle',
      center: 'Stammkunden',
      nodes: [
        { title: 'Erstkauf', sub: 'Der Anfang der Beziehung', icon: 'ShoppingCart' },
        { title: 'Willkommensstrecke', sub: 'Danke, Tipps, Vertrauen', icon: 'Mail' },
        { title: 'Signale', sub: 'Nachkaufzeitpunkt, Nutzung, Pause', icon: 'Zap' },
        { title: 'Rückgewinnung', sub: 'Inaktive Kunden zurückholen', icon: 'RefreshCw' },
      ],
    },
  },
  'paid-social-ecommerce': {
    title: 'Vom Umsatz zum tatsächlichen Gewinn',
    text: 'Ein guter ROAS heisst noch nicht, dass Sie verdienen. Wir steuern Meta und TikTok nach dem, was nach allen Kosten übrig bleibt, und melden den Plattformen diesen Wert zurück, sofern Margen im Shop oder ERP verfügbar sind.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Werbeumsatz', sub: 'Was die Plattform als ROAS zeigt', icon: 'TrendingUp' },
        { title: 'Abzüglich Warenkosten', sub: 'Einkauf, Produktion', icon: 'ShoppingCart' },
        { title: 'Abzüglich Versand & Retouren', sub: 'Logistik, Rücksendungen', icon: 'RefreshCw' },
        { title: 'Abzüglich Werbekosten', sub: 'Mediabudget', icon: 'Megaphone' },
        { title: 'Deckungsbeitrag', sub: 'Danach steuern Budget und Gebote', icon: 'Wallet' },
      ],
    },
  },
};

/** Hubs /leistungen/<feld> */
export const AREA_DIAGRAMS: Record<string, PageDiagram> = {
  'ki-im-unternehmen': {
    title: 'So bleibt der Einsatz von Agenten kontrollierbar',
    text: 'Bevor ein Agent arbeitet, steht fest, welche Stufe die Aufgabe braucht, welche Rechte und Daten er erhält und wer freigibt. Im Betrieb zeigen Protokolle, Fehlerquote und Kosten pro Fall, ob er sich bewährt.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Stufe wählen', sub: 'Regel, KI-Unterstützung oder Agent', icon: 'Filter' },
        { title: 'Rechte & Daten', sub: 'Nur was die Aufgabe braucht, DSG geklärt', icon: 'Database' },
        { title: 'Mit echten Fällen testen', sub: 'Ergebnisse und Kosten pro Fall', icon: 'CheckCircle2' },
        { title: 'Freigaben & Protokolle', sub: 'Mensch entscheidet, alles nachvollziehbar', icon: 'UserCheck' },
        { title: 'Überwachen', sub: 'Fehler melden, an Menschen übergeben', icon: 'RefreshCw' },
      ],
    },
  },
  prozesse: {
    title: 'Ihre Systeme, verbunden statt verstreut',
    text: 'Im Zentrum stehen saubere Kundendaten. Darum herum verbinden wir die Tools, die Sie heute nutzen. Feste Workflows übertragen die Daten, Agenten übernehmen die Ausnahmen, jeweils mit eigenem Zugang und Protokoll.',
    spec: {
      type: 'hub',
      center: { title: 'Zentrale Kundendaten', sub: 'CRM als gemeinsame Basis', icon: 'Database' },
      nodes: [
        { title: 'Website & Formulare', icon: 'Globe' },
        { title: 'E-Mail & Kalender', icon: 'Mail' },
        { title: 'Offerte & Buchhaltung', icon: 'FileText' },
        { title: 'Feste Workflows', icon: 'Settings' },
        { title: 'Reporting', icon: 'BarChart3' },
        { title: 'Agenten mit Rechten', icon: 'Bot' },
      ],
    },
  },
  marketing: {
    title: 'Marketing entlang der ganzen Strecke',
    text: 'Wir verbessern den ganzen Weg vom ersten Kontakt bis zum Auftrag. An jeder Stufe messen wir, wo Interessenten abspringen, und spielen die Ergebnisse aus dem CRM an die Werbekonten zurück.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Sichtbarkeit', sub: 'Google, LinkedIn, Meta, SEO, GEO', icon: 'Megaphone' },
        { title: 'Besuch', sub: 'Landingpages mit klarem Angebot', icon: 'Globe' },
        { title: 'Anfrage', sub: 'Conversion-Optimierung', icon: 'MousePointerClick' },
        { title: 'Erstgespräch', sub: 'Angereichert, bewertet, schnell beantwortet', icon: 'Phone' },
        { title: 'Auftrag', sub: 'Messbar bis zum Umsatz', icon: 'Handshake' },
      ],
    },
  },
  sales: {
    title: 'Eine Pipeline, die zeigt, wo Umsatz entsteht',
    text: 'Klare Phasen, Zuständigkeiten und Übergaben im CRM machen sichtbar, wo Verkaufschancen stehen. Agenten übernehmen Recherche und Vorarbeit, Gespräch und Offerte bleiben bei Ihrem Vertrieb.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Neue Anfrage', sub: 'Automatisch erfasst und zugewiesen', icon: 'Mail' },
        { title: 'Qualifiziert', sub: 'Gemeinsame Kriterien, vorgeprüft', icon: 'Filter' },
        { title: 'Gespräch', sub: 'Vorbereitet durch Recherche', icon: 'Phone' },
        { title: 'Angebot', sub: 'Entwurf aus Vorlagen, Nachfassen vorbereitet', icon: 'FileText' },
        { title: 'Auftrag', sub: 'Mit Quelle bis zum Umsatz', icon: 'Handshake' },
      ],
    },
  },
};

/** Lösungen nach Herausforderung /loesungen/<slug> */
export const CHALLENGE_DIAGRAMS: Record<string, PageDiagram> = {
  prozessautomatisierung: {
    title: 'Ein Beispiel: eine Anfrage ohne Handarbeit',
    text: 'So kann ein typischer Ablauf aussehen, wenn Ihre Systeme verbunden sind. Die meisten Schritte erledigen feste Regeln. Nur wo gelesen und eingeordnet werden muss, kommt KI dazu, und was nach aussen geht, prüft ein Mensch.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Anfrage auf der Website', sub: 'Formular oder E-Mail', icon: 'Globe' },
        { title: 'Automatisch im CRM', sub: 'Regel: Kontakt, Firma, Quelle', icon: 'Database' },
        { title: 'Einordnen & Entwurf', sub: 'KI fasst zusammen, Team prüft', icon: 'Sparkles' },
        { title: 'Daten an Offerte & Buchhaltung', sub: 'Ohne erneutes Abtippen', icon: 'FileText' },
        { title: 'Bericht an die Geschäftsleitung', sub: 'Regelmässig und automatisch', icon: 'BarChart3' },
      ],
    },
  },
  'vertrieb-optimieren': {
    title: 'Wo im Vertrieb Umsatz verloren geht',
    text: 'Zwischen Anfrage und Auftrag liegen mehrere Stufen. An jeder kann ein Interessent verloren gehen, meist ohne dass es jemand merkt. Automatische Erfassung, Fristen und vorbereitetes Nachfassen schliessen die Lücken.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Anfrage', sub: 'Kommt sie beim Richtigen an?', icon: 'Mail' },
        { title: 'Erstreaktion', sub: 'Wie schnell wird geantwortet?', icon: 'Zap' },
        { title: 'Gespräch', sub: 'Ist der Bedarf klar?', icon: 'Phone' },
        { title: 'Angebot', sub: 'Wird nachgefasst?', icon: 'FileText' },
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
    text: 'Wir kümmern uns um den ganzen Weg vom ersten Kontakt bis zum Abschluss und messen, wie viele Interessenten von einer Stufe zur nächsten kommen. Erfassung und Nachfassen laufen automatisch, damit keine Anfrage liegen bleibt.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Gefunden werden', sub: `${g.first}, KI-Assistenten`, icon: 'Search' },
        { title: 'Vertrauen aufbauen', sub: 'Klare Website, Referenzen, Inhalte', icon: 'Star' },
        { title: 'Anfrage', sub: 'Einfacher Weg per Formular oder E-Mail', icon: 'MousePointerClick' },
        { title: 'Schnelle Reaktion', sub: 'Automatisch im CRM, Antwort vorbereitet', icon: 'Zap' },
        { title: g.goal, sub: g.sub, icon: 'Handshake' },
      ],
    },
  };
}
