/**
 * Problem-Finder (Startseite): führt Besucher über drei Fragen zur passenden Leistungsseite.
 * Texte und Zuordnungen hier pflegen; die Komponente liegt in components/home/ProblemFinder.tsx.
 */

export type BusinessModel = 'b2b' | 'shop';
export type MarketingSetup = 'intern' | 'agentur' | 'kaum';

export interface ProblemOption {
  id: string;
  label: string;
  /** Slug der empfohlenen Leistungsseite (/leistungen/<slug>). */
  serviceSlug: string;
  /** Warum diese Leistung passt, in einem Satz. */
  reason: string;
}

export const MODEL_OPTIONS: { id: BusinessModel; label: string; hint: string }[] = [
  { id: 'b2b', label: 'Dienstleistung oder B2B', hint: 'Sie gewinnen Kunden über Anfragen, Offerten oder Gespräche.' },
  { id: 'shop', label: 'Onlineshop', hint: 'Sie verkaufen Produkte direkt über Ihren Shop.' },
];

export const PROBLEM_OPTIONS: Record<BusinessModel, ProblemOption[]> = {
  b2b: [
    {
      id: 'zu_wenig_anfragen',
      label: 'Es kommen zu wenige Anfragen',
      serviceSlug: 'lead-generation',
      reason: 'Mit Inhalten, Suchmaschinenoptimierung und gezielter Direktansprache bauen wir einen stetigen Strom an passenden Anfragen auf.',
    },
    {
      id: 'werbung_bringt_wenig',
      label: 'Werbung kostet, bringt aber zu wenig',
      serviceSlug: 'demand-generation',
      reason: 'Wir richten Ihre Kampagnen auf Google, Meta und LinkedIn auf Anfragen aus statt auf Klicks und verbessern sie laufend.',
    },
    {
      id: 'anfragen_werden_keine_kunden',
      label: 'Anfragen kommen, werden aber selten zu Kunden',
      serviceSlug: 'sales-enablement',
      reason: 'Mit besserer Vorqualifizierung, klaren Gesprächsleitfäden und überzeugenden Unterlagen werden aus Anfragen öfter Aufträge.',
    },
    {
      id: 'zielgruppe_unklar',
      label: 'Unklar, wen wir wie ansprechen sollen',
      serviceSlug: 'growth-strategy',
      reason: 'Wir schärfen Zielkunden, Botschaft und Budgetverteilung, bevor Geld in Werbung fliesst.',
    },
    {
      id: 'wirkung_unklar',
      label: 'Unklar, was welches Marketing bringt',
      serviceSlug: 'data-analytics',
      reason: 'Mit sauberem Tracking und einer verständlichen Auswertung sehen Sie, welcher Kanal welche Anfragen und Aufträge bringt.',
    },
    {
      id: 'zu_viel_handarbeit',
      label: 'Zu viel Handarbeit in Marketing und Vertrieb',
      serviceSlug: 'ai-automation',
      reason: 'Wir automatisieren wiederkehrende Aufgaben von der Anfrage bis zum Nachfassen, damit Ihr Team mehr Zeit für Kunden hat.',
    },
  ],
  shop: [
    {
      id: 'zu_wenig_neukunden',
      label: 'Zu wenige Neukunden',
      serviceSlug: 'dtc-growth-acquisition',
      reason: 'Wir bauen eine Kundengewinnung über mehrere Kanäle auf, bei der Sie wissen, was ein Neukunde kostet und was er einbringt.',
    },
    {
      id: 'besucher_kaufen_selten',
      label: 'Besucher kaufen zu selten',
      serviceSlug: 'ecommerce-performance',
      reason: 'Wir finden heraus, wo Besucher im Shop abspringen, und verbessern Produktseiten und Checkout gezielt.',
    },
    {
      id: 'social_ads_lohnen_nicht',
      label: 'Meta- oder TikTok-Werbung lohnt sich kaum',
      serviceSlug: 'paid-social-ecommerce',
      reason: 'Wir richten Ihre Social-Kampagnen auf Marge statt auf gemeldeten ROAS aus und testen Anzeigen systematisch.',
    },
    {
      id: 'kunden_kaufen_einmal',
      label: 'Kunden kaufen nur einmal',
      serviceSlug: 'customer-retention',
      reason: 'Mit gezielter Kommunikation nach dem ersten Kauf machen wir aus Einmalkäufern Stammkunden.',
    },
    {
      id: 'wirkung_unklar',
      label: 'Unklar, was welcher Kanal bringt',
      serviceSlug: 'data-analytics',
      reason: 'Mit sauberem Tracking und einer verständlichen Auswertung sehen Sie, welcher Kanal welche Verkäufe bringt.',
    },
  ],
};

export const SETUP_OPTIONS: { id: MarketingSetup; label: string; addition: string }[] = [
  { id: 'intern', label: 'Intern, meist nebenbei', addition: 'Die Umsetzung übernehmen wir, damit Ihr Team entlastet wird.' },
  { id: 'agentur', label: 'Mit einer Agentur', addition: 'Wir schauen zuerst, was die bisherige Betreuung bringt, und bauen darauf auf.' },
  { id: 'kaum', label: 'Bisher kaum', addition: 'Wir starten mit den Grundlagen und bauen Schritt für Schritt auf.' },
];

export interface FinderAnswers {
  model?: BusinessModel;
  problemId?: string;
  setup?: MarketingSetup;
}

export interface FinderResult {
  serviceSlug: string;
  problemLabel: string;
  reason: string;
}

export function recommend(answers: FinderAnswers): FinderResult | null {
  if (!answers.model || !answers.problemId || !answers.setup) return null;
  const problem = PROBLEM_OPTIONS[answers.model].find((p) => p.id === answers.problemId);
  const setup = SETUP_OPTIONS.find((s) => s.id === answers.setup);
  if (!problem || !setup) return null;
  return {
    serviceSlug: problem.serviceSlug,
    problemLabel: problem.label,
    reason: `${problem.reason} ${setup.addition}`,
  };
}

/** Merkt sich das Ergebnis für die Leistungsseite (nur Sitzung, keine Personendaten). */
export const FINDER_STORAGE_KEY = 'pb_problem_finder';

export function rememberResult(result: FinderResult) {
  try {
    window.sessionStorage.setItem(FINDER_STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Speicher blockiert: Die Leistungsseite zeigt dann einfach keinen Hinweis.
  }
}

export function readRememberedResult(): FinderResult | null {
  try {
    const raw = window.sessionStorage.getItem(FINDER_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FinderResult) : null;
  } catch {
    return null;
  }
}
