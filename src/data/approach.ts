/**
 * Vorgehensmodell (Delivery Framework). Gilt für alle drei Bereiche, ist aber keine Leistung und kein Menüpunkt.
 * Modular: Kunden steigen in der Phase ein, die zu ihrer Ausgangslage passt; 03 und 04 wiederholen sich laufend.
 * Seiten: /ansatz (ausführlich), Startseite (kompakt), Hubs (bereichsspezifisch über `phaseExamples`).
 */

export interface Phase {
  /** Framework-Name (englisch, wie im Claim). */
  label: string;
  /** Deutscher Titel für Geschäftsleitungen. */
  title: string;
  desc: string;
  result: string;
  /** Wann dieser Einstieg passt. */
  entry: string;
}

export const PHASES: Phase[] = [
  {
    label: 'Architecture & Setup',
    title: 'Zielbild und Systemarchitektur festlegen',
    desc: 'Wir analysieren Zahlen, Abläufe und Systeme und sprechen mit den Personen, die täglich damit arbeiten. Wir prüfen, welche Daten vorhanden und verlässlich sind, und entwerfen den Ablauf so, wie er mit Automatisierung und KI von Anfang an aussehen würde. Für jeden Schritt halten wir fest, ob eine Regel, KI oder ein Agent ihn übernimmt, welche Rechte nötig sind und wo ein Mensch freigibt.',
    result: 'Ein Zielbild mit Prioritäten, Systemarchitektur, Freigaberegeln und wenigen klaren Kennzahlen.',
    entry: 'Sie wissen noch nicht, wo es sich am meisten lohnt.',
  },
  {
    label: 'Roll-out & Hypercare',
    title: 'Umsetzen und stabil in Betrieb nehmen',
    desc: 'Wir verbinden die Systeme, übernehmen bestehende Daten und bauen Workflows und Agenten. Bevor etwas live geht, prüfen wir es mit echten Fällen aus Ihrem Alltag, richten Protokolle und Fehlermeldungen ein und legen fest, wann ein Fall an einen Menschen geht. Nach dem Start begleiten wir den Betrieb eng, bis alles verlässlich läuft. Diese Phase heisst Hypercare.',
    result: 'Die Lösung läuft produktiv, ist dokumentiert und wird überwacht.',
    entry: 'Das Ziel ist klar, es fehlt die Umsetzung.',
  },
  {
    label: 'Enablement',
    title: 'Ihr Team befähigen',
    desc: 'Ihr Team lernt mit eigenen Fällen, was automatisch passiert, wie Vorschläge von KI und Agenten zu prüfen sind und wie Freigaben funktionieren. Dazu gehören eine verständliche Dokumentation, schriftliche Regeln für Daten und Tools und eine klare Zuständigkeit, wer bei Fehlern was tut.',
    result: 'Ihr Team arbeitet selbständig mit der Lösung und behält die Kontrolle.',
    entry: 'Systeme sind vorhanden, werden aber kaum oder uneinheitlich genutzt.',
  },
  {
    label: 'Iteration & Optimization',
    title: 'Laufend verbessern',
    desc: 'Einmal im Monat schauen wir gemeinsam auf die vereinbarten Kennzahlen, die Qualität der Vorschläge und die Kosten pro Fall. Wir passen Regeln, Anweisungen und Datenquellen an. Hält ein Agent über längere Zeit, kann er mehr Spielraum erhalten. Was nicht wirkt, ändern oder stoppen wir.',
    result: 'Workflows und Agenten werden Schritt für Schritt besser, gemessen an Ihren Zahlen.',
    entry: 'Es läuft, soll aber messbar besser werden.',
  },
];

/** Arbeitsformen (vertragliche Ebene, unabhängig von den Phasen). Preise werden nicht öffentlich genannt. */
export const WORK_MODES = [
  {
    title: 'Performance-Analyse',
    forWhom: 'Wenn Sie wissen möchten, wo es sich am meisten lohnt',
    desc: 'Wir prüfen Marketing, Vertrieb, Systeme und Abläufe und zeigen, wo Umsatz und Zeit verloren gehen. Sie erhalten eine schriftliche Auswertung mit Prioritäten und einem Plan für die nächsten 90 Tage. In der Regel dauert die Analyse zwei bis drei Wochen.',
  },
  {
    title: 'Umsetzungsprojekt',
    forWhom: 'Für ein klar umrissenes Vorhaben',
    desc: 'Zum Beispiel ein Lead-System von der Landingpage bis ins CRM, ein aufgeräumter MarTech-Stack oder ein KI-Agent für einen definierten Ablauf, inklusive Tests, Rechten und Freigaben. Umfang, Termin, Festpreis und das Ergebnis, an dem wir die Arbeit abnehmen, stehen vor dem Start fest.',
  },
  {
    title: 'Laufende Begleitung',
    forWhom: 'Wenn Ihr Unternehmen dauerhaft besser werden soll',
    desc: 'Wir übernehmen die Verantwortung für eine vereinbarte Kennzahl, etwa qualifizierte Anfragen pro Monat, und legen jeden Monat anhand der Zahlen fest, was als Nächstes kommt. Sie haben einen festen Ansprechpartner und einen festen Monatspreis.',
  },
];

/** Grundsätze, die in jeder Phase gelten (Seite /ansatz). */
export const PRINCIPLES = [
  { title: 'Zuerst der Engpass', desc: 'Wir beginnen dort, wo heute am meisten verloren geht, nicht dort, wo das nächste Tool lockt.' },
  { title: 'Gemessen an Geschäftszahlen', desc: 'Fortschritt messen wir an Anfragen, Aufträgen, Reaktionszeiten oder eingesparten Stunden, die zu Beginn vereinbart sind. Bei Agenten zählen zusätzlich die Kosten pro korrekt erledigtem Fall.' },
  { title: 'Die einfachste verlässliche Lösung', desc: 'Daten und Ablauf klären wir vor dem Agenten. Oft genügt danach eine Regel. KI setzen wir ein, wo sie mehr leistet als eine Regel.' },
  { title: 'Ihr Team behält die Kontrolle', desc: 'Was nach aussen geht, Geld kostet oder Daten löscht, gibt ein Mensch frei. Jede Aktion eines Agenten ist protokolliert.' },
];
