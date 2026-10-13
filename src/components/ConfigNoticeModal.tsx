import React, { useState } from 'react';
import { WHATSAPP_NUMBER, isWhatsAppConfigured, generateWhatsAppUrl } from '@/src/config/whatsapp';
import { MessageSquare, Check, Copy, ExternalLink, Settings, X } from 'lucide-react';

interface ConfigNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigNoticeModal: React.FC<ConfigNoticeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [testNumber, setTestNumber] = useState('');
  const [testSent, setTestSent] = useState(false);

  if (!isOpen) return null;

  const copyConfigSnippet = () => {
    navigator.clipboard.writeText('export const WHATSAPP_NUMBER = "94771234567";');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTestChat = (e: React.FormEvent) => {
    e.preventDefault();
    const num = testNumber.trim().replace(/[^0-9]/g, '');
    if (!num) return;
    const testUrl = `https://wa.me/${num}?text=${encodeURIComponent('Hello! Testing WhatsApp integration for Pamu Ceylon Tour.')}`;
    window.open(testUrl, '_blank', 'noopener,noreferrer');
    setTestSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-display">WhatsApp Setup Guide</h3>
            <p className="text-xs text-slate-500">For Pamu Ceylon Tour Website Owner</p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-600">
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-amber-200/70">
            <div className="flex items-start gap-2.5">
              <span className="font-semibold text-amber-900 text-xs uppercase tracking-wider mt-0.5">Current Status:</span>
              <div>
                {isWhatsAppConfigured() ? (
                  <p className="text-emerald-800 font-medium">
                    Configured to <span className="font-mono font-bold">+{WHATSAPP_NUMBER}</span>.
                  </p>
                ) : (
                  <p className="text-amber-800 font-medium">
                    Default placeholder is active (<span className="font-mono font-bold">"REPLACE_WITH_BUSINESS_NUMBER"</span>). WhatsApp buttons will open wa.me with prefilled messages so you can test them immediately.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-1.5">How to set your business number:</h4>
            <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600">
              <li>Open the file: <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-slate-800">src/config/whatsapp.ts</span></li>
              <li>Change the variable to your international mobile number without <span className="font-mono font-semibold">+</span> or spaces.</li>
              <li>Example: For Sri Lanka (+94 77 123 4567), set:</li>
            </ol>
            <div className="mt-2 flex items-center justify-between bg-slate-900 text-slate-100 px-3 py-2 rounded-lg font-mono text-xs">
              <span>export const WHATSAPP_NUMBER = "94771234567";</span>
              <button
                onClick={copyConfigSnippet}
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-[11px]"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3">
            <h4 className="font-semibold text-slate-900 mb-1.5 text-xs">Test live inquiry with any test phone number:</h4>
            <form onSubmit={handleTestChat} className="flex gap-2">
              <input
                type="text"
                placeholder="e.g. 94771234567"
                value={testNumber}
                onChange={(e) => setTestNumber(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164D35]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#164D35] hover:bg-[#113c29] text-white text-xs font-medium rounded-lg flex items-center gap-1 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Test Link
              </button>
            </form>
            {testSent && (
              <p className="text-[11px] text-emerald-700 mt-1">
                WhatsApp chat link launched!
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors"
          >
            Got It, Close
          </button>
        </div>
      </div>
    </div>
  );
};
