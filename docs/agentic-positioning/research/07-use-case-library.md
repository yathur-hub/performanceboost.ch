# 07 Bibliothek der Anwendungsfälle

Stand 14.11.2026. Jeder Fall hat einen **Status**, der bestimmt, wie er auf der Website formuliert werden darf:
- **R – realisiert:** im eigenen Betrieb nachweislich in Betrieb. Darf als eigene Praxis genannt werden.
- **L – Leistung:** technisch plausibel, gehört zum Angebot. Formulierung «Wir bauen …», «Wir richten … ein».
- **B – Beispiel:** möglicher Anwendungsfall. Formulierung «Ein Beispiel: …» oder «zum Beispiel».
- **P – zu prüfen:** Lieferfähigkeit noch nicht bestätigt. Auf der Website nur als Beispiel oder gar nicht, bis der Inhaber freigibt (siehe `09-research-limitations.md`, Freigabeliste).

Stufe: Regel / KI / Agent (agentischer Schritt) / Mensch.

## Eigener Betrieb (R)
| Fall | Stufe | Systeme | Freigabe |
|---|---|---|---|
| Website-Anfragen automatisch geprüft ins eigene ERP, Kontakt, Firma, Anfrage und Aufgabe angelegt, Bestätigung in unter einer Sekunde | Regel | Website, n8n, ERP (Cockpit) | Bestätigungstext einmal freigegeben |
| Recherche vor Erstgesprächen | Agent | Web, CRM/ERP | Was im Gespräch zählt, entscheidet der Inhaber |
| Antwort- und Inhaltsentwürfe, Versand erst nach Freigabe | KI / Agent | ERP, E-Mail, LinkedIn | jede Nachricht |
| Eigenes ERP selbst gebaut | – | eigene Entwicklung | – |
| Arbeit mit n8n, Windmill, APIs, Sprachmodellen | – | – | – |

## Marketing
| Fall | Stufe | Benötigt | Status |
|---|---|---|---|
| Werbekonten täglich prüfen (Kosten pro Anfrage, Suchbegriffe, Auslieferung), Abweichungen mit Vorschlag melden | Regel + KI | Google/Meta/LinkedIn-API, Zielwerte | L |
| Suchbegriffe ausschliessen innerhalb fester Limits ohne Einzelfreigabe | Agent in Grenzen | API-Schreibrecht, Sperrlisten, Protokoll | P |
| Anfragen und Aufträge aus dem CRM an Google, Meta, LinkedIn zurückspielen (Offline-Conversions, Conversions API) | Regel | CRM, Plattform-APIs, Einwilligung, Server-Side Tagging | P (je Plattform) |
| Margenwerte und Neukundensignal an Plattformen | Regel | Shop/ERP-Margen, Plattform-APIs | P |
| TikTok-Anbindung | Regel | TikTok Events API | P |
| Anzeigen- und Seitenvarianten aus Unternehmenskontext entwerfen, Test gegen Bestehendes | KI | Unternehmenskontext, Kundenfragen | L |
| Sichtbarkeit in KI-Assistenten mit festem Fragenset regelmässig prüfen | Regel + KI | Fragenset, Zugriff auf Assistenten | P |
| Neue Anfragen mit Firma, Branche, Quelle anreichern und einordnen | Agent | Formular, Web, CRM | L |
| Reaktivierung inaktiver Kunden: Segment aus Kaufdaten, Entwürfe | Regel + KI | Shop/CRM | L |
| Mehrsprachige Anpassung von Kampagnen (DE/FR/IT) | KI | Unternehmenskontext | B |

## Sales
| Fall | Stufe | Benötigt | Status |
|---|---|---|---|
| Vorqualifizierung neuer Anfragen nach Kriterien, Zuweisung mit Begründung | Regel + KI | CRM, Kriterien | L |
| Gesprächsvorbereitung aus CRM-Verlauf, Website, öffentlichen Informationen | Agent | CRM, Web | L (eigene Praxis: R) |
| Zusammenfassung von Gesprächsnotizen und nächste Schritte im CRM | KI | CRM, Notizen | L |
| Stehende Verkaufschancen und überfällige Schritte melden, Wochenzusammenfassung | Regel + KI | CRM | L |
| Nachfass-Entwürfe nach Ereignissen, Versand nach Freigabe | KI | CRM, E-Mail | L |
| Wissensbasis aus Playbooks, Referenzen, Angebotsbausteinen für Team und Agent | KI (RAG) | Dokumente | L |
| Abwanderungssignale vor Verlängerungsgesprächen | Regel + KI | CRM, Nutzungs- oder Auftragsdaten | B |
| Recherche-gestützte Erstansprache, Versand nach Freigabe | Agent | Web, CRM | B |

## Processes
| Fall | Stufe | Benötigt | Status |
|---|---|---|---|
| Daten nach festen Regeln zwischen Website, CRM, ERP, Buchhaltung übertragen, Fehler melden | Regel | APIs, n8n/Windmill | L |
| E-Mails, Formulare, PDFs lesen, klassifizieren, Felder extrahieren, Vorschlag mit Begründung | KI | Dokumente, Zielsystem | L |
| Unvollständige Fälle: fehlende Angaben aus angebundenen Systemen holen, Vorgehen vorschlagen | Agent | Lesezugriffe | L |
| Rechnungsvorsortierung: prüfen, freigeben, klären | KI + Mensch | Buchhaltung | B |
| Kennzahlen aus mehreren Quellen zusammenführen, Abweichungen erklären | Regel + KI | Datenquellen | L |
| Anfragen-Routing mit Grenzfallregeln (Beschwerde vor Information) | Regel + KI | E-Mail, CRM | B (Funke Kap. 5 S. 12) |
| Kundenanliegen: Einordnung, Antwortentwurf mit Kundenhistorie, Ursache zurückmelden | KI | CRM, Ticket/E-Mail | B |

## Branchen (aus der AI-First-Umsetzung, Commit 6ef30d4)
| Branche | Fall | Status |
|---|---|---|
| Treuhand | Belege lesen, Dokumentart erkennen, Datum, Betrag, Lieferant extrahieren, Team prüft | B, Extraktion technisch L |
| Handwerk | Anfrage zusammenfassen, Offertentwurf vorbereiten | B |
| Personalvermittlung | Matching-Vorschläge, Kriterien durch Kunde, ohne Alter und Herkunft | P (sensibel, DSG, Bias) |
| Ingenieurbüros | Öffentliche Ausschreibungen und Baugesuche sichten und zusammenfassen | P (Datenquellen klären) |
| IT-Dienstleister | Tickets und Einsätze auswerten, Kandidaten für Serviceverträge | P (Zugriff Ticketsystem) |
| Hotellerie | Antwortentwürfe mit Verfügbarkeit aus dem Hotelsystem (PMS) | P (PMS-Schnittstelle) |
| Gesundheit | Administrative Angaben aus Zuweisungsschreiben extrahieren | P (besonders schützenswerte Daten) |
| Logistik | Auftrags-E-Mails lesen und erfassen | B |
| Immobilien Erstvermietung | Anfragen auf Vollständigkeit und Passung prüfen, Besichtigungstermine anbieten | L mit Vorlagen, P für automatische Absagen |
| Makler | Eigentümeranfragen zusammenfassen, Vorbereitung mit Marktdaten | B |
| Finanzberatung | Anfragen nach Anlass sortieren, Recherche vor Erstgespräch, keine KI im Kundenkontakt | L |

## Nicht anbieten
- Emotionserkennung oder Stimmanalyse von Mitarbeitenden oder in Verkaufsgesprächen (EU AI Act Art. 5 Abs. 1 lit. f, juristisch prüfen).
- KI-Bewertung von Bewerbenden (Funke Kap. 7 S. 7; DSG, Bias).
- Vollautonome Kampagnen, Budgethoheit oder Aussenkommunikation ohne Freigabe.
- Personalisierte Preise auf Basis von Verhaltensdaten (Bias & Hallucinations S. 6, 9–10).
- Synthetische Testimonials, erfundene Personen, Deepfakes realer Personen.
