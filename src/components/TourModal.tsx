import React, { useState } from 'react';
import { TourPackage } from '@/src/data/toursData';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { buildTourInquiryMessage } from '@/src/utils/whatsappMessages';
import { X, Clock, Check, Calendar, Users, MessageSquare, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface TourModalProps {
  tour: TourPackage | null;
  onClose: () => void;
}

export const TourModal: React.FC<TourModalProps> = ({ tour, onClose }) => {
  if (!tour) return null;

  const [name, setName] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [specialRequests, setSpecialRequests] = useState('');
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildTourInquiryMessage({
      tourTitle: tour.title,
      duration: tour.duration,
      name: name.trim() || undefined,
      travelDates: travelDates.trim() || undefined,
      travelers: travelers || undefined,
      specialRequests: specialRequests.trim() || undefined,
    });
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-white text-slate-700 rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-900">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-[#E9DFC9] mb-1.5 font-medium">
              <Clock className="w-4 h-4" />
              <span>{tour.duration}</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{tour.category.replace('-', ' ')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white">
              {tour.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
              {tour.tagline}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2 font-display">
              Overview
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {tour.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 font-display">
              Tour Highlights
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {tour.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#164D35] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Illustrative Day-by-Day Itinerary */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-display">
                Illustrative Itinerary
              </h3>
              <span className="text-xs text-slate-500 italic">
                (Fully customizable upon request)
              </span>
            </div>

            <div className="space-y-2.5">
              {tour.itinerary.map((item) => (
                <div
                  key={item.day}
                  className="border border-slate-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleDay(item.day)}
                    className="w-full text-left p-3.5 bg-slate-50/70 hover:bg-slate-100/70 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#164D35] text-white text-xs font-bold flex items-center justify-center">
                        D{item.day}
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        Day {item.day}: {item.title}
                      </span>
                    </div>
                    {expandedDay === item.day ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>

                  {expandedDay === item.day && (
                    <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
                What’s Included:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {tour.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Excluded:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {tour.excludes.map((exc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-400">✕</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing Disclaimer */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold">Pricing Note:</span> {tour.pricingNote} We offer transparent quotes with no hidden fees once your party size and travel dates are confirmed.
            </p>
          </div>

          {/* Form to Prepare WhatsApp Inquiry */}
          <div className="p-6 rounded-2xl bg-white border-2 border-[#164D35]/20 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <MessageSquare className="w-5 h-5 text-[#164D35]" />
              <h3 className="text-base font-bold text-slate-900 font-display">
                Inquire or Customize on WhatsApp
              </h3>
            </div>
            
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Travel Dates / Month
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={travelDates}
                      onChange={(e) => setTravelDates(e.target.value)}
                      placeholder="e.g. Oct 15 - 22, 2026"
                      className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                    />
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                      className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                    />
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Requests or Pickup Point
                  </label>
                  <input
                    type="text"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Airport pickup, vegetarian food"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#164D35] hover:bg-[#113c29] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
                <span>Send {tour.title} Inquiry on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};
