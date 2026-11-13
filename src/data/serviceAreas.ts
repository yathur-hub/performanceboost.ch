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

export type AreaId = 'ki-im-unternehmen' | 'strategie' | 'technologie-automation' | 'wachstum-marketing' | 'sales-revenue-operations';
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
  /**
   * Leistungen, die im Mega-Menü und auf der Startseite erscheinen (Standard: `services`).
   * So stehen Werbung und Onlineshops nicht mehr vorne, die Seiten bleiben aber erreichbar.
   */
  menuServices?: string[];
  /** Hervorgehobenes Feld: im Mega-Menü und auf der Startseite über die ganze Breite. */
  featured?: boolean;
  /** Belege aus dem eigenen Betrieb (nur bestätigte Abläufe, keine Kundennamen, keine erfundenen Zahlen). */
  practice?: { title: string; intro: string; items: { title: string; desc: string }[] };
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
    id: 'ki-im-unternehmen',
    pillar: 'technology',
    label: 'AI Enablement',
    shortLabel: 'KI im Unternehmen',
    featured: true,
    headline: 'KI im Alltag einsetzen, mit klaren Regeln und messbarem Nutzen.',
    definition:
      'Wir klären mit Ihnen, wo KI in Ihrem Unternehmen tatsächlich etwas bringt, führen sie in die bestehenden Abläufe ein und schulen Ihr Team. Dazu legen wir fest, welche Daten in welches Tool dürfen und wer was freigibt. KI-Agenten übernehmen danach ganze Abläufe, die Entscheidung bleibt bei Ihren Mitarbeitenden.',
    teaser: 'Klären, wo KI etwas bringt, das Team schulen, Regeln festlegen und KI-Agenten ganze Abläufe übernehmen lassen.',
    ctaLabel: 'KI-Einsatz besprechen',
    seoTitle: 'KI im Unternehmen: Einführung, Schulung & KI-Agenten für KMU | performanceboost',
    seoDescription:
      'Wir führen KI in Schweizer KMU ein: Standortbestimmung, Schulung, Regeln für Daten und Tools, KI-Agenten für Marketing und Vertrieb und laufende Begleitung.',
    services: ['ai-automation', 'ki-agenten'],
    topics: [
      { title: 'KI-Standortbestimmung', desc: 'Wo nutzen Ihre Mitarbeitenden KI heute schon, wo entstehen Risiken und welche drei Anwendungen bringen am meisten? Sie erhalten eine priorisierte Liste mit einer Nutzenrechnung pro Anwendung.' },
      { title: 'Schulung des Teams', desc: 'Schulungen mit Ihren eigenen Abläufen und Beispielen, damit KI im Alltag genutzt und nicht nur ausprobiert wird.' },
      { title: 'Regeln für den KI-Einsatz', desc: 'Welche Daten in welches Tool dürfen, welche nie, wer Inhalte freigibt und wie das dokumentiert wird. Kurz, verständlich und abgestimmt auf das Schweizer DSG.' },
      { title: 'Laufende Begleitung', desc: 'Neue Anwendungen prüfen und einführen, Werkzeuge aktuell halten und die Regeln nachführen, wenn sich Tools oder Abläufe ändern.' },
    ],
    challenges: [
      'Mitarbeitende nutzen ChatGPT und andere Tools, aber jede Person auf ihre Weise.',
      'Niemand weiss genau, welche Kundendaten schon in KI-Tools gelandet sind.',
      'Es gibt KI-Lizenzen, aber keinen Nutzen, den jemand beziffern kann.',
      'In den eigentlichen Abläufen von Marketing und Vertrieb hat KI noch nichts verändert.',
    ],
    outcomes: [
      'Drei bis fünf KI-Anwendungen, die im Alltag tatsächlich genutzt werden',
      'Ein Team, das KI sicher und wirksam einsetzt',
      'Schriftliche Regeln für Daten, Tools und Freigaben',
      'Abläufe, die KI-Agenten übernehmen, mit Freigabe durch Ihr Team',
    ],
    tools: ['ai-readiness-assessment', 'ai-use-case-discovery', 'agentic-automation-opportunity-scanner', 'workflow-opportunity-scanner'],
    resources: ['ai-automation-b2b-sales', 'martech-open-source-oder-lizenz'],
    solutions: ['/loesungen/prozessautomatisierung'],
    practice: {
      title: 'So arbeiten wir selbst',
      intro: 'Bei performanceboost laufen dieselben Werkzeuge, die wir Ihnen empfehlen. Einige Beispiele aus dem eigenen Betrieb:',
      items: [
        { title: 'Website-Anfragen', desc: 'Jede Anfrage über unsere Website wird automatisch geprüft, gespeichert und in unser eigenes ERP übernommen. Dort entstehen Kontakt, Firma, Anfrage und die Aufgabe, sie zu beantworten. Die Bestätigung an die anfragende Person kommt in unter einer Sekunde.' },
        { title: 'Recherche vor dem Gespräch', desc: 'Vor einem Erstgespräch recherchiert ein Agent das Unternehmen und bereitet die wichtigsten Informationen auf. Das Gespräch beginnt so nicht bei null.' },
        { title: 'Entwürfe mit Freigabe', desc: 'Antworten und Inhalte bereitet ein Agent vor. Versendet oder veröffentlicht wird erst, wenn ein Mensch den Entwurf geprüft und freigegeben hat.' },
        { title: 'Eigenes ERP', desc: 'Unser System für Kunden, Aufträge und Aufgaben haben wir selbst gebaut. Wir wissen deshalb aus eigener Erfahrung, was es braucht, damit verbundene Systeme im Alltag halten.' },
      ],
    },
    faq: [
      { q: 'Wo fangen wir mit KI am besten an?', a: 'Mit einer Standortbestimmung. Wir schauen, wo KI heute schon genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind. Daraus wählen wir drei bis fünf Anwendungen, die sich zuerst lohnen. Alles andere kommt später oder gar nicht.' },
      { q: 'Wir haben schon ChatGPT-Lizenzen. Reicht das nicht?', a: 'Lizenzen sind der kleinere Teil. Entscheidend ist, ob KI in die Abläufe eingebunden ist, ob das Team weiss, was es damit tun darf, und ob sich der Nutzen messen lässt. Vorhandene Lizenzen lassen sich oft weiter nutzen.' },
      { q: 'Was ist ein KI-Agent?', a: 'Ein KI-Agent erledigt eine Aufgabe über mehrere Schritte selbständig, zum Beispiel eine Anfrage prüfen, ins CRM eintragen und eine Antwort vorbereiten. Bevor etwas nach aussen geht, gibt ein Mensch frei.' },
      { q: 'Wie gehen Sie mit Datenschutz um?', a: 'Bevor eine Anwendung live geht, legen wir fest, welche Personendaten verarbeitet werden, bei welchem Anbieter sie liegen und ob sie die Schweiz oder die EU verlassen. Diese Regeln halten wir schriftlich fest, damit Sie Ihre Pflichten nach dem Schweizer DSG erfüllen können. Eine Rechtsberatung ersetzt das nicht.' },
      { q: 'Wie lange dauert eine Einführung?', a: 'Die Standortbestimmung dauert meist ein bis zwei Wochen, die Einführung mit Schulung je nach Umfang drei bis sechs Wochen. Danach entscheiden Sie, ob wir Sie weiter begleiten.' },
    ],
  },
  {
    id: 'strategie',
    pillar: 'strategy',
    label: 'Strategy & Consulting',
    shortLabel: 'Strategie & Beratung',
    headline: 'Wir klären mit Ihnen, wo sich Ihre nächste Investition lohnt.',
    definition:
      'Wir analysieren, wo Ihr Unternehmen heute Umsatz, Zeit oder Daten liegen lässt, setzen Prioritäten und entwickeln eine Wachstums- und Digitalstrategie, die Ihr Team auch umsetzen kann. Grundlage sind Ihre Ziele und Zahlen, nicht ein Standardkonzept.',
    teaser: 'Herausfinden, wo Umsatz liegen bleibt, Prioritäten setzen und eine Strategie entwickeln, die sich umsetzen lässt.',
    ctaLabel: 'Strategie besprechen',
    seoTitle: 'Strategie & Beratung für KMU | performanceboost',
    seoDescription:
      'Wir analysieren, wo Ihr Unternehmen Umsatz und Zeit liegen lässt, setzen Prioritäten und entwickeln Wachstums- und Digitalstrategien, die sich umsetzen lassen.',
    services: ['growth-strategy'],
    topics: [
      { title: 'Business- und Performance-Analyse', desc: 'Wo entsteht heute Umsatz, wo geht Zeit verloren, welche Zahlen fehlen? Eine nüchterne Bestandsaufnahme von Marketing, Vertrieb und Abläufen.' },
      { title: 'Wachstumsstrategie und Go-to-Market', desc: 'Go-to-Market heisst: welche Märkte Sie mit welchem Angebot, über welche Kanäle und in welcher Reihenfolge angehen.' },
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
      'Ein gemeinsames Bild davon, wo sich der Aufwand am meisten lohnt',
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
    label: 'MarTech & Automation',
    shortLabel: 'MarTech & Automatisierung',
    headline: 'Weniger Handarbeit, weil Ihre Systeme zusammenspielen.',
    definition:
      'Wir räumen Ihren MarTech-Stack auf, also die Programme, mit denen Sie Kunden gewinnen und betreuen: CRM, Website, E-Mail, Tracking und Reporting. Wir verbinden sie, damit Daten nur einmal erfasst werden, und automatisieren wiederkehrende Abläufe. Neue Tools führen wir nur ein, wenn sie einen klaren Zweck haben.',
    teaser: 'Tools aufräumen und verbinden, Abläufe automatisieren und Zahlen schaffen, auf die man sich verlassen kann.',
    ctaLabel: 'Systeme besprechen',
    seoTitle: 'MarTech-Stack, CRM & Automatisierung für KMU | performanceboost',
    seoDescription:
      'Wir räumen den MarTech-Stack von Schweizer KMU auf: weniger Tools, die zusammenarbeiten, Daten nur einmal erfasst, automatisierte Abläufe und verlässliche Zahlen.',
    services: ['martech-stack', 'marketing-automation', 'data-analytics'],
    topics: [
      { title: 'Prozessautomatisierung', desc: 'Wiederkehrende Abläufe wie Datenübertragungen, Benachrichtigungen, Freigaben oder Berichte laufen automatisch statt von Hand.' },
      { title: 'Systemintegration', desc: 'Website, Formulare, CRM, E-Mail und weitere Tools tauschen Daten direkt aus. Weniger doppelte Erfassung, weniger Übertragungsfehler.' },
      { title: 'Datenintegration und Reporting', desc: 'Zahlen aus verschiedenen Quellen in einer Auswertung zusammenführen, damit alle mit denselben Werten arbeiten.' },
      { title: 'Tool-Auswahl ohne Anbieterbindung', desc: 'Wir vergleichen Lizenz- und Open-Source-Lösungen sowie Hosting in der Schweiz oder der EU anhand Ihrer Abläufe, Kosten und Datenschutzanforderungen.' },
    ],
    challenges: [
      'Daten werden mehrfach erfasst oder per Excel zwischen Systemen kopiert.',
      'Wichtige Abläufe hängen an einzelnen Personen.',
      'Die Tools sind vorhanden, werden aber kaum oder unterschiedlich genutzt.',
      'Die Lizenzkosten steigen, und niemand weiss genau, welche Tools noch gebraucht werden.',
    ],
    outcomes: [
      'Weniger Tools, die zusammenarbeiten, und Lizenzkosten, die Sie kennen',
      'Daten, die nur einmal erfasst werden, und weniger Übertragungsfehler',
      'Schnellere Bearbeitung von Anfragen und Aufgaben',
      'Ein dokumentierter Ablauf, den Ihr Team versteht und weiterführen kann',
    ],
    tools: ['martech-stack-inventory', 'process-automation-assessment', 'crm-data-quality-check', 'marketing-automation-maturity-assessment'],
    resources: ['martech-stack-inventur', 'martech-welches-crm', 'martech-daten-nur-einmal-erfassen', 'swiss-dsg-tracking-compliance'],
    solutions: ['/loesungen/prozessautomatisierung'],
    faq: [
      { q: 'Müssen wir neue Software kaufen?', a: 'Meist nicht. Wir prüfen zuerst, was Ihre bestehenden Tools können und welche Abläufe sich damit verbinden lassen. Neue Software empfehlen wir nur, wenn sie eine konkrete Lücke schliesst.' },
      { q: 'Wo fängt man mit Automatisierung am besten an?', a: 'Bei Abläufen, die häufig vorkommen, klar geregelt sind und heute viel Handarbeit verursachen, zum Beispiel die Übernahme von Anfragen ins CRM oder wiederkehrende Berichte. Automatisierung repariert allerdings keinen unklaren Ablauf: Der Prozess muss zuerst sauber definiert sein.' },
      { q: 'Was ist ein MarTech-Stack?', a: 'Alle Programme, mit denen ein Unternehmen Kunden gewinnt und betreut: CRM, Website und Formulare, E-Mail-Versand, Werbekonten, Tracking und Reporting. Entscheidend ist weniger, welche Tools es sind, als ob sie zusammenarbeiten.' },
      { q: 'Empfehlen Sie bestimmte Anbieter?', a: 'Nein, wir sind an kein Tool gebunden. Wir empfehlen, was zu Ihren Abläufen und Ihrem Budget passt, auch wenn das bedeutet, ein Tool abzuschaffen statt ein neues einzuführen.' },
      { q: 'Wie gehen Sie mit Datenschutz um?', a: 'Wir klären vor der Umsetzung, welche Personendaten wohin fliessen, wählen Anbieter mit passenden Datenschutzbedingungen und dokumentieren die Datenflüsse, damit Sie Ihre Pflichten nach dem Schweizer DSG erfüllen können.' },
    ],
  },
  {
    id: 'wachstum-marketing',
    pillar: 'growth',
    label: 'Growth & Marketing',
    shortLabel: 'Wachstum & Marketing',
    headline: 'Mehr passende Anfragen, gemessen bis zum Auftrag.',
    definition:
      'Wir sorgen dafür, dass Ihr Unternehmen planbar mehr passende Anfragen erhält, und messen jede Massnahme bis zur Anfrage und zum Auftrag. Landingpages, Suchmaschinenoptimierung und Kampagnen auf Google, Meta und LinkedIn sind dabei Werkzeuge, kein Selbstzweck. Was wirkt, bauen wir aus, was nicht wirkt, stoppen wir.',
    teaser: 'Landingpages, SEO, Conversion und Kampagnen, ausgerichtet auf Anfragen und Aufträge statt auf Klicks.',
    ctaLabel: 'Wachstumspotenzial prüfen',
    seoTitle: 'Performance Marketing, SEO & Conversion für KMU | performanceboost',
    seoDescription:
      'Kampagnen auf Google, Meta und LinkedIn, SEO, Landingpages und Conversion-Optimierung, abgestimmt auf Ihre Umsatzziele statt auf Klicks.',
    services: ['demand-generation', 'lead-generation', 'ecommerce-performance', 'dtc-growth-acquisition', 'paid-social-ecommerce', 'customer-retention'],
    serviceGroups: [
      { label: 'B2B und Dienstleistung', services: ['lead-generation', 'demand-generation'] },
      { label: 'Für Onlineshops', services: ['ecommerce-performance', 'dtc-growth-acquisition', 'paid-social-ecommerce', 'customer-retention'] },
    ],
    // Werbung und Onlineshops sind Werkzeuge, nicht das Produkt: im Menü und auf der Startseite nur Lead-Generierung.
    menuServices: ['lead-generation'],
    topics: [
      { title: 'Landingpages', desc: 'Seiten, die in wenigen Sekunden erklären, was Sie anbieten und für wen, und den Weg zur Anfrage einfach machen.' },
      { title: 'Conversion-Optimierung', desc: 'Wir finden heraus, warum Besucher nicht anfragen, formulieren überprüfbare Hypothesen und testen Verbesserungen.' },
      { title: 'Suchmaschinenoptimierung und GEO', desc: 'Inhalte und Technik so aufbereiten, dass Suchmaschinen und KI-Assistenten Ihr Angebot verstehen und empfehlen können.' },
      { title: 'Performance Marketing', desc: 'Google Ads, Meta Ads und LinkedIn Ads, gesteuert nach Kosten pro Anfrage und Abschluss.' },
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
      { q: 'Welche Kanäle eignen sich für B2B-KMU?', a: 'Das hängt davon ab, wo Ihre Wunschkunden stehen. Wer aktiv sucht, ist über Google erreichbar. Wer sein Problem noch nicht kennt, muss aktiv angesprochen werden, etwa über LinkedIn. Meist funktioniert eine Kombination besser als ein einzelner Kanal.' },
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
    headline: 'Marketing und Vertrieb ziehen am selben Strang.',
    definition:
      'Wir sorgen dafür, dass aus Anfragen Aufträge werden: mit klaren Abläufen im CRM, einer gemeinsamen Bewertung von Interessenten und verlässlichem Nachfassen. Die Pipeline, also die Übersicht aller offenen Verkaufschancen, zeigt, wo Umsatz verloren geht.',
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
      'Marketing und Vertrieb sind sich nicht einig, was eine gute Anfrage ist.',
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
  'marketing-automation': ['martech-stack', 'revenue-operations', 'ki-agenten'],
  'sales-enablement': ['revenue-operations', 'marketing-automation', 'ki-agenten'],
  'revenue-operations': ['marketing-automation', 'data-analytics', 'sales-enablement'],
  'ai-automation': ['ki-agenten', 'martech-stack', 'marketing-automation'],
  'ki-agenten': ['ai-automation', 'marketing-automation', 'martech-stack'],
  'martech-stack': ['marketing-automation', 'data-analytics', 'ki-agenten'],
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

/** Leistungen für Mega-Menü und Startseite (ohne Werbe- und Shop-Seiten, siehe `menuServices`). */
export function menuServicesOf(area: ServiceArea) {
  return (area.menuServices ?? area.services)
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));
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
    desc: 'Wir klären, wo Ihr Unternehmen Umsatz oder Zeit verliert und welche Massnahmen zuerst kommen.',
    points: ['Potenzial- und Performance-Analyse', 'Wachstums- und Digitalstrategie', 'Positionierung und Zielkunden'],
    href: '/leistungen/strategie',
  },
  {
    id: 'technology',
    label: 'Technology',
    title: 'Systeme und KI, die mitarbeiten',
    desc: 'Wir bauen Systeme und KI-Agenten, die Abläufe übernehmen, und befähigen Ihr Team, sicher damit zu arbeiten.',
    points: ['KI-Einführung, Schulung und Regeln', 'KI-Agenten und Prozessautomatisierung', 'MarTech-Stack, CRM und Tracking'],
    href: '/leistungen/ki-im-unternehmen',
  },
  {
    id: 'growth',
    label: 'Growth',
    title: 'Nachfrage, die zu Aufträgen wird',
    desc: 'Wir gewinnen passende Interessenten und sorgen dafür, dass der Vertrieb sie in Aufträge verwandelt.',
    points: ['Landingpages und Conversion', 'Lead-Management und Vertrieb', 'SEO und Kampagnen'],
    href: '/leistungen/wachstum-marketing',
  },
];
