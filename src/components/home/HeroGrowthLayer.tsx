import React from 'react';
import { motion } from 'motion/react';

export const HeroGrowthLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* LAYER 0: Ambient Soft Atmospheric Glows */}
      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -10, 10, 0],
          scale: [1, 1.08, 0.95, 1],
          opacity: [0.3, 0.5, 0.3, 0.3],
        }}
        transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity }}
        className="absolute -top-24 left-1/4 w-[620px] h-[620px] bg-gradient-to-tr from-[#686DF4]/8 via-[#656BEF]/10 to-[#C9CCFD]/12 rounded-full blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 15, -10, 0],
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.25, 0.4, 0.25, 0.25],
        }}
        transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity, delay: 2 }}
        className="absolute top-1/3 -right-20 w-[560px] h-[560px] bg-gradient-to-br from-[#686DF4]/10 via-[#C9CCFD]/12 to-[#656BEF]/8 rounded-full blur-[140px]"
      />

      {/* LAYER 1: Extremely Faint Precision Texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-fine-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="0.75" fill="#686DF4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-fine-grid)" />
      </svg>

      {/* LAYER 2: Abstract Signal Path System */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* MOBILE VECTOR (Optimized for portrait smartphone screens < 640px) */}
        <svg
          className="w-full h-full sm:hidden opacity-100"
          viewBox="0 0 400 680"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="mobileSignalGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9CCFD" stopOpacity="0.40" />
              <stop offset="30%" stopColor="#686DF4" stopOpacity="0.80" />
              <stop offset="70%" stopColor="#656BEF" stopOpacity="1" />
              <stop offset="92%" stopColor="#686DF4" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#C9CCFD" stopOpacity="0.30" />
            </linearGradient>

            <linearGradient id="mobileEchoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#505050" stopOpacity="0.10" />
              <stop offset="50%" stopColor="#C9CCFD" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#686DF4" stopOpacity="0.15" />
            </linearGradient>

            <filter id="mobileSignalGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="mobileDepthBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
          </defs>

          {/* Deep Ambient Glow Ribbon under mobile ascent */}
          <path
            d="M 15 610 C 110 600, 200 550, 270 420 C 330 310, 355 190, 385 75"
            fill="none"
            stroke="#686DF4"
            strokeWidth="14"
            strokeOpacity="0.16"
            filter="url(#mobileDepthBlur)"
          />

          {/* Mobile Secondary Echo Path */}
          <path
            d="M 15 630 C 110 620, 200 570, 270 440 C 330 330, 355 210, 385 95"
            fill="none"
            stroke="url(#mobileEchoGradient)"
            strokeWidth="1.6"
            strokeDasharray="4 6"
          />

          {/* Mobile Main Performance Signal Line */}
          <motion.path
            d="M 15 610 C 110 600, 200 550, 270 420 C 330 310, 355 190, 385 75"
            fill="none"
            stroke="url(#mobileSignalGradient)"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#mobileSignalGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Mobile Traveling Pulse Dot */}
          <motion.circle
            r="3.5"
            fill="#FFFFFF"
            filter="url(#mobileSignalGlow)"
            animate={{
              cx: [15, 160, 270, 385],
              cy: [610, 580, 420, 75],
              opacity: [0, 0.9, 0.95, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Mobile Anchor Nodes */}
          <g transform="translate(270, 420)">
            <circle r="3" fill="#686DF4" opacity="0.85" />
            <motion.circle
              r="8"
              fill="none"
              stroke="#686DF4"
              strokeWidth="0.8"
              animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          <g transform="translate(355, 190)">
            <circle r="3" fill="#656BEF" opacity="0.85" />
            <motion.circle
              r="10"
              fill="none"
              stroke="#C9CCFD"
              strokeWidth="0.8"
              animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.05, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            />
          </g>
        </svg>

        {/* DESKTOP / TABLET VECTOR (Optimized for widescreen >= 640px) */}
        <svg
          className="hidden sm:block w-full h-full max-w-[1600px] mx-auto opacity-100"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Primary Signal Gradient: Defined at left origin, rich mid-ascent, soft finish at top right */}
            <linearGradient id="abstractSignalGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9CCFD" stopOpacity="0.30" />
              <stop offset="35%" stopColor="#686DF4" stopOpacity="0.70" />
              <stop offset="70%" stopColor="#656BEF" stopOpacity="0.95" />
              <stop offset="92%" stopColor="#686DF4" stopOpacity="0.60" />
              <stop offset="100%" stopColor="#C9CCFD" stopOpacity="0.18" />
            </linearGradient>

            {/* Echo Gradient: Parallel subtle vector */}
            <linearGradient id="abstractEchoGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#505050" stopOpacity="0.08" />
              <stop offset="60%" stopColor="#C9CCFD" stopOpacity="0.36" />
              <stop offset="100%" stopColor="#686DF4" stopOpacity="0.10" />
            </linearGradient>

            {/* Precision Glow Filters - Atmospheric & Soft */}
            <filter id="signalGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="ambientDepthBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="18" />
            </filter>
          </defs>

          {/* Deep Ambient Glow Ribbon under right-hand curve ascent */}
          <path
            d="M 50 525 C 300 520, 600 505, 800 425 C 960 350, 1050 200, 1130 90"
            fill="none"
            stroke="#686DF4"
            strokeWidth="16"
            strokeOpacity="0.11"
            filter="url(#ambientDepthBlur)"
          />

          {/* Secondary Echo Path (Soft harmonic vector below main line) */}
          <path
            d="M 50 545 C 300 540, 600 525, 800 445 C 960 370, 1050 220, 1130 110"
            fill="none"
            stroke="url(#abstractEchoGradient)"
            strokeWidth="1.4"
            strokeDasharray="4 6"
          />

          {/* MAIN ABSTRACT PERFORMANCE SIGNAL VECTOR (Clear, dynamic, framing peripheral layout) */}
          <motion.path
            d="M 50 525 C 300 520, 600 505, 800 425 C 960 350, 1050 200, 1130 90"
            fill="none"
            stroke="url(#abstractSignalGradient)"
            strokeWidth="2.8"
            strokeLinecap="round"
            filter="url(#signalGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Controlled Pulse Traveling along the curve */}
          <motion.circle
            r="3.5"
            fill="#FFFFFF"
            filter="url(#signalGlow)"
            animate={{
              cx: [50, 420, 800, 1130],
              cy: [525, 512, 425, 90],
              opacity: [0, 0.85, 0.95, 0],
            }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* LAYER 3: Soft Integrated Micro Anchors (Non-UI, highly delicate) */}
          
          {/* Micro Anchor 1: Subtle Inflection Transition */}
          <g transform="translate(800, 425)">
            <circle r="3" fill="#686DF4" opacity="0.75" />
            <motion.circle
              r="9"
              fill="none"
              stroke="#686DF4"
              strokeWidth="0.7"
              animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.45, 0, 0.45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>

          {/* Micro Anchor 2: Soft Right Apex Point */}
          <g transform="translate(1050, 200)">
            <circle r="3.5" fill="#656BEF" opacity="0.8" />
            <motion.circle
              r="13"
              fill="none"
              stroke="#C9CCFD"
              strokeWidth="0.7"
              animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.38, 0.05, 0.38] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </g>
        </svg>
      </div>

      {/* LAYER 4: Radial Text Overlay Mask - Ensures 100% clean legibility across central text */}
      <div 
        className="absolute inset-0 pointer-events-none hidden sm:block" 
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 48%, rgba(255,255,255,0) 86%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none sm:hidden" 
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 88%)'
        }}
      />
    </div>
  );
};

export default HeroGrowthLayer;

