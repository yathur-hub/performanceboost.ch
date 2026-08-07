/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

'use client';

import React, { useRef, useState, useEffect } from 'react';
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
    left: 116,
    top: 13,
    width: 228,
  },
  {
    id: 'leads',
    number: '02',
    title: 'Lead-Qualifizierung',
    sub: 'Scoring · Nurturing · MQL',
    icon: Target,
    position: 'center-mid',
    left: 116,
    top: 138,
    width: 228,
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
    width: 224,
  },
  {
    id: 'sales',
    number: '04',
    title: 'Vertrieb',
    sub: 'Enablement · Pipeline · Abschluss',
    icon: Users,
    position: 'right-lower',
    left: 236,
    top: 268,
    width: 224,
  },
  {
    id: 'revenue',
    number: '05',
    title: 'Planbare Revenue',
    sub: 'Forecasting · Attribution · Wachstum',
    icon: TrendingUp,
    position: 'center-bottom',
    left: 116,
    top: 408,
    width: 228,
    highlight: true,
  },
];

const connectionLines = [
  { id: 'l1', d: 'M 230 50 L 230 175', from: 'demand', to: 'leads', delay: 0 },
  { id: 'l2', d: 'M 230 175 L 112 305', from: 'leads', to: 'automation', delay: 0.5 },
  { id: 'l3', d: 'M 230 175 L 348 305', from: 'leads', to: 'sales', delay: 1.0 },
  { id: 'l4', d: 'M 112 305 L 230 445', from: 'automation', to: 'revenue', delay: 1.5 },
  { id: 'l5', d: 'M 348 305 L 230 445', from: 'sales', to: 'revenue', delay: 2.0 },
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
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0 && width < 460) {
          setScale(width / 460);
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const isLineActive = (lineId: string) => {
    if (!hoveredNodeId) return false;
    return nodeLineConnections[hoveredNodeId]?.includes(lineId);
  };

  const hasAnyHover = hoveredNodeId !== null;

  return (
    <div
      ref={containerRef}
      className="w-full relative select-none flex justify-center items-center overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Desktop & Tablet Flow Layout (md+) with dynamic auto-scaling */}
      <div 
        className="hidden md:block relative shrink-0 transition-all duration-300"
        style={{ 
          width: Math.floor(460 * scale),
          height: Math.floor(520 * scale),
          contentVisibility: 'auto' 
        }}
      >
        <div 
          className="relative w-[460px] h-[520px] origin-top-left"
          style={{ transform: `scale(${scale})` }}
        >
          {/* SVG Overlay behind cards */}
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
            {connectionLines.map((line) => {
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
                className={`absolute transition-all duration-300 rounded-2xl flex items-center p-3 gap-2.5 cursor-default border ${
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
                      scale: [1, 1.04, 1],
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
                  className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    node.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EEEEFF] text-[#686DF4]'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                {/* Node texts */}
                <div className="flex flex-col min-w-0 flex-1">
                  <span
                    className={`text-[8.5px] font-bold tracking-wider uppercase font-mono ${
                      node.highlight ? 'text-white/70' : 'text-[#686DF4]'
                    }`}
                  >
                    {node.number}
                  </span>
                  <span className={`text-[11.5px] font-bold tracking-tight leading-snug mb-0.5 ${
                    node.highlight ? 'text-white' : 'text-slate-900'
                  }`}>
                    {node.title}
                  </span>
                  <span
                    className={`text-[9px] font-medium tracking-normal leading-tight ${
                      node.highlight ? 'text-white/85' : 'text-slate-500'
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

      {/* 2. Mobile Responsive Stacking Layout (<md) */}
      <div className="block md:hidden w-full max-w-sm px-1 py-2 relative">
        {/* Simple vertical connection line running behind cards */}
        <div className="absolute left-[31px] top-8 bottom-8 w-0.5 border-l-2 border-dashed border-[#686DF4]/20 z-0" />

        <div className="space-y-3.5 relative z-10">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={`mobile-${node.id}`}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className={`flex items-center p-3 gap-2.5 rounded-2xl border ${
                  node.highlight
                    ? 'bg-[#686DF4] border-transparent text-white shadow-[0_6px_16px_rgba(104,109,244,0.3)]'
                    : 'bg-white border-slate-200 text-slate-800 shadow-xs'
                }`}
              >
                <div
                  className={`w-8.5 h-8.5 rounded-xl flex items-center justify-center shrink-0 ${
                    node.highlight
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EEEEFF] text-[#686DF4]'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span
                      className={`text-[8.5px] font-extrabold tracking-wider font-mono ${
                        node.highlight ? 'text-white/70' : 'text-[#686DF4]'
                      }`}
                    >
                      {node.number}
                    </span>
                    <span className={`text-xs font-bold tracking-tight leading-tight ${
                      node.highlight ? 'text-white' : 'text-slate-900'
                    }`}>
                      {node.title}
                    </span>
                  </div>
                  <span
                    className={`text-[9.5px] font-medium leading-tight ${
                      node.highlight ? 'text-white/85' : 'text-slate-500'
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

