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
  /** Querverweis auf eine oder mehrere verwandte Seiten (interne Verlinkung, z. B. zu den Finanz-Landingpages). */
  related?: RelatedLink | RelatedLink[];
}

export interface RelatedLink {
  href: string;
  title: string;
  desc: string;
  linkText: string;
}

/*
 * Texte nach AI-First-Leitfaden (docs/agentic-positioning/08-ai-first-leitfaden.md):
 * Anwendungsfälle sind Leistungen oder als «Ein Beispiel» gekennzeichnet, keine Kundenprojekte.
 * Stufen korrekt benennen (feste Regel, KI-Vorschlag, Agent), Freigabe bei allem, was nach aussen geht.
 */
export const SOLUTIONS_SECTORS: { [key: string]: SolutionSector } = {
  'finanzdienstleister': {
    slug: 'finanzdienstleister',
    title: 'Finanzdienstleister',
    subtitle: 'Mehr qualifizierte Erstgespräche für Hypotheken-, Vorsorge- und Versicherungsberatungen',
    heroDesc: 'Für Hypotheken-, Vorsorge- und Versicherungsberatungen in der Schweiz bauen wir den Weg vom Beratungsanlass bis zum Termin so auf, dass Ihr Team vor allem die Gespräche führt, die passen. Kampagnen und Vorqualifizierung führen zu einem vorbereiteten Gespräch, und jede Aussage nach aussen geben Sie bzw. Ihre Compliance frei.',
    calculatorComponent: 'BeratungsPipelineRechner',
    problems: [
      {
        title: 'Empfehlungen sind kein verlässlicher Kanal',
        desc: 'Weiterempfehlungen bleiben wichtig, kommen aber unregelmässig und meist aus dem bestehenden Umfeld. Klassische Inserate lassen sich kaum messen.'
      },
      {
        title: 'Die Einordnung passiert zu spät',
        desc: 'Ob eine Anfrage zu Ihrem Angebot passt, zeigt sich oft erst im Erstgespräch. Bis dahin hat Ihr Team Zeit in Rückrufe und Terminabstimmung investiert.'
      },
      {
        title: 'Strenge Regeln für Werbung (FIDLEG)',
        desc: 'Werbung für Finanzdienstleistungen muss als solche erkennbar sein und darf keine falschen Erwartungen wecken. Schon eine unbedachte Rendite- oder Garantieaussage kann zum Problem werden, auch in einem Text, den ein Sprachmodell entworfen hat.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Kampagnen zu Beratungsanlässen',
        desc: 'Wir richten Kampagnen auf LinkedIn und Google an konkreten Anlässen aus, etwa Pensionierung oder auslaufende Festhypothek. Texte, Hinweise und Disclaimer stimmen wir mit Ihnen bzw. Ihrer Compliance ab, auch wenn ein Entwurf KI-unterstützt entstanden ist.'
      },
      {
        step: '02',
        title: 'Vorqualifizierung mit klaren Regeln',
        desc: 'Interessenten beantworten vor dem Erstgespräch einige diskrete Fragen, zum Beispiel zu Anlagehorizont und Vermögensgrösse. Feste Regeln ordnen die Anfrage ein und legen sie im CRM an. Wo eine Regel genügt, braucht es kein Sprachmodell.'
      },
      {
        step: '03',
        title: 'Vorbereitete Erstgespräche',
        desc: 'Ein Beispiel: Vor dem Termin fasst ein Agent die Angaben aus dem Formular und den bisherigen Kontakt zu einer kurzen Gesprächsnotiz zusammen. Die Beratung und jede Empfehlung bleiben bei Ihnen.'
      }
    ],
    benefits: [
      'Anfragen für Erstgespräche, die nicht nur über Empfehlungen kommen',
      'Weniger Beratungszeit für Interessenten, die nicht zu Ihnen passen',
      'Anzeigen und Entwürfe ohne Rendite- oder Garantieversprechen, freigegeben durch Sie bzw. Ihre Compliance',
      'Erstgespräche, die mit den wichtigsten Angaben beginnen'
    ],
    faqs: [
      {
        q: 'Funktioniert Online-Marketing auch für vermögende Kunden?',
        a: 'Ja, wenn es sachlich und diskret aufgesetzt ist. Vermögende Privatpersonen und Unternehmer recherchieren zu Themen wie Nachfolge, Pensionierung oder Steuern ebenfalls online, oft auf Google und LinkedIn.'
      },
      {
        q: 'Wie gehen Sie mit FIDLEG und den Werbevorschriften um?',
        a: 'Wir prüfen Texte, Formulare und Disclaimer auf Werbekennzeichnung und Renditeaussagen und stimmen alles mit Ihnen ab. Die rechtliche Freigabe liegt bei Ihnen bzw. Ihrer Compliance-Stelle; eine Rechtsberatung ersetzen wir nicht.'
      },
      {
        q: 'Wo setzen Sie in der Finanzberatung KI ein und wo nicht?',
        a: 'Bei der Vorarbeit, etwa beim Vorbereiten von Gesprächsnotizen oder beim Entwerfen von Inhalten. Beratung und Produktempfehlungen bleiben bei Ihnen, und kein Text geht ohne Freigabe hinaus. Personendaten bearbeiten wir nach dem Schweizer Datenschutzgesetz (DSG), mit geregelten Zugriffsrechten und protokollierten Abläufen.'
      }
    ]
  },
  'saas-software': {
    slug: 'saas-software',
    title: 'SaaS & Software',
    subtitle: 'Mehr qualifizierte Demo-Anfragen für Schweizer Softwarefirmen',
    heroDesc: 'Für Schweizer Softwarefirmen verbinden wir Kampagnen, Website, Produktnutzung und CRM. So sehen Sie, aus welchen Kanälen Ihre Abschlüsse stammen, und Ihr Vertrieb weiss vor jeder Demo, was der Interessent im Produkt schon ausprobiert hat.',
    calculatorComponent: 'SaasRevenueLeckRechner',
    problems: [
      {
        title: 'Marketing und Vertrieb zählen verschieden',
        desc: 'Das Marketing meldet viele Anfragen, der Vertrieb klagt über unpassende Kontakte. Es fehlt eine durchgehende Sicht von der ersten Anfrage bis zum Abschluss.'
      },
      {
        title: 'Hohe Kosten pro Neukunde',
        desc: 'Neukunden zu gewinnen ist teuer. Das lohnt sich nur, wenn Testnutzer tatsächlich einsteigen und Kunden bleiben. Die Signale dafür liegen im Produkt, erreichen den Vertrieb aber selten.'
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
        desc: 'Wir verbinden Website-Tracking, Produktnutzung und CRM, damit Sie Anfragen, Verkaufschancen und Umsatz an einem Ort sehen. Diese Daten sind die Grundlage für alles, was später automatisch läuft.'
      },
      {
        step: '02',
        title: 'Vorbereitete Demos',
        desc: 'Ein Beispiel: Vor einer Demo stellt ein Agent aus CRM, Website und Produktnutzung zusammen, wer teilnimmt, was die Firma macht und welche Funktionen schon getestet wurden. Ihr Vertrieb geht mit Kontext ins Gespräch.'
      },
      {
        step: '03',
        title: 'Begleitung nach Verhalten',
        desc: 'Testnutzer erhalten Nachrichten je nachdem, was sie im Produkt tun oder auslassen. Standardschritte laufen als feste Abläufe, persönliche Nachfassmails entwirft KI, und versendet werden sie nach Freigabe.'
      }
    ],
    benefits: [
      'Klare Sicht, welche Kanäle zu Abschlüssen führen',
      'Marketingbudget nach Umsatz statt nach Klicks steuern',
      'Demos, die mit Kontext beginnen statt mit Grundfragen',
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
      },
      {
        q: 'Kann ein Agent Testnutzer selbständig anschreiben?',
        a: 'Technisch ja, wir empfehlen es aber nur in eng gefassten Fällen. Standardnachrichten laufen als fester Ablauf, der zuverlässig und günstig ist. Persönliche Nachrichten entwirft ein Agent, versendet werden sie nach Freigabe. Welche Daten er dafür lesen darf, legen wir mit Ihnen fest.'
      }
    ]
  },
  'immobilien': {
    slug: 'immobilien',
    title: 'Immobilien',
    subtitle: 'Passende Miet- und Kaufinteressenten für Ihre Immobilien',
    heroDesc: 'Für Projektentwickler, Makler und Verwaltungen gewinnen wir Miet- und Kaufinteressenten für Neubauprojekte, Gewerbeflächen und Bestandsobjekte. Projektseiten und regionale Kampagnen bringen die Anfragen. Vorqualifizierung und vorgeprüfte Dossiers entlasten Ihr Team bei der Bearbeitung.',
    calculatorComponent: 'LeerstandskostenRechner',
    problems: [
      {
        title: 'Leerstand kostet jeden Monat',
        desc: 'Jeder Monat ohne Mieter oder Käufer schmälert die Rendite. Ein Inserat auf den grossen Portalen füllt ein Neubauprojekt oft nicht rechtzeitig.'
      },
      {
        title: 'Viele Anfragen, wenige ernsthafte',
        desc: 'Viele fordern nur das Exposé an, ohne konkrete Absicht oder passende Finanzierung. Das bindet Zeit im Vertrieb.'
      },
      {
        title: 'Aufwendige Besichtigungen und Dossiers',
        desc: 'Termine werden von Hand abgestimmt, und Bewerbungsunterlagen kommen unvollständig an. Wer jedes fehlende Dokument einzeln nachfordert, verliert Zeit bei jedem Objekt.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Projektseiten und regionale Kampagnen',
        desc: 'Wir erstellen Landingpages pro Projekt mit Grundrissen, Bildern und einfacher Kontakt- oder Reservationsmöglichkeit. Über Google Ads und Social Media erreichen wir Personen und Firmen, die in Ihrer Region eine Wohnung, ein Haus oder eine Gewerbefläche suchen.'
      },
      {
        step: '02',
        title: 'Vorqualifizierung online',
        desc: 'Interessenten geben vorab Budget, gewünschten Einzugstermin und weitere relevante Angaben an. Feste Regeln sortieren die Anfragen, und passende Personen erhalten automatisch eine Einladung zur Besichtigung.'
      },
      {
        step: '03',
        title: 'Vorgeprüfte Dossiers',
        desc: 'Ein Beispiel: Eingereichte Bewerbungsunterlagen werden KI-unterstützt auf Vollständigkeit geprüft, und für fehlende Dokumente liegt ein Entwurf der Nachforderung bereit. Über Zusage oder Absage entscheidet Ihr Team.'
      }
    ],
    benefits: [
      'Mehr passende Interessenten pro Objekt',
      'Budget und Einzugstermin liegen vor, bevor jemand zurückruft',
      'Automatische Einladungen zu Besichtigungen per E-Mail oder SMS',
      'Vollständige Dossiers, ohne jedes Dokument von Hand nachzufragen'
    ],
    related: [
      {
        href: '/loesungen/erstvermietung-ostschweiz',
        title: 'Sie vermieten Neubauten in der Ostschweiz?',
        desc: 'Für Entwickler und Verwaltungen mit Erstvermietungen in St. Gallen, im Thurgau und im Rheintal: weniger Leerstand dank eigener Projektvermarktung.',
        linkText: 'Mehr zur Erstvermietung',
      },
      {
        href: '/loesungen/verkaufsmandate-makler',
        title: 'Sie sind Makler und suchen Verkaufsmandate?',
        desc: 'Für Maklerinnen und Makler in Graubünden: mehr Anfragen von Eigentümern, die einen Verkauf planen.',
        linkText: 'Mehr zu Verkaufsmandaten',
      },
      {
        href: '/loesungen/hypothekarberatung',
        title: 'Sie beraten zur Finanzierung?',
        desc: 'Für Hypothekarberatungen gibt es eine eigene Seite: Anfragen von Erstkäufern und zu auslaufenden Festhypotheken über die eigene Website statt über Vergleichsportale.',
        linkText: 'Mehr zu Hypothekarberatung',
      },
    ],
    faqs: [
      {
        q: 'Lohnt sich das auch für kleinere, regionale Makler?',
        a: 'Ja. Wer in seiner Region online gut sichtbar ist, kann gegen grössere Anbieter bestehen und fällt Eigentümern als lokale Ansprechperson auf.'
      },
      {
        q: 'Lässt sich bestehende Immobiliensoftware wie FlowFact oder CAS anbinden?',
        a: 'In vielen Fällen ja, über vorhandene Schnittstellen. Wir prüfen im Erstgespräch, was mit Ihrer Software möglich ist.'
      },
      {
        q: 'Wie gehen Sie mit den Daten von Mietinteressenten um?',
        a: 'Bewerbungsunterlagen enthalten sensible Angaben wie Betreibungsauszug oder Lohnnachweis. Wir legen mit Ihnen fest, welches System welche Daten lesen darf, wie lange sie gespeichert bleiben und wer Zugriff hat, nach den Vorgaben des Schweizer Datenschutzgesetzes. Die Prüfung ist Vorarbeit, entschieden wird von Menschen.'
      }
    ]
  },
  'treuhand-unternehmensberatung': {
    slug: 'treuhand-unternehmensberatung',
    title: 'Treuhand & Unternehmensberatung',
    subtitle: 'Mehr Mandatsanfragen für Treuhand- und Beratungsbüros',
    heroDesc: 'Für Treuhand- und Beratungsbüros bauen wir einen Anfrageweg, der Umsatz, Mitarbeiterzahl und Buchhaltungssoftware schon vor dem Erstgespräch erfasst. Dahinter richten wir Abläufe ein, in denen Mandantenunterlagen vorsortiert ankommen, bevor Ihr Team sie prüft.',
    calculatorComponent: 'KanzleiWachstumsCheck',
    problems: [
      {
        title: 'Viele kleine Mandate binden das Team',
        desc: 'Kleine Mandate mit viel Belegaufwand füllen den Alltag, während anspruchsvolle Beratungsmandate zu kurz kommen.'
      },
      {
        title: 'Empfehlungen kommen unregelmässig',
        desc: 'Empfehlungen sind wertvoll, aber Sie wissen nie, wann die nächste kommt. So lässt sich Wachstum kaum planen.'
      },
      {
        title: 'Unvollständige Unterlagen von Mandanten',
        desc: 'Belege kommen ungeordnet, unvollständig oder zu spät. Bevor jemand bucht, wird erst einmal sortiert, und das erzeugt Druck vor Abschlüssen und Fristen.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Klares Profil für Ihr Büro',
        desc: 'Wir schärfen Ihre Zielgruppe, zum Beispiel Arztpraxen oder KMU ab einer bestimmten Grösse, und machen Partner und Inhaber auf LinkedIn als Fachleute für Steuern, Vorsorge und Nachfolge sichtbar.'
      },
      {
        step: '02',
        title: 'Vorqualifizierung neuer Mandate',
        desc: 'Ein kurzer Online-Fragebogen erfasst vor dem Erstgespräch Eckdaten wie Umsatzgrösse, Mitarbeiterzahl und eingesetzte Buchhaltungssoftware. Die Angaben landen direkt im CRM, und das Gespräch beginnt nicht bei null.'
      },
      {
        step: '03',
        title: 'Belege, die vorsortiert ankommen',
        desc: 'Ein Beispiel: Mandanten laden Unterlagen hoch, ein Modell erkennt die Dokumentart und liest Felder wie Datum, Betrag und Lieferant aus. Ihr Team prüft den Vorschlag und bucht. Unklare Belege landen in einer eigenen Liste statt im Stapel.'
      }
    ],
    benefits: [
      'Anfragen von Mandanten, die fachlich zu Ihrem Büro passen',
      'Erstgespräche, in denen die Eckdaten bereits vorliegen',
      'Belege, die klassifiziert und mit erkannten Feldern zur Prüfung bereitliegen',
      'Mehr Zeit im Team für anspruchsvolle Beratungsmandate'
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
        q: 'Bucht die KI dann selbständig?',
        a: 'Nein. Die Software schlägt Dokumentart und Werte vor, die Buchung und jede fachliche Beurteilung bleiben bei Ihrem Team. Wir legen fest, wo die Daten verarbeitet werden, wer Zugriff hat und wie jeder Schritt protokolliert wird. Das ist die Grundlage für die Vertraulichkeit Ihrer Mandantendaten und für den Datenschutz nach DSG.'
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
    heroDesc: 'Viele Einkäufer und Techniker informieren sich online über Lieferanten, lange bevor sie eine Offerte anfragen. Wir sorgen dafür, dass sie Ihr Unternehmen finden, und gestalten den Weg bis zur Offerte so, dass Ihr Innendienst nicht bei null beginnt und keine Offerte ohne Nachfassen bleibt.',
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
        desc: 'Anfragen kommen unvollständig an und müssen zuerst geklärt werden. Danach werden Offerten aufwendig kalkuliert und nicht nachgefasst, weil ein fester Ablauf dafür fehlt.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Verständliche Produktseiten',
        desc: 'Wir strukturieren Ihre Produkte und Leistungen so, dass Einkäufer schnell erkennen, welchen Nutzen sie haben. Klar aufgebaute Seiten helfen auch Suchmaschinen und KI-Assistenten, Ihr Angebot richtig einzuordnen.'
      },
      {
        step: '02',
        title: 'Anfragen, die vorbereitet ankommen',
        desc: 'Interessenten geben ihre Anforderungen online strukturiert ein. Ein Beispiel für den nächsten Schritt: Ein Modell fasst Anfrage und Anhänge zusammen, markiert fehlende Angaben wie Stückzahl oder Material und schlägt passende Artikel aus Ihrem Sortiment vor. Kalkuliert und offeriert wird von Ihrem Team.'
      },
      {
        step: '03',
        title: 'Nachfassen im CRM',
        desc: 'Wir richten klare Verkaufsphasen und automatische Wiedervorlagen für Offerten ein. Zur Wiedervorlage liegt ein Entwurf für die Nachfassmail bereit, den der Verkäufer anpasst und selbst versendet.'
      }
    ],
    benefits: [
      'Anfragen von Einkäufern und Technikern, auch ohne Messe',
      'Weniger Rückfragen, bevor eine Offerte kalkuliert werden kann',
      'Weniger Offerten ohne Rückmeldung dank systematischem Nachfassen',
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
      },
      {
        q: 'Lässt sich das an unser ERP anbinden?',
        a: 'In vielen Fällen ja, über die Schnittstellen Ihres ERP oder eine Automatisierungsplattform. Artikeldaten liest ein Modell nur, soweit das für den Vorschlag nötig ist. Schreibende Zugriffe auf das ERP richten wir nur dort ein, wo feste Regeln greifen.'
      }
    ]
  },
  'it-dienstleister-msps': {
    slug: 'it-dienstleister-msps',
    title: 'IT-Dienstleister & MSPs',
    subtitle: 'Mehr Anfragen für Managed Services von Schweizer KMU',
    heroDesc: 'Für IT-Dienstleister gewinnen wir Anfragen von Schweizer KMU zu Managed Services, IT-Sicherheit und Cloud-Projekten. Ziel sind laufende Serviceverträge statt einzelner Einsätze auf Abruf. Auf Wunsch nutzen wir dafür auch die Daten, die in Ihrem Ticketsystem bereits liegen.',
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
        desc: 'Wir bündeln mit Ihnen Ihre Leistungen in verständliche Pakete mit klarem Umfang und Servicezeiten. Auf LinkedIn sprechen wir Geschäftsführer und Finanzverantwortliche in ihrer Sprache an, mit planbaren Kosten und Ausfallsicherheit statt Technik.'
      },
      {
        step: '02',
        title: 'Online-Check zu Sicherheit und Infrastruktur',
        desc: 'Ein kurzer Online-Check zu Datenschutz, IT-Sicherheit und Backups zeigt KMU, wo sie handeln sollten. Aus den Antworten entsteht eine Zusammenfassung für das Erstgespräch, die Ihr Techniker vorab durchsieht.'
      },
      {
        step: '03',
        title: 'Servicebedarf bei Bestandskunden erkennen',
        desc: 'Ein Beispiel: Ein Agent wertet Tickets und Einsätze der letzten Monate aus und zeigt, welche Kunden regelmässig Hilfe auf Abruf brauchen. Ob und wie Sie ihnen einen Vertrag anbieten, entscheidet Ihr Team.'
      }
    ],
    benefits: [
      'Mehr Anfragen für laufende Serviceverträge',
      'Positionierung als IT-Partner statt als austauschbarer Lieferant',
      'Erstgespräche zur IT-Sicherheit, die mit dem konkreten Bedarf beginnen',
      'Bestandskunden mit Servicebedarf, die im Tagesgeschäft sonst untergehen'
    ],
    faqs: [
      {
        q: 'Wie heben wir uns von den vielen Mitbewerbern ab?',
        a: 'Mit klaren Paketen und einer Sprache, die vom Nutzen ausgeht. Ein Geschäftsführer kauft nicht «Cloud», sondern die Sicherheit, dass Daten geschützt sind und das Team von überall arbeiten kann.'
      },
      {
        q: 'Helfen Sie uns, bestehende Projektkunden in Serviceverträge zu überführen?',
        a: 'Ja. Wir entwickeln mit Ihnen ein Vorgehen und passende Argumente, um Projektkunden schrittweise für einen laufenden Vertrag zu gewinnen.'
      },
      {
        q: 'Dürfen Agenten auf unser Ticketsystem und Kundendaten zugreifen?',
        a: 'Nur lesend und nur auf das, was für die Auswertung nötig ist. Wir richten eigene Zugänge mit eng gefassten Rechten ein, protokollieren die Abfragen und klären mit Ihnen, welche Kundendaten ein Sprachmodell überhaupt sehen darf. Den Rahmen setzen Ihre Kundenverträge und das Datenschutzgesetz.'
      }
    ]
  },
  'ingenieur-planungsbuero': {
    slug: 'ingenieur-planungsbuero',
    title: 'Ingenieur- & Planungsbüros',
    subtitle: 'Mehr private Aufträge und Bewerbungen für Ihr Planungsbüro',
    heroDesc: 'Viele Ingenieur- und Planungsbüros leben von Ausschreibungen. Wir bauen einen zweiten Weg zu privaten Bauherren und Gewerbekunden auf, verkürzen die Suche nach passenden Projekten und machen Ihr Büro für Bauingenieure, Zeichnerinnen und Projektleiter als Arbeitgeber sichtbar.',
    calculatorComponent: 'ProjektpipelineCheck',
    problems: [
      {
        title: 'Abhängigkeit von wenigen Auftraggebern',
        desc: 'Fällt ein grosser Bauherr oder eine Gemeinde als Auftraggeber weg, ist die Auslastung des Büros schnell in Gefahr.'
      },
      {
        title: 'Warten auf Ausschreibungen',
        desc: 'Viele Büros warten auf Ausschreibungen, und das Durchsehen von Publikationen und Baugesuchen kostet jede Woche Zeit. Direktaufträge von Industrie- und Gewerbebauherren gehen so an andere.'
      },
      {
        title: 'Fachkräfte sind knapp',
        desc: 'Bauingenieure, Zeichnerinnen und Projektleiter sind schwer zu finden. Ohne sichtbaren Auftritt als Arbeitgeber gehen Bewerbungen an andere Büros.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Referenzen für private Bauherren',
        desc: 'Wir bereiten Ihre wichtigsten Projekte als verständliche Fallbeispiele auf und erreichen über LinkedIn und Google Ads Verantwortliche für Bau- und Erweiterungsprojekte. Entwürfe aus Projektunterlagen prüfen Ihre Projektleiter fachlich, bevor etwas veröffentlicht wird.'
      },
      {
        step: '02',
        title: 'Passende Projekte früh sehen',
        desc: 'Ein Beispiel: Ein Agent sichtet öffentliche Ausschreibungen und Baugesuche, ordnet sie nach Ihren Schwerpunkten und Regionen und fasst die relevanten einmal pro Woche zusammen. Ob Sie sich bewerben oder einen Bauherrn ansprechen, entscheiden Sie.'
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
      'Weniger Zeit für das Durchsehen von Ausschreibungen und Baugesuchen'
    ],
    faqs: [
      {
        q: 'Passt aktive Kundengewinnung zu einem Ingenieurbüro?',
        a: 'Ja, solange sie sachlich bleibt. Wir stellen Ihre technische Kompetenz, Referenzen und Themen wie Energieeffizienz in den Vordergrund, nicht laute Werbung.'
      },
      {
        q: 'Woher kommen die Daten zu Ausschreibungen und Baugesuchen?',
        a: 'Aus öffentlich zugänglichen Quellen, etwa den Plattformen für öffentliche Beschaffungen und den amtlichen Baupublikationen von Kantonen und Gemeinden. Welche Quellen sich für Ihre Region technisch und rechtlich sauber anbinden lassen, prüfen wir vorab.'
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
    heroDesc: 'Für Personalvermittler gewinnen wir Suchaufträge von Arbeitgebern und erreichen die Fachkräfte, die zu diesen Stellen passen. Dahinter steht eine Kandidatendatenbank, die Lebensläufe strukturiert erfasst und zu jedem Auftrag passende Profile vorschlägt, damit Sie schneller besetzen.',
    calculatorComponent: 'PlacementEffizienzRechner',
    problems: [
      {
        title: 'Mandate ohne Exklusivität',
        desc: 'Arbeitgeber geben dieselbe Stelle oft mehreren Vermittlern. Sie investieren viel Arbeit auf Erfolgsbasis und gehen am Ende leer aus.'
      },
      {
        title: 'Zu wenige passende Kandidaten',
        desc: 'Stellenportale liefern immer weniger brauchbare Bewerbungen. Gute Kandidaten suchen meist nicht aktiv, und wer schon in Ihrer Datenbank ist, wird oft übersehen.'
      },
      {
        title: 'Langsamer Besetzungsprozess',
        desc: 'Unstrukturierte Prüfung von Lebensläufen und lange Abstimmungsschleifen mit dem Kunden verzögern die Besetzung und damit Ihr Honorar.'
      }
    ],
    approach: [
      {
        step: '01',
        title: 'Spezialisierung und zwei Anfragewege',
        desc: 'Wir stellen Ihre Spezialisierung in den Vordergrund und bauen zwei getrennte Wege auf, einen für Suchaufträge von HR-Verantwortlichen und einen für wechselbereite Fachkräfte.'
      },
      {
        step: '02',
        title: 'Lebensläufe strukturiert erfassen',
        desc: 'Eingehende Bewerbungen werden KI-unterstützt ausgelesen. Fähigkeiten, Erfahrung, Region und Verfügbarkeit stehen danach als Felder in Ihrem System statt in einem PDF. Ihr Team prüft und ergänzt die Angaben.'
      },
      {
        step: '03',
        title: 'Vorschläge für das Matching',
        desc: 'Ein Beispiel: Zu einem neuen Suchauftrag schlägt das System passende Kandidaten aus Ihrer Datenbank vor und begründet jeden Vorschlag. Wen Sie ansprechen und dem Kunden vorstellen, entscheiden Ihre Beraterinnen und Berater.'
      }
    ],
    benefits: [
      'Mehr Suchaufträge mit Exklusivität oder Anzahlung',
      'Regelmässige Bewerbungen wechselbereiter Fachkräfte über Social Ads',
      'Passende Kandidaten aus der eigenen Datenbank, die sonst übersehen würden',
      'Kürzere Wege von der Anfrage bis zur Besetzung'
    ],
    faqs: [
      {
        q: 'Wie sprechen wir passive Kandidaten an, ohne unseriös zu wirken?',
        a: 'Mit einem professionellen Auftritt und nützlichen Inhalten, zum Beispiel Lohnvergleichen oder Marktberichten. Kandidaten in Ihrer Datenbank erhalten regelmässig solche Informationen, damit Sie im richtigen Moment präsent sind. Diskretion steht dabei an erster Stelle.'
      },
      {
        q: 'Entscheidet die KI, wer weiterkommt?',
        a: 'Nein. Das System macht Vorschläge mit Begründung, die Auswahl treffen Ihre Beraterinnen und Berater. Die Kriterien legen Sie fest, Merkmale wie Alter oder Herkunft gehören nicht dazu. Wir prüfen die Vorschläge mit echten Fällen, damit sie nachvollziehbar bleiben. Kandidatendaten bearbeiten wir nach dem Datenschutzgesetz, mit klaren Zugriffsrechten und Löschfristen.'
      },
      {
        q: 'Funktioniert das auch für Executive Search?',
        a: 'Ja, mit angepasstem Vorgehen. Für Führungspositionen setzen wir stärker auf persönliche Ansprache, etwa mit kurzen Videos, und bauen Ihr Netzwerk in der jeweiligen Branche aus.'
      }
    ]
  },
  'bildung-weiterbildung': {
    slug: 'bildung-weiterbildung',
    title: 'Bildung & Weiterbildung',
    subtitle: 'Mehr Anmeldungen für Ihre Lehrgänge, Kurse und Seminare',
    heroDesc: 'Lehrgänge, Seminare und CAS-Studiengänge füllen sich, wenn Kampagnen die passenden Personen erreichen und die Anmeldung ohne Umwege funktioniert. Für Akademien, Institute und Weiterbildungsanbieter bauen wir beides auf und entlasten das Sekretariat bei wiederkehrenden Fragen zu Zulassung und Ablauf.',
    calculatorComponent: 'KursFunnelRechner',
    problems: [
      {
        title: 'Hohe Werbekosten ohne klare Wirkung',
        desc: 'Broschüren und Messeauftritte kosten viel. Welche Massnahme zu wie vielen Anmeldungen führt, bleibt meist unklar.'
      },
      {
        title: 'Viel Beratungsaufwand im Vorfeld',
        desc: 'Das Sekretariat beantwortet immer wieder dieselben Fragen und führt viele Gespräche mit Personen, die die Zulassungsvoraussetzungen am Ende nicht erfüllen.'
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
        desc: 'Interessenten prüfen in wenigen Schritten selbst, ob sie die Voraussetzungen für den Lehrgang erfüllen. Die Antworten gehen mit der Anfrage ins CRM.'
      },
      {
        step: '02',
        title: 'Antworten auf Zulassungsfragen',
        desc: 'Ein Beispiel: Fragen per E-Mail oder Formular werden eingeordnet, und auf Basis Ihrer Reglemente und Kursdaten entsteht ein Antwortentwurf. Das Sekretariat prüft und versendet. Heikle Fälle wie Ausnahmen bei der Zulassung gehen direkt an die Studienleitung.'
      },
      {
        step: '03',
        title: 'Erinnerungen und Anzeigen',
        desc: 'Wer sich für einen Infoabend anmeldet, erhält automatisch Erinnerungen und vorbereitende Informationen. Wer die Kursdetails angesehen hat, ohne sich anzumelden, sieht später Anzeigen, etwa mit Erfahrungsberichten von Absolventinnen und Absolventen.'
      }
    ],
    benefits: [
      'Bessere Auslastung Ihrer Kurse, Lehrgänge und Studiengänge',
      'Weniger Zeit im Sekretariat für wiederkehrende Zulassungsfragen',
      'Mehr Angemeldete, die am Infoabend tatsächlich erscheinen',
      'Klare Sicht auf die Werbekosten pro Anmeldung'
    ],
    faqs: [
      {
        q: 'Lässt sich unser bestehendes Kursverwaltungs- oder Lernsystem anbinden?',
        a: 'In den meisten Fällen ja. Wir verbinden die Anfrageformulare mit gängigen Systemen, damit Kursdaten und Teilnehmerlisten übereinstimmen. Die Details prüfen wir im Erstgespräch.'
      },
      {
        q: 'Beantwortet dann ein Chatbot unsere Interessenten?',
        a: 'Nur wenn Sie das möchten und die Fragen klar abgegrenzt sind, etwa zu Daten, Ort und Anmeldeschluss. Bei Zulassung und Anrechnung empfehlen wir Entwürfe, die das Sekretariat freigibt. Die Antworten stützen sich auf Ihre eigenen Dokumente und werden mit echten Anfragen getestet, bevor sie im Einsatz sind.'
      },
      {
        q: 'Wir bieten Nischenkurse an. Finden wir online genug Teilnehmende?',
        a: 'Oft ja. Wer auf Google nach einem bestimmten Fachthema sucht, hat meist schon eine konkrete Absicht. Genau diese Personen erreichen Sie mit Google Ads.'
      }
    ]
  },
  'gesundheitswesen': {
    slug: 'gesundheitswesen',
    title: 'Gesundheitswesen',
    subtitle: 'Mehr Neupatienten für Ihre Praxis oder Fachklinik',
    heroDesc: 'Spezialpraxen und Fachkliniken machen wir mit sachlicher Patienteninformation online auffindbar, etwa für Selbstzahler-Leistungen. Terminanfrage und Aufnahme richten wir so ein, dass Ihr Praxisteam weniger abtippt. Die Werbevorschriften für Gesundheitsberufe und den Schutz von Gesundheitsdaten beachten wir von Anfang an.',
    calculatorComponent: 'NeupatientenPotenzialCheck',
    problems: [
      {
        title: 'Der Alltag lässt keinen Raum für Schwerpunkte',
        desc: 'Grundversorgung füllt den Kalender. Für Ihre Schwerpunkte und Selbstzahler-Leistungen bleibt wenig Zeit, und online findet man sie kaum.'
      },
      {
        title: 'Wenig Sichtbarkeit bei spezifischen Themen',
        desc: 'Patientinnen und Patienten informieren sich online über Beschwerden und Behandlungen. Eine Praxis ohne verständliche Seiten zu ihren Schwerpunkten taucht dort nicht auf.'
      },
      {
        title: 'Aufwendige Terminvergabe und Aufnahme',
        desc: 'Telefonische Terminschleifen, fehlende Angaben vor dem ersten Termin und von Hand abgetippte Zuweisungen kosten das Praxisteam viel Zeit.'
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
        title: 'Vorab-Fragebogen und Online-Termin',
        desc: 'Patienten beantworten vor der Terminanfrage einige Fragen, etwa zum Anliegen und zur Versicherung, und buchen Erst- und Beratungstermine online. Die Angaben gehen strukturiert an die Praxis, ohne dass jemand sie aus einer E-Mail abschreibt.'
      },
      {
        step: '03',
        title: 'Zuweisungen vorbereitet',
        desc: 'Ein Beispiel: Bei Zuweisungsschreiben liest ein Modell administrative Angaben wie Zuweiser, Versicherung und gewünschten Fachbereich aus und legt sie zur Kontrolle bereit. Medizinische Einschätzungen bleiben vollständig bei Ihrem Fachpersonal.'
      }
    ],
    benefits: [
      'Mehr Anfragen für Ihre Schwerpunkte und Selbstzahler-Leistungen',
      'Sachliche Patienteninformation statt Werbeversprechen',
      'Weniger Telefon- und Abtipparbeit für das Praxisteam',
      'Besser informierte Patientinnen und Patienten schon vor dem ersten Termin'
    ],
    faqs: [
      {
        q: 'Ist Werbung für Ärztinnen und Ärzte in der Schweiz nicht stark eingeschränkt?',
        a: 'Ja, es gelten enge Regeln, etwa aus den kantonalen Gesundheitsgesetzen, den Standesregeln und dem Heilmittelwerberecht. Wir setzen deshalb auf sachliche Patienteninformation statt auf Werbeversprechen. Die abschliessende Prüfung liegt bei Ihnen; eine Rechtsberatung ersetzen wir nicht.'
      },
      {
        q: 'Dürfen Gesundheitsdaten überhaupt durch KI-Systeme laufen?',
        a: 'Gesundheitsdaten gelten nach dem Datenschutzgesetz als besonders schützenswert, und es gilt das Berufsgeheimnis. Wir prüfen deshalb für jeden Schritt, ob eine feste Regel genügt, wo die Daten verarbeitet werden und wer Zugriff hat. Solange Verarbeitungsort, Zugriffsrechte und Vertrag mit dem Anbieter nicht geklärt sind, setzen wir kein Sprachmodell ein. Die abschliessende Beurteilung liegt bei Ihnen.'
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
    heroDesc: 'Für Handwerks- und Baubetriebe gewinnen wir Aufträge von Privat- und Gewerbekunden aus der eigenen Region. Anfragen kommen mit den nötigen Angaben an, und für die Offerte liegen eine Zusammenfassung und ein erster Entwurf bereit.',
    calculatorComponent: 'AuftragsPipelineRechner',
    problems: [
      {
        title: 'Anfragen auf allen Kanälen',
        desc: 'Anfragen kommen per E-Mail, Telefon und WhatsApp. Dabei geht die Übersicht verloren, Offerten dauern zu lange und Kunden springen ab.'
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
        desc: 'Wer in Ihrem Kanton online einen Handwerker sucht, soll Ihren Betrieb finden, ob für ein Privat- oder ein Gewerbeprojekt.'
      },
      {
        step: '02',
        title: 'Alle Anfragen an einem Ort',
        desc: 'Bauherren beschreiben ihr Vorhaben, zum Beispiel Badsanierung, PV-Anlage oder Holzanbau, mit den wichtigen Eckdaten und Fotos direkt über Ihre Website. Anfragen per E-Mail landen am selben Ort.'
      },
      {
        step: '03',
        title: 'Offerte vorbereitet',
        desc: 'Ein Beispiel: Ein Modell fasst die Anfrage zusammen, markiert fehlende Angaben und erstellt aus Ihren Standardpositionen einen ersten Offertentwurf. Sie prüfen, ergänzen und versenden. Wiedervorlagen für offene Offerten laufen automatisch im CRM.'
      }
    ],
    benefits: [
      'Mehr Direktaufträge von Bauherren aus Ihrer Region',
      'Schnellere Offerten, weil Angaben und Entwurf bereitliegen',
      'Offerten werden nachgefasst, ohne dass jemand daran denken muss',
      'Ein sichtbarer Auftritt als Arbeitgeber für Monteure und Poliere'
    ],
    faqs: [
      {
        q: 'Müssen wir dafür unsere Software umstellen?',
        a: 'In der Regel nicht. Wir prüfen, wie sich Ihre bestehende Software, etwa Abacus, Bexio oder SORBA, über Schnittstellen anbinden lässt.'
      },
      {
        q: 'Schreibt die KI dann unsere Offerten?',
        a: 'Sie bereitet sie vor. Der Entwurf stützt sich auf Ihre eigenen Positionen und Ansätze, die Kalkulation prüfen und verantworten Sie. Versendet wird nur, was jemand im Betrieb freigegeben hat.'
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
    heroDesc: 'Wir machen die Fachgebiete Ihrer Kanzlei online sichtbar und gestalten die Mandatsaufnahme so, dass Rechtsgebiet, Gegenpartei und Sachverhalt vor dem Erstgespräch geordnet vorliegen. Den Rahmen setzen die Standes- und Werberegeln für Anwältinnen und Anwälte und das Berufsgeheimnis.',
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
        desc: 'Unternehmer suchen Anwälte vermehrt über Google und LinkedIn. Eine Kanzlei ohne erkennbare Schwerpunkte kommt so oft gar nicht in die engere Wahl.'
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
        desc: 'Ein diskreter Online-Fragebogen erfasst vorab Rechtsgebiet, Gegenpartei und eine allfällige Rechtsschutzversicherung. Die Gegenpartei wird nach festen Regeln mit Ihrer Mandatsliste abgeglichen, damit mögliche Interessenkonflikte früh sichtbar werden.'
      },
      {
        step: '03',
        title: 'Sachverhalt vorbereitet',
        desc: 'Ein Beispiel: Aus der Schilderung im Formular und den hochgeladenen Unterlagen entsteht eine kurze, geordnete Zusammenfassung für die zuständige Anwältin oder den Anwalt. Fehlende Unterlagen werden automatisch angefordert. Die rechtliche Einschätzung bleibt bei Ihnen.'
      }
    ],
    benefits: [
      'Mehr Anfragen in Ihren Fachgebieten',
      'Rechtsgebiet, Gegenpartei und Sachverhalt bekannt, bevor jemand zurückruft',
      'Auftritt, der die Standes- und Werberegeln berücksichtigt',
      'Kontakt zu Unternehmen, die eine längerfristige Begleitung suchen'
    ],
    faqs: [
      {
        q: 'Wie passt das zum Berufsgeheimnis bei Online-Formularen?',
        a: 'Wir fragen im Erstkontakt nur das Nötigste ab, nutzen verschlüsselte Übertragung und wählen Tools mit Datenhaltung in der Schweiz oder der EU, soweit möglich. Bei Sprachmodellen klären wir vorab, wo die Daten verarbeitet werden und ob der Anbieter sie speichert oder weiterverwendet. Die Einzelheiten legen wir mit Ihnen fest.'
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
    heroDesc: 'Für Transport- und Logistikunternehmen gewinnen wir Direktkunden aus Industrie und Handel entlang der eigenen Stammstrecken. Transportanfragen kommen so an, dass die Disposition direkt offerieren kann. Je mehr feste Frachten Sie haben, desto weniger sind Sie auf Frachtenbörsen angewiesen.',
    calculatorComponent: 'FlottenauslastungsRechner',
    problems: [
      {
        title: 'Preisdruck auf Frachtenbörsen',
        desc: 'Kurzfristige Frachten über Frachtenbörsen decken oft kaum die Kosten. Sie haben wenig Einfluss auf den Preis.'
      },
      {
        title: 'Leere Rückfahrten',
        desc: 'Hin ist der Lastwagen voll, zurück fährt er oft leer oder mit schlecht bezahlten Beiladungen.'
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
        desc: 'Wir schalten Anzeigen in den Regionen entlang Ihrer Stammstrecken. So erreichen Sie Versender dort, wo Sie ohnehin fahren.'
      },
      {
        step: '02',
        title: 'Transportanfragen ohne Abtippen',
        desc: 'Handels- und Industriefirmen geben Frachtvolumen, Rhythmus und Termine mit wenigen Klicks an. Ein Beispiel für Anfragen per E-Mail: Ein Modell liest Abholort, Ziel, Gewicht und Wunschtermin aus und legt sie der Disposition als Entwurf vor. Offeriert wird von Ihrem Team.'
      },
      {
        step: '03',
        title: 'Schnelle Bewerbung für Chauffeure',
        desc: 'Wir richten eine kurze Bewerbung ohne Lebenslauf ein und schalten Anzeigen für wechselbereite Fahrer in Ihrer Region.'
      }
    ],
    benefits: [
      'Weniger Leerfahrten auf Ihren Stammstrecken',
      'Bessere Margen durch direkten Kontakt zu Versendern',
      'Bewerbungen von Chauffeuren der Kategorie C/CE',
      'Transportanfragen, die schneller offeriert werden können'
    ],
    faqs: [
      {
        q: 'Unterstützen Sie uns auch bei der Kundengewinnung im Ausland?',
        a: 'Ja. Wir können Kampagnen entlang Ihrer Transitrouten ausrichten, zum Beispiel Schweiz–Deutschland–Italien, um Rückfahrten besser auszulasten.'
      },
      {
        q: 'Kann ein System passende Frachten für Rückfahrten vorschlagen?',
        a: 'Ja, als Vorschlag. Wenn Touren und Anfragen im selben System liegen, lässt sich prüfen, welche Anfrage zu einer geplanten Rückfahrt passt. Das ist zuerst eine Frage sauberer Daten und fester Regeln, ein Sprachmodell braucht es dafür oft nicht. Die Disposition entscheidet.'
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
    heroDesc: 'Wir richten Website und Kampagnen Ihres Hotels so aus, dass mehr Gäste direkt bei Ihnen buchen statt über Buchungsplattformen. Bei jeder Direktbuchung entfällt die Provision, und der Kontakt zum Gast bleibt bei Ihnen. Anfragen per E-Mail beantwortet Ihr Team mit vorbereiteten Entwürfen schneller.',
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
        desc: 'Bilder und Texte zeigen Zimmer, Lage und Gastgeber so, dass Gäste den Unterschied zum Nachbarhotel erkennen.'
      },
      {
        step: '02',
        title: 'Einfacher buchen, schneller antworten',
        desc: 'Wir gestalten Ihre Website so, dass eine Direktbuchung mindestens so einfach ist wie auf einer Plattform. Ein Beispiel für Anfragen per E-Mail: Zu einer Gruppen- oder Seminaranfrage entsteht ein Antwortentwurf mit Verfügbarkeiten aus Ihrem Hotelsystem, den die Rezeption prüft und versendet.'
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
      'Schnellere Antworten auf Gruppen- und Seminaranfragen',
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
      },
      {
        q: 'Antwortet dann eine KI unseren Gästen?',
        a: 'Nicht ohne Ihr Team. Entwürfe entstehen aus Ihren eigenen Angaben zu Zimmern, Paketen und Preisen und gehen erst nach Prüfung hinaus. Standardnachrichten wie Buchungsbestätigungen laufen weiterhin als feste Abläufe aus Ihrem System.'
      }
    ]
  }
};
