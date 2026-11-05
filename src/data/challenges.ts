/**
 * Lösungen nach Herausforderung (problemorientierte Einstiege).
 *
 * `CHALLENGE_CARDS`: alle Herausforderungen für /loesungen und die Startseite. Nur zwei haben eine eigene Seite
 * (CHALLENGE_PAGES); die übrigen führen auf bestehende Seiten mit gleicher Suchintention
 * (Begründung: docs/business-performance-repositioning/03-sitemap-content-mapping.md).
 */

export interface ChallengeCard {
  title: string;
  desc: string;
  href: string;
  linkText: string;
}

export const CHALLENGE_CARDS: ChallengeCard[] = [
  {
    title: 'Mehr passende Kunden gewinnen',
    desc: 'Das Wachstum stockt, obwohl Sie in Marketing investieren, oder neue Kunden kommen fast nur über Empfehlungen.',
    href: '/leistungen/wachstum-marketing',
    linkText: 'Zu Wachstum & Marketing',
  },
  {
    title: 'Vertriebsprozesse verbessern',
    desc: 'Anfragen bleiben liegen, das Nachfassen hängt an Einzelnen und niemand sieht, wo Verkaufschancen stehen.',
    href: '/loesungen/vertrieb-optimieren',
    linkText: 'Vertrieb optimieren',
  },
  {
    title: 'Geschäftsprozesse automatisieren',
    desc: 'Ihr Team verliert Zeit mit Abtippen, Excel-Listen und manuellen Übergaben zwischen Systemen.',
    href: '/loesungen/prozessautomatisierung',
    linkText: 'Prozesse automatisieren',
  },
  {
    title: 'KI sinnvoll einsetzen',
    desc: 'Einzelne nutzen ChatGPT, aber in den eigentlichen Abläufen bringt KI noch keinen spürbaren Nutzen.',
    href: '/leistungen/ai-automation',
    linkText: 'Zu KI & Automatisierung',
  },
  {
    title: 'Daten und Reporting verbessern',
    desc: 'Zahlen widersprechen sich, Berichte kosten Zeit und Entscheidungen fallen trotzdem aus dem Bauch.',
    href: '/leistungen/data-analytics',
    linkText: 'Zu Tracking, Analyse & Reporting',
  },
  {
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
  eyebrow: string;
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
    eyebrow: 'Lösung · Prozessautomatisierung',
    h1: 'Weniger Handarbeit in Ihren Abläufen.',
    intro:
      'Prozessautomatisierung heisst: Wiederkehrende Arbeitsschritte, etwa das Übertragen von Daten, Benachrichtigungen, Freigaben oder Berichte, laufen automatisch zwischen Ihren bestehenden Systemen ab. Wir finden heraus, welche Abläufe sich dafür eignen, und setzen sie so um, dass Ihr Team sie versteht und weiterführen kann.',
    seoTitle: 'Geschäftsprozesse automatisieren für KMU | performanceboost',
    seoDescription:
      'Doppelte Dateneingabe, Excel-Listen, manuelle Übergaben: Wir finden automatisierbare Abläufe und setzen sie mit Ihren bestehenden Tools um.',
    ctaLabel: 'Prozesse besprechen',
    symptoms: [
      'Dieselben Daten werden in mehreren Systemen von Hand erfasst.',
      'Excel-Listen dienen als Brücke zwischen Website, CRM, Buchhaltung oder Projekttool.',
      'Wichtige Schritte hängen am Gedächtnis einzelner Personen.',
      'Berichte werden jede Woche oder jeden Monat neu zusammenkopiert.',
      'Anfragen, Aufträge oder Freigaben bleiben liegen, weil niemand informiert wurde.',
    ],
    causes: [
      { title: 'Gewachsene Systemlandschaft', desc: 'Jedes Tool wurde für einen Zweck eingeführt. Eine Verbindung zwischen ihnen war nie geplant.' },
      { title: 'Unklare Abläufe', desc: 'Wer was wann tut, ist nicht festgehalten. Solange das so ist, lässt sich auch nichts sinnvoll automatisieren.' },
      { title: 'Keine Zeit für Verbesserungen', desc: 'Das Tagesgeschäft lässt kaum Raum, Abläufe zu überdenken. Die Handarbeit bleibt, weil sie «ja funktioniert».' },
    ],
    approach: [
      { title: 'Abläufe aufnehmen', desc: 'Wir gehen mit Ihnen die wichtigsten Abläufe durch und halten fest, wo Zeit verloren geht und wo Fehler entstehen.' },
      { title: 'Priorisieren', desc: 'Wir bewerten jeden Kandidaten nach Häufigkeit, Aufwand und Risiko. Begonnen wird mit dem, was schnell spürbar entlastet.' },
      { title: 'Umsetzen und anbinden', desc: 'Wir verbinden Ihre bestehenden Systeme über deren Schnittstellen oder eine Automatisierungsplattform. Neue Software nur, wenn sie eine Lücke schliesst.' },
      { title: 'Dokumentieren und übergeben', desc: 'Jeder Ablauf wird beschrieben und überwacht. Ihr Team weiss, was automatisch passiert und was bei einem Fehler zu tun ist.' },
    ],
    examples: [
      { title: 'Anfragen ohne Abtippen', desc: 'Eine Website-Anfrage landet automatisch mit Quelle im CRM, die zuständige Person wird informiert und eine Aufgabe zum Nachfassen angelegt.' },
      { title: 'Daten nur einmal erfassen', desc: 'Kundendaten aus dem CRM werden an Angebots-, Projekt- oder Buchhaltungstools übergeben, statt erneut eingetippt zu werden.' },
      { title: 'Berichte, die sich selbst erstellen', desc: 'Kennzahlen aus mehreren Quellen werden regelmässig zusammengeführt und an die Geschäftsleitung verschickt.' },
      { title: 'KI für Vorarbeit', desc: 'KI fasst eingehende Anfragen oder Dokumente zusammen und schlägt eine Einordnung vor. Entschieden wird weiterhin von Ihrem Team.' },
    ],
    outcomes: [
      'Weniger manuelle Arbeit in wiederkehrenden Abläufen',
      'Weniger Übertragungsfehler',
      'Schnellere Bearbeitung von Anfragen und Aufträgen',
      'Abläufe, die nicht mehr an einzelnen Personen hängen',
    ],
    services: ['ai-automation', 'marketing-automation', 'data-analytics'],
    tools: ['workflow-opportunity-scanner', 'process-automation-assessment', 'agentic-automation-opportunity-scanner'],
    faq: [
      { q: 'Welche Abläufe eignen sich für eine Automatisierung?', a: 'Abläufe, die häufig vorkommen, klaren Regeln folgen und heute viel Handarbeit verursachen. Abläufe mit vielen Ausnahmen oder Ermessensentscheiden eignen sich besser für eine Teilautomatisierung, bei der ein Mensch den letzten Schritt macht.' },
      { q: 'Brauchen wir dafür neue Software?', a: 'In vielen Fällen nicht. Die meisten gängigen Tools haben Schnittstellen, die sich verbinden lassen. Wir prüfen zuerst, was mit Ihrer bestehenden Ausstattung möglich ist.' },
      { q: 'Was passiert, wenn eine Automatisierung ausfällt?', a: 'Jeder Ablauf wird überwacht. Bei einem Fehler wird eine verantwortliche Person benachrichtigt, und die Dokumentation beschreibt, wie es manuell weitergeht.' },
      { q: 'Wie lange dauert ein erstes Projekt?', a: 'Das hängt vom Ablauf und den beteiligten Systemen ab. Wir starten bewusst mit einem überschaubaren Ablauf, damit Sie früh sehen, ob sich der Ansatz bewährt.' },
    ],
  },
  'vertrieb-optimieren': {
    slug: 'vertrieb-optimieren',
    label: 'Vertriebsprozesse optimieren',
    eyebrow: 'Lösung · Vertrieb optimieren',
    h1: 'Aus mehr Anfragen mehr Aufträge machen.',
    intro:
      'Viele KMU verlieren Umsatz nicht im Marketing, sondern danach: Anfragen werden zu spät beantwortet, Angebote nicht nachgefasst und niemand sieht, wo Verkaufschancen stehen. Wir bringen Struktur in Lead-Management, CRM und Vertriebsabläufe, damit Ihr Vertrieb seine Zeit für die richtigen Gespräche nutzt.',
    seoTitle: 'Vertriebsprozesse optimieren | performanceboost',
    seoDescription:
      'Anfragen bleiben liegen, Nachfassen hängt an Einzelnen, die Pipeline ist unklar? Wir bringen Struktur in Lead-Management, CRM und Vertrieb.',
    ctaLabel: 'Vertrieb besprechen',
    symptoms: [
      'Neue Anfragen werden erst nach Tagen beantwortet.',
      'Angebote gehen raus, aber das Nachfassen passiert unregelmässig.',
      'Das CRM ist unvollständig oder wird nur von einzelnen genutzt.',
      'Marketing und Vertrieb sind sich nicht einig, was eine gute Anfrage ist.',
      'Die Geschäftsleitung weiss nicht, wie viel Umsatz in der Pipeline steckt.',
    ],
    causes: [
      { title: 'Keine gemeinsame Definition', desc: 'Was als qualifizierte Anfrage gilt und wann sie an den Vertrieb geht, ist nicht festgelegt.' },
      { title: 'CRM ohne klaren Prozess', desc: 'Das System ist da, aber Phasen, Pflichtfelder und Zuständigkeiten passen nicht zum tatsächlichen Verkauf.' },
      { title: 'Nachfassen ohne System', desc: 'Erinnerungen, Vorlagen und Abläufe fehlen, also hängt alles an der Disziplin einzelner.' },
    ],
    approach: [
      { title: 'Verkaufsprozess aufnehmen', desc: 'Wir zeichnen den Weg von der ersten Anfrage bis zum Auftrag nach und markieren, wo Interessenten verloren gehen.' },
      { title: 'Regeln festlegen', desc: 'Gemeinsam mit Marketing und Vertrieb definieren wir Phasen, Übergaben, Zuständigkeiten und eine einfache Bewertung von Anfragen.' },
      { title: 'CRM und Automatisierung', desc: 'Wir richten das CRM nach diesen Regeln ein und automatisieren Zuweisung, Erinnerungen und Nachfass-Schritte.' },
      { title: 'Messen und schulen', desc: 'Eine Pipeline-Auswertung zeigt Fortschritt und Engpässe. Ihr Team erhält Leitfäden und eine Einführung, damit das System genutzt wird.' },
    ],
    examples: [
      { title: 'Schnelle Erstreaktion', desc: 'Neue Anfragen werden automatisch zugewiesen, die zuständige Person informiert und eine Frist gesetzt.' },
      { title: 'Nachfassen mit Struktur', desc: 'Nach einem Angebot erinnert das CRM an die nächsten Schritte, passende Vorlagen liegen bereit.' },
      { title: 'Prioritäten sichtbar', desc: 'Eine einfache Bewertung zeigt, welche Anfragen am besten zu Ihrem Angebot passen.' },
      { title: 'Pipeline für die Geschäftsleitung', desc: 'Ein Überblick über offene Verkaufschancen nach Phase, Wert und Alter, ohne manuelles Zusammensuchen.' },
    ],
    outcomes: [
      'Kürzere Reaktionszeiten auf neue Anfragen',
      'Ein nachvollziehbarer Verkaufsprozess',
      'Weniger verlorene Verkaufschancen',
      'Eine Pipeline, auf die sich die Geschäftsleitung verlassen kann',
    ],
    services: ['revenue-operations', 'sales-enablement', 'marketing-automation'],
    tools: ['sales-process-assessment', 'follow-up-effectiveness-review', 'pipeline-hygiene-review', 'lead-routing-assessment'],
    faq: [
      { q: 'Wir haben ein kleines Vertriebsteam. Lohnt sich das?', a: 'Gerade in kleinen Teams fällt jede liegengebliebene Anfrage ins Gewicht. Der Aufwand richtet sich nach Ihrer Grösse: Oft reichen wenige klare Regeln und ein sauber eingerichtetes CRM.' },
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
