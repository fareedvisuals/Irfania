import React from 'react';

interface ReplaceImageButtonProps {
  onImageSelected?: (file: File) => Promise<boolean> | boolean;
  onReset?: () => void;
  isCustom?: boolean;
  label?: string;
  variant?: 'overlay' | 'inline' | 'compact';
  className?: string;
  dark?: boolean;
  position?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left' | 'center';
}

/**
 * All replace and upload options have been disabled per user request.
 */
export const ReplaceImageButton: React.FC<ReplaceImageButtonProps> = () => {
  return null;
};
