# Datenschutzerklärung: Abgleich mit dem Ist-Zustand (30.10.2026)

Umgesetzt im Branch `fix/datenschutz-ist-zustand`. Grundlage: tatsächlich geladene Drittanbieter auf performanceboost.ch (Browser-Mitschnitt) und die Lead-Verarbeitung (n8n → Cockpit).

| Bearbeitung | Vorher | Jetzt |
|---|---|---|
| Hosting/CDN Cloudflare | fehlte | Abschnitt 4 |
| Kontaktformular → n8n → Cockpit (erp) + E-Mail | stand als «HubSpot» (falsch, HubSpot wird nicht genutzt) | Abschnitt 5 |
| Kampagnenparameter im sessionStorage | fehlte | Abschnitt 6, Hinweis in «Cookies» |
| Leadinfo | vorhanden | unverändert (7) |
| Hotjar | stand drin, wird aber nicht geladen | entfernt |
| GA4, GTM, Google Marketing Platform | vorhanden | unverändert (8–10) |
| Google Fonts, Bilder von raw.githubusercontent.com | fehlte | Abschnitt 11 |
| Übermittlung in die USA | fehlte | Satz in «Datenweitergabe» |

Weiterhin offen (Entscheid/rechtliche Prüfung): GA4 und Leadinfo laden ohne Einwilligung. Für Besucher aus der EU ist eine Einwilligung (Consent Mode v2 + CMP) üblich.
