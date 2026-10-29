/**
 * Kampagnen-Attribution für Formular-Leads.
 *
 * Datenschutz: Gespeichert wird nur im sessionStorage (endet mit dem Tab, kein
 * persistenter Identifier, keine Personendaten). Erfasst werden ausschliesslich
 * Kampagnenparameter, Click-IDs, Einstiegsseite und Referrer.
 * - firstTouch: erster Seitenaufruf der Sitzung, wird nie überschrieben.
 * - lastTouch: letzter Aufruf MIT Kampagnenparametern oder externem Referrer.
 */

export const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
] as const;

export type CampaignKey = (typeof CAMPAIGN_KEYS)[number];

export type Touch = Partial<Record<CampaignKey, string>> & {
  landingPage: string;
  referrer: string;
  timestamp: string;
};

export interface Attribution {
  firstTouch: Touch | null;
  lastTouch: Touch | null;
}

const FIRST_KEY = 'pb_attr_first';
const LAST_KEY = 'pb_attr_last';
const MAX_LEN = 200;

function readStore(key: string): Touch | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as Touch) : null;
  } catch {
    return null;
  }
}

function writeStore(key: string, touch: Touch) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(touch));
  } catch {
    // Storage blockiert (Private Mode o.ä.): Attribution bleibt leer, Formular funktioniert trotzdem.
  }
}

/** Entfernt Query und Hash ausser den Kampagnenparametern, damit keine Fremddaten mitreisen. */
function cleanUrl(href: string): string {
  try {
    const url = new URL(href);
    const kept = new URLSearchParams();
    for (const key of CAMPAIGN_KEYS) {
      const value = url.searchParams.get(key);
      if (value) kept.set(key, value);
    }
    const qs = kept.toString();
    return `${url.origin}${url.pathname}${qs ? `?${qs}` : ''}`;
  } catch {
    return '';
  }
}

function externalReferrer(referrer: string, host: string): string {
  if (!referrer) return '';
  try {
    const ref = new URL(referrer);
    if (ref.hostname === host) return '';
    // Nur Origin, kein Pfad: Pfade fremder Seiten können personenbezogene Daten enthalten.
    return ref.origin;
  } catch {
    return '';
  }
}

export function buildTouch(href: string, referrer: string, now: Date = new Date()): Touch {
  const url = new URL(href);
  const touch: Touch = {
    landingPage: cleanUrl(href),
    referrer: externalReferrer(referrer, url.hostname),
    timestamp: now.toISOString(),
  };
  for (const key of CAMPAIGN_KEYS) {
    const value = url.searchParams.get(key);
    if (value) touch[key] = value.slice(0, MAX_LEN);
  }
  return touch;
}

export function hasCampaignSignal(touch: Touch): boolean {
  return CAMPAIGN_KEYS.some((k) => !!touch[k]) || !!touch.referrer;
}

/** Beim App-Start einmal aufrufen. */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  const touch = buildTouch(window.location.href, document.referrer);
  if (!readStore(FIRST_KEY)) writeStore(FIRST_KEY, touch);
  if (hasCampaignSignal(touch) || !readStore(LAST_KEY)) writeStore(LAST_KEY, touch);
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return { firstTouch: null, lastTouch: null };
  return { firstTouch: readStore(FIRST_KEY), lastTouch: readStore(LAST_KEY) };
}

/** Flache Last-Touch-Felder (Fallback First-Touch) für einfache Zuordnung in n8n/CRM. */
export function flatCampaignFields(attr: Attribution): Record<CampaignKey, string> {
  const source = attr.lastTouch && hasCampaignSignal(attr.lastTouch) ? attr.lastTouch : attr.firstTouch;
  const out = {} as Record<CampaignKey, string>;
  for (const key of CAMPAIGN_KEYS) out[key] = source?.[key] ?? '';
  return out;
}
