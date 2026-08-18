type EventParams = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

/** Pushes a custom event to the GTM dataLayer. No-ops during SSR. Never pass PII (emails, names, phone numbers) as params. */
export function trackEvent(event: string, params: EventParams = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}
