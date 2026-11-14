/**
 * Eigene Visuals (Infografiken und szenische Illustrationen), responsiv mit srcset, fester Grösse und Lazy Loading.
 * Daten: src/data/visuals.ts. Infografiken bekommen einen hellen Rahmen und eine Bildunterschrift.
 */
import React from 'react';
import { VISUALS, type BrandVisualId } from '../data/visuals';

export function BrandVisual({
  id,
  caption,
  sizes = '(min-width: 1024px) 420px, (min-width: 640px) 60vw, 92vw',
  className = '',
  priority = false,
}: {
  id: BrandVisualId;
  caption?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const v = VISUALS[id];
  return (
    <figure className={`w-full ${className}`}>
      <div className={`rounded-3xl ${v.kind === 'scene' ? 'visual-zoom shadow-[var(--shadow-premium-md)]' : 'shadow-[var(--shadow-premium-sm)]'}`}>
      <img
        src={`/images/visuals/${id}-800.webp`}
        srcSet={`/images/visuals/${id}-480.webp 480w, /images/visuals/${id}-800.webp 800w`}
        sizes={sizes}
        width={v.width}
        height={v.height}
        alt={v.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : undefined}
        className="w-full h-auto rounded-3xl border border-line/80 bg-surface"
      />
      </div>
      {caption && <figcaption className="mt-3 text-xs text-slate-500 leading-relaxed">{caption}</figcaption>}
    </figure>
  );
}
