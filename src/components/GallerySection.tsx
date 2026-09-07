import React, { useState, useEffect } from 'react';
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem } from '../types';
import { useCustomImage } from '../utils/imageStore';

interface GalleryCardItemProps {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}

const GalleryCardItem: React.FC<GalleryCardItemProps> = ({ item, onOpen }) => {
  const imageKey = item.id === 'gal-founder' ? 'founder' : `gallery-${item.id}`;
  const { src } = useCustomImage(imageKey, item.image);

  return (
    <div
      onClick={() => onOpen(item)}
      className="group relative rounded-xs overflow-hidden bg-[#FDFBF7] border border-[#E5E1DA] hover:border-[#1B4332] shadow-xs transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Image Frame */}
      <div className="relative h-56 w-full overflow-hidden bg-[#081811] border-b border-[#E5E1DA] flex items-center justify-center">
        <img
          src={src}
          alt={item.title}
          className={`w-full h-full ${
            item.id === 'gal-founder'
              ? 'object-contain'
              : 'object-cover group-hover:scale-103 transition-transform duration-500'
          }`}
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Category Badge */}
        <div className="absolute top-2.5 left-2.5 bg-[#0D261B]/90 text-amber-300 text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-xs border border-[#3A7558] pointer-events-none">
          {item.category}
        </div>

        {/* Hover Overlay with Zoom Icon */}
        <div className="absolute inset-0 bg-[#0D261B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="w-9 h-9 rounded-full bg-[#FDFBF7] text-[#1B4332] flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform">
            <ZoomIn className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="p-3.5 space-y-1 bg-white">
        <h4 className="text-xs font-serif font-bold text-[#0D261B] line-clamp-1 group-hover:text-[#1B4332] transition-colors">
          {item.title}
        </h4>
        <p className="text-[11px] text-slate-600 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

interface GalleryLightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose, onPrev, onNext }) => {
  const imageKey = item.id === 'gal-founder' ? 'founder' : `gallery-${item.id}`;
  const { src } = useCustomImage(imageKey, item.image);

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-xs bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-xs bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-xs bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Lightbox Content Container */}
      <div
        className="relative max-w-4xl max-h-[90vh] bg-[#0D261B] rounded-xs overflow-hidden border border-[#3A7558] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative max-h-[70vh] flex items-center justify-center bg-black/50 overflow-hidden">
          <img
            src={src}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-5 bg-[#0D261B] text-white space-y-2 border-t border-[#1B4332]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">
              {item.category}
            </span>
            <span className="text-xs text-[#F8F4E1]/70">
              Irfania Model Higher Secondary School
            </span>
          </div>
          <h3 className="text-lg font-serif font-bold text-white">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#F8F4E1]/80">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'School',
    'Classrooms',
    'Students',
    'Teachers',
    'Hifz',
    'Hostel',
    'Games',
    'Trips',
    'Events',
  ];

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, filteredItems]);

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 bg-white border-b border-[#E5E1DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F4E1] text-[#1B4332] border border-[#DCD7C9] text-[10px] font-bold uppercase tracking-widest rounded-full">
            Visual Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0D261B] tracking-tight">
            Campus &amp; Student Life Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Moments from our school campus, classroom learning, dedicated teachers, student hostel life, games, and educational trips.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xs text-xs font-serif font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#1B4332] text-[#FDFBF7] border border-[#1B4332] shadow-xs'
                  : 'bg-[#FDFBF7] text-slate-700 hover:bg-[#F8F4E1] border border-[#E5E1DA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredItems.map((item) => (
            <GalleryCardItem
              key={item.id}
              item={item}
              onOpen={(clickedItem) => setSelectedItem(clickedItem)}
            />
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
