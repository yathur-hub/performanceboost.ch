import { ServiceDetail, SolutionArea } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'growth-strategy',
    title: 'Wachstumsstrategie & Beratung',
    slug: 'growth-strategy',
    shortDesc: 'Klarer Plan für die Neukundengewinnung: Wunschkunden, Positionierung, Kanäle und Budget.',
    description: 'Planbares Wachstum beginnt mit klaren Entscheidungen. Wir schauen uns Ihren Markt und Ihre bestehenden Kunden an, beschreiben Ihre Wunschkunden und legen fest, über welche Kanäle und mit welchen Botschaften Sie diese erreichen. So fliesst Ihr Budget dorthin, wo Anfragen entstehen.',
    benefits: [
      'Klares Zielkundenprofil, damit Werbung und Vertrieb die richtigen Firmen ansprechen',
      'Geschärfte Positionierung: warum Kunden Sie wählen und nicht die Konkurrenz',
      'Umsetzbarer Vermarktungsplan, abgestimmt auf den Schweizer und DACH-Markt',
      'Budgetplanung auf Basis realistischer Annahmen statt Bauchgefühl'
    ],
    deliverables: [
      'Wachstumsplan mit Massnahmen für die nächsten 12 Monate',
      'Zielkundenprofil und Beschreibung der wichtigsten Entscheider',
      'Kernbotschaften und Nutzenversprechen',
      'Kanal- und Budgetplan'
    ],
    iconName: 'TrendingUp',
    metrics: [],
    processSteps: [
      { title: 'Bestandsaufnahme', desc: 'Wir prüfen Ihre aktuellen Kanäle, Anfragen und Zielgruppen.' },
      { title: 'Workshop Zielkunden & Botschaften', desc: 'Gemeinsam beschreiben wir Ihre Wunschkunden und was diese überzeugt.' },
      { title: 'Budget-Szenarien', desc: 'Wir rechnen durch, was Kundengewinnung pro Kanal etwa kosten darf.' },
      { title: 'Übergabe des Plans', desc: 'Sie erhalten einen Vermarktungsplan, den Ihr Team direkt umsetzen kann.' }
    ]
  },
  {
    id: 'demand-generation',
    title: 'Online-Werbung & Nachfrageaufbau',
    slug: 'demand-generation',
    shortDesc: 'Kampagnen auf Google, Meta und LinkedIn, die Ihre Zielgruppe gezielt erreichen.',
    description: 'Viele Ihrer künftigen Kunden suchen heute noch nicht aktiv. Mit Kampagnen auf LinkedIn, Google und Meta sorgen wir dafür, dass Ihr Unternehmen bekannt ist, wenn der Bedarf entsteht, und dass Interessenten, die bereits suchen, bei Ihnen landen. Anzeigen, Inhalte und Landingpages stimmen wir aufeinander ab.',
    benefits: [
      'Regelmässige Sichtbarkeit bei den Firmen und Personen, die für Sie relevant sind',
      'Tiefere Kosten pro Anfrage durch sauberes Retargeting',
      'LinkedIn, Google und Meta ergänzen sich, statt nebeneinander zu laufen',
      'Begleitung über alle Kanäle aus einer Hand'
    ],
    deliverables: [
      'Anzeigenvorlagen und Werbetexte',
      'Kampagnen-Setup auf LinkedIn, Google und Meta',
      'Listen von Zielfirmen für gezielte Ansprache',
      'Laufendes Reporting für Geschäftsleitung und Team'
    ],
    iconName: 'Megaphone',
    metrics: [],
    processSteps: [
      { title: 'Zielgruppe festlegen', desc: 'Abgleich nach Funktion, Branche und Unternehmensgrösse.' },
      { title: 'Anzeigen erstellen', desc: 'Entwicklung von Bild-, Video- und Textanzeigen.' },
      { title: 'Testphase', desc: 'Start mit aufgeteiltem Budget, um herauszufinden, welche Botschaften wirken.' },
      { title: 'Ausbau', desc: 'Mehr Budget dort, wo die Kosten pro Anfrage stabil bleiben.' }
    ]
  },
  {
    id: 'lead-generation',
    title: 'Lead-Generierung: SEO, Content & Direktansprache',
    slug: 'lead-generation',
    shortDesc: 'Qualifizierte Anfragen über Suchmaschinen, nützliche Inhalte und persönliche Direktansprache.',
    description: 'Wir sorgen dafür, dass passende Interessenten zu Ihnen finden und Sie gezielt auf passende Firmen zugehen können. Dazu gehören Inhalte, die bei Google gefunden werden, Landingpages mit nützlichen Angeboten wie Checklisten oder Leitfäden sowie eine persönliche Direktansprache per E-Mail und LinkedIn.',
    benefits: [
      'Regelmässige Anfragen für Erstgespräche statt Zufallskontakte',
      'Sichtbarkeit bei Google, die nicht vom Werbebudget abhängt',
      'Direktansprache, die persönlich bleibt und auf den Schweizer Markt abgestimmt ist',
      'Nützliche Angebote wie Rechner, Checklisten oder Vorträge, die Kontakte bringen'
    ],
    deliverables: [
      'SEO-Analyse und Keyword-Struktur',
      'E-Mail- und LinkedIn-Sequenzen für die Direktansprache',
      'Landingpage mit Download-Angebot',
      'Regeln zur Bewertung und Weiterleitung von Anfragen'
    ],
    iconName: 'Users',
    metrics: [],
    processSteps: [
      { title: 'Angebot entwickeln', desc: 'Wir erstellen Inhalte und kleine Werkzeuge, die für Ihre Zielgruppe nützlich sind.' },
      { title: 'Technik einrichten', desc: 'Postfächer, Versand und SEO-Grundlagen werden sauber aufgesetzt.' },
      { title: 'Start', desc: 'Die Direktansprache startet, die ersten SEO-Inhalte gehen online.' },
      { title: 'Auswerten & nachschärfen', desc: 'Wir passen laufend an, damit weniger unpassende Kontakte ankommen.' }
    ]
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation & CRM',
    slug: 'marketing-automation',
    shortDesc: 'Automatische Folge-E-Mails und ein CRM, in dem keine Anfrage mehr verloren geht.',
    description: 'Nicht jeder Interessent ist sofort kaufbereit. Mit automatisierten Abläufen in HubSpot, ActiveCampaign oder Salesforce begleiten wir Kontakte weiter, bis ein Gespräch sinnvoll ist. Ihr Vertrieb sieht im CRM, wer sich wofür interessiert, und muss nicht jedem Kontakt manuell nachgehen.',
    benefits: [
      'Keine vergessenen Anfragen dank automatischer Folge-E-Mails',
      'Marketing und Vertrieb arbeiten mit denselben Informationen',
      'Bewertung der Kontakte, damit sich Ihr Vertrieb auf die wichtigsten konzentriert',
      'Interessenten können Termine selbst buchen'
    ],
    deliverables: [
      'Abläufe für Folge-E-Mails inklusive Texte',
      'CRM-Einrichtung mit passenden Feldern',
      'Regeln, wer welche Anfrage erhält',
      'Bereinigung und laufende Pflege der Kontaktdaten'
    ],
    iconName: 'Cpu',
    metrics: [],
    processSteps: [
      { title: 'Ablauf aufzeichnen', desc: 'Wir halten fest, wo Interessenten mit Ihnen in Kontakt kommen.' },
      { title: 'CRM-Struktur', desc: 'Aufbau der Verkaufsphasen, Deals und Kontakteigenschaften.' },
      { title: 'Abläufe einrichten', desc: 'Systeme verbinden und alle Auslöser testen.' },
      { title: 'Schulung & Start', desc: 'Ihr Team lernt die neuen Abläufe kennen und arbeitet damit.' }
    ]
  },
  {
    id: 'sales-enablement',
    title: 'Vertriebsunterstützung & Leitfäden',
    slug: 'sales-enablement',
    shortDesc: 'Argumentarien, Präsentationen und Unterlagen, mit denen Ihr Vertrieb besser vorbereitet ins Gespräch geht.',
    description: 'Gutes Marketing verpufft, wenn im Verkaufsgespräch improvisiert wird. Wir erarbeiten mit Ihrem Team Referenzbeispiele, Antworten auf häufige Einwände, Preisrechner und Präsentationen. So treten alle Verkäufer einheitlich auf und neue Mitarbeitende finden sich schneller zurecht.',
    benefits: [
      'Neue Mitarbeitende im Verkauf werden schneller sicher',
      'Einheitlicher, professioneller Auftritt beim Kunden',
      'Präsentationen, die den Nutzen für den Kunden klar zeigen',
      'Kundenstimmen und Referenzen gezielt einsetzen'
    ],
    deliverables: [
      'Vertriebsleitfaden als interne Wissenssammlung',
      'Präsentationsvorlagen',
      'Antworten auf häufige Einwände und Vergleich mit Mitbewerbern',
      'Rechner für Wirtschaftlichkeit, den Ihr Vertrieb im Gespräch nutzt'
    ],
    iconName: 'ShieldAlert', // Fills the gap, representing strength/governance
    metrics: [],
    processSteps: [
      { title: 'Analyse & Gespräche', desc: 'Wo kommen Abschlüsse ins Stocken? Was sagen Kunden über Mitbewerber?' },
      { title: 'Leitfaden erstellen', desc: 'Argumente und Antworten werden strukturiert ausformuliert.' },
      { title: 'Unterlagen gestalten', desc: 'Präsentationen und Vorlagen im Erscheinungsbild Ihres Unternehmens.' },
      { title: 'Üben', desc: 'Testgespräche mit dem Team, um die Unterlagen in der Praxis zu prüfen.' }
    ]
  },
  {
    id: 'revenue-operations',
    title: 'Marketing, Vertrieb & Daten verbinden (RevOps)',
    slug: 'revenue-operations',
    shortDesc: 'Gemeinsame Zahlen, Abläufe und Tools für Marketing, Vertrieb und Kundenbetreuung.',
    description: 'Wenn Marketing, Vertrieb und Kundenbetreuung mit unterschiedlichen Zahlen und Tools arbeiten, gehen Anfragen und Umsatz verloren. Wir sorgen dafür, dass alle mit denselben Daten arbeiten, legen gemeinsame Kennzahlen fest und verbinden Ihre Systeme so, dass Übergaben funktionieren.',
    benefits: [
      'Überblick, welche Kunden über die Zeit wie viel Umsatz bringen',
      'Weniger doppelte Lizenzen und Insellösungen',
      'Verlässlichere Umsatzprognosen für die Geschäftsleitung',
      'Gemeinsame Ziele für Marketing und Vertrieb'
    ],
    deliverables: [
      'Übersicht über Anfragen, Verkaufschancen und Umsatz',
      'Plan zur Bereinigung der Tool-Landschaft und ihrer Kosten',
      'Gemeinsames Kennzahlen-Dashboard',
      'Prozess-Handbuch'
    ],
    iconName: 'Layers',
    metrics: [],
    processSteps: [
      { title: 'Tool-Analyse', desc: 'Wir listen alle Programme, ihre Kosten und Datenflüsse auf.' },
      { title: 'Verkaufsphasen vereinheitlichen', desc: 'Klare Definition, wann aus einem Kontakt eine Anfrage und ein Deal wird.' },
      { title: 'Daten zusammenführen', desc: 'Die wichtigsten Daten laufen im CRM zusammen.' },
      { title: 'Laufende Abstimmung', desc: 'Monatlicher Review, um Abläufe und Systeme nachzuschärfen.' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'KI & Automatisierung',
    slug: 'ai-automation',
    shortDesc: 'KI-gestützte Abläufe für Recherche, Datenpflege, Gesprächsvorbereitung und Direktansprache.',
    description: 'Viele Routineaufgaben im Vertrieb und Marketing lassen sich heute automatisieren. Wir setzen KI-Abläufe dort ein, wo sie Ihrem Team Zeit sparen: bei der Vorbereitung von Verkaufsgesprächen, beim Anreichern von Firmendaten oder beim Vorsortieren von E-Mails. Was nicht zuverlässig funktioniert, setzen wir nicht ein.',
    benefits: [
      'Weniger Zeit für Routineaufgaben wie Administration und Reporting',
      'Mehr Gespräche führen, ohne sofort neue Stellen zu schaffen',
      'Persönlichere Ansprache dank besser aufbereiteter Informationen',
      'Einbindung in Make, Zapier oder n8n'
    ],
    deliverables: [
      'KI-Assistenten in Ihren bestehenden Abläufen',
      'Angereicherte Firmen- und Kontaktlisten',
      'Automatische Auswertung neuer Anfragen im CRM',
      'KI-gestützte Vorqualifizierung von Anfragen'
    ],
    iconName: 'Sparkles',
    metrics: [],
    processSteps: [
      { title: 'Einsatzbereiche finden', desc: 'Welche wiederkehrenden Aufgaben kosten im Vertrieb am meisten Zeit?' },
      { title: 'Ablauf entwerfen', desc: 'Entwurf der Automatisierung mit geeigneten KI-Modellen wie GPT oder Gemini.' },
      { title: 'Datenschutz prüfen', desc: 'Verarbeitung der Daten im Rahmen von DSG und DSGVO.' },
      { title: 'Übergabe', desc: 'Umsetzung, Dokumentation und Übergabe inklusive Plan für Störungen.' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Tracking, Analyse & Reporting',
    slug: 'data-analytics',
    shortDesc: 'Datenschutzkonformes Tracking und Berichte, die zeigen, welche Kanäle Kunden bringen.',
    description: 'Sie sollen wissen, woher Ihre Kunden kommen. Wir richten datenschutzkonformes Tracking ein (DSG und DSGVO), etwa mit serverseitigem Tagging, Google Analytics 4 oder Matomo, und verbinden die Daten mit Ihrem CRM. So sehen Sie, über welche Kanäle Ihre wertvollsten Kunden gekommen sind.',
    benefits: [
      'Berichte nach Umsatz statt nur nach dem letzten Klick',
      'Tracking im Rahmen von Schweizer DSG und DSGVO',
      'Bessere Daten für die Kampagnensteuerung auf Meta und LinkedIn',
      'Nachvollziehbare Darstellung, wie Kunden zu Ihnen finden'
    ],
    deliverables: [
      'Serverseitiges Google Tag Manager Setup',
      'Saubere Einrichtung von GA4 oder Matomo inklusive Dashboards',
      'Anbindung der Conversion-Schnittstellen von Meta und LinkedIn',
      'Automatischer Bericht für die Geschäftsleitung'
    ],
    iconName: 'PieChart',
    metrics: [],
    processSteps: [
      { title: 'Tracking- und Cookie-Check', desc: 'Prüfung des Cookie-Banners und der bestehenden Messung.' },
      { title: 'Serverseitiges Tracking', desc: 'Einrichtung eines eigenen Tracking-Servers, z. B. bei Google Cloud oder AWS.' },
      { title: 'Umsatz zuordnen', desc: 'Verkäufe aus dem CRM werden mit den Klicks aus den Kampagnen verknüpft.' },
      { title: 'Dashboards', desc: 'Übersichtliche Berichte in Looker Studio.' }
    ]
  },
  {
    id: 'ecommerce-performance',
    title: 'E-Commerce Performance',
    slug: 'ecommerce-performance',
    shortDesc: 'Mehr Käufe aus bestehendem Traffic: Shop-Optimierung, Wiederkäufe und Werbung für Online-Shops.',
    description: 'Wir verbessern Ihren Online-Shop dort, wo Umsatz verloren geht: weniger Kaufabbrüche, grössere Warenkörbe und mehr Kunden, die wieder bestellen. Jede Massnahme messen wir, damit Sie sehen, was sie bringt.',
    benefits: [
      'Höhere Kaufquote durch Änderungen, die auf Daten beruhen',
      'Werbebudget wird gezielter eingesetzt, mit Blick auf den Umsatz pro Franken',
      'Bestehende Kunden bestellen häufiger',
      'Schnellere Ladezeiten und bessere Core Web Vitals'
    ],
    deliverables: [
      'Optimierung von Produktseiten und Checkout',
      'Automatische E-Mails für Wiederkäufe und Kundenbindung',
      'Betreuung von Google Shopping und weiteren Kampagnen',
      'Serverseitiges Tracking und Umsatzzuordnung für den Shop'
    ],
    iconName: 'ShoppingCart',
    metrics: [],
    processSteps: [
      { title: 'Analyse', desc: 'Wir suchen die Stellen, an denen Besucher den Kauf abbrechen.' },
      { title: 'Grundlagen schaffen', desc: 'Tracking reparieren, Produktfeeds bereinigen, erste E-Mail-Abläufe aufbauen.' },
      { title: 'Testen & verbessern', desc: 'A/B-Tests auf Produkt- und Checkout-Seiten.' },
      { title: 'Ausbauen', desc: 'Mehr Budget für rentable Kanäle, weitere Kategorien und Märkte.' }
    ]
  },
  {
    id: 'dtc-growth-acquisition',
    title: 'Kundengewinnung für Online-Marken (D2C)',
    slug: 'dtc-growth-acquisition',
    shortDesc: 'Neukundengewinnung mit Blick auf Kosten pro Kunde, Kundenwert und Marge für Schweizer Online-Marken.',
    description: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine verlässliche Kundengewinnung. Oft fliesst viel Budget ohne klare Struktur in Meta, und über Google oder E-Mail kommt kaum etwas. Wir bauen eine Kundengewinnung auf, die auf mehreren Kanälen steht und deren Kosten Sie kennen.',
    benefits: [
      'Sie kennen Ihre Kosten pro Neukunde je Kanal',
      'Kundenwert nach Kaufmonat: Sie sehen, welche Kampagnen rentable Kunden bringen',
      'Bessere Kaufquote auf Produktseiten und im Checkout',
      'Weniger Abhängigkeit von einem einzelnen Werbekanal'
    ],
    deliverables: [
      'Kampagnenstruktur über mehrere Kanäle',
      'Auswertung von Kosten pro Kunde und Kundenwert',
      'Optimierung von Produktseiten und Checkout',
      'SEO für Suchbegriffe mit Kaufabsicht'
    ],
    iconName: 'TrendingUp',
    metrics: [],
    processSteps: [
      { title: 'Analyse & Daten', desc: 'Tatsächliche Kosten pro Kunde je Kanal und Wiederkaufrate ermitteln, Plan erstellen.' },
      { title: 'Grundlagen', desc: 'Tracking reparieren, erste Shop-Optimierungen, E-Mail-Abläufe einrichten.' },
      { title: 'Testen', desc: 'Anzeigen und Kanäle systematisch testen, mit klaren Kennzahlen.' },
      { title: 'Ausbauen', desc: 'Budget für bewährte Kampagnen erhöhen, schwache Anzeigen stoppen.' }
    ]
  },
  {
    id: 'customer-retention',
    title: 'Kundenbindung & Wiederkäufe',
    slug: 'customer-retention',
    shortDesc: 'Automatische E-Mails, Rückgewinnung inaktiver Kunden und Treueprogramme für E-Commerce und B2B.',
    description: 'Einen bestehenden Kunden zu halten ist in der Regel deutlich günstiger, als einen neuen zu gewinnen. Trotzdem fehlt in vielen Unternehmen ein System, das Bestandskunden gezielt anspricht und inaktive Kunden zurückholt. Wir bauen diese Abläufe auf, für Online-Shops, Software-Anbieter und B2B-Dienstleister.',
    benefits: [
      'Mehr Wiederkäufe durch automatische E-Mails nach dem Kauf',
      'Kundenwert wird nach Kaufmonat gemessen statt geschätzt',
      'Inaktive Kunden werden angesprochen, bevor sie ganz weg sind',
      'Im B2B erkennen Sie Kündigungsrisiken früher'
    ],
    deliverables: [
      'E-Mail- und SMS-Abläufe nach dem Kauf und für den Einstieg',
      'Laufende Programme zur Rückgewinnung inaktiver Kunden',
      'Treue- und Empfehlungsprogramme',
      'Dashboard zu Kundenwert und Wiederkäufen'
    ],
    iconName: 'RefreshCcw',
    metrics: [],
    processSteps: [
      { title: 'Analyse der Kundenbasis', desc: 'Auswertung des Kaufverhaltens der letzten 12–24 Monate.' },
      { title: 'Erste Abläufe', desc: 'Begrüssung, Nachkauf- und Rückgewinnungs-E-Mails gehen live.' },
      { title: 'Kundenwert steigern', desc: 'Automatische Zusatzangebote auf Basis der Kaufhistorie.' },
      { title: 'Weitere Kanäle', desc: 'Ergänzung um WhatsApp oder SMS und persönlichere Abläufe.' }
    ]
  },
  {
    id: 'paid-social-ecommerce',
    title: 'Meta & TikTok Ads für Online-Shops',
    slug: 'paid-social-ecommerce',
    shortDesc: 'Meta- und TikTok-Kampagnen, gesteuert nach Deckungsbeitrag statt nur nach ROAS.',
    description: 'Viele Online-Shops steuern ihre Meta- und TikTok-Kampagnen nach ROAS, also Umsatz pro Werbefranken. Produktmarge, Versandkosten und Rücksendungen fliessen dort nicht ein. Wir steuern Ihre Kampagnen nach Deckungsbeitrag, damit Werbung nicht nur Umsatz bringt, sondern Gewinn.',
    benefits: [
      'Sie wissen, ab welchem ROAS Ihre Werbung kostendeckend ist',
      'Kampagnen werden nach Deckungsbeitrag gesteuert, nicht nach Klicks oder Reichweite',
      'Laufende Tests neuer Anzeigen, damit die Ergebnisse nicht nachlassen',
      'Sinnvolle Aufteilung des Budgets zwischen Meta und TikTok'
    ],
    deliverables: [
      'Kampagnenstruktur nach Produktmargen',
      'Testplan und Briefings für neue Anzeigen',
      'Serverseitiges Tracking über die Schnittstellen von Meta und TikTok',
      'Monatlicher Bericht zu Deckungsbeitrag und Gewinn'
    ],
    iconName: 'TrendingUp',
    metrics: [],
    processSteps: [
      { title: 'Margen-Analyse', desc: 'Auswertung der tatsächlichen Marge je Artikel und Prüfung des Trackings.' },
      { title: 'Tracking einrichten', desc: 'Verkäufe werden serverseitig an Meta und TikTok übermittelt.' },
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
    tagline: 'Neue Mandate planbar gewinnen, nicht nur über Empfehlungen.',
    targetGroup: 'Unternehmensberater, Personalberater, IT-Dienstleister und Agenturen',
    description: 'Viele Dienstleister leben von Empfehlungen, die unregelmässig kommen. Wir ergänzen das Empfehlungsgeschäft um einen planbaren Weg zu neuen Anfragen und machen Ihre Fachkompetenz online sichtbar, damit Sie im Schweizer Markt als Ansprechpartner für Ihr Thema wahrgenommen werden.',
    idealFor: [
      'weniger abhängig von Kaltakquise und Empfehlungen sein wollen',
      'gezielt grössere Mandate gewinnen wollen',
      'Ihre Beratungskompetenz online besser zeigen möchten'
    ],
    includedServices: ['growth-strategy', 'lead-generation', 'ai-automation', 'data-analytics'],
    recommendedCombo: 'Anfragen über nützliche Inhalte wie Leitfäden, kombiniert mit datenschutzkonformem Tracking und KI-gestützter Direktansprache.',
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
      'Ihre Händler und Partner online gezielt unterstützen wollen'
    ],
    includedServices: ['growth-strategy', 'demand-generation', 'sales-enablement', 'revenue-operations'],
    recommendedCombo: 'Saubere Abläufe zwischen Marketing und Vertrieb, kombiniert mit LinkedIn-Kampagnen für Entscheider und Vertriebsleitfäden.',
    resultMetric: { label: 'Wichtigste Kennzahl', value: 'Qualifizierte Anfragen pro Monat' }
  }
];
