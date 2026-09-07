import React from 'react';
import { Award, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, founderImg } from '../data/schoolData';
import { useFounderPhoto } from '../utils/founderPhotoState';

export const FounderSection: React.FC = () => {
  const { photo: founderPhoto } = useFounderPhoto();
  const displayPhoto = founderPhoto || founderImg;

  return (
    <section id="founder" className="py-20 bg-[#0D261B] text-[#FDFBF7] border-b border-[#1B4332] relative scroll-mt-16 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F8F4E1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#153427] text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Foundational Vision &amp; Heritage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Our Respected Founder
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            The visionary inspiration and moral foundation behind <strong className="text-white">{SCHOOL_INFO.name}</strong>.
          </p>
        </div>

        {/* Dedicated Founder Profile Card */}
        <div className="mt-12 max-w-5xl mx-auto bg-gradient-to-br from-[#081811] via-[#0D261B] to-[#153427] rounded-xs border-2 border-amber-500/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Exact Uncropped Founder Portrait */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="relative w-56 sm:w-64 max-w-full rounded-xs overflow-hidden border-2 border-amber-400 shadow-2xl bg-[#081811] group">
                <img
                  src={displayPhoto}
                  alt="Dr. Syed Muhammad Habib Irfani - Founder of Irfania Model Higher Secondary School"
                  className="w-full h-auto max-h-[440px] object-contain mx-auto block"
                  referrerPolicy="no-referrer"
                />

                {/* Gold Crest Ribbon */}
                <div className="py-1.5 px-3 bg-amber-400 text-slate-950 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 border-t border-amber-300">
                  <Award className="w-3.5 h-3.5 text-slate-950" />
                  <span>Founding Visionary &amp; Patron</span>
                </div>
              </div>

              <span className="text-[11px] text-amber-200/90 font-serif italic mt-2">
                Official Portrait • Irfania Model Higher Secondary School
              </span>
            </div>

            {/* Right Column: Founder Vision & Biographical Note */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-400/30">
                  <Award className="w-3 h-3 text-amber-300" />
                  Founder &amp; Chief Patron
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
                  Dr. Syed Muhammad Habib Irfani
                </h3>
                <p className="text-amber-300/90 text-sm font-serif">
                  Founder of Irfania Model Higher Secondary School
                </p>
              </div>

              {/* Founder's Vision Quote */}
              <div className="relative bg-[#081811]/80 border border-[#1B4332] rounded-xs p-5 space-y-3">
                <Quote className="w-7 h-7 text-amber-400/30 absolute top-3 right-3" />
                <p className="text-xs sm:text-sm text-[#F8F4E1]/90 font-serif leading-relaxed italic pr-6">
                  &ldquo;Education is a sacred trust to shape both the intellect and character of our youth. We established Irfania Model Higher Secondary School to ensure every student receives a strong academic foundation from Class 1 to 10, balanced with timeless moral integrity, dedicated Quranic memorization, and a supportive residential community.&rdquo;
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 font-sans font-semibold border-t border-[#1B4332]/80">
                  <span>— Dr. Syed Muhammad Habib Irfani</span>
                  <span className="text-[#3A7558]">|</span>
                  <span className="text-slate-400 font-normal">Founding Patron</span>
                </div>
              </div>

              {/* Foundational Pillars */}
              <div className="space-y-2 pt-1">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-300 block">
                  Pillars Established Under His Vision
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Rigorous Academics (Classes 1–10)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Optional Hifz-ul-Quran (Class 6+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Hostel Care with 3 Daily Meals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Moral Integrity &amp; Student Character</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
