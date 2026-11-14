/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { staggerContainer, staggeredChildVariants } from '../../lib/motion';

interface AnimatedGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGroup({ children, className = '' }: AnimatedGroupProps) {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
}

interface AnimatedChildProps {
  children: React.ReactNode;
  className?: string;
  key?: string | number;
}

export function AnimatedChild({ children, className = '' }: AnimatedChildProps) {
  return (
    <motion.div
      className={className}
    >
      {children}
    </motion.div>
  );
}
