/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Variants } from 'motion/react';

// Bespoke premium ease-out cubic-bezier curve – reminiscent of luxury SaaS interfaces
export const PREMIUM_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATIONS = {
  fast: 0.2,       // Micro-interactions, hover transitions
  medium: 0.45,    // Standard card reveals, layout shifts
  slow: 0.7,       // Large page sections, visual entryways
  deliberate: 1.0  // Complete stage reveals
};

// Standard Page Transition
export const pageTransitionVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: DURATIONS.medium, 
      ease: PREMIUM_EASE 
    }
  },
  exit: { 
    opacity: 0, 
    y: -8,
    transition: { 
      duration: DURATIONS.fast, 
      ease: PREMIUM_EASE 
    }
  }
};

// Staggered layout reveals for list or grid elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05
    }
  }
};

// Single element within a staggered list reveal
export const staggeredChildVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: PREMIUM_EASE }
  }
};

// Delicate scale + fade-in animation for modal overlaps or key card states
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.medium, ease: PREMIUM_EASE }
  }
};

// Header Sticky Transition Variant
export const navHeaderVariants: Variants = {
  top: { 
    y: 0,
    backgroundColor: 'rgba(246, 246, 246, 0.0)',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 0 0 rgba(0,0,0,0)'
  },
  sticky: { 
    y: 0,
    backgroundColor: 'rgba(246, 246, 246, 0.85)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)',
    borderBottom: '1px solid rgba(226, 232, 240, 0.3)'
  }
};

// Premium Button Press State
export const buttonPressProps = {
  whileTap: { scale: 0.985 },
  whileHover: { y: -1, scale: 1.005 }
};

// Hover Lift effects for product pricing cards or system modules
export const hoverLiftProps = {
  whileHover: { 
    y: -5, 
    transition: { duration: DURATIONS.fast, ease: PREMIUM_EASE } 
  }
};
