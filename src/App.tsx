/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { lazyView } from './lib/lazyView';
const SkillsDirectory = lazyView(() => import('./components/skills/SkillsDirectory'));
const SolutionsView = lazyView(() => import('./views/SolutionsView'));
const ServicesView = lazyView(() => import('./views/ServicesView'));
const ResourcesView = lazyView(() => import('./views/ResourcesView'));
const AboutView = lazyView(() => import('./views/AboutView'));
const ContactView = lazyView(() => import('./views/ContactView'));
const LegalView = lazyView(() => import('./views/LegalView'));
const SolutionDetailView = lazyView(() => import('./views/SolutionDetailView'));
const FinanceLandingView = lazyView(() => import('./views/FinanceLandingView'));
const ServiceAreaView = lazyView(() => import('./views/ServiceAreaView'));
const ChallengeView = lazyView(() => import('./views/ChallengeView'));
const RealEstateLandingView = lazyView(() => import('./views/RealEstateLandingView'));
const ReferencesView = lazyView(() => import('./views/ReferencesView'));
const MartechView = lazyView(() => import('./views/MartechView'));
const ToolsView = lazyView(() => import('./views/ToolsView'));
const LabView = lazyView(() => import('./views/LabView'));
const ApproachView = lazyView(() => import('./views/ApproachView'));
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import { parseRoute } from './lib/routes';
import type { FinanceSlug } from './data/financeLanding';
import type { AreaId } from './data/serviceAreas';
import type { ChallengeSlug } from './data/challenges';
import { REAL_ESTATE_PAGES, type RealEstateSlug } from './data/realEstateLanding';
import { captureAttribution } from './lib/attribution';
import SEOHead from './components/SEOHead';
import { StickyMobileCta } from './components/bp/Conversion';
import { useScrollReveal } from './lib/useScrollReveal';
import { flushSync } from 'react-dom';
import { ContactModalProvider, useContactModal } from './context/ContactModalContext';

/** Code der Zielseite vorladen (verhindert den Suspense-Platzhalter und damit Layoutsprünge). */
const VIEW_PRELOAD: Partial<Record<string, () => Promise<void>>> = {
  skills: SkillsDirectory.preload,
  loesungen: SolutionsView.preload,
  loesungen_detail: SolutionDetailView.preload,
  finanz: FinanceLandingView.preload,
  leistungsfeld: ServiceAreaView.preload,
  loesung_herausforderung: ChallengeView.preload,
  immobilien_landing: RealEstateLandingView.preload,
  referenzen: ReferencesView.preload,
  martech: MartechView.preload,
  werkzeuge: ToolsView.preload,
  labor: LabView.preload,
  ansatz: ApproachView.preload,
  leistungen: ServicesView.preload,
  ressourcen: ResourcesView.preload,
  about: AboutView.preload,
  kontakt: ContactView.preload,
  impressum: LegalView.preload,
  datenschutz: LegalView.preload,
};
export function preloadRoute(pathname: string): Promise<void> {
  const fn = VIEW_PRELOAD[parseRoute(pathname).view];
  return fn ? fn().catch(() => undefined) : Promise.resolve();
}
/** Im Leerlauf alle Seiten vorladen, damit spätere Seitenwechsel ohne Wartezeit laufen. */
function prefetchAllViews() {
  const run = () => Object.values(VIEW_PRELOAD).forEach((fn) => fn?.().catch(() => undefined));
  const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
  if (w.requestIdleCallback) w.requestIdleCallback(run, { timeout: 4000 });
  else window.setTimeout(run, 2500);
}

/*
 * Seitenwechsel (Motion-System): View Transitions API, wo verfügbar (Chrome, Edge, Safari 18+), sonst eine kurze
 * CSS-Einblendung (.page-enter). Kein Warten auf eine Exit-Animation, der Inhalt wechselt sofort.
 * Scroll-Positionen werden pro History-Eintrag gemerkt und bei Zurück/Vor wiederhergestellt.
 */
const SCROLL_STORE = 'pb-scroll-positions';
const readScroll = (): Record<string, number> => {
  try {
    return JSON.parse(sessionStorage.getItem(SCROLL_STORE) || '{}');
  } catch {
    return {};
  }
};
const saveScroll = (key: string | undefined) => {
  if (!key) return;
  try {
    const all = readScroll();
    all[key] = window.scrollY;
    sessionStorage.setItem(SCROLL_STORE, JSON.stringify(all));
  } catch {
    /* privater Modus: ohne Wiederherstellung weiter */
  }
};
const newKey = () => Math.random().toString(36).slice(2, 10);
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Führt den Seitenwechsel aus, mit View Transition, wenn möglich. Gibt zurück, ob sie genutzt wurde. */
function runPageTransition(update: () => void): boolean {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (typeof doc.startViewTransition !== 'function' || reducedMotion()) {
    update();
    return false;
  }
  doc.startViewTransition(() => flushSync(update));
  return true;
}

/** Scroll-Position wiederherstellen, auch wenn die Seite (lazy) erst nachlädt. */
function restoreScroll(y: number) {
  const start = performance.now();
  const attempt = () => {
    window.scrollTo({ top: y, behavior: 'instant' });
    if (Math.abs(window.scrollY - y) > 2 && performance.now() - start < 1500) requestAnimationFrame(attempt);
  };
  attempt();
}

function AppContent() {
  const { openContactModal } = useContactModal();
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    captureAttribution();
  }, []);

  const historyKey = React.useRef<string | undefined>(undefined);
  const usedViewTransition = React.useRef(false);
  const firstRender = React.useRef(true);

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    prefetchAllViews();
    const state = window.history.state as { k?: string } | null;
    if (!state?.k) window.history.replaceState({ ...(state || {}), k: newKey() }, '');
    historyKey.current = (window.history.state as { k?: string }).k;
    const onHide = () => saveScroll(historyKey.current);
    window.addEventListener('pagehide', onHide);
    const saved = readScroll()[historyKey.current!];
    if (saved) restoreScroll(saved);
    return () => window.removeEventListener('pagehide', onHide);
  }, []);

  useEffect(() => {
    firstRender.current = false;
  }, [currentPath]);

  useEffect(() => {
    // Zurück/Vor: alte Position merken, neue wiederherstellen
    const handlePopState = (e: PopStateEvent) => {
      saveScroll(historyKey.current);
      const key = (e.state as { k?: string } | null)?.k;
      historyKey.current = key;
      const y = (key && readScroll()[key]) || 0;
      const target = window.location.pathname || '/';
      preloadRoute(target).then(() => {
        usedViewTransition.current = runPageTransition(() => setCurrentPath(target));
        restoreScroll(y);
      });
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
      // Alle Kontakt-CTAs öffnen das Overlay mit der Formularstrecke der aktuellen Seite
      openContactModal();
      return;
    }
    if (path === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: reducedMotion() ? 'instant' : 'smooth' });
      return;
    }
    saveScroll(historyKey.current);
    const key = newKey();
    historyKey.current = key;
    window.history.pushState({ k: key }, '', path);
    preloadRoute(path).then(() => {
      if (window.location.pathname !== path) return; // inzwischen weiternavigiert
      usedViewTransition.current = runPageTransition(() => {
        setCurrentPath(path);
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
    });
  };

  const parsed = React.useMemo(() => parseRoute(currentPath), [currentPath]);
  useScrollReveal(parsed.path);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#505050] flex flex-col justify-between selection:bg-[#686CFA] selection:text-white font-sans antialiased">
      <SEOHead route={parsed} />
      
      {/* Main Responsive Header */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main responsive viewport routing */}
      <main className="flex-grow overflow-hidden relative">
        <Suspense fallback={<div className="min-h-[80vh]" aria-busy="true" />}>
          <div
            key={parsed.view + (parsed.slug || '') + (parsed.subSection || '')}
            className={`w-full flex flex-col ${!firstRender.current && !usedViewTransition.current ? 'page-enter' : ''}`}
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
            {parsed.view === 'leistungsfeld' && parsed.slug && (
              <ServiceAreaView id={parsed.slug as AreaId} />
            )}
            {parsed.view === 'loesung_herausforderung' && parsed.slug && (
              <ChallengeView slug={parsed.slug as ChallengeSlug} />
            )}
            {parsed.view === 'immobilien_landing' && parsed.slug && (
              <RealEstateLandingView slug={parsed.slug as RealEstateSlug} />
            )}
            {parsed.view === 'referenzen' && <ReferencesView />}
            {parsed.view === 'martech' && <MartechView slug={parsed.slug} />}
            {parsed.view === 'werkzeuge' && <ToolsView />}
            {parsed.view === 'labor' && <LabView />}
            {parsed.view === 'ansatz' && <ApproachView />}
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
          </div>
        </Suspense>
      </main>

      {/* Global Sitemapped Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobiler Sticky-CTA (nicht auf der Kontaktseite und den Finanz-Landingpages mit eigenem Formular) */}
      {parsed.view !== 'kontakt' && parsed.view !== 'finanz' && parsed.view !== 'not_found' && (
        <StickyMobileCta
          key={parsed.path}
          onFallback={openContactModal}
          label={parsed.view === 'immobilien_landing' && parsed.slug ? REAL_ESTATE_PAGES[parsed.slug as RealEstateSlug]?.ctaLabel : undefined}
        />
      )}

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

