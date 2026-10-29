import { ResourceItem } from '../types';

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'guide-b2b-playbook-2026',
    type: 'guide',
    title: 'Neukundengewinnung für Schweizer B2B-KMU: ein Leitfaden',
    slug: 'b2b-gtm-playbook-dach',
    description: 'Wie Schweizer KMU Marketing und Vertrieb aufeinander abstimmen und planbar neue Kunden gewinnen, ohne Massen-E-Mails und kalte Anrufe.',
    tags: ['Neukundengewinnung', 'Strategie', 'Leitfaden', 'Leads'],
    readTime: '5 Min. Lesezeit',
    publishDate: '10. Juni 2026',
    author: 'Yathur Nathan',
    content: `## Ausgangslage

Viele Schweizer KMU gewinnen ihre Kunden bis heute vor allem über Empfehlungen und persönliche Kontakte. Das funktioniert, bis das Wachstum stockt oder ein wichtiger Kontakt wegfällt. Dann stellt sich die Frage, wie neue Kunden planbarer dazukommen, ohne dass das Team stundenlang kalt telefoniert oder Massen-E-Mails verschickt.

Dieser Leitfaden zeigt, in welcher Reihenfolge wir bei performanceboost an diese Frage herangehen. Er ersetzt keine Analyse Ihrer Situation, gibt Ihnen aber eine Struktur für die ersten Schritte.

## 1. Wunschkunden klar beschreiben

Bevor Sie über Kanäle und Budgets sprechen, sollte klar sein, wen Sie gewinnen wollen. Ein brauchbares Zielkundenprofil beantwortet einige einfache Fragen:

- Welche Branchen und Unternehmensgrössen passen am besten zu Ihrem Angebot?
- Wer entscheidet beim Kunden, und wer redet mit?
- Welche Anlässe lösen den Bedarf aus, etwa ein Wechsel in der Geschäftsleitung, ein Wachstumsschritt oder neue Vorschriften?
- Welche Kunden waren in den letzten Jahren besonders gut, und was haben sie gemeinsam?

Halten Sie das Ergebnis schriftlich fest und besprechen Sie es mit dem Vertrieb. Wenn Marketing und Vertrieb unter einem guten Kunden nicht dasselbe verstehen, laufen spätere Massnahmen leicht ins Leere.

## 2. Nachfrage aufbauen statt nur Kontakte sammeln

Viele Unternehmen messen Marketing an der Anzahl Leads. Das verleitet dazu, möglichst viele E-Mail-Adressen einzusammeln, etwa über Downloads, die niemand wirklich braucht. Der Vertrieb erhält dann Kontakte, die noch gar kein Interesse an einem Gespräch haben.

Wirksamer ist es, Ihr Fachwissen offen zu zeigen: in Beiträgen auf LinkedIn, auf Ihrer Website, in Fallbeispielen oder kurzen Videos. Wer versteht, welches Problem Sie lösen und wie Sie arbeiten, meldet sich eher von sich aus und kommt besser vorbereitet ins Erstgespräch.

## 3. Kanäle gezielt wählen

Nicht jeder Kanal passt zu jedem Angebot. Als grobe Orientierung:

- Google Ads eignet sich, wenn Ihre Kunden aktiv nach einer Lösung suchen.
- LinkedIn eignet sich, wenn Sie bestimmte Branchen, Funktionen oder Unternehmensgrössen erreichen wollen.
- Meta (Facebook und Instagram) eignet sich eher für breitere Zielgruppen und um Besucher Ihrer Website erneut anzusprechen.
- Direktansprache per E-Mail oder Telefon kann sinnvoll sein, wenn die Zahl möglicher Kunden klein und gut bekannt ist. Sie sollte persönlich und gut vorbereitet sein.

Starten Sie lieber mit einem oder zwei Kanälen, die Sie sauber betreuen, als mit fünf gleichzeitig.

## 4. Gemeinsame Kennzahlen für Marketing und Vertrieb

Marketing sollte sich nicht an Klicks messen, sondern daran, wie viele qualifizierte Anfragen und Abschlüsse entstehen. Dafür braucht es ein CRM, in dem jede Anfrage mit ihrer Herkunft erfasst wird, und ein einfaches gemeinsames Reporting.

Vereinbaren Sie ausserdem, wie schnell der Vertrieb auf neue Anfragen reagiert. Wer sich erst nach Tagen meldet, trifft oft auf einen Interessenten, der bereits mit jemand anderem spricht.

## 5. Automatisieren, wo es entlastet

Automatisierung lohnt sich bei wiederkehrenden Aufgaben: Anfragen automatisch ins CRM übernehmen, eine Bestätigung verschicken, Firmendaten ergänzen oder den Vertrieb benachrichtigen. Wichtig ist, dass die Abläufe vorher klar sind. Ein unklarer Prozess wird durch Automatisierung nicht besser, nur schneller.

## Wie Sie anfangen

Wählen Sie den Schritt, bei dem Sie heute am meisten Unsicherheit haben, und beginnen Sie dort. Bei Google Ads und LinkedIn sehen Sie meist nach einigen Wochen erste belastbare Daten. Planen Sie rund drei Monate ein, bevor Sie grundsätzlich über einen Kanal entscheiden.`
  },
  {
    id: 'guide-ai-automation-marketing',
    type: 'guide',
    title: 'KI und Automatisierung im B2B-Vertrieb: ein praktischer Einstieg',
    slug: 'ai-automation-b2b-sales',
    description: 'Wie KMU mit Werkzeugen wie Make.com, n8n und HubSpot KI in ihre Vertriebsabläufe einbinden und ihrem Team Routinearbeit abnehmen.',
    tags: ['KI & Automatisierung', 'Make.com', 'n8n', 'HubSpot'],
    readTime: '4 Min. Lesezeit',
    publishDate: '18. April 2026',
    author: 'Yathur Nathan',
    content: `## Worum es geht

KI wird oft mit ChatGPT gleichgesetzt. Für den Vertrieb eines KMU ist etwas anderes interessanter: KI als Baustein in automatisierten Abläufen, die Ihrem Team Routinearbeit abnehmen. Werkzeuge wie Make.com oder n8n verbinden dazu Ihre bestehenden Systeme, etwa Website-Formulare, Kalender, CRM und E-Mail.

In diesem Beitrag zeigen wir an einem Beispiel, wie ein solcher Ablauf aussehen kann und worauf Sie achten sollten.

## Beispiel: Gesprächsvorbereitung automatisieren

Ein Interessent bucht über Ihre Website ein Erstgespräch. Bisher sucht jemand im Team vor dem Termin von Hand Informationen über das Unternehmen zusammen. Ein automatisierter Ablauf könnte so aussehen:

- Auslöser: Im Buchungstool (z. B. Calendly oder HubSpot Meetings) wird ein neuer Termin erfasst.
- Schritt 1: Der Kontakt wird automatisch im CRM angelegt oder aktualisiert.
- Schritt 2: Ein KI-Modell fasst öffentlich verfügbare Informationen zusammen, etwa von der Website des Unternehmens: Angebot, Branche, ungefähre Grösse.
- Schritt 3: Daraus entsteht eine kurze Gesprächsvorbereitung mit möglichen Fragen.
- Schritt 4: Die zuständige Person erhält die Zusammenfassung vor dem Termin per E-Mail oder direkt im CRM.

Das Ergebnis ist eine Vorbereitung, die Ihr Team prüft und ergänzt, nicht ersetzt. KI-Zusammenfassungen können Fehler enthalten. Vor dem Gespräch sollte deshalb immer ein Mensch kurz darüberschauen.

## Weitere typische Einsatzfelder

- Anfragen aus Formularen automatisch nach Thema oder Dringlichkeit vorsortieren.
- Notizen aus Verkaufsgesprächen zusammenfassen und im CRM ablegen.
- Entwürfe für Nachfass-E-Mails erstellen, die der Vertrieb vor dem Versand anpasst.
- Datensätze im CRM auf Dubletten und fehlende Angaben prüfen.

## Worauf Sie achten sollten

- Prozess vor Werkzeug: Beschreiben Sie den Ablauf zuerst auf Papier. Wenn Sie ihn nicht klar beschreiben können, lässt er sich auch nicht sinnvoll automatisieren.
- Datenschutz: Prüfen Sie, welche Personendaten an welche Dienste gehen und wo diese verarbeitet werden. Das Schweizer Datenschutzgesetz verlangt, dass Sie darüber transparent informieren.
- Klein anfangen: Ein einzelner Ablauf, der zuverlässig läuft, bringt mehr als zehn halbfertige.
- Verantwortung festlegen: Jemand im Team sollte wissen, wie der Ablauf funktioniert, und eingreifen können, wenn etwas nicht stimmt.

## Wie viel Zeit sich sparen lässt

Das hängt davon ab, wie viel Routinearbeit heute anfällt. Ein guter Startpunkt: Halten Sie eine Woche lang fest, wofür Ihr Vertrieb Zeit aufwendet, die nicht direkt mit Kunden zu tun hat. Daraus ergibt sich meist schnell, welcher Ablauf sich zuerst lohnt.`
  },
  {
    id: 'blog-demand-gen-vs-lead-gen',
    type: 'blog',
    title: 'Warum Formular-Leads im B2B oft enttäuschen und was besser funktioniert',
    slug: 'why-b2b-lead-gen-is-dead',
    description: 'Wer Inhalte hinter Formularen versteckt, erhält viele Kontakte, aber wenige Gespräche. Warum es sich lohnt, Wissen offen zu teilen und Nachfrage aufzubauen.',
    tags: ['Nachfrage aufbauen', 'B2B-Marketing', 'Strategie'],
    readTime: '3 Min. Lesezeit',
    publishDate: '29. Mai 2026',
    author: 'Yathur Nathan',
    content: `## Ein bekanntes Muster

Sie möchten eine Checkliste herunterladen und müssen dafür Ihre Telefonnummer angeben. Kurz darauf ruft ein Verkäufer an, obwohl Sie sich eigentlich nur informieren wollten. Viele kennen diese Situation, und viele reagieren darauf, indem sie falsche Angaben machen oder gar nichts mehr herunterladen.

## Was dabei schiefläuft

Das Marketing zählt jeden ausgefüllten Download als Lead. Für den Vertrieb ist ein grosser Teil davon aber noch keine echte Verkaufschance. Der Vertrieb ruft Kontakte an, die kein Gespräch wollen, die Stimmung zwischen den Teams leidet, und das Reporting sieht besser aus, als die Lage ist.

## Was besser funktioniert

Statt Wissen hinter Formularen zu verstecken, zeigen Sie es offen. Erklären Sie auf Ihrer Website, auf LinkedIn oder in kurzen Videos, welche Probleme Sie lösen, wie Sie dabei vorgehen und in welcher Grössenordnung die Kosten liegen. Interessenten können sich so selbst ein Bild machen und melden sich, wenn sie bereit für ein Gespräch sind.

Dieser Ansatz wird oft als Demand Generation bezeichnet, auf Deutsch: Nachfrage aufbauen. Die Anfragen kommen unter Umständen seltener, sind aber meist besser vorbereitet. Im Erstgespräch müssen Sie weniger erklären und können schneller über die konkrete Situation sprechen.

## Heisst das: keine Formulare mehr?

Nein. Ein Kontaktformular oder eine Terminbuchung braucht es weiterhin. Der Unterschied liegt darin, wofür Sie Kontaktdaten verlangen. Wer ein Gespräch möchte, gibt seine Daten gerne an. Wer nur eine Checkliste lesen will, sollte das ohne Anmeldung können.

## Woran Sie den Erfolg messen

Wenn Sie umstellen, sinkt die Anzahl Leads möglicherweise. Achten Sie deshalb weniger auf die Menge als auf diese Fragen:

- Wie viele Anfragen führen tatsächlich zu einem Gespräch?
- Wie viele Gespräche führen zu einem Angebot?
- Woher kamen die Kunden, die am Ende unterschrieben haben?

Fragen Sie neue Kunden im Erstgespräch ausserdem direkt, wie sie auf Sie aufmerksam geworden sind. Diese Antwort ist oft aufschlussreicher als jedes Tracking.`
  },
  {
    id: 'blog-swiss-data-tracking',
    type: 'blog',
    title: 'Revidiertes Datenschutzgesetz (DSG): Tracking sauber aufsetzen',
    slug: 'swiss-dsg-tracking-compliance',
    description: 'Was das revidierte Schweizer DSG für das Tracking auf Ihrer Website bedeutet und wie Server-Side Tagging Ihnen mehr Kontrolle über Ihre Daten gibt.',
    tags: ['Tracking', 'Datenschutz', 'DSG', 'DSGVO'],
    readTime: '4 Min. Lesezeit',
    publishDate: '12. März 2026',
    author: 'Yathur Nathan',
    content: `## Was sich geändert hat

Seit dem 1. September 2023 gilt in der Schweiz das revidierte Datenschutzgesetz (DSG). Es verlangt unter anderem, dass Sie transparent informieren, welche Personendaten Sie bearbeiten, zu welchem Zweck und an wen Sie diese weitergeben, auch ins Ausland. Für Websites betrifft das vor allem die Datenschutzerklärung sowie Analyse- und Werbetools wie Google Analytics, den Meta-Pixel oder das LinkedIn Insight Tag. Richten Sie sich auch an Personen in der EU, kann zusätzlich die DSGVO gelten.

Hinweis: Dieser Beitrag gibt einen technischen Überblick und ist keine Rechtsberatung. Für die rechtliche Beurteilung Ihrer Website sollten Sie eine Fachperson beiziehen.

## Das Problem beim klassischen Tracking

Beim klassischen Tracking lädt der Browser Ihrer Besucher Skripte direkt von Google, Meta oder LinkedIn. Diese Anbieter erhalten dabei automatisch Daten wie IP-Adresse und Browserinformationen. Als Websitebetreiber haben Sie wenig Einfluss darauf, was genau übermittelt wird.

## Was Server-Side Tagging ändert

Beim Server-Side Tagging gehen die Daten zuerst an einen eigenen Tracking-Server, zum Beispiel einen Server-Container von Google Tag Manager. Dort legen Sie fest, welche Informationen an welche Plattform weitergehen. So können Sie etwa IP-Adressen kürzen oder bestimmte Angaben gar nicht erst weiterleiten. Den Server können Sie bei einem Anbieter mit Rechenzentrum in der Schweiz oder in Europa betreiben.

## Was Server-Side Tagging nicht ersetzt

Server-Side Tagging ist ein technisches Mittel, keine rechtliche Lösung. Es ersetzt weder eine korrekte Datenschutzerklärung noch eine Einwilligung, wo eine solche nötig ist. Auch mit eigenem Server müssen Sie offenlegen, welche Daten Sie an welche Anbieter weitergeben.

## Praktische Schritte

- Bestandsaufnahme: Welche Tools laden heute auf Ihrer Website, und welche Daten senden sie?
- Datenschutzerklärung prüfen: Sind alle eingesetzten Tools und Empfänger aufgeführt?
- Einwilligung klären: Wo brauchen Sie ein Cookie-Banner, und funktioniert es technisch korrekt?
- Tracking sauber aufsetzen: Prüfen Sie, ob Server-Side Tagging für Sie sinnvoll ist, etwa wenn Sie viel Werbebudget einsetzen und auf verlässliche Daten angewiesen sind.
- Regelmässig kontrollieren: Neue Tools oder Plugins kommen oft unbemerkt dazu.

## Fazit

Sauberes Tracking und Datenschutz schliessen sich nicht aus. Wer weiss, welche Daten wohin fliessen, kann seine Werbung besser messen und Besucher transparent informieren.`
  }
];
