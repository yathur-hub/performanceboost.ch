/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Visual3D } from '../components/Visual3D';
import Link from '../components/Link';
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

/** Einfache Hervorhebung: **fett** im Artikeltext. */
function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="text-slate-800">{part.slice(2, -2)}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    ),
  );
}

/** Ratgeber-Bereich MarTech (Ziel für die LinkedIn-Serie): Artikel mit dem Tag «MarTech». */
export const MARTECH_TAG = 'MarTech';

interface ResourcesViewProps {
  subSection?: string; // 'blog', 'guides', 'martech' or empty for all
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
          <p className="text-slate-500">Der Beitrag «{activeItemSlug}» wurde nicht gefunden.</p>
          <button 
            onClick={() => onNavigate('/ressourcen')}
            className="text-[#686CFA] font-bold hover:underline bg-transparent border-none cursor-pointer"
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
        className="pt-32 md:pt-36 pb-16 text-slate-850 space-y-12" 
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
            <ArrowLeft className="w-3.5 h-3.5" /> Zurück zur Übersicht
          </button>
        </div>

        {/* Article content header */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 pb-6 border-b border-slate-100">
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
                  <h2 key={index} className="text-xl font-display font-semibold text-slate-900 pt-6 border-l-4 border-[#686CFA] pl-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="space-y-3.5 pl-5">
                    {paragraph.split('\n').map((li, liIdx) => (
                      <li key={liIdx} className="list-disc list-inside text-slate-500 text-xs font-semibold leading-relaxed">
                        {renderInline(li.replace('- ', ''))}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-xs sm:text-sm leading-relaxed text-slate-500 font-semibold">
                  {renderInline(paragraph)}
                </p>
              );
            })}
          </div>



        </article>

          {item.tags.includes(MARTECH_TAG) && (
            <aside className="mt-12 rounded-3xl border border-[#CBCBFC]/60 bg-[#686CFA]/[0.04] p-7 sm:p-9 space-y-4">
              <h2 className="text-lg font-display font-semibold text-slate-900">Weiter zum Thema MarTech</h2>
              <ul className="space-y-2 text-sm font-semibold">
                <li><Link href="/martech" className="text-[#686CFA] hover:text-accent-strong inline-flex items-center gap-1.5">MarTech-Wissen: Landkarte und Fachthemen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></Link></li>
                <li><Link href="/ressourcen/martech" className="text-[#686CFA] hover:text-accent-strong inline-flex items-center gap-1.5">Alle Beiträge zu MarTech für KMU <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></Link></li>
                <li><Link href="/leistungen/martech-stack" className="text-[#686CFA] hover:text-accent-strong inline-flex items-center gap-1.5">MarTech-Stack aufräumen und verbinden <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></Link></li>
                <li><Link href="/skills" className="text-[#686CFA] hover:text-accent-strong inline-flex items-center gap-1.5">Checkliste «Stack-Inventur» in der Skill-Factory <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></Link></li>
              </ul>
            </aside>
          )}

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
    if (subSection === 'martech' && !item.tags.includes(MARTECH_TAG)) return false;
    
    // Search terms
    if (searchTerm) {
      const matchText = `${item.title} ${item.description} ${item.tags.join(' ')}`.toLowerCase();
      return matchText.includes(searchTerm.toLowerCase());
    }
    return true;
  });

  return (
    <div className="pt-24 pb-16 space-y-16 md:space-y-28 text-slate-800" id="resources-hub">
      
      {/* Header section with subtitle */}
      <section className="relative bg-surface pt-12 pb-16 md:py-28 border-b border-slate-100 overflow-hidden text-center">
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#686CFA]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 animate-fadeIn">
          <Visual3D id="satellite" priority sizes="240px" className="mx-auto h-24 sm:h-32 w-auto animate-float" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-semibold text-slate-950 tracking-tight leading-[1.1]"
          >
            {subSection === 'martech' ? 'MarTech für KMU' : 'Leitfäden und Beiträge'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATIONS.slow, ease: PREMIUM_EASE, delay: 0.2 }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-semibold"
          >
            {subSection === 'martech'
              ? 'Welche Tools ein KMU für Marketing und Vertrieb braucht, wie sie zusammenarbeiten und wo KI dazugehört. Alle Beiträge lesen Sie ohne Anmeldung.'
              : 'Hier zeigen wir, wie wir bei Neukundengewinnung, KI, MarTech und Automatisierung vorgehen. Alle Beiträge lesen Sie ohne Anmeldung.'}
          </motion.p>
        </div>
      </section>

      {subSection === 'martech' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/martech" className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-3xl border border-[#CBCBFC]/70 bg-[#686CFA]/[0.05] p-7 sm:p-8 hover:border-[#686CFA]/60 transition-colors">
            <span className="space-y-1">
              <span className="block text-lg font-display font-semibold text-slate-900">Tiefer einsteigen: MarTech-Wissen</span>
              <span className="block text-sm text-slate-600">Die MarTech-Landkarte und Fachthemen zu Server-Side Tagging, Integrationsarchitektur, MCP, Agenten und Lizenzen, mit Quellen.</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#686CFA] shrink-0">Zur Landkarte <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
          </Link>
        </section>
      )}

      {/* Categories Sub-routing inside hub & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-b border-slate-100 pb-8">
          {/* Sub menu filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <button
              onClick={() => onNavigate('/ressourcen')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                !subSection ? 'bg-[#686CFA] text-white border border-transparent' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              Alle Artikel
            </button>
            <button
              onClick={() => onNavigate('/ressourcen/blog')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                subSection === 'blog' ? 'bg-[#686CFA] text-white border border-transparent' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              Blog
            </button>
            <button
              onClick={() => onNavigate('/ressourcen/guides')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                subSection === 'guides' ? 'bg-[#686CFA] text-white border border-transparent' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              Leitfäden
            </button>
            <button
              onClick={() => onNavigate('/ressourcen/martech')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                subSection === 'martech' ? 'bg-[#686CFA] text-white border border-transparent' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-bold'
              }`}
            >
              MarTech für KMU
            </button>
          </div>

          {/* Search container */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
            <input aria-label="Beiträge durchsuchen"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Stichwort suchen …"
              className="w-full bg-canvas/60 border border-slate-205 rounded-xl py-3 pl-11 pr-4 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#686CFA] focus:bg-surface transition-all font-semibold"
            />
          </div>
        </div>

        {/* Resources Grid layout */}
        {filteredItems.length > 0 ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ y: -5, borderColor: "rgba(104, 109, 244, 0.25)" }}
                className="bg-surface border border-line/65 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group shadow-[var(--shadow-premium-sm)] hover:shadow-[var(--shadow-premium-lg)]"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-mono font-bold bg-[#686CFA]/5 px-2.5 py-1 rounded-md text-[#686CFA] uppercase tracking-widest border border-[#CBCBFC]/20">
                      {item.type === 'guide' ? 'Leitfaden' : 'Blog'}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono font-semibold">{item.readTime}</span>
                  </div>

                  <h3 className="text-base font-display font-semibold text-slate-905 group-hover:text-[#686CFA] transition-colors line-clamp-2 leading-snug">
                     {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-semibold">
                    {item.description}
                  </p>
                  
                  {/* Category tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[11px] font-bold bg-canvas border border-slate-100 text-slate-400 px-2.5 py-0.5 rounded-md font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-8 flex justify-between items-center bg-transparent">
                  <span className="text-[11px] text-slate-405 font-mono font-bold">
                    {item.publishDate}
                  </span>
                  
                  <Link
                    href={`/ressourcen/${item.slug}`}
                    className="text-xs text-[#686CFA] font-bold inline-flex items-center gap-1.5 cursor-pointer hover:text-[#686CFA]/85"
                  >
                    Beitrag lesen <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl text-slate-400 space-y-3 bg-canvas/50">
            <AlertCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-xs font-semibold text-slate-500">Keine Beiträge für Ihre Suche gefunden.</p>
            <button 
              onClick={() => { setSearchTerm(''); }}
              className="text-xs text-[#686CFA] underline font-extrabold cursor-pointer bg-transparent border-none"
            >
              Suche zurücksetzen
            </button>
          </div>
        )}

      </section>



    </div>
  );
}
