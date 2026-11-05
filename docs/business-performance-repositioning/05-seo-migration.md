# 05 – SEO Migration Plan

Stand: 05.11.2026 · Status: **Konzept, wartet auf Freigabe**

## 1. Ausgangslage (Daten)

Google Search Console, Property `sc-domain:performanceboost.ch`, verfügbar ab 29.10.2026 bis 03.11.2026:

| Kennzahl | Wert |
|---|---|
| Klicks | 0 |
| Impressionen | 32 |
| Ø Position | 75,7 |
| Seiten mit Impressionen | `/leistungen/marketing-automation` (30), `/loesungen/logistik-transport`, `/loesungen/finanzdienstleister`, `/loesungen/vorsorgeberatung` (je 1) |
| Suchanfragen | «performance marketing automation» (17), «marketing automation beratung» (3), «vertriebsautomatisierung» (2), «marketing automation lugano/luzern/berater», «automatisierung kosten», «vorsorgeberatung», «agence de marketing automation» (je 1) |

GA4-Daten (organische Landingpages) konnten in dieser Sitzung nicht abgerufen werden: `ga-mcp-full` braucht ein neues Login, `analytics-mcp` hat keine Berechtigung auf Property 550634782. Nachholen mit `/ga-mcp-full:auth-login`.

**Bewertung:** Es gibt keine Rankings, die verloren gehen könnten. Das einzige frühe Signal betrifft Automation/Vertriebsautomatisierung – also genau die Themen, die die neue Positionierung stärkt. Die Umstellung ist aus SEO-Sicht eine Chance, kein Risiko. Trotzdem gelten die Regeln unten, weil URLs in Kampagnen, im Problem-Finder, in E-Mails und auf LinkedIn verwendet werden.

## 2. URL-Mapping und Redirects

- **Keine bestehende URL ändert sich.** Es werden keine neuen 301-Redirects benötigt.
- Bestehende Redirects in `public/_redirects` bleiben (alle einstufig, Ziel 200, keine Ketten):
  `/about`, `/team` → `/ueber-uns` · `/contact` → `/kontakt` · `/services` → `/leistungen` · `/blog` → `/ressourcen`
- Ergänzung (präventiv, häufig geratene Adressen): `/references` und `/referenz` → `/referenzen` (301), `/solutions` → `/loesungen` (301). Nur, wenn `/referenzen` live ist.
- Neue URLs: 7 (siehe 03). Alle in `indexablePaths()` → Sitemap und Prerendering automatisch.

## 3. Canonicals

- Jede Seite selbstreferenzierend ohne Slash am Ende (heute bereits so via `SEOHead`). Neue Seiten erhalten dieselbe Logik.
- `/x/` → 307 `/x` (Cloudflare, bereits so). Kein Handlungsbedarf.
- Hubs und Detailseiten haben unterschiedliche Suchintentionen (Hub = Feld/Überblick, Detail = konkrete Leistung). Keine Canonicals von Detail auf Hub.

## 4. Metadaten (Entwurf, Sie-Form)

| URL | Title (≤ 60 Zeichen, + « \| performanceboost») | Meta-Description (≤ 155 Zeichen) |
|---|---|---|
| `/` | Business Performance Partner für Schweizer KMU | Strategie, Technologie und Wachstum aus einer Hand: Wir verbessern Marketing, Vertrieb und Abläufe von Schweizer KMU. Pragmatisch, datenbasiert, persönlich. |
| `/leistungen` | Leistungen: Strategie, Technologie, Wachstum, Vertrieb | Von der Wachstumsstrategie über KI und Automatisierung bis zu Kampagnen und CRM: alle Leistungen von performanceboost im Überblick. |
| `/leistungen/strategie` | Strategie & Beratung für KMU | Wir analysieren, wo Ihr Unternehmen Potenzial liegen lässt, setzen Prioritäten und entwickeln Wachstums- und Digitalstrategien, die sich umsetzen lassen. |
| `/leistungen/technologie-automation` | KI, Automatisierung & Systemintegration für KMU | Wir verbinden Ihre Systeme, automatisieren wiederkehrende Abläufe und setzen KI dort ein, wo sie Ihrem Team nachweisbar Arbeit abnimmt. |
| `/leistungen/wachstum-marketing` | Performance Marketing, SEO & Conversion für KMU | Kampagnen auf Google, Meta und LinkedIn, SEO, Landingpages und Conversion-Optimierung, abgestimmt auf Ihre Umsatzziele statt auf Klicks. |
| `/leistungen/sales-revenue-operations` | CRM, Lead Management & Revenue Operations | Wir verbinden Marketing und Vertrieb: CRM, Lead-Bewertung, Nachfassen und eine Pipeline, die zeigt, wo Umsatz entsteht und wo er verloren geht. |
| `/loesungen` | Lösungen nach Herausforderung und Branche | Mehr Kunden gewinnen, Vertrieb verbessern, Abläufe automatisieren: Finden Sie den passenden Einstieg für Ihre Situation oder Ihre Branche. |
| `/loesungen/prozessautomatisierung` | Geschäftsprozesse automatisieren für KMU | Doppelte Dateneingabe, Excel-Listen, manuelle Übergaben: Wir finden automatisierbare Abläufe und setzen sie mit Ihren bestehenden Tools um. |
| `/loesungen/vertrieb-optimieren` | Vertriebsprozesse optimieren | Anfragen bleiben liegen, Nachfassen hängt an Einzelnen, die Pipeline ist unklar? Wir bringen Struktur in Lead-Management, CRM und Vertrieb. |
| `/referenzen` | Referenzen & Kundenstimmen | Was Schweizer Unternehmerinnen und Unternehmer über die Zusammenarbeit mit performanceboost sagen. |
| `/ueber-uns` | Über uns: Yathur Nathan & performanceboost | performanceboost ist der Business Performance Partner für Schweizer KMU, inhabergeführt aus Graubünden. Strategie und Umsetzung aus einer Hand. |
| `/skills` | Selbst-Checks & Rechner für KMU | 30 kostenlose Checks und Rechner zu Strategie, Vertrieb, CRM, Automatisierung, KI und Daten. Finden Sie heraus, wo Ihr grösster Hebel liegt. |

Detailseiten (12 Leistungen, Branchen, Finanz, Artikel): Titles bleiben, da sie spezifische Suchintentionen bedienen. Einzige Ausnahme: `ai-automation` Description um Prozess-/Backoffice-Einsatz ergänzen, falls Inhalte freigegeben.

## 5. Strukturierte Daten

| Seite | Schema | Bemerkung |
|---|---|---|
| `/` | `Organization` + `ProfessionalService` (Name, URL, Logo, Adresse, Telefon, E-Mail, `areaServed: CH`, `founder`, `sameAs` LinkedIn, `knowsAbout`) | neu |
| Hubs | `CollectionPage` + `ItemList` der Detailleistungen + `BreadcrumbList` + `FAQPage` | neu |
| Leistungsseiten | bestehendes `Service` + neu `BreadcrumbList` + `FAQPage` (FAQ sind sichtbar auf der Seite) | ergänzt |
| `/referenzen` | `CollectionPage`. **Kein** `Review`/`AggregateRating`: Google erlaubt selbst veröffentlichte Bewertungen für das eigene Unternehmen nicht als Rich Result. | neu |
| Lösungsseiten neu | `WebPage` + `BreadcrumbList` + `FAQPage` | neu |

## 6. Interne Linkstruktur

- Startseite → 4 Hubs, `/loesungen`, `/referenzen`, ausgewählte Detailseiten.
- Hub → alle zugehörigen Detailseiten (echte Links), passende Checks, Artikel, Lösungen; Querverweis auf die anderen Hubs.
- Detailseite → Breadcrumb zum Hub, Modul «Passende Leistungen» (2–3, aus Datenquelle), passende Lösung/Branche.
- Footer → alle 12 Leistungen (behebt die zwei verwaisten Seiten), Lösungen, Unternehmen.
- Alle Karten mit `<a href>` (Link-Komponente), damit Prerender-HTML die Verbindungen enthält.

## 7. GEO (Generative Engine Optimization)

1. **Startseite vorrendern** und `Organization`-Schema: eindeutige Unternehmensidentität (Wer, Was, Wo, für Wen).
2. **Definitionsabsätze** zu Beginn jedes Hubs: 2–3 Sätze, was die Leistung ist, für wen, mit welchem Ergebnis. Direkt zitierbar.
3. **FAQ** mit konkreten, kurzen Antworten (keine Werbesprache), als `FAQPage` ausgezeichnet.
4. **Nachvollziehbare Expertise:** Über uns mit Werdegang und belegbaren Projekten; Referenzen mit Branche und Aufgabe.
5. **robots.txt-Entscheid (offen):** Cloudflare «Managed robots.txt» blockiert u. a. GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, meta-externalagent. Suchbezogene Bots (Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, PerplexityBot) sind **nicht** blockiert. Empfehlung: Wenn KI-Sichtbarkeit Ziel ist, im Cloudflare-Dashboard die verwaltete robots.txt deaktivieren oder zumindest Google-Extended, Applebot-Extended und GPTBot erlauben. Das ist eine Einstellung im Cloudflare-Konto, nicht im Repo, und braucht Ihre Entscheidung.
6. Optional: `/llms.txt` mit Kurzprofil und Hauptseiten. Geringer Aufwand, Nutzen unbelegt; nur als Ergänzung.

## 8. Risikobewertung

| Risiko | Wahrscheinlichkeit | Auswirkung | Gegenmassnahme |
|---|---|---|---|
| Rankingverlust durch Umbau | sehr tief (keine Rankings) | tief | URLs bleiben, Titles der Detailseiten bleiben |
| Kannibalisierung Hub ↔ Detailseite | mittel | mittel | Hub = Überblick + Definition + Auswahl, Detail = Leistungstiefe; unterschiedliche Titles/H1; Hubs verlinken klar auf Details |
| Dünne neue Seiten | mittel | mittel | Nur 2 neue Lösungsseiten; Mindestumfang ~700 Wörter mit FAQ; nur belegbare Inhalte |
| Prerender-Fehler Startseite | tief | hoch | Build-Check: Startseite muss vorgerendert werden, sonst Build-Fehler; SPA-Fallback separat |
| Broken Links | tief | mittel | Linkprüfung über alle vorgerenderten Seiten im QA |

## 9. Validierung

1. `npm run build`: Sitemap enthält 48 URLs, alle vorgerendert.
2. Skript: jede vorgerenderte Seite hat genau ein H1, Title, Description, Canonical = eigene URL.
3. Linkprüfung: jede interne `href` in `dist/` zeigt auf eine existierende Datei oder einen Redirect.
4. Rich-Results-Test für Startseite, einen Hub, eine Leistungsseite.
5. Nach Go-live: Sitemap in Search Console neu einreichen, URL-Prüfung für Startseite und Hubs, Abdeckung nach 2 und 4 Wochen kontrollieren.
