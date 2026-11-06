/**
 * Scroll-Einblendungen: Nach jedem Seitenwechsel werden die Abschnitte unterhalb des sichtbaren Bereichs
 * mit .reveal markiert und beim ersten Sichtkontakt eingeblendet; Karten in Rastern und Listen gestaffelt.
 * Bewusst ausgelassen: der erste Abschnitt (Hero, eigene CSS-Animation), Abschnitte, die schon im
 * sichtbaren Bereich liegen (kein Flackern), und Abschnitte mit Framer-Motion-Animationen (Inline-Opacity).
 * Ohne JavaScript bleibt alles sichtbar, weil die Klassen erst hier gesetzt werden.
 */
import { useEffect } from 'react';

const ITEM_CONTAINERS = '.grid, ol, ul';

export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let io: IntersectionObserver | null = null;
    // Nach der Seitenwechsel-Animation (0.45 s) messen, damit die Positionen stimmen.
    const timer = window.setTimeout(() => {
      const main = document.querySelector('main');
      if (!main) return;
      const all = Array.from(main.querySelectorAll<HTMLElement>('section'));
      const top = all.filter((s) => !all.some((o) => o !== s && o.contains(s)));

      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.classList.add('is-visible');
            io?.unobserve(e.target);
          }
        },
        { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
      );

      top.forEach((section, index) => {
        if (index === 0) return;
        if (section.closest('[role="dialog"]')) return;
        if (section.matches('[style*="opacity"]') || section.querySelector('[style*="opacity"]')) return;
        if (section.getBoundingClientRect().top < window.innerHeight * 0.88) return;

        section.classList.add('reveal');
        section.querySelectorAll<HTMLElement>(ITEM_CONTAINERS).forEach((container) => {
          if (container.closest('.diagram-enter') || container.closest('.reveal-item')) return;
          const kids = Array.from(container.children) as HTMLElement[];
          if (kids.length < 2 || kids.length > 16) return;
          kids.forEach((kid, i) => {
            kid.classList.add('reveal-item');
            kid.style.setProperty('--i', String(Math.min(i, 8)));
          });
        });
        io!.observe(section);
      });
    }, 520);

    return () => {
      window.clearTimeout(timer);
      io?.disconnect();
    };
  }, [routeKey]);
}
