import sigiriyaImg from '@/src/assets/images/hero_sri_lanka_sigiriya_1791891442755.jpg';
import ellaImg from '@/src/assets/images/hill_country_ella_train_1791891443654.jpg';
import mirissaImg from '@/src/assets/images/southern_coast_mirissa_1791891444035.jpg';
import yalaImg from '@/src/assets/images/wildlife_yala_safari_1791891444735.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Mountains & Tea' | 'Cultural Landmarks' | 'Beaches' | 'Wildlife & Safari' | 'Scenic Journeys';
  location: string;
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Sunrise over Sigiriya Lion Rock',
    category: 'Cultural Landmarks',
    location: 'Sigiriya, Matale District',
    image: sigiriyaImg,
    caption: 'Golden dawn mist rising above the royal 5th-century palace citadel and ancient water gardens.'
  },
  {
    id: 'g-2',
    title: 'Historic Nine Arch Bridge in Ella',
    category: 'Scenic Journeys',
    location: 'Ella, Badulla District',
    image: ellaImg,
    caption: 'The colonial stone viaduct nestled in emerald green Ceylon tea hills as the mountain train passes by.'
  },
  {
    id: 'g-3',
    title: 'Golden Coconut Beach Sanctuary',
    category: 'Beaches',
    location: 'Mirissa, Southern Province',
    image: mirissaImg,
    caption: 'Curved tropical shoreline with swaying coconut palms and turquoise Indian Ocean waves.'
  },
  {
    id: 'g-4',
    title: 'Sri Lankan Leopard on Granite Rock',
    category: 'Wildlife & Safari',
    location: 'Yala National Park, Block 1',
    image: yalaImg,
    caption: 'An elusive Sri Lankan leopard (Panthera pardus kotiya) resting quietly on sunlit granite.'
  },
  {
    id: 'g-5',
    title: 'Misty Ceylon Tea Terraces',
    category: 'Mountains & Tea',
    location: 'Nuwara Eliya Highlands',
    image: ellaImg,
    caption: 'Endless velvet green tea plantations shrouded in cool morning mountain mist.'
  },
  {
    id: 'g-6',
    title: 'Ancient Heritage of the Cultural Triangle',
    category: 'Cultural Landmarks',
    location: 'Dambulla & Sigiriya',
    image: sigiriyaImg,
    caption: 'Centuries of royal Sinhala architecture harmonized with pristine tropical nature.'
  },
  {
    id: 'g-7',
    title: 'Southern Sunset Over the Ocean',
    category: 'Beaches',
    location: 'Weligama & Galle Coast',
    image: mirissaImg,
    caption: 'Warm coastal glow over golden sand beaches and peaceful fishing outriggers.'
  },
  {
    id: 'g-8',
    title: 'Highland Mountain Railway',
    category: 'Scenic Journeys',
    location: 'Kandy to Ella Mountain Line',
    image: ellaImg,
    caption: 'Widely praised as one of the most scenic passenger train journeys in the world.'
  }
];
