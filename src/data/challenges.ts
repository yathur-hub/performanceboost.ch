/**
 * Lösungen nach Herausforderung (problemorientierte Einstiege).
 *
 * `CHALLENGE_CARDS`: alle Herausforderungen für /loesungen und die Startseite. Nur zwei haben eine eigene Seite
 * (CHALLENGE_PAGES); die übrigen führen auf bestehende Seiten mit gleicher Suchintention
 * (Begründung: docs/business-performance-repositioning/03-sitemap-content-mapping.md).
 */

export interface ChallengeCard {
  /** Bereich, in dem die Herausforderung entsteht (Startseite: Label auf der Karte). */
  area: 'Agentic Marketing' | 'Agentic Sales' | 'Agentic Processes';
  title: string;
  desc: string;
  href: string;
  linkText: string;
}

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    area: 'Agentic Marketing',
    title: 'Neue Kunden planbar gewinnen',
    desc: 'Neue Kunden kommen fast nur über Empfehlungen, oder das Wachstum stockt trotz Marketingbudget. Kampagnen, Website und CRM arbeiten noch nicht als ein System.',
    href: '/leistungen/marketing',
    linkText: 'Zu Agentic Marketing',
  },
  {
    area: 'Agentic Sales',
    title: 'Vertriebsprozesse verbessern',
    desc: 'Mehr Anfragen bedeuten mehr Vorarbeit, und das Nachfassen hängt an Einzelnen. Wo Verkaufschancen stehen, zeigt das CRM nicht.',
    href: '/loesungen/vertrieb-optimieren',
    linkText: 'Vertrieb optimieren',
  },
  {
    area: 'Agentic Processes',
    title: 'Geschäftsprozesse automatisieren',
    desc: 'Jeder Auftrag bringt Handarbeit in Excel-Listen und Datenübertragung, obwohl viele Schritte klaren Regeln folgen.',
    href: '/loesungen/prozessautomatisierung',
    linkText: 'Prozesse automatisieren',
  },
  {
    area: 'Agentic Processes',
    title: 'KI sinnvoll einsetzen',
    desc: 'Einzelne nutzen ChatGPT, aber ohne Regeln, und in den eigentlichen Abläufen hat KI noch nichts verändert.',
    href: '/leistungen/ki-im-unternehmen',
    linkText: 'Zu Governance',
  },
  {
    area: 'Agentic Processes',
    title: 'Tools aufräumen und verbinden',
    desc: 'Viele Programme und Lizenzen, und trotzdem werden Daten von Hand übertragen und Zahlen widersprechen sich.',
    href: '/leistungen/martech-stack',
    linkText: 'Zum MarTech-Stack',
  },
  {
    area: 'Agentic Sales',
    title: 'Marketing und Vertrieb verbinden',
    desc: 'Marketing liefert Anfragen, der Vertrieb ist unzufrieden, und keiner weiss, was daraus geworden ist.',
    href: '/leistungen/revenue-operations',
    linkText: 'Zu Revenue Operations',
  },
];

export type ChallengeSlug = 'prozessautomatisierung' | 'vertrieb-optimieren';

export interface ChallengePage {
  slug: ChallengeSlug;
  label: string;
  h1: string;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  ctaLabel: string;
  symptoms: string[];
  causes: { title: string; desc: string }[];
  approach: { title: string; desc: string }[];
  examples: { title: string; desc: string }[];
  outcomes: string[];
  /** Slugs aus SERVICES. */
  services: string[];
  /** IDs aus SKILLS. */
  tools: string[];
  faq: { q: string; a: string }[];
}

export const CHALLENGE_PAGES: Record<ChallengeSlug, ChallengePage> = {
  prozessautomatisierung: {
    slug: 'prozessautomatisierung',
    label: 'Geschäftsprozesse automatisieren',
    h1: 'Abläufe, die mit Ihrem Wachstum mitkommen, auch bei Ausnahmen.',
    intro:
      'Wächst ein Unternehmen, wächst die Handarbeit in den Abläufen oft im gleichen Mass mit. Prozessautomatisierung beginnt bei uns deshalb mit dem Ablauf, wie Ihr Team ihn tatsächlich arbeitet. Ein fester Workflow gibt den Rahmen vor und übernimmt, was immer gleich abläuft, etwa Daten zwischen Systemen übertragen. KI kommt in klar abgegrenzten Schritten dazu, wo Inhalte gelesen und eingeordnet werden müssen, zum Beispiel bei einer unklaren E-Mail. Das Ergebnis landet in dem System, in dem Ihr Team ohnehin arbeitet, und was der Ablauf nicht sicher lösen kann, geht an eine Person.',
    seoTitle: 'Geschäftsprozesse automatisieren für KMU | performanceboost',
    seoDescription:
      'Doppelte Dateneingabe, Excel-Listen, manuelle Übergaben? Wir automatisieren Abläufe mit festen Workflows und setzen KI in klar abgegrenzten Schritten ein, mit Freigabe.',
    ctaLabel: 'Prozesse besprechen',
    symptoms: [
      'Dieselben Daten werden in mehreren Systemen von Hand erfasst.',
      'Excel-Listen dienen als Brücke zwischen Website, CRM, Buchhaltung oder Projekttool.',
      'Wichtige Schritte hängen am Gedächtnis einzelner Personen.',
      'Berichte werden jede Woche oder jeden Monat neu zusammenkopiert.',
      'Anfragen, Aufträge oder Freigaben bleiben liegen, weil niemand informiert wurde.',
      'Unvollständige Formulare und unklare E-Mails landen immer bei derselben Person.',
    ],
    causes: [
      { title: 'Gewachsene Systemlandschaft', desc: 'Jedes Tool wurde für einen Zweck eingeführt. Eine Verbindung zwischen ihnen war nie geplant.' },
      { title: 'Unklare Abläufe', desc: 'Wer was wann tut, steht nirgends, oder das Handbuch beschreibt einen anderen Ablauf als den gelebten. Wer einen unklaren Ablauf automatisiert, hat danach dieselben Unklarheiten, nur schneller.' },
      { title: 'Ausnahmen sprengen einfache Regeln', desc: 'Klassische Automatisierung scheitert oft an den Fällen, die nicht ins Schema passen. Weil nie festgelegt wurde, was mit diesen Fällen geschieht, blieb der ganze Ablauf Handarbeit.' },
    ],
    approach: [
      { title: 'Gelebten Ablauf aufnehmen', desc: 'Wir gehen den Ablauf mit den Personen durch, die ihn täglich erledigen, und halten fest, wo Zeit verloren geht und welche Ausnahmen regelmässig vorkommen. Wo es viele Sonderwege gibt, vereinfachen wir zuerst den Ablauf.' },
      { title: 'Pro Schritt die passende Stufe', desc: 'Lässt sich ein Schritt als Wenn-dann-Regel aufschreiben, bleibt es bei der Regel. Muss ein Text oder Dokument gelesen werden, macht ein Modell einen Vorschlag. Einen agentischen Schritt setzen wir nur ein, wenn Informationen aus mehreren Quellen zusammenkommen, die Reihenfolge vom Fall abhängt und das Ergebnis geprüft werden muss.' },
      { title: 'Umsetzen und anbinden', desc: 'Wir verbinden Ihre Systeme über deren Schnittstellen, mit Automatisierungsplattformen wie n8n oder Windmill. Bots, die Klicks auf einer Oberfläche nachahmen, nutzen wir nur, wo es keine Schnittstelle gibt, weil sie bei jeder Änderung der Oberfläche brechen. Für jeden Ablauf legen wir fest, was bei Fehlern und Ausnahmen geschieht.' },
      { title: 'Testen und übergeben', desc: 'KI-Schritte prüfen wir vor dem Start mit echten Fällen aus Ihrem Alltag. Danach folgt eine Testphase, in der das System nur vorschlägt und Ihr Team wie bisher entscheidet. Im Betrieb wird jeder Schritt protokolliert, und wir messen die Kosten pro korrekt erledigtem Fall gegenüber dem heutigen Aufwand.' },
    ],
    examples: [
      { title: 'Fester Workflow für Anfragen', desc: 'Eine Website-Anfrage landet mit Quelle im CRM, die zuständige Person wird informiert und eine Aufgabe zum Nachfassen angelegt. Das läuft jedes Mal gleich und braucht keine KI.' },
      { title: 'Fester Workflow für Stammdaten', desc: 'Kundendaten aus dem CRM werden über die Schnittstelle an Offerten-, Projekt- oder Buchhaltungstools übergeben, statt erneut eingetippt zu werden. Schlägt eine Übertragung fehl, versucht der Ablauf es erneut und meldet sich danach bei einer Person.' },
      { title: 'KI-Vorschlag für Dokumente', desc: 'Eingehende Rechnungen, Lieferscheine oder Formulare werden klassifiziert und die wichtigsten Felder ausgelesen. Der Vorschlag erscheint im Zielsystem, wo Ihr Team ihn bestätigt oder korrigiert. Unsichere Fälle landen als Klärfall mit Frist in einer eigenen Liste.' },
      { title: 'Agentischer Ablauf für Kundenanfragen', desc: 'Ein Beispiel: Eine Kundin fragt nach dem Stand ihrer Bestellung, ohne Nummer. Ein Agent sucht den Auftrag im ERP anhand von Absender und Inhalt, prüft bei Bedarf den Versandstatus und legt einen Antwortentwurf an. Findet er keinen eindeutigen Auftrag, übergibt er den Fall an Ihr Team. Versendet wird nach Freigabe.' },
      { title: 'Agentischer Ablauf für unvollständige Aufträge', desc: 'Ein Beispiel: Bei einem unvollständigen Auftrag holt ein Agent fehlende Angaben aus CRM und früheren Bestellungen und schlägt das weitere Vorgehen vor. Er hat nur Lesezugriff und eine feste Obergrenze an Schritten. Was er nicht sicher zuordnen kann, geht an eine Person.' },
      { title: 'Fester Workflow mit KI-Erklärung für Berichte', desc: 'Ein fester Ablauf führt Kennzahlen aus mehreren Quellen regelmässig zusammen. KI ergänzt eine kurze Erklärung zu auffälligen Abweichungen, die Schlüsse zieht die Geschäftsleitung.' },
    ],
    outcomes: [
      'Weniger manuelle Arbeit in wiederkehrenden Abläufen',
      'Weniger Übertragungsfehler',
      'Ausnahmen, die mit Frist bei der richtigen Person landen',
      'Abläufe, die protokolliert sind und nicht an einzelnen Personen hängen',
    ],
    services: ['ai-automation', 'marketing-automation', 'data-analytics'],
    tools: ['workflow-opportunity-scanner', 'process-automation-assessment', 'agentic-automation-opportunity-scanner'],
    faq: [
      { q: 'Was ist der Unterschied zwischen einem Workflow und einem agentischen Prozess?', a: 'Ein Workflow führt festgelegte Schritte immer gleich aus, zum Beispiel neue Anfrage im Formular, Kontakt im CRM anlegen, Aufgabe zuweisen. In einem agentischen Schritt wählt ein Sprachmodell innerhalb eines festen Rahmens selbst, welche Informationen es aus CRM, ERP oder Dokumenten holt, prüft das Ergebnis und macht daraus einen Vorschlag. Meist kombinieren wir beides, der Workflow gibt den Rahmen vor und der agentische Schritt übernimmt nur den Teil, in dem jeder Fall anders aussieht. Eine Integration ist noch kein Agent, ein Ablauf, der nur prüft und meldet, ebenso wenig.' },
      { q: 'Welche Abläufe eignen sich für eine Automatisierung?', a: 'Häufige Abläufe mit klaren Regeln und viel Handarbeit eignen sich für einen festen Workflow. Wo Texte oder Dokumente gelesen werden müssen, kommt ein KI-Schritt dazu, bei dem ein Mensch den Vorschlag bestätigt. Gibt es sehr viele Sonderfälle, lohnt es sich meist, zuerst den Ablauf zu vereinheitlichen.' },
      { q: 'Was darf ein Agent selbst tun?', a: 'Nur, was vorher festgelegt ist. Lesen, einordnen und Entwürfe anlegen ist meist unkritisch. Alles, was nach aussen geht, Geld kostet, Daten löscht oder Kunden direkt betrifft, gibt ein Mensch frei. Mehr Spielraum gibt es erst, wenn sich der Agent in der Testphase und in Stichproben bewährt hat, und nur für Aktionen, die sich rückgängig machen lassen. Jeder Schritt wird protokolliert, die Rechte des Agenten sind auf seine Aufgabe beschränkt, und Personendaten bearbeiten wir nach dem Schweizer Datenschutzgesetz.' },
      { q: 'Brauchen wir dafür neue Software?', a: 'In vielen Fällen nicht. Die meisten gängigen Tools haben Schnittstellen, über die sie sich verbinden lassen. Das Ergebnis erscheint dort, wo Ihr Team schon arbeitet, etwa im CRM oder in der Buchhaltung, und nicht in einem zusätzlichen Dashboard. Wir prüfen zuerst, was mit Ihrer bestehenden Ausstattung möglich ist.' },
      { q: 'Was passiert, wenn eine Automatisierung ausfällt?', a: 'Jeder Ablauf wird überwacht. Schlägt ein Schritt fehl, wird er wiederholt. Klappt es dann nicht, landet der Fall als Klärfall mit Frist bei einer verantwortlichen Person, und läuft die Frist ab, wird eskaliert. Kann ein Agent einen Fall nicht sicher einordnen, gibt er ihn an eine Person ab, statt zu raten. Die Dokumentation beschreibt, wie es manuell weitergeht.' },
      { q: 'Wie lange dauert ein erstes Projekt?', a: 'Das hängt vom Ablauf und den beteiligten Systemen ab. Wir starten bewusst mit einem überschaubaren Ablauf. Nach dem Test mit echten Fällen und der Phase, in der das System nur vorschlägt, entscheiden wir mit Ihnen anhand vorher festgelegter Kriterien, ob er in Betrieb geht.' },
    ],
  },
  'vertrieb-optimieren': {
    slug: 'vertrieb-optimieren',
    label: 'Vertriebsprozesse optimieren',
    h1: 'Aus mehr Anfragen Aufträge machen, ohne dass die Vorarbeit mitwächst.',
    intro:
      'Viele KMU verlieren Umsatz erst nach dem Marketing, und mit jeder zusätzlichen Anfrage wird es mehr. Anfragen werden zu spät beantwortet und Angebote nicht nachgefasst. Wir bauen Ihre Vertriebsabläufe so auf, dass das CRM die gemeinsame Datengrundlage ist, auf die Regeln, KI und Ihr Team zugreifen. Zuweisung und Erinnerungen laufen als feste Regeln, KI bereitet Gespräche und Nachfass-Entwürfe vor. Gespräch, Offerte, Preis und Zusage bleiben bei Ihrem Vertrieb.',
    seoTitle: 'Vertriebsprozesse optimieren | performanceboost',
    seoDescription:
      'Anfragen bleiben liegen, Nachfassen hängt an Einzelnen? Wir machen das CRM zur Datengrundlage Ihres Vertriebs, mit festen Regeln und KI-Vorarbeit, die Ihr Team freigibt.',
    ctaLabel: 'Vertrieb besprechen',
    symptoms: [
      'Neue Anfragen werden erst nach Tagen beantwortet.',
      'Angebote gehen raus, aber das Nachfassen passiert unregelmässig.',
      'Das CRM ist unvollständig oder wird nur von einzelnen genutzt, Auswertungen stimmen deshalb nicht.',
      'Marketing und Vertrieb sind sich nicht einig, was eine gute Anfrage ist.',
      'Vor Gesprächen sucht der Vertrieb Informationen in E-Mails, Notizen und auf Websites zusammen.',
      'Die Geschäftsleitung weiss nicht, wie viel Umsatz in der Pipeline steckt.',
    ],
    causes: [
      { title: 'Keine gemeinsame Definition', desc: 'Was als qualifizierte Anfrage gilt, nach welchen Kriterien das entschieden wird und wann sie an den Vertrieb geht, ist nicht festgelegt.' },
      { title: 'CRM ohne klaren Prozess', desc: 'Das System ist da, aber Phasen, Pflichtfelder und Zuständigkeiten passen nicht zum tatsächlichen Verkauf. Es fehlen die Daten, auf denen jede Auswertung und jede KI-Unterstützung aufbaut.' },
      { title: 'Vorarbeit frisst Verkaufszeit', desc: 'Recherche, Notizen und Nachfassmails erledigt jede Person selbst. Ob es passiert, hängt an der Disziplin Einzelner.' },
    ],
    approach: [
      { title: 'Verkaufsprozess aufnehmen', desc: 'Wir zeichnen den Weg von der ersten Anfrage bis zum Auftrag nach und markieren, wo Interessenten verloren gehen und wo Vorarbeit Zeit kostet.' },
      { title: 'Regeln festlegen', desc: 'Gemeinsam mit Marketing und Vertrieb definieren wir Phasen, Übergaben und Zuständigkeiten. Die Bewertung von Anfragen beginnt mit wenigen klaren Kriterien als Regel, damit jede Einordnung eine nachvollziehbare Begründung hat.' },
      { title: 'CRM als Datengrundlage', desc: 'Wir richten das CRM nach diesen Regeln ein, bereinigen die Daten und verbinden es mit Website, E-Mail und Kalender. Zuweisung, Erinnerungen und Fristen laufen als feste Abläufe. Bevor über Prognosen gesprochen wird, sind Phasen, Werte und nächste Schritte gepflegt.' },
      { title: 'KI-Vorarbeit und Auswertung', desc: 'Wo es sich lohnt, kommen KI-Schritte dazu, etwa ein Agent für die Gesprächsvorbereitung und Entwürfe für das Nachfassen. Jeder Entwurf wird vor dem Versand freigegeben. Eine Pipeline-Auswertung zeigt Fortschritt und Engpässe, und Ihr Team erhält eine Einführung, damit das System im Alltag genutzt wird.' },
    ],
    examples: [
      { title: 'Schnelle Erstreaktion', desc: 'Neue Anfragen werden nach festen Regeln zugewiesen, die zuständige Person informiert und eine Frist gesetzt. Läuft die Frist ab, geht die Anfrage an eine Stellvertretung.' },
      { title: 'Vorqualifizierung mit Begründung', desc: 'Zuerst ordnen feste Kriterien wie Branche, Region oder Auftragsgrösse eine Anfrage ein. KI liest den Freitext und ergänzt eine kurze Begründung im CRM. Ihr Team sieht beides und kann es ändern.' },
      { title: 'Vorbereitete Gespräche', desc: 'Vor einem Termin trägt ein Agent zusammen, was im CRM, auf der Website des Unternehmens und in bisherigen Kontakten steht. Was im Gespräch zählt, entscheidet Ihr Vertrieb. So bereiten wir auch unsere eigenen Erstgespräche vor.' },
      { title: 'Nachfassen mit Entwurf', desc: 'Nach einem Angebot erinnert das CRM an den nächsten Schritt, und KI legt einen Entwurf auf Basis von Angebot und Gesprächsnotizen bereit. Versendet wird erst nach Freigabe.' },
      { title: 'Datenpflege im Hintergrund', desc: 'Ein Beispiel: Dubletten markiert eine feste Regel, fehlende Angaben wie Branche oder Firmengrösse schlägt KI aus öffentlichen Quellen vor. Übernommen wird nach Prüfung.' },
      { title: 'Pipeline für die Geschäftsleitung', desc: 'Ein Überblick über offene Verkaufschancen nach Phase, Wert und Alter, mit Hinweis auf Chancen ohne nächsten Schritt. Bei wenigen Abschlüssen pro Jahr bringt diese saubere Übersicht mehr als ein Prognosemodell.' },
    ],
    outcomes: [
      'Kürzere Reaktionszeiten auf neue Anfragen',
      'Ein nachvollziehbarer Verkaufsprozess',
      'Weniger verlorene Verkaufschancen',
      'Mehr Vertriebszeit für Gespräche statt für Recherche und Notizen',
      'Eine Pipeline, auf die sich die Geschäftsleitung verlassen kann',
    ],
    services: ['revenue-operations', 'sales-enablement', 'marketing-automation'],
    tools: ['sales-process-assessment', 'follow-up-effectiveness-review', 'pipeline-hygiene-review', 'lead-routing-assessment'],
    faq: [
      { q: 'Wir haben ein kleines Vertriebsteam. Lohnt sich das?', a: 'Gerade in kleinen Teams fällt jede liegengebliebene Anfrage ins Gewicht. Der Aufwand richtet sich nach Ihrer Grösse: Oft reichen wenige klare Regeln und ein sauber eingerichtetes CRM.' },
      { q: 'Wo hilft KI im Vertrieb und wo nicht?', a: 'Bei der Vorarbeit, also beim Einordnen von Anfragen, beim Vorbereiten von Gesprächen, beim Entwerfen von Nachfassmails und bei der Datenpflege. Gespräch, Offerte, Preis und Zusage bleiben bei Ihrem Vertrieb. Standardtexte wie eine Eingangsbestätigung geben Sie einmal als Vorlage frei, alles andere vor dem Versand. Voraussetzung ist ein CRM mit sauberen Daten, sonst verstärkt KI nur die Lücken. Welche Daten ein Agent lesen darf, legen wir mit Ihnen fest, nach dem Schweizer Datenschutzgesetz.' },
      { q: 'Müssen wir das CRM wechseln?', a: 'Nur wenn es Ihre Abläufe grundsätzlich nicht abbilden kann. In den meisten Fällen lässt sich das bestehende System besser einrichten.' },
      { q: 'Was ist der Unterschied zu einem Vertriebstraining?', a: 'Ein Training verbessert Gespräche. Wir verbessern den Ablauf rund um die Gespräche: wer wann welche Anfrage bearbeitet, wie nachgefasst wird und wie der Fortschritt sichtbar wird. Beides ergänzt sich.' },
      { q: 'Wie messen wir den Erfolg?', a: 'An Kennzahlen wie Reaktionszeit, Anteil nachgefasster Angebote, Abschlussquote und Wert der Pipeline. Welche davon für Sie zählen, legen wir zu Beginn gemeinsam fest.' },
    ],
  },
};

export const CHALLENGE_SLUGS = Object.keys(CHALLENGE_PAGES) as ChallengeSlug[];

export function isChallengeSlug(slug: string): slug is ChallengeSlug {
  return (CHALLENGE_SLUGS as string[]).includes(slug);
}
