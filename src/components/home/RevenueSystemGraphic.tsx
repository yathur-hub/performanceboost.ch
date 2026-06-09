/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Zap, Target, Settings, Users, TrendingUp } from 'lucide-react';

interface NodeData {
  id: string;
  number: string;
  title: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  position: 'center-top' | 'center-mid' | 'left-lower' | 'right-lower' | 'center-bottom';
  left: number;
  top: number;
  width: number;
  highlight?: boolean;
}

const nodes: NodeData[] = [
  {
    id: 'demand',
    number: '01',
    title: 'Nachfragegenerierung',
    sub: 'Multi-Channel · Paid · Content',
    icon: Zap,
    position: 'center-top',
    left: 118,
    top: 13,
    width: 224,
  },
  {
    id: 'leads',
    number: '02',
    title: 'Lead-Qualifizierung',
    sub: 'Scoring · Nurturing · MQL',
    icon: Target,
    position: 'center-mid',
    left: 118,
    top: 138,
    width: 224,
  },
  {
    id: 'automation',
    number: '03',
    title: 'Marketing & Automation',
    sub: 'CRM · Flows · Sequenzen',
    icon: Settings,
    position: 'left-lower',
    left: 0,
    top: 268,
    width: 220,
  },
  {
    id: 'sales',
    number: '04',
    title: 'Vertrieb',
    sub: 'Enablement · Pipeline · Abschluss',
    icon: Users,
    position: 'right-lower',
    left: 240,
    top: 268,
    width: 220,
  },
  {
    id: 'revenue',
    number: '05',
    title: 'Planbare Revenue',
    sub: 'Forecasting · Attribution · Wachstum',
    icon: TrendingUp,
    position: 'center-bottom',
    left: 118,
    top: 408,
    width: 224,
    highlight: true,
  },
];

const connectionLines = [
  { id: 'l1', d: 'M 230 50 L 230 175', from: 'demand', to: 'leads', delay: 0 },
  { id: 'l2', d: 'M 230 175 L 110 305', from: 'leads', to: 'automation', delay: 0.5 },
  { id: 'l3', d: 'M 230 175 L 350 305', from: 'leads', to: 'sales', delay: 1.0 },
  { id: 'l4', d: 'M 110 305 L 230 445', from: 'automation', to: 'revenue', delay: 1.5 },
  { id: 'l5', d: 'M 350 305 L 230 445', from: 'sales', to: 'revenue', delay: 2.0 },
];

const nodeLineConnections: Record<string, string[]> = {
  demand: ['l1'],
  leads: ['l1', 'l2', 'l3'],
  automation: ['l2', 'l4'],
  sales: ['l3', 'l5'],
  revenue: ['l4', 'l5'],
};

const nodeVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function RevenueSystemGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.15 });
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const isLineActive = (lineId: string) => {
    if (!hoveredNodeId) return false;
    return nodeLineConnections[hoveredNodeId]?.includes(lineId);
  };

  const hasAnyHover = hoveredNodeId !== null;

  return (
    <div
      ref={containerRef}
      className="w-full relative select-none flex justify-center items-center"
      aria-hidden="true"
    >
      {/* 1. Desktop & Tablet Flow Layout (md+) */}
      <div 
        className="hidden md:block relative w-[460px] h-[520px] shrink-0"
        style={{ contentVisibility: 'auto' }}
      >
        {/* SVG Overlay behind cards (since SVG is first in order, cards paint on top) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 460 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrow marker definition */}
          <defs>
            <marker
              id="feedback-arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#686DF4" fillOpacity="0.4" />
            </marker>
          </defs>

          {/* Feedback-Loop (05 -> 01) - geschwungen rechts aussen */}
          <path
            d="M 335 445 C 445 445, 445 50, 335 50"
            stroke="#686DF4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity={hasAnyHover ? (hoveredNodeId === 'revenue' || hoveredNodeId === 'demand' ? 0.35 : 0.08) : 0.18}
            className="transition-all duration-300"
            markerEnd="url(#feedback-arrow)"
          />

          {/* Connecting lines */}
          {connectionLines.map((line) => {
            const active = isLineActive(line.id);
            return (
              <path
                key={line.id}
                d={line.d}
                stroke="#686DF4"
                strokeWidth={active ? '2' : '1.5'}
                strokeOpacity={hasAnyHover ? (active ? 0.65 : 0.08) : 0.22}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Flow Particles along each path using standard SVG animate tags */}
          {connectionLines.map((line, i) => {
            const active = isLineActive(line.id);
            return (
              <circle key={`particle-${line.id}`} r={active ? 3.5 : 2.5} fill="#686DF4">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path={line.d}
                  begin={`${line.delay}s`}
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.1;0.9;0.9;0.1"
                  dur="2.8s"
                  repeatCount="indefinite"
                  begin={`${line.delay}s`}
                />
              </circle>
            );
          })}
        </svg>

        {/* Nodes layer */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isHovered = hoveredNodeId === node.id;
          const isDimmed = hasAnyHover && !isHovered;

          return (
            <motion.div
              key={node.id}
              custom={index}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={nodeVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              onHoverStart={() => setHoveredNodeId(node.id)}
              onHoverEnd={() => setHoveredNodeId(null)}
              className={`absolute transition-all duration-300 rounded-2xl flex items-center p-3.5 gap-3 cursor-default border ${
                node.highlight
                  ? 'bg-[#686DF4] border-transparent text-white shadow-[0_8px_24px_rgba(104,109,244,0.38)]'
                  : 'bg-white border-slate-200/80 text-slate-805 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#686DF4]/40 hover:shadow-[0_4px_16px_rgba(104,109,244,0.08)]'
              }`}
              style={{
                left: node.left,
                top: node.top,
                width: node.width,
                opacity: isDimmed ? 0.65 : 1,
                zIndex: isHovered ? 30 : 10,
              }}
            >
              {/* Pulse effect wrapper */}
              {!node.highlight && (
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-[#686DF4]/20 pointer-events-none"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.7,
                  }}
                />
              )}

              {/* Icon container */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                  node.highlight
                    ? 'bg-white/18 text-white'
                    : 'bg-[#EEEEFF] text-[#686DF4]'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>

              {/* Node texts */}
              <div className="flex flex-col min-w-0 pr-1">
                <span
                  className={`text-[9px] font-bold tracking-wider uppercase font-mono ${
                    node.highlight ? 'text-white/60' : 'text-[#686DF4]/50'
                  }`}
                >
                  {node.number}
                </span>
                <span className="text-xs font-black tracking-tight leading-none mb-0.5 whitespace-nowrap">
                  {node.title}
                </span>
                <span
                  className={`text-[8.5px] font-semibold tracking-wide ${
                    node.highlight ? 'text-white/80' : 'text-slate-400'
                  }`}
                >
                  {node.sub}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 2. Mobile Responsive Stacking Layout (<md) */}
      <div className="block md:hidden w-full max-w-sm px-2 py-4 relative">
        {/* Simple vertical connection line running behind cards */}
        <div className="absolute left-[33px] top-10 bottom-10 w-0.5 border-l-2 border-dashed border-[#686DF4]/20 z-0" />

        <div className="space-y-4 relative z-10">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={`mobile-${node.id}`}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`flex items-center p-3.5 gap-3 rounded-2xl border ${
                  node.highlight
                    ? 'bg-[#686DF4] border-transparent text-white shadow-[0_6px_16px_rgba(104,109,244,0.3)]'
                    : 'bg-white border-slate-205 text-slate-800 shadow-xs'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    node.highlight
                      ? 'bg-white/18 text-white'
                      : 'bg-[#EEEEFF] text-[#686DF4]'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[8px] font-extrabold tracking-wider font-mono ${
                        node.highlight ? 'text-white/60' : 'text-[#686DF4]/60'
                      }`}
                    >
                      {node.number}
                    </span>
                    <span className="text-xs font-black tracking-tight shrink-0">
                      {node.title}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] font-semibold ${
                      node.highlight ? 'text-white/80' : 'text-slate-400'
                    }`}
                  >
                    {node.sub}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
