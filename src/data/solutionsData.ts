/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SolutionSector {
  slug: string;
  title: string;
  subtitle: string;
  heroDesc: string;
  calculatorComponent: string;
  problems: {
    title: string;
    desc: string;
  }[];
  approach: {
    step: string;
    title: string;
    desc: string;
  }[];
  benefits: string[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SOLUTIONS_SECTORS: { [key: string]: SolutionSector } = {
  'finanzdienstleister': {
    slug: 'finanzdienstleister',
    title: 'Finanzdienstleister',
    subtitle: 'Beratungs-Systeme für bankenunabhängige Vermögensverwalter & Finanzberatungen',
    heroDesc: 'Generiere erstklassige Beratungsanfragen solventer Schweizer Privat- und Geschäftskunden. Messbar, compliance-konform und planbar ohne Kaltakquise.',
    calculatorComponent: 'BeratungsPipelineRechner',
    problems: [
      {
        title: 'Verlust stromabwärts über klassische Akquise',
        desc: 'Weiterempfehlungen stossen an geografische Grenzen und reichen für stabiles Wachstum nicht aus. Traditionelle Werbung verpufft oft wirkungslos.'
      },
      {
        title: 'Mangelnde digitale Vorqualifizierung',
        desc: 'Viele Online-Anfragen haben unzureichendes Anlagevermögen oder falsche Vorstellungen. Wertvolle Beratungszeit wird an unproduktive Leads verloren.'
      },
      {
        title: 'Heftige regulatorische Hürden (FIDLEG)',
        desc: 'Werbemassnahmen müssen absolut compliant sein. Unüberlegte Slogans führen rasch zu Abmahnungen oder rechtlichen Reibungspunkten.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Zielgruppenpräzise Positionierung',
        desc: 'Wir schärfen deine Spezialisierung (z.B. Pensionierungsplanung oder KMU-Unternehmervermögen) und formulieren ein unschlagbares Nutzenversprechen.'
      },
      {
        step: '02',
        title: 'Qualifizierende Trichter (Funnels)',
        desc: 'Interessenten durchlaufen vorab einen digitalen Check, der das frei verfügbare Anlagekapital sowie steuerliche Rahmendaten diskret abfragt.'
      },
      {
        step: '03',
        title: 'Regelkonformer digitaler Multi-Channel-Aufbau',
        desc: 'Wir etablieren compliant Kampagnen auf Premiumkanälen wie LinkedIn und Google Ads, die nachhaltig Vertrauen bei Wohlhabenden aufbauen.'
      }
    ],
    benefits: [
      'Konstante Pipeline an hochqualifizierten Erstgesprächsterminen',
      'Minimierung unproduktiver Beratungsstunden durch strenge Vorqualifizierung',
      'Vollständig FIDLEG-konformer Werbe- und Aufklärungskanal',
      'Stärkung der regionalen Dominanz als Vertrauensperson'
    ],
    faqs: [
      {
        q: 'Funktioniert Online-Marketing für wohlhabende Kunden (HNWIs)?',
        a: 'Absolut. Wohlhabende Privatpersonen und Unternehmer nutzen LinkedIn und Suchmaschinen aktiv zur Recherche nach Nachfolgelösungen und Steueroptimierungen.'
      },
      {
        q: 'Sind die Funnels und Kampagnen mit FIDLEG vereinbar?',
        a: 'Ja. Wir arbeiten eng mit Compliance-Richtlinien zusammen. Alle Texte, Disclaimer und Abfragen werden so konzipiert, dass sie den strengen Schweizer Anforderungen genügen.'
      }
    ]
  },
  'saas-software': {
    slug: 'saas-software',
    title: 'SaaS & Software',
    subtitle: 'B2B Revenue-Attribution & Customer Acquisition für Software-Häuser',
    heroDesc: 'Schliesse die Lücke zwischen Marketing-Ausgaben und echtem Contract Value (ACV/ARR). Minimiere dein Revenue-Leck im B2B-Sales Cycle.',
    calculatorComponent: 'SaasRevenueLeckRechner',
    problems: [
      {
        title: 'Das klassische Daten-Silogefälle',
        desc: 'Marketing feiert "MQLs" (Lead-Zahlen), während der Sales unqualifizierte Kontakte beklagt. Es fehlt eine durchgängige Brücke bis zum Closed-Won.'
      },
      {
        title: 'Inkonsistente Churn-Gefahren',
        desc: 'Hohe Akquisitionskosten (CAC) lohnen sich nur bei langem Kundenwert (LTV). Ein Mangel an systematischem Onboarding treibt den Churn in die Höhe.'
      },
      {
        title: 'Zu lange Entscheidungszyklen',
        desc: 'B2B-SaaS-Produkte erfordern die Zustimmung von IT, Finanzen und Fachbereich. Ohne gezielte Inhalte für jeden Entscheider schläft der Deal ein.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Unified Lead-to-Revenue-Mapping',
        desc: 'Wir verbinden Web-Tracking, CRM und Abrechnungssysteme zu einer absolut verlässlichen Datenquelle (Single Source of Truth).'
      },
      {
        step: '02',
        title: 'Buying Center Enablement',
        desc: 'Wir erstellen zielgerichtete Ressourcen (wie ROI-Kalkulatoren, Sicherheits-Dossiers), mit denen dein interner Champion den Kauf beschleunigen kann.'
      },
      {
        step: '03',
        title: 'Automatisierte Nurturing-Sequenzen',
        desc: 'Trial-User und Demo-Anfragen werden verhaltensbasiert bespielt, um die Aktivierungsrate direkt im Produkt messbar zu erhöhen.'
      }
    ],
    benefits: [
      'Verkürzung der B2B-Sales-Zyklen um durchschnittlich 25-30%',
      'Volle Transparenz über die profitabelsten Marketingkanäle nach ROI statt Klicks',
      'Höhere Aktivierungsraten in Product-Led Funnels',
      'Nahtlos synchronisierte Marketing- und Vertriebsprozesse'
    ],
    faqs: [
      {
        q: 'Unterstützt ihr auch internationale GTM-Kampagnen?',
        a: 'Ja. Wir optimieren und skalieren deine GTM-Modelle sowohl für den Schweizer Heimmarkt (D-CH, Romandie) als auch für die gesamte DACH-Region und Europa.'
      },
      {
        q: 'Welche CRMs und Attributions-Tools bindest du an?',
        a: 'Wir haben weitreichende Erfahrung mit HubSpot, Salesforce, Pipedrive sowie modernen Analyseplattformen wie Mixpanel, Segment und Google Analytics 4.'
      }
    ]
  },
  'immobilien': {
    slug: 'immobilien',
    title: 'Immobilien',
    subtitle: 'Digitale Vermarktungs-Systeme für Projektentwickler, Makler & Verwalter',
    heroDesc: 'Verkürze die Vermarktungsdauer deiner Neubauprojekte, Gewerbeflächen und Bestandsimmobilien. Systematische Lead-Gewinnung statt Leerstand.',
    calculatorComponent: 'LeerstandskostenRechner',
    problems: [
      {
        title: 'Hohe Opportunitätskosten durch Leerstand',
        desc: 'Jeder Monat, in dem ein Gewerbe- oder Wohnobjekt leer steht, vernichtet unweigerlich Rendite. Klassische Portale allein greifen oft zu kurz.'
      },
      {
        title: 'Mangel an verifizierten Miet-/Kaufinteressenten',
        desc: 'Exposé-Jäger verstopfen das Postfach, bringen aber keine echten Bonitätsnachweise mit. Das bindet enorme Kapazitäten im Vertrieb.'
      },
      {
        title: 'Ineffiziente Erstbemusterung & Koordination',
        desc: 'Manuelle Terminabsprachen, zeitraubende Besichtigungen mit unentschlossenen Interessenten und unvollständige Bewerbungsunterlagen.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Zielgruppenorientierte Microsites',
        desc: 'Wir erstellen hochkonvertierende Projekt-Landingpages mit ausdrucksstarken Grundrissen, interaktiven Rundgängen und digitaler Reservierung.'
      },
      {
        step: '02',
        title: 'Automatisierter Bonitäts- & Match-Check',
        desc: 'Interessenten qualifizieren sich über Online-Checks hinsichtlich Haushaltsbudget, gewünschtem Einzugstermin und Haustierhaltung vor.'
      },
      {
        step: '03',
        title: 'Lokales Performance-Marketing',
        desc: 'Über Geotargeting auf Social Media und Google Ads sprechen wir exakt die Pendler, Familien oder Firmen an, die im Suchkreis suchen.'
      }
    ],
    benefits: [
      'Signifikante Verkürzung der Leerstandszeit um bis zu 40%',
      'Höhere Lead-Qualität durch digitale Vorqualifizierung der Interessenten',
      'Automatisches Einladen zu Besichtigungsterminen per SMS/E-Mail',
      'Erhöhung der Exklusiv-Aufträge für Makler dank digitaler Kompetenz'
    ],
    faqs: [
      {
        q: 'Lohnt sich das auch für kleinere, regionale Makler?',
        a: 'Gerade für diese. Durch digitale Dominanz im regionalen Einzugsgebiet behauptest du dich erfolgreich gegen grosse Ketten und gewinnst mehr Alleinaufträge.'
      },
      {
        q: 'Können bestehende Immobilien-Softwaren wie FlowFact oder CAS connected werden?',
        a: 'Ja. Wir binden bewährte Branchenwerkzeuge und CRMs über Schnittstellen an, damit Daten nahtlos synchronisiert werden.'
      }
    ]
  },
  'treuhand-unternehmensberatung': {
    slug: 'treuhand-unternehmensberatung',
    title: 'Treuhand & Unternehmensberatung',
    subtitle: 'Kanzleiwachstum, Neukundengewinnung & digitale Mandats-Vorqualifizierung',
    heroDesc: 'Ziehe die lukrativsten KMU-Mandate und Steuerberatungskunden der Schweiz an. Planbares Kanzleiwachstum bei maximaler Prozessentlastung.',
    calculatorComponent: 'KanzleiWachstumsCheck',
    problems: [
      {
        title: 'Kollaps im Tagesgeschäft durch "Zwergen-Mandate"',
        desc: 'Kleine Mandate mit hohem Beleg-Reibungsaufwand verstopfen das Kanzlei-Team, während komplexe Beratungsmandate zu kurz kommen.'
      },
      {
        title: 'Klassische Empfehlungs-Stagnation',
        desc: 'Empfehlungen sind grossartig, kommen aber unregelmässig vor. Ein planbares, steuerbares Kanzlei-Wachstum ist so unmöglich.'
      },
      {
        title: 'Fehlende Schnittstellen & Mandanten-Disziplin',
        desc: 'Belege werden ungeordnet, unvollständig oder verspätet eingereicht. Das führt zu permanentem Termindruck am Quartalsende.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Schärfung des Kanzlei-Profils',
        desc: 'Wir schärfen deine Zielgruppe (z.B. Ärzte, KMUs ab 2M Umsatz) und rücken deine digitale Beratungskompetenz ins Zentrum.'
      },
      {
        step: '02',
        title: 'Mandats-Qualifizierungs-Trichter',
        desc: 'Ein digitaler Check erfasst wesentliche Daten (Umsatzgrösse, Mitarbeiterzahl, Buchhaltungs-Tool) noch vor dem Erstgespräch.'
      },
      {
        step: '03',
        title: 'Autoritäts-Aufbau auf LinkedIn',
        desc: 'Wir positionieren deine Partner und Kanzlei-Inhaber als profilierte Experten für Steuerthemen, Vorsorge und Unternehmensnachfolge.'
      }
    ],
    benefits: [
      'Gezielte Akquisition von lukrativen A-Mandaten (KMUs, Holdingstrukturen)',
      'Minimierung zeitfressender Erstgespräche mit nicht passenden Interessenten',
      'Automatisierung des Onboarding-Prozesses für Neumandate',
      'Entlastung des gesamten Kanzlei-Teams durch vordefinierte Workflows'
    ],
    faqs: [
      {
        q: 'Unsere Mandanten suchen uns für unsere Vertrauenswürdigkeit. Passt digitales Marketing da überhaupt?',
        a: 'Ja, absolut. Professionelles B2B-Marketing im Treuhandwesen baut Vertrauen auf, indem es Fachkompetenz, Fallstudien und klares Branchenwissen digital sichtbar macht.'
      },
      {
        q: 'Unterstützt du Kanzleien auch bei der Rekrutierung von Fachkräften?',
        a: 'Ja. Kanzlei-Wachstum benötigt qualifizierte Treuhänder und Sachbearbeiter. Wir nutzen dieselben digitalen Funnels erfolgreich für das Employer Branding.'
      }
    ]
  },
  'b2b-industrie-kmu': {
    slug: 'b2b-industrie-kmu',
    title: 'Industrie & KMU',
    subtitle: 'Systematische Angebots-Pipelines für Industrie, Produktion & B2B-KMU',
    heroDesc: 'Digitalisere deinen B2B-Vertrieb. Schaffe eine lückenlose Pipeline von der digitalen Erst-Anfrage bis zum unterschriebenen Angebot.',
    calculatorComponent: 'AngebotsPipelineRechner',
    problems: [
      {
        title: 'Die Abhängigkeit vom "Messe-Vertrieb"',
        desc: 'Klassische B2B-Messen verlieren an Zugkraft. Bleiben sie aus, bricht die Neukundenpipeline rasch ein. Der Aussendienst arbeitet ohne digitale Flankierung.'
      },
      {
        title: 'Zu hohe technische Erklärungsbedürftigkeit',
        desc: 'Komplexe Produkte werden auf der Website so kompliziert erklärt, dass potenzielle Kunden die Navigation frustriert abbrechen.'
      },
      {
        title: 'Hohe Angebotsschreib-Verluste (Umsatzleck)',
        desc: 'Es werden aufwendig Angebote kalkuliert, die danach im Sande verlaufen, weil ein strukturierter Nachfass-Prozess komplett fehlt.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Einfache visuelle Customer Journeys',
        desc: 'Wir strukturieren komplexe Industrieprodukte so, dass B2B-Einkäufer den Nutzen in Sekundenschnelle verstehen.'
      },
      {
        step: '02',
        title: 'Digitaler Produkt-Konfigurator / Check',
        desc: 'Interessenten können ihre Spezifikationen und Anforderungen spielerisch online konfigurieren und qualifiziert anfragen.'
      },
      {
        step: '03',
        title: 'CRM-gestütztes Pipeline-Management',
        desc: 'Wir führen glasklare Phasen und automatisierte Wiedervorlagen für Angebote ein, um die Abschlussquote im Vertrieb massiv zu erhöhen.'
      }
    ],
    benefits: [
      'Konstante Ströme qualifizierter Erstanfragen von B2B-Einkäufern & Ingenieuren',
      'Signifikante Verringerung ungehörter Angebote dank automatischem Follow-Up',
      'Entlastung des technischen Vertriebsaußendienstes bei der Kaltakquise',
      'Transparente Nachverfolgung aller Deal-Volumen im zentralen CRM'
    ],
    faqs: [
      {
        q: 'Funktioniert das auch bei hochspezialisierten Nischenprodukten?',
        a: 'Gerade dort. Einkäufer und Konstrukteure googeln heute nach Lösungen. Wer digital präzise gefunden wird, gewinnt den Ausschreibungs-Vorsprung.'
      },
      {
        q: 'Wie binden wir den bestehenden Vertriebs-Aussendienst ein?',
        a: 'Wir schulen dein Team und binden CRM-Dashboards so an, dass deine Aussendienstmitarbeiter exakt sehen, wer auf der Website welche Broschüre geladen hat.'
      }
    ]
  },
  'it-dienstleister-msps': {
    slug: 'it-dienstleister-msps',
    title: 'IT-Dienstleister & MSPs',
    subtitle: 'Skalierung von Managed Services (MRR) & IT-Projektvolumen',
    heroDesc: 'Generiere planbar Anfragen für Managed Services, IT-Security und Cloud-Migrationen bei Schweizer KMUs. Weg von Einmal-Projekten hin zu planbarem Recurring Revenue.',
    calculatorComponent: 'RecurringRevenuePotenzialRechner',
    problems: [
      {
        title: 'Das klassische "Feuerwehr-Modell"',
        desc: 'Du wirst gerufen, wenn es brennt — erzielst dann einmalig Umsatz, hast aber keine wiederkehrende Einnahmenbasis im Folgemonat.'
      },
      {
        title: 'Vergleichbarkeit & Preiskampf',
        desc: 'Ohne scharfes, nutzenorientiertes Angebot werden Angebote als austauschbare "Hardware- und Stundensätze" wahrgenommen.'
      },
      {
        title: 'Mangelnde Erreichbarkeit von Entscheidern',
        desc: 'Geschäftsführer von KMUs blocken klassische Telefonakquise ab. Deine Botschaft gelangt nicht an die relevanten Entscheiderköpfe.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Strukturierung des MSP-Angebots',
        desc: 'Wir paketieren deine IT-Dienstleistungen in glasklare Flatrate- und Service-Level-Pakete mit unwiderstehlichem Return on Investment.'
      },
      {
        step: '02',
        title: 'Digitaler IT-Security- & Servercheck',
        desc: 'Über interaktive Schnelldiagnose-Tools qualifizieren sich KMUs bezüglich DSGVO, Cyber-Sicherheit und Backup-Infrastruktur.'
      },
      {
        step: '03',
        title: 'Gezielles B2B-LinkedIn-Marketing',
        desc: 'Wir sprechen Geschäftsführer und CFOs gezielt in ihrer Sprache an: Kostensicherheit, Ausfallsicherheit, Mitarbeitereffizienz.'
      }
    ],
    benefits: [
      'Kontinuierlicher Zuwachs an monatlich wiederkehrendem Umsatz (MRR)',
      'Scharfe Positionierung als strategischer IT-Partner statt billiger Turn-Key-Lieferant',
      'Systematischer Anlauf qualifizierter B2B-Sicherheitsberatungen',
      'Planbarkeit bei der Personaleinsatz- und Ressourcenplanung'
    ],
    faqs: [
      {
        q: 'Wie grenzen wir uns von den unzähligen Mitbewerbern am Markt ab?',
        a: 'Durch klare Package-Strukturen und eine radikal nutzenorientierte Ansprache. Wir verkaufen nicht "Cloud", sondern "Null Datenverlust & maximale Standort-Flexibilität".'
      },
      {
        q: 'Hilfst du uns, bestehende Kunden in Abo-Modelle (MSPs) zu überführen?',
        a: 'Ja. Wir entwickeln Umschichtungs-Konzepte und die passenden Vertriebsargumente, mit denen du Projektkunden schrittweise in Retainer überführst.'
      }
    ]
  },
  'ingenieur-planungsbuero': {
    slug: 'ingenieur-planungsbuero',
    title: 'Ingenieur- & Planungsbüros',
    subtitle: 'Systematisches Projektpipeline-Wachstum & Employer Branding',
    heroDesc: 'Sichere dir den Zugriff auf lukrative private und öffentliche Bauprojekte. Kontinuierliches Sichtbarkeits-System für führende Ingenieurdienstleistungen.',
    calculatorComponent: 'ProjektpipelineCheck',
    problems: [
      {
        title: 'Fatale Abhängigkeit von wenigen Schlüsselkunden',
        desc: 'Bricht ein grosser Bauträger oder eine Gemeinde als Auftraggeber weg, steht die gesamte Büroauslastung plötzlich vor einer existentiellen Klippe.'
      },
      {
        title: 'Völlig ungenutzte Proaktiv-Akquise',
        desc: 'Viele Büros agieren rein reaktiv auf Ausschreibungen. Lukrative Direktaufträge von Industrie- und Gewerbebauherren gehen ungesehen an die Konkurrenz.'
      },
      {
        title: 'Gravierender Fachkräftemangel',
        desc: 'Erstklassige Bauingenieure, Zeichner und Projektleiter sind rar. Ohne moderne digitale Bürosichtbarkeit verpufft das Employer Branding.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Visualisierung der Referenz-Power',
        desc: 'Wir bereiten deine Leuchtturm-Projekte digital als packende Fallstudien auf, die Kompetenz und Termintreue unmissverständlich beweisen.'
      },
      {
        step: '02',
        title: 'Targeting von privaten Gewerbe-Bauherren',
        desc: 'Über LinkedIn und Google Ads sprechen wir Expansionsentscheider, Fabrikationsleiter und institutionelle Investoren gezielt an.'
      },
      {
        step: '03',
        title: 'Digitaler Bewerbungs-Funnel',
        desc: 'Wir etablieren einen 60-Sekunden-Bewerbungsprozess ohne Anschreiben, der passiven Fachkräften den Wechsel spielerisch leicht macht.'
      }
    ],
    benefits: [
      'Gezielte Erschliessung neuer, privater Industrie- und Gewerbe-Bauprojekte',
      'Breiter diversifizierte Pipeline, die das Klumpenrisiko drastisch senkt',
      'Nachhaltiger Zustrom von Initiativ-Bewerbungen qualifizierter Ingenieure',
      'Sichtbare Positionierung als wegweisendes, modernes Planungsbüro der Region'
    ],
    faqs: [
      {
        q: 'Dürfen wir als Ingenieure überhaupt proaktiv akquirieren?',
        a: 'Natürlich. Solange es professionell und sachlich abläuft. Wir richten die Ansprache exakt auf technische Expertise, Energieeffizienz und Schweizer Qualitätsstandards aus.'
      },
      {
        q: 'Wie funktioniert ein digitaler Bewerbungs-Funnel für Ingenieure?',
        a: 'Passive Kandidaten haben meist keinen Lebenslauf auf dem Handy bereitliegen. Unser Funnel fragt Fachkompetenzen ab und ermöglicht den Erstkontakt via Klick.'
      }
    ]
  },
  'personalvermittler-recruiting': {
    slug: 'personalvermittler-recruiting',
    title: 'Personalvermittler & Recruiting',
    subtitle: 'Zweiseitiges Skalierungs-System für Such-Mandate (Kanten & Kandidaten)',
    heroDesc: 'Beschleunige deinen Placement-Zyklus. Gewinne exklusive Suchmandate auf Arbeitgeberseite und qualifizierte Fachkräfte im Gleichschritt.',
    calculatorComponent: 'PlacementEffizienzRechner',
    problems: [
      {
        title: 'Verlust von Exklusivität bei Suchmandaten',
        desc: 'Arbeitgeber streuen Mandate an fünf Vermittler gleichzeitig. Du leistest viel Arbeit auf Erfolgsbasis, gehst am Ende aber leer aus.'
      },
      {
        title: 'Die leere Kandidatendatenbank',
        desc: 'Klassische Stellenportale liefern kaum noch brauchbare Bewerbungen. Qualifizierte Kandidaten müssen dort abgeholt werden, wo sie sich aufhalten.'
      },
      {
        title: 'Extrem langwieriger Bewerbungsprozess',
        desc: 'Unstrukturierte Lebenslaufprüfungen und langwierige Abstimmungsschleifen mit dem Kunden verzögern den Placement-Umsatz.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Positionierungs-Spezialisierung',
        desc: 'Wir heben dich aus der Masse der Allgemeinvermittler heraus und machen dich zur unangefochtenen Kanzlei-/Branchen-Anlaufstelle.'
      },
      {
        step: '02',
        title: 'Zweiseitiges Trichter-Marketing',
        desc: 'Wir bauen parallel laufende Funnel: Einen für exklusive Suchaufträge von HR-Leitern, einen für wechselwillige Top-Spezialisten.'
      },
      {
        step: '03',
        title: 'Automatisierte Talent-Nurturing-Sequenzen',
        desc: 'Kandidaten in deiner Pipeline werden fortlaufend mit Markt-insights versorgt, damit du im entscheidenden Moment "Top of Mind" bist.'
      }
    ],
    benefits: [
      'Signifikant höherer Anteil an exklusiven Suchmandaten gegen Vorauszahlung',
      'Automatisierte Gewinnung von wechselwilligen Top-Spezialisten per Social Ads',
      'Verkürzung der Time-to-Fill (Besetzungszeit) um durchschnittlich 30%',
      'Höhere Wiedereinstellungs-Raten und nachhaltige HR-Partnerschaften'
    ],
    faqs: [
      {
        q: 'Wie sprechen wir passive Kandidaten an, ohne unseriös zu wirken?',
        a: 'Mit erstklassiger Brand-Kompetenz und nützlichem Content (z.B. Gehaltsstudien). Seriosität und Diskretion bilden das Zentrum unserer Ansprache.'
      },
      {
        q: 'Funktioniert das System auch für Executive Search (C-Level)?',
        a: 'Ja. Für das Top-Segment nutzen wir hochgradig personalisierte Video-Ansprachen, fundiertes Executive-Nurturing und exklusiven Netzwerk-Ausbau.'
      }
    ]
  },
  'bildung-weiterbildung': {
    slug: 'bildung-weiterbildung',
    title: 'Bildung & Weiterbildung',
    subtitle: 'Kurs-Funnel-Systeme für Akademien, Institute & Erwachsenenbildung',
    heroDesc: 'Fülle deine Lehrgänge, Seminare und CAS-Studiengänge systematisch mit direkt buchenden Teilnehmern. Planbare Teilnehmergewinnung ohne Reibungsverlust.',
    calculatorComponent: 'KursFunnelRechner',
    problems: [
      {
        title: 'Hohe Akquisitionskosten (CAC) pro Studiengast',
        desc: 'Klassische Broschüren drucken und Messeteilnahmen sind teuer, aber die Nachvollziehbarkeit auf tatsächliche Buchungen fehlt vollständig.'
      },
      {
        title: 'Enormer Beratungsaufwand im Vorfeld',
        desc: 'Das Sekretariat führt unzählige Beratungsgespräche mit Personen, die am Ende die formalen Zulassungsvoraussetzungen gar nicht erfüllen.'
      },
      {
        title: 'Frustrierende Abbrecherquoten auf Info-Landingpages',
        desc: 'Interessenten besuchen zwar die Kursseite, springen dann aber ab, weil der Buchungs- oder Infoabend-Anmelder-Prozess zu komplex ist.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Interaktiver Zulassungs- und Eignungs-Check',
        desc: 'Wir etablieren einen Online-Check, bei dem Teilnehmer in 3 Schritten prüfen können, ob sie für den Lehrgang qualifiziert sind.'
      },
      {
        step: '02',
        title: 'Infoabend-Automations-Workflows',
        desc: 'Anmeldungen zu Infoabenden erhalten automatisierte SMS-Erinnerungen und vorbereitende Mailings, was die Erscheinquote drastisch steigert.'
      },
      {
        step: '03',
        title: 'Verhaltensbasiertes Retargeting',
        desc: 'Wer sich die Modulübersicht ansieht, wird gezielt mit Testimonials ehemaliger Absolventen bespielt, um Vertrauen aufzubauen.'
      }
    ],
    benefits: [
      'Konstant hohe Auslastung aller Seminare, Lehrgänge und Studiengänge',
      'Automatisches Aussortieren ungeeigneter Bewerber im Vorfeld',
      'Deutliche Zeitentlastung der Studienberatung durch qualifizierten Erstkontakt',
      'Messbare Reduktion der Werbekosten pro eingeschriebenem Student'
    ],
    faqs: [
      {
        q: 'Kann unser bestehendes ERP/Lernmanagement-System angebunden werden?',
        a: 'Ja. Wir binden die Lead-Erfassung nahtlos an gängige Systeme an, damit Kursdaten und Teilnehmerlisten synchron bleiben.'
      },
      {
        q: 'Wir bieten Nischenkurse an. Finden wir dafür online genug Teilnehmer?',
        a: 'Absolut. Gerade spezifische Fachthemen eignen sich hervorragend für Suchmaschinen-Anzeigen (Google Ads), da die Suchabsicht bereits extrem hoch ist.'
      }
    ]
  },
  'gesundheitswesen': {
    slug: 'gesundheitswesen',
    title: 'Gesundheitswesen',
    subtitle: 'Umsatzhebel & Neupatienten-Marketing für Fachkliniken & Spezialpraxen',
    heroDesc: 'Gewinne gezielt Selbstzahler, Privatpatienten und Zuweiser für deine medizinischen Schwerpunkte. Ethikkonform, digital und hochprofessionell.',
    calculatorComponent: 'NeupatientenPotenzialCheck',
    problems: [
      {
        title: 'Überlastung durch "Kassen-Routine"',
        desc: 'Klassische Behandlungen decken kaum noch die Praxiskosten. Lukrative Selbstzahler-Leistungen oder Privatpatienten-Mandate kommen zu kurz.'
      },
      {
        title: 'Mangelnde digitale Sichtbarkeit bei Spezialthemen',
        desc: 'Patienten recherchieren Symptome und Therapien online. Wer dort nicht erstklassig auftaucht, überlässt die lukrativen Fälle anderen Kliniken.'
      },
      {
        title: 'Zeitraubende administrative Patientenaufnahme',
        desc: 'Unvollständige medizinische Vorkenntnisse, telefonische Termin-Schleifen und fehlende digitale Anamnese-Optionen kosten Zeit.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Themenspezifische Patienten-Landingpages',
        desc: 'Wir erstellen äusserst seriöse, verständliche Informationsseiten für spezifische Behandlungen (z.B. Implantologie, Gelenkchirurgie).'
      },
      {
        step: '02',
        title: 'Eignungs- & Symptom-Check',
        desc: 'Patienten beantworten anonym spezifische Fragen (z.B. Leidensdruck, Vorbehandlungen), um die Indikation abzuklären.'
      },
      {
        step: '03',
        title: 'Digitale Online-Terminkontrolle',
        desc: 'Direkte Anbindung von Kalenderschnittstellen für die bequeme 24/7-Buchung von Erst- und Beratungsgesprächen.'
      }
    ],
    benefits: [
      'Gezielte Steigerung von lukrativen Selbstzahler- & Privatpatienten-Anteilen',
      'Vollständig standes- und werberechtskonformes Mediziner-Marketing',
      'Signifikante Zeitersparnis für das Praxis-Sekretariat bei der Terminvereinbarung',
      'Erhöhter Vertrauensaufbau im Vorfeld durch seriöse Aufklärung'
    ],
    faqs: [
      {
        q: 'Ist proaktive Werbung für Ärzte in der Schweiz nicht stark eingeschränkt?',
        a: 'Ja. Wir setzen daher auf seriöses "Educational Marketing" (Patientenaufklärung). Sachliche Information, ansprechend aufbereitet, ist rechtlich absolut zulässig und hochwirksam.'
      },
      {
        q: 'Unterstützt du auch die Gewinnung von medizinischem Fachpersonal (MFA / Pflege)?',
        a: 'Ja. Ein funktionierendes Praxisteam ist das Rückgrat jeder Klinik. Wir konzipieren auch digitale Recruitingfunnels zur Personalgewinnung.'
      }
    ]
  },
  'handwerk': {
    slug: 'handwerk',
    title: 'Handwerk & Bauwesen',
    subtitle: 'Auftrags-Pipeline & Büroautomation für Schweizer Handwerksbetriebe',
    heroDesc: 'Gewinnen über planbar margenstarke Bauprojekte und Wunsch-Aufträge in deiner Region. Beschleunige deine Angebotserstellung durch intelligente Automation.',
    calculatorComponent: 'AuftragsPipelineRechner',
    problems: [
      {
        title: 'Zeitfressender "Zettelkram" im Büro',
        desc: 'Kundenanfragen kommen per Mail, Telefon und Whatsapp rein. Die Übersicht geht verloren, Offerten dauern Wochen und Kunden springen ab.'
      },
      {
        title: 'Fatale Preisschlachten bei Standard-Ausschreibungen',
        desc: 'Wer sich nur auf öffentliche Portale verlässt, muss über den günstigsten Preis gehen. Lukrative Direkt-Umbauprojekte von Privatleuten fehlen.'
      },
      {
        title: 'Der ständige Baustellen-Fachkräftemangel',
        desc: 'Aufträge müssen abgelehnt werden, weil Monteure und Poliere fehlen. Das Recruiting läuft unstrukturiert über veraltete Zeitungsinserate.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Regionale Markt-Dominanz',
        desc: 'Wir positionieren deinen Betrieb digital als erste Anlaufstelle für anspruchsvolle Privat- und Gewerbebauvorhaben in deinem Kanton.'
      },
      {
        step: '02',
        title: 'Digitaler Angebots-Konfigurator',
        desc: 'Bauherren fragen ihre Wunschprojekte (z.B. Badsanierung, PV-Anlage, Holzanbau) mit allen Eckdaten digital über deine Website an.'
      },
      {
        step: '03',
        title: 'Büro-Automation & CRM-Anbindung',
        desc: 'Wir etablieren schlanke Prozesse zur Angebotserfassung und automatische Erinnerungsschlaufen für ausstehende Offerten.'
      }
    ],
    benefits: [
      'Laufender Zufluss von margenstarken Direktaufträgen von Bauherren',
      'Drastische Verkürzung der Offert-Erstellungsdauer um bis zu 50%',
      'Effektives Nachfassen aller Angebote ohne manuellen Mehraufwand',
      'Sichtbarkeit bei Fachkräften der Region für unkomplizierte Bewerbungen'
    ],
    faqs: [
      {
        q: 'Müssen wir für diese Automation unsere gesamte Software umstellen?',
        a: 'Nein. Wir binden bewährte Handwerkersoftwaren (z.B. Abacus, Bexio, SORBA) über Schnittstellen an, um Daten synchron zu halten.'
      },
      {
        q: 'Lohnt sich das auch für kleinere Familienbetriebe (5-10 Mitarbeiter)?',
        a: 'Gerade dort. Wenn der Chef selbst auf der Baustelle steht, ist Zeit im Büro Mangelware. Unser System hält ihm den Rücken vom Papierkram frei.'
      }
    ]
  },
  'rechtsanwaelte': {
    slug: 'rechtsanwaelte',
    title: 'Rechtsanwälte',
    subtitle: 'Digitale Kanzleiprozesse & gezielte Gewinnung von Wirtschafts-Mandaten',
    heroDesc: 'Gewinne planbar erstklassige Wirtschafts- und Spezialmandate. Reduziere deinen administrativen Beiback durch hocheffiziente Vorqualifizierung.',
    calculatorComponent: 'KanzleiAuslastungsCheck',
    problems: [
      {
        title: 'Flugstunden-Verlust durch "Telefon-Tourismus"',
        desc: 'Das Sekretariat führt unzählige unproduktive Erstgespräche mit Personen, deren Fälle juristisch aussichtslos oder schlicht unrentabel sind.'
      },
      {
        title: 'Hoher administrativer Overhead bei der Aufnahme',
        desc: 'Die Einholung von Mandatsdaten, Vollmachten und ersten Akten läuft zäh, was wertvolle Billable-Stunden auf Partner-Ebene vernichtet.'
      },
      {
        title: 'Fehlende digitale Kanzleipositionierung',
        desc: 'Unternehmer suchen Anwälte heute vermehrt über Suchmaschinen und LinkedIn. Wer dort unsichtbar ist, existiert bei der Mandatsvergabe oft nicht.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Schnittscharfe Online-Positionierung',
        desc: 'Wir positionieren deine Kanzlei-Partner als profilierte Branchenexperten für dein Kerngebiet (z.B. SME-IP-Recht, Arbeitsrecht, Nachfolge).'
      },
      {
        step: '02',
        title: 'Mandats-Vorqualifizierungs-Check',
        desc: 'Ein diskreter digitaler Check klärt Streitsumme, gegnerische Partei (Kollisionsprüfung) und Rechtsschutzdeckung ab.'
      },
      {
        step: '03',
        title: 'Automatisierte Dokumenten-Anforderung',
        desc: 'Nach dem Erstkontakt fordert das System relevante Dokumente automatisch an, sodass dein Juristen-Team optimal vorbereitet startet.'
      }
    ],
    benefits: [
      'Messbare Steigerung der abrechenbaren Mandatsstunden (Billable Hours)',
      'Drastische Verringerung unproduktiven administrativen Overheads um bis zu 40%',
      'Lückenlose Einhaltung aller anwaltsrechtlichen Standesregeln',
      'Systematisches Gewinnen von lukrativen Dauermandaten von Unternehmen'
    ],
    faqs: [
      {
        q: 'Wie verhält sich das mit der anwaltlichen Schweigepflicht bei Online-Tools?',
        a: 'Sicherheit steht an erster Stelle. Wir nutzen ausschliesslich Schweizer Server, DSGVO-konforme Datenwege und SSL-verschlüsselte Abfragen.'
      },
      {
        q: 'Dürfen Anwälte in der Schweiz aktiv werben?',
        a: 'Ja. Die Erläuterung der eigenen Fachkompetenz und das Aufbereiten von Fachbeiträgen gelten als absolut standesrechtskonform.'
      }
    ]
  },
  'logistik-transport': {
    slug: 'logistik-transport',
    title: 'Logistik & Transport',
    subtitle: 'Flottenauslastung & Direktkunden-Gewinnung für Logistik-Dienstleister',
    heroDesc: 'Minimiere Leerfahrten auf deinen Stammrelationen. Gewinne planbar lohnende Direktkunden (C-Teile, Industrie, Handel) statt billige Spotmarkt-Frachten.',
    calculatorComponent: 'FlottenauslastungsRechner',
    problems: [
      {
        title: 'Preiserpressung auf dem Spotmarkt',
        desc: 'Der kurzfristige Frachtenverkauf über Frachtenbörsen deckt kaum noch die variablen Kosten. Du bist am Ende der Nahrungskette.'
      },
      {
        title: 'Inkonsistente Auslastung der Stammstrecken',
        desc: 'Die Hinfahrt läuft gut ausprozessiert — doch die Rückfahrt erfolgt oft leer oder mit dramatisch unterbezahlten Beiladungen.'
      },
      {
        title: 'Permanent fehlende Lkw-Fahrer',
        desc: 'Fahrzeuge stehen ungenutzt auf dem Hof, weil qualifizierte Chauffeure (Kat. C/CE) fehlen. Herkömmliche Stellenportale liefern keine Bewerber mehr.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Sichtbarkeit auf Schlüsselrelationen',
        desc: 'Wir schalten zielgerichtete B2B-Anzeigen exakt im Postleitzahlkreis deiner Stammstrecken, um Versender direkt zu erreichen.'
      },
      {
        step: '02',
        title: 'Direktkunden-Anfrage-Funnels',
        desc: 'Handel- und Industrieunternehmen können Frachtvolumen, Regeltausch und Terminvorgaben mit wenigen Klicks qualifiziert anfordern.'
      },
      {
        step: '03',
        title: 'Chauffeur-Blitz-Recruiting',
        desc: 'Wir bauen 60-Sekunden-Bewerbungsprozesse ohne Lebenslauf auf, um wechselwillige Fahrer in deiner Reichweite direkt zu kontaktieren.'
      }
    ],
    benefits: [
      'Signifikante Reduktion von Leerfahrten auf deinen Stammrelationen',
      'Erhöhung der Margensicherheit durch direkten Kontakt zu verladenden Industrie-KMUs',
      'Stabiler Eingang qualifizierter Berufskraftfahrer-Bewerbungen',
      'Unabhängigkeit von ruinösen Frachtenbörsen-Plattformen'
    ],
    faqs: [
      {
        q: 'Unterstützt du uns auch bei der Neukundenaquise im Ausland?',
        a: 'Ja. Wir optimieren B2B-Auftragskampagnen entlang deiner Transitrouten (e.g., Schweiz - Deutschland - Italien) zur optimalen Ausnutzung aller Leerwege.'
      },
      {
        q: 'Welche Plattformen eignen sich am besten zur Gewinnung von Berufskraftfahrern?',
        a: 'Für Chauffeure nutzen wir zielgruppengerechte Social Media Funnels auf Facebook und Instagram, da Berufskraftfahrer dort sehr aktiv sind.'
      }
    ]
  },
  'hospitality': {
    slug: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Direktbuchungs-Systeme & Provisions-Reduktion für Hotels & Resorts',
    heroDesc: 'Befreie dich aus der Zwingzange von Booking.com & Co. Steigere deine Direktbuchungsquote systematisch durch emotionales digitales Marketing.',
    calculatorComponent: 'DirektbuchungsRechner',
    problems: [
      {
        title: 'Enorme Provisionszahlungen an OTAs',
        desc: 'Booking.com, Expedia & Co. behalten bis zu 15-22% deines harten Zimmerumsatzes ein. Das schmälert deinen Gewinn substantiell.'
      },
      {
        title: 'Der Gast "gehört" der Buchungsplattform',
        desc: 'OTAs halten die E-Mail-Adressen deiner Gäste zurück. Du kannst den Gast für zukünftige Aufenthalte kaum noch direkt kontaktieren.'
      },
      {
        title: 'Austauschbarkeit auf Portalen',
        desc: 'In der App bist du nur eines von 50 Hotels, sortiert nach Rabatt. Deine einzigartige Identität und Gastgeber-Qualität geht völlig verloren.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Emotionales Digital-Branding',
        desc: 'Wir laden deine Marke auf: Mit faszinierendem Bildmaterial, Storytelling und dem unverwechselbaren Lebensgefühl deines Hauses.'
      },
      {
        step: '02',
        title: 'Optimierte Website-Conversion',
        desc: 'Wir strukturieren deine Hotelwebsite radikal auf Buchungsfreundlichkeit um. Direktbuchen muss schneller gehen als bei Booking.com.'
      },
      {
        step: '03',
        title: 'Intelligente Direktbucher-Vorteile',
        desc: 'Wir etablieren klare Anreize für Direktbucher (e.g. Wellness-Gutschein, Welcome-Drink, Late Checkout), die glasklar sichtbar sind.'
      }
    ],
    benefits: [
      'Spürbare Senkung der Provisionsausgaben an OTA-Plattformen',
      'Direkter, persönlicher Kontakt zum Gast ab der ersten Sekunde',
      'Höhere Umsätze pro Buchung (ADR) durch gezieltes Up-Selling von Zusatzleistungen',
      'Exzellente Kundenbindung und signifikante Steigerung der Stammgäste-Quote'
    ],
    faqs: [
      {
        q: 'Dürfen wir auf unserer Website tiefere Preise anbieten als auf Booking.com?',
        a: 'Ja. Die Schweizer Ratenparitätsklauseln wurden gelockert. Du darfst auf deinem Direktkanal bessere Konditionen, exklusive Packages und Zusatzvorteile anbieten.'
      },
      {
        q: 'Können wir unsere Hotelsoftware (PMS) wie Protel, PMS Mews verbinden?',
        a: 'Selbstverständlich. Wir binden die Booking-Engine Ihres Hauses nahtlos ein, damit Verfügbarkeiten und Preise live synchronisiert werden.'
      }
    ]
  }
};
