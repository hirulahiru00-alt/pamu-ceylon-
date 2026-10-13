import React, { useState } from 'react';
import { generateWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, BUSINESS_EMAIL, BUSINESS_LOCATION } from '@/src/config/whatsapp';
import { buildGeneralInquiryMessage } from '@/src/utils/whatsappMessages';
import { 
  MessageSquare, 
  Mail, 
  MapPin, 
  Phone, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Clock, 
  CheckCircle2,
  Settings
} from 'lucide-react';

interface ContactPageProps {
  onOpenConfigModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenConfigModal }) => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [message, setMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = buildGeneralInquiryMessage({
      name: name.trim() || undefined,
      country: country.trim() || undefined,
      travelDates: travelDates.trim() || undefined,
      travelers: travelers,
      message: message.trim() || undefined,
    });
    const url = generateWhatsAppUrl(formatted);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDirectWhatsApp = () => {
    const url = generateWhatsAppUrl(buildGeneralInquiryMessage({
      message: 'Hello Pamu Ceylon Tour! I would like to get in touch with you.'
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'How does booking work with Pamu Ceylon Tour?',
      a: 'It is straightforward and personalized: you contact us via WhatsApp or our inquiry form with your travel dates, preferred sights, and party size. We formulate an itinerary and clear quote. Once you agree, your vehicle and chauffeur guide are reserved for your dates.'
    },
    {
      q: 'Do I need a tourist visa to enter Sri Lanka?',
      a: 'Most international visitors require an Electronic Travel Authorization (ETA / e-Visa) before arriving in Sri Lanka. It can be easily applied for online through the official Sri Lankan immigration portal. We recommend having at least 6 months validity on your passport.'
    },
    {
      q: 'What is the best time of year to visit Sri Lanka?',
      a: 'Sri Lanka is a year-round destination thanks to two alternating monsoon seasons. The south and west coasts, cultural triangle, and hill country enjoy prime dry sunshine from December through April. The east coast (Trincomalee, Arugam Bay, Pasikudah) is at its best from May to September.'
    },
    {
      q: 'Are your vehicles fully air-conditioned and insured?',
      a: 'Yes, absolutely. All vehicles in our fleet (sedans, SUVs, high-roof vans, and coaches) feature powerful air conditioning, comprehensive commercial passenger insurance, and are operated by licensed, tourist-board approved chauffeur guides.'
    },
    {
      q: 'Can we change our daily itinerary on the go?',
      a: 'Yes! One of the biggest advantages of a private tour with Pamu Ceylon Tour is flexible pacing. If you feel like spending an extra hour at a waterfall, taking photos of tea pluckers, or skipping a museum, your chauffeur accommodates your wishes.'
    },
    {
      q: 'How do payments work?',
      a: 'We accept payments in USD, EUR, GBP, or Sri Lankan Rupees (LKR). Transparent payment terms and deposit arrangements are communicated directly via WhatsApp with receipt confirmation.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-2">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 tracking-tight">
          Contact Pamu Ceylon Tour
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
          We are here to assist with every aspect of your Sri Lankan adventure. Send us a message on WhatsApp for instant assistance, or fill in our comprehensive trip inquiry form below.
        </p>
      </div>

      {/* Main Grid: Form & Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left: Inquiry Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
            <div className="w-10 h-10 rounded-xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
              <Send className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-display text-slate-900">
                Send a Trip Inquiry
              </h2>
              <p className="text-xs text-slate-500">
                Submitting this form compiles your details and opens WhatsApp instantly.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Emma Watson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Country of Residence
                </label>
                <input
                  type="text"
                  placeholder="e.g. United Kingdom, Australia, Germany"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Travel Dates / Month
                </label>
                <input
                  type="text"
                  placeholder="e.g. November 2026 (Approx 10 Days)"
                  value={travelDates}
                  onChange={(e) => setTravelDates(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Number of Persons
                </label>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Travel Ideas or Inquiries
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us what you'd love to see or do (e.g. Sigiriya climb, scenic train to Ella, Yala safari, beach rest at Galle)..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Send Inquiry on WhatsApp</span>
            </button>
          </form>
        </div>

        {/* Right: Direct Contact Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick WhatsApp Action Card */}
          <div className="bg-[#164D35] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E9DFC9] block">
              Fastest Communication
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              Connect Directly on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              We understand that planning overseas travel is easiest with fast, direct answers. Click below to initiate an immediate WhatsApp chat.
            </p>
            <button
              onClick={handleDirectWhatsApp}
              className="w-full py-3 bg-[#4F8A56] hover:bg-[#3d6d43] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Open WhatsApp Chat</span>
            </button>
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-3xl p-6 border border-stone-200 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
              Contact Information
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#164D35] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Base Operations:</strong>
                  <span>{BUSINESS_LOCATION}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#164D35] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Email Address:</strong>
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="text-[#164D35] hover:underline">
                    {BUSINESS_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#164D35] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Phone / WhatsApp:</strong>
                  <span>{WHATSAPP_DISPLAY_NUMBER}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#164D35] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Availability:</strong>
                  <span>Daily: 7:00 AM – 10:00 PM (Sri Lanka Time / UTC+5:30)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100">
              <button
                onClick={onOpenConfigModal}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Configure WhatsApp Business Number</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Frequently Asked Questions Accordion */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4F8A56] mb-1">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl font-bold font-display text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Helpful answers to common questions about traveling in Sri Lanka with Pamu Ceylon Tour.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-stone-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 bg-white hover:bg-stone-50 flex items-center justify-between gap-4 transition-colors"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-900">
                  {faq.q}
                </span>
                {expandedFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </button>

              {expandedFaq === idx && (
                <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
