import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Home, Phone, Award, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { useCustomImage } from '../utils/imageStore';

interface HeroProps {
  onOpenAdmission: (opts?: { hostel?: boolean; hifz?: boolean }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdmission }) => {
  const { src: heroImgSrc } = useCustomImage(
    'hero-campus',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80'
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FDFBF7] text-[#1A1C1E] border-b border-[#E5E1DA]"
    >
      {/* Background Architectural Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#DCD7C9_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Institutional Editorial Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />
              <span>Admissions Open • Quality Education &amp; Student Development</span>
            </div>

            {/* School Formal Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-[#0D261B] tracking-tight">
              Building <br className="hidden sm:inline" />
              Knowledge, <br className="hidden sm:inline" />
              <span className="italic text-[#1B4332]">Character</span> &amp; Future.
            </h1>

            {/* Subheading strictly communicating school core offering */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              <strong className="text-[#0D261B] font-semibold">{SCHOOL_INFO.name}</strong> provides comprehensive education from{' '}
              <span className="text-[#1B4332] font-semibold">Class 1 to Class 10</span>, with an{' '}
              <span className="text-[#1B4332] font-semibold underline decoration-[#DCD7C9] underline-offset-4">optional Hifz-ul-Quran program from Class 6 onward</span>, and{' '}
              <span className="text-[#0D261B] font-semibold">supportive hostel facilities</span> with three-time daily meals for students.
            </p>

            {/* 4 Prominent Buttons as requested */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Button 1: Explore Our School */}
              <button
                id="hero-btn-explore"
                onClick={() => scrollTo('about')}
                className="px-6 py-3 bg-[#1B4332] text-white hover:bg-[#0D261B] font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs transition-all flex items-center gap-2 group"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-4 h-4 text-amber-300 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Button 2: Admissions */}
              <button
                id="hero-btn-admissions"
                onClick={() => onOpenAdmission()}
                className="px-6 py-3 bg-white text-[#1B4332] border border-[#DCD7C9] hover:bg-[#F8F4E1] font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-[#1B4332]" />
                <span>Admissions</span>
              </button>

              {/* Button 3: Hostel Facilities */}
              <button
                id="hero-btn-hostel"
                onClick={() => scrollTo('hostel')}
                className="px-5 py-3 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] hover:bg-[#E5E1DA] font-bold text-xs uppercase tracking-wider rounded-xs transition-all flex items-center gap-2"
              >
                <Home className="w-4 h-4 text-[#1B4332]" />
                <span>Hostel Facilities</span>
              </button>

              {/* Button 4: Contact Us */}
              <button
                id="hero-btn-contact"
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 bg-transparent hover:bg-[#F8F4E1] text-slate-800 font-semibold text-xs uppercase tracking-wider transition-all border border-[#E5E1DA] rounded-xs flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Direct Call & Message Helpline Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-slate-700 font-serif pt-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#F8F4E1] border border-[#DCD7C9] text-[#1B4332] font-sans text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Message, Call &amp; Help Desk:</span>
              </div>
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="font-mono font-bold text-[#1B4332] text-sm hover:underline"
              >
                {SCHOOL_INFO.contact.phone}
              </a>
              <span className="text-slate-300 hidden sm:inline">•</span>
              <a
                href={SCHOOL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-sans font-semibold text-xs hover:underline flex items-center gap-1"
              >
                <span>WhatsApp Message</span>
              </a>
            </div>

            {/* Editorial Column Stat Accents */}
            <div className="pt-6 border-t border-[#E5E1DA] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex flex-col border-l-2 border-[#1B4332] pl-4 py-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0D261B]">Class 1–10</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Primary to Secondary</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#1B4332] pl-4 py-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">Class 6+</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Optional Hifz Program</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#1B4332] pl-4 py-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#0D261B]">3 Meals</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Hostel Residence</span>
              </div>
              <div className="flex flex-col border-l-2 border-[#1B4332] pl-4 py-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#1B4332]">100%</span>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Dedicated Faculty</span>
              </div>
            </div>

          </div>

          {/* Right Visual Feature Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card with Editorial Frame */}
              <div className="relative rounded-xs overflow-hidden shadow-md border border-[#DCD7C9] bg-white group p-2">
                <div className="relative overflow-hidden">
                  <img
                    src={heroImgSrc}
                    alt="Irfania Model Higher Secondary School Learning Environment"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-103 transition-transform duration-700"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D261B]/90 via-[#0D261B]/30 to-transparent pointer-events-none" />
                  
                  {/* Floating Bottom Card Details */}
                  <div className="absolute bottom-0 inset-x-0 p-5 space-y-2 text-white">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#F8F4E1] text-[#1B4332] text-[10px] font-bold uppercase tracking-widest">
                      <Award className="w-3.5 h-3.5 text-[#1B4332]" />
                      Excellence In Education
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white">
                      Nurturing Academic &amp; Personal Excellence
                    </h3>
                    <p className="text-xs text-[#F8F4E1]/90 line-clamp-2">
                      Educated and experienced teachers focused on conceptual understanding, discipline, and student growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Feature Card 1: Hifz & Character */}
              <div className="absolute -top-3 -left-3 sm:-left-5 bg-white border border-[#DCD7C9] rounded-xs p-3 shadow-md hidden sm:flex items-center gap-3 max-w-[240px]">
                <div className="w-10 h-10 rounded-xs bg-[#F8F4E1] text-[#1B4332] flex items-center justify-center flex-shrink-0 border border-[#DCD7C9]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-[#0D261B]">Hifz-ul-Quran</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#1B4332]">Optional from Class 6+</p>
                </div>
              </div>

              {/* Floating Feature Card 2: Hostel & Meals */}
              <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-white border border-[#DCD7C9] rounded-xs p-3 shadow-md hidden sm:flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-xs bg-[#1B4332] text-[#F8F4E1] flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-[#0D261B]">Hostel Facility</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-[#1B4332]">Accommodation • 3 Meals</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
