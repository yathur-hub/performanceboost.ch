# 05 Terminologie und Definitionen (verbindlich)

Stand 14.11.2026. Verbindlich für alle Website-Texte, Fachartikel und Angebote. Grundlage sind die Quellen in `01-source-inventory.md`, Konflikte stehen jeweils dabei.
Prinzip: **Auf der Website deutsch und verständlich, intern präzise.** Englische Fachbegriffe nur, wo Entscheider sie suchen oder sie Markenbegriffe sind.

## Grundhaltung
**KI ist der Enabler des ganzen Systems, nicht ein Zusatz.** performanceboost plant Marketing, Vertrieb und Prozesse so, dass Daten, Integrationen, Automatisierung und KI von Anfang an eine gemeinsame Architektur bilden. Jede Leistung (Kampagnen, CRM, Tracking, Shop, Schulung) ist Teil dieses Systems. Eine Leistung «mit KI ergänzt» gibt es in unserer Sprache nicht.

## Haltung und Positionierung
| Begriff | Definition für performanceboost | Auf der Website | Quellenlage |
|---|---|---|---|
| **AI First** | Planungsprinzip: Ein Ablauf wird so entworfen, als wären Automatisierung und KI von Anfang an Teil der Architektur. Danach wird pro Schritt entschieden, was Regel, KI oder Mensch übernimmt. AI First heisst nicht «überall KI». | Als Haltung umschreiben: «von Anfang an mitgedacht», «Teil der Architektur». Den Begriff selten verwenden | In den Quellen nicht definiert. PwC beschreibt sinngemäss Redesign statt KI auf bestehende Prozesse (PwC S. 21) |
| **AI Native** | Ein System oder Unternehmen, das von Grund auf um KI herum gebaut wurde und ohne sie nicht funktionieren würde. | Nicht für Kundenlösungen verwenden. Höchstens für den eigenen Betrieb, und auch dort zurückhaltend | Nicht definiert, Marketingbegriff |
| **AI-First-Scaling-Partner** | Positionierung seit 14.11.2026 (ersetzt «Business Performance Partner»): Wir entwerfen, bauen und betreiben mit Kunden Systeme für Marketing, Vertrieb und Prozesse, die auf KI aufbauen, damit Unternehmen wachsen können, ohne dass der Aufwand im gleichen Mass mitwächst. Weder Agentur (liefert Kampagnen) noch klassische Beratung (liefert Konzepte). | «AI-First-Scaling-Partner für Schweizer KMU» | Perspektive in Anlehnung an ascendx.ventures (Venture Builder, «KI im Kern»), eigene Formulierung |
| **Agent-Washing** | Bestehende Automatisierung oder klassische Empfehlungssysteme werden als «Agent» vermarktet. | Intern. Auf der Website als Haltung: «Eine Integration ist kein Agent» | Beobachtet in AIB S. 4, Omnibound; Warnung MMA S. 8 |
| **AI Theater** | KI-Einsatz, der beeindruckt, aber keinen messbaren Wert schafft. | Intern. Sinngemäss: «KI, die vorgeführt, aber nicht genutzt wird» | Omnibound S. 27 |

## Stufen der Automatisierung (Kernmodell)
| Begriff | Definition | Auf der Website | Quellenlage |
|---|---|---|---|
| **Deterministische (regelbasierte) Automatisierung** | Fester Ablauf: Auslöser, Bedingungen, Aktionen. Gleicher Input, gleiches Ergebnis. Workflow, Integration, Trigger. | «feste Regel», «Workflow», «Automatisierung» | Funke Kap. 1, 4; Thapa S. 3 (E-Mail-Trigger «handelt, denkt aber nicht») |
| **KI-unterstützte Verarbeitung** (AI-assisted automation) | Ein Modell liest, klassifiziert, extrahiert, fasst zusammen oder entwirft innerhalb eines festen Ablaufs. Das Ergebnis ist ein Vorschlag mit Begründung. | «KI ordnet ein», «KI entwirft», «ein Modell liest» | Funke Kap. 3 S. 8 (Regel als Rahmen, KI im Zweig); Thapa S. 3 (Augmentation) |
| **Agentischer Workflow** | Fester Rahmen (Ziel, erlaubte Werkzeuge, Schrittbudget, Abbruchregeln), in dem ein Modell mehrere Schritte selbst wählt: Informationen holen, prüfen, Entwurf schreiben. | «agentischer Ablauf», «Agent im Ablauf» | Thapa S. 3–4 (ReAct-Schleife mit Schrittbudget); MMA S. 14 |
| **KI-Agent** | Software, die ein Ziel in Schritte zerlegt, dafür Werkzeuge nutzt, das Ergebnis beobachtet und den nächsten Schritt wählt (Wahrnehmen, Abwägen, Handeln, Prüfen). Arbeitet mit eigenem Zugang und eng gefassten Rechten. | «KI-Agent», «Agent» | Thapa S. 3 schärfste Abgrenzung. **Konflikt:** MMA S. 6 sehr breit (inkl. Siri), Mehta et al. als RL-Policy. Wir folgen Thapa |
| **Agent mit begrenztem Handlungsspielraum** | Agent darf definierte Aktionen selbst ausführen, aber nur wenn sie umkehrbar sind, eine geringe Fehlerfolge haben und innerhalb fester Limits liegen. | «innerhalb fester Grenzen», «selbst ausführen darf er nur …» | PwC S. 38 (Fehlerfolge × Umkehrbarkeit, gestufte Autonomie) |
| **Menschliche Freigabe** | Alles, was nach aussen geht, Geld kostet, Daten löscht oder Kunden direkt betrifft, gibt ein Mensch frei. Wiederkehrende Standardtexte können einmal als Vorlage freigegeben werden. | «gibt ein Mensch frei», «nach Freigabe» | Konsens aller Quellen; Funke Kap. 5 S. 45–47 |

**Konflikt Autonomiestufen:** Die Quellen nutzen drei Stufen (Thapa), fünf (MMA, nach Marketing AI Institute), eigene Reifestufen (BCG, Omnibound) oder implizite Stufen (Funke). Es gibt keinen Standard. performanceboost verwendet die fünf Stufen oben, weil sie Technik (Regel, Modell, Agent) und Entscheidungsrecht (Freigabe) trennen. **Konflikt «Augmentation»:** bei Thapa unterste Stufe, bei Omnibound das Ziel. Wir verwenden den Begriff nicht.

## Agenten und Orchestrierung
| Begriff | Definition | Auf der Website | Quellenlage |
|---|---|---|---|
| **Agentic AI** | Oberbegriff für Systeme aus Sprachmodellen, Werkzeugen und Kontrollschleifen, die Aufgaben über mehrere Schritte bearbeiten. Mehr als Textgenerierung, weniger als Autonomie ohne Aufsicht. | Selten, eher «KI-Agenten». Im Claim als «agentic» | PwC S. 3 schliesst Menschen bei Urteilen ein; CMA S. 2 vage |
| **Agentic Marketing / Agentic Sales / Agentic Processes** | Markenbegriffe für die drei Bereiche: Abläufe in Marketing, Vertrieb und Administration, die von Anfang an für Regeln, KI und Agenten entworfen sind, auf gemeinsamer Datenbasis und mit festgelegten Freigaben. **Nicht** «autonomes Marketing». | Bereichsnamen, unverändert | Nicht einheitlich definiert. BCG verwendet «Agentic Marketing Transformation» ohne Definition (S. 3) |
| **Multi-Agenten-System** | Mehrere spezialisierte Agenten mit verteilten Aufgaben, die über einen gemeinsamen Zustand oder einen Orchestrator zusammenarbeiten. Für KMU selten nötig: Ein Workflow mit einzelnen agentischen Schritten ist meist verlässlicher und günstiger. | Nur wo nötig erwähnen, nie als Verkaufsargument | Mehta et al. S. 5–8 (konzeptionell, Simulation); Thapa S. 7 (Zukunftsarbeit); MMA S. 28 (Governance-Risiko) |
| **Workflow-Orchestrierung** | Deterministische Steuerung eines Ablaufs über Systeme hinweg: Reihenfolge, Übergaben, Fehlerpfade, Wiederholungen. Bei uns mit Automatisierungsplattformen wie n8n oder Windmill. | «Ablaufsteuerung», «Workflow» | Funke Kap. 6 (Orchestrierung vs. Integration); MMA S. 14 |
| **Agenten-Orchestrierung** | Steuerschicht, die Agenten Aufgaben zuteilt, Übergaben und Konflikte regelt und festhält, was jeder Agent darf. | Selten. «Steuerung der Agenten» | PwC S. 31; **Konflikt:** MMA nutzt «Orchestrator» für beides (S. 14, S. 29), BCG «Schwarm» (S. 11). Wir trennen strikt |
| **Tool Calling (Werkzeugaufruf)** | Ein Modell ruft definierte Funktionen auf (CRM lesen, Termin vorschlagen, Datensatz anlegen). Schmale, typisierte Werkzeuge mit Validierung sind verlässlicher als ein «Alles-Werkzeug». | «Werkzeuge», «Zugriff auf CRM und Website» | Thapa S. 4 (Tool-Design-Prinzipien) |
| **Retrieval-Augmented Generation (RAG)** | Das Modell beantwortet oder schreibt auf Basis freigegebener Quellen (Produktdaten, Preise, FAQ, Richtlinien), die zur Anfrage abgerufen werden. Reduziert Halluzinationen, verhindert sie nicht. | «aus Ihren freigegebenen Unterlagen», «mit Quellenbezug» | Bias & Hallucinations S. 13–15 (Freigabe blockieren, wenn Belege fehlen) |
| **Context Engineering (Kontextgestaltung)** | Gezielte Auswahl dessen, was ein Modell für eine Aufgabe sieht: Anweisungen, Markenregeln, Kundendaten, Beispiele, Werkzeuge. Entscheidet mehr über die Qualität als das Modell selbst. | «Unternehmenskontext», «Wissensbasis mit Markenregeln, Angeboten und Kriterien» | In den Quellen nicht so benannt. Inhaltlich BCG «Brand Intelligence Layer» (S. 11). Wir verwenden den BCG-Begriff nicht |
| **Memory (Gedächtnis)** | Was ein Agent über eine Aufgabe hinaus behält (frühere Fälle, Präferenzen). Bei uns bewusst sparsam und dokumentiert, wegen Datenschutz. | Kaum verwenden | Thapa S. 4 (bewusst ohne), Mehta S. 2 |

## Aufsicht, Governance, Betrieb
| Begriff | Definition | Auf der Website | Quellenlage |
|---|---|---|---|
| **Human-in-the-Loop** | Ein Mensch prüft und gibt jeden Fall frei, bevor gehandelt wird. Standard für Aussenkommunikation, Geld, Löschungen, heikle Entscheide. | «Ihr Team gibt frei» | PwC S. 31, 38; Funke Kap. 5 |
| **Human-on-the-Loop** | Das System handelt innerhalb von Grenzen selbst. Ein Mensch überwacht über Protokolle, Stichproben und Alarme und kann jederzeit stoppen. Nur für umkehrbare Aufgaben mit geringer Fehlerfolge. | «Ihr Team überwacht und kann jederzeit eingreifen» | **In keiner Quelle verwendet** (Notizen A). Branchenbegriff, Definition durch performanceboost |
| **Autonome Entscheidung** | Ein System entscheidet ohne Freigabe im Einzelfall. Bei uns nur innerhalb vorher festgelegter Grenzen, nie für Strategie, Positionierung, Budgethoheit, Preise, Personal- oder Kreditentscheide. | «selbst ausführen innerhalb fester Grenzen», nie «autonom» als Versprechen | MMA S. 17, 22 (in der Praxis meist nur Ausführung beim Agenten); Funke Kap. 5 S. 45 |
| **Freigabestufen (gestufte Autonomie)** | Ein Agent startet im Vorschlagsmodus. Mehr Spielraum gibt es erst, wenn die Stufe davor nachweislich hält: Vorschlag, Freigabe jedes Falls, Stichproben, Ausführung in Grenzen. | «Mehr Spielraum erst, wenn …» | PwC S. 38; Funke Kap. 5 S. 17–22 (Shadow-Modus, Limited Rollout) |
| **Shadow-Modus** | Das System schlägt im laufenden Betrieb vor, ein Mensch entscheidet wie bisher. Vorschlag und Entscheid werden verglichen. | «Testphase, in der der Agent nur vorschlägt» | Funke Kap. 5 S. 17–19 |
| **AI Governance** | Regeln, Rollen und Kontrollen für den KI-Einsatz: Entscheidungsrechte, Berechtigungen, Datenregeln (Schweizer DSG), Freigaben, Protokolle, Tests, Monitoring, Vorfallbehandlung, Schulung. Operativ, nicht nur ein Dokument. | Seite «Governance» | MMA S. 29–31; Bias & Hallucinations S. 18–22; Listening S. 7–8, 20–21 |
| **Guardrails (Leitplanken)** | Harte Grenzen ausserhalb des Sprachmodells: erlaubte Aktionen, Limits, Pflichtprüfungen, Sperrlisten. Nicht nur Anweisungen im Prompt. | «feste Grenzen», «Limits» | Thapa S. 6 («strategische Halluzination» braucht Constraints ausserhalb des Modells) |
| **Agent Evaluation** | Prüfung eines Agenten vor und während des Betriebs mit echten Fällen, deren richtiges Ergebnis bekannt ist (Testset). Dimensionen: Aufgabe erfüllt, Ergebnisqualität, Regeleinhaltung, Robustheit, Kosten und Tempo. | «Test mit echten Fällen aus Ihrem Alltag» | Thapa S. 4, 6; Funke Kap. 5 (Goldstandard von zwei Personen beschriftet) |
| **Observability** | Nachvollziehbarkeit im Betrieb: Protokoll jeder Aktion (Zeit, Eingaben, Werkzeuge, Ergebnis), Kennzahlen pro Agent (Fehler- und Eskalationsquote, Kosten pro Fall, Laufzeit), Alarme. | «jede Aktion protokolliert», «Kosten und Fehlerquote sichtbar» | PwC S. 38 (Telemetrie); Thapa S. 6 |
| **Schatten-KI** | Mitarbeitende nutzen nicht freigegebene KI-Tools, oft mit Kundendaten, weil Richtlinien und freigegebene Werkzeuge fehlen. | «Mitarbeitende nutzen KI, aber jede Person auf ihre Weise» | Funke Kap. 4 S. 6 |
| **Halluzination** | Plausible, aber falsche Ausgabe eines Sprachmodells. Im Funktionsprinzip angelegt, kein vorübergehender Fehler. | «Ein Modell kann plausibel klingende Fehler machen» | Bias & Hallucinations S. 11, 15 |

## Betriebsfunktionen
| Begriff | Definition | Auf der Website | Quellenlage |
|---|---|---|---|
| **Revenue Operations (RevOps)** | Marketing, Vertrieb und Kundenbetreuung arbeiten mit denselben Definitionen, Daten, Abläufen und Kennzahlen. Für Agenten im Vertrieb die Voraussetzung. | Unverändert, mit Erklärung | B2B S. 14–16 (Multi-Agent-RevOps nach Ramsaran, Sekundärquelle) |
| **Marketing Operations** | Betrieb des Marketings als System: Daten, Tools, Abläufe, Messung, Freigaben. | Kaum verwenden, inhaltlich unter Agentic Marketing | – |
| **Sales Operations** | Betrieb des Vertriebs: CRM, Phasen, Zuweisung, Forecast, Datenpflege. | Kaum verwenden, inhaltlich unter Agentic Sales | Sales Force S. 9, 14 |
| **Closed Loop (Regelkreis)** | Ergebnisse (Anfragen, Aufträge, Margen) fliessen zurück in Planung, Kampagnen und Bewertung. | «Rückkopplung», «Daten fliessen zurück» | Mehta S. 9; PwC Value Loops S. 11; Omnibound S. 11 |
| **GEO (Generative Engine Optimization)** | Inhalte und strukturierte Daten so aufbereiten, dass KI-Assistenten ein Angebot korrekt verstehen und wiedergeben. Keine Garantie für Nennung. | Unverändert | PwC S. 14, 34; BCG S. 5–6. **Konflikt AEO:** BCG = «Agentic Engine Optimization», sonst «Answer Engine Optimization». Wir verwenden AEO nicht |

## Sprachregeln, die daraus folgen
1. Nie «autonomes Marketing», «vollautomatisch», «selbstlernend» oder «ohne menschliches Zutun» als Leistungsversprechen.
2. Eine Integration oder ein fester Workflow heisst nie «Agent».
3. Wo ein Agent etwas selbst ausführt, steht dabei, welche Grenze gilt.
4. «KI» ist kein Adjektiv vor jeder Leistung. Die Rolle von KI zeigt sich in der Beschreibung des Ablaufs.
5. Fachbegriffe wie Human-on-the-Loop, RAG oder Context Engineering erscheinen auf der Website höchstens in FAQs oder Fachartikeln und immer mit deutscher Erklärung.
