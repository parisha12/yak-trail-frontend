import ebc from '../assets/images/everest_base_camp.jpg';
import annapurna from '../assets/images/annapurna_circuit.jpg';
import langtang from '../assets/images/langtang_valley.jpg';
import manaslu from '../assets/images/manaslu_trek.jpg';
export const treks = [
  {
    slug: 'everest-base-camp',
    name: 'Everest Base Camp',
    region: 'Everest',
    difficulty: 'Challenging',
    days: 14,
    altitude: '5,364m',
    price: 1250,
    image: ebc,
    summary:
      'Walk beneath the world’s highest peaks through legendary Sherpa country.',
    season: 'Mar–May, Sep–Nov',
  },
  {
    slug: 'annapurna-circuit',
    name: 'Annapurna Circuit',
    region: 'Annapurna',
    difficulty: 'Moderate',
    days: 16,
    altitude: '5,416m',
    price: 1150,
    image: annapurna,
    summary: 'Cross Thorong La on Nepal’s most varied high-mountain trail.',
    season: 'Mar–May, Oct–Dec',
  },
  {
    slug: 'langtang-valley',
    name: 'Langtang Valley',
    region: 'Langtang',
    difficulty: 'Moderate',
    days: 9,
    altitude: '4,984m',
    price: 660,
    image: langtang,
    summary: 'A soulful valley trek rich in Tamang culture and glacier views.',
    season: 'Feb–May, Sep–Dec',
  },
  {
    slug: 'manaslu-circuit',
    name: 'Manaslu Circuit',
    region: 'Manaslu',
    difficulty: 'Challenging',
    days: 17,
    altitude: '5,106m',
    price: 1380,
    image: manaslu,
    summary:
      'Remote villages, wild valleys and the dramatic Larkya La crossing.',
    season: 'Mar–May, Sep–Nov',
  },
];
export const getTrek = (slug) => treks.find((t) => t.slug === slug);
