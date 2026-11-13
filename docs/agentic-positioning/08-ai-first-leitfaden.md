# AI-First-Leitfaden für alle Website-Texte

Stand 14.11.2026 (Version 2, quellenbasiert). Verbindlich zusammen mit `docs/copywriting-optimization/03-editorial-guidelines.md` und dem Glossar `research/05-terminology-glossary.md`. Fachliche Grundlage: Wissensbasis in `research/`.

## Leitfrage
Wie würden wir Marketing, Vertrieb und Geschäftsprozesse heute gestalten, wenn intelligente Automatisierung und agentische Systeme von Anfang an Teil der Architektur wären?

performanceboost konzipiert, implementiert und optimiert **AI-First-Business-Systeme** für Marketing, Sales und Prozesse. Wir sind keine Agentur, die neuerdings KI anbietet, und kein reiner Agent-Builder. Die Technologie wählen wir nach dem geschäftlichen Nutzen.

## Grundhaltung: KI als Enabler des ganzen Systems
KI ist bei performanceboost kein Zusatz zu einer Leistung, sondern die Grundlage, auf der Marketing, Vertrieb und Prozesse geplant werden. Jede Leistung (Kampagnen, CRM, Tracking, Shop, Schulung) ist ein Teil desselben Systems aus fünf Schichten: Daten und Systeme, Unternehmenskontext, Ablaufsteuerung, KI und Agenten, Aufsicht und Messung (`research/06`, Abschnitt 1). KI wirkt in der vierten Schicht, ihr Nutzen entsteht erst durch die anderen vier. Daraus folgt:
- Keine Leistung wird «mit KI ergänzt». Jede Seite beschreibt, wie die Leistung im System funktioniert und welche Rolle Regel, Modell, Agent und Mensch darin haben.
- Leistungen bleiben konkret und werden weiterhin umgesetzt. Die Architektur verändert, wie sie gebaut, betrieben und gemessen werden.

## Redaktioneller Rahmen (intern, nicht als sechs identische Punkte auf jeder Seite)
1. **Business Outcome:** Welches Ergebnis wird besser (Anfragen, Aufträge, Reaktionszeit, Stunden, Datenqualität)?
2. **Process Design:** Wie muss der Ablauf aussehen, bevor etwas automatisiert wird?
3. **Data & Systems:** Welche Daten, Integrationen und Systeme braucht es (CRM, Werbekonten, Website, ERP, APIs)?
4. **Automation & Intelligence:** Was läuft als feste Regel, was KI-unterstützt, was agentisch?
5. **Human Oversight:** Welche Entscheidungen und Freigaben bleiben beim Menschen?
6. **Measurement & Optimization:** Wie prüfen wir Qualität, Kosten, Tempo und Ergebnis?

## Begriffe fachlich korrekt
| Stufe | Was es ist | Beispiel |
|---|---|---|
| Regelbasierte Automatisierung | Fester Ablauf, immer gleich (Workflow, Trigger, Integration) | Anfrage landet mit Quelle im CRM, Aufgabe wird angelegt |
| KI-unterstützte Verarbeitung | Ein Modell liest, klassifiziert, fasst zusammen, extrahiert oder entwirft. Ergebnis ist ein Vorschlag | Dokument klassifizieren, Felder extrahieren |
| Agentischer Workflow | Mehrere Schritte, in denen ein Modell Werkzeuge nutzt (CRM lesen, Web recherchieren, Entwurf schreiben), in festem Rahmen | Gesprächsvorbereitung aus CRM, Website und bisherigen Kontakten |
| Agent mit begrenztem Handlungsspielraum | Darf definierte Aktionen selbst ausführen, mit eng gefassten Rechten und Limits | Gebotsanpassung innerhalb eines festen Budgetrahmens, nur nach vorher definierten Regeln |
| Menschliche Freigabe | Alles, was nach aussen geht, Geld kostet, Daten löscht oder Kunden direkt betrifft | Versand, Veröffentlichung, Budget, Offerte |

- Eine Integration oder ein Workflow ist **kein** KI-Agent. Nie so bezeichnen. Auch ein Ablauf, der nur prüft und meldet, ist kein Agent (Thapa et al. 2026: Ein Agent nimmt wahr, wägt ab, handelt und prüft das Ergebnis). Wo ein Ablauf Ursachen sucht, Quellen kombiniert und einen begründeten Vorschlag macht, ist «agentischer Ablauf» korrekt.
- **Spielraum nach Fehlerfolge und Umkehrbarkeit:** Selbst ausführen darf ein Agent nur Umkehrbares mit geringer Fehlerfolge, innerhalb fester Limits. Spielraum wächst erst mit belegter Zuverlässigkeit: Shadow-Modus, Freigabe jedes Falls, Stichproben, Ausführung in Grenzen (PwC 2026; Funke 2026).
- **Unternehmenskontext:** Agenten brauchen eine gepflegte Grundlage aus Angeboten, Kriterien, Markenregeln und freigegebenen Quellen. Faktenaussagen nur mit Quellenbezug, sonst keine Freigabe.
- **Prüfung:** Vor dem Start Test mit echten Fällen (Testset), dann Shadow-Modus, im Betrieb Protokolle, Kennzahlen pro Agent (Fehler- und Eskalationsquote, Kosten pro Fall) und Alarme.
- Wo eine Regel zuverlässiger und günstiger ist, empfehlen wir die Regel.
- Governance gehört dazu: Berechtigungen, Datenqualität, Datenschutz (Schweizer DSG), Protokolle, Monitoring, Fehlerbehandlung, Evaluation mit echten Fällen, Kostenkontrolle pro Fall, Eskalation an einen Menschen.

## Glaubwürdigkeit
- **Belegt (eigener Betrieb, darf als Praxis genannt werden):**
  - Website-Anfragen laufen automatisch geprüft ins eigene ERP, die Bestätigung kommt in unter einer Sekunde.
  - Ein Agent recherchiert vor Erstgesprächen.
  - Antwort- und Inhaltsentwürfe gehen erst nach Freigabe hinaus.
  - Das ERP ist selbst gebaut.
  - Gearbeitet wird mit Automatisierungsplattformen (n8n, Windmill), APIs und gängigen Sprachmodellen.
- **Alles andere sind Leistungen oder Beispiele:** Als Leistung formulieren («Wir bauen …», «Wir richten … ein»). Hypothetische Abläufe als Beispiel kennzeichnen («Ein Beispiel: …», «zum Beispiel»). Nie als realisiertes Kundenprojekt darstellen. Keine erfundenen Zahlen oder Resultate.
- Keine vollständige Autonomie versprechen. Automatisch ausgeführte Änderungen nur «innerhalb definierter Grenzen» und «wo technisch und wirtschaftlich sinnvoll».

## Sprache
- Sie-Form, Schweizer Rechtschreibung (ss, nie ß), Guillemets «…».
- AI First zeigt sich in der Denkweise und den beschriebenen Abläufen, nicht in der Häufigkeit von «KI» oder «Agentic». Ein Absatz muss nicht in jedem Satz KI sagen.
- Natürlicher Satzbau, konkret, keine Agenturfloskeln, keine Dreiergruppen, höchstens ein Gedankenstrich pro Absatz, keine dramatischen Doppelpunkte, keine Zukunftsversprechen.
- Fachbegriffe, wo sie sachlich passen: Performance Marketing, CRM, Marketing Automation, Sales Automation, Prozessautomatisierung, KI-Agenten, Agentic AI, agentische Workflows, Lead-Scoring, Attribution, RevOps, GEO.
- Bereichsnamen: «Agentic Marketing», «Agentic Sales», «Agentic Processes». Die übergreifende Seite heisst «Governance».

## Was die Literatur nicht hergibt (nie behaupten)
- Keine Wirkungszahlen aus der Literatur als erwartbare Ergebnisse (Liste in `research/09`, Abschnitt 5). Keine Quelle belegt die Wirkung von LLM-Agenten in KMU.
- Kein «autonomes Marketing», keine Agenten mit Budget-, Strategie- oder Preishoheit, keine Aussenkommunikation ohne Freigabe.
- Keine Emotionserkennung, keine KI-Bewertung von Bewerbenden, keine personalisierten Preise.
- Keine Rechtsaussagen («DSG-konform», «AI-Act-konform») als Pauschalversprechen.
- Lieferfähigkeit offener Punkte gemäss Freigabeliste (`research/09`, Abschnitt 6) nur als Beispiel oder mit Voraussetzung formulieren.

## Feste Grenzen
- Keine Preise, keine Telefonnummer, kein anderer Arbeitgeber oder Agentur als performanceboost.
- Kundenzitate unverändert.
- Keys, Slugs, IDs, URLs, Formularwerte und Leistungstitel (`title` in services.ts) unverändert.
- Leistungen bleiben konkret: Performance Marketing wird weiterhin umgesetzt, CRM weiterhin eingeführt und integriert. AI First verändert die Architektur und Arbeitsweise, nicht die Existenz der Leistung.
