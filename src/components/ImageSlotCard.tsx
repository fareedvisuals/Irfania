import React from 'react';

interface ImageSlotCardProps {
  slotNumber: number;
  totalSlots?: number;
  categoryName: string;
  title: string;
  description: string;
  imageSrc: string;
  isCustom?: boolean;
  onReplaceImage?: (file: File) => Promise<boolean> | boolean;
  onResetImage?: () => void;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide';
  theme?: 'light' | 'dark';
}

export const ImageSlotCard: React.FC<ImageSlotCardProps> = ({
  slotNumber,
  totalSlots = 3,
  categoryName,
  title,
  description,
  imageSrc,
  aspectRatio = 'video',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  const aspectClass = {
    video: 'h-60 sm:h-64',
    square: 'h-64',
    portrait: 'h-72 sm:h-80',
    wide: 'h-52 sm:h-56',
  }[aspectRatio];

  return (
    <div
      className={`rounded-xs overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
        isDark
          ? 'bg-[#153427] border-[#3A7558] hover:border-amber-400/80 shadow-md'
          : 'bg-white border-[#DCD7C9] hover:border-[#1B4332] shadow-xs'
      }`}
    >
      <div>
        {/* Top Image Container */}
        <div className={`relative ${aspectClass} w-full overflow-hidden bg-slate-900 border-b ${
          isDark ? 'border-[#3A7558]' : 'border-[#E5E1DA]'
        }`}>
          <img
            src={imageSrc}
            alt={`${categoryName} Slot ${slotNumber}: ${title}`}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Gradient for subtle text/badge readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

          {/* Slot Badge (Top Left) */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10 pointer-events-none">
            <span className="px-2.5 py-1 rounded-xs bg-[#0D261B]/90 text-amber-300 border border-[#3A7558] text-[10px] font-bold uppercase tracking-widest backdrop-blur-xs">
              {categoryName} • Slot {slotNumber} of {totalSlots}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h4
              className={`text-base font-serif font-bold ${
                isDark ? 'text-white' : 'text-[#0D261B]'
              }`}
            >
              {title}
            </h4>
          </div>

          <p
            className={`text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-[#F8F4E1]/80' : 'text-slate-600'
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
