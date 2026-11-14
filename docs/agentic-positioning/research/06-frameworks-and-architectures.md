# 06 Frameworks und Architekturmodelle

Stand 14.11.2026. Eigene Synthese von performanceboost aus den Quellen. Fremde Modelle werden in eigenen Worten beschrieben und nicht als Grafik nachgebaut. Die Website verwendet nur die eigenen Modelle (Abschnitte 1–5). Fremde Modelle werden dort höchstens mit Quellenangabe paraphrasiert.

## 1. Systemarchitektur von performanceboost (fünf Schichten)
Abgeleitet aus PwC (Experience / Orchestration / Enterprise Systems, S. 29–33), BCG (Daten / Brand Intelligence / Agentic Layer / UI, S. 10–11), Thapa (Reasoning / Tool / Data Layer, S. 3–5) und Funke (Integration vs. Orchestrierung, Kap. 6). Für KMU vereinfacht, herstellerunabhängig.

| Schicht | Inhalt | Typische Bausteine bei KMU | Leitfrage |
|---|---|---|---|
| 1 Daten und Systeme | Führendes System pro Datentyp, saubere Felder, Schnittstellen | CRM, Werbekonten, Website und Formulare, Shop, ERP/Buchhaltung, E-Mail | Wo steht welche Information verlässlich? |
| 2 Unternehmenskontext | Was Modelle über das Unternehmen wissen dürfen und müssen | Angebote, Zielkunden-Kriterien, Markenregeln, freigegebene Texte und Quellen, Definitionen (z. B. qualifizierte Anfrage) | Woher weiss ein Agent, was für uns richtig ist? |
| 3 Ablaufsteuerung | Deterministische Workflows mit Fehlerpfaden | Automatisierungsplattformen (n8n, Windmill), Webhooks, geplante Abläufe | Was passiert immer gleich, und was, wenn es schiefgeht? |
| 4 KI und Agenten | Modelle und Agenten in klar abgegrenzten Schritten | Klassifizieren, Extrahieren, Zusammenfassen, Entwerfen, Recherche, agentische Schritte mit Werkzeugen | Wo bringt ein Modell mehr als eine Regel? |
| 5 Aufsicht und Messung | Freigaben, Rechte, Protokolle, Tests, Monitoring, Kosten | Freigabeschritte, eigene Zugänge pro Agent, Testsets, Kennzahlen pro Agent, Alarme | Wer entscheidet, und woran sehen wir, ob es hält? |

**Kernaussage für die Website:** KI wirkt in Schicht 4, ihr Nutzen entsteht aber erst durch die Schichten 1, 2, 3 und 5. Deshalb ist KI bei uns der Enabler des ganzen Systems und kein Zusatz zu einer Leistung.

## 2. Entscheidungsmodell: Regel, Modell oder Agent
Synthese aus Funke (Kap. 4 S. 4: Regeln bei stabilen, strukturierten Abläufen, KI bei unstrukturierten Daten und Ermessensfragen), MMA (S. 14: viele Fälle löst ein einfacher Workflow besser), Thapa (S. 3: Agent erst, wenn Wahrnehmen–Abwägen–Handeln nötig ist).

1. Lässt sich der Schritt als Wenn-dann-Regel aufschreiben? → **Regel**.
2. Muss Text, ein Dokument oder ein Bild gelesen, eingeordnet oder entworfen werden? → **Modell im Workflow**, Ergebnis als Vorschlag.
3. Braucht es mehrere Schritte mit wechselnden Informationsquellen, und lässt sich die Reihenfolge nicht vorab festlegen? → **agentischer Schritt** mit Werkzeugen, Schrittbudget und Abbruchregeln.
4. In jedem Fall: Was geht nach aussen, kostet Geld oder ist schwer umkehrbar? → **Freigabe**.
Heuristik (ohne Beleg, Funke Kap. 1 S. 9): Bei sehr vielen Ausnahmen zuerst den Ablauf vereinheitlichen.

## 3. Wie viel ein Agent selbst darf: Fehlerfolge × Umkehrbarkeit
Nach PwC (S. 38), ergänzt um die Risiko-Eskalation aus AIB (S. 2) und Funke (Kap. 5).

| | Umkehrbar | Schwer umkehrbar |
|---|---|---|
| **Geringe Fehlerfolge** | Ausführen innerhalb fester Limits, Stichproben (Human-on-the-Loop). Beispiel: Suchbegriff ausschliessen, interne Notiz anlegen | Ausführen nur mit Freigabe |
| **Hohe Fehlerfolge** | Vorschlag mit Freigabe jedes Falls | Bleibt beim Menschen. Beispiel: Offerte, Preis, Kündigung, Personalentscheid |

Spielraum wächst nur mit belegter Zuverlässigkeit: Shadow-Modus → Freigabe jedes Falls → Stichproben → Ausführung in Grenzen (Funke Kap. 5 S. 17–22; PwC S. 38).

## 4. Regelkreis pro Bereich
Gemeinsames Grundmuster fast aller Quellen (Mehta S. 9–10, Omnibound S. 11–13, PwC Value Loops S. 11, MMA S. 17): **Planen → Ausführen → Messen → Lernen**. In der Praxis liegt meist nur die Ausführung beim Agenten, Ziel, Planung und Auswertung bleiben bei Menschen (MMA S. 17).

| Bereich | Planen (Mensch, KI bereitet vor) | Ausführen (Regel, KI, Agent) | Messen (automatisch) | Lernen (Mensch entscheidet) |
|---|---|---|---|---|
| Marketing | Zielkunden, Botschaften, Budgetrahmen | Kampagnen, Varianten, Inhalte, Anreicherung | Kosten pro Anfrage und Auftrag, Rückfluss aus CRM | Budget, Botschaften, Regeln anpassen |
| Sales | Kriterien, Phasen, Zuständigkeiten | Vorqualifizierung, Recherche, Entwürfe, Erinnerungen | Reaktionszeit, Phasenwechsel, Abschlussquote | Kriterien und Abläufe nachschärfen |
| Processes | Ablauf, Rechte, Freigaben | Workflows, Dokumentverarbeitung, Ausnahmen | Durchlaufzeit, Fehler- und Eskalationsquote, Kosten pro Fall | Regeln, Anweisungen, Spielraum anpassen |

## 5. Durchgehende Abläufe statt Einzelanwendungen (Value Loops für KMU)
PwC (S. 11–19) beschreibt acht durchgehende Abläufe für Konsumgüter. Für Schweizer KMU relevant und übersetzt:
- **Kampagne bis Auftrag:** Anzeige, Website, Anfrage, CRM, Rückmeldung an die Werbekonten.
- **Anfrage bis Offerte:** Eingang, Einordnung, Recherche, Gespräch, Offerte, Nachfassen.
- **Auftrag bis Rechnung:** Auftragsbestätigung, Leistung, Rechnung, Zahlungsabgleich, Mahnung.
- **Anliegen bis Lösung:** Kundenanfrage, Einordnung, Antwortentwurf, Lösung, Ursache zurück an Prozess oder Angebot.
Leitsatz: Wert entsteht, wenn ein Ablauf von Anfang bis Ende verbunden ist (PwC S. 11, 21; BCG S. 4–5). Einzelne Tools ohne Verbindung bringen wenig.

## 6. Pilot- und Einführungsmethode
Aus Funke Kap. 5 (14-Tage-Pilot, S. 4–23), MMA (S. 36: zuerst intern und risikoarm), Sales Force (S. 15–16), angepasst an LLM-Agenten:
1. **Steckbrief:** Ziel, Kennzahl, Abbruchkriterien, Verantwortliche, Datenquellen, Rechte (kein Schreibzugriff im Test).
2. **Testset:** echte, anonymisierte Fälle mit bekanntem richtigem Ergebnis, möglichst von zwei Personen beurteilt.
3. **Shadow-Modus:** Agent schlägt vor, Mensch entscheidet, Abweichungen werden kategorisiert.
4. **Entscheid:** Go, Go mit Auflagen, Stopp. Kriterien vorher festgelegt.
5. **Betriebsanleitung:** Wer prüft, wer stoppt, wer entscheidet bei Fehlern, wer vertritt.
Funke meint mit 14 Tagen einen **Test**, keinen produktiven Rollout. So auch auf der Website.

## 7. Governance-Bausteine
Synthese aus MMA (S. 29–33), Bias & Hallucinations (S. 10, 13–22), Listening (S. 7–8, 20–21), Funke (Kap. 5 S. 41–48), Thapa (S. 6):
- Entscheidungsrechte und Verantwortliche pro Agent.
- Eigener Zugang pro Agent, minimale Rechte, getrennte Test- und Produktivumgebung.
- Datenregeln nach Schweizer DSG: welche Personendaten an welches Modell und welchen Anbieter, Datenminimierung, Speicherort.
- Quellenbindung für Faktenaussagen (RAG), Freigabe blockieren, wenn Belege fehlen.
- Harte Grenzen ausserhalb des Modells (Limits, Sperrlisten, Pflichtprüfungen), Not-Aus.
- Protokolle jeder Aktion, Kennzahlen pro Agent, Alarme bei Schwellen.
- Vorfallbehandlung: Ausnahme-Warteschlange, Rückgängig machen, Information der Betroffenen.
- Tests vor dem Start und regelmässig im Betrieb.
- Transparenz gegenüber Kunden, wo sie mit KI interagieren. Keine erfundenen Personen.
- Schulung und schriftliche Regeln gegen Schatten-KI.

## 8. Fremde Modelle (nur intern, nicht auf der Website nachbauen)
| Modell | Quelle | Nutzen | Einschränkung |
|---|---|---|---|
| Augmentation / Automation / Autonomisierung × Kampagne / Betrieb | Thapa S. 4 | Begriffsschärfe | Begriff «Augmentation» widersprüchlich verwendet |
| Wahrnehmen–Abwägen–Handeln (PRA), ReAct | Thapa S. 3 | Abgrenzung Agent vs. Automation | – |
| Acht Value Loops, drei Wertebenen | PwC S. 11–21 | Denken in durchgehenden Abläufen | Konsumgüter, Grossunternehmen |
| Autonomie-Matrix Fehlerfolge × Reversibilität | PwC S. 38 | Spielraum begründen | – |
| Agenten-Typen Experience / Orchestration / Worker | PwC S. 33 | Rollen trennen | Microsoft-Produktlogik |
| Vier-Schichten-Stack, Transformations-Illusion | BCG S. 3, 10–11 | Problemaufhänger | Nutzungsbedingungen, nur paraphrasieren |
| M2M-Skala, Autonomie-Realität in fünf Schritten | MMA S. 8, 17 | Erwartungsmanagement | Sekundärquelle Marketing AI Institute |
| Creation–Analytics–Governance (CAG) | Content Marketing SLR S. 16–17 | Content als Kreislauf mit Governance | – |
| Technologie–Organisation–Umfeld (TOE) | B2B S. 7 | Readiness prüfen | – |
| Risiko-Eskalation niedrig / mittel / hoch | AIB S. 2 | abgestufte Reaktion | unbelegte Fallbeispiele |
| 14-Tage-Pilot, Realized ROI | Funke Kap. 5 | Pilotmethodik, ehrliche Wirtschaftlichkeit | vor-LLM, Konzernrollen |
