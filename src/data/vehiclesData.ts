export interface VehicleOption {
  id: string;
  category: string;
  title: string;
  suggestedModels: string;
  passengers: number;
  luggageCount: number;
  acType: string;
  features: string[];
  bestFor: string;
  priceNote: string;
  isPopular?: boolean;
}

export const VEHICLE_FLEET: VehicleOption[] = [
  {
    id: 'sedan',
    category: 'Private Sedan',
    title: 'Comfort Sedan (Toyota Axio / Premio / Prius)',
    suggestedModels: 'Toyota Axio, Premio, Prius or similar modern sedan',
    passengers: 3,
    luggageCount: 2,
    acType: 'Full Climate Control A/C',
    features: [
      'Dedicated English-speaking licensed chauffeur',
      'Comfortable plush cloth or leather seating',
      'Dual zone air conditioning',
      'USB phone charging ports & bottled water',
      'Full passenger insurance & flexible photo stops'
    ],
    bestFor: 'Couples, solo travelers, and small families wanting smooth city & highway touring',
    priceNote: 'Flexible daily hire rates or per-kilometer packages available upon WhatsApp inquiry.'
  },
  {
    id: 'suv',
    category: 'Compact SUV',
    title: 'Comfort Compact SUV (Toyota Raize / Honda Vezel)',
    suggestedModels: 'Toyota Raize, Honda Vezel, Toyota Rush',
    passengers: 4,
    luggageCount: 3,
    acType: 'High Capacity Climate Control',
    features: [
      'Elevated seating position for scenic mountain views',
      'Ample ground clearance for hill country & plantation roads',
      'Dedicated licensed tourist chauffeur',
      'Spacious trunk for extra luggage and gear',
      'All fuel, tolls, and parking can be packaged'
    ],
    bestFor: 'Small families and couples seeking extra road visibility and luggage comfort',
    priceNote: 'Custom quote based on travel itinerary, mileage, and rental days.',
    isPopular: true
  },
  {
    id: 'van',
    category: 'Passenger Van',
    title: 'Luxury Tourist Van (Toyota KDH High Roof / Super GL)',
    suggestedModels: 'Toyota HiAce KDH High Roof / Super GL Executive',
    passengers: 8,
    luggageCount: 8,
    acType: 'Front & Rear Dual Air-Conditioning Units',
    features: [
      'Individual plush reclining seats with headrests',
      'Extra-high roof clearance for effortless movement',
      'Massive rear cargo luggage compartment',
      'Large tinted panoramic windows for countryside sightseeing',
      'Experienced mountain & wildlife highway driver'
    ],
    bestFor: 'Family vacations, groups of friends, and travelers with surfboards or golf bags',
    priceNote: 'Our most popular choice for multi-day Sri Lanka tours with maximum legroom.',
    isPopular: true
  },
  {
    id: 'coach',
    category: 'Group Transport',
    title: 'Executive Mini Coach (Toyota Coaster)',
    suggestedModels: 'Toyota Coaster / Mitsubishi Rosa Luxury Mini Coach',
    passengers: 18,
    luggageCount: 16,
    acType: 'High-Volume Roof-Mounted Commercial A/C',
    features: [
      'PA / microphone audio system for group commentary',
      'Spacious aisle and comfortable reclining seats',
      'Dedicated under-carriage & interior luggage storage',
      'Professional driver plus optional dedicated national tour guide',
      'Certified for group tourism and mountain routes'
    ],
    bestFor: 'Extended family reunions, corporate retreats, yoga groups, and tour groups',
    priceNote: 'Tailor-made group rates quoted directly on WhatsApp.'
  }
];
