import React, { useState } from 'react';
import { generateWhatsAppUrl, isWhatsAppConfigured } from '@/src/config/whatsapp';
import { buildGeneralInquiryMessage } from '@/src/utils/whatsappMessages';
import { Menu, X, MessageSquare, Info } from 'lucide-react';

export type NavPage = 'home' | 'tours' | 'destinations' | 'airport' | 'vehicles' | 'hotels' | 'about' | 'contact' | 'gallery';

interface NavbarProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenConfigModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenConfigModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrimaryWhatsAppClick = () => {
    const defaultMsg = buildGeneralInquiryMessage({
      message: 'Hello Pamu Ceylon Tour! I would like to plan a trip to Sri Lanka.'
    });
    const url = generateWhatsAppUrl(defaultMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navLinks: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Tour Packages', page: 'tours' },
    { label: 'Destinations', page: 'destinations' },
    { label: 'Airport Pickup', page: 'airport' },
    { label: 'Vehicle Hire', page: 'vehicles' },
    { label: 'Hotel Booking', page: 'hotels' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <>
      {/* Top Advisory Banner if WhatsApp is still placeholder */}
      {!isWhatsAppConfigured() && (
        <div className="bg-[#164D35] text-[#E9DFC9] text-xs px-4 py-1.5 flex items-center justify-between border-b border-[#4F8A56]/30">
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
              <Info className="w-3.5 h-3.5 text-[#E9DFC9] shrink-0" />
              <span>Owner Notice: WhatsApp number is in placeholder mode. All buttons generate active inquiry links.</span>
            </span>
            <button
              onClick={onOpenConfigModal}
              className="underline hover:text-white ml-3 text-[11px] font-medium shrink-0"
            >
              Configure WhatsApp Number
            </button>
          </div>
        </div>
      )}

      {/* Main Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left shrink-0 cursor-pointer"
          >
            {/* Sri Lanka Nature Leaf & Mountain Insignia */}
            <div className="w-10 h-10 rounded-xl bg-[#164D35] flex items-center justify-center text-white shadow-xs group-hover:bg-[#113c29] transition-colors">
              <svg className="w-6 h-6 text-[#E9DFC9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Mountain contour */}
                <path d="M3 20L10 8L15 15L17 12L21 20H3Z" fill="currentColor" fillOpacity="0.2" />
                {/* Ceylon Nature Leaf curve */}
                <path d="M12 2C8 6 6 11 7 17C12 17 18 15 21 10C18 7 15 4 12 2Z" stroke="#E9DFC9" />
                <path d="M11 11L16 6" stroke="#FFFFFF" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl text-[#164D35] tracking-tight whitespace-nowrap">
                Pamu Ceylon Tour
              </span>
              <span className="text-[11px] text-[#4F8A56] font-medium tracking-wide -mt-0.5">
                Discover Sri Lanka, Naturally
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                  currentPage === link.page
                    ? 'text-[#164D35] font-semibold'
                    : 'text-slate-600 hover:text-[#164D35]'
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#164D35] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrimaryWhatsAppClick}
              className="px-4 py-2.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span className="whitespace-nowrap">Book on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={handlePrimaryWhatsAppClick}
              className="px-3 py-2 bg-[#164D35] text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#E9DFC9]" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    currentPage === link.page
                      ? 'bg-[#164D35]/10 text-[#164D35] font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={handlePrimaryWhatsAppClick}
                className="w-full py-2.5 bg-[#164D35] hover:bg-[#113c29] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
                <span>Book on WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfigModal();
                }}
                className="w-full py-2 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg text-center hover:bg-slate-200 transition-colors"
              >
                Owner WhatsApp Setup Instructions
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
