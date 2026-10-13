import React, { useState } from 'react';
import { DESTINATIONS, Destination } from '@/src/data/destinationsData';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { buildDestinationInquiryMessage } from '@/src/utils/whatsappMessages';
import { MapPin, Calendar, Clock, Check, MessageSquare, Filter, ArrowRight } from 'lucide-react';

interface DestinationsPageProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onSelectDestination }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = [
    'All',
    'Cultural Triangle',
    'Central Highlands',
    'Southern Coast',
    'Wildlife & Nature'
  ];

  const filteredDestinations = selectedRegion === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === selectedRegion);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Explore Sri Lanka
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Destinations Across the Island
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          From ancient royal citadels in the dry plains to tea-carpeted mountains and pristine southern beaches, Sri Lanka packs extraordinary diversity into a compact paradise. Explore our key destination guides below.
        </p>
      </div>

      {/* Regional Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
        {regions.map((reg) => (
          <button
            key={reg}
            onClick={() => setSelectedRegion(reg)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedRegion === reg
                ? 'bg-[#164D35] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#164D35] hover:text-[#164D35]'
            }`}
          >
            {reg}
          </button>
        ))}
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((dest) => (
          <div
            key={dest.id}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col group"
          >
            {/* Image Banner */}
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#164D35]/90 backdrop-blur-xs text-[#E9DFC9] px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{dest.region}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h2 className="text-xl font-bold font-display text-white">
                  {dest.name}
                </h2>
                <p className="text-xs text-[#E9DFC9] font-medium mt-0.5">
                  {dest.subtitle}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {dest.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Attractions
                  </span>
                  {dest.attractions.slice(0, 3).map((attr, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#4F8A56] shrink-0 mt-0.5" />
                      <span>{attr}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-stone-50 p-3 rounded-xl border border-stone-100">
                  <div>
                    <span className="font-semibold block text-slate-800">Best Season:</span>
                    <span>{dest.bestTimeToVisit}</span>
                  </div>
                  <div>
                    <span className="font-semibold block text-slate-800">Ideal Stay:</span>
                    <span>{dest.idealStay}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectDestination(dest)}
                  className="flex-1 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold rounded-xl text-center transition-colors cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => {
                    const url = generateWhatsAppUrl(buildDestinationInquiryMessage(dest.name));
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="flex-1 py-2.5 px-3 bg-[#164D35] hover:bg-[#113c29] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#E9DFC9]" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
