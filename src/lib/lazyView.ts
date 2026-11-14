/**
 * Lazy geladene Seiten ohne Layoutsprung.
 * Wie React.lazy, aber mit `preload()`: Ist das Modul geladen, rendert die Seite sofort (kein Suspense-Platzhalter).
 * Genutzt beim Start (main.tsx lädt die aktuelle Seite vor dem ersten Render), vor jedem Seitenwechsel
 * (App.tsx) und im Leerlauf als Prefetch aller Seiten.
 */
import React, { use } from 'react';

export type LazyView<P> = React.FC<P> & { preload: () => Promise<void> };

export function lazyView<P extends object>(load: () => Promise<{ default: React.ComponentType<P> }>): LazyView<P> {
  let mod: React.ComponentType<P> | undefined;
  let pending: Promise<void> | undefined;
  const preload = () =>
    (pending ??= load().then((m) => {
      mod = m.default;
    }));
  const View = ((props: P) => {
    if (!mod) use(preload());
    return React.createElement(mod as React.ComponentType<P>, props);
  }) as LazyView<P>;
  View.preload = preload;
  return View;
}
