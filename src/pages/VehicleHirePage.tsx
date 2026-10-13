import React, { useState } from 'react';
import { VEHICLE_FLEET, VehicleOption } from '@/src/data/vehiclesData';
import { VehicleHireFormData, buildVehicleHireMessage } from '@/src/utils/whatsappMessages';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { Car, Users, Briefcase, Wind, CheckCircle2, MessageSquare, Info, Shield, Calendar, MapPin } from 'lucide-react';

export const VehicleHirePage: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleOption>(VEHICLE_FLEET[0]);

  const [formData, setFormData] = useState<VehicleHireFormData>({
    vehicleCategory: VEHICLE_FLEET[0].category,
    vehicleModel: VEHICLE_FLEET[0].suggestedModels,
    startDate: '',
    durationDays: 3,
    pickupLocation: 'Colombo / Airport',
    destinationRoute: 'Kandy & Hill Country',
    passengers: 2,
    needDriver: true,
    name: '',
    specialRequests: '',
  });

  const handleSelectFleet = (v: VehicleOption) => {
    setSelectedVehicle(v);
    setFormData((prev) => ({
      ...prev,
      vehicleCategory: v.category,
      vehicleModel: v.suggestedModels,
    }));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === 'durationDays' || name === 'passengers' ? parseInt(value) || 1 : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildVehicleHireMessage(formData);
    const url = generateWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const previewMessage = buildVehicleHireMessage(formData);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Private Transport Solutions
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Vehicle Hire with Driver in Sri Lanka
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          Hire modern, air-conditioned cars, SUVs, passenger vans, and coaches accompanied by dedicated licensed Sri Lankan chauffeur guides. Enjoy maximum freedom to travel anywhere on the island at your own pace.
        </p>
      </div>

      {/* Honest Notice */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold">Editable Fleet Listings:</span> Vehicles shown are typical representative models. Final vehicle assignment, luggage capacities, and fuel/toll policies are confirmed transparently prior to dispatch.
        </p>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {VEHICLE_FLEET.map((v) => (
          <div
            key={v.id}
            onClick={() => handleSelectFleet(v)}
            className={`rounded-3xl p-6 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between ${
              selectedVehicle.id === v.id
                ? 'border-[#164D35] bg-emerald-50/20 shadow-md ring-2 ring-[#164D35]/10'
                : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block">
                    {v.category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-slate-900 mt-0.5">
                    {v.title}
                  </h3>
                </div>
                {v.isPopular && (
                  <span className="px-3 py-1 bg-[#164D35] text-[#E9DFC9] text-[11px] font-semibold rounded-full shrink-0">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Spec Strip */}
              <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-white border border-stone-200 text-xs text-slate-700 mb-5">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#164D35]" />
                  <span>Up to {v.passengers} Seats</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#164D35]" />
                  <span>{v.luggageCount} Large Bags</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Wind className="w-4 h-4 text-[#164D35]" />
                  <span>Dual A/C</span>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2 mb-5">
                {v.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8A56] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Best for */}
              <p className="text-xs text-slate-500 italic mb-4">
                <strong>Ideal for:</strong> {v.bestFor}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                {v.priceNote}
              </span>
              <button
                type="button"
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-colors cursor-pointer ${
                  selectedVehicle.id === v.id
                    ? 'bg-[#164D35] text-white'
                    : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                }`}
              >
                {selectedVehicle.id === v.id ? 'Selected' : 'Select Vehicle'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Vehicle Hire Booking Form */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
          <div className="w-10 h-10 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-display text-slate-900">
              Inquire for {selectedVehicle.category}
            </h2>
            <p className="text-xs text-slate-500">
              Selected category: <span className="font-semibold text-slate-700">{selectedVehicle.title}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. David Miller"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleFormChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Duration (Days)
                </label>
                <input
                  type="number"
                  name="durationDays"
                  min={1}
                  max={60}
                  value={formData.durationDays}
                  onChange={handleFormChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Number of Passengers
                </label>
                <input
                  type="number"
                  name="passengers"
                  min={1}
                  max={selectedVehicle.passengers}
                  value={formData.passengers}
                  onChange={handleFormChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pickup Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="pickupLocation"
                    placeholder="e.g. Colombo Airport / Hotel"
                    value={formData.pickupLocation}
                    onChange={handleFormChange}
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                  />
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Intended Route or Destinations
                </label>
                <input
                  type="text"
                  name="destinationRoute"
                  placeholder="e.g. Kandy, Ella, Yala, Galle"
                  value={formData.destinationRoute}
                  onChange={handleFormChange}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Additional Notes / Requests
              </label>
              <textarea
                name="specialRequests"
                rows={2}
                placeholder="e.g. Need child booster seat, multi-city drops, luggage details..."
                value={formData.specialRequests}
                onChange={handleFormChange}
                className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              />
            </div>

            <div className="flex items-center gap-2 p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
              <input
                type="checkbox"
                id="needDriver"
                name="needDriver"
                checked={formData.needDriver}
                onChange={handleFormChange}
                className="w-4 h-4 text-[#164D35] focus:ring-[#164D35] rounded"
              />
              <label htmlFor="needDriver" className="text-xs text-slate-700 font-medium">
                Include licensed English-speaking tourist driver (Recommended for stress-free Sri Lanka travel)
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Inquire for {selectedVehicle.category} on WhatsApp</span>
            </button>
          </form>

          {/* Right Preview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9DFC9]">
                  Prepared Inquiry Message
                </span>
                <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              </div>
              <pre className="text-xs font-mono text-slate-300 whitespace-pre-wrap bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 max-h-64 overflow-y-auto">
                {previewMessage}
              </pre>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-900">Standard Vehicle Inclusions:</h4>
              <p>• All vehicles are fully air-conditioned and non-smoking.</p>
              <p>• Driver accommodation and meals are covered by Pamu Ceylon Tour.</p>
              <p>• Flexible photo stops along scenic tea estates and waterfalls.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
