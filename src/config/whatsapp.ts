/**
 * Pamu Ceylon Tour - WhatsApp Business Configuration
 * 
 * INSTRUCTIONS FOR BUSINESS OWNER / ADMINISTRATOR:
 * 1. Replace "REPLACE_WITH_BUSINESS_NUMBER" with your actual WhatsApp phone number.
 * 2. Use the international format WITHOUT the '+' sign, spaces, hyphens, or brackets.
 *    Example for Sri Lanka: "94771234567" (94 is the country code, followed by the mobile number).
 *    Example for international: "14155552671"
 * 3. Once updated, all WhatsApp buttons and inquiry forms across the website will directly
 *    launch chat messages to this number on both mobile and desktop.
 */

export const WHATSAPP_NUMBER: string = "94713217574";

// Formatted display number for header / footer text
export const WHATSAPP_DISPLAY_NUMBER = "+94 71 321 7574";

export const BUSINESS_EMAIL = "info@pamuceylontour.com";
export const BUSINESS_LOCATION = "Colombo & Kandy, Sri Lanka";

/**
 * Checks whether the business number has been configured or is still the placeholder.
 */
export function isWhatsAppConfigured(): boolean {
  return WHATSAPP_NUMBER !== "REPLACE_WITH_BUSINESS_NUMBER" && WHATSAPP_NUMBER.trim().length > 5;
}

/**
 * Generates a clean, valid WhatsApp wa.me URL with prefilled text.
 * If the number is still the placeholder, wa.me/?text= is used so the user can select a contact,
 * or it routes to the active test recipient.
 */
export function generateWhatsAppUrl(message: string): string {
  const cleanMessage = encodeURIComponent(message.trim());
  const cleanNumber = WHATSAPP_NUMBER.replace(/[^0-9]/g, "");

  if (!isWhatsAppConfigured()) {
    // When placeholder is still set, open WhatsApp with prefilled message
    return `https://wa.me/?text=${cleanMessage}`;
  }

  return `https://wa.me/${cleanNumber}?text=${cleanMessage}`;
}

/**
 * Helper to open WhatsApp in a new tab safely
 */
export function openWhatsAppChat(message: string): void {
  const url = generateWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
