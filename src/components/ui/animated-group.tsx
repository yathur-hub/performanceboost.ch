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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
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
      variants={staggeredChildVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
