import React, { useState } from 'react';
import { HotelBookingFormData, buildHotelBookingMessage } from '@/src/utils/whatsappMessages';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { Hotel, Calendar, Users, Home, DollarSign, MessageSquare, Info, CheckCircle2, ShieldCheck } from 'lucide-react';

export const HotelBookingPage: React.FC = () => {
  const [formData, setFormData] = useState<HotelBookingFormData>({
    destination: 'Ella & Nuwara Eliya',
    checkInDate: '',
    checkOutDate: '',
    guestsCount: 2,
    roomsCount: 1,
    accommodationType: 'Boutique Villa & Luxury Resort',
    budgetPreference: 'Mid-Range ($80 - $150 / night)',
    name: '',
    specialRequests: '',
  });

  const [dateError, setDateError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: name === 'guestsCount' || name === 'roomsCount' ? parseInt(value) || 1 : value,
      };

      // Validate check-in vs check-out dates
      if (name === 'checkInDate' || name === 'checkOutDate') {
        const inDate = name === 'checkInDate' ? value : updated.checkInDate;
        const outDate = name === 'checkOutDate' ? value : updated.checkOutDate;

        if (inDate && outDate && new Date(outDate) < new Date(inDate)) {
          setDateError('Check-out date cannot be earlier than check-in date.');
        } else {
          setDateError('');
        }
      }

      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.checkInDate && formData.checkOutDate && new Date(formData.checkOutDate) < new Date(formData.checkInDate)) {
      setDateError('Check-out date cannot be earlier than check-in date.');
      return;
    }
    const msg = buildHotelBookingMessage(formData);
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const previewMessage = buildHotelBookingMessage(formData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Handpicked Accommodations
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Sri Lanka Hotel Booking Assistance
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          From colonial tea estate bungalows in the misty highlands to private beachfront villas on the southern coast. We help you choose and secure the most authentic, vetted properties across Sri Lanka.
        </p>
      </div>

      {/* Honest Transparency Notice */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold">Notice:</span> We operate as a personalized local travel concierge rather than an automated OTA. We do not claim instant room inventory confirmation; instead, we recommend verified boutique properties and negotiate directly with local hoteliers on your behalf via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-slate-900">
                Hotel Assistance Inquiry Form
              </h2>
              <p className="text-xs text-slate-500">
                Tell us your destination, dates, and style preferences.
              </p>
            </div>
          </div>

          {dateError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
              {dateError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Destination & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Destination / Region <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="destination"
                  required
                  placeholder="e.g. Sigiriya, Ella, Galle, or Yala"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Guest Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            {/* Check-In & Check-Out */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Check-in Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkInDate"
                    required
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Check-out Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="checkOutDate"
                    required
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Guests & Rooms */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Guests
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="guestsCount"
                    min={1}
                    max={40}
                    value={formData.guestsCount}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Rooms Required
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="roomsCount"
                    min={1}
                    max={20}
                    value={formData.roomsCount}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Home className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Accommodation Type & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Accommodation Style
                </label>
                <select
                  name="accommodationType"
                  value={formData.accommodationType}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                >
                  <option value="Boutique Villa & Luxury Resort">Boutique Villa & Luxury Resort</option>
                  <option value="5-Star Star Luxury Property">5-Star Star Luxury Property</option>
                  <option value="Eco Lodge & Nature Cabana">Eco Lodge & Nature Cabana</option>
                  <option value="Colonial Tea Heritage Bungalow">Colonial Tea Heritage Bungalow</option>
                  <option value="Charming Guesthouse & B&B">Charming Guesthouse & B&B</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Budget / Night
                </label>
                <div className="relative">
                  <select
                    name="budgetPreference"
                    value={formData.budgetPreference}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  >
                    <option value="Budget ($30 - $70 / night)">Budget ($30 - $70 / night)</option>
                    <option value="Mid-Range ($80 - $150 / night)">Mid-Range ($80 - $150 / night)</option>
                    <option value="Upscale Boutique ($160 - $300 / night)">Upscale Boutique ($160 - $300 / night)</option>
                    <option value="Luxury / Ultra-Luxury ($300+ / night)">Luxury / Ultra-Luxury ($300+ / night)</option>
                    <option value="Flexible / Best Value">Flexible / Best Value</option>
                  </select>
                  <DollarSign className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Special Requests or Preferences
              </label>
              <textarea
                name="specialRequests"
                rows={2}
                placeholder="e.g. Ocean view, king bed, swimming pool, quiet location, honeymoon amenities..."
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              />
            </div>

            <button
              type="submit"
              disabled={Boolean(dateError)}
              className="w-full py-3.5 bg-[#164D35] hover:bg-[#113c29] disabled:bg-slate-300 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Inquire for Hotel Recommendations on WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#164D35] font-display">
              Why Inquire Through Pamu Ceylon Tour?
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>Personally Inspected:</strong> We inspect locations, hygiene, scenic views, and hospitality standards.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>No Hidden Booking Surcharges:</strong> You receive transparent local rates without inflated platform markups.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>Seamless Driver Coordination:</strong> Driver accommodation and meal facilities are coordinated without hassle.</span>
              </div>
            </div>
          </div>

          {/* Live Message Preview */}
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9DFC9]">
                Live Inquiry Preview
              </span>
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
            </div>
            <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 max-h-56 overflow-y-auto">
              {previewMessage}
            </pre>
          </div>
        </div>

      </div>

    </div>
  );
};
