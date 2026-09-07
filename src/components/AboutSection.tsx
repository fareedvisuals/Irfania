import React from 'react';
import { Target, Compass, ShieldCheck, HeartHandshake, BookOpen, Trophy, Users, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { useCustomImage } from '../utils/imageStore';

export const AboutSection: React.FC = () => {
  const classroomImg = useCustomImage(
    'about-classroom',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'
  );

  const pillars = [
    {
      title: 'Quality Education',
      desc: 'Structured curriculum from Class 1 to Class 10 delivered by educated, experienced teachers who prioritize conceptual clarity.',
      icon: BookOpen,
      color: 'emerald',
    },
    {
      title: 'Character Development',
      desc: 'Nurturing moral values, integrity, and ethical conduct to prepare students as responsible, upright members of society.',
      icon: Target,
      color: 'amber',
    },
    {
      title: 'Discipline & Focus',
      desc: 'Instilling daily routine consistency, punctuality, and mutual respect in a supportive and orderly campus atmosphere.',
      icon: ShieldCheck,
      color: 'blue',
    },
    {
      title: 'Student Support',
      desc: 'Individual teacher mentorship and caring supervision that helps every student overcome academic challenges with confidence.',
      icon: HeartHandshake,
      color: 'emerald',
    },
    {
      title: 'Academic Growth',
      desc: 'Step-by-step cognitive development from foundational primary concepts up to secondary matriculation board examinations.',
      icon: Compass,
      color: 'amber',
    },
    {
      title: 'Healthy Extracurriculars',
      desc: 'Balancing intellectual development with physical sports, games, and recreational educational outings.',
      icon: Trophy,
      color: 'blue',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            About Our Institution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Dedicated to Educational Mission &amp; Student Development
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At <strong className="text-[#0D261B]">{SCHOOL_INFO.name}</strong>, our focus is anchored in providing quality education, character building, discipline, and a truly supportive learning environment for every student.
          </p>
        </div>

        {/* Narrative & Visual Overview */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Educational Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                Founded on the premise that genuine education transcends rote memorization, 
                <strong className="text-[#0D261B]"> Irfania Model Higher Secondary School</strong> offers a comprehensive academic pathway from <strong>Class 1 through Class 10</strong>. Our school is structured to foster intellectual curiosity, analytical thinking, and moral clarity at each stage of a child’s development.
              </p>
              <p>
                Our educated and experienced faculty members work closely with students to ensure they understand their core subjects deeply. Rather than placing undue pressure, our teachers create an engaging classroom culture where questions are welcomed and individual student needs are addressed with patience.
              </p>
              <p>
                Beyond academics, the school cultivates an enriching environment through an optional <strong className="text-[#1B4332]">Hifz-ul-Quran program for students from Class 6 onward</strong>, comprehensive <strong className="text-[#1B4332]">hostel accommodation with three daily meals</strong>, physical games, and organized educational trips.
              </p>
            </div>

            {/* Core Commitments Checklist with Editorial Framing */}
            <div className="bg-[#F8F4E1] border border-[#DCD7C9] rounded-xs p-6 space-y-3">
              <h4 className="text-xs font-serif font-bold text-[#0D261B] uppercase tracking-wider">
                Key Educational Commitments
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                  <span>Educated &amp; experienced teachers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                  <span>Classes 1 to 10 structured progression</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                  <span>Optional Hifz-ul-Quran (Class 6+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                  <span>Hostel with 3 daily meals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                  <span>Character building &amp; discipline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                  <span>Games, sports &amp; educational trips</span>
                </li>
              </ul>
            </div>

            {/* Founder Dedication Link Banner */}
            <div className="bg-[#0D261B] text-[#F8F4E1] border border-amber-500/30 rounded-xs p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider rounded-2xs border border-amber-400/30">
                  <Award className="w-3 h-3 text-amber-300" />
                  <span>Founding Visionary</span>
                </div>
                <h4 className="text-sm sm:text-base font-serif font-bold text-white">
                  Founded by Dr. Syed Muhammad Habib Irfani
                </h4>
                <p className="text-xs text-slate-300 font-serif">
                  Established under the noble patronage and educational vision of our respected Founder.
                </p>
              </div>
              <a
                href="#founder"
                className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xs whitespace-nowrap flex items-center gap-1.5 transition-all flex-shrink-0"
              >
                <span>Read Founder's Vision</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Institutional Image Composite */}
          <div className="lg:col-span-6">
            <div className="rounded-xs border border-[#DCD7C9] bg-[#FDFBF7] p-2 shadow-xs">
              <div className="relative overflow-hidden rounded-xs group">
                <img
                  src={classroomImg.src}
                  alt="Classroom learning at Irfania Model Higher Secondary School"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 bg-white space-y-2 border-t border-[#E5E1DA] mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">
                    Learning Atmosphere
                  </span>
                  <span className="text-xs text-slate-500 font-serif">Classes 1 – 10</span>
                </div>
                <h3 className="text-base font-serif font-bold text-[#0D261B]">
                  A Supportive &amp; Disciplined Environment
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Students develop confidence, peer collaboration, and strong academic work ethic under the guidance of experienced instructors.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Institutional Pillars with Editorial Grid Style */}
        <div className="mt-16 pt-12 border-t border-[#E5E1DA]">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">Foundation</span>
            <h3 className="text-2xl font-serif font-bold text-[#0D261B] mt-1">
              Core Pillars of Student Development
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-[#FDFBF7] rounded-xs p-6 border border-[#E5E1DA] hover:border-[#1B4332] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-serif font-bold text-[#0D261B] mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
