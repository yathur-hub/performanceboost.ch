# Research Notes A: Agentic-AI-Reports und Praxisleitfäden (Marketing/Sales)

Stand: 13.11.2026. Interne Notizen für die performanceboost-Wissensbasis. Seitenangaben = PDF-Seiten gemäss Extrakt-Markern. Alle Inhalte paraphrasiert; kurze Begriffsdefinitionen in Anführungszeichen.

---

## Quelle 1: Multi-Agent Autonomous Marketing System (MAAMS)

- **Datei:** 17_autonoumous_marketing_systems.pdf (Extrakt 17_autonoumous_marketing_systems.txt)
- **Titel:** A Multi-Agent Autonomous Marketing System Powered by Agentic AI: Redefining, Planning, Execution, Experimentation and Optimization Across Marketing Functions
- **Autor/Herausgeber:** Yash Mehta, Abhijit Chanda, Ashish Garg, Kunal Arya (Praktiker bei Tredence, Sam's Club, Progressive Leasing); Journal of Intelligent Decision Making and Information Science, Vol. 3(4s), S. 1609–1631
- **Jahr:** 2026 (eingereicht April, akzeptiert 20. Mai 2026)
- **Dokumenttyp:** wissenschaftlich (Zeitschriftenartikel, formal peer-reviewed; Journal mit geringer Reputation, Review-Qualität fraglich)
- **Umfang:** 23 PDF-Seiten
- **Interessenlage:** Autoren aus Analytics-Dienstleistung/Retail; Interessenkonflikt verneint (S. 22). Kein Produktverkauf, aber deutlicher Hype-Duktus.
- **Evidenzqualität:** Simulationsstudie mit synthetischen Daten, keine Felddaten. Methodisch schwach (Details unten). Faktisch eher Konzeptpapier mit Scheinpräzision.
- **Schwerpunkt:** Konzept eines Multi-Agenten-Systems (Planung, Ausführung, Experiment, Optimierung) als Reinforcement-Learning-Modell für den Marketing-Lebenszyklus.
- **Relevanz:** Marketing mittel (Strukturidee nützlich, Zahlen unbrauchbar) / Sales tief / Processes tief
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–23 (S. 22–23 Literaturverzeichnis überflogen)

### Kernaussagen
- Heutige Marketing-Infrastruktur sei fragmentiert und nur teilautomatisiert; regel- und ML-basierte Einzellösungen (Segmentierung, Empfehlungen, Targeting) benötigten laufend menschliche Entscheide (S. 1–2).
- Steigender Testbedarf (A/B, multivariat) überfordere Marketer kognitiv; das begründe den Schritt von Automatisierung zu autonom agierenden Systemen (S. 2).
- Agentic AI wird abgegrenzt von klassischer, generativer KI und autonomen Systemen durch Autonomie, Anpassungsfähigkeit und zielgerichtetes Schlussfolgern; Merkmale: eigenes Gedächtnis, Werkzeugnutzung via APIs, Interaktion in natürlicher Sprache (S. 2).
- Multi-Agenten-Systeme (MAS) seien für Marketing besser geeignet als Einzelagenten wegen Parallelisierung, dezentraler Entscheidung, Skalierbarkeit (S. 5, S. 8).
- Vorgeschlagen werden vier Spezialagenten: Planning, Execution, Experimentation, Optimization, gekoppelt über gemeinsamen Systemzustand und Feedbackschleife (S. 10–13).
- Das System soll explizit «ohne menschliches Eingreifen» lernen und optimieren (S. 3, S. 11) – Governance und menschliche Aufsicht werden nicht behandelt.
- Belohnungsfunktion als gewichtete Summe aus CTR, Conversion Rate und ROI (S. 13).
- In der Simulation übertreffe MAAMS Rule-Based, DNN, LSTM und Single-Agent-RL in allen Metriken (S. 15–21).
- Literaturteil: Agentic AI im Marketing sei «in den Kinderschuhen», meist Einzelaufgaben statt Lebenszyklus-Automatisierung (S. 5–6).

### Begriffe und Definitionen
- **Agentic AI:** Systeme mit autonomer Entscheidung, Zielgerichtetheit und Lernen in einer sich verändernden Umgebung (S. 6). Sechs Merkmale: Autonomie, Zielorientierung, Umweltinteraktion, Lernfähigkeit, Workflow-Optimierung, Multi-Agenten-Fähigkeit (S. 7). Vermischt LLM-Agenten (Sprache, Tools, Memory; S. 2) mit klassischem Reinforcement Learning (S. 6, S. 11) – unscharf.
- **Agent:** Einheit, die Umgebung wahrnimmt, entscheidet und handelt; im Marketing z. B. Kampagnenplanung, Segmentierung, Content, Analyse (S. 8).
- **MAS:** verteiltes KI-Framework aus mehreren unabhängigen Agenten, die miteinander und mit der Umgebung kommunizieren (S. 7).
- **Closed Loop / Feedback-Driven Intelligence:** Input → Aktion → Feedback → Lernen als Kreislauf (S. 9). Solides, etabliertes Regelkreis-Konzept.
- **Memory/RAG:** nur beiläufig (Vektordatenbanken als Langzeitgedächtnis in zitierter Arbeit, S. 5; Retrieval-Agent, S. 2).
- **Human-in-the-loop, Guardrails, Evaluation, Observability:** fehlen vollständig. «Autonomie» wird als Ziel an sich gesetzt.
- Begriff «Copilot» = Einzelabfrage-Inferenz vs. «Reason-Act»-Schleife des Agenten (S. 5, zitiert).

### Frameworks/Modelle
- **MAAMS** (S. 10–13): Multi-Agent-Markov-Entscheidungsprozess; globaler Zustand aus Nutzerverhalten, Kampagnenkonfiguration, Marktlage, Umweltfeedback; jeder Agent hat eine Policy; Optimierungsagent aktualisiert Policies per Gradientenschritt; Algorithmus wiederholt bis Konvergenz.
- **Marketing-Lebenszyklus** in vier Phasen Planen → Ausführen → Experimentieren → Optimieren als Kreislauf (S. 9–10). Für Website-Kommunikation brauchbare, einfache Struktur.
- Zitiert: Huang & Rust (2021) mechanische/denkende/fühlende KI entlang Research, STP, Action (S. 4) – etablierter wissenschaftlicher Rahmen.
- Zitiert: Fünf-Schichten-Modell Multi-Agent AI (Foundation Model, dynamische Orchestrierung, agentenintegrierter Workflow, datenzentrierte Wahrnehmung/Aktion, Interaktionsschnittstelle) nach Allmendinger et al. 2026 (S. 5) – lohnt Primärlektüre.

### Anwendungsfälle
- Budgetallokation, Kanalwahl, Targeting durch Planungsagent (S. 12) – KMU: nur als Empfehlung mit Freigabe realistisch.
- Content publizieren, E-Mails versenden, Ads starten durch Ausführungsagent (S. 12) – KMU-realistisch, wenn mit Freigabeschritt.
- A/B-Tests und Performance-Monitoring durch Experimentagent (S. 12) – KMU-realistisch, aber kleine Volumina limitieren statistische Aussagekraft.
- Vollautonome Policy-Optimierung via RL – für KMU (geringe Datenmengen, wenige Kampagnen) unrealistisch.

### Voraussetzungen, Risiken und Grenzen
- Benötigt: umfangreiche, integrierte Echtzeitdaten über Nutzer, Kampagnen, Markt (S. 11); laut Autoren fehlen öffentlich verfügbare End-to-End-Datensätze, daher Simulation (S. 14).
- Methodische Mängel (eigene Einschätzung): synthetische Daten aus eigener Simulation, d. h. Ergebnisse spiegeln Simulationsannahmen; widersprüchliche Datensplit-Angabe (70 % Training vs. 30 % aufgeteilt in 15/15, S. 14); Klassifikationsmetriken (Accuracy, F1, ROC) für ein RL-Steuerungsproblem unklar begründet; keine Angaben zur Simulationslogik; doppelte Referenz ([13]=[26]); Gartner-Zitat (75 % der Grossunternehmen nutzen MAS bis 2026) verweist auf ein Manufacturing-Paper (S. 3); Schreibfehler «in the last 10 minutes» (S. 3).
- Risiken wie Fehlentscheide, Markensicherheit, Datenschutz, Haftung werden nicht diskutiert.

### Zahlen/Studienergebnisse
- 60 % der Marketingfachleute pilotieren/skalieren KI; 74 % halten KI für kritisch oder extrem wichtig – zitiert aus «AI Marketing Institute's 2025 State of Marketing AI Report» (S. 3; Sekundärzitat, Anbieterumfrage).
- McKinsey: 1,1 Mrd. USD Equity-Investitionen in Agentic AI 2024; Stellenausschreibungen +985 % YoY (S. 3; Sekundärzitat).
- Gartner: 75 % grosser Unternehmen nutzen MAS bis 2026 (S. 3; Prognose, Quelle fehlerhaft zitiert).
- Simulationsergebnisse MAAMS vs. Baselines (synthetische 50'000 Datenpunkte, S. 14): Accuracy 95,4 % vs. 72,0 % (Rule-Based), 84,0 (DNN), 88,1 (LSTM), 90,3 (SARL); F1 0,94; CTR 11,5 % vs. 3,5 %; CR 6,7 % vs. 1,5 %; ROI 7,2 vs. 2,1 (S. 17–19, S. 21). **Nicht als Praxisbeleg verwendbar.**

---

## Quelle 2: Agentic AI for Autonomous Marketing – Taxonomy, Benchmark, Open-Source Agent

- **Datei:** Agentic AI for Autonomous Marketing_ Taxonomy Benchmark and an.pdf
- **Titel:** Agentic AI for Autonomous Marketing: Taxonomy, Benchmark, and an Open-Source Agent
- **Autor/Herausgeber:** Prashidda Thapa, Shraddha Khadka (Bhasha Tech, Inc.), Pragyan Sharma, Ana Rai, Ushana Bhattarai, Kapil Regmi, Pooja Bohara; Konferenzbeitrag IoTML 2026 (ACM), via East Texas A&M «Student Publications»
- **Jahr:** 2026 (Konferenz Mai 2026; Repositorium 9-2026)
- **Dokumenttyp:** wissenschaftlich (Konferenzpaper, 7 S. + Deckblatt)
- **Umfang:** 8 PDF-Seiten
- **Interessenlage:** gering; Open-Source-Code (MIT). Zwei Autoren aus einem Start-up, kein Produktverkauf erkennbar.
- **Evidenzqualität:** kleines, reproduzierbares Experiment auf öffentlichen Datensätzen (Proof-of-Concept), mit ausdrücklich benannten Validitätsgrenzen. Kein Feldtest, kein Business-Lift. Methodisch ehrlich – die beste Quelle dieses Batches zur Begriffsschärfe.
- **Schwerpunkt:** Taxonomie (Augmentation – Automation – Autonomization × Kampagne vs. laufender Betrieb), Perceive-Reason-Act-Zyklus, ReAct-Agent mit sechs Tools, Benchmark mit 15 Aufgaben.
- **Relevanz:** Marketing hoch / Sales mittel (Churn, Retention) / Processes mittel (Tool-Design, Guardrails)
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–8

### Kernaussagen
- Marketing-Automatisierung habe zweimal die Entscheidungshoheit verschoben: Regeln (1990–2005), ML-Modelle (2006–2019, Mensch orchestriert weiterhin), LLMs (Output nur auf Prompt); Agentic AI zerlege nun selbst ein Ziel in Teilaufgaben, wähle Tools, beobachte, revidiere (S. 3).
- Unterscheidungskriterium Agent vs. Automation ist der geschlossene Zyklus Wahrnehmen–Schlussfolgern–Handeln: Ein Churn-Modell nimmt wahr, handelt aber nicht; ein E-Mail-Trigger handelt, denkt aber nicht; ein Copywriter-LLM denkt in einem Prompt, sieht aber keine Ergebnisse (S. 3). Sehr brauchbare Abgrenzung.
- Auf der Autonomie-Stufe liefern Menschen Ziele und Leitplanken statt Anweisungen; Markensicherheit, Erklärbarkeit, Evaluation und Vertrauenskalibrierung werden dort zu Kernthemen (S. 3).
- Ein kleiner ReAct-Loop mit sechs schmalen, typisierten Tools reicht, um eine End-to-End-Pipeline (Daten → Segmentierung → Churn → Kampagne → Budget) auf öffentlichen Daten abzuarbeiten (S. 2–5).
- Designentscheide mit Praxiswert: wenige Parameter pro Tool, gekappte Tool-Outputs, bewusst kein «Alles-Tool», verständliche Validierungsfehler zur Selbstkorrektur, Schrittbudget und Loop-Detektor (S. 4).
- Engpass ist Informationsbeschaffung und Orchestrierung, nicht das «Denken»; Laufzeit wird von LLM-Aufrufen dominiert (ca. 29 s pro Schritt) – geeignet für Planungs-Workflows, nicht für Echtzeit-Bidding (S. 6–7).
- Bestehende Marketing-KI-Metriken (AUC, CR, ROAS) messen Ergebnisse, nicht Agentenkompetenz (Planung, Toolwahl, Fehlerbehebung) (S. 3).
- Benchmark-Erfolg heisst «Agent hat den Prüfrahmen erfüllt», nicht «Agent hat das Richtige getan» (S. 6).
- Produktivbetrieb erfordert CRM-/CDP-/Ad-API-Integration, Authentifizierung, Retries, Observability, Skalierung, Mandantenfähigkeit (S. 6).
- «Strategische Halluzination» (plausible Begründung, schädlicher Entscheid) braucht harte Constraints ausserhalb des LLM, Anomalieerkennung und menschliche «Circuit Breaker» ab Schwellenwerten (S. 6).
- Offene Punkte: Konsumenten bewerten KI-Content schlechter, wenn Herkunft offengelegt wird – Spannung zu Kennzeichnungspflichten; auf Engagement optimierende Agenten könnten vertrauensschädigende Taktiken finden; Über- oder Untervertrauen der Bediener (S. 7).

### Begriffe und Definitionen
- **Agentic AI:** LLM-basierte Agenten, die unter übergeordneten Zielen planen, handeln und sich anpassen (S. 2). Präzise, LLM-zentriert.
- **Augmentation / Automation / Autonomization:** KI empfiehlt, Mensch handelt (Co-Pilot) / KI führt vordefinierte Aufgaben nach Regeln oder gelernten Policies aus, Aufsicht nur noch bei Ausnahmen / KI erkennt, plant, handelt zielgerichtet, Mensch setzt Ziele und Guardrails (S. 3–4).
- **Perceive–Reason–Act (PRA):** Kontrollschleife, die Agenten von Automation trennt (S. 3).
- **ReAct:** Verschränkung von Gedanke, Aktion, Beobachtung; erzeugt nachvollziehbare Traces (S. 3).
- **Tool use:** typisierte Funktionsaufrufe mit Schema-Validierung (S. 4). Klar definiert.
- **Memory:** bewusst kein Langzeitgedächtnis; als Zukunftsthema (Markenstimme, frühere Kampagnen) genannt (S. 4, S. 7).
- **Multi-Agent:** explizit Zukunftsarbeit (Kreativ-, Media-, Compliance-Spezialisten; offene Fragen zu Konfliktauflösung und Audit) (S. 3, S. 7).
- **Guardrails:** auf Autonomie-Stufe vom Menschen gesetzt; im Prototyp nur leichtgewichtige Marken-/Policy-Checks, nicht produktionsreif (S. 4, S. 6).
- **Evaluation:** fünf Dimensionen (Task Completion, Business Impact, Compliance, Adaptability, Efficiency) (S. 4, S. 6).
- **Observability:** als Produktionsvoraussetzung genannt (S. 6).
- **Human-in-the-loop:** implizit über «Circuit Breaker» und Ausnahmebehandlung; Arbeitsteilung Mensch–Agent explizit offen (S. 7).

### Frameworks/Modelle
- **Taxonomie-Matrix** (S. 4): drei Integrationsstufen × zwei Einsatzbereiche (Einzelkampagne / laufender Betrieb). Beispiele: Augmentation-Kampagne = KI empfiehlt, Mensch setzt um; Automation-Betrieb = KI steuert innerhalb Regeln; Autonomization-Betrieb = KI betreibt Marketing selbständig. Die Autoren verorten nur ihren Prototyp in der letzten Zelle; übrige Zellen seien in der Praxis verbreitet.
- **Drei-Schichten-Architektur** (S. 3–5): Reasoning-Layer (ReAct-Controller mit Schrittbudget), Tool-Layer (SQL, RFM, Churn-XGBoost, Kampagnen- und E-Mail-Generierung, Budgetallokation), Data-Layer (SQLite).
- **Marketing Agent Benchmark (MAB)** (S. 4, S. 6): 15 Aufgaben in vier Kategorien (Kundenanalyse, Churn-Prävention, Kampagnendesign, Budgetoptimierung), drei Schwierigkeitsgrade, Rubrik-basierte Pass/Fail-Bewertung.
- Zitiert: Wang et al. – Agenten aus Profil, Memory, Planung, Aktion (S. 3).

### Anwendungsfälle
- Kundensegmentierung per RFM aus Transaktionsdaten (S. 5) – **KMU-realistisch** (CRM/ERP/Shop-Daten vorhanden).
- Churn-Risiko identifizieren und Retention-Kampagne mit E-Mail-Varianten erzeugen (S. 5–6) – **KMU-realistisch** bei Abo-/Wiederkaufsmodellen, mit Freigabe vor Versand.
- Reaktivierung inaktiver Kunden, Loyalty-Launch, Win-back (S. 7) – **KMU-realistisch**.
- Budgetaufteilung über Segmente unter Restriktionen (S. 6–7) – realistisch als Vorschlag, nicht als autonome Ausführung.
- Echtzeit-Personalisierung/Bidding – laut Autoren zu langsam (S. 7).

### Voraussetzungen, Risiken und Grenzen
- Saubere, abfragbare Daten (Schema für SQL-Zugriff) als Grundlage; SQL-Abfrage ist fast immer der erste Schritt (S. 6).
- Integrationen (CRM, CDP, Ads-APIs), Auth, Observability (S. 6).
- Grenzen: nur ein Modell (GPT-4-Variante), drei Läufe, Rubriken selbst geschrieben und nicht an Marketer-Urteil validiert, Datensätze UK-Retail und US-Telco, Übertragbarkeit auf B2B offen, generierte Inhalte nicht von Praktikern bewertet (S. 6).
- Keine Brand-Safety-Filter, keine Compliance-Prüfung (z. B. EU AI Act Kennzeichnung), keine Fairness-Audits (S. 6).

### Zahlen/Studienergebnisse
- 15/15 Aufgaben gelöst (4/4 leicht, 7/7 mittel, 4/4 schwer), Ø 7,5 Schritte (Spanne 4–10), Ø 219,4 s pro Aufgabe; Basis GPT-4 (gpt-4-turbo-preview), drei Läufe, Mehrheitsentscheid (S. 5–6).
- Churn-Klassifikator AUC 0,84, Precision 0,79 bei Schwelle 0,7, Holdout n=1'409 (IBM Telco) (S. 5–6); liegt im Literaturbereich 0,80–0,92 (S. 6).
- RFM: 5'878 Kunden in 8 aktive Segmente (UCI Online Retail II) (S. 5–6).
- ReAct reduziere Halluzination von 14 % auf 6 % gegenüber reinem Chain-of-Thought (Sekundärzitat Yao et al., S. 3).

---

## Quelle 3: CMA AI Playbook 7 – Marketing in the Age of Agentic AI

- **Datei:** cma-ai-playbook_agentic-ai.pdf
- **Titel:** AI Playbook 7: Marketing in the Age of Agentic AI (Teil der «AI Mastery Series»)
- **Autor/Herausgeber:** Canadian Marketing Association (CMA); PDF-Metadaten nennen Sara Clodman
- **Jahr:** 2025 (Mai 2025)
- **Dokumenttyp:** Verbands-Kurzleitfaden (Folienformat); laut eigener Angabe teilweise KI-generiert und menschlich überarbeitet (S. 1)
- **Umfang:** 10 PDF-Seiten (davon 3 Titel-/Füllseiten, 1 Verbandsporträt)
- **Interessenlage:** Branchenverband, Mitgliederkommunikation und Positionierung; kein Produktverkauf, aber deutlich motivierender Ton («Lead or Follow?»).
- **Evidenzqualität:** Meinung; Zahlen ohne Quellen- und Methodenangabe.
- **Schwerpunkt:** Kurzer Weckruf zu Agentic AI im Marketing, Treiber, Effekte, Vorbereitung.
- **Relevanz:** Marketing mittel (nur Orientierung) / Sales tief / Processes tief
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–10

### Kernaussagen
- Agentic AI gehe über Generative AI hinaus: Systeme, die verstehen, schlussfolgern und autonom handeln (S. 2).
- Marketingteams wechselten vom Werkzeuggebrauch zur «Partnerschaft» mit proaktiven KI-Systemen (S. 2).
- Behauptung, Systeme erreichten bzw. überträfen PhD-Niveau in mehreren Domänen und Benchmarks auf Spezialistenniveau – ohne Beleg (S. 3–4).
- Vier Treiber: Leistungssprünge in kurzen Zyklen, Integrationsstandards (MCP, A2A), Kostensenkung, eingebaute Sicherheits-/Governance-Funktionen (S. 4).
- Veränderung der Ausführung: Marktforschung, Echtzeit-Kampagnenoptimierung, kontextsensitiver Content, prädiktive Analyse (S. 6).
- Hinweis auf Datenschutz, Ethik und angemessene menschliche Aufsicht (S. 6, S. 8).
- Neue Rollen wie «AI Orchestrators» und «Strategy Leads»; Governance-Frameworks nötig (S. 7).
- Vorbereitung: KI-Kompetenz aufbauen, klare Rollen Mensch/KI, menschliche Aufsicht bei kritischen Entscheiden, Experimentierkultur (S. 8).

### Begriffe und Definitionen
- **Agentic AI:** Systeme, die verstehen, schlussfolgern und autonom handeln, um Marketinginitiativen voranzutreiben (S. 2) – vage, ohne Abgrenzungskriterium.
- **MCP / A2A:** als Standards für Interoperabilität zwischen KI-Systemen und Marketingtools genannt (S. 4) – korrekt, aber nicht erklärt.
- **Orchestrierung:** nur als Fähigkeit («Multi-Channel-Kampagnen orchestrieren», S. 3) bzw. Rolle (S. 7).
- **Human oversight / Governance:** genannt, nicht operationalisiert (S. 6–8).
- Memory, Guardrails, Evaluation, Observability: nicht behandelt. Insgesamt Marketing-Speak.

### Frameworks/Modelle
- «Vier Treiber des Wandels» (S. 4) – keine analytische Tiefe.

### Anwendungsfälle
- Recherche/Marktanalyse, Kampagnenoptimierung, Content, prädiktive Analytik (S. 6) – generisch; Recherche- und Content-Assistenz für KMU realistisch, «Echtzeit-Optimierung über Kanäle» bei KMU nur eingeschränkt.

### Voraussetzungen, Risiken und Grenzen
- KI-Kompetenz im Team, Rollen, Governance, Sicherheit (S. 7–8). Keine konkreten Risiken benannt.
- Kritisch: unbelegte Superlative (PhD-Niveau, «post-PhD in 3-Monats-Zyklen», S. 4) und Start-up-Anekdoten als Effizienzbeleg (S. 7) sind nicht auf Marketingorganisationen übertragbar.

### Zahlen/Studienergebnisse (alle ohne Quelle)
- Kostensenkung der Verarbeitung um Faktor 150 (S. 4).
- Leistungsverbesserungszyklen 3 statt 20 Monate (S. 4).
- Early Adopters: Routineaufgaben 40–60 % schneller, Testkapazität verdoppelt bis verdreifacht, Personalisierungsgenauigkeit +30–50 % (S. 6) – **unbelegt, nicht zitierfähig**.
- Cursor 100 Mio. USD ARR mit 20 Personen; Bolt 20 Mio. USD Umsatz mit 15 Personen in zwei Monaten; Konkurrenz brauche 5–10× mehr Personal (S. 7) – Anekdoten aus Softwarebranche.

---

## Quelle 4: PwC – Unlocking Tomorrow: Agentic AI for Consumer Markets

- **Datei:** the-power-of-agentic-ai-for-consumer-markets.pdf
- **Titel:** Unlocking Tomorrow: A playbook that explores the power of agentic AI for consumer markets
- **Autor/Herausgeber:** PwC (Matthias Schlemmer, PwC Strategy& Austria; Anna Bancroft, PwC UK; Mauro Xavier, PwC Spain), mit Beitrag von Nina Lund (Microsoft) (S. 44)
- **Jahr:** 2026 (Copyright 2026, S. 45; zitiert Studien von 2026)
- **Dokumenttyp:** Anbieter- oder Beratungspublikation (Beratungs-Playbook mit Allianzpartner Microsoft)
- **Umfang:** 45 PDF-Seiten (viele Kapiteltrenner-Seiten)
- **Interessenlage:** Beratung verkauft Transformation und eigenen «AI Agents Accelerator»; Kapitel 7 ist reine Werbung für PwC+Microsoft (Fabric, Copilot Studio, Agent 365, «Microsoft IQ») (S. 40–43). Architekturkapitel ist auf Microsoft-Stack gemappt (S. 29–32).
- **Evidenzqualität:** eigene, proprietäre Umfragen/Studien (AI Performance Study 2026, AI Agent Survey, AI Jobs Barometer, Hopes and Fears Survey) ohne Methodenangaben im Dokument, teils mit Hinweis «für Details Autoren kontaktieren» (S. 8–9, S. 22); Zitate von Partnern; keine Fallbeispiele mit Zahlen.
- **Schwerpunkt:** Retail/Konsumgüter; Agentic Commerce; «Enterprise Value Loops»; Skalierung von Pilot zu Produktion; dreischichtige agent-ready Architektur; Autonomiestufen nach Fehlerfolge und Reversibilität.
- **Relevanz:** Marketing mittel (Attract-to-Convert, GEO) / Sales mittel (Agentic Commerce, Service) / Processes hoch (Value Loops, Invoice-to-Payment, Operating Model, Governance)
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–45

### Kernaussagen
- Agentic AI verändere gleichzeitig, wie Konsumenten Produkte finden (Agenten kaufen im Auftrag), wie Marken sie erreichen und wie Unternehmen operieren (S. 3, S. 6).
- Sichtbarkeit wird zur Daten-, Vertrauens- und Architekturfrage: Agenten bewerten strukturierte Produktdaten, Lieferzuverlässigkeit, Preislogik, Vertrauenssignale; Maschinenlesbarkeit sei so wichtig wie visuelle Attraktivität («direct to agent») (S. 7, S. 34).
- Wertschöpfung entstehe nicht in isolierten Use Cases, sondern in end-to-end «Value Loops», in denen Signale, Entscheide und Aktionen über Funktionsgrenzen verbunden sind (S. 11).
- Acht Value Loops werden beschrieben, mit Priorisierung «jetzt» vs. «als Nächstes» (S. 12–19).
- Generative Engine Optimisation (GEO) gewinne neben SEO an Bedeutung (S. 14).
- Lücke Pilot→Wirkung sei primär eine Redesign-Lücke, keine Technologielücke; KI auf kaputte Prozesse gesetzt beschleunige nur die Fragmentierung (S. 21).
- Verantwortungsvolle KI als «Lizenz zur Skalierung»: Transparenz, Verantwortlichkeit, menschliche Aufsicht, Eskalationspfade, nachvollziehbare Entscheide, explizite Autonomiegrenzen, laufendes Monitoring (S. 23).
- Haupthürden liegen in Organisation, Rollen, Anreizen; Mitarbeitende seien nicht der Hauptwiderstand, sondern Messsysteme, die den alten Prozess belohnen (S. 25–27).
- Autonomie pro Agent entlang zweier Achsen festlegen: Fehlerfolge und Umkehrbarkeit; Autonomie schrittweise erweitern, wenn Zuverlässigkeit belegt ist (S. 38).
- «Production-grade» heisst: Guardrails, Monitoring, Eskalation, definierte Mensch-Agent-Übergaben, messbare KPIs, Telemetrie (Latenz, Entscheidungsgenauigkeit, Ausnahmequote, Kosten pro Aktion) (S. 38).
- Fünf Prioritäten: Portfolio prüfen (skalieren/redesignen/stoppen, Stopp bei fehlendem Owner oder Wirkung nach 6+ Monaten), Business Owner pro Agenten-Domäne, Daten als Infrastruktur, ein produktiver Agent mit gestufter Autonomie, ein Team-Operating-Model neu gestalten (S. 36–39).
- Man brauche nicht perfekte Daten überall, sondern zweckmässige, wiederverwendbare Datengrundlagen in Prioritätsdomänen (S. 34).

### Begriffe und Definitionen
- **Agentic AI:** autonome Agentensysteme, die Absicht verstehen und Aktivitäten planen, ausführen, orchestrieren und anpassen, um komplexe Ergebnisse zu liefern, «involving humans where judgements matter» (S. 3). Brauchbar, schliesst Human-in-the-Loop explizit ein.
- **Agentic Commerce:** KI-Agenten entdecken und kaufen Waren für Konsumenten (S. 6).
- **Enterprise Value Loop:** end-to-end Ablauf über Funktionen, relevant für Umsatz, Kosten, Tempo, Service; Analyseeinheit für Redesign (S. 11).
- **Agententypen:** Experience-Agenten (Interaktion mit Menschen), Orchestrierungsagenten (koordinieren mehrstufige Workflows), Worker-Agenten (setzen Ziele in Systemaktionen um); Unterschied liegt im Autonomieumfang und der Nähe zum Menschen (S. 33).
- **Orchestrierung:** übersetzt Absicht in mehrstufige Workflows, delegiert an Worker-Agenten, managt Übergaben, löst Konflikte, hält Regeln, was jeder Agent darf (S. 31).
- **Control Plane:** überwacht Agentenaktivität, setzt Guardrails durch, sichert Auditierbarkeit (S. 31) – hier mit Microsoft Agent 365 gleichgesetzt.
- **Human-in-the-loop:** Menschen setzen Regeln, behandeln Ausnahmen, passen Logik an (S. 31, S. 33); bei hoher Fehlerfolge/Irreversibilität zwingend (S. 38).
- **Graduated autonomy:** Autonomie wächst mit belegter Zuverlässigkeit (S. 38).
- **Agent Boss** (Microsoft-Begriff): Person, die Agenten baut, an sie delegiert und sie führt (S. 26).
- **Frontier Firms** (Microsoft-Begriff) (S. 23) – Marketingbegriff.
- **Observability:** nicht so benannt, aber inhaltlich als Telemetrie pro Agent (S. 38).
- Vage/Marketing-Speak: «Microsoft IQ», «Work IQ/Fabric IQ/Foundry IQ/Web IQ» (S. 29–32); «digital labour».

### Frameworks/Modelle
- **Acht Value Loops** (S. 12–19): Idea-to-Launch, Attract-to-Convert (jetzt), Trade-to-Profit, Plan-to-Promise, Channel-to-Operate, Order-to-Fulfil (jetzt), Invoice-to-Payment (jetzt), Issue-to-Resolution (jetzt). Jeder Loop «schliesst» sich durch Rückkopplung in den nächsten Zyklus.
- **Drei Wertebenen** (S. 21): einzelne Use Cases → Funktions-Redesign → Enterprise Value Loop.
- **Agent-ready Architektur** mit drei Schichten (S. 29–33): (1) Experience – Agenten treffen Menschen (Kunden, Mitarbeitende, Partner); (2) Orchestration & Enterprise Intelligence – Koordination, Governance, Control Plane; (3) Enterprise Systems & Operations – Worker-Agenten über Domain-APIs auf ERP, CRM, Commerce etc. Darunter Datenfundament (intern + extern maschinenlesbar). Menschliches Urteil quer über alle Schichten. Sechs «Bedrocks»: Daten, Technologie, Governance, Organisation, Prozess, Menschen (S. 29).
- **Autonomie-Matrix** (S. 38): Fehlerfolge × Reversibilität (häufig/geringe Folge/umkehrbar → volle Autonomie; selten/hohe Folge/irreversibel → Human-in-the-Loop). Sehr gut übertragbar.
- **Portfolio-Triage** skalieren/redesignen/stoppen (S. 36).

### Anwendungsfälle
- Attract-to-Convert: Segmentierung, Targeting, Content, personalisierte Angebote, Creative-Testing, Rückkopplung Conversion→Budget (S. 14) – **KMU-realistisch** (Google/Meta Ads, CRM, Website), in kleinerem Massstab.
- Maschinenlesbare Produktdaten / GEO für KI-Assistenten (S. 7, S. 14, S. 34) – **KMU-realistisch und aktuell** (strukturierte Daten auf Website, Produktfeeds).
- Invoice-to-Payment: Rechnungseingang, Dreiweg-Abgleich, Ausnahmebehandlung, Zahlungsabgleich (S. 18) – **KMU-realistisch** (ERP/Buchhaltung), oft beste Wirtschaftlichkeit.
- Issue-to-Resolution: Kundenservice mit Sicht auf Bestellstatus, Rückerstattungslogik, Kundenhistorie, Next Best Action; Ursachen zurückspielen (S. 19) – **KMU-realistisch**.
- Interne Agenten als Wissenszugang (z. B. Lieferantenperformance zusammenfassen, Lagerbestand prüfen) (S. 30) – **KMU-realistisch**.
- Dynamische Preisgestaltung, Demand Sensing, Fulfilment-Orchestrierung über Kanäle (S. 15–18) – eher Grossunternehmen/Retail; für KMU nur selektiv.

### Voraussetzungen, Risiken und Grenzen
- Business Owner mit P&L-Verantwortung je Domäne (S. 37); vereinheitlichte Daten in Prioritätsdomänen (S. 34, S. 37); Anreizsysteme anpassen; Manager als Vorbilder (S. 27).
- Governance: Eskalationspfade, Nachvollziehbarkeit, Autonomiegrenzen, Monitoring (S. 23, S. 38).
- Risiko: Kommodifizierung in Standardkategorien, wenn Agenten nur nach Spezifikation und Preis wählen (S. 7).
- Kritisch: Zahlen nicht überprüfbar; Architektur ist faktisch Microsoft-Produktlandkarte; Prognosen zu Agentic Commerce spekulativ; Fokus Grosskonzern.

### Zahlen/Studienergebnisse (alle PwC- oder Microsoft-eigene Quellen, Methodik nicht offengelegt)
- KI-Agenten sollen bis 2030 bis zu 15 % der europäischen E-Commerce-Ausgaben treiben; Adoption 4× schneller als klassischer E-Commerce (S. 3) – Prognose.
- Top 20 % der Firmen erzielen 74 % der KI-getriebenen Erträge; «AI-fit»-Firmen 7,2× höhere KI-Performance (PwC 2026 AI Performance Study, S. 4, S. 22).
- 33 % der Konsumenten erwarten bis 2030 Käufe über KI-Agenten; > 100 Mrd. EUR agentengesteuerte Transaktionen in Europa; 20 % der Retailer haben Agenten im Einsatz (Quelle «The agentic AI revolution in retail», S. 6).
- Retail: 25 % Median-Rendite auf KI-Ausgaben bei 7 % der Funktionsbudgets; Konsumgüter 5 % Budget, 10 % Rendite; KI-Leader 15 %; KI-Ausgaben Leader 5 % des Umsatzes, Retail/CG 1 % (S. 8–9, S. 22).
- 49 % der US-CPG-Führungskräfte zweifeln am Überleben ihrer Struktur (PwC 2025 CPG Executive Survey, S. 8).
- Business Owner eingebettet: 40 % CG, 47 % Retail, 62 % Leader (S. 9).
- > 1/3 Executives breiter Agenten-Einsatz, 27 % begrenzt, 17 % unternehmensweit (PwC AI Agent Survey, S. 21).
- Strategy&-Projektion: −30 % Kundenservice-Betriebskosten bis 2029 (S. 19).
- KI-Skills-Lohnprämie 62 % (Vorjahr 57 %), in Consumer Markets 118 %; 2,1 % der Stellenanzeigen 2024 verlangten KI-Skills (PwC 2026 Global AI Jobs Barometer, S. 25–26).
- 54 % der Arbeitnehmenden nutzten KI im letzten Jahr (PwC Hopes and Fears 2025, S. 26); nur 13 % fühlen sich für Neuerfindung von Arbeit belohnt (Microsoft Work Trend Index 2026, S. 26).

---

## Quelle 5: MMA Global / RAIL Webinar – AI Agents in Marketing: Navigating Hype, Risk, and Opportunity

- **Datei:** rail_webinar_2_-_ai_agents_-_dec_12_2024.pdf
- **Titel:** AI Agents in Marketing: Navigating Hype, Risk, and Opportunity
- **Autor/Herausgeber:** Alec Foster, MMA Global (Mobile Marketing Association); Dateiname verweist auf «RAIL»-Webinarreihe (Responsible AI in Marketing, Bezeichnung aus Dateiname abgeleitet, im Text nicht erklärt)
- **Jahr:** 2024 (Webinar 12. Dezember 2024)
- **Dokumenttyp:** Webinar-Folien
- **Umfang:** 55 PDF-Seiten (Folien; S. 45–49 sind Animationsstufen derselben Folie)
- **Interessenlage:** Branchenverband; bewirbt eigenes «MMA Marketing AI Risk Evaluation Framework» (S. 51). Ausdrücklich hype-kritisch.
- **Evidenzqualität:** Meinung/Synthese mit zahlreichen Sekundärzahlen aus Anbieter-Blogs (Vention Teams, Get Odin) und Beratungen; Fussnotenquellen im Extrakt teilweise nicht sichtbar. Ein offensichtlicher Datumsfehler (Marktgrösse «bis 2023», S. 19).
- **Schwerpunkt:** Realitätscheck zu Agenten im Marketing, Autonomie-Skala, Governance, gestufte Einführung, Change Management.
- **Relevanz:** Marketing hoch / Sales mittel (Lead Management) / Processes hoch (Governance, Implementierung)
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–55; PDF-Seite 43 enthält im Extrakt keinen Text (vermutlich Bildfolie), daher nicht auswertbar.

### Kernaussagen
- Agentic AI sei Ende 2024 in einem frühen Stadium; grosse Lücke zwischen Anbieter-Marketing und Realität (S. 5, S. 18).
- Die meisten «autonomen» Agenten erfordern weiterhin Menschen für Zielsetzung, Planung, Verbesserung und Analyse; nur die Ausführung liege beim Agenten (S. 17). Kernthese gegen «Autonomie»-Versprechen.
- Agenten funktionieren am besten in engen, domänenspezifischen, beaufsichtigten Aufgaben; bei komplexem Schlussfolgern hohe Fehlerraten (S. 19).
- Nicht für jedes Problem ein Agent: vom Geschäftsproblem ausgehen; viele Fälle lassen sich mit einfacheren Workflow-Orchestratoren lösen (S. 14). Sehr relevant für KMU-Beratung.
- Ohne gut strukturierte Daten und integrierte Prozesse liefern Agenten keinen Wert (S. 14).
- Noch nicht zuverlässig: vollautonome Kampagnenerstellung, komplexe Strategie, nuancierte Markenstimme, Kreativdirektion, komplexe Verhandlungen, High-Stakes-Entscheide, neuartige Probleme (S. 22).
- Bestehende Regulierungs-/Normrahmen (EU AI Act, NIST AI RMF, ISO) adressieren autonome Agentenhandlungen nicht spezifisch; agentenspezifische Governance nötig (S. 28).
- Governance-Prinzipien: klare Verantwortlichkeiten, Entscheidungsrechte, Override-Mechanismen, Scope-Beschränkung mit Guardrails, Datenzugriffskontrolle, Audit-Trails, Incident-Response (S. 29–30).
- Phasenweise Einführung: zuerst interne, risikoarme, wertvolle Fälle mit messbarem Nutzen, dann Ausweitung (S. 36).
- Anbieterprüfung: Fallbelege, Aufsichtsbedarf, Integration, Skalierbarkeit, Risikoprotokolle, Support; Warnsignale sind Überversprechen, kleingeredeter Datenbedarf, Intransparenz (S. 13, S. 15).
- Kritische Haltung zu Arbeitsplatzeffekten: Unternehmen sollen Umschulungslast nicht auf Mitarbeitende abwälzen; ethische Entscheide bleiben menschliche Verantwortung (S. 12).
- Schlecht gestaltete Automatisierung (frustrierende Chatbots) schadet Kundenbeziehungen; die FTC sei gegen irreführende KI-Behauptungen vorgegangen (S. 45).

### Begriffe und Definitionen
- **AI Agent:** «Systems that take action to achieve goals» (S. 6); Merkmale Autonomie, Lernfähigkeit, Zielorientierung. Sehr breit (umfasst Siri und autonome Fahrzeuge).
- **Agentic AI vs. traditionelle KI** (S. 7): Entwicklung von Sprachmodellen zu handlungsorientierten Systemen, dynamische Planung, kontextuelles Schlussfolgern, minimale menschliche Aufsicht.
- **Marketer-to-Machine (M2M) Scale** (S. 8, nach Marketing AI Institute): fünf Stufen von «Mensch schreibt Regeln» bis «vollautonom (theoretisch)»; Warnung, dass Stufe-3-Systeme als vollautonom vermarktet werden.
- **Orchestrator:** einerseits «einfachere Workflow-Orchestratoren» als Alternative zu Agenten (S. 14), andererseits Orchestrator-Systeme zur Koordination und Überwachung von Agenten (S. 29) – doppelte Verwendung.
- **Guardrails:** verhindern, dass Agenten ihren vorgesehenen Scope überschreiten (S. 30).
- **Human oversight / Override:** explizit gefordert (S. 30–31); Begriffe Human-in/on-the-loop nicht verwendet.
- **Memory/RAG/Evaluation:** nur in der Lern-Roadmap (Kurz-/Langzeit-/episodisches Gedächtnis, Agentic RAG, Agentic Evaluation) (S. 39).
- **Monitoring/Observability:** als «kontinuierliches Echtzeit-Monitoring», KPIs und Health-Metrics (S. 29, S. 32, S. 35).
- **Multi-Agent:** nur als Governance-Risiko (S. 28).

### Frameworks/Modelle
- **M2M-Skala** (S. 8) – nützlich für Erwartungsmanagement.
- **Autonomie-Realität in fünf Schritten** (S. 17): Ziel (Mensch), Planung (Mensch), Ausführung (Agent), Verbesserung (Mensch), Analyse (Mensch).
- **Drei Kategorien/Phasen von Marketing-Agenten** (S. 24–26): (1) Task-Copilots (heute), (2) persona-basierte Marketing-Agenten (aufkommend: A/B-Tests, Bidding, Attribution, Content-Iteration, Service, 1:1), (3) autonome Teams/Company Agents (Zukunft).
- **Governance-Grundprinzipien** (S. 30): Human Oversight, Scope & Restrictions, Data Governance; **vier Schutzbereiche** (S. 31): Datenschutz, Fairness/Bias, Transparenz/Erklärbarkeit, Mensch-KI-Kollaboration.
- **Fünf Governance-Spannungsfelder** (S. 33): Sicherheit vs. Produktivität, Kosten vs. Qualität, Tempo vs. Kontrolle, Innovation vs. Verantwortung, Automatisierung vs. Beschäftigung.
- **Zweiphasige Einführung** (S. 36): Pilot/Test/Refine → Expand/Optimize/Scale.
- **KPI-Raster** (S. 38): Effizienz, Qualität, Kosten, ROI, Kundenzufriedenheit; Langfristwerte (Business Impact, Teameffektivität, Retention, Innovation, Risiko). Die Beispielwerte sind illustrativ, nicht belegt.

### Anwendungsfälle (S. 21)
- Content-Erstellung und -Verteilung (E-Mail-Varianten, Social Posts, Bildbearbeitung, Republishing), mit menschlicher Prüfung von Markenstimme und Richtigkeit – **KMU-realistisch**.
- Kundenservice für Routineanfragen mit Eskalation – **KMU-realistisch**.
- Kampagnenmanagement (A/B-Tests, Bidding, Performance-Tracking) innerhalb menschlich gesetzter Parameter – **KMU-realistisch** (Google/Meta Ads).
- Analytics & Reporting (Aggregation, Berichte, Anomalieerkennung), Interpretation durch Menschen – **KMU-realistisch**.
- Lead Management (Scoring, Follow-ups, Terminvereinbarung), komplexe Verkaufsgespräche bleiben menschlich – **KMU-realistisch** (CRM).
- Content-Moderation zur Entlastung von Moderatoren (S. 10) – für KMU eher Nebenthema.

### Voraussetzungen, Risiken und Grenzen
- Klare Ziele, qualitativ gute Daten, skalierbare Infrastruktur, laufendes Monitoring (S. 20); Datenintegration, APIs, Sicherheitsarchitektur, Backups, Tests, Dokumentation (S. 35).
- Change Management: Grenzen kommunizieren, Risiko-Schulung (Datenschutz, Bias, Halluzination), Notfallprozeduren, Ängste adressieren (S. 37).
- Risiken: Datenschutz, Überabhängigkeit/Kreativitätsverlust (S. 24), entpersonalisierte Kundenerlebnisse (S. 45), Bias (S. 12), Energieverbrauch (S. 44), Jobverluste (S. 12).

### Zahlen/Studienergebnisse (überwiegend Sekundärquellen, teils Anbieterblogs)
- < 1 % der Unternehmen evaluieren/verfolgen Agentic AI (S. 5; Quelle nicht ersichtlich).
- > 80 % der Unternehmen nutzen KI als Kerntechnologie (Vention Teams, S. 5) – Anbieterblog.
- 29 % der Führungsteams mit Vision für unternehmensweite KI in 1–3 Jahren, 46 % längerfristig (S. 5; Fussnote nicht aufgelöst).
- +14 % Produktivität durch KI-Agenten (Get Odin); +15,2 % Umsatz durch GenAI (Vention Teams); +55 % Entwicklerproduktivität (Vention Teams); 16 Bio. USD bis 2030 (Get Odin) (S. 5) – **Anbieterblogs, nicht zitierfähig**.
- 4,4 Bio. USD jährliches Produktivitätspotenzial GenAI (McKinsey) (S. 5, S. 10).
- Agentenmarkt 5,1 Mrd. USD (2024) → 47,1 Mrd. USD «bis 2023» (sic; vermutlich 2030) (S. 19).
- Klarna: 37 % Kosteneinsparung im Marketing, ca. 10 Mio. USD/Jahr (S. 20) – Unternehmensangabe.
- Task-Copilots automatisieren 37 % der Aufgaben, sparen 30 Min. täglich (S. 24; Quelle nicht angegeben).
- WEF 2023: 85 Mio. Jobs verdrängt, 97 Mio. neue bis 2025 (S. 12).
- 73 % der Organisationen nennen Datenintegration als grosse Herausforderung (S. 35; Quelle nicht angegeben).

---

## Quelle 6: BCG CMO Survey 2026 – Moving the Agentic Marketing Transformation from Illusion to Reality

- **Datei:** making-the-agentic-marketing-transformation-a-reality.pdf
- **Titel:** Moving the Agentic Marketing Transformation from Illusion to Reality – BCG CMO Survey 2026
- **Autor/Herausgeber:** Boston Consulting Group; Mark Abraham, Lauren Wiener, Silvio Palumbo, Jessica Apotheker, Parul Bajaj, Janet Balis, Aaron Arnoldsen, Peter Dewey
- **Jahr:** 2026 (Artikel vom 15. Juni 2026)
- **Dokumenttyp:** Anbieter- oder Beratungspublikation (Umfragebericht als Web-Artikel, als PDF gedruckt)
- **Umfang:** 14 PDF-Seiten
- **Interessenlage:** Beratung; positioniert Transformations-, Org- und Tech-Stack-Beratung. Nutzungsbedingungen untersagen kommerzielle Verwendung und Nutzung für KI-Training/Evaluation ohne Erlaubnis (S. 14) – für die Website nur paraphrasieren und korrekt zitieren, keine Inhalte übernehmen.
- **Evidenzqualität:** eigene Umfrage (300 CMOs global, B2C und B2B) + 50 Interviews + Beobachtungen aus Kundenprojekten; Methodik nur «auf Anfrage» (S. 2). Selbstauskünfte; Projektzahlen (Effizienz, ROI) sind Engagement-Beobachtungen ohne Stichprobe. Exhibits 1–6 sind im Textextrakt nicht enthalten (Grafiken).
- **Schwerpunkt:** Reifegrad von CMOs bei agentischer Marketing-Transformation, Investitionswellen, Customer Journey (AEO/GEO, Agentic Commerce), Talent/Organisation, Risiken, vierschichtiger agentischer Tech-Stack.
- **Relevanz:** Marketing hoch / Sales mittel (B2B-Werte, Agentic Commerce) / Processes mittel (Operating Model, Governance-Rollen)
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–14 (Exhibits als Grafiken nicht im Extrakt)

### Kernaussagen
- In rund der Hälfte der Fälle steuert Marketing selbst die KI-Investitionen der Funktion, anders als in den meisten Unternehmensbereichen (S. 2).
- «Transformations-Illusion»: Fast alle CMOs berichten von End-to-End-Transformation, gleichzeitig nutzen 42 % GenAI nur als Assistenz für Einzelaufgaben (S. 3). Gute Illustration der Kluft zwischen Selbstbild und Realität.
- Drei Reifegruppen nach tatsächlichem Einsatz (Anzahl berührter Workflows, Transformationsgrad, Orchestrierung, Wirkung): Leaders, Followers, At-Risk (S. 3–4).
- Leaders kombinieren Agenten mit menschlicher Aufsicht in neu gestalteten Workflows; nur eine kleine Teilgruppe verbindet mehrere Agenten zu autonom laufenden Kampagnen bestimmter Typen (S. 4).
- Drei Investitionswellen: Einzeltools → Verbindungsgewebe/Fundamente (Daten, Messung, Tech, CX, Talent) → Betriebsinfrastruktur zum Skalieren («Welches Betriebssystem lässt meine Tools, Agenten und Workflows zusammenspielen?») (S. 4–5).
- Sichtbarkeit verschiebt sich in KI-vermittelte Entdeckung; Marken besitzen ihre Sichtbarkeit nicht mehr vollständig; AEO/GEO werde so wichtig wie SEO und Paid Media (S. 5–6).
- Organisation: kleinere, KI-befähigte Teams nach Geschäftszielen oder Kundensegmenten statt Kanälen; neue Rollen (AI Product Owner, AI Governance Owner, AEO/GEO-Teams) (S. 6–7).
- Upskilling sei der wichtigste Enabler; AI Champions, Super-User-Gruppen, Häppchen-Lernformate (S. 7–8).
- Anfangs mehr Aufwand, um agentische Tools einzurichten und mit Markenstandards und Kampagnenwissen zu füttern; danach starke Ergebnisse (CMO-Zitat, S. 8).
- Risikodiskussion hat sich verlagert: von Kreativitäts-/Authentizitätsverlust zu Datensicherheit, Datenschutz, Recht, Implementierung und Marken-Guardrails (S. 9).
- Vier Schichten eines agentischen Marketing-Stacks: Daten, Brand Intelligence Layer, Agentic Layer, einheitliche Benutzeroberfläche (S. 10–11).
- Verbleibende Arbeit ist strukturell und wenig sichtbar: Operating Model, Talent, Datenfundament, Brand-Intelligence-Schicht, Orchestrierungsarchitektur (S. 12).

### Begriffe und Definitionen
- **Agentic Marketing Transformation:** nicht definiert; implizit über Reifekriterien (Workflows, Orchestrierung, Wirkung) (S. 3).
- **Brand Intelligence Layer:** kodiert Markenregeln und Betriebskontext, liefert Messaging-Guardrails, KPI-Definitionen, priorisierte vertrauenswürdige Quellen; Copilots würden erst durch diese Verankerung zu unternehmensspezifischen Agenten (S. 11). Inhaltlich eine Mischung aus Kontext-/Wissensbasis (RAG/Memory) und Policy-Layer – nützliches Konzept, Begriff BCG-eigen.
- **Agentic Layer / Multi-Agent-Orchestrierung:** Übergang von Punkt-Tools zu einem «Schwarm» von Agenten, die Kampagnen oder Journeys planen, ausführen, messen und neu planen (S. 11). «Schwarm» ist Marketingsprache.
- **AEO:** hier «Agentic Engine Optimization» (S. 6); **GEO:** Generative Engine Optimization. Achtung: AEO wird anderswo meist als «Answer Engine Optimization» verwendet – Begriffskonflikt.
- **Agentic Commerce:** LLMs greifen in die Kaufentscheidung selbst ein (S. 6).
- **Agentic Control Tower:** Echtzeit-Überwachung von Trends für Marketing und Operations (Beispiel Restaurantkette, S. 3) – nicht weiter erklärt.
- **Human oversight:** Leaders «pairing agents with human oversight» (S. 4); keine Operationalisierung.
- **Guardrails:** Marken-/Messaging-Guardrails (S. 9, S. 11), verantwortet von AI Governance Owners (S. 6).
- Tool use, Evaluation, Observability: nicht behandelt.

### Frameworks/Modelle
- **Drei Reifegruppen** (S. 3–4): Leaders 32 % (davon ca. 8 % mit autonom laufenden Kampagnen-Typen), Followers 26 %, At-Risk 42 %.
- **Drei Investitionswellen** (S. 4–5).
- **Drei Felder der Leaders** (S. 5): neue Fähigkeiten entlang der LLM-disruptierten Journey; Organisation neu verdrahten (Rollen, Talent, Partner/Agenturen); moderner agentischer Stack mit tiefem Marken- und Arbeitsweisenverständnis.
- **Vier-Schichten-Stack** (S. 10–11): Daten (inkl. Experimentdaten) → Brand Intelligence → Agentic Layer → Unified UI («single pane of glass»), offen und komponierbar.

### Anwendungsfälle
- Agenten in Strategieentwicklung, Insights, Briefing, Content, Aktivierung, Optimierung (S. 4) – **KMU-realistisch** in Teilen (Briefing, Content, Ads-Optimierung).
- Content-Entwicklung und Media-Optimierung/Bidding als häufigste skalierte Domänen (S. 4) – **KMU-realistisch**.
- AEO/GEO: Sichtbarkeit in KI-Assistenten (S. 6) – **KMU-realistisch und dringlich**.
- Kundenseitige Agenten in eigenen Kanälen (S. 6) – KMU-realistisch als Website-Assistent mit klarer Wissensbasis.
- Echtzeit-Control-Tower über Marketing und Operations (S. 3) – Grossunternehmen.
- Wöchentliches Kurzvideo als Lernformat (S. 8) – übertragbar auf Enablement.

### Voraussetzungen, Risiken und Grenzen
- Daten und Datengovernance, Marken-Kontextschicht, Orchestrierungsarchitektur, Talent/Upskilling, Governance-Rollen (S. 6–12).
- Risiken: Datensicherheit, Datenschutz, Recht, Implementierung, Markenkonsistenz (S. 9).
- Grenzen der Quelle: Grossunternehmensperspektive (Budgets > 15 Mio. USD), Selbstauskunft, Methodik nicht offen, Projektzahlen ohne Basis.

### Zahlen/Studienergebnisse (BCG-Umfrage n=300 CMOs, 2026, sofern nicht anders vermerkt)
- Rund 50 % der CMOs: Marketing führt KI-Investitionsentscheide; 14 % CEO/Board; 15 % Strategie (S. 2).
- 72 % der CEOs sehen sich als Hauptentscheider für KI (BCG AI Radar, S. 2).
- 94 %: CEO-Erwartungen an Marketing deutlich gestiegen (S. 2).
- 43 %: KI-Investitionen im Marketing > 15 Mio. USD dieses Jahr (Vorjahr 28 %) (S. 3).
- 96 % berichten signifikante End-to-End-Transformation; 42 % nutzen GenAI nur als Einzelaufgaben-Assistenz (S. 3).
- Reifegruppen: 32 % Leaders (ca. 8 % autonome Kampagnen), 26 % Followers, 42 % At-Risk (S. 4).
- 43 % erhöhen KI-Investitionen deutlich; davon 41 % stark in End-to-End-Orchestrierung (S. 4).
- BCG-Projektbeobachtungen: 20–30 % Kosteneffizienz, 3× Marketing-ROI, 10× schnellere Kampagnenzyklen (S. 5) – **Engagement-basiert, nicht repräsentativ**.
- 40 % werden primär an Kosteneinsparung gemessen (S. 5).
- 31 % B2C- und 20 % B2B-CMOs: signifikante messbare Umsatzwirkung (S. 5).
- 90 %: GenAI verändert, wie Konsumenten Marken entdecken (S. 5); 91 % B2C / 76 % B2B: KI-moderierte No-Click-Discovery verändert Funnel (S. 6).
- Agentic Commerce Top-3-Priorität: 28 % APAC, 23 % Nordamerika, 13 % Europa (S. 5–6).
- 20 % der CMOs haben Organisationsstrukturen neu gestaltet (S. 7); ca. 80 % investieren signifikant in KI-Upskilling, ähnlich viele in Responsible-AI-/Ethik-Training (+10 Pp. ggü. 2025) (S. 7); 75 % führen noch agile Pods ein (S. 8).
- Martech und Daten als Investitionsbereich Nr. 1, +11 bis 12 Punkte ggü. 2025 (S. 10).

---

## Quelle 7: Smart Agents, Smarter Brands – Agentic AI Redefining Marketing in an Unstable World

- **Datei:** Smart_Agents_Smarter_Brands_Agentic_AI_Redefining_Marketing_in_an_Unstable_World.pdf
- **Titel:** Smart Agents, Smarter Brands: Agentic AI Redefining Marketing in an Unstable World
- **Autor/Herausgeber:** Inshu Misra, Eshan Chandra Pandey, Kinjal A. Patel, Deepti Surve (alle Builure Group Pty Ltd, Melbourne); AIB Review (Australian Institute of Business), Issue 15
- **Jahr:** 2026 (Zitiervorschlag S. 7)
- **Dokumenttyp:** sonstiges (Magazinbeitrag/Essay einer Business School-Publikation, nicht peer-reviewed)
- **Umfang:** 7 PDF-Seiten (davon ca. 1,5 Seiten Autorenporträts)
- **Interessenlage:** Autoren sind Führung eines Integrations-/Salesforce-Dienstleisters; indirekte Eigenwerbung.
- **Evidenzqualität:** Meinung mit Unternehmensbeispielen ohne Quellenbelege im Text; drei Abbildungen (Frameworks) im Extrakt nicht enthalten, nur Bildunterschriften und Fliesstext-Beschreibung.
- **Schwerpunkt:** Agentic AI im internationalen Marketing unter geopolitischer Unsicherheit, kulturelle Sensibilität, Vertrauen.
- **Relevanz:** Marketing mittel / Sales tief / Processes tief (ausser Risiko-Eskalationslogik)
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–7 (Abbildungen 1–3 als Grafiken nicht im Extrakt)

### Kernaussagen
- Agentic AI biete Resilienz in volatilem Umfeld, indem es Inhalte, Timing und Kanalwahl über Märkte hinweg autonom anpasst (S. 1).
- Unterschied zu prädiktiver KI: diese empfiehlt, Agentic AI handelt im Namen der Marke (S. 1).
- Risiko-Eskalationslogik: geringes Risiko → automatisiertes Reporting/Monitoring; mittleres → angepasste Kampagne mit Compliance- und Kultur-Checks; hohes → sofortige Kampagnenpausierung und menschliches Eingreifen (S. 2). Brauchbares Muster für abgestufte Autonomie.
- Kulturelle Sensibilität: Agenten könnten problematische Slogans in Echtzeit erkennen und Alternativen vorschlagen (S. 2).
- Vertrauen als Resilienzmetrik; Agenten sollen bei negativen Stimmungssignalen an Menschen übergeben (S. 3).
- Fallbeispiele Unilever, Coca-Cola, Spotify, Sephora, Mecca, WHO (S. 3–4) – teils eher klassische Empfehlungssysteme oder Chatbots als Agenten.
- Konsumenten könnten Automatisierung als Manipulation empfinden; faktenbasierte («grounded») persuasive Sprachmodelle seien nötig (S. 5).
- EU AI Act erfordere Nachweis ethischer, konformer Nutzung; Produktivität und Autonomie gegen starke menschliche Aufsicht abwägen (S. 5).
- Vier-Phasen-Einführung: Assess, Pilot in Niedrigrisiko-Märkten, Scale über Kanäle, Govern mit ethischen Leitlinien (S. 5).

### Begriffe und Definitionen
- **Agentic AI:** System mit Autonomie, kontextuellen Entscheiden und fortlaufendem Lernen, ohne explizite Handlungsanweisung; kann im Namen der Marke handeln (S. 1). Die Formulierung «lernt ohne Anweisung» überzeichnet heutige LLM-Agenten.
- **Human handover / Human oversight:** Übergabe an Menschen bei Unbehagenssignalen (S. 3), menschliches Eingreifen bei hohem Risiko (S. 2).
- Begriffe unscharf: Spotify-Empfehlungsalgorithmus und Sephora-Virtual-Try-on werden als «agentic» gelabelt (S. 4) – Etikettierung bestehender ML-Systeme als Agenten (Agent-Washing).
- Tool use, Memory, Orchestrierung, Evaluation, Observability: nicht behandelt.

### Frameworks/Modelle
- **Geopolitical Navigation Framework** (S. 2–3): Risikoklassifizierung niedrig/mittel/hoch mit jeweils automatisierter, angepasster oder gestoppter Reaktion.
- **Strategic Implementation Framework** (S. 5): Assess → Pilot → Scale → Govern.
- Abbildung 1 «Agentic AI System Capability in a Marketing Context» (S. 2) – Inhalt nicht im Extrakt.

### Anwendungsfälle
- Sentiment-Monitoring mit Alarmierung und Kampagnen-Stopp bei Reputationsrisiko (S. 2) – **KMU-realistisch** in einfacher Form (Social Listening + Alert + manuelle Entscheidung).
- Kulturelle/sprachliche Anpassung von Kampagnen pro Markt (S. 2–3) – **für Schweizer KMU relevant** (Mehrsprachigkeit DE/FR/IT), mit menschlicher Prüfung.
- Trend-Erkennung und schnelle Content-Produktion (Unilever) (S. 3–4) – teilweise realistisch.
- Chatbot im Kundenservice (Sephora) (S. 4) – KMU-realistisch.

### Voraussetzungen, Risiken und Grenzen
- Compliance-Checks, Kultur-Checks, menschliche Aufsicht, ethische Leitlinien (S. 2, S. 5).
- Risiken: Vertrauensverlust durch als manipulativ empfundene Automatisierung, Fehlinformation (S. 5).
- Grenzen der Quelle: Fallbeispiele unbelegt; «Coca-Cola entscheidet autonom über kulturelle Anpassung» und «Spotify passt Algorithmen ohne menschliche Aufsicht an» (S. 4) sind nicht verifizierte Behauptungen.

### Zahlen/Studienergebnisse (ohne Quellenangabe im Text)
- Globaler AI-Agent-Markt 5,40 Mrd. USD (2024) → 50,31 Mrd. USD (2030) → 89,87 Mrd. USD (2034) (S. 1) – Marktforschungsprognose.
- Sephora: > 200 Mio. virtuelle Try-ons; Südostasien +28 % App-Adoption, +48 % Try-on-Nutzung; Chatbot löst 75 % der Anfragen, Antwort < 10 s; Content 40 % schneller (S. 4) – Unternehmensangaben, unbelegt.
- Mecca: > 10 Mio. Produktempfehlungen pro Woche (Amazon Personalize) (S. 4).

---

## Quelle 8: Omnibound – The Agentic AI Playbook for Marketers

- **Datei:** The Agentic AI Playbook for Marketers.pdf
- **Titel:** The Agentic AI Playbook for Marketers – Marketing, Reimagined by AI (Version 1.0)
- **Autor/Herausgeber:** Omnibound (omnibound.ai), Softwareanbieter; keine Einzelautoren
- **Jahr:** 2025 (Mai 2025)
- **Dokumenttyp:** Anbieter- oder Beratungspublikation (Anbieter-Playbook/Lead-Magnet)
- **Umfang:** 31 PDF-Seiten
- **Interessenlage:** Softwareanbieter; verweist auf eigenes kostenpflichtiges/weiterführendes «Agentic Marketing Readiness Assessment» (S. 10); Kriterienkatalog «Agentic Stack» liest sich als Produktanforderung (S. 20–24).
- **Evidenzqualität:** Meinung; keine Zahlen, keine Quellen, nur hypothetische Beispiele.
- **Schwerpunkt:** zehn «Mythen», Readiness-Selbsttest, Agentic AI Operating Model (Context–Decision–Execution–Feedback–Optimization), Use Cases nach Marketingfunktion, Stack-Kriterien, CMO-Rolle, «AI Theater».
- **Relevanz:** Marketing mittel / Sales tief / Processes tief
- **Lesestatus:** vollständig gelesen, PDF-Seiten 1–31

### Kernaussagen
- Agentic AI gehe über Content-Generierung und Task-Automatisierung hinaus: Agenten sollen mit Teams in Schlussfolgern, Entscheiden, Handeln und Lernen zusammenarbeiten (S. 2).
- Stufenmodell Automation → Generative AI → Agentic AI, Output vom Task-Ergebnis über Content bis «Empfehlung + Aktion» (S. 3).
- Marketing sei besonders geeignet wegen hoher Entscheidungsdichte, Signalflut und Koordinationskomplexität (S. 4).
- Zehn Mythen, u. a.: ersetzt Marketer nicht; kein Komplettumbau des Stacks nötig, API-Integration genügt; kein grosser Vorabinvest dank Cloud/Modularität; über den ganzen Funnel einsetzbar; erhöhe Rechenschaft durch Entscheidungsprotokolle (S. 5–7).
- Fünfstufiger Operating-Kreislauf Context → Decision → Execution → Feedback → Optimization (S. 11–13).
- Use Cases für Brand, Content, PR, Product, Customer, Partner Marketing (S. 14–19).
- Stack-Kriterien: kontextuelles Schlussfolgern, rollenübergreifende Zusammenarbeit, adaptive Workflows, markensichere Kreativität, Feedback-Lernschleife (S. 20–24).
- «AI Theater» vermeiden: KI zur Beeindruckung statt Wertschöpfung; Gegenmittel messbare Ziele, keine Überversprechen, Integration in bestehende Workflows, Leistungsmessung (S. 27). Nützlicher Begriff.
- Klein starten, schrittweise skalieren (S. 26).
- Interne Widersprüche: Titel verspricht Wechsel «von Automation zu Autonomie» (S. 1), Handlungsempfehlung 4 lautet «von Automation zu Augmentation» (S. 30). Der Readiness-Test hat sechs Dimensionen à 1–5 Punkte (max. 30), die Auswertung reicht aber bis 75 Punkte (S. 8–10) – methodisch fehlerhaft.

### Begriffe und Definitionen
- **Agentic AI:** Systeme, die mit Kontext handeln, Optionen abwägen und aus Ergebnissen lernen; mit Autonomie und strategischer Zielausrichtung (S. 3). Bild: Taschenrechner vs. Berater. Merkmale kontextbewusst, entscheidungsgetrieben, adaptiv, kollaborativ (S. 4).
- Schwankend zwischen «Empfehlung» (Decision-Driven = empfiehlt Aktionen, S. 4) und «autonomer Ausführung» (S. 11, S. 13) – unscharf, ob der Agent handelt oder berät.
- **Agentic Organization:** höchste Stufe der Reifekurve (S. 10).
- **Brand-safe creativity:** Einhaltung von Markenstimme, Werten, Ethik inkl. Moderation vor Publikation (S. 23) – faktisch ein Guardrail-Konzept.
- **Feedback learning loop** (S. 24) – entspricht Closed Loop.
- **AI Theater:** oberflächlicher KI-Einsatz zur Beeindruckung von Stakeholdern ohne realen Wert (S. 27).
- Tool use, Memory/RAG, Multi-Agent, Orchestrierung (nur «customer journey orchestration», S. 7), Evaluation, Observability, Human-in-the-loop: nicht definiert.

### Frameworks/Modelle
- **Spectrum of Intelligence** (S. 3): Traditional Automation / Generative AI / Agentic AI.
- **Agentic AI Operating Model** (S. 11–13): Context, Decision, Execution, Feedback, Optimization mit Vergleich «traditionelle KI vs. Agentic AI» pro Stufe.
- **Readiness-Selbsttest** in sechs Dimensionen mit Reifestufen Curious, Experimenting, Augmenting, Scaling, Agentic Organization (S. 8–10) – Punkteskala fehlerhaft.
- **Fünf Stack-Kriterien** (S. 20–24); **zehn Moves zum «Agentic Marketer»** (S. 29–31).

### Anwendungsfälle
- Markt-/Trend- und Sentiment-Monitoring für Brand und PR (S. 14, S. 16) – **KMU-realistisch** als Monitoring mit Zusammenfassung und Vorschlag.
- Personalisierte Blogposts, Newsletter, Social Posts nach Segment (S. 15) – **KMU-realistisch** mit Freigabe.
- Wettbewerbsbeobachtung (Releases, Preise, Kundenfeedback) und Positionierungsvorschläge (S. 17) – **KMU-realistisch**.
- Post-Purchase-E-Mails mit Empfehlungen, Loyalty-Angebote, Churn-Früherkennung (S. 18) – **KMU-realistisch** (CRM/Shop).
- Partner-Performance-Analysen (S. 19) – für KMU mit Händlernetz realistisch.
- Selbständige Anpassung von Markennarrativ und Lancierung von Initiativen durch die KI (Beispiel S. 14) – **unrealistisch und nicht wünschenswert** ohne menschlichen Entscheid.

### Voraussetzungen, Risiken und Grenzen
- API-Integration mit bestehendem Stack (S. 6), Training, funktionsübergreifende Zusammenarbeit, Führungssupport (S. 25–26).
- Risiken: Markensicherheit (S. 23, S. 30), Widerstand, Überversprechen (S. 27).
- Grenzen der Quelle: werblich, keinerlei Belege, Mythen-Format immunisiert gegen Kritik («Mythos: KI kann keine High-Level-Entscheide» → «kann sie», S. 7).

### Zahlen/Studienergebnisse
- Keine.

---

## Quellenübergreifend

### Qualität im Überblick
| # | Quelle | Typ | Evidenz | Brauchbarkeit |
|---|---|---|---|---|
| 1 | MAAMS (Mehta et al. 2026) | wissenschaftlich | Simulation, synthetische Daten, methodisch schwach | Struktur ja, Zahlen nein |
| 2 | Thapa et al. 2026 (IoTML/ACM) | wissenschaftlich | reproduzierbarer Proof-of-Concept, ehrliche Limitationen | hoch (Begriffe, Tool-Design, Evaluation) |
| 3 | CMA Playbook 7 (2025) | Verband, Kurzleitfaden | Meinung, unbelegte Zahlen | tief |
| 4 | PwC Consumer Markets (2026) | Beratung + Microsoft | proprietäre Umfragen | mittel–hoch (Autonomie-Matrix, Value Loops, Production-grade) |
| 5 | MMA Global Webinar (2024) | Webinar-Folien | Meinung, Sekundärzahlen | hoch (Hype-Check, Governance) |
| 6 | BCG CMO Survey (2026) | Beratung, Umfrage n=300 | Selbstauskunft, Methodik auf Anfrage | mittel–hoch (Illusion, Brand-Layer, AEO/GEO) |
| 7 | AIB Review (2026) | Magazin-Essay | unbelegte Fallbeispiele | tief–mittel (Risiko-Eskalation) |
| 8 | Omnibound Playbook (2025) | Anbieter | Meinung, keine Belege | tief (Begriff «AI Theater») |

### Terminologiekonflikte
- **Was ist ein Agent?** Spanne von sehr breit («Systeme, die handeln, um Ziele zu erreichen», inkl. Siri und autonomer Fahrzeuge – Q5 S. 6) über RL-Policies (Q1) bis zu präzise LLM-basierten Agenten mit Tool-Loop (Q2 S. 2–3). Q7 und Q8 etikettieren klassische Empfehlungssysteme bzw. Beratungsfunktionen als «agentic» (Agent-Washing). Das schärfste Abgrenzungskriterium liefert Q2: geschlossener Zyklus Wahrnehmen–Schlussfolgern–Handeln mit beobachtetem Ergebnis.
- **Handelt der Agent oder empfiehlt er?** Q8 schwankt zwischen «empfiehlt Aktionen» (S. 4) und «führt autonom aus» (S. 13); Q7 betont «handelt im Namen der Marke» (S. 1); Q5 zeigt, dass in der Praxis meist nur die Ausführung beim Agenten liegt (S. 17).
- **Autonomie als Ziel vs. als dosierte Grösse:** Q1 will explizit Betrieb ohne menschliches Eingreifen (S. 3, S. 11). Q2, Q4, Q5 behandeln Autonomie als abgestufte Grösse, die durch Menschen (Ziele, Guardrails, Circuit Breaker) begrenzt wird. Q8 widerspricht sich selbst (Autonomie S. 1 vs. Augmentation S. 30).
- **Augmentation:** in Q2 die unterste Stufe (KI empfiehlt, Mensch handelt, S. 3), in Q8 das Ziel, das über Automation hinausgeht (S. 30) – gegensätzliche Ordnung.
- **Orchestrierung/Orchestrator:** einfache Workflow-Orchestratoren als Alternative zu Agenten (Q5 S. 14) vs. Orchestrierungsschicht, die Agenten koordiniert und regiert (Q4 S. 31, Q5 S. 29) vs. «Schwarm von Agenten» (Q6 S. 11). Für die Website klar trennen: Workflow-Orchestrierung (deterministisch) und Agenten-Orchestrierung.
- **AEO:** bei BCG «Agentic Engine Optimization» (Q6 S. 6); geläufig ist «Answer Engine Optimization». GEO wird in Q4 und Q6 gleich verwendet.
- **Autonomiestufen:** drei Stufen (Q2: Augmentation/Automation/Autonomization), fünf Stufen (Q5: M2M-Skala nach Marketing AI Institute), drei Phasen (Q5: Copilots/Persona-Agenten/autonome Teams), Reifegrade (Q6 drei Tiers, Q8 fünf Stufen). Kein gemeinsamer Standard.
- **Memory/Kontext:** Q2 bewusst ohne Langzeitgedächtnis, Q1 «volles internes Gedächtnis», Q6 übersetzt den Bedarf in einen «Brand Intelligence Layer». Begriffe RAG und Memory werden nur in Q5 (Lern-Roadmap) und Q1 (beiläufig) genannt.
- **Human-in-the-loop:** explizit in Q4 (S. 31, S. 38), sinngemäss in Q2 (Circuit Breaker), Q5 (Override, Decision Rights), Q7 (Handover). «Human-on-the-loop» verwendet keine Quelle.

### Konsenspunkte
- Agentic AI ist mehr als Content-Generierung: Planung, Toolnutzung, Ausführung und Rückkopplung (alle Quellen).
- Der Regelkreis (Plan/Context → Ausführen → Messen/Feedback → Optimieren) ist das gemeinsame Grundmuster (Q1 S. 9–10, Q2 S. 3, Q4 Value Loops, Q6 S. 11, Q8 S. 11–12).
- Wert entsteht nicht durch Einzeltools, sondern durch verbundene End-to-End-Workflows (Q4 S. 11, Q6 S. 4–5, Q5 S. 36).
- Daten und Integration sind die eigentliche Engstelle (Q2 S. 6, Q4 S. 37, Q5 S. 14, S. 35, Q6 S. 10).
- Menschliche Aufsicht, klare Entscheidungsrechte und Guardrails sind Voraussetzung, insbesondere für Markensicherheit (Q2, Q4, Q5, Q6, Q7).
- Klein, risikoarm und messbar starten, dann ausweiten (Q4 S. 38, Q5 S. 36, Q7 S. 5, Q8 S. 26).
- Organisation, Rollen, Anreize und Befähigung entscheiden mehr über Wirkung als die Technologie (Q4 S. 25–27, Q6 S. 6–8, Q5 S. 37).
- KI-vermittelte Entdeckung (GEO/AEO, Agentic Commerce) verändert Sichtbarkeit; maschinenlesbare, strukturierte Daten werden wichtig (Q4 S. 7, S. 14, S. 34; Q6 S. 5–6).

### Hype vs. Substanz
- **Substanz:** PRA-Abgrenzung und Tool-Design-Prinzipien (Q2); Autonomie nach Fehlerfolge × Reversibilität (Q4 S. 38); Production-grade-Kriterien mit Telemetrie (Q4 S. 38); Governance-Prinzipien und Spannungsfelder (Q5 S. 29–33); «Transformations-Illusion» (Q6 S. 3); Brand-Kontext als Grundlage für unternehmensspezifische Agenten (Q6 S. 11); Hinweis, dass einfache Workflows oft genügen (Q5 S. 14).
- **Hype:** «PhD-Niveau», Faktor 150, 40–60 % schneller ohne Quelle (Q3); Start-up-Anekdoten als Effizienzbeleg (Q3 S. 7); Vollautonomie mit 95,4 % Accuracy auf Simulationsdaten (Q1); Fallbeispiele ohne Belege (Q7); Mythen-Rhetorik (Q8); Produktwerbung als Architektur (Q4 Kap. 5 und 7).
- **Umfragezahlen der Beratungen** (Q4, Q6) sind Richtwerte aus Selbstauskünften grosser Unternehmen ohne offengelegte Methodik; nicht auf Schweizer KMU übertragbar.

### Spekulativ
- Agentic Commerce mit 15 % des EU-E-Commerce bzw. > 100 Mrd. EUR bis 2030 (Q4 S. 3, S. 6).
- Autonome Teams/Company Agents, die Kampagnen vollständig selbst steuern (Q5 S. 26; Q6: nur ca. 8 % der CMOs für bestimmte Kampagnentypen, S. 4).
- Marktgrössenprognosen für AI Agents (Q5 S. 19, Q7 S. 1) – stark abweichende Werte.
- Wirtschaftliche Gesamteffekte (16 Bio. USD, Q5 S. 5).
- Laufend selbstlernende Agenten im Marketing ohne menschliches Eingreifen (Q1, Q7, Q8).

### Weiterführende Primärquellen (aus den Literaturlisten, nicht gelesen)
- Huang & Rust (2021), Strategic framework for AI in marketing, JAMS (zitiert in Q1, Q2).
- Gonzalez, Habel & Hunter (2026), AI Agents, Agentic AI, and the Future of Sales, Journal of Business Research (zitiert in Q1, Q2) – relevant für Agentic Sales.
- Allmendinger et al. (2026), Multi-agent AI, Electronic Markets (zitiert in Q1).
- Wang et al. (2024), Survey on LLM-based Autonomous Agents (zitiert in Q2).
- Yao et al. (2022), ReAct (zitiert in Q2).
- Buder, Hesel & Heimstädt (2024), Consumer Attitudes Toward AI-Generated Marketing Content, NIM Nürnberg (zitiert in Q2) – relevant für Kennzeichnung/Vertrauen im DACH-Raum.

---

## Implikationen für die Website

### Startseite
- Kernbotschaft entlang der Konsenslinie: Wert entsteht durch verbundene Abläufe mit klaren Entscheidungsrechten, nicht durch einzelne KI-Tools (Q4 S. 11, Q6 S. 4–5).
- Die «Transformations-Illusion» als Problemaufhänger nutzen (viele Firmen glauben transformiert zu sein, nutzen KI aber nur punktuell; Q6 S. 3) – als Paraphrase mit Quellenangabe BCG 2026, ohne Zahlen als eigene Behauptung.
- Ehrliche Positionierung: dosierte Autonomie, Mensch entscheidet, wo Fehler teuer oder irreversibel sind (Q4 S. 38). Unterscheidet von Hype-Anbietern.

### Agentic Marketing
- Den Regelkreis Planen → Ausführen → Testen → Optimieren als Seitenstruktur (Q1 S. 9–10, Q8 S. 11–12), jeweils mit Freigabepunkten.
- Konkrete, KMU-realistische Use Cases: Kampagnen-Reporting mit Anomalie-Hinweis, Ads-Optimierungsvorschläge innerhalb gesetzter Budgets, Content-Varianten mit Markenprüfung vor Publikation, Segmentierung und Reaktivierungskampagnen aus CRM-Daten (Q2 S. 5–7, Q5 S. 21).
- Brand-Kontext als Fundament: Markenregeln, Tonalität, erlaubte Quellen und KPI-Definitionen als strukturierte Wissensbasis, damit Agenten unternehmensspezifisch werden (Q6 S. 11). Eigener Begriff statt «Brand Intelligence Layer» verwenden.
- Sichtbarkeit in KI-Assistenten (GEO/AEO): strukturierte, maschinenlesbare Unternehmens- und Angebotsdaten (Q4 S. 7, S. 34; Q6 S. 6). Begriff AEO eindeutig definieren.
- Mehrsprachigkeit DE/FR/IT als Schweizer Anwendungsfall für kulturelle/sprachliche Anpassung mit menschlicher Endkontrolle (in Anlehnung an Q7 S. 2).

### Agentic Sales
- Realistische Fälle: Lead-Scoring, Follow-up-Entwürfe, Terminvereinbarung; komplexe Verhandlungen bleiben menschlich (Q5 S. 21–22).
- Churn-/Wiederkauf-Signale aus CRM/ERP, Retention-Kampagne als Entwurf zur Freigabe (Q2 S. 5–6, Q8 S. 18).
- Service-Loop: Anfragen mit Sicht auf Auftragsstatus und Kundenhistorie beantworten, Ursachen zurück an Produkt/Prozess (Q4 S. 19).
- Literaturlücke: Keine Quelle des Batches behandelt B2B-Vertrieb vertieft; Gonzalez/Habel/Hunter (2026) als Primärquelle nachziehen.

### Agentic Processes
- Value-Loop-Denken: einen End-to-End-Ablauf auswählen, der Umsatz, Kosten oder Tempo spürbar betrifft, statt isolierter Use Cases (Q4 S. 11, S. 19).
- Backoffice als «sauberste Ökonomie»: Rechnungseingang, Abgleich, Ausnahmebehandlung (Q4 S. 18) – gut für KMU mit ERP.
- Unterscheidung kommunizieren: Viele Aufgaben lösen deterministische Workflows besser und günstiger als Agenten (Q5 S. 14). Agenten nur dort, wo Schlussfolgern und Werkzeugwahl nötig sind (Q2 S. 3).
- Tool-Design-Prinzipien als Qualitätsmerkmal (schmale, typisierte Werkzeuge, Schrittbudget, verständliche Fehlermeldungen; Q2 S. 4) – als Beleg für technische Sorgfalt, in einfacher Sprache.

### Governance
- Autonomie-Matrix Fehlerfolge × Umkehrbarkeit (Q4 S. 38) als zentrales, leicht verständliches Modell.
- Risiko-Eskalation niedrig/mittel/hoch mit automatischer Reaktion, angepasster Reaktion mit Prüfung, Stopp und menschlichem Eingriff (Q7 S. 2).
- Bausteine: Entscheidungsrechte, Override, Scope-Guardrails, Datenzugriffskontrolle, Audit-Trail, Incident-Response, Monitoring (Q5 S. 29–30; Q4 S. 23).
- Harte Constraints ausserhalb des Sprachmodells und Schwellenwerte für menschliche «Circuit Breaker» gegen plausible, aber schädliche Entscheide (Q2 S. 6).
- Hinweis auf Regulierung (EU AI Act, für Schweizer KMU mit EU-Kunden relevant; revDSG) – Q5 S. 28: bestehende Rahmenwerke decken autonome Agenten nicht spezifisch ab. Keine Rechtsberatung versprechen.
- Kennzeichnungs-Spannung: Offenlegung von KI-Content kann Bewertung senken (Q2 S. 7) – als Abwägung thematisieren.

### Ansatz (4 Phasen)
- **Architecture & Setup:** Problem zuerst, nicht Tool (Q5 S. 14); Datenfundament zweckmässig in der Prioritätsdomäne statt «perfekt überall» (Q4 S. 34); Business Owner benennen (Q4 S. 37); Autonomie pro Agent festlegen (Q4 S. 38); Brand-Kontext aufbauen (Q6 S. 11).
- **Roll-out & Hypercare:** ein produktionsreifer Ablauf mit Guardrails, Monitoring, Eskalationspfaden, definierten Übergaben, KPIs und Telemetrie (Latenz, Ausnahmequote, Kosten pro Aktion) (Q4 S. 38); interne, risikoarme Fälle zuerst (Q5 S. 36).
- **Enablement:** Grenzen der KI offen kommunizieren, Risiko-Schulung zu Datenschutz, Bias, Halluzination, Notfallprozeduren (Q5 S. 37); interne Champions und kurze, regelmässige Lernformate (Q6 S. 8); Anreize/Messgrössen an neue Arbeitsweise anpassen (Q4 S. 27).
- **Iteration & Optimization:** Autonomie erst erweitern, wenn Zuverlässigkeit belegt ist (Q4 S. 38); Evaluation über mehrere Dimensionen (Aufgabenerfüllung, Ergebnisqualität, Compliance, Robustheit, Effizienz; Q2 S. 4, S. 6); Portfolio-Triage skalieren/umbauen/stoppen (Q4 S. 36).

### Service-Seiten
- Für jede Leistung: welches System (CRM, Ads, Website, ERP), welche Stufe (Assistenz / Automation / begrenzte Autonomie), welche Freigabepunkte, welche Messgrössen.
- «AI Theater» als Abgrenzungsbegriff gegenüber Show-Projekten (Q8 S. 27), sinngemäss auf Deutsch übersetzen.
- Anbieter-Prüffragen (Fallbelege, Aufsichtsbedarf, Integration, Risikoprotokolle; Q5 S. 13–15) als Checkliste oder FAQ für Interessenten.

### Was NICHT behauptet werden darf
- Keine Prozent- oder Faktor-Versprechen aus diesen Quellen als erwartbare Kundenergebnisse (z. B. «40–60 % schneller», «3× ROI», «10× schnellere Zyklen», «−30 % Servicekosten»): Q3 unbelegt, Q6 nicht repräsentative Projektbeobachtungen, Q4 Projektion.
- Keine MAAMS-Simulationswerte (95,4 % Accuracy, 11,5 % CTR, ROI 7,2) als Wirksamkeitsbeleg (Q1, synthetische Daten).
- Kein «vollautonomes Marketing», keine Agenten, die Strategie, Markennarrativ oder Budget eigenständig entscheiden: laut Q5 S. 22 nicht zuverlässig; widerspricht Governance-Positionierung.
- Keine «PhD-Niveau»-Rhetorik (Q3 S. 3–4).
- Keine Start-up-Anekdoten (Cursor, Bolt) oder Grosskonzern-Fälle (Klarna, Sephora, Coca-Cola) als übertragbare KMU-Beweise.
- Keine Marktgrössen- oder Adoptionsprognosen als Fakten; wenn überhaupt, als Prognose mit Quelle.
- Agentic-Commerce-Szenarien nicht als Gegenwart darstellen.
- BCG-Inhalte nicht übernehmen oder nachbauen; nur kurz und mit Quellenangabe paraphrasieren (Nutzungsbedingungen Q6 S. 14).
- Keine Aussagen, dass Agenten «ohne menschliche Aufsicht lernen» oder sich «selbst verbessern», ohne dies technisch einzuschränken.
