/**
 * MarTech-Wissen (/martech, /martech/<slug>), Werkzeuge (/werkzeuge) und Labor (/labor).
 *
 * Zielgruppe: Leitungen Marketing, Vertrieb, Marketing Ops und Technologen (Fachebene), die Angebotsseiten
 * bleiben bei der Geschäftsleitung. Jedes Thema hat oben drei Sätze für die Geschäftsleitung und darunter den
 * technischen Teil. Quelle der Themen: Personal Brand/MarTech-Serie (Backlog MT-T.., Faktenprotokoll 09).
 *
 * Regeln: nur geprüfte Fakten mit Quelle (Stand FACTS_CHECKED), Einschätzungen als solche formulieren,
 * keine Kunden, keine Anstellung, keine Zahlen ohne Beleg. Preise und Lizenzen vor jeder Überarbeitung neu prüfen.
 */

export const FACTS_CHECKED = '13. November 2026';

export type LayerId = 'systeme' | 'daten' | 'orchestrierung' | 'intelligenz' | 'steuerung';

export interface MartechLayer {
  id: LayerId;
  nr: number;
  title: string;
  short: string;
  desc: string;
  examples: string[];
  service: { href: string; label: string };
}

/** Fünf Schichten aus der MarTech-Taxonomie (oben = 5). */
export const MARTECH_LAYERS: MartechLayer[] = [
  {
    id: 'steuerung',
    nr: 5,
    title: 'Steuerung und Governance',
    short: 'Kosten, Lizenzen, Zugänge, Datenschutz',
    desc: 'Wer welches Tool verantwortet, was der Stack über mehrere Jahre kostet, welche Lizenz welchen Betrieb erlaubt und welche Daten wohin dürfen. Diese Schicht entscheidet, ob ein Stack in drei Jahren noch tragbar ist.',
    examples: ['Gesamtkosten (TCO)', 'Lizenzmodelle', 'Zugänge und Tokens', 'Datenschutz und Speicherort'],
    service: { href: '/leistungen/martech-stack', label: 'MarTech-Stack aufräumen' },
  },
  {
    id: 'intelligenz',
    nr: 4,
    title: 'Intelligenz',
    short: 'Auswertung, Messmodelle, KI-Agenten',
    desc: 'Dashboards, Attribution und Marketing-Mix-Modelle, dazu KI-Agenten, die auf den Daten arbeiten. Was hier herauskommt, ist nur so gut wie die Schichten darunter.',
    examples: ['BI und Dashboards', 'Attribution und MMM', 'KI-Agenten', 'GEO-Monitoring'],
    service: { href: '/leistungen/ki-agenten', label: 'KI-Agenten für Marketing & Vertrieb' },
  },
  {
    id: 'orchestrierung',
    nr: 3,
    title: 'Orchestrierung',
    short: 'Workflows, Integrationen, Ereignisse',
    desc: 'Die Verbindungen zwischen den Systemen: Workflows, Webhooks, Integrationsplattformen und die Regeln, welches System bei einem Widerspruch recht hat.',
    examples: ['n8n, Make, Zapier, Windmill', 'Webhooks und APIs', 'Synchronisation', 'Event-Routing'],
    service: { href: '/leistungen/prozesse', label: 'Agentic Processes' },
  },
  {
    id: 'daten',
    nr: 2,
    title: 'Daten',
    short: 'Erfassung, Pipelines, Warehouse',
    desc: 'Wie Ereignisse erfasst, geprüft und gespeichert werden: Tagging im Browser und auf dem Server, Pipelines, Data Warehouse und Customer Data Platform.',
    examples: ['Tag Manager und Server-Side Tagging', 'GA4 und Ereignismodelle', 'Data Warehouse', 'CDP und Reverse ETL'],
    service: { href: '/leistungen/data-analytics', label: 'Tracking, Attribution & Reporting' },
  },
  {
    id: 'systeme',
    nr: 1,
    title: 'Systeme und Kundenkontakt',
    short: 'CRM, Automation, CMS, Werbung',
    desc: 'Die Systeme, in denen Kunden, Anfragen und Kampagnen leben: CRM, Marketing-Automatisierung, Website, Werbekonten, Social Media, Support und Shop.',
    examples: ['CRM', 'Marketing-Automatisierung', 'Website und CMS', 'Werbekonten'],
    service: { href: '/leistungen/martech-stack', label: 'MarTech-Stack aufräumen' },
  },
];

export interface MartechTopic {
  slug: string;
  layer: LayerId;
  title: string;
  /** Ein Satz für Karten und Meta-Description. */
  teaser: string;
  /** Drei Sätze für die Geschäftsleitung. */
  management: string;
  /** Technischer Teil: Absätze, «## » Zwischentitel, «- » Listen, **fett**. */
  content: string;
  sources: { label: string; url: string }[];
  related: { href: string; label: string };
}

export const MARTECH_TOPICS: MartechTopic[] = [
  {
    slug: 'pipeline-stufen-datenmodell',
    layer: 'systeme',
    title: 'Pipeline-Stufen sind ein Datenmodell',
    teaser: 'Wenn Marketing und Vertrieb eine Stufe unterschiedlich verstehen, misst jeder Bericht etwas anderes.',
    management:
      'Wenn Marketing und Vertrieb unter «qualifiziert» etwas anderes verstehen, misst jeder Bericht etwas anderes. Jede Stufe braucht deshalb ein Eintritts- und ein Austrittskriterium, das im CRM als Feld prüfbar ist. Erst dann lassen sich Umwandlungsquoten, Kosten pro Stufe und Prognosen vergleichen.',
    content: `## Das Problem hinter den Begriffen

Lead, MQL, SQL, Opportunity: Die meisten CRMs bringen solche Stufen mit. Im Marketing ist ein MQL oft jemand, der einen Leitfaden heruntergeladen hat. Im Vertrieb ist es jemand mit Bedarf und Budget. Beide Zahlen tragen denselben Namen und messen etwas anderes. Die Umwandlungsquote von MQL zu SQL steigt oder fällt dann, ohne dass sich im Markt etwas geändert hat.

Ein Reporting misst in solchen Fällen Aktivität statt Wirkung. Das ist kein Kulturproblem, das man mit einem Workshop löst, sondern ein Datenmodell, das man festlegen kann.

## Eine Stufe ist eine Regel, kein Etikett

Pro Stufe gehören fünf Angaben in eine Tabelle:

- **Eintrittskriterium:** welche Felder mit welchen Werten gefüllt sein müssen
- **Austrittskriterium:** wann ein Kontakt die Stufe verlässt, nach vorne oder zurück
- **Wer setzt sie:** eine Regel im System oder eine Person, und wenn eine Person, welche
- **Rückfall:** was mit Kontakten passiert, die nicht weiterkommen, etwa zurück in die Pflege
- **Zeitstempel:** das Datum des Eintritts als eigenes Feld, damit Durchlaufzeiten messbar werden

## Wie das im CRM aussieht

- Kriterien als Felder mit festen Werten, nicht als Freitext, zum Beispiel «Bedarf bestätigt» als Ja/Nein
- Eine Stufe lässt sich nur setzen, wenn die Pflichtfelder gefüllt sind
- Automatisch geht es nur vorwärts, eine Rückstufung braucht einen Grund
- Die Historie wird nicht überschrieben, sondern pro Stufe festgehalten

## Was man danach messen kann

Mit sauber definierten Stufen werden Umwandlungsquoten pro Stufe, Durchlaufzeiten, Kosten pro Stufe und Kanal sowie eine Prognose aus der offenen Pipeline vergleichbar, über Monate und über Teams hinweg.

## Häufige Fehler

- Stufen beschreiben eine Aktivität («Mail geöffnet») statt eines Zustands
- Zu viele Stufen, die niemand auseinanderhalten kann
- Die Stufe wird von Hand gesetzt, ohne dass ein Kriterium geprüft wird
- Die Definition steht in einer Präsentation, aber nicht im System

Diese Einordnung ist eine fachliche Einschätzung aus der Arbeit mit CRM-Datenstrukturen, keine Studie.`,
    sources: [],
    related: { href: '/leistungen/revenue-operations', label: 'Marketing, Vertrieb & Daten verbinden (RevOps)' },
  },
  {
    slug: 'server-side-tagging',
    layer: 'daten',
    title: 'Server-Side Tagging: was es löst und was nicht',
    teaser: 'Ein serverseitiger Container verschiebt den Ort, an dem Daten an Dritte gehen. Einwilligung, Deduplizierung und Datenqualität bleiben eigene Aufgaben.',
    management:
      'Beim serverseitigen Tagging gehen Messdaten zuerst an einen eigenen Server, der entscheidet, was an Google, Meta und andere weitergeht. Sie gewinnen Kontrolle über die Daten und übernehmen dafür Betrieb, Kosten und Monitoring. Einwilligung, doppelte Zählung und Datenqualität löst es nicht von selbst.',
    content: `## Was sich verschiebt

Beim klassischen Tagging schickt der Browser Daten direkt an Google, Meta und alle anderen, deren Tags auf der Seite laufen. Beim serverseitigen Tagging gehen sie an einen eigenen Container, etwa einen serverseitigen Google Tag Manager, und dieser entscheidet, was weitergeht. Google beschreibt, dass der Container im eigenen Google-Cloud-Projekt oder in einer anderen Umgebung nach Wahl laufen kann.

Darin liegt der Gewinn: Felder lassen sich entfernen, ergänzen oder vereinheitlichen, bevor ein Dritter sie sieht, und im Browser können weniger fremde Scripts laufen. Darin liegt auch die Verantwortung, denn was der Container weiterleitet, hat man selbst entschieden.

## Was man mit dem Server kauft

Google empfiehlt für einen produktiven Container auf Cloud Run mindestens zwei Instanzen, um das Risiko von Datenverlust bei einem Serverausfall zu verringern, und rechnet mit rund 45 US-Dollar pro Server und Monat, ohne Datenverkehr und Logging. Der Betrag ist überschaubar. Wichtiger ist, was der Satz voraussetzt: Ab jetzt betreibt man einen Server, und fällt er aus, fehlen Messdaten.

Dienste wie Stape übernehmen das Hosting des Containers. Damit ist aber noch nicht geklärt, wer bemerkt, dass seit drei Tagen keine Kauf-Events mehr ankommen.

## Was sich nicht verschiebt

- **Einwilligung:** Ob Daten erhoben und weitergegeben werden dürfen, hängt nicht davon ab, auf welchem Server der Container läuft. Der Consent-Status muss bis zum Server durchgereicht und dort beachtet werden. Das ist eine fachliche Einschätzung, keine Rechtsauskunft.
- **Doppelte Zählung:** Wer den Meta-Pixel im Browser behält und zusätzlich an die Conversions API sendet, muss deduplizieren. Meta verlangt, dass die eventID des Pixels und die event_id des Server-Events übereinstimmen, ebenso der Eventname. Fehlt das, zählt dieselbe Conversion zweimal, und die Gebotsstrategie lernt auf einer Zahl, die es so nicht gibt.
- **Datenqualität:** Ein Event, das im Browser falsch ausgelöst wird, kommt auf dem Server genauso falsch an, nur sieht es dort vertrauenswürdiger aus.

## Vor dem Entscheid klären

- Wer das Monitoring übernimmt und woran ein Ausfall auffällt
- Wie der Consent-Status zum Server gelangt
- Welche Events dedupliziert werden müssen und mit welcher ID
- Wo der Container läuft und wer Zugriff auf seine Logs hat`,
    sources: [
      { label: 'Google: Einführung in das serverseitige Tagging', url: 'https://developers.google.com/tag-platform/tag-manager/server-side/intro' },
      { label: 'Google: Server-Container auf Cloud Run einrichten', url: 'https://developers.google.com/tag-platform/tag-manager/server-side/cloud-run-setup-guide' },
      { label: 'Meta: Pixel- und Server-Events deduplizieren', url: 'https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events' },
      { label: 'Stape: About', url: 'https://stape.io/about-us' },
    ],
    related: { href: '/leistungen/data-analytics', label: 'Tracking, Attribution & Reporting' },
  },
  {
    slug: 'composable-cdp',
    layer: 'daten',
    title: 'Composable CDP: Der Anbieter speichert nichts',
    teaser: 'Bei einer «composable» CDP liegen die Kundendaten im eigenen Warehouse. Das gibt Datenhoheit und setzt ein gepflegtes Warehouse voraus.',
    management:
      'Eine Customer Data Platform führt Kundendaten aus mehreren Quellen zusammen und spielt sie an Werbe- und E-Mail-Systeme aus. Bei einer «composable» CDP liegen die Daten im eigenen Data Warehouse, der Anbieter liest sie nur. Das gibt Datenhoheit, setzt aber ein gepflegtes Warehouse voraus, das viele KMU nicht haben.',
    content: `## Zwei Bauarten

Eine **paketierte CDP** sammelt Ereignisse, speichert Profile beim Anbieter, führt Identitäten zusammen und verteilt die Daten an Zielsysteme. Twilio Segment ist ein bekanntes Beispiel: Connections sammelt Ereignisse aus Quellen und leitet sie an Ziele weiter, Protocols prüft das Tracking gegen einen festgelegten Plan.

Eine **composable CDP** dreht das um. Die Quelle ist das eigene Data Warehouse, etwa BigQuery oder Snowflake. Das Werkzeug liest dort Tabellen und synchronisiert sie in Werbekonten, CRM oder E-Mail-Systeme, oft Reverse ETL genannt. Hightouch beschreibt sein Produkt ausdrücklich so, dass es die Daten nicht selbst speichert.

## Wo die Verantwortung liegt

Bei der composable Variante sind Datenmodell, Zusammenführung von Identitäten, Aktualität und Qualität eigene Aufgaben. Das Werkzeug aktiviert, was im Warehouse steht, auch wenn es falsch ist. Dafür gibt es eine Definition pro Kennzahl und keine zusätzliche Kopie der Kundendaten, und der Speicherort ist selbst gewählt.

## Der Markt wächst zusammen

Im Mai 2025 hat Fivetran angekündigt, Census zu übernehmen, einen Anbieter von Reverse ETL. Datenaufnahme ins Warehouse und Ausspielung aus dem Warehouse rücken damit in ein Produkt. Für die Auswahl heisst das: Die Grenze zwischen Pipeline und CDP ist weniger scharf, als die Kategorien suggerieren.

## Was zu wem passt

- **Kein Warehouse, wenige Quellen:** keine CDP. Ein CRM als führendes System und saubere Integrationen reichen.
- **Viele Ereignisse aus Website und App, kein Datenteam:** eher paketiert.
- **Warehouse mit gepflegten Modellen und jemand, der sie betreut:** composable.

## Zur Einordnung der Quellen

Die MarTech-Landschaft 2026 von chiefmartec wird unter anderem von Hightouch gesponsert. Das macht die Angaben nicht falsch, gehört aber zur Einordnung, wenn «composable» als neuer Standard dargestellt wird.`,
    sources: [
      { label: 'Hightouch: Composable CDP', url: 'https://hightouch.com/platform/composable-cdp' },
      { label: 'Twilio Segment: Connections', url: 'https://www.twilio.com/docs/segment/connections' },
      { label: 'Twilio Segment: Protocols', url: 'https://www.twilio.com/docs/segment/protocols' },
      { label: 'Fivetran: Übernahme von Census', url: 'https://www.fivetran.com/press/fivetran-signs-agreement-to-acquire-census-delivering-the-first-end-to-end-data-movement-platform-for-the-ai-era' },
      { label: 'chiefmartec: Marketing Technology Landscape 2026', url: 'https://chiefmartec.com/2026-marketing-technology-landscape/' },
    ],
    related: { href: '/leistungen/data-analytics', label: 'Tracking, Attribution & Reporting' },
  },
  {
    slug: 'integration-ist-keine-architektur',
    layer: 'orchestrierung',
    title: 'Eine Integration ist noch keine Architektur',
    teaser: 'Eine Synchronisation regelt, wie Daten fliessen, aber nicht, welches System recht hat. Diese Frage stellt sich pro Feld.',
    management:
      'Eine Integration regelt, wie Daten von einem System ins andere kommen, aber nicht, welches System bei einem Widerspruch recht hat. Diese Frage stellt sich pro Feld, etwa bei Einwilligung, Status oder zuständiger Person. Eine Tabelle mit dem führenden System pro Feld verhindert Fehler, die sonst erst beim Kunden auffallen.',
    content: `## Ein typisches Fehlerbild

Zwischen CRM und Marketing-Automatisierung läuft eine Synchronisation, beide Seiten melden Erfolg, und trotzdem erhält jemand einen Newsletter, der sich vor drei Wochen abgemeldet hat. Technisch hat dabei nichts versagt. Die Integration hat getan, wofür sie gebaut wurde.

## Was eine Integration nicht regelt

Eine Integration regelt, wie Daten von einem System ins andere kommen. Welches System im Zweifel recht hat, regelt sie nicht. Solange nur ein System ein Feld schreibt, fällt das nicht auf. Sobald zwei Systeme dasselbe Feld schreiben dürfen, etwa Lifecycle-Status, Einwilligung oder zuständige Person, entscheidet eine Einstellung im Sync-Werkzeug, die beim Einrichten jemand gewählt oder einfach übernommen hat.

Matthew Niederberger, der mit dem Martech Stack Builder ein Werkzeug für solche Analysen anbietet, rät, beim Aufzeichnen eines Stacks das führende System in die Mitte zu setzen. Erheben zwei Systeme diesen Anspruch, soll man beide hinzeichnen, denn dann habe man die wichtigste Architekturfrage gefunden. Genau genommen stellt sich die Frage selten für ein ganzes System und fast immer für einzelne Felder. Ein CRM kann für Firmen und Deals führend sein und für die Einwilligung trotzdem nicht.

## Die Feldtabelle

In der Praxis braucht es dafür eine Tabelle, die es selten gibt. Pro wichtigem Feld:

- **Führendes System:** wo der gültige Wert entsteht
- **Schreibrecht:** welche Systeme und Personen ihn ändern dürfen
- **Zulässiges Alter:** wie alt der Wert in den anderen Systemen sein darf, bevor er Schaden anrichtet
- **Konfliktregel:** was passiert, wenn zwei Systeme unterschiedliche Werte haben

Für zwanzig Felder dürfte das ein Nachmittag Arbeit sein. Fehlt die Tabelle, wird die Antwort bei jedem Fehler neu ausgehandelt, meist im Nachhinein.

## Wo man anfängt

Bei den Feldern mit dem grössten Schaden: Einwilligung und Abmeldung, Lifecycle-Status, zuständige Person, Firmenzuordnung. Ein CRM scheitert selten an der Software und häufig an Prozessen und Daten. Eine saubere API-Verbindung ändert daran wenig, sie transportiert einen ungeklärten Zustand nur schneller.`,
    sources: [
      { label: 'Martech Stack Builder: Stack Visualization', url: 'https://www.martechstackbuilder.com/solutions/stack-visualization/' },
    ],
    related: { href: '/leistungen/martech-stack', label: 'MarTech-Stack aufräumen & verbinden' },
  },
  {
    slug: 'idempotenz-webhooks',
    layer: 'orchestrierung',
    title: 'Idempotenz: Der Webhook darf zweimal kommen',
    teaser: 'Viele Systeme stellen Ereignisse lieber zweimal als gar nicht zu. Eine Automatisierung muss das aushalten.',
    management:
      'Viele Systeme schicken eine Benachrichtigung über ein Ereignis im Zweifel lieber zweimal als gar nicht. Eine Automatisierung, die darauf nicht vorbereitet ist, legt doppelte Deals an oder verschickt zwei Mails. Gute Automatisierungen erkennen eine Wiederholung und verarbeiten sie nur einmal.',
    content: `## Mindestens einmal statt genau einmal

Ein Webhook ist ein Aufruf, den ein System bei einem Ereignis an eine Adresse schickt, etwa bei einer neuen Zahlung oder einem neuen Formulareintrag. Antwortet der Empfänger nicht rechtzeitig mit einer Bestätigung, versucht es der Absender erneut. Stripe schreibt in seiner Dokumentation, dass Webhook-Endpunkte dasselbe Ereignis gelegentlich mehr als einmal erhalten können, und empfiehlt, bereits verarbeitete Ereignisse zu protokollieren.

Für eine Automatisierung heisst das: Sie muss damit rechnen, dass dasselbe Ereignis zweimal ankommt. Wer das nicht einplant, findet irgendwann zwei identische Deals im CRM oder einen Kunden mit zwei Willkommensmails.

## Was Idempotenz heisst

Eine Verarbeitung ist idempotent, wenn sie mehrfach ausgeführt dasselbe Ergebnis hat wie einmal. Das ist keine Eigenschaft des Werkzeugs, sondern der Art, wie ein Workflow gebaut ist. In No-Code-Plattformen ist sie nicht voreingestellt.

## Vier Muster

- **Ereignis-ID speichern:** Vor der Verarbeitung prüfen, ob die ID schon bekannt ist, und Wiederholungen überspringen.
- **Upsert statt Neuanlage:** Datensätze anhand eines eindeutigen Schlüssels aktualisieren oder anlegen, etwa E-Mail-Adresse oder externe ID.
- **Schlüssel weitergeben:** Beim Aufruf des nächsten Systems einen Idempotenzschlüssel mitschicken, wenn dessen API das unterstützt.
- **Zuerst bestätigen, dann verarbeiten:** Den Eingang sofort quittieren und die eigentliche Arbeit danach erledigen. Lange Antwortzeiten sind eine häufige Ursache für Wiederholungen.

## Verwandt: Deduplizierung von Conversions

Dasselbe Prinzip gilt beim Tracking. Meta dedupliziert Pixel- und Server-Events über eine gemeinsame Event-ID. Fehlt sie, zählt eine Conversion doppelt.

## Aus dem eigenen Betrieb

Die Formularstrecke dieser Website bestätigt eine Anfrage, sobald sie gespeichert ist, und übergibt sie danach mit der Anfrage-ID als Idempotenzschlüssel an das eigene ERP. Kommt dieselbe Anfrage zweimal an, entsteht trotzdem nur ein Datensatz.`,
    sources: [
      { label: 'Stripe: Webhooks', url: 'https://docs.stripe.com/webhooks' },
      { label: 'Meta: Pixel- und Server-Events deduplizieren', url: 'https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events' },
    ],
    related: { href: '/leistungen/marketing-automation', label: 'CRM & Marketing Automation' },
  },
  {
    slug: 'attribution-inkrementalitaet-mmm',
    layer: 'intelligenz',
    title: 'Attribution, Inkrementalität, Marketing-Mix-Modelle',
    teaser: 'Die drei Ansätze beantworten unterschiedliche Fragen mit unterschiedlichen Daten. Wer Budget verteilen will, braucht meist mehr als einen.',
    management:
      'Attribution, Inkrementalitätstests und Marketing-Mix-Modelle beantworten unterschiedliche Fragen. Attribution verteilt Conversions auf Kontaktpunkte, ein Test misst, was ohne eine Massnahme gefehlt hätte, und ein Marketing-Mix-Modell schätzt den Beitrag von Kanälen über längere Zeit. Wer Budget verteilen will, braucht meist mehr als eine Methode.',
    content: `## Attribution

**Frage:** Welche Kontaktpunkte lagen auf dem Weg zu einer Conversion?

**Daten:** Klick- und Sitzungsdaten pro Person, aus Website-Analyse und Werbeplattformen.

**Grenzen:** Gemessen wird nur, was sichtbar und eingewilligt ist. Kanäle am Ende des Wegs, etwa die Suche nach dem Markennamen oder Retargeting, erhalten leicht mehr Anteil, als sie bewirken. Das ist eine fachliche Einschätzung, die sich mit einem Test prüfen lässt.

## Inkrementalität

**Frage:** Was wäre ohne die Massnahme passiert?

**Daten:** ein Vergleich zwischen einer Gruppe mit und einer ohne Massnahme, etwa Regionen, in denen eine Kampagne pausiert wird, oder Kontrollgruppen auf der Plattform.

**Grenzen:** Ein Test beantwortet eine Frage zu einem Zeitpunkt. Er braucht genug Volumen und Disziplin, damit während des Tests nicht gleichzeitig anderes geändert wird.

## Marketing-Mix-Modelle (MMM)

**Frage:** Wie viel trägt jeder Kanal über die Zeit zum Ergebnis bei, und wo bringt zusätzliches Budget am meisten?

**Daten:** zusammengefasste Daten über einen längeren Zeitraum, meist Ausgaben und Ergebnisse pro Woche, ohne Personenbezug.

**Grenzen:** Ein MMM ist ein statistisches Modell mit Annahmen, etwa zur Nachwirkung von Werbung. Es braucht ausreichend lange Datenreihen und Schwankungen in den Ausgaben, sonst lässt sich der Beitrag eines Kanals nicht vom Rest trennen.

Google stellt mit Meridian seit Januar 2025 ein offenes Marketing-Mix-Modell allgemein zur Verfügung. Das ältere LightweightMMM ist auf GitHub archiviert. Offene Modelle haben über den Preis hinaus einen Vorteil, denn ihre Annahmen lassen sich lesen.

## Was zu welcher Frage passt

- **Tagesgeschäft und Optimierung innerhalb eines Kanals:** Attribution
- **Bringt dieser Kanal überhaupt etwas?** Test
- **Wie verteile ich das Jahresbudget?** MMM, abgeglichen mit Tests

## Für KMU

Ein MMM lohnt sich erst ab einem gewissen Budget und mehreren Kanälen. Für kleinere Budgets ist ein sauber geplanter Test oft aussagekräftiger: einen Kanal in einer Region pausieren und vergleichen. Voraussetzung für alle drei Methoden ist eine Messung, bei der Anfragen und Aufträge im CRM ihrer Quelle zugeordnet sind.`,
    sources: [
      { label: 'Google: Meridian, Marketing-Mix-Modell für alle verfügbar', url: 'https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/' },
      { label: 'GitHub: LightweightMMM (archiviert)', url: 'https://github.com/google/lightweight_mmm' },
    ],
    related: { href: '/leistungen/data-analytics', label: 'Tracking, Attribution & Reporting' },
  },
  {
    slug: 'mcp-berechtigungen',
    layer: 'intelligenz',
    title: 'MCP: Berechtigung pro Werkzeug',
    teaser: 'Wenn Agenten über MCP auf CRM und Automatisierungen zugreifen, ist die Frage nicht mehr ob, sondern mit welchen Rechten.',
    management:
      'Mit dem Model Context Protocol (MCP) können KI-Agenten direkt auf Systeme wie CRM, E-Mail oder Automatisierungen zugreifen. Entscheidend ist deshalb, welche Werkzeuge ein Agent mit welchen Rechten sieht. Wer das vor dem Anschliessen klärt, verhindert, dass ein Agent mehr darf als nötig.',
    content: `## Was MCP ist

Das Model Context Protocol ist ein offener Standard, mit dem KI-Anwendungen auf externe Systeme zugreifen. Anthropic hat ihn im November 2024 vorgestellt, im Dezember 2025 ging er an die Agentic AI Foundation über. Ein MCP-Server stellt Werkzeuge bereit, etwa «Kontakt suchen» oder «Deal anlegen», und ein Agent ruft sie auf.

## Anbieter bauen eigene Server

Inzwischen bieten Softwareanbieter offizielle MCP-Server an, darunter HubSpot für das CRM und Zapier für seine Automatisierungen. Bei Zapier zählt ein MCP-Aufruf laut Preisseite als zwei Tasks, was bei vielen Aufrufen ins Gewicht fällt.

## Die Dokumentation genau lesen

Am 13. November 2026 widersprach sich die Dokumentation des offiziellen HubSpot-MCP-Servers selbst: In der Übersicht standen Lese- und Schreibzugriff, in den häufigen Fragen hiess es «read-only». Das ist kein Vorwurf an einen Anbieter, sondern ein Beispiel dafür, warum man prüft statt annimmt.

## Prüfschritte vor dem Anschliessen

- **Werkzeugliste:** Welche Werkzeuge stellt der Server bereit? Die Liste ansehen, nicht die Marketingseite.
- **Lesen oder schreiben:** Schreibende Werkzeuge nur dort freigeben, wo der Ablauf sie braucht.
- **Konto und Rechte:** Einen eigenen technischen Benutzer mit minimalen Rechten verwenden, nicht das Konto der Geschäftsleitung.
- **Protokoll:** Wird jeder Aufruf mit Eingabe und Ergebnis festgehalten?
- **Kosten:** Was kostet ein Aufruf, und wie viele Aufrufe macht ein Agent pro Lauf?
- **Freigabe:** Alles, was nach aussen geht oder Daten löscht, braucht eine menschliche Bestätigung.

## Aus dem eigenen Betrieb

Das eigene ERP von performanceboost stellt Agenten seine Funktionen über MCP bereit. Welche Werkzeuge ein Zugang sieht, wird pro Zugang freigeschaltet, und schreibende Aufrufe akzeptieren einen Wiederholungsschlüssel, damit ein wiederholter Aufruf keine Dubletten erzeugt.`,
    sources: [
      { label: 'Anthropic: Introducing the Model Context Protocol', url: 'https://www.anthropic.com/news/model-context-protocol' },
      { label: 'MCP joins the Agentic AI Foundation', url: 'https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/' },
      { label: 'GitHub: MCP-Server (Referenz)', url: 'https://github.com/modelcontextprotocol/servers' },
      { label: 'HubSpot: MCP Server', url: 'https://developers.hubspot.com/mcp' },
      { label: 'Zapier: MCP', url: 'https://zapier.com/mcp' },
    ],
    related: { href: '/leistungen/ki-agenten', label: 'KI-Agenten für Marketing & Vertrieb' },
  },
  {
    slug: 'agenten-beobachten',
    layer: 'intelligenz',
    title: 'Agenten beobachten: Kosten und Fehler pro Lauf',
    teaser: 'Ohne Protokoll pro Lauf lässt sich weder ein Fehler finden noch sagen, was ein Agent kostet.',
    management:
      'Ein KI-Agent, der Anfragen bearbeitet oder Daten ändert, braucht ein Protokoll pro Lauf: Eingabe, Werkzeugaufrufe, Ergebnis, Kosten und Dauer. Ohne diese Spur lässt sich weder ein Fehler finden noch sagen, was ein Ablauf kostet. Dafür gibt es eigene Werkzeuge, auch als Open Source.',
    content: `## Warum Logs nicht reichen

Ein klassischer Workflow macht bei gleicher Eingabe dasselbe. Ein Agent entscheidet unterwegs, welches Werkzeug er aufruft, und kann bei gleicher Eingabe anders vorgehen. Wenn ein Ergebnis falsch ist, muss man deshalb den ganzen Lauf sehen: was der Agent bekommen hat, welche Werkzeuge er in welcher Reihenfolge aufgerufen hat und was jeweils zurückkam.

## Was pro Lauf festgehalten werden sollte

- Eingabe und Anweisungen, mit Version
- Jeder Werkzeugaufruf mit Parametern und Antwort
- Ergebnis und ob es freigegeben, geändert oder verworfen wurde
- Verbrauchte Tokens und Kosten
- Dauer und Fehler

## Kennzahlen, die etwas sagen

- **Kosten pro Lauf und pro erledigtem Fall,** nicht nur pro Monat
- **Fehlerquote,** getrennt nach technischen Fehlern und falschen Ergebnissen
- **Freigabequote:** wie oft ein Mensch einen Entwurf unverändert übernimmt. Nach fachlicher Einschätzung sagt diese Zahl mehr über die Qualität als jede Selbstbewertung des Modells.
- **Dauer,** vor allem wenn ein Ablauf auf eine Antwort wartet

## Werkzeuge

Für einfache Abläufe reichen die Ausführungsprotokolle der Automatisierungsplattform. Für Agenten gibt es eigene LLM-Observability-Werkzeuge, die Läufe als Spur aufzeichnen und auswerten. Langfuse ist ein Beispiel mit offenem Kern unter MIT-Lizenz und gehört seit Januar 2026 zu ClickHouse.

## Datenschutz

Ein Protokoll enthält, was der Agent verarbeitet hat, also oft Personendaten. Aufbewahrungsdauer, Zugriff und das Maskieren sensibler Felder gehören deshalb vor den ersten produktiven Lauf festgelegt.`,
    sources: [
      { label: 'ClickHouse: Übernahme von Langfuse', url: 'https://clickhouse.com/blog/clickhouse-acquires-langfuse-open-source-llm-observability' },
    ],
    related: { href: '/leistungen/ki-agenten', label: 'KI-Agenten für Marketing & Vertrieb' },
  },
  {
    slug: 'geo-monitoring',
    layer: 'intelligenz',
    title: 'GEO-Monitoring: einmal pro Tag ist eine Stichprobe',
    teaser: 'Die Antworten von KI-Assistenten schwanken. Wer Sichtbarkeit misst, sollte wissen, wie oft und womit gemessen wird.',
    management:
      'GEO-Tools messen, wie oft ein Unternehmen in Antworten von ChatGPT, Perplexity oder Googles KI-Übersichten vorkommt. Die Antworten der Modelle schwanken stark, deshalb ist ein Lauf pro Tag eine Stichprobe und kein fester Wert. Wer solche Zahlen nutzt, sollte wissen, wie oft und mit welchen Fragen gemessen wird.',
    content: `## Was GEO-Monitoring misst

Generative Engine Optimization beschreibt, wie Inhalte aufbereitet werden, damit KI-Assistenten ein Angebot korrekt verstehen und erwähnen. GEO-Monitoring-Tools stellen dazu regelmässig dieselben Fragen an verschiedene Modelle und zählen, ob und wie eine Marke vorkommt.

## Das Problem der Streuung

KI-Assistenten antworten nicht deterministisch. SparkToro hat in einer Studie gezeigt, dass KI-Systeme sehr uneinheitlich sind, wenn sie Marken oder Produkte empfehlen. Eine einzelne Antwort ist deshalb wenig aussagekräftig, eine Messreihe nur so gut wie die Zahl der Wiederholungen.

## Wie oft die Tools messen (Stand 13. November 2026)

- **Peec AI:** jeder Prompt laut eigener Angabe einmal alle 24 Stunden
- **Profound:** standardmässig ein Lauf pro Prompt und Tag, dazu eine veröffentlichte Untersuchung, ob das reicht
- **Otterly.AI:** die Frequenz ist öffentlich nicht angegeben

## Fragen an jedes GEO-Tool

- Wie oft wird jeder Prompt pro Tag ausgeführt, und wird die Streuung ausgewiesen?
- Welche Modelle und Versionen werden abgefragt?
- Aus welchem Land und in welcher Sprache? Für die Schweiz ist das nicht nebensächlich.
- Wer legt die Fragen fest, und wie nah sind sie an dem, was Kunden tatsächlich fragen?

## Was vor dem Messen kommt

Bevor man Sichtbarkeit misst, sollte die Grundlage stimmen: klare, strukturierte Inhalte, die auch ohne JavaScript lesbar sind, und eine Website, die von Crawlern erreicht werden kann. Diese Website wird deshalb beim Build vorgerendert, damit der vollständige Text auch ohne Skripte vorliegt.`,
    sources: [
      { label: 'Peec AI', url: 'https://peec.ai' },
      { label: 'Profound: Is once a day enough?', url: 'https://www.tryprofound.com/blog/is-once-a-day-enough' },
      { label: 'Otterly.AI', url: 'https://otterly.ai' },
      { label: 'SparkToro: AIs are highly inconsistent when recommending brands', url: 'https://sparktoro.com/blog/new-research-ais-are-highly-inconsistent-when-recommending-brands-or-products-marketers-should-take-care-when-tracking-ai-visibility/' },
    ],
    related: { href: '/leistungen/marketing', label: 'Marketing (SEO und GEO)' },
  },
  {
    slug: 'open-source-lizenzen',
    layer: 'steuerung',
    title: '«Open Source» heisst inzwischen vieles',
    teaser: 'Offener Code ist nicht gleich Open Source. Die Unterschiede betreffen vor allem den Betrieb für Dritte.',
    management:
      'Viele MarTech-Werkzeuge mit öffentlichem Code stehen unter Lizenzen, die den Betrieb für Dritte, für mehrere Mandanten oder sogar den Produktionseinsatz einschränken. Für den Einsatz im eigenen Unternehmen spielt das selten eine Rolle, für Agenturen und Softwareanbieter oft eine entscheidende. Die Lizenzdatei gehört deshalb vor den Funktionsvergleich.',
    content: `## Ein Beispiel

Der Code von n8n liegt öffentlich auf GitHub, man kann es selbst installieren, und bekannte Software-Verzeichnisse führen es als Open Source. Die Lizenzdatei sagt etwas anderes. Die Sustainable Use License erlaubt die Nutzung «only for your own internal business purposes» oder für nicht-kommerzielle Zwecke. Für ein Unternehmen, das damit die eigenen Abläufe automatisiert, ist das selten ein Problem. Für eine Agentur, die n8n als Dienst für ihre Kunden betreibt, kann es eines sein.

## Fünf Gruppen

Ein Blick in die Lizenzdateien von gut zwanzig MarTech-Projekten mit öffentlichem Code (Stand 13. November 2026) zeigt, dass n8n kein Einzelfall ist. Das GitHub-Label hilft wenig, bei vielen steht «NOASSERTION», also nicht eindeutig. Grob sortiert:

- **Offen im klassischen Sinn:** Umami (MIT), Plausible (AGPL-3.0), Mautic (GPL-3.0), dlt (Apache-2.0)
- **Open Core:** Kern unter MIT oder AGPL, ein Ordner «ee» oder «enterprise» unter kommerzieller Lizenz, so bei PostHog, Metabase, Twenty und Chatwoot
- **Kein Betrieb als Dienst für Dritte:** Airbyte, RudderStack und Nango stehen unter der Elastic License 2.0
- **Sonderbedingungen:** Dify erlaubt keinen Multi-Tenant-Betrieb ohne schriftliche Erlaubnis, Directus verbietet konkurrierende Angebote, jede Version wird aber nach vier Jahren zu GPL-3.0
- **Keine Produktion ohne Vertrag:** Snowplow hat 2024 auf eine Limited Use License gewechselt, deren aktuelle Fassung den Produktionseinsatz ohne kommerzielle Lizenz ausschliesst

## Die Folge

Wer eine Software für sich selbst betreibt, darf bei fast allen dieser Projekte fast alles. Wer sie für andere betreibt, als Agentur, als SaaS-Anbieter oder auf einer Plattform mit mehreren Mandanten, landet schnell in einer der eingeschränkten Gruppen. Und die Gruppe kann wechseln, wie Snowplow zeigt. Eine Lizenz gilt für eine Version, nicht für die Zukunft eines Projekts.

## Was das für die Auswahl heisst

Verzeichnisse bilden diese Unterschiede kaum ab. Bei OpenAlternative fehlte am 13. November 2026 unter anderem bei n8n, Mautic, Dify und Metabase eine Lizenzangabe. Deshalb gehört die LICENSE-Datei vor den Funktionsvergleich, vor allem die Abschnitte zu Hosting, Mandanten und Enterprise-Ordnern. Das dauert eine Viertelstunde. Eine Rechtsberatung ersetzt es nicht, es zeigt aber, ob man eine braucht.`,
    sources: [
      { label: 'n8n: LICENSE', url: 'https://github.com/n8n-io/n8n/blob/master/LICENSE.md' },
      { label: 'Airbyte: Lizenzen', url: 'https://docs.airbyte.com/platform/developer-guides/licenses/' },
      { label: 'Dify: LICENSE', url: 'https://github.com/langgenius/dify/blob/main/LICENSE' },
      { label: 'Directus', url: 'https://github.com/directus/directus' },
      { label: 'Snowplow: Limited Use License FAQ', url: 'https://docs.snowplow.io/docs/licensing/limited-use-license-faq/' },
      { label: 'OpenAlternative', url: 'https://openalternative.co/' },
    ],
    related: { href: '/leistungen/martech-stack', label: 'MarTech-Stack aufräumen & verbinden' },
  },
];

export const TOPIC_SLUGS = MARTECH_TOPICS.map((t) => t.slug);
export function isTopicSlug(slug: string): boolean {
  return TOPIC_SLUGS.includes(slug);
}
export function getTopic(slug: string): MartechTopic | undefined {
  return MARTECH_TOPICS.find((t) => t.slug === slug);
}
export function getLayer(id: LayerId): MartechLayer {
  return MARTECH_LAYERS.find((l) => l.id === id)!;
}

/** Werkzeuge, mit denen Yathur selbst arbeitet (vom Inhaber bestätigt, 13.11.2026). Keine Kunden, keine Anstellung. */
export const WORK_TOOLS: { layer: LayerId | 'web'; group: string; items: { name: string; use: string }[] }[] = [
  {
    layer: 'systeme',
    group: 'Systeme und Werbung',
    items: [
      { name: 'HubSpot', use: 'CRM-Datenmodelle, Prozesse, Integrationen und Reporting für Marketing, Vertrieb und Service.' },
      { name: 'Google Ads', use: 'Search, Display, Shopping, Performance Max und Video, gesteuert nach Anfragen und Umsatz statt nach Klicks.' },
      { name: 'Meta Ads', use: 'Kampagnen für Facebook und Instagram mit Messung bis zur Conversion.' },
    ],
  },
  {
    layer: 'daten',
    group: 'Daten und Messung',
    items: [
      { name: 'Google Analytics 4', use: 'Ereignisse, Conversions und Auswertungen, verbunden mit Werbekonten und CRM.' },
      { name: 'Google Tag Manager', use: 'Tagging im Browser, sauber versioniert und dokumentiert.' },
      { name: 'Server-Side Tagging', use: 'Serverseitige Container, die steuern, welche Daten an Dritte gehen.' },
    ],
  },
  {
    layer: 'orchestrierung',
    group: 'Orchestrierung',
    items: [
      { name: 'n8n', use: 'Workflows zwischen Website, CRM, E-Mail und ERP, unter anderem für den eigenen Lead-Eingang.' },
      { name: 'Windmill', use: 'Skripte und Abläufe für Datenverarbeitung und Veröffentlichungen, die erst nach Freigabe live gehen.' },
    ],
  },
  {
    layer: 'intelligenz',
    group: 'KI und Agenten',
    items: [
      { name: 'Claude Code', use: 'Entwicklung, Recherche und Analysen, täglich im Einsatz, auch für diese Website.' },
      { name: 'KI-Agenten mit MCP', use: 'Agenten, die mit freigegebenen Werkzeugen auf das eigene ERP und weitere Systeme zugreifen.' },
    ],
  },
  {
    layer: 'web',
    group: 'Web und Anwendungen',
    items: [
      { name: 'React, Vite und Next.js', use: 'Websites und eigene Anwendungen, darunter diese Website und das eigene ERP.' },
      { name: 'Cloudflare', use: 'Hosting, Auslieferung und Worker für Websites und Anwendungen.' },
    ],
  },
];

export type LabStatus = 'Im Einsatz' | 'Im Aufbau' | 'Erkundung';

/** Labor: eigene Experimente mit ehrlichem Reifegrad (Faktenbank 5, vom Inhaber bestätigt 13.11.2026). */
export const LAB_ITEMS: { title: string; status: LabStatus; desc: string; learning: string; stack: string[] }[] = [
  {
    title: 'Eigenes ERP',
    status: 'Im Einsatz',
    desc: 'Kunden, Anfragen, Verträge, Aufgaben und Auswertungen in einem selbst gebauten System. KI-Agenten greifen über MCP mit freigeschalteten Werkzeugen darauf zu.',
    learning: 'Ein selbst gebautes Datenmodell zeigt schnell, welche Felder wirklich gebraucht werden und welche nur aus Gewohnheit existieren.',
    stack: ['Cloudflare', 'MCP', 'TypeScript'],
  },
  {
    title: 'Lead-Eingang ohne Abtippen',
    status: 'Im Einsatz',
    desc: 'Jede Website-Anfrage wird geprüft, gesichert und mit einem Idempotenzschlüssel ins ERP übernommen. Dort entstehen Kontakt, Firma, Anfrage und die Aufgabe, sie zu beantworten.',
    learning: 'Zuerst bestätigen, dann verarbeiten: Seit die Bestätigung direkt nach dem Speichern kommt, sank die Antwortzeit von rund 2,5 auf rund 0,4 Sekunden.',
    stack: ['n8n', 'Webhooks', 'ERP'],
  },
  {
    title: 'LinkedIn-Veröffentlichung mit Freigabe',
    status: 'Im Einsatz',
    desc: 'Beiträge werden über Windmill und die LinkedIn-API veröffentlicht, aber nur nach ausdrücklicher Freigabe.',
    learning: 'Zugangs-Tokens laufen ab. Ihre Erneuerung ist eine eigene Betriebsaufgabe, die man einplanen muss, nicht ein Detail.',
    stack: ['Windmill', 'LinkedIn API'],
  },
  {
    title: 'KI-gestützte Marktrecherche',
    status: 'Im Einsatz',
    desc: 'Eine Kette von Agenten recherchiert eine Branche, bewertet Problemfelder nachvollziehbar und erstellt ein Briefing als PDF.',
    learning: 'Agenten liefern schnell viel Material. Der Aufwand liegt in der Prüfung der Quellen, nicht im Sammeln.',
    stack: ['Claude Code', 'Agenten', 'Crawler'],
  },
  {
    title: 'Persönlicher Assistent «Jarvis»',
    status: 'Im Aufbau',
    desc: 'Ein Assistent, der Aufgaben über mehrere Geräte hinweg übernimmt. Einzelteile laufen, das Gesamtsystem ist nicht fertig.',
    learning: 'Die schwierigen Fragen sind Zuständigkeit, Rechte und Betrieb, nicht das Sprachmodell.',
    stack: ['Windmill', 'n8n', 'Docker'],
  },
  {
    title: 'Gemeinsames Gedächtnis über Geräte',
    status: 'Im Aufbau',
    desc: 'Wissen und Kontext, das Agenten auf Mac, Workstation und iPad gleichermassen nutzen können.',
    learning: 'Gedächtnis ist vor allem eine Frage der Ordnung: was gespeichert wird, was veraltet und wer es löscht.',
    stack: ['ByteRover CLI'],
  },
  {
    title: 'Shops per Claude Code',
    status: 'Erkundung',
    desc: 'Kleine Online-Shops mit Zahlung per Karte und TWINT, weitgehend mit Claude Code gebaut.',
    learning: 'Noch offen ist, wie weit sich ein funktionierender Shop ohne klassische Shop-Software bauen lässt und wo die Grenzen liegen.',
    stack: ['Claude Code'],
  },
];
