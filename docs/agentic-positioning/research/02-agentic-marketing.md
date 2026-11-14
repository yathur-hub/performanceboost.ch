# 02 Agentic Marketing: fachliche Erkenntnisse

Stand 14.11.2026. Quellenangaben verweisen auf `01-source-inventory.md` (PDF-Seiten). Details in `notes/A` und `notes/B`.

## Was sich laut Literatur tatsächlich verändert
1. **Vom Werkzeug zum Regelkreis.** Agentische Systeme schliessen die Schleife aus Planen, Ausführen, Messen und Anpassen (Mehta S. 9–10; Omnibound S. 11–13). Neu ist nicht die Textgenerierung, sondern dass ein System Ergebnisse beobachtet und den nächsten Schritt wählt (Thapa S. 3).
2. **Die Ausführung wandert zum Agenten, das Urteil bleibt.** Ziele, Planung, Verbesserung und Analyse liegen in der Praxis weiterhin beim Menschen (MMA S. 17). Nicht zuverlässig sind vollautonome Kampagnen, Strategie, nuancierte Markenstimme und Kreativdirektion (MMA S. 22).
3. **Daten und Integration sind der Engpass, nicht das Modell** (Thapa S. 6; MMA S. 14, 35; BCG S. 10; Data Analysis S. 8). Ein Agent, der nur Klicks sieht, optimiert auf Klicks. Deshalb gehört die Rückführung von Anfragen und Aufträgen aus dem CRM zur Architektur.
4. **Markenkontext macht Agenten unternehmensspezifisch.** Erst eine strukturierte Grundlage mit Markenregeln, Angeboten, KPI-Definitionen und freigegebenen Quellen macht aus einem allgemeinen Assistenten einen brauchbaren Agenten (BCG S. 11, «Brand Intelligence Layer»). Bei uns heisst das Unternehmenskontext.
5. **Transformations-Illusion.** Viele Marketingleitungen sehen sich als transformiert, nutzen KI aber nur als Assistenz für Einzelaufgaben (BCG S. 3, Selbstauskunft von 300 CMOs). Wert entsteht erst in verbundenen Abläufen (BCG S. 4–5; PwC S. 11, 21).
6. **Sichtbarkeit verschiebt sich in KI-vermittelte Entdeckung.** KI-Assistenten werden zu «algorithmischen Gatekeepern» (Behavioural S. 14, 21). Maschinenlesbare, strukturierte Unternehmens- und Angebotsdaten gewinnen an Bedeutung (PwC S. 7, 14, 34; BCG S. 5–6). Belastbare Evidenz zu GEO-Taktiken liefert keine Quelle.
7. **Generativ erzeugen, mit Daten und Menschen prüfen.** Varianten entstehen schnell, entschieden wird über Tests und Freigabe (Behavioural S. 7; Content S. 19; Advertising S. 5–6).
8. **KI-Inhalte ohne Markenkontext bringen wenig.** Technische Qualität und Klickraten erreichen menschliches Niveau. Ein Label «KI-generiert» senkt aber die wahrgenommene Authentizität, weniger stark, wenn KI als Unterstützung menschlicher Autoren auftritt (Content S. 12–13, 18; Bias & Hallucinations S. 12, 19).
9. **Plattform-Optimierung hat eigene Verzerrungen.** Neutrales Targeting garantiert keine neutrale Auslieferung (Bias & Hallucinations S. 4, 8, mit Verweis auf Lambrecht & Tucker 2019, Ali et al. 2019).

## Konzepte und ihre Übertragbarkeit auf Schweizer KMU
| Konzept | Was es meint | KMU-Realität |
|---|---|---|
| Agentisches Kampagnenmanagement | Agent überwacht Konten, schlägt vor, führt kleine Änderungen in Grenzen aus | realistisch mit Google/Meta/LinkedIn-APIs, Änderungen in Limits nur nach Bewährung |
| KI-gestützter Mediaeinkauf | Gebotsstrategien der Plattformen, ergänzt um Signale aus dem CRM | realistisch, Kern ist die Datenrückführung, nicht ein eigener Bieter-Agent |
| Semi-/autonome Optimierung | Budget- und Gebotsanpassung ohne Freigabe | nur innerhalb fester Limits und bei umkehrbaren Änderungen |
| Customer-Journey-Orchestrierung | Interessenten erhalten je nach Verhalten die nächste passende Information | realistisch mit Marketing Automation, Regeln steuern, KI entwirft |
| Prädiktives und adaptives Marketing | Prognosen zu Kaufbereitschaft, Abwanderung, Wert | bei kleinen Datenmengen begrenzt, RFM und einfache Scores reichen oft (Thapa S. 5) |
| Audience Intelligence | Zielgruppen aus eigenen Daten und Signalen verstehen | realistisch mit CRM, Website-Daten, Recherche |
| Customer Data Activation | Eigene Daten in Kanälen nutzen (Zielgruppen, Conversions) | realistisch, DSG und Einwilligung klären |
| Agentische Content-Operations | Recherche, Entwurf, Prüfung gegen Markenregeln, Freigabe, Publikation | realistisch, Freigabe vor Veröffentlichung Pflicht |
| Kontinuierliches Experimentieren | Feste Testkadenz für Anzeigen, Seiten, Botschaften | realistisch, aber kleine Volumina begrenzen statistische Aussagekraft (Mehta-Notiz) |
| Closed-Loop-Messung | Anfragen und Aufträge fliessen zurück in Planung und Plattformen | Kern der Architektur |
| Mehrsprachigkeit | Anpassung von Kampagnen und Inhalten für DE/FR/IT | Schweizer Spezifikum, menschliche Endkontrolle (in Anlehnung an AIB S. 2) |

## Was ein System übernimmt, was es braucht, wer entscheidet, wie geprüft wird
| Aufgabe | Stufe | Benötigte Daten / Systeme | Mensch entscheidet | Prüfung |
|---|---|---|---|---|
| Konten täglich überwachen, Abweichungen melden | Regel + KI-Erklärung | Werbekonten, Zielwerte | ob gehandelt wird | Fehlalarmquote |
| Suchbegriffe prüfen, Ausschlüsse vorschlagen | agentischer Schritt | Suchbegriffsberichte, Angebotsliste | Freigabe, später Limits | Stichproben |
| Anzeigen- und Seitenvarianten entwerfen | KI | Unternehmenskontext, Kundenfragen | Freigabe vor Publikation | Test gegen bestehende Variante |
| Neue Anfragen anreichern und einordnen | agentischer Schritt | Formular, Website, öffentliche Firmendaten, CRM | Korrektur der Einordnung | Trefferquote gegen Vertriebsurteil |
| Auftragssignale an Plattformen zurückgeben | Regel | CRM, Plattform-APIs, Einwilligung | welche Signale, welche Werte | Abgleich CRM vs. Plattform |
| Sichtbarkeit in KI-Assistenten prüfen | Regel + KI | festes Fragenset, Antworten der Assistenten | Massnahmen | Verlauf über Zeit, keine Garantie |

## Implikationen
- Agentic Marketing erklären als **verbundenes System mit Rückfluss aus dem CRM**, nicht als «Agenten, die Kampagnen fahren».
- Den Unternehmenskontext als eigenen Baustein benennen (Markenregeln, Angebote, Kriterien, Quellen).
- Freigabe vor Veröffentlichung und vor Budgetänderungen bleibt die Regel. Ausführung in Limits erst nach Bewährung.
- GEO ohne Garantie, als Ergänzung zu SEO.
- Keine Wirkungszahlen aus der Literatur.
