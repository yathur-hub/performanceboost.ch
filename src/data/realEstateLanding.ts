/**
 * Immobilien-Landingpages (Kampagnen- und Nachfragetest-Seiten).
 * Quelle: Research/Immobiliendienstleistung/09_Landingpages (LP-A, LP-B), Stand 10.11.2026.
 * Regeln: keine Preise, keine Ergebnisversprechen, keine Kundennamen (Entscheid 10.11.2026),
 * Marktzahlen nur mit Quelle und Stichtag. Zahlen jährlich nach der BFS-Leerwohnungszählung (September) prüfen.
 */
import type { VisualId } from '../components/Visual3D';

export type RealEstateSlug = 'erstvermietung-ostschweiz' | 'verkaufsmandate-makler';
export const REAL_ESTATE_SLUGS: RealEstateSlug[] = ['erstvermietung-ostschweiz', 'verkaufsmandate-makler'];

export function isRealEstateSlug(slug: string): slug is RealEstateSlug {
  return (REAL_ESTATE_SLUGS as string[]).includes(slug);
}

export interface TextCard {
  title: string;
  desc: string;
  /** Kleine Quellenzeile unter der Karte. */
  source?: string;
}

export interface RealEstatePage {
  slug: RealEstateSlug;
  /** Kurzname für Breadcrumb und strukturierte Daten. */
  label: string;
  seoTitle: string;
  seoDescription: string;
  overline: string;
  h1: string;
  /** Kursive Akzentzeile unter der H1. */
  accent: string;
  sub: string;
  /** Primär-CTA, öffnet das Overlay mit der Formularstrecke dieser Seite. */
  ctaLabel: string;
  trust: string[];
  pain: { heading: string; intro: string; cards: TextCard[] };
  benefitsHeading: string;
  benefits: TextCard[];
  approachHeading: string;
  approach: TextCard[];
  blocks: { title: string; points: string[] }[];
  scopeNote: string;
  example: { heading: string; text: string; note: string };
  /** Leerstandskosten-Rechner einblenden (nur Erstvermietung). */
  showCalculator: boolean;
  why: TextCard[];
  faq: { q: string; a: string }[];
  final: { title: string; intro: string; points: string[] };
  visual: VisualId;
  /** 3D-Objekt im Abschluss-Block. */
  finalVisual: VisualId;
  /** Querverweis auf die jeweils andere Seite. */
  related: { href: string; title: string; desc: string; linkText: string };
}

const SHARED_REFERENCE =
  'Wir haben Vermarktungskampagnen für neue und bestehende Objekte grosser Schweizer Immobiliendienstleister umgesetzt.';
const SHARED_OWNER = 'performanceboost ist inhabergeführt aus Fläsch (GR). Sie sprechen direkt mit Yathur Nathan.';

export const REAL_ESTATE_PAGES: Record<RealEstateSlug, RealEstatePage> = {
  'erstvermietung-ostschweiz': {
    slug: 'erstvermietung-ostschweiz',
    label: 'Erstvermietung Ostschweiz',
    seoTitle: 'Erstvermietung Ostschweiz | performanceboost',
    seoDescription:
      'Für Entwickler und Verwaltungen in St. Gallen und Thurgau: Mietwohnungen schneller vermieten, mit Projektseite, Kampagnen und Messung bis zum Vertrag.',
    overline: 'Erstvermietung Ostschweiz',
    h1: 'Ihre Neubauwohnungen schneller vermietet',
    accent: 'Planbar statt abwarten.',
    sub: 'Für Entwickler, Investoren und Verwaltungen in St. Gallen, im Thurgau und im Rheintal. Wir bauen für Ihr Projekt eine eigene Vermarktung auf und messen sie bis zum unterschriebenen Mietvertrag.',
    ctaLabel: 'Leerstand-Check anfragen',
    trust: [
      'Messung bis zum Mietvertrag',
      'Werbekonten und Daten bleiben bei Ihnen',
      'Erfahrung aus Vermarktungsprojekten für grosse Schweizer Immobiliendienstleister',
      'Direkter Kontakt mit dem Inhaber',
    ],
    pain: {
      heading: 'In Teilen der Ostschweiz vermieten sich Wohnungen nicht mehr von selbst',
      intro:
        'Während in Chur oder im Sarganserland kaum eine Wohnung leer steht, sieht es in der Stadt St. Gallen, am Bodensee und in Teilen des Thurgaus anders aus. Dazu kommen viele neue Projekte, die in den nächsten zwei Jahren auf den Markt kommen.',
      cards: [
        {
          title: 'Die Wohnungen stehen länger leer als geplant',
          desc: 'In der Stadt St. Gallen standen am 1. Juni 2026 rund 900 Wohnungen leer, das sind 1.95 % des Bestands. Eine Mietwohnung war im Schnitt 29 Tage ausgeschrieben, länger als im Schweizer Mittel. Bei Erstvermietungen war es nicht schneller als bei bestehenden Wohnungen.',
          source: 'Quellen: BFS Leerwohnungszählung 2026; Online-Wohnungsindex Juni 2025',
        },
        {
          title: 'Mehr Angebot, das gleichzeitig auf den Markt kommt',
          desc: "Im Kanton St. Gallen wurden innert eines Jahres rund 2'300 Mietwohnungen bewilligt, etwa 40 % mehr als im Vorjahr. Diese Wohnungen konkurrieren ab 2027 um dieselben Mieterinnen und Mieter.",
          source: 'Quelle: SGKB / Wüest Partner, Immobilienmarktbericht Juni 2026',
        },
        {
          title: 'Ein Inserat auf den Portalen und dann warten',
          desc: 'Viele Projekte werden mit Inseraten auf Homegate und ImmoScout24 vermarktet. Wie viele Interessenten daraus entstehen, wer zur Besichtigung kommt und was ein Vertrag am Ende gekostet hat, weiss danach kaum jemand.',
        },
      ],
    },
    benefitsHeading: 'Woran Sie den Unterschied sehen',
    benefits: [
      {
        title: 'Sie wissen jede Woche, wo das Projekt steht.',
        desc: 'Wie viele Interessenten sich gemeldet haben, wer zur Besichtigung kommt und wie viele Verträge unterschrieben sind, sehen Sie in einer Auswertung, die Sie selbst öffnen können.',
      },
      {
        title: 'Ihr Team spricht mit den passenden Interessenten.',
        desc: 'Die Projektseite fragt vorab Einzugstermin, Haushaltsgrösse und Budget ab. Wer nicht passt, erhält eine freundliche Antwort, ohne dass jemand telefonieren muss.',
      },
      {
        title: 'Sie erreichen Menschen, die noch nicht auf den Portalen suchen.',
        desc: 'Wer in zwölf Monaten umziehen will, scrollt heute noch nicht durch Inserate. Regionale Kampagnen auf Google, Facebook und Instagram erreichen diese Personen früher.',
      },
      {
        title: 'Sie kennen die Kosten pro Mietvertrag.',
        desc: 'Ziel ist, dass Sie nach dem Projekt wissen, was ein Vertrag gekostet hat und welcher Kanal am meisten gebracht hat. Das hilft beim nächsten Projekt.',
      },
    ],
    approachHeading: 'So läuft eine Erstvermietung mit uns',
    approach: [
      {
        title: 'Projekt und Zielgruppe klären',
        desc: 'Wir schauen uns Lage, Wohnungsmix, Mietzinse und Zeitplan an und klären, wer für diese Wohnungen in Frage kommt.',
      },
      {
        title: 'Projektseite und Messung aufbauen',
        desc: 'Eine eigene Seite pro Projekt mit Grundrissen, Bildern und einem kurzen Anfrageformular. Die Messung richten wir so ein, dass jede Anfrage ihrer Quelle zugeordnet ist.',
      },
      {
        title: 'Kampagnen starten',
        desc: 'Anzeigen auf Google und in den sozialen Medien, beschränkt auf das Einzugsgebiet. Die Portale laufen weiter, wir ergänzen sie.',
      },
      {
        title: 'Messen und nachsteuern',
        desc: 'Wöchentlich sehen wir, welche Anzeigen Besichtigungen bringen, und verschieben das Budget dorthin. Am Ende erhalten Sie eine Auswertung für das nächste Projekt.',
      },
    ],
    blocks: [
      {
        title: 'Projektseite',
        points: ['Eigene Landingpage pro Projekt', 'Grundrisse, Bilder, Wohnungsübersicht', 'Formular mit wenigen Fragen', 'Terminbuchung für Besichtigungen'],
      },
      {
        title: 'Kampagnen',
        points: ['Google-Suche und Google-Anzeigen im Einzugsgebiet', 'Facebook und Instagram', 'Texte und Bildformate pro Wohnungstyp'],
      },
      {
        title: 'Interessenten führen',
        points: [
          'Sofortige Bestätigung an Interessenten',
          'Benachrichtigung an Ihr Team',
          'Erinnerung vor der Besichtigung',
          'Übergabe an Ihr Bewerbungstool oder CRM',
        ],
      },
      {
        title: 'Messung',
        points: ['Google Analytics 4 und Tag Manager', 'Auswertung von Anfrage über Besichtigung bis Vertrag', 'Abschlussbericht'],
      },
    ],
    scopeNote:
      'Das Bewerbungsdossier, die Bonitätsprüfung und den Mietvertrag übernehmen Sie oder Ihre Verwaltung wie bisher. Wir sorgen dafür, dass genug passende Interessenten dort ankommen.',
    example: {
      heading: 'Was ein Monat Leerstand kostet',
      text: "Ein Beispiel: Ein Projekt mit 40 Wohnungen und einer durchschnittlichen Miete von CHF 1'800 verliert pro Monat Leerstand über alle Wohnungen CHF 72'000 Mietertrag. Wird das Projekt einen Monat früher voll vermietet, bleibt dieser Betrag beim Eigentümer.",
      note: 'Rechenbeispiel mit angenommenen Werten. Wie viel schneller Ihr Projekt vermietet wird, hängt von Lage, Preis und Markt ab.',
    },
    showCalculator: true,
    why: [
      { title: 'Wir kennen Immobilienvermarktung aus der Praxis.', desc: SHARED_REFERENCE },
      {
        title: 'Wir messen bis zum Vertrag, nicht bis zum Klick.',
        desc: 'Reichweite und Klickraten zeigen wir auch, entscheidend sind für uns Besichtigungen und unterschriebene Verträge.',
      },
      {
        title: 'Strategie und Umsetzung aus einer Hand.',
        desc: 'Projektseite, Kampagnen, Messung und die Anbindung an Ihre Abläufe kommen von uns. Es gibt keine Lücke zwischen Agentur, Webdesigner und Technik.',
      },
      { title: 'Persönlich und aus der Region.', desc: SHARED_OWNER },
    ],
    faq: [
      {
        q: 'Wir inserieren doch schon auf Homegate und ImmoScout24. Wozu noch mehr?',
        a: 'Die Portale bleiben wichtig, wir ersetzen sie nicht. Sie erreichen dort aber nur Menschen, die bereits aktiv suchen. Mit einer eigenen Projektseite und regionalen Kampagnen sprechen Sie zusätzlich Personen an, die einen Umzug planen und noch nicht auf den Portalen unterwegs sind. Und Sie sehen, welcher Kanal wie viele Verträge bringt.',
      },
      {
        q: 'Lohnt sich das auch für ein kleineres Projekt?',
        a: 'Das hängt von der Zahl der Wohnungen und dem Leerstandsrisiko ab. Im Leerstand-Check rechnen wir das mit Ihnen durch. Wenn sich der Aufwand nicht lohnt, sagen wir es Ihnen.',
      },
      {
        q: 'Wie schnell sehen wir etwas?',
        a: 'Die ersten Anfragen kommen meist in den ersten Wochen nach dem Start. Belastbare Aussagen darüber, welche Kanäle Besichtigungen und Verträge bringen, sind typischerweise nach vier bis acht Wochen möglich.',
      },
      {
        q: 'Was müssen wir selbst liefern?',
        a: 'Grundrisse, Bilder oder Visualisierungen, Mietzinse und den gewünschten Ablauf für Besichtigungen. Den Rest bereiten wir vor und stimmen ihn mit Ihnen ab.',
      },
      {
        q: 'Wer bezahlt die Werbung?',
        a: 'Das Werbebudget läuft über Konten auf Ihren Namen. So sehen Sie jeden Franken, und die Konten bleiben bei Ihnen, auch nach dem Projekt.',
      },
      {
        q: 'Arbeitet das mit unserem Bewerbungstool oder unserer Verwaltung zusammen?',
        a: 'In vielen Fällen ja. Ob ein bestehendes Tool wie emonitor oder Flatfox direkt angebunden werden kann oder ob wir Anfragen per E-Mail übergeben, prüfen wir im Erstgespräch.',
      },
      {
        q: 'Wir sind eine Verwaltung, kein Entwickler. Passt das trotzdem?',
        a: 'Ja. Wenn Sie Erstvermietungen für Eigentümer übernehmen, bauen wir die Vermarktung für das jeweilige Projekt auf. Das Ergebnis und die Auswertung können Sie Ihrem Auftraggeber zeigen.',
      },
      {
        q: 'Garantieren Sie eine Vollvermietung?',
        a: 'Nein. Ob und wie schnell Wohnungen vermietet werden, hängt auch von Lage, Preis und Markt ab. Wir sorgen dafür, dass Sie genug passende Interessenten erhalten und jederzeit sehen, wo das Projekt steht.',
      },
    ],
    final: {
      title: 'Wie hoch ist das Leerstandsrisiko bei Ihrem nächsten Projekt?',
      intro:
        'Im Leerstand-Check schauen wir uns Ihr Projekt an, schätzen gemeinsam die Vermarktungsdauer ein und zeigen, was eine eigene Vermarktung kosten und bringen kann. Das Gespräch dauert rund 30 Minuten.',
      points: [
        'Wir schauen uns Lage, Wohnungsmix und Zeitplan Ihres Projekts an.',
        'Sie erhalten eine Einschätzung zur Vermarktungsdauer und zu den passenden Kanälen.',
        'Danach entscheiden Sie in Ruhe. Kein Verkaufsdruck, keine Verpflichtung.',
      ],
    },
    visual: 'residential-building',
    finalVisual: 'residential-building',
    related: {
      href: '/loesungen/verkaufsmandate-makler',
      title: 'Sie verkaufen Immobilien?',
      desc: 'Für Maklerinnen und Makler gibt es eine eigene Seite: mehr Anfragen von Eigentümern, die einen Verkauf planen.',
      linkText: 'Mehr zu Verkaufsmandaten',
    },
  },

  'verkaufsmandate-makler': {
    slug: 'verkaufsmandate-makler',
    label: 'Verkaufsmandate für Makler',
    seoTitle: 'Verkaufsmandate für Makler in Graubünden | performanceboost',
    seoDescription:
      'Eigene Anfragen von Eigentümern, die verkaufen wollen: regionale Kampagnen, Ratgeberseiten und Begleitung, gemessen bis zum unterschriebenen Mandat.',
    overline: 'Für Makler in Graubünden',
    h1: 'Mehr Eigentümer, die mit Ihnen verkaufen',
    accent: 'Eigene Anfragen statt Zufall.',
    sub: 'Für Maklerinnen und Makler im Engadin, in Davos und Klosters, in Flims, Laax, Lenzerheide und im Bündner Rheintal. Wir sorgen dafür, dass Eigentümer, die einen Verkauf planen, Sie früh kennen und sich bei Ihnen melden.',
    ctaLabel: 'Mandats-Check anfragen',
    trust: [
      'Messung bis zum unterschriebenen Mandat',
      'Anfragen gehen nur an Sie',
      'Werbekonten und Daten bleiben bei Ihnen',
      'Inhabergeführt aus Graubünden',
    ],
    pain: {
      heading: 'In den Bündner Tourismusorten fehlen nicht die Käufer, sondern die Objekte',
      intro:
        "Die Nachfrage nach Wohneigentum in den Bergen ist hoch. Die Preise sind seit Ende 2019 deutlich gestiegen, im Engadin auf durchschnittlich CHF 24'000 pro Quadratmeter. Gleichzeitig kommen so wenige Wohnungen und Häuser auf den Markt wie selten zuvor.",
      cards: [
        {
          title: 'Wenige Objekte, viele Makler',
          desc: 'In den Schweizer Ferienorten wird pro Quartal nur rund 3 % des Wohneigentums zum Verkauf ausgeschrieben, halb so viel wie 2019. Um diese Objekte bewerben sich lokale Büros, nationale Maklerhäuser und internationale Marken gleichzeitig.',
          source: 'Quelle: UBS Swiss Alpine Property Focus, Juni 2026',
        },
        {
          title: 'Empfehlungen tragen, aber sie lassen sich nicht planen',
          desc: 'Die meisten Mandate entstehen über Bekannte, Bestandskunden oder die Bank. Das funktioniert, solange das Netzwerk liefert. Wie viele Mandate das nächste halbe Jahr bringt, weiss niemand genau.',
        },
        {
          title: 'Viele Eigentümer wohnen nicht vor Ort',
          desc: 'Wer eine Ferienwohnung in Davos oder Flims besitzt, lebt oft in Zürich, Basel oder im Ausland. Diese Eigentümer erreichen Sie weder mit dem Schaufenster noch mit dem Lokalblatt. Sie suchen online, lange bevor sie einen Makler anrufen.',
        },
      ],
    },
    benefitsHeading: 'Woran Sie den Unterschied sehen',
    benefits: [
      {
        title: 'Eigentümer kennen Sie, bevor sie verkaufen.',
        desc: 'Wer über einen Verkauf nachdenkt, informiert sich Monate im Voraus. Mit Ratgeberseiten und Anzeigen sind Sie in dieser Phase präsent und nicht erst, wenn das Objekt auf einem Portal steht.',
      },
      {
        title: 'Sie erhalten Anfragen, die nur an Sie gehen.',
        desc: 'Die Anfragen kommen über Ihre eigene Website und Ihre Kampagnen. Sie teilen sie mit niemandem.',
      },
      {
        title: 'Kein Kontakt geht verloren.',
        desc: 'Wer heute noch nicht verkaufen will, erhält in grösseren Abständen nützliche Informationen von Ihnen, etwa zur Marktentwicklung in seiner Gemeinde. Wenn der Zeitpunkt kommt, sind Sie die erste Adresse.',
      },
      {
        title: 'Sie wissen, was ein Mandat kostet.',
        desc: 'Ziel ist, dass Sie sehen, wie viele Eigentümeranfragen, Bewertungsgespräche und Mandate aus jedem Kanal entstehen, und was ein gewonnenes Mandat gekostet hat.',
      },
    ],
    approachHeading: 'So bauen wir Ihre Mandatsgewinnung auf',
    approach: [
      {
        title: 'Region und Eigentümer klären',
        desc: 'Welche Gemeinden, welche Objekte, welche Eigentümer: Ferienwohnung, Erbschaft, Pensionierung, Umzug ins Unterland. Wir legen fest, wen Sie erreichen wollen.',
      },
      {
        title: 'Anfrageseiten aufbauen',
        desc: 'Eine Seite pro Anlass, zum Beispiel «Ferienwohnung in Davos verkaufen» oder «Elternhaus verkaufen», mit einer Einschätzung zum Wert und einem kurzen Formular. Die Messung richten wir mit ein.',
      },
      {
        title: 'Kampagnen und Begleitung starten',
        desc: 'Anzeigen auf Google für Suchanfragen von Eigentümern und auf Facebook und Instagram für Eigentümer in und ausserhalb der Region. Wer noch nicht bereit ist, wird in Ihrem CRM weiterbegleitet.',
      },
      {
        title: 'Messen und nachsteuern',
        desc: 'Monatlich sehen Sie, welche Kanäle Bewertungsgespräche und Mandate bringen. Das Budget fliesst dorthin, wo Mandate entstehen.',
      },
    ],
    blocks: [
      {
        title: 'Anfrageseiten',
        points: ['Seiten pro Anlass und Region auf Ihrer Domain', 'Werteinschätzung oder Rückruf-Anfrage', 'Formular mit wenigen Fragen'],
      },
      {
        title: 'Kampagnen',
        points: [
          'Google-Suche nach «Wohnung verkaufen» und Ortsname',
          'Facebook und Instagram nach Region und Lebensphase',
          'Texte ohne Preisversprechen',
        ],
      },
      {
        title: 'Begleitung im CRM',
        points: ['Marktinformationen für Eigentümer, die noch warten', 'Erinnerungen für Ihr Team', 'Anbindung an Ihre Maklersoftware, wo möglich'],
      },
      {
        title: 'Messung',
        points: ['Auswertung von Anfrage über Bewertungsgespräch bis Mandat', 'Kosten pro Mandat'],
      },
    ],
    scopeNote:
      'Bewertung, Verkaufsgespräch und Vermarktung des Objekts bleiben bei Ihnen. Wir sorgen dafür, dass mehr passende Eigentümer den Weg zu Ihnen finden.',
    example: {
      heading: 'Was ein zusätzliches Mandat wert ist',
      text: "Ein Beispiel: Bei einer Ferienwohnung mit einem Verkaufspreis von CHF 2 Mio. und einer Provision von 2.5 % beträgt Ihr Honorar CHF 50'000. Schon ein zusätzliches Mandat pro Jahr macht für ein kleineres Maklerbüro einen grossen Teil des Jahresumsatzes aus.",
      note: 'Rechenbeispiel mit angenommenen Werten. Wie viele zusätzliche Mandate entstehen, hängt von Region, Objekten und Ihrem Angebot ab.',
    },
    showCalculator: false,
    why: [
      { title: 'Wir kennen Immobilienvermarktung aus der Praxis.', desc: SHARED_REFERENCE },
      {
        title: 'Wir messen bis zum Mandat.',
        desc: 'Klicks und Reichweite zeigen wir auch, entscheidend sind für uns Bewertungsgespräche und unterschriebene Mandate.',
      },
      {
        title: 'Sie bleiben unabhängig.',
        desc: 'Konten, Daten und Kontakte laufen auf Ihren Namen. Wenn wir aufhören, bleibt alles bei Ihnen.',
      },
      { title: 'Wir sind selbst aus Graubünden.', desc: SHARED_OWNER },
    ],
    faq: [
      {
        q: 'Unsere Mandate kommen über Empfehlungen. Warum sollten wir etwas ändern?',
        a: 'Empfehlungen bleiben der wichtigste Weg, das ändern wir nicht. Eine eigene Mandatsgewinnung kommt dazu, damit Ihr Geschäft nicht allein davon abhängt, wer wann an Sie denkt.',
      },
      {
        q: 'Wir kaufen bereits Kontakte von Vermittlungsplattformen. Was ist der Unterschied?',
        a: 'Bei eigenen Anfragen meldet sich der Eigentümer direkt bei Ihnen, über Ihre Website und unter Ihrem Namen. Sie bauen damit einen eigenen Kontaktstamm auf. Was beide Wege kosten, können Sie mit der Messung direkt vergleichen.',
      },
      {
        q: 'Funktioniert das in einer kleinen Region mit wenigen Verkäufen?',
        a: 'Gerade dort zählt jedes Mandat. Im Mandats-Check schätzen wir mit Ihnen ein, ob Ihre Region genug Spielraum bietet. Wenn nicht, sagen wir es Ihnen.',
      },
      {
        q: 'Wie schnell kommt das erste Mandat?',
        a: 'Eigentümer entscheiden oft über Monate. Erste Anfragen kommen meist in den ersten Wochen, Mandate daraus brauchen länger. Rechnen Sie eher mit Monaten als mit Wochen, bevor Sie Bilanz ziehen.',
      },
      {
        q: 'Was müssen wir selbst beitragen?',
        a: 'Ihr Wissen über die Region, einige Referenzobjekte (soweit Sie sie zeigen dürfen) und eine schnelle Reaktion auf Anfragen. Texte, Seiten, Kampagnen und Messung übernehmen wir.',
      },
      {
        q: 'Wir sind Lizenznehmer einer grossen Marke. Geht das auch?',
        a: 'Das hängt davon ab, was Ihre Marke an eigenem Marketing erlaubt. Klären Sie das bitte vor dem Gespräch mit Ihrer Zentrale.',
      },
      {
        q: 'Lässt sich unsere Maklersoftware anbinden?',
        a: 'In vielen Fällen ja, über vorhandene Schnittstellen oder einen Export. Wir prüfen im Erstgespräch, was mit Ihrer Software möglich ist.',
      },
      {
        q: 'Garantieren Sie eine Anzahl Mandate?',
        a: 'Nein. Ob ein Eigentümer Ihnen sein Objekt anvertraut, entscheidet am Ende das Gespräch mit Ihnen. Wir sorgen dafür, dass mehr dieser Gespräche zustande kommen und Sie sehen, woher sie kommen.',
      },
    ],
    final: {
      title: 'Wie viele Mandate könnten in Ihrer Region mehr drinliegen?',
      intro:
        'Im Mandats-Check schauen wir uns Ihre Region, Ihre heutigen Mandatsquellen und Ihren Auftritt an. Danach wissen Sie, ob sich eine eigene Mandatsgewinnung für Sie lohnt. Das Gespräch dauert rund 30 Minuten.',
      points: [
        'Wir schauen uns Ihre Region und Ihre heutigen Mandatsquellen an.',
        'Sie erfahren, wo zusätzliche Eigentümeranfragen möglich sind und was es dafür braucht.',
        'Danach entscheiden Sie in Ruhe. Kein Verkaufsdruck, keine Verpflichtung.',
      ],
    },
    visual: 'alpine-chalet',
    finalVisual: 'precision-key',
    related: {
      href: '/loesungen/erstvermietung-ostschweiz',
      title: 'Sie vermieten Neubauten in der Ostschweiz?',
      desc: 'Für Entwickler und Verwaltungen mit Erstvermietungen gibt es eine eigene Seite: weniger Leerstand dank eigener Projektvermarktung.',
      linkText: 'Mehr zur Erstvermietung',
    },
  },
};
