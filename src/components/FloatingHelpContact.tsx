import React, { useState } from 'react';
import { Phone, MessageSquare, PhoneCall, X, HelpCircle, ChevronUp } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingHelpContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Helpline and instant assistance" className="fixed bottom-6 left-4 sm:left-6 z-40 font-sans">
      {/* Expanded Quick Action Popover */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-[#0D261B] text-[#FDFBF7] rounded-xs border border-[#3A7558] shadow-2xl p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-[#1B4332]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
                School Call &amp; Message Help
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-xs hover:bg-[#1B4332] text-[#F8F4E1]/70 hover:text-white transition"
              aria-label="Close help popover"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-1">
            <span className="text-xs text-[#F8F4E1]/80 font-serif">
              Direct administration helpline for admissions, Hifz program, and hostel details:
            </span>
            <a
              href={SCHOOL_INFO.contact.phoneTel}
              className="text-lg font-mono font-bold text-white hover:text-amber-300 transition block pt-1"
            >
              {SCHOOL_INFO.contact.phone}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={SCHOOL_INFO.contact.phoneTel}
              className="py-2 px-3 rounded-xs bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] text-xs font-bold uppercase tracking-wider text-center transition flex items-center justify-center gap-1.5 shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href={SCHOOL_INFO.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider text-center transition flex items-center justify-center gap-1.5 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="mt-2.5 pt-2 border-t border-[#1B4332] text-[10px] text-[#F8F4E1]/60 font-serif italic text-center">
            Visiting Hours: 8:00 AM – 2:30 PM (Mon–Sat)
          </div>
        </div>
      )}

      {/* Floating Trigger Pill */}
      <div className="flex items-center gap-1.5">
        <button
          id="floating-helpline-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-xs bg-[#0D261B] hover:bg-[#1B4332] text-white border border-[#3A7558] shadow-lg transition-all duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-300"
          aria-expanded={isOpen}
          aria-label="Call, Message and Help Helpline"
        >
          <div className="w-7 h-7 rounded-xs bg-[#1B4332] group-hover:bg-[#25D366] text-amber-300 group-hover:text-white flex items-center justify-center transition-colors">
            <Phone className="w-3.5 h-3.5" />
          </div>
          
          <div className="text-left">
            <span className="text-[9px] uppercase tracking-wider font-bold text-amber-300 block leading-tight">
              Call, Message &amp; Help
            </span>
            <span className="text-xs font-mono font-bold text-white tracking-wide block leading-tight">
              {SCHOOL_INFO.contact.phone}
            </span>
          </div>

          <ChevronUp className={`w-3.5 h-3.5 text-[#F8F4E1]/70 transition-transform duration-200 ml-1 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* 1-Tap Quick Direct Call Button */}
        <a
          href={SCHOOL_INFO.contact.phoneTel}
          className="p-2.5 rounded-xs bg-[#1B4332] hover:bg-[#0D261B] text-white border border-[#3A7558] shadow-lg transition-all hover:scale-105 flex items-center justify-center"
          title="Direct Call to 0323 4720208"
          aria-label="Direct Call to 0323 4720208"
        >
          <PhoneCall className="w-4 h-4 text-amber-300" />
        </a>

        {/* 1-Tap Quick WhatsApp Button */}
        <a
          href={SCHOOL_INFO.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white border border-emerald-600 shadow-lg transition-all hover:scale-105 flex items-center justify-center"
          title="Send WhatsApp Message for Help"
          aria-label="Send WhatsApp Message for Help"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
