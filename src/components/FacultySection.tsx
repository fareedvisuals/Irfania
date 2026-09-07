import React from 'react';
import { Award, BookOpen, HeartHandshake, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react';
import { useCustomImage } from '../utils/imageStore';

export const FacultySection: React.FC = () => {
  const facultyImg = useCustomImage(
    'faculty-teaching',
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
  );

  const commitments = [
    {
      title: 'Conceptual Understanding First',
      desc: 'Teachers explain subjects clearly with practical examples rather than encouraging mechanical memorization.',
      icon: BookOpen,
    },
    {
      title: 'Supportive & Patient Mentorship',
      desc: 'Encouraging students to ask questions freely, building self-confidence in weak subjects through patient coaching.',
      icon: HeartHandshake,
    },
    {
      title: 'Academic & Character Guidance',
      desc: 'Focusing on moral conduct, ethics, manners, and daily classroom discipline alongside academic syllabus progress.',
      icon: Award,
    },
    {
      title: 'Continuous Student Progress Monitoring',
      desc: 'Regular classroom evaluations, copy checking, and parental updates to ensure steady academic and personal growth.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="faculty" className="py-20 bg-[#FDFBF7] border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Teaching Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Educated &amp; Dedicated Teachers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our qualified and experienced educators are committed to helping students understand their studies deeply and develop both academically and personally.
          </p>
        </div>

        {/* Core Teaching Philosophy Banner */}
        <div className="mt-12 bg-white rounded-xs p-6 sm:p-10 border border-[#E5E1DA] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">
                Educational Dedication
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#0D261B]">
                Guiding Young Minds with Care, Knowledge &amp; Purpose
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At <strong>Irfania Model Higher Secondary School</strong>, we recognize that the quality of education rests upon the dedication of its teachers. Our teachers are chosen for their strong educational backgrounds, teaching competency, and genuine passion for nurturing youth.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                They prioritize conceptual clarity over rote learning, ensuring every student from Class 1 through Class 10 understands syllabus topics thoroughly, builds strong cognitive foundations, and embraces wholesome character values.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-xs overflow-hidden shadow-xs border border-[#E5E1DA] group">
                <img
                  src={facultyImg.src}
                  alt="Teacher guiding students with dedication"
                  className="w-full h-72 object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="p-4 bg-[#0D261B] text-white text-xs border-t border-[#1B4332]">
                  <p className="font-bold text-amber-300 font-serif">Individual Attention &amp; Encouragement</p>
                  <p className="text-[#F8F4E1]/80 text-[11px] mt-0.5 font-serif italic">
                    Ensuring students develop confidence in mathematics, sciences, languages, and general knowledge.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Faculty Method Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xs p-6 border border-[#E5E1DA] shadow-xs hover:border-[#1B4332] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#0D261B] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
