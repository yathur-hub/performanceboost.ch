import { ExtendedServiceContent } from '../types';

export const EXTENDED_SERVICES_DATA: ExtendedServiceContent[] = [
  {
    slug: 'ai-automation',
    hero: {
      headline: 'KI im Alltag Ihres Teams, eingebaut statt ausprobiert.',
      subheadline: 'Wir klären, welche Aufgaben in Marketing, Vertrieb und Verwaltung sich mit KI anders erledigen lassen, bauen die Anwendungen in Ihre bestehenden Abläufe ein und schulen Ihr Team an eigenen Fällen. Dazu kommen schriftliche Regeln, welche Daten in welches Tool dürfen.',
      ctaText: 'KI-Einsatz prüfen lassen'
    },
    problem: {
      title: 'Jede Person nutzt KI anders, die Abläufe bleiben gleich',
      paragraphs: [
        'In vielen Unternehmen arbeiten einzelne Mitarbeitende mit ChatGPT oder anderen Tools, jede Person auf ihre Weise. Der Ablauf selbst hat sich nicht verändert. Eine Offerte entsteht wie vor fünf Jahren, eine Anfrage wird gleich bearbeitet, nur ein einzelner Handgriff geht etwas schneller.',
        'Gleichzeitig ist unklar, welche Kundendaten schon in KI-Tools gelandet sind, wer die Ergebnisse prüft und ob sich die Lizenzen lohnen.',
        'Wir setzen deshalb beim Ablauf an und nicht beim Tool. Für jede Aufgabe klären wir, was eine feste Regel erledigen kann, wo ein Modell einen Entwurf liefert und wo Ihr Team prüft und entscheidet. Erst danach wählen wir das Werkzeug.'
      ]
    },
    leistet: {
      title: 'Was die Einführung umfasst',
      items: [
        { title: 'KI-Standortbestimmung', desc: 'Wir erfassen, wo KI heute genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind. Daraus entsteht eine priorisierte Liste mit drei bis fünf Anwendungen und einer Nutzenrechnung pro Anwendung.' },
        { title: 'Abläufe neu zuschneiden', desc: 'Für die gewählten Aufgaben legen wir fest, welcher Schritt fest geregelt läuft, welchen ein Modell vorbereitet und wo ein Mensch freigibt. Oft fällt dabei ein Schritt ganz weg.' },
        { title: 'Anwendungen einrichten', desc: 'Wir binden KI in Ihre bestehenden Tools ein, etwa für Recherche, Zusammenfassungen, Entwürfe von Offerten und E-Mails oder die Einordnung eingehender Anfragen. Mit gemeinsamen Vorlagen statt individueller Prompts.' },
        { title: 'Schulung an eigenen Fällen', desc: 'Ihr Team übt mit echten Aufgaben aus dem Alltag. Es lernt, Ergebnisse zu prüfen und zu erkennen, wann ein Modell danebenliegt. Dazu gibt es kurze Anleitungen.' },
        { title: 'Regeln für Daten und Tools', desc: 'Welche Daten in welches Tool dürfen, welche nie, wer prüft und freigibt und was protokolliert wird. Kurz formuliert und abgestimmt auf das Schweizer DSG.' },
        { title: 'Nutzen messen', desc: 'Wir messen, ob die Anwendungen genutzt werden, wie viel Zeit pro Fall wegfällt und was ein Fall an Lizenz- und Nutzungskosten verursacht. Lohnt sich ein ganzer Ablauf, wird er zum Kandidaten für einen KI-Agenten.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        { title: 'Standortbestimmung', desc: 'In ein bis zwei Wochen klären wir, wo KI heute genutzt wird, wo Zeit verloren geht und welche Daten vorhanden sind.' },
        { title: 'Anwendungen priorisieren', desc: 'Wir wählen die drei bis fünf Anwendungen, die Ihrem Unternehmen am meisten bringen, und ordnen jeden Schritt einer Stufe zu, von der festen Regel bis zur KI-Unterstützung mit Freigabe. Alles andere kommt später oder gar nicht.' },
        { title: 'Einführen und schulen', desc: 'Wir richten die Anwendungen in Ihren Abläufen ein und schulen das Team mit eigenen Beispielen.' },
        { title: 'Regeln verabschieden', desc: 'Die Regeln für Daten, Tools und Freigaben werden schriftlich festgehalten und mit der Geschäftsleitung verabschiedet.' },
        { title: 'Messen und ausbauen', desc: 'Nach einigen Wochen prüfen wir Nutzung, eingesparte Zeit und Fehler. Dann entscheiden wir, was angepasst, ausgebaut oder wieder abgeschaltet wird.' }
      ]
    },
    extraSections: [
      {
        title: 'Welche Stufe für welche Aufgabe',
        type: 'grid',
        subtitle: 'Nicht jede Aufgabe braucht ein Sprachmodell. Wir wählen pro Schritt die einfachste Lösung, die verlässlich funktioniert.',
        items: [
          { title: 'Feste Regel', desc: 'Eine Anfrage landet mit Quelle im CRM, eine Aufgabe wird angelegt. Immer gleich, günstig und vollständig nachvollziehbar.' },
          { title: 'KI-Unterstützung', desc: 'Ein Modell fasst eine lange E-Mail zusammen, ordnet ein Dokument ein oder entwirft eine Antwort. Das Ergebnis ist ein Vorschlag, den eine Person prüft.' },
          { title: 'KI-Agent', desc: 'Mehrere Schritte über verschiedene Systeme, etwa recherchieren, im CRM ergänzen und eine Antwort vorbereiten. Lohnt sich erst, wenn Regel und Vorschlag nicht reichen.' }
        ]
      },
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
          { title: 'Automatisierung', desc: 'n8n, Windmill, Make oder Zapier, um KI in bestehende Abläufe einzubinden. n8n und Windmill lassen sich auch auf eigenen Servern betreiben.' },
          { title: 'Ihre bestehenden Tools', desc: 'KI-Funktionen in CRM, E-Mail und Office, die Sie oft schon bezahlen, aber kaum nutzen.' }
        ]
      },
      {
        title: 'Was bei Ihrem Team bleibt',
        type: 'text',
        text: 'Was Sie wem und warum anbieten, entscheiden weiterhin Menschen. Das Gespräch mit Kunden bleibt bei Ihrem Team, ebenso die Freigabe von allem, was nach aussen geht. KI übernimmt das Lesen, Zusammenfassen und Entwerfen, also die Vorarbeit, die heute viel Zeit kostet. Wo sie nichts bringt oder nicht verlässlich arbeitet, raten wir ab.'
      }
    ],
    faq: [
      { q: 'Wir haben schon ChatGPT-Lizenzen. Reicht das nicht?', a: 'Lizenzen sind der kleinere Teil. Entscheidend ist, ob KI in die Abläufe eingebunden ist, ob das Team weiss, was es damit tun darf, und ob sich der Nutzen messen lässt. Vorhandene Lizenzen lassen sich oft weiter nutzen.' },
      { q: 'Brauchen wir technisches Know-how im Team?', a: 'Nicht zwingend. Viele KI-Anwendungen lassen sich ohne Programmierung umsetzen und brauchen nur ein Grundverständnis, das wir in der Schulung vermitteln. Wo es technischer wird, übernehmen wir die Umsetzung und dokumentieren sie.' },
      { q: 'Wie stellen Sie sicher, dass KI-generierte Inhalte gut sind?', a: 'Wir testen jede Anwendung vor dem Start mit echten Fällen aus Ihrem Alltag und bauen eine Prüfung in den Ablauf ein. Die KI liefert Entwürfe, Menschen prüfen und geben frei. Bei Kundendaten legen wir vorab fest, welche Daten überhaupt an ein KI-Modell gehen dürfen.' },
      { q: 'Wann wird aus einer Anwendung ein KI-Agent?', a: 'Wenn eine Aufgabe regelmässig mehrere Schritte über verschiedene Systeme braucht und die einzelnen Schritte verlässlich funktionieren. Dann kann ein Agent den Ablauf mit begrenzten Rechten übernehmen. Ob sich das lohnt, prüfen wir mit echten Fällen und den Kosten pro Fall, bevor wir ihn bauen.' },
      { q: 'Was kosten KI-Tools?', a: 'Die Lizenzkosten hängen vom Tool und von der Zahl der Nutzerinnen und Nutzer ab, bei Anwendungen über eine Schnittstelle von der Menge der verarbeiteten Fälle. Oft lassen sich vorhandene Lizenzen weiter nutzen. In der Standortbestimmung rechnen wir aus, welche Kosten zusätzlich entstehen und was dem gegenübersteht.' },
      { q: 'Was kostet die Einführung?', a: 'Wir arbeiten mit Festpreisen für ein klar definiertes Ergebnis, nicht nach Stunden. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit Umfang, Ergebnis und Preis.' }
    ],
    cta: {
      headline: 'Wo kann KI Ihrem Team Arbeit abnehmen?',
      subheadline: 'Wir gehen durch, wo Ihr Team heute Zeit verliert, welcher Schritt sich mit KI anders erledigen liesse und wo eine einfache Regel genügt.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'ki-agenten',
    hero: {
      headline: 'KI-Agenten, die ganze Abläufe übernehmen.',
      subheadline: 'Ein Agent erledigt eine Aufgabe über mehrere Schritte und Systeme, mit eng gefassten Rechten. Ein Beispiel: Eine Anfrage kommt am Freitagabend, am Montag liegt sie geprüft, recherchiert und mit Antwortentwurf im CRM. Ihr Team prüft und gibt frei.',
      ctaText: 'Ablauf besprechen'
    },
    problem: {
      title: 'Die Arbeit zwischen den Systemen bleibt an Menschen hängen',
      paragraphs: [
        'Anfragen kommen per Formular oder E-Mail, werden abgetippt, im CRM erfasst, recherchiert und beantwortet. Jeder Schritt ist einfach. Zusammen kosten sie viel Zeit, und am Wochenende bleibt alles liegen.',
        'Einzelne KI-Tools helfen bei einzelnen Handgriffen. Feste Workflows übernehmen, was immer gleich abläuft. Sobald Anfragen unvollständig, unklar oder jedes Mal etwas anders sind, landet der Fall trotzdem wieder bei einer Person.',
        'Ein KI-Agent übernimmt genau diese Schritte dazwischen. Er liest, recherchiert, trägt ein und bereitet vor, nur mit den Rechten, die er dafür braucht. Ihr Team kümmert sich um das, was Urteil braucht.'
      ]
    },
    leistet: {
      title: 'Typische Agenten in Marketing, Vertrieb und Administration',
      items: [
        { title: 'Anfrage-Agent', desc: 'Prüft neue Anfragen, ordnet sie nach Ihren Kriterien ein, legt Kontakt und Firma im CRM an und bereitet eine Antwort vor. Unklare Fälle gehen mit Begründung an eine Person.' },
        { title: 'Recherche-Agent', desc: 'Recherchiert vor einem Termin Firma und Gesprächspartner auf der Website, in öffentlichen Quellen und im CRM und fasst das Wichtigste auf einer Seite zusammen.' },
        { title: 'Nachfass-Agent', desc: 'Erkennt offene Offerten und liegengebliebene Anfragen, liest den bisherigen Verlauf und bereitet die nächste Nachricht vor. Versendet wird nach Freigabe.' },
        { title: 'Dokumenten-Agent', desc: 'Liest eingehende Dokumente wie Bestellungen oder Formulare, extrahiert die Angaben und überträgt sie ins richtige System. Was nicht eindeutig ist, landet zur Prüfung bei Ihrem Team.' },
        { title: 'Reporting-Agent', desc: 'Die Zahlen aus CRM, Website und Kampagnen führt ein fester Ablauf zusammen. Der Agent erkennt auffällige Abweichungen, prüft mögliche Ursachen und beschreibt sie in wenigen Sätzen.' },
        { title: 'Daten-Agent', desc: 'Eindeutige Dubletten findet eine Regel zuverlässiger. Der Agent übernimmt die unklaren Fälle, ergänzt fehlende Firmendaten und schlägt Korrekturen vor, bevor sie Auswertungen verfälschen.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        { title: 'Ablauf auswählen', desc: 'Wir beginnen mit einem Ablauf, der häufig vorkommt, heute viel Handarbeit verursacht und bei dem ein Fehler nicht teuer ist.' },
        { title: 'Stufe und Rechte festlegen', desc: 'Für jeden Schritt entscheiden wir, ob eine Regel genügt oder ein Modell nötig ist. Dann halten wir fest, was der Agent lesen und schreiben darf, wo ein Mensch freigibt und welche Daten er verarbeitet.' },
        { title: 'Mit echten Fällen testen', desc: 'Wir bauen den Agenten auf Ihren Systemen und testen ihn mit echten, auch schwierigen Fällen. Live geht er erst, wenn Ergebnisse und Kosten pro Fall stimmen.' },
        { title: 'Einführen', desc: 'Ihr Team wird eingewiesen und weiss, wie es Entwürfe prüft, wie es korrigiert und was bei Fehlern passiert.' },
        { title: 'Überwachen und messen', desc: 'Protokolle, Fehlerquote, Kosten pro Fall und eingesparte Zeit werten wir laufend aus. Danach entscheiden wir, welcher Ablauf als Nächstes kommt.' }
      ]
    },
    extraSections: [
      {
        title: 'Ein Beispiel aus dem Alltag',
        type: 'text',
        text: 'Ein Beispiel: Eine Anfrage kommt am Freitagabend über das Formular. Offensichtlichen Spam filtert eine feste Regel. Den Rest liest der Agent, prüft, ob die Angaben vollständig sind, ordnet die Anfrage nach Ihren Kriterien ein, legt Kontakt und Firma im CRM an, recherchiert das Unternehmen und bereitet eine Antwort vor. Am Montagmorgen findet Ihr Team die Anfrage geprüft und mit Entwurf vor. Es liest, passt an und sendet.'
      },
      {
        title: 'Was zu jedem Agenten gehört',
        type: 'list',
        bullets: [
          'Eine schriftliche Beschreibung, was der Agent allein darf und was nicht',
          'Ein eigener Zugang mit nur den nötigen Rechten und festen Limits, etwa für die Zahl der Aktionen pro Tag',
          'Ein Protokoll jedes Schritts, damit sich jede Entscheidung nachvollziehen lässt',
          'Nach aussen geht nichts ohne Freigabe durch Ihr Team',
          'Eine Übergabe an eine Person, sobald der Agent unsicher ist oder ein Fehler auftritt',
          'Vor dem Start geklärt, welche Daten verarbeitet werden und wo sie liegen'
        ]
      },
      {
        title: 'Wann wir keinen Agenten empfehlen',
        type: 'text',
        text: 'Lässt sich ein Ablauf als feste Liste von Schritten aufschreiben, ist ein Workflow günstiger und verlässlicher. Ein Agent lohnt sich erst, wenn die Fälle unterschiedlich sind, Texte gelesen werden müssen oder mehrere Systeme beteiligt sind, und er muss sich an den Kosten pro korrekt erledigtem Fall messen lassen. Oft besteht die beste Lösung aus beidem, einer Regel für den Normalfall und einem Agenten für die Ausnahmen.'
      },
      {
        title: 'So läuft es bei performanceboost selbst',
        type: 'text',
        text: 'Jede Anfrage über unsere Website wird automatisch geprüft, gespeichert und in unser eigenes ERP übernommen. Dort entstehen Kontakt, Firma, Anfrage und die Aufgabe, sie zu beantworten. Vor Erstgesprächen recherchiert ein Agent das Unternehmen, und Antwortentwürfe gehen erst nach Freigabe hinaus. Wir empfehlen Ihnen Abläufe, die wir aus dem eigenen Betrieb kennen.'
      }
    ],
    faq: [
      { q: 'Was ist der Unterschied zu einem Chatbot?', a: 'Ein Chatbot beantwortet Fragen im Gespräch. Ein KI-Agent erledigt Aufgaben im Hintergrund über mehrere Schritte und Systeme hinweg, etwa vom Formular über das CRM bis zum Antwortentwurf.' },
      { q: 'Was ist der Unterschied zu einem Workflow?', a: 'Ein Workflow führt immer dieselben Schritte in derselben Reihenfolge aus. Ein Agent entscheidet innerhalb eines festen Rahmens, welchen Schritt er als Nächstes braucht, etwa ob eine Anfrage zusätzliche Recherche verlangt. Viele Abläufe brauchen keinen Agenten. Das sagen wir Ihnen dann auch.' },
      { q: 'Kann ein Agent Fehler machen?', a: 'Ja. Deshalb legen wir vorab fest, was er allein darf, testen mit echten Fällen und lassen alles, was nach aussen geht, von einem Menschen freigeben. Fehler werden protokolliert und gemeldet, unsichere Fälle gehen an eine Person.' },
      { q: 'Welche Systeme brauchen wir dafür?', a: 'Meist reichen die vorhandenen: ein CRM, E-Mail und Ihre Website. Fehlt eine saubere Grundlage, etwa ein gepflegtes CRM oder eine Schnittstelle, schaffen wir sie zuerst.' },
      { q: 'Wo liegen unsere Daten?', a: 'Das klären wir vor dem Start. Je nach Anforderung laufen Agenten bei Anbietern mit Rechenzentren in der Schweiz oder der EU oder auf eigener Infrastruktur. Welche Daten an ein KI-Modell gehen, halten wir schriftlich fest.' },
      { q: 'Was kostet ein KI-Agent?', a: 'Aufbau und Einführung bieten wir zum Festpreis für einen klar definierten Ablauf an. Dazu kommen laufende Kosten für die eingesetzten Dienste, die wir vorab offenlegen und im Betrieb pro Fall ausweisen.' }
    ],
    cta: {
      headline: 'Welchen Ablauf könnte bei Ihnen ein Agent übernehmen?',
      subheadline: 'Bringen Sie einen Ablauf mit, der heute viel Handarbeit kostet. Wir prüfen gemeinsam, was davon eine Regel erledigt, was ein Agent übernehmen kann und wo weiterhin ein Mensch entscheidet.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'martech-stack',
    hero: {
      headline: 'Weniger Tools, besser verbunden.',
      subheadline: 'Wir räumen Ihren MarTech-Stack auf, also alle Tools für Marketing und Vertrieb, und bauen ihn so um, dass Automatisierungen und KI-Agenten verlässlich darauf arbeiten können. Mit weniger Lizenzen, einem gemeinsamen Datenstand und Schnittstellen mit klaren Rechten.',
      ctaText: 'Stack-Check besprechen'
    },
    problem: {
      title: 'Viele Programme, wenig Zusammenhang',
      paragraphs: [
        'Über die Jahre kommt ein Tool zum anderen: CRM, Newsletter, Formulare, Terminbuchung, Werbekonten, Tracking und Tabellen. Jedes wurde aus gutem Grund eingeführt.',
        'Heute reden die Programme kaum miteinander. Daten werden von Hand kopiert, Zahlen widersprechen sich, und bei einigen Lizenzen weiss niemand mehr, wer sie nutzt.',
        'Für Automatisierung ist das ein Hindernis. Ein Ablauf, der Daten aus drei Systemen braucht, scheitert an widersprüchlichen Feldern, und ein Agent mit Zugang zu allem ist ein Risiko. Wir bringen den Werkzeugkasten in eine Form, auf der Regeln und Agenten sauber arbeiten und die Ihr Team weiterführen kann.'
      ]
    },
    leistet: {
      title: 'Was wir übernehmen',
      items: [
        { title: 'Stack-Check', desc: 'Wir erfassen alle Tools mit Kosten, Nutzung, Verantwortlichen, Datenflüssen und Schnittstellen. Sie erhalten eine klare Liste, was bleibt, was weg kann und was fehlt. Auf Wunsch ist der Check Teil der Performance-Analyse.' },
        { title: 'Datenmodell und Zielbild', desc: 'Wir legen fest, welches System für welche Daten führend ist, etwa das CRM für Kontakte und Verkaufschancen. Darauf bauen Berichte, Workflows und Agenten auf, statt jeweils eigene Kopien zu pflegen.' },
        { title: 'Aufräumen und verbinden', desc: 'Wir schalten überflüssige Tools ab, bereinigen Daten und verbinden die Systeme über Schnittstellen (APIs) oder Automatisierungsplattformen wie n8n. Daten werden nur einmal erfasst, und jede Anfrage ist bis zum Auftrag nachvollziehbar. Als Projekt zum Festpreis.' },
        { title: 'Rechte und Protokolle', desc: 'Jeder Workflow und jeder Agent erhält einen eigenen Zugang mit nur den Rechten, die er braucht. Schreibende Aktionen werden protokolliert, und wir halten fest, welche Personendaten an welches KI-Modell gehen dürfen.' },
        { title: 'Laufend betreiben', desc: 'Wir prüfen neue Tools, bevor sie gekauft werden, überwachen Schnittstellen und Automatisierungen auf Fehler und überprüfen die Kosten einmal im Jahr, die Nutzungskosten für KI-Modelle eingeschlossen. Als Teil der laufenden Begleitung.' }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        { title: 'Inventur', desc: 'Alle Tools, Lizenzen, Kosten und Verantwortlichen auf einer Liste, dazu die Datenflüsse, Schnittstellen und bestehenden Zugänge zwischen den Systemen.' },
        { title: 'Zielbild', desc: 'Wir entscheiden gemeinsam, was bleibt, was ersetzt wird und was wegfällt, welches System für welche Daten führend ist und welche Abläufe später automatisch laufen sollen. Mit den Kosten vorher und nachher.' },
        { title: 'Umbau', desc: 'Systeme verbinden, Daten übernehmen und bereinigen, Zugänge mit eingeschränkten Rechten einrichten und alte Tools sauber abschalten.' },
        { title: 'Übergabe', desc: 'Dokumentation und Einweisung, damit Ihr Team weiss, welches Tool wofür da ist, was automatisch passiert und wer bei einem Fehler reagiert.' },
        { title: 'Betrieb', desc: 'Auf Wunsch halten wir den Stack laufend sauber, überwachen die Schnittstellen und prüfen jede neue Anschaffung.' }
      ]
    },
    extraSections: [
      {
        title: 'Was einen Stack KI-fähig macht',
        type: 'list',
        bullets: [
          'Kundendaten, die an einem Ort gepflegt und nicht mehrfach erfasst werden',
          'Schnittstellen (APIs) oder Automatisierungsplattformen, über die Workflows und Agenten lesen und schreiben können',
          'Zugänge pro Agent mit nur den Rechten, die er braucht, und ein Protokoll jeder Aktion',
          'Eine Überwachung, die meldet, wenn eine Schnittstelle oder Automatisierung ausfällt',
          'Klare Regeln, welche Personendaten an welches KI-Modell gehen dürfen'
        ]
      },
      {
        title: 'Typische Bausteine',
        type: 'grid',
        subtitle: 'Wir sind an kein Tool gebunden und arbeiten mit dem, was zu Ihnen passt.',
        items: [
          { title: 'CRM', desc: 'Kundendaten, Verkaufschancen und Aufgaben an einem Ort, als gemeinsame Grundlage für Marketing, Vertrieb und alle Automatisierungen.' },
          { title: 'Website und Formulare', desc: 'Anfragen landen mit Quelle und Angaben direkt im CRM, ohne Abtippen.' },
          { title: 'E-Mail und Newsletter', desc: 'Versand und Abmeldungen laufen mit dem CRM zusammen, nicht in einer separaten Liste.' },
          { title: 'Werbekonten', desc: 'Google, Meta und LinkedIn erhalten zurück, welche Anfragen zu Aufträgen wurden, und ihre Gebotsalgorithmen lernen daraus.' },
          { title: 'Tracking und Reporting', desc: 'Eine Auswertung mit denselben Zahlen für alle, von der Anfrage bis zum Auftrag.' },
          { title: 'Automatisierung', desc: 'n8n, Windmill, Make oder Zapier verbinden die Systeme und führen feste Abläufe aus. Darauf setzen auch KI-Agenten auf.' },
          { title: 'Sprachmodelle', desc: 'Über eine Schnittstelle angebunden, mit Regeln, welche Daten sie erhalten, und einem Überblick über die Kosten pro Fall.' }
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
      { q: 'Müssen wir unser CRM wechseln?', a: 'Selten. Oft lässt sich das vorhandene CRM besser nutzen und mit den anderen Tools verbinden. Ein Wechsel lohnt sich erst, wenn das System Ihre Abläufe grundsätzlich nicht abbilden kann oder keine brauchbare Schnittstelle bietet.' },
      { q: 'Brauchen wir für KI-Agenten neue Software?', a: 'Selten. Entscheidend ist, ob Ihre bestehenden Tools Schnittstellen bieten, ob die Daten sauber sind und ob sich Zugänge mit eingeschränkten Rechten einrichten lassen. Das prüfen wir im Stack-Check.' },
      { q: 'Was bringt ein Stack-Check?', a: 'Sie wissen danach, welche Tools Sie haben, was sie kosten, wer sie nutzt und wo Daten von Hand übertragen werden. Häufig zeigt sich dabei, dass sich Lizenzen einsparen lassen. Wie viel, hängt vom Einzelfall ab.' },
      { q: 'Können wir den Check selbst machen?', a: 'Ja, für einen ersten Überblick. In der Skill-Factory finden Sie die Checkliste «Stack-Inventur» kostenlos und ohne Anmeldung. Für das Zielbild und den Umbau lohnt sich ein Blick von aussen.' },
      { q: 'Was kostet das?', a: 'Wir arbeiten mit Festpreisen für ein klar definiertes Ergebnis, nicht nach Stunden. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot mit Umfang, Ergebnis und Preis.' }
    ],
    cta: {
      headline: 'Wie sieht Ihr Werkzeugkasten heute aus?',
      subheadline: 'Eine Liste Ihrer heutigen Tools reicht als Ausgangspunkt. Wir schauen gemeinsam, wo sie zusammenarbeiten, wo Daten noch von Hand übertragen werden und was fehlt, damit Automatisierung darauf halten kann.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'data-analytics',
    hero: {
      headline: 'Sehen, welche Kanäle Ihnen Kunden bringen.',
      subheadline: 'Wir richten Tracking, Attribution und Berichte so ein, dass Sie sehen, welche Kampagnen Anfragen und Umsatz bringen. Dieselben Daten gehen an Google, Meta und LinkedIn zurück, damit deren Gebotsalgorithmen auf Aufträge statt auf Klicks optimieren.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Viele Daten, wenig Klarheit',
      paragraphs: [
        'Die meisten Unternehmen haben genug Daten, aber kein klares Bild davon, was ihr Marketing bringt.',
        'Es fehlen Berichte, die bei Entscheidungen helfen. Dashboards zeigen Klicks statt Umsatz, die Kennzahlen versteht kaum jemand, und welcher Kanal tatsächlich Kunden bringt, weiss niemand genau.',
        'Dazu kommt, dass Werbeplattformen heute mit lernenden Algorithmen steuern, wem eine Anzeige gezeigt wird. Sie optimieren auf das Signal, das sie erhalten. Ist das ein Formularklick statt einer qualifizierten Anfrage, kauft das Konto mehr Formularklicks ein.',
        'Entschieden wird deshalb oft nach Bauchgefühl, und Fehler in der Messung fallen erst auf, wenn der Monatsbericht nicht mehr stimmt.'
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
          title: 'Rückmeldung an die Werbekonten',
          desc: 'Qualifizierte Anfragen und Aufträge aus dem CRM werden automatisch an Google Ads, Meta und LinkedIn übermittelt, etwa als Offline-Conversions oder über die Conversions API. So lernen die Gebotsalgorithmen, welche Klicks zu Umsatz führen.'
        },
        {
          title: 'Automatische Prüfung der Daten',
          desc: 'Feste Regeln prüfen täglich, ob Tags auslösen, Conversions ankommen und Werte plausibel sind. Bricht eine Messung weg, erfahren Sie es am selben Tag und nicht erst im Monatsbericht.'
        },
        {
          title: 'Auffälligkeiten eingeordnet',
          desc: 'Ein Modell vergleicht die Zahlen mit den Vorwochen, markiert ungewöhnliche Abweichungen und schreibt eine kurze Einordnung mit möglichen Ursachen. Die Schlüsse zieht Ihr Team.'
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
          title: 'A/B-Tests',
          desc: 'Wir testen Änderungen mit einer klaren Annahme vorab und mit genug Daten, damit das Ergebnis aussagekräftig ist.'
        },
        {
          title: 'Regelmässige Berichte',
          desc: 'Monats- und Quartalsberichte für die Geschäftsleitung. Die Zahlen stellt ein fester Ablauf zusammen, den Kommentar entwirft ein Modell, und wir prüfen ihn, bevor er an Sie geht.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Prüfung der bestehenden Daten',
          desc: 'Wir prüfen Tracking, Einwilligungen, CRM-Daten und bestehende Berichte und halten fest, was heute gemessen wird, was fehlt, wo Fehler stecken und welche Signale an die Werbekonten zurückgehen.'
        },
        {
          title: 'Kennzahlen festlegen',
          desc: 'Wir legen die wenigen Kennzahlen fest, die für Ihre Entscheidungen tatsächlich zählen, und definieren, was als qualifizierte Anfrage an die Plattformen gemeldet wird.'
        },
        {
          title: 'Einrichtung',
          desc: 'Wir setzen das Tracking um, verbinden die Datenquellen, richten die Rückmeldung an die Werbekonten und die automatischen Prüfungen ein und bauen Dashboards, die für Ihr Team verständlich sind.'
        },
        {
          title: 'Einführung im Team',
          desc: 'Ein Dashboard nützt nur, wenn es gelesen wird. Wir zeigen Ihrem Team, wie es die Zahlen und die automatischen Hinweise liest und daraus Entscheidungen ableitet.'
        },
        {
          title: 'Laufende Auswertung',
          desc: 'Die Prüfungen laufen täglich. Einmal im Monat werten wir gemeinsam aus, was sich verändert hat, und geben konkrete Empfehlungen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Warum Messung heute auch die Werbung steuert',
        type: 'text',
        text: 'Smart Bidding bei Google, Advantage+ bei Meta und die Gebotsstrategien von LinkedIn entscheiden selbst, wem eine Anzeige gezeigt wird. Sie lernen aus den Conversions, die Sie ihnen melden. Wer nur Formularabsendungen meldet, bekommt mehr Formularabsendungen, auch unpassende. Wer qualifizierte Anfragen oder Auftragswerte zurückmeldet, gibt dem Algorithmus ein besseres Ziel. Einwilligung und Datenschutz klären wir dabei vorab, nach Schweizer DSG und, wo nötig, nach DSGVO.'
      },
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'Webanalyse', desc: 'Google Analytics 4, Matomo, Mixpanel' },
          { title: 'Dashboards', desc: 'Looker Studio, Power BI, HubSpot Dashboards' },
          { title: 'Attribution', desc: 'Google Analytics, Triple Whale, Northbeam' },
          { title: 'Tracking', desc: 'Google Tag Manager (auch serverseitig), Segment' },
          { title: 'CRM-Auswertungen', desc: 'HubSpot, Salesforce Reports, Pipedrive Insights' },
          { title: 'Testing', desc: 'VWO, Optimizely' },
          { title: 'Datenflüsse und Prüfungen', desc: 'n8n, Windmill, Schnittstellen der Werbeplattformen' }
        ]
      }
    ],
    faq: [
      {
        q: 'Brauchen wir eine Datenspezialistin oder einen Datenspezialisten im Team?',
        a: 'Nicht unbedingt. Wir richten die Berichte so ein, dass sie auch ohne Datenhintergrund verständlich sind, und die automatischen Prüfungen melden sich, wenn etwas nicht stimmt. Bei komplexeren Fragen begleiten wir Sie weiter.'
      },
      {
        q: 'Unsere Daten sind ein Durcheinander. Lässt sich das beheben?',
        a: 'Ja, aber es braucht Zeit. Ein sauberes Tracking-Setup steht oft innert zwei bis vier Wochen. Bis genug saubere Daten für verlässliche Aussagen gesammelt sind, vergehen meist weitere Wochen, je nach Besucherzahl und Anzahl Anfragen.'
      },
      {
        q: 'Was ist Server-Side Tagging?',
        a: 'Beim Server-Side Tagging laufen die Messdaten zuerst über einen eigenen Server, bevor sie an Google, Meta oder LinkedIn gehen. Sie bestimmen, welche Daten weitergegeben werden, und die Messung ist weniger anfällig für Einschränkungen im Browser. Eine Einwilligung, wo sie nötig ist, ersetzt das nicht.'
      },
      {
        q: 'Wie oft sollten wir die Zahlen anschauen?',
        a: 'Für laufende Kampagnen wöchentlich, für strategische Entscheide monatlich und pro Quartal. Ob die Messung funktioniert, prüft ein fester Ablauf jeden Tag, dafür muss niemand ins Dashboard schauen.'
      },
      {
        q: 'Was, wenn wir noch gar kein Tracking haben?',
        a: 'Dann beginnen wir dort. Ohne verlässliche Messung lässt sich Marketing nicht sinnvoll steuern, und die Werbeplattformen optimieren ins Blaue. Deshalb hat ein sauberes Tracking-Setup Vorrang vor neuen Kampagnen.'
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
      subheadline: 'Wir planen und betreuen Ihr Performance Marketing auf Google, LinkedIn und Meta. Die Kampagnen lernen aus echten Aufträgen statt aus Klicks. Ein Agent überwacht sie täglich und meldet Auffälligkeiten, über Budget und Gebote entscheidet ein Mensch.',
      ctaText: 'Kampagnen besprechen'
    },
    problem: {
      title: 'Viele Klicks, zu wenig passende Anfragen',
      paragraphs: [
        'Viele B2B-Unternehmen kennen diese Situation. Kampagnen bringen Klicks, aber kaum qualifizierte Anfragen, und niemand weiss genau, welcher Kanal tatsächlich funktioniert.',
        'Google, Meta und LinkedIn steuern heute mit eigenen Algorithmen, wem eine Anzeige gezeigt wird. Diese optimieren auf das, was das Konto als Erfolg meldet. Zählt dort jeder Formularklick, werden mehr Formularklicks eingekauft, auch unpassende.',
        'Selten liegt das Problem an einem einzelnen Kanal. Meist passen Zielgruppe, Botschaft, Landingpage und Messung nicht zusammen, und die Kontrolle hängt an jemandem, der einmal pro Woche ins Konto schaut. Dort setzen wir an.'
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
          title: 'Signale aus dem CRM',
          desc: 'Qualifizierte Anfragen und Aufträge fliessen automatisch aus dem CRM zurück in Google Ads, Meta und LinkedIn. So optimieren die Gebotsstrategien auf Aufträge statt auf Klicks.'
        },
        {
          title: 'Kampagnenbetreuung',
          desc: 'Wir bauen und betreuen Ihre Google Ads, LinkedIn Ads und Meta Ads, von der Kontostruktur über Suchbegriffe bis zu den Landingpages. Das Budget fliesst dorthin, wo Anfragen entstehen.'
        },
        {
          title: 'Tägliche Überwachung',
          desc: 'Ein Agent prüft täglich Kosten pro Anfrage, Suchbegriffe und Auslieferung und meldet Abweichungen mit einem Vorschlag. Budget- und Gebotsänderungen geben wir oder Ihr Team frei.'
        },
        {
          title: 'Anzeigen entwickeln und testen',
          desc: 'Varianten für Anzeigentexte entstehen als Entwurf aus Ihrer Positionierung und echten Kundenfragen. Wir wählen aus, schärfen nach und testen. Was ankommt, entscheiden die Zahlen.'
        },
        {
          title: 'Laufende Optimierung',
          desc: 'Wir werten jede Woche aus und berichten monatlich. Was funktioniert, bauen wir aus, was nicht funktioniert, stoppen wir.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Ausgangslage verstehen',
          desc: 'Wir schauen uns Ihr Geschäft, Ihre Zielgruppe und Ihre heutigen Anfragen an, woher sie kommen und an welchen Stellen Interessenten abspringen.'
        },
        {
          title: 'Messung und Signale prüfen',
          desc: 'Wir prüfen, was heute als Conversion zählt, ob Anfragen mit Quelle im CRM landen und welche Rückmeldung die Werbeplattformen erhalten. Oft liegt hier der grösste Hebel.'
        },
        {
          title: 'Plan festlegen',
          desc: 'Wir legen Kanäle, Budget und Prioritäten fest und halten fest, was automatisch überwacht wird und welche Änderungen eine Freigabe brauchen. Ein Standardpaket gibt es nicht.'
        },
        {
          title: 'Ergebnisse messen',
          desc: 'Wir messen Kosten pro Anfrage, Anfragequote, Verkaufschancen und Werbeumsatz. So sehen Sie jederzeit, was Ihr Budget bringt.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wer in Ihren Kampagnen was entscheidet',
        type: 'list',
        bullets: [
          'Feste Regeln übertragen Anfragen mit Quelle ins CRM und melden qualifizierte Anfragen an die Werbekonten zurück',
          'Ein Agent überwacht täglich Kosten, Suchbegriffe und Auslieferung und meldet Auffälligkeiten mit Vorschlag',
          'Anzeigenvarianten entstehen als Entwurf, online gehen sie erst nach Prüfung',
          'Budget, Gebote und neue Kampagnen gibt ein Mensch frei, und jede Änderung ist protokolliert'
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
          { title: 'Inhalte & SEO', desc: 'Langfristige Sichtbarkeit bei Google und in KI-Antworten mit Inhalten, die passende Besucher anziehen.' },
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
        q: 'Steuert ein KI-Agent unser Werbebudget?',
        a: 'Nein. Der Agent überwacht, meldet und schlägt vor. Kleine, vorher definierte Korrekturen, etwa das Ausschliessen eindeutig unpassender Suchbegriffe, kann er auf Wunsch innerhalb fester Grenzen selbst ausführen. Budget, Gebotsstrategie und neue Kampagnen gibt immer ein Mensch frei.'
      },
      {
        q: 'Brauchen wir ein grosses Budget?',
        a: 'Nein, aber ein passendes. Das Werbebudget muss genug Klicks ermöglichen, damit nach einigen Wochen aussagekräftige Daten vorliegen und die Gebotsalgorithmen lernen können. Was das bei Ihnen bedeutet, hängt von den Klickpreisen in Ihrer Branche ab. Das rechnen wir im Erstgespräch gemeinsam durch, bevor Sie etwas ausgeben.'
      },
      {
        q: 'Was unterscheidet Sie von einer Werbeagentur?',
        a: 'Wir messen den Erfolg an Anfragen und Verkaufschancen, nicht an Klicks und Impressionen, und verbinden die Kampagnen dafür mit Ihrem CRM. Kampagnen, Landingpages, Tracking und die Übergabe an Ihren Vertrieb betreut Yathur Nathan persönlich, die tägliche Überwachung übernimmt ein Agent.'
      }
    ],
    cta: {
      headline: 'Mehr passende Anfragen für Ihren Vertrieb.',
      subheadline: 'Wir schauen auf Ihre heutigen Kampagnen, Ihre Messung und Ihre Anfragen und skizzieren, welche Kanäle und welches Budget für Sie sinnvoll wären.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'growth-strategy',
    hero: {
      headline: 'Ein klarer Plan, wie Sie neue Kunden gewinnen.',
      subheadline: 'Wir legen mit Ihnen fest, wen Sie ansprechen, womit Sie überzeugen und über welche Kanäle Sie Ihre Wunschkunden erreichen. Der Plan zeigt auch, welche Schritte der Kundengewinnung künftig automatisch laufen und welche Daten es dafür braucht.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Wachstum, das eher zufällig entsteht',
      paragraphs: [
        'Viele Unternehmen wachsen, ohne genau zu wissen, warum.',
        'Ein Kanal funktioniert, eine Kampagne bringt Anfragen, aber es steht kein Plan dahinter. Dadurch lässt sich Wachstum schlecht planen und kaum wiederholen.',
        'Spätestens wenn ein Kanal nachlässt oder das Budget steigen soll, fehlt die Grundlage für den Entscheid.',
        'Dasselbe zeigt sich, sobald Abläufe automatisiert werden sollen. Ein Lead-Scoring braucht eine schriftliche Beschreibung des Wunschkunden, eine Kampagne ein messbares Ziel. Fehlt beides, automatisiert man das Durcheinander.'
      ]
    },
    leistet: {
      title: 'Was die Strategiearbeit umfasst',
      items: [
        {
          title: 'Wunschkunden festlegen',
          desc: 'Wer sind Ihre besten Kunden? Branche und Grösse sind nur der Anfang. Wichtiger ist, wer das Problem hat, das Sie lösen, und bereit ist, dafür zu bezahlen. Wir beschreiben das so genau, dass sich daraus Kriterien für Kampagnen und Lead-Scoring ableiten lassen.'
        },
        {
          title: 'Markt- und Wettbewerbsrecherche',
          desc: 'Ein agentischer Workflow sammelt Angebote, Preise und Positionierungen von Mitbewerbern und verdichtet sie. Wir prüfen die Quellen und nutzen das Ergebnis als Grundlage für den Workshop.'
        },
        {
          title: 'Ihre eigenen Daten auswerten',
          desc: 'Bisherige Anfragen, Offerten und gewonnene Aufträge werten wir mit KI-Unterstützung nach Mustern aus, etwa welche Branchen oder Anlässe zu Aufträgen führen. Ihr Team ordnet die Ergebnisse ein.'
        },
        {
          title: 'Positionierung',
          desc: 'Warum sollte jemand Sie wählen und nicht die Konkurrenz? Wir arbeiten ein klares Unterscheidungsmerkmal heraus, das Ihr Team versteht und weitergeben kann.'
        },
        {
          title: 'Vermarktungsplan',
          desc: 'Wir legen Kanäle, Botschaften und Reihenfolge in einem realistischen Plan mit Meilensteinen fest. Für jeden Schritt steht darin, ob er von Hand, nach festen Regeln oder mit KI-Unterstützung läuft.'
        },
        {
          title: 'Prioritäten setzen',
          desc: 'Nicht jede Massnahme bringt gleich viel. Wir zeigen, wo Ihr Budget und Ihre Zeit am meisten bewirken.'
        },
        {
          title: 'Kennzahlen festlegen',
          desc: 'Wir legen wenige Kennzahlen fest, an denen Sie den Fortschritt ablesen, etwa Anfragen pro Monat oder Kosten pro Neukunde, und klären, aus welchen Systemen sie automatisch kommen.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (Woche 1–2)',
          desc: 'Ein agentischer Workflow recherchiert Markt und Mitbewerber, und wir werten Ihre bisherigen Anfragen und Kunden aus. So sehen wir, wo Sie schon wachsen und wo Chancen liegen bleiben.'
        },
        {
          title: 'Strategie-Workshop (Woche 2–3)',
          desc: 'Gemeinsam erarbeiten wir Zielkunden, Positionierung und Prioritäten. Ihr Team bringt das Wissen über Markt und Kunden ein, wir die Struktur und die aufbereiteten Daten.'
        },
        {
          title: 'Wachstumsplan (Woche 3–4)',
          desc: 'Sie erhalten einen umsetzbaren Plan mit Prioritäten, Zeitplan und Kennzahlen. Er beschreibt auch, welche Daten und Automatisierungen die Umsetzung braucht.'
        },
        {
          title: 'Begleitung der Umsetzung (laufend)',
          desc: 'Die Kennzahlen laufen automatisch in ein Dashboard. Wir besprechen sie regelmässig, helfen beim Priorisieren und passen den Plan an, wenn sich Ihre Situation ändert.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Warum eine Strategie heute auch Kriterien liefern muss',
        type: 'text',
        text: 'Automatisierte Abläufe und KI arbeiten nur so gut wie die Vorgaben, die sie erhalten. Ein Agent, der Anfragen einordnet, braucht nachvollziehbare Kriterien, und die Gebotsalgorithmen von Google oder LinkedIn brauchen ein messbares Ziel. Deshalb halten wir die Ergebnisse der Strategiearbeit so fest, dass Menschen und Systeme damit arbeiten können. Die Entscheide über Zielkunden, Positionierung und Budget treffen Sie mit uns, nicht ein Modell.'
      },
      {
        title: 'Was Sie danach wissen',
        type: 'list',
        subtitle: 'Nach der Strategiearbeit wissen Sie:',
        bullets: [
          'Wer Ihr Wunschkunde ist, klar beschrieben',
          'Was Sie von Mitbewerbern unterscheidet, in einfachen Worten',
          'Welche Kanäle und Massnahmen Vorrang haben',
          'Welche Schritte automatisch laufen sollen und welche Daten es dafür braucht',
          'An welchen Kennzahlen Sie Fortschritt messen',
          'Was der nächste konkrete Schritt ist'
        ]
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
        q: 'Übernimmt KI die Strategiearbeit?',
        a: 'Nein. KI beschleunigt die Recherche und die Auswertung Ihrer Daten, und erste Entwürfe für Zielkundenprofile entstehen schneller. Ob ein Markt attraktiv ist und wofür Ihr Unternehmen stehen soll, entscheiden Menschen, die Ihr Geschäft kennen.'
      },
      {
        q: 'Was ist der Unterschied zu einer klassischen Strategieberatung?',
        a: 'Wir erarbeiten die Strategie und setzen sie auch um, von Kampagnen über Landingpages bis zum Tracking und den Automatisierungen dahinter. Sie erhalten keinen Bericht, mit dem Sie danach allein bleiben.'
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
      subheadline: 'Wir sorgen dafür, dass Interessenten Sie bei Google und in KI-Assistenten wie ChatGPT finden und sich melden. Dafür setzen wir SEO, GEO, Inhalte und Landingpages ein. Jede neue Anfrage wird automatisch angereichert und per Lead-Scoring eingeordnet, bevor sie beim Vertrieb ankommt.',
      ctaText: 'Ausgangslage besprechen'
    },
    problem: {
      title: 'Besucher ja, Anfragen kaum',
      paragraphs: [
        'Viele Unternehmen haben Besucher auf der Website, aber kaum Anfragen, oder die Anfragen passen nicht. Oft fehlt schlicht ein Weg, aus Interesse eine konkrete Anfrage zu machen.',
        'Inhalte werden erstellt, aber bei Google nicht gefunden. Gleichzeitig informieren sich Entscheider zunehmend über ChatGPT, Perplexity oder die KI-Übersichten von Google und erhalten dort eine Antwort, ohne eine Website zu besuchen.',
        'Was fehlt, ist ein klarer Weg vom ersten Kontakt bis zur Anfrage, mit Inhalten, die Menschen und KI-Assistenten verstehen. Und wenn die Anfrage kommt, zählt die Reaktion. Bleibt sie einen Tag liegen, hat der Interessent oft schon weitergesucht.'
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
          title: 'Sichtbarkeit in KI-Antworten (GEO)',
          desc: 'Generative Engine Optimization heisst, Inhalte so aufzubereiten, dass KI-Assistenten Ihr Angebot verstehen und korrekt wiedergeben. Dazu gehören klare Definitionen, strukturierte Daten und Fachinhalte mit Quellen. Wie die Assistenten Sie nennen, prüfen wir regelmässig mit einem festen Satz von Fragen.'
        },
        {
          title: 'SEO-Grundlagen',
          desc: 'Technisches SEO, Keyword-Planung, strukturierte Daten und thematisch verknüpfte Inhalte. So entsteht Sichtbarkeit, die langfristig Anfragen bringt, ohne für jeden Klick zu bezahlen.'
        },
        {
          title: 'Inhalte mit Plan',
          desc: 'Ein Themenplan, der sich an echten Fragen Ihrer Kunden orientiert, aus Gesprächen, Anfragen und Suchdaten. Entwürfe entstehen mit KI-Unterstützung, Fachwissen, eigene Beispiele und die Freigabe kommen von Ihnen und uns.'
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
          title: 'Anfragen anreichern und bewerten',
          desc: 'Jede neue Anfrage wird mit Firmendaten ergänzt und erhält per Lead-Scoring Punkte nach Ihren Kriterien, etwa Branche, Firmengrösse oder Verhalten auf der Website. Die Punkte vergibt eine nachvollziehbare Regel, die Zusammenfassung schreibt ein Modell, und Ihr Vertrieb kann beides ändern.'
        },
        {
          title: 'Direktansprache mit Recherche',
          desc: 'Für Wunschfirmen recherchiert ein Agent Anlass und Ansprechpartner und entwirft eine persönliche Nachricht per E-Mail oder LinkedIn. Verschickt wird erst, wenn jemand den Entwurf geprüft hat.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Zielgruppe verstehen',
          desc: 'Wir klären, wer Ihre Wunschkunden sind, welche Probleme sie lösen wollen und wonach sie bei Google und in KI-Assistenten fragen.'
        },
        {
          title: 'Bestehende Inhalte prüfen',
          desc: 'Wir prüfen, welche Inhalte es gibt, welche gefunden werden, welche Anfragen bringen und wie KI-Assistenten Ihr Unternehmen heute beschreiben. Darauf bauen wir auf.'
        },
        {
          title: 'Keyword- und Themenplan',
          desc: 'Wir legen Themen, Suchbegriffe und Formate fest und priorisieren Suchbegriffe, hinter denen eine Kaufabsicht steht.'
        },
        {
          title: 'Inhalte erstellen und optimieren',
          desc: 'Recherche und erste Entwürfe entstehen mit KI-Unterstützung. Wir ergänzen Fachwissen und Quellen und bereiten die Inhalte mit klarer Struktur, interner Verlinkung und sauberer Technik auf.'
        },
        {
          title: 'Anfragequote verbessern',
          desc: 'Wir testen Landingpages und Handlungsaufforderungen und prüfen mit Ihrem Vertrieb, ob die Bewertung der Anfragen zur Realität passt.'
        },
        {
          title: 'Bericht',
          desc: 'Jeden Monat sehen Sie, welche Inhalte gefunden werden, wie KI-Assistenten Sie nennen, welche Inhalte Anfragen bringen und wo Lücken sind. Danach richten wir die nächsten Schritte aus.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Was automatisch läuft und was geprüft wird',
        type: 'list',
        bullets: [
          'Recherche zu Suchbegriffen und zu Fragen an KI-Assistenten läuft KI-gestützt, die Auswahl treffen wir mit Ihnen',
          'Entwürfe für Fachinhalte prüfen und schärfen wir mit Ihrem Fachwissen, bevor etwas online geht',
          'Anreicherung und Lead-Scoring laufen automatisch, die Kriterien legt Ihr Vertrieb fest',
          'Nachrichten an Wunschfirmen gehen nur nach Freigabe hinaus'
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
        q: 'Schreibt bei Ihnen KI die Inhalte?',
        a: 'KI liefert Recherche und erste Entwürfe. Inhalte, die gefunden und zitiert werden sollen, brauchen aber Fachwissen, eigene Beispiele und Quellen. Das ergänzen wir mit Ihnen, und veröffentlicht wird erst nach Prüfung.'
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
        a: 'Nicht zwingend. Kombiniert funktioniert es aber meist besser. Werbung bringt Anfragen ab den ersten Wochen, Inhalte und SEO bauen langfristig Sichtbarkeit auf.'
      }
    ],
    cta: {
      headline: 'Mehr Anfragen über Ihre Website.',
      subheadline: 'Wir schauen, wofür Sie bei Google und in KI-Assistenten heute gefunden werden und an welchen Stellen Ihrer Website Anfragen verloren gehen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'marketing-automation',
    hero: {
      headline: 'Keine Anfrage mehr, die im Posteingang liegen bleibt.',
      subheadline: 'Wir richten CRM und Marketing Automation so ein, dass jede Anfrage automatisch erfasst, zugewiesen und weiterbegleitet wird. KI fasst Anfragen zusammen und bereitet Folge-E-Mails vor, und Ihr Vertrieb sieht, wer bereit für ein Gespräch ist.',
      ctaText: 'CRM und Abläufe besprechen'
    },
    problem: {
      title: 'Anfragen kommen rein und versanden',
      paragraphs: [
        'Eine Anfrage trifft ein, und dann passiert nichts. Niemand fasst nach, weil nicht geregelt ist, wer zuständig ist.',
        'Oder vieles läuft von Hand, kostet Zeit und ist fehleranfällig. Die Tools sind nicht miteinander verbunden, und die Daten im CRM sind veraltet oder lückenhaft.',
        'So gehen Interessenten verloren, die eigentlich kaufen würden. Und solange die Daten im CRM nicht stimmen, kann auch keine Automatisierung und kein KI-Agent verlässlich darauf arbeiten.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie einrichten',
      items: [
        {
          title: 'CRM aufbauen oder aufräumen',
          desc: 'Ein CRM mit klarer Struktur, eindeutigen Verkaufsphasen in der Pipeline und Feldern, die Menschen und Automatisierungen gleich verstehen. Es wird zur gemeinsamen Grundlage für Marketing, Vertrieb und alle Abläufe, die darauf aufbauen.'
        },
        {
          title: 'Erfassung und Zuweisung',
          desc: 'Anfragen aus Website, Formularen und Kampagnen landen mit Quelle im CRM und gehen nach festen Regeln an die zuständige Person. Das ist bewusst Regelarbeit, weil sie dort am verlässlichsten ist.'
        },
        {
          title: 'Kontakte bewerten',
          desc: 'Lead-Scoring im CRM, also eine Punktebewertung nach Profil und Verhalten, zeigt, welche Kontakte bereit für ein Gespräch sind. Wir beginnen mit einfachen, nachvollziehbaren Punkten und prüfen erst danach, ob ein Modell die Bewertung verbessert.'
        },
        {
          title: 'Interessenten weiterbegleiten',
          desc: 'E-Mail-Abläufe schicken Kontakten passende Inhalte, je nach Verhalten, Interesse und Stand der Entscheidung. Die Auslöser sind fest geregelt, Varianten und persönliche Einleitungen entwirft KI aus freigegebenen Textbausteinen.'
        },
        {
          title: 'Anfragen zusammenfassen und ergänzen',
          desc: 'Eingehende Anfragen und lange E-Mail-Verläufe werden im CRM zusammengefasst, fehlende Firmendaten ergänzt. Eindeutige Dubletten führt eine Regel zusammen, unklare Fälle prüft ein Mensch.'
        },
        {
          title: 'Übergabe an den Vertrieb',
          desc: 'Klare Regeln, wann eine Anfrage vom Marketing an den Vertrieb geht. Sie kommt mit Zusammenfassung, Bewertung und Verlauf an, und niemand muss nachfragen.'
        },
        {
          title: 'Tools verbinden',
          desc: 'Wir verbinden Ihre bestehenden Tools wie HubSpot, Salesforce, Pipedrive, Mailchimp oder Intercom. Die Daten fliessen automatisch, niemand muss sie abtippen.'
        },
        {
          title: 'Automatische Berichte',
          desc: 'Dashboards zeigen Ihnen regelmässig, was die automatisierten Abläufe bringen, ohne dass jemand Zahlen zusammensuchen muss.'
        }
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
          desc: 'Wir planen die CRM-Struktur, die E-Mail-Strecken und die Kriterien für das Lead-Scoring. Für jeden Schritt legen wir fest, ob er als Regel läuft, ob KI unterstützt und was eine Freigabe braucht.'
        },
        {
          title: 'Umsetzung (Woche 3–6)',
          desc: 'Wir bauen die Abläufe auf, verbinden die Tools und richten das CRM ein. Alles wird mit echten Anfragen getestet, bevor es live geht.'
        },
        {
          title: 'Übergabe und Schulung (Woche 6–8)',
          desc: 'Ihr Team lernt das System kennen, mit Dokumentation und Feedback-Runden, damit es im Alltag auch genutzt wird.'
        },
        {
          title: 'Optimierung (laufend)',
          desc: 'Anhand der Zahlen und der Fehlerprotokolle passen wir Abläufe an, testen E-Mail-Strecken und schärfen die Bewertungskriterien nach.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Regel, KI und Freigabe im CRM',
        type: 'list',
        bullets: [
          'Erfassung, Zuweisung, Erinnerungen und Abmeldungen laufen nach festen Regeln',
          'Zusammenfassungen, Datenergänzung und Entwürfe für Folge-E-Mails bereitet KI vor',
          'Was persönlich an einen Kunden geht und jede Änderung an den Kriterien gibt Ihr Team frei',
          'Vor dem Start schriftlich festgelegt, welche Daten an ein KI-Modell gehen dürfen und wer auf welche Felder zugreift'
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
          { title: 'n8n / Make / Zapier', desc: 'Verbindungen zwischen Tools und feste Abläufe, n8n auch auf eigenen Servern.' },
          { title: 'Brevo / Mailchimp', desc: 'E-Mail-Marketing für einfachere Anforderungen.' }
        ],
        text: 'Wir arbeiten mit Ihren bestehenden Tools. Ein Wechsel ist nur dann ein Thema, wenn er sich wirklich lohnt.'
      },
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Ihr Vertrieb erhält vorqualifizierte Anfragen mit Zusammenfassung, ohne nachfragen zu müssen.',
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
        q: 'Verschickt KI selbständig E-Mails an unsere Kontakte?',
        a: 'Automatische E-Mails aus freigegebenen Vorlagen, etwa nach einem Download, laufen nach festen Regeln. Texte, die ein Modell für eine bestimmte Person entwirft, gehen nur nach Freigabe hinaus. Einwilligungen und Abmeldungen verwaltet das CRM zentral.'
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
      subheadline: 'Erzählen Sie uns, was heute mit einer neuen Anfrage passiert. Wir skizzieren, welche Schritte CRM und feste Regeln übernehmen und wo KI Ihrem Team Vorarbeit abnimmt.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'revenue-operations',
    hero: {
      headline: 'Marketing, Vertrieb und Kundenbetreuung arbeiten mit denselben Zahlen.',
      subheadline: 'Wenn Ihre Teams mit unterschiedlichen Daten und Tools arbeiten, gehen Anfragen und Umsatz verloren. Wir bringen Abläufe, Daten und Kennzahlen zusammen und bauen darauf Prüfungen und Agenten, die Datenqualität und Pipeline laufend im Blick behalten. Im Englischen heisst das Revenue Operations, kurz RevOps.',
      ctaText: 'Erstgespräch vereinbaren (30 Min., kostenlos)'
    },
    problem: {
      title: 'Jedes Team misst etwas anderes',
      paragraphs: [
        'Viele Wachstumsprobleme liegen weder im Marketing noch im Vertrieb, sondern in den Abläufen dazwischen.',
        'Die Teams arbeiten nebeneinander her, die Daten liegen verstreut in verschiedenen Tools, und Übergaben sind nicht geregelt. Das Marketing zählt Kontakte, der Vertrieb Abschlüsse, die Kundenbetreuung Kündigungen. Den Umsatz als Ganzes betrachtet niemand.',
        'Das führt zu Doppelspurigkeiten und verlorenen Verkaufschancen, und das Wachstum lässt sich kaum vorhersagen. Automatisierung macht es nicht besser, solange jedes System etwas anderes unter einer qualifizierten Anfrage versteht.'
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
          title: 'Gemeinsame Definitionen',
          desc: 'Wann ist ein Kontakt eine Anfrage, wann eine Verkaufschance, wann ein Kunde? Wir halten das schriftlich und im CRM fest, damit Menschen, Regeln und Agenten dasselbe meinen.'
        },
        {
          title: 'Einheitliche Abläufe',
          desc: 'Marketing, Vertrieb und Kundenbetreuung arbeiten nach abgestimmten Abläufen. Übergaben laufen automatisch, mit Frist und Erinnerung, und kein Kunde fällt durchs Raster.'
        },
        {
          title: 'Tool-Landschaft aufräumen',
          desc: 'Wir prüfen, welche Tools genutzt werden, welche sich doppeln und welche fehlen, und sorgen dafür, dass sie sauber verbunden sind.'
        },
        {
          title: 'Laufende Prüfung der Datenqualität',
          desc: 'Feste Prüfungen finden fehlende Pflichtfelder und eindeutige Dubletten. Ein Agent nimmt sich die unklaren Fälle vor, ergänzt Angaben und schlägt Korrekturen vor, die Ihr Team freigibt.'
        },
        {
          title: 'Pipeline im Blick',
          desc: 'Verkaufschancen, die seit Wochen stillstehen, und überfällige Nachfass-Schritte werden automatisch erkannt. Vor der wöchentlichen Pipeline-Besprechung fasst ein Agent die wichtigsten Veränderungen zusammen.'
        },
        {
          title: 'Umsatzprognose',
          desc: 'Die Prognose rechnet nach festen Regeln aus Phasen und Erfahrungswerten, ein Modell kommentiert die Abweichungen. Die Zahl, auf die sich die Geschäftsleitung verlässt, verantwortet Ihr Vertrieb.'
        },
        {
          title: 'Berichte',
          desc: 'Ein Dashboard zeigt jede Woche, wie viele Verkaufschancen offen sind, wo Sie gegenüber den Zielen stehen und was Vorrang hat.'
        }
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
          desc: 'Wir beschreiben, wie es künftig laufen soll, mit Abläufen, Definitionen, Verbindungen zwischen Tools, Kennzahlen und Berichten. Dazu kommt, welche Prüfungen automatisch laufen und wo Agenten mitarbeiten.'
        },
        {
          title: 'Umsetzung (Woche 4–12)',
          desc: 'Wir setzen schrittweise um und beginnen mit den Bereichen, die am meisten bringen, statt alles auf einmal anzugehen. Agenten kommen erst dazu, wenn Daten und Abläufe stehen.'
        },
        {
          title: 'Einführung und Schulung (laufend)',
          desc: 'Wir begleiten die Einführung mit Schulung, Dokumentation und regelmässigen Abstimmungen, damit die neuen Abläufe genutzt werden.'
        },
        {
          title: 'Laufende Verbesserung',
          desc: 'Wir überprüfen Abläufe, Systeme und Protokolle regelmässig und passen sie anhand von Daten und Rückmeldungen an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Wer in RevOps was entscheidet',
        type: 'list',
        bullets: [
          'Feste Regeln prüfen Pflichtfelder, Fristen und Übergaben',
          'Agenten bearbeiten unklare Datensätze und bereiten Pipeline-Zusammenfassungen vor',
          'Korrekturen an Daten, Prognose und Prioritäten gibt Ihr Team frei',
          'Jeder automatische Schritt wird protokolliert, Zahlen und Entscheide bleiben nachvollziehbar'
        ]
      },
      {
        title: 'Warum sich das früh lohnt',
        type: 'text',
        text: 'Je früher Marketing, Vertrieb und Kundenbetreuung mit denselben Daten und Abläufen arbeiten, desto einfacher ist die Umstellung. Mit wenigen Mitarbeitenden und wenigen Tools ist das in Wochen erledigt. Wer wartet, bis die Datenlage unübersichtlich geworden ist, braucht für das Aufräumen deutlich mehr Zeit und Geld. Saubere Definitionen sind ausserdem die Voraussetzung dafür, dass Automatisierungen und Agenten später verlässlich arbeiten.'
      },
      {
        title: 'Tools, mit denen wir arbeiten',
        type: 'grid',
        items: [
          { title: 'CRM', desc: 'HubSpot, Salesforce, Pipedrive' },
          { title: 'Marketing Automation', desc: 'HubSpot, ActiveCampaign, Marketo' },
          { title: 'Analyse', desc: 'Google Analytics 4, Looker Studio, Tableau' },
          { title: 'Verbindungen', desc: 'n8n, Make, Zapier, native Schnittstellen' },
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
        q: 'Ändern Agenten Daten in unserem CRM?',
        a: 'Nur in dem Rahmen, den Sie festlegen. Üblich ist, dass ein Agent Korrekturen vorschlägt und Ihr Team sie freigibt. Einfache, eindeutige Ergänzungen können automatisch übernommen werden, wenn Sie das wünschen. Jede Änderung wird protokolliert und lässt sich zurücknehmen.'
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
      subheadline: 'Wir erarbeiten Argumentarien, Unterlagen und Abläufe, die im Verkauf tatsächlich helfen, und legen sie so ab, dass Ihr Team und ein KI-Agent darauf zugreifen können. Vor jedem Termin recherchiert der Agent das Unternehmen und fasst das Wichtigste mit passenden Referenzen zusammen.',
      ctaText: 'Vertriebsprozess besprechen'
    },
    problem: {
      title: 'Marketing und Vertrieb arbeiten aneinander vorbei',
      paragraphs: [
        'In vielen Unternehmen arbeiten Marketing und Vertrieb nebeneinander her.',
        'Das Marketing erstellt Unterlagen, die der Vertrieb nicht nutzt. Der Vertrieb klagt über unpassende Anfragen, das Marketing darüber, dass Anfragen liegen bleiben. Wie die Übergabe genau laufen soll, weiss niemand.',
        'Verkaufszyklen werden länger, und Verkaufschancen gehen verloren. Das Wissen, wie man ein Gespräch gewinnt, steckt in den Köpfen weniger Personen statt in Unterlagen, die alle nutzen können.'
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
          title: 'Verkaufswissen an einem Ort',
          desc: 'Referenzbeispiele, Vergleiche mit Mitbewerbern, Antworten auf häufige Einwände und Angebotsvorlagen, strukturiert abgelegt. Ihr Vertrieb findet sie schnell, und ein Agent kann sie für die Gesprächsvorbereitung nutzen.'
        },
        {
          title: 'Recherche vor dem Gespräch',
          desc: 'Vor einem Termin recherchiert ein KI-Agent das Unternehmen, die Gesprächspartner und aktuelle Themen, liest den bisherigen Verlauf im CRM und fasst das Wichtigste auf einer Seite zusammen. So arbeiten wir auch im eigenen Betrieb.'
        },
        {
          title: 'Nach dem Gespräch',
          desc: 'Gesprächsnotizen werden zusammengefasst, nächste Schritte als Aufgaben im CRM angelegt und ein Entwurf für die Nachfass-Nachricht vorbereitet. Was hinausgeht, entscheidet Ihr Vertrieb.'
        },
        {
          title: 'Klare Übergabe',
          desc: 'Verbindliche Abmachungen, wann und mit welchen Informationen eine Anfrage an den Vertrieb geht und wie schnell sich der Vertrieb meldet. Die Übergabe selbst läuft automatisch im CRM.'
        },
        {
          title: 'Offertentwürfe',
          desc: 'Aus Vorlagen und den Angaben im CRM entsteht ein erster Offertentwurf. Preise, Umfang und Konditionen legt Ihr Vertrieb fest.'
        },
        {
          title: 'Gewonnene und verlorene Abschlüsse auswerten',
          desc: 'Gesprächsnotizen und Absagegründe werten wir mit KI-Unterstützung nach Mustern aus. Die Erkenntnisse fliessen in Botschaften, Positionierung und Verkaufsargumente zurück.'
        },
        {
          title: 'Einarbeitung neuer Mitarbeitender',
          desc: 'Produktübersichten, Zielgruppenbeschreibungen und Antworten auf Einwände, mit denen sich neue Verkäuferinnen und Verkäufer schneller einarbeiten.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse (Woche 1–2)',
          desc: 'Wir schauen uns den heutigen Verkaufsprozess an, werten aus, in welcher Phase Abschlüsse verloren gehen, und führen Gespräche mit Marketing und Vertrieb.'
        },
        {
          title: 'Workshop (Woche 2–3)',
          desc: 'Marketing und Vertrieb legen gemeinsam Zielgruppen, Kriterien für Anfragen, Übergabe und Kennzahlen fest.'
        },
        {
          title: 'Verkaufswissen aufbereiten (Woche 3–8)',
          desc: 'Wir erarbeiten die wichtigsten Verkaufsunterlagen und legen sie so ab, dass Ihr Team und der Agent für die Gesprächsvorbereitung darauf zugreifen können.'
        },
        {
          title: 'Abläufe und Agent einführen (laufend)',
          desc: 'Übergaben, CRM-Felder und die Gesprächsvorbereitung durch den Agenten werden eingeführt und mit echten Terminen getestet, bis die Ergebnisse verlässlich sind.'
        },
        {
          title: 'Messen und anpassen',
          desc: 'Wir messen, wie schnell Anfragen bearbeitet werden, wie die Vorbereitung im Gespräch hilft und mit welchem Ergebnis, und passen die Abläufe daran an.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Was beim Vertrieb bleibt',
        type: 'list',
        bullets: [
          'Das Gespräch selbst und die Beziehung zum Kunden',
          'Preise, Konditionen und der Inhalt jeder Offerte',
          'Die Freigabe jeder Nachricht, die an Kunden geht',
          'Die Einschätzung, ob eine Verkaufschance realistisch ist'
        ]
      },
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Ihr Vertrieb weiss, welche Anfragen Vorrang haben.',
          'Jedes Gespräch beginnt mit Recherche und passenden Referenzen statt bei null.',
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
        q: 'Welche Quellen nutzt der Agent für die Recherche?',
        a: 'Öffentliche Quellen wie die Website des Unternehmens, das Handelsregister und Fachbeiträge sowie die Einträge in Ihrem CRM. Welche Quellen erlaubt sind und welche Personendaten verarbeitet werden, legen wir vorab fest. Der Agent schreibt nichts an Kunden, er bereitet vor.'
      },
      {
        q: 'Brauchen wir dafür ein grosses Verkaufsteam?',
        a: 'Nein. Gerade kleine Teams mit zwei bis fünf Personen im Verkauf profitieren, weil jede verlorene Anfrage stärker ins Gewicht fällt und die Vorbereitung sonst am Abend vor dem Termin passiert.'
      },
      {
        q: 'Wie lange dauert es, und wie viel Zeit braucht es von uns?',
        a: 'Die Analyse und der Workshop dauern rund drei Wochen, die Unterlagen entstehen danach über einige Wochen. Von Ihrem Team brauchen wir vor allem Zeit für Gespräche und Feedback, meist einige Stunden pro Woche.'
      },
      {
        q: 'Wie unterscheidet sich das von der Arbeit an Abläufen und Daten (RevOps)?',
        a: 'Hier geht es um Unterlagen, Gesprächsvorbereitung und Abläufe für den Vertrieb. Bei RevOps geht es um die Systeme und Daten darunter, etwa CRM und Berichte. Beides ergänzt sich.'
      }
    ],
    cta: {
      headline: 'Marketing und Vertrieb als ein Team.',
      subheadline: 'Wir besprechen, wo es bei Ihnen zwischen Marketing und Vertrieb am meisten hakt, welche Unterlagen Ihrem Vertrieb fehlen und wie viel Zeit heute in die Vorbereitung von Gesprächen fliesst.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'ecommerce-performance',
    hero: {
      headline: 'Ihr Shop hat Besucher. Wir helfen, daraus Käufer zu machen.',
      subheadline: 'Wir verbessern, was zwischen Besuch und Kauf liegt, von der Kaufquote über Wiederkäufe bis zur Werbeeffizienz. Dafür verbinden wir Shop, Werbekonten und Warenkosten so, dass Abweichungen täglich auffallen und Google und Meta nach Marge statt nach Umsatz optimieren.',
      ctaText: 'Shop-Zahlen besprechen'
    },
    problem: {
      title: 'Viele Shops verlieren Umsatz, den sie schon fast hatten',
      paragraphs: [
        'In den meisten Online-Shops kauft nur ein kleiner Teil der Besucher. Die übrigen gehen wieder, oft kurz vor dem Ziel. Das liegt selten am Algorithmus oder an zu wenig Besuchern, sondern am Ablauf im Shop.',
        'Viele Shops stecken fast ihr ganzes Budget in neue Besucher über Google, Meta oder Influencer. Was danach passiert, bleibt oft unbeachtet: warum so viele im Warenkorb abbrechen, warum jemand einmal kauft und nie wieder und warum die Werbung unter Druck steht, obwohl genug Besucher kommen.',
        'Mehr Budget allein bringt einen Shop selten dauerhaft weiter. Was hilft, sind bessere Produktseiten, ein einfacherer Checkout, E-Mails, die Kunden zurückholen, und Werbung, die nach Marge gesteuert wird. Dafür braucht es Daten, die täglich zeigen, wo Umsatz verloren geht, und nicht erst im Monatsbericht.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'Kaufquote verbessern',
          desc: 'Wir analysieren Ihren Shop mit Heatmaps, Sitzungsaufzeichnungen, Auswertung der Kaufschritte und Kundenbefragungen. Bei Befragungen und Bewertungen hilft KI, wiederkehrende Einwände zu finden. Daraus entstehen priorisierte Annahmen, die wir testen.'
        },
        {
          title: 'Werbung mit Blick auf die Marge',
          desc: 'Betreuung von Google Shopping, Meta und Performance Max. Wir übermitteln Margen oder Deckungsbeiträge als Conversion-Werte, damit die Gebotsalgorithmen margenstarke Produkte bevorzugen, und bauen nur aus, was rentiert.'
        },
        {
          title: 'Produktfeed & Katalog',
          desc: 'Titel, Beschreibungen und Attribute für das Google Merchant Center und den Meta-Katalog entstehen mit KI-Unterstützung aus Ihren Produktdaten. Feste Regeln prüfen Pflichtfelder und Richtlinien, bevor ein Feed live geht.'
        },
        {
          title: 'Wiederkäufe & E-Mail-Marketing',
          desc: 'Wiederkehrende Kunden sind meist die profitabelsten. Wir bauen automatische Abläufe für Begrüssung, die Zeit nach dem Kauf, Rückgewinnung und Treue-Anreize. Die Auslöser sind feste Regeln, Textvarianten bereitet KI vor.'
        },
        {
          title: 'Shop-Analyse & Zuordnung',
          desc: 'Damit Sie sehen, welcher Kanal rentable Kunden bringt und wo Besucher abspringen, richten wir GA4, serverseitiges Tracking, Attribution, den Einbezug der Warenkosten und verständliche Dashboards ein.'
        },
        {
          title: 'Tägliche Überwachung',
          desc: 'Feste Prüfungen und ein Agent beobachten täglich Kaufquote, Checkout-Abbrüche, Feed-Fehler und Kampagnenkosten. Fällt etwas aus dem Rahmen, erhalten Sie eine kurze Meldung mit möglicher Ursache.'
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
          desc: 'Tracking reparieren, Margendaten an die Werbekonten anbinden, Produktfeeds bereinigen, die tägliche Überwachung einrichten und die wichtigsten E-Mail-Abläufe aufsetzen.'
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
        title: 'Was automatisch läuft und was Sie entscheiden',
        type: 'list',
        bullets: [
          'Bestellungen, Margen und Feed-Daten fliessen nach festen Regeln zwischen Shop und Werbekonten',
          'Produkttexte und E-Mail-Varianten entwirft KI, veröffentlicht wird nach Prüfung',
          'Preise, Sortiment, Rabatte und Budget entscheiden Sie'
        ]
      },
      {
        title: 'Was sich für Sie ändert',
        type: 'list',
        bullets: [
          'Sie wissen, an welchen Stellen Ihr Shop Käufer verliert.',
          'Änderungen am Shop werden getestet statt nach Gefühl umgesetzt.',
          'Ausfälle im Tracking oder im Feed fallen am selben Tag auf.',
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
        q: 'Verändert KI automatisch unsere Produktdaten?',
        a: 'Nur so weit, wie Sie es festlegen. Neue Produkttexte und Feed-Anpassungen entstehen als Vorschlag. Was automatisch übernommen wird, etwa das Ergänzen fehlender Pflichtattribute, definieren wir vorab und protokollieren jede Änderung.'
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
      subheadline: 'Viele Schweizer Online-Marken haben ein starkes Produkt, aber keine stabile Kundengewinnung. Wir bauen sie auf mehreren Kanälen auf und verbinden Werbekonten mit Shop- und Kundendaten, damit Kosten pro Neukunde und Kundenwert laufend berechnet werden statt einmal im Quartal geschätzt.',
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
          desc: 'Wir ordnen Ihre Werbekonten neu, mit sauberer Kampagnenstruktur, getrennten Kampagnen für Bekanntheit und Verkauf und kontrollierter Anzeigenhäufigkeit. Meta und Google erfahren, ob ein Kauf von einem Neukunden kam, damit ihre Algorithmen gezielt neue Kunden suchen.'
        },
        {
          title: 'Kosten pro Kunde und Kundenwert',
          desc: 'Kosten pro Neukunde nach Kanal und Kampagne, Kundenwert nach Kaufmonat, Gewinnschwelle nach Produkt. Ein fester Ablauf führt die Zahlen aus Shop, Werbekonten und Warenkosten zusammen und aktualisiert sie jede Woche.'
        },
        {
          title: 'Anzeigen im festen Testrhythmus',
          desc: 'Briefings und Textvarianten entstehen mit KI-Unterstützung aus Kundenbewertungen und den Ergebnissen früherer Tests. Ein Agent meldet, wenn eine Anzeige nachlässt oder zu oft ausgespielt wird. Was live geht, entscheiden wir mit Ihnen.'
        },
        {
          title: 'Weg zum Kauf & Shop-Optimierung',
          desc: 'Wir analysieren Landingpages, Produktseiten und Checkout und finden heraus, wo Interessenten abspringen. Wenn wir diese Stellen verbessern, sinken die Kosten pro Kauf, ohne dass Sie mehr Werbebudget brauchen. Rechenbeispiel: Steigt die Kaufquote von 1 auf 2 Prozent, halbieren sich bei gleichem Budget die Werbekosten pro Kauf.'
        },
        {
          title: 'SEO und eigene Kanäle',
          desc: 'Bezahlte Werbung bringt Reichweite, eigene Kanäle schonen die Marge. Wir entwickeln eine SEO-Strategie mit Fokus auf Kaufabsicht, also Inhalte für Menschen, die nach Ihrem Produkt oder Ihrer Kategorie suchen. Mittelfristig senkt das Ihre durchschnittlichen Kosten pro Neukunde.'
        },
        {
          title: 'E-Mail & Wiederkäufe',
          desc: 'Der günstigste Kunde ist einer, den Sie schon haben. Wir bauen E-Mail-Abläufe, die aus Erstkäufern Wiederkäufer machen, von der Begrüssung bis zur Rückgewinnung. Jeder zusätzliche Wiederkauf erhöht den Kundenwert und senkt die Kosten pro Kunde.'
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
          desc: 'Wir richten Tracking, Kampagnenstruktur, erste Shop-Optimierungen und E-Mail-Abläufe ein oder reparieren sie und verbinden die Datenquellen für die wöchentliche Auswertung. Diese Phase ist weniger spektakulär als «einfach mehr Werbung», aber die Voraussetzung dafür, dass späteres Wachstum funktioniert.'
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
        text: 'Ein Beispiel: Eine Schweizer Online-Marke steckt fast das ganze Werbebudget in Meta, die Kampagnen sind über die Jahre gewachsen und unübersichtlich, und niemand weiss genau, was ein Neukunde kostet. Erste Schritte sind dann meist, das Tracking zu reparieren, die Kampagnen neu zu ordnen, den Checkout zu vereinfachen und die Kennzahlen automatisch berechnen zu lassen. Danach folgen E-Mail-Abläufe für Wiederkäufe. Erst dann lohnt es sich, das Budget zu erhöhen oder neue Kanäle zu testen.'
      },
      {
        title: 'Wer was entscheidet',
        type: 'list',
        bullets: [
          'Kosten pro Neukunde, Kundenwert und Gewinnschwelle berechnet ein fester Ablauf jede Woche neu',
          'Ein Agent beobachtet Anzeigenhäufigkeit und nachlassende Anzeigen und meldet sie mit Vorschlag',
          'Neue Anzeigen, Budget und Rabatte gibt ein Mensch frei'
        ]
      }
    ],
    faq: [
      {
        q: 'Wir schalten bereits Meta-Anzeigen. Was machen Sie anders?',
        a: 'Wir bringen Struktur in die Kampagnen, richten eine Messung ein, die nicht allein auf den Zahlen von Meta beruht, und bauen einen festen Ablauf für das Testen neuer Anzeigen auf. Der Algorithmus erhält bessere Signale, etwa ob ein Kauf von einem Neukunden kam. Ziel ist nicht mehr Budget in Meta, sondern mehr Ergebnis pro eingesetztem Franken.'
      },
      {
        q: 'Wie lange dauert es, bis wir Ergebnisse sehen?',
        a: 'Verbesserungen im Shop zeigen oft nach vier bis acht Wochen eine Wirkung, wenn klare Schwachstellen behoben werden. Neu aufgebaute Kampagnen brauchen meist sechs bis zehn Wochen, bis die Ergebnisse stabil sind. SEO und eigene Kanäle wirken über sechs bis zwölf Monate.'
      },
      {
        q: 'Wir haben ein kleines Team und wenig Zeit. Passt das zu uns?',
        a: 'Ja. Wir übernehmen Umsetzung, Überwachung und Optimierung, die laufende Kontrolle der Kampagnen ist weitgehend automatisiert. Sie erhalten regelmässige Berichte und klare Entscheidungsgrundlagen. Von Ihrer Seite braucht es vor allem Zugänge, Produktwissen und kurze Freigaben.'
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
      subheadline: 'Einen bestehenden Kunden zu halten ist in der Regel deutlich günstiger, als einen neuen zu gewinnen. Wir bauen ein System, das auf Signale wie Kaufzeitpunkt, Nutzung oder Inaktivität reagiert und Abwanderung früh erkennt. Für Online-Shops, Software-Anbieter und B2B-Dienstleister.',
      ctaText: 'Kundenbindung besprechen'
    },
    problem: {
      title: 'Wachstum nur über Neukunden ist teuer',
      paragraphs: [
        'Viele Unternehmen kennen ihre Kosten pro Neukunde genau. Was ein Kunde über zwei, drei oder fünf Jahre wert ist, wissen sie nicht, weil sich nach dem ersten Kauf niemand mehr um ihn gekümmert hat. Der Kundenwert bleibt eine Schätzung.',
        'Im E-Commerce heisst das: Ein Kunde kauft einmal, verschwindet, und ihn über Werbung zurückzuholen kostet erneut Geld, wenn er überhaupt zurückkommt. Oft fehlt einfach die Kommunikation nach dem Kauf, also ein Anlass für den zweiten Kauf und eine Nachricht im richtigen Moment.',
        'Im B2B ist das Muster ähnlich, nur teurer. Ein Kunde wird gewonnen, eingeführt, und danach passiert wenig. Es gibt kein geplantes Zusatzangebot, kein regelmässiges Gespräch und kein Warnsignal vor der Kündigung. Dabei liegen die Signale oft schon in CRM, Shop oder Supportsystem, nur schaut niemand hin.'
      ]
    },
    leistet: {
      title: 'Was wir für Sie aufbauen',
      items: [
        {
          title: 'E-Mails nach dem Kauf & Einführung',
          desc: 'Die Zeit direkt nach dem Kauf ist entscheidend und wird oft verschenkt. Wir bauen E-Mail- und SMS-Abläufe für die Zeit nach dem ersten Kauf, mit Anleitungen, passenden Ergänzungsprodukten, der Bitte um Bewertung und einer Einführung.'
        },
        {
          title: 'Auslöser statt Kalender',
          desc: 'Statt eines monatlichen Newsletters an alle reagieren die Abläufe auf das Verhalten einzelner Kunden, etwa auf den üblichen Nachkaufzeitpunkt oder eine längere Pause. Die Auslöser sind feste Regeln, die sich jederzeit prüfen lassen.'
        },
        {
          title: 'Rückgewinnung & Kündigungen vorbeugen',
          desc: 'Inaktive Kunden sind nicht verloren. Wir bauen E-Mail-Strecken, die sie mit einem passenden Anlass wieder ansprechen. Im B2B verbinden wir Frühwarnzeichen wie sinkende Nutzung, offene Supportfälle oder ausbleibende Bestellungen zu einem Hinweis an die Kundenbetreuung.'
        },
        {
          title: 'Kundengespräche vorbereiten',
          desc: 'Vor einem Verlängerungs- oder Jahresgespräch fasst ein Agent die Kundenhistorie aus CRM, Bestellungen und Supportfällen zusammen. Ihre Kundenbetreuung geht mit einem vollständigen Bild ins Gespräch.'
        },
        {
          title: 'Treue- und Wiederkaufprogramme',
          desc: 'Wir entwickeln Programme, die zu Ihrem Geschäftsmodell passen, etwa Punkte oder Stufen im E-Commerce, Empfehlungsprogramme im B2B oder besondere Konditionen für Ihre besten Kunden.'
        },
        {
          title: 'Zusatzangebote automatisieren',
          desc: 'Welche Ergänzung zu wem passt, schlägt ein Modell auf Basis von Kaufhistorie, Nutzung und Kundengruppe vor. Welche Angebote und Rabatte es überhaupt gibt, legen Sie fest.'
        },
        {
          title: 'Kundenwert & Wiederkäufe messen',
          desc: 'Wir bauen die Auswertung, die Kundenbindung sichtbar macht, mit Analyse nach Kaufmonat, Kundenwert je Gruppe, Abwanderung und Wiederkaufrate. So sehen Sie, welche Kunden wirklich rentabel sind.'
        },
        {
          title: 'E-Mail- und CRM-Grundlagen',
          desc: 'Automatische E-Mails wirken nur, wenn sie zugestellt werden und die richtigen Kunden erreichen. Wir prüfen und verbessern Zustellbarkeit, Segmente, Aufbau der Automatisierungen, CRM-Anbindung und Datenpflege.'
        }
      ]
    },
    approach: {
      title: 'So gehen wir vor',
      items: [
        {
          title: 'Analyse der Kundenbasis',
          desc: 'Wir werten Ihre Kunden nach Kaufhäufigkeit, Kundenwert, Abwanderung und Wiederkaufverhalten aus. KI hilft dabei, Gruppen mit ähnlichem Verhalten zu finden, die wir anschliessend mit Ihnen prüfen.'
        },
        {
          title: 'Grundlagen & erste Abläufe',
          desc: 'CRM und E-Mail-System einrichten, Kundengruppen und Auslöser festlegen, Dashboard aufsetzen. Die ersten Abläufe für Begrüssung und die Zeit nach dem Kauf gehen live.'
        },
        {
          title: 'Optimierung & Ausbau',
          desc: 'Wir überarbeiten die Abläufe monatlich anhand von Öffnungen, Klicks und Käufen und bauen Treueprogramm, Zusatzangebote und Frühwarnzeichen auf.'
        },
        {
          title: 'Weitere Kanäle',
          desc: 'Wenn die Grundlage steht, folgen weitere Kanäle wie WhatsApp oder SMS, Retargeting für bestimmte Kundengruppen und eine Quartalsbesprechung mit klaren Kennzahlen.'
        }
      ]
    },
    extraSections: [
      {
        title: 'Typische Ausgangslage',
        type: 'text',
        text: 'Ein Beispiel: Ein Schweizer Online-Shop hat eine solide Kundenbasis, verschickt aber ausser der Bestellbestätigung kaum E-Mails. Wiederkäufe passieren zufällig, und niemand weiss genau, wie viele Kunden ein zweites Mal bestellen. Wir beginnen dann mit einer Auswertung der Kundenbasis nach Kaufmonat, bauen E-Mails für die Zeit nach dem Kauf und eine Rückgewinnungsstrecke für inaktive Kunden auf und messen von Anfang an, wie sich die Wiederkaufrate entwickelt.'
      },
      {
        title: 'Wer was entscheidet',
        type: 'list',
        bullets: [
          'Auslöser, Versand und Abmeldungen laufen nach festen Regeln',
          'Textvarianten, Vorschläge für Kundengruppen und Zusammenfassungen vor Kundengesprächen bereitet KI vor',
          'Rabatte, Angebote und das persönliche Gespräch mit wichtigen Kunden bleiben bei Ihrem Team'
        ]
      }
    ],
    faq: [
      {
        q: 'Ab welcher Kundenzahl lohnt sich das?',
        a: 'Als grobe Orientierung lohnt sich der Aufbau im E-Commerce meist ab einigen hundert aktiven Käufern. Im B2B kann es schon mit wenigen Dutzend Kunden sinnvoll sein, weil jeder einzelne Kunde mehr wert ist. Wir prüfen das im Erstgespräch für Ihren Fall.'
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
      subheadline: 'Wir schauen gemeinsam auf Ihre Kundenbasis, wie oft heute wiederbestellt wird und welche Signale Sie schon haben, aber noch nicht nutzen.',
      buttonText: 'Erstgespräch vereinbaren'
    }
  },
  {
    slug: 'paid-social-ecommerce',
    hero: {
      headline: 'Ihr ROAS sieht gut aus. Aber verdienen Sie auch daran?',
      subheadline: 'Viele Online-Shops steuern ihre Meta- und TikTok-Kampagnen nach ROAS, also Umsatz pro Werbefranken. Produktmarge, Versandkosten und Rücksendungen stecken darin nicht. Wir steuern nach Deckungsbeitrag und melden den Plattformen Werte, die die Marge abbilden, damit ihre Algorithmen auf Gewinn statt auf Umsatz optimieren.',
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
          desc: 'TikTok funktioniert nur mit passenden Anzeigen, also natürlich wirkenden Inhalten, die nicht nach Werbung aussehen. Wir erstellen Briefings für TikTok-gerechte Anzeigen und testen Einstiege und Formate.'
        },
        {
          title: 'Tracking & Margensignale',
          desc: 'Serverseitiges Tracking (Server-Side Tagging) über die Meta Conversions API und die TikTok Events API, damit auch nach den Tracking-Einschränkungen von Apple möglichst vollständige Daten ankommen. Statt des Bestellwerts kann ein margenbasierter Wert übermittelt werden, auf den die Algorithmen dann optimieren.'
        },
        {
          title: 'Anzeigen systematisch testen',
          desc: 'Nicht jede Anzeige funktioniert, und keine funktioniert für immer. Briefings und Varianten entstehen mit KI-Unterstützung aus Kundenbewertungen und früheren Testergebnissen, mit einer klaren Annahme pro Test. Die Auswahl treffen Menschen.'
        },
        {
          title: 'Tägliche Deckungsbeitrags-Kontrolle',
          desc: 'Ein fester Ablauf verbindet täglich Werbekosten, Bestellungen und Warenkosten. Fällt eine Kampagne unter die vereinbarte Schwelle, meldet ein Agent das mit einer kurzen Einordnung.'
        },
        {
          title: 'Monatliche Gewinnauswertung',
          desc: 'Statt nur den ROAS zu zeigen, werten wir jeden Monat den Deckungsbeitrag pro Kampagne aus, den Gewinn nach Marge und Versandkosten und den kostendeckenden ROAS im Vergleich zum erreichten.'
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
          desc: 'Kampagnen werden nach Marge und Phase neu aufgebaut oder umgebaut. Serverseitiges Tracking über die Meta Conversions API und die TikTok Events API wird eingerichtet oder repariert, die Margenwerte und die tägliche Kontrolle werden angebunden.'
        },
        {
          title: 'Start & erste Tests',
          desc: 'Die Kampagnen starten mit einem festen Startbudget, die ersten Anzeigentests laufen an. Die Kontrolle läuft täglich, jede Woche werten wir aus und verteilen das Budget nach Deckungsbeitrag.'
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
        text: 'Ein Beispiel: Ein Online-Shop bewirbt vor allem Produkte, die viele Klicks bringen, aber wenig Marge haben. Der ROAS im Werbekonto wirkt ordentlich, der Gewinn nach Warenkosten, Versand und Retouren ist es nicht. Wir rechnen dann zuerst für jede Produktgruppe aus, ab welchem ROAS sie kostendeckend ist, richten serverseitiges Tracking mit margenbasierten Werten ein und bauen die Kampagnen so um, dass margenstarke Produkte mehr Budget erhalten.'
      },
      {
        title: 'Wer was entscheidet',
        type: 'list',
        bullets: [
          'Bestellungen und Margenwerte fliessen nach festen Regeln an Meta und TikTok',
          'Ein Agent meldet, wenn eine Kampagne unter die Gewinnschwelle fällt oder eine Anzeige nachlässt',
          'Budget, neue Anzeigen und den Ausbau entscheidet ein Mensch'
        ]
      }
    ],
    faq: [
      {
        q: 'Was machen Sie anders als eine klassische Performance-Agentur?',
        a: 'Viele Agenturen berichten vor allem über den ROAS, weil er einfach zu messen ist. Wir beziehen Ihre Produktmargen ein, steuern die Kampagnen nach Deckungsbeitrag und geben den Plattformen Werte, mit denen ihre Algorithmen auf Gewinn optimieren können.'
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
