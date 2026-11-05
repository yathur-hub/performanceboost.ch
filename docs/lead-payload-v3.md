# Kontaktformular → n8n: Payload-Vertrag v3

Endpoint: `POST https://n8n.performanceboost.ch/webhook/performanceboost/contact-v3`
Header: `Content-Type: text/plain` (bewusst, vermeidet CORS-Preflight). Body = JSON-String.

## Request
| Feld | Typ | Pflicht | Hinweis |
|---|---|---|---|
| formId | string | ja | z.B. `contact` |
| formName | string | ja | z.B. `Kontaktformular` |
| formLocation | string | ja | Ort im UI, z.B. `kontakt_seite`, `modal` (ersetzt `source`) |
| source | string | nein | Alias von formLocation, nur Rückwärtskompatibilität |
| pageType | string | ja | `home`, `leistung`, `loesung`, `kontakt`, … |
| salutation | `Herr`\|`Frau`\|`` | nein | |
| firstName, lastName | string | ja | |
| company | string | ja | Firmenname |
| email | string | ja | |
| phone | string | nein | |
| annualRevenue | `under_1m`\|`1m_5m`\|`5m_20m`\|`over_20m` | ja | |
| message | string | ja | |
| website | string | – | immer `performanceboost.ch` (Herkunfts-Site, NICHT Firmen-Website) |
| pageUrl | string | ja | URL beim Absenden (ohne Formularinhalte) |
| conversionPath | string | ja | Pfad beim Absenden |
| submittedAt | ISO string | ja | |
| formStartedAt | ISO string\|null | nein | erste Interaktion, für Time-to-Submit-Spamprüfung |
| hp_url | string | – | Honeypot, muss leer sein |
| utm_source … utm_id, gclid, gbraid, wbraid, fbclid, msclkid | string | nein | flach = Last-Touch der Sitzung |
| attribution.firstTouch / attribution.lastTouch | object\|null | nein | je `{utm_source, utm_medium, utm_campaign, utm_content, utm_term, utm_id, gclid, gbraid, wbraid, fbclid, msclkid, landingPage, referrer, timestamp}` |

## Response
- `200 {"success":true,"leadId":"…"}` erst NACHDEM der Lead gespeichert ist.
- `400 {"success":false,"error":"validation","fields":[…]}` bei ungültigen Daten.
- `500 {"success":false,"error":"storage"}` wenn Speichern fehlschlägt.
- Honeypot gefüllt / zu schnell (< 3 s): `200 {"success":true}` ohne Speicherung.

Das Frontend löst `generate_lead` nur bei `response.ok && body.success === true` aus.

## Formularstrecke `qualifier` (ab 06.11.2026)

Alle Kontakt-CTAs öffnen ein Overlay mit einer qualifizierenden Strecke (`src/components/LeadFunnel.tsx`, Fragen in `src/data/leadFlows.ts`). Die Kontaktseite bettet die allgemeine Strecke ein.

| Feld | Wert |
|---|---|
| formId | `qualifier` |
| formName | `Formularstrecke <Titel>` |
| formLocation | `overlay_<pfad>` (z. B. `overlay_leistungen_marketing-automation`) bzw. `kontakt_seite` |
| salutation | `Herr` oder `Frau` (Pflicht) |
| annualRevenue | `''` (Feld entfällt; **n8n: `qualifier` muss in `REVENUE_OPTIONAL` stehen**) |
| message | lesbare Zusammenfassung: Strecke, alle Fragen mit Antworten, Einwilligung Datenschutz (ja), Einwilligung Marketing (ja/nein) |
| qualification | `{ flow, answers: [{ id, question, answer: string[] }] }` |
| consent | `{ privacy: true, marketing: boolean, privacyText, marketingText, at }` |

Pflicht: Anrede, Unternehmen, Vorname, Nachname, E-Mail, Datenschutz-Einwilligung. Optional: Telefon, Marketing-Einwilligung.
Tracking: `form_start`, `form_step_complete` (`form_step` = Fragen-ID), `form_submit`, `generate_lead` (nur nach `{success:true}`), `form_error`; `form_id=qualifier`, `segment` = Strecken-ID.
