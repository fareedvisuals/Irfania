import React from 'react';
import {
  Bed,
  Utensils,
  HeartHandshake,
  BookOpenCheck,
  Trophy,
  Compass,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  UserCheck,
} from 'lucide-react';
import { HOSTEL_FEATURES } from '../data/schoolData';
import { useCustomImage } from '../utils/imageStore';
import { ImageSlotCard } from './ImageSlotCard';

interface HostelSectionProps {
  onOpenAdmission: (opts?: { hostel?: boolean }) => void;
}

export const HostelSection: React.FC<HostelSectionProps> = ({ onOpenAdmission }) => {
  const hostelSlot1 = useCustomImage(
    'hostel-slot-1',
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80'
  );

  const hostelSlot2 = useCustomImage(
    'hostel-slot-2',
    'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1000&q=80'
  );

  const hostelSlot3 = useCustomImage(
    'hostel-slot-3',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80'
  );

  const hostelSlots = [
    {
      slotNumber: 1,
      title: 'Hostel Dormitory & Bedrooms',
      description: 'Clean, secure, and comfortable student bedrooms with individual beds, personal wardrobes, and restful living spaces.',
      state: hostelSlot1,
    },
    {
      slotNumber: 2,
      title: 'Dining Hall & 3 Fresh Meals Daily',
      description: 'Hygienic, supervised dining hall where resident students enjoy breakfast, lunch, and dinner prepared with strict nutrition standards.',
      state: hostelSlot2,
    },
    {
      slotNumber: 3,
      title: 'Supervised Study & Activity Lounge',
      description: 'Designated evening study space with tutor guidance, revision tables, and recreational student facilities.',
      state: hostelSlot3,
    },
  ];
  const iconMap: Record<string, React.ElementType> = {
    Bed,
    Utensils,
    HeartHandshake,
    BookOpenCheck,
    Trophy,
    Compass,
    ShieldCheck,
    Sparkles,
  };

  return (
    <section id="hostel" className="py-20 bg-white border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Student Residential Life
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            A Comfortable &amp; Supportive Home Away From Home
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            More than just accommodation — our hostel is an enriching, safe, and disciplined environment where students study, live, socialize, and participate in healthy activities.
          </p>
        </div>

        {/* Highlight Callout: Three-Time Daily Meals & Management */}
        <div className="mt-12 bg-[#FDFBF7] rounded-xs p-6 sm:p-8 border border-[#DCD7C9] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="w-14 h-14 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] flex items-center justify-center flex-shrink-0">
              <Utensils className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332]" />
                Featured Student Amenity
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D261B] mt-0.5">
                Three-Time Meals Provided Every Day
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
                Students receive fresh, wholesome, and nutritious breakfast, lunch, and dinner daily in a clean and disciplined dining environment.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              id="hostel-admissions-cta"
              onClick={() => onOpenAdmission({ hostel: true })}
              className="w-full sm:w-auto px-6 py-3 bg-[#1B4332] hover:bg-[#0D261B] text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs transition flex items-center justify-center gap-2"
            >
              <span>Hostel Admissions Inquiries</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSTEL_FEATURES.map((feature) => {
            const Icon = iconMap[feature.iconName] || Sparkles;
            return (
              <div
                key={feature.title}
                className={`rounded-xs p-6 transition-all flex flex-col justify-between ${
                  feature.highlight
                    ? 'bg-[#F8F4E1]/80 border-2 border-[#1B4332] shadow-xs'
                    : 'bg-[#FDFBF7] border border-[#E5E1DA] hover:border-[#1B4332]'
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xs flex items-center justify-center mb-4 ${
                      feature.highlight
                        ? 'bg-[#1B4332] text-white'
                        : 'bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#0D261B] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {feature.highlight && (
                  <div className="mt-4 pt-3 border-t border-[#DCD7C9] flex items-center gap-1.5 text-[10px] font-bold text-[#1B4332] uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332]" />
                    <span>Essential Facility</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3 Dedicated Image Slots for Hostel */}
        <div className="mt-16 pt-12 border-t border-[#E5E1DA]">
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
              <Bed className="w-3.5 h-3.5 text-amber-600" />
              <span>Hostel Life • 3 Dedicated Slots</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0D261B]">
              Hostel Facility &amp; Residence Image Slots
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Dedicated image slots for student residential rooms, hygienic dining hall, and evening study areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hostelSlots.map((slot) => (
              <ImageSlotCard
                key={slot.slotNumber}
                slotNumber={slot.slotNumber}
                totalSlots={3}
                categoryName="Hostel"
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

        {/* Living Routine & Management Overview Card */}
        <div className="mt-12 bg-[#0D261B] rounded-xs p-6 sm:p-10 text-white shadow-xs border border-[#1B4332]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                <UserCheck className="w-4 h-4" />
                Under Dedicated Leadership
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Safe, Disciplined &amp; Well-Managed Residential Care
              </h3>
              <p className="text-[#F8F4E1]/85 text-sm sm:text-base leading-relaxed">
                Supervised by <strong className="text-white">Hostel Manager Syed Muhammad Kashif Ali Shah</strong>, the hostel emphasizes regular daily schedules, supervised evening study hours, recreational games, and educational outings so students remain focused, healthy, and supported throughout their academic journey.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 bg-[#153427] rounded-xs border border-[#3A7558]">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">Daily Nutrition</span>
                  <span className="text-xs text-[#F8F4E1]">3 Warm, Balanced Meals Daily</span>
                </div>
                <div className="p-3.5 bg-[#153427] rounded-xs border border-[#3A7558]">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">Academic Routine</span>
                  <span className="text-xs text-[#F8F4E1]">Supervised Evening Study Support</span>
                </div>
                <div className="p-3.5 bg-[#153427] rounded-xs border border-[#3A7558]">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">Recreation</span>
                  <span className="text-xs text-[#F8F4E1]">Sports &amp; Educational Outings</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-xs bg-[#153427] border border-[#3A7558]">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-widest mb-2">
                Hostel Admissions
              </span>
              <p className="text-xs text-[#F8F4E1]/80 mb-5 leading-relaxed">
                Inquire today regarding residential seats for enrolled students of Irfania Model Higher Secondary School.
              </p>
              <button
                id="hostel-apply-button"
                onClick={() => onOpenAdmission({ hostel: true })}
                className="w-full py-3 px-4 bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] font-bold text-xs uppercase tracking-wider rounded-xs shadow-xs transition"
              >
                Inquire for Hostel Seat
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
