import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '@/src/data/galleryData';
import { Lightbox } from '@/src/components/Lightbox';
import { MapPin, Filter, Eye } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Mountains & Tea',
    'Cultural Landmarks',
    'Beaches',
    'Wildlife & Safari',
    'Scenic Journeys',
  ];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Visual Journey
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Sri Lanka Travel Gallery
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Glimpse the breathtaking scenery waiting for you in Sri Lanka. From the dramatic mist of the central highlands and historic stone viaducts to turquoise coastal shores and wild leopards.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#164D35] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#164D35] hover:text-[#164D35]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col"
          >
            <div className="relative h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Hover Eye indicator */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Eye className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-[#E9DFC9] font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base font-bold font-display text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mt-0.5 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />

    </div>
  );
};
