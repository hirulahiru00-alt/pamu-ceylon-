import sigiriyaImg from '@/src/assets/images/hero_sri_lanka_sigiriya_1791891442755.jpg';
import ellaImg from '@/src/assets/images/hill_country_ella_train_1791891443654.jpg';
import mirissaImg from '@/src/assets/images/southern_coast_mirissa_1791891444035.jpg';
import yalaImg from '@/src/assets/images/wildlife_yala_safari_1791891444735.jpg';

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  region: 'Cultural Triangle' | 'Central Highlands' | 'Southern Coast' | 'Wildlife & Nature';
  image: string;
  description: string;
  attractions: string[];
  bestTimeToVisit: string;
  idealStay: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya',
    subtitle: 'The 5th-century Ancient Lion Rock Citadel',
    region: 'Cultural Triangle',
    image: sigiriyaImg,
    description: 'Rising dramatically 200 meters above the central jungle plains, Sigiriya is an ancient palace and fortress complex acclaimed as an architectural marvel. Marvel at ancient fresco murals, symmetrical royal water gardens, and panoramic jungle vistas from the summit.',
    attractions: [
      'Sigiriya Lion Rock Fortress climb',
      'Pidurangala Rock panoramic sunrise viewpoint',
      'Ancient royal water gardens & boulder gardens',
      'Minneriya elephant gathering nearby (seasonal)'
    ],
    bestTimeToVisit: 'December to April, and July to September',
    idealStay: '1 to 2 Days'
  },
  {
    id: 'dambulla',
    name: 'Dambulla',
    subtitle: 'Golden Temple & Sacred Rock Cave Monasteries',
    region: 'Cultural Triangle',
    image: sigiriyaImg,
    description: 'Dambulla is home to Sri Lanka’s largest and best-preserved cave temple complex. Five massive natural caves house more than 150 serene statues of Lord Buddha and thousands of square meters of intricate ancient wall murals painted across the living rock.',
    attractions: [
      'Five sacred cave monasteries with ancient murals',
      'Golden Temple Buddha statue and museum',
      'Ironwood Forest & Rose Quartz mountain nearby',
      'Vibrant local agricultural wholesale market'
    ],
    bestTimeToVisit: 'Year-round, best from December to August',
    idealStay: 'Half day to 1 Day'
  },
  {
    id: 'kandy',
    name: 'Kandy',
    subtitle: 'Sacred Hill Capital & Cultural Epicenter',
    region: 'Central Highlands',
    image: sigiriyaImg,
    description: 'Nestled amidst mist-shrouded hills and lush tropical greenery, Kandy is the cultural soul of Sri Lanka. It houses the revered Temple of the Sacred Tooth Relic and preserves centuries-old royal traditions, dance, and craft.',
    attractions: [
      'Temple of the Sacred Tooth Relic (Sri Dalada Maligawa)',
      'Royal Botanical Gardens of Peradeniya',
      'Picturesque Kandy Lake walking promenade',
      'Traditional Kandyan cultural dance performances'
    ],
    bestTimeToVisit: 'December to April (Esala Perahera festival in July/August)',
    idealStay: '1 to 2 Days'
  },
  {
    id: 'ella',
    name: 'Ella',
    subtitle: 'Mountain Pass, Cloud Forests & Tea Trails',
    region: 'Central Highlands',
    image: ellaImg,
    description: 'A relaxed mountain town renowned for sweeping highland views, dramatic hiking trails, cascading waterfalls, and the iconic colonial Nine Arch Bridge where trains cross emerald green tea valleys.',
    attractions: [
      'Colonial Nine Arch Bridge viaduct',
      'Little Adam’s Peak sunrise hike',
      'Ella Rock panoramic trekking trail',
      'Ravana Waterfalls and historic Ravana Cave',
      'Boutique hillside cafes and organic tea bars'
    ],
    bestTimeToVisit: 'January to May for clear mountain views',
    idealStay: '2 to 3 Days'
  },
  {
    id: 'nuwara-eliya',
    name: 'Nuwara Eliya',
    subtitle: 'Ceylon Tea Country & "Little England"',
    region: 'Central Highlands',
    image: ellaImg,
    description: 'Situated at an elevation of 1,868 meters, Nuwara Eliya offers crisp mountain breezes, colonial Tudor-style architecture, manicured golf courses, and endless rolling hills covered in world-renowned Ceylon black tea.',
    attractions: [
      'Pedro & Damro historic Ceylon tea factories',
      'Gregory Lake boat rides and lakeside walks',
      'Horton Plains National Park & World’s End cliff',
      'Hakgala Subtropical Botanical Gardens'
    ],
    bestTimeToVisit: 'February to May (coolest and clearest skies)',
    idealStay: '1 to 2 Days'
  },
  {
    id: 'galle',
    name: 'Galle',
    subtitle: 'Historic UNESCO Dutch Fort & Maritime Heritage',
    region: 'Southern Coast',
    image: mirissaImg,
    description: 'Galle Fort is a living UNESCO World Heritage site built by the Portuguese and Dutch in the 16th and 17th centuries. Wander through tranquil cobblestone alleys lined with artisan boutiques, charming cafes, and seawall ramparts overlooking the Indian Ocean.',
    attractions: [
      'Galle Fort ramparts and sunset promenade',
      'Historic 1939 Galle Lighthouse',
      'Dutch Reformed Church & Maritime Museum',
      'Artisan jewelry, gemstone, and boutique shops'
    ],
    bestTimeToVisit: 'November to April for calm seas and sunshine',
    idealStay: '1 to 2 Days'
  },
  {
    id: 'mirissa',
    name: 'Mirissa',
    subtitle: 'Tropical Beaches, Coconut Palms & Ocean Life',
    region: 'Southern Coast',
    image: mirissaImg,
    description: 'A picturesque crescent-shaped bay known for golden sands, swaying coconut palms, vibrant beachside dining, and world-class ocean safaris to spot blue whales and dolphins in their natural migratory waters.',
    attractions: [
      'Iconic Coconut Tree Hill ocean peninsula',
      'Blue whale and dolphin ocean safaris (seasonal)',
      'Secret Beach tranquil cove for swimming',
      'Fresh seafood dining directly on the sand'
    ],
    bestTimeToVisit: 'November to April (whale watching season: Nov - Apr)',
    idealStay: '2 to 4 Days'
  },
  {
    id: 'yala',
    name: 'Yala',
    subtitle: 'Wilderness Safaris & Leopard Territory',
    region: 'Wildlife & Nature',
    image: yalaImg,
    description: 'Sri Lanka’s most renowned wildlife reserve, spanning coastal dunes, scrub jungle, and lagoons. Yala is celebrated for having one of the world’s highest concentrations of leopards, as well as elephants, sloth bears, and saltwater crocodiles.',
    attractions: [
      'Open 4x4 safari jeep game drives',
      'Sri Lankan leopard and sloth bear tracking',
      'Large herds of wild Asian elephants and spotted deer',
      'Over 215 bird species and coastal salt lagoons'
    ],
    bestTimeToVisit: 'February to July when water levels drop',
    idealStay: '1 to 2 Days'
  },
  {
    id: 'bentota',
    name: 'Bentota',
    subtitle: 'Golden Sand Coast & River Adventures',
    region: 'Southern Coast',
    image: mirissaImg,
    description: 'Sri Lanka’s premier beach haven, where the tranquil Bentota River lagoon meets the warm waves of the Indian Ocean. Famous for wide golden sand beaches, luxury coastal resorts, and river boat safaris.',
    attractions: [
      'Broad golden sands ideal for swimming and sunset walks',
      'Madu Ganga mangrove river safari through 64 islands',
      'Brief Garden designed by Bevis Bawa',
      'Kosgoda Sea Turtle Conservation project'
    ],
    bestTimeToVisit: 'November to April',
    idealStay: '2 to 3 Days'
  },
  {
    id: 'anuradhapura',
    name: 'Anuradhapura',
    subtitle: 'The Sacred Ancient Kingdom & Giant Stupas',
    region: 'Cultural Triangle',
    image: sigiriyaImg,
    description: 'The first ancient royal capital of Sri Lanka, flourishing for over a millennium. Anuradhapura is home to colossal brick stupas, ancient monastic engineering works, and the sacred Sri Maha Bodhi tree, the oldest historically documented tree planted by human hands.',
    attractions: [
      'Jaya Sri Maha Bodhi sacred fig tree (over 2,300 years old)',
      'Ruwanwelisaya and Jetavanaramaya colossal stupas',
      'Twin Ponds (Kuttam Pokuna) ancient hydraulic engineering',
      'Isurumuniya rock carving temple'
    ],
    bestTimeToVisit: 'May to September and December to February',
    idealStay: '1 to 2 Days'
  }
];
