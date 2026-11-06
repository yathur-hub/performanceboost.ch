/**
 * Qualifizierende Formularstrecken pro Unterseite (Overlay «Potenzial besprechen»).
 * Ablauf: 2–3 themenspezifische Auswahlfragen → Unternehmensgrösse → Zeitpunkt → Kontaktangaben.
 * Die Strecke wird über den aktuellen Pfad bestimmt (resolveFlow). Antworten gehen lesbar in `message`
 * und strukturiert in `qualification` an n8n (formId `qualifier`, ohne Jahresumsatz).
 */

export interface FlowQuestion {
  id: string;
  label: string;
  hint?: string;
  options: string[];
  /** Mehrfachauswahl erlaubt (mit «Weiter»-Button statt Auto-Weiter). */
  multi?: boolean;
}

export interface LeadFlow {
  id: string;
  /** Kurztitel im Overlay. */
  title: string;
  questions: FlowQuestion[];
}

const SIZE: FlowQuestion = {
  id: 'size',
  label: 'Wie viele Mitarbeitende hat Ihr Unternehmen?',
  options: ['1–9', '10–49', '50–249', '250 oder mehr'],
};

const TIMING: FlowQuestion = {
  id: 'timing',
  label: 'Wann möchten Sie starten?',
  options: ['So bald wie möglich', 'In den nächsten 3 Monaten', 'In 3–6 Monaten', 'Ich informiere mich erst'],
};

const flow = (id: string, title: string, questions: FlowQuestion[]): LeadFlow => ({
  id,
  title,
  questions: [...questions, SIZE, TIMING],
});

export const LEAD_FLOWS: Record<string, LeadFlow> = {
  general: flow('general', 'Potenzial besprechen', [
    {
      id: 'focus',
      label: 'Wo möchten Sie Ihr Unternehmen voranbringen?',
      hint: 'Mehrfachauswahl möglich',
      multi: true,
      options: ['Mehr passende Kunden gewinnen', 'Vertrieb und CRM verbessern', 'Abläufe automatisieren', 'KI sinnvoll einsetzen', 'Daten und Reporting', 'Strategie und Prioritäten'],
    },
    {
      id: 'situation',
      label: 'Was beschreibt Ihre Situation am besten?',
      options: ['Wir wachsen, aber nicht planbar', 'Viel Handarbeit, zu wenig Zeit', 'Tools sind da, arbeiten aber nicht zusammen', 'Wir wollen etwas Neues angehen'],
    },
  ]),
  strategy: flow('strategy', 'Strategie besprechen', [
    {
      id: 'goal',
      label: 'Was soll die Strategie vor allem klären?',
      options: ['Wachstum und Kundengewinnung', 'Digitalisierung und Systeme', 'Positionierung und Angebot', 'Prioritäten und Budget'],
    },
    {
      id: 'status',
      label: 'Wie arbeiten Sie heute?',
      options: ['Ohne schriftliche Strategie', 'Strategie vorhanden, aber nicht umgesetzt', 'Strategie veraltet', 'Gut aufgestellt, wir wollen schärfen'],
    },
  ]),
  marketing: flow('marketing', 'Wachstumspotenzial prüfen', [
    {
      id: 'goal',
      label: 'Was ist Ihr wichtigstes Ziel?',
      options: ['Mehr passende Anfragen', 'Tiefere Kosten pro Anfrage', 'Neue Zielgruppe oder Region', 'Bessere Sichtbarkeit bei Google'],
    },
    {
      id: 'channels',
      label: 'Welche Kanäle nutzen Sie heute?',
      hint: 'Mehrfachauswahl möglich',
      multi: true,
      options: ['Google Ads', 'Meta (Facebook, Instagram)', 'LinkedIn', 'SEO und Inhalte', 'Vor allem Empfehlungen', 'Noch keine'],
    },
    {
      id: 'budget',
      label: 'Welches monatliche Werbebudget ist vorgesehen?',
      hint: 'Mediabudget für Google, Meta oder LinkedIn, nicht unser Honorar',
      options: ["Unter CHF 1'000", "CHF 1'000–3'000", "CHF 3'000–10'000", "Über CHF 10'000", 'Noch offen'],
    },
  ]),
  ecommerce: flow('ecommerce', 'Shop-Potenzial prüfen', [
    {
      id: 'goal',
      label: 'Wo möchten Sie ansetzen?',
      options: ['Mehr Käufe aus bestehendem Traffic', 'Neue Kunden profitabel gewinnen', 'Mehr Wiederkäufe', 'Werbung nach Gewinn statt Umsatz steuern'],
    },
    {
      id: 'platform',
      label: 'Auf welcher Plattform läuft Ihr Shop?',
      options: ['Shopify', 'WooCommerce', 'Shopware', 'Andere oder eigene Lösung'],
    },
    {
      id: 'budget',
      label: 'Welches monatliche Werbebudget setzen Sie ein?',
      options: ["Unter CHF 2'000", "CHF 2'000–10'000", "Über CHF 10'000", 'Noch keines'],
    },
  ]),
  automation: flow('automation', 'Prozesse besprechen', [
    {
      id: 'area',
      label: 'Welche Abläufe kosten heute am meisten Zeit?',
      hint: 'Mehrfachauswahl möglich',
      multi: true,
      options: ['Anfragen und Nachfassen', 'Daten zwischen Systemen übertragen', 'Offerten und Rechnungen', 'Berichte und Auswertungen', 'Interne Abstimmung und Freigaben'],
    },
    {
      id: 'crm',
      label: 'Nutzen Sie bereits ein CRM?',
      options: ['Ja, HubSpot', 'Ja, ein anderes CRM', 'Excel oder Listen', 'Nein'],
    },
  ]),
  ai: flow('ai', 'KI-Einsatz besprechen', [
    {
      id: 'status',
      label: 'Wie setzen Sie KI heute ein?',
      options: ['Gar nicht', 'Einzelne nutzen ChatGPT o. Ä.', 'Erste Abläufe mit KI', 'Bereits fest im Alltag'],
    },
    {
      id: 'area',
      label: 'Wo soll KI Ihrem Team helfen?',
      hint: 'Mehrfachauswahl möglich',
      multi: true,
      options: ['Marketing und Texte', 'Vertrieb und Recherche', 'Kundenanfragen und Service', 'Interne Abläufe und Dokumente', 'Auswertungen'],
    },
  ]),
  data: flow('data', 'Daten & Reporting besprechen', [
    {
      id: 'problem',
      label: 'Was trifft am ehesten zu?',
      options: ['Wir wissen nicht, welcher Kanal Kunden bringt', 'Zahlen widersprechen sich', 'Berichte kosten zu viel Zeit', 'Tracking ist unvollständig oder veraltet'],
    },
    {
      id: 'tools',
      label: 'Was ist heute im Einsatz?',
      hint: 'Mehrfachauswahl möglich',
      multi: true,
      options: ['Google Analytics 4', 'Google Tag Manager', 'CRM mit Auswertungen', 'Excel-Berichte', 'Weiss ich nicht'],
    },
  ]),
  sales: flow('sales', 'Vertrieb besprechen', [
    {
      id: 'problem',
      label: 'Wo hakt es im Vertrieb am meisten?',
      options: ['Anfragen bleiben liegen', 'Nachfassen ist unregelmässig', 'Keine Übersicht über die Pipeline', 'Marketing und Vertrieb arbeiten nebeneinander'],
    },
    {
      id: 'crm',
      label: 'Nutzen Sie bereits ein CRM?',
      options: ['Ja, HubSpot', 'Ja, ein anderes CRM', 'Excel oder Listen', 'Nein'],
    },
    {
      id: 'team',
      label: 'Wie viele Personen arbeiten im Vertrieb?',
      options: ['Nur ich', '2–5', '6–15', 'Mehr als 15'],
    },
  ]),
  branch: flow('branch', 'Potenzial besprechen', [
    {
      id: 'goal',
      label: 'Was möchten Sie vor allem erreichen?',
      options: ['Mehr passende Anfragen', 'Weniger Abhängigkeit von Empfehlungen', 'Anfragen schneller bearbeiten', 'Neue Region oder Zielgruppe'],
    },
    {
      id: 'source',
      label: 'Woher kommen Ihre Kunden heute vor allem?',
      options: ['Empfehlungen', 'Google', 'Social Media', 'Plattformen oder Portale', 'Weiss ich nicht genau'],
    },
  ]),
};

const SERVICE_FLOW: Record<string, string> = {
  'growth-strategy': 'strategy',
  'demand-generation': 'marketing',
  'lead-generation': 'marketing',
  'marketing-automation': 'automation',
  'sales-enablement': 'sales',
  'revenue-operations': 'sales',
  'ai-automation': 'ai',
  'data-analytics': 'data',
  'ecommerce-performance': 'ecommerce',
  'dtc-growth-acquisition': 'ecommerce',
  'customer-retention': 'ecommerce',
  'paid-social-ecommerce': 'ecommerce',
};

const AREA_FLOW: Record<string, string> = {
  strategie: 'strategy',
  'technologie-automation': 'automation',
  'wachstum-marketing': 'marketing',
  'sales-revenue-operations': 'sales',
};

const CHALLENGE_FLOW: Record<string, string> = {
  prozessautomatisierung: 'automation',
  'vertrieb-optimieren': 'sales',
};

/** Bestimmt die Strecke anhand des Pfads; Fallback ist die allgemeine Strecke. */
export function resolveFlow(pathname: string): LeadFlow {
  const path = pathname.replace(/\/+$/, '') || '/';
  const [, section, slug] = path.split('/');
  let id = 'general';
  if (section === 'leistungen' && slug) id = SERVICE_FLOW[slug] ?? AREA_FLOW[slug] ?? 'general';
  else if (section === 'loesungen' && slug) id = CHALLENGE_FLOW[slug] ?? 'branch';
  return LEAD_FLOWS[id];
}
