import React, { useState } from 'react';
import { useCustomImage } from '../utils/imageStore';

interface SchoolLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'full';
  showText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  size = 'md',
  variant = 'full',
  showText = true,
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const logoState = useCustomImage('school-logo', '/school_logo.png');

  const sizeMap = {
    sm: { icon: 'w-9 h-9', text: 'text-sm', sub: 'text-[10px]' },
    md: { icon: 'w-12 h-12', text: 'text-base', sub: 'text-xs' },
    lg: { icon: 'w-16 h-16', text: 'text-lg', sub: 'text-xs' },
    xl: { icon: 'w-24 h-24', text: 'text-2xl', sub: 'text-sm' },
  };

  const isDark = variant === 'dark';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Official School Seal / Insignia */}
      <div
        className={`${sizeMap[size].icon} relative flex-shrink-0 rounded-full flex items-center justify-center p-0.5 bg-white shadow-xs transition-transform duration-300 hover:scale-105 border border-[#1A2863]/30 overflow-hidden`}
      >
        {!imgFailed ? (
          <img
            src={logoState.src}
            alt="Irfania Model Higher Secondary School Official Logo"
            className="w-full h-full object-contain rounded-full"
            onError={() => setImgFailed(true)}
            referrerPolicy="no-referrer"
          />
        ) : null}

        {imgFailed && (
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <circle cx="100" cy="100" r="98" fill="#FFFFFF" />

            {/* Outer Navy Ring */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="#1A2863" strokeWidth="6" />
            <circle cx="100" cy="100" r="88" fill="none" stroke="#1A2863" strokeWidth="1.5" />

            {/* 5-Pointed Star at Apex */}
            <polygon
              points="100,5 106,24 125,24 110,36 116,55 100,43 84,55 90,36 75,24 94,24"
              fill="#1A2863"
            />

            {/* Inner Globe Background */}
            <circle cx="100" cy="104" r="74" fill="#FFFFFF" stroke="#1A2863" strokeWidth="2" />

            {/* Continent Silhouettes (Eurasia & Americas & Africa) */}
            <path
              d="M 85 45 C 92 42, 105 40, 115 48 C 122 55, 135 52, 142 62 C 148 72, 155 78, 150 90 L 140 92 C 130 85, 120 75, 110 70 C 105 80, 95 85, 88 88 Z"
              fill="#1A2863"
            />
            <path
              d="M 60 55 C 68 50, 75 60, 72 75 C 70 85, 62 95, 58 100 L 52 95 C 50 85, 52 70, 60 55 Z"
              fill="#1A2863"
            />
            <path
              d="M 92 110 C 105 108, 120 115, 125 125 C 130 135, 125 150, 115 160 C 105 168, 98 160, 95 145 Z"
              fill="#1A2863"
            />

            {/* Globe Meridians (Longitude Lines) */}
            <ellipse cx="100" cy="104" rx="22" ry="74" fill="none" stroke="#1A2863" strokeWidth="1.2" />
            <ellipse cx="100" cy="104" rx="48" ry="74" fill="none" stroke="#1A2863" strokeWidth="1.2" />
            <ellipse cx="100" cy="104" rx="66" ry="74" fill="none" stroke="#1A2863" strokeWidth="1.2" />
            <line x1="100" y1="30" x2="100" y2="178" stroke="#1A2863" strokeWidth="1.2" />

            {/* Globe Parallels (Latitude Curves) */}
            <path d="M 38 75 Q 100 90 162 75" fill="none" stroke="#1A2863" strokeWidth="1.2" />
            <path d="M 32 135 Q 100 155 168 135" fill="none" stroke="#1A2863" strokeWidth="1.2" />
            <path d="M 45 155 Q 100 172 155 155" fill="none" stroke="#1A2863" strokeWidth="1.2" />

            {/* Base Radial Cradle at Bottom of Globe */}
            <ellipse cx="100" cy="172" rx="24" ry="8" fill="#FFFFFF" stroke="#1A2863" strokeWidth="1.5" />
            <path d="M 80 172 L 100 164 L 120 172" stroke="#1A2863" strokeWidth="1" />

            {/* Central White Curved Banner across Globe */}
            <path
              d="M 24 95 Q 100 85 176 95 L 176 118 Q 100 108 24 118 Z"
              fill="#FFFFFF"
              stroke="#1A2863"
              strokeWidth="2.5"
            />

            {/* Arabic Quranic Prayer inside the Banner: رَبِّ زِدْنِي عِلْمًا */}
            <text
              x="100"
              y="110"
              textAnchor="middle"
              fill="#1A2863"
              fontSize="16"
              fontFamily="'Traditional Arabic', 'Amiri', 'Scheherazade New', 'Noto Naskh Arabic', serif"
              fontWeight="bold"
            >
              رَبِّ زِدْنِي عِلْمًا
            </text>

            {/* Lower Navy Arc for School Name */}
            <path
              d="M 28 140 A 95 95 0 0 0 172 140 A 78 78 0 0 1 28 140 Z"
              fill="#1A2863"
            />

            {/* Urdu Title along the Lower Arc: عرفانیہ ماڈل ہائیر سیکنڈری سکول */}
            <path
              id="urduArcPath"
              d="M 36 150 A 84 84 0 0 0 164 150"
              fill="none"
            />
            <text fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="'Jameel Noori Nastaleeq', 'Noto Nastaliq Urdu', 'Urdu Typesetting', serif">
              <textPath href="#urduArcPath" startOffset="50%" textAnchor="middle">
                عرفانیہ ماڈل ہائیر سیکنڈری سکول
              </textPath>
            </text>
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <span
            className={`font-serif font-bold tracking-tight ${sizeMap[size].text} ${
              isDark ? 'text-white' : 'text-[#0D261B]'
            }`}
          >
            IRFANIA MODEL
          </span>
          <span
            className={`text-[10px] uppercase tracking-widest font-semibold ${
              isDark ? 'text-emerald-300' : 'text-[#1B4332]'
            }`}
          >
            Higher Secondary School
          </span>
          <span className={`text-[9px] uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Classes 1–10 • Hifz • Hostel
          </span>
        </div>
      )}
    </div>
  );
};
