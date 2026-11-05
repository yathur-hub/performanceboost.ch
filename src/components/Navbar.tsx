import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Users, 
  Cpu, 
  Megaphone, 
  ShieldAlert, 
  PieChart, 
  Mail, 
  Calendar, 
  MapPin,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Phone,
  ShoppingCart,
  RefreshCcw,
  Landmark
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { motion, AnimatePresence } from 'motion/react';
import { SITE } from '../config/site';
import { SERVICE_AREAS, primaryAreaOf } from '../data/serviceAreas';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener to style floating header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when Mega Menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle keyboard Accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };

  // Mega-Menü nach Leistungsfeldern gruppiert; jede Leistung erscheint nur in ihrem Hauptfeld.
  const navGroups = SERVICE_AREAS.map((area) => ({
    area,
    services: SERVICES.filter((s) => primaryAreaOf(s.slug)?.id === area.id),
  }));

  return (
    <>
      {/* HEADER SECTION */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]' 
            : 'bg-[#f6f6f6]/95 backdrop-blur-sm border-b border-slate-200/25 py-3.5'
        }`} 
        id="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center">
            
            {/* Logo Brand Link */}
            <a 
              href="/" 
              onClick={(e) => handleLinkClick('/', e)}
              className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4] rounded-xl"
              id="header-brand-logo-link"
              aria-label="performanceboost Startseite"
            >
              <img 
                src="https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/perfromanceboost_logo_transparent-removebg-preview.png" 
                alt="performanceboost Logo" 
                className="h-[84px] md:h-[90px] w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Menü */}
            <div className="flex items-center">
              <button
                id="nav-toggle-button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-full border border-slate-200/80 bg-white hover:border-[#686DF4]/30 hover:bg-slate-50 text-slate-800 hover:text-[#686DF4] focus-visible:ring-2 focus-visible:ring-[#686DF4] focus-visible:outline-none transition-all duration-300 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                aria-expanded={isOpen}
                aria-controls="mega-menu"
                aria-label={isOpen ? "Menü schliessen" : "Menü öffnen"}
              >
                {isOpen ? <X className="w-4.5 h-4.5 text-[#686DF4]" /> : <Menu className="w-4.5 h-4.5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mega-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation-Dashboard"
            initial={{ opacity: 0, scale: 0.99, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.995, y: -2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#f8fafc] flex flex-col overflow-y-auto"
          >
            {/* Header Block inside drop overlay to keep alignment perfect */}
            <div className="border-b border-slate-200/65 py-3.5 px-6 sm:px-8 lg:px-10 bg-white/70 backdrop-blur-md sticky top-0 z-30">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Brand Logo inside overlay */}
                <a 
                  href="/" 
                  onClick={(e) => handleLinkClick('/', e)}
                  className="flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4] rounded-xl"
                  id="overlay-brand-logo-link"
                >
                  <img 
                    src="https://raw.githubusercontent.com/yathur-hub/performanceboost-brandassets/main/perfromanceboost_logo_transparent-removebg-preview.png" 
                    alt="performanceboost Logo" 
                    className="h-[84px] md:h-[90px] w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </a>

                {/* Direct Close Button in the upper right row */}
                <button
                  id="overlay-close-button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 pl-3 pr-4 py-2 rounded-full border border-slate-200 bg-[#696EEF] text-white hover:bg-[#5a5fe0] focus-visible:ring-2 focus-visible:ring-[#686DF4] cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <X className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-widest uppercase font-bold">SCHLIESSEN</span>
                </button>

              </div>
            </div>

            {/* MENÜ-INHALT (Desktop und Mobile): Leistungsfelder links, Unternehmen + Kontakt rechts */}
            <div className="flex-grow max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-10 py-8 lg:py-12" id="menu-contents">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                <nav aria-label="Leistungen" className="lg:col-span-8">
                  <div className="flex items-baseline justify-between mb-6">
                    <p className="text-sm font-semibold text-slate-500">Leistungen</p>
                    <a
                      href="/leistungen"
                      onClick={(e) => handleLinkClick('/leistungen', e)}
                      className="text-sm font-semibold text-[#696EEF] hover:text-slate-900 inline-flex items-center gap-1"
                    >
                      Alle Leistungen <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                    {navGroups.map(({ area, services }) => (
                      <div key={area.id} className="space-y-3">
                        <a
                          href={`/leistungen/${area.id}`}
                          onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                          className="group block"
                        >
                          <span className="block text-lg font-display font-semibold text-slate-900 group-hover:text-[#696EEF] transition-colors">
                            {area.label}
                          </span>
                          <span className="block text-sm text-slate-500 leading-snug mt-0.5">{area.shortLabel}</span>
                        </a>
                        <ul className="space-y-1.5 border-l border-slate-200 pl-4">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <a
                                href={`/leistungen/${s.slug}`}
                                onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)}
                                className={`block text-sm leading-snug py-0.5 transition-colors ${
                                  currentPath === `/leistungen/${s.slug}` ? 'text-[#696EEF] font-semibold' : 'text-slate-700 hover:text-[#696EEF]'
                                }`}
                              >
                                {s.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </nav>

                <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-12 space-y-8">
                  <nav aria-label="Unternehmen">
                    <ul className="space-y-1">
                      {[
                        { href: '/loesungen', label: 'Lösungen', desc: 'Nach Herausforderung und Branche' },
                        { href: '/referenzen', label: 'Referenzen', desc: 'Was Kundinnen und Kunden sagen' },
                        { href: '/ueber-uns', label: 'Über uns', desc: 'Wer hinter performanceboost steht' },
                        { href: '/skills', label: 'Skill-Factory', desc: 'Checks und Rechner für Ihre Analyse' },
                        { href: '/ressourcen', label: 'Ratgeber', desc: 'Leitfäden und Fachbeiträge' },
                      ].map((l) => (
                        <li key={l.href}>
                          <a
                            href={l.href}
                            onClick={(e) => handleLinkClick(l.href, e)}
                            className="group flex items-center justify-between gap-4 py-2.5 border-b border-slate-200/70"
                          >
                            <span>
                              <span className="block text-base font-display font-semibold text-slate-900 group-hover:text-[#696EEF] transition-colors">{l.label}</span>
                              <span className="block text-xs text-slate-500">{l.desc}</span>
                            </span>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#696EEF] shrink-0" aria-hidden="true" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="space-y-4">
                    <a
                      href="/kontakt"
                      onClick={(e) => handleLinkClick('/kontakt', e)}
                      className="w-full inline-flex items-center justify-center gap-2 min-h-12 bg-[#696EEF] hover:bg-[#5a5fe0] text-white font-display font-semibold px-6 py-3.5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#696EEF]/40"
                      id="mega-menu-cta"
                    >
                      Potenzial besprechen <ArrowRight className="w-4.5 h-4.5" aria-hidden="true" />
                    </a>
                    <p className="text-xs text-slate-500 text-center">30 Minuten, kostenlos und unverbindlich</p>
                    <div className="flex flex-col gap-2 pt-2 text-sm">
                      <a href={SITE.phoneHref} className="inline-flex items-center gap-2.5 text-slate-700 hover:text-[#696EEF] font-semibold">
                        <Phone className="w-4 h-4 text-[#696EEF]" aria-hidden="true" /> {SITE.phoneDisplay}
                      </a>
                      <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 text-slate-700 hover:text-[#696EEF] font-semibold">
                        <Mail className="w-4 h-4 text-[#696EEF]" aria-hidden="true" /> {SITE.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STATIC FOOTER RETAINED */}
            <div className="bg-slate-100 border-t border-slate-200/80 py-6 px-6 sm:px-8 lg:px-10 z-15 text-center text-[11px] text-slate-400/90 font-mono tracking-widest uppercase mt-auto">
              © {new Date().getFullYear()} <span className="normal-case">performanceboost</span> · Fläsch, Graubünden
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
