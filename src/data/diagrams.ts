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
        { title: 'Recherche & Daten', sub: 'Markt, Mitbewerber, eigene Anfragen', ai: 'Agent: recherchiert Markt, Mitbewerber und Anfragen', icon: 'Search' },
        { title: 'Zielkunden & Positionierung', sub: 'Wen gewinnen, mit welchem Versprechen', ai: 'KI: verdichtet Muster, Team entscheidet im Workshop', icon: 'Target' },
        { title: 'Kanäle & Budget', sub: 'Was eine Anfrage kosten darf', ai: 'KI: rechnet Szenarien durch, Team legt Budget fest', icon: 'PiggyBank' },
        { title: 'Kriterien für Systeme', sub: 'Lead-Scoring, Kampagnenziele, Kennzahlen', ai: 'Regel: Kriterien fliessen ins Scoring und in Kampagnen', icon: 'Filter' },
        { title: 'Plan für 12 Monate', sub: 'Prioritäten, Verantwortung, Automatisierung', ai: 'Agent wertet aus, Plan wird laufend nachgeschärft', icon: 'Calendar' },
      ],
    },
  },
  'demand-generation': {
    title: 'Kampagnen, die aus Aufträgen lernen',
    text: 'Die Werbeplattformen optimieren auf das, was man ihnen meldet. Deshalb fliessen qualifizierte Anfragen aus dem CRM zurück in die Werbekonten, wo die Plattform es zulässt. Feste Prüfungen laufen täglich, über Budget und Gebote entscheidet ein Mensch.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Zielgruppe erreichen', sub: 'LinkedIn, Meta, Inhalte', ai: 'KI: entwirft Anzeigenvarianten, Team gibt frei', icon: 'Megaphone' },
        { title: 'Suchende abholen', sub: 'Google Ads, Suchbegriffe', ai: 'Agent schlägt Suchbegriffe vor, Team gibt frei', icon: 'Search' },
        { title: 'Anfrage', sub: 'Landingpage mit klarem Angebot', ai: 'KI: fasst Anfrage zusammen und ordnet ein', icon: 'MousePointerClick' },
        { title: 'Im CRM bewertet', sub: 'Mit Quelle, zurück an die Werbekonten', ai: 'Regel: meldet zurück, wo die Plattform es zulässt', icon: 'Repeat' },
        { title: 'Übergabe an den Vertrieb', sub: 'Budget und Gebote gibt ein Mensch frei', ai: 'Agent wertet aus, Regeln werden laufend nachgeschärft', icon: 'Handshake' },
      ],
    },
  },
  'lead-generation': {
    title: 'Ihre Website als Zentrum der Anfragen',
    text: 'Interessenten finden Sie über Google, KI-Assistenten, Inhalte oder die Direktansprache. Auf der Website fragen sie einfach an, und jede Anfrage kommt angereichert und bewertet beim Vertrieb an.',
    spec: {
      type: 'hub',
      center: { title: 'Ihre Website', sub: 'Klares Angebot, einfacher Weg zur Anfrage', ai: 'KI: ordnet jede Anfrage ein, Regeln leiten weiter', icon: 'Globe' },
      nodes: [
        { title: 'SEO & GEO', sub: 'Bei Google und in KI-Antworten', ai: 'Regel: prüft KI-Antworten mit festem Fragenset', icon: 'Search' },
        { title: 'Inhalte', sub: 'KI-Entwurf, Fachwissen von Ihnen', ai: 'KI: entwirft aus Ihrem Fachwissen, Team gibt frei', icon: 'FileText' },
        { title: 'Direktansprache', sub: 'Recherchiert, nach Freigabe versendet', ai: 'Agent: recherchiert Firma, Team gibt Versand frei', icon: 'Send' },
        { title: 'Landingpages', sub: 'Pro Angebot eine Seite', ai: 'KI: entwirft Varianten, Tests zeigen, was trägt', icon: 'MousePointerClick' },
        { title: 'Anreicherung', sub: 'Firmendaten aus öffentlichen Quellen', ai: 'Agent: ergänzt Firmendaten aus öffentlichen Quellen', icon: 'Database' },
        { title: 'Lead-Scoring', sub: 'Regel mit Begründung', ai: 'Regel bewertet, KI liefert die Begründung', icon: 'Star' },
      ],
    },
  },
  'marketing-automation': {
    title: 'Was nach einer Anfrage automatisch passiert',
    text: 'Erfassung und Zuweisung laufen nach festen Regeln, weil sie dort am verlässlichsten sind. KI fasst zusammen und bereitet Entwürfe vor. Was persönlich an Kunden geht, gibt Ihr Team frei.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Anfrage geht ein', sub: 'Website, Formular, Kampagne', ai: 'KI: liest Anfrage und erkennt das Anliegen', icon: 'Mail' },
        { title: 'Automatisch im CRM', sub: 'Regel: mit Quelle, zugewiesen', ai: 'Regel: übergibt mit Quelle ins CRM', icon: 'Database' },
        { title: 'Zusammenfassung & Bewertung', sub: 'KI fasst zusammen, Scoring ordnet ein', ai: 'KI: fasst zusammen und ordnet ein', icon: 'Sparkles' },
        { title: 'Nachfass-Strecke', sub: 'E-Mails aus freigegebenen Bausteinen', ai: 'KI wählt Baustein, Regel versendet nur Freigegebenes', icon: 'Repeat' },
        { title: 'Übergabe an den Vertrieb', sub: 'Zum richtigen Zeitpunkt', ai: 'Agent wertet aus, Strecken werden laufend nachgeschärft', icon: 'Handshake' },
      ],
    },
  },
  'sales-enablement': {
    title: 'Vorbereitet in jedes Gespräch',
    text: 'Verkaufswissen liegt an einem Ort, auf den Ihr Team und ein Agent zugreifen. Der Agent bereitet vor und fasst nach, das Gespräch und die Offerte bleiben bei Ihrem Vertrieb.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Termin im CRM', sub: 'Löst die Vorbereitung aus', ai: 'Regel: löst die Vorbereitung im CRM aus', icon: 'Calendar' },
        { title: 'Recherche', sub: 'Firma, Personen, Verlauf, Referenzen', ai: 'Agent: recherchiert Firma, Personen und Verlauf', icon: 'Bot' },
        { title: 'Gespräch', sub: 'Ihr Vertrieb führt', ai: 'KI: liefert Briefing, Gespräch führt Ihr Team', icon: 'Phone' },
        { title: 'Nachbereitung', sub: 'Notizen, Aufgaben, Nachfass-Entwurf', ai: 'KI: entwirft Notizen, Aufgaben und Nachfass', icon: 'FileText' },
        { title: 'Freigabe & Abschluss', sub: 'Offerte und Versand durch Ihr Team', ai: 'Team gibt frei, Vorlagen werden laufend nachgeschärft', icon: 'Handshake' },
      ],
    },
  },
  'revenue-operations': {
    title: 'Ein gemeinsames Fundament für alle Teams',
    text: 'Revenue Operations (RevOps) sorgt dafür, dass Marketing, Vertrieb und Kundenbetreuung mit denselben Daten, Definitionen und Zielen arbeiten. Auf diesem Fundament prüfen feste Regeln laufend Datenqualität und Pipeline, ein Agent übernimmt die unklaren Fälle.',
    spec: {
      type: 'hub',
      center: { title: 'Gemeinsame Daten & Definitionen', sub: 'Alle sehen dieselben Zahlen', ai: 'Regel: prüft laufend Daten und Definitionen', icon: 'Target' },
      nodes: [
        { title: 'Marketing', sub: 'Anfragen mit Quelle', ai: 'Regel: jede Anfrage mit Quelle ins CRM', icon: 'Megaphone' },
        { title: 'Vertrieb', sub: 'Verkaufschancen', ai: 'Agent: bereitet Verkaufschancen vor', icon: 'Handshake' },
        { title: 'Kundenbetreuung', sub: 'Bestandskunden', ai: 'KI: erkennt Signale in Bestandskunden-Daten', icon: 'Users' },
        { title: 'CRM', sub: 'Saubere, geprüfte Daten', ai: 'Regel prüft Dubletten, Löschen gibt Team frei', icon: 'Database' },
        { title: 'Prüfungen & KI', sub: 'Regeln zuerst, Agent für Unklares', ai: 'Regel zuerst, Agent klärt unklare Fälle', icon: 'Bot' },
        { title: 'Reporting', sub: 'Gemeinsame Kennzahlen', ai: 'KI fasst zusammen, Regeln werden nachgeschärft', icon: 'BarChart3' },
      ],
    },
  },
  'ai-automation': {
    title: 'Für jeden Schritt die passende Stufe',
    text: 'KI bringt erst dann etwas, wenn Daten, Unternehmenskontext und Abläufe stimmen. Wir bauen von unten nach oben auf und wählen pro Schritt die einfachste Lösung, die verlässlich funktioniert. Die Entscheidung bleibt bei Ihrem Team.',
    spec: {
      type: 'layers',
      nodes: [
        { title: 'Ihr Team entscheidet', sub: 'Prüft, gibt frei, spricht mit Kunden', ai: 'Agent schlägt vor, Team gibt frei', icon: 'UserCheck' },
        { title: 'KI-Unterstützung', sub: 'Recherche, Entwürfe, Zusammenfassungen', ai: 'KI: recherchiert, entwirft, fasst zusammen', icon: 'Sparkles' },
        { title: 'Feste Regeln', sub: 'Wiederkehrende Schritte laufen allein', ai: 'Regel: prüft, meldet und übergibt verlässlich', icon: 'Settings' },
        { title: 'Daten, Kontext & Regeln', sub: 'Freigegebene Tools und Unterlagen', ai: 'Agent arbeitet nur mit freigegebenen Daten', icon: 'Database' },
      ],
    },
  },
  'ki-agenten': {
    title: 'Ein Ablauf, den ein Agent übernimmt',
    text: 'Eine feste Regel filtert den offensichtlichen Spam, der Agent erledigt die Schritte zwischen den Systemen und legt das Ergebnis im CRM ab. Bevor etwas nach aussen geht, prüft und entscheidet Ihr Team.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Neue Anfrage', sub: 'Formular oder E-Mail, auch am Wochenende', ai: 'Regel: nimmt die Anfrage auf und startet den Ablauf', icon: 'Mail' },
        { title: 'Prüfen und einordnen', sub: 'Regel für Spam, Agent für den Rest', ai: 'Regel filtert Spam, Agent ordnet den Rest ein', icon: 'Filter' },
        { title: 'Recherche und CRM', sub: 'Firma, Kontakt, Anfrage angelegt', ai: 'Agent: recherchiert Firma und legt im CRM an', icon: 'Database' },
        { title: 'Antwortentwurf', sub: 'Aus Ihrem Unternehmenskontext', ai: 'Agent: entwirft aus Ihren freigegebenen Unterlagen', icon: 'Bot' },
        { title: 'Freigabe', sub: 'Ihr Team prüft und sendet', ai: 'Team gibt frei, Agent wird laufend nachgeschärft', icon: 'UserCheck' },
      ],
    },
  },
  'martech-stack': {
    title: 'Vom Tool-Wildwuchs zum verbundenen Stack',
    text: 'Zuerst wissen, was da ist und was es kostet. Dann festlegen, welches System führend ist, die Tools verbinden und Zugänge mit klaren Rechten einrichten, damit Automatisierungen und Agenten verlässlich darauf arbeiten.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Inventur', sub: 'Tools, Kosten, Datenflüsse, Schnittstellen', ai: 'Agent: erfasst Tools, Kosten und Datenflüsse', icon: 'Search' },
        { title: 'Zielbild', sub: 'Führende Systeme, was bleibt, was weg kann', ai: 'KI: zeigt Überschneidungen, Team entscheidet', icon: 'Target' },
        { title: 'Verbinden', sub: 'Daten nur einmal erfassen', ai: 'Regel: überträgt Daten zwischen den Systemen', icon: 'Layers' },
        { title: 'Rechte & Protokolle', sub: 'Eigener Zugang pro Workflow und Agent', ai: 'Regel: protokolliert jede Aktion jedes Agenten', icon: 'UserCheck' },
        { title: 'Laufend überwacht', sub: 'Schnittstellen, Kosten, neue Tools', ai: 'Regel meldet Abweichungen, Agent schlägt Lösung vor', icon: 'RefreshCw' },
      ],
    },
  },
  'data-analytics': {
    title: 'Vom Klick bis zum Umsatz, und zurück an die Werbekonten',
    text: 'Wir verbinden Website-Messung und CRM zu einem Regelkreis. So sehen Sie, welcher Kanal Aufträge bringt, und die Gebotsalgorithmen der Werbeplattformen lernen aus denselben Daten.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Sauberes Tracking', sub: 'Tag Manager, auch serverseitig, mit Einwilligung', ai: 'Regel: prüft Tags und Einwilligung laufend', icon: 'MousePointerClick' },
        { title: 'Verknüpfung mit dem CRM', sub: 'Anfrage, Angebot, Auftrag', ai: 'Regel: verknüpft Klick, Anfrage und Auftrag', icon: 'Database' },
        { title: 'Rückmeldung', sub: 'Aufträge an die Plattformen, wo zulässig', ai: 'Regel: meldet zurück, wo die Plattform es zulässt', icon: 'Repeat' },
        { title: 'Tägliche Prüfung', sub: 'Regeln prüfen, ein Modell ordnet ein', ai: 'Regel prüft, KI ordnet Abweichungen ein', icon: 'Zap' },
        { title: 'Bessere Entscheidungen', sub: 'Budget dorthin, wo Aufträge entstehen', ai: 'Agent schlägt vor, Team entscheidet über Budget', icon: 'LineChart' },
      ],
    },
  },
  'ecommerce-performance': {
    title: 'Wo Ihr Shop Käufer verliert',
    text: 'Wir untersuchen jede Stufe vom Besuch bis zum Kauf und verbessern die grössten Abbrüche mit überprüfbaren Tests. Feste Prüfungen laufen täglich über alle Stufen, damit ein Einbruch nicht erst im Monatsbericht auffällt.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Besuch', sub: 'Kampagnen nach Marge, Suche, Direkt', ai: 'KI: ordnet Kampagnen nach Marge ein', icon: 'Globe' },
        { title: 'Produktansicht', sub: 'Texte, Feed, Vertrauen', ai: 'KI: entwirft Produkttexte, Team gibt frei', icon: 'Search' },
        { title: 'Warenkorb', sub: 'Versand, Preise, Hürden', ai: 'Regel: meldet Abbrüche, KI sucht nach Mustern', icon: 'ShoppingCart' },
        { title: 'Checkout', sub: 'Zahlungsarten, Formular, Ausfälle', ai: 'Regel: prüft täglich Zahlungsarten und Ausfälle', icon: 'Wallet' },
        { title: 'Kauf', sub: 'Und der Weg zum Wiederkauf', ai: 'Agent wertet Tests aus, Abläufe werden nachgeschärft', icon: 'CheckCircle2' },
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
        { title: 'Kunden gewinnen', sub: 'Mit Neukundensignal, wo verfügbar', ai: 'Regel: meldet Neukundensignal, wo verfügbar', icon: 'Target' },
        { title: 'Erstkauf', sub: 'Shop, Angebot, Vertrauen', ai: 'KI: entwirft Angebotstexte, Team gibt frei', icon: 'ShoppingCart' },
        { title: 'Wiederkauf', sub: 'Kundenwert steigern', ai: 'KI: schlägt passende Produkte vor', icon: 'Repeat' },
        { title: 'Budget reinvestieren', sub: 'Nach wöchentlich berechnetem Kundenwert', ai: 'Regel rechnet, Agent schlägt vor, Team gibt frei', icon: 'PiggyBank' },
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
        { title: 'Erstkauf', sub: 'Der Anfang der Beziehung', ai: 'Regel: startet die Strecke beim Kauf', icon: 'ShoppingCart' },
        { title: 'Willkommensstrecke', sub: 'Danke, Tipps, Vertrauen', ai: 'KI: entwirft Texte, Team gibt Vorlagen frei', icon: 'Mail' },
        { title: 'Signale', sub: 'Nachkaufzeitpunkt, Nutzung, Pause', ai: 'Regel löst aus, KI ordnet das Verhalten ein', icon: 'Zap' },
        { title: 'Rückgewinnung', sub: 'Inaktive Kunden zurückholen', ai: 'KI schlägt vor, Team legt Angebote fest', icon: 'RefreshCw' },
      ],
    },
  },
  'paid-social-ecommerce': {
    title: 'Vom Umsatz zum tatsächlichen Gewinn',
    text: 'Ein guter ROAS heisst noch nicht, dass Sie verdienen. Wir richten Meta und TikTok auf das aus, was nach allen Kosten übrig bleibt, und melden den Plattformen diesen Wert zurück, sofern Margen im Shop oder ERP verfügbar sind.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Werbeumsatz', sub: 'Was die Plattform als ROAS zeigt', ai: 'Regel: holt Umsatz täglich aus den Plattformen', icon: 'TrendingUp' },
        { title: 'Abzüglich Warenkosten', sub: 'Einkauf, Produktion', ai: 'Regel: zieht Margen aus Shop oder ERP', icon: 'ShoppingCart' },
        { title: 'Abzüglich Versand & Retouren', sub: 'Logistik, Rücksendungen', ai: 'Regel: verrechnet Versand und Retouren', icon: 'RefreshCw' },
        { title: 'Abzüglich Werbekosten', sub: 'Mediabudget', ai: 'KI: ordnet Kosten pro Kampagne ein', icon: 'Megaphone' },
        { title: 'Deckungsbeitrag', sub: 'Danach steuern Budget und Gebote', ai: 'Regel meldet zurück, Team gibt Budget frei', icon: 'Wallet' },
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
        { title: 'Stufe wählen', sub: 'Regel, KI-Unterstützung oder Agent', ai: 'KI: prüft Fälle, Team wählt die Stufe', icon: 'Filter' },
        { title: 'Rechte & Daten', sub: 'Nur was die Aufgabe braucht, DSG geklärt', ai: 'Regel: Agent erhält nur freigegebene Rechte', icon: 'Database' },
        { title: 'Mit echten Fällen testen', sub: 'Ergebnisse und Kosten pro Fall', ai: 'Agent läuft im Testmodus und schlägt nur vor', icon: 'CheckCircle2' },
        { title: 'Freigaben & Protokolle', sub: 'Mensch entscheidet, alles nachvollziehbar', ai: 'Regel: protokolliert, Team gibt frei', icon: 'UserCheck' },
        { title: 'Überwachen', sub: 'Fehler melden, an Menschen übergeben', ai: 'Regel meldet Fehler, Abläufe werden nachgeschärft', icon: 'RefreshCw' },
      ],
    },
  },
  prozesse: {
    title: 'Ihre Systeme, verbunden statt verstreut',
    text: 'Im Zentrum stehen saubere Kundendaten. Darum herum verbinden wir die Tools, die Sie heute nutzen. Feste Workflows übertragen die Daten, Agenten übernehmen die Ausnahmen, jeweils mit eigenem Zugang und Protokoll.',
    spec: {
      type: 'hub',
      center: { title: 'Zentrale Kundendaten', sub: 'CRM als gemeinsame Basis', ai: 'Regel: prüft Kundendaten laufend auf Qualität', icon: 'Database' },
      nodes: [
        { title: 'Website & Formulare', ai: 'KI: liest Anfragen und ordnet sie ein', icon: 'Globe' },
        { title: 'E-Mail & Kalender', ai: 'Agent: schlägt Termine vor, Team bestätigt', icon: 'Mail' },
        { title: 'Offerte & Buchhaltung', ai: 'Regel: überträgt Daten ohne Abtippen', icon: 'FileText' },
        { title: 'Feste Workflows', ai: 'Regel: übernimmt die wiederkehrenden Schritte', icon: 'Settings' },
        { title: 'Reporting', ai: 'KI: fasst Kennzahlen für die Leitung zusammen', icon: 'BarChart3' },
        { title: 'Agenten mit Rechten', ai: 'Agent: klärt Ausnahmen mit eigenem Zugang', icon: 'Bot' },
      ],
    },
  },
  marketing: {
    title: 'Marketing entlang der ganzen Strecke',
    text: 'Wir verbessern den ganzen Weg vom ersten Kontakt bis zum Auftrag. An jeder Stufe messen wir, wo Interessenten abspringen, und spielen die Ergebnisse aus dem CRM an die Werbekonten zurück.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Sichtbarkeit', sub: 'Google, LinkedIn, Meta, SEO, GEO', ai: 'KI: entwirft Inhalte und Anzeigen, Team gibt frei', icon: 'Megaphone' },
        { title: 'Besuch', sub: 'Landingpages mit klarem Angebot', ai: 'KI: entwirft Seitenvarianten für Tests', icon: 'Globe' },
        { title: 'Anfrage', sub: 'Conversion-Optimierung', ai: 'KI: fasst Anfrage zusammen und ordnet ein', icon: 'MousePointerClick' },
        { title: 'Erstgespräch', sub: 'Angereichert, bewertet, schnell beantwortet', ai: 'Agent: recherchiert Firma und Ansprechpartner', icon: 'Phone' },
        { title: 'Auftrag', sub: 'Messbar bis zum Umsatz', ai: 'Regel meldet zurück, Kampagnen werden nachgeschärft', icon: 'Handshake' },
      ],
    },
  },
  sales: {
    title: 'Eine Pipeline, die zeigt, wo Umsatz entsteht',
    text: 'Klare Phasen, Zuständigkeiten und Übergaben im CRM machen sichtbar, wo Verkaufschancen stehen. Agenten übernehmen Recherche und Vorarbeit, Gespräch und Offerte bleiben bei Ihrem Vertrieb.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Neue Anfrage', sub: 'Automatisch erfasst und zugewiesen', ai: 'Regel: erfasst und weist im CRM zu', icon: 'Mail' },
        { title: 'Qualifiziert', sub: 'Gemeinsame Kriterien, vorgeprüft', ai: 'KI: prüft Kriterien vor, Vertrieb entscheidet', icon: 'Filter' },
        { title: 'Gespräch', sub: 'Vorbereitet durch Recherche', ai: 'Agent: recherchiert Firma und Ansprechpartner', icon: 'Phone' },
        { title: 'Angebot', sub: 'Entwurf aus Vorlagen, Nachfassen vorbereitet', ai: 'KI: entwirft Offerte, Team gibt frei', icon: 'FileText' },
        { title: 'Auftrag', sub: 'Mit Quelle bis zum Umsatz', ai: 'Agent wertet aus, Kriterien werden nachgeschärft', icon: 'Handshake' },
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
        { title: 'Anfrage auf der Website', sub: 'Formular oder E-Mail', ai: 'KI: liest Anfrage und erkennt das Anliegen', icon: 'Globe' },
        { title: 'Automatisch im CRM', sub: 'Regel: Kontakt, Firma, Quelle', ai: 'Regel: übergibt mit Quelle ins CRM', icon: 'Database' },
        { title: 'Einordnen & Entwurf', sub: 'KI fasst zusammen, Team prüft', ai: 'KI: fasst zusammen, Team prüft den Entwurf', icon: 'Sparkles' },
        { title: 'Daten an Offerte & Buchhaltung', sub: 'Ohne erneutes Abtippen', ai: 'Regel: überträgt Daten an Offerte und Buchhaltung', icon: 'FileText' },
        { title: 'Bericht an die Geschäftsleitung', sub: 'Regelmässig und automatisch', ai: 'KI fasst zusammen, Abläufe werden nachgeschärft', icon: 'BarChart3' },
      ],
    },
  },
  'vertrieb-optimieren': {
    title: 'Wo im Vertrieb Umsatz verloren geht',
    text: 'Zwischen Anfrage und Auftrag liegen mehrere Stufen. An jeder kann ein Interessent verloren gehen, meist ohne dass es jemand merkt. Automatische Erfassung, Fristen und vorbereitetes Nachfassen schliessen die Lücken.',
    spec: {
      type: 'funnel',
      nodes: [
        { title: 'Anfrage', sub: 'Kommt sie beim Richtigen an?', ai: 'Regel: weist die Anfrage sofort zu', icon: 'Mail' },
        { title: 'Erstreaktion', sub: 'Wie schnell wird geantwortet?', ai: 'KI: entwirft Antwort, Team gibt frei', icon: 'Zap' },
        { title: 'Gespräch', sub: 'Ist der Bedarf klar?', ai: 'Agent: recherchiert Firma und Bedarf vorab', icon: 'Phone' },
        { title: 'Angebot', sub: 'Wird nachgefasst?', ai: 'Regel erinnert, KI entwirft den Nachfass', icon: 'FileText' },
        { title: 'Auftrag', sub: 'Und weiss man, woher er kam?', ai: 'Regel verknüpft Quelle, Kriterien werden nachgeschärft', icon: 'Handshake' },
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
    text: 'Wir bauen den Weg vom ersten Kontakt bis zum Abschluss als ein System und messen, wie viele Interessenten von einer Stufe zur nächsten kommen. Erfassung und Nachfassen laufen automatisch, damit keine Anfrage liegen bleibt.',
    spec: {
      type: 'flow',
      nodes: [
        { title: 'Gefunden werden', sub: `${g.first}, KI-Assistenten`, ai: 'KI: bereitet Inhalte für Suche und KI-Assistenten auf', icon: 'Search' },
        { title: 'Vertrauen aufbauen', sub: 'Klare Website, Referenzen, Inhalte', ai: 'KI: entwirft Inhalte, Team gibt frei', icon: 'Star' },
        { title: 'Anfrage', sub: 'Einfacher Weg per Formular oder E-Mail', ai: 'KI: fasst Anfrage zusammen und ordnet ein', icon: 'MousePointerClick' },
        { title: 'Schnelle Reaktion', sub: 'Automatisch im CRM, Antwort vorbereitet', ai: 'Agent: recherchiert, Antwort gibt Team frei', icon: 'Zap' },
        { title: g.goal, sub: g.sub, ai: 'Agent wertet aus, Regeln werden laufend nachgeschärft', icon: 'Handshake' },
      ],
    },
  };
}
