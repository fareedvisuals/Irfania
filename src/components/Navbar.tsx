import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Clock, 
  Sparkles, 
  ChevronRight, 
  GraduationCap, 
  MessageSquare, 
  PhoneCall,
  Compass,
  ArrowRight
} from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenAdmission: (options?: { hostel?: boolean; hifz?: boolean; targetClass?: string }) => void;
}

export interface NavItem {
  seq: string;
  label: string;
  shortLabel: string;
  subtitle: string;
  href: string;
  id: string;
  badge?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmission }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Exact sequence matching page sections from top to bottom
  const navSequence: NavItem[] = [
    { seq: '01', label: 'Home', shortLabel: 'Home', subtitle: 'Campus Welcome & Overview', href: '#home', id: 'home' },
    { seq: '02', label: 'Founder', shortLabel: 'Founder', subtitle: 'Visionary & Moral Patron', href: '#founder', id: 'founder' },
    { seq: '03', label: 'School Campus', shortLabel: 'Campus', subtitle: 'Facilities & 3 Photo Slots', href: '#school-campus', id: 'school-campus', badge: '3 Slots' },
    { seq: '04', label: 'Managers', shortLabel: 'Leadership', subtitle: 'Principal & Administration', href: '#managers', id: 'managers' },
    { seq: '05', label: 'About Us', shortLabel: 'About', subtitle: 'Mission, Values & History', href: '#about', id: 'about' },
    { seq: '06', label: 'Classes 1–10', shortLabel: 'Academics', subtitle: 'Primary to Matric Curriculum', href: '#academics', id: 'academics' },
    { seq: '07', label: 'Hifz-ul-Quran', shortLabel: 'Hifz', subtitle: 'Optional from Class 6 onward', href: '#hifz', id: 'hifz', badge: 'Class 6+' },
    { seq: '08', label: 'Hostel', shortLabel: 'Hostel', subtitle: 'Boarding with 3 Meals Daily', href: '#hostel', id: 'hostel', badge: '3 Meals' },
    { seq: '09', label: 'Student Life', shortLabel: 'Activities', subtitle: 'Trips, Games & Gifts', href: '#student-life', id: 'student-life' },
    { seq: '10', label: 'Faculty', shortLabel: 'Teachers', subtitle: 'Educated & Dedicated Staff', href: '#faculty', id: 'faculty' },
    { seq: '11', label: 'Gallery', shortLabel: 'Gallery', subtitle: 'Campus & Activities Photos', href: '#gallery', id: 'gallery' },
    { seq: '12', label: 'Admissions', shortLabel: 'Admissions', subtitle: 'Guidelines & Requirements', href: '#admissions', id: 'admissions' },
    { seq: '13', label: 'Contact', shortLabel: 'Contact', subtitle: 'Location, Hours & Helpline', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 160;

      for (const item of navSequence) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = isScrolled ? 90 : 130;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const activeIndex = navSequence.findIndex((item) => item.id === activeSection);
  const activeItem = navSequence[activeIndex] || navSequence[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 font-sans shadow-sm">
      {/* Tier 1: Top Notification & Direct Helpline Bar */}
      <div className="bg-[#0D261B] text-[#F8F4E1] text-[11px] py-1.5 px-4 sm:px-6 border-b border-[#1B4332]/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Admissions Open: Classes 1–10 • Hifz-ul-Quran (Class 6+) • Student Hostel</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 text-[10px]">
              <Clock className="w-3 h-3 text-[#F8F4E1]/70" />
              <span>Visiting Hours: 8:00 AM – 2:30 PM (Mon–Sat)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#F8F4E1]">
            <span className="text-slate-400 text-[10px]">Helpline:</span>
            <a
              href={SCHOOL_INFO.contact.phoneTel}
              className="text-amber-300 hover:text-white transition flex items-center gap-1 font-bold tracking-wider text-[11px] font-mono"
              title="Call Helpline"
            >
              <Phone className="w-3 h-3 text-amber-300" />
              <span>{SCHOOL_INFO.contact.phone}</span>
            </a>
            <span className="text-[#3A7558]">|</span>
            <a
              href={SCHOOL_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1 text-[10px] font-semibold"
              title="WhatsApp Helpline"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
            <span className="text-[#3A7558]">|</span>
            <button
              onClick={() => onOpenAdmission()}
              className="text-white hover:text-amber-200 transition flex items-center gap-1 uppercase tracking-wider text-[10px] font-bold"
            >
              <span>Admission Form</span>
              <ChevronRight className="w-3 h-3 text-amber-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2: Institutional Identity & Action Bar */}
      <div
        className={`bg-white transition-all duration-300 border-b border-[#E5E1DA] ${
          isScrolled ? 'py-2' : 'py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* School Brand & Crest */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-brand-link"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Irfania Model Higher Secondary School Home"
          >
            <SchoolLogo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Right Action Contacts (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="text-right hidden lg:block pr-2">
              <span className="text-[10px] text-slate-500 block uppercase font-medium tracking-wider">
                Direct Inquiries &amp; Help
              </span>
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="text-xs font-mono font-bold text-[#1B4332] hover:text-[#0D261B] block"
              >
                {SCHOOL_INFO.contact.phone}
              </a>
            </div>

            <a
              href={SCHOOL_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xs bg-[#25D366]/10 hover:bg-[#25D366]/20 text-emerald-900 border border-emerald-300/60 text-xs font-bold transition flex items-center gap-1.5"
              title="Send WhatsApp message"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden xl:inline">WhatsApp Help</span>
            </a>

            <button
              id="nav-cta-admissions"
              onClick={() => onOpenAdmission()}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1B4332] hover:bg-[#0D261B] rounded-xs shadow-xs transition flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Inquire for Admission</span>
            </button>
          </div>

          {/* Mobile Quick Action Buttons & Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={SCHOOL_INFO.contact.phoneTel}
              className="p-2 rounded-xs bg-[#1B4332] text-amber-300 shadow-xs"
              aria-label="Call Helpline"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-[#1B4332] rounded-xs hover:bg-[#F8F4E1] transition border border-[#DCD7C9]"
              aria-label="Toggle navigation directory"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Tier 3: Sequential Navigation Strip (01 through 11 in Exact Order) */}
      <nav
        aria-label="Campus Sections Navigation in Sequence"
        className="bg-[#0D261B] border-b border-[#1B4332] text-[#F8F4E1] hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none py-1 gap-1">
            {/* Sequence Navigator Label */}
            <div className="hidden 2xl:flex items-center gap-1.5 pr-2 mr-1 border-r border-[#1B4332] text-[10px] text-amber-400 font-bold uppercase tracking-widest flex-shrink-0">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Directory</span>
            </div>

            {/* Sequential Navigation Items: 01 to 11 */}
            <div className="flex items-center gap-0.5 lg:gap-1 flex-1 justify-between">
              {navSequence.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    id={`nav-seq-${item.seq}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                    title={`${item.seq}. ${item.label} — ${item.subtitle}`}
                    className={`group relative px-2 xl:px-2.5 py-1.5 rounded-xs transition-all flex items-center gap-1.5 whitespace-nowrap text-xs ${
                      isActive
                        ? 'bg-[#1B4332] text-amber-300 font-bold border border-[#3A7558] shadow-xs'
                        : 'text-[#F8F4E1]/80 hover:text-white hover:bg-[#153427]/80 font-medium'
                    }`}
                  >
                    {/* Numerical Sequence Index */}
                    <span
                      className={`text-[9px] font-mono font-bold px-1 py-0.5 rounded-2xs transition-colors ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 font-extrabold'
                          : 'bg-[#153427] text-amber-400/90 group-hover:bg-[#1B4332] group-hover:text-amber-300'
                      }`}
                    >
                      {item.seq}
                    </span>

                    {/* Section Label */}
                    <span className="tracking-wide text-[11px] lg:text-xs">
                      {item.label}
                    </span>

                    {/* Optional Highlight Badge */}
                    {item.badge && (
                      <span className="hidden xl:inline text-[8px] font-bold px-1 py-0.2 rounded-2xs bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase">
                        {item.badge}
                      </span>
                    )}

                    {/* Active Bottom Glow Line */}
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-1.5 h-0.5 bg-amber-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer: Sequential School Directory */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#FDFBF7] border-b border-[#E5E1DA] shadow-2xl px-4 py-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
        >
          {/* Directory Header with Progress */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E5E1DA]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332] block">
                Sequential Campus Directory
              </span>
              <span className="text-xs text-slate-600 font-serif">
                Currently Viewing: <strong className="text-[#0D261B]">{activeItem.seq}. {activeItem.label}</strong>
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold px-2 py-1 rounded-xs bg-[#1B4332] text-amber-300">
              {activeItem.seq} / 11
            </span>
          </div>

          {/* Quick Primary Actions */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmission();
              }}
              className="w-full py-2 px-3 bg-[#1B4332] text-white text-xs uppercase tracking-wider font-bold rounded-xs flex items-center justify-center gap-1.5 shadow-xs"
            >
              <GraduationCap className="w-4 h-4 text-amber-300" />
              <span>Admissions</span>
            </button>
            <a
              href="tel:03234720208"
              className="w-full py-2 px-3 bg-[#0D261B] text-amber-300 border border-[#3A7558] text-xs uppercase tracking-wider font-bold rounded-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
          </div>

          {/* 11-Step Numbered Sequential Timeline Directory */}
          <div className="space-y-1">
            {navSequence.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group flex items-center justify-between p-2.5 rounded-xs transition-all border ${
                    isActive
                      ? 'bg-[#0D261B] text-white border-[#1B4332] shadow-xs'
                      : 'bg-white text-slate-800 border-[#E5E1DA] hover:bg-[#F8F4E1]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Sequence Badge */}
                    <span
                      className={`w-7 h-7 rounded-xs flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 ${
                        isActive
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] group-hover:bg-[#1B4332] group-hover:text-white'
                      }`}
                    >
                      {item.seq}
                    </span>

                    <div className="text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold tracking-wide">
                          {item.label}
                        </span>
                        {item.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-2xs bg-amber-400/20 text-amber-800 border border-amber-300">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-[10px] block font-serif truncate ${
                          isActive ? 'text-[#F8F4E1]/80' : 'text-slate-500'
                        }`}
                      >
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-0.5' : 'text-slate-400 group-hover:text-[#1B4332]'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Quick Call & Message Help Card */}
          <div className="mt-4 p-3 bg-[#0D261B] text-[#F8F4E1] rounded-xs border border-[#3A7558] space-y-2">
            <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
              Direct Assistance Helpline
            </span>
            <div className="flex items-center justify-between gap-2">
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="font-mono font-bold text-white text-sm hover:text-amber-300 transition"
              >
                {SCHOOL_INFO.contact.phone}
              </a>
              <div className="flex items-center gap-1.5">
                <a
                  href={SCHOOL_INFO.contact.phoneTel}
                  className="px-2.5 py-1 bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] text-[10px] font-bold uppercase tracking-wider rounded-xs flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call</span>
                </a>
                <a
                  href={SCHOOL_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[10px] font-bold uppercase tracking-wider rounded-xs flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
