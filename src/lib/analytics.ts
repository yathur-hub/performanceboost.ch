type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

/**
 * GA4 interpretiert diese Parameternamen als Kampagnen-Attribution und überschreibt damit
 * die Sitzungsquelle. Sie werden deshalb automatisch mit Präfix `ui_` gesendet.
 */
const RESERVED_PARAMS = new Set(['source', 'medium', 'campaign', 'term', 'content', 'campaign_id'])

/**
 * Pushes a custom event to the GTM dataLayer. No-ops during SSR. Never pass PII (emails, names, phone numbers) as params.
 * Nach dem Push werden die Parameter im dataLayer-Modell zurückgesetzt, damit sie nicht in Folge-Events weiterleben.
 */
export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  const safe: EventParams = {}
  for (const [key, value] of Object.entries(params)) {
    safe[RESERVED_PARAMS.has(key) ? `ui_${key}` : key] = value
  }
  window.dataLayer.push({ event, ...safe })
  const reset: Record<string, undefined> = {}
  for (const key of Object.keys(safe)) reset[key] = undefined
  if (Object.keys(reset).length) window.dataLayer.push(reset)
}
