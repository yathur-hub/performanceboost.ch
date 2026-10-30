/**
 * Inhalte der Finanz-Landingpages (Übersicht + drei Schwerpunkt-Seiten).
 * Quelle: GTM-Projekt «Financial-Services-GTM», 08_Landingpage/Content-Blueprint.md.
 * Regeln: keine Preise (Entscheid D3), keine Ergebniszahlen, keine Compliance-Zusagen,
 * Referenzen in der Variante «vor Freigabe» (nur bereits öffentliche Namen).
 */

export type FinanceSlug = 'finanzdienstleister' | 'hypothekarberatung' | 'vorsorgeberatung' | 'versicherungsbroker';

/** Schwerpunkt-Codes wie im Prospecting (Arbeitsregeln.md). */
export type SegmentCode = 'HY' | 'VS' | 'FP' | 'VM' | 'GA' | 'VV' | 'TR' | 'other';

export interface TextCard {
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface IcpDetail {
  heading: string;
  occasions: string[];
  build: string;
  avoid: string[];
  note?: string;
}

export interface FinancePage {
  slug: FinanceSlug;
  /** Kurzname für Breadcrumb und Seitentyp. */
  label: string;
  seoTitle: string;
  seoDescription: string;
  overline: string;
  h1: string;
  sub: string;
  /** Vorbelegung «Ihr Schwerpunkt» im Formular. */
  defaultSegment?: SegmentCode;
  pains: TextCard[];
  icpDetail?: IcpDetail;
  references: ReferenceId[];
  faqs: FaqItem[];
}

export type ReferenceId = 'mission13' | 'cuira' | 'ostschweiz' | 'tessin';

export interface ReferenceCard {
  id: ReferenceId;
  label: string;
  intro?: string;
  work: string[];
  /** id in TESTIMONIALS_DATA, damit der Zitattext nur an einem Ort gepflegt wird. */
  testimonialId?: string;
  status?: string;
}

// ---------------------------------------------------------------------------
// Gemeinsame Abschnitte
// ---------------------------------------------------------------------------

export const TRUST_POINTS = [
  'Werbekonten und Daten bleiben bei Ihnen',
  'Messung bis zum vereinbarten Termin',
  'Keine Leadverkäufe, keine Garantien',
  'Direkter Kontakt mit dem Inhaber',
];

export const PAIN_HEADING = 'Neue Mandate, die nicht nur von Empfehlungen abhängen';
export const PAIN_INTRO =
  'Die meisten Beratungsfirmen, mit denen wir sprechen, wachsen gut. Aber sie wissen selten, wie viele neue Gespräche der nächste Monat bringt.';

const PAIN_REFERRALS: TextCard = {
  title: 'Empfehlungen tragen, aber sie lassen sich nicht steuern',
  desc: 'Zufriedene Kundinnen und Kunden empfehlen Sie weiter. Wann und wie oft, entscheiden aber nicht Sie. Wenn ein wichtiger Empfehlungsgeber in Pension geht oder ein Zuträger wegfällt, merken Sie das erst Monate später im Kalender.',
};
const PAIN_WAVES: TextCard = {
  title: 'Anfragen kommen in Wellen',
  desc: 'Einen Monat ist der Kalender voll, im nächsten fehlen Erstgespräche. Planen lässt sich so weder die Zeit Ihrer Beraterinnen und Berater noch eine neue Stelle.',
};
const PAIN_MEASUREMENT: TextCard = {
  title: 'Niemand weiss, was die Website bringt',
  desc: 'Es gibt eine Website, vielleicht auch Anzeigen. Wie viele Anfragen daraus entstehen, welche davon zu einem Termin führen und was ein neues Mandat kostet, kann kaum jemand sagen. Oft ist die Messung nie richtig eingerichtet worden.',
};
const PAIN_AGENCY: TextCard = {
  title: 'Die letzte Agentur hat Klicks geliefert, keine Gespräche',
  desc: 'Berichte voller Reichweite und Klickraten, aber keine Antwort auf die Frage, die zählt: Wie viele gute Erstgespräche sind daraus entstanden? Dazu Texte, die Ihre Branche nicht kennen und regulatorisch nicht passen.',
};

export const BENEFITS: TextCard[] = [
  {
    title: 'Sie wissen, woher neue Gespräche kommen.',
    desc: 'Jede Anfrage trägt ihre Herkunft mit: Google, Meta, Empfehlung, Ihr eigener Newsletter.',
  },
  {
    title: 'Ihre Beraterinnen und Berater sprechen mit den richtigen Personen.',
    desc: 'Die Anfrageseite fragt vorab ab, worum es geht und wie dringend es ist. Sie entscheiden, wer einen Termin erhält.',
  },
  {
    title: 'Sie entscheiden auf Basis von Zahlen, die Sie prüfen können.',
    desc: 'Konten, Messung und Auswertung laufen auf Ihren Namen. Wenn wir aufhören, bleibt alles bei Ihnen.',
  },
  {
    title: 'Ihre Werbung passt zu Ihrer Branche.',
    desc: 'Keine Rendite- oder Ersparnisversprechen, Werbung klar als Werbung gekennzeichnet, gesetzliche Werte mit Quelle.',
  },
];

export const BUILDING_BLOCKS: { title: string; desc: string; points: string[] }[] = [
  {
    title: 'Anfrageseite',
    desc: 'Eine Seite pro Beratungsthema, die erklärt, vorqualifiziert und direkt zur Terminwahl führt.',
    points: ['Landingpage auf Ihrer Domain', 'Formular mit wenigen, gezielten Fragen', 'Online-Terminbuchung'],
  },
  {
    title: 'Kampagnen',
    desc: 'Anzeigen dort, wo Ihre Kundinnen und Kunden suchen, beschränkt auf Ihr Einzugsgebiet.',
    points: ['Google-Suche', 'Meta (Facebook/Instagram)', 'LinkedIn, wo es passt', 'Texte ohne Rendite- oder Garantieversprechen'],
  },
  {
    title: 'Messung',
    desc: 'Von der Anzeige bis zum vereinbarten Termin; mit Ihren Kundendaten im CRM auch bis zum Abschluss.',
    points: ['Google Analytics 4 und Tag Manager', 'Cookie-Hinweis', 'Auswertung, die Sie selbst öffnen können'],
  },
  {
    title: 'Nachfassen',
    desc: 'Damit keine Anfrage liegen bleibt.',
    points: ['Sofortige Benachrichtigung', 'Bestätigung an Ihre Interessenten', 'Erinnerungen vor dem Termin', 'Anbindung an Ihr CRM'],
  },
];

export const AD_CHECK_NOTE =
  'Bevor eine Anzeige live geht, prüfen wir sie auf Werbekennzeichnung, Renditeaussagen und Pflichtangaben. Das ersetzt keine Rechtsberatung; die Freigabe liegt bei Ihnen oder Ihrer Compliance-Stelle.';

export const ICP_CARDS: { slug: FinanceSlug; title: string; desc: string; linkText: string }[] = [
  {
    slug: 'hypothekarberatung',
    title: 'Hypothek & Eigenheim',
    desc: 'Erstkäufer, auslaufende Festhypotheken, Tragbarkeitsfragen: Anlässe, nach denen Menschen konkret suchen. Wir bringen sie auf Ihre Anfrageseite statt auf ein Vergleichsportal.',
    linkText: 'Mehr zu Hypothekarberatung',
  },
  {
    slug: 'vorsorgeberatung',
    title: 'Vorsorge & Finanzplanung',
    desc: 'Pensionierung, Kapitalbezug oder Rente, Einkauf in die Pensionskasse: Themen, die Menschen online vorbereiten. Wir sorgen für den klaren nächsten Schritt zu Ihnen.',
    linkText: 'Mehr zu Vorsorgeberatung',
  },
  {
    slug: 'versicherungsbroker',
    title: 'Versicherung: Broker & Generalagenturen',
    desc: 'Ob ungebundener Broker oder Generalagentur: eine lokale Anfrageseite mit Online-Terminbuchung bringt eigene Anfragen statt gekaufter Kontakte.',
    linkText: 'Mehr zu Versicherungsbroker',
  },
];

export const REFERENCES_INTRO =
  'Wir zeigen hier, was wir für Kundinnen und Kunden aus Ihrer Branche gebaut haben. Zahlen veröffentlichen wir erst, wenn sie mit Zeitraum und Definition freigegeben sind.';

export const REFERENCES: Record<ReferenceId, ReferenceCard> = {
  mission13: {
    id: 'mission13',
    label: 'Hypotheken- und Eigenheimberatung · Ostschweiz',
    intro: 'Begleitet Paare und Familien auf dem Weg ins Eigenheim.',
    work: [
      'Website mit qualifizierendem Formular in vier Schritten',
      'Kampagnen auf Google und Meta',
      'Tracking und Auswertung',
      'LinkedIn-Strategie für die Geschäftsleitung',
    ],
    testimonialId: 'simon-karrica',
  },
  cuira: {
    id: 'cuira',
    label: 'Pensionsplanung · Zürich',
    intro: 'Plant Pensionierungen unabhängig von Banken und Versicherungen.',
    work: [
      'Landingpage mit «Pensionscheck» (Fragen vor der Terminbuchung)',
      'Pensionsrechner mit den gesetzlichen Parametern 2026',
      'Messkonzept für Formular und Termin',
    ],
    testimonialId: 'tiago-garcia',
  },
  ostschweiz: {
    id: 'ostschweiz',
    label: 'Versicherungs-, Vorsorge- und Steuerberatung · Ostschweiz',
    work: [
      'Strategie für Privat- und Firmenkunden',
      'Landingpage zu einem Lebensphasen-Thema mit Rechner und Checkliste',
      'Kampagnenpaket für Google und Meta',
      'Auswertung, die zeigt, welche Anfragen tatsächlich gemessen werden',
    ],
  },
  tessin: {
    id: 'tessin',
    label: 'Versicherungs-Generalagentur · Tessin',
    work: [
      'Drei Landingpages auf Italienisch, Deutsch und Englisch mit Online-Terminbuchung',
      'Tracking mit eigenem Cookie-Hinweis',
      'Kampagnen auf Google und Meta',
    ],
    status: 'Pilot läuft. Umsetzung zusammen mit Partnern. Auswertung nach Abschluss der Pilotphase.',
  },
};

export const PROCESS_STEPS: TextCard[] = [
  {
    title: 'Anfrage-Check (30 Min.)',
    desc: 'Wir sehen uns vorab Ihre Website, Ihren Anfrageweg und die Suchnachfrage in Ihrer Region an. Im Gespräch zeigen wir Ihnen, was wir gefunden haben, und hören zu, wie Sie heute Kunden gewinnen.',
  },
  {
    title: 'Neukunden-Diagnose (optional, kostenpflichtig)',
    desc: 'Wenn Sie es genauer wissen wollen: Wir rechnen mit Klickpreisen und Suchnachfrage Ihrer Region und mit Ihren eigenen Werten pro Mandat. Sie erhalten eine zweiseitige Einschätzung. Lohnt sich ein Pilot nicht, sagen wir es Ihnen. Die Kosten rechnen wir voll an, wenn Sie innert 60 Tagen starten.',
  },
  {
    title: 'Pilot mit festem Zeitraum',
    desc: 'Wir bauen auf, was vereinbart ist, und starten die Kampagnen. Vorher legen wir schriftlich fest, woran wir den Pilot messen und wann er endet, wenn das Ziel verfehlt wird.',
  },
  {
    title: 'Gemeinsame Auswertung',
    desc: 'Am Ende des Pilots schauen wir die Zahlen zusammen an: Anfragen, qualifizierte Anfragen, gehaltene Termine und, wenn Ihr CRM es zulässt, Abschlüsse. Dann entscheiden Sie, ob und wie es weitergeht.',
  },
];

export const PACKAGES: { name: string; audience: string; items: string[]; recommended?: boolean }[] = [
  {
    name: 'Kern',
    audience: 'Büros mit 6–15 Personen, 1–2 Anlässe',
    items: [
      'Landingpage mit Varianten',
      'Google-Suche + Meta (oder Local SEO bei Versicherung)',
      'Messung bis zum Mandat über Ihr CRM',
      'Sofortige Bestätigung und Erinnerung',
      'Monatliches Gespräch (45 Min.)',
    ],
    recommended: true,
  },
  {
    name: 'Start',
    audience: 'Büros mit 2–5 Personen, ein Beratungsanlass',
    items: [
      '1 Landingpage',
      'Google-Suche',
      'Messung bis zum gehaltenen Termin',
      'Benachrichtigung bei neuer Anfrage',
      'Werbe-Check',
      'Monatliches Gespräch (30 Min.)',
    ],
  },
  {
    name: 'Ausbau',
    audience: 'Firmen mit 16–30 Personen, mehrere Anlässe oder Standorte',
    items: [
      '2 Landingpages',
      'Drei Kanäle',
      'Verteilung der Anfragen auf mehrere Beratende',
      'Dashboard pro Anlass',
      'Quartalsgespräch mit der Geschäftsleitung',
    ],
  },
];

export const PACKAGE_NOTES = [
  'Was ein Pilot für Ihre Beratung kostet, erhalten Sie nach dem Anfrage-Check schriftlich und verbindlich, ohne Verpflichtung.',
  'Pilot: 3 Monate (bei Vorsorge 4 Monate). Wird das vorher vereinbarte Ziel verfehlt, endet der Vertrag ohne Kündigungsfrist.',
  'Das Werbebudget zahlen Sie direkt an Google oder Meta, auf Ihrem eigenen Konto.',
];

export const PACKAGE_OPTIONS = ['CRM-Einführung', 'Zusätzliche Landingpages', 'Zweitsprache'];

export const DONT_DO = [
  'Keine Garantien auf Anfragen oder Termine und keine Zahlen ohne Bedingungen.',
  'Keine Rendite-, Zins- oder Steuerversprechen in Anzeigen. Gesetzliche Werte nur mit Quelle.',
  'Werbung ist als Werbung erkennbar.',
  'Keine Gesundheitsfragen in Anfrageformularen, keine Vermögens- oder Gesundheitsangaben an Werbeplattformen.',
  'Keine gekauften Adresslisten und keine automatisierten Massenmails.',
  'Keine Rechtsberatung: Die Freigabe von Werbetexten liegt bei Ihnen oder Ihrer Compliance-Stelle.',
];

export const DATA_LOCATION =
  'Wir sagen Ihnen pro Projekt schriftlich, welche Systeme wir einsetzen und wo sie betrieben werden: Website, Formular, Automatisierung, CRM und Werbeplattformen. Auf Wunsch wählen wir Anbieter mit Standort Schweiz oder EU, soweit verfügbar.';

export const CONTACT_PERSON_TEXT =
  'Sie sprechen direkt mit mir, nicht mit einem Account Manager. Ich habe für Beratungsfirmen aus Hypothek, Vorsorge und Versicherung Anfrageseiten, Kampagnen und Messkonzepte aufgebaut, auch auf Italienisch für das Tessin. Mir ist wichtig, dass Sie am Ende wissen, was funktioniert, und nicht nur, was wir gemacht haben.';

export const FIT = {
  good: 'Beratungsfirmen in der Schweiz mit 1 bis 50 Mitarbeitenden, Schwerpunkt Hypothek, Vorsorge, Finanzplanung oder Versicherung, mit eigener Website und dem Ziel, mehr neue Mandate zu gewinnen.',
  less: 'Firmen, die nur gekaufte Leads oder garantierte Termine suchen. Grossbanken und Versicherer-Zentralen. Reine Vermögensverwaltung mit Akquise über Netzwerk.',
};

export const FORM_EXPECTATIONS = [
  '30 Minuten per Video oder Telefon',
  'Drei konkrete Befunde zu Ihrer Website und Ihrem Anfrageweg',
  'Eine ehrliche Einschätzung, ob sich ein Pilot für Sie lohnt',
  'Kein Verkaufsdruck, keine Verpflichtung',
];

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

const FAQ = {
  kosten: {
    q: 'Was kostet die Zusammenarbeit?',
    a: 'Der Anfrage-Check ist kostenlos. Was ein Pilot für Ihre Beratung kostet, hängt von der Grösse, der Zahl der Beratungsanlässe und den Kanälen ab. Sie erhalten es nach dem Gespräch schriftlich und verbindlich. Das Werbebudget kommt dazu und läuft über Ihr eigenes Konto.',
  },
  bindung: {
    q: 'Wie lange bin ich gebunden?',
    a: 'Der Pilot dauert 3 Monate, bei Vorsorgethemen 4 Monate. Danach ist das Paket Start monatlich kündbar, Kern und Ausbau mit 3 Monaten Frist. Verfehlen wir das Ziel, das wir vor dem Start schriftlich festlegen, endet der Vertrag ohne Kündigungsfrist.',
  },
  garantie: {
    q: 'Garantieren Sie eine bestimmte Anzahl Termine?',
    a: 'Nein. Wie viele Anfragen entstehen, hängt von Ihrer Region, Ihrem Thema, dem Budget und davon ab, wie schnell nachgefasst wird. Wer Ihnen eine feste Zahl verspricht, kennt diese Faktoren nicht. Wir legen stattdessen vor dem Start fest, woran wir den Pilot messen und wann wir ihn abbrechen.',
  },
  allein: {
    q: 'Ich arbeite allein. Lohnt sich das für mich?',
    a: 'Ehrlich gesagt: oft nicht. Ein Pilot braucht laufend Werbebudget und freie Beratungszeit, und er rechnet sich nur, wenn ein neues Mandat genug einbringt. Im Gespräch rechnen wir das mit Ihren eigenen Zahlen durch. Wenn es nicht aufgeht, raten wir ab oder empfehlen nur einzelne Massnahmen, etwa eine bessere Anfrageseite.',
  },
  konten: {
    q: 'Wem gehören die Werbekonten, die Daten und die Website?',
    a: 'Ihnen. Google-Ads-, Meta- und Analytics-Konten laufen auf Ihren Namen, wir erhalten Zugriff als Dienstleister. Wenn die Zusammenarbeit endet, bleibt alles bei Ihnen.',
  },
  daten: {
    q: 'Was geschieht mit den Daten meiner Interessenten?',
    a: 'Formulardaten gehen direkt in Ihr System, zum Beispiel Ihr CRM oder Ihr E-Mail-Postfach. Wir bearbeiten sie nur in Ihrem Auftrag, mit Auftragsbearbeitungsvertrag nach Datenschutzgesetz. Gesundheitsangaben fragen wir in Formularen nicht ab, und an Werbeplattformen geben wir keine Vermögens- oder Gesundheitsdaten weiter.',
  },
  regulierung: {
    q: 'Muss meine Werbung FIDLEG oder VAG einhalten, und prüfen Sie das?',
    a: 'Je nach Tätigkeit gelten unterschiedliche Regeln: Werbung von Finanzdienstleistern muss als Werbung erkennbar sein, Versicherungsvermittler haben Informationspflichten, und das Lauterkeitsrecht gilt immer. Wir schreiben Anzeigen ohne Rendite- und Garantieversprechen und prüfen sie vor dem Start auf diese Punkte. Eine Rechtsberatung ist das nicht; die Freigabe liegt bei Ihnen.',
  },
  cookies: {
    q: 'Brauche ich einen Cookie-Banner auf meiner Website?',
    a: 'Wenn Sie Werbe- und Analysewerkzeuge einsetzen, informieren Sie Ihre Besucher darüber und geben ihnen die Möglichkeit, abzulehnen. Bei Werbe-Tracking über mehrere Websites empfehlen wir eine ausdrückliche Einwilligung. Wir richten das als Teil der Messung ein.',
  },
  agentur: {
    q: 'Wir haben schon eine Agentur oder einen Webdesigner. Geht das trotzdem?',
    a: 'Ja. Oft beginnen wir mit der Messung und arbeiten mit Ihrer bestehenden Website. Wir stimmen uns mit Ihrem Webdesigner oder Ihrer IT ab, damit niemand doppelt arbeitet.',
  },
  budget: {
    q: 'Wie viel Werbebudget brauche ich?',
    a: "Das hängt vom Thema und von der Region ab. Als Untergrenze rechnen wir mit CHF 1'000 pro Monat für eine einzelne Google-Kampagne und mit CHF 2'500, wenn Google und Meta zusammen laufen; darunter lässt sich kaum etwas auswerten. Im Gespräch schauen wir uns die Suchnachfrage in Ihrem Einzugsgebiet an und schlagen ein passendes Budget vor.",
  },
  start: {
    q: 'Wann kommen die ersten Anfragen?',
    a: 'Sobald Anfrageseite, Messung und Kampagnen stehen, laufen die Anzeigen. Wie schnell daraus Anfragen werden, sehen wir in den ersten Wochen. Eine verlässliche Aussage über Termine und Mandate ist erst nach einigen Wochen möglich, weil Beratungsentscheide Zeit brauchen.',
  },
  sprachen: {
    q: 'Arbeiten Sie auch auf Italienisch oder Französisch?',
    a: 'Auf Italienisch haben wir Anfrageseiten und Kampagnen für eine Generalagentur im Tessin umgesetzt. Für die Romandie klären wir im Gespräch, ob wir die Texte selbst oder mit Partnern erstellen.',
  },
} satisfies Record<string, FaqItem>;

// ---------------------------------------------------------------------------
// Seiten
// ---------------------------------------------------------------------------

export const FINANCE_PAGES: Record<FinanceSlug, FinancePage> = {
  finanzdienstleister: {
    slug: 'finanzdienstleister',
    label: 'Finanzdienstleister',
    seoTitle: 'Neukundengewinnung für Finanzberatungen in der Schweiz | performanceboost',
    seoDescription:
      'Mehr qualifizierte Erstgespräche für Hypotheken-, Vorsorge- und Versicherungsberatungen: Kampagnen, Anfrageseite und Messung bis zum Termin, auf Ihren eigenen Konten.',
    overline: 'Für Finanzdienstleister in der Schweiz',
    h1: 'Mehr qualifizierte Erstgespräche für Ihre Finanzberatung',
    sub: 'Für Hypotheken-, Vorsorge- und Versicherungsberatungen in der Schweiz: Kampagnen, Landingpage und Terminweg für Ihren Beratungsanlass. Gemessen bis zum Termin und, mit Ihrem CRM, bis zum Mandat. Auf Ihren eigenen Konten.',
    pains: [PAIN_REFERRALS, PAIN_WAVES, PAIN_MEASUREMENT, PAIN_AGENCY],
    references: ['mission13', 'cuira', 'ostschweiz', 'tessin'],
    faqs: [
      FAQ.kosten,
      FAQ.bindung,
      FAQ.garantie,
      FAQ.allein,
      FAQ.konten,
      FAQ.daten,
      FAQ.regulierung,
      FAQ.cookies,
      FAQ.agentur,
      FAQ.budget,
      FAQ.start,
      FAQ.sprachen,
    ],
  },
  hypothekarberatung: {
    slug: 'hypothekarberatung',
    label: 'Hypothekarberatung',
    seoTitle: 'Eigene Anfragen für Ihre Hypothekarberatung | performanceboost',
    seoDescription:
      'Anfragen für Hypothekarberatungen über die eigene Website statt über Vergleichsportale: Erstkäufer, auslaufende Festhypotheken und Tragbarkeitsfragen, gemessen bis zum Beratungstermin.',
    overline: 'Hypothek & Eigenheim',
    h1: 'Eigene Anfragen für Ihre Hypothekarberatung',
    sub: 'Für Beraterinnen und Berater, die Erstkäufer, auslaufende Festhypotheken und Tragbarkeitsfragen begleiten. Anfragen über Ihre eigene Website statt über Vergleichsportale, gemessen bis zum Beratungstermin.',
    defaultSegment: 'HY',
    pains: [
      PAIN_REFERRALS,
      PAIN_WAVES,
      PAIN_MEASUREMENT,
      {
        title: 'Gekaufte Leads sind Zinsjäger',
        desc: 'Wer über ein Vergleichsportal anfragt, vergleicht den Zins, nicht die Beratung. Und dieselbe Anfrage landet oft bei mehreren Anbietern gleichzeitig.',
      },
    ],
    icpDetail: {
      heading: 'Was wir für Hypothekarberatungen aufbauen',
      occasions: [
        'Kauf des ersten Eigenheims',
        'Festhypothek läuft in den nächsten 12–24 Monaten aus',
        'Tragbarkeit nach Pensionierung oder Selbständigkeit',
      ],
      build:
        'Anfrageseite «Eigenheim-Check» mit wenigen Fragen (Vorhaben, Zeitpunkt, Objekt gefunden ja/nein); Kampagnen auf Suchbegriffe rund um Kauf und Verlängerung; Messung bis zum Termin.',
      avoid: ['Mit dem «tiefsten Zins» werben. Beratung, Tragbarkeit und Begleitung stehen im Vordergrund.'],
    },
    references: ['mission13', 'cuira'],
    faqs: [
      {
        q: 'Sind Anfragen über Google nicht einfach Zinsjäger?',
        a: 'Wer nur den tiefsten Zins sucht, findet ihn auf Vergleichsportalen. Ihre Anfrageseite spricht Menschen an, die Begleitung suchen: beim ersten Kauf, bei Tragbarkeitsfragen oder vor der Verlängerung. Die Vorqualifizierung im Formular hilft, die Unterschiede früh zu erkennen.',
      },
      FAQ.kosten,
      FAQ.garantie,
      FAQ.budget,
    ],
  },
  vorsorgeberatung: {
    slug: 'vorsorgeberatung',
    label: 'Vorsorgeberatung',
    seoTitle: 'Erstgespräche für Vorsorge und Pensionsplanung | performanceboost',
    seoDescription:
      'Wer die Pensionierung plant, sucht online, lange bevor er anruft. Anfrageseite, Kampagnen und Messung für Vorsorge- und Finanzplanungsberatungen in der Schweiz.',
    overline: 'Vorsorge & Finanzplanung',
    h1: 'Erstgespräche für Vorsorge und Pensionsplanung',
    sub: 'Wer die Pensionierung plant, sucht online, lange bevor er anruft. Wir sorgen dafür, dass diese Menschen Ihre Beratung finden und Sie wissen, welcher Kanal Gespräche bringt.',
    defaultSegment: 'VS',
    pains: [
      PAIN_REFERRALS,
      {
        title: 'Vom ersten Interesse bis zum Termin dauert es',
        desc: 'Die Pensionierung planen Menschen Jahre im Voraus. Ohne einen klaren nächsten Schritt auf Ihrer Website gehen sie unterwegs verloren.',
      },
      PAIN_MEASUREMENT,
      PAIN_AGENCY,
    ],
    icpDetail: {
      heading: 'Was wir für Vorsorgeberatungen aufbauen',
      occasions: ['Pensionierung in 5–10 Jahren', 'Entscheid Kapital oder Rente', 'Säule 3a und Steuern'],
      build:
        '«Pensionscheck» mit wenigen Fragen vor der Terminbuchung; Rechner nur mit amtlichen Parametern und sichtbaren Annahmen; Hinweis «ersetzt keine Beratung».',
      avoid: ['Steuer- oder Renditezahlen ohne Beispielrechnung und Annahmen.', 'Gesundheitsfragen im Formular.'],
    },
    references: ['cuira', 'ostschweiz'],
    faqs: [
      {
        q: 'Kann man Vorsorgeberatung online gewinnen?',
        a: 'Den Abschluss nicht, aber den ersten Schritt. Viele Menschen informieren sich lange online, bevor sie anrufen. Ein klarer Pensionscheck auf Ihrer Website macht aus diesem Interesse ein Gespräch.',
      },
      FAQ.kosten,
      FAQ.garantie,
      FAQ.daten,
    ],
  },
  versicherungsbroker: {
    slug: 'versicherungsbroker',
    label: 'Versicherungsbroker',
    seoTitle: 'Eigene Anfragen für Versicherungsbroker und Generalagenturen | performanceboost',
    seoDescription:
      'Statt Leads einzukaufen: eine lokale Anfrageseite mit Online-Terminbuchung, Kampagnen in Ihrer Region und eine Messung, die Ihnen gehört. Für Broker und Generalagenturen.',
    overline: 'Versicherung: Broker & Generalagenturen',
    h1: 'Eigene Anfragen für Broker und Generalagenturen',
    sub: 'Statt Leads einzukaufen, die auch Ihre Mitbewerber erhalten: eine lokale Anfrageseite mit Online-Terminbuchung, Kampagnen in Ihrer Region und eine Messung, die Ihnen gehört.',
    defaultSegment: 'VM',
    pains: [
      PAIN_REFERRALS,
      PAIN_WAVES,
      PAIN_MEASUREMENT,
      {
        title: 'Leadpreise drücken die Marge',
        desc: 'Gekaufte Kontakte werden mehrfach verkauft, der Abschluss geht an den Schnellsten. Eigene Anfragen kosten mehr Aufbau, gehören dann aber Ihnen.',
      },
    ],
    icpDetail: {
      heading: 'Was wir für Broker und Generalagenturen aufbauen',
      occasions: [
        'Versicherungscheck für Privathaushalte',
        'KMU-Versicherungen',
        'Vorsorge für Selbständige',
        'Umzug in die Region',
      ],
      build:
        'Anfrageseiten pro Sparte, auf Wunsch mehrsprachig; Online-Terminbuchung; Kampagnen im Einzugsgebiet; Messung, die innerhalb der Vorgaben Ihres Versicherers funktioniert (bei Generalagenturen).',
      avoid: [
        'Telefonische Kaltakquise für Krankenzusatzversicherungen (seit 1.9.2024 durch eine allgemeinverbindliche Branchenvereinbarung eingeschränkt).',
        'Die Bezeichnung «unabhängig» für gebundene Vermittler.',
      ],
      note: 'Für Vermittler gelten Informationspflichten nach Art. 45 VAG. Die Anfrageseite ist ein guter Ort, sie standardisiert bereitzustellen.',
    },
    references: ['tessin', 'ostschweiz'],
    faqs: [
      {
        q: 'Darf eine Generalagentur eigene Kampagnen schalten?',
        a: 'Das regeln die Vorgaben Ihres Versicherers. Wir klären vor dem Start mit Ihnen, was erlaubt ist (Marke, Bilder, Tracking), und bauen die Kampagnen innerhalb dieses Rahmens.',
      },
      FAQ.kosten,
      FAQ.regulierung,
      FAQ.sprachen,
    ],
  },
};

export const FINANCE_SLUGS = Object.keys(FINANCE_PAGES) as FinanceSlug[];

export function isFinanceSlug(slug: string): slug is FinanceSlug {
  return (FINANCE_SLUGS as string[]).includes(slug);
}
