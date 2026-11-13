/**
 * Dekorative 3D-Visuals (Brand Assets «3D Visuals», Vol. 1 + 2) im Stil der Hero-Rakete.
 * Rein dekorativ: alt="" + aria-hidden. Varianten 480/960 px in /images/3d, Seitenverhältnis fix gegen Layout-Shift.
 * Zuordnung: ein Leitobjekt pro Leistungsfeld, ein eigenes Objekt pro Leistung (Lead-CTA), siehe VISUAL_BY_*.
 */
import React from 'react';

const ASPECT = {
  square: [480, 480],
  portrait: [320, 480],
  landscape: [480, 320],
} as const;

export const VISUALS = {
  'chess-knight': 'portrait',
  gears: 'square',
  turbine: 'landscape',
  speedometer: 'square',
  compass: 'square',
  'tech-cube': 'square',
  steps: 'square',
  trophy: 'portrait',
  'launch-platform': 'portrait',
  jet: 'landscape',
  'rocket-engine': 'portrait',
  'tech-core': 'square',
  helmet: 'square',
  watch: 'square',
  'ai-chip': 'square',
  server: 'square',
  'f1-car': 'landscape',
  hypercar: 'landscape',
  wheel: 'square',
  motorcycle: 'landscape',
  'robotic-arm': 'portrait',
  train: 'landscape',
  balance: 'square',
  'energy-core': 'portrait',
  satellite: 'landscape',
  'rocket-alt': 'landscape',
  // Vol. 3 Immobilien (Landingpages Erstvermietung / Verkaufsmandate)
  'residential-building': 'square',
  'alpine-chalet': 'square',
  'precision-key': 'square',
} as const satisfies Record<string, keyof typeof ASPECT>;

export type VisualId = keyof typeof VISUALS;

/** Leitobjekt pro Leistungsfeld (Startseite, Hub-Hero). */
export const VISUAL_BY_AREA: Record<string, VisualId> = {
  'ki-im-unternehmen': 'energy-core',
  strategie: 'chess-knight',
  'technologie-automation': 'gears',
  'wachstum-marketing': 'turbine',
  'sales-revenue-operations': 'speedometer',
};

/** Säulen Strategie · Technologie · Wachstum (Startseite). */
export const VISUAL_BY_PILLAR: Record<string, VisualId> = {
  strategy: 'compass',
  technology: 'tech-cube',
  growth: 'steps',
};

/** Eigenes Objekt pro Leistung (Lead-CTA am Seitenende). */
export const VISUAL_BY_SERVICE: Record<string, VisualId> = {
  'growth-strategy': 'compass',
  'demand-generation': 'jet',
  'lead-generation': 'rocket-engine',
  'marketing-automation': 'tech-core',
  'sales-enablement': 'helmet',
  'revenue-operations': 'watch',
  'ai-automation': 'ai-chip',
  'ki-agenten': 'robotic-arm',
  'martech-stack': 'tech-cube',
  'data-analytics': 'server',
  'ecommerce-performance': 'f1-car',
  'dtc-growth-acquisition': 'hypercar',
  'customer-retention': 'wheel',
  'paid-social-ecommerce': 'motorcycle',
};

export const VISUAL_BY_CHALLENGE: Record<string, VisualId> = {
  prozessautomatisierung: 'robotic-arm',
  'vertrieb-optimieren': 'train',
};

export function Visual3D({
  id,
  className = '',
  sizes = '(min-width: 1024px) 320px, 200px',
  shadow = 'light',
  priority = false,
}: {
  id: VisualId;
  className?: string;
  /** CSS-Breite für srcset-Auswahl. */
  sizes?: string;
  shadow?: 'light' | 'dark' | 'none';
  /** Above the fold: eager laden. */
  priority?: boolean;
}) {
  const [w, h] = ASPECT[VISUALS[id]];
  const shadowClass = shadow === 'light' ? 'visual-3d-shadow' : shadow === 'dark' ? 'visual-3d-shadow-dark' : '';
  return (
    <img
      src={`/images/3d/${id}-480.webp`}
      srcSet={`/images/3d/${id}-480.webp ${w}w, /images/3d/${id}-960.webp ${w * 2}w`}
      sizes={sizes}
      width={w}
      height={h}
      alt=""
      aria-hidden="true"
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      className={`visual-3d object-contain select-none pointer-events-none ${shadowClass} ${className}`}
    />
  );
}
