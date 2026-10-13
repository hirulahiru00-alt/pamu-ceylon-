import React from 'react';
import { NavPage } from './Navbar';
import { generateWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER, BUSINESS_EMAIL, BUSINESS_LOCATION } from '@/src/config/whatsapp';
import { buildGeneralInquiryMessage } from '@/src/utils/whatsappMessages';
import { MessageSquare, MapPin, Mail, Phone, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenConfigModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConfigModal }) => {
  const handleWhatsAppClick = () => {
    const url = generateWhatsAppUrl(buildGeneralInquiryMessage({
      message: 'Hello Pamu Ceylon Tour! I am inquiring via your website footer.'
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#164D35] text-slate-100 border-t border-[#4F8A56]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E9DFC9] border border-white/15">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 20L10 8L15 15L17 12L21 20H3Z" fill="currentColor" fillOpacity="0.3" />
                  <path d="M12 2C8 6 6 11 7 17C12 17 18 15 21 10C18 7 15 4 12 2Z" stroke="#E9DFC9" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block">Pamu Ceylon Tour</span>
                <span className="text-xs text-[#E9DFC9] block font-medium">Discover Sri Lanka, Naturally.</span>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">
              We specialize in tailor-made private tours, airport transfers, vehicle hire, and authentic travel experiences across Sri Lanka. Exploring tea hills, wildlife safaris, and ancient kingdoms at your pace.
            </p>

            <div className="pt-1">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#4F8A56] hover:bg-[#3d6d43] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
                <span>Chat on WhatsApp Directly</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E9DFC9] mb-4">
              Explore Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <button onClick={() => onNavigate('tours')} className="hover:text-white transition-colors cursor-pointer">
                  Custom Tour Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Sri Lanka Destinations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('airport')} className="hover:text-white transition-colors cursor-pointer">
                  Airport Pickup & Transfers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vehicles')} className="hover:text-white transition-colors cursor-pointer">
                  Private Vehicle Hire with Chauffeur
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hotels')} className="hover:text-white transition-colors cursor-pointer">
                  Hotel Booking Assistance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors cursor-pointer">
                  Sri Lanka Travel Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E9DFC9] mb-4">
              Featured Destinations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-200">
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Sigiriya & Dambulla
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Kandy & Sacred Relics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Ella Nine Arch Bridge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Nuwara Eliya Tea Trails
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Galle Fort & Mirissa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('destinations')} className="hover:text-white transition-colors cursor-pointer">
                  Yala Wildlife Safari
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Responsible Travel */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E9DFC9] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E9DFC9] shrink-0 mt-0.5" />
                <span>{BUSINESS_LOCATION}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E9DFC9] shrink-0" />
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-white transition-colors">
                  {BUSINESS_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E9DFC9] shrink-0" />
                <button onClick={handleWhatsAppClick} className="hover:text-white transition-colors text-left">
                  {WHATSAPP_DISPLAY_NUMBER}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConfigModal}
                className="text-xs text-[#E9DFC9]/80 hover:text-white underline"
              >
                Website Administrator Settings
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} Pamu Ceylon Tour. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
              About Us
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
              Contact & Inquiries
            </button>
            <span>·</span>
            <span className="text-slate-400">Discover Sri Lanka, Naturally</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
