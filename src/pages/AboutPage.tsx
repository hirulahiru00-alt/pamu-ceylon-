import React from 'react';
import { NavPage } from '@/src/components/Navbar';
import { generateWhatsAppUrl } from '@/src/config/whatsapp';
import { buildGeneralInquiryMessage } from '@/src/utils/whatsappMessages';
import { ShieldCheck, Heart, Leaf, Compass, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import sigiriyaImg from '@/src/assets/images/hero_sri_lanka_sigiriya_1791891442755.jpg';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const handleWhatsApp = () => {
    const url = generateWhatsAppUrl(buildGeneralInquiryMessage({
      message: 'Hello! I read about Pamu Ceylon Tour on your website and would love to discuss planning our upcoming trip.'
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block">
            About Pamu Ceylon Tour
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Discover Sri Lanka, Naturally.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pamu Ceylon Tour was established with a singular, heartfelt vision: to provide travelers with an authentic, unhurried, and deeply personal way to experience Sri Lanka.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Rather than ushering visitors onto crowded tour buses or into tourist-commission shops, we focus on tailor-made private journeys. Whether you are traveling as a couple on honeymoon, a family seeking safe transport, or an independent adventurer exploring the hill country trails, our goal is to show you the genuine warmth and natural wonder of our island home.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Connect on WhatsApp</span>
            </button>
            <button
              onClick={() => onNavigate('tours')}
              className="px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Tour Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-stone-200 bg-slate-900 aspect-4/3">
            <img
              src={sigiriyaImg}
              alt="Sri Lanka landscape"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-200 max-w-xs hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#164D35] flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-xs text-slate-900">Responsible Tourism</p>
                <p className="text-[11px] text-slate-500">Supporting local communities & wildlife conservation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guiding Principles */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A56] block mb-1">
            Our Guarantees
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Our Guiding Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Unhurried & Flexible Travel
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You dictate the pace. If you wish to linger at a tea plantation, stop for freshly plucked roadside fruits, or capture a golden sunset, your driver is at your service without rigid timetables.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Safety & Verified Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every vehicle in our fleet is well-maintained, fully insured, and equipped with functioning air-conditioning. Our chauffeurs are licensed and experienced in both winding hill passes and coastal highways.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#164D35]/10 text-[#164D35] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-display">
              Direct & Honest Communication
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide upfront price quotes without hidden fuel or parking surprises. You have direct WhatsApp access to us throughout your journey for inquiries, recommendations, or adjustments.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment to Nature & Ethical Tourism */}
      <section className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#4F8A56]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              Respecting Sri Lanka’s Nature & Wildlife
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sri Lanka is one of the world’s top biodiversity hotspots. At Pamu Ceylon Tour, we adhere strictly to ethical wildlife guidelines in national parks such as Yala, Udawalawe, and Minneriya. We maintain quiet distances from wild elephants and leopards, do not feed wild animals, and encourage visits to certified sea turtle conservation hatcheries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56]" />
                <span>Strict non-intrusive safari etiquette</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4F8A56]" />
                <span>Support for authentic village artisans</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <button
              onClick={handleWhatsApp}
              className="px-6 py-3.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
