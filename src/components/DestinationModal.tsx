import React, { useState } from 'react';
import { Destination } from '@/src/data/destinationsData';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { buildDestinationInquiryMessage } from '@/src/utils/whatsappMessages';
import { X, MapPin, Calendar, Clock, Check, MessageSquare } from 'lucide-react';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({ destination, onClose }) => {
  if (!destination) return null;

  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildDestinationInquiryMessage(destination.name, notes.trim() || undefined);
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative text-left my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-white text-slate-700 rounded-full flex items-center justify-center shadow-md transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative h-60 sm:h-64 w-full overflow-hidden rounded-t-3xl bg-slate-900">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-[#E9DFC9] mb-1 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{destination.region}</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">{destination.name}</h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-0.5">{destination.subtitle}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-display">
              About This Destination
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4 text-[#164D35] shrink-0" />
              <span><strong>Best Season:</strong> {destination.bestTimeToVisit}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-[#164D35] shrink-0" />
              <span><strong>Recommended Stay:</strong> {destination.idealStay}</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-display">
              Must-See Attractions & Experiences
            </h3>
            <ul className="space-y-2">
              {destination.attractions.map((attraction, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#164D35] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{attraction}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-2 font-display">
              Plan Your Visit to {destination.name}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us what you'd like to see (e.g. want to do sunrise hike, looking for private car from Colombo)..."
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
                <span>Plan {destination.name} Tour on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
