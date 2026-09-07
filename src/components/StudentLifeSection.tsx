import React from 'react';
import {
  Trophy,
  Compass,
  Users,
  CheckCircle2,
  Gift,
  Award,
  Sparkles,
} from 'lucide-react';
import { useCustomImage } from '../utils/imageStore';
import { ImageSlotCard } from './ImageSlotCard';

export const StudentLifeSection: React.FC = () => {
  // 3 Dedicated Image Slots for TRIPS
  const tripSlot1 = useCustomImage(
    'trips-slot-1',
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80'
  );

  const tripSlot2 = useCustomImage(
    'trips-slot-2',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80'
  );

  const tripSlot3 = useCustomImage(
    'trips-slot-3',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80'
  );

  const tripSlots = [
    {
      slotNumber: 1,
      title: 'Educational & Historical Site Visits',
      description: 'Supervised tours to educational museums, historical monuments, and cultural landmarks across Pakistan.',
      state: tripSlot1,
    },
    {
      slotNumber: 2,
      title: 'Scenic Nature & Outdoor Excursions',
      description: 'Field trips to mountain viewpoints, botanical gardens, and open-air natural parks for experiential learning.',
      state: tripSlot2,
    },
    {
      slotNumber: 3,
      title: 'Student Group Travel & Bus Expeditions',
      description: 'Cherished travel journeys building camaraderie, teamwork, and independence among school and hostel students.',
      state: tripSlot3,
    },
  ];

  // 3 Dedicated Image Slots for GIFT DISTRIBUTION
  const giftSlot1 = useCustomImage(
    'gift-slot-1',
    'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&w=1000&q=80'
  );

  const giftSlot2 = useCustomImage(
    'gift-slot-2',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80'
  );

  const giftSlot3 = useCustomImage(
    'gift-slot-3',
    'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1000&q=80'
  );

  const giftSlots = [
    {
      slotNumber: 1,
      title: 'Annual Academic Prize Distribution',
      description: 'Distinguished awards, trophies, and certificates honoring top-scoring examination position holders.',
      state: giftSlot1,
    },
    {
      slotNumber: 2,
      title: 'Student Gift Distribution & Trophies',
      description: 'Ceremonial gift packages, stationery sets, and special recognition awarded to hardworking students.',
      state: giftSlot2,
    },
    {
      slotNumber: 3,
      title: 'Hifz Completion & Co-Curricular Awards',
      description: 'Grand honors and encouragement gifts for Quranic memorization milestones, sports championships, and noble conduct.',
      state: giftSlot3,
    },
  ];

  return (
    <section id="student-life" className="py-20 bg-[#FDFBF7] border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Holistic Student Development
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Student Life, Games, Trips &amp; Honors
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Education at Irfania Model Higher Secondary School encompasses rigorous academics, healthy outdoor sports, memorable educational trips, and grand annual gift ceremonies.
          </p>
        </div>

        {/* 1. TRIPS Showcase (Exactly 3 Image Slots) */}
        <div id="trips" className="mt-14 pt-6">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
              <Compass className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Trips Photo Gallery • 3 Dedicated Slots</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D261B]">
              Educational Trips &amp; Student Outings
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Exactly 3 separate image slots for historical site tours, outdoor natural adventures, and student travel expeditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tripSlots.map((slot) => (
              <ImageSlotCard
                key={slot.slotNumber}
                slotNumber={slot.slotNumber}
                totalSlots={3}
                categoryName="Trips"
                title={slot.title}
                description={slot.description}
                imageSrc={slot.state.src}
                isCustom={slot.state.isCustom}
                onReplaceImage={slot.state.replaceImage}
                onResetImage={slot.state.resetImage}
                aspectRatio="video"
                theme="light"
              />
            ))}
          </div>
        </div>

        {/* 2. GIFT DISTRIBUTION Showcase (Exactly 3 Image Slots) */}
        <div id="gift-distribution" className="mt-20 pt-12 border-t border-[#E5E1DA]">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
              <Gift className="w-3.5 h-3.5 text-amber-600" />
              <span>Gift Distribution • 3 Dedicated Slots</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D261B]">
              Annual Prize &amp; Gift Distribution Ceremony
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Exactly 3 separate image slots for academic distinction awards, student gift presentations, and sports shield ceremonies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {giftSlots.map((slot) => (
              <ImageSlotCard
                key={slot.slotNumber}
                slotNumber={slot.slotNumber}
                totalSlots={3}
                categoryName="Gift Distribution"
                title={slot.title}
                description={slot.description}
                imageSrc={slot.state.src}
                isCustom={slot.state.isCustom}
                onReplaceImage={slot.state.replaceImage}
                onResetImage={slot.state.resetImage}
                aspectRatio="video"
                theme="light"
              />
            ))}
          </div>
        </div>

        {/* 3. Sports & Physical Activities Summary Card */}
        <div className="mt-16 bg-white rounded-xs p-6 sm:p-8 border border-[#DCD7C9] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] flex items-center justify-center flex-shrink-0">
              <Trophy className="w-7 h-7 text-amber-600" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Physical Education &amp; Games
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-[#0D261B] mt-0.5">
                Encouraging Sportsmanship, Health &amp; Active Play
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Daily physical exercise, cricket matches, and playground games ensure our students maintain robust health, discipline, and cooperative spirit.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="#gallery"
              className="px-5 py-2.5 rounded-xs bg-[#1B4332] hover:bg-[#0D261B] text-white font-bold text-xs uppercase tracking-wider transition shadow-xs"
            >
              View Full Gallery
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
