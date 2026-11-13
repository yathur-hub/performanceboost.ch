import { ExtendedServiceContent } from '../types';

export const EXTENDED_SERVICES_DATA: ExtendedServiceContent[] = [
  {
    slug: 'ai-automation',
    hero: {
      headline: 'KI im Alltag einsetzen, sicher und mit messbarem Nutzen.',
      subheadline: 'Wir klären, wo KI in Ihrem Unternehmen etwas bringt, führen sie in die bestehenden Abläufe ein, schulen Ihr Team und legen fest, welche Daten in welches Tool dürfen.',
      ctaText: 'KI-Einsatz prüfen lassen'
    },
    problem: {
      title: 'KI wird genutzt, aber ohne Plan und ohne Regeln',
      paragraphs: [
        'In vielen Unternehmen nutzen einzelne Mitarbeitende ChatGPT oder andere Tools, jede Person auf ihre Weise. In die eigentlichen Abläufe ist KI nicht eingebunden, und niemand weiss, ob sie Zeit spart.',
        'Gleichzeitig ist unklar, welche Kundendaten schon in KI-Tools gelandet sind und wer für die Inhalte verantwortlich ist, die damit entstehen.',
        'Wir bringen Ordnung hinein: wenige Anwendungen, die sich lohnen, ein geschultes Team und Regeln, die jede Person versteht.'
      ]
    },
    leistet: {
      title: 'Was die Einführung umfasst',
      items: [
        { title: 'KI-Standortbestimmung', desc: 'Wir erfassen, wo KI heute genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind. Daraus entsteht eine priorisierte Liste mit drei bis fünf Anwendungen und einer Nutzenrechnung.' },
        { title: 'Anwendungen einrichten', desc: 'Wir binden KI in Ihre bestehenden Tools und Abläufe ein, etwa für Recherche, Entwürfe, Zusammenfassungen, Auswertungen oder die Vorqualifizierung von Anfragen.' },
        { title: 'Schulung des Teams', desc: 'Schulungen mit Ihren eigenen Abläufen und Beispielen, dazu kurze Anleitungen. Ziel ist, dass KI im Alltag genutzt und nicht nur ausprobiert wird.' },
        { title: 'Regeln für Daten und Tools', desc: 'Wir legen fest, welche Daten in welches Tool dürfen, welche nie und wer Inhalte prüft und freigibt. Kurz und verständlich formuliert, abgestimmt auf das Schweizer DSG.' },
        { title: 'KI-Agenten für ganze Abläufe', desc: 'Wo es sich lohnt, übernimmt ein KI-Agent mehrere Schritte eines Ablaufs selbständig. Bevor etwas nach aussen geht, gibt Ihr Team frei.' },
        { title: 'Laufende Begleitung', desc: 'Neue Anwendungen prüfen, Werkzeuge aktuell halten und die Regeln nachführen, wenn sich Tools oder Abläufe ändern.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        { title: 'Standortbestimmung', desc: 'In ein bis zwei Wochen klären wir, wo KI heute genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind.' },
        { title: 'Anwendungen priorisieren', desc: 'Wir wählen die drei bis fünf Anwendungen, die Ihrem Unternehmen am meisten bringen. Alles andere kommt später oder gar nicht.' },
        { title: 'Einführen und schulen', desc: 'Wir richten die Anwendungen in Ihren Abläufen ein und schulen das Team mit eigenen Beispielen.' },
        { title: 'Regeln verabschieden', desc: 'Die Regeln für Daten, Tools und Freigaben werden schriftlich festgehalten und mit der Geschäftsleitung verabschiedet.' },
        { title: 'Messen und verbessern', desc: 'Wir prüfen, ob die Anwendungen genutzt werden und Zeit sparen, und passen sie an.' }
      ]
    },
    extraSections: [
      {
        title: 'Was Ihr Team danach selbst kann',
        type: 'list',
        bullets: [
          'KI für Recherche, Entwürfe und Auswertungen im Alltag nutzen',
          'Erkennen, welche Daten in ein KI-Tool dürfen und welche nicht',
          'KI-Ergebnisse prüfen, bevor sie nach aussen gehen',
          'Neue Anwendungen einschätzen, bevor Geld in weitere Tools fliesst'
        ]
      },
      {
        title: 'Werkzeuge',
        type: 'grid',
        subtitle: 'Wir sind an kein Tool gebunden und arbeiten mit dem, was zu Ihnen passt.',
        items: [
          { title: 'Sprachmodelle', desc: 'ChatGPT, Claude oder Gemini für Texte, Recherche und Auswertungen, mit Datenschutzbedingungen, die zu Ihren Anforderungen passen.' },
          { title: 'Automatisierung', desc: 'n8n, Make oder Zapier, um KI in bestehende Abläufe einzubinden. n8n lässt sich auch auf eigenen Servern betreiben.' },
          { title: 'Ihre bestehenden Tools', desc: 'KI-Funktionen in CRM, E-Mail und Office, die Sie oft schon bezahlen, aber kaum nutzen.' }
        ]
      },
      {
        title: 'Was KI nicht ersetzt',
        type: 'text',
        text: 'KI ersetzt weder Ihre Strategie noch das Urteil Ihrer Mitarbeitenden noch die Beziehung zu Ihren Kunden. Sie hilft, Aufgaben schneller zu erledigen, Ansprache persönlicher zu machen und Daten rascher auszuwerten. Die Entscheidungen, was Sie wem und warum anbieten, treffen weiterhin Menschen. Wir setzen KI dort ein, wo sie sich lohnt, und raten ab, wo sie nichts bringt.'
      }
    ],
    faq: [
      { q: 'Wir haben schon ChatGPT-Lizenzen. Reicht das nicht?', a: 'Lizenzen sind der kleinere Teil. Entscheidend ist, ob KI in die Abläufe eingebunden ist, ob das Team weiss, was es damit tun darf, und ob sich der Nutzen messen lässt. Vorhandene Lizenzen lassen sich oft weiter nutzen.' },
      { q: 'Brauchen wir technisches Know-how im Team?', a: 'Nicht zwingend. Viele KI-Anwendungen lassen sich ohne Programmierung umsetzen und brauchen nur ein Grundverständnis, das wir in der Schulung vermitteln. Wo es technischer wird, übernehmen wir die Umsetzung und dokumentieren sie.' },
      { q: 'Wie stellen Sie sicher, dass KI-generierte Inhalte gut sind?', a: 'Wir bauen eine Prüfung in jeden Ablauf ein. Die KI liefert Entwürfe, Menschen prüfen und geben frei. Bei Kundendaten legen wir vorab fest, welche Daten überhaupt an ein KI-Modell gehen dürfen.' },
      { q: 'Was kosten KI-Tools?', a: 'Die Lizenzkosten hängen vom Tool und von der Zahl der Nutzerinnen und Nutzer ab. Oft lassen sich vorhandene Lizenzen weiter nutzen. In der Standortbestimmung rechnen wir aus, welche Kosten zusätzlich entstehen und was dem gegenübersteht.' },
      { q: 'Was kostet die Einführung?', a: 'Wir arbeiten mit Festpreisen für ein klar definiertes Ergebnis, nicht nach Stunden. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit Umfang, Ergebnis und Preis.' }
    ],
    cta: {
      headline: 'Wo kann KI Ihrem Team Arbeit abnehmen?',
      subheadline: 'Wir gehen durch, wo Ihr Team heute Zeit verliert, welche Anwendungen dort helfen würden und wo KI nichts bringt.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'ki-agenten',
    hero: {
      headline: 'KI-Agenten, die ganze Abläufe übernehmen.',
      subheadline: 'Eine Anfrage kommt am Freitagabend. Am Montag liegt sie geprüft, eingeordnet und mit Antwortentwurf im CRM. Ihr Team prüft und gibt frei.',
      ctaText: 'Ablauf besprechen'
    },
    problem: {
      title: 'Die Arbeit zwischen den Systemen bleibt an Menschen hängen',
      paragraphs: [
        'Anfragen kommen per Formular oder E-Mail, werden abgetippt, im CRM erfasst, recherchiert und beantwortet. Jeder Schritt ist einfach. Zusammen kosten sie viel Zeit, und am Wochenende bleibt alles liegen.',
        'Einzelne KI-Tools helfen bei einzelnen Handgriffen. Der Ablauf dazwischen läuft trotzdem von Hand.',
        'Ein KI-Agent übernimmt die Schritte dazwischen, mit klar begrenzten Rechten. Ihr Team kümmert sich um das, was Urteil braucht: prüfen, entscheiden und mit Kunden sprechen.'
      ]
    },
    leistet: {
      title: 'Typische Agenten in Marketing und Vertrieb',
      items: [
        { title: 'Anfrage-Agent', desc: 'Prüft neue Anfragen, ordnet sie nach Ihren Kriterien ein, legt Kontakt und Firma im CRM an und bereitet eine Antwort vor.' },
        { title: 'Recherche-Agent', desc: 'Recherchiert Zielfirmen und Gesprächspartner vor einem Termin und fasst das Wichtigste auf einer Seite zusammen.' },
        { title: 'Nachfass-Agent', desc: 'Erkennt offene Offerten und liegengebliebene Anfragen und bereitet die nächste Nachricht vor.' },
        { title: 'Reporting-Agent', desc: 'Stellt die wichtigsten Zahlen aus CRM, Website und Kampagnen zusammen und beschreibt auffällige Abweichungen in wenigen Sätzen.' },
        { title: 'Inhalts-Agent', desc: 'Bereitet Entwürfe für Beiträge, Newsletter oder Offerten vor, in Ihrem Stil und nach Ihren Vorgaben.' },
        { title: 'Daten-Agent', desc: 'Findet Dubletten und Lücken im CRM und schlägt Korrekturen vor, bevor sie Auswertungen verfälschen.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        { title: 'Ablauf auswählen', desc: 'Wir beginnen mit einem Ablauf, der häufig vorkommt, klar geregelt ist und heute viel Handarbeit verursacht.' },
        { title: 'Regeln festlegen', desc: 'Wir halten fest, was der Agent allein darf, wo ein Mensch freigibt und welche Daten er verarbeiten darf.' },
        { title: 'Bauen und testen', desc: 'Wir bauen den Agenten und testen ihn mit echten Fällen, bis die Ergebnisse verlässlich sind.' },
        { title: 'Einführen', desc: 'Ihr Team wird eingewiesen und weiss, wie es Entwürfe prüft und was bei Fehlern passiert.' },
        { title: 'Messen', desc: 'Wir messen eingesparte Zeit und Reaktionszeiten und entscheiden dann, welcher Ablauf als Nächstes kommt.' }
      ]
    },
    extraSections: [
      {
        title: 'Ein Beispiel aus dem Alltag',
        type: 'text',
        text: 'Eine Anfrage kommt am Freitagabend über das Formular. Der Agent prüft, ob sie vollständig ist und kein Spam, ordnet sie nach Ihren Kriterien ein, legt Kontakt und Firma im CRM an, recherchiert das Unternehmen und bereitet eine Antwort vor. Am Montagmorgen findet Ihr Team die Anfrage geprüft und mit Entwurf vor. Es liest, passt an und sendet.'
      },
      {
        title: 'Wo die Kontrolle bleibt',
        type: 'list',
        bullets: [
          'Vorab festgelegt, was der Agent allein darf und was nicht',
          'Nach aussen geht nichts ohne Freigabe durch Ihr Team',
          'Jeder Schritt wird protokolliert und ist nachvollziehbar',
          'Vor dem Start klar, welche Daten verarbeitet werden und wo sie liegen'
        ]
      },
      {
        title: 'So läuft es bei performanceboost selbst',
        type: 'text',
        text: 'Jede Anfrage über unsere Website wird automatisch geprüft, gespeichert und in unser eigenes ERP übernommen. Dort entstehen Kontakt, Firma, Anfrage und die Aufgabe, sie zu beantworten. Vor Erstgesprächen recherchiert ein Agent das Unternehmen, und Antwortentwürfe gehen erst nach Freigabe hinaus. Wir empfehlen Ihnen Abläufe, die wir aus dem eigenen Betrieb kennen.'
      }
    ],
    faq: [
      { q: 'Was ist der Unterschied zu einem Chatbot?', a: 'Ein Chatbot beantwortet Fragen im Gespräch. Ein KI-Agent erledigt Aufgaben im Hintergrund über mehrere Schritte und Systeme hinweg, etwa vom Formular über das CRM bis zum Antwortentwurf.' },
      { q: 'Kann ein Agent Fehler machen?', a: 'Ja. Deshalb legen wir vorab fest, was er allein darf, testen mit echten Fällen und lassen alles, was nach aussen geht, von einem Menschen freigeben. Fehler werden protokolliert und gemeldet.' },
      { q: 'Welche Systeme brauchen wir dafür?', a: 'Meist reichen die vorhandenen: ein CRM, E-Mail und Ihre Website. Fehlt eine saubere Grundlage, etwa ein gepflegtes CRM, schaffen wir sie zuerst.' },
      { q: 'Wo liegen unsere Daten?', a: 'Das klären wir vor dem Start. Je nach Anforderung laufen Agenten bei Anbietern mit Rechenzentren in der Schweiz oder der EU oder auf eigener Infrastruktur. Welche Daten an ein KI-Modell gehen, halten wir schriftlich fest.' },
      { q: 'Was kostet ein KI-Agent?', a: 'Aufbau und Einführung bieten wir zum Festpreis für einen klar definierten Ablauf an. Dazu kommen laufende Kosten für die eingesetzten Dienste, die wir vorab offenlegen.' }
    ],
    cta: {
      headline: 'Welchen Ablauf könnte bei Ihnen ein Agent übernehmen?',
      subheadline: 'Bringen Sie einen Ablauf mit, der heute viel Handarbeit kostet. Wir prüfen gemeinsam, was ein Agent davon übernehmen kann und wo weiterhin ein Mensch entscheidet.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'martech-stack',
    hero: {
      headline: 'Weniger Tools, besser verbunden.',
      subheadline: 'Wir räumen Ihren MarTech-Stack auf, also alle Tools für Marketing und Vertrieb, und machen ihn bereit für KI-Agenten. Ziel sind weniger Lizenzen, Daten, die in allen Systemen übereinstimmen, und Schnittstellen, über die Agenten mit klaren Rechten arbeiten können.',
      ctaText: 'Stack-Check besprechen'
    },
    problem: {
      title: 'Viele Programme, wenig Zusammenhang',
      paragraphs: [
        'Über die Jahre kommt ein Tool zum anderen: CRM, Newsletter, Formulare, Terminbuchung, Werbekonten, Tracking und Tabellen. Jedes wurde aus gutem Grund eingeführt.',
        'Heute reden die Programme kaum miteinander. Daten werden von Hand kopiert, Zahlen widersprechen sich, und bei einigen Lizenzen weiss niemand mehr, wer sie nutzt.',
        'Wir schauen den ganzen Werkzeugkasten an und bringen ihn in eine Form, die Ihr Team versteht und weiterführen kann.'
      ]
    },
    leistet: {
      title: 'Drei Stufen',
      items: [
        { title: 'Stack-Check', desc: 'Wir erfassen alle Tools mit Kosten, Nutzung, Verantwortlichen und Datenflüssen. Sie erhalten eine klare Liste, was bleibt, was weg kann und was fehlt. Auf Wunsch ist der Check Teil der Performance-Analyse.' },
        { title: 'Aufräumen und verbinden', desc: 'Wir schalten überflüssige Tools ab, bereinigen Daten und verbinden die Systeme so, dass Daten nur einmal erfasst werden und jede Anfrage bis zum Auftrag nachvollziehbar ist. Als Projekt zum Festpreis.' },
        { title: 'Laufend betreiben', desc: 'Damit der Stack aufgeräumt bleibt, prüfen wir neue Tools, bevor sie gekauft werden, überwachen die Schnittstellen und überprüfen die Kosten einmal im Jahr. Als Teil der laufenden Begleitung.' },
        { title: 'Bereit für KI-Agenten', desc: 'Agenten brauchen saubere Daten, dokumentierte Schnittstellen und eng gefasste Zugänge. Wir prüfen, welche Tools das bieten, richten Rechte pro Agent ein und halten fest, welche Daten wohin dürfen.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        { title: 'Inventur', desc: 'Alle Tools, Lizenzen, Kosten und Verantwortlichen auf einer Liste, dazu die Datenflüsse zwischen den Systemen.' },
        { title: 'Zielbild', desc: 'Wir entscheiden gemeinsam, was bleibt, was ersetzt wird und was wegfällt, mit den Kosten vorher und nachher.' },
        { title: 'Umbau', desc: 'Systeme verbinden, Daten übernehmen und bereinigen, alte Tools sauber abschalten.' },
        { title: 'Übergabe', desc: 'Dokumentation und Einweisung, damit Ihr Team weiss, welches Tool wofür da ist.' },
        { title: 'Betrieb', desc: 'Auf Wunsch halten wir den Stack laufend sauber und prüfen jede neue Anschaffung.' }
      ]
    },
    extraSections: [
      {
        title: 'Was einen Stack KI-fähig macht',
        type: 'list',
        bullets: [
          'Kundendaten, die an einem Ort gepflegt und nicht mehrfach erfasst werden',
          'Schnittstellen (APIs) oder Automatisierungsplattformen, über die Agenten lesen und schreiben können',
          'Zugänge pro Agent mit nur den Rechten, die er braucht, und ein Protokoll jeder Aktion',
          'Klare Regeln, welche Personendaten an welches KI-Modell gehen dürfen'
        ]
      },
      {
        title: 'Typische Bausteine',
        type: 'grid',
        subtitle: 'Wir sind an kein Tool gebunden und arbeiten mit dem, was zu Ihnen passt.',
        items: [
          { title: 'CRM', desc: 'Kundendaten, Verkaufschancen und Aufgaben an einem Ort, als gemeinsame Grundlage für Marketing und Vertrieb.' },
          { title: 'Website und Formulare', desc: 'Anfragen landen mit Quelle und Angaben direkt im CRM, ohne Abtippen.' },
          { title: 'E-Mail und Newsletter', desc: 'Versand und Abmeldungen laufen mit dem CRM zusammen, nicht in einer separaten Liste.' },
          { title: 'Werbekonten', desc: 'Google, Meta und LinkedIn erhalten zurück, welche Anfragen zu Aufträgen wurden.' },
          { title: 'Tracking und Reporting', desc: 'Eine Auswertung mit denselben Zahlen für alle, von der Anfrage bis zum Auftrag.' },
          { title: 'Automatisierung', desc: 'n8n, Make oder Zapier verbinden die Systeme und übernehmen wiederkehrende Schritte.' }
        ]
      },
      {
        title: 'Lizenz, Open Source oder eigene Lösung?',
        type: 'text',
        text: 'Nicht jede Lösung muss eine Lizenz pro Person kosten. Für manche Aufgaben gibt es Open-Source-Software, die sich in der Schweiz oder der EU betreiben lässt, dafür aber Pflege braucht. Wir vergleichen die Varianten nach Kosten über mehrere Jahre, Aufwand und Datenschutz und empfehlen, was zu Ihrem Team passt. Dabei prüfen wir die Lizenz genau, denn nicht jedes Tool, das als Open Source bezeichnet wird, darf ohne Einschränkungen kommerziell genutzt werden.'
      }
    ],
    faq: [
      { q: 'Wie viele Tools braucht ein KMU?', a: 'Eine richtige Zahl gibt es nicht. Wichtiger ist, dass jedes Tool einen klaren Zweck hat, eine Person dafür verantwortlich ist und die Daten dorthin fliessen, wo sie gebraucht werden.' },
      { q: 'Müssen wir unser CRM wechseln?', a: 'Selten. Oft lässt sich das vorhandene CRM besser nutzen und mit den anderen Tools verbinden. Ein Wechsel lohnt sich erst, wenn das System Ihre Abläufe grundsätzlich nicht abbilden kann.' },
      { q: 'Was bringt ein Stack-Check?', a: 'Sie wissen danach, welche Tools Sie haben, was sie kosten, wer sie nutzt und wo Daten von Hand übertragen werden. Häufig zeigt sich dabei, dass sich Lizenzen einsparen lassen. Wie viel, hängt vom Einzelfall ab.' },
      { q: 'Können wir den Check selbst machen?', a: 'Ja, für einen ersten Überblick. In der Skill-Factory finden Sie die Checkliste «Stack-Inventur» kostenlos und ohne Anmeldung. Für das Zielbild und den Umbau lohnt sich ein Blick von aussen.' },
      { q: 'Was kostet das?', a: 'Wir arbeiten mit Festpreisen für ein klar definiertes Ergebnis, nicht nach Stunden. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit Umfang, Ergebnis und Preis.' }
    ],
    cta: {
      headline: 'Wie sieht Ihr Werkzeugkasten heute aus?',
      subheadline: 'Eine Liste Ihrer heutigen Tools reicht als Ausgangspunkt. Wir schauen gemeinsam, wo sie zusammenarbeiten und wo Daten noch von Hand übertragen werden.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'data-analytics',
    hero: {
      headline: 'Sehen, welche Kanäle Ihnen Kunden bringen.',
      subheadline: 'Wir richten Tracking und Berichte so ein, dass Sie sehen, welche Kampagnen Anfragen und Umsatz bringen und wo Budget ohne Wirkung bleibt.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Viele Daten, wenig Klarheit',
      paragraphs: [
        'Die meisten Unternehmen haben genug Daten, aber kein klares Bild davon, was ihr Marketing bringt.',
        'Es fehlen Berichte, die bei Entscheidungen helfen. Dashboards zeigen Klicks statt Umsatz, die Kennzahlen versteht kaum jemand, und welcher Kanal tatsächlich Kunden bringt, weiss niemand genau.',
        'Entschieden wird deshalb nach Bauchgefühl, und das Budget fliesst oft in die falschen Kanäle.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Sauberes Tracking',
          desc: 'Wir klären, was heute gemessen wird und was gemessen werden sollte, und richten eine verlässliche Grundlage ein: Google Analytics 4, Ereignis- und Conversion-Tracking, bei Bedarf Server-Side Tagging und die Anbindung an Ihr CRM.'
        },
        {
          title: 'Attribution',
          desc: 'Attribution ordnet einen Abschluss den Kanälen und Kontaktpunkten zu, die dazu beigetragen haben. Wir richten ein realistisches Modell ein, auf das Sie Budgetentscheide stützen können.'
        },
        {
          title: 'Dashboards',
          desc: 'Ein Dashboard, das Ihre wichtigsten Fragen in wenigen Minuten beantwortet, wahlweise wöchentlich, monatlich oder pro Kampagne.'
        },
        {
          title: 'Analyse des Anfrageprozesses',
          desc: 'Wir zeigen, wo Interessenten abspringen, wo Verkaufschancen stecken bleiben und wo sich Verbesserungen am meisten lohnen.'
        },
        {
          title: 'Wirkung des Marketings messen',
          desc: 'Sie sehen für Kampagnen und Kanäle, was sie bringen, ausgewiesen in Franken statt in Klicks.'
        },
        {
          title: 'A/B-Tests',
          desc: 'Wir testen Änderungen mit einer klaren Annahme vorab und mit genug Daten, damit das Ergebnis aussagekräftig ist.'
        },
        {
          title: 'Regelmässige Berichte',
          desc: 'Monats- und Quartalsberichte, die Ihrer Geschäftsleitung zeigen, wo Sie stehen und was als Nächstes Priorität hat.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Prüfung der bestehenden Daten',
          desc: 'Wir prüfen Tracking, CRM-Daten und bestehende Berichte und halten fest, was heute gemessen wird, was fehlt und wo Fehler stecken.'
        },
        {
          title: 'Kennzahlen festlegen',
          desc: 'Wir legen die wenigen Kennzahlen fest, die für Ihre Entscheidungen tatsächlich zählen, und lassen den Rest weg.'
        },
        {
          title: 'Einrichtung',
          desc: 'Wir setzen das Tracking um, verbinden die Datenquellen und bauen Dashboards, die technisch sauber und für Ihr Team verständlich sind.'
        },
        {
          title: 'Einführung im Team',
          desc: 'Ein Dashboard nützt nur, wenn es gelesen wird. Wir zeigen Ihrem Team, wie es die Zahlen liest und daraus Entscheidungen ableitet.'
        },
        {
          title: 'Laufende Auswertung',
          desc: 'Monatliche Auswertungen, die Veränderungen und Auffälligkeiten zeigen und konkrete Empfehlungen enthalten.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'Webanalyse', desc: 'Google Analytics 4, Matomo, Mixpanel' },
          { title: 'Dashboards', desc: 'Looker Studio, Power BI, HubSpot Dashboards' },
          { title: 'Attribution', desc: 'Google Analytics, Triple Whale, Northbeam' },
          { title: 'Tracking', desc: 'Google Tag Manager (auch serverseitig), Segment' },
          { title: 'CRM-Auswertungen', desc: 'HubSpot, Salesforce Reports, Pipedrive Insights' },
          { title: 'Testing', desc: 'VWO, Optimizely' }
        ]
      }
    ],
    faq: [
      {
        q: 'Brauchen wir eine Datenspezialistin oder einen Datenspezialisten im Team?',
        a: 'Nicht unbedingt. Wir richten die Berichte so ein, dass sie auch ohne Datenhintergrund verständlich sind. Bei komplexeren Fragen begleiten wir Sie weiter.'
      },
      {
        q: 'Unsere Daten sind ein Durcheinander. Lässt sich das beheben?',
        a: 'Ja, aber es braucht Zeit. Ein sauberes Tracking-Setup steht oft innert zwei bis vier Wochen. Bis genug saubere Daten für verlässliche Aussagen gesammelt sind, vergehen meist weitere Wochen, je nach Besucherzahl und Anzahl Anfragen.'
      },
      {
        q: 'Wie oft sollten wir die Zahlen anschauen?',
        a: 'Für laufende Kampagnen wöchentlich, für strategische Entscheide monatlich und pro Quartal. Wir helfen, einen Rhythmus festzulegen, der zu Ihrem Team passt.'
      },
      {
        q: 'Was, wenn wir noch gar kein Tracking haben?',
        a: 'Dann beginnen wir dort. Ohne verlässliche Messung lässt sich Marketing nicht sinnvoll steuern, deshalb hat ein sauberes Tracking-Setup Vorrang vor neuen Kampagnen.'
      }
    ],
    cta: {
      headline: 'Budgetentscheide auf Basis verlässlicher Zahlen.',
      subheadline: 'Wir schauen auf Ihre heutige Messung und Ihre Berichte und sagen Ihnen, was fehlt und was sich zuerst lohnt. Das Erstgespräch dauert rund 30 Minuten und ist kostenlos.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'demand-generation',
    hero: {
      headline: 'Regelmässig qualifizierte Anfragen für Ihren Vertrieb.',
      subheadline: 'Wir planen und betreuen Ihr Performance Marketing auf Google, LinkedIn und Meta. Ein KI-Agent überwacht die Kampagnen täglich und meldet Auffälligkeiten, wir verschieben das Budget dorthin, wo Anfragen entstehen.',
      ctaText: 'Kampagnen besprechen'
    },
    problem: {
      title: 'Viele Klicks, zu wenig passende Anfragen',
      paragraphs: [
        'Viele B2B-Unternehmen kennen diese Situation.',
        'Der Vertrieb verbringt viel Zeit damit, neue Kontakte zu suchen, statt zu verkaufen. Kampagnen bringen Klicks, aber kaum qualifizierte Anfragen. Und niemand weiss genau, welcher Kanal tatsächlich funktioniert.',
        'Selten liegt das an einem einzelnen Kanal. Meist passen Zielgruppe, Botschaft, Landingpage und Messung nicht zusammen, und dort setzen wir an.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie übernehmen',
      items: [
        {
          title: 'Zielgruppe schärfen',
          desc: 'Wir legen fest, welche Unternehmen und Entscheider Sie erreichen wollen und in welcher Phase ihrer Kaufentscheidung. Eine klar umrissene Zielgruppe bringt mehr als breite Reichweite.'
        },
        {
          title: 'Kanäle aufeinander abstimmen',
          desc: 'Jeder Kanal hat eine klare Aufgabe, ob LinkedIn Ads, Google Ads, Meta, Inhalte, E-Mail oder SEO. So arbeiten sie zusammen statt nebeneinander.'
        },
        {
          title: 'Den Weg zur Anfrage gestalten',
          desc: 'Interessenten sehen in jeder Phase die passende Botschaft, vom ersten Kontakt mit Ihrer Marke bis zur Anfrage.'
        },
        {
          title: 'Anzeigen testen',
          desc: 'Wir testen verschiedene Botschaften und Formate. Was bei Ihrer Zielgruppe ankommt, entscheiden die Zahlen, nicht der Geschmack.'
        },
        {
          title: 'Kampagnenbetreuung',
          desc: 'Wir betreuen und optimieren Ihre Google Ads, LinkedIn Ads und Meta Ads laufend. Das Budget fliesst dorthin, wo Anfragen entstehen.'
        },
        {
          title: 'Laufende Optimierung',
          desc: 'Wir werten jede Woche aus und berichten monatlich. Was funktioniert, bauen wir aus, was nicht funktioniert, stoppen wir.'
        },
        { title: 'Kampagnen-Agent', desc: 'Ein KI-Agent prüft täglich Kosten pro Anfrage, Suchbegriffe und Auslieferung und meldet Abweichungen mit einem Vorschlag. Budget- und Gebotsänderungen geben wir oder Ihr Team frei.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Ausgangslage verstehen',
          desc: 'Wir schauen uns Ihr Geschäft, Ihre Zielgruppe und Ihre heutigen Anfragen an, woher sie kommen und wo heute welche verloren gehen.'
        },
        {
          title: 'Lücken finden',
          desc: 'Wir suchen ungenutzte Kanäle, Zielgruppen, die Sie heute nicht erreichen, und die Stellen, an denen Interessenten abspringen.'
        },
        {
          title: 'Plan festlegen',
          desc: 'Wir legen Kanäle, Budget und Prioritäten fest. Ein Standardpaket gibt es nicht, der Plan richtet sich nach Ihrem Ziel.'
        },
        {
          title: 'Ergebnisse messen',
          desc: 'Wir messen Kosten pro Anfrage, Anfragequote, Verkaufschancen und Werbeumsatz. So sehen Sie jederzeit, was Ihr Budget bringt.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wo KI-Agenten mitarbeiten',
        type: 'list',
        bullets: [
          'Tägliche Überwachung von Kosten, Suchbegriffen und Auslieferung',
          'Entwürfe für Anzeigentexte und Varianten auf Basis Ihrer Positionierung',
          'Hinweise auf auszuschliessende Suchbegriffe und auffällige Kampagnen',
          'Was live geht und wie viel Budget fliesst, entscheidet ein Mensch'
        ]
      },
      {
        title: 'Kanäle, die wir einsetzen',
        type: 'grid',
        subtitle: 'Wir wählen die Kanäle danach, was zu Ihrer Zielgruppe passt.',
        items: [
          { title: 'LinkedIn Ads', desc: 'Für B2B gut geeignet, weil sich nach Unternehmensgrösse, Funktion und Branche eingrenzen lässt. Sinnvoll bei mittleren und längeren Verkaufszyklen.' },
          { title: 'Google Search Ads', desc: 'Für Interessenten, die bereits aktiv nach einer Lösung suchen. Oft der Kanal mit der höchsten Kaufabsicht.' },
          { title: 'Meta Ads (Facebook & Instagram)', desc: 'Für Bekanntheit, Retargeting und Zielgruppen, die noch nicht aktiv suchen. Meist günstigere Reichweite, abgestimmt mit den anderen Kanälen.' },
          { title: 'Google Display', desc: 'Für Wiedererkennung und Retargeting. Ihre Marke bleibt sichtbar, während Interessenten Angebote vergleichen.' },
          { title: 'Inhalte & SEO', desc: 'Langfristige Sichtbarkeit bei Google mit Inhalten, die passende Besucher anziehen.' },
          { title: 'E-Mail & Newsletter', desc: 'Bestehende Kontakte weiterbegleiten und eine eigene Leserschaft aufbauen, unabhängig von Plattform-Algorithmen.' }
        ]
      }
    ],
    faq: [
      {
        q: 'Wann sehen wir erste Resultate?',
        a: 'Bei Google Ads sehen Sie die ersten Klicks und Anfragen meist innert Tagen. Belastbare Daten, auf die man Entscheidungen stützen kann, liegen in der Regel nach 4–8 Wochen vor. Bei LinkedIn und längeren Verkaufszyklen kann es länger dauern. SEO und Inhalte brauchen mehrere Monate, bis sie regelmässig Anfragen bringen.'
      },
      {
        q: 'Welche Kanäle sind für uns richtig?',
        a: 'Das hängt von Ihrer Zielgruppe und Ihrem Verkaufszyklus ab. Suchen Ihre Kunden aktiv nach Ihrem Angebot, ist Google meist der erste Kanal. Müssen Sie bestimmte Funktionen in bestimmten Firmen erreichen, eher LinkedIn. Wir besprechen das im Erstgespräch.'
      },
      {
        q: 'Brauchen wir ein grosses Budget?',
        a: 'Nein, aber ein passendes. Das Werbebudget muss genug Klicks ermöglichen, damit nach einigen Wochen aussagekräftige Daten vorliegen. Was das bei Ihnen bedeutet, hängt von den Klickpreisen in Ihrer Branche ab. Das rechnen wir im Erstgespräch gemeinsam durch, bevor Sie etwas ausgeben.'
      },
      {
        q: 'Was unterscheidet Sie von einer Werbeagentur?',
        a: 'Wir messen den Erfolg an Anfragen und Verkaufschancen, nicht an Klicks und Impressionen. Kampagnen, Landingpages, Tracking und die Übergabe an Ihren Vertrieb betreut Yathur Nathan persönlich.'
      }
    ],
    cta: {
      headline: 'Mehr passende Anfragen für Ihren Vertrieb.',
      subheadline: 'Wir schauen auf Ihre heutigen Kampagnen und Anfragen und skizzieren, welche Kanäle und welches Budget für Sie sinnvoll wären.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'growth-strategy',
    hero: {
      headline: 'Ein klarer Plan, wie Sie neue Kunden gewinnen.',
      subheadline: 'Wir legen mit Ihnen fest, wen Sie ansprechen, womit Sie überzeugen und über welche Kanäle Sie Ihre Wunschkunden erreichen. KI-Agenten übernehmen dabei die Markt- und Wettbewerbsrecherche, die Entscheidungen treffen Sie.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Wachstum, das eher zufällig entsteht',
      paragraphs: [
        'Viele Unternehmen wachsen, ohne genau zu wissen, warum.',
        'Ein Kanal funktioniert, eine Kampagne bringt Anfragen, aber es steht kein Plan dahinter.',
        'Dadurch lässt sich Wachstum schlecht planen und kaum wiederholen.',
        'Spätestens wenn ein Kanal nachlässt oder das Budget steigen soll, fehlt die Grundlage für den Entscheid.'
      ]
    },
    leistet: {
      title: 'Was die Strategiearbeit umfasst',
      items: [
        {
          title: 'Wunschkunden festlegen',
          desc: 'Wer sind Ihre besten Kunden? Branche und Grösse sind nur der Anfang. Wichtiger ist, wer das Problem hat, das Sie lösen, und bereit ist, dafür zu bezahlen.'
        },
        {
          title: 'Positionierung',
          desc: 'Warum sollte jemand Sie wählen und nicht die Konkurrenz? Wir arbeiten ein klares Unterscheidungsmerkmal heraus, das Ihr Team versteht und weitergeben kann.'
        },
        {
          title: 'Vermarktungsplan',
          desc: 'Wir legen Kanäle, Botschaften und Reihenfolge fest, in einem realistischen Plan mit Meilensteinen statt eines langen Berichts, der in der Schublade landet.'
        },
        {
          title: 'Prioritäten setzen',
          desc: 'Nicht jede Massnahme bringt gleich viel. Wir zeigen, wo Ihr Budget und Ihre Zeit am meisten bewirken.'
        },
        {
          title: 'Kennzahlen festlegen',
          desc: 'Wir legen wenige Kennzahlen fest, an denen Sie den Fortschritt ablesen, etwa Anfragen pro Monat oder Kosten pro Neukunde.'
        },
        { title: 'KI-gestützte Recherche', desc: 'Agenten sammeln und verdichten Informationen zu Markt, Mitbewerbern und Zielkunden, etwa Angebote, Preise und Positionierungen. Wir prüfen die Ergebnisse und nutzen sie als Grundlage für den Workshop.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (Woche 1–2)',
          desc: 'Wir schauen uns Markt, Mitbewerber, bestehende Kunden und bisherige Anfragen an und sehen, wo Sie schon wachsen und wo Chancen liegen bleiben.'
        },
        {
          title: 'Strategie-Workshop (Woche 2–3)',
          desc: 'Gemeinsam erarbeiten wir Zielkunden, Positionierung und Prioritäten. Ihr Team bringt das Wissen über Markt und Kunden ein, wir die Struktur.'
        },
        {
          title: 'Wachstumsplan (Woche 3–4)',
          desc: 'Sie erhalten einen klaren, umsetzbaren Plan mit Prioritäten, Zeitplan und Kennzahlen, mit dem Ihr Team direkt arbeiten kann.'
        },
        {
          title: 'Begleitung der Umsetzung (laufend)',
          desc: 'Wir begleiten die Umsetzung, helfen beim Priorisieren und passen den Plan an, wenn sich Ihre Situation ändert.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wo KI in der Strategiearbeit mitarbeitet',
        type: 'list',
        bullets: [
          'Recherche zu Markt, Mitbewerbern und Zielkunden vor dem Workshop',
          'Auswertung bestehender Anfragen, Offerten und Kundendaten nach Mustern',
          'Erste Entwürfe für Zielkundenprofile und Kernbotschaften, die wir gemeinsam schärfen',
          'Prioritäten, Budget und Plan legen Sie mit uns fest, nicht ein Modell'
        ]
      },
      {
        title: 'Was Sie danach wissen',
        type: 'list',
        subtitle: 'Nach der Strategiearbeit wissen Sie:',
        bullets: [
          'Wer Ihr Wunschkunde ist, klar beschrieben',
          'Was Sie von Mitbewerbern unterscheidet, in einfachen Worten',
          'Welche Kanäle und Massnahmen Vorrang haben',
          'An welchen Kennzahlen Sie Fortschritt messen',
          'Was der nächste konkrete Schritt ist'
        ],
        text: 'So wird aus zufälligem Wachstum ein Plan, den Sie steuern können.'
      }
    ],
    faq: [
      {
        q: 'Brauchen wir wirklich eine Strategie, bevor wir Massnahmen umsetzen?',
        a: 'Wenn Sie planbar wachsen wollen, ja. Einzelne Massnahmen können auch ohne Strategie funktionieren, lassen sich aber schwer wiederholen und ausbauen. Mit einem klaren Plan wissen Sie bei jeder weiteren Massnahme, wozu sie dient.'
      },
      {
        q: 'Wie lange dauert die Strategiearbeit?',
        a: 'Die erste Phase bis zum fertigen Plan dauert in der Regel drei bis vier Wochen. Auf Ihrer Seite rechnen Sie mit einem Workshop und einigen kürzeren Abstimmungen. Die Begleitung danach richtet sich nach Ihrem Bedarf, monatlich oder pro Quartal.'
      },
      {
        q: 'Was ist der Unterschied zu einer klassischen Strategieberatung?',
        a: 'Wir erarbeiten die Strategie und setzen sie auch um, von Kampagnen über Landingpages bis zum Tracking. Sie erhalten keinen Bericht, mit dem Sie danach allein bleiben.'
      },
      {
        q: 'Was kostet die Strategiearbeit?',
        a: 'Das hängt vom Umfang ab, zum Beispiel davon, wie viele Märkte, Angebote oder Zielgruppen einbezogen werden. Nach dem Erstgespräch erhalten Sie ein Angebot mit Festpreis für die erste Phase.'
      }
    ],
    cta: {
      headline: 'Machen Sie Ihre Neukundengewinnung planbar.',
      subheadline: 'Wir besprechen, woher Ihre Kunden heute kommen und ob eine Strategiephase der richtige nächste Schritt ist. Rund 30 Minuten, kostenlos.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'lead-generation',
    hero: {
      headline: 'Aus Website-Besuchern werden Anfragen.',
      subheadline: 'Wir sorgen dafür, dass Interessenten Sie bei Google und in KI-Assistenten wie ChatGPT finden und sich melden. Dafür setzen wir SEO, GEO, Inhalte und Landingpages ein, und mit Lead-Scoring sieht Ihr Vertrieb, welche Anfragen Vorrang haben.',
      ctaText: 'Ausgangslage besprechen'
    },
    problem: {
      title: 'Besucher ja, Anfragen kaum',
      paragraphs: [
        'Viele Unternehmen haben Besucher auf der Website, aber kaum Anfragen, oder die Anfragen passen nicht. Oft fehlt schlicht ein Weg, aus Interesse eine konkrete Anfrage zu machen.',
        'Inhalte werden erstellt, aber sie werden bei Google nicht gefunden und bringen keine messbaren Ergebnisse.',
        'Was fehlt, ist ein klarer Weg vom ersten Besuch bis zur Anfrage, mit einem konkreten nächsten Schritt auf jeder wichtigen Seite.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Sichtbarkeit bei Google',
          desc: 'Inhalte und SEO, die Sie bei passenden Suchanfragen sichtbar machen. Wir wählen Suchbegriffe, hinter denen eine echte Kaufabsicht steht, auch wenn das Suchvolumen dann kleiner ist.'
        },
        {
          title: 'Wege zur Anfrage',
          desc: 'Landingpages, nützliche Angebote und klare Handlungsaufforderungen. Neben «Kontakt aufnehmen» gibt es Schritte, die zur jeweiligen Phase der Entscheidung passen.'
        },
        {
          title: 'Nützliche Angebote',
          desc: 'Leitfäden, Checklisten, Rechner oder Selbsttests, die für Ihre Zielgruppe echten Nutzen haben und gegen Kontaktangaben heruntergeladen werden.'
        },
        {
          title: 'Anfragen bewerten',
          desc: 'Beim Lead-Scoring erhält jede Anfrage Punkte nach Ihren Kriterien, etwa Branche, Firmengrösse oder Verhalten auf der Website. So steckt Ihr Vertrieb seine Zeit in die richtigen Gespräche.'
        },
        {
          title: 'SEO-Grundlagen',
          desc: 'Technisches SEO, Keyword-Planung und thematisch verknüpfte Inhalte. So entsteht Sichtbarkeit, die langfristig Anfragen bringt, ohne für jeden Klick zu bezahlen.'
        },
        {
          title: 'Inhalte mit Plan',
          desc: 'Statt einzelner Blogartikel entsteht ein Themenplan, der Interessenten vom ersten Kontakt bis zur Entscheidung begleitet.'
        },
        { title: 'Sichtbarkeit in KI-Antworten (GEO)', desc: 'Generative Engine Optimization heisst, Inhalte so aufzubereiten, dass KI-Assistenten wie ChatGPT, Perplexity oder die KI-Übersichten von Google Ihr Angebot verstehen und korrekt wiedergeben. Dazu gehören klare Definitionen, strukturierte Daten und Fachinhalte mit Quellen.' },
        { title: 'KI-gestützte Vorqualifizierung', desc: 'Neue Anfragen werden automatisch mit Firmendaten angereichert und nach Ihren Kriterien eingeordnet. Ihr Vertrieb sieht die Begründung und kann sie jederzeit ändern.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Zielgruppe verstehen',
          desc: 'Wir klären, wer Ihre Wunschkunden sind, welche Probleme sie lösen wollen, wonach sie suchen und welche Inhalte ihnen weiterhelfen.'
        },
        {
          title: 'Bestehende Inhalte prüfen',
          desc: 'Wir prüfen, welche Inhalte es bereits gibt, welche gefunden werden und welche Anfragen bringen. Darauf bauen wir auf und schliessen die Lücken.'
        },
        {
          title: 'Keyword- und Themenplan',
          desc: 'Wir legen Themen, Suchbegriffe und Formate fest und priorisieren Suchbegriffe, hinter denen eine Kaufabsicht steht.'
        },
        {
          title: 'Inhalte erstellen und optimieren',
          desc: 'Wir schreiben Inhalte für Menschen und bereiten sie für Suchmaschinen auf, mit klarer Struktur, interner Verlinkung und sauberer Technik.'
        },
        {
          title: 'Anfragequote verbessern',
          desc: 'Wir testen Landingpages und Handlungsaufforderungen und werten aus, welche Angebote Anfragen bringen und welche nicht.'
        },
        {
          title: 'Bericht',
          desc: 'Jeden Monat sehen Sie, welche Inhalte gefunden werden, welche Anfragen bringen und wo Lücken sind. Danach richten wir die nächsten Schritte aus.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wo KI mitarbeitet',
        type: 'list',
        bullets: [
          'Themen- und Suchbegriff-Recherche, auch für Fragen, die Menschen KI-Assistenten stellen',
          'Entwürfe für Fachinhalte, die wir prüfen, ergänzen und mit Ihrem Fachwissen schärfen',
          'Regelmässige Prüfung, ob und wie KI-Assistenten Ihr Unternehmen nennen',
          'Anreicherung und Einordnung neuer Anfragen vor der Übergabe an den Vertrieb'
        ]
      },

      {
        title: 'Zeitrahmen',
        type: 'text',
        text: 'Erste Platzierungen bei Google gibt es meist nach drei bis sechs Monaten, nennenswert mehr Anfragen eher nach sechs bis neun Monaten. Organische Sichtbarkeit braucht Zeit. Wer schneller Anfragen braucht, ergänzt SEO mit Google Ads.'
      }
    ],
    faq: [
      {
        q: 'Was ist GEO, und ersetzt es SEO?',
        a: 'GEO steht für Generative Engine Optimization. Ziel ist, dass KI-Assistenten Ihr Angebot korrekt verstehen und nennen. GEO baut auf SEO auf und ersetzt es nicht, denn saubere Technik, klare Struktur und gute Fachinhalte helfen beiden. Eine Nennung in KI-Antworten kann niemand garantieren, klare und belegte Inhalte verbessern aber die Grundlage.'
      },
      {
        q: 'Wie lange dauert es, bis über Google organisch Anfragen kommen?',
        a: 'Erste Platzierungen sehen Sie meist nach drei bis sechs Monaten, nennenswert mehr Anfragen eher nach sechs bis neun Monaten. Das hängt stark davon ab, wie umkämpft Ihre Suchbegriffe sind und wie stark Ihre Website heute schon ist. Wer früher Anfragen braucht, setzt parallel auf Google Ads.'
      },
      {
        q: 'Was, wenn unsere Branche sehr spezialisiert ist?',
        a: 'Das ist oft ein Vorteil. In spezialisierten Nischen gibt es weniger Konkurrenz, und Fachinhalte werden häufig schneller gefunden als Inhalte zu breiten Suchbegriffen. Dafür ist das Suchvolumen kleiner, was wir bei der Planung berücksichtigen.'
      },
      {
        q: 'Können wir das nicht selbst machen?',
        a: 'Doch. Rechnen Sie aber mit mehreren Stunden pro Woche für Planung, Schreiben, Technik und Auswertung, und zwar über Monate. Wenn Sie diese Zeit lieber in Ihr Kerngeschäft stecken, übernehmen wir das.'
      },
      {
        q: 'Brauchen wir zusätzlich bezahlte Werbung?',
        a: 'Nicht zwingend. Kombiniert funktioniert es aber meist besser: Werbung bringt Anfragen ab den ersten Wochen, Inhalte und SEO bauen langfristig Sichtbarkeit auf.'
      }
    ],
    cta: {
      headline: 'Mehr Anfragen über Ihre Website.',
      subheadline: 'Wir schauen, wofür Sie bei Google heute gefunden werden und an welchen Stellen Ihrer Website Anfragen verloren gehen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'marketing-automation',
    hero: {
      headline: 'Keine Anfrage mehr, die im Posteingang liegen bleibt.',
      subheadline: 'Wir richten Marketing Automation und CRM so ein, dass Interessenten automatisch weiterbegleitet werden und Ihr Vertrieb sieht, wer bereit für ein Gespräch ist. KI fasst Anfragen zusammen, ergänzt Daten und bereitet Folge-E-Mails vor.',
      ctaText: 'CRM und Abläufe besprechen'
    },
    problem: {
      title: 'Anfragen kommen rein und versanden',
      paragraphs: [
        'Eine Anfrage trifft ein, und dann passiert nichts. Niemand fasst nach, weil nicht geregelt ist, wer zuständig ist.',
        'Oder vieles läuft von Hand, kostet Zeit und ist fehleranfällig. Die Tools sind nicht miteinander verbunden, und die Daten im CRM sind veraltet oder lückenhaft.',
        'So gehen Interessenten verloren, die eigentlich kaufen würden.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie einrichten',
      items: [
        {
          title: 'Interessenten automatisch weiterbegleiten',
          desc: 'Automatische E-Mail-Abläufe, die Kontakten passende Inhalte schicken, je nach Verhalten, Interesse und Stand der Entscheidung. Das wirkt persönlich und nicht wie ein Massenversand.'
        },
        {
          title: 'Kontakte bewerten',
          desc: 'Lead-Scoring im CRM, also eine Punktebewertung nach Profil und Verhalten, zeigt, welche Kontakte bereit für ein Gespräch sind. Ihr Vertrieb meldet sich zur richtigen Zeit bei den richtigen Leuten.'
        },
        {
          title: 'CRM aufbauen oder aufräumen',
          desc: 'Ein CRM mit klarer Struktur, eindeutigen Verkaufsphasen in der Pipeline und automatischer Datenpflege, damit Ihr Team es im Alltag nutzt.'
        },
        {
          title: 'Übergabe an den Vertrieb',
          desc: 'Klare Regeln, wann eine Anfrage vom Marketing an den Vertrieb geht. So geht keine Anfrage mehr unter.'
        },
        {
          title: 'Tools verbinden',
          desc: 'Wir verbinden Ihre bestehenden Tools wie HubSpot, Salesforce, Pipedrive, Mailchimp oder Intercom. Die Daten fliessen automatisch, niemand muss sie abtippen.'
        },
        {
          title: 'Automatische Berichte',
          desc: 'Dashboards zeigen Ihnen regelmässig, was die automatisierten Abläufe bringen, ohne dass jemand Zahlen zusammensuchen muss.'
        },
        { title: 'KI im CRM', desc: 'Eingehende Anfragen werden zusammengefasst, Firmen- und Kontaktdaten ergänzt und Dubletten erkannt. Entwürfe für Folge-E-Mails liegen bereit, versendet wird erst nach Freigabe.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Bestandsaufnahme (Woche 1)',
          desc: 'Wir erfassen die heutigen Tools und Abläufe, wo Anfragen verloren gehen und was von Hand läuft, obwohl es automatisch laufen könnte.'
        },
        {
          title: 'Konzept (Woche 2)',
          desc: 'Wir planen die E-Mail-Strecken, die CRM-Struktur und die Kriterien für das Lead-Scoring.'
        },
        {
          title: 'Umsetzung (Woche 3–6)',
          desc: 'Wir bauen die Abläufe auf, verbinden die Tools und richten das CRM ein. Alles wird getestet, bevor es live geht.'
        },
        {
          title: 'Übergabe und Schulung (Woche 6–8)',
          desc: 'Ihr Team lernt das System kennen, mit Dokumentation und Feedback-Runden, damit es im Alltag auch genutzt wird.'
        },
        {
          title: 'Optimierung (laufend)',
          desc: 'Anhand der Zahlen passen wir Abläufe an, testen E-Mail-Strecken und schärfen die Bewertungskriterien nach.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wo KI mitarbeitet',
        type: 'list',
        bullets: [
          'Zusammenfassung und Einordnung neuer Anfragen direkt im CRM',
          'Ergänzen fehlender Firmendaten und Erkennen von Dubletten',
          'Entwürfe für Folge-E-Mails und Nachfass-Nachrichten im Stil Ihres Unternehmens',
          'Regeln, Freigaben und Datenschutz legen wir vor dem Start schriftlich fest'
        ]
      },
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'HubSpot', desc: 'Marketing- und Vertriebsautomatisierung in einem System, verbreitet bei KMU.' },
          { title: 'Salesforce', desc: 'Für Unternehmen mit komplexeren Vertriebsstrukturen.' },
          { title: 'Pipedrive', desc: 'Schlankes CRM für kleinere Vertriebsteams.' },
          { title: 'ActiveCampaign', desc: 'Marketing Automation mit gutem Preis-Leistungs-Verhältnis.' },
          { title: 'Make / Zapier', desc: 'Verbindungen zwischen Tools ohne Programmierung.' },
          { title: 'Brevo / Mailchimp', desc: 'E-Mail-Marketing für einfachere Anforderungen.' }
        ],
        text: 'Wir arbeiten mit Ihren bestehenden Tools. Ein Wechsel ist nur dann ein Thema, wenn er sich wirklich lohnt.'
      },
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Ihr Vertrieb erhält vorqualifizierte Anfragen, ohne nachfragen zu müssen.',
          'Interessenten werden regelmässig und passend weiterbegleitet.',
          'Ihr Marketing-Team hat weniger Handarbeit.',
          'Die Daten im CRM sind aktuell und verlässlich.',
          'Mehr Anfragen lassen sich bearbeiten, ohne dass der Aufwand im gleichen Mass steigt.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wir haben bereits ein CRM. Arbeiten Sie damit?',
        a: 'Ja. Wir bauen auf Ihrem bestehenden System auf. Ziel ist, das Vorhandene besser zu nutzen, nicht alles zu ersetzen.'
      },
      {
        q: 'Wie aufwendig ist Marketing Automation?',
        a: 'Das hängt von Ihrer Ausgangslage ab. Wir starten mit wenigen, einfachen Abläufen und bauen nur dort aus, wo es etwas bringt. Auf Ihrer Seite braucht es vor allem in der Konzeptphase Zeit für Abstimmungen und Freigaben.'
      },
      {
        q: 'Brauchen wir ein grosses Team, um das zu betreiben?',
        a: 'Nein. Automatisierung soll ja gerade einem kleinen Team helfen, mehr zu schaffen. Die Abläufe laufen auch dann, wenn nicht täglich jemand daran arbeitet. Einmal im Monat sollte aber jemand die Zahlen anschauen.'
      },
      {
        q: 'Wie lange dauert es, bis das System läuft?',
        a: 'Die Grundstruktur ist meist nach vier bis acht Wochen in Betrieb. Bis die Abläufe gut eingespielt sind und Sie verlässlich sehen, was sie bringen, vergehen in der Regel mehrere Monate, weil genug Kontakte die Abläufe durchlaufen müssen.'
      }
    ],
    cta: {
      headline: 'Interessenten automatisch weiterbegleiten, statt sie zu verlieren.',
      subheadline: 'Erzählen Sie uns, was heute mit einer neuen Anfrage passiert. Wir skizzieren, wie automatische Abläufe und CRM das bei Ihnen regeln könnten.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'revenue-operations',
    hero: {
      headline: 'Marketing, Vertrieb und Kundenbetreuung arbeiten mit denselben Zahlen.',
      subheadline: 'Wenn Ihre Teams mit unterschiedlichen Daten und Tools arbeiten, gehen Anfragen und Umsatz verloren. Wir sorgen dafür, dass Abläufe, Daten und Kennzahlen zusammenpassen, und setzen Agenten ein, die Daten prüfen und Auffälligkeiten melden. Im Englischen heisst das Revenue Operations, kurz RevOps.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Jedes Team misst etwas anderes',
      paragraphs: [
        'Viele Wachstumsprobleme liegen weder im Marketing noch im Vertrieb, sondern in den Abläufen dazwischen.',
        'Die Teams arbeiten nebeneinander her, die Daten liegen verstreut in verschiedenen Tools, und Übergaben sind nicht geregelt. Das Marketing zählt Kontakte, der Vertrieb Abschlüsse, die Kundenbetreuung Kündigungen. Den Umsatz als Ganzes betrachtet niemand.',
        'Das führt zu Doppelspurigkeiten und verlorenen Verkaufschancen, und das Wachstum lässt sich kaum vorhersagen.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Gemeinsame Kennzahlen',
          desc: 'Wir legen die Kennzahlen fest, mit denen sich Wachstum steuern lässt, etwa qualifizierte Anfragen, Verkaufschancen, Kosten pro Neukunde und Kundenwert über die Zeit.'
        },
        {
          title: 'Einheitliche Abläufe',
          desc: 'Marketing, Vertrieb und Kundenbetreuung arbeiten nach abgestimmten Abläufen. Übergaben sind geregelt, und kein Kunde fällt durchs Raster.'
        },
        {
          title: 'Tool-Landschaft aufräumen',
          desc: 'Wir prüfen, welche Tools genutzt werden, welche sich doppeln und welche fehlen, und sorgen dafür, dass sie sauber verbunden sind.'
        },
        {
          title: 'Saubere Daten',
          desc: 'Wir bringen Tracking, CRM-Daten und Attribution in Ordnung, damit Prognosen und Berichte auf belastbaren Zahlen beruhen.'
        },
        {
          title: 'Umsatzprognose und Verkaufschancen',
          desc: 'Wir richten realistische Umsatzprognosen ein und führen eine regelmässige Durchsicht der Pipeline ein, also der offenen Verkaufschancen.'
        },
        {
          title: 'Berichte',
          desc: 'Ein Dashboard zeigt jede Woche, wie viele Verkaufschancen offen sind, wo Sie gegenüber den Zielen stehen und was Vorrang hat.'
        },
        { title: 'Agenten für Daten und Pipeline', desc: 'Agenten prüfen die CRM-Daten auf Lücken und Widersprüche, erkennen Verkaufschancen, die seit Wochen stillstehen, und fassen die Pipeline für die Geschäftsleitung zusammen. Korrekturen gibt Ihr Team frei.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Bestandsaufnahme (Woche 1–2)',
          desc: 'Wir analysieren die Abläufe und prüfen Tools und Datenqualität. Wir halten den heutigen Stand fest und zeigen die grössten Lücken.'
        },
        {
          title: 'Konzept (Woche 2–4)',
          desc: 'Wir beschreiben, wie es künftig laufen soll: Abläufe, Verbindungen zwischen Tools, Kennzahlen und Berichte, verständlich für Ihr Team.'
        },
        {
          title: 'Umsetzung (Woche 4–12)',
          desc: 'Wir setzen schrittweise um und beginnen mit den Bereichen, die am meisten bringen, statt alles auf einmal anzugehen.'
        },
        {
          title: 'Einführung und Schulung (laufend)',
          desc: 'Wir begleiten die Einführung mit Schulung, Dokumentation und regelmässigen Abstimmungen, damit die neuen Abläufe genutzt werden.'
        },
        {
          title: 'Laufende Verbesserung',
          desc: 'Wir überprüfen Abläufe und Systeme regelmässig und passen sie anhand von Daten und Rückmeldungen an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wo Agenten mitarbeiten',
        type: 'list',
        bullets: [
          'Laufende Prüfung der Datenqualität im CRM',
          'Hinweise auf stehende Verkaufschancen und überfällige Nachfass-Schritte',
          'Wöchentliche Zusammenfassung der Pipeline mit den wichtigsten Veränderungen',
          'Jeder Schritt wird protokolliert, Zahlen und Entscheide bleiben nachvollziehbar'
        ]
      },
      {
        title: 'Warum sich das früh lohnt',
        type: 'text',
        text: 'Je früher Marketing, Vertrieb und Kundenbetreuung mit denselben Daten und Abläufen arbeiten, desto einfacher ist die Umstellung. Mit wenigen Mitarbeitenden und wenigen Tools ist das in Wochen erledigt. Wer wartet, bis die Datenlage unübersichtlich geworden ist, braucht für das Aufräumen deutlich mehr Zeit und Geld.'
      },
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'CRM', desc: 'HubSpot, Salesforce, Pipedrive' },
          { title: 'Marketing Automation', desc: 'HubSpot, ActiveCampaign, Marketo' },
          { title: 'Analyse', desc: 'Google Analytics 4, Looker Studio, Tableau' },
          { title: 'Verbindungen', desc: 'Make, Zapier, native Schnittstellen' },
          { title: 'Berichte', desc: 'Looker Studio, HubSpot Reports, Salesforce Reports' },
          { title: 'Weitere', desc: 'je nach Ihren bestehenden Tools' }
        ]
      }
    ],
    faq: [
      {
        q: 'Ab welcher Unternehmensgrösse ist das sinnvoll?',
        a: 'Sobald Marketing, Vertrieb und Kundenbetreuung von unterschiedlichen Personen betreut werden. Das kann schon bei fünf Mitarbeitenden der Fall sein. Je früher die Grundlagen stehen, desto einfacher.'
      },
      {
        q: 'Wie lange dauert die Umsetzung?',
        a: 'Die Grundstruktur steht in der Regel nach acht bis zwölf Wochen. Bis alle Abläufe eingespielt sind und die Zahlen verlässlich sind, vergehen meist mehrere Monate mit laufenden Anpassungen.'
      },
      {
        q: 'Brauchen wir dafür neue Tools?',
        a: 'Oft nicht. Meist lassen sich die bestehenden Tools besser nutzen. Wenn ein neues Tool nötig ist, empfehlen wir es aufgrund Ihrer Anforderungen.'
      },
      {
        q: 'Ist das nicht einfach ein IT-Projekt?',
        a: 'Nein. Die Technik ist nur das Mittel. Entscheidend ist, wie Marketing, Vertrieb und Kundenbetreuung zusammenarbeiten, damit mehr Anfragen zu Kunden werden.'
      }
    ],
    cta: {
      headline: 'Ein gemeinsames Bild für Marketing, Vertrieb und Geschäftsleitung.',
      subheadline: 'Wir verfolgen mit Ihnen den Weg einer Anfrage bis zum Auftrag durch Ihre Abläufe und Tools und zeigen, wo die grössten Lücken liegen. Rund 30 Minuten, kostenlos.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'sales-enablement',
    hero: {
      headline: 'Ihr Vertrieb geht besser vorbereitet in jedes Gespräch.',
      subheadline: 'Ihr Vertrieb geht vorbereitet in jedes Gespräch. Wir erarbeiten Unterlagen und Abläufe, die im Verkauf tatsächlich helfen, und ein KI-Agent recherchiert vor jedem Termin das Unternehmen und fasst das Wichtigste zusammen.',
      ctaText: 'Vertriebsprozess besprechen'
    },
    problem: {
      title: 'Marketing und Vertrieb arbeiten aneinander vorbei',
      paragraphs: [
        'In vielen Unternehmen arbeiten Marketing und Vertrieb nebeneinander her.',
        'Das Marketing erstellt Unterlagen, die der Vertrieb nicht nutzt. Der Vertrieb klagt über unpassende Anfragen, das Marketing darüber, dass Anfragen liegen bleiben. Wie die Übergabe genau laufen soll, weiss niemand.',
        'Verkaufszyklen werden länger, Verkaufschancen gehen verloren, und auf beiden Seiten wächst der Frust.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie erarbeiten',
      items: [
        {
          title: 'Gemeinsames Verständnis',
          desc: 'Marketing und Vertrieb legen gemeinsam fest, was eine qualifizierte Anfrage ist und welche Kennzahlen für beide zählen.'
        },
        {
          title: 'Unterlagen für den Verkauf',
          desc: 'Referenzbeispiele, Vergleiche mit Mitbewerbern, Angebotsvorlagen, Antworten auf häufige Einwände. Unterlagen, die der Vertrieb in echten Gesprächen nutzt.'
        },
        {
          title: 'Klare Übergabe',
          desc: 'Verbindliche Abmachungen, wann und mit welchen Informationen eine Anfrage an den Vertrieb geht und wie schnell sich der Vertrieb meldet.'
        },
        {
          title: 'Verkaufsprozess analysieren',
          desc: 'Wir werten aus, in welcher Phase und aus welchen Gründen Abschlüsse verloren gehen, und zeigen, wo das Marketing den Vertrieb besser unterstützen kann.'
        },
        {
          title: 'Einarbeitung neuer Mitarbeitender',
          desc: 'Wir stellen die Unterlagen zusammen, mit denen sich neue Verkäuferinnen und Verkäufer schneller einarbeiten: Produktübersichten, Zielgruppenbeschreibungen, Antworten auf Einwände.'
        },
        {
          title: 'Gewonnene und verlorene Abschlüsse auswerten',
          desc: 'Warum werden Aufträge gewonnen, warum verloren? Die Erkenntnisse fliessen in Botschaften, Positionierung und Verkaufsargumente zurück.'
        },
        { title: 'Recherche vor dem Gespräch', desc: 'Vor einem Termin recherchiert ein KI-Agent das Unternehmen, die Gesprächspartner und aktuelle Themen und fasst das Wichtigste auf einer Seite zusammen. So arbeiten wir auch im eigenen Betrieb.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (Woche 1–2)',
          desc: 'Wir schauen uns den heutigen Verkaufsprozess an und führen Gespräche mit Marketing und Vertrieb, um zu sehen, wo es hakt.'
        },
        {
          title: 'Workshop (Woche 2–3)',
          desc: 'Marketing und Vertrieb legen gemeinsam Zielgruppen, Kriterien für Anfragen, Übergabe und Kennzahlen fest.'
        },
        {
          title: 'Unterlagen erstellen (Woche 3–8)',
          desc: 'Wir erarbeiten die wichtigsten Verkaufsunterlagen, abgestimmt auf die Situationen, in denen Ihr Vertrieb sie braucht.'
        },
        {
          title: 'Abläufe umsetzen (laufend)',
          desc: 'Wir dokumentieren die Übergaben, führen sie ein, passen CRM-Felder an und etablieren feste Routinen.'
        },
        {
          title: 'Messen und anpassen',
          desc: 'Wir messen, ob und wie schnell Anfragen bearbeitet werden und mit welchem Ergebnis, und passen die Abläufe daran an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wo KI mitarbeitet',
        type: 'list',
        bullets: [
          'Recherche zu Firma und Gesprächspartnern vor jedem Termin',
          'Entwürfe für Offerten-Texte und Antworten auf häufige Einwände',
          'Zusammenfassung von Gesprächsnotizen und nächsten Schritten im CRM',
          'Was dem Kunden gesagt oder geschickt wird, entscheidet Ihr Vertrieb'
        ]
      },
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Ihr Vertrieb weiss, welche Anfragen Vorrang haben.',
          'Interessenten kommen besser informiert ins Gespräch.',
          'Das Marketing weiss, was der Vertrieb wirklich braucht.',
          'Verkaufsunterlagen sind aktuell und werden genutzt.',
          'Neue Mitarbeitende im Vertrieb finden sich schneller zurecht.'
        ]
      }
    ],
    faq: [
      {
        q: 'Was, wenn Marketing und Vertrieb grundsätzlich nicht zusammenarbeiten wollen?',
        a: 'Das ist eine Frage der Unternehmenskultur, die sich nicht allein mit Abläufen lösen lässt. Klare Rollen, gemeinsame Kennzahlen und Transparenz schaffen aber die Voraussetzungen, und das hilft oft auch beim Miteinander.'
      },
      {
        q: 'Brauchen wir dafür ein grosses Verkaufsteam?',
        a: 'Nein. Gerade kleine Teams mit zwei bis fünf Personen im Verkauf profitieren, weil jede verlorene Anfrage stärker ins Gewicht fällt.'
      },
      {
        q: 'Wie lange dauert es, und wie viel Zeit braucht es von uns?',
        a: 'Die Analyse und der Workshop dauern rund drei Wochen, die Unterlagen entstehen danach über einige Wochen. Von Ihrem Team brauchen wir vor allem Zeit für Gespräche und Feedback, meist einige Stunden pro Woche.'
      },
      {
        q: 'Wie unterscheidet sich das von der Arbeit an Abläufen und Daten (RevOps)?',
        a: 'Hier geht es um Unterlagen, Schulung und Abläufe für den Vertrieb. Bei RevOps geht es um die Systeme und Daten darunter, etwa CRM und Berichte. Beides ergänzt sich.'
      }
    ],
    cta: {
      headline: 'Marketing und Vertrieb als ein Team.',
      subheadline: 'Wir besprechen, wo es bei Ihnen zwischen Marketing und Vertrieb am meisten hakt und welche Unterlagen Ihrem Vertrieb heute fehlen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'ecommerce-performance',
    hero: {
      headline: 'Ihr Shop hat Besucher. Wir helfen, daraus Käufer zu machen.',
      subheadline: 'Wir verbessern, was zwischen Besuch und Kauf liegt: Kaufquote, Wiederkäufe, Werbeeffizienz und die Daten, die zeigen, wo Umsatz verloren geht.',
      ctaText: 'Shop-Zahlen besprechen'
    },
    problem: {
      title: 'Viele Shops verlieren Umsatz, den sie schon fast hatten',
      paragraphs: [
        'In den meisten Online-Shops kauft nur ein kleiner Teil der Besucher. Die übrigen gehen wieder, oft kurz vor dem Ziel. Das liegt selten am Algorithmus oder an zu wenig Besuchern, sondern am Ablauf im Shop.',
        'Viele Shops stecken fast ihr ganzes Budget in neue Besucher über Google, Meta oder Influencer. Was danach passiert, bleibt oft unbeachtet: warum so viele im Warenkorb abbrechen, warum jemand einmal kauft und nie wieder und warum die Werbung unter Druck steht, obwohl genug Besucher kommen.',
        'Mehr Budget allein bringt einen Shop selten dauerhaft weiter. Was hilft, sind bessere Produktseiten und ein einfacherer Checkout, E-Mails, die Kunden zurückholen, eine Messung, die zeigt, welcher Kanal wirklich rentiert, und Werbung, die nach Marge gesteuert wird.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Kaufquote verbessern',
          desc: 'Wir analysieren Ihren Shop mit Heatmaps, Sitzungsaufzeichnungen, Auswertung der Kaufschritte und Kundenbefragungen. Daraus entstehen priorisierte Annahmen, die wir testen: Produktseiten, Checkout, mobile Darstellung, Vertrauenselemente und Seitenaufbau.'
        },
        {
          title: 'Wiederkäufe & E-Mail-Marketing',
          desc: 'Wiederkehrende Kunden sind meist die profitabelsten. Wir bauen automatische Abläufe: Begrüssung, E-Mails nach dem Kauf, Rückgewinnung, Treue-Anreize und Newsletter nach Kundengruppen.'
        },
        {
          title: 'Werbung mit Blick auf die Marge',
          desc: 'Betreuung von Google Shopping, Meta und Performance Max. Wir steuern nach Deckungsbeitrag, gliedern Kampagnen nach Produktmargen und bauen nur aus, was rentiert.'
        },
        {
          title: 'Shop-Analyse & Zuordnung',
          desc: 'Damit Sie sehen, welcher Kanal rentable Kunden bringt und wo Besucher abspringen, richten wir GA4, serverseitiges Tracking, Attribution, den Einbezug der Warenkosten und verständliche Dashboards ein.'
        },
        {
          title: 'Produktfeed & Katalog',
          desc: 'Wir verbessern Titel, Beschreibungen, Kategorien und Feed-Struktur für das Google Merchant Center und den Meta-Katalog, damit Ihre Produkte bei passenden Suchen sichtbar sind.'
        },
        {
          title: 'Technische Shop-Optimierung',
          desc: 'Ladezeiten beeinflussen die Kaufquote. Wir verbessern die Core Web Vitals (Googles Messwerte für das Ladetempo), mobile Ladezeiten, die Technik im Checkout und strukturierte Daten.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (1–2 Wochen)',
          desc: 'Wir prüfen Schwachstellen im Shop, Werbekampagnen, Lücken im Tracking und Abbrüche im Kaufprozess und erstellen einen priorisierten Massnahmenplan.'
        },
        {
          title: 'Grundlagen (2–4 Wochen)',
          desc: 'Tracking reparieren, Produktfeeds bereinigen und die wichtigsten E-Mail-Abläufe einrichten, etwa für Warenkorbabbrecher und neue Kunden.'
        },
        {
          title: 'Testen & verbessern (ab Woche 5, laufend)',
          desc: 'A/B-Tests auf Produktseiten und im Checkout, monatliche Überarbeitung der E-Mail-Abläufe und Kampagnensteuerung nach Deckungsbeitrag.'
        },
        {
          title: 'Ausbauen (ab Monat 3)',
          desc: 'Sobald die Grundlage steht, bauen wir rentable Kanäle schrittweise aus und erschliessen neue Kundengruppen oder Märkte.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Sie wissen, an welchen Stellen Ihr Shop Käufer verliert.',
          'Änderungen am Shop werden getestet statt nach Gefühl umgesetzt.',
          'Ihre Umsatzdaten sind nachvollziehbar und verlässlicher.',
          'Ladezeiten und Core Web Vitals sind im Blick.',
          'Ihre Kampagnen werden nach Marge gesteuert, nicht nur nach Umsatz.'
        ]
      }
    ],
    faq: [
      {
        q: 'Arbeiten Sie nur mit bestimmten Shop-Systemen?',
        a: 'Wir arbeiten mit Shopify, WooCommerce, Shopware und anderen gängigen Systemen. Analyse, Werbung, E-Mail-Abläufe und die Optimierung der Kaufquote funktionieren auf jeder Plattform. Für tiefere Eingriffe im Shop-Backend arbeiten wir mit erfahrenen Entwicklern zusammen.'
      },
      {
        q: 'Übernehmen Sie die Kampagnen komplett oder nur die Strategie?',
        a: 'Beides ist möglich. Wir übernehmen die Kampagnen vollständig oder prüfen und begleiten Ihr internes Team bzw. Ihre bestehende Agentur.'
      },
      {
        q: 'Wann sehen wir erste Ergebnisse?',
        a: 'Schnelle Verbesserungen im Checkout oder erste E-Mail-Abläufe zeigen oft nach vier bis acht Wochen eine Wirkung. A/B-Tests brauchen genug Bestellungen, um aussagekräftig zu sein, und dauern deshalb meist zwei bis drei Monate, bei kleineren Shops auch länger.'
      }
    ],
    cta: {
      headline: 'Wo verliert Ihr Shop heute Umsatz?',
      subheadline: 'Wir schauen gemeinsam auf Ihre Shop-Zahlen und zeigen, an welcher Stelle sich eine Verbesserung zuerst lohnt. Rund 30 Minuten, kostenlos.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'dtc-growth-acquisition',
    hero: {
      headline: 'Ihr Produkt ist gut. Jetzt braucht es eine verlässliche Kundengewinnung.',
      subheadline: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine stabile Kundengewinnung. Viel Budget fliesst ohne Struktur in Meta, über Google und E-Mail kommt wenig. Wir bauen eine Kundengewinnung auf mehreren Kanälen auf, deren Kosten Sie kennen.',
      ctaText: 'Erstgespräch vereinbaren'
    },
    problem: {
      title: 'Was viele Online-Marken am Wachsen hindert',
      paragraphs: [
        'Am Produkt liegt es selten. Viele Schweizer Online-Marken gewinnen ihre ersten Kunden über Empfehlungen, einen erfolgreichen Social-Media-Beitrag oder die ersten Meta-Kampagnen. Wenn das Wachstum dann abflacht, fehlt meist ein System. Das Werbebudget fliesst in Meta-Kampagnen, ohne dass klar ist, welche davon Kunden bringen, wie der Weg zum Kauf aussieht und was ein Kunde wert ist.',
        'Die Kosten pro Neukunde steigen oft unbemerkt, weil niemand sie sauber misst. Und selbst wo die Kosten bekannt sind, weiss kaum jemand, was ein Kunde über zwölf Monate einbringt. Ohne diese Zahl kaufen Sie Kunden zu Preisen ein, die auf den ersten Blick aufgehen, die Marge aber auffressen. Gleichzeitig bleiben eigene Kanäle liegen: kein SEO, kein Plan für Inhalte, keine E-Mails, die aus Erstkäufern Stammkunden machen.',
        'Wer von einem einzigen Kanal abhängt, geht ein grosses Risiko ein. Es reicht eine Änderung bei Apple oder Meta, ein neuer Algorithmus oder ein gesperrtes Werbekonto, und der Umsatz bricht ein. Unser Ziel ist eine Kundengewinnung, die auf mehreren Kanälen steht und deren Wirkung Sie messen können.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Struktur für bezahlte Werbung',
          desc: 'Wir ordnen Ihre Werbekonten neu: saubere Kampagnenstruktur, getrennte Kampagnen für Bekanntheit und Verkauf, kontrollierte Anzeigenhäufigkeit und regelmässig neue Anzeigen. Meta bleibt ein wichtiger Kanal, aber nicht mehr der einzige. Wir testen systematisch und bauen nur aus, was sich rechnet.'
        },
        {
          title: 'Kosten pro Kunde und Kundenwert',
          desc: 'Wir richten eine einfache, robuste Auswertung ein: Kosten pro Neukunde nach Kanal und Kampagne, Kundenwert nach Kaufmonat, Gewinnschwelle nach Produkt. So sehen Sie, wo Sie Geld verdienen und wo nicht.'
        },
        {
          title: 'Weg zum Kauf & Shop-Optimierung',
          desc: 'Wir analysieren Landingpages, Produktseiten und Checkout und finden heraus, wo Interessenten abspringen. Wenn wir diese Stellen verbessern, sinken die Kosten pro Kauf, ohne dass Sie mehr Werbebudget brauchen. Rechenbeispiel: Steigt die Kaufquote von 1 auf 2 Prozent, halbieren sich bei gleichem Budget die Werbekosten pro Kauf.'
        },
        {
          title: 'SEO und eigene Kanäle',
          desc: 'Bezahlte Werbung bringt Reichweite, eigene Kanäle schonen die Marge. Wir entwickeln eine SEO-Strategie mit Fokus auf Kaufabsicht: Inhalte für Menschen, die nach Ihrem Produkt oder Ihrer Kategorie suchen. Mittelfristig senkt das Ihre durchschnittlichen Kosten pro Neukunde.'
        },
        {
          title: 'E-Mail & Wiederkäufe',
          desc: 'Der günstigste Kunde ist einer, den Sie schon haben. Wir bauen E-Mail-Abläufe, die aus Erstkäufern Wiederkäufer machen: Begrüssung, E-Mails nach dem Kauf, Rückgewinnung. Jeder zusätzliche Wiederkauf erhöht den Kundenwert und senkt die Kosten pro Kunde.'
        },
        {
          title: 'Weitere Kanäle & Testplan',
          desc: 'Wir erstellen einen Testplan für weitere Kanäle, je nach Produkt und Zielgruppe: Google Shopping, Pinterest, TikTok Ads, Influencer mit erfolgsabhängiger Vergütung oder Suchanzeigen.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse & Datengrundlage',
          desc: 'Bevor wir Budget verschieben, analysieren wir Kampagnen, Tracking, Shop und Kundendaten. Wir ermitteln, was ein Neukunde je Kanal wirklich kostet, wie hoch Ihre Wiederkaufrate ist und wo Interessenten abspringen.'
        },
        {
          title: 'Grundlagen schaffen',
          desc: 'Wir richten Tracking, Kampagnenstruktur, erste Shop-Optimierungen und E-Mail-Abläufe ein oder reparieren sie. Diese Phase ist weniger spektakulär als «einfach mehr Werbung», aber die Voraussetzung dafür, dass späteres Wachstum funktioniert.'
        },
        {
          title: 'Testen & prüfen',
          desc: 'Anzeigen, Kanäle und Varianten im Shop werden systematisch getestet, mit festgelegten Kennzahlen und klaren Regeln, ab wann etwas als bewährt gilt. Wir testen mit kleinem Budget und bauen nur aus, was diese Schwelle erreicht.'
        },
        {
          title: 'Ausbauen & optimieren',
          desc: 'Was sich bewährt, bauen wir aus, was nicht funktioniert, schalten wir ab. Sie erhalten jeden Monat einen Bericht mit klaren Kennzahlen, wir besprechen ihn regelmässig, und jeder neue Kaufmonat liefert Daten für die nächste Entscheidung.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Eine Schweizer Online-Marke steckt fast das ganze Werbebudget in Meta, die Kampagnen sind über die Jahre gewachsen und unübersichtlich, und niemand weiss genau, was ein Neukunde kostet. Erste Schritte sind dann meist, das Tracking zu reparieren, die Kampagnen neu zu ordnen, den Checkout zu vereinfachen und E-Mail-Abläufe für Wiederkäufe aufzubauen. Erst danach lohnt es sich, das Budget zu erhöhen oder neue Kanäle zu testen.'
      }
    ],
    faq: [
      {
        q: 'Wir schalten bereits Meta-Anzeigen. Was machen Sie anders?',
        a: 'Wir bringen Struktur in die Kampagnen, richten eine Messung ein, die nicht allein auf den Zahlen von Meta beruht, und bauen einen festen Ablauf für das Testen neuer Anzeigen auf. Ziel ist nicht mehr Budget in Meta, sondern mehr Ergebnis pro eingesetztem Franken.'
      },
      {
        q: 'Wie lange dauert es, bis wir Ergebnisse sehen?',
        a: 'Verbesserungen im Shop zeigen oft nach vier bis acht Wochen eine Wirkung, wenn klare Schwachstellen behoben werden. Neu aufgebaute Kampagnen brauchen meist sechs bis zehn Wochen, bis die Ergebnisse stabil sind. SEO und eigene Kanäle wirken über sechs bis zwölf Monate.'
      },
      {
        q: 'Wir haben ein kleines Team und wenig Zeit. Passt das zu uns?',
        a: 'Ja. Wir übernehmen Umsetzung, Überwachung und Optimierung. Sie erhalten regelmässige Berichte und klare Entscheidungsgrundlagen. Von Ihrer Seite braucht es vor allem Zugänge, Produktwissen und kurze Freigaben.'
      }
    ],
    cta: {
      headline: 'Was kostet ein Neukunde, und was bringt er ein?',
      subheadline: 'Viele Online-Marken kennen diese zwei Zahlen nicht genau. Im Erstgespräch schauen wir sie uns mit Ihren Daten gemeinsam an.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'customer-retention',
    hero: {
      headline: 'Machen Sie aus Erstkäufern Stammkunden.',
      subheadline: 'Einen bestehenden Kunden zu halten ist in der Regel deutlich günstiger, als einen neuen zu gewinnen. Trotzdem fehlt vielen Unternehmen ein System, das Bestandskunden regelmässig anspricht und inaktive Kunden zurückholt. Wir bauen es auf, für Online-Shops, Software-Anbieter und B2B-Dienstleister.',
      ctaText: 'Kundenbindung besprechen'
    },
    problem: {
      title: 'Wachstum nur über Neukunden ist teuer',
      paragraphs: [
        'Viele Unternehmen kennen ihre Kosten pro Neukunde genau. Was ein Kunde über zwei, drei oder fünf Jahre wert ist, wissen sie nicht, weil sich nach dem ersten Kauf niemand mehr um ihn gekümmert hat. Der Kundenwert bleibt eine Schätzung.',
        'Im E-Commerce heisst das: Ein Kunde kauft einmal, verschwindet, und ihn über Werbung zurückzuholen kostet erneut Geld, wenn er überhaupt zurückkommt. Oft fehlt einfach die Kommunikation nach dem Kauf: kein Anlass für den zweiten Kauf, keine Nachricht im richtigen Moment.',
        'Im B2B ist das Muster ähnlich, nur teurer: Ein Kunde wird gewonnen, eingeführt, und danach passiert wenig. Es gibt kein geplantes Zusatzangebot, kein regelmässiges Gespräch und kein Warnsignal vor der Kündigung. Abwanderung fällt erst auf, wenn die Rechnung ausbleibt. Einen verlorenen Kunden zurückzugewinnen ist aufwendiger, als ihn zu halten.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'E-Mails nach dem Kauf & Einführung',
          desc: 'Die Zeit direkt nach dem Kauf ist entscheidend und wird oft verschenkt. Wir bauen E-Mail- und SMS-Abläufe für die Zeit nach dem ersten Kauf: Anleitungen, passende Ergänzungsprodukte, Bitte um Bewertung, Einführung.'
        },
        {
          title: 'Rückgewinnung & Kündigungen vorbeugen',
          desc: 'Inaktive Kunden sind nicht verloren. Wir bauen E-Mail-Strecken, die sie mit einem passenden Anlass wieder ansprechen. Im B2B ergänzen wir Frühwarnzeichen: Verhaltenssignale, die auf ein Kündigungsrisiko hinweisen, bevor der Kunde kündigt.'
        },
        {
          title: 'Treue- und Wiederkaufprogramme',
          desc: 'Wir entwickeln Programme, die zu Ihrem Geschäftsmodell passen: Punkte oder Stufen im E-Commerce, Empfehlungsprogramme im B2B oder besondere Konditionen für Ihre besten Kunden.'
        },
        {
          title: 'Zusatzangebote automatisieren',
          desc: 'Der einfachste Weg zu mehr Umsatz ist oft das passende Angebot an einen bestehenden Kunden zur richtigen Zeit. Wir richten Auslöser ein, die auf Kaufhistorie, Nutzung und Kundengruppe beruhen.'
        },
        {
          title: 'Kundenwert & Wiederkäufe messen',
          desc: 'Wir bauen die Auswertung, die Kundenbindung sichtbar macht: Analyse nach Kaufmonat, Kundenwert je Gruppe, Abwanderung und Wiederkaufrate. So sehen Sie, welche Kunden wirklich rentabel sind.'
        },
        {
          title: 'E-Mail- und CRM-Grundlagen',
          desc: 'Automatische E-Mails wirken nur, wenn sie zugestellt werden und die richtigen Kunden erreichen. Wir prüfen und verbessern Ihre E-Mail-Infrastruktur: Zustellbarkeit, Segmente, Aufbau der Automatisierungen, CRM-Anbindung und Datenpflege.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse der Kundenbasis',
          desc: 'Wir werten Ihre Kunden nach Kaufhäufigkeit, Kundenwert, Abwanderung und Wiederkaufverhalten aus und prüfen die bestehenden E-Mails und Automatisierungen.'
        },
        {
          title: 'Grundlagen & erste Abläufe',
          desc: 'CRM und E-Mail-System einrichten, Kundengruppen festlegen, Dashboard aufsetzen. Die ersten Abläufe für Begrüssung und die Zeit nach dem Kauf gehen live.'
        },
        {
          title: 'Optimierung & Ausbau',
          desc: 'Wir überarbeiten die Abläufe monatlich anhand von Öffnungen, Klicks und Käufen und bauen Treueprogramm und Zusatzangebote auf.'
        },
        {
          title: 'Weitere Kanäle',
          desc: 'Wenn die Grundlage steht: Ausbau auf weitere Kanäle wie WhatsApp oder SMS, Retargeting für bestimmte Kundengruppen, Quartalsbesprechung mit klaren Kennzahlen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Ein Schweizer Online-Shop hat eine solide Kundenbasis, verschickt aber ausser der Bestellbestätigung kaum E-Mails. Wiederkäufe passieren zufällig, und niemand weiss genau, wie viele Kunden ein zweites Mal bestellen. Wir beginnen dann mit einer Auswertung der Kundenbasis nach Kaufmonat, bauen E-Mails für die Zeit nach dem Kauf und eine Rückgewinnungsstrecke für inaktive Kunden auf und messen von Anfang an, wie sich die Wiederkaufrate entwickelt.'
      }
    ],
    faq: [
      {
        q: 'Ab welcher Kundenzahl lohnt sich das?',
        a: 'Als grobe Orientierung: Im E-Commerce lohnt sich der Aufbau meist ab einigen hundert aktiven Käufern. Im B2B kann es schon mit wenigen Dutzend Kunden sinnvoll sein, weil jeder einzelne Kunde mehr wert ist. Wir prüfen das im Erstgespräch für Ihren Fall.'
      },
      {
        q: 'Arbeiten Sie mit unserem bestehenden E-Mail-Tool oder müssen wir wechseln?',
        a: 'Wir arbeiten mit dem, was Sie haben. Die meisten Probleme liegen nicht am Tool, sondern daran, dass Struktur und eine sinnvolle Einteilung der Kunden in Gruppen fehlen. Wir arbeiten unter anderem mit Klaviyo, HubSpot, ActiveCampaign und Mailchimp.'
      },
      {
        q: 'Was ist realistisch, und wie schnell?',
        a: 'Die ersten Abläufe sind meist innert vier bis sechs Wochen live. Ob sie wirken, zeigt sich über mehrere Monate, weil Kunden erst einen Kaufzyklus durchlaufen müssen. Wie stark sich die Wiederkaufrate verbessert, hängt von Produkt, Kauffrequenz und Kundenzufriedenheit ab. Konkrete Prozentversprechen machen wir deshalb nicht.'
      }
    ],
    cta: {
      headline: 'Ihre Bestandskunden bringen oft mehr, als Sie denken.',
      subheadline: 'Wir schauen gemeinsam auf Ihre Kundenbasis, wie oft heute wiederbestellt wird und welche Abläufe nach dem Kauf fehlen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'paid-social-ecommerce',
    hero: {
      headline: 'Ihr ROAS sieht gut aus. Aber verdienen Sie auch daran?',
      subheadline: 'Viele Online-Shops steuern ihre Meta- und TikTok-Kampagnen nach ROAS, also Umsatz pro Werbefranken. Produktmarge, Versandkosten und Rücksendungen stecken darin nicht. Wir steuern nach Deckungsbeitrag, damit Ihre Werbung Gewinn bringt und nicht nur Umsatz.',
      ctaText: 'Erstgespräch vereinbaren'
    },
    problem: {
      title: 'Ein guter ROAS heisst noch nicht, dass Sie Geld verdienen',
      paragraphs: [
        'Ein Rechenbeispiel: Angenommen, Sie geben CHF 10\'000 pro Monat für Meta Ads aus und der gemeldete ROAS liegt bei 4. Die Berichte sehen gut aus, und trotzdem bleibt am Monatsende weniger übrig als erwartet. Der Grund liegt meist darin, was gemessen wird.',
        'ROAS misst Umsatz pro Werbefranken. Er zeigt nicht, wie hoch Ihre Produktmarge ist, was Versand und Rücksendungen kosten, und dass der Algorithmus oft günstige Produkte mit vielen Klicks bevorzugt statt Ihrer margenstarken Artikel. Rechenbeispiel: Bei 30 Prozent Marge brauchen Sie einen ROAS von rund 3.3, nur um die Werbekosten zu decken, ohne Versand und Retouren. Bei 20 Prozent Marge liegt diese Schwelle bei 5.',
        'Dazu kommt, dass nicht alles, was mit kleinem Budget funktioniert, auch mit grösserem Budget gleich gut läuft. Meta zeigt die Anzeigen dann auch weniger passenden Zielgruppen, und die Kosten pro Kauf steigen. Wer das nicht einplant, baut Kampagnen aus, die sich nicht mehr rechnen. Auf TikTok wiederum bezahlen Sie ohne klares Anzeigenkonzept viel Geld für Aufrufe, die keine Käufe bringen.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Kampagnen nach Marge',
          desc: 'Bevor wir eine Kampagne aufsetzen, schauen wir uns Ihre Produktmargen an. Margenstarke Produkte werden bevorzugt beworben, Kampagnen nach Margengruppen getrennt und das Budget nach möglichem Deckungsbeitrag verteilt.'
        },
        {
          title: 'Meta Ads: Aufbau & Betreuung',
          desc: 'Wir bauen Kampagnen auf Facebook und Instagram auf, getrennt nach Neukunden, Retargeting und Bestandskunden. Die Kampagnenziele wählen wir je nach Phase, Anzeigentests planen wir im Voraus.'
        },
        {
          title: 'TikTok Ads & Anzeigenkonzept',
          desc: 'TikTok funktioniert nur mit passenden Anzeigen: natürlich wirkende Inhalte, die nicht nach Werbung aussehen. Wir erstellen Briefings für TikTok-gerechte Anzeigen und testen Einstiege und Formate.'
        },
        {
          title: 'Tracking & Zuordnung',
          desc: 'Serverseitiges Tracking (Server-Side Tagging) über die Meta Conversions API und die TikTok Events API, damit auch nach den Tracking-Einschränkungen von Apple möglichst vollständige Daten ankommen.'
        },
        {
          title: 'Anzeigen systematisch testen',
          desc: 'Nicht jede Anzeige funktioniert, und keine funktioniert für immer. Wir bauen einen festen Testablauf auf, mit einer klaren Annahme pro Test und regelmässig neuen Varianten.'
        },
        {
          title: 'Monatliche Gewinnauswertung',
          desc: 'Statt nur den ROAS zu zeigen, werten wir jeden Monat aus: Deckungsbeitrag pro Kampagne, Gewinn nach Marge und Versandkosten, kostendeckender ROAS im Vergleich zum erreichten.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Prüfung & Margenanalyse',
          desc: 'Wir prüfen, was Ihre bestehenden Kampagnen nach Abzug der Produktmargen tatsächlich verdienen, und kontrollieren das Tracking. So finden wir rasch umsetzbare Verbesserungen.'
        },
        {
          title: 'Struktur & Tracking',
          desc: 'Kampagnen werden nach Marge und Phase neu aufgebaut oder umgebaut. Serverseitiges Tracking über die Meta Conversions API und die TikTok Events API wird eingerichtet oder repariert.'
        },
        {
          title: 'Start & erste Tests',
          desc: 'Die Kampagnen starten mit einem festen Startbudget, die ersten Anzeigentests laufen an. Jede Woche werten wir aus und verteilen das Budget nach Deckungsbeitrag.'
        },
        {
          title: 'Ausbau & Optimierung',
          desc: 'Wenn die Kampagnen rentabel laufen und das Tracking verlässlich ist, erhöhen wir das Budget kontrolliert und bringen laufend neue Anzeigen auf Basis der Erkenntnisse.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Ein Online-Shop bewirbt vor allem Produkte, die viele Klicks bringen, aber wenig Marge haben. Der ROAS im Werbekonto wirkt ordentlich, der Gewinn nach Warenkosten, Versand und Retouren ist es nicht. Wir rechnen dann zuerst für jede Produktgruppe aus, ab welchem ROAS sie kostendeckend ist, richten serverseitiges Tracking ein und bauen die Kampagnen so um, dass margenstarke Produkte mehr Budget erhalten.'
      }
    ],
    faq: [
      {
        q: 'Was machen Sie anders als eine klassische Performance-Agentur?',
        a: 'Viele Agenturen berichten vor allem über den ROAS, weil er einfach zu messen ist. Wir beziehen Ihre Produktmargen ein und steuern die Kampagnen nach Deckungsbeitrag.'
      },
      {
        q: 'Müssen wir bestehende Kampagnen komplett neu aufbauen?',
        a: 'Das zeigt die Prüfung. Oft lassen sich funktionierende Kampagnen verbessern. Wenn die bisherige Ausrichtung aber falsche Signale an den Algorithmus sendet, ist ein sauberer Neuaufbau meist wirksamer.'
      },
      {
        q: 'Wie lange dauert es, bis Paid Social rentabel ist, und was kostet es?',
        a: 'In den ersten vier bis acht Wochen sammeln wir Daten, testen Anzeigen und lassen die Algorithmen lernen. In dieser Zeit liegen die Kampagnen oft erst etwa bei der Gewinnschwelle. Ein rentabler Ausbau ist meist ab Woche acht bis zwölf realistisch. Welches Werbebudget sinnvoll ist und wie die Betreuung aufgebaut wird, besprechen wir im Erstgespräch.'
      }
    ],
    cta: {
      headline: 'Wie rentabel sind Ihre Anzeigen wirklich?',
      subheadline: 'Im Erstgespräch schauen wir auf Ihre Kampagnen und rechnen gemeinsam aus, ab welchem ROAS sie sich lohnen. 30 Minuten, kostenlos.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  }
];
