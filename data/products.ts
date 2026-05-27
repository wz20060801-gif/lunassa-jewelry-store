export type ProductLabel = 'New' | 'Bestseller' | 'Gift Pick' | 'Limited';
export type ProductCategory = 'necklaces' | 'bracelets' | 'rings' | 'earrings';
export type ProductScene = 'gift' | 'birthday' | 'commute' | 'date' | 'ceremony';
export type ProductSeries = 'self-tide' | 'earth-bound' | 'signature';

export type Product = {
  id: string;
  slug: string;
  name: string;
  cnName: string;
  category: ProductCategory;
  collection: string;
  series?: ProductSeries;
  material: string;
  color: string;
  scene: ProductScene[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  label: ProductLabel;
  imageTone: 'jade' | 'pearl' | 'gold' | 'onyx' | 'rose' | 'silver';
  images?: string[];
  short: string;
  story: string;
  specs: {
    material: string;
    color: string;
    length: string;
    crowd: string;
    packaging: string;
    service: string;
  };
};

export const categoryMeta: Record<ProductCategory | 'new-arrivals' | 'gifts', {
  title: string;
  cnTitle: string;
  intro: string;
  seo: string;
}> = {
  'new-arrivals': {
    title: 'New product',
    cnTitle: '新品系列',
    intro: 'Five new LUNASSA creations inspired by tide, moonlight, jade and grounded oriental elegance.',
    seo: 'Explore LUNASSA New product selections: necklaces and bracelets with high-end product photography, gift-ready packaging and Chinese cultural inspiration.'
  },
  necklaces: {
    title: 'Necklace',
    cnTitle: '项链',
    intro: 'Four necklace designs shaped by moonlit blue stones, green jade tones and refined silver settings.',
    seo: 'LUNASSA Necklace designs combine silver settings, blue and green stones, zircon halos and cultural symbolism for daily luxury and gifting.'
  },
  bracelets: {
    title: 'Bracelet',
    cnTitle: '手链',
    intro: 'A refined bracelet with an oval blue stone and sparkling zircon links.',
    seo: 'LUNASSA Bracelet selection focuses on a luminous blue stone bracelet with adjustable comfort and gift-ready presentation.'
  },
  rings: {
    title: 'Ring',
    cnTitle: '戒指',
    intro: 'Ring products are coming soon. Explore necklaces and bracelets while the ring collection is being prepared.',
    seo: 'LUNASSA Ring collection is coming soon, continuing the brand language of moonlight, jade, culture and refined everyday styling.'
  },
  earrings: {
    title: 'Earrings',
    cnTitle: '耳饰',
    intro: 'Earrings are coming soon. Discover LUNASSA necklaces, bracelets and selected gifts first.',
    seo: 'LUNASSA Earrings will expand the brand catalogue with lightweight cultural jewelry for global women.'
  },
  gifts: {
    title: 'Selected Gifts',
    cnTitle: '礼物精选',
    intro: 'Five gift-ready pieces with premium packaging, cultural story cards and elegant everyday styling.',
    seo: 'LUNASSA Selected Gifts includes five jewelry pieces suitable for birthdays, anniversaries, romantic gifts and refined daily wear.'
  }
};

export const products: Product[] = [
  {
    id: 'LUN-NE-101',
    slug: 'moonlit-blue-halo-necklace',
    name: 'Moonlit Blue Halo Necklace',
    cnName: '「Ocean Heartbeat」 Necklace',
    category: 'necklaces',
    collection: 'THE SELF-TIDE COLLECTION',
    series: 'self-tide',
    material: 'Silver alloy / zircon / simulated blue moonstone',
    color: 'Silver white + moonlit blue',
    scene: ['gift', 'birthday', 'date'],
    price: 89.9,
    originalPrice: 199.9,
    rating: 4.9,
    reviewCount: 168,
    label: 'New',
    imageTone: 'silver',
images: [
  '/images/products/azure-halo-bracelet-1.jpeg',
  '/images/products/azure-halo-bracelet-2.jpeg'
],
    short: 'A luminous blue centre stone framed by sparkling zircon, created for refined everyday elegance.',
    story: 'You don`t need to borrow anyone else`s light. Designed to sit right above your heart, the Ocean Heartbeat necklace is a visual rebellion against self-doubt and the pressure to perform.',
    
    specs: {
      material: 'Eco-friendly silver alloy, zircon, simulated blue moonstone',
      color: 'Silver white and moonlit blue',
      length: '40 + 5 cm extension chain',
      crowd: 'Women / birthday gift / date styling',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-BR-101',
    slug: 'azure-halo-bracelet',
    name: 'Azure Halo Bracelet',
    cnName: ' 「Serene Tide」 Bracelet',
    category: 'bracelets',
    collection: 'THE SELF-TIDE COLLECTION',
    series: 'self-tide',
    material: 'Silver alloy / zircon / simulated blue jade',
    color: 'Silver white + azure blue',
    scene: ['gift', 'commute', 'date'],
    price: 92.9,
    originalPrice: 189.9,
    rating: 4.8,
    reviewCount: 126,
    label: 'New',
    imageTone: 'silver',
    images: [
  '/images/products/azure-halo-bracelet-3.jpeg',
  '/images/products/azure-halo-bracelet-4.jpeg'
],
    short: 'An oval blue stone bracelet with delicate zircon links and a graceful polished finish.',
    story: 'In a world that never stops talking, your silence can do the screaming.The Serene Tide bracelet is a love letter to the woman who has a storm of ambition inside her, but chooses to hold it in a nest of calm.',
    specs: {
      material: 'Eco-friendly silver alloy, zircon, simulated blue jade',
      color: 'Silver white and azure blue',
      length: '16–20 cm adjustable',
      crowd: 'Women / gifts / daily commute',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-NE-102',
    slug: 'blue-cloud-tablet-necklace',
    name: 'Blue Cloud Tablet Necklace',
    cnName: '「Stepping Stones」 Necklace',
    category: 'necklaces',
    collection: 'THE SELF-TIDE COLLECTION',
    series: 'signature',
    material: 'Silver alloy / zircon / blue cabochon stones',
    color: 'Silver white + ice blue',
    scene: ['gift', 'birthday', 'ceremony'],
    price: 92.9,
    originalPrice: 86.9,
    rating: 4.8,
    reviewCount: 94,
    label: 'Limited',
    imageTone: 'silver',
    images: [
      '/images/products/blue-cloud-tablet-necklace-1.jpeg',
      '/images/products/blue-cloud-tablet-necklace-2.jpeg',
      '/images/products/blue-cloud-tablet-necklace-3.jpeg'
    ],
    short: 'A rectangular pendant with nine soft blue stones and a brilliant zircon border.',
    story: 'Society loves to frame your life into neat little boxes. The Stepping Stones necklace is an answer to that pressure: You are not trapped by the box; you are the masterpiece inside it.',
    specs: {
      material: 'Silver alloy, zircon, blue cabochon stones',
      color: 'Silver white and ice blue',
      length: '42 + 5 cm extension chain',
      crowd: 'Women / statement gift / ceremony',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-NE-103',
    slug: 'earth-clover-jade-necklace',
    name: 'Earth Clover Jade Necklace',
    cnName: '「Grounded Bloom」 Necklace',
    category: 'necklaces',
    collection: 'THE EARTH-BOUND COLLECTION',
    series: 'earth-bound',
    material: 'Silver alloy / zircon / simulated green jade',
    color: 'Silver white + soft jade green',
    scene: ['gift', 'birthday', 'commute'],
    price: 98.9,
    originalPrice: 186.9,
    rating: 4.9,
    reviewCount: 151,
    label: 'Bestseller',
    imageTone: 'jade',
    images: [
      '/images/products/earth-clover-necklace-1.jpeg',
      '/images/products/earth-clover-necklace-2.jpeg',
      '/images/products/earth-clover-necklace-3.jpeg'
    ],
    short: 'A four-petal green jade-inspired pendant with a sparkling centre zircon.',
    story: 'Sculpted from four cabochons of sage-green Jade—the color of new leaves catching the dawn. It carries the raw, soothing energy of the earth, centered by a single sparkling spark.',
    specs: {
      material: 'Eco-friendly silver alloy, zircon, simulated green jade',
      color: 'Silver white and soft jade green',
      length: '40 + 5 cm extension chain',
      crowd: 'Women / girlfriend gift / daily wear',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-NE-104',
    slug: 'green-gourd-jade-necklace',
    name: 'Green Gourd Jade Necklace',
    cnName: '「Infinite Becoming」 Necklace',
    category: 'necklaces',
    collection: 'THE EARTH-BOUND COLLECTION',
    series: 'earth-bound',
    material: 'Silver alloy / zircon / simulated green jade',
    color: 'Silver white + deep jade green',
    scene: ['gift', 'date', 'ceremony'],
    price: 95.9,
    originalPrice: 189.9,
    rating: 4.9,
    reviewCount: 118,
    label: 'Gift Pick',
    imageTone: 'jade',
    images: [
      '/images/products/green-gourd-jade-necklace-1.jpeg',
      '/images/products/green-gourd-jade-necklace-2.jpeg',
      '/images/products/green-gourd-jade-necklace-3.jpeg'
    ],
short: 'A sculptural gourd-shaped pendant with deep green jade tone and refined zircon sparkle.',
story: "You are not a vessel to be filled by society's standards. You are the river that carves its own valley. The Infinite Becoming necklace celebrates the beauty of a woman who refuses to be finished.",
specs: {
  material: 'Eco-friendly silver alloy, zircon, simulated green jade',
  color: 'Silver white and deep jade green',
  length: '42 + 5 cm extension chain',
  crowd: 'Women / meaningful gift / date styling',
  packaging: 'LUNASSA gift box, polishing cloth, greeting card',
  service: '7-day return and exchange, 30-day warranty'
}
  }
];

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'New product', href: '/new-arrivals' },
  { label: 'Necklace', href: '/necklaces' },
  { label: 'Bracelet', href: '/bracelets' },
  { label: 'Ring', href: '/rings' },
  { label: 'Earrings', href: '/earrings' },
  {
    label: 'series',
    href: '/series',
    children: [
      { label: 'THE SELF-TIDE COLLECTION', href: '/series/self-tide' },
      { label: 'THE EARTH-BOUND COLLECTION', href: '/series/earth-bound' }
    ]
  },
  { label: 'Selected Gifts', href: '/gifts' },
  { label: 'Brand Story', href: '/story' },
  { label: 'Contact Us', href: '/contact' }
];

export const collections = [
  {
    title: 'THE SELF-TIDE COLLECTION',
    cnTitle: '自潮系列',
    href: '/series/self-tide',
    copy: 'Moonlit blue stones shaped by tide, self-expression and flowing silver light.',
    tone: 'silver'
  },
  {
    title: 'THE EARTH-BOUND COLLECTION',
    cnTitle: '归地系列',
    href: '/series/earth-bound',
    copy: 'Grounded green jade tones inspired by blessing, growth and cultural warmth.',
    tone: 'jade'
  },
  {
    title: 'Blue Cloud Tablet',
    cnTitle: '冰蓝方牌',
    href: '/products/blue-cloud-tablet-necklace',
    copy: 'A precise statement pendant with soft blue cabochons and zircon light.',
    tone: 'silver'
  },
  {
    title: 'Selected Gifts',
    cnTitle: '礼物精选',
    href: '/gifts',
    copy: 'Gift-ready pieces with box, cloth and greeting card.',
    tone: 'rose'
  }
] as const;

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((product) => product.category === category);
}

export function getGiftProducts() {
  return products.filter((product) => product.scene.includes('gift') || product.label === 'Gift Pick');
}

export function getNewProducts() {
  return products.filter((product) => product.label === 'New' || product.label === 'Limited' || product.label === 'Bestseller' || product.label === 'Gift Pick');
}

export function getProductsBySeries(series: ProductSeries) {
  return products.filter((product) => product.series === series);
}
