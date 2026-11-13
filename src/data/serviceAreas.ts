/**
 * Kompetenzbereiche (Positionierung «Boost your performance through agentic marketing, sales & processes.»).
 *
 * Drei Ebenen, strikt getrennt (docs/agentic-positioning/01):
 * - Was wir verbessern: die drei Bereiche Marketing, Sales, Prozesse (`kind: 'area'`).
 * - Was wir konkret leisten: die Leistungen in `services` (Detailseiten aus services.ts).
 * - Wie wir vorgehen: die vier Phasen in src/data/approach.ts (kein Bereich, keine Leistung).
 * Agentic AI ist der Enabler in allen drei Bereichen und hat eine übergreifende Seite (`kind: 'capability'`).
 *
 * Zentrale Quelle für: Hub-Seiten /leistungen/<id>, Navigation, Footer, Startseite, Leistungsübersicht.
 * Texte: Sie-Form, keine Zahlen oder Ergebnisse ohne belegten Kundenfall.
 */
import { SERVICES } from './services';
import type { BrandVisualId } from './visuals';

export type AreaId = 'marketing' | 'sales' | 'prozesse' | 'ki-im-unternehmen';

export interface ServiceArea {
  id: AreaId;
  /** 'area' = einer der drei Kompetenzbereiche, 'capability' = übergreifende Seite (Agentic AI). */
  kind: 'area' | 'capability';
  /** Markenbegriff in Navigation und Karten («Marketing», «Sales», «Prozesse»). */
  label: string;
  /** Name in Breadcrumbs und Fliesstext. */
  shortLabel: string;
  /** Form nach «zu» («Alles zu Prozessen», «Fragen zu Marketing»). */
  labelZu: string;
  /** Deutsche Unterzeile zum Markenbegriff, z. B. «Nachfrage gewinnen». */
  subtitle: string;
  /** Rolle im Gesamtsystem (ein Satz). */
  role: string;
  headline: string;
  /** Zitierbare Definition (2–3 Sätze) direkt unter dem H1. */
  definition: string;
  /** Kartentitel auf Startseite und Übersicht. */
  cardTitle: string;
  /** Nutzensatz für Karten und Menü. */
  teaser: string;
  /** Geschäftsergebnis in einem Satz. */
  outcome: string;
  /** Kompetenzfelder (Kurztitel) für Karten. */
  fields: string[];
  ctaLabel: string;
  seoTitle: string;
  seoDescription: string;
  /** Detailseiten (Slugs aus SERVICES), Reihenfolge = Anzeige. Hauptbereich = erster Bereich, der sie führt. */
  services: string[];
  /** Untergruppen innerhalb des Bereichs (nur Anzeige). */
  serviceGroups?: { label: string; services: string[] }[];
  /** Leistungen in Navigation und auf der Startseite (Standard: `services`). */
  menuServices?: string[];
  /** Was Agenten in diesem Bereich übernehmen und wo ein Mensch entscheidet. */
  agentic?: { title: string; intro: string; items: { task: string; desc: string; human: string }[]; visual?: BrandVisualId; visualCaption?: string };
  /** Eigene Infografik mit kurzer Einordnung, direkt nach Ausgangslage und Zielen. */
  insight?: { visual: BrandVisualId; title: string; text: string };
  /** Was jede der vier Phasen in diesem Bereich konkret bedeutet (Reihenfolge wie PHASES). */
  phaseExamples?: [string, string, string, string];
  /** Belege aus dem eigenen Betrieb (nur bestätigte Abläufe, keine Kundennamen, keine erfundenen Zahlen). */
  practice?: { title: string; intro: string; items: { title: string; desc: string }[] };
  /** Kompetenzfelder ohne eigene Detailseite. */
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

/** Vom Inhaber bestätigte Abläufe aus dem eigenen Betrieb (Prozesse und Agentic AI). */
const OWN_PRACTICE: ServiceArea['practice'] = {
  title: 'So arbeiten wir selbst',
  intro: 'Bei performanceboost laufen dieselben Werkzeuge, die wir Ihnen empfehlen. Einige Beispiele aus dem eigenen Betrieb:',
  items: [
    { title: 'Website-Anfragen', desc: 'Jede Anfrage über unsere Website wird automatisch geprüft, gespeichert und in unser eigenes ERP übernommen. Dort entstehen Kontakt, Firma, Anfrage und die Aufgabe, sie zu beantworten. Die Bestätigung an die anfragende Person kommt in unter einer Sekunde.' },
    { title: 'Recherche vor dem Gespräch', desc: 'Vor einem Erstgespräch recherchiert ein Agent das Unternehmen und bereitet die wichtigsten Informationen auf. Das Gespräch beginnt so nicht bei null.' },
    { title: 'Entwürfe mit Freigabe', desc: 'Antworten und Inhalte bereitet ein Agent vor. Versendet oder veröffentlicht wird erst, wenn ein Mensch den Entwurf geprüft und freigegeben hat.' },
    { title: 'Eigenes ERP', desc: 'Unser System für Kunden, Aufträge und Aufgaben haben wir selbst gebaut. Wir wissen deshalb aus eigener Erfahrung, was es braucht, damit verbundene Systeme im Alltag halten.' },
  ],
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'marketing',
    kind: 'area',
    label: 'Agentic Marketing',
    shortLabel: 'Agentic Marketing',
    labelZu: 'Agentic Marketing',
    subtitle: 'Nachfrage gewinnen',
    role: 'Agentic Marketing erzeugt Nachfrage und begleitet sie bis zur Anfrage. Daten aus Kampagnen, Website und CRM bilden die Grundlage, auf der Regeln, KI und Agenten mitarbeiten.',
    headline: 'Nachfrage, die zu Ihrem Angebot passt, gemessen bis zum Auftrag.',
    definition:
      'Agentic Marketing heisst, Kampagnen, Website, Inhalte und CRM als ein System zu bauen, in dem KI von Anfang an die Grundlage ist. Anfragen und Aufträge fliessen aus dem CRM zurück, damit Kampagnen auf Aufträge statt auf Klicks optimieren. Auf dieser Datenbasis und mit Ihren Angeboten, Kriterien und Markenregeln als Kontext übernehmen KI-Agenten die laufende Arbeit dazwischen, etwa Ursachen von Abweichungen finden, Inhalte entwerfen und neue Anfragen einordnen. Performance Marketing, SEO, GEO und Marketing Automation setzen wir selbst um. Was veröffentlicht wird und wohin das Budget fliesst, entscheidet Ihr Team.',
    cardTitle: 'Nachfrage als System',
    teaser: 'Kampagnen, Website, Inhalte und CRM als ein Regelkreis, der auf Aufträge statt auf Klicks optimiert. Agenten übernehmen Auswertung und Vorarbeit, Ihr Team entscheidet.',
    outcome: 'Mehr passende Anfragen, ohne dass der Aufwand im gleichen Mass wächst.',
    fields: ['Marketing-Agenten', 'Marketingstrategie & Go-to-Market', 'Performance Marketing, SEO & GEO', 'Marketing Automation', 'Tracking & Attribution'],
    ctaLabel: 'Marketing besprechen',
    seoTitle: 'Agentic Marketing für KMU: Performance Marketing, SEO & Automation | performanceboost',
    seoDescription:
      'Agentic Marketing für Schweizer KMU: Performance Marketing, SEO, Marketing Automation und Tracking mit KI-Agenten, gemessen bis zum Auftrag statt bis zum Klick.',
    services: ['growth-strategy', 'demand-generation', 'lead-generation', 'data-analytics', 'ecommerce-performance', 'dtc-growth-acquisition', 'paid-social-ecommerce', 'customer-retention'],
    serviceGroups: [
      { label: 'B2B und Dienstleistung', services: ['growth-strategy', 'demand-generation', 'lead-generation', 'data-analytics'] },
      { label: 'Für Onlineshops', services: ['ecommerce-performance', 'dtc-growth-acquisition', 'paid-social-ecommerce', 'customer-retention'] },
    ],
    // Shop-Seiten bleiben erreichbar (Hub, Übersicht, Footer der Leistungsseiten), stehen aber nicht in Navigation und Startseite.
    menuServices: ['growth-strategy', 'demand-generation', 'lead-generation', 'data-analytics'],
    insight: {
      visual: 'messluecke-performance-marketing',
      title: 'Gemessen wird oft nur bis zum Klick',
      text: 'Ob eine Anzeige gesehen und angeklickt wurde, zeigt jedes Werbekonto. Ob daraus eine Anfrage oder ein Auftrag wurde, steht dort nicht. Wir verbinden Kampagnen, Website und CRM, damit die letzte Zeile nicht offen bleibt und das Budget dorthin fliesst, wo Aufträge entstehen. Dieselbe Verbindung braucht jeder Agent im Marketing. Ein Agent, der nur Klicks sieht, optimiert auf Klicks.',
    },
    agentic: {
      title: 'Wo Agenten im Marketing mitarbeiten',
      intro: 'Agenten arbeiten im Marketing auf den Daten aus Werbekonten, Website und CRM und innerhalb fester Grenzen. Was veröffentlicht wird und wohin das Budget fliesst, entscheidet Ihr Team.',
      items: [
        { task: 'Abweichungen klären', desc: 'Feste Prüfungen vergleichen täglich Kosten pro Anfrage, Suchbegriffe und Auslieferung mit den Zielwerten. Weicht etwas ab, sucht ein Agent die Ursache in Konto- und CRM-Daten und schlägt eine Massnahme vor.', human: 'Budget- und Gebotsänderungen gibt Ihr Team frei. Kleine, umkehrbare Korrekturen laufen erst nach einer Bewährungsphase in festen Limits.' },
        { task: 'Inhalte vorbereiten', desc: 'Entwürfe für Landingpages, Anzeigen und Fachbeiträge entstehen aus Ihren Angeboten, Markenregeln und den Fragen echter Anfragen. Fakten wie Preise oder Leistungsumfang stammen nur aus freigegebenen Unterlagen.', human: 'Veröffentlicht wird erst nach Prüfung, neue Varianten laufen als Test gegen die bestehenden.' },
        { task: 'Anfragen anreichern', desc: 'Neue Anfragen werden mit Firma, Branche und Quelle ergänzt und nach Ihren Kriterien eingeordnet, bevor sie an den Vertrieb gehen.', human: 'Die Einordnung ist begründet und lässt sich jederzeit korrigieren.' },
      ],
    },
    phaseExamples: [
      'Zielkunden, Positionierung und Kanäle festlegen, das Messkonzept bis zum Auftrag aufsetzen und bestimmen, wo Agenten mitarbeiten.',
      'Tracking, Rückfluss aus dem CRM, Landingpages und Kampagnen live bringen, Agenten zuerst nur vorschlagen lassen und die ersten Wochen eng betreuen.',
      'Ihr Team lernt, Auswertungen zu lesen, Entwürfe zu prüfen und freizugeben.',
      'Budget, Botschaften, Seiten und die Regeln der Agenten jeden Monat nach Kosten pro Anfrage und Auftrag anpassen.',
    ],
    topics: [
      { title: 'Positionierung und Botschaften', desc: 'Kernbotschaften, Angebot und Kanalmix für Unternehmen, die Marketing bisher nebenbei betreiben.' },
      { title: 'Landingpages', desc: 'Seiten, die in wenigen Sekunden erklären, was Sie anbieten und für wen, und den Weg zur Anfrage einfach machen.' },
      { title: 'Conversion-Optimierung', desc: 'Wir finden heraus, warum Besucher nicht anfragen, formulieren überprüfbare Hypothesen und testen Verbesserungen.' },
      { title: 'Suchmaschinenoptimierung und GEO', desc: 'Inhalte und Technik so aufbereiten, dass Suchmaschinen und KI-Assistenten Ihr Angebot verstehen und empfehlen können.' },
      { title: 'Marketing Automation', desc: 'Interessenten, die noch nicht bereit sind, erhalten passende Informationen, bis ein Gespräch sinnvoll ist. Regeln steuern den Ablauf, KI hilft bei Entwürfen und Einordnung.' },
    ],
    challenges: [
      'Das Werbebudget steigt, die Zahl passender Anfragen nicht.',
      'Die Website hat Besucher, aber kaum Anfragen.',
      'Neue Kunden kommen fast nur über Empfehlungen.',
      'Niemand weiss genau, welcher Kanal welche Aufträge bringt.',
      'Kampagnen und Inhalte binden viel Handarbeit, für Auswertungen bleibt kaum Zeit.',
    ],
    outcomes: [
      'Mehr passende Anfragen aus den Kanälen, die für Sie funktionieren',
      'Höhere Anfragequoten auf Website und Landingpages',
      'Transparenz darüber, was eine Anfrage und ein Neukunde kosten',
      'Budget, das dorthin fliesst, wo Aufträge entstehen',
      'Weniger Handarbeit bei Überwachung, Berichten und Entwürfen',
    ],
    tools: ['demand-generation-gap-analysis', 'lead-generation-diagnostic', 'conversion-path-analysis', 'go-to-market-diagnostic'],
    resources: ['b2b-gtm-playbook-dach', 'why-b2b-lead-gen-is-dead'],
    solutions: ['/loesungen'],
    faq: [
      { q: 'Welche Kanäle eignen sich für B2B-KMU?', a: 'Das hängt davon ab, wo Ihre Wunschkunden stehen. Wer aktiv sucht, ist über Google erreichbar. Wer sein Problem noch nicht kennt, muss aktiv angesprochen werden, etwa über LinkedIn. Meist funktioniert eine Kombination besser als ein einzelner Kanal.' },
      { q: 'Wie schnell sehen wir erste Ergebnisse?', a: 'Bei Google Ads und Meta Ads liegen meist nach vier bis acht Wochen belastbare Zahlen vor. Suchmaschinenoptimierung braucht länger, oft drei bis sechs Monate.' },
      { q: 'Brauchen wir zuerst eine Marketingstrategie?', a: 'Nicht immer. Oft lassen sich offensichtliche Lücken sofort schliessen, etwa ein fehlendes Tracking oder eine Landingpage ohne klares Angebot. Eine Strategie lohnt sich, sobald mehrere Massnahmen um Budget und Zeit konkurrieren.' },
      { q: 'Was ist Conversion-Optimierung?', a: 'Die systematische Verbesserung von Website und Landingpages, damit mehr Besucher anfragen oder kaufen. Wir starten mit Daten und Beobachtungen, formulieren eine überprüfbare Hypothese, testen die Änderung und messen sie an einer Geschäftskennzahl.' },
      { q: 'Was bedeutet GEO?', a: 'GEO steht für Generative Engine Optimization. Gemeint ist, Inhalte so aufzubereiten, dass KI-Assistenten wie ChatGPT, Perplexity oder die KI-Übersichten von Google Ihr Angebot korrekt verstehen und wiedergeben. Eine Nennung in KI-Antworten kann niemand garantieren, klare und strukturierte Inhalte verbessern aber die Grundlage.' },
      { q: 'Was übernimmt ein Agent im Marketing und was nicht?', a: 'Ein Agent eignet sich für Vorarbeit, bei der Informationen aus mehreren Quellen zusammenkommen, etwa die Ursache einer Abweichung finden, Suchbegriffe prüfen, Inhalte entwerfen oder Anfragen einordnen. Reine Überwachung erledigen feste Prüfungen zuverlässiger. Positionierung, Freigabe von Inhalten und Budgetentscheide bleiben bei Menschen. Selbst ausführen darf ein Agent nur kleine, umkehrbare Änderungen in festen Limits, und erst wenn sich seine Vorschläge bewährt haben.' },
    ],
  },
  {
    id: 'sales',
    kind: 'area',
    label: 'Agentic Sales',
    shortLabel: 'Agentic Sales',
    labelZu: 'Agentic Sales',
    subtitle: 'Aufträge gewinnen',
    role: 'Agentic Sales macht aus Nachfrage Aufträge. Das CRM ist die gemeinsame Datenbasis, auf der Agenten vorqualifizieren, recherchieren und das Nachfassen vorbereiten.',
    headline: 'Aus Anfragen werden planbar Aufträge.',
    definition:
      'Agentic Sales heisst, den Vertrieb um ein CRM als gemeinsame Datenbasis zu bauen, auf der KI die Vorarbeit übernimmt. Feste Regeln erledigen Zuweisung, Erinnerungen und Übergaben. Agenten ordnen Anfragen nach Ihren Kriterien mit nachvollziehbarer Begründung ein, bereiten Gespräche mit Recherche vor und entwerfen das Nachfassen. Das CRM hält fest, was passiert ist, und meldet, wo ein nächster Schritt fehlt. Gespräch, Offerte, Preis und Zusage bleiben bei Ihren Mitarbeitenden.',
    cardTitle: 'Vertrieb mit einem CRM, das mitarbeitet',
    teaser: 'Das CRM als gemeinsame Datenbasis, auf der Regeln und Agenten einordnen, recherchieren und das Nachfassen vorbereiten, damit keine Anfrage liegen bleibt.',
    outcome: 'Kürzere Reaktionszeiten und eine Pipeline, auf die Verlass ist.',
    fields: ['Sales-Agenten', 'CRM & Sales Operations', 'Lead-Management & Qualifizierung', 'Vertriebsautomatisierung', 'Revenue Operations'],
    ctaLabel: 'Vertriebsprozess besprechen',
    seoTitle: 'Agentic Sales für KMU: CRM, Lead-Management & Revenue Operations | performanceboost',
    seoDescription:
      'Agentic Sales für Schweizer KMU: CRM, Lead-Management, Vertriebsautomatisierung und KI-Agenten, damit Anfragen schneller und verlässlicher zu Aufträgen werden.',
    services: ['marketing-automation', 'revenue-operations', 'sales-enablement'],
    agentic: {
      title: 'Wo Agenten im Vertrieb mitarbeiten',
      intro: 'Im Vertrieb arbeiten Agenten mit dem, was im CRM steht, und mit öffentlich zugänglichen Informationen. Je sauberer die Daten, desto brauchbarer die Vorarbeit. Gespräch, Offerte und Entscheid bleiben bei Ihren Mitarbeitenden.',
      items: [
        { task: 'Anfragen vorqualifizieren', desc: 'Eine neue Anfrage wird geprüft, nach Ihren Kriterien eingeordnet und der zuständigen Person mit einer Begründung zugewiesen.', human: 'Ihr Team sieht die Einordnung und kann sie jederzeit ändern.' },
        { task: 'Gespräche vorbereiten', desc: 'Vor einem Termin führt ein Agent CRM-Verlauf, Website und öffentliche Informationen zum Unternehmen auf einer Seite zusammen. So arbeiten wir auch selbst.', human: 'Was davon im Gespräch zählt, entscheidet Ihr Vertrieb.' },
        { task: 'Nachfassen vorbereiten', desc: 'Offene Offerten und ausstehende Rückmeldungen werden erkannt, ein Entwurf für die Nachricht liegt bereit.', human: 'Versendet wird erst nach Freigabe.' },
      ],
      visual: 'reihenfolge-erst-dann-ki',
      visualCaption: 'Bei der Bewertung von Anfragen gilt dieselbe Reihenfolge: zuerst klare Kriterien, dann eine einfache Regel und eine wöchentliche Durchsicht. KI kommt erst danach dazu.',
    },
    phaseExamples: [
      'Verkaufsphasen, Zuständigkeiten und Kriterien für eine qualifizierte Anfrage festlegen und klären, welche Daten Agenten dafür brauchen.',
      'CRM einrichten, Daten übernehmen, Übergaben automatisieren, die Vorqualifizierung mit echten Anfragen testen und den Start eng begleiten.',
      'Ihr Vertrieb arbeitet mit eigenen Fällen im CRM und lernt, Vorschläge der Agenten zu prüfen und zu korrigieren.',
      'Pipeline, Reaktionszeiten, Abschlussquoten und die Trefferquote der Vorqualifizierung jeden Monat gemeinsam auswerten.',
    ],
    topics: [
      { title: 'CRM-Strategie', desc: 'Welche Daten, Phasen und Zuständigkeiten Ihr CRM abbilden muss, damit es im Alltag genutzt wird und Agenten darauf arbeiten können. Im B2B gehören mehrere Entscheider pro Firma dazu.' },
      { title: 'Lead-Management und Lead-Scoring', desc: 'Eine gemeinsame Definition, wann ein Interessent an den Vertrieb geht, und eine Bewertung, die Prioritäten sichtbar macht. Zuerst mit klaren Regeln, KI kommt dazu, wenn die Kriterien stehen.' },
      { title: 'Funnel-Optimierung', desc: 'Wir machen messbar, wo Interessenten zwischen Anfrage, Angebot und Abschluss verloren gehen, und schliessen die Lücken.' },
      { title: 'Reporting und Forecast', desc: 'Eine Übersicht, welche Verkaufschancen Aufmerksamkeit brauchen und welcher Umsatz realistisch ist. Bei wenigen Abschlüssen pro Jahr bringen gepflegte Phasen und Risikosignale mehr als ein Prognosemodell. Die Wochenzusammenfassung bereitet ein Agent vor.' },
      { title: 'Service-Prozesse', desc: 'Anfragen von Kundinnen und Kunden strukturiert erfassen, zusammenfassen, zuweisen und nachverfolgen.' },
    ],
    challenges: [
      'Anfragen bleiben liegen oder werden zu spät beantwortet.',
      'Das CRM ist unvollständig, und niemand vertraut den Zahlen.',
      'Marketing und Vertrieb sind sich nicht einig, was eine gute Anfrage ist.',
      'Nachfassen hängt am Gedächtnis einzelner Personen.',
      'Für die Vorbereitung von Gesprächen fehlt die Zeit.',
    ],
    outcomes: [
      'Kürzere Reaktionszeiten auf neue Anfragen',
      'Eine Pipeline, die zeigt, wo Verkaufschancen stehen',
      'Klare Zuständigkeiten zwischen Marketing und Vertrieb',
      'Bessere Datenqualität im CRM',
    ],
    tools: ['funnel-leakage-detector', 'lead-routing-assessment', 'crm-data-quality-check', 'follow-up-effectiveness-review'],
    resources: ['why-b2b-lead-gen-is-dead', 'ai-automation-b2b-sales', 'martech-welches-crm'],
    solutions: ['/loesungen/vertrieb-optimieren'],
    faq: [
      { q: 'Was ist Revenue Operations?', a: 'Revenue Operations (RevOps) bedeutet, dass Marketing, Vertrieb und Kundenbetreuung mit denselben Daten, Abläufen und Zielen arbeiten. Statt drei getrennter Bereiche entsteht ein durchgehender Prozess von der ersten Anfrage bis zum Auftrag. Für Agenten im Vertrieb ist diese gemeinsame Datenbasis die Voraussetzung.' },
      { q: 'Wir haben schon ein CRM. Warum funktioniert es nicht richtig?', a: 'Häufig fehlt die Grundlage, nicht die Technik. Es gibt keine gemeinsame Definition, wann ein Interessent an den Vertrieb geht, die Übergaben sind unklar oder die Daten werden nicht gepflegt. Dort setzen wir zuerst an, denn auch ein Agent kann nur mit Daten arbeiten, die stimmen.' },
      { q: 'Welches CRM empfehlen Sie?', a: 'Das hängt von Ihren Abläufen, Ihrer Teamgrösse und Ihren bestehenden Tools ab. Wir wählen das System erst, wenn klar ist, was es abbilden soll, und arbeiten mit den gängigen Lösungen.' },
      { q: 'Was ist Lead-Scoring?', a: 'Eine Bewertung von Interessenten nach Passung und Interesse. Sie hilft dem Vertrieb, sich zuerst um die Anfragen zu kümmern, die am ehesten zu einem Auftrag führen.' },
      { q: 'Ersetzt ein Agent Vertriebsmitarbeitende?', a: 'Nein. Agenten übernehmen Vorarbeit wie Recherche, Zusammenfassungen, Einordnung und Entwürfe. Gespräche, Offerten, Preise und Zusagen bleiben bei Menschen, und was an Kunden geht, wird vorher freigegeben.' },
    ],
  },
  {
    id: 'prozesse',
    kind: 'area',
    label: 'Agentic Processes',
    shortLabel: 'Agentic Processes',
    labelZu: 'Agentic Processes',
    subtitle: 'Abläufe verbinden und automatisieren',
    role: 'Agentic Processes verbinden Marketing und Vertrieb mit den Systemen dahinter. Für jeden Schritt wählen wir zwischen fester Regel, KI-Unterstützung und Agent.',
    headline: 'Systeme, die zusammenspielen, und Abläufe ohne Handarbeit.',
    definition:
      'Agentic Processes sind Abläufe, die von Beginn an für feste Regeln, KI und Agenten entworfen werden. Wir nehmen Ihre Abläufe in Marketing, Vertrieb und Administration auf, verbinden die Systeme und legen für jeden Schritt fest, was automatisch läuft, was ein Modell vorschlägt und wo ein Mensch entscheidet. Klar geregelte Schritte erledigen Workflows. KI-Agenten setzen wir ein, wo Dokumente gelesen, Fälle eingeordnet oder mehrere Schritte kombiniert werden müssen, mit festgelegten Rechten und Freigaben.',
    cardTitle: 'Abläufe, die mit dem Unternehmen wachsen',
    teaser: 'Verbundene Systeme, feste Workflows und KI-Agenten für die Fälle, die Urteilsvermögen brauchen. Mit klaren Regeln für Daten und Freigaben.',
    outcome: 'Weniger Handarbeit, weniger Fehler, Daten nur einmal erfasst.',
    fields: ['KI-Agenten & Orchestrierung', 'Workflow-Automatisierung', 'Systemintegration & MarTech-Stack', 'Prozessarchitektur', 'Datenflüsse & Governance'],
    ctaLabel: 'Abläufe besprechen',
    seoTitle: 'Agentic Processes: Prozessautomatisierung & Systemintegration für KMU | performanceboost',
    seoDescription:
      'Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und setzen KI-Agenten mit klaren Regeln ein. Prozessarchitektur und Integration für Schweizer KMU.',
    services: ['ki-agenten', 'martech-stack', 'ai-automation'],
    agentic: {
      title: 'Regel, KI oder Agent: was wohin gehört',
      intro: 'In den Abläufen entscheidet sich, ob Automatisierung hält. Wir wählen pro Schritt die einfachste Lösung, die verlässlich funktioniert.',
      items: [
        { task: 'Daten übertragen', desc: 'Eine Anfrage, ein Auftrag oder eine Rechnung wird nach festen Regeln von einem System ins nächste übernommen. Dafür braucht es keine KI.', human: 'Fehler werden protokolliert und gemeldet.' },
        { task: 'Dokumente einordnen', desc: 'E-Mails, Formulare oder PDFs werden gelesen, klassifiziert und die wichtigsten Felder extrahiert. Das Ergebnis ist ein Vorschlag mit Begründung.', human: 'Unsichere Fälle prüft eine Person, bevor etwas gebucht oder versendet wird.' },
        { task: 'Ausnahmen bearbeiten', desc: 'Bei unvollständigen Fällen holt ein Agent fehlende Angaben aus den angebundenen Systemen, prüft sie und schlägt das weitere Vorgehen vor.', human: 'Was er nicht sicher einordnen kann, geht mit allen Angaben an eine Person.' },
      ],
      visual: 'agent-oder-workflow',
      visualCaption: 'Lässt sich ein Ablauf als Liste aufschreiben, genügt ein fester Workflow. Ein Agent lohnt sich erst, wenn es zu viele Kombinationen gibt, und muss sich an den Kosten pro korrekt erledigtem Fall messen lassen.',
    },
    phaseExamples: [
      'Abläufe aufnehmen, Datenflüsse zeichnen und pro Schritt festlegen, ob eine Regel, KI oder ein Agent ihn übernimmt und wo eine Freigabe nötig ist.',
      'Systeme verbinden, Workflows und Agenten mit echten Fällen testen, Protokolle und Fehlermeldungen einrichten und den Betrieb eng überwachen.',
      'Ihr Team weiss, was automatisch passiert, wie Freigaben funktionieren und wer bei Fehlern was tut.',
      'Fehlerquoten, Kosten pro Fall und Durchlaufzeiten auswerten, Regeln nachschärfen und neue Kandidaten für Automatisierung prüfen.',
    ],
    insight: {
      visual: 'was-zuerst-automatisieren',
      title: 'Was zuerst automatisiert wird',
      text: 'Wir ordnen jeden Ablauf nach Häufigkeit und nach den Kosten eines Fehlers. Häufige Abläufe mit geringen Fehlerkosten kommen zuerst. Wo ein Fehler teuer ist, automatisieren wir nur mit Freigabe, und seltene, heikle Fälle bleiben bei Ihrem Team.',
    },
    practice: OWN_PRACTICE,
    topics: [
      { title: 'Prozessarchitektur', desc: 'Wir halten fest, wie ein Ablauf tatsächlich gearbeitet wird, wer was tut und welche Systeme beteiligt sind. Ein unklarer Ablauf wird durch Automatisierung nur schneller unklar.' },
      { title: 'Workflow-Automatisierung', desc: 'Wiederkehrende Abläufe wie Datenübertragungen, Benachrichtigungen, Freigaben oder Berichte laufen über Schnittstellen statt von Hand. Fehlerpfade gehören dazu, also Wiederholen, Klärfall mit Frist und Eskalation.' },
      { title: 'Berichte und Auswertungen', desc: 'Kennzahlen aus mehreren Quellen werden automatisch zusammengeführt. KI erkennt Abweichungen und erklärt sie kurz, die Schlüsse zieht die Geschäftsleitung.' },
      { title: 'Systemintegration', desc: 'Website, Formulare, CRM, E-Mail, Offerte und Buchhaltung tauschen Daten direkt aus. Weniger doppelte Erfassung, weniger Übertragungsfehler.' },
      { title: 'Datenflüsse und Governance', desc: 'Welche Daten wohin fliessen, wer sie verantwortet und welche Personendaten die Schweiz oder die EU verlassen, schriftlich festgehalten.' },
      { title: 'Tool-Auswahl ohne Anbieterbindung', desc: 'Wir vergleichen Lizenz- und Open-Source-Lösungen sowie Hosting in der Schweiz oder der EU anhand Ihrer Abläufe, Kosten und Datenschutzanforderungen.' },
    ],
    challenges: [
      'Daten werden mehrfach erfasst oder per Excel zwischen Systemen kopiert.',
      'Wichtige Abläufe hängen an einzelnen Personen.',
      'Die Tools sind vorhanden, werden aber kaum oder unterschiedlich genutzt.',
      'Die Lizenzkosten steigen, und niemand weiss genau, welche Tools noch gebraucht werden.',
    ],
    outcomes: [
      'Weniger Handarbeit und schnellere Bearbeitung von Anfragen und Aufgaben',
      'Daten, die nur einmal erfasst werden, und weniger Übertragungsfehler',
      'Weniger Tools, die zusammenarbeiten, und Lizenzkosten, die Sie kennen',
      'Dokumentierte Abläufe, die Ihr Team versteht und weiterführen kann',
    ],
    tools: ['martech-stack-inventory', 'process-automation-assessment', 'workflow-opportunity-scanner', 'agentic-automation-opportunity-scanner'],
    resources: ['martech-stack-inventur', 'martech-daten-nur-einmal-erfassen', 'swiss-dsg-tracking-compliance'],
    solutions: ['/loesungen/prozessautomatisierung'],
    faq: [
      { q: 'Wo fängt man mit Automatisierung am besten an?', a: 'Bei Abläufen, die häufig vorkommen, klar geregelt sind und heute viel Handarbeit verursachen, zum Beispiel die Übernahme von Anfragen ins CRM oder wiederkehrende Berichte. Ein unklarer Ablauf wird durch Automatisierung nicht besser, deshalb definieren wir den Prozess zuerst.' },
      { q: 'Wann braucht es einen KI-Agenten und wann reicht eine Regel?', a: 'Eine Regel reicht, wenn der Ablauf immer gleich ist. KI hilft, wenn Texte gelesen, zusammengefasst oder eingeordnet werden müssen. Ein Agent lohnt sich erst, wenn eine Aufgabe mehrere Schritte und Entscheidungen innerhalb klarer Grenzen braucht.' },
      { q: 'Woran messen Sie, ob sich ein Agent lohnt?', a: 'An den Kosten pro korrekt erledigtem Fall, verglichen mit dem heutigen Aufwand. Vor dem Start testen wir mit echten Fällen aus Ihrem Alltag, im Betrieb werten wir Fehlerquote, Durchlaufzeit und Modellkosten regelmässig aus. Lohnt sich ein Agent nicht, ersetzen wir ihn durch eine Regel oder lassen den Schritt bei Ihrem Team.' },
      { q: 'Müssen wir neue Software kaufen?', a: 'Meist nicht. Wir prüfen zuerst, was Ihre bestehenden Tools können und welche Abläufe sich damit verbinden lassen. Neue Software empfehlen wir nur, wenn sie eine konkrete Lücke schliesst.' },
      { q: 'Was ist ein MarTech-Stack?', a: 'Alle Programme, mit denen ein Unternehmen Kunden gewinnt und betreut: CRM, Website und Formulare, E-Mail-Versand, Werbekonten, Tracking und Reporting. Entscheidend ist weniger, welche Tools es sind, als ob sie zusammenarbeiten.' },
      { q: 'Wie gehen Sie mit Datenschutz um?', a: 'Wir klären vor der Umsetzung, welche Personendaten wohin fliessen, wählen Anbieter mit passenden Datenschutzbedingungen und dokumentieren die Datenflüsse, damit Sie Ihre Pflichten nach dem Schweizer DSG erfüllen können.' },
    ],
  },
  {
    id: 'ki-im-unternehmen',
    kind: 'capability',
    label: 'Governance',
    shortLabel: 'Governance',
    labelZu: 'Governance',
    subtitle: 'Regeln, Rechte und Freigaben für KI-Agenten',
    role: 'Governance legt fest, was Agenten in allen drei Bereichen dürfen, wer freigibt und wie das nachvollziehbar bleibt.',
    headline: 'Klare Regeln für KI-Agenten, damit Ihr Team die Kontrolle behält.',
    definition:
      'Governance legt fest, unter welchen Bedingungen KI und Agenten in Ihren Abläufen arbeiten. Jeder Agent erhält nur die Rechte, die er für seine Aufgabe braucht. Wir definieren, welche Daten er verwenden darf, was ohne Freigabe nach aussen gehen darf, wie jede Aktion protokolliert wird und wer bei Fehlern entscheidet. Vor dem Start testen wir mit echten Fällen, im Betrieb überwachen wir Qualität und Kosten. Dazu kommen Schulung und schriftliche Regeln, damit Ihr Team KI sicher nutzt.',
    cardTitle: 'Governance für KI-Agenten',
    teaser: 'Rechte, Freigaben, Protokolle, Tests mit echten Fällen und schriftliche Regeln für Daten und Tools, dazu Schulung und eine Standortbestimmung.',
    outcome: 'KI, die im Alltag genutzt wird und deren Nutzen sich beziffern lässt.',
    fields: ['Rechte und Freigaben', 'Protokolle und Monitoring', 'Regeln für Daten und Tools', 'KI-Standortbestimmung', 'Schulung'],
    ctaLabel: 'Governance besprechen',
    seoTitle: 'KI-Governance im Unternehmen: Regeln und Freigaben für KI-Agenten | performanceboost',
    seoDescription:
      'Governance für KI-Agenten in Schweizer KMU: Rechte, Freigaben, Tests mit echten Fällen, Protokolle, Regeln für Daten und Tools sowie Schulung.',
    services: ['ki-agenten', 'ai-automation'],
    practice: OWN_PRACTICE,
    topics: [
      { title: 'KI-Standortbestimmung', desc: 'Wir erfassen, wo Ihre Mitarbeitenden KI heute schon nutzen, wo Risiken entstehen und welche Anwendungen am meisten bringen. Sie erhalten eine priorisierte Liste mit einer Nutzenrechnung pro Anwendung.' },
      { title: 'Rechte und Freigaben', desc: 'Jeder Agent erhält einen eigenen Zugang mit nur den nötigen Rechten. Wie viel er selbst ausführen darf, hängt davon ab, wie teuer ein Fehler wäre und ob er sich rückgängig machen lässt. Was nach aussen geht, Geld kostet oder Daten löscht, gibt eine zuständige Person frei.' },
      { title: 'Tests, Protokolle und Monitoring', desc: 'Vor dem Start prüfen wir einen Agenten mit echten Fällen, deren richtiges Ergebnis bekannt ist. Danach schlägt er im laufenden Betrieb zuerst nur vor. Fehlerquote, Eskalationen und Kosten pro Fall sind sichtbar, jede Aktion ist protokolliert.' },
      { title: 'Risiken von Sprachmodellen', desc: 'Modelle können plausibel klingende Fehler machen, und eingehende Texte können versuchen, einen Agenten umzulenken. Faktenaussagen stützen wir deshalb auf freigegebene Quellen, harte Grenzen liegen ausserhalb des Modells, und wir halten fest, welche Daten an welchen Anbieter gehen.' },
      { title: 'Schulung des Teams', desc: 'Schulungen mit Ihren eigenen Abläufen und Beispielen, damit KI im Alltag genutzt und nicht nur ausprobiert wird.' },
      { title: 'Regeln für den KI-Einsatz', desc: 'Welche Daten in welches Tool dürfen, welche nie, wer Inhalte freigibt und wie das dokumentiert wird. Kurz, verständlich und abgestimmt auf das Schweizer DSG.' },
      { title: 'Laufende Begleitung', desc: 'Neue Anwendungen prüfen und einführen, Werkzeuge aktuell halten und die Regeln nachführen, wenn sich Tools oder Abläufe ändern.' },
    ],
    challenges: [
      'Mitarbeitende nutzen ChatGPT und andere Tools, jede Person auf ihre Weise und teils mit Kundendaten.',
      'Niemand weiss genau, welche Kundendaten schon in KI-Tools gelandet sind.',
      'Es gibt KI-Lizenzen, aber keinen Nutzen, den jemand beziffern kann.',
      'In den eigentlichen Abläufen von Marketing und Vertrieb hat KI noch nichts verändert.',
    ],
    outcomes: [
      'Drei bis fünf KI-Anwendungen, die im Alltag tatsächlich genutzt werden',
      'Ein Team, das KI sicher und wirksam einsetzt',
      'Schriftliche Regeln für Daten, Tools und Freigaben',
      'Agenten mit klaren Rechten, Protokollen und Freigaben',
    ],
    tools: ['ai-readiness-assessment', 'ai-use-case-discovery', 'agentic-automation-opportunity-scanner', 'workflow-opportunity-scanner'],
    resources: ['ai-automation-b2b-sales', 'martech-open-source-oder-lizenz'],
    solutions: ['/loesungen/prozessautomatisierung'],
    faq: [
      { q: 'Was ist ein KI-Agent?', a: 'Ein KI-Agent ist ein Sprachmodell, das eine Aufgabe über mehrere Schritte bearbeitet und dafür Werkzeuge nutzt, zum Beispiel im CRM nachschlagen, im Web recherchieren und einen Antwortentwurf schreiben. Anders als ein fester Workflow entscheidet er innerhalb eines Rahmens selbst, welcher Schritt als Nächstes kommt. Er arbeitet nur mit den Rechten, die er dafür braucht, und bevor etwas nach aussen geht, gibt ein Mensch frei.' },
      { q: 'Wie viel darf ein Agent selbst entscheiden?', a: 'Das legen wir pro Aufgabe fest. Massgeblich sind zwei Fragen, wie teuer ein Fehler wäre und ob er sich rückgängig machen lässt. Ein interner Vermerk oder ein ausgeschlossener Suchbegriff kann nach einer Bewährungsphase in festen Limits automatisch laufen. Eine Offerte, ein Preis oder eine Nachricht an Kunden bleibt bei einem Menschen.' },
      { q: 'Wie bleibt nachvollziehbar, was ein Agent getan hat?', a: 'Jede Aktion wird mit Zeitpunkt, verwendeten Daten und Ergebnis protokolliert. Fehler und unsichere Fälle gehen an eine zuständige Person. So lässt sich jederzeit prüfen, warum ein Agent etwas vorgeschlagen oder ausgeführt hat.' },
      { q: 'Was kann ein Agent heute verlässlich, und was nicht?', a: 'Gut funktionieren klar umrissene Aufgaben mit festen Regeln und geprüften Daten, etwa recherchieren, zusammenfassen, einordnen oder Entwürfe vorbereiten. Entscheidungen mit rechtlicher, finanzieller oder direkter Kundenwirkung trifft weiterhin ein Mensch.' },
      { q: 'Wo fangen wir mit KI am besten an?', a: 'Mit einer Standortbestimmung. Wir schauen, wo KI heute schon genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind. Daraus wählen wir drei bis fünf Anwendungen, die sich zuerst lohnen. Alles andere kommt später oder gar nicht.' },
      { q: 'Wir haben schon ChatGPT-Lizenzen. Reicht das nicht?', a: 'Lizenzen sind der kleinere Teil. Entscheidend ist, ob KI in die Abläufe eingebunden ist, ob das Team weiss, was es damit tun darf, und ob sich der Nutzen messen lässt. Vorhandene Lizenzen lassen sich oft weiter nutzen.' },
      { q: 'Wie gehen Sie mit Datenschutz um?', a: 'Bevor eine Anwendung live geht, legen wir fest, welche Personendaten verarbeitet werden, bei welchem Anbieter sie liegen und ob sie die Schweiz oder die EU verlassen. Diese Regeln halten wir schriftlich fest, damit Sie Ihre Pflichten nach dem Schweizer DSG erfüllen können. Eine Rechtsberatung ersetzt das nicht.' },
    ],
  },
];

/**
 * Stufen von der Regel bis zur menschlichen Steuerung (Startseite, Agentic-AI-Seite).
 * Unterscheidet fachlich korrekt zwischen regelbasierter Automatisierung, KI-Unterstützung, Agenten und Governance.
 */
export const AGENTIC_LEVELS: { label: string; title: string; desc: string; example: string; decides: string }[] = [
  {
    label: 'Stufe 1',
    title: 'Regelbasierte Automatisierung',
    desc: 'Wenn A eintritt, passiert B. Immer gleich und vollständig nachvollziehbar.',
    example: 'Eine Anfrage landet mit Quelle im CRM, eine Aufgabe wird angelegt.',
    decides: 'Entscheidet: die Regel',
  },
  {
    label: 'Stufe 2',
    title: 'KI-unterstützte Verarbeitung',
    desc: 'Ein Modell liest, ordnet ein, extrahiert oder entwirft innerhalb eines festen Ablaufs. Das Ergebnis ist ein Vorschlag mit Begründung.',
    example: 'Eine Anfrage wird zusammengefasst und einer Kategorie zugeordnet.',
    decides: 'Entscheidet: ein Mensch prüft',
  },
  {
    label: 'Stufe 3',
    title: 'Agentische Abläufe',
    desc: 'Ein Agent holt Informationen aus mehreren Quellen, nutzt Werkzeuge und prüft sein Ergebnis. Selbst ausführen darf er nur Umkehrbares in festen Limits.',
    example: 'Firma recherchieren, CRM-Eintrag ergänzen, Antwortentwurf vorbereiten.',
    decides: 'Entscheidet: der Agent innerhalb fester Grenzen',
  },
  {
    label: 'Immer',
    title: 'Menschliche Steuerung',
    desc: 'Eigene Zugänge, Freigaben, Protokolle und Tests mit echten Fällen gelten auf jeder Stufe.',
    example: 'Was nach aussen geht, Geld kostet oder Daten löscht, gibt ein Mensch frei.',
    decides: 'Entscheidet: Ihr Team',
  },
];

export const AREA_IDS = SERVICE_AREAS.map((a) => a.id);

/** Die drei Kompetenzbereiche (ohne die übergreifende Agentic-AI-Seite). */
export const AREAS = SERVICE_AREAS.filter((a) => a.kind === 'area');

export function isAreaId(slug: string): slug is AreaId {
  return (AREA_IDS as string[]).includes(slug);
}

export function getArea(id: AreaId): ServiceArea {
  const area = SERVICE_AREAS.find((a) => a.id === id);
  if (!area) throw new Error(`Unbekannter Bereich: ${id}`);
  return area;
}

/** Hauptbereich einer Leistung = erster Kompetenzbereich, der sie in `services` führt. */
export function primaryAreaOf(serviceSlug: string): ServiceArea | undefined {
  return AREAS.find((a) => a.services.includes(serviceSlug));
}

/**
 * Passende Leistungen für eine Detailseite. Bewusst über Bereichsgrenzen hinweg,
 * weil Marketing, Sales und Prozesse als ein System gedacht sind. E-Commerce und B2B werden nicht gemischt.
 */
const CROSS_LINKS: Record<string, string[]> = {
  'growth-strategy': ['demand-generation', 'revenue-operations', 'data-analytics'],
  'demand-generation': ['lead-generation', 'data-analytics', 'marketing-automation'],
  'lead-generation': ['demand-generation', 'marketing-automation', 'ki-agenten'],
  'marketing-automation': ['revenue-operations', 'martech-stack', 'ki-agenten'],
  'sales-enablement': ['revenue-operations', 'ki-agenten', 'marketing-automation'],
  'revenue-operations': ['marketing-automation', 'data-analytics', 'martech-stack'],
  'ai-automation': ['ki-agenten', 'martech-stack', 'marketing-automation'],
  'ki-agenten': ['martech-stack', 'marketing-automation', 'ai-automation'],
  'martech-stack': ['ki-agenten', 'marketing-automation', 'data-analytics'],
  'data-analytics': ['revenue-operations', 'demand-generation', 'martech-stack'],
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

/** Leistungen für Navigation und Startseite (ohne Shop-Seiten, siehe `menuServices`). */
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
