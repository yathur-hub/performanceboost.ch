# 07 – QA Report

Stand: 05.11.2026 · Branch `feature/business-performance-repositioning` · Geprüft: lokaler Produktions-Build (`npm run build` + `vite preview`) in Chrome, Desktop (1512 px) und Mobile (390 px, iframe)

## Automatisierte Prüfungen

| Prüfung | Ergebnis |
|---|---|
| `npm run lint` (tsc --noEmit) | ✅ ohne Fehler |
| `npm test` (vitest) | ✅ 26/26 (16 Lead, 3 Problem-Finder, 7 neue Leistungsfeld-/Routing-Tests) |
| `npm run build` inkl. Prerender | ✅ 49 Seiten vorgerendert, 0 übersprungen; Startseite jetzt im Roh-HTML |
| Sitemap | ✅ 47 URLs (40 bisher + 7 neu; Impressum/Datenschutz bewusst ausgenommen) |
| Linkprüfung über alle 49 HTML-Dateien | ✅ keine internen Links ins Leere (Ziel = Datei oder Redirect) |
| H1 pro Seite | ✅ genau eins auf allen 49 Seiten |
| Canonical | ✅ selbstreferenzierend auf allen Seiten |
| Meta-Description | ✅ vorhanden (≥ 50 Zeichen) auf allen Seiten |
| Markenschreibweise | ✅ keine «Performance Boost», «PerformanceBoost», «Performance-Boost»; Grossschreibung per CSS bei Markennennung entfernt (4 Stellen) |
| Schweizer Rechtschreibung | ✅ kein «ß» im sichtbaren Text |
| Strukturierte Daten | ✅ Start: WebSite + ProfessionalService; Hubs: CollectionPage, ItemList, BreadcrumbList, FAQPage; Leistungen: Service, BreadcrumbList, FAQPage; Lösungen: WebPage, BreadcrumbList, FAQPage |

Interne Verlinkung (eingehende Links im statischen HTML): `marketing-automation` und `revenue-operations` vorher 0, jetzt auf jeder Seite über Footer und Hubs verlinkt. Branchenseiten vorher 1, jetzt ≥ 3. Ratgeber-Artikel vorher nur per JavaScript, jetzt echte Links.

## Browser-Tests

| Test | Ergebnis |
|---|---|
| Startseite Desktop: Hero, Herausforderungen, Ansatz + Säulen, Leistungsfelder, Vorgehen, Referenzen, Über uns, FAQ, CTA | ✅ visuell geprüft |
| Hub `/leistungen/technologie-automation` | ✅ Breadcrumb, Definition, Ausgangslage/Ziele, Leistungen, Themen, Kundenstimme, Checks, Lösung, FAQ, andere Felder |
| Mega-Menü Desktop | ✅ gruppiert nach Feldern; Titel nach Korrektur nicht mehr abgeschnitten |
| `/leistungen` Übersicht | ✅ neue H1, gegliedert nach Feldern |
| Mobile 390 px: Startseite, Growth-Hub, Referenzen | ✅ kein horizontales Scrollen (`scrollWidth = 390`) |
| CTA «Potenzial besprechen» (Hero) | ✅ öffnet Kontaktformular; `cta_click` mit `cta_location=home_hero`, `cta_target=kontakt`, `page_slug=home` im dataLayer |
| Formularfelder | ✅ unverändert (`firstName, lastName, company, annualRevenue, email, phone, message, hp_url`) – kein Absenden, keine Testanfrage ausgelöst |
| SPA-Navigation Hub → Leistung | ✅ URL, Title, H1, Canonical aktualisiert; `virtual_page_view` genau einmal; «Passende Leistungen» zeigt 3 kontextbezogene Leistungen |

## Bekannte Einschränkungen

1. **Kein Preview-Deployment geprüft:** Der Branch ist lokal; ein Cloudflare-Branch-Preview entsteht erst nach dem Push.
2. **Core Web Vitals** nicht gemessen (kein Lighthouse in dieser Sitzung). Startseite wurde kürzer (Rechner-Bundle nur noch auf dem Growth-Hub, lazy geladen); das Prerendering verbessert LCP für Crawler, für Nutzer ersetzt `createRoot` den Inhalt weiterhin vollständig.
3. **Unbekannte URLs** liefern kurz den Startseiten-Inhalt (SPA-Fallback), bis React die 404-Ansicht rendert. Statuscode war schon vorher 200.
4. **Tablet-Breite** nicht separat geprüft; Layouts nutzen die bestehenden Tailwind-Breakpoints.
5. **Search Console/GA4** vor/nach-Vergleich ausstehend (Datenbasis seit 29.10.2026 zu klein).

## Vor dem Produktiv-Deployment

- [ ] Inhalte durch Inhaber freigeben (siehe 06, offene Punkte 3)
- [ ] Branch pushen, Cloudflare-Preview prüfen (Formular-Absenden nur mit `is_test`-Kennzeichnung oder gar nicht)
- [ ] PR mergen → Produktion
- [ ] Cloudflare: verwaltete robots.txt anpassen (KI-Crawler erlauben)
- [ ] Search Console: Sitemap neu einreichen, URL-Prüfung Startseite + Hubs
- [ ] Rich-Results-Test für Startseite, einen Hub, eine Leistungsseite
