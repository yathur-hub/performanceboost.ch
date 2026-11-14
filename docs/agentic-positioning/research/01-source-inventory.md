# 01 Quelleninventar und Lesestatus

Stand 14.11.2026. Quellverzeichnis (ausserhalb des Repos, unverändert): `~/Documents/performanceboost/Intern/Ressourcen/Bücher/Agentic Marketing`.

## Vorgehen
- **Umfang:** 38 PDF-Dokumente (plus `.DS_Store`), rund 300'000 Wörter.
- **Lesbarkeit:** Alle Dateien haben eine Textebene. Kein Dokument war unlesbar, es brauchte kein OCR.
- **Extraktion:** Der Text wurde mit `pdftotext` seitengenau extrahiert (nur im temporären Arbeitsverzeichnis, nicht im Repo). Seitenangaben in dieser Wissensbasis sind **PDF-Seiten** der jeweiligen Datei, nicht gedruckte Buchseiten.
- **Analyse:** Vier Analysten haben die Quellen in Batches gelesen (A bis D). Die ausführlichen Notizen pro Quelle mit Kernaussagen, Begriffen, Modellen, Anwendungsfällen, Risiken und Zahlen stehen in `notes/`. Sie sind paraphrasiert, ohne längere wörtliche Übernahmen.
- **Nicht erfasst:** Grafiken (Exhibits, Abbildungen) sind im Textextrakt nicht enthalten. Wo sie für die Aussage wichtig wären, steht das in den Notizen.

Legende Dokumenttyp: **W** wissenschaftlich (Zeitschrift, Konferenz) · **K** Kapitel eines wissenschaftlichen Sammelbands · **F** Fachbuch / Praxisbuch · **B** Beratungs- oder Anbieterpublikation · **V** Verbandspublikation · **S** sonstiges.
Relevanz: M = Marketing, S = Sales, P = Processes (h hoch, m mittel, t tief).

## A: Agentic-AI-Publikationen (Notizen `notes/A-agentic-reports.md`)
| Datei | Titel | Autor / Herausgeber | Jahr | Typ | Seiten | Schwerpunkt | M/S/P | Lesestatus |
|---|---|---|---|---|---|---|---|---|
| Agentic AI for Autonomous Marketing_ Taxonomy Benchmark and an.pdf | Agentic AI for Autonomous Marketing: Taxonomy, Benchmark, and an Open-Source Agent | Thapa, Khadka, Sharma, Rai u. a. (IoTML 2026, ACM) | 2026 | W | 8 | Augmentation/Automation/Autonomisierung, Wahrnehmen-Abwägen-Handeln, Tool-Design, Evaluation | h/m/m | vollständig, S. 1–8 |
| 17_autonoumous+marketing+systems.pdf | A Multi-Agent Autonomous Marketing System Powered by Agentic AI | Mehta, Chanda, Garg, Arya | 2026 | W (schwaches Journal) | 23 | Multi-Agenten-Konzept, Simulation | m/t/t | vollständig, S. 1–23 |
| the-power-of-agentic-ai-for-consumer-markets.pdf | Unlocking Tomorrow: Agentic AI for Consumer Markets | PwC (mit Microsoft) | 2026 | B | 45 | Value Loops, agentenfähige Architektur, Autonomie nach Fehlerfolge und Umkehrbarkeit | m/m/h | vollständig, S. 1–45 |
| making-the-agentic-marketing-transformation-a-reality.pdf | Moving the Agentic Marketing Transformation from Illusion to Reality (CMO Survey 2026) | BCG | 2026 | B | 14 | Reifegrad, Transformations-Illusion, Markenkontext, AEO/GEO | h/m/m | vollständig, S. 1–14 (Exhibits nicht im Text) |
| rail_webinar_2_-_ai_agents_-_dec_12_2024.pdf | AI Agents in Marketing: Navigating Hype, Risk, and Opportunity | Alec Foster, MMA Global | 2024 | V (Folien) | 55 | Realitätscheck, Autonomieskala, Governance, gestufte Einführung | h/m/h | vollständig, S. 1–55 (S. 43 ohne Text) |
| cma-ai-playbook_agentic-ai.pdf | AI Playbook 7: Marketing in the Age of Agentic AI | Canadian Marketing Association | 2025 | V | 10 | Orientierung, Treiber | m/t/t | vollständig, S. 1–10 |
| The Agentic AI Playbook for Marketers.pdf | The Agentic AI Playbook for Marketers | Omnibound (Softwareanbieter) | 2025 | B | 31 | Operating Model, Use Cases, «AI Theater» | m/t/t | vollständig, S. 1–31 |
| Smart_Agents_Smarter_Brands_Agentic_AI_Redefining_Marketing_in_an_Unstable_World.pdf | Smart Agents, Smarter Brands | Misra, Pandey, Patel, Surve (AIB Review) | 2026 | S (Essay) | 7 | Risiko-Eskalation, internationale Kampagnen | m/t/t | vollständig, S. 1–7 (Abbildungen nicht im Text) |

## B und C: Sammelband «Artificial Intelligence Transforming Marketing» (Notizen `notes/B-…`, `notes/C-…`)
Herausgeber José Duarte Santos, Paulo Botelho Pires, Joaquim Pratas; Reihe Contributions to Management Science; Springer Nature Switzerland, 2026; ISBN 978-3-032-22360-9. Alle Kapitel 2026. Kein Kapitel mit eigener Primärempirie.

| Datei (Ordner «Artificial Intelligence Transforming Marketing») | Autor(en) | Typ / Evidenz | Seiten | M/S/P | Lesestatus |
|---|---|---|---|---|---|
| Contributions to Management Science.pdf (Titelei) | Herausgeber | Titelei | 8 | – | vollständig |
| Bias and Hallucinations in AI Marketing | Pereira, Bacalhau, Neves | K, konzeptionell, gut belegt | 28 | h/m/h | Text S. 1–24 vollständig, Literatur überflogen |
| Integrating AI into Content Marketing (SLR) | S. Santos, Espírito Santo | K, PRISMA-Review (34 Studien) | 31 | h/t/m | S. 1–29 vollständig |
| AI Applied to Business-to-Business Marketing | Pires, J. D. Santos | K, gezieltes Review | 23 | h/h/m | S. 1–17 vollständig |
| Behavioural Customers Analysis with AI | Torres, Filipe | K, narratives Review | 26 | h/m/m | S. 1–21 vollständig |
| An Analysis of Advertising Campaigns Powered by AI | Leandro, Duarte | K, konzeptionell | 22 | h/t/m | S. 1–20 vollständig |
| Artificial Intelligence for Data Analysis | Ribeiro, González-Padilla, Hernández-Tamurejo | K, Review (methodisch inkonsistent) | 29 | m/t/m | S. 1–24 vollständig |
| Strategic Decision-Making Using AI | Saura, Debasa, Borovac Zekan | K, SLR mit kaum Synthese | 20 | t/t/m | S. 1–16 vollständig |
| The Impact of AI on Marketing Research | Ribeiro, Sousa, Arantes | K, konzeptionell, schwach | 21 | m/t/t | S. 1–16 vollständig |
| The Intersection of Relationship Marketing and AI | J. D. Santos, Pires | K, narratives Review | 21 | h/m/m | S. 1–18 vollständig |
| Empowering the Sales Force | Pratas, Pinto Lima, Mendonça Silva | K, narrativ, viele Anbieterzahlen | 25 | m/h/m | S. 1–19 vollständig, Literatur gezielt geprüft |
| The AI in Customer Service Revolution | Esparteiro Garcia | K, narrativ | 24 | m/t/h | S. 1–23 vollständig |
| The Impact of Chatbots Assistance in Customer Experience | Ribau, Torres | K, Review, vor-LLM | 23 | m/t/m | S. 1–18 vollständig |
| How AI Shapes Consumer Behaviour in Social Commerce | Soares, Ramos de Luna, Ammetller | K, SLR (n = 9) | 26 | m/t/t | S. 1–21 vollständig |
| Emotional and Social Listening with AI | Oliveira, Milhazes-Cunha, Martínez-Rolán, Ferreira | K, narrativ mit Risikorahmen | 26 | h/m/m | S. 1–21 vollständig |
| Crisis Communication with AI | Pinto | K, Fallanalyse Sekundärquellen | 25 | m/t/m | S. 1–23 vollständig |
| The Use of AI to Advance Green Marketing | Morais, Leandro | K, konzeptionell | 24 | t/t/t | teilweise: S. 1–3, 8–22 |
| AI Applied to Neuromarketing | Figueiredo, Lopes | K, explorativ | 23 | t/t/t | teilweise: S. 1–9, 11–12, 14–17, 20–21 |
| AI in Marketing Education | Estima, Pinhal | K, narrativ | 23 | t/t/t | teilweise: S. 1–3, 6–7, 9–11, 13–18 |
| Designing Brick-and-Mortar Retail Spaces with AI | Rodrigues, Pratas, Gonçalves | K, Übersicht | 27 | t/t/t | teilweise: S. 1–3, 8–10, 17–18, 20–22 |
| The Rise of Virtual Influencers | Carvalho | K, Übersicht | 20 | t/t/t | teilweise: S. 1–2, 4–8, 13–16 |

## D: Buch «KI-gestützte Prozessautomatisierung» (Notizen `notes/D-prozessautomatisierung.md`)
Julian Funke, Springer Vieweg (Springer Fachmedien Wiesbaden), 2026, Reihe «KI – Best Practice in Industrie, Dienstleistung und Verwaltung» (Hrsg. Stephen Fedtke). ISBN 978-3-658-51745-8. Typ F (Praxisbuch für Einsteiger, ohne Literaturangaben).

| Datei (Ordner «KI-gestützte Prozessautomatisierung») | Inhalt | Seiten | Lesestatus |
|---|---|---|---|
| KI – Best Practice in Industrie, Dienstleistung und Verwaltung.pdf | Titelei, Inhaltsverzeichnis | 13 | vollständig |
| Typische Herausforderungen in Unternehmensprozessen.pdf | Kap. 1 | 19 | vollständig |
| Grundlagen der Prozessautomatisierung.pdf | Kap. 2 | 16 | vollständig |
| KI als Gamechanger der Prozessautomatisierung.pdf | Kap. 3 | 15 | vollständig |
| Der Weg zur erfolgreichen KI-gestützten Automatisierung.pdf | Kap. 4 | 10 | vollständig |
| Umsetzung – Von der Strategie zur Praxis.pdf | Kap. 5 (14-Tage-Pilot, Governance, ROI) | 48 | vollständig |
| 6 Werkzeuge und Technologien für die Praxis.pdf | Kap. 6 | 34 | vollständig |
| 7 Die Zukunft der Prozessautomatisierung.pdf | Kap. 7 | 15 | vollständig |
| Fazit und nächste Schritte für dein Unternehmen.pdf | Fazit | 2 | vollständig |

## Quellenkritik in Kürze
- **Unabhängige Forschung mit eigener Evidenz:** nur Thapa et al. (kleiner, ehrlich begrenzter Proof of Concept). Mehta et al. arbeiten mit synthetischen Simulationsdaten, die Zahlen sind unbrauchbar.
- **Beratung und Anbieter (PwC, BCG, Omnibound):** brauchbare Denkmodelle, aber eigene Umfragen ohne offengelegte Methodik und erkennbare Verkaufsinteressen. PwC bildet die Architektur auf Microsoft-Produkte ab. Die BCG-Nutzungsbedingungen verbieten kommerzielle Weiterverwendung, deshalb nur kurz paraphrasieren und nennen.
- **Sammelband:** aktuell (2026), aber ohne eigene Primärempirie. Mehrere Kapitel denken KI noch als klassisches maschinelles Lernen. Stärkste Kapitel sind Bias & Hallucinations und Content Marketing.
- **Praxisbuch Funke:** gute Methodik für Piloten und ehrliche ROI-Logik, aber fachlich vor den LLM-Agenten. KI-Agenten, Werkzeugaufrufe, RAG und Prompt Injection fehlen, ebenso das Schweizer DSG.
- **Gesamtbild:** Die Literatur stützt Haltung, Vorgehen und Begriffe. Sie stützt **keine** Wirkungsversprechen. Keine Zahl daraus wird auf der Website als erwartbares Ergebnis verwendet (Details in `09-research-limitations.md`).
