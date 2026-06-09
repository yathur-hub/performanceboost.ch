import { ServiceDetail, SolutionArea } from '../types';

export const SERVICES: ServiceDetail[] = [
  {
    id: 'growth-strategy',
    title: 'Growth Strategy & Advisory',
    slug: 'growth-strategy',
    shortDesc: 'Strategisches Fundament für skalierbares Wachstum, Marktmodellierung und ICP-Optimierung.',
    description: 'Erfolgreiches Wachstum überlässt man nicht dem Zufall. Wir analysieren Ihre Marktchancen, definieren Ihren idealen Kunden (Ideal Customer Profile) und bauen ein datenbasiertes Go-To-Market Playbook auf. Damit verringern wir Streuverluste und sichern nachhaltige Neugeschäftskanäle.',
    benefits: [
      'Genaue Definition des Ideal Customer Profile (ICP) für zielgerichtete Ansprache',
      'Wettbewerbsanalyse & Unique Selling Proposition (USP) Schärfung',
      'Skalierbares Go-To-Market Playbook auf Schweizer & DACH-Verhältnisse abgestimmt',
      'Budgetsicherheit durch datengestützte Marktpotenzial-Modellierung'
    ],
    deliverables: [
      'Wachstums-Roadmap & 12-Monats-Aktionsplan',
      'ICP- & Buyer-Persona-Matrizen',
      'Wertversprechen- & Messaging-Framework',
      'Kanal- & Budgetallokationsplan'
    ],
    iconName: 'TrendingUp',
    metrics: [
      { label: 'Erhöhung ROI', value: '+40%' },
      { label: 'Verkürzte Sales Cycles', value: '-25%' }
    ],
    processSteps: [
      { title: 'Status-quo Analyse', desc: 'Audit aller aktuellen Kanäle, Pipeline-Zustände und Zielgruppen.' },
      { title: 'ICP & Messaging Workshop', desc: 'Gemeinsame Erarbeitung des präzisesten Zielkundenprofils.' },
      { title: 'Szenarien-Modellierung', desc: 'Berechnung von Budget-Szenarien und Akquisitionskosten (CAC).' },
      { title: 'Strategischer Rollout', desc: 'Übergabe des schlüsselfertigen Go-To-Market Playbooks.' }
    ]
  },
  {
    id: 'demand-generation',
    title: 'Demand Generation & Paid Ads',
    slug: 'demand-generation',
    shortDesc: 'Markenpräsenz und Nachfrageaufbau in Ihrer Zielgruppe durch hochpräzise Kampagnen.',
    description: 'Im B2B-Umfeld kaufen 95% Ihrer potenziellen Kunden jetzt gerade nicht. Mit modernem Demand Generation Marketing erzeugen wir echtes Kaufinteresse bei Ihrer Zielgruppe, bevor diese aktiv sucht. Wir bündeln exzellenten Content mit Paid LinkedIn, Google Search/Display sowie Meta Kampagnen.',
    benefits: [
      'Kontinuierliche pipeline-füllende Brand Awareness in der relevanten Zielgruppe',
      'Optimierte Akquisitionskosten (CAC) durch Retargeting-Sequenzen',
      'Synergieeffekte: LinkedIn Ads kombiniert mit Google Search Retargeting',
      'Umfassende Begleitung von Social Multi-Channel Ansprachen'
    ],
    deliverables: [
      'Ad Creative Master-Vorlagen & Copywriting',
      'Kampagnen-Setup (LinkedIn, Google, Meta)',
      'Account-Based Marketing (ABM) Kampagnenlisten',
      'Live-Reporting Dashboard für C-Level und Betrieb'
    ],
    iconName: 'Megaphone',
    metrics: [
      { label: 'Pipeline-Wachstum', value: '3.4x' },
      { label: 'CPL (Cost-per-Lead)', value: '-35%' }
    ],
    processSteps: [
      { title: 'Zielgruppen-Mapping', desc: 'Matching mit Job-Titeln, Branchen, Unternehmensgrössen.' },
      { title: 'Asset & Creative Creation', desc: 'Entwicklung von Bild-, Video- und Text-Assets.' },
      { title: 'Testphase & Optimization', desc: 'Start mit Budget-Splits zur Findung der besten "Winning-Hooks".' },
      { title: 'Scaling', desc: 'Erhöhung der Budgets bei stabilen Akquisitionsmetriken.' }
    ]
  },
  {
    id: 'lead-generation',
    title: 'Inbound & Outbound Lead Generation',
    slug: 'lead-generation',
    shortDesc: 'Systematische Gewinnung qualifizierter Leads durch Content Hubs, SEO & Prospecting.',
    description: 'Wir bringen kaufbereite Leads direkt in Ihre Sales Pipeline. Durch zielgerichtete Inbound-Methoden wie suchmaschinenoptimierten SEO-Content, Whitepaper-Funnels und Outbound Prospecting (Cold Outreach Automation via E-Mail und LinkedIn) erschaffen wir ein stabiles Neukundensystem.',
    benefits: [
      'Konsistenter Fluss von qualifizierten Demo- und Erstgesprächs-Buchungen',
      'Nachhaltige organische Sichtbarkeit (SEO) statt reiner Anzeigenabhängigkeit',
      'Personalisierte Outbound-Strategien ohne Spam-Charakter (Swiss-tuned)',
      'Effektive Lead-Magnete (Vorträge, ROI-Rechner, Checklisten)'
    ],
    deliverables: [
      'SEO Content Audit & Keyword-Struktur',
      'Outbound-Prospecting Sequences & Kampagnen',
      'Inbound Lead-Magnet & Landingpage-Funnel',
      'Lead Scoring & Routing-Algorithmus'
    ],
    iconName: 'Users',
    metrics: [
      { label: 'Monatlicher Inbound Zuwachs', value: '+120%' },
      { label: 'Reply-Quote Outbound', value: '18%' }
    ],
    processSteps: [
      { title: 'Lead-Magnet-Entwicklung', desc: 'Erstellung von Werkzeugen & Inhalten mit extrem hohem Nutzwert.' },
      { title: 'Outreach & SEO Setup', desc: 'Infrastruktur-Konfiguration und Setup der Mailbox-E-Mailings.' },
      { title: 'Launch', desc: 'Aktivierung der Outreach-Kampagnen und Veröffentlichung von SEO-Inhalten.' },
      { title: 'Analyse & Filter', desc: 'Iteratives Nachjustieren zur Reduzierung von unqualifizierten Kontakten.' }
    ]
  },
  {
    id: 'marketing-automation',
    title: 'Marketing Automation & CRM',
    slug: 'marketing-automation',
    shortDesc: 'Automatisierte Nurturing-Strecken und nahtlose HubSpot/CRM-Architekturen.',
    description: 'Wir verwandeln kalte Kontakte und passive Website-Besucher systematisch in kaufbereite Opportunities. Mit intelligenten Automatisierungs-Szenarien in HubSpot, ActiveCampaign oder Salesforce begleiten wir Leads entlang der Customer Journey, ganz ohne manuellen Sales-Aufwand.',
    benefits: [
      'Keine verlorenen Leads mehr dank automatisierter Folge-Mails (Nurturing)',
      'Perfekte Synchronität zwischen Marketing & Vertrieb',
      'Automatisches Lead Scoring sorgt für Fokus auf die wichtigsten Deals',
      'Effiziente Self-Service Buchungsstrecken'
    ],
    deliverables: [
      'Nurturing Kampagnen-Workflow & Copy',
      'CRM System-Integration & Custom Properties',
      'Automated Lead-Routing Regeln',
      'Datenbereinigungs- und Hygiene-Pipelines'
    ],
    iconName: 'Cpu',
    metrics: [
      { label: 'Vertriebs-Effizienz', value: '+50%' },
      { label: 'Lead-to-Opp Conversion', value: '+28%' }
    ],
    processSteps: [
      { title: 'Journey Mapping', desc: 'Definition aller Kontaktpunkte und Daten-Trigger.' },
      { title: 'CRM-Architektur Design', desc: 'Aufbau der PipelineStufen, Deals und Kontakteigenschaften.' },
      { title: 'Workflow-Programmierung', desc: 'Technische Verpartnerung der Systeme und Test-Triggers.' },
      { title: 'Schulung & Go-Live', desc: 'Onboarding Ihres Sales-Teams auf die neuen automatisierten Prozesse.' }
    ]
  },
  {
    id: 'sales-enablement',
    title: 'Sales Enablement & Playbooks',
    slug: 'sales-enablement',
    shortDesc: 'Werkzeuge, Argumentarien und Präsentationen, die Ihre Abschlussquote messbar steigern.',
    description: 'Das beste Marketing verpufft, wenn das Sales-Team im Gespräch improvisieren muss. Wir statten Ihr Vertriebsteam mit erstklassigen Fallstudien, einwandfreien Einwandbehandlungs-Leitfäden, interaktiven Preiskalkulatoren und messerscharfen Präsentationen aus. Jedes Gespräch wird professioneller.',
    benefits: [
      'Verkürzter Onboardingprozess für neue Sales-Mitarbeiter um über 50%',
      'Konsistentes, hochprofessionelles Auftreten beim Kunden (Corporate Identity)',
      'Höhere Abschlussquoten dank psychologisch optimierter Sales Decks',
      'Effektiver Einsatz von "Social Proof" (Kundenstimmen & Fallstudien)'
    ],
    deliverables: [
      'Sales Playbook (Interne Wissensdatenbank)',
      'Interaktive Präsentations-Templates & Decks',
      'Einwandbehandlungs- & Battle-Cards',
      'Kombinierter ROI-Rechner für Verkäufer'
    ],
    iconName: 'ShieldAlert', // Fills the gap, representing strength/governance
    metrics: [
      { label: 'Abschlussquote (Close Rate)', value: '+35%' },
      { label: 'Ramp-up-Zeit neue Mitarbeiter', value: '-60%' }
    ],
    processSteps: [
      { title: 'Sales-Audit & Befragung', desc: 'Wo haken Deals am häufigsten? Was sagen Konkurrenten?' },
      { title: 'Playbook-Erstellung', desc: 'Strukturierte Ausformulierung von Argumentationsketten & Antworten.' },
      { title: 'Asset-Design', desc: 'Gestaltung von optisch makellosen interaktiven Decks.' },
      { title: 'Simulation', desc: 'Testgespräche und Einwand-Drills mit dem Team zur Live-Verprobung.' }
    ]
  },
  {
    id: 'revenue-operations',
    title: 'Revenue Operations (RevOps)',
    slug: 'revenue-operations',
    shortDesc: 'Zusammenführung von Marketing, Sales und Support zu einer hocheffizienten Wachstumsmaschine.',
    description: 'Silos blockieren Ihren Umsatz. RevOps bricht die Barrieren zwischen Marketing, Vertrieb und Customer Success auf. Wir etablieren eine Single Source of Truth für Ihre Unternehmensdaten, vereinheitlichen KPIs und synchronisieren Tech-Stacks zur Maximierung der operativen Marge.',
    benefits: [
      'Vollständige Transparenz über den gesamten Customer Lifetime Value (LTV)',
      'Keine doppelten Lizenzen oder fragmentierten "Silo-Tools"',
      'Zuverlässige Umsatz-Prognosen (Forecasting) für Geschäftsleitung und Beirat',
      'Synchronisierte Motivation durch einheitliche Bonus-Metriken'
    ],
    deliverables: [
      'RevOps Dashboard (Umsatzträger-Übersicht)',
      'Tech-Stack-Kosten-Optimierungsplan',
      'Cross-Departmental KPI Dashboard',
      'Prozess-Handbuch'
    ],
    iconName: 'Layers',
    metrics: [
      { label: 'Umsatzwachstum (Rev Increase)', value: '+19%' },
      { label: 'Tech-Stack Ersparnis', value: '-30%' }
    ],
    processSteps: [
      { title: 'Tech-Stack Audit', desc: 'Auflistung aller Softwaretools, Kosten und Datenflüsse.' },
      { title: 'Pipeline-Harmonisierung', desc: 'Definition einheitlicher Phasenübergänge (MQL zu SQL zu Deal).' },
      { title: 'Daten-Konsolidierung', desc: 'Verknüpfung der Silos im zentralen Revenue-CRM.' },
      { title: 'Continuous Alignment', desc: 'Monatlicher Review-Cycle zur Systemoptimierung.' }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Inbound/Outbound Automation',
    slug: 'ai-automation',
    shortDesc: 'Automatisierte AI-Agenten für Datenanreicherung, Kundenservice & Smart Outreach.',
    description: 'Manuelle Arbeit bremst Sie aus. Wir konzipieren und implementieren intelligente KI-Agenten, die administrative Aufgaben im Handumdrehen erledigen. Ob automatisierte Vorbereitung von Verkaufsgesprächen, AI-gestützte Daten-Anreicherung von LinkedIn-Profilen oder automatisierte E-Mail-Beantwortung – wir machen Ihr Team produktiver.',
    benefits: [
      'Enorme Zeitersparnis bei Routineaufgaben (Administration & Reporting)',
      'Skalierbarkeit: Mehr Termine vereinbaren, ohne das Headcount zu erhöhen',
      'Ultra-personalisierte Kundenansprache dank dynamischem LLM-Scoring',
      'Perfekte Integration in Make.com, Zapier und n8n'
    ],
    deliverables: [
      'Integrierte AI-Assistenten (Make.com Workflows)',
      'Scraping- & LinkedIn-Data Enriched Listen',
      'Automatisierter Lead-Analyse-Agent im CRM',
      'Interaktiv geschalteter KI-Qualifizierer'
    ],
    iconName: 'Sparkles',
    metrics: [
      { label: 'Eingesparte Arbeitsstunden', value: '18h/Woche' },
      { label: 'Datenpräzision', value: '99%' }
    ],
    processSteps: [
      { title: 'Use-Case Identifikation', desc: 'Sichtung der zeitraubendsten repetitiven Aufgaben im Vertrieb.' },
      { title: 'Workflow-Design', desc: 'Draft der Automatisierungskette unter Einbindung von GPT-4o / Gemini API.' },
      { title: 'Security & Privacy Check', desc: 'Sicherstellung DSGVO/GDPR-konformer Datenverarbeitung.' },
      { title: 'Wartungs-Übergabe', desc: 'Implementierung & Übergabe inklusive Ausfallsicherung.' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data, Analytics & Web Tracking',
    slug: 'data-analytics',
    shortDesc: 'Datenschutzkonformes First-Party Webtracking und glasklare Attributionsmodelle.',
    description: 'Raten Sie nicht, wer für Ihren Umsatz sorgt. Wir implementieren datenschutzkonformes (GDPR/Swiss DSG-konformes) Server-Side Tagging, Google Analytics 4, Matomo und ausgeklügelte Lead-Attributionsmodelle, damit Sie genau sehen, über welche Marketingkanäle Ihre wertvollsten Kunden kamen.',
    benefits: [
      'Umsatzbasierte Attributionsberichte statt "Last-Click"-Wahrsagerei',
      'Datenschutzkonformes Tracking (CH-DSG & DSGVO-kompatibel) gesichert',
      'Höhere Datenqualität für Meta & LinkedIn Conversion APIs (CAPI)',
      'Aussagekräftige Customer-Journey Visualisierungen'
    ],
    deliverables: [
      'Server-Side Google Tag Manager Setup',
      'GA4 / Matomo Clean Setup & Dashboards',
      'Conversion API (CAPI) Anbindungen',
      'Automated Executive Lead Report PDF'
    ],
    iconName: 'PieChart',
    metrics: [
      { label: 'Erfasste Conversions', value: '+35%' },
      { label: 'Vermeidung von Datenverlust', value: '100%' }
    ],
    processSteps: [
      { title: 'Tracking Audit & Consent Check', desc: 'Prüfung der aktuellen Cookie-Banner und Datenlecks.' },
      { title: 'Server-Side GTM Setup', desc: 'Etablierung des Tracking-Servers (Cloud Run / AWS) zur First-Party-Datenspeicherung.' },
      { title: 'Umsatz-Attribution', desc: 'Verknüpfung der CRM-Verkäufe mit den Klick-IDs (GCLID, MSCLKID, GLID).' },
      { title: 'Dashboard-Erstellung', desc: 'Visualisierung in ansprechenden Looker Studio Reports.' }
    ]
  },
  {
    id: 'ecommerce-performance',
    title: 'E-Commerce Performance',
    slug: 'ecommerce-performance',
    shortDesc: 'Systematische Optimierung von Conversion-Rate, Retention & Paid Media für Online-Shops.',
    description: 'Wir optimieren deinen Online-Shop für Conversion, Retention und skalierbares Wachstum. Weniger Abbrüche, höherer Warenkorb, mehr Wiederholkäufer — messbar.',
    benefits: [
      'Conversion-Rate steigt messbar durch datenbasierte Optimierung',
      'Paid Budget arbeitet effizienter — mehr Umsatz pro eingesetztem Franken',
      'Bestandskunden kaufen häufiger (höhere Wiederkaufrate & LTV)',
      'Optimierte Core Web Vitals für blitzschnelle Ladezeiten'
    ],
    deliverables: [
      'Conversion-Rate & Checkout-Fluss Optimierung (CRO)',
      'Automatisierte Retention Flows & E-Mail-Marketing',
      'Paid Media & Google Shopping Kampagnen-Management',
      'Server-Side Analytics & E-Commerce Attributions-Setup'
    ],
    iconName: 'ShoppingCart',
    metrics: [
      { label: 'Conversion-Rate', value: '+2.4x' },
      { label: 'Umsatz aus Retention', value: '38%' }
    ],
    processSteps: [
      { title: 'Diagnose & Audit', desc: 'Identifikation aller Schwachstellen und Conversion-Bremsen im Shop.' },
      { title: 'Fundament legen', desc: 'Tracking-Reparatur, Bereinigung von Feeds und Aufbau der ersten Flows.' },
      { title: 'Testen & Optimieren', desc: 'Systematische CRO-A/B-Tests auf Shop- und Checkout-Seiten.' },
      { title: 'Skalieren & Vertiefen', desc: 'Budget-Skalierung, Expansion und Einbindung neuer Shop-Kategorien.' }
    ]
  }
];

export const SOLUTIONS: SolutionArea[] = [
  {
    id: 'b2b-saas-tech',
    title: 'B2B Software & Tech',
    tagline: 'Von unbemerkt zu global skalierbar – der Turbo für Ihr Softwaregeschäft.',
    targetGroup: 'B2B SaaS Gründer, CEOs & VP Sales',
    description: 'Im Technologie-Sektor reicht exzellente Software alleine nicht aus. Kunden müssen das Problem verstehen, bevor sie den Nutzen kaufen. Wir orchestrieren den gesamten Funnel: Lead Generation über technologische Insights, automatisierte Produktdemos und nahtloses HubSpot Pipeline Management.',
    idealFor: [
      'Wiederkehrende Software-Umsätze steigern wollen',
      'Den Vertriebszyklus (Sales Cycle) von Monaten auf Wochen verkürzen möchten',
      'Vor dem Problem stehen, dass der Outbound-Erfolg nachgelassen hat'
    ],
    includedServices: ['growth-strategy', 'demand-generation', 'marketing-automation', 'sales-enablement'],
    recommendedCombo: 'Demand Generation (LinkedIn Content) kombiniert mit Sales Enablement Playbooks und automatisierten Nurturing-Sequenzen.',
    resultMetric: { label: 'Ø Kosten pro qualifizierte SQL', value: 'SFr. 180.-' }
  },
  {
    id: 'professional-services',
    title: 'Consulting, Agency & Professional Services',
    tagline: 'Systematisch DACH-Marktführer anziehen statt reiner Mund-zu-Mund-Propaganda.',
    targetGroup: 'Unternehmensberater, Executive Search, IT-Dienstleister & Agenturen',
    description: 'Dienstleistungs-Unternehmen leben oft von unregelmässigen Empfehlungen. Mit unserer integrierten B2B-Wachstumsarchitektur transformieren wir Ihr Empfehlungsgeschäft zu einer messbaren, kalkulierbaren Kundenpipeline. Wir positionieren Sie als anerkannte Thought Leader im Schweizer Markt.',
    idealFor: [
      'Sich aus der Abhängigkeit von reiner Kaltakquise und Empfehlungen befreien wollen',
      'Systematisch Premium-Mandate (SFr. 25k+) abschliessen wollen',
      'Ihre Beratungsexpertise digital skalierbar präsentieren möchten'
    ],
    includedServices: ['growth-strategy', 'lead-generation', 'ai-automation', 'data-analytics'],
    recommendedCombo: 'Lead Generation (Inbound Lead-Magneten wie Whitepapers) in Verbindung mit datenschutzkonformen Analytics und KI-Outbound Automation.',
    resultMetric: { label: 'Ø Termin-Buchungsquote', value: '4.8%' }
  },
  {
    id: 'b2b-manufacturing',
    title: 'Verarbeitende Industrie & High-Tech Manufacturing',
    tagline: 'Verbindung traditioneller Schweizer Präzision mit modernster digitaler Lead-Pipeline.',
    targetGroup: 'Industrieunternehmen, Zulieferer, Elektronik- & Maschinenbau',
    description: 'In der Industrie finden Geschäfte oft auf Fachmessen statt. Doch der moderne Einkäufer recherchiert digital: 84% des B2B-Einkaufsprozesses geschehen, bevor ein Verkäufer kontaktiert wird. Wir bauen Ihr digitales Ausstellungsfenster für nationale und internationale Leads.',
    idealFor: [
      'Auf Messen immer weniger Neukontakte generieren',
      'Komplexe, erklärungsbedürftige Industrieprodukte digital erfassbar machen wollen',
      'Ihre globalen Händlernetze gezielt online unterstützen wollen'
    ],
    includedServices: ['growth-strategy', 'demand-generation', 'sales-enablement', 'revenue-operations'],
    recommendedCombo: 'RevOps (zur Pipeline-Synchronisation) gekoppelt mit High-Quality Demand Generation (LinkedIn Ads für KMU-Chefs) und Sales Playbooks.',
    resultMetric: { label: 'Erhöhung der Exportanfragen', value: '+75%' }
  }
];
