/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { RESOURCES_DATA } from '../data/resources';
import { User, Calendar, Clock, ArrowRight, ArrowLeft, Search, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PREMIUM_EASE, 
  DURATIONS, 
  staggerContainer, 
  staggeredChildVariants, 
  buttonPressProps 
} from '../lib/motion';

interface ResourcesViewProps {
  subSection?: string; // 'blog', 'guides' or empty for all
  onNavigate: (path: string) => void;
  activeItemSlug?: string; // If viewing a single resource detail
}

export default function ResourcesView({ subSection, onNavigate, activeItemSlug }: ResourcesViewProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // ----------------------------------------------------
  // SUB-PAGE: SINGLE RESOURCE DETAIL VIEW (READ ARTICLE)
  // ----------------------------------------------------
  if (activeItemSlug) {
    const item = RESOURCES_DATA.find(r => r.slug === activeItemSlug);
    
    if (!item) {
      return (
        <div className="pt-32 pb-16 text-center text-slate-800 space-y-4">
          <p className="text-slate-500">Ressource "{activeItemSlug}" wurde nicht gefunden.</p>
          <button 
            onClick={() => onNavigate('/ressourcen')}
            className="text-[#686DF4] font-bold hover:underline bg-transparent border-none cursor-pointer"
          >
            Zurück zur Übersicht
          </button>
        </div>
      );
    }

    return (
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
        className="pt-24 pb-16 text-slate-850 space-y-12" 
        id={`resource-detail-${item.slug}`}
      >
        
        {/* Back navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <button 
            onClick={() => {
              onNavigate(subSection ? `/ressourcen/${subSection}` : '/ressourcen');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-950 transition-colors cursor-pointer font-bold uppercase tracking-wider bg-transparent border-none outline-none font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> ZURÜCK ZUR ÜBERSICHT
          </button>
        </div>

        {/* Article content header */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 pb-6 border-b border-slate-100">
            <span className="inline-flex items-center gap-1 bg-[#686DF4]/5 text-[#686DF4] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#CACCFB]/20">
              {item.type === 'guide' ? 'Guide' : 'Blogbeitrag'}
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-slate-950 leading-tight">
              {item.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-400 font-mono font-bold uppercase">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-slate-400 shrink-0" /> {item.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-slate-400 shrink-0" /> {item.publishDate}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-400 shrink-0" /> {item.readTime}</span>
            </div>
          </div>

          {/* Simple formatted text view */}
          <div className="prose max-w-none text-slate-650 leading-relaxed space-y-6 pt-4">
            {item.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl font-display font-semibold text-slate-900 pt-6 border-l-4 border-[#686DF4] pl-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="space-y-3.5 pl-5">
                    {paragraph.split('\n').map((li, liIdx) => (
                      <li key={liIdx} className="list-disc list-inside text-slate-500 text-xs font-semibold leading-relaxed">
                        {li.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-xs sm:text-sm leading-relaxed text-slate-500 font-semibold">
                  {paragraph}
                </p>
              );
            })}
          </div>



        </article>

      </motion.div>
    );
  }

  // ----------------------------------------------------
  // GENERAL ARCHITECTURE: HUB AND SEGMENTS INDEX
  // ----------------------------------------------------
  const filteredItems = RESOURCES_DATA.filter(item => {
    // Explicitly hide any case study just in case
    if (item.type === 'case-study') return false;
    
    if (subSection === 'blog' && item.type !== 'blog') return false;
    if (subSection === 'guides' && item.type !== 'guide') return false;
    
    // Search terms
    if (searchTerm) {
      const matchText = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
      return matchText.includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <div className="pt-24 pb-16 space-y-28 text-slate-800" id="resources-hub">
      
      {/* Header section with subtitle */}
      <section className="relative bg-white py-28 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#686DF4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 animate-fadeIn">
          <motion.span 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE }}
            className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
          >
            KNOWLEDGE HUB
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            Erkenntnisse & Playbooks
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold"
          >
            Wir teilen unsere besten Frameworks, tiefgehenden Branchenanalysen und praxisbewährten Taktiken ungekürzt. Keine leeren Flachheiten — echte Methodik.
          </motion.p>
        </div>
      </section>

      {/* Categories Sub-routing inside hub & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-b border-slate-100 pb-8">
          {/* Sub menu filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => onNavigate('/ressourcen')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                !subSection ? 'bg-slate-950 text-white border border-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              Alle Artikel
            </button>
            <button
              onClick={() => onNavigate('/ressourcen/blog')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                subSection === 'blog' ? 'bg-slate-950 text-white border border-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => onNavigate('/ressourcen/guides')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                subSection === 'guides' ? 'bg-slate-950 text-white border border-slate-900' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              Guides & Frameworks
            </button>
          </div>

          {/* Search container */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Keywords suchen..."
              className="w-full bg-[#f6f6f6]/60 border border-slate-205 rounded-xl py-3 pl-11 pr-4 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#686DF4] focus:bg-white transition-all font-semibold"
            />
          </div>
        </div>

        {/* Resources Grid layout */}
        {filteredItems.length > 0 ? (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                variants={staggeredChildVariants}
                whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
                className="bg-white border border-[#E0E0E0]/65 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)]"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono font-bold bg-[#686DF4]/5 px-2.5 py-1 rounded-md text-[#686DF4] uppercase tracking-widest border border-[#CACCFB]/20">
                      {item.type === 'guide' ? 'Guide' : 'Blog'}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono font-semibold">{item.readTime}</span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-slate-905 group-hover:text-[#686DF4] transition-colors line-clamp-2 leading-snug">
                     {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-semibold">
                    {item.description}
                  </p>
                  
                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-bold bg-[#f6f6f6] border border-slate-100 text-slate-400 px-2.5 py-0.5 rounded-md font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-8 flex justify-between items-center bg-transparent">
                  <span className="text-[10px] text-slate-405 font-mono font-bold">
                    {item.publishDate}
                  </span>
                  
                  <button
                    onClick={() => {
                      const prefix = subSection ? `/ressourcen/${subSection}` : '/ressourcen';
                      onNavigate(`${prefix}/${item.slug}`);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs text-[#686DF4] font-bold inline-flex items-center gap-1.5 cursor-pointer hover:text-[#686DF4]/85 bg-transparent border-none focus:outline-none"
                  >
                    Vollständiger Artikel <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl text-slate-400 space-y-3 bg-[#f6f6f6]/50">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-xs font-semibold text-slate-500">Keine Ressourcen für deine Filter-Kombination gefunden.</p>
            <button 
              onClick={() => { setSearchTerm(''); }}
              className="text-xs text-[#686DF4] underline font-extrabold cursor-pointer bg-transparent border-none"
            >
              Suche zurücksetzen
            </button>
          </div>
        )}

      </section>



    </div>
  );
}
