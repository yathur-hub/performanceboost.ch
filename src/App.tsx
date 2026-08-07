/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkillsDirectory from './components/skills/SkillsDirectory';
import HomeView from './views/HomeView';
import SolutionsView from './views/SolutionsView';
import ServicesView from './views/ServicesView';
import ResourcesView from './views/ResourcesView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';
import LegalView from './views/LegalView';
import SolutionDetailView from './views/SolutionDetailView';
import SEOHead from './components/SEOHead';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { pageTransitionVariants } from './lib/motion';
import { ContactModalProvider, useContactModal } from './context/ContactModalContext';

function AppContent() {
  const { openContactModal } = useContactModal();
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    // Listen to back/forward navigation
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    
    // Also listen to a custom event for easy programmatical navigation triggers anywhere
    const handleNavigationChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        if (customEvent.detail === '/kontakt' || customEvent.detail === '#kontakt') {
          openContactModal();
        } else {
          handleNavigate(customEvent.detail);
        }
      }
    };
    window.addEventListener('navigation-change', handleNavigationChange);

    // Custom event to open contact modal from any non-React script or deep child
    const handleOpenModal = () => {
      openContactModal();
    };
    window.addEventListener('open-contact-modal', handleOpenModal);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('navigation-change', handleNavigationChange);
      window.removeEventListener('open-contact-modal', handleOpenModal);
    };
  }, [openContactModal]);

  const handleNavigate = (path: string) => {
    if (path === '/kontakt' || path === '#kontakt') {
      openContactModal();
      return;
    }
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Parsing the current active system path
  const parsed = React.useMemo(() => {
    const path = currentPath.replace(/\/$/, '') || '/';
    
    if (path === '/') return { view: 'home' };
    if (path === '/skills') return { view: 'skills' };
    if (path === '/loesungen') return { view: 'loesungen' };
    
    if (path.startsWith('/loesungen/')) {
      const slug = path.split('/loesungen/')[1];
      return { view: 'loesungen_detail', slug };
    }

    if (path === '/ueber-uns') return { view: 'about' };
    if (path === '/kontakt') return { view: 'kontakt' };
    if (path === '/impressum') return { view: 'impressum' };
    if (path === '/datenschutz') return { view: 'datenschutz' };
    
    if (path.startsWith('/leistungen')) {
      const slug = path.split('/leistungen/')[1];
      return { view: 'leistungen', slug };
    }
    
    if (path.startsWith('/ressourcen')) {
      const parts = path.split('/ressourcen/');
      const afterRessourcen = parts[1];
      
      if (!afterRessourcen) {
        return { view: 'ressourcen' };
      }
      
      const subParts = afterRessourcen.split('/');
      if (subParts.length === 1) {
        return { view: 'ressourcen', subSection: subParts[0] };
      } else {
        return { view: 'ressourcen', subSection: subParts[0], slug: subParts[1] };
      }
    }
    
    return { view: 'home' };
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#505050] flex flex-col justify-between selection:bg-[#686DF4] selection:text-white font-sans antialiased">
      <SEOHead currentPath={currentPath} />
      
      {/* Top Advisory Information strip */}
      <div className="bg-[#686DF4] text-white text-[11px] font-mono font-bold tracking-wider py-2 text-center flex items-center justify-center gap-1 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-white/80" /> 
        <span>REVENUE ADVISORY FOR HIGH-VALUE B2B KMUs & SAAS • GRAUBÜNDEN</span>
        <button 
          onClick={openContactModal}
          className="underline hover:text-white/90 inline-flex items-center gap-0.5 ml-1 bg-transparent border-0 cursor-pointer text-white font-mono font-bold text-[11px]"
        >
          Audit buchen <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      {/* Main Responsive Header */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main responsive viewport routing */}
      <main className="flex-grow overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={parsed.view + (parsed.slug || '') + (parsed.subSection || '')}
            variants={pageTransitionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full flex flex-col"
          >
            {parsed.view === 'home' && (
              <HomeView onNavigate={handleNavigate} />
            )}
            {parsed.view === 'skills' && (
              <SkillsDirectory onNavigate={handleNavigate} />
            )}
            {parsed.view === 'loesungen' && (
              <SolutionsView onNavigate={handleNavigate} />
            )}
            {parsed.view === 'loesungen_detail' && (
              <SolutionDetailView slug={parsed.slug || ''} onNavigate={handleNavigate} />
            )}
            {parsed.view === 'leistungen' && (
              <ServicesView currentSlug={parsed.slug} onNavigate={handleNavigate} />
            )}
            {parsed.view === 'ressourcen' && (
              <ResourcesView 
                subSection={parsed.subSection} 
                activeItemSlug={parsed.slug} 
                onNavigate={handleNavigate} 
              />
            )}
            {parsed.view === 'about' && (
              <AboutView onNavigate={handleNavigate} />
            )}
            {parsed.view === 'kontakt' && (
              <ContactView />
            )}
            {(parsed.view === 'impressum' || parsed.view === 'datenschutz') && (
              <LegalView type={parsed.view} onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Sitemapped Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}

export default function App() {
  return (
    <ContactModalProvider>
      <AppContent />
    </ContactModalProvider>
  );
}

