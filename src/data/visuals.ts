/**
 * Eigene Visuals aus der Personal-Brand-Produktion (Ordner «Personal Brand/Web-Bilder», für performanceboost erstellt).
 * Optimierte Kopien liegen unter public/images/visuals/<id>-480.webp und -800.webp; die Originale bleiben unverändert.
 * Auswahl und Begründung: docs/agentic-positioning/03-visuals.md.
 *
 * Alt-Texte geben bei Infografiken den Inhalt wieder (der Text im Bild ist sonst für Screenreader unsichtbar).
 */

export interface BrandVisualSpec {
  /** Seitenverhältnis Breite/Höhe der Kopie (für width/height, verhindert Layoutsprünge). */
  width: number;
  height: number;
  alt: string;
  /** 'scene' = szenische 3D-Illustration ohne Text, 'chart' = Infografik mit Text. */
  kind: 'scene' | 'chart';
}

export const VISUALS = {
  'ursachen-unter-der-oberflaeche': {
    width: 800,
    height: 1000,
    kind: 'scene',
    alt: 'Eine Figur zieht an einem Etikett an der Oberfläche. Darunter verbinden leuchtende Wurzeln ein Zahnrad, ein Dokument und eine Uhr: Die sichtbare Stelle hat ihre Ursachen in Abläufen, Unterlagen und Zeit.',
  },
  'route-zum-ziel': {
    width: 800,
    height: 1000,
    kind: 'scene',
    alt: 'Drei Figuren stehen an einem Geländemodell. Von ihrem Standort führen mehrere Wege weg, einer ist hervorgehoben und führt zum Gipfel.',
  },
  'messluecke-performance-marketing': {
    width: 800,
    height: 578,
    kind: 'chart',
    alt: 'Beleg «Performance Marketing»: Anzeige gesehen – gemessen. Klick – gemessen. Kauf ausgelöst – offen.',
  },
  'reihenfolge-erst-dann-ki': {
    width: 800,
    height: 1000,
    kind: 'chart',
    alt: 'Reihenfolge in vier Schritten: 1 Kriterien, 2 einfache Regel, 3 wöchentliche Durchsicht, 4 erst dann KI.',
  },
  'agent-oder-workflow': {
    width: 800,
    height: 1000,
    kind: 'chart',
    alt: 'Entscheidungsbaum «Agent oder Workflow». Frage 1: Lässt sich der Ablauf als Liste aufschreiben? Ja: fester Workflow, KI nur für einzelne Schritte. Nein: Frage 2: Zu viele Kombinationen, um sie zu programmieren? Nein: Workflow mit Verzweigungen. Ja: Agent, gegen Workflow gegenrechnen. Messgrösse: Kosten pro korrekt erledigtem Fall.',
  },
  'was-zuerst-automatisieren': {
    width: 800,
    height: 1000,
    kind: 'chart',
    alt: 'Matrix «Was zuerst automatisiert wird» nach Häufigkeit und Fehlerkosten. Häufig und geringe Fehlerkosten: zuerst automatisieren. Häufig und hohe Fehlerkosten: automatisieren mit Freigabe. Selten und hohe Fehlerkosten: nicht automatisieren. Selten und geringe Fehlerkosten: von Hand lassen.',
  },
  'autonomie-als-treppe': {
    width: 800,
    height: 1000,
    kind: 'chart',
    alt: 'Treppe mit vier Stufen: lesen, vorschlagen, mit Freigabe schreiben, im Limit selbst handeln. Vor jeder Stufe ein Fragezeichen und die Frage: Was rechtfertigt die nächste Stufe?',
  },
  'kosten-nach-dem-go-live': {
    width: 800,
    height: 1000,
    kind: 'chart',
    alt: 'Was nach dem Go-live kostet. Überwachung: Wer bemerkt einen stillen Ausfall? Zugänge: Wer erneuert Tokens? Änderungen: Wer testet nach einem Update? Kontrolle: Wer prüft die Ergebnisse? Übergabe: Wer übernimmt bei Ausfall? Betrieb pro Jahr: Stunden, Satz, Name.',
  },
  'vier-namen-vor-dem-start': {
    width: 800,
    height: 1000,
    kind: 'chart',
    alt: 'Vier Namen vor dem Start: wer die Stichprobe prüft, wer sofort abstellt, wer bei Fehlern entscheidet und wer bei Abwesenheit vertritt. Kein Name, kein Go-live.',
  },
} as const satisfies Record<string, BrandVisualSpec>;

export type BrandVisualId = keyof typeof VISUALS;
