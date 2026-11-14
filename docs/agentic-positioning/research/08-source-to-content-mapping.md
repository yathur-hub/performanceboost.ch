# 08 Zuordnung der Erkenntnisse zu den Website-Seiten

Stand 14.11.2026. Welche Erkenntnis wo auf der Website steht und worauf sie beruht. Kurzformen der Quellen wie in `01-source-inventory.md`, Seiten sind PDF-Seiten.

| Seite / Datei | Erkenntnis | Umsetzung | Quellen |
|---|---|---|---|
| **Startseite** (`HomeView.tsx`) | KI als Grundlage des Systems, nicht als Zusatz | Hero-Unterzeile «ein System, das auf KI aufbaut» | Leitprinzip Inhaber; PwC S. 21 (Redesign statt KI obendrauf) |
| Startseite | Punktueller KI-Einsatz bringt wenig, Wirkung entsteht in durchgehenden Abläufen | Engpass-Text «einzelne Aufgaben … durchgehend verbunden» (ohne Zahlen) | BCG S. 3–5; PwC S. 11, 21 |
| Startseite, Stufen | Spielraum nach Fehlerfolge und Umkehrbarkeit | Intro der Stufen, Stufe 3 «nur Umkehrbares in festen Limits» | PwC S. 38 |
| Startseite, FAQ | Unternehmenskontext entscheidet über Qualität, Fakten nur mit Quelle | neue FAQ «Woher weiss ein Agent …» | BCG S. 11; Bias & Hallucinations S. 13–15 |
| Stufenmodell (`AGENTIC_LEVELS`) | Abgrenzung Regel, KI-Verarbeitung, agentischer Ablauf | Stufe 2 «KI-unterstützte Verarbeitung», Stufe 3 «Agentische Abläufe» (Quellen, Werkzeuge, Ergebnis prüfen) | Thapa S. 3–4; Funke Kap. 3 S. 8 |
| Systemgrafik | Überwachung ist Regel, Ursachensuche ist agentisch | Texte Marketing und Ergebnis präzisiert | Thapa S. 3; MMA S. 14 |
| **Agentic Marketing** | Rückfluss aus dem CRM, Optimierung auf Aufträge, Kontext als Grundlage | Definition, Karte «Abweichungen klären», Inhalte nur aus freigegebenen Unterlagen, Test gegen Bestehendes | Thapa S. 6; BCG S. 11; Content S. 19; Behavioural S. 7 |
| Agentic Marketing, FAQ | Reine Überwachung braucht keinen Agenten, Ausführung nur in Limits nach Bewährung | FAQ «Was übernimmt ein Agent im Marketing» | MMA S. 14, 17, 22; PwC S. 38 |
| **Agentic Sales** | CRM als Datenbasis, Begründungen für Einordnung, fehlende nächste Schritte | Definition | Sales Force S. 9, 14; B2B S. 13–15 |
| Agentic Sales, Themen | Forecast-Realismus bei kleinem Volumen, Buying Center | Themen «Reporting und Forecast», «CRM-Strategie» | Sales Force S. 6; B2B S. 2 |
| **Agentic Processes** | Gelebter Ablauf zuerst, Fehlerpfade | Themen «Prozessarchitektur», «Workflow-Automatisierung» | Funke Kap. 1 S. 7–8, Kap. 2 S. 8–9 |
| **Governance** | Fehlerfolge × Umkehrbarkeit, Shadow-Modus, Testset, LLM-Risiken, Schatten-KI | Themen «Rechte und Freigaben», «Tests, Protokolle und Monitoring», neues Thema «Risiken von Sprachmodellen», neue FAQ «Wie viel darf ein Agent selbst entscheiden?», Ausgangslage Schatten-KI | PwC S. 38; Funke Kap. 4 S. 6, Kap. 5 S. 17–22; Bias & Hallucinations S. 11–15; Thapa S. 6; eigene Fachposition (Prompt Injection) |
| **Ansatz** (`approach.ts`) | Architektur pro Schritt, Kontext, Abbruchkriterien | Phase Architecture & Setup | Funke Kap. 5 S. 5–11; PwC S. 37–38 |
| Ansatz | Testset, Shadow-Modus, Go/No-Go | Phase Roll-out & Hypercare | Funke Kap. 5 S. 4–23; MMA S. 36 |
| Ansatz | Freigegebene Werkzeuge gegen Schatten-KI, Not-Aus-Zuständigkeit | Phase Enablement | Funke Kap. 4 S. 6; MMA S. 37; BCG S. 7–8 |
| Ansatz | Gestufter Spielraum, gemessener statt geschätzter Nutzen | Phase Iteration & Optimization | PwC S. 38; Funke Kap. 5 (Realized ROI) |
| **Leistungsseiten** (`servicesExtendedData.ts`, `services.ts`, `diagrams.ts`) | Begriffsschärfe Agent vs. Prüfung, Freigabeliste, Kontext, Testset, Kennzahlen pro Agent, Quellenbindung | siehe `10-research-umsetzung.md` | 02, 03, 04, 07, 09 |
| **Branchen- und Problemseiten** (`solutionsData.ts`, `challenges.ts`) | Beispiele mit Voraussetzungen, Fehlerpfade, Regel als Rahmen | siehe `10-research-umsetzung.md` | 04, 07, 09 |
| **Landingpages** | Freigaberegel präzise (Vorlagen vs. Einzelfreigabe), Begriffe | siehe `10-research-umsetzung.md` | 05, 09 |

## Bewusst nicht übernommen
- Alle Zahlen aus der Literatur (Liste in `09`, Abschnitt 5).
- Fremde Modelle als Grafik (BCG-Stack, PwC-Value-Loops, Omnibound-Operating-Model).
- Begriffe «Brand Intelligence Layer», «Agentic Control Tower», «Frontier Firm», «Agent Boss», «AEO».
- Multi-Agenten-Systeme als Verkaufsargument.
- Rechtsaussagen aus dem Sammelband zum EU AI Act.
