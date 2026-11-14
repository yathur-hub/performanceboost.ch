# 04 Agentic Processes: fachliche Erkenntnisse

Stand 14.11.2026. Details in `notes/D` (Funke), `notes/A` (PwC, Thapa, MMA), `notes/B` (Bias & Hallucinations).

## Kernaussagen
1. **Zuerst der gelebte Ablauf, dann Automatisierung.** Automatisiert man einen schlechten Prozess, wird nur das Chaos schneller («same mess, faster», Funke Kap. 1). Massgeblich ist der Ablauf, wie er tatsächlich gearbeitet wird, nicht das Handbuch (Funke Kap. 1 S. 8).
2. **Redesign statt KI obendrauf.** Die Lücke zwischen Pilot und Wirkung ist eine Redesign-Lücke, keine Technologielücke (PwC S. 21).
3. **Regel als Rahmen, KI im Zweig.** Bevorzugt hybrid: Ein deterministischer Ablauf gibt den Rahmen, KI entscheidet in klar abgegrenzten Schritten (Funke Kap. 3 S. 8). Viele Aufgaben lösen Workflows besser und günstiger als Agenten (MMA S. 14).
4. **Agenten erst, wenn Wahrnehmen, Abwägen und Handeln über mehrere Schritte nötig sind** (Thapa S. 3). Engpass ist dabei die Informationsbeschaffung, nicht das «Denken» (Thapa S. 6–7).
5. **Werkzeuge schmal und typisiert halten.** Wenige Parameter, gekappte Ausgaben, verständliche Fehlermeldungen zur Selbstkorrektur, Schrittbudget, Schleifen-Erkennung (Thapa S. 4).
6. **Ausnahmen sind der eigentliche Prozess.** Fehlerpfade gehören in den Entwurf: Wiederholen, Quarantäne, Klärfall mit Frist und Eskalation (Funke Kap. 1 S. 7, Kap. 2 S. 8–9). Ausnahme-Warteschlange und Rückgängig-Machen als Muster für Agentenaktionen (Bias & Hallucinations S. 10).
7. **Übergaben kosten die meiste Zeit** (Funke Kap. 1, Heuristik ohne Beleg).
8. **API vor Oberflächen-Bot.** RPA bricht bei Änderungen der Oberfläche, Schnittstellen sind robuster (Funke Kap. 1 S. 7–8).
9. **Ergebnis muss dort landen, wo gearbeitet wird,** etwa im CRM und nicht in einem separaten Dashboard (Funke Kap. 4 S. 5–7).
10. **Produktionsreife bedeutet:** Leitplanken, Monitoring, Eskalation, definierte Übergaben zwischen Mensch und Agent, messbare Kennzahlen, Telemetrie (Laufzeit, Entscheidungsgenauigkeit, Ausnahmequote, Kosten pro Aktion) (PwC S. 38). Dazu Authentifizierung, Wiederholungen und Observability (Thapa S. 6).
11. **KI schreibt im Pilot nicht ins Produktivsystem** (Funke Kap. 5 S. 47). Kritische Entscheide (Kredit, Personal, Medizin, Recht) nie vollautomatisch (Funke Kap. 5 S. 45–46).
12. **Ehrliche Wirtschaftlichkeit:** eingesparte Stunden von echten Kosteneinsparungen trennen, Nutzen in der Anfangszeit abschlagen, nur gemessenen Nutzen zählen (Funke Kap. 5, «Realized ROI»).

## Konzepte
| Konzept | Definition / Einordnung | KMU-Relevanz |
|---|---|---|
| Agentic Process Automation | Prozessautomatisierung mit agentischen Schritten in festem Rahmen | hoch, unser Kern |
| Intelligent Process Automation (IPA) | Regelautomatisierung plus ML/NLP/Dokumentverarbeitung (Funke) | hoch, heute meist mit Sprachmodellen |
| KI-native Prozessarchitektur | Ablauf von Anfang an für Regel, KI und Freigabe entworfen | unser Planungsprinzip |
| Prozess-Orchestrierung | deterministische Steuerung über Systeme (n8n, Windmill) | hoch |
| Ereignisgesteuerte Systeme | Abläufe starten durch Ereignisse (neue Anfrage, neue Rechnung) statt durch Zeitpläne | hoch, Webhooks |
| Zusammenarbeit mehrerer Agenten | spezialisierte Agenten mit gemeinsamem Zustand | selten nötig |
| Werkzeugnutzende Agenten | Agent ruft CRM, Web, E-Mail-Entwurf usw. auf | hoch, mit engen Rechten |
| Zustandsverwaltung | Wo steht ein Fall, was ist erledigt, was offen | hoch, oft im CRM/ERP oder in der Plattform |
| Ausnahmebehandlung | Fehlerpfade, Klärfälle, Eskalation | Pflicht |
| Menschliche Aufsicht | Freigabe, Stichproben, Not-Aus | Pflicht |
| Evaluation und Monitoring | Testset, Shadow-Modus, Kennzahlen pro Agent | Pflicht |
| Sicherheit und Governance | Rechte, DSG, Protokolle, Prompt Injection, Datenabfluss | Pflicht. Prompt Injection und Datenabfluss an Modellanbieter behandelt keine Quelle, das ergänzen wir selbst |
| Process Mining | Ablaufanalyse aus Ereignisprotokollen | bei KMU meist überbewertet, Logs fehlen (Funke-Kritik) |

## Wann klassische Automatisierung, wann agentisch
- **Regel:** Ablauf stabil, Daten strukturiert, Logik als Wenn-dann fassbar, wenige Ausnahmen.
- **KI im Workflow:** unstrukturierte Eingaben (E-Mails, PDFs, Freitext), Einordnung nach mehreren Kriterien, Entwürfe.
- **Agentischer Schritt:** Informationen müssen aus mehreren Quellen zusammengetragen werden, die Reihenfolge hängt vom Fall ab, ein Ergebnis wird geprüft und verbessert.
- **Mensch:** heikle, seltene oder folgenreiche Fälle.
Ein Agent muss sich an den Kosten pro korrekt erledigtem Fall gegenüber dem heutigen Aufwand messen lassen.

## Ergänzungen, die keine Quelle liefert (eigene Fachposition)
- Risiken von Sprachmodellen im Betrieb: Prompt Injection über eingehende Texte (E-Mails, Formulare, Webseiten), Datenabfluss an Modellanbieter, Datenstandort, Modellwechsel durch Anbieter.
- Schweizer DSG statt nur DSGVO. EU AI Act nur, wo EU-Bezug besteht.
- Offene Automatisierungsplattformen statt All-in-One-Suiten für KMU (Gegenposition zu Funke Kap. 7 S. 11, mit dessen eigenem Lock-in-Argument Kap. 6 S. 16, 32).
