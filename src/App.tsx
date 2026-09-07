import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SchoolShowcaseSection } from './components/SchoolShowcaseSection';
import { AboutSection } from './components/AboutSection';
import { AcademicsSection } from './components/AcademicsSection';
import { HifzSection } from './components/HifzSection';
import { HostelSection } from './components/HostelSection';
import { StudentLifeSection } from './components/StudentLifeSection';
import { FacultySection } from './components/FacultySection';
import { FounderSection } from './components/FounderSection';
import { ManagersSection } from './components/ManagersSection';
import { GallerySection } from './components/GallerySection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { FloatingHelpContact } from './components/FloatingHelpContact';
import { AdmissionModal } from './components/AdmissionModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<{
    hostel?: boolean;
    hifz?: boolean;
    targetClass?: string;
  }>({});

  const handleOpenAdmission = (options?: {
    hostel?: boolean;
    hifz?: boolean;
    targetClass?: string;
  }) => {
    setModalOptions(options || {});
    setIsModalOpen(true);
  };

  const handleCloseAdmission = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1C1E] font-sans antialiased selection:bg-[#1B4332] selection:text-[#FDFBF7]">
      {/* Navigation */}
      <Navbar onOpenAdmission={handleOpenAdmission} />

      {/* Main Sections */}
      <main>
        {/* 1. Home / Hero */}
        <Hero onOpenAdmission={handleOpenAdmission} />

        {/* Our Respected Founder (Founding Patron & Visionary) */}
        <FounderSection />

        {/* School Campus Showcase (3 Photo Slots) */}
        <SchoolShowcaseSection />

        {/* Names of School Managers & Administration (Principal, Vice Principal, Hostel Manager) */}
        <ManagersSection />

        {/* About Us */}
        <AboutSection />

        {/* Academic Programs & Classes 1–10 */}
        <AcademicsSection onOpenAdmission={handleOpenAdmission} />

        {/* Hifz-ul-Quran (Optional from Class 6+) */}
        <HifzSection onOpenAdmission={handleOpenAdmission} />

        {/* Hostel Facility (3 Meals Daily) */}
        <HostelSection onOpenAdmission={handleOpenAdmission} />

        {/* Student Life, Games & Trips */}
        <StudentLifeSection />

        {/* Educated & Dedicated Teachers / Faculty */}
        <FacultySection />

        {/* Campus & Activities Photo Gallery with Lightbox */}
        <GallerySection />

        {/* 10. Admissions Information & CTA */}
        <AdmissionsSection onOpenAdmission={handleOpenAdmission} />

        {/* 11. Contact & Location Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Floating Call & Message Help Widget */}
      <FloatingHelpContact />

      {/* Interactive Admission / Hostel Inquiry Modal */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={handleCloseAdmission}
        defaultHostel={modalOptions.hostel}
        defaultHifz={modalOptions.hifz}
        defaultClass={modalOptions.targetClass}
      />
    </div>
  );
}
