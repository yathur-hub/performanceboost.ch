import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, TrendingUp, Layers, Users, Cpu, Megaphone, ShieldAlert, PieChart, Mail, Calendar, MapPin, ChevronRight, ArrowUpRight, CheckCircle2, Clock, ShoppingCart, RefreshCcw, Landmark, Compass, Handshake, Plus } from 'lucide-react';
import { SERVICES } from '../data/services';
import { motion, AnimatePresence } from 'motion/react';
import { SITE } from '../config/site';
import { SERVICE_AREAS } from '../data/serviceAreas';

const AREA_ICONS = {
  strategie: Compass,
  'technologie-automation': Cpu,
  'wachstum-marketing': TrendingUp,
  'sales-revenue-operations': Handshake,
} as const;

const COMPANY_LINKS = [
  { href: '/loesungen', label: 'Lösungen', desc: 'Nach Herausforderung und Branche' },
  { href: '/referenzen', label: 'Referenzen', desc: 'Was Kundinnen und Kunden sagen' },
  { href: '/ueber-uns', label: 'Über uns', desc: 'Wer hinter performanceboost steht' },
  { href: '/skills', label: 'Skill-Factory', desc: 'Checks und Rechner für Ihre Analyse' },
  { href: '/ressourcen', label: 'Ratgeber', desc: 'Leitfäden und Fachbeiträge' },
];

const menuItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mobil: Leistungsfelder als Akkordeon (nur Titel + Plus), ab sm vollständig sichtbar
  const [openArea, setOpenArea] = useState<string | null>(null);

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

  useEffect(() => {
    if (!isOpen) setOpenArea(null);
  }, [isOpen]);

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(path);
    setIsOpen(false);
  };

  // Mega-Menü nach Leistungsfeldern gruppiert; jede Leistung erscheint nur in ihrem Hauptfeld.
  // Links pro Leistungsfeld: alle zugeordneten Leistungen; Felder mit weniger als 3 Leistungen
  // werden mit ihren Themen ergänzt (Link auf den Hub), damit die Karten ausgewogen sind.
  const navGroups = SERVICE_AREAS.map((area) => {
    const services = area.services
      .map((slug) => SERVICES.find((s) => s.slug === slug))
      .filter((s): s is (typeof SERVICES)[number] => Boolean(s))
      .map((s) => ({ key: s.slug, title: s.title, href: `/leistungen/${s.slug}` }));
    const topics = area.topics
      .filter((t) => !services.some((s) => s.title.split(' ')[0] === t.title.split(' ')[0]))
      .slice(0, Math.max(0, 4 - services.length))
      .map((t) => ({ key: t.title, title: t.title, href: `/leistungen/${area.id}` }));
    return { area, services: [...services, ...topics] };
  });

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
                className="h-[72px] md:h-[90px] w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
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
            className="fixed inset-0 z-40 bg-[#f6f6f6] flex flex-col overflow-y-auto"
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
                    className="h-[72px] md:h-[90px] w-auto object-contain"
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

            {/* MENÜ-INHALT: Leistungsfeld-Karten links, Navigation + Kontaktkarte rechts */}
            <div className="flex-grow max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-10 lg:pt-8" id="menu-contents">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
              >
                {/* Leistungsfelder */}
                <nav aria-label="Leistungen" className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                  {navGroups.map(({ area, services }) => {
                    const Icon = AREA_ICONS[area.id];
                    return (
                      <motion.div
                        key={area.id}
                        variants={menuItem}
                        className="group/card flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-slate-200/70 p-4 sm:p-6 transition-all duration-300 hover:border-[#696EEF]/40 hover:shadow-[0_12px_40px_-12px_rgba(105,110,239,0.25)]"
                      >
                        {/* Mobil: Titel mit Plus, öffnet die Unterpunkte */}
                        <button
                          type="button"
                          onClick={() => setOpenArea(openArea === area.id ? null : area.id)}
                          aria-expanded={openArea === area.id}
                          aria-controls={`menu-area-${area.id}`}
                          className="sm:hidden w-full flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#696EEF] rounded-xl"
                        >
                          <span className="w-9 h-9 rounded-xl bg-[#696EEF]/10 text-[#696EEF] flex items-center justify-center shrink-0">
                            <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                          </span>
                          <span className="flex-1 text-base font-display font-semibold text-slate-900">{area.shortLabel}</span>
                          <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openArea === area.id ? 'bg-[#696EEF] border-[#696EEF] text-white rotate-45' : 'border-slate-200 text-slate-600'}`}>
                            <Plus className="w-4 h-4" aria-hidden="true" />
                          </span>
                        </button>
                        {/* Ab sm: Titel als Link mit Kurzbeschreibung */}
                        <a
                          href={`/leistungen/${area.id}`}
                          onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                          className="hidden sm:flex items-start gap-4 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#696EEF]"
                        >
                          <span className="w-11 h-11 rounded-2xl bg-[#696EEF]/10 text-[#696EEF] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover/card:bg-[#696EEF] group-hover/card:text-white">
                            <Icon className="w-5 h-5" aria-hidden="true" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-lg font-display font-semibold text-slate-900 leading-tight">{area.shortLabel}</span>
                            <span className="block mt-1 text-[13px] text-slate-500 leading-snug">{area.teaser}</span>
                          </span>
                        </a>
                        <div id={`menu-area-${area.id}`} className={`menu-accordion flex-1 ${openArea === area.id ? 'is-open' : ''}`}>
                        <div className="flex flex-col h-full">
                        <ul className="mt-4 pt-3 border-t border-slate-100 space-y-0.5">
                          {services.map((s) => {
                            const active = currentPath === s.href && s.href !== `/leistungen/${area.id}`;
                            return (
                              <li key={s.key}>
                                <a
                                  href={s.href}
                                  onClick={(e) => handleLinkClick(s.href, e)}
                                  aria-current={active ? 'page' : undefined}
                                  className={`group/link flex items-center justify-between gap-3 rounded-xl px-3 py-2 -mx-3 text-sm transition-colors ${
                                    active ? 'bg-[#696EEF]/10 text-[#4f54d6] font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                                  }`}
                                >
                                  <span>{s.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#696EEF] opacity-0 -translate-x-1 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0" aria-hidden="true" />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                        <a
                          href={`/leistungen/${area.id}`}
                          onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                          className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#696EEF] hover:text-[#4f54d6]"
                        >
                          Zum Leistungsfeld <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                        </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Navigation + Kontakt */}
                <div className="lg:col-span-4 flex flex-col gap-5">
                  <motion.nav variants={menuItem} aria-label="Unternehmen" className="rounded-3xl bg-white border border-slate-200/70 p-2">
                    <ul>
                      {COMPANY_LINKS.map((l) => {
                        const active = currentPath === l.href;
                        return (
                          <li key={l.href}>
                            <a
                              href={l.href}
                              onClick={(e) => handleLinkClick(l.href, e)}
                              aria-current={active ? 'page' : undefined}
                              className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors ${active ? 'bg-[#696EEF]/10' : 'hover:bg-slate-50'}`}
                            >
                              <span className="flex-1 min-w-0">
                                <span className={`block font-display font-semibold ${active ? 'text-[#4f54d6]' : 'text-slate-900 group-hover:text-[#4f54d6]'} transition-colors`}>{l.label}</span>
                                <span className="block text-xs text-slate-500 truncate">{l.desc}</span>
                              </span>
                              <ArrowRight className="w-4 h-4 text-slate-300 transition-all group-hover:text-[#696EEF] group-hover:translate-x-0.5" aria-hidden="true" />
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.nav>

                  <motion.div variants={menuItem} className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-6">
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#696EEF]/30 blur-3xl pointer-events-none" aria-hidden="true" />
                    <div className="relative flex items-center gap-3">
                      <img
                        src={SITE.portraitUrl}
                        alt="Yathur Nathan"
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-2xl object-cover border border-white/15"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-display font-semibold leading-tight">Yathur Nathan</p>
                        <p className="text-xs text-slate-400">Inhaber, Ihr direkter Ansprechpartner</p>
                      </div>
                    </div>
                    <p className="relative mt-4 text-sm text-slate-300 leading-relaxed">
                      In 30 kostenlosen Minuten schauen wir gemeinsam, wo sich in Ihrem Unternehmen am meisten bewegen lässt.
                    </p>
                    <a
                      href="/kontakt"
                      onClick={(e) => handleLinkClick('/kontakt', e)}
                      id="mega-menu-cta"
                      className="relative mt-5 w-full inline-flex items-center justify-center gap-2 min-h-12 bg-[#696EEF] hover:bg-[#5a5fe0] text-white font-display font-semibold px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#696EEF]/40"
                    >
                      Potenzial besprechen <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <div className="relative mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-slate-400">
                      <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                        <Mail className="w-3.5 h-3.5" aria-hidden="true" /> {SITE.email}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
