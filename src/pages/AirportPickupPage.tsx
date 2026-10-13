import React, { useState } from 'react';
import { AirportPickupFormData, buildAirportPickupMessage } from '@/src/utils/whatsappMessages';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { Plane, Calendar, Clock, MapPin, Users, Briefcase, MessageSquare, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

export const AirportPickupPage: React.FC = () => {
  const [formData, setFormData] = useState<AirportPickupFormData>({
    name: '',
    whatsappOrPhone: '',
    pickupAirport: 'Bandaranaike International Airport (BIA / Colombo)',
    flightNumber: '',
    arrivalDate: '',
    arrivalTime: '',
    dropoffLocation: '',
    passengers: 2,
    luggageCount: 2,
    specialRequests: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'passengers' || name === 'luggageCount' ? parseInt(value) || 0 : value,
    }));
    if (formError) setFormError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please provide your name.');
      return;
    }
    if (!formData.arrivalDate) {
      setFormError('Please select your arrival date.');
      return;
    }
    if (!formData.dropoffLocation.trim()) {
      setFormError('Please specify your drop-off hotel or city destination.');
      return;
    }

    const msg = buildAirportPickupMessage(formData);
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Preview message for user clarity
  const previewMessage = buildAirportPickupMessage(formData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Door-to-Door Private Transfers
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Sri Lanka Airport Pickup & Transfers
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Start your holiday seamlessly. Our courteous licensed chauffeur meets you directly at the terminal exit with your name displayed clearly, assists with luggage, and transfers you in comfort to your hotel.
        </p>
      </div>

      {/* Honest Notice */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold">Service Transparency:</span> Submitting this form opens a prefilled WhatsApp inquiry. Quotes are personalized based on distance, toll expressways, and vehicle category. Bookings are confirmed upon mutual agreement on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-slate-900">
                Airport Transfer Request Form
              </h2>
              <p className="text-xs text-slate-500">
                Please complete your flight and destination details below.
              </p>
            </div>
          </div>

          {formError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
              {formError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp Number or Phone
                </label>
                <input
                  type="text"
                  name="whatsappOrPhone"
                  placeholder="e.g. +44 7911 123456"
                  value={formData.whatsappOrPhone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            {/* Airport Choice & Flight Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Arrival Airport <span className="text-red-500">*</span>
                </label>
                <select
                  name="pickupAirport"
                  value={formData.pickupAirport}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                >
                  <option value="Bandaranaike International Airport (BIA / Colombo)">
                    Colombo (BIA / Katunayake)
                  </option>
                  <option value="Mattala Rajapaksa International Airport (HRI)">
                    Mattala (HRI / Hambantota)
                  </option>
                  <option value="Other">Other / Domestic Airport</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Flight Number (Optional if not yet booked)
                </label>
                <input
                  type="text"
                  name="flightNumber"
                  placeholder="e.g. UL 504 / EK 652"
                  value={formData.flightNumber}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            {/* Arrival Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Arrival Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="arrivalDate"
                    required
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Arrival Time
                </label>
                <div className="relative">
                  <input
                    type="time"
                    name="arrivalTime"
                    value={formData.arrivalTime}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Drop-off Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Drop-off Hotel / Destination City <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="dropoffLocation"
                  required
                  placeholder="e.g. Cinnamon Grand Colombo, Galle Fort, or Kandy"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              </div>
            </div>

            {/* Passengers & Luggage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Number of Passengers
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="passengers"
                    min={1}
                    max={25}
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Luggage Pieces (Large bags)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="luggageCount"
                    min={0}
                    max={30}
                    value={formData.luggageCount}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                name="specialRequests"
                rows={2}
                placeholder="e.g. Baby seat required, oversized surfboard, quick stop for local SIM card..."
                value={formData.specialRequests}
                onChange={handleChange}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Send Airport Pickup Inquiry on WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right Info & Live Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Transfer Service Inclusions */}
          <div className="bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#164D35] font-display">
              What’s Included in Every Transfer
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>Terminal Meet & Greet:</strong> Driver waits at the arrivals exit gate holding a personalized nameboard.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>All Road Tolls Included:</strong> Direct transit via the modern expressway network (Katunayake Expressway & Southern Expressway).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>Private & Air-Conditioned:</strong> Vehicle is exclusive to your group with no shared passenger pickups.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56] shrink-0 mt-0.5" />
                <span><strong>Complimentary Waiting:</strong> Generous free waiting time after flight landing for baggage claim and customs.</span>
              </div>
            </div>
          </div>

          {/* Live Message Preview */}
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9DFC9]">
                Live WhatsApp Message Preview
              </span>
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
            </div>
            <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 max-h-56 overflow-y-auto">
              {previewMessage}
            </pre>
            <p className="text-[11px] text-slate-400 mt-2">
              This message will automatically open in WhatsApp ready for you to send with 1 click.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
