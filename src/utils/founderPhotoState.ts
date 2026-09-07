import { useState, useEffect } from 'react';
import { founderImg } from '../data/schoolData';

const STORAGE_KEY = 'irfania_founder_photo_url';

export function getStoredFounderPhoto(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && saved.startsWith('data:image/')) {
      return saved;
    }
  }
  return founderImg;
}

export async function saveFounderPhoto(dataUrl: string): Promise<boolean> {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, dataUrl);
      window.dispatchEvent(new CustomEvent('irfania_founder_photo_changed', { detail: dataUrl }));
    }

    // Also persist to server disk via Vite middleware endpoint
    try {
      await fetch('/api/upload-founder-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dataUrl }),
      });
    } catch {
      // Offline or preview mode fallback
    }

    return true;
  } catch (err) {
    console.error('Failed to save founder photo:', err);
    return false;
  }
}

export function resetFounderPhoto(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('irfania_founder_photo_changed', { detail: founderImg }));
  }
}

export function useFounderPhoto() {
  const [photo, setPhoto] = useState<string>(getStoredFounderPhoto);
  const [hasCustomPhoto, setHasCustomPhoto] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      return Boolean(saved && saved.startsWith('data:image/'));
    }
    return false;
  });

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      const newPhoto = customEvent.detail || getStoredFounderPhoto();
      setPhoto(newPhoto);
      setHasCustomPhoto(Boolean(localStorage.getItem(STORAGE_KEY)));
    };

    window.addEventListener('irfania_founder_photo_changed', handleUpdate);
    return () => window.removeEventListener('irfania_founder_photo_changed', handleUpdate);
  }, []);

  return { photo, setPhoto: saveFounderPhoto, resetPhoto: resetFounderPhoto, hasCustomPhoto };
}
