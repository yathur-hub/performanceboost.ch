/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Building2, Sparkles } from 'lucide-react';
import { PREMIUM_EASE } from '../../lib/motion';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl?: string | null;
  highlight?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'simon-karrica',
    name: 'Simon Karrica',
    role: 'Mitglied der Geschäftsleitung',
    company: 'Mission13',
    quote: 'Die Zusammenarbeit mit Yathur gibt uns genau die Unterstützung, die wir für den Aufbau unserer digitalen Kundengewinnung brauchen. Er verbindet Performance Marketing, Technologie und Webentwicklung mit einem klaren Verständnis für unser Geschäftsmodell und denkt dabei immer über einzelne Kampagnen hinaus. Gemeinsam bauen wir Strukturen und Prozesse auf, mit denen wir qualifizierte Anfragen planbarer generieren und unsere Marketingaktivitäten laufend weiterentwickeln können, ohne als Geschäftsführer selbst unnötigen mehr Aufwand zu betreiben.',
    imageUrl: 'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/Kundenreferenzen/Portrait%20Simon%20Karrica.png',
    highlight: 'Planbare Kundengewinnung & Entlastung der Geschäftsleitung'
  },
  {
    id: 'janis-bloechliger',
    name: 'Janis Blöchliger',
    role: 'Lead E-Commerce & Marketing',
    company: 'Marigin - Zentrum für Tiermedizin',
    quote: 'Yathur unterstützt uns dabei, unseren E-Commerce gezielt weiterzuentwickeln und Marketingmassnahmen konsequent auf Wachstum auszurichten. Besonders wertvoll ist für uns die Kombination aus Performance Marketing, strategischem Sparring und der Entwicklung passender Ad-Visuals. Dadurch entstehen Kampagnen, bei denen Strategie, Umsetzung und kreative Assets aus einer Hand zusammenspielen. Die Zusammenarbeit ist unkompliziert, schnell und immer lösungsorientiert.',
    imageUrl: 'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/Kundenreferenzen/Portrait%20Janis%20Blo%CC%88chliger.jpg',
    highlight: 'Strategie, Ad-Visuals & Performance aus einer Hand'
  },
  {
    id: 'tiago-garcia',
    name: 'Tiago Garcia',
    role: 'Co-Founder',
    company: 'CUIRA Partners',
    quote: 'Mit Yathur haben wir einen Partner, der Marketing nicht isoliert betrachtet, sondern unsere gesamte digitale Kundengewinnung im Blick hat. Von der Strategie über Performance Marketing und Leadgenerierung bis hin zu den technischen Grundlagen bringt er die verschiedenen Disziplinen sinnvoll zusammen. Besonders schätzen wir, dass er unsere Ziele versteht, proaktiv mitdenkt und daraus konkrete Massnahmen ableitet, die uns als Unternehmen weiterbringen.',
    imageUrl: 'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/Kundenreferenzen/Portrait%20Tiago%20Garcia.png',
    highlight: 'Ganzheitliche Leadgenerierung & proaktive Weiterentwicklung'
  },
  {
    id: 'kathirsan-kathirgamanathan',
    name: 'Kathirsan Kathirgamanathan',
    role: 'Co-Founder',
    company: 'Kathiago',
    quote: 'Yathur unterstützt uns sehr umfassend, von Performance Marketing, MarTech und Webentwicklung bis hin zur Produktion von Videos und Fotos. Dadurch greifen Strategie, Kampagnen, Technologie und Content sauber ineinander, anstatt von verschiedenen Stellen unabhängig voneinander umgesetzt zu werden. Die Zusammenarbeit ist unkompliziert, lösungsorientiert und darauf ausgerichtet, unsere Sichtbarkeit zu erhöhen und kontinuierlich neue Kundenanfragen zu generieren.',
    imageUrl: 'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/Kundenreferenzen/Portrait%20Kathirsan%20Kathirgamanathan.png',
    highlight: 'MarTech, Content & Webentwicklung nahtlos vereint'
  },
  {
    id: 'sirac-akyol',
    name: 'Siraç Akyol',
    role: 'Gründer & Inhaber',
    company: 'EVIM',
    quote: 'Yathur unterstützt uns dabei, unser Online-Geschäft strukturiert weiterzuentwickeln und Performance Marketing gezielt für weiteres Wachstum einzusetzen. Besonders schätzen wir, dass er nicht nur einzelne Kampagnen betrachtet, sondern auch den Shop, die Customer Journey und die Vermarktung als Ganzes im Blick behält. Die Zusammenarbeit ist unkompliziert, verlässlich und geprägt von konkreten Empfehlungen, die wir direkt umsetzen können.',
    imageUrl: null,
    highlight: 'Shop-Optimierung & gezieltes Performance Marketing'
  },
  {
    id: 'ibrahim-akyol',
    name: 'Ibrahim Akyol',
    role: 'Gründer & Inhaber',
    company: 'Carpethouse',
    quote: 'Mit Yathur entwickeln wir die Performance unseres Onlineshops kontinuierlich weiter. Er verbindet Performance Marketing mit einer sehr datengetriebenen Herangehensweise und hilft uns dadurch, schneller zu erkennen, wo Potenzial liegt und welche Massnahmen wirklich relevant sind. Besonders wertvoll ist für uns, dass er nicht nur Zahlen analysiert, sondern daraus konkrete nächste Schritte für Marketing und Shop ableitet. Die Zusammenarbeit ist schnell, pragmatisch und auf nachhaltiges Wachstum ausgerichtet.',
    imageUrl: 'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/Kundenreferenzen/Portrait%20Ibrahim%20Akyol%20.jpeg',
    highlight: 'Datengetriebene Shop-Skalierung & pragmatische Umsetzung'
  },
  {
    id: 'carla-carcaiso',
    name: 'Carla Carcaiso',
    role: 'Gründerin & Inhaberin',
    company: 'CarlaCares',
    quote: 'Die Zusammenarbeit mit Yathur hat unsere internen Abläufe und unseren digitalen Auftritt grundlegend weitergebracht. Er hat für CarlaCares nicht nur die komplette Webseite konzipiert, gestaltet und technisch umgesetzt, sondern auch ein auf unsere Bedürfnisse zugeschnittenes ERP-System entwickelt. Besonders wertvoll ist für uns, dass er unsere Anforderungen schnell versteht und daraus Lösungen entwickelt, die im Alltag wirklich funktionieren. So haben wir heute professionelle digitale Strukturen, die unsere Prozesse vereinfachen und uns eine solide Basis für die weitere Entwicklung von CarlaCares geben.',
    imageUrl: 'https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/Kundenreferenzen/Portrait%20Carla%20Carcaiso.jpeg',
    highlight: 'Webauftritt & massgeschneiderte Prozess- und ERP-Lösungen'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: PREMIUM_EASE
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 40 : -40,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.35,
      ease: PREMIUM_EASE
    }
  })
};

export function ClientTestimonials() {
  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  const total = TESTIMONIALS_DATA.length;
  const current = TESTIMONIALS_DATA[currentIndex];

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevIndex]) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = total - 1;
      if (nextIndex >= total) nextIndex = 0;
      return [nextIndex, newDirection];
    });
  }, [total]);

  const goToIndex = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const newDir = targetIndex > currentIndex ? 1 : -1;
    setPage([targetIndex, newDir]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  // Derive initials for avatar fallback
  const initials = current.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: PREMIUM_EASE }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12"
      id="kundenreferenzen"
    >
      {/* Header with Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono font-bold text-[#686DF4] uppercase tracking-widest">
            KUNDENREFERENZEN &amp; ERFAHRUNGEN
          </span>
          <h2 className="text-2xl sm:text-3.5xl font-display font-bold text-slate-900 tracking-tight">
            Was Schweizer Gründer &amp; Führungskräfte sagen
          </h2>
          <p className="text-slate-500 text-body-sm leading-relaxed font-medium max-w-2xl">
            Erprobte Zusammenarbeit, spürbare operative Entlastung und messbares Wachstum — direkte Einblicke aus der Praxis.
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 self-start md:self-end shrink-0">
          <span className="text-xs font-mono font-bold text-slate-400 mr-2">
            <span className="text-slate-900 font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
          </span>

          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Vorherige Kundenstimme"
            className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-[#686DF4] flex items-center justify-center shadow-xs hover:shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Nächste Kundenstimme"
            className="w-11 h-11 rounded-full bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-slate-700 hover:text-[#686DF4] flex items-center justify-center shadow-xs hover:shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Company Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        {TESTIMONIALS_DATA.map((item, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goToIndex(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-display font-bold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#686DF4] text-white shadow-sm shadow-[#686DF4]/20 scale-102'
                  : 'bg-white hover:bg-slate-100/80 text-slate-600 border border-slate-200/80 hover:text-slate-900'
              }`}
            >
              {item.company}
            </button>
          );
        })}
      </div>

      {/* Single Carousel Card Container */}
      <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full bg-white border border-[#E0E0E0]/80 rounded-3xl p-7 sm:p-10 lg:p-12 shadow-[var(--shadow-premium-md)] relative overflow-hidden"
          >
            {/* Subtle decorative background glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#686DF4]/3 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Header inside Card: Quote mark, Company & Highlight */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5">
                <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#686DF4] font-display">
                  <div className="w-8 h-8 rounded-xl bg-[#686DF4]/8 border border-[#686DF4]/20 flex items-center justify-center text-[#686DF4] shrink-0">
                    <Quote className="w-4 h-4 fill-[#686DF4]/20" />
                  </div>
                  <span className="text-slate-900 font-semibold">{current.company}</span>
                </div>

                {current.highlight && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-[#686DF4]/6 text-[#686DF4] border border-[#686DF4]/20">
                    <Sparkles className="w-3 h-3" />
                    <span>{current.highlight}</span>
                  </span>
                )}
              </div>

              {/* Main Quote */}
              <blockquote className="text-slate-800 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                «{current.quote}»
              </blockquote>

              {/* Author Info Bar */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  {/* Portrait Avatar */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-slate-200/90 bg-slate-100 flex items-center justify-center shadow-sm">
                    {current.imageUrl && !imgError[current.id] ? (
                      <img
                        src={current.imageUrl}
                        alt={current.name}
                        className="w-full h-full object-cover object-center"
                        onError={() => setImgError(prev => ({ ...prev, [current.id]: true }))}
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#686DF4]/10 text-[#686DF4] font-bold font-mono text-sm flex items-center justify-center">
                        {initials}
                      </div>
                    )}
                  </div>

                  {/* Name & Title */}
                  <div className="space-y-0.5">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">
                      {current.role}
                    </p>
                    <p className="text-xs font-semibold text-[#686DF4]">
                      {current.company}
                    </p>
                  </div>
                </div>

                {/* Micro pagination dots for direct navigation */}
                <div className="hidden sm:flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => goToIndex(dotIdx)}
                      aria-label={`Gehe zu Kundenstimme ${dotIdx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        dotIdx === currentIndex
                          ? 'w-6 bg-[#686DF4]'
                          : 'w-2 bg-slate-200 hover:bg-slate-350'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
