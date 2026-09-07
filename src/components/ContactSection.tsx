import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, School, ShieldCheck, PhoneCall, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General School Admission Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Contact Irfania Model Higher Secondary School
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Reach out to our school administration for admissions from Class 1 to Class 10, the optional Hifz-ul-Quran program, hostel residency, or campus visit arrangements.
          </p>
        </div>

        {/* Contact Information Cards & Form Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Card */}
            <div className="bg-[#FDFBF7] rounded-xs p-6 border border-[#E5E1DA] shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xs bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] flex items-center justify-center flex-shrink-0">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#0D261B]">
                    {SCHOOL_INFO.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Classes 1–10 • Hifz-ul-Quran • Student Hostel
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-3 border-t border-[#E5E1DA] text-xs sm:text-sm text-slate-700">
                
                {/* Address Placeholder */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D261B] block font-serif">Campus Address</span>
                    <span className="text-slate-600">{SCHOOL_INFO.contact.addressPlaceholder}</span>
                  </div>
                </div>

                {/* Phone Number & Direct Call/Message */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                  <div className="w-full">
                    <span className="font-bold text-[#0D261B] block font-serif">Phone Number (Calls &amp; Messages)</span>
                    <a
                      href={SCHOOL_INFO.contact.phoneTel}
                      className="text-base font-bold font-mono text-[#1B4332] hover:underline block mt-0.5"
                    >
                      {SCHOOL_INFO.contact.phone}
                    </a>
                    <span className="text-[11px] text-slate-500 block">
                      Direct line for admissions, student inquiries &amp; help
                    </span>

                    {/* Quick Call & Message Buttons */}
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      <a
                        href={SCHOOL_INFO.contact.phoneTel}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#1B4332] hover:bg-[#0D261B] text-white text-[11px] font-bold uppercase tracking-wider transition shadow-xs"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-amber-300" />
                        <span>Call Now</span>
                      </a>
                      <a
                        href={SCHOOL_INFO.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] font-bold uppercase tracking-wider transition shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Message</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Placeholder */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D261B] block font-serif">Official Email Address</span>
                    <span className="text-slate-600">{SCHOOL_INFO.contact.emailPlaceholder}</span>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1B4332] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0D261B] block font-serif">Office &amp; Visiting Hours</span>
                    <span className="text-slate-600">{SCHOOL_INFO.contact.visitingHours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Map Location Frame / Direction Guide */}
            <div className="bg-[#FDFBF7] rounded-xs p-6 border border-[#E5E1DA] shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">
                  Campus Location Guide
                </span>
                <span className="text-[10px] bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] px-2 py-0.5 rounded-xs font-serif italic">
                  Official Campus
                </span>
              </div>
              
              {/* Map Preview Element */}
              <div className="relative h-48 w-full rounded-xs overflow-hidden bg-white border border-[#E5E1DA] flex items-center justify-center text-center p-4">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xs bg-[#1B4332] text-amber-300 flex items-center justify-center mx-auto shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-serif font-bold text-[#0D261B]">
                    Irfania Model Higher Secondary School
                  </h4>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Parents and visitors are warmly welcomed during official school hours. Contact the administration desk prior to your arrival for campus orientation.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Call & Message Helpline Box */}
            <div className="bg-[#0D261B] text-[#FDFBF7] rounded-xs p-6 border border-[#3A7558] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <PhoneCall className="w-4 h-4 text-amber-300" />
                <span>Call &amp; Message Helpline</span>
              </div>
              <a
                href={SCHOOL_INFO.contact.phoneTel}
                className="text-2xl font-serif font-bold text-white font-mono hover:text-amber-300 transition block"
              >
                {SCHOOL_INFO.contact.phone}
              </a>
              <p className="text-xs text-[#F8F4E1]/80 leading-relaxed font-serif">
                Direct phone support for parents. Call or send a WhatsApp message anytime for help with student admissions, Class 1–10 syllabus, Hifz program, and hostel arrangements.
              </p>
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={SCHOOL_INFO.contact.phoneTel}
                  className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xs bg-[#F8F4E1] hover:bg-[#E5E1DA] text-[#1B4332] text-xs font-bold uppercase tracking-wider text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0323 4720208</span>
                </a>
                <a
                  href={SCHOOL_INFO.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] py-2.5 px-3 rounded-xs bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold uppercase tracking-wider text-center transition flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Message</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xs p-6 sm:p-8 border border-[#E5E1DA] shadow-xs">
              <div className="space-y-1 mb-6">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#1B4332]">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Send An Inquiry
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0D261B]">
                  Inquire Directly with Administration
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Fill in your details below and our team will provide complete admission, hostel, and syllabus information.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#F8F4E1] rounded-xs border border-[#DCD7C9] space-y-4">
                  <div className="w-12 h-12 bg-[#1B4332] text-[#F8F4E1] rounded-xs flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#0D261B]">Message Sent Successfully</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for your interest in <strong>Irfania Model Higher Secondary School</strong>. We have logged your inquiry and will connect with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#1B4332] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#0D261B] transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Parent / Guardian Name"
                        className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-[#FDFBF7] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300 0000000"
                        className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-[#FDFBF7] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-[#FDFBF7] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Inquiry Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-[#FDFBF7] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800"
                      >
                        <option value="General School Admission Inquiry">School Admissions (Classes 1–10)</option>
                        <option value="Optional Hifz-ul-Quran Program">Optional Hifz-ul-Quran (Class 6+)</option>
                        <option value="Hostel Accommodation & Meals">Hostel Facility &amp; Residence</option>
                        <option value="Campus Visit Appointment">Campus Visit / Appointment</option>
                        <option value="General Information">General Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Student Academic Background
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share which class you are inquiring about, student age, or any specific questions regarding our school..."
                      className="w-full px-3.5 py-2.5 rounded-xs border border-[#DCD7C9] bg-[#FDFBF7] text-sm focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] text-slate-800 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-form-submit-btn"
                      className="w-full py-3.5 px-6 rounded-xs bg-[#1B4332] hover:bg-[#0D261B] text-[#FDFBF7] font-bold text-xs uppercase tracking-widest shadow-xs transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to School</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2 font-serif italic">
                      Your inquiry is sent directly to Irfania Model Higher Secondary School administration.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
