import React from 'react';
import { BookOpen, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import hifzStudentImg from '../assets/images/hifz_student_quran_1788607483940.jpg';
import hifzClassImg from '../assets/images/hifz_class_students_1788607506690.jpg';
import { useCustomImage } from '../utils/imageStore';
import { ImageSlotCard } from './ImageSlotCard';

interface HifzSectionProps {
  onOpenAdmission: (opts?: { hifz?: boolean; targetClass?: string }) => void;
}

export const HifzSection: React.FC<HifzSectionProps> = ({ onOpenAdmission }) => {
  const hifzSlot1 = useCustomImage('hifz-slot-1', hifzStudentImg);
  const hifzSlot2 = useCustomImage('hifz-slot-2', hifzClassImg);
  const hifzSlot3 = useCustomImage(
    'hifz-slot-3',
    'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1000&q=80'
  );

  const hifzSlots = [
    {
      slotNumber: 1,
      title: 'Individual Quran Recitation & Memorization',
      description: 'Student in traditional white shalwar qameez and white prayer cap reciting the Holy Quran on a wooden rehal.',
      state: hifzSlot1,
    },
    {
      slotNumber: 2,
      title: 'Hifz Tajweed Classroom & Group Halqah',
      description: 'Students in traditional white attire engaged in disciplined group Tajweed, pronunciation, and mutual Quranic revision.',
      state: hifzSlot2,
    },
    {
      slotNumber: 3,
      title: 'Daily Revision & Spiritual Character Building',
      description: 'Dedicated daily revision cycles ensuring long-term Quranic retention, reflection, Islamic manners, and moral guidance.',
      state: hifzSlot3,
    },
  ];

  return (
    <section
      id="hifz"
      className="py-20 bg-[#0D261B] text-[#F8F4E1] relative overflow-hidden border-b border-[#1B4332]"
    >
      {/* Subtle Background Ornament */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#3A7558_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B4332] border border-[#3A7558] text-amber-300 text-[10px] font-bold uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-amber-300" />
            Special Educational Offering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Optional Hifz-ul-Quran Program
          </h2>
          <p className="text-[#F8F4E1]/80 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            Available from <span className="text-amber-300 font-semibold underline decoration-amber-400/50 underline-offset-4">Class 6 onward</span> for students and families who choose to pursue Quranic memorization alongside academic studies.
          </p>
        </div>

        {/* Narrative & Core Pillars */}
        <div className="mt-12 bg-[#153427]/60 border border-[#3A7558] rounded-xs p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-[#F8F4E1]/90 leading-relaxed">
                At <strong className="text-white">Irfania Model Higher Secondary School</strong>, students from <strong>Class 6 onward</strong> have the option to pursue <strong>Hifz-ul-Quran</strong> if they or their parents desire this noble pursuit. Students wear the traditional <strong>white shalwar qameez and white prayer cap</strong>, embodying Islamic modesty and reverence during recitation and Tajweed practice.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xs bg-[#0D261B] border border-[#3A7558] space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>Optional Choice</span>
                  </div>
                  <p className="text-xs text-[#F8F4E1]/70">
                    Completely voluntary program tailored for students and parents who desire this educational track.
                  </p>
                </div>

                <div className="p-3.5 rounded-xs bg-[#0D261B] border border-[#3A7558] space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>From Class 6 Onward</span>
                  </div>
                  <p className="text-xs text-[#F8F4E1]/70">
                    Open to enrolled students entering Class 6 or higher grades with structured pacing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xs bg-[#0D261B] border border-[#3A7558] space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>White Shalwar Qameez &amp; Cap</span>
                  </div>
                  <p className="text-xs text-[#F8F4E1]/70">
                    White shalwar qameez and white prayer cap fostering humility, focus, and Islamic etiquette.
                  </p>
                </div>

                <div className="p-3.5 rounded-xs bg-[#0D261B] border border-[#3A7558] space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-serif font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                    <span>Tajweed &amp; Revision</span>
                  </div>
                  <p className="text-xs text-[#F8F4E1]/70">
                    Experienced Qari guidance emphasizing proper pronunciation, Tajweed, and character building.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-xs bg-[#0D261B] border border-[#3A7558] space-y-3">
              <BookOpen className="w-10 h-10 text-amber-300" />
              <h3 className="text-xl font-serif font-bold text-white">
                Inquire for Hifz Program
              </h3>
              <p className="text-xs text-[#F8F4E1]/75 leading-relaxed">
                Connect with our administration to learn about curriculum schedules, Tajweed guidance, and boarding arrangements for Hifz students.
              </p>
              <button
                id="hifz-inquiry-btn"
                onClick={() => onOpenAdmission({ hifz: true, targetClass: 'Class 6' })}
                className="w-full py-3 rounded-xs bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] font-bold text-xs uppercase tracking-wider transition shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Hifz Admission Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* 3 Dedicated Image Slots for HIFZ-UL-QURAN */}
        <div className="mt-14">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#153427] text-amber-300 border border-[#3A7558] text-[10px] font-bold uppercase tracking-widest rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Hifz-ul-Quran • 3 Dedicated Slots</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Hifz-ul-Quran Activity &amp; Classroom Image Slots
            </h3>
            <p className="text-[#F8F4E1]/80 text-xs sm:text-sm">
              Dedicated image slots for individual Quran recitation, Tajweed classroom, and daily revision circles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hifzSlots.map((slot) => (
              <ImageSlotCard
                key={slot.slotNumber}
                slotNumber={slot.slotNumber}
                totalSlots={3}
                categoryName="Hifz-ul-Quran"
                title={slot.title}
                description={slot.description}
                imageSrc={slot.state.src}
                isCustom={slot.state.isCustom}
                onReplaceImage={slot.state.replaceImage}
                onResetImage={slot.state.resetImage}
                aspectRatio="portrait"
                theme="dark"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
