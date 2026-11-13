# AI-First-Leitfaden für alle Website-Texte

Stand 13.11.2026. Verbindlich für die AI-First-Überarbeitung (PR #21), zusammen mit `docs/copywriting-optimization/03-editorial-guidelines.md`.

## Leitfrage
Wie würden wir Marketing, Vertrieb und Geschäftsprozesse heute gestalten, wenn intelligente Automatisierung und agentische Systeme von Anfang an Teil der Architektur wären?

performanceboost konzipiert, implementiert und optimiert **AI-First-Business-Systeme** für Marketing, Sales und Prozesse. Wir sind keine Agentur, die neuerdings KI anbietet, und kein reiner Agent-Builder. Die Technologie wählen wir nach dem geschäftlichen Nutzen.

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

- Eine Integration oder ein Workflow ist **kein** KI-Agent. Nie so bezeichnen.
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

## Feste Grenzen
- Keine Preise, keine Telefonnummer, kein anderer Arbeitgeber oder Agentur als performanceboost.
- Kundenzitate unverändert.
- Keys, Slugs, IDs, URLs, Formularwerte und Leistungstitel (`title` in services.ts) unverändert.
- Leistungen bleiben konkret: Performance Marketing wird weiterhin umgesetzt, CRM weiterhin eingeführt und integriert. AI First verändert die Architektur und Arbeitsweise, nicht die Existenz der Leistung.
