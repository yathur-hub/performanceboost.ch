/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
const SkillsDirectory = lazy(() => import('./components/skills/SkillsDirectory'));
const SolutionsView = lazy(() => import('./views/SolutionsView'));
const ServicesView = lazy(() => import('./views/ServicesView'));
const ResourcesView = lazy(() => import('./views/ResourcesView'));
const AboutView = lazy(() => import('./views/AboutView'));
const ContactView = lazy(() => import('./views/ContactView'));
const LegalView = lazy(() => import('./views/LegalView'));
const SolutionDetailView = lazy(() => import('./views/SolutionDetailView'));
const FinanceLandingView = lazy(() => import('./views/FinanceLandingView'));
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import { parseRoute } from './lib/routes';
import type { FinanceSlug } from './data/financeLanding';
import { captureAttribution } from './lib/attribution';
import SEOHead from './components/SEOHead';
import { motion, AnimatePresence } from 'motion/react';
import { pageTransitionVariants } from './lib/motion';
import { ContactModalProvider, useContactModal } from './context/ContactModalContext';

function AppContent() {
  const { openContactModal } = useContactModal();
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    captureAttribution();
  }, []);

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

  const parsed = React.useMemo(() => parseRoute(currentPath), [currentPath]);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#505050] flex flex-col justify-between selection:bg-[#686DF4] selection:text-white font-sans antialiased">
      <SEOHead route={parsed} />
      
      {/* Main Responsive Header */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main responsive viewport routing */}
      <main className="flex-grow overflow-hidden relative">
        <Suspense fallback={<div className="min-h-[80vh]" aria-busy="true" />}>
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
            {parsed.view === 'finanz' && parsed.slug && (
              <FinanceLandingView slug={parsed.slug as FinanceSlug} />
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
            {parsed.view === 'not_found' && (
              <NotFoundView onNavigate={handleNavigate} />
            )}
          </motion.div>
        </AnimatePresence>
        </Suspense>
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

