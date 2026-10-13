import React, { useState } from 'react';
import { TOUR_PACKAGES, TourPackage } from '@/src/data/toursData';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { buildTourInquiryMessage, buildGeneralInquiryMessage } from '@/src/utils/whatsappMessages';
import { Clock, CheckCircle2, MessageSquare, Info, Sparkles, Filter, Calendar, Users, MapPin } from 'lucide-react';

interface ToursPageProps {
  onSelectTour: (tour: TourPackage) => void;
}

export const ToursPage: React.FC<ToursPageProps> = ({ onSelectTour }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Custom package builder state
  const [customDestinationList, setCustomDestinationList] = useState('');
  const [customDays, setCustomDays] = useState('5 Days');
  const [customGuests, setCustomGuests] = useState(2);
  const [customHotelPref, setCustomHotelPref] = useState('Boutique & 4-Star');
  const [customNotes, setCustomNotes] = useState('');

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'cultural', label: 'Cultural & Heritage' },
    { id: 'hill-country', label: 'Hill Country & Tea' },
    { id: 'coastal', label: 'Coast & Galle Fort' },
    { id: 'wildlife', label: 'Wildlife & Safari' },
    { id: 'day-tours', label: '1-Day Excursions' },
    { id: 'multi-day', label: 'Multi-Day Highlights' },
  ];

  const filteredTours = selectedCategory === 'all'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((t) => t.category === selectedCategory);

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildGeneralInquiryMessage({
      travelDates: `${customDays} Custom Tour`,
      travelers: customGuests,
      message: `I would like to customize a Sri Lanka tour package!\n• Desired Destinations: ${customDestinationList || 'Sigiriya, Kandy, Ella, Galle'}\n• Hotel Category Preference: ${customHotelPref}\n• Notes / Specific Wishes: ${customNotes || 'None'}`
    });
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Private Ceylon Journeys
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Sri Lanka Tour Packages
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Explore our handcrafted itineraries. Every tour is operated as a private journey with a dedicated air-conditioned vehicle and an experienced licensed chauffeur. All packages can be tailored to match your schedule, arrival point, and preferences.
        </p>
      </div>

      {/* Honest Transparency Notice */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold">Illustrative Itineraries:</span> The tours below represent popular, field-tested travel concepts. Pricing and inclusions are confirmed individually based on your travel season, group size, and vehicle choice upon WhatsApp inquiry.
        </p>
      </div>

      {/* Category Filter Controls */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#164D35] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-[#164D35] hover:text-[#164D35]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tour Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col group"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#164D35]/90 backdrop-blur-xs text-[#E9DFC9] px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{tour.duration}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h2 className="text-lg font-bold font-display text-white">
                  {tour.title}
                </h2>
                <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                  {tour.tagline}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              <div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Key Highlights
                  </span>
                  {tour.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8A56] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Price Note */}
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Rate Guidance:</span> {tour.pricingNote}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectTour(tour)}
                  className="flex-1 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold rounded-xl text-center transition-colors cursor-pointer"
                >
                  View Details & Itinerary
                </button>
                <button
                  onClick={() => {
                    const msg = buildTourInquiryMessage({
                      tourTitle: tour.title,
                      duration: tour.duration,
                    });
                    const url = generateWhatsAppUrl(msg);
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="flex-1 py-2.5 px-3 bg-[#164D35] hover:bg-[#113c29] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#E9DFC9]" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Itinerary Builder Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm">
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4F8A56] mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Design Your Own Itinerary</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Need a Completely Custom Sri Lanka Tour?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Want to combine the hill country with surfing down south, or extend your safari stay? Fill in your preferences below, and we will formulate a personalized quote and day-by-day plan directly on WhatsApp.
          </p>
        </div>

        <form onSubmit={handleCustomSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Destinations / Places you wish to visit
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Sigiriya, Kandy, Nuwara Eliya, Galle"
                  value={customDestinationList}
                  onChange={(e) => setCustomDestinationList(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Trip Duration
              </label>
              <div className="relative">
                <select
                  value={customDays}
                  onChange={(e) => setCustomDays(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                >
                  <option value="1-3 Days">1 – 3 Days</option>
                  <option value="4-6 Days">4 – 6 Days</option>
                  <option value="7-9 Days">7 – 9 Days</option>
                  <option value="10-14 Days">10 – 14 Days</option>
                  <option value="15+ Days">15+ Days Grand Tour</option>
                </select>
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Number of Travelers
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={customGuests}
                  onChange={(e) => setCustomGuests(parseInt(e.target.value) || 1)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
                <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Hotel Preference
              </label>
              <select
                value={customHotelPref}
                onChange={(e) => setCustomHotelPref(e.target.value)}
                className="w-full px-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              >
                <option value="Boutique & 4-Star">Boutique Villas & 4-Star</option>
                <option value="Luxury 5-Star">Luxury 5-Star Resorts</option>
                <option value="Eco Lodges & Cabanas">Eco Lodges & Nature Chalets</option>
                <option value="Comfort Budget & Guesthouses">Comfort Budget & Guesthouses</option>
                <option value="Transport Only (I book my own hotels)">Transport Only (I arrange hotels)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Specific Requests or Travel Dates
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Arriving on Oct 10th at Colombo Airport, interested in whale watching and spice gardens..."
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Submit Custom Tour Inquiry via WhatsApp</span>
            </button>
          </div>
        </form>
      </section>

    </div>
  );
};
