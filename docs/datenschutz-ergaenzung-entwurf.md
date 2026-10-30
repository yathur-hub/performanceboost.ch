# Entwurf: Ergänzungen Datenschutzerklärung (zur rechtlichen Prüfung)

> Nicht live geschaltet. Die heutige Datenschutzerklärung (`src/views/LegalView.tsx`) nennt nur das Kontaktformular. Folgende tatsächlich eingesetzte Bearbeitungen fehlen. Bitte durch eine Fachperson prüfen lassen (DSG, bei Besuchern aus der EU zusätzlich DSGVO).

## Fehlende Punkte (Ist-Zustand der Website)
| Bearbeitung | Anbieter | Heute erwähnt? |
|---|---|---|
| Hosting / CDN, Server-Logs | Cloudflare | nein |
| Google Tag Manager (GTM-PJ9FBZ4V) | Google | nein |
| Google Analytics 4 (G-G51WC7X2LM), lädt ohne Einwilligung | Google (USA) | nein |
| Kontaktformular → Verarbeitung in n8n (n8n.performanceboost.ch) | selbst betrieben | nur «Kontaktformular» |
| Speicherung Anfrage im CRM (Twenty, crm.performanceboost.ch) und Benachrichtigung per E-Mail | selbst betrieben | nein |
| Kampagnen-Attribution im sessionStorage (neu mit diesem PR) | lokal im Browser | nein |
| Bilder von raw.githubusercontent.com (IP-Übermittlung an GitHub) | GitHub (USA) | nein |

## Textvorschlag (Baustein «Herkunft Ihrer Anfrage»)
Wenn Sie unsere Website über eine Anzeige oder einen Link mit Kampagnenparametern aufrufen (z.B. `utm_source`, `gclid`), speichern wir diese Parameter, die Einstiegsseite und die Domain der verweisenden Website für die Dauer Ihrer Browsersitzung im sessionStorage Ihres Browsers. Senden Sie uns eine Anfrage, übermitteln wir diese Angaben zusammen mit Ihrer Anfrage, damit wir nachvollziehen können, über welchen Kanal Sie uns gefunden haben. Es werden dabei keine Cookies gesetzt und keine Profile über mehrere Besuche gebildet. Schliessen Sie den Browser-Tab, werden die Angaben gelöscht.

## Empfehlung Consent
GA4 lädt heute ohne Einwilligung. Für Schweizer Besucher ist ein Opt-out-Modell mit transparenter Information vertretbar, für Besucher aus der EU ist eine Einwilligung (Consent Mode v2 + CMP) der übliche Standard. Entscheid ausstehend.
