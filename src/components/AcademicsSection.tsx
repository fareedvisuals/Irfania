import React, { useState } from 'react';
import { BookOpen, Award, CheckCircle, ChevronRight, Sparkles, GraduationCap, ArrowUpRight } from 'lucide-react';
import { CLASSES_DATA } from '../data/schoolData';
import { ClassGrade } from '../types';

interface AcademicsSectionProps {
  onOpenAdmission: (opts?: { targetClass?: string; hifz?: boolean }) => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenAdmission }) => {
  const [selectedTier, setSelectedTier] = useState<'All' | 'Primary' | 'Middle' | 'Secondary'>('All');
  const [activeGrade, setActiveGrade] = useState<ClassGrade>(CLASSES_DATA[0]);

  const primaryClasses = CLASSES_DATA.filter((c) => c.level === 'Primary');
  const middleClasses = CLASSES_DATA.filter((c) => c.level === 'Middle');
  const secondaryClasses = CLASSES_DATA.filter((c) => c.level === 'Secondary');

  const filteredClasses =
    selectedTier === 'All'
      ? CLASSES_DATA
      : CLASSES_DATA.filter((c) => c.level === selectedTier);

  return (
    <section id="academics" className="py-20 bg-[#FDFBF7] border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Academic Programs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Comprehensive Education from Class 1 to Class 10
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our academic structure follows a clear progression designed to build deep conceptual understanding, moral values, and academic confidence at every grade.
          </p>
        </div>

        {/* Highlight Banner: Optional Hifz-ul-Quran from Class 6 */}
        <div className="mt-10 bg-[#0D261B] text-[#F8F4E1] rounded-xs p-6 border border-[#1B4332] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xs bg-[#1B4332] text-amber-300 border border-[#3A7558] flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#1B4332] text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                Special Program Option
              </div>
              <h3 className="text-xl font-serif font-bold text-white mt-1">
                Hifz-ul-Quran — Available from Class 6 Onward
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F4E1]/80 max-w-2xl mt-0.5">
                An optional program for students or parents who wish to pursue Quranic memorization alongside their regular middle and secondary schooling.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="#hifz"
              className="px-4 py-2.5 rounded-xs bg-transparent hover:bg-[#1B4332] text-[#F8F4E1] font-bold text-xs uppercase tracking-wider transition border border-[#3A7558]"
            >
              Explore Hifz
            </a>
            <button
              onClick={() => onOpenAdmission({ hifz: true, targetClass: 'Class 6' })}
              className="px-4 py-2.5 rounded-xs bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] font-bold text-xs uppercase tracking-wider transition shadow-xs"
            >
              Inquire for Hifz
            </button>
          </div>
        </div>

        {/* Visual Organization of Classes 1 to 10 */}
        <div className="mt-14 space-y-10">
          
          {/* 3 Tiers Layout (Primary, Middle, Secondary) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Primary Tier (Class 1 to 5) */}
            <div className="bg-white rounded-xs p-6 border border-[#E5E1DA] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-wider">
                    Primary Level
                  </span>
                  <span className="text-xs font-serif font-semibold text-slate-500">5 Classes</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0D261B] mb-2">
                  Classes 1, 2, 3, 4 &amp; 5
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Focusing on core language, basic numeracy, moral character, and joyful classroom discovery under caring teacher mentorship.
                </p>
                
                {/* Class list badges */}
                <div className="space-y-2 mb-6">
                  {primaryClasses.map((c) => (
                    <button
                      key={c.grade}
                      onClick={() => setActiveGrade(c)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xs border text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                        activeGrade.grade === c.grade
                          ? 'bg-[#1B4332] text-white border-[#0D261B] shadow-xs'
                          : 'bg-[#FDFBF7] text-slate-700 border-[#E5E1DA] hover:bg-[#F8F4E1]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className={`w-4 h-4 ${activeGrade.grade === c.grade ? 'text-amber-300' : 'text-slate-400'}`} />
                        <span>{c.grade}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E1DA]">
                <button
                  onClick={() => onOpenAdmission({ targetClass: 'Class 1' })}
                  className="w-full py-2.5 px-3 bg-white hover:bg-[#F8F4E1] text-[#1B4332] font-bold text-xs uppercase tracking-wider rounded-xs border border-[#DCD7C9] transition flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for Primary (1–5)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1B4332]" />
                </button>
              </div>
            </div>

            {/* Middle Tier (Class 6 to 8) - Highlighted */}
            <div className="bg-[#F8F4E1]/60 rounded-xs p-6 border-2 border-[#1B4332] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-xs bg-[#1B4332] text-white text-[10px] font-bold uppercase tracking-wider">
                    Middle Level
                  </span>
                  <span className="text-xs font-serif font-semibold text-[#1B4332]">3 Classes</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0D261B] mb-2">
                  Classes 6, 7 &amp; 8
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mb-5 leading-relaxed">
                  Expanding subject depths in science, mathematics, and critical analysis. <strong className="text-[#1B4332]">Optional Hifz-ul-Quran enrollment available from Class 6 onward.</strong>
                </p>

                {/* Class list badges */}
                <div className="space-y-2 mb-6">
                  {middleClasses.map((c) => (
                    <button
                      key={c.grade}
                      onClick={() => setActiveGrade(c)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xs border text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                        activeGrade.grade === c.grade
                          ? 'bg-[#1B4332] text-white border-[#0D261B] shadow-xs'
                          : 'bg-white text-slate-700 border-[#DCD7C9] hover:bg-[#F8F4E1]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className={`w-4 h-4 ${activeGrade.grade === c.grade ? 'text-amber-300' : 'text-[#1B4332]'}`} />
                        <span>{c.grade}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase text-[#1B4332] bg-[#F8F4E1] px-2 py-0.5 rounded-xs border border-[#DCD7C9]">
                        Hifz Option
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DCD7C9]">
                <button
                  onClick={() => onOpenAdmission({ targetClass: 'Class 6' })}
                  className="w-full py-2.5 px-3 bg-[#1B4332] hover:bg-[#0D261B] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Inquire for Middle School (6–8)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-300" />
                </button>
              </div>
            </div>

            {/* Secondary Tier (Class 9 & 10) */}
            <div className="bg-white rounded-xs p-6 border border-[#E5E1DA] flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-wider">
                    Secondary Level
                  </span>
                  <span className="text-xs font-serif font-semibold text-slate-500">2 Classes</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0D261B] mb-2">
                  Classes 9 &amp; 10
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                  Matriculation board curriculum preparation with rigorous conceptual coaching, test series, and dedicated teacher mentorship.
                </p>

                {/* Class list badges */}
                <div className="space-y-2 mb-6">
                  {secondaryClasses.map((c) => (
                    <button
                      key={c.grade}
                      onClick={() => setActiveGrade(c)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xs border text-xs sm:text-sm font-semibold transition flex items-center justify-between ${
                        activeGrade.grade === c.grade
                          ? 'bg-[#1B4332] text-white border-[#0D261B] shadow-xs'
                          : 'bg-[#FDFBF7] text-slate-700 border-[#E5E1DA] hover:bg-[#F8F4E1]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className={`w-4 h-4 ${activeGrade.grade === c.grade ? 'text-amber-300' : 'text-slate-400'}`} />
                        <span>{c.grade}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Matriculation
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E1DA]">
                <button
                  onClick={() => onOpenAdmission({ targetClass: 'Class 9' })}
                  className="w-full py-2.5 px-3 bg-white hover:bg-[#F8F4E1] text-[#1B4332] font-bold text-xs uppercase tracking-wider rounded-xs border border-[#DCD7C9] transition flex items-center justify-center gap-1.5"
                >
                  <span>Inquire for Secondary (9–10)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#1B4332]" />
                </button>
              </div>
            </div>

          </div>

          {/* Active Class Highlight Showcase Panel with Editorial Styling */}
          <div className="bg-[#0D261B] text-[#FDFBF7] rounded-xs p-6 sm:p-8 border border-[#1B4332] shadow-xs">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#1B4332]">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-xs bg-[#1B4332] text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                    {activeGrade.level} Level
                  </span>
                  {activeGrade.level !== 'Primary' && (
                    <span className="px-2.5 py-0.5 rounded-xs bg-[#153427] text-[#F8F4E1] border border-[#3A7558] text-[10px] font-bold uppercase tracking-wider">
                      Optional Hifz Available
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">
                  {activeGrade.grade} Focus &amp; Curriculum Scope
                </h3>
              </div>
              <button
                onClick={() => onOpenAdmission({ targetClass: activeGrade.grade })}
                className="px-5 py-2.5 bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition"
              >
                Inquire for {activeGrade.grade}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-6 space-y-4">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeGrade.description}
                </p>
                <div className="text-xs text-[#F8F4E1]/70 font-light">
                  Teachers provide patient, conceptual guidance to help every student understand their studies thoroughly.
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="bg-[#153427]/70 rounded-xs p-5 border border-[#1B4332]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-3">
                    Key Development Focus Areas
                  </h4>
                  <ul className="space-y-2.5">
                    {activeGrade.focusAreas.map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle className="w-4 h-4 text-amber-300 flex-shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
