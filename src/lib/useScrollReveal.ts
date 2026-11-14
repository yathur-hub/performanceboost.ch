/**
 * Scroll-Reveals des Motion-Systems (Varianten in src/index.css, Abschnitt MOTION-SYSTEM).
 *
 * Pro Abschnitt unterhalb des sichtbaren Bereichs wird die Variante nach Inhalt gewählt:
 * - Abschnittsüberschrift (erste h2): maskierter Reveal (.rv-mask), Intro-Text danach (.rv-fade, versetzt)
 * - Karten und Listeneinträge in Rastern: gestaffelt (.rv-item)
 * - Bilder und Figuren: Masken-Reveal (.rv-image)
 * - dunkle CTA-Flächen: Scale-in (.rv-scale)
 * - alles andere: Fade-up des ganzen Abschnitts (.rv-fade)
 * Der Footer gehört dazu. Ausgelassen: der erste Abschnitt (Hero, eigene CSS-Animation), Abschnitte, die schon
 * sichtbar sind (kein Flackern), Dialoge und Bereiche mit eigener JS-Animation (Inline-Opacity).
 *
 * Nachgeladene Seiten (lazy) werden über einen MutationObserver erfasst. Ohne JavaScript und bei
 * reduzierter Bewegung bleibt alles sofort sichtbar, weil die Klassen nur hier gesetzt werden.
 */
import { useEffect } from 'react';

const ITEM_CONTAINERS = ':scope .grid, :scope ol, :scope ul, :scope div:has(> details)';
const DONE = 'data-rv';

function isDarkPanel(el: Element) {
  return el.classList.contains('bg-deep') && /rounded-(3xl|\[2rem\])/.test(el.className);
}

function prepareSection(section: HTMLElement) {
  section.setAttribute(DONE, '');
  let assigned = false;

  const heading = section.querySelector<HTMLElement>('h2');
  if (heading && !heading.closest('.bg-deep')) {
    heading.classList.add('rv-mask');
    const intro = heading.nextElementSibling;
    if (intro && intro.tagName === 'P') intro.classList.add('rv-fade', 'rv-delay-1');
    assigned = true;
  }

  section.querySelectorAll<HTMLElement>(ITEM_CONTAINERS).forEach((container) => {
    if (container.closest('.diagram-enter, .rv-item, [role="dialog"], nav, figure, [data-rv-skip]')) return;
    const kids = Array.from(container.children) as HTMLElement[];
    if (kids.length < 2 || kids.length > 16) return;
    kids.forEach((kid, i) => {
      kid.classList.add('rv-item');
      kid.style.setProperty('--i', String(Math.min(i, 8)));
    });
    assigned = true;
  });

  section.querySelectorAll<HTMLElement>('figure').forEach((fig) => {
    if (fig.closest('.rv-item') || !fig.querySelector('img')) return;
    fig.classList.add('rv-image');
    assigned = true;
  });

  section.querySelectorAll<HTMLElement>('div').forEach((d) => {
    if (isDarkPanel(d) && !d.closest('.rv-item, .rv-scale')) {
      d.classList.add('rv-scale');
      assigned = true;
    }
  });

  // Ohne eigene Elemente: ganzer Abschnitt als Fade-up. Sonst Texte, Links und Buttons kurz nach der Überschrift.
  if (!assigned) {
    section.classList.add('rv-fade');
    return;
  }
  section.querySelectorAll<HTMLElement>('p, dl, a[href], button').forEach((el) => {
    if (el.closest('.rv-item, .rv-fade, .rv-scale, .rv-image, .rv-mask, [role="dialog"], [data-rv-skip]')) return;
    el.classList.add('rv-fade', 'rv-delay-2');
  });
}

const RV_CLASSES = ['rv-fade', 'rv-mask', 'rv-item', 'rv-image', 'rv-scale', 'rv-delay-1', 'rv-delay-2'];

/**
 * Nach dem Reveal die Klassen entfernen: Der Endzustand ist identisch mit dem Normalzustand, und die
 * eigenen Hover-Übergänge der Elemente (Farbe, Anheben) greifen danach wieder ohne Verzögerung.
 */
function cleanupLater(target: HTMLElement) {
  window.setTimeout(() => {
    const els = [target, ...Array.from(target.querySelectorAll<HTMLElement>(RV_CLASSES.map((c) => '.' + c).join(',')))];
    els.forEach((el) => {
      el.classList.remove(...RV_CLASSES);
      el.style.removeProperty('--i');
    });
    target.classList.remove('is-visible');
  }, 2000);
}

export function useScrollReveal(routeKey: string) {
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main = document.querySelector('main');
    if (!main) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
          cleanupLater(e.target as HTMLElement);
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    );

    const scan = () => {
      const sections = Array.from(main.querySelectorAll<HTMLElement>('section'));
      const top = sections.filter((s) => !sections.some((o) => o !== s && o.contains(s)));
      const footer = document.getElementById('site-footer');
      const targets = footer ? [...top, footer] : top;
      targets.forEach((section, index) => {
        if (section.hasAttribute(DONE)) return;
        if (index === 0 && section !== footer) {
          section.setAttribute(DONE, '');
          return;
        }
        if (section.closest('[role="dialog"]')) return;
        if (section.matches('[style*="opacity"]') || section.querySelector('[style*="opacity"]')) {
          section.setAttribute(DONE, '');
          return;
        }
        if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
          section.setAttribute(DONE, '');
          return;
        }
        prepareSection(section);
        io.observe(section);
      });
    };

    // Erst nach dem Seitenwechsel scannen (Scroll steht dann oben), danach auf nachgeladene Inhalte reagieren.
    let raf = requestAnimationFrame(() => (raf = requestAnimationFrame(scan)));
    let debounce = 0;
    const mo = new MutationObserver(() => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(scan, 60);
    });
    mo.observe(main, { childList: true, subtree: true });
    const stopMo = window.setTimeout(() => mo.disconnect(), 4000);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(debounce);
      window.clearTimeout(stopMo);
      mo.disconnect();
      io.disconnect();
    };
  }, [routeKey]);
}
