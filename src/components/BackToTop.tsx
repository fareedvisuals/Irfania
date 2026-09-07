import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xs bg-[#1B4332] hover:bg-[#0D261B] text-[#FDFBF7] shadow-md transition-all duration-300 hover:scale-105 border border-[#3A7558] focus:outline-none focus:ring-1 focus:ring-[#1B4332]"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
