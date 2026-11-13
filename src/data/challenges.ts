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
    title: 'Mehr passende Kunden gewinnen',
    desc: 'Das Wachstum stockt, obwohl Sie in Marketing investieren, oder neue Kunden kommen fast nur über Empfehlungen. Kampagnen, Website und CRM arbeiten noch nicht als ein System.',
    href: '/leistungen/marketing',
    linkText: 'Zu Agentic Marketing',
  },
  {
    area: 'Agentic Sales',
    title: 'Vertriebsprozesse verbessern',
    desc: 'Anfragen bleiben liegen, das Nachfassen hängt an Einzelnen, und das CRM zeigt nicht, wo Verkaufschancen stehen.',
    href: '/loesungen/vertrieb-optimieren',
    linkText: 'Vertrieb optimieren',
  },
  {
    area: 'Agentic Processes',
    title: 'Geschäftsprozesse automatisieren',
    desc: 'Ihr Team überträgt Daten von Hand und pflegt Excel-Listen, obwohl viele dieser Schritte klaren Regeln folgen.',
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
    h1: 'Weniger Handarbeit in Ihren Abläufen, auch bei den Ausnahmen.',
    intro:
      'Prozessautomatisierung heisst bei uns zweierlei. Klassische Workflows übernehmen Schritte, die immer gleich ablaufen, etwa Daten von einem System ins nächste übertragen oder eine Aufgabe anlegen. Agentische Prozesse kommen dort dazu, wo Inhalte gelesen und eingeordnet werden müssen, zum Beispiel bei einer unklaren E-Mail oder einem Dokument mit fehlenden Angaben. Wir entscheiden pro Schritt, was sich lohnt, und setzen es so um, dass Ihr Team es versteht und weiterführen kann.',
    seoTitle: 'Geschäftsprozesse automatisieren für KMU | performanceboost',
    seoDescription:
      'Doppelte Dateneingabe, Excel-Listen, manuelle Übergaben? Wir automatisieren Abläufe mit festen Workflows und, wo sinnvoll, mit agentischen Prozessen und Freigabe.',
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
      { title: 'Unklare Abläufe', desc: 'Wer was wann tut, ist nicht festgehalten. Solange das so ist, lässt sich auch nichts sinnvoll automatisieren.' },
      { title: 'Ausnahmen sprengen einfache Regeln', desc: 'Klassische Automatisierung scheitert oft an den Fällen, die nicht ins Schema passen. Weil sich diese Ausnahmen nicht abbilden liessen, blieb der ganze Ablauf Handarbeit.' },
    ],
    approach: [
      { title: 'Abläufe aufnehmen', desc: 'Wir gehen mit Ihnen die wichtigsten Abläufe durch und halten fest, wo Zeit verloren geht, wo Fehler entstehen und welche Fälle die Ausnahme sind.' },
      { title: 'Pro Schritt die passende Stufe', desc: 'Für jeden Schritt klären wir, ob eine feste Regel genügt, ob KI einen Vorschlag machen soll oder ob ein Agent mehrere Werkzeuge nutzen muss. Wo eine Regel zuverlässiger und günstiger ist, bleibt es bei der Regel.' },
      { title: 'Umsetzen und anbinden', desc: 'Wir verbinden Ihre bestehenden Systeme über deren Schnittstellen oder Automatisierungsplattformen wie n8n oder Windmill. Agenten erhalten nur die Rechte, die sie für ihre Aufgabe brauchen.' },
      { title: 'Überwachen und übergeben', desc: 'Jeder Ablauf wird protokolliert und überwacht. KI-Schritte testen wir mit echten Fällen und behalten die Kosten pro Fall im Blick. Ihr Team weiss, was automatisch passiert und wann ein Fall an eine Person geht.' },
    ],
    examples: [
      { title: 'Fester Workflow für Anfragen', desc: 'Eine Website-Anfrage landet mit Quelle im CRM, die zuständige Person wird informiert und eine Aufgabe zum Nachfassen angelegt. Das läuft jedes Mal gleich und braucht keine KI.' },
      { title: 'Fester Workflow für Stammdaten', desc: 'Kundendaten aus dem CRM werden an Offerten-, Projekt- oder Buchhaltungstools übergeben, statt erneut eingetippt zu werden.' },
      { title: 'KI-Vorschlag für Dokumente', desc: 'Eingehende Rechnungen, Lieferscheine oder Formulare werden klassifiziert, die wichtigsten Felder ausgelesen und zur Kontrolle bereitgelegt. Ihr Team bestätigt oder korrigiert den Vorschlag.' },
      { title: 'Agentischer Ablauf für E-Mails', desc: 'Ein Beispiel: Eine Kundin fragt nach dem Stand ihrer Bestellung, ohne Nummer. Ein Agent sucht den Auftrag im ERP, prüft den Status und legt einen Antwortentwurf an. Versendet wird nach Freigabe.' },
      { title: 'Agentischer Ablauf für Ausnahmen', desc: 'Ein Beispiel: Bei einem unvollständigen Auftrag ergänzt ein Agent fehlende Angaben aus CRM und früheren Bestellungen und schlägt das weitere Vorgehen vor. Was er nicht sicher zuordnen kann, geht an eine Person.' },
      { title: 'Berichte mit Erklärung', desc: 'Kennzahlen aus mehreren Quellen werden regelmässig zusammengeführt. KI ergänzt eine kurze Erklärung zu auffälligen Abweichungen, die Schlüsse zieht die Geschäftsleitung.' },
    ],
    outcomes: [
      'Weniger manuelle Arbeit in wiederkehrenden Abläufen',
      'Weniger Übertragungsfehler',
      'Ausnahmen, die vorbereitet bei der richtigen Person landen',
      'Abläufe, die protokolliert sind und nicht an einzelnen Personen hängen',
    ],
    services: ['ai-automation', 'marketing-automation', 'data-analytics'],
    tools: ['workflow-opportunity-scanner', 'process-automation-assessment', 'agentic-automation-opportunity-scanner'],
    faq: [
      { q: 'Was ist der Unterschied zwischen einem Workflow und einem agentischen Prozess?', a: 'Ein Workflow führt festgelegte Schritte immer gleich aus, zum Beispiel neue Anfrage im Formular, Kontakt im CRM anlegen, Aufgabe zuweisen. In einem agentischen Prozess liest ein Sprachmodell Inhalte, fragt Werkzeuge wie CRM oder ERP ab und leitet daraus einen Vorschlag oder eine eng begrenzte Aktion ab. Workflows sind günstiger und berechenbarer, agentische Abläufe helfen dort, wo jeder Fall etwas anders aussieht. Eine Integration allein ist noch kein Agent.' },
      { q: 'Welche Abläufe eignen sich für eine Automatisierung?', a: 'Abläufe, die häufig vorkommen, klaren Regeln folgen und heute viel Handarbeit verursachen, eignen sich für einen festen Workflow. Abläufe mit vielen Ausnahmen oder Ermessensentscheiden eignen sich eher für einen KI-unterstützten oder agentischen Ablauf, bei dem ein Mensch den letzten Schritt macht.' },
      { q: 'Was darf ein Agent selbst tun?', a: 'Nur, was vorher festgelegt ist. Lesen, einordnen und Entwürfe anlegen ist meist unkritisch. Alles, was nach aussen geht, Geld kostet, Daten löscht oder Kunden direkt betrifft, gibt ein Mensch frei. Jeder Schritt wird protokolliert, die Rechte des Agenten sind auf seine Aufgabe beschränkt, und Personendaten bearbeiten wir nach dem Schweizer Datenschutzgesetz.' },
      { q: 'Brauchen wir dafür neue Software?', a: 'In vielen Fällen nicht. Die meisten gängigen Tools haben Schnittstellen, die sich verbinden lassen. Wir prüfen zuerst, was mit Ihrer bestehenden Ausstattung möglich ist.' },
      { q: 'Was passiert, wenn eine Automatisierung ausfällt?', a: 'Jeder Ablauf wird überwacht. Bei einem Fehler wird eine verantwortliche Person benachrichtigt, und die Dokumentation beschreibt, wie es manuell weitergeht. Kann ein Agent einen Fall nicht sicher einordnen, gibt er ihn an eine Person ab, statt zu raten.' },
      { q: 'Wie lange dauert ein erstes Projekt?', a: 'Das hängt vom Ablauf und den beteiligten Systemen ab. Wir starten bewusst mit einem überschaubaren Ablauf, damit Sie früh sehen, ob sich der Ansatz bewährt.' },
    ],
  },
  'vertrieb-optimieren': {
    slug: 'vertrieb-optimieren',
    label: 'Vertriebsprozesse optimieren',
    h1: 'Aus Anfragen Aufträge machen, mit dem CRM als Grundlage.',
    intro:
      'Viele KMU verlieren Umsatz erst nach dem Marketing. Anfragen werden zu spät beantwortet und Angebote nicht nachgefasst. Wo Verkaufschancen stehen, weiss oft niemand genau. Wir richten Ihre Vertriebsabläufe so ein, dass das CRM die gemeinsame Datengrundlage ist. Darauf übernehmen feste Regeln Zuweisung und Erinnerungen, und KI bereitet Gespräche und das Nachfassen vor. Gespräch, Offerte und Entscheid bleiben bei Ihrem Vertrieb.',
    seoTitle: 'Vertriebsprozesse optimieren | performanceboost',
    seoDescription:
      'Anfragen bleiben liegen, Nachfassen hängt an Einzelnen? Wir machen das CRM zur Datengrundlage Ihres Vertriebs und ergänzen feste Regeln und KI-Vorarbeit mit Freigabe.',
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
      { title: 'Keine gemeinsame Definition', desc: 'Was als qualifizierte Anfrage gilt und wann sie an den Vertrieb geht, ist nicht festgelegt.' },
      { title: 'CRM ohne klaren Prozess', desc: 'Das System ist da, aber Phasen, Pflichtfelder und Zuständigkeiten passen nicht zum tatsächlichen Verkauf. Es fehlen die Daten, auf denen jede Auswertung und jede KI-Unterstützung aufbaut.' },
      { title: 'Vorarbeit frisst Verkaufszeit', desc: 'Recherche, Notizen und Nachfassmails erledigt jede Person selbst. Ob es passiert, hängt an der Disziplin Einzelner.' },
    ],
    approach: [
      { title: 'Verkaufsprozess aufnehmen', desc: 'Wir zeichnen den Weg von der ersten Anfrage bis zum Auftrag nach und markieren, wo Interessenten verloren gehen und wo Vorarbeit Zeit kostet.' },
      { title: 'Regeln festlegen', desc: 'Gemeinsam mit Marketing und Vertrieb definieren wir Phasen, Übergaben, Zuständigkeiten und eine einfache Bewertung von Anfragen.' },
      { title: 'CRM als Datengrundlage', desc: 'Wir richten das CRM nach diesen Regeln ein, bereinigen die Daten und verbinden es mit Website, E-Mail und Kalender. Zuweisung, Erinnerungen und Fristen laufen als feste Abläufe.' },
      { title: 'KI-Vorarbeit und Auswertung', desc: 'Wo es sich lohnt, ergänzen wir Agenten für Gesprächsvorbereitung und Nachfassentwürfe. Eine Pipeline-Auswertung zeigt Fortschritt und Engpässe, und Ihr Team erhält eine Einführung, damit das System genutzt wird.' },
    ],
    examples: [
      { title: 'Schnelle Erstreaktion', desc: 'Neue Anfragen werden nach festen Regeln zugewiesen, die zuständige Person informiert und eine Frist gesetzt.' },
      { title: 'Vorqualifizierung mit Begründung', desc: 'KI ordnet eine neue Anfrage nach Ihren Kriterien ein und hält die Begründung im CRM fest. Ihr Team sieht die Einordnung und kann sie ändern.' },
      { title: 'Vorbereitete Gespräche', desc: 'Vor einem Termin fasst ein Agent zusammen, was im CRM, auf der Website des Unternehmens und in bisherigen Kontakten steht. So bereiten wir auch unsere eigenen Erstgespräche vor.' },
      { title: 'Nachfassen mit Entwurf', desc: 'Nach einem Angebot erinnert das CRM an den nächsten Schritt, und ein Entwurf für die Nachricht liegt bereit. Versendet wird erst nach Freigabe.' },
      { title: 'Datenpflege im Hintergrund', desc: 'Ein Beispiel: Fehlende Angaben wie Branche oder Firmengrösse werden aus öffentlichen Quellen vorgeschlagen und Dubletten markiert. Übernommen wird nach Prüfung oder nach festen Regeln.' },
      { title: 'Pipeline für die Geschäftsleitung', desc: 'Ein Überblick über offene Verkaufschancen nach Phase, Wert und Alter, ohne manuelles Zusammensuchen.' },
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
      { q: 'Wo hilft KI im Vertrieb und wo nicht?', a: 'Bei der Vorarbeit, also beim Einordnen von Anfragen, beim Vorbereiten von Gesprächen, beim Entwerfen von Nachfassmails und bei der Datenpflege. Gespräch und Offerte bleiben bei Ihrem Vertrieb, und nichts geht ohne Freigabe an Kunden. Voraussetzung ist ein CRM mit sauberen Daten, sonst verstärkt KI nur die Lücken. Welche Daten ein Agent lesen darf, legen wir mit Ihnen fest, nach dem Schweizer Datenschutzgesetz.' },
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
