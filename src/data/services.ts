import { ServiceDetail, SolutionArea } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'growth-strategy',
    title: 'KI-gestützte Marketing- & Wachstumsstrategie',
    slug: 'growth-strategy',
    shortDesc: 'Klarer Plan für die Neukundengewinnung, mit KI-gestützter Recherche und Kriterien, mit denen auch Ihre Automatisierungen arbeiten.',
    description: 'Wachstum lässt sich steuern, wenn ein paar Grundentscheide gefallen sind. Ein agentischer Workflow recherchiert Markt und Mitbewerber, wir werten Ihre bisherigen Anfragen und Kunden aus und legen mit Ihnen Wunschkunden, Botschaften und Kanäle fest. Der Plan hält auch fest, welche Schritte automatisch laufen sollen und welche Daten es dafür braucht.',
    benefits: [
      'Klares Zielkundenprofil, damit Werbung, Lead-Scoring und Vertrieb die richtigen Firmen ansprechen',
      'Eine klare Antwort darauf, warum Kunden Sie wählen und nicht die Konkurrenz',
      'Umsetzbarer Vermarktungsplan, abgestimmt auf den Schweizer und DACH-Markt',
      'Budgetplanung auf Basis Ihrer eigenen Daten statt Bauchgefühl'
    ],
    deliverables: [
      'Wachstumsplan mit Massnahmen für die nächsten 12 Monate',
      'Zielkundenprofil und Beschreibung der wichtigsten Entscheider',
      'Kernbotschaften und Nutzenversprechen',
      'Kanal- und Budgetplan mit den nötigen Daten und Automatisierungen'
    ],
    iconName: 'TrendingUp',
    metrics: [],
    processSteps: [
      { title: 'Recherche und Daten', desc: 'Markt und Mitbewerber recherchieren, bisherige Anfragen und Kunden auswerten.' },
      { title: 'Workshop Zielkunden & Botschaften', desc: 'Gemeinsam beschreiben wir Ihre Wunschkunden und was diese überzeugt.' },
      { title: 'Budget-Szenarien', desc: 'Wir rechnen durch, was Kundengewinnung pro Kanal etwa kosten darf.' },
      { title: 'Übergabe des Plans', desc: 'Ein Plan mit Kennzahlen, die automatisch erhoben werden, und klaren nächsten Schritten.' }
    ]
  },
  {
    id: 'demand-generation',
    title: 'Performance Marketing mit KI-Agenten',
    slug: 'demand-generation',
    shortDesc: 'Kampagnen auf Google, Meta und LinkedIn, die aus Aufträgen lernen und täglich automatisch geprüft werden.',
    description: 'Wir planen und betreuen Ihr Performance Marketing auf LinkedIn, Google und Meta, abgestimmt mit Inhalten und Landingpages. Qualifizierte Anfragen und Aufträge fliessen aus dem CRM an die Werbekonten zurück, wo die Plattform es zulässt, damit deren Gebotsalgorithmen auf Aufträge optimieren. Feste Prüfungen laufen täglich, bei Abweichungen schlägt ein agentischer Ablauf eine Massnahme vor. Über Budget und Gebote entscheidet ein Mensch.',
    benefits: [
      'Regelmässige Sichtbarkeit bei den Firmen und Personen, die für Sie relevant sind',
      'Kampagnen, die auf qualifizierte Anfragen optimieren statt auf Klicks',
      'Auffälligkeiten bei Kosten und Suchbegriffen fallen am selben Tag auf',
      'Ein Ansprechpartner für alle Kanäle statt mehrerer Dienstleister'
    ],
    deliverables: [
      'Kampagnen-Setup auf LinkedIn, Google und Meta',
      'Rückmeldung qualifizierter Anfragen aus dem CRM, wo die Plattform es zulässt',
      'Tägliche Prüfung mit Ursachensuche und Vorschlägen',
      'Anzeigenvarianten, Testplan und monatliches Reporting'
    ],
    iconName: 'Megaphone',
    metrics: [],
    processSteps: [
      { title: 'Zielgruppe festlegen', desc: 'Wir legen fest, wen wir ansprechen: nach Funktion, Branche und Firmengrösse.' },
      { title: 'Messung und Signale', desc: 'Conversions definieren und die Rückmeldung aus dem CRM einrichten.' },
      { title: 'Testphase', desc: 'Start mit aufgeteiltem Budget und täglicher Prüfung, um herauszufinden, welche Botschaften wirken.' },
      { title: 'Ausbau', desc: 'Mehr Budget dort, wo die Kosten pro Anfrage stabil bleiben, nach Freigabe.' }
    ]
  },
  {
    id: 'lead-generation',
    title: 'KI-gestützte Lead-Generierung & GEO',
    slug: 'lead-generation',
    shortDesc: 'Anfragen über Google, KI-Assistenten (GEO), Inhalte und Direktansprache, automatisch angereichert und per Lead-Scoring eingeordnet.',
    description: 'Wir sorgen dafür, dass passende Interessenten Sie bei Google und in KI-Assistenten finden und dass Sie selbst aktiv auf Wunschfirmen zugehen können. Inhalte entstehen mit KI-Unterstützung und Ihrem Fachwissen, Landingpages bieten nützliche Angebote wie Checklisten oder Leitfäden. Jede neue Anfrage wird automatisch angereichert und bewertet, und Nachrichten an Wunschfirmen gehen erst nach Freigabe hinaus.',
    benefits: [
      'Regelmässige Anfragen für Erstgespräche statt Zufallskontakte',
      'Sichtbarkeit bei Google und in KI-Antworten, die nicht vom Werbebudget abhängt',
      'Ihr Vertrieb sieht sofort, welche Anfragen Vorrang haben und warum',
      'Direktansprache, die persönlich bleibt und auf den Schweizer Markt abgestimmt ist'
    ],
    deliverables: [
      'SEO- und GEO-Analyse mit Keyword- und Themenstruktur',
      'Landingpage mit Download-Angebot',
      'Lead-Scoring mit Begründung und automatische Anreicherung neuer Anfragen',
      'Recherche und Nachrichtenentwürfe für die Direktansprache'
    ],
    iconName: 'Users',
    metrics: [],
    processSteps: [
      { title: 'Angebot entwickeln', desc: 'Inhalte und kleine Werkzeuge, die für Ihre Zielgruppe nützlich sind.' },
      { title: 'Technik einrichten', desc: 'SEO-Grundlagen, strukturierte Daten, Anreicherung und Bewertung der Anfragen.' },
      { title: 'Start', desc: 'Die ersten Inhalte gehen online, die Direktansprache startet mit Freigabe.' },
      { title: 'Auswerten & nachschärfen', desc: 'Bewertungskriterien und Inhalte anpassen, damit weniger unpassende Kontakte ankommen.' }
    ]
  },
  {
    id: 'marketing-automation',
    title: 'KI-gestütztes CRM & Marketing Automation',
    slug: 'marketing-automation',
    shortDesc: 'CRM und Marketing Automation, in denen feste Regeln erfassen und zuweisen und KI zusammenfasst und Entwürfe vorbereitet.',
    description: 'Nicht jeder Interessent ist sofort kaufbereit. In HubSpot, ActiveCampaign oder Salesforce richten wir ein CRM ein, auf dem Menschen und Automatisierungen gleichermassen arbeiten können. Feste Regeln übernehmen Erfassung, Zuweisung und Folge-E-Mails, KI fasst Anfragen zusammen und ergänzt Firmendaten. Ihr Vertrieb sieht, wer bereit für ein Gespräch ist.',
    benefits: [
      'Keine vergessenen Anfragen dank automatischer Zuweisung und Folge-E-Mails',
      'Marketing und Vertrieb arbeiten mit denselben, gepflegten Daten',
      'Lead-Scoring, damit sich Ihr Vertrieb auf die wichtigsten Kontakte konzentriert',
      'Weniger Handarbeit beim Erfassen, Zusammenfassen und Nachfassen'
    ],
    deliverables: [
      'CRM-Einrichtung mit Feldern, Phasen und Rechten',
      'Regeln für Erfassung, Zuweisung und Übergabe an den Vertrieb',
      'E-Mail-Strecken mit freigegebenen Textbausteinen',
      'KI-Zusammenfassungen und Datenergänzung im CRM'
    ],
    iconName: 'Cpu',
    metrics: [],
    processSteps: [
      { title: 'Ablauf aufzeichnen', desc: 'Wir halten fest, wo Interessenten mit Ihnen in Kontakt kommen und was heute von Hand läuft.' },
      { title: 'CRM-Struktur', desc: 'Verkaufsphasen, Felder und Rechte, die Menschen und Automatisierungen gleich verstehen.' },
      { title: 'Abläufe einrichten', desc: 'Systeme verbinden, Regeln und KI-Schritte mit echten Anfragen testen.' },
      { title: 'Schulung & Start', desc: 'Ihr Team lernt die neuen Abläufe kennen und weiss, was es freigibt.' }
    ]
  },
  {
    id: 'sales-enablement',
    title: 'Sales Enablement mit KI-Recherche',
    slug: 'sales-enablement',
    shortDesc: 'Argumentarien, Unterlagen und Gesprächsvorbereitung, bei der ein KI-Agent vor jedem Termin recherchiert und das Wichtigste zusammenfasst.',
    description: 'Gutes Marketing verpufft, wenn im Verkaufsgespräch improvisiert wird. Wir erarbeiten mit Ihrem Team Referenzbeispiele, Antworten auf häufige Einwände und Angebotsvorlagen und legen sie so ab, dass Mensch und Agent darauf zugreifen. Vor jedem Termin recherchiert ein Agent das Unternehmen, nach dem Gespräch liegen Zusammenfassung und Nachfass-Entwurf im CRM bereit.',
    benefits: [
      'Jedes Gespräch beginnt mit Recherche und passenden Referenzen',
      'Weniger Zeit für Vorbereitung, Notizen und Nachfassen',
      'Einheitlicher, professioneller Auftritt beim Kunden',
      'Neue Mitarbeitende im Verkauf werden schneller sicher'
    ],
    deliverables: [
      'Vertriebsleitfaden als strukturierte Wissenssammlung',
      'Gesprächsvorbereitung durch einen KI-Agenten',
      'Antworten auf häufige Einwände und Vergleich mit Mitbewerbern',
      'Vorlagen für Offerten und Präsentationen'
    ],
    iconName: 'ShieldAlert', // Fills the gap, representing strength/governance
    metrics: [],
    processSteps: [
      { title: 'Analyse & Gespräche', desc: 'Wir klären, wo Abschlüsse ins Stocken geraten und was Kunden über Mitbewerber sagen.' },
      { title: 'Wissen aufbereiten', desc: 'Argumente, Einwände und Referenzen so ablegen, dass Team und Agent sie finden.' },
      { title: 'Agent einrichten', desc: 'Recherche vor dem Termin und Zusammenfassung danach, angebunden an Ihr CRM.' },
      { title: 'Üben', desc: 'Testgespräche mit dem Team, um Unterlagen und Vorbereitung in der Praxis zu prüfen.' }
    ]
  },
  {
    id: 'revenue-operations',
    title: 'Agentic Revenue Operations (RevOps)',
    slug: 'revenue-operations',
    shortDesc: 'Gemeinsame Zahlen, Definitionen und Abläufe für Marketing und Vertrieb, mit festen Prüfungen für Datenqualität und Pipeline und einem Agenten für unklare Fälle.',
    description: 'Wenn Marketing, Vertrieb und Kundenbetreuung mit unterschiedlichen Zahlen und Tools arbeiten, gehen Anfragen und Umsatz verloren. Wir legen gemeinsame Definitionen und Kennzahlen fest und verbinden Ihre Systeme so, dass Übergaben automatisch funktionieren. Darauf prüfen feste Regeln laufend Datenqualität und Pipeline, unklare Fälle bereitet ein Agent auf, Korrekturen gibt Ihr Team frei.',
    benefits: [
      'Überblick, welche Kunden über die Zeit wie viel Umsatz bringen',
      'Daten im CRM, auf die sich Menschen und Automatisierungen verlassen können',
      'Umsatzprognosen, deren Herleitung die Geschäftsleitung nachvollziehen kann',
      'Stillstehende Verkaufschancen fallen auf, bevor sie verloren sind'
    ],
    deliverables: [
      'Gemeinsame Definitionen und Kennzahlen-Dashboard',
      'Automatische Prüfungen für Datenqualität und Übergaben',
      'Wöchentliche Pipeline-Zusammenfassung mit Hinweisen auf stehende Chancen',
      'Plan zur Bereinigung der Tool-Landschaft und Prozess-Handbuch'
    ],
    iconName: 'Layers',
    metrics: [],
    processSteps: [
      { title: 'Tool-Analyse', desc: 'Wir listen alle Programme, ihre Kosten und Datenflüsse auf.' },
      { title: 'Verkaufsphasen vereinheitlichen', desc: 'Wir legen fest, wann aus einem Kontakt eine Anfrage und wann eine Verkaufschance wird.' },
      { title: 'Daten zusammenführen', desc: 'Die wichtigsten Daten laufen im CRM zusammen, feste Prüfungen halten sie sauber.' },
      { title: 'Laufende Abstimmung', desc: 'Einmal im Monat prüfen wir gemeinsam Protokolle, Abläufe und Systeme.' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'KI-Enablement: Einführung & Schulung',
    slug: 'ai-automation',
    shortDesc: 'KI in die Abläufe Ihres Teams einbauen: Standortbestimmung, Schulung an eigenen Fällen, Regeln für Daten und Tools.',
    description: 'Viele Mitarbeitende nutzen KI bereits, jede Person auf ihre Weise, und die Abläufe sind dieselben geblieben. Wir klären, welche Aufgaben in Marketing, Vertrieb und Verwaltung sich mit KI anders erledigen lassen, legen pro Schritt fest, was eine Regel erledigt und wo ein Modell einen Entwurf liefert, und schulen Ihr Team an eigenen Fällen. Dazu kommen schriftliche Regeln, welche Daten in welches Tool dürfen. Was nicht verlässlich funktioniert, setzen wir nicht ein.',
    benefits: [
      'Ein Team, das KI sicher und wirksam einsetzt, statt jede Person für sich',
      'Abläufe, in denen KI fest eingeplant ist und nicht nebenher läuft',
      'Freigegebene Tools und klare Datenregeln statt Schatten-KI',
      'KI-Lizenzen, deren Nutzen Sie pro Fall beziffern können',
    ],
    deliverables: [
      'Standortbestimmung mit drei bis fünf priorisierten Anwendungen',
      'Eingerichtete KI-Anwendungen in Ihren bestehenden Abläufen',
      'Schulung mit Ihren eigenen Beispielen und kurzen Anleitungen',
      'Schriftliche Regeln für Daten, Tools und Freigaben',
    ],
    iconName: 'Sparkles',
    metrics: [],
    processSteps: [
      { title: 'Standortbestimmung', desc: 'Wir erfassen, wo KI heute genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind.' },
      { title: 'Anwendungen wählen', desc: 'Drei bis fünf Anwendungen mit Nutzenrechnung, pro Schritt Regel, KI oder Freigabe.' },
      { title: 'Einführen und schulen', desc: 'Anwendungen einrichten und das Team mit eigenen Beispielen schulen.' },
      { title: 'Regeln festlegen', desc: 'Daten, Tools und Freigaben schriftlich festhalten, abgestimmt auf das DSG.' },
    ],
  },
  {
    id: 'ki-agenten',
    title: 'KI-Agenten & Agentic Automation',
    slug: 'ki-agenten',
    shortDesc: 'KI-Agenten, die Anfragen prüfen, Firmen recherchieren und das Nachfassen vorbereiten, mit begrenzten Rechten und Freigabe durch Ihr Team.',
    description: 'Ein KI-Agent erledigt eine Aufgabe über mehrere Schritte und Systeme, etwa eine Anfrage prüfen und einordnen, das Unternehmen recherchieren, alles ins CRM eintragen und eine Antwort vorbereiten. Er arbeitet nur mit den Rechten, die er dafür braucht, jeder Schritt wird protokolliert, und bevor etwas nach aussen geht, gibt Ihr Team frei. Wo ein fester Workflow reicht, empfehlen wir den Workflow.',
    benefits: [
      'Anfragen vom Wochenende sind am Montag geprüft und vorbereitet',
      'Ihr Team prüft und entscheidet, statt abzutippen und zu suchen',
      'Jeder Schritt ist protokolliert, die Kosten pro Fall sind bekannt',
      'Abläufe, die nicht an einzelnen Personen hängen',
    ],
    deliverables: [
      'Agenten für zwei bis drei klar definierte Abläufe',
      'Rechte, Limits und Freigabestufen pro Agent',
      'Anbindung an CRM, E-Mail und Website',
      'Testset mit echten Fällen, Testphase mit Vorschlägen, Monitoring und Einweisung',
    ],
    iconName: 'Bot',
    metrics: [],
    processSteps: [
      { title: 'Ablauf auswählen', desc: 'Häufig, heute viel Handarbeit und ein Fehler ist nicht teuer.' },
      { title: 'Stufe und Rechte festlegen', desc: 'Regel oder Agent, was er allein darf und wo ein Mensch freigibt.' },
      { title: 'Bauen und testen', desc: 'Mit echten Fällen, bis Ergebnisse und Kosten pro Fall stimmen.' },
      { title: 'Übergeben und überwachen', desc: 'Einweisung, Protokolle, Fehlerquote und eingesparte Zeit im Blick.' },
    ],
  },
  {
    id: 'martech-stack',
    title: 'KI-fähiger MarTech-Stack',
    slug: 'martech-stack',
    shortDesc: 'Weniger Tools, ein gemeinsamer Datenstand und Schnittstellen, auf denen Automatisierungen und KI-Agenten mit klaren Rechten arbeiten.',
    description: 'Viele KMU zahlen für mehr Programme, als sie brauchen, und trotzdem werden Daten von Hand übertragen. Wir erfassen Ihren MarTech-Stack, also alle Tools für Marketing, Vertrieb und Kundenbetreuung, mit Kosten, Nutzung, Datenflüssen und Schnittstellen. Danach legen wir fest, welches System für welche Daten führend ist, räumen auf, verbinden, was zusammengehört, und richten Zugänge mit eingeschränkten Rechten für Workflows und Agenten ein.',
    benefits: [
      'Weniger Lizenzen und eine Kostenübersicht für alle Tools',
      'Daten werden nur einmal erfasst und stimmen in allen Systemen überein',
      'Eine Grundlage, auf der Automatisierungen und Agenten verlässlich arbeiten',
      'Ein unabhängiger Blick auf Tools, ohne Bindung an einen Anbieter',
    ],
    deliverables: [
      'Stack-Inventur mit Kosten, Nutzung, Schnittstellen und Überschneidungen',
      'Zielbild mit führenden Systemen, was bleibt und was weg kann',
      'Umbau und Verbindung der Systeme mit Rechten und Protokollen, dokumentiert',
      'Jährliche Kostenübersicht des Stacks, KI-Nutzung eingeschlossen',
    ],
    iconName: 'Layers',
    metrics: [],
    processSteps: [
      { title: 'Stack-Check', desc: 'Alle Tools mit Kosten, Nutzung, Verantwortlichen, Datenflüssen und Schnittstellen erfassen.' },
      { title: 'Zielbild', desc: 'Führende Systeme festlegen, entscheiden, was bleibt, was ersetzt wird und was wegfällt.' },
      { title: 'Umbau', desc: 'Systeme verbinden, Daten bereinigen, Zugänge mit eingeschränkten Rechten einrichten.' },
      { title: 'Betrieb', desc: 'Schnittstellen überwachen, neue Tools vor dem Kauf prüfen, Kosten jährlich überprüfen.' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Tracking, Attribution & Reporting',
    slug: 'data-analytics',
    shortDesc: 'Tracking mit geklärter Einwilligung, Attribution und Berichte, die zeigen, welche Kanäle Kunden bringen, und den Werbealgorithmen bessere Signale geben.',
    description: 'Sie sollen wissen, woher Ihre Kunden kommen. Wir richten Tracking mit geklärter Einwilligung ein, nach Schweizer DSG und, wo nötig, DSGVO, etwa mit Server-Side Tagging (die Messdaten laufen zuerst über einen eigenen Server), Google Analytics 4 oder Matomo, und verbinden die Daten mit Ihrem CRM. Qualifizierte Anfragen und Aufträge gehen an Google, Meta und LinkedIn zurück, wo die Plattform es zulässt. Feste Regeln prüfen täglich, ob die Messung funktioniert, und ein Modell ordnet Auffälligkeiten ein.',
    benefits: [
      'Berichte, die Umsatz zuordnen, statt nur den letzten Klick zu zählen',
      'Einwilligung und Datenweitergabe nach DSG und, wo nötig, DSGVO geklärt',
      'Bessere Signale für die Gebotsalgorithmen von Google, Meta und LinkedIn',
      'Ausfälle in der Messung fallen am selben Tag auf'
    ],
    deliverables: [
      'Serverseitiges Google Tag Manager Setup',
      'Saubere Einrichtung von GA4 oder Matomo inklusive Dashboards',
      'Rückmeldung von Anfragen und Aufträgen an Google, Meta und LinkedIn, wo zulässig',
      'Tägliche automatische Prüfung und Bericht für die Geschäftsleitung'
    ],
    iconName: 'PieChart',
    metrics: [],
    processSteps: [
      { title: 'Tracking- und Cookie-Check', desc: 'Prüfung des Cookie-Banners, der Einwilligungen und der bestehenden Messung.' },
      { title: 'Serverseitiges Tracking', desc: 'Einrichtung eines eigenen Tracking-Servers, z. B. bei Google Cloud oder AWS.' },
      { title: 'Umsatz zuordnen und zurückmelden', desc: 'Verkäufe aus dem CRM werden mit den Kampagnen verknüpft und, wo die Plattform es zulässt, an die Werbekonten übermittelt.' },
      { title: 'Dashboards und Prüfungen', desc: 'Übersichtliche Berichte in Looker Studio und tägliche Kontrolle der Messung.' }
    ]
  },
  {
    id: 'ecommerce-performance',
    title: 'E-Commerce Performance',
    slug: 'ecommerce-performance',
    shortDesc: 'Mehr Käufe aus bestehendem Traffic: Shop-Optimierung, Wiederkäufe und Werbung, die nach Marge steuert und täglich geprüft wird.',
    description: 'Wir verbessern Ihren Online-Shop dort, wo Umsatz verloren geht, mit weniger Kaufabbrüchen, grösseren Warenkörben und mehr Kunden, die wieder bestellen. Shop, Werbekonten und Warenkosten verbinden wir so, dass Abweichungen täglich auffallen und Google und Meta nach Marge optimieren, sofern Margen im Shop oder ERP verfügbar sind. Produkttexte und Feeds entstehen mit KI-Unterstützung und festen Prüfregeln. Jede Massnahme messen wir.',
    benefits: [
      'Höhere Kaufquote durch Änderungen, die auf Daten beruhen',
      'Werbebudget fliesst in Kampagnen, die pro Franken am meisten Deckungsbeitrag bringen',
      'Bestehende Kunden bestellen häufiger',
      'Fehler in Tracking, Feed oder Checkout fallen am selben Tag auf'
    ],
    deliverables: [
      'Optimierung von Produktseiten und Checkout',
      'Automatische E-Mails für Wiederkäufe und Kundenbindung',
      'Google Shopping und Performance Max mit Margenwerten, sofern verfügbar',
      'Serverseitiges Tracking, Feed-Prüfung und tägliche Kontrolle'
    ],
    iconName: 'ShoppingCart',
    metrics: [],
    processSteps: [
      { title: 'Analyse', desc: 'Wir suchen die Stellen, an denen Besucher den Kauf abbrechen.' },
      { title: 'Grundlagen schaffen', desc: 'Tracking reparieren, Margendaten anbinden, Produktfeeds bereinigen, erste E-Mail-Abläufe aufbauen.' },
      { title: 'Testen & verbessern', desc: 'A/B-Tests auf Produkt- und Checkout-Seiten, tägliche Prüfung der Kennzahlen.' },
      { title: 'Ausbauen', desc: 'Mehr Budget für rentable Kanäle, weitere Kategorien und Märkte.' }
    ]
  },
  {
    id: 'dtc-growth-acquisition',
    title: 'Kundengewinnung für Online-Marken (D2C)',
    slug: 'dtc-growth-acquisition',
    shortDesc: 'Neukundengewinnung für Schweizer Online-Marken, mit laufend berechneten Kosten pro Kunde, Kundenwert und Marge.',
    description: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine verlässliche Kundengewinnung. Oft fliesst viel Budget ohne klare Struktur in Meta, und über Google oder E-Mail kommt kaum etwas. Wir bauen eine Kundengewinnung auf mehreren Kanälen auf, verbinden Werbekonten mit Shop- und Kundendaten und testen Anzeigen in einem festen Rhythmus, bei dem KI Briefings vorbereitet und feste Regeln nachlassende Anzeigen melden.',
    benefits: [
      'Sie kennen Ihre Kosten pro Neukunde je Kanal, jede Woche aktualisiert',
      'Der Kundenwert pro Kaufmonat zeigt, welche Kampagnen rentable Kunden bringen',
      'Bessere Kaufquote auf Produktseiten und im Checkout',
      'Weniger Abhängigkeit von einem einzelnen Werbekanal'
    ],
    deliverables: [
      'Kampagnenstruktur über mehrere Kanäle',
      'Automatische Auswertung von Kosten pro Kunde und Kundenwert',
      'Testplan für Anzeigen mit KI-gestützten Briefings',
      'Optimierung von Produktseiten und Checkout, SEO für Suchbegriffe mit Kaufabsicht'
    ],
    iconName: 'TrendingUp',
    metrics: [],
    processSteps: [
      { title: 'Analyse & Daten', desc: 'Tatsächliche Kosten pro Kunde je Kanal und Wiederkaufrate ermitteln, Plan erstellen.' },
      { title: 'Grundlagen', desc: 'Tracking reparieren, Datenquellen verbinden, erste Shop-Optimierungen, E-Mail-Abläufe einrichten.' },
      { title: 'Testen', desc: 'Anzeigen und Kanäle systematisch testen, mit klaren Kennzahlen.' },
      { title: 'Ausbauen', desc: 'Budget für bewährte Kampagnen erhöhen, schwache Anzeigen stoppen.' }
    ]
  },
  {
    id: 'customer-retention',
    title: 'Kundenbindung & Wiederkäufe',
    slug: 'customer-retention',
    shortDesc: 'Abläufe, die auf Kaufzeitpunkt, Nutzung und Inaktivität reagieren, Rückgewinnung und Frühwarnzeichen für E-Commerce und B2B.',
    description: 'Einen bestehenden Kunden zu halten ist in der Regel deutlich günstiger, als einen neuen zu gewinnen. Trotzdem fehlt in vielen Unternehmen ein System, das Bestandskunden regelmässig anspricht und inaktive Kunden zurückholt. Wir bauen Abläufe, die auf Signale wie Kaufzeitpunkt, Nutzung oder Inaktivität reagieren, im B2B ergänzt um Frühwarnzeichen und eine Zusammenfassung der Kundenhistorie vor wichtigen Gesprächen. Für Online-Shops, Software-Anbieter und B2B-Dienstleister.',
    benefits: [
      'Mehr Wiederkäufe durch E-Mails im richtigen Moment',
      'Kundenwert wird nach Kaufmonat gemessen statt geschätzt',
      'Inaktive Kunden werden angesprochen, bevor sie ganz weg sind',
      'Im B2B erkennen Sie Kündigungsrisiken früher'
    ],
    deliverables: [
      'E-Mail- und SMS-Abläufe nach dem Kauf und für den Einstieg',
      'Auslöser und Frühwarnzeichen auf Basis Ihrer Kundendaten',
      'Treue- und Empfehlungsprogramme',
      'Dashboard zu Kundenwert und Wiederkäufen'
    ],
    iconName: 'RefreshCcw',
    metrics: [],
    processSteps: [
      { title: 'Analyse der Kundenbasis', desc: 'Auswertung des Kaufverhaltens der letzten 12–24 Monate.' },
      { title: 'Erste Abläufe', desc: 'Begrüssung, Nachkauf- und Rückgewinnungs-E-Mails gehen live, ausgelöst durch das Verhalten der Kunden.' },
      { title: 'Kundenwert steigern', desc: 'Zusatzangebote auf Basis der Kaufhistorie, im B2B Frühwarnzeichen.' },
      { title: 'Weitere Kanäle', desc: 'Ergänzung um WhatsApp oder SMS und persönlichere Abläufe.' }
    ]
  },
  {
    id: 'paid-social-ecommerce',
    title: 'Meta & TikTok Ads für Online-Shops',
    slug: 'paid-social-ecommerce',
    shortDesc: 'Meta- und TikTok-Kampagnen, gesteuert nach Deckungsbeitrag statt nur nach ROAS und täglich gegen die Gewinnschwelle geprüft.',
    description: 'Viele Online-Shops steuern ihre Meta- und TikTok-Kampagnen nach ROAS, also Umsatz pro Werbefranken. Produktmarge, Versandkosten und Rücksendungen fliessen dort nicht ein. Wir steuern Ihre Kampagnen nach Deckungsbeitrag, also nach dem, was nach all diesen Kosten übrig bleibt, und übermitteln den Plattformen margenbasierte Werte, sofern Margen im Shop oder ERP verfügbar sind. Ein fester Ablauf prüft täglich, ob jede Kampagne über der Gewinnschwelle liegt.',
    benefits: [
      'Sie wissen, ab welchem ROAS Ihre Werbung kostendeckend ist',
      'Kampagnen werden nach Deckungsbeitrag gesteuert, nicht nach Klicks oder Reichweite',
      'Laufende Tests neuer Anzeigen, damit die Ergebnisse nicht nachlassen',
      'Sinnvolle Aufteilung des Budgets zwischen Meta und TikTok'
    ],
    deliverables: [
      'Kampagnenstruktur nach Produktmargen',
      'Testplan und Briefings für neue Anzeigen',
      'Serverseitiges Tracking für Meta und TikTok, mit Margenwerten sofern verfügbar',
      'Tägliche Deckungsbeitrags-Kontrolle und monatlicher Gewinnbericht'
    ],
    iconName: 'TrendingUp',
    metrics: [],
    processSteps: [
      { title: 'Margen-Analyse', desc: 'Auswertung der tatsächlichen Marge je Artikel und Prüfung des Trackings.' },
      { title: 'Tracking einrichten', desc: 'Verkäufe und, wo vorhanden, Margenwerte werden serverseitig an Meta und TikTok übermittelt.' },
      { title: 'Start & Tests', desc: 'Kampagnen gehen mit festgelegtem Budget live, erste Anzeigentests laufen.' },
      { title: 'Kontrolliert ausbauen', desc: 'Budget schrittweise erhöhen, ohne die Marge aus den Augen zu verlieren.' }
    ]
  }
];

export const SOLUTIONS: SolutionArea[] = [
  {
    id: 'b2b-saas-tech',
    title: 'B2B Software & Tech',
    tagline: 'Mehr qualifizierte Anfragen für Ihr Softwaregeschäft.',
    targetGroup: 'Gründer, Geschäftsführer und Vertriebsleiter von B2B-Softwarefirmen',
    description: 'Gute Software verkauft sich nicht von allein. Interessenten müssen ihr Problem erkennen, bevor sie den Nutzen einer Lösung sehen. Wir kümmern uns um den ganzen Weg bis zur Anfrage: Kampagnen und Inhalte, automatisierte Produktdemos und ein sauber geführtes CRM, zum Beispiel in HubSpot.',
    idealFor: [
      'Ihre wiederkehrenden Software-Umsätze steigern wollen',
      'Ihren Verkaufszyklus verkürzen möchten',
      'feststellen, dass die Kaltakquise weniger bringt als früher'
    ],
    includedServices: ['growth-strategy', 'demand-generation', 'marketing-automation', 'sales-enablement'],
    recommendedCombo: 'Kampagnen und Inhalte auf LinkedIn, kombiniert mit Vertriebsleitfäden und automatischen Folge-E-Mails.',
    resultMetric: { label: 'Wichtigste Kennzahl', value: 'Kosten pro qualifizierter Anfrage' }
  },
  {
    id: 'professional-services',
    title: 'Beratung, Agenturen & Dienstleister',
    tagline: 'Neue Mandate gewinnen, auch ohne Empfehlung.',
    targetGroup: 'Unternehmensberater, Personalberater, IT-Dienstleister und Agenturen',
    description: 'Viele Dienstleister leben von Empfehlungen, die unregelmässig kommen. Wir ergänzen das Empfehlungsgeschäft um einen eigenen, regelmässigen Weg zu neuen Anfragen und machen Ihre Fachkompetenz online sichtbar, damit Sie im Schweizer Markt als Ansprechpartner für Ihr Thema wahrgenommen werden.',
    idealFor: [
      'weniger abhängig von Kaltakquise und Empfehlungen sein wollen',
      'häufiger grössere Mandate gewinnen wollen',
      'Ihre Beratungskompetenz online besser zeigen möchten'
    ],
    includedServices: ['growth-strategy', 'lead-generation', 'ai-automation', 'data-analytics'],
    recommendedCombo: 'Anfragen über nützliche Inhalte wie Leitfäden, kombiniert mit Tracking mit geklärter Einwilligung und KI-gestützter Direktansprache.',
    resultMetric: { label: 'Wichtigste Kennzahl', value: 'Gebuchte Erstgespräche' }
  },
  {
    id: 'b2b-manufacturing',
    title: 'Industrie & Produktion',
    tagline: 'Schweizer Industriekompetenz online sichtbar machen.',
    targetGroup: 'Industrieunternehmen, Zulieferer, Elektronik- und Maschinenbau',
    description: 'In der Industrie entstehen viele Geschäfte noch an Messen. Einkäufer recherchieren aber zunehmend online, bevor sie einen Anbieter kontaktieren. Wir sorgen dafür, dass Ihr Unternehmen dabei gefunden wird, im In- und Ausland.',
    idealFor: [
      'an Messen weniger neue Kontakte gewinnen als früher',
      'erklärungsbedürftige Produkte online verständlich darstellen wollen',
      'Ihre Händler und Partner auch online unterstützen wollen'
    ],
    includedServices: ['growth-strategy', 'demand-generation', 'sales-enablement', 'revenue-operations'],
    recommendedCombo: 'Saubere Abläufe zwischen Marketing und Vertrieb, kombiniert mit LinkedIn-Kampagnen für Entscheider und Vertriebsleitfäden.',
    resultMetric: { label: 'Wichtigste Kennzahl', value: 'Qualifizierte Anfragen pro Monat' }
  }
];
