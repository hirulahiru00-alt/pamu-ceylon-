/**
 * Formatted WhatsApp message generators for Pamu Ceylon Tour
 */

export interface GeneralInquiryData {
  name?: string;
  country?: string;
  travelDates?: string;
  travelers?: number;
  message?: string;
}

export interface TourInquiryData {
  tourTitle: string;
  duration?: string;
  name?: string;
  travelDates?: string;
  travelers?: number;
  specialRequests?: string;
}

export interface AirportPickupFormData {
  name: string;
  whatsappOrPhone: string;
  pickupAirport: "Bandaranaike International Airport (BIA / Colombo)" | "Mattala Rajapaksa International Airport (HRI)" | "Other";
  flightNumber: string;
  arrivalDate: string;
  arrivalTime: string;
  dropoffLocation: string;
  passengers: number;
  luggageCount: number;
  specialRequests?: string;
}

export interface VehicleHireFormData {
  vehicleCategory: string;
  vehicleModel?: string;
  startDate: string;
  durationDays: number;
  pickupLocation: string;
  destinationRoute: string;
  passengers: number;
  needDriver: boolean;
  name: string;
  specialRequests?: string;
}

export interface HotelBookingFormData {
  destination: string;
  checkInDate: string;
  checkOutDate: string;
  guestsCount: number;
  roomsCount: number;
  accommodationType: string;
  budgetPreference?: string;
  name: string;
  specialRequests?: string;
}

export function buildGeneralInquiryMessage(data: GeneralInquiryData): string {
  let msg = `🌿 *Hello Pamu Ceylon Tour!*\n\nI would like to inquire about planning a trip in Sri Lanka.\n`;
  if (data.name) msg += `• *My Name:* ${data.name}\n`;
  if (data.country) msg += `• *Country of Origin:* ${data.country}\n`;
  if (data.travelDates) msg += `• *Approximate Dates:* ${data.travelDates}\n`;
  if (data.travelers) msg += `• *Number of Travelers:* ${data.travelers}\n`;
  if (data.message) msg += `\n*Details / Request:* \n${data.message}\n`;
  msg += `\nPlease let me know your availability and recommendations. Thank you!`;
  return msg;
}

export function buildTourInquiryMessage(data: TourInquiryData): string {
  let msg = `🌿 *Hello Pamu Ceylon Tour!*\n\nI am interested in booking the following tour package:\n\n📍 *Tour:* ${data.tourTitle}\n`;
  if (data.duration) msg += `⏱️ *Duration:* ${data.duration}\n`;
  if (data.name) msg += `👤 *My Name:* ${data.name}\n`;
  if (data.travelDates) msg += `📅 *Preferred Travel Dates:* ${data.travelDates}\n`;
  if (data.travelers) msg += `👥 *Number of Persons:* ${data.travelers}\n`;
  if (data.specialRequests) msg += `\n💬 *Special Requests / Customizations:* \n${data.specialRequests}\n`;
  msg += `\nCould you please provide package details, pricing, and availability? Thank you!`;
  return msg;
}

export function buildAirportPickupMessage(data: AirportPickupFormData): string {
  let msg = `🛬 *Airport Pickup Inquiry – Pamu Ceylon Tour*\n\n`;
  msg += `👤 *Guest Name:* ${data.name}\n`;
  msg += `📞 *Contact:* ${data.whatsappOrPhone}\n`;
  msg += `✈️ *Airport:* ${data.pickupAirport}\n`;
  msg += `🎫 *Flight Number:* ${data.flightNumber || "To be provided"}\n`;
  msg += `📅 *Arrival Date:* ${data.arrivalDate}\n`;
  msg += `⏰ *Arrival Time:* ${data.arrivalTime}\n`;
  msg += `📍 *Drop-off Hotel / City:* ${data.dropoffLocation}\n`;
  msg += `👥 *Passengers:* ${data.passengers}\n`;
  msg += `🧳 *Luggage Pieces:* ${data.luggageCount}\n`;
  if (data.specialRequests) {
    msg += `\n📝 *Special Requests:* ${data.specialRequests}\n`;
  }
  msg += `\nPlease provide a quote and confirmation details. Thank you!`;
  return msg;
}

export function buildVehicleHireMessage(data: VehicleHireFormData): string {
  let msg = `🚗 *Vehicle Hire Inquiry – Pamu Ceylon Tour*\n\n`;
  msg += `👤 *Client Name:* ${data.name}\n`;
  msg += `🚘 *Vehicle Category:* ${data.vehicleCategory}${data.vehicleModel ? ` (${data.vehicleModel})` : ""}\n`;
  msg += `📅 *Start Date:* ${data.startDate}\n`;
  msg += `⏳ *Duration:* ${data.durationDays} Day(s)\n`;
  msg += `📍 *Pickup Location:* ${data.pickupLocation}\n`;
  msg += `🗺️ *Planned Route / Destinations:* ${data.destinationRoute}\n`;
  msg += `👥 *Passengers:* ${data.passengers}\n`;
  msg += `👨‍✈️ *Chauffeur Guide:* ${data.needDriver ? "Yes (English-speaking licensed driver)" : "Self-drive inquiry"}\n`;
  if (data.specialRequests) {
    msg += `\n📝 *Notes:* ${data.specialRequests}\n`;
  }
  msg += `\nPlease let me know vehicle availability and your best daily quote. Thank you!`;
  return msg;
}

export function buildHotelBookingMessage(data: HotelBookingFormData): string {
  let msg = `🏨 *Hotel Assistance Inquiry – Pamu Ceylon Tour*\n\n`;
  msg += `👤 *Guest Name:* ${data.name}\n`;
  msg += `📍 *Destination / City:* ${data.destination}\n`;
  msg += `📅 *Check-In:* ${data.checkInDate}\n`;
  msg += `📅 *Check-Out:* ${data.checkOutDate}\n`;
  msg += `👥 *Guests:* ${data.guestsCount}\n`;
  msg += `🛏️ *Rooms Required:* ${data.roomsCount}\n`;
  msg += `🏡 *Preferred Accommodation Style:* ${data.accommodationType}\n`;
  if (data.budgetPreference) {
    msg += `💵 *Budget Preference:* ${data.budgetPreference}\n`;
  }
  if (data.specialRequests) {
    msg += `\n📝 *Preferences / Notes:* ${data.specialRequests}\n`;
  }
  msg += `\nPlease let me know your recommended boutique hotels/resorts and rates. Thank you!`;
  return msg;
}

export function buildDestinationInquiryMessage(destinationName: string, notes?: string): string {
  let msg = `🌿 *Hello Pamu Ceylon Tour!*\n\nI would like to explore or plan a tour to *${destinationName}*, Sri Lanka.\n`;
  if (notes) {
    msg += `\n💬 *My Travel Plans / Interests:*\n${notes}\n`;
  }
  msg += `\nPlease share your suggested route, attractions, and vehicle rates for this trip. Thank you!`;
  return msg;
}
