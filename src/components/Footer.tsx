import React from 'react';
import { SchoolLogo } from './SchoolLogo';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D261B] text-[#FDFBF7] border-t border-[#1B4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: School Brand & Identity */}
          <div className="md:col-span-5 space-y-3">
            <SchoolLogo size="md" variant="dark" />
            <p className="text-xs sm:text-sm text-[#F8F4E1]/80 leading-relaxed max-w-sm pt-1">
              Providing quality education from Class 1 to Class 10, an optional Hifz-ul-Quran program from Class 6 onward, and supportive boarding hostel facilities.
            </p>
            <div className="text-xs text-amber-300/90 font-serif italic">
              Building Knowledge, Character &amp; A Brighter Future
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-amber-300 border-b border-[#1B4332] pb-1.5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-[#F8F4E1]/80">
              <button onClick={() => scrollTo('about')} className="text-left hover:text-white transition">
                About Us
              </button>
              <button onClick={() => scrollTo('academics')} className="text-left hover:text-white transition">
                Classes 1–10
              </button>
              <button onClick={() => scrollTo('hifz')} className="text-left hover:text-white transition">
                Hifz-ul-Quran
              </button>
              <button onClick={() => scrollTo('hostel')} className="text-left hover:text-white transition">
                Hostel Facility
              </button>
              <button onClick={() => scrollTo('faculty')} className="text-left hover:text-white transition">
                Faculty
              </button>
              <button onClick={() => scrollTo('founder')} className="text-left hover:text-white transition">
                Our Founder
              </button>
              <button onClick={() => scrollTo('managers')} className="text-left hover:text-white transition">
                School Managers
              </button>
              <button onClick={() => scrollTo('gallery')} className="text-left hover:text-white transition">
                Campus Gallery
              </button>
              <button onClick={() => scrollTo('admissions')} className="text-left hover:text-white transition">
                Admissions
              </button>
              <button onClick={() => scrollTo('contact')} className="text-left hover:text-white transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Column 3: Contact & Visiting Hours */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-amber-300 border-b border-[#1B4332] pb-1.5">
              Campus Helpline
            </h4>
            <div className="space-y-2 text-xs text-[#F8F4E1]/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />
                <a
                  href={SCHOOL_INFO.contact.phoneTel}
                  className="font-mono text-sm font-bold text-white hover:text-amber-300 transition"
                >
                  {SCHOOL_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-300">
                <Clock className="w-3.5 h-3.5 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>8:00 AM – 2:30 PM (Mon–Sat)</span>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-300 flex-shrink-0 mt-0.5" />
                <span>Campus Location &amp; Admissions Office</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Simple Copyright Bar */}
        <div className="mt-10 pt-6 border-t border-[#1B4332] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#F8F4E1]/60">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">{SCHOOL_INFO.name}</strong>. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#F8F4E1]/80 hover:text-white transition group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
