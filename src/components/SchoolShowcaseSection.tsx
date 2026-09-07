import React from 'react';
import { School, Building2 } from 'lucide-react';
import { useCustomImage } from '../utils/imageStore';
import { ImageSlotCard } from './ImageSlotCard';

export const SchoolShowcaseSection: React.FC = () => {
  const slot1 = useCustomImage(
    'school-slot-1',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80'
  );

  const slot2 = useCustomImage(
    'school-slot-2',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'
  );

  const slot3 = useCustomImage(
    'school-slot-3',
    'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80'
  );

  const slots = [
    {
      slotNumber: 1,
      title: 'School Building & Main Campus',
      description: 'The official academic building, campus entrance, and administrative wing of Irfania Model Higher Secondary School.',
      state: slot1,
    },
    {
      slotNumber: 2,
      title: 'Academic Classrooms & Learning Environment',
      description: 'Spacious, well-ventilated, and organized classroom halls supporting student development from Class 1 through Class 10.',
      state: slot2,
    },
    {
      slotNumber: 3,
      title: 'Campus Courtyard & Facilities',
      description: 'Open assembly grounds, library study spaces, science facilities, and safe outdoor courtyards.',
      state: slot3,
    },
  ];

  return (
    <section id="school-campus" className="py-20 bg-[#F8F4E1]/40 border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            <Building2 className="w-3.5 h-3.5 text-[#1B4332]" />
            <span>School Campus Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Our School Campus &amp; Infrastructure
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A visual showcase of our school building, interactive learning classrooms, and expansive campus environment.
          </p>
        </div>

        {/* Exactly 3 Image Slots Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {slots.map((slot) => (
            <ImageSlotCard
              key={slot.slotNumber}
              slotNumber={slot.slotNumber}
              totalSlots={3}
              categoryName="School"
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
    </section>
  );
};
