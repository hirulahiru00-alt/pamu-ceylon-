import React, { useState } from 'react';
import { NavPage } from '@/src/components/Navbar';
import { TOUR_PACKAGES, TourPackage } from '@/src/data/toursData';
import { DESTINATIONS, Destination } from '@/src/data/destinationsData';
import { GALLERY_ITEMS } from '@/src/data/galleryData';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { buildGeneralInquiryMessage, buildTourInquiryMessage } from '@/src/utils/whatsappMessages';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Users, 
  Clock, 
  Car, 
  Plane, 
  Hotel, 
  ShieldCheck, 
  Smile, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import heroSigiriyaImg from '@/src/assets/images/hero_sri_lanka_sigiriya_1791891442755.jpg';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onSelectTour: (tour: TourPackage) => void;
  onSelectDestination: (dest: Destination) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectTour,
  onSelectDestination
}) => {
  // Quick trip inquiry state
  const [quickDest, setQuickDest] = useState('Cultural Triangle & Ella');
  const [quickDays, setQuickDays] = useState('7 Days');
  const [quickTravelers, setQuickTravelers] = useState(2);
  const [quickName, setQuickName] = useState('');

  const handleQuickTripSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildGeneralInquiryMessage({
      name: quickName.trim() || undefined,
      travelDates: `${quickDays} trip planned`,
      travelers: quickTravelers,
      message: `I would like to explore a tour covering: ${quickDest}. Please share suggested routes and vehicle options.`
    });
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleHeroWhatsAppClick = () => {
    const msg = buildGeneralInquiryMessage({
      message: 'Hello Pamu Ceylon Tour! I saw your website and would like to plan a trip to Sri Lanka.'
    });
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const featuredTours = TOUR_PACKAGES.slice(0, 3);
  const popularDestinations = DESTINATIONS.slice(0, 4);
  const previewGallery = GALLERY_ITEMS.slice(0, 4);

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0">
          <img
            src={heroSigiriyaImg}
            alt="Sigiriya Lion Rock sunrise in Sri Lanka"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Measured multi-stop gradient scrim to guarantee WCAG AA text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E9DFC9] text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover Sri Lanka, Naturally</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none text-balance">
            Discover the Beauty of Sri Lanka
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
            Explore breathtaking landscapes, rich culture, beautiful beaches, and unforgettable journeys with Pamu Ceylon Tour.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('tours')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#4F8A56] hover:bg-[#3d6d43] text-white text-sm font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#E9DFC9]" />
              <span>Explore Tour Packages</span>
            </button>
            <button
              onClick={handleHeroWhatsAppClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/95 hover:bg-white text-[#164D35] text-sm font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#164D35]" />
              <span>Plan Your Trip on WhatsApp</span>
            </button>
          </div>

          {/* Trust Attributes (Honest values, no fake metrics) */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E9DFC9] shrink-0" />
              <span>100% Private Tours</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E9DFC9] shrink-0" />
              <span>Licensed Chauffeurs</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E9DFC9] shrink-0" />
              <span>Flexible Pacing</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E9DFC9] shrink-0" />
              <span>Direct WhatsApp Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK TRIP INQUIRY GENERATOR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28 relative z-20">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-stone-100">
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-display text-slate-900">
                Customize Your Sri Lanka Journey
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Select your preferred route and travel party size for an instant WhatsApp inquiry.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#164D35] font-semibold">
              <Clock className="w-4 h-4 text-[#4F8A56]" />
              <span>Fast Response Guaranteed</span>
            </div>
          </div>

          <form onSubmit={handleQuickTripSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Route / Highlights
              </label>
              <div className="relative">
                <select
                  value={quickDest}
                  onChange={(e) => setQuickDest(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#164D35] text-slate-800"
                >
                  <option value="Cultural Triangle & Ella">Sigiriya, Kandy & Ella</option>
                  <option value="Complete Island Highlights">Full 7-Day Island Circuit</option>
                  <option value="Southern Beaches & Galle">Southern Beaches & Galle Fort</option>
                  <option value="Wildlife Safari & Tea Hills">Yala Safari & Hill Country</option>
                  <option value="Custom Bespoke Route">Customized Route (Tell us in chat)</option>
                </select>
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Estimated Duration
              </label>
              <div className="relative">
                <select
                  value={quickDays}
                  onChange={(e) => setQuickDays(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#164D35] text-slate-800"
                >
                  <option value="1 Day Excursion">1 Day Excursion</option>
                  <option value="2-3 Days">2 – 3 Days</option>
                  <option value="5-7 Days">5 – 7 Days</option>
                  <option value="10-14 Days">10 – 14 Days</option>
                  <option value="Flexible Duration">Flexible / Open</option>
                </select>
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Travelers
              </label>
              <div className="relative">
                <input
                  type="number"
                  min={1}
                  max={30}
                  value={quickTravelers}
                  onChange={(e) => setQuickTravelers(parseInt(e.target.value) || 1)}
                  className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-[#164D35] text-slate-800"
                />
                <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
                <span>Plan Trip on WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. OUR CORE SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-1">
            Tailor-Made Ceylon Travel
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 tracking-tight">
            Comprehensive Tourism Services
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            From single-day airport pickups to multi-day luxury island circuits, we provide comfortable private transport and itinerary planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1: Private Tours */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#164D35]/40 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center mb-4 group-hover:bg-[#164D35] group-hover:text-white transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                Private Tour Packages
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Tailor-made itineraries crafted around your pace. Enjoy ancient monuments, tea hills, and safari parks with private transport.
              </p>
            </div>
            <button
              onClick={() => onNavigate('tours')}
              className="text-xs font-semibold text-[#164D35] flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 2: Airport Pickup */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#164D35]/40 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center mb-4 group-hover:bg-[#164D35] group-hover:text-white transition-colors">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                Airport Pickup & Transfers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Reliable arrivals pickup from Bandaranaike (BIA / Colombo) or Mattala (HRI). Meet-and-greet with name board directly at terminal.
              </p>
            </div>
            <button
              onClick={() => onNavigate('airport')}
              className="text-xs font-semibold text-[#164D35] flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              <span>Book Airport Transfer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 3: Vehicle Hire */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#164D35]/40 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center mb-4 group-hover:bg-[#164D35] group-hover:text-white transition-colors">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                Chauffeur Vehicle Hire
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Air-conditioned sedans, SUVs, high-roof passenger vans, and coaches with courteous, English-speaking tourist drivers.
              </p>
            </div>
            <button
              onClick={() => onNavigate('vehicles')}
              className="text-xs font-semibold text-[#164D35] flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              <span>View Fleet Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 4: Hotel Arrangements */}
          <div className="p-6 rounded-2xl bg-white border border-stone-200 hover:border-[#164D35]/40 hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center mb-4 group-hover:bg-[#164D35] group-hover:text-white transition-colors">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 font-display mb-1.5">
                Hotel Booking Assistance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Assistance with booking authentic heritage bungalows, boutique beachfront villas, tea estate chalets, and safari lodges.
              </p>
            </div>
            <button
              onClick={() => onNavigate('hotels')}
              className="text-xs font-semibold text-[#164D35] flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              <span>Hotel Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. POPULAR DESTINATIONS TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-1">
              Top Sights
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Popular Sri Lankan Destinations
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              From the mist-crowned heights of Ella to the historic ramparts of Galle.
            </p>
          </div>
          <button
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#164D35] hover:underline cursor-pointer"
          >
            <span>View All 10 Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularDestinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:shadow-lg transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#E9DFC9] font-medium block">
                    {dest.region}
                  </span>
                  <h3 className="text-lg font-bold font-display text-white">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                  {dest.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#164D35] font-semibold pt-2 border-t border-stone-100">
                  <span>Explore attractions</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FEATURED TOUR PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-1">
              Handcrafted Itineraries
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Featured Tour Packages
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Sample tour itineraries designed for optimal pacing and scenic beauty. Fully customizable on WhatsApp.
            </p>
          </div>
          <button
            onClick={() => onNavigate('tours')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#164D35] hover:underline cursor-pointer"
          >
            <span>Explore All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
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
                  <h3 className="text-lg font-bold font-display text-white">
                    {tour.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {tour.description}
                  </p>

                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Tour Highlights
                    </span>
                    {tour.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8A56] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectTour(tour)}
                    className="flex-1 py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-slate-800 text-xs font-semibold rounded-xl text-center transition-colors cursor-pointer"
                  >
                    View Details
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
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY TRAVEL WITH US (Honest, authentic principles) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#164D35] text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9DFC9] block mb-2">
              Our Core Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">
              Why Travel With Pamu Ceylon Tour?
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-8">
              We believe a holiday in Sri Lanka should feel like travelling with a trusted local friend. We provide genuine local care, relaxed unhurried pacing, and transparent communication.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#E9DFC9] border border-white/10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Certified & Courteous Chauffeurs
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Experienced English-speaking tourist drivers with deep knowledge of Sri Lankan roads, wildlife corridors, and local culture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#E9DFC9] border border-white/10">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Bespoke Custom Routes
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    No rigid tour-bus schedules. You set your departure times, and we freely stop for scenic tea viewpoints, king coconuts, or photography.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#E9DFC9] border border-white/10">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Modern Air-Conditioned Fleet
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Clean, non-smoking, well-maintained sedans, vans, and SUVs equipped for both smooth expressway driving and mountain curves.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#E9DFC9] border border-white/10">
                  <Smile className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    Direct WhatsApp Transparency
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Chat directly with us before and throughout your journey. No middle-agent markups or surprise road expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TRAVEL GALLERY TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-1">
              Visual Moments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Glimpses of Sri Lanka
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Tea hills, sacred fortresses, coastal sanctuaries, and exotic wildlife.
            </p>
          </div>
          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#164D35] hover:underline cursor-pointer"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('gallery')}
              className="relative h-60 rounded-2xl overflow-hidden group cursor-pointer bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] text-[#E9DFC9] font-medium block">
                  {item.location}
                </span>
                <p className="text-xs font-bold font-display text-white truncate">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL HIGH-CONVERSION WHATSAPP CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border-2 border-[#164D35]/20 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#164D35] text-[#E9DFC9] flex items-center justify-center mx-auto mb-4 shadow-sm">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
            Ready to Plan Your Sri Lanka Adventure?
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Send us a message on WhatsApp with your arrival dates, party size, and preferred destinations. We’ll prepare a free custom itinerary and quote for you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleHeroWhatsAppClick}
              className="px-6 py-3.5 bg-[#164D35] hover:bg-[#113c29] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Start WhatsApp Conversation</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl border border-slate-300 transition-colors cursor-pointer"
            >
              <span>View All Contact Options</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
