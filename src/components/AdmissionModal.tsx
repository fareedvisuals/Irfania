import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, Send, School, BookOpen, Home, MessageSquare, PhoneCall } from 'lucide-react';
import { AdmissionInquiry } from '../types';
import { SCHOOL_INFO } from '../data/schoolData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHostel?: boolean;
  defaultHifz?: boolean;
  defaultClass?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultHostel = false,
  defaultHifz = false,
  defaultClass = 'Class 1',
}) => {
  const [formData, setFormData] = useState<AdmissionInquiry>({
    studentName: '',
    guardianName: '',
    phone: '',
    email: '',
    targetClass: defaultClass,
    isInterestedInHifz: defaultHifz,
    isInterestedInHostel: defaultHostel,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        isInterestedInHostel: defaultHostel,
        isInterestedInHifz: defaultHifz,
        targetClass: defaultClass || prev.targetClass,
      }));
      setIsSubmitted(false);
    }
  }, [isOpen, defaultHostel, defaultHifz, defaultClass]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isClass6Plus = (className: string) => {
    const num = parseInt(className.replace(/\D/g, ''), 10);
    return num >= 6;
  };

  return (
    <div
      id="admission-inquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D261B]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FDFBF7] rounded-xs shadow-2xl overflow-hidden border border-[#DCD7C9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0D261B] px-6 py-5 text-white flex items-center justify-between border-b border-[#1B4332]">
          <div>
            <div className="flex items-center gap-2 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
              <School className="w-3.5 h-3.5" />
              Irfania Model Higher Secondary School
            </div>
            <h3 className="text-xl font-serif font-bold text-white mt-1">
              Admission &amp; Information Inquiry
            </h3>
            <p className="text-xs text-[#F8F4E1]/75 font-serif italic mt-0.5">
              Classes 1–10 • Optional Hifz-ul-Quran (Class 6+) • Hostel Facility
            </p>
          </div>
          <button
            id="modal-close-button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-xs text-[#F8F4E1]/80 hover:text-white hover:bg-[#1B4332] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto bg-[#FDFBF7]">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] rounded-xs flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#0D261B]">Inquiry Received</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting <strong className="text-slate-800 font-serif">Irfania Model Higher Secondary School</strong>. 
                Our administration will review your details for{' '}
                <span className="font-semibold text-[#1B4332]">{formData.targetClass}</span>
                {formData.isInterestedInHostel ? ' with Hostel facilities' : ''}
                {formData.isInterestedInHifz ? ' and optional Hifz-ul-Quran' : ''}.
              </p>
              <div className="p-4 bg-[#F8F4E1] border border-[#DCD7C9] rounded-xs text-xs text-slate-700 text-left space-y-1.5 max-w-md mx-auto">
                <p className="font-bold text-[#0D261B] font-serif uppercase tracking-wider text-[10px]">Direct Admission Desk:</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Call: Contact School Administration during office hours (8:00 AM – 2:30 PM)</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#1B4332]" />
                  <span>Email: info@irfaniaschool.edu.pk</span>
                </p>
              </div>
              <div className="pt-2">
                <button
                  id="modal-done-btn"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#1B4332] hover:bg-[#0D261B] text-white text-xs font-bold uppercase tracking-widest rounded-xs shadow-xs transition"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="Enter student full name"
                    className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-white text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Father / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.guardianName}
                    onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                    placeholder="Enter father or guardian name"
                    className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-white text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0300 0000000"
                    className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-white text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Class Applying For *
                  </label>
                  <select
                    value={formData.targetClass}
                    onChange={(e) => {
                      const newClass = e.target.value;
                      setFormData({
                        ...formData,
                        targetClass: newClass,
                        isInterestedInHifz: isClass6Plus(newClass) ? formData.isInterestedInHifz : false,
                      });
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800 bg-white"
                  >
                    <optgroup label="Primary (Classes 1–5)">
                      <option value="Class 1">Class 1</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                    </optgroup>
                    <optgroup label="Middle (Classes 6–8)">
                      <option value="Class 6">Class 6 (Hifz Option Available)</option>
                      <option value="Class 7">Class 7 (Hifz Option Available)</option>
                      <option value="Class 8">Class 8 (Hifz Option Available)</option>
                    </optgroup>
                    <optgroup label="Secondary (Classes 9–10)">
                      <option value="Class 9">Class 9 (Hifz Option Available)</option>
                      <option value="Class 10">Class 10 (Hifz Option Available)</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Special Options: Hifz & Hostel */}
              <div className="bg-[#F8F4E1] border border-[#DCD7C9] rounded-xs p-4 space-y-3">
                <span className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                  Additional Programs &amp; Facilities
                </span>

                {/* Hifz Checkbox (Only for Class 6+) */}
                <label
                  className={`flex items-start gap-3 p-2.5 rounded-xs border transition ${
                    isClass6Plus(formData.targetClass)
                      ? 'bg-white border-[#DCD7C9] hover:border-[#1B4332] cursor-pointer'
                      : 'bg-white/60 border-[#DCD7C9] opacity-60 cursor-not-allowed'
                  }`}
                >
                  <input
                    type="checkbox"
                    disabled={!isClass6Plus(formData.targetClass)}
                    checked={formData.isInterestedInHifz}
                    onChange={(e) =>
                      setFormData({ ...formData, isInterestedInHifz: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-[#1B4332] rounded border-slate-300 focus:ring-[#1B4332]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <BookOpen className="w-3.5 h-3.5 text-[#1B4332]" />
                      Optional Hifz-ul-Quran Program
                      <span className="text-[9px] font-bold bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] px-2 py-0.5 rounded-xs uppercase">
                        From Class 6 Onward
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {isClass6Plus(formData.targetClass)
                        ? 'Enroll in the optional Quran memorization track alongside academic schooling.'
                        : 'Note: The optional Hifz program is available for students from Class 6 onward.'}
                    </p>
                  </div>
                </label>

                {/* Hostel Checkbox */}
                <label className="flex items-start gap-3 p-2.5 bg-white rounded-xs border border-[#DCD7C9] hover:border-[#1B4332] cursor-pointer transition">
                  <input
                    type="checkbox"
                    checked={formData.isInterestedInHostel}
                    onChange={(e) =>
                      setFormData({ ...formData, isInterestedInHostel: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 text-[#1B4332] rounded border-slate-300 focus:ring-[#1B4332]"
                  />
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                      <Home className="w-3.5 h-3.5 text-[#1B4332]" />
                      Hostel Facility &amp; Residence
                      <span className="text-[9px] font-bold bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] px-2 py-0.5 rounded-xs uppercase">
                        Three-Time Meals Daily
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Includes accommodation, 3 nutritious meals daily, study hours support, recreational activities, and educational trips.
                    </p>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Questions / Additional Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ask about admissions, campus visits, or specific student needs..."
                  className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-white text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  id="submit-admission-inquiry"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1B4332] hover:bg-[#0D261B] text-[#FDFBF7] font-bold text-xs uppercase tracking-widest rounded-xs shadow-xs transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Inquiry</span>
                </button>
                
                {/* Immediate Call / Message Assistance Help */}
                <div className="mt-3 p-3 rounded-xs bg-[#F8F4E1] border border-[#DCD7C9] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#1B4332] flex-shrink-0" />
                    <div>
                      <span className="font-bold text-[#0D261B] block">Need Immediate Help?</span>
                      <span className="text-[11px] text-slate-600">Call or Message: <strong className="font-mono text-[#1B4332]">{SCHOOL_INFO.contact.phone}</strong></span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
                    <a
                      href={SCHOOL_INFO.contact.phoneTel}
                      className="flex-1 sm:flex-none text-center px-3 py-1 rounded-xs bg-[#1B4332] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#0D261B] transition"
                    >
                      Call
                    </a>
                    <a
                      href={SCHOOL_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none text-center px-3 py-1 rounded-xs bg-[#25D366] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[#1EBE5D] transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <p className="text-[11px] text-center text-slate-500 mt-2 font-serif italic">
                  No fee or payment required to submit information inquiries.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
