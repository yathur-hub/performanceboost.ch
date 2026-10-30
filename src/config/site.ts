/** Zentrale Firmen- und Kontaktangaben. Überall von hier lesen, nie hart codieren. */
export const SITE = {
  name: 'performanceboost',
  baseUrl: 'https://performanceboost.ch',
  owner: 'Yathur Nathan',
  email: 'hallo@performanceboost.ch',
  phoneDisplay: '+41 78 675 40 97',
  phoneHref: 'tel:+41786754097',
  street: 'Patschär 4',
  postalCode: '7306',
  locality: 'Fläsch',
  region: 'Graubünden',
  country: 'CH',
  linkedinPerson: 'https://www.linkedin.com/in/yathurnathan/',
  logoUrl:
    'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/perfromanceboost_logo_transparent-removebg-preview.png',
  portraitUrl:
    'https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg',
} as const;

/** n8n-Webhook für das Kontaktformular (Payload-Vertrag: docs/lead-payload-v3.md). */
export const CONTACT_WEBHOOK_URL: string =
  import.meta.env?.VITE_CONTACT_WEBHOOK_URL ||
  'https://n8n.performanceboost.ch/webhook/performanceboost/contact-v3';
