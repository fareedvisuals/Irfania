import React from 'react';
import {
  ShieldCheck,
  BookOpen,
  Home,
  CheckCircle2,
  Phone,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { useCustomImage } from '../utils/imageStore';

interface ManagerCardProps {
  designation: string;
  name: string;
  roleBadge: string;
  icon: React.ElementType;
  description: string;
  responsibilities: string[];
  imageSrc: string;
}

const ManagerCardItem: React.FC<ManagerCardProps> = ({
  designation,
  name,
  roleBadge,
  icon: IconComponent,
  description,
  responsibilities,
  imageSrc,
}) => {
  return (
    <div className="bg-white rounded-xs border border-[#E5E1DA] shadow-xs hover:border-[#1B4332] hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Manager Photo Container */}
        <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0D261B] border-b border-[#E5E1DA]">
          <img
            src={imageSrc}
            alt={`${designation} ${name}`}
            className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500 opacity-95"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D261B]/80 via-transparent to-transparent pointer-events-none" />

          {/* Top-Left Designation Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-[#0D261B]/90 backdrop-blur-xs text-amber-300 rounded-xs text-[10px] font-bold uppercase tracking-wider border border-[#3A7558] shadow-sm">
            <IconComponent className="w-3.5 h-3.5 text-amber-300" />
            <span>{designation}</span>
          </div>
        </div>

        {/* Manager Information */}
        <div className="p-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-[#1B4332] uppercase tracking-wider block">
              {roleBadge}
            </span>
            <h3 className="text-xl font-serif font-bold text-[#0D261B] leading-snug">
              {name}
            </h3>
            <div className="text-xs font-serif italic text-slate-500 pb-2">
              {designation} • {SCHOOL_INFO.name}
            </div>
          </div>

          {/* Description */}
          <div className="pt-3 border-t border-[#E5E1DA]">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="mt-4 pt-3 border-t border-[#E5E1DA] space-y-2">
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block font-serif">
              Key Responsibilities:
            </span>
            {responsibilities.map((resp, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                <span>{resp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ManagersSection: React.FC = () => {
  const principalImg = useCustomImage(
    'manager-principal',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  );

  const vicePrincipalImg = useCustomImage(
    'manager-vice-principal',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
  );

  const hostelManagerImg = useCustomImage(
    'manager-hostel-manager',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  );

  const managers = [
    {
      designation: 'Principal',
      name: 'Muhammad Hussain Akbar Colonel.Rtd',
      roleBadge: 'Institutional Head & Principal',
      icon: ShieldCheck,
      description:
        'Provides disciplined executive leadership, administrative direction, and rigorous educational supervision to ensure the school maintains highest academic and conduct standards.',
      responsibilities: [
        'Overall School Governance & Administration',
        'Academic Standards & Board Exam Direction',
        'Staff Supervision & Institutional Discipline',
      ],
      state: principalImg,
    },
    {
      designation: 'Vice Principal',
      name: 'Qari Muhammad Younus Chisti',
      roleBadge: 'Academic & Moral Guidance',
      icon: BookOpen,
      description:
        'Oversees daily academic coordination, teacher-student collaboration, curriculum pacing from Class 1 to 10, and moral instruction to foster holistic student development.',
      responsibilities: [
        'Daily Academic Pacing & Syllabus Coverage',
        'Faculty Collaboration & Student Mentorship',
        'Character Education & Co-Curricular Affairs',
      ],
      state: vicePrincipalImg,
    },
    {
      designation: 'Hostel Manager',
      name: 'Syed Muhammad Kashif Ali Shah',
      roleBadge: 'Residential Administration & Care',
      icon: Home,
      description:
        'Oversees the student hostel residence, ensuring a secure, homely environment with three nutritious daily meals, structured evening study hours, and attentive student welfare.',
      responsibilities: [
        'Hostel Living & Dormitory Care',
        'Supervision of Three-Time Daily Meals',
        'Evening Study Sessions & Recreation Supervision',
      ],
      state: hostelManagerImg,
    },
  ];

  return (
    <section id="managers" className="py-20 bg-[#FDFBF7] border-b border-[#E5E1DA] relative scroll-mt-16">
      {/* Anchor for administration links */}
      <div id="administration" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            <Sparkles className="w-3 h-3 text-amber-500" />
            School Leadership &amp; Administration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Names of Managers
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The dedicated administrative leaders managing the daily academics, student welfare, discipline, and boarding facilities of <strong className="text-[#0D261B]">{SCHOOL_INFO.name}</strong>.
          </p>
        </div>

        {/* 3 Management Leadership Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {managers.map((mgr) => (
            <ManagerCardItem
              key={mgr.designation}
              designation={mgr.designation}
              name={mgr.name}
              roleBadge={mgr.roleBadge}
              icon={mgr.icon}
              description={mgr.description}
              responsibilities={mgr.responsibilities}
              imageSrc={mgr.state.src}
            />
          ))}
        </div>

        {/* Administration Communication & Office Hours */}
        <div className="mt-12 p-6 sm:p-8 rounded-xs bg-[#F8F4E1] border border-[#DCD7C9] max-w-3xl mx-auto text-center space-y-3">
          <h4 className="text-base font-serif font-bold text-[#0D261B]">
            Administration Inquiries &amp; Parent Meetings
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-serif">
            Parents, guardians, and prospective students are welcome to meet the Principal, Vice Principal, and Hostel administration regarding student admissions, curriculum guidance, Hifz enrollment, or hostel facilities during visiting hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#0D261B] pt-2">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xs border border-[#DCD7C9]">
              <Clock className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Visiting Hours: 8:00 AM – 2:30 PM (Mon–Sat)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xs border border-[#DCD7C9]">
              <Phone className="w-3.5 h-3.5 text-[#1B4332]" />
              <span>Office Helpline: </span>
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="font-mono text-[#1B4332] hover:underline"
              >
                {SCHOOL_INFO.contact.phone}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
