import sigiriyaImg from '@/src/assets/images/hero_sri_lanka_sigiriya_1791891442755.jpg';
import ellaImg from '@/src/assets/images/hill_country_ella_train_1791891443654.jpg';
import mirissaImg from '@/src/assets/images/southern_coast_mirissa_1791891444035.jpg';
import yalaImg from '@/src/assets/images/wildlife_yala_safari_1791891444735.jpg';

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  category: 'cultural' | 'hill-country' | 'coastal' | 'wildlife' | 'day-tours' | 'multi-day';
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  includes: string[];
  excludes: string[];
  pricingNote: string;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'sigiriya-dambulla-cultural',
    title: 'Sigiriya & Dambulla Cultural Tour',
    duration: '2 Days / 1 Night',
    category: 'cultural',
    tagline: 'Ancient UNESCO kingdoms, royal rock citadel, and sacred cave temples',
    image: sigiriyaImg,
    description: 'Immerse yourself in the heart of the Cultural Triangle. Ascend the 5th-century Sigiriya Lion Rock Fortress, wander the ancient water gardens, and discover the magnificent mural-covered rock cave monastery of Dambulla.',
    highlights: [
      'Sigiriya UNESCO World Heritage Lion Rock citadel climb',
      'Ancient Dambulla Golden Rock Cave Temples & Buddhist murals',
      'Traditional village bullock cart ride & authentic Sri Lankan lunch',
      'Scenic Pidurangala Rock viewpoint overlooking Sigiriya',
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Dambulla Cave Monasteries',
        description: 'Morning pickup from your hotel or airport. Scenic drive to Dambulla. Explore the sacred UNESCO Cave Temples with over 150 Buddha statues. Evening relax at your nature retreat.'
      },
      {
        day: 2,
        title: 'Sigiriya Lion Rock & Traditional Village Tour',
        description: 'Early morning climb up Sigiriya Lion Rock Fortress before the midday heat. Experience village life, fresh coconut water, and a home-cooked clay-pot lunch. Afternoon transfer to your next destination.'
      }
    ],
    includes: [
      'Private air-conditioned car or van throughout the tour',
      'Dedicated English-speaking licensed chauffeur guide',
      'All fuel, expressway tolls, and parking fees',
      'Hotel pickup and drop-off anywhere in Colombo/Negombo/Airport'
    ],
    excludes: [
      'Site entrance tickets to monuments',
      'Personal meals and beverages not specified',
      'Tips / gratuities for guide (discretionary)'
    ],
    pricingNote: 'Custom quote tailored to your party size, hotel category preference, and pickup location.'
  },
  {
    id: 'ella-hill-country-escape',
    title: 'Ella & Hill Country Mountain Escape',
    duration: '3 Days / 2 Nights',
    category: 'hill-country',
    tagline: 'Misty tea plantations, the iconic Nine Arch Bridge, and mountain summits',
    image: ellaImg,
    description: 'Experience Sri Lanka’s coolest mountain air, cascading waterfalls, emerald Ceylon tea carpet estates, and the world-famous hill country train journey through the central highlands.',
    highlights: [
      'Walk across the historic colonial Nine Arch Bridge',
      'Sunrise hike to Little Adam’s Peak with 360-degree valley views',
      'Scenic scenic train ride through misty tea country',
      'Visit a working Ceylon tea factory and sample single-origin teas',
      'Spectacular Ravana Waterfall and valley viewpoints'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to the Central Highlands',
        description: 'Travel up into the central ranges. Stop at cascading waterfalls along the route. Check in to your mountain lodge in Ella and take in the panoramic sunset over Ella Gap.'
      },
      {
        day: 2,
        title: 'Nine Arch Bridge & Ceylon Tea Factory',
        description: 'Morning walk through eucalyptus and pine forests to Nine Arch Bridge. Watch the mountain railway pass across the viaduct. Tour a working tea factory and learn the art of Ceylon orthodox tea making.'
      },
      {
        day: 3,
        title: 'Little Adam’s Peak & Ravana Falls',
        description: 'Sunrise trek up Little Adam’s Peak. Refresh with a photo stop at Ravana Falls before continuing your journey toward your coastal or cultural destination.'
      }
    ],
    includes: [
      'Private comfortable vehicle with experienced mountain driver',
      'Hotel pickup and return transfer',
      'Assistance with scenic highland train tickets and timings',
      'Tea factory guided tour coordination'
    ],
    excludes: [
      'Train ticket costs (quoted separately upon request)',
      'Meals outside of accommodation plan',
      'Personal travel insurance'
    ],
    pricingNote: 'Custom quote based on your preferred hotel standard and group size.'
  },
  {
    id: 'southern-coast-galle-tour',
    title: 'Southern Coast & Galle Fort Heritage Tour',
    duration: '3 Days / 2 Nights',
    category: 'coastal',
    tagline: 'Colonial cobbled streets, golden palm-fringed beaches, and coastal tranquility',
    image: mirissaImg,
    description: 'Bask in the golden sunshine of the southern shore. Stroll the 17th-century ramparts of UNESCO Galle Fort, discover secluded beaches in Mirissa and Unawatuna, and witness traditional stilt fishermen.',
    highlights: [
      'Wander the cobblestone lanes & colonial ramparts of Galle Fort',
      'Relax on golden beaches of Mirissa, Bentota, and Hiriketiya',
      'Coconut Tree Hill panoramic ocean lookout in Mirissa',
      'Madu River mangrove boat safari through cinnamon islands',
      'Sea turtle conservation sanctuary visit'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Coastal Drive & Galle Fort Exploration',
        description: 'Pick up and travel down the southern expressway. Arrive at Galle Dutch Fort. Enjoy an afternoon heritage walk exploring antique boutique shops, the lighthouse, and oceanfront ramparts.'
      },
      {
        day: 2,
        title: 'Mirissa Coastal Sanctuary & Beach Life',
        description: 'Visit Coconut Tree Hill for morning views. Optional seasonal whale watching safari or a peaceful morning soaking up the southern sun. Evening seafood dinner by the beach.'
      },
      {
        day: 3,
        title: 'Mangrove River Boat Safari & Return',
        description: 'Cruise along the Madu River mangrove tunnels. Visit local cinnamon peelers on isolated river islands. Return comfortably via the southern expressway.'
      }
    ],
    includes: [
      'Private air-conditioned car/van for the entire southern circuit',
      'Dedicated local chauffeur guide with coastal expertise',
      'Expressway toll fees included',
      'Bottled drinking water during transit'
    ],
    excludes: [
      'Boat safari ticket and turtle sanctuary entrance fees',
      'Whale watching boat tickets',
      'Meals and personal expenses'
    ],
    pricingNote: 'Inquire on WhatsApp for seasonal vehicle rates and customized itineraries.'
  },
  {
    id: 'wildlife-yala-adventure',
    title: 'Wildlife & Yala Safari Adventure',
    duration: '2 Days / 1 Night',
    category: 'wildlife',
    tagline: 'Thrill of spotting wild leopards, Asian elephants, and exotic birdlife',
    image: yalaImg,
    description: 'Venture into Yala National Park, home to one of the highest leopard densities in the world. Experience thrilling open-air 4x4 safaris amidst scrub forests, lagoons, and rocky outcrops.',
    highlights: [
      'Open-top 4x4 safari jeep game drives in Yala National Park',
      'Chance to spot Sri Lankan leopards, sloth bears, and wild elephants',
      'Hundreds of resident and migratory wetland birds around lagoons',
      'Scenic southern coastal journey with wildlife photo stops'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Journey to the Wild South & Afternoon Safari',
        description: 'Early departure to Tissamaharama / Yala. Check into your safari campsite or hotel. Board an open-air 4x4 safari jeep for a 3-hour afternoon game drive as wildlife emerges from the heat.'
      },
      {
        day: 2,
        title: 'Dawn Safari & Scenic Return',
        description: 'Early morning game drive at sunrise when leopards and sloth bears are most active. Hearty breakfast followed by a relaxed journey onwards to the hill country or southern beaches.'
      }
    ],
    includes: [
      'Comfortable private vehicle transport to and from Yala',
      'Arrangement of private 4x4 safari jeep with experienced park tracker',
      'All fuel, tolls, and driver allowances'
    ],
    excludes: [
      'Department of Wildlife Conservation park entrance permits',
      'Jeep hire fees paid locally to park operators',
      'Meals and accommodations'
    ],
    pricingNote: 'Jeep and transfer rates provided transparently based on passenger count.'
  },
  {
    id: 'kandy-cultural-experience',
    title: 'Kandy Sacred Cultural Experience',
    duration: '2 Days / 1 Night',
    category: 'cultural',
    tagline: 'The Temple of the Sacred Tooth, Peradeniya Royal Gardens, and Kandyan arts',
    image: sigiriyaImg,
    description: 'Discover Sri Lanka’s last royal capital nestled in the green hills. Visit the revered Temple of the Sacred Tooth Relic, stroll the historic Royal Botanical Gardens of Peradeniya, and witness traditional Kandyan drummers.',
    highlights: [
      'Sacred Temple of the Tooth Relic (Sri Dalada Maligawa)',
      'Peradeniya Royal Botanical Gardens giant palms and orchid house',
      'Scenic Kandy Lake circular promenade and viewpoint',
      'Authentic Kandyan cultural dance and drumming performance'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Colombo to Kandy & The Sacred Temple',
        description: 'Drive through lush countryside and spice plantations into Kandy. Afternoon visit to the Temple of the Tooth during the ceremonial puja. Evening cultural dance show.'
      },
      {
        day: 2,
        title: 'Peradeniya Gardens & Scenic Return',
        description: 'Morning walk under the canopy of the Royal Botanical Gardens. Visit a gem museum or wood-carving artisan workshop before onward transfer.'
      }
    ],
    includes: [
      'Private A/C transport with English-speaking chauffeur',
      'Expressway and road tolls included',
      'Hotel pickup and drop-off'
    ],
    excludes: [
      'Temple entrance and cultural show tickets',
      'Meals and personal shopping'
    ],
    pricingNote: 'Custom quote based on your itinerary schedule and pickup point.'
  },
  {
    id: 'nuwara-eliya-tea-trail',
    title: 'Nuwara Eliya "Little England" Scenic Tour',
    duration: '2 Days / 1 Night',
    category: 'hill-country',
    tagline: 'Cool colonial climate, misty valleys, rose gardens, and Ceylon tea hills',
    image: ellaImg,
    description: 'Climb into the cool heights of 1,868 meters above sea level. Nuwara Eliya charms travelers with English Tudor-style cottages, Victoria Park, Gregory Lake, and hillside tea pickers.',
    highlights: [
      'Pedro & Damro Ceylon Tea Factory processing tours',
      'St. Clair and Devon Waterfalls viewing viewpoints',
      'Gregory Lake boat rides and pony trails',
      'Colonial Post Office and Victorian architecture'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Ascent to the Tea Highlands',
        description: 'Spectacular mountain drive passing cascading waterfalls. Tour a high-altitude tea estate and enjoy hot Ceylon black tea. Check in to your heritage hotel.'
      },
      {
        day: 2,
        title: 'Gregory Lake & Mountain Panoramas',
        description: 'Morning walk around Gregory Lake and Victoria Park. Journey onwards toward Kandy or Ella through breathtaking winding passes.'
      }
    ],
    includes: [
      'Private luxury sedan or van with expert mountain driver',
      'Hotel transfers, fuel, and parking'
    ],
    excludes: [
      'Lake boating fees',
      'Meals and lodging'
    ],
    pricingNote: 'Contact us on WhatsApp for tailored day-trip or overnight packages.'
  },
  {
    id: 'colombo-day-excursion',
    title: 'One-Day Sri Lanka Excursions',
    duration: '1 Day (Flexible Hours)',
    category: 'day-tours',
    tagline: 'Tailor-made private day excursions from Colombo, Negombo, or cruise port',
    image: mirissaImg,
    description: 'Perfect for travelers with limited time or cruise arrivals. Choose from Colombo heritage & food walks, Galle Fort day trips, Sigiriya dawn day excursions, or Pinnawala elephant orphanage visits.',
    highlights: [
      'Colombo colonial architecture, Gangaramaya Temple, and Pettah Market',
      'Flexible customizable stops based on your preferences',
      'Airport / Port pickup and guaranteed on-time return transfer',
      'Private air-conditioned car dedicated to your party only'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Full Day Private Custom Tour',
        description: 'Morning pickup from your hotel or cruise ship dock. Explore your chosen sights at your own pace without bus group rush. Return comfortably in the evening.'
      }
    ],
    includes: [
      'Private car/van with dedicated chauffeur for up to 10 hours',
      'Fuel, toll fees, parking fees, and driver allowances'
    ],
    excludes: [
      'Attraction tickets and meals'
    ],
    pricingNote: 'Fixed transparent day-hire rate with no hidden charges.'
  },
  {
    id: 'grand-sri-lanka-round-tour',
    title: 'Multi-Day Sri Lanka Highlights Grand Tour',
    duration: '7 Days / 6 Nights',
    category: 'multi-day',
    tagline: 'The ultimate all-in-one journey: Culture, Hill Country, Wildlife & Coast',
    image: sigiriyaImg,
    description: 'The definitive Sri Lankan holiday. Journey through Sigiriya rock fortress, the sacred city of Kandy, misty tea plantations in Nuwara Eliya, mountain vistas in Ella, a wildlife safari in Yala, and the historic beaches of Galle.',
    highlights: [
      'Complete Sri Lanka circuit covering ancient cities to tropical beaches',
      'Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Yala & Galle Fort',
      'Dedicated private vehicle and chauffeur guide for 7 full days',
      'Flexible pacing to stop for photography, fruits, and scenic points'
    ],
    itinerary: [
      { day: 1, title: 'Airport Pickup & Cultural Triangle', description: 'Meet at airport. Transfer to Sigiriya/Habarana. Relax after your flight.' },
      { day: 2, title: 'Sigiriya Rock Fortress & Dambulla Caves', description: 'Ascend Sigiriya in the morning. Visit Dambulla cave murals in the afternoon.' },
      { day: 3, title: 'Spice Gardens & Sacred Kandy', description: 'Scenic drive to Kandy with spice garden stop. Evening Temple of Tooth puja.' },
      { day: 4, title: 'Highland Tea Country & Nuwara Eliya', description: 'Ascend to tea country. Visit tea factory and Gregory Lake.' },
      { day: 5, title: 'Nine Arch Bridge & Ella Mountain Views', description: 'Scenic drive or train to Ella. Walk across Nine Arch Bridge.' },
      { day: 6, title: 'Yala National Park Safari', description: 'Descent to Yala for afternoon 4x4 open safari jeep excursion.' },
      { day: 7, title: 'Galle Dutch Fort & Airport Drop-off', description: 'Coastal highway to Galle Fort. Evening drop-off at airport or beach hotel.' }
    ],
    includes: [
      'Exclusive private vehicle with A/C for all 7 days',
      'Full-time licensed chauffeur guide',
      'All fuel, expressway tolls, driver lodging and meals',
      'Complete airport meet & greet and final departure transfer'
    ],
    excludes: [
      'Hotels (we can assist with booking or you can book independently)',
      'Site entry tickets and safari jeep tickets'
    ],
    pricingNote: 'Custom quote prepared on WhatsApp according to your travel dates and passenger count.'
  }
];
