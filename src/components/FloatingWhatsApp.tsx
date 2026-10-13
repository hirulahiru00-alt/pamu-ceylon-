import React, { useState } from 'react';
import { generateWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from '@/src/config/whatsapp';
import { buildGeneralInquiryMessage } from '@/src/utils/whatsappMessages';
import { MessageSquare, X, ChevronRight, Plane, Compass, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQuickChat = (customText: string) => {
    const url = generateWhatsAppUrl(customText);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleDirectChat = () => {
    const url = generateWhatsAppUrl(buildGeneralInquiryMessage({
      message: 'Hello Pamu Ceylon Tour! I would like to inquire about planning a trip.'
    }));
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-76 sm:w-84 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-left">
          {/* Card Header */}
          <div className="bg-[#164D35] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#4F8A56] flex items-center justify-center text-white font-bold text-sm">
                PC
              </div>
              <div>
                <p className="font-semibold text-sm">Pamu Ceylon Tour</p>
                <p className="text-[11px] text-[#E9DFC9]">Typically responds within minutes</p>
              </div>
            </div>
            <p className="text-xs text-slate-200 mt-2.5">
              Ayubowan! How can we help you explore Sri Lanka today?
            </p>
          </div>

          {/* Quick Action Options */}
          <div className="p-3 space-y-1.5 text-xs text-slate-700 bg-[#FAF8F5]">
            <button
              onClick={() => handleQuickChat('Hello Pamu Ceylon Tour! I would like to inquire about a custom holiday tour package in Sri Lanka.')}
              className="w-full text-left p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#164D35] hover:bg-emerald-50/40 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#4F8A56]" />
                <span className="font-medium text-slate-800">Plan a Custom Tour</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#164D35]" />
            </button>

            <button
              onClick={() => handleQuickChat('Hello! I would like to get a quote for Airport Pickup / Transfer to my hotel.')}
              className="w-full text-left p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#164D35] hover:bg-emerald-50/40 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Plane className="w-4 h-4 text-[#4F8A56]" />
                <span className="font-medium text-slate-800">Airport Pickup Quote</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#164D35]" />
            </button>

            <button
              onClick={() => handleQuickChat('Hello Pamu Ceylon Tour! I would like to check private vehicle with driver hire rates.')}
              className="w-full text-left p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#164D35] hover:bg-emerald-50/40 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[#4F8A56]" />
                <span className="font-medium text-slate-800">Vehicle with Chauffeur</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#164D35]" />
            </button>
          </div>

          {/* Footer Direct CTA */}
          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={handleDirectChat}
              className="w-full py-2.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#E9DFC9]" />
              <span>Start WhatsApp Chat Now</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#164D35] text-white shadow-xl hover:bg-[#113c29] hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative cursor-pointer border-2 border-white/80"
        aria-label="Contact Pamu Ceylon Tour on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 text-[#E9DFC9]" />
        
        {/* Subtle ping indicator */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#4F8A56] border-2 border-white flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
        </span>
      </button>
    </div>
  );
};
