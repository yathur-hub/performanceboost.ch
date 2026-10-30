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
  /** Querverweis auf eine verwandte Seite (interne Verlinkung, z. B. zu den Finanz-Landingpages). */
  related?: {
    href: string;
    title: string;
    desc: string;
    linkText: string;
  };
}

export const SOLUTIONS_SECTORS: { [key: string]: SolutionSector } = {
  'finanzdienstleister': {
    slug: 'finanzdienstleister',
    title: 'Finanzdienstleister',
    subtitle: 'Mehr qualifizierte Erstgespräche für Hypotheken-, Vorsorge- und Versicherungsberatungen',
    heroDesc: 'Für Hypotheken-, Vorsorge- und Versicherungsberatungen in der Schweiz: Kampagnen, Landingpage und Terminweg für Ihren Beratungsanlass, gemessen bis zum Termin. Die Seite wird über FinanceLandingView dargestellt (src/data/financeLanding.ts).',
    calculatorComponent: 'BeratungsPipelineRechner',
    problems: [
      {
        title: 'Empfehlungen allein reichen nicht mehr',
        desc: 'Weiterempfehlungen bleiben wichtig, kommen aber unregelmässig und meist aus dem bestehenden Umfeld. Klassische Inserate lassen sich kaum messen.'
      },
      {
        title: 'Online-Anfragen passen oft nicht',
        desc: 'Ein Teil der Anfragen bringt nicht das Vermögen oder die Erwartungen mit, die zu Ihrem Angebot passen. Das kostet Beratungszeit.'
      },
      {
        title: 'Strenge Regeln für Werbung (FIDLEG)',
        desc: 'Werbung für Finanzdienstleistungen muss als solche erkennbar sein und darf keine falschen Erwartungen wecken. Unbedachte Formulierungen schaffen unnötige Risiken.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Klare Positionierung',
        desc: 'Wir schärfen Ihre Spezialisierung, etwa Pensionierungsplanung oder Vermögen von Unternehmern, und formulieren ein verständliches Nutzenversprechen.'
      },
      {
        step: '02',
        title: 'Anfrageprozess mit Vorqualifizierung',
        desc: 'Interessenten beantworten vor dem Erstgespräch einige diskrete Fragen, zum Beispiel zu Anlagehorizont und Vermögensgrösse. So wissen Sie vorab, ob ein Gespräch passt.'
      },
      {
        step: '03',
        title: 'Kampagnen auf LinkedIn und Google',
        desc: 'Wir setzen sachliche Kampagnen auf, die Vertrauen aufbauen. Texte, Hinweise und Disclaimer stimmen wir mit Ihnen bzw. Ihrer Compliance ab.'
      }
    ],
    benefits: [
      'Regelmässiger Eingang von Anfragen für Erstgespräche',
      'Weniger Beratungszeit für Interessenten, die nicht zu Ihnen passen',
      'Kampagnen, die die Werbevorschriften Ihrer Branche berücksichtigen',
      'Mehr Sichtbarkeit als Ansprechperson in Ihrer Region'
    ],
    faqs: [
      {
        q: 'Funktioniert Online-Marketing auch für vermögende Kunden?',
        a: 'Ja, wenn es sachlich und diskret aufgesetzt ist. Vermögende Privatpersonen und Unternehmer recherchieren zu Themen wie Nachfolge, Pensionierung oder Steuern ebenfalls online, oft auf Google und LinkedIn.'
      },
      {
        q: 'Wie gehen Sie mit FIDLEG und den Werbevorschriften um?',
        a: 'Wir berücksichtigen die Werbevorschriften Ihrer Branche bei Texten, Formularen und Disclaimern und stimmen alles mit Ihnen ab. Die rechtliche Freigabe liegt bei Ihnen bzw. Ihrer Compliance-Stelle; eine Rechtsberatung ersetzen wir nicht.'
      }
    ]
  },
  'saas-software': {
    slug: 'saas-software',
    title: 'SaaS & Software',
    subtitle: 'Mehr qualifizierte Demo-Anfragen für Schweizer Softwarefirmen',
    heroDesc: 'Wir verbinden Kampagnen, Website und CRM so, dass Sie sehen, welche Kanäle zu Abschlüssen führen und nicht nur zu Klicks. So investieren Sie Ihr Marketingbudget dort, wo es Umsatz bringt.',
    calculatorComponent: 'SaasRevenueLeckRechner',
    problems: [
      {
        title: 'Marketing und Vertrieb zählen verschieden',
        desc: 'Das Marketing meldet viele Leads, der Vertrieb beklagt unpassende Kontakte. Es fehlt eine durchgehende Sicht von der ersten Anfrage bis zum Abschluss.'
      },
      {
        title: 'Hohe Kosten pro Neukunde',
        desc: 'Neukunden zu gewinnen ist teuer. Das lohnt sich nur, wenn Kunden lange bleiben. Ohne gutes Onboarding kündigen sie früher als nötig.'
      },
      {
        title: 'Lange Entscheidungswege',
        desc: 'Bei B2B-Software reden IT, Finanzen und Fachabteilung mit. Fehlen Unterlagen für jede dieser Personen, bleibt der Entscheid liegen.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Durchgehende Messung bis zum Abschluss',
        desc: 'Wir verbinden Website-Tracking und CRM, damit Sie Anfragen, Verkaufschancen und Umsatz an einem Ort sehen.'
      },
      {
        step: '02',
        title: 'Unterlagen für alle Entscheider',
        desc: 'Wir erstellen Material wie Nutzenrechnungen oder Sicherheitsübersichten, mit dem Ihr Ansprechpartner beim Kunden intern überzeugen kann.'
      },
      {
        step: '03',
        title: 'Automatische Begleitung von Interessenten',
        desc: 'Testnutzer und Demo-Anfragen erhalten passende E-Mails je nach ihrem Verhalten, damit mehr von ihnen das Produkt tatsächlich nutzen.'
      }
    ],
    benefits: [
      'Klare Sicht, welche Kanäle zu Abschlüssen führen',
      'Marketingbudget nach Umsatz statt nach Klicks steuern',
      'Mehr Testnutzer, die das Produkt aktiv verwenden',
      'Marketing und Vertrieb arbeiten mit denselben Zahlen'
    ],
    faqs: [
      {
        q: 'Unterstützen Sie auch Kampagnen ausserhalb der Schweiz?',
        a: 'Ja. Wir betreuen Kampagnen für die Deutschschweiz, die Romandie und den übrigen DACH-Raum. Für weitere Märkte klären wir im Erstgespräch, was sinnvoll ist.'
      },
      {
        q: 'Mit welchen CRM- und Analyse-Tools arbeiten Sie?',
        a: 'Unter anderem mit HubSpot, Salesforce, Pipedrive und Google Analytics 4. Wenn Sie andere Tools einsetzen, prüfen wir die Anbindung im Einzelfall.'
      }
    ]
  },
  'immobilien': {
    slug: 'immobilien',
    title: 'Immobilien',
    subtitle: 'Passende Miet- und Kaufinteressenten für Ihre Immobilien',
    heroDesc: 'Für Projektentwickler, Makler und Verwaltungen gewinnen wir Interessenten für Neubauprojekte, Gewerbeflächen und Bestandsobjekte. Mit eigenen Projektseiten, regionalen Kampagnen und einer Vorqualifizierung, die Ihr Team entlastet.',
    calculatorComponent: 'LeerstandskostenRechner',
    problems: [
      {
        title: 'Leerstand kostet jeden Monat',
        desc: 'Jeder Monat ohne Mieter oder Käufer schmälert die Rendite. Die grossen Portale allein reichen dafür oft nicht.'
      },
      {
        title: 'Viele Anfragen, wenige ernsthafte',
        desc: 'Viele fordern nur das Exposé an, ohne konkrete Absicht oder passende Finanzierung. Das bindet Zeit im Vertrieb.'
      },
      {
        title: 'Aufwendige Besichtigungen',
        desc: 'Termine werden von Hand abgestimmt, Interessenten sind unentschlossen und Bewerbungsunterlagen kommen unvollständig an.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Eigene Projektseiten',
        desc: 'Wir erstellen Landingpages pro Projekt mit Grundrissen, Bildern, auf Wunsch virtuellem Rundgang und einfacher Kontakt- oder Reservationsmöglichkeit.'
      },
      {
        step: '02',
        title: 'Vorqualifizierung online',
        desc: 'Interessenten geben vorab Budget, gewünschten Einzugstermin und weitere relevante Angaben an. Sie sehen auf einen Blick, wer passt.'
      },
      {
        step: '03',
        title: 'Regionale Kampagnen',
        desc: 'Über Google Ads und Social Media sprechen wir gezielt Personen und Firmen an, die in der Region suchen.'
      }
    ],
    benefits: [
      'Mehr passende Interessenten pro Objekt',
      'Weniger Aufwand mit unpassenden Anfragen dank Vorqualifizierung',
      'Automatische Einladungen zu Besichtigungen per E-Mail oder SMS',
      'Ein digitaler Auftritt, der Sie bei Eigentümern als kompetenten Makler zeigt'
    ],
    related: {
      href: '/loesungen/hypothekarberatung',
      title: 'Sie beraten zur Finanzierung?',
      desc: 'Für Hypothekarberatungen gibt es eine eigene Seite: Anfragen von Erstkäufern und zu auslaufenden Festhypotheken über die eigene Website statt über Vergleichsportale.',
      linkText: 'Mehr zu Hypothekarberatung',
    },
    faqs: [
      {
        q: 'Lohnt sich das auch für kleinere, regionale Makler?',
        a: 'Ja. Gerade regional können Sie mit gezielter Sichtbarkeit gegen grössere Anbieter bestehen und bei Eigentümern als lokale Ansprechperson auffallen.'
      },
      {
        q: 'Lässt sich bestehende Immobiliensoftware wie FlowFact oder CAS anbinden?',
        a: 'In vielen Fällen ja, über vorhandene Schnittstellen. Wir prüfen im Erstgespräch, was mit Ihrer Software möglich ist.'
      }
    ]
  },
  'treuhand-unternehmensberatung': {
    slug: 'treuhand-unternehmensberatung',
    title: 'Treuhand & Unternehmensberatung',
    subtitle: 'Mehr Mandatsanfragen für Treuhand- und Beratungsbüros',
    heroDesc: 'Wir helfen Treuhand- und Beratungsbüros, gezielt die KMU-Mandate zu gewinnen, die fachlich und wirtschaftlich zu ihnen passen. Mit klarer Positionierung, Vorqualifizierung und weniger Aufwand im Erstkontakt.',
    calculatorComponent: 'KanzleiWachstumsCheck',
    problems: [
      {
        title: 'Viele kleine Mandate binden das Team',
        desc: 'Kleine Mandate mit viel Belegaufwand füllen den Alltag, während anspruchsvolle Beratungsmandate zu kurz kommen.'
      },
      {
        title: 'Empfehlungen kommen unregelmässig',
        desc: 'Empfehlungen sind wertvoll, aber nicht planbar. Wachstum lässt sich so kaum steuern.'
      },
      {
        title: 'Unvollständige Unterlagen von Mandanten',
        desc: 'Belege kommen ungeordnet, unvollständig oder zu spät. Das erzeugt Druck vor Abschlüssen und Fristen.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Klares Profil für Ihr Büro',
        desc: 'Wir schärfen Ihre Zielgruppe, zum Beispiel Arztpraxen oder KMU ab einer bestimmten Grösse, und stellen Ihre Beratungskompetenz in den Vordergrund.'
      },
      {
        step: '02',
        title: 'Vorqualifizierung neuer Mandate',
        desc: 'Ein kurzer Online-Fragebogen erfasst vor dem Erstgespräch Eckdaten wie Umsatzgrösse, Mitarbeiterzahl und eingesetzte Buchhaltungssoftware.'
      },
      {
        step: '03',
        title: 'Sichtbarkeit auf LinkedIn',
        desc: 'Wir machen Ihre Partner und Inhaber als Fachleute für Steuern, Vorsorge und Nachfolge sichtbar.'
      }
    ],
    benefits: [
      'Gezielte Anfragen von Mandaten, die zu Ihrem Büro passen',
      'Weniger Erstgespräche mit Interessenten, die nicht passen',
      'Ein geordneter, teilweise automatisierter Ablauf für neue Mandate',
      'Entlastung des Teams durch klare Abläufe'
    ],
    related: {
      href: '/loesungen/finanzdienstleister',
      title: 'Sie bieten auch Finanzberatung an?',
      desc: 'Für Hypotheken-, Vorsorge- und Versicherungsberatungen gibt es eigene Seiten mit Beispielen und einem Anfrage-Check.',
      linkText: 'Zu den Finanzdienstleistern',
    },
    faqs: [
      {
        q: 'Unsere Mandanten wählen uns wegen des Vertrauens. Passt digitales Marketing dazu?',
        a: 'Ja, wenn es Ihr Fachwissen zeigt statt laut zu werben. Fachbeiträge, verständliche Erklärungen und ein klares Profil schaffen online genau dieses Vertrauen.'
      },
      {
        q: 'Unterstützen Sie Büros auch bei der Suche nach Fachkräften?',
        a: 'Ja. Mit denselben Mitteln, also Kampagnen und einfachen Bewerbungsseiten, erreichen wir auch Treuhänderinnen und Sachbearbeiter.'
      }
    ]
  },
  'b2b-industrie-kmu': {
    slug: 'b2b-industrie-kmu',
    title: 'Industrie & KMU',
    subtitle: 'Mehr qualifizierte Anfragen für Industrie- und B2B-Unternehmen',
    heroDesc: 'Wir helfen Produktions- und B2B-Unternehmen, online von Einkäufern und Technikern gefunden zu werden. Und wir sorgen dafür, dass Offerten nachgefasst werden, bis ein Entscheid vorliegt.',
    calculatorComponent: 'AngebotsPipelineRechner',
    problems: [
      {
        title: 'Abhängigkeit von Messen und Aussendienst',
        desc: 'Messen bringen weniger als früher. Fallen sie aus, fehlen neue Kontakte, und der Aussendienst arbeitet ohne digitale Unterstützung.'
      },
      {
        title: 'Produkte sind schwer verständlich erklärt',
        desc: 'Komplexe Produkte werden auf der Website oft so technisch beschrieben, dass Interessenten abbrechen, bevor sie anfragen.'
      },
      {
        title: 'Offerten versanden',
        desc: 'Offerten werden aufwendig kalkuliert und dann nicht nachgefasst, weil ein fester Ablauf dafür fehlt.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Verständliche Produktseiten',
        desc: 'Wir strukturieren Ihre Produkte und Leistungen so, dass Einkäufer schnell erkennen, welchen Nutzen sie haben.'
      },
      {
        step: '02',
        title: 'Anfrage mit Konfigurator oder Check',
        desc: 'Interessenten geben ihre Anforderungen online strukturiert ein. Sie erhalten Anfragen mit den Angaben, die Sie für eine Offerte brauchen.'
      },
      {
        step: '03',
        title: 'Nachfassen im CRM',
        desc: 'Wir richten klare Verkaufsphasen und automatische Wiedervorlagen für Offerten ein, damit keine offene Offerte vergessen geht.'
      }
    ],
    benefits: [
      'Regelmässige Anfragen von Einkäufern und Technikern',
      'Weniger Offerten ohne Rückmeldung dank systematischem Nachfassen',
      'Entlastung des Aussendiensts bei der Neukundensuche',
      'Alle offenen Offerten und Verkaufschancen übersichtlich im CRM'
    ],
    faqs: [
      {
        q: 'Funktioniert das auch bei sehr spezialisierten Nischenprodukten?',
        a: 'Oft besonders gut. Einkäufer und Konstrukteure suchen online nach Lösungen für konkrete Probleme. Wer dort mit den richtigen Begriffen auftaucht, wird früh in die Auswahl einbezogen.'
      },
      {
        q: 'Wie binden wir den bestehenden Aussendienst ein?',
        a: 'Wir richten das CRM so ein, dass Ihr Aussendienst sieht, welche Firmen sich für welche Produkte interessiert haben, und schulen das Team in der Nutzung.'
      }
    ]
  },
  'it-dienstleister-msps': {
    slug: 'it-dienstleister-msps',
    title: 'IT-Dienstleister & MSPs',
    subtitle: 'Mehr Anfragen für Managed Services von Schweizer KMU',
    heroDesc: 'Wir helfen IT-Dienstleistern, Anfragen für Managed Services, IT-Sicherheit und Cloud-Projekte von Schweizer KMU zu gewinnen. Ziel sind mehr laufende Serviceverträge statt einzelner Einsätze.',
    calculatorComponent: 'RecurringRevenuePotenzialRechner',
    problems: [
      {
        title: 'Gerufen wird erst, wenn es brennt',
        desc: 'Sie lösen ein akutes Problem und verrechnen den Einsatz. Danach fehlt oft ein laufender Vertrag, der für den nächsten Monat planbaren Umsatz bringt.'
      },
      {
        title: 'Vergleich über Stundensätze',
        desc: 'Ohne klares Angebot werden IT-Leistungen über Stundensätze und Hardwarepreise verglichen und wirken austauschbar.'
      },
      {
        title: 'Entscheider sind schwer erreichbar',
        desc: 'Geschäftsführer von KMU blocken Telefonakquise meist ab. Ihre Botschaft kommt bei den Entscheidern nicht an.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Klare Servicepakete',
        desc: 'Wir helfen Ihnen, Ihre Leistungen in verständliche Pakete mit festen Preisen und Servicezeiten zu bündeln, deren Nutzen ein Geschäftsführer sofort versteht.'
      },
      {
        step: '02',
        title: 'Online-Check zu Sicherheit und Infrastruktur',
        desc: 'Ein kurzer Online-Check zu Datenschutz, IT-Sicherheit und Backups zeigt KMU ihren Handlungsbedarf und liefert Ihnen qualifizierte Anfragen.'
      },
      {
        step: '03',
        title: 'Gezielte LinkedIn-Kampagnen',
        desc: 'Wir sprechen Geschäftsführer und Finanzverantwortliche in ihrer Sprache an: planbare Kosten, Ausfallsicherheit und ein Team, das ungestört arbeiten kann.'
      }
    ],
    benefits: [
      'Mehr Anfragen für laufende Serviceverträge',
      'Positionierung als IT-Partner statt als austauschbarer Lieferant',
      'Regelmässige Anfragen für Sicherheitsberatungen',
      'Bessere Planbarkeit bei Personal und Ressourcen'
    ],
    faqs: [
      {
        q: 'Wie heben wir uns von den vielen Mitbewerbern ab?',
        a: 'Mit klaren Paketen und einer Sprache, die vom Nutzen ausgeht. Ein Geschäftsführer kauft nicht «Cloud», sondern die Sicherheit, dass Daten geschützt sind und das Team von überall arbeiten kann.'
      },
      {
        q: 'Helfen Sie uns, bestehende Projektkunden in Serviceverträge zu überführen?',
        a: 'Ja. Wir entwickeln mit Ihnen ein Vorgehen und passende Argumente, um Projektkunden schrittweise für einen laufenden Vertrag zu gewinnen.'
      }
    ]
  },
  'ingenieur-planungsbuero': {
    slug: 'ingenieur-planungsbuero',
    title: 'Ingenieur- & Planungsbüros',
    subtitle: 'Mehr private Aufträge und Bewerbungen für Ihr Planungsbüro',
    heroDesc: 'Wir helfen Ingenieur- und Planungsbüros, neben Ausschreibungen auch private Bauherren und Gewerbekunden direkt zu erreichen. Und wir machen Ihr Büro für Fachkräfte sichtbar.',
    calculatorComponent: 'ProjektpipelineCheck',
    problems: [
      {
        title: 'Abhängigkeit von wenigen Auftraggebern',
        desc: 'Fällt ein grosser Bauherr oder eine Gemeinde als Auftraggeber weg, ist die Auslastung des Büros schnell in Gefahr.'
      },
      {
        title: 'Nur reagieren auf Ausschreibungen',
        desc: 'Viele Büros warten auf Ausschreibungen. Direktaufträge von Industrie- und Gewerbebauherren gehen so an andere.'
      },
      {
        title: 'Fachkräfte sind knapp',
        desc: 'Bauingenieure, Zeichnerinnen und Projektleiter sind schwer zu finden. Ohne sichtbaren Auftritt als Arbeitgeber gehen Bewerbungen an andere Büros.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Referenzprojekte sichtbar machen',
        desc: 'Wir bereiten Ihre wichtigsten Projekte als verständliche Fallbeispiele auf, die Ihre Kompetenz und Zuverlässigkeit zeigen.'
      },
      {
        step: '02',
        title: 'Private und gewerbliche Bauherren ansprechen',
        desc: 'Über LinkedIn und Google Ads erreichen wir Verantwortliche für Bau- und Erweiterungsprojekte in Unternehmen sowie Investoren.'
      },
      {
        step: '03',
        title: 'Einfache Bewerbung',
        desc: 'Wir richten einen kurzen Bewerbungsprozess ohne Anschreiben ein, der auch Fachkräften den ersten Schritt erleichtert, die nicht aktiv suchen.'
      }
    ],
    benefits: [
      'Neue Kontakte zu privaten Industrie- und Gewerbebauherren',
      'Breiter abgestützte Auftragslage mit weniger Abhängigkeit von einzelnen Kunden',
      'Mehr Bewerbungen von qualifizierten Fachkräften',
      'Ein zeitgemässer Auftritt als Planungsbüro in Ihrer Region'
    ],
    faqs: [
      {
        q: 'Passt aktive Kundengewinnung zu einem Ingenieurbüro?',
        a: 'Ja, solange sie sachlich bleibt. Wir stellen Ihre technische Kompetenz, Referenzen und Themen wie Energieeffizienz in den Vordergrund, nicht laute Werbung.'
      },
      {
        q: 'Wie funktioniert eine einfache Bewerbung für Ingenieure?',
        a: 'Wer nicht aktiv sucht, hat selten einen aktuellen Lebenslauf bereit. Darum fragen wir zuerst nur einige Eckdaten und Fachkenntnisse ab und ermöglichen den Erstkontakt mit wenigen Klicks.'
      }
    ]
  },
  'personalvermittler-recruiting': {
    slug: 'personalvermittler-recruiting',
    title: 'Personalvermittler & Recruiting',
    subtitle: 'Mehr Suchmandate und passende Kandidaten für Ihre Vermittlung',
    heroDesc: 'Wir helfen Personalvermittlern, auf beiden Seiten zu gewinnen: Suchaufträge von Arbeitgebern und passende Kandidaten für diese Stellen. So besetzen Sie schneller und arbeiten weniger auf gut Glück.',
    calculatorComponent: 'PlacementEffizienzRechner',
    problems: [
      {
        title: 'Mandate ohne Exklusivität',
        desc: 'Arbeitgeber geben dieselbe Stelle oft mehreren Vermittlern. Sie investieren viel Arbeit auf Erfolgsbasis und gehen am Ende leer aus.'
      },
      {
        title: 'Zu wenige passende Kandidaten',
        desc: 'Stellenportale liefern immer weniger brauchbare Bewerbungen. Gute Kandidaten müssen dort erreicht werden, wo sie sich ohnehin aufhalten.'
      },
      {
        title: 'Langsamer Besetzungsprozess',
        desc: 'Unstrukturierte Prüfung von Lebensläufen und lange Abstimmungsschleifen mit dem Kunden verzögern die Besetzung und damit Ihr Honorar.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Klare Spezialisierung',
        desc: 'Wir heben Sie von allgemeinen Vermittlern ab und positionieren Sie als Anlaufstelle für Ihre Branche oder Ihr Berufsfeld.'
      },
      {
        step: '02',
        title: 'Zwei getrennte Anfragewege',
        desc: 'Wir bauen zwei parallele Wege auf: einen für Suchaufträge von HR-Verantwortlichen, einen für wechselbereite Fachkräfte.'
      },
      {
        step: '03',
        title: 'Kandidaten in Kontakt halten',
        desc: 'Kandidaten in Ihrer Datenbank erhalten regelmässig nützliche Informationen zum Arbeitsmarkt, damit Sie im richtigen Moment präsent sind.'
      }
    ],
    benefits: [
      'Mehr Suchaufträge mit Exklusivität oder Anzahlung',
      'Regelmässige Bewerbungen wechselbereiter Fachkräfte über Social Ads',
      'Kürzere Wege von der Anfrage bis zur Besetzung',
      'Längerfristige Zusammenarbeit mit Ihren Arbeitgeberkunden'
    ],
    faqs: [
      {
        q: 'Wie sprechen wir passive Kandidaten an, ohne unseriös zu wirken?',
        a: 'Mit einem professionellen Auftritt und nützlichen Inhalten, zum Beispiel Lohnvergleichen oder Marktberichten. Diskretion steht dabei an erster Stelle.'
      },
      {
        q: 'Funktioniert das auch für Executive Search?',
        a: 'Ja, mit angepasstem Vorgehen. Für Führungspositionen setzen wir stärker auf persönliche Ansprache, etwa mit kurzen Videos, und auf den gezielten Ausbau Ihres Netzwerks.'
      }
    ]
  },
  'bildung-weiterbildung': {
    slug: 'bildung-weiterbildung',
    title: 'Bildung & Weiterbildung',
    subtitle: 'Mehr Anmeldungen für Ihre Lehrgänge, Kurse und Seminare',
    heroDesc: 'Wir helfen Akademien, Instituten und Weiterbildungsanbietern, Lehrgänge, Seminare und CAS-Studiengänge mit passenden Teilnehmenden zu füllen. Mit gezielten Kampagnen und einem einfachen Weg zur Anmeldung.',
    calculatorComponent: 'KursFunnelRechner',
    problems: [
      {
        title: 'Hohe Werbekosten ohne klare Wirkung',
        desc: 'Broschüren und Messeauftritte kosten viel. Welche Massnahme zu wie vielen Anmeldungen führt, bleibt meist unklar.'
      },
      {
        title: 'Viel Beratungsaufwand im Vorfeld',
        desc: 'Das Sekretariat führt viele Gespräche mit Personen, die die Zulassungsvoraussetzungen am Ende nicht erfüllen.'
      },
      {
        title: 'Interessenten springen auf der Kursseite ab',
        desc: 'Viele besuchen die Kursseite, melden sich aber nicht an, weil die Anmeldung zum Kurs oder Infoabend zu kompliziert ist.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Online-Check zur Eignung',
        desc: 'Interessenten prüfen in wenigen Schritten selbst, ob sie die Voraussetzungen für den Lehrgang erfüllen.'
      },
      {
        step: '02',
        title: 'Automatische Erinnerungen zum Infoabend',
        desc: 'Wer sich für einen Infoabend anmeldet, erhält automatisch Erinnerungen und vorbereitende Informationen. So erscheinen mehr Angemeldete tatsächlich.'
      },
      {
        step: '03',
        title: 'Gezielte Erinnerungswerbung',
        desc: 'Wer sich die Kursdetails angesehen hat, sieht später zum Beispiel Erfahrungsberichte von Absolventinnen und Absolventen.'
      }
    ],
    benefits: [
      'Bessere Auslastung Ihrer Kurse, Lehrgänge und Studiengänge',
      'Weniger Beratungsgespräche mit Personen, die die Voraussetzungen nicht erfüllen',
      'Mehr Zeit für die Studienberatung dank vorqualifizierter Anfragen',
      'Klare Sicht auf die Werbekosten pro Anmeldung'
    ],
    faqs: [
      {
        q: 'Lässt sich unser bestehendes Kursverwaltungs- oder Lernsystem anbinden?',
        a: 'In den meisten Fällen ja. Wir verbinden die Anfrageformulare mit gängigen Systemen, damit Kursdaten und Teilnehmerlisten übereinstimmen. Die Details prüfen wir im Erstgespräch.'
      },
      {
        q: 'Wir bieten Nischenkurse an. Finden wir online genug Teilnehmende?',
        a: 'Oft ja. Wer gezielt nach einem bestimmten Fachthema sucht, hat meist schon eine konkrete Absicht. Dafür eignen sich Google Ads besonders.'
      }
    ]
  },
  'gesundheitswesen': {
    slug: 'gesundheitswesen',
    title: 'Gesundheitswesen',
    subtitle: 'Mehr Neupatienten für Ihre Praxis oder Fachklinik',
    heroDesc: 'Wir helfen Spezialpraxen und Fachkliniken, mit sachlicher Patienteninformation online gefunden zu werden, zum Beispiel für Selbstzahler-Leistungen. Die Werbevorschriften Ihrer Branche berücksichtigen wir dabei von Anfang an.',
    calculatorComponent: 'NeupatientenPotenzialCheck',
    problems: [
      {
        title: 'Der Alltag lässt keinen Raum für Schwerpunkte',
        desc: 'Grundversorgung füllt den Kalender. Für Ihre Schwerpunkte und Selbstzahler-Leistungen bleibt wenig Raum, und sie sind online kaum sichtbar.'
      },
      {
        title: 'Wenig Sichtbarkeit bei spezifischen Themen',
        desc: 'Patientinnen und Patienten informieren sich online über Beschwerden und Behandlungen. Wer dort nicht auftaucht, wird nicht gefunden.'
      },
      {
        title: 'Aufwendige Terminvergabe und Aufnahme',
        desc: 'Telefonische Terminschleifen und fehlende Angaben vor dem ersten Termin kosten das Praxisteam viel Zeit.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Informationsseiten zu Behandlungen',
        desc: 'Wir erstellen sachliche, verständliche Seiten zu einzelnen Behandlungen, zum Beispiel Implantologie oder Gelenkchirurgie.'
      },
      {
        step: '02',
        title: 'Kurzer Vorab-Fragebogen',
        desc: 'Patienten beantworten vor der Terminanfrage einige Fragen, etwa zu Beschwerden und bisherigen Behandlungen. Das erleichtert die Vorbereitung auf das Erstgespräch.'
      },
      {
        step: '03',
        title: 'Online-Terminbuchung',
        desc: 'Wir binden Ihren Kalender an, damit Erst- und Beratungstermine jederzeit online gebucht werden können.'
      }
    ],
    benefits: [
      'Mehr Anfragen für Ihre Schwerpunkte und Selbstzahler-Leistungen',
      'Inhalte, die die Werbevorschriften Ihrer Branche berücksichtigen',
      'Weniger Telefonaufwand für das Praxisteam bei der Terminvergabe',
      'Besser informierte Patientinnen und Patienten schon vor dem ersten Termin'
    ],
    faqs: [
      {
        q: 'Ist Werbung für Ärztinnen und Ärzte in der Schweiz nicht stark eingeschränkt?',
        a: 'Ja, es gelten enge Regeln, etwa aus den kantonalen Gesundheitsgesetzen, den Standesregeln und dem Heilmittelwerberecht. Wir setzen deshalb auf sachliche Patienteninformation statt auf Werbeversprechen und berücksichtigen die Werbevorschriften Ihrer Branche. Die abschliessende Prüfung liegt bei Ihnen; eine Rechtsberatung ersetzen wir nicht.'
      },
      {
        q: 'Unterstützen Sie auch die Suche nach Fachpersonal (MPA, Pflege)?',
        a: 'Ja. Mit Kampagnen und einfachen Bewerbungsseiten erreichen wir auch medizinisches Fachpersonal.'
      }
    ]
  },
  'handwerk': {
    slug: 'handwerk',
    title: 'Handwerk & Bauwesen',
    subtitle: 'Mehr Direktaufträge aus Ihrer Region für Ihren Handwerksbetrieb',
    heroDesc: 'Wir helfen Handwerks- und Baubetrieben, mehr passende Aufträge von Privat- und Gewerbekunden in ihrer Region zu gewinnen. Und wir vereinfachen den Weg von der Anfrage bis zur Offerte.',
    calculatorComponent: 'AuftragsPipelineRechner',
    problems: [
      {
        title: 'Anfragen auf allen Kanälen',
        desc: 'Anfragen kommen per E-Mail, Telefon und WhatsApp. Die Übersicht geht verloren, Offerten dauern lange und Kunden springen ab.'
      },
      {
        title: 'Preiskampf bei Ausschreibungen',
        desc: 'Wer nur auf Ausschreibungen setzt, muss über den Preis gewinnen. Direktaufträge von privaten Bauherren fehlen.'
      },
      {
        title: 'Zu wenige Fachkräfte',
        desc: 'Aufträge müssen abgelehnt werden, weil Monteure und Poliere fehlen. Die Personalsuche läuft nebenher und ohne klares Vorgehen.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Sichtbar in Ihrer Region',
        desc: 'Wir machen Ihren Betrieb online zur ersten Anlaufstelle für Privat- und Gewerbeprojekte in Ihrem Kanton.'
      },
      {
        step: '02',
        title: 'Strukturierte Online-Anfrage',
        desc: 'Bauherren beschreiben ihr Vorhaben, zum Beispiel Badsanierung, PV-Anlage oder Holzanbau, mit allen wichtigen Eckdaten direkt über Ihre Website.'
      },
      {
        step: '03',
        title: 'Weniger Büroarbeit dank CRM',
        desc: 'Wir richten einfache Abläufe für die Erfassung von Anfragen ein und automatische Erinnerungen für offene Offerten.'
      }
    ],
    benefits: [
      'Mehr Direktaufträge von Bauherren aus Ihrer Region',
      'Schnellere Offerten, weil die Angaben vollständig vorliegen',
      'Offerten werden nachgefasst, ohne dass jemand daran denken muss',
      'Mehr Sichtbarkeit bei Fachkräften in Ihrer Region'
    ],
    faqs: [
      {
        q: 'Müssen wir dafür unsere Software umstellen?',
        a: 'In der Regel nicht. Wir prüfen, wie sich Ihre bestehende Software, etwa Abacus, Bexio oder SORBA, über Schnittstellen anbinden lässt.'
      },
      {
        q: 'Lohnt sich das auch für kleinere Familienbetriebe?',
        a: 'Ja. Wenn der Chef selbst auf der Baustelle steht, ist Zeit im Büro knapp. Klare Abläufe für Anfragen und Offerten nehmen ihm einen Teil dieser Arbeit ab.'
      }
    ]
  },
  'rechtsanwaelte': {
    slug: 'rechtsanwaelte',
    title: 'Rechtsanwälte',
    subtitle: 'Mehr passende Mandatsanfragen für Anwaltskanzleien',
    heroDesc: 'Wir helfen Kanzleien, gezielt Mandate in ihren Fachgebieten zu gewinnen und unpassende Anfragen früh auszusortieren. Die Standes- und Werberegeln für Anwältinnen und Anwälte berücksichtigen wir dabei.',
    calculatorComponent: 'KanzleiAuslastungsCheck',
    problems: [
      {
        title: 'Viele unpassende Erstanfragen',
        desc: 'Das Sekretariat führt viele Gespräche zu Fällen, die nicht ins Fachgebiet passen oder wirtschaftlich nicht tragbar sind.'
      },
      {
        title: 'Aufwendige Mandatsaufnahme',
        desc: 'Angaben, Vollmachten und erste Unterlagen einzuholen dauert lange und kostet verrechenbare Zeit.'
      },
      {
        title: 'Wenig sichtbar im Netz',
        desc: 'Unternehmer suchen Anwälte vermehrt über Google und LinkedIn. Wer dort nicht auftaucht, wird bei der Auswahl oft nicht berücksichtigt.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Klare Positionierung online',
        desc: 'Wir machen Ihre Partnerinnen und Partner als Fachleute für Ihre Schwerpunkte sichtbar, zum Beispiel Arbeitsrecht, Immaterialgüterrecht oder Nachfolge.'
      },
      {
        step: '02',
        title: 'Vorab-Fragebogen für neue Mandate',
        desc: 'Ein diskreter Online-Fragebogen erfasst vorab Rechtsgebiet, Gegenpartei für die Konfliktprüfung und eine allfällige Rechtsschutzversicherung.'
      },
      {
        step: '03',
        title: 'Automatische Anforderung von Unterlagen',
        desc: 'Nach dem Erstkontakt werden die nötigen Unterlagen automatisch angefordert, damit Ihr Team gut vorbereitet ins Mandat startet.'
      }
    ],
    benefits: [
      'Mehr Anfragen in Ihren Fachgebieten',
      'Weniger Zeitaufwand für unpassende Erstanfragen',
      'Auftritt, der die Standes- und Werberegeln berücksichtigt',
      'Gezielte Ansprache von Unternehmen für längerfristige Mandate'
    ],
    faqs: [
      {
        q: 'Wie passt das zum Berufsgeheimnis bei Online-Formularen?',
        a: 'Wir fragen im Erstkontakt nur das Nötigste ab, nutzen verschlüsselte Übertragung und wählen Tools mit Datenhaltung in der Schweiz oder der EU, soweit möglich. Die Einzelheiten legen wir mit Ihnen fest.'
      },
      {
        q: 'Dürfen Anwältinnen und Anwälte in der Schweiz werben?',
        a: 'Ja, in einem engen Rahmen: Werbung muss sachlich sein und dem Informationsbedürfnis der Öffentlichkeit dienen (Art. 12 lit. d BGFA). Wir setzen auf Fachbeiträge und sachliche Darstellung Ihrer Schwerpunkte. Die standesrechtliche Beurteilung bleibt bei Ihnen.'
      }
    ]
  },
  'logistik-transport': {
    slug: 'logistik-transport',
    title: 'Logistik & Transport',
    subtitle: 'Mehr Direktkunden und weniger Leerfahrten für Ihr Transportunternehmen',
    heroDesc: 'Wir helfen Transport- und Logistikunternehmen, Direktkunden aus Industrie und Handel auf ihren Stammstrecken zu gewinnen. So sind Sie weniger auf Frachtenbörsen angewiesen.',
    calculatorComponent: 'FlottenauslastungsRechner',
    problems: [
      {
        title: 'Preisdruck auf Frachtenbörsen',
        desc: 'Kurzfristige Frachten über Frachtenbörsen decken oft kaum die Kosten. Sie haben wenig Einfluss auf den Preis.'
      },
      {
        title: 'Leere Rückfahrten',
        desc: 'Die Hinfahrt ist ausgelastet, die Rückfahrt erfolgt oft leer oder mit schlecht bezahlten Beiladungen.'
      },
      {
        title: 'Fehlende Chauffeure',
        desc: 'Fahrzeuge bleiben stehen, weil Chauffeure der Kategorie C/CE fehlen. Stellenportale bringen kaum noch Bewerbungen.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Sichtbar auf Ihren Stammstrecken',
        desc: 'Wir schalten Anzeigen gezielt in den Regionen entlang Ihrer Stammstrecken, um Versender direkt zu erreichen.'
      },
      {
        step: '02',
        title: 'Einfache Transportanfrage',
        desc: 'Handels- und Industriefirmen geben Frachtvolumen, Rhythmus und Termine mit wenigen Klicks an. Sie erhalten Anfragen, die Sie direkt offerieren können.'
      },
      {
        step: '03',
        title: 'Schnelle Bewerbung für Chauffeure',
        desc: 'Wir richten eine kurze Bewerbung ohne Lebenslauf ein und sprechen wechselbereite Fahrer in Ihrer Region gezielt an.'
      }
    ],
    benefits: [
      'Weniger Leerfahrten auf Ihren Stammstrecken',
      'Bessere Margen durch direkten Kontakt zu Versendern',
      'Regelmässige Bewerbungen von Berufschauffeuren',
      'Weniger Abhängigkeit von Frachtenbörsen'
    ],
    faqs: [
      {
        q: 'Unterstützen Sie uns auch bei der Kundengewinnung im Ausland?',
        a: 'Ja. Wir können Kampagnen entlang Ihrer Transitrouten ausrichten, zum Beispiel Schweiz–Deutschland–Italien, um Rückfahrten besser auszulasten.'
      },
      {
        q: 'Wo erreichen wir Berufschauffeure am besten?',
        a: 'Häufig über Facebook und Instagram, wo viele Chauffeure aktiv sind. Welche Kanäle für Ihre Region am besten funktionieren, testen wir mit kleinen Budgets.'
      }
    ]
  },
  'hospitality': {
    slug: 'hospitality',
    title: 'Hospitality',
    subtitle: 'Mehr Direktbuchungen für Ihr Hotel, weniger Provisionen',
    heroDesc: 'Wir helfen Hotels und Resorts, mehr Gäste direkt über die eigene Website buchen zu lassen statt über Buchungsplattformen. Das spart Provisionen und Sie behalten den direkten Kontakt zum Gast.',
    calculatorComponent: 'DirektbuchungsRechner',
    problems: [
      {
        title: 'Hohe Provisionen an Buchungsplattformen',
        desc: 'Booking.com, Expedia und andere Plattformen behalten pro Buchung eine Provision ein. Bei einem hohen Anteil an Plattformbuchungen kostet das viel Marge.'
      },
      {
        title: 'Der Kontakt zum Gast fehlt',
        desc: 'Bei Plattformbuchungen erhalten Sie oft keine direkte E-Mail-Adresse des Gastes. Ihn für einen nächsten Aufenthalt anzusprechen, wird schwierig.'
      },
      {
        title: 'Austauschbar auf Portalen',
        desc: 'Auf den Portalen erscheinen Sie als eines von vielen Hotels, sortiert nach Preis. Was Ihr Haus besonders macht, geht unter.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Ihr Haus überzeugend zeigen',
        desc: 'Mit guten Bildern und Texten zeigen wir, was Ihr Haus und Ihre Gastgeberqualität ausmacht.'
      },
      {
        step: '02',
        title: 'Einfacher buchen auf der Website',
        desc: 'Wir gestalten Ihre Website so, dass eine Direktbuchung mindestens so einfach ist wie auf einer Plattform.'
      },
      {
        step: '03',
        title: 'Klare Vorteile für Direktbucher',
        desc: 'Wir machen Vorteile für Direktbuchungen gut sichtbar, zum Beispiel Wellness-Gutschein, Begrüssungsgetränk oder späten Check-out.'
      }
    ],
    benefits: [
      'Weniger Provisionen an Buchungsplattformen',
      'Direkter Kontakt zum Gast ab der Buchung',
      'Mehr Umsatz pro Aufenthalt durch passende Zusatzangebote',
      'Mehr wiederkehrende Gäste dank direkter Ansprache'
    ],
    faqs: [
      {
        q: 'Dürfen wir auf unserer Website tiefere Preise anbieten als auf Booking.com?',
        a: 'Seit Dezember 2022 verbietet das Schweizer Lauterkeitsrecht (Art. 8a UWG) Buchungsplattformen, Hotels Preisparitätsklauseln aufzuerlegen. Sie dürfen auf Ihrer Website also grundsätzlich bessere Preise, eigene Pakete und Zusatzvorteile anbieten. Prüfen Sie im Zweifel Ihre Verträge.'
      },
      {
        q: 'Können wir unser Hotelsystem (PMS) wie Protel oder Mews anbinden?',
        a: 'In der Regel ja. Wir binden die Buchungsmaschine Ihres Hauses so ein, dass Verfügbarkeiten und Preise aktuell bleiben. Die Details hängen von Ihrem System ab.'
      }
    ]
  }
};
