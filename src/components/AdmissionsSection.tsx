import React from 'react';
import { GraduationCap, BookOpen, Home, Phone, HelpCircle, CheckCircle2, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenAdmission: (opts?: { hostel?: boolean; hifz?: boolean; targetClass?: string }) => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenAdmission }) => {
  const pathways = [
    {
      title: 'School Admissions (Classes 1–10)',
      category: 'General Academic Stream',
      description:
        'Open for students seeking quality primary, middle, and secondary education under experienced and dedicated teachers.',
      features: [
        'Primary School: Class 1 to Class 5',
        'Middle School: Class 6 to Class 8',
        'Secondary School: Class 9 & Class 10',
        'Focus on conceptual clarity & character building',
      ],
      ctaText: 'Inquire for School Admission',
      badge: 'Academic',
      action: () => onOpenAdmission({ targetClass: 'Class 1' }),
    },
    {
      title: 'Hifz-ul-Quran Option (Class 6+)',
      category: 'Quranic Memorization Stream',
      description:
        'An optional program available from Class 6 onward for students and parents wishing to combine Quran memorization with academic education.',
      features: [
        'Available from Class 6 onward',
        'Completely optional upon parental/student choice',
        'Structured schedule balancing school & Quran study',
        'Dedicated moral and recitation mentorship',
      ],
      ctaText: 'Inquire for Hifz Program',
      badge: 'Optional',
      action: () => onOpenAdmission({ hifz: true, targetClass: 'Class 6' }),
    },
    {
      title: 'Hostel Facility Admissions',
      category: 'Student Residential Care',
      description:
        'Residential accommodation providing a supportive and disciplined home away from home with comprehensive student facilities.',
      features: [
        'Hostel accommodation with supervised care',
        'Three-time meals provided every day',
        'Supervised evening study hours & prep',
        'Recreational games, sports & educational trips',
      ],
      ctaText: 'Inquire for Hostel Admission',
      badge: 'Hostel',
      action: () => onOpenAdmission({ hostel: true }),
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-[#FDFBF7] border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Admissions Information
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Join Irfania Model Higher Secondary School
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We welcome inquiries for general school admissions from Class 1 to Class 10, the optional Hifz-ul-Quran program from Class 6 onward, and hostel residency.
          </p>
        </div>

        {/* 3 Pathway Cards */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pathways.map((path) => (
            <div
              key={path.title}
              className="rounded-xs border border-[#E5E1DA] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#1B4332] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[9px] font-bold uppercase tracking-widest">
                    {path.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-serif italic">
                    {path.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-[#0D261B] mb-3">
                  {path.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {path.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  {path.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1B4332] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={path.action}
                  className="w-full py-3 px-4 rounded-xs bg-[#1B4332] hover:bg-[#0D261B] text-[#FDFBF7] font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>{path.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-amber-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Required Prominent CTA Block as mandated */}
        <div className="mt-14 rounded-xs bg-[#0D261B] p-8 sm:p-12 text-white text-center shadow-md border border-[#3A7558]">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#1B4332] text-amber-300 border border-[#3A7558] text-[10px] font-bold uppercase tracking-widest inline-block">
              Admissions Office
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Contact Us for Admission Information &amp; Help
            </h3>
            <p className="text-[#F8F4E1]/80 text-sm sm:text-base leading-relaxed">
              Our administration office is available to provide complete admission guidance, campus visiting details, and answers to any questions you may have.
            </p>

            {/* Quick Contact & Helpline Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-3 py-2 px-4 rounded-xs bg-[#153427] border border-[#3A7558] text-xs font-serif">
              <span className="text-[#F8F4E1]/80">For Call, Message &amp; Help:</span>
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="text-amber-300 font-mono font-bold hover:underline text-sm"
              >
                {SCHOOL_INFO.contact.phone}
              </a>
            </div>
            
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                id="contact-for-admissions-cta"
                onClick={() => onOpenAdmission()}
                className="px-6 py-3.5 bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs transition flex items-center gap-2"
              >
                <span>Online Admission Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="px-5 py-3.5 bg-[#1B4332] hover:bg-[#153427] text-white font-bold text-xs uppercase tracking-wider rounded-xs border border-[#3A7558] transition flex items-center gap-2 shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Call 0323 4720208</span>
              </a>
              <a
                href={SCHOOL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-wider rounded-xs transition flex items-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>
            </div>

            <p className="text-xs text-[#F8F4E1]/60 pt-2 font-serif italic">
              Official school visiting hours: Monday to Saturday from 8:00 AM to 2:30 PM.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
