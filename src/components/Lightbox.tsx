import React, { useEffect } from 'react';
import { GalleryItem } from '@/src/data/galleryData';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, items, onClose, onSelect }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIdx]);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % items.length;
        onSelect(items[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onSelect]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-50 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:flex items-center justify-center"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:flex items-center justify-center"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
      >
        <div className="relative overflow-hidden rounded-2xl bg-black max-h-[70vh] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mt-4 text-center text-white max-w-xl">
          <div className="flex items-center justify-center gap-2 text-xs text-[#E9DFC9] font-medium mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{item.location}</span>
            <span aria-hidden="true">·</span>
            <span>{item.category}</span>
          </div>
          <h3 className="text-lg font-bold font-display">{item.title}</h3>
          <p className="text-xs text-slate-300 mt-1">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
