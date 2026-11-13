/**
 * Navigation: minimaler Header (Logo · «Gespräch anfragen» · Menü-Button) auf allen Breiten,
 * die gesamte Navigation liegt ausschliesslich im Mega-Menü (Entscheid Inhaber, 13.11.2026).
 *
 * Mega-Menü: Panel direkt unter dem Header, öffnet und schliesst per Klick auf den Menü-Button,
 * schliesst mit Escape, Klick auf den abgedunkelten Hintergrund und bei Seitenwechsel.
 * Fokus springt beim Öffnen ins Menü, bleibt darin (Tab-Schleife inkl. Menü-Button) und kehrt beim Schliessen zurück.
 * Informationsarchitektur unverändert: Marketing · Sales · Prozesse (mit Leistungen) · Ansatz · Agentic AI · Wissen · Unternehmen · Kontakt.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, TrendingUp, Handshake, Cpu, Mail, Plus, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'motion/react';
import { EASE_OUT, EASE_EXIT, DURATIONS } from '../lib/motion';
import { SITE } from '../config/site';
import { AREAS, menuServicesOf } from '../data/serviceAreas';
import { useContactModal } from '../context/ContactModalContext';
import { trackEvent } from '../lib/analytics';

const AREA_ICONS: Record<string, typeof TrendingUp> = {
  marketing: TrendingUp,
  sales: Handshake,
  prozesse: Cpu,
};

const APPROACH_LINKS = [
  { href: '/ansatz', label: 'Unser Ansatz', desc: 'Vier Phasen, Einstieg dort, wo Sie stehen', icon: Layers },
  { href: '/leistungen/ki-im-unternehmen', label: 'Agentic AI', desc: 'Regel, KI oder Agent, und wer entscheidet', icon: Sparkles },
];

const KNOWLEDGE_LINKS = [
  { href: '/martech', label: 'MarTech-Wissen' },
  { href: '/labor', label: 'Labor' },
  { href: '/werkzeuge', label: 'Werkzeuge' },
  { href: '/ressourcen', label: 'Ratgeber' },
  { href: '/skills', label: 'Skill-Factory' },
];

const COMPANY_LINKS = [
  { href: '/leistungen', label: 'Alle Leistungen' },
  { href: '/loesungen', label: 'Lösungen nach Branche' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
];

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mobil (unter md): Bereiche als Akkordeon
  const [openArea, setOpenArea] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const { openContactModal } = useContactModal();

  const close = useCallback((restoreFocus = true) => {
    setIsOpen(false);
    if (restoreFocus) requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Höhe des Headers messen: Das Panel beginnt direkt darunter und füllt den Rest des Viewports
  useEffect(() => {
    if (!headerRef.current) return;
    const ro = new ResizeObserver(([entry]) => setHeaderHeight(Math.round(entry.target.getBoundingClientRect().height)));
    ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  // Hintergrund nicht scrollen, solange das Menü offen ist (Scrollbar-Breite ausgleichen, kein Layoutsprung)
  useEffect(() => {
    if (!isOpen) return;
    const sw = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (sw > 0) {
      document.body.style.paddingRight = `${sw}px`;
      if (headerRef.current) headerRef.current.style.paddingRight = `${sw}px`;
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      if (headerRef.current) headerRef.current.style.paddingRight = '';
    };
  }, [isOpen]);

  // Beim Öffnen: Fokus auf den ersten Link im Menü
  useEffect(() => {
    if (!isOpen) {
      setOpenArea(null);
      return;
    }
    const t = window.setTimeout(() => {
      const nodes: HTMLElement[] = panelRef.current ? Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)) : [];
      const first = nodes.find((el) => el.offsetParent !== null);
      first?.focus();
    }, 30);
    return () => window.clearTimeout(t);
  }, [isOpen]);

  // Seitenwechsel schliesst das Menü
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  // Escape schliesst, Tab bleibt innerhalb von Menü-Button und Panel
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current || !buttonRef.current) return;
      const items = [buttonRef.current, ...Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))].filter(
        (el) => el.offsetParent !== null || el === buttonRef.current,
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  const go = (path: string, e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    setIsOpen(false);
    onNavigate(path);
  };

  const openCta = (location: string, e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    trackEvent('cta_click', { cta_location: location, cta_target: 'overlay', page_slug: currentPath });
    setIsOpen(false);
    openContactModal();
  };

  const isCurrent = (href: string) => currentPath === href;
  const linkState = (href: string) =>
    isCurrent(href) ? 'text-[#4f54d6] font-semibold' : 'text-slate-700 hover:text-[#4f54d6]';

  // Mega-Menü: Container gleitet ein, danach erscheinen die Gruppen gestaffelt. Schliessen kürzer und ohne Staffel.
  const panelVariants: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.12 } }, exit: { opacity: 0, transition: { duration: 0.12 } } }
    : {
        hidden: { opacity: 0, y: -14, clipPath: 'inset(0 0 12% 0 round 0 0 32px 32px)' },
        visible: {
          opacity: 1,
          y: 0,
          clipPath: 'inset(0 0 0% 0 round 0 0 32px 32px)',
          transition: { duration: 0.42, ease: EASE_OUT, staggerChildren: 0.06, delayChildren: 0.1 },
        },
        exit: { opacity: 0, y: -10, transition: { duration: DURATIONS.menuExit, ease: EASE_EXIT } },
      };
  const groupVariants: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.46, ease: EASE_OUT } },
      };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? 'py-2.5' : 'py-3.5'
      } ${
        isOpen
          ? 'bg-white border-b border-[#E0E0E0]'
          : scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-[#f6f6f6]/95 backdrop-blur-sm border-b border-slate-200/25'
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto pl-[max(var(--page-gutter),env(safe-area-inset-left))] pr-[max(var(--page-gutter),env(safe-area-inset-right))] sm:px-8 lg:px-10">
        <div className="flex justify-between items-center gap-3 min-[380px]:gap-4">
          <a
            href="/"
            onClick={(e) => go('/', e)}
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] rounded-xl shrink-0"
            id="header-brand-logo-link"
            aria-label="performanceboost Startseite"
          >
            <img
              src={SITE.logoUrl}
              alt="performanceboost Logo"
              width={240}
              height={90}
              className="h-[60px] min-[380px]:h-[72px] md:h-[90px] w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </a>

          <div className="flex items-center gap-2.5">
            <a
              href="/kontakt"
              onClick={(e) => openCta('header', e)}
              data-cta="header"
              className="btn-press hidden sm:inline-flex items-center gap-2 min-h-11 bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/40"
            >
              Gespräch anfragen
            </a>
            <button
              ref={buttonRef}
              id="nav-toggle-button"
              type="button"
              onClick={() => (isOpen ? close() : setIsOpen(true))}
              aria-expanded={isOpen}
              aria-controls="mega-menu"
              aria-haspopup="dialog"
              className={`inline-flex items-center justify-center gap-2 min-h-11 sm:min-w-[8.75rem] pl-3.5 pr-4 sm:pr-5 rounded-full border shrink-0 font-display font-semibold text-sm transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/30 ${
                isOpen ? 'bg-slate-950 border-slate-950 text-white' : 'bg-white border-slate-200/80 text-slate-900 hover:border-[#686CFA]/40 hover:text-[#4f54d6]'
              }`}
            >
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>{isOpen ? 'Schliessen' : 'Menü'}</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Hintergrund unter dem Header: Klick schliesst */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.36, ease: EASE_OUT } }}
              exit={{ opacity: 0, transition: { duration: DURATIONS.menuExit, ease: EASE_EXIT } }}
              className="fixed inset-x-0 bottom-0 bg-slate-950/35 backdrop-blur-[2px]"
              style={{ top: headerHeight }}
              onClick={() => close(false)}
              aria-hidden="true"
            />

            <motion.div
              key="panel"
              ref={panelRef}
              id="mega-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Hauptmenü"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-x-0 top-full overflow-y-auto overscroll-contain bg-white border-b border-[#E0E0E0] shadow-[0_40px_80px_-40px_rgba(15,23,42,0.35)] rounded-b-[2rem]"
              style={{ maxHeight: `calc(100dvh - ${headerHeight}px)` }}
            >
              <div className="max-w-7xl mx-auto px-4 min-[380px]:px-6 sm:px-8 lg:px-10 pt-5 md:pt-10 pb-[max(2rem,calc(env(safe-area-inset-bottom)+1.5rem))] md:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* LINKS: Was wir verbessern (Bereiche mit Leistungen) und wie wir vorgehen */}
                  <div className="lg:col-span-8 space-y-8">
                    <div>
                      <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">Leistungen</p>
                      <nav aria-label="Bereiche und Leistungen" className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
                        {AREAS.map((area) => {
                          const Icon = AREA_ICONS[area.id] ?? Cpu;
                          const services = menuServicesOf(area);
                          const hub = `/leistungen/${area.id}`;
                          const expanded = openArea === area.id;
                          return (
                            <motion.div key={area.id} variants={groupVariants} className="rounded-2xl border border-[#E0E0E0] md:border-0 md:rounded-none p-4 md:p-0">
                              {/* Mobil: Akkordeon-Kopf */}
                              <button
                                type="button"
                                onClick={() => setOpenArea(expanded ? null : area.id)}
                                aria-expanded={expanded}
                                aria-controls={`menu-area-${area.id}`}
                                className="md:hidden w-full flex items-center gap-3 text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA]"
                              >
                                <span className="w-9 h-9 rounded-xl bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center shrink-0">
                                  <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                                </span>
                                <span className="flex-1 min-w-0">
                                  <span className="block font-display font-semibold text-slate-900">{area.label}</span>
                                  <span className="block text-xs text-slate-500">{area.subtitle}</span>
                                </span>
                                <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${expanded ? 'bg-[#686CFA] border-[#686CFA] text-white rotate-45' : 'border-slate-200 text-slate-600'}`}>
                                  <Plus className="w-4 h-4" aria-hidden="true" />
                                </span>
                              </button>
                              {/* Ab md: Kopf als Link auf die Bereichsseite */}
                              <a href={hub} onClick={(e) => go(hub, e)} aria-current={isCurrent(hub) ? 'page' : undefined} className="hidden md:block group rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA]">
                                <span className="w-10 h-10 rounded-2xl bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#686CFA] group-hover:text-white">
                                  <Icon className="w-5 h-5" aria-hidden="true" />
                                </span>
                                <span className={`block mt-4 text-2xl font-display font-semibold group-hover:text-[#4f54d6] transition-colors ${isCurrent(hub) ? 'text-[#4f54d6]' : 'text-slate-900'}`}>{area.label}</span>
                                <span className="block mt-0.5 text-sm text-slate-500">{area.subtitle}</span>
                              </a>
                              <div id={`menu-area-${area.id}`} className={`menu-accordion ${expanded ? 'is-open' : ''}`}>
                                <div>
                                  <ul className="mt-4 pt-3 md:mt-5 md:pt-5 border-t border-slate-100 space-y-1">
                                    {services.map((s) => {
                                      const href = `/leistungen/${s.slug}`;
                                      return (
                                        <li key={s.slug}>
                                          <a
                                            href={href}
                                            onClick={(e) => go(href, e)}
                                            aria-current={isCurrent(href) ? 'page' : undefined}
                                            className={`flex items-center min-h-11 md:min-h-0 md:block rounded-lg py-1.5 text-[15px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] ${linkState(href)}`}
                                          >
                                            <span className="link-underline">{s.title}</span>
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                  <a href={hub} onClick={(e) => go(hub, e)} className="mt-1 md:mt-3 inline-flex items-center gap-1.5 min-h-11 md:min-h-0 text-[13px] font-semibold text-[#686CFA] hover:text-[#4f54d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] rounded">
                                    Alles zu {area.labelZu} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                  </a>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </nav>
                    </div>

                    <motion.nav variants={groupVariants} aria-label="Vorgehen" className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-6 md:border-t md:border-slate-100">
                      {APPROACH_LINKS.map((l) => {
                        const Icon = l.icon;
                        return (
                          <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => go(l.href, e)}
                            aria-current={isCurrent(l.href) ? 'page' : undefined}
                            className={`group flex items-center gap-4 rounded-2xl border p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] ${isCurrent(l.href) ? 'bg-[#686CFA]/10 border-[#CBCBFC]' : 'bg-[#f6f6f6] border-transparent hover:border-[#CBCBFC] hover:bg-white'}`}
                          >
                            <span className="w-9 h-9 rounded-xl bg-[#CBCBFC]/60 text-[#4f54d6] flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="block font-display font-semibold text-slate-900 group-hover:text-[#4f54d6] transition-colors">{l.label}</span>
                              <span className="block text-xs text-slate-500">{l.desc}</span>
                            </span>
                            <ArrowRight className="w-4 h-4 text-slate-300 transition-all group-hover:text-[#686CFA] group-hover:translate-x-0.5" aria-hidden="true" />
                          </a>
                        );
                      })}
                    </motion.nav>
                  </div>

                  {/* RECHTS: Wissen, Unternehmen, Kontakt */}
                  <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 lg:border-l lg:border-slate-100 lg:pl-10">
                    <motion.div variants={groupVariants} className="grid grid-cols-2 gap-6 sm:col-span-1">
                      {[
                        { label: 'Wissen', links: KNOWLEDGE_LINKS },
                        { label: 'Unternehmen', links: COMPANY_LINKS },
                      ].map((g) => (
                        <nav key={g.label} aria-label={g.label}>
                          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-400">{g.label}</p>
                          <ul className="mt-2 md:mt-3 md:space-y-1">
                            {g.links.map((l) => (
                              <li key={l.href}>
                                <a
                                  href={l.href}
                                  onClick={(e) => go(l.href, e)}
                                  aria-current={isCurrent(l.href) ? 'page' : undefined}
                                  className={`flex items-center min-h-11 md:min-h-0 md:block rounded-lg py-1.5 text-[15px] leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] ${linkState(l.href)}`}
                                >
                                  <span className="link-underline">{l.label}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </nav>
                      ))}
                    </motion.div>

                    <motion.div variants={groupVariants} className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-6">
                      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#686CFA]/30 blur-3xl pointer-events-none" aria-hidden="true" />
                      <div className="relative flex items-center gap-3">
                        <img src={SITE.portraitUrl} alt="" width={48} height={48} loading="lazy" className="w-12 h-12 rounded-2xl object-cover border border-white/15" referrerPolicy="no-referrer" />
                        <div>
                          <p className="font-display font-semibold leading-tight">Yathur Nathan</p>
                          <p className="text-xs text-slate-400">Inhaber, Ihr direkter Ansprechpartner</p>
                        </div>
                      </div>
                      <p className="relative mt-4 text-sm text-slate-300 leading-relaxed">
                        In 30 kostenlosen Minuten schauen wir, wo Marketing, Vertrieb oder Abläufe in Ihrem Unternehmen am meisten bremsen.
                      </p>
                      <a
                        href="/kontakt"
                        onClick={(e) => openCta('mega_menu', e)}
                        id="mega-menu-cta"
                        className="btn-press relative mt-5 w-full inline-flex items-center justify-center gap-2 min-h-12 bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/40"
                      >
                        Gespräch anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                      <a href={`mailto:${SITE.email}`} className="relative mt-2 flex justify-center items-center gap-1.5 min-h-11 text-xs text-slate-400 hover:text-white transition-colors">
                        <Mail className="w-3.5 h-3.5" aria-hidden="true" /> {SITE.email}
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
