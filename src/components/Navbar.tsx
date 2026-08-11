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
  RefreshCcw
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceDetail } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState<ServiceDetail | null>(null);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);

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

  const servicesIcons: { [key: string]: any } = {
    'growth-strategy': TrendingUp,
    'demand-generation': Megaphone,
    'lead-generation': Users,
    'marketing-automation': Cpu,
    'sales-enablement': ShieldAlert,
    'revenue-operations': Layers,
    'ai-automation': Sparkles,
    'data-analytics': PieChart,
    'ecommerce-performance': ShoppingCart,
    'dtc-growth-acquisition': TrendingUp,
    'customer-retention': RefreshCcw,
    'paid-social-ecommerce': TrendingUp
  };

  // Helper to safely get icon for a service
  const getServiceIcon = (slug: string) => {
    return servicesIcons[slug] || TrendingUp;
  };

  const navServices = SERVICES.filter(
    (s) => s.slug !== 'marketing-automation' && s.slug !== 'revenue-operations'
  );

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

            {/* Menu Open/Close trigger button */}
            <div className="flex items-center gap-3">
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
                  className="inline-flex items-center justify-center gap-1.5 pl-3 pr-4 py-2 rounded-full border border-slate-200 bg-slate-900 text-white hover:bg-[#686DF4] focus-visible:ring-2 focus-visible:ring-[#686DF4] cursor-pointer transition-all duration-300 shadow-sm"
                >
                  <X className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold">SCHLIESSEN</span>
                </button>

              </div>
            </div>

            {/* CONTENTS CONTAINER (DESKTOP MODE) */}
            <div className="hidden lg:block flex-grow max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-10 py-6 lg:py-8" id="desktop-menu-contents">
              <div className="grid grid-cols-12 gap-6 xl:gap-8 items-stretch">
                
                {/* Column 1: SPOTLIGHT PREVIEW CARD */}
                <div 
                  className="col-span-4 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between overflow-hidden relative min-h-[460px]"
                  id="menu-spotlight-panel"
                >
                  <AnimatePresence mode="wait">
                    {hoveredService ? (
                      <motion.div
                        key={hoveredService.slug}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 flex flex-col h-full justify-between"
                        id={`spotlight-service-${hoveredService.slug}`}
                      >
                        <div className="space-y-3.5">
                          {/* Service Indicator header label */}
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#686DF4]">LEISTUNGS-SCHWERPUNKT</span>
                            <div className="h-px bg-slate-100 flex-grow"></div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center border border-[#686DF4]/20 shrink-0">
                              {(() => {
                                const IconC = getServiceIcon(hoveredService.slug);
                                return <IconC className="w-4.5 h-4.5" />;
                              })()}
                            </div>
                            <h4 className="text-base font-display font-bold text-slate-900 tracking-tight leading-snug">
                              {hoveredService.title}
                            </h4>
                          </div>

                          <p className="text-xs text-slate-600 font-normal leading-relaxed">
                            {hoveredService.description}
                          </p>

                          {/* Quick Deliverable Bullets */}
                          <div className="space-y-2 pt-1">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">KERNERGEBNISSE:</span>
                            <ul className="space-y-1.5" id="spotlight-deliverables">
                              {hoveredService.deliverables.slice(0, 2).map((del, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#686DF4] shrink-0 mt-0.5" />
                                  <span>{del}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Impact stats dynamic layer */}
                        <div className="pt-3.5 border-t border-slate-100 space-y-3">
                          <div className="bg-slate-50 border border-slate-200/60 p-3 rounded-xl flex items-center justify-between">
                            {hoveredService.metrics.map((m, mIdx) => (
                              <div key={mIdx} className="space-y-0.5">
                                <span className="text-base font-bold font-display text-[#686DF4] block leading-none">{m.value}</span>
                                <span className="text-[9px] text-slate-500 font-semibold uppercase font-mono tracking-wider block">{m.label}</span>
                              </div>
                            ))}
                          </div>

                          <a
                            href={`/leistungen/${hoveredService.slug}`}
                            onClick={(e) => handleLinkClick(`/leistungen/${hoveredService.slug}`, e)}
                            className="w-full justify-between bg-slate-900 hover:bg-[#686DF4] text-white font-semibold text-xs py-3 px-4 rounded-xl tracking-wider uppercase inline-flex items-center gap-2 transition-colors duration-200 group/spot"
                            id={`spotlight-cta-link-${hoveredService.slug}`}
                          >
                            <span>Hebel detailliert ansehen</span>
                            <ArrowRight className="w-3.5 h-3.5 text-white group-hover/spot:translate-x-1 transition-transform duration-200" />
                          </a>
                        </div>
                      </motion.div>
                    ) : (
                      // DEFAULT VIEW (If no service is hovered)
                      <motion.div
                        key="default-view"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 flex flex-col h-full justify-between"
                        id="spotlight-default-panel"
                      >
                        <div className="space-y-3.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#686DF4]">SYSTEMATIC GROWTH ARCHITECTURE</span>
                            <div className="h-px bg-slate-100 flex-grow"></div>
                          </div>

                          <h4 className="text-lg font-display font-bold text-slate-900 tracking-tight leading-snug">
                            Ergebnisse statt leere KPI-Konzepte.
                          </h4>

                          <p className="text-xs text-slate-600 font-normal leading-relaxed">
                            performanceboost wurde gegründet, weil Schweizer B2B-Unternehmen keinen weiteren Anbieter für lose Facebook-Ads brauchen. Sie verlangen einen Partner, der Wachstum versteht, testet und schrittweise systemisiert.
                          </p>

                          <div className="p-3.5 rounded-xl bg-[#686DF4]/[0.03] border border-[#686DF4]/10 space-y-2">
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#686DF4] block">KUMULIERTER MITTELWERT EXZELLENZ:</span>
                            
                            <div className="grid grid-cols-2 gap-3">
                              <div className="space-y-0.5">
                                <span className="text-lg font-bold font-display text-slate-900 block leading-none">3.4x</span>
                                <span className="text-[9px] text-slate-500 font-medium uppercase font-mono tracking-wider block">Pipeline-Volumen</span>
                              </div>
                              <div className="space-y-0.5">
                                <span className="text-lg font-bold font-display text-slate-900 block leading-none">+35%</span>
                                <span className="text-[9px] text-slate-500 font-medium uppercase font-mono tracking-wider block">Close-Ratio</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2.5 pt-3 border-t border-slate-100">
                          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-[#686DF4] shrink-0" />
                            <span>Schweiz (Graubünden) • Remote Standard</span>
                          </div>
                          
                          <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono tracking-wider uppercase border-t border-slate-100 pt-2">
                            <span>SWISS-TUNED REVENUE SYSTEM</span>
                            <span>PRO-LEVEL v4.0</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Column 2: INTERACTIVE SERVICES MATRIX */}
                <div className="col-span-5 flex flex-col justify-between" id="menu-services-panel">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-0.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">UNSERE WACHSTUMSHEBEL</span>
                      <a 
                        href="/leistungen" 
                        onClick={(e) => handleLinkClick('/leistungen', e)}
                        className="text-xs font-semibold text-[#686DF4] hover:text-slate-900 transition-colors flex items-center gap-1 group/all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4] rounded-md px-1"
                      >
                        Alle anzeigen <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2" id="services-interactive-grid">
                      {navServices.map((s) => {
                        const IconComp = getServiceIcon(s.slug);
                        const isHovered = hoveredService?.slug === s.slug;
                        
                        return (
                          <a
                            key={s.slug}
                            id={`navbar-service-card-${s.slug}`}
                            href={`/leistungen/${s.slug}`}
                            onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)}
                            onMouseEnter={() => setHoveredService(s)}
                            className={`group flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4] min-h-[50px] relative cursor-pointer ${
                              isHovered 
                                ? 'bg-[#686DF4]/[0.05] border-[#686DF4]/40 shadow-xs' 
                                : 'bg-white border-slate-200/70 hover:bg-[#686DF4]/[0.025] hover:border-[#686DF4]/30'
                            }`}
                          >
                            <div className={`w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                              isHovered ? 'bg-[#686DF4] text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-[#686DF4]/10 group-hover:text-[#686DF4]'
                            }`}>
                              <IconComp className="w-3.5 h-3.5" />
                            </div>

                            <div className="flex-grow min-w-0">
                              <span className={`block text-xs font-semibold tracking-tight transition-colors truncate ${
                                isHovered ? 'text-[#686DF4]' : 'text-slate-900 group-hover:text-[#686DF4]'
                              }`}>
                                {s.title}
                              </span>
                            </div>

                            <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 ${
                              isHovered ? 'text-[#686DF4] translate-x-0.5' : 'text-slate-300 group-hover:text-[#686DF4] group-hover:translate-x-0.5'
                            }`} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Column 3: HIGHLIGHT INTEGRATED CONVERSION & CONTACT */}
                <div className="col-span-3 flex flex-col justify-between" id="menu-overview-panel">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block">SCHNELLZUGRIFF</span>
                    
                    <div className="space-y-2" id="overview-links-col">
                      {/* Interactive Conversion Card */}
                      <a
                        href="/kontakt"
                        id="mega-menu-audit-cta-card"
                        onClick={(e) => handleLinkClick('/kontakt', e)}
                        className="relative overflow-hidden group block p-4 rounded-xl bg-slate-950 text-white border border-slate-800 hover:border-[#686DF4]/50 transition-all shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4]"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase">HEUTE VERFÜGBAR</span>
                        </div>

                        <h5 className="text-sm font-bold tracking-tight text-white mb-1 group-hover:text-[#8185F8] transition-colors flex items-center justify-between">
                          Wachstums-Audit (30 min) <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </h5>

                        <p className="text-[11px] text-slate-300 font-normal leading-snug mb-3">
                          Kostenfreier Pipeline-Check für Schweizer Unternehmen.
                        </p>

                        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-[#686DF4] group-hover:bg-[#575cdb] px-3 py-1.5 rounded-lg transition-colors">
                          <Calendar className="w-3.5 h-3.5" />
                          Termin sichern
                        </div>
                      </a>

                      {/* Über uns Link card */}
                      <a
                        href="/ueber-uns"
                        id="mega-menu-about-link-card"
                        onClick={(e) => handleLinkClick('/ueber-uns', e)}
                        className="group flex items-center justify-between p-2.5 bg-white border border-slate-200/70 rounded-xl hover:border-[#686DF4]/30 hover:bg-[#686DF4]/[0.02] shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4]"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7.5 h-7.5 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:text-[#686DF4] group-hover:bg-[#686DF4]/10 transition-colors shrink-0">
                            <Users className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-semibold text-slate-900 group-hover:text-[#686DF4] transition-colors">
                              Über uns
                            </span>
                            <span className="block text-[10px] text-slate-500 font-normal truncate">
                              Philosophie & Track Record
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#686DF4] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </a>

                      {/* Skill Factory Link Card */}
                      <a
                        href="/skills"
                        id="mega-menu-skills-link-card"
                        onClick={(e) => handleLinkClick('/skills', e)}
                        className="group flex items-center justify-between p-2.5 bg-white border border-slate-200/70 rounded-xl hover:border-[#686DF4]/30 hover:bg-[#686DF4]/[0.02] shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4]"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7.5 h-7.5 rounded-lg bg-[#686DF4]/10 text-[#686DF4] flex items-center justify-center transition-colors shrink-0">
                            <Sparkles className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <span className="block text-xs font-semibold text-slate-900 group-hover:text-[#686DF4] transition-colors">
                              Skill Factory
                            </span>
                            <span className="block text-[10px] text-slate-500 font-normal truncate">
                              36 Diagnose-Frameworks
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#686DF4] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                      </a>

                      {/* Contact Portrait Card */}
                      <a
                        href="/kontakt"
                        id="mega-menu-contact-link-card"
                        onClick={(e) => handleLinkClick('/kontakt', e)}
                        className="group flex items-center gap-2.5 p-2.5 bg-white border border-slate-200/70 rounded-xl hover:border-[#686DF4]/30 hover:bg-[#686DF4]/[0.02] shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#686DF4]"
                      >
                        <img 
                          src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Office%20Shoot.jpeg" 
                          alt="Yathur Nathan" 
                          className="w-8 h-8 object-cover rounded-lg border border-slate-200 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="text-left min-w-0">
                          <span className="block text-xs font-semibold text-slate-900 group-hover:text-[#686DF4] transition-colors">
                            Direktkontakt
                          </span>
                          <span className="block text-[10px] text-slate-500 font-normal truncate">
                            Yathur Nathan, Inhaber
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Reachability block */}
                  <div className="pt-3.5 border-t border-slate-200/60 space-y-2">
                    <a 
                      href="mailto:yathur@performanceboost.ch"
                      className="flex items-center gap-2.5 text-xs text-slate-700 hover:text-[#686DF4] font-semibold group transition-colors"
                      id="desktop-email-footer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#686DF4]/10 group-hover:text-[#686DF4] transition-colors shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">yathur@performanceboost.ch</span>
                    </a>

                    <a 
                      href="tel:+41786754097"
                      className="flex items-center gap-2.5 text-xs text-slate-700 hover:text-[#686DF4] font-semibold group transition-colors"
                      id="desktop-phone-footer"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-[#686DF4]/10 group-hover:text-[#686DF4] transition-colors shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span>+41 78 675 4097</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* CONTENTS CONTAINER (MOBILE VERSION) */}
            <div className="block lg:hidden flex-grow px-5 sm:px-6 py-6 sm:py-8 overflow-y-auto" id="mobile-menu-contents">
              <div className="space-y-6">
                
                {/* Brand description header block */}
                <div className="bg-white border border-slate-200/80 p-4.5 rounded-2xl space-y-2">
                  <p className="mega-menu-desc text-slate-600 font-medium leading-relaxed">
                    Systematische B2B Wachstumsmaschinen für Schweizer KMU & Tech-Unternehmen.
                  </p>
                </div>

                {/* Primary navigation list */}
                <div className="space-y-3" id="mobile-navigation-links">
                  
                  {/* Leistungen Accordion */}
                  <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                      className="w-full flex justify-between items-center p-4.5 mega-menu-subheading font-bold text-slate-900 hover:text-[#686DF4] cursor-pointer"
                      aria-expanded={mobileLeistungenOpen}
                    >
                      <span>UNSERE LEISTUNGEN</span>
                      <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${mobileLeistungenOpen ? 'rotate-90 text-[#686DF4]' : ''}`} />
                    </button>
                    
                    {/* Collapsible details for Leistungen */}
                    <AnimatePresence initial={false}>
                      {mobileLeistungenOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="border-t border-slate-100 overflow-hidden bg-slate-50/50"
                        >
                          <div className="p-3 grid grid-cols-1 gap-2.5">
                            {navServices.map((s) => {
                              const IconComp = getServiceIcon(s.slug);
                              return (
                                <a
                                  key={s.slug}
                                  href={`/leistungen/${s.slug}`}
                                  onClick={(e) => handleLinkClick(`/leistungen/${s.slug}`, e)}
                                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/60 hover:bg-slate-50 focus:outline-none"
                                >
                                  <div className="w-8.5 h-8.5 rounded-lg bg-[#686DF4]/5 text-[#686DF4] flex items-center justify-center shrink-0">
                                    <IconComp className="w-4.5 h-4.5" />
                                  </div>
                                  <span className="mega-menu-link font-bold text-slate-900 tracking-tight">{s.title}</span>
                                </a>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* General Overview links */}
                  <a
                    href="/ueber-uns"
                    onClick={(e) => handleLinkClick('/ueber-uns', e)}
                    className="flex justify-between items-center p-4.5 bg-white border border-slate-200/80 rounded-2xl hover:bg-slate-50 mega-menu-subheading font-bold text-slate-900 shadow-xs"
                  >
                    <span>ÜBER UNS</span>
                    <ChevronRight className="w-4.5 h-4.5 text-slate-400" />
                  </a>

                  <a
                    href="/skills"
                    onClick={(e) => handleLinkClick('/skills', e)}
                    className="flex justify-between items-center p-4.5 bg-white border border-slate-200/80 rounded-2xl hover:bg-slate-50 mega-menu-subheading font-bold text-slate-900 shadow-xs"
                  >
                    <span>SKILL FACTORY</span>
                    <ChevronRight className="w-4.5 h-4.5 text-slate-400" />
                  </a>

                  <a
                    href="/kontakt"
                    onClick={(e) => handleLinkClick('/kontakt', e)}
                    className="flex justify-between items-center p-4.5 bg-white border border-slate-200/80 rounded-2xl hover:bg-slate-50 mega-menu-subheading font-bold text-slate-900 shadow-xs"
                  >
                    <span>KONTAKT</span>
                    <ChevronRight className="w-4.5 h-4.5 text-slate-400" />
                  </a>

                </div>

                {/* Audit Booking block in the bottom area */}
                <div className="space-y-4 pt-2">
                  <a
                    href="/kontakt"
                    onClick={(e) => handleLinkClick('/kontakt', e)}
                    className="flex items-center justify-between p-5 bg-[#686DF4] text-white rounded-2xl shadow-md group border border-[#686DF4]/30 hover:bg-slate-900 transition-all focus:outline-none"
                    id="mobile-audit-btn"
                  >
                    <div className="flex items-center gap-3.5">
                      <Calendar className="w-5.5 h-5.5 text-white animate-pulse shrink-0" />
                      <div className="text-left">
                        <span className="block mega-menu-heading font-bold text-white leading-tight">Wachstums-Audit (30 min)</span>
                        <span className="block mega-menu-desc text-white/90 leading-snug mt-0.5 font-medium">Sichere dir einen Schweizer Zeit-Slot</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4.5 h-4.5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Contact channels footer block */}
                  <div className="bg-slate-100/80 border border-slate-200/60 p-5 rounded-2xl space-y-3.5">
                    <span className="mega-menu-meta font-mono font-bold uppercase tracking-wider text-slate-500 block">DIREKTKONTAKT</span>
                    
                    <a 
                      href="mailto:yathur@performanceboost.ch"
                      className="flex items-center gap-3 mega-menu-link text-slate-800 hover:text-[#686DF4] font-semibold"
                    >
                      <Mail className="w-4.5 h-4.5 text-[#686DF4] shrink-0" />
                      <span>yathur@performanceboost.ch</span>
                    </a>

                    <a 
                      href="tel:+41786754097"
                      className="flex items-center gap-3 mega-menu-link text-slate-800 hover:text-[#686DF4] font-semibold"
                    >
                      <Phone className="w-4.5 h-4.5 text-[#686DF4] shrink-0" />
                      <span>+41 78 675 4097</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* STATIC FOOTER RETAINED */}
            <div className="bg-slate-100 border-t border-slate-200/80 py-6 px-6 sm:px-8 lg:px-10 z-15 text-center text-[10px] text-slate-400/90 font-mono tracking-widest uppercase mt-auto">
              © {new Date().getFullYear()} performanceboost • graubünden • swiss-tuned revenue systemization
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
