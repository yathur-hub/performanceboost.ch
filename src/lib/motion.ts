/**
 * Motion-Tokens für JavaScript-Animationen (motion/react). Spiegeln die CSS-Tokens in src/index.css
 * (Abschnitt MOTION-SYSTEM). Werte immer an beiden Stellen gemeinsam ändern.
 * Doku: docs/agentic-positioning/04-motion.md
 */
import type { Variants } from 'motion/react';

/** Hauptkurve für Reveals, Öffnen und Hover: schneller Start, langes weiches Auslaufen. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
/** Für Schliessen und Ausblenden: kurz und kontrolliert. */
export const EASE_EXIT: [number, number, number, number] = [0.4, 0, 1, 1];
export const EASE_IN_OUT: [number, number, number, number] = [0.65, 0, 0.35, 1];

/** Rückwärtskompatibel: bestehende Komponenten nutzen PREMIUM_EASE. */
export const PREMIUM_EASE = EASE_OUT;

/** Dauern in Sekunden (CSS: --dur-*). */
export const DURATIONS = {
  press: 0.12,
  fast: 0.2, // Buttons, Farbwechsel
  link: 0.24,
  card: 0.3,
  accordion: 0.34,
  medium: 0.46, // Menü öffnen, Overlays
  menuExit: 0.3,
  slow: 0.72, // Scroll-Reveals
  deliberate: 1.0, // Hero
};

export const STAGGER = 0.08;

export const MOTION = { EASE_OUT, EASE_EXIT, EASE_IN_OUT, DURATIONS, STAGGER } as const;

/** Seitenübergang für Browser ohne View Transitions (CSS übernimmt sonst). */
export const pageTransitionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.18, ease: EASE_EXIT } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: STAGGER, delayChildren: 0.05 } },
};

export const staggeredChildVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATIONS.medium, ease: EASE_OUT } },
};

/** Overlays und Modals: Hintergrund und Inhalt. */
export const overlayBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.32, ease: EASE_OUT } },
  exit: { opacity: 0, transition: { duration: 0.24, ease: EASE_EXIT } },
};
export const overlayPanel = {
  initial: { opacity: 0, y: 18, scale: 0.985 },
  animate: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATIONS.medium, ease: EASE_OUT } },
  exit: { opacity: 0, y: 10, scale: 0.99, transition: { duration: 0.22, ease: EASE_EXIT } },
};

/** Buttons: kein Hochspringen, nur ein kurzes Press-Feedback. */
export const buttonPressProps = {
  whileTap: { scale: 0.98 },
  transition: { duration: DURATIONS.press, ease: EASE_OUT },
};

/** Karten: kleine, ruhige Anhebung. */
export const hoverLiftProps = {
  whileHover: { y: -3, transition: { duration: DURATIONS.card, ease: EASE_OUT } },
};
