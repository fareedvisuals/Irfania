import { useState, useEffect, useCallback } from 'react';

const STORAGE_PREFIX = 'irfania_custom_img_';
const FOUNDER_LEGACY_KEY = 'irfania_founder_photo_url';

/**
 * Compresses an image file client-side to fit comfortably in localStorage
 */
export async function compressImageFile(file: File, maxDim = 1200, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(readerEvent.target?.result as string);
          return;
        }

        // Clean white background for transparent PNGs converted to JPEG
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        const mime = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
        const dataUrl = canvas.toDataURL(mime, quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Failed to load image for compression'));
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read image file'));
    reader.readAsDataURL(file);
  });
}

/**
 * Hook to manage any customizable image across the application
 */
export function useCustomImage(key: string, defaultSrc: string) {
  const storageKey = key === 'founder' ? FOUNDER_LEGACY_KEY : `${STORAGE_PREFIX}${key}`;

  const getStored = useCallback((): string => {
    if (typeof window === 'undefined') return defaultSrc;
    try {
      const val = localStorage.getItem(storageKey);
      if (val && (val.startsWith('data:image/') || val.startsWith('http') || val.startsWith('/'))) {
        return val;
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    }
    return defaultSrc;
  }, [storageKey, defaultSrc]);

  const [src, setSrc] = useState<string>(getStored);
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return Boolean(localStorage.getItem(storageKey));
  });

  useEffect(() => {
    setSrc(getStored());
    setIsCustom(Boolean(localStorage.getItem(storageKey)));

    const handleUpdate = (e: Event) => {
      const ce = e as CustomEvent<{ key: string; src: string }>;
      if (ce.detail && ce.detail.key === key) {
        setSrc(ce.detail.src || defaultSrc);
        setIsCustom(Boolean(localStorage.getItem(storageKey)));
      }
    };

    window.addEventListener('irfania_image_updated', handleUpdate);
    if (key === 'founder') {
      window.addEventListener('irfania_founder_photo_changed', () => {
        setSrc(getStored());
        setIsCustom(Boolean(localStorage.getItem(storageKey)));
      });
    }

    return () => {
      window.removeEventListener('irfania_image_updated', handleUpdate);
    };
  }, [key, defaultSrc, storageKey, getStored]);

  const replaceImage = async (file: File): Promise<boolean> => {
    try {
      const dataUrl = await compressImageFile(file);
      localStorage.setItem(storageKey, dataUrl);
      setSrc(dataUrl);
      setIsCustom(true);

      window.dispatchEvent(
        new CustomEvent('irfania_image_updated', {
          detail: { key, src: dataUrl },
        })
      );

      if (key === 'founder') {
        window.dispatchEvent(
          new CustomEvent('irfania_founder_photo_changed', { detail: dataUrl })
        );
      }

      return true;
    } catch (err) {
      console.error(`Failed to replace image [${key}]:`, err);
      return false;
    }
  };

  const resetImage = () => {
    try {
      localStorage.removeItem(storageKey);
      setSrc(defaultSrc);
      setIsCustom(false);

      window.dispatchEvent(
        new CustomEvent('irfania_image_updated', {
          detail: { key, src: defaultSrc },
        })
      );

      if (key === 'founder') {
        window.dispatchEvent(
          new CustomEvent('irfania_founder_photo_changed', { detail: defaultSrc })
        );
      }
    } catch (err) {
      console.error(`Failed to reset image [${key}]:`, err);
    }
  };

  return { src, isCustom, replaceImage, resetImage };
}
