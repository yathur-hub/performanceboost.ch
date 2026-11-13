/**
 * Navigation (Positionierung «agentic marketing, sales & processes», docs/agentic-positioning/01).
 *
 * Desktop (ab lg): Marketing · Sales · Processes dominieren, je mit kompaktem Panel für die Leistungen
 * (Hover und Tastatur über :focus-within), danach Ansatz und Wissen als einfache Links und ein CTA.
 * Das Overlay-Menü (☰) bleibt für alle Breiten und enthält die vollständige Struktur; mobil ist es die Hauptnavigation.
 */
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, TrendingUp, Handshake, Cpu, Mail, Plus, ChevronDown, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE } from '../config/site';
import { AREAS, menuServicesOf, type AreaId } from '../data/serviceAreas';
import { useContactModal } from '../context/ContactModalContext';
import { trackEvent } from '../lib/analytics';

const AREA_ICONS: Record<string, typeof TrendingUp> = {
  marketing: TrendingUp,
  sales: Handshake,
  prozesse: Cpu,
};

const KNOWLEDGE_LINKS = [
  { href: '/martech', label: 'MarTech-Wissen', desc: 'Landkarte, Architektur, Daten und KI-Agenten' },
  { href: '/labor', label: 'Labor', desc: 'Eigene Experimente mit KI und Automation' },
  { href: '/werkzeuge', label: 'Werkzeuge', desc: 'Womit wir arbeiten, nach Schicht geordnet' },
  { href: '/ressourcen', label: 'Ratgeber', desc: 'Leitfäden und Fachbeiträge' },
  { href: '/skills', label: 'Skill-Factory', desc: 'Checks und Rechner für Ihre Analyse' },
];

const COMPANY_LINKS = [
  { href: '/loesungen', label: 'Lösungen nach Branche', desc: 'Von Treuhand bis Industrie' },
  { href: '/referenzen', label: 'Referenzen', desc: 'Was Kundinnen und Kunden sagen' },
  { href: '/ueber-uns', label: 'Über uns', desc: 'Wer hinter performanceboost steht' },
];

const APPROACH_LINKS = [
  { href: '/ansatz', label: 'Unser Ansatz', desc: 'Vier Phasen, Einstieg dort, wo Sie stehen', icon: Layers },
  { href: '/leistungen/ki-im-unternehmen', label: 'Agentic AI', desc: 'Regel, KI oder Agent, und wer entscheidet', icon: Sparkles },
];

const menuItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } },
};

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

/** Bereich, zu dem der aktuelle Pfad gehört (Hub oder eine seiner Leistungen). */
function activeAreaOf(path: string): AreaId | null {
  const area = AREAS.find((a) => path === `/leistungen/${a.id}` || a.services.some((s) => path === `/leistungen/${s}`));
  return area ? area.id : null;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mobil: Bereiche im Overlay als Akkordeon (nur Titel + Plus), ab sm vollständig sichtbar
  const [openArea, setOpenArea] = useState<string | null>(null);
  const { openContactModal } = useContactModal();
  const activeArea = activeAreaOf(currentPath);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hintergrund nicht scrollen, solange das Overlay offen ist
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape schliesst Overlay und Panels (Panels: Fokus aus dem Header nehmen)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      setIsOpen(false);
      const el = document.activeElement as HTMLElement | null;
      if (el && el.closest('[data-nav-panel-group]')) el.blur();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) setOpenArea(null);
  }, [isOpen]);

  const handleLinkClick = (path: string, e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    onNavigate(path);
    setIsOpen(false);
    // Panel nach Klick schliessen (Fokus verlassen)
    (e.currentTarget as HTMLElement).blur();
  };

  const openCta = (location: string, e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    trackEvent('cta_click', { cta_location: location, cta_target: 'overlay', page_slug: currentPath });
    setIsOpen(false);
    openContactModal();
  };

  const topLinkClass = (active: boolean) =>
    `inline-flex items-center gap-1 px-3.5 py-2 rounded-full text-[15px] font-display font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] ${
      active ? 'text-[#4f54d6] bg-[#686CFA]/10' : 'text-slate-800 hover:text-[#4f54d6] hover:bg-white'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/50 py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.03)]'
            : 'bg-[#f6f6f6]/95 backdrop-blur-sm border-b border-slate-200/25 py-3.5'
        }`}
        id="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center gap-4">
            <a
              href="/"
              onClick={(e) => handleLinkClick('/', e)}
              className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] rounded-xl shrink-0"
              id="header-brand-logo-link"
              aria-label="performanceboost Startseite"
            >
              <img
                src={SITE.logoUrl}
                alt="performanceboost Logo"
                className="h-[72px] md:h-[90px] w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Hauptnavigation ab lg: die drei Bereiche dominieren */}
            <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-1 ml-auto">
              {AREAS.map((area) => {
                const services = menuServicesOf(area);
                const active = activeArea === area.id;
                return (
                  <div key={area.id} className="relative group" data-nav-panel-group>
                    <a
                      href={`/leistungen/${area.id}`}
                      onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                      aria-current={currentPath === `/leistungen/${area.id}` ? 'page' : undefined}
                      className={topLinkClass(active)}
                    >
                      {area.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                    </a>
                    {/* Panel: sichtbar bei Hover oder wenn ein Link darin den Fokus hat */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[22rem] invisible opacity-0 translate-y-1 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0">
                      <div className="rounded-2xl bg-white border border-[#E0E0E0] shadow-[0_18px_50px_-16px_rgba(79,79,79,0.28)] p-2">
                        <p className="px-3 pt-2.5 pb-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#686CFA]">{area.subtitle}</p>
                        <ul>
                          {services.map((s) => {
                            const cur = currentPath === `/leistungen/${s.slug}`;
                            return (
                              <li key={s.slug}>
                                <a
                                  href={`/leistungen/${s.slug}`}
                                  onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)}
                                  aria-current={cur ? 'page' : undefined}
                                  className={`block rounded-xl px-3 py-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] ${cur ? 'bg-[#686CFA]/10' : 'hover:bg-[#f6f6f6]'}`}
                                >
                                  <span className={`block text-sm font-semibold ${cur ? 'text-[#4f54d6]' : 'text-slate-900'}`}>{s.title}</span>
                                  <span className="block mt-0.5 text-xs text-slate-500 leading-snug line-clamp-2">{s.shortDesc}</span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                        <a
                          href={`/leistungen/${area.id}`}
                          onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                          className="mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-semibold text-[#4f54d6] bg-[#686CFA]/[0.06] hover:bg-[#686CFA]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA]"
                        >
                          Alles zu {area.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
              <span className="w-px h-5 bg-slate-300/70 mx-2" aria-hidden="true" />
              <a href="/ansatz" onClick={(e) => handleLinkClick('/ansatz', e)} aria-current={currentPath === '/ansatz' ? 'page' : undefined} className={topLinkClass(currentPath === '/ansatz')}>
                Ansatz
              </a>
              <a
                href="/martech"
                onClick={(e) => handleLinkClick('/martech', e)}
                aria-current={currentPath === '/martech' ? 'page' : undefined}
                className={topLinkClass(currentPath.startsWith('/martech') || currentPath === '/labor' || currentPath === '/werkzeuge')}
              >
                Wissen
              </a>
            </nav>

            <div className="flex items-center gap-2.5 ml-auto lg:ml-3">
              <a
                href="/kontakt"
                onClick={(e) => openCta('header', e)}
                data-cta="header"
                className="hidden sm:inline-flex items-center gap-2 min-h-11 bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold text-sm px-5 py-2.5 rounded-full transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/40"
              >
                Gespräch anfragen
              </a>
              <button
                id="nav-toggle-button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-full border border-slate-200/80 bg-white hover:border-[#686CFA]/30 hover:bg-slate-50 text-slate-800 hover:text-[#686CFA] focus-visible:ring-2 focus-visible:ring-[#686CFA] focus-visible:outline-none transition-all duration-300 cursor-pointer shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                aria-expanded={isOpen}
                aria-controls="mega-menu"
                aria-label={isOpen ? 'Menü schliessen' : 'Menü öffnen'}
              >
                {isOpen ? <X className="w-4.5 h-4.5 text-[#686CFA]" /> : <Menu className="w-4.5 h-4.5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY-MENÜ: vollständige Struktur, mobil die Hauptnavigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mega-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0, scale: 0.99, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.995, y: -2 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#f6f6f6] flex flex-col overflow-y-auto"
          >
            <div className="border-b border-slate-200/65 py-3.5 px-6 sm:px-8 lg:px-10 bg-white/70 backdrop-blur-md sticky top-0 z-30">
              <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a
                  href="/"
                  onClick={(e) => handleLinkClick('/', e)}
                  className="flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] rounded-xl"
                  id="overlay-brand-logo-link"
                >
                  <img src={SITE.logoUrl} alt="performanceboost Logo" className="h-[72px] md:h-[90px] w-auto object-contain" referrerPolicy="no-referrer" />
                </a>
                <button
                  id="overlay-close-button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 pl-3 pr-4 py-2 rounded-full border border-slate-200 bg-[#686CFA] text-white hover:bg-[#5a5fe0] focus-visible:ring-2 focus-visible:ring-[#686CFA] cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <X className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono tracking-widest uppercase font-bold">Schliessen</span>
                </button>
              </div>
            </div>

            <div className="flex-grow max-w-7xl w-full mx-auto px-5 sm:px-8 lg:px-10 pt-6 pb-10 lg:pt-8" id="menu-contents">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
              >
                <div className="lg:col-span-8 space-y-4 lg:space-y-5">
                  {/* Die drei Bereiche */}
                  <nav aria-label="Bereiche" className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
                    {AREAS.map((area) => {
                      const Icon = AREA_ICONS[area.id] ?? Cpu;
                      const services = menuServicesOf(area);
                      return (
                        <motion.div
                          key={area.id}
                          variants={menuItem}
                          className="group/card flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-slate-200/70 p-4 sm:p-6 transition-all duration-300 hover:border-[#686CFA]/40 hover:shadow-[0_12px_40px_-12px_rgba(104,108,250,0.25)]"
                        >
                          {/* Mobil: Titel mit Plus, öffnet die Leistungen */}
                          <button
                            type="button"
                            onClick={() => setOpenArea(openArea === area.id ? null : area.id)}
                            aria-expanded={openArea === area.id}
                            aria-controls={`menu-area-${area.id}`}
                            className="sm:hidden w-full flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA] rounded-xl"
                          >
                            <span className="w-9 h-9 rounded-xl bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center shrink-0">
                              <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                            </span>
                            <span className="flex-1 min-w-0">
                              <span className="block text-base font-display font-semibold text-slate-900">{area.label}</span>
                              <span className="block text-xs text-slate-500">{area.subtitle}</span>
                            </span>
                            <span className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openArea === area.id ? 'bg-[#686CFA] border-[#686CFA] text-white rotate-45' : 'border-slate-200 text-slate-600'}`}>
                              <Plus className="w-4 h-4" aria-hidden="true" />
                            </span>
                          </button>
                          {/* Ab sm: Titel als Link */}
                          <a
                            href={`/leistungen/${area.id}`}
                            onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                            className="hidden sm:block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686CFA]"
                          >
                            <span className="w-11 h-11 rounded-2xl bg-[#686CFA]/10 text-[#686CFA] flex items-center justify-center transition-colors duration-300 group-hover/card:bg-[#686CFA] group-hover/card:text-white">
                              <Icon className="w-5 h-5" aria-hidden="true" />
                            </span>
                            <span className="block mt-4 text-xl font-display font-semibold text-slate-900 leading-tight">{area.label}</span>
                            <span className="block mt-1 text-[13px] text-slate-500 leading-snug">{area.subtitle}</span>
                          </a>
                          <div id={`menu-area-${area.id}`} className={`menu-accordion flex-1 ${openArea === area.id ? 'is-open' : ''}`}>
                            <div className="flex flex-col h-full">
                              <ul className="mt-4 pt-3 border-t border-slate-100 space-y-0.5">
                                {services.map((s) => {
                                  const active = currentPath === `/leistungen/${s.slug}`;
                                  return (
                                    <li key={s.slug}>
                                      <a
                                        href={`/leistungen/${s.slug}`}
                                        onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)}
                                        aria-current={active ? 'page' : undefined}
                                        className={`block rounded-xl px-3 py-2 -mx-3 text-sm leading-snug transition-colors ${
                                          active ? 'bg-[#686CFA]/10 text-[#4f54d6] font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                                        }`}
                                      >
                                        {s.title}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                              <a
                                href={`/leistungen/${area.id}`}
                                onClick={(e) => handleLinkClick(`/leistungen/${area.id}`, e)}
                                className="mt-auto pt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#686CFA] hover:text-[#4f54d6]"
                              >
                                Alles zu {area.label} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Wie wir arbeiten: Ansatz und Agentic AI (übergreifend, keine Bereiche) */}
                  <motion.nav variants={menuItem} aria-label="Ansatz" className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                    {APPROACH_LINKS.map((l) => {
                      const Icon = l.icon;
                      const active = currentPath === l.href;
                      return (
                        <a
                          key={l.href}
                          href={l.href}
                          onClick={(e) => handleLinkClick(l.href, e)}
                          aria-current={active ? 'page' : undefined}
                          className={`group flex items-center gap-4 rounded-2xl sm:rounded-3xl border p-4 sm:p-5 transition-all duration-300 ${active ? 'bg-[#686CFA]/10 border-[#CBCBFC]' : 'bg-white/60 border-slate-200/70 hover:bg-white hover:border-[#686CFA]/40'}`}
                        >
                          <span className="w-9 h-9 rounded-xl bg-[#CBCBFC]/50 text-[#4f54d6] flex items-center justify-center shrink-0">
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

                <div className="lg:col-span-4 flex flex-col gap-5">
                  {[
                    { label: 'Wissen', links: KNOWLEDGE_LINKS },
                    { label: 'Unternehmen', links: COMPANY_LINKS },
                  ].map((group) => (
                    <motion.nav key={group.label} variants={menuItem} aria-label={group.label} className="rounded-3xl bg-white border border-slate-200/70 p-2">
                      <p className="px-4 pt-3 pb-1 text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400">{group.label}</p>
                      <ul>
                        {group.links.map((l) => {
                          const active = currentPath === l.href;
                          return (
                            <li key={l.href}>
                              <a
                                href={l.href}
                                onClick={(e) => handleLinkClick(l.href, e)}
                                aria-current={active ? 'page' : undefined}
                                className={`group flex items-center gap-4 rounded-2xl px-4 py-2.5 transition-colors ${active ? 'bg-[#686CFA]/10' : 'hover:bg-slate-50'}`}
                              >
                                <span className="flex-1 min-w-0">
                                  <span className={`block font-display font-semibold ${active ? 'text-[#4f54d6]' : 'text-slate-900 group-hover:text-[#4f54d6]'} transition-colors`}>{l.label}</span>
                                  <span className="block text-xs text-slate-500 truncate">{l.desc}</span>
                                </span>
                                <ArrowRight className="w-4 h-4 text-slate-300 transition-all group-hover:text-[#686CFA] group-hover:translate-x-0.5" aria-hidden="true" />
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.nav>
                  ))}

                  <motion.div variants={menuItem} className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-6">
                    <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#686CFA]/30 blur-3xl pointer-events-none" aria-hidden="true" />
                    <div className="relative flex items-center gap-3">
                      <img src={SITE.portraitUrl} alt="Yathur Nathan" width={48} height={48} className="w-12 h-12 rounded-2xl object-cover border border-white/15" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-display font-semibold leading-tight">Yathur Nathan</p>
                        <p className="text-xs text-slate-400">Inhaber, Ihr direkter Ansprechpartner</p>
                      </div>
                    </div>
                    <p className="relative mt-4 text-sm text-slate-300 leading-relaxed">
                      In 30 kostenlosen Minuten schauen wir gemeinsam, wo Marketing, Vertrieb oder Abläufe in Ihrem Unternehmen am meisten bremsen.
                    </p>
                    <a
                      href="/kontakt"
                      onClick={(e) => openCta('mega_menu', e)}
                      id="mega-menu-cta"
                      className="relative mt-5 w-full inline-flex items-center justify-center gap-2 min-h-12 bg-[#686CFA] hover:bg-[#5a5fe0] text-white font-display font-semibold px-6 py-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#686CFA]/40"
                    >
                      Gespräch anfragen <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
