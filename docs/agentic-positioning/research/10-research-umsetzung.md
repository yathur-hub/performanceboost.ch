# 10 Review-Bericht: quellenbasierte Vertiefung

Stand 14.11.2026, Branch `feat/agentic-positioning` (PR #21), aufbauend auf Commit `6ef30d4`. Nicht veröffentlicht.

## 1. Analysierte Quellen
- 38 PDF-Dokumente, rund 300'000 Wörter, alle mit Textebene lesbar.
- 33 Dokumente vollständig gelesen, 5 Kapitel tiefer Relevanz teilweise (Seiten in `01`).
- Literaturverzeichnisse überflogen, Grafiken nicht im Textextrakt.
- Gruppen:
  - 8 Agentic-AI-Publikationen (2 wissenschaftlich, 3 Beratung und Anbieter, 2 Verbände, 1 Essay)
  - 21 Kapitel des Springer-Sammelbands «Artificial Intelligence Transforming Marketing» (2026)
  - 9 Kapitel von Funke, «KI-gestützte Prozessautomatisierung» (Springer Vieweg 2026)

## 2. Wichtigste fachliche Erkenntnisse
1. **Agent und Automatisierung klar trennen.** Ein Agent nimmt wahr, wägt ab, handelt mit Werkzeugen und prüft das Ergebnis (Thapa et al. 2026). Ein Ablauf, der nur prüft und meldet, ist eine Regel.
2. **Spielraum nach Fehlerfolge und Umkehrbarkeit festlegen** und erst mit belegter Zuverlässigkeit erweitern (PwC 2026). Die Testphase, in der der Agent nur vorschlägt und ein Mensch entscheidet (Shadow-Modus), ist dafür das zentrale Mittel (Funke 2026).
3. **Engpass sind Daten, Integration und Kontext, nicht das Modell** (Thapa, MMA, BCG, Sales-Force-Kapitel). Agenten werden erst durch gepflegten Unternehmenskontext unternehmensspezifisch (BCG 2026).
4. **Wert entsteht in durchgehenden Abläufen, nicht in Einzelanwendungen** (PwC, BCG). Viele Unternehmen sehen sich als transformiert, nutzen KI aber nur punktuell.
5. **In der Praxis liegt meist nur die Ausführung beim Agenten.** Ziel, Planung und Auswertung bleiben beim Menschen (MMA 2024). Viele Fälle löst ein einfacher Workflow besser.
6. **Halluzination ist strukturell.** Faktenaussagen brauchen Quellenbindung. Fehlen Belege, wird nicht freigegeben (Bias & Hallucinations).
7. **Belastbare Wirkungszahlen fehlen.** Fast alle Zahlen stammen aus Anbieterumfragen, Simulationen oder Sekundärzitaten. Die Website verwendet keine davon.

## 3. Terminologische Anpassungen
- **Glossar:** neues verbindliches Glossar mit Konflikten und Entscheiden (`05`). Die Grundhaltung «KI als Enabler des ganzen Systems» steht im Leitfaden (`08-ai-first-leitfaden.md`, Version 2).
- **«Agent» korrigiert:** rund 55 Stellen auf den Leistungs-, Branchen- und Kernseiten, wo eine Regel oder Überwachung als Agent bezeichnet war. Die neue Formulierung lautet zum Beispiel «Feste Prüfungen laufen täglich. Bei Abweichungen sucht ein agentischer Ablauf die Ursache …».
- **Stufenmodell:** «KI-unterstützte Verarbeitung» und «Agentische Abläufe» (Quellen, Werkzeuge, Ergebnis prüfen, nur Umkehrbares in festen Limits).
- **Freigaberegel präzisiert:** Wiederkehrende Standardtexte werden einmal als Vorlage freigegeben, alles andere vor dem Versand.
- **Nicht übernommen:** «Augmentation», «AEO», «Brand Intelligence Layer», «Agentic Control Tower», Multi-Agenten als Verkaufsargument.

## 4. Überarbeitete Seiten
| Bereich | Dateien | Wesentliche Verbesserung |
|---|---|---|
| Startseite | `HomeView.tsx`, `RevenueSystemGraphic.tsx` | Hero «System, das auf KI aufbaut», durchgehende Abläufe statt punktueller KI, Spielraum nach Fehlerfolge, neue FAQ zum Unternehmenskontext |
| Bereiche | `serviceAreas.ts` | Marketing mit Rückfluss aus dem CRM und Kontext, Karte «Abweichungen klären». Sales mit Begründungen, fehlenden nächsten Schritten, Forecast-Realismus, Buying Center. Processes mit gelebtem Ablauf und Fehlerpfaden |
| Governance | `serviceAreas.ts` | Fehlerfolge × Umkehrbarkeit, Testset und Shadow-Modus, neues Thema «Risiken von Sprachmodellen» (Halluzination, Prompt Injection, Datenabfluss), neue FAQ «Wie viel darf ein Agent selbst entscheiden?», Schatten-KI |
| Stufenmodell | `AGENTIC_LEVELS` | präzisere Stufen 2 und 3, eigene Zugänge auf jeder Stufe |
| Ansatz | `approach.ts` | Kontext und Abbruchkriterien, Test mit bekannten Ergebnissen, Vorschlagsphase, Go/No-Go, freigegebene Werkzeuge, Not-Aus-Zuständigkeit, gemessener statt geschätzter Nutzen |
| 14 Leistungsseiten | `servicesExtendedData.ts`, `services.ts`, `diagrams.ts`, Karten in `ServicesView.tsx` | Begriffsschärfe (rund 30 Korrekturen), Freigabeliste mit Voraussetzungen, Kontext, Quellenbindung, Testset, Kennzahlen pro Agent, Prompt Injection, Regelkreis. Pauschales «DSG-konform» entfernt, Redundanzen gestrichen |
| Branchen und Probleme | `solutionsData.ts`, `challenges.ts`, `SolutionsView.tsx` | Prozessautomatisierung mit gelebtem Ablauf, Regel als Rahmen, Bedingungen für agentische Schritte, Fehlerpfaden, Schnittstellen statt Oberflächen-Bots. Vertrieb mit CRM als Datenschicht. 14 Branchen mit Voraussetzungen und einem Systemdetail pro Seite (rund 13 Begriffskorrekturen) |
| Landingpages | `financeLanding.ts`, `realEstateLanding.ts` | nur Freigaberegel und Begriffe. H1, Formulare, FIDLEG und Ich-Passagen unverändert |
| Meta | `serviceAreas.ts` | Governance-Description mit Tests und Protokollen |

## 5. Qualitätsprüfung
- **Strategisch:** Jede Seite beschreibt die Leistung als Teil desselben Systems. KI erscheint als Grundlage, nicht als Zusatz. Die Abgrenzung zu Agenturen («mit KI») und Chatbot-Anbietern ergibt sich aus Architektur, Stufen und Governance.
- **Fachlich:** Die Begriffe folgen dem Glossar. Offene Lieferfähigkeit ist nach der Freigabeliste formuliert (`09`, Abschnitt 6). Keine Zahlen aus der Literatur.
- **Redaktionell:**
  - Musterscan über alle neuen Zeilen: kein «ß», keine verbotenen Zahlen, kein «autonom» als Versprechen, kein «DSG-konform», keine Telefonnummer, kein Arbeitgeber.
  - «Agent überwacht/meldet» kommt nicht mehr vor. Doppelpunkt-Einstiege gibt es nur nach «Ein Beispiel».
- **Technisch:**
  - Typecheck, 36/36 Tests und Build (73 Seiten) laufen durch.
  - Layout-Audit über 26 Seiten × 9 Breiten: kein Überlauf, keine Konsolenfehler, Touch-Ziele, Eingabefelder und Textgrössen unverändert.
  - Seitenlängen +0 bis +6 % (am meisten Prozessautomatisierung, Governance, KI-Agenten). Animationen, Navigation, Routing und URLs sind nicht berührt.

## 6. Offene fachliche Fragen und Entscheide für den Inhaber
1. **Freigabeliste** (`09`, Abschnitt 6): Rückfluss an Google, Meta, LinkedIn und TikTok, Margen- und Neukundensignal, Ausschluss von Suchbegriffen in Limits, GEO-Fragenset, Branchenbeispiele.
2. **Automatische Absagen auf der Landingpage Erstvermietung:** Sie laufen mit einmal freigegebenen Vorlagen. Passt das zur Freigaberegel?
3. **Finanzdienstleister, Schritt 3:** Die Recherche vor dem Erstgespräch steht als Leistung und nicht mehr als Beispiel, gestützt auf die eigene Praxis.
4. **Bildung:** Die FAQ schliesst einen frei antwortenden Chatbot aus. Ist das so gewollt?
5. **Personalvermittlung:** Das strukturierte Erfassen von Lebensläufen steht als Leistung, mit Festlegung der Datenverarbeitung vorab.
6. **Lead-Generierung:** Direkte Ansprache steht als Beispiel. Soll sie Standardleistung sein?
7. **Emotionserkennung im Verkauf** ist ausgeschlossen (EU AI Act Art. 5, juristisch nicht geprüft).
8. **Primärquelle für Agentic Sales nachziehen:** Gonzalez, Habel & Hunter (2026).
