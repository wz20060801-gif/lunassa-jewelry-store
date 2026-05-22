export type ProductLabel = 'New' | 'Bestseller' | 'Gift Pick' | 'Limited';
export type ProductCategory = 'necklaces' | 'bracelets' | 'rings' | 'earrings';
export type ProductScene = 'gift' | 'birthday' | 'commute' | 'date' | 'ceremony';

export type Product = {
  id: string;
  slug: string;
  name: string;
  cnName: string;
  category: ProductCategory;
  collection: string;
  material: string;
  color: string;
  scene: ProductScene[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  label: ProductLabel;
  imageTone: 'jade' | 'pearl' | 'gold' | 'onyx' | 'rose' | 'silver';
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
    title: 'New Arrivals',
    cnTitle: '新品系列',
    intro: 'Fresh silhouettes inspired by moonlight, jade, cloud patterns and everyday elegance.',
    seo: 'LUNASSA New Arrivals brings together light luxury jewelry inspired by Chinese aesthetics, designed for women who want refined details for work, gifting and evening styling.'
  },
  necklaces: {
    title: 'Necklaces',
    cnTitle: '项链',
    intro: 'Delicate collarbone pieces with jade-green stones, pearls and sculptural metal details.',
    seo: 'Explore LUNASSA necklaces, including clover pendants, pearl necklaces and jade-inspired collarbone chains for daily wear and meaningful gifts.'
  },
  bracelets: {
    title: 'Bracelets',
    cnTitle: '手链',
    intro: 'Adjustable bracelets balancing fine sparkle and calm oriental tones.',
    seo: 'LUNASSA bracelets are created for refined everyday styling, combining zircon shine, jade-inspired colors and adjustable comfort.'
  },
  rings: {
    title: 'Rings',
    cnTitle: '戒指',
    intro: 'Minimal statement rings with moon, jade and ripple motifs.',
    seo: 'Discover LUNASSA rings with elegant lines, symbolic Chinese-inspired forms and gift-ready packaging.'
  },
  earrings: {
    title: 'Earrings',
    cnTitle: '耳饰',
    intro: 'Pearl drops, jade studs and lightweight earrings for polished looks.',
    seo: 'LUNASSA earrings feature pearl, zircon and jade-green details for commuting, dating and special occasions.'
  },
  gifts: {
    title: 'Gift Selection',
    cnTitle: '礼物精选',
    intro: 'Gift-ready jewelry for birthdays, anniversaries, graduation and romantic moments.',
    seo: 'Find meaningful jewelry gifts from LUNASSA, with elegant packaging, greeting cards and culturally inspired design stories.'
  }
};

export const products: Product[] = [
  {
    id: 'LUN-BR-001',
    slug: 'oval-green-jade-bracelet',
    name: 'Oval Green Jade Bracelet',
    cnName: '椭圆绿玉髓镶钻手链',
    category: 'bracelets',
    collection: 'Green Stone Collection',
    material: 'Silver alloy / zircon / simulated green jade',
    color: 'Silver white + light jade green',
    scene: ['gift', 'commute', 'date'],
    price: 39.9,
    originalPrice: 59.9,
    rating: 4.8,
    reviewCount: 128,
    label: 'New',
    imageTone: 'jade',
    short: 'Elegant green stone, sparkling zircon, adjustable bracelet for everyday luxury.',
    story: 'Inspired by the smooth shape of jade pendants and the soft reflection of moonlight on water, this bracelet creates a quiet but memorable focal point.',
    specs: {
      material: 'Eco-friendly alloy, zircon, simulated green jade',
      color: 'Silver white and light jade green',
      length: '16–20 cm adjustable',
      crowd: 'Women / gifts / daily commute',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-NE-001',
    slug: 'clover-jade-necklace',
    name: 'Clover Jade Necklace',
    cnName: '浅绿四叶草锁骨链',
    category: 'necklaces',
    collection: 'Clover Collection',
    material: '18K gold-plated alloy / zircon / green stone',
    color: 'Champagne gold + jade green',
    scene: ['gift', 'birthday', 'date'],
    price: 45.9,
    originalPrice: 69.9,
    rating: 4.9,
    reviewCount: 203,
    label: 'Bestseller',
    imageTone: 'gold',
    short: 'A lucky clover pendant with luminous green texture and refined gold details.',
    story: 'The clover shape echoes the blessing symbol in modern jewelry, while its green stone texture speaks to Chinese jade culture and graceful daily rituals.',
    specs: {
      material: '18K gold-plated alloy, zircon, simulated green jade',
      color: 'Champagne gold and jade green',
      length: '40 + 5 cm extension chain',
      crowd: 'Women / birthday gift / date styling',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-EA-001',
    slug: 'pearl-cloud-drop-earrings',
    name: 'Pearl Cloud Drop Earrings',
    cnName: '云纹珍珠耳坠',
    category: 'earrings',
    collection: 'Pearl Collection',
    material: 'Freshwater-style pearl / gold-plated alloy',
    color: 'Pearl white + champagne gold',
    scene: ['ceremony', 'date', 'gift'],
    price: 42.9,
    originalPrice: 62.9,
    rating: 4.7,
    reviewCount: 89,
    label: 'Gift Pick',
    imageTone: 'pearl',
    short: 'Soft pearl movement with cloud-inspired curves for graceful occasions.',
    story: 'The curve is taken from classical cloud motifs, softened for a contemporary earring silhouette that feels elegant rather than overly traditional.',
    specs: {
      material: 'Freshwater-style pearl, gold-plated alloy',
      color: 'Pearl white and champagne gold',
      length: 'Approx. 3.8 cm drop',
      crowd: 'Women / ceremony / elegant dinner',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-RI-001',
    slug: 'moon-ripple-open-ring',
    name: 'Moon Ripple Open Ring',
    cnName: '月影水纹开口戒指',
    category: 'rings',
    collection: 'Moon Ripple Collection',
    material: 'Silver alloy / zircon accents',
    color: 'Polished silver',
    scene: ['commute', 'date'],
    price: 36.9,
    originalPrice: 52.9,
    rating: 4.8,
    reviewCount: 74,
    label: 'New',
    imageTone: 'silver',
    short: 'An adjustable ring shaped by moonlight, ripples and minimalist sparkle.',
    story: 'This open ring translates the poetic idea of “moon reflected in water” into a wearable curve, refined enough for everyday styling.',
    specs: {
      material: 'Eco-friendly alloy, zircon accents',
      color: 'Polished silver',
      length: 'Adjustable open ring, US 6–8 fit',
      crowd: 'Women / office / daily styling',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-NE-002',
    slug: 'bamboo-shadow-necklace',
    name: 'Bamboo Shadow Necklace',
    cnName: '竹影细链项链',
    category: 'necklaces',
    collection: 'Bamboo Shadow Collection',
    material: '18K gold-plated alloy / micro zircon',
    color: 'Champagne gold',
    scene: ['commute', 'gift'],
    price: 48.9,
    originalPrice: 72.9,
    rating: 4.8,
    reviewCount: 96,
    label: 'Limited',
    imageTone: 'gold',
    short: 'A slim pendant inspired by bamboo joints, symbolising quiet strength.',
    story: 'Bamboo stands for resilience and elegance in Chinese culture. This necklace keeps the symbol minimal, suitable for international everyday styling.',
    specs: {
      material: '18K gold-plated alloy, micro zircon',
      color: 'Champagne gold',
      length: '41 + 5 cm extension chain',
      crowd: 'Women / workplace / gift',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-BR-002',
    slug: 'ink-jade-chain-bracelet',
    name: 'Ink Jade Chain Bracelet',
    cnName: '墨玉链条手链',
    category: 'bracelets',
    collection: 'Green Stone Collection',
    material: 'Black enamel / zircon / alloy chain',
    color: 'Ink black + silver',
    scene: ['date', 'commute'],
    price: 41.9,
    originalPrice: 61.9,
    rating: 4.6,
    reviewCount: 67,
    label: 'Bestseller',
    imageTone: 'onyx',
    short: 'A sleek bracelet with ink-inspired contrast and polished chain details.',
    story: 'The black enamel tone references ink wash painting, balanced with a modern chain structure for a sharper urban look.',
    specs: {
      material: 'Black enamel, zircon, eco-friendly alloy chain',
      color: 'Ink black and polished silver',
      length: '15.5–20 cm adjustable',
      crowd: 'Women / neutral styling / daily commute',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-EA-002',
    slug: 'jade-dot-stud-earrings',
    name: 'Jade Dot Stud Earrings',
    cnName: '绿玉圆点耳钉',
    category: 'earrings',
    collection: 'Green Stone Collection',
    material: 'Gold-plated alloy / simulated green jade',
    color: 'Jade green + champagne gold',
    scene: ['gift', 'commute', 'birthday'],
    price: 29.9,
    originalPrice: 45.9,
    rating: 4.7,
    reviewCount: 114,
    label: 'Gift Pick',
    imageTone: 'jade',
    short: 'Small jade-green studs for clean, bright and giftable everyday looks.',
    story: 'A simple circle creates a contemporary interpretation of jade bi discs, making the piece easy to wear with shirts, knitwear and dresses.',
    specs: {
      material: 'Gold-plated alloy, simulated green jade',
      color: 'Jade green and champagne gold',
      length: 'Approx. 0.9 cm diameter',
      crowd: 'Women / entry gift / daily wear',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-RI-002',
    slug: 'lotus-petal-ring',
    name: 'Lotus Petal Ring',
    cnName: '莲瓣开口戒指',
    category: 'rings',
    collection: 'Lotus Collection',
    material: 'Rose gold-plated alloy / zircon',
    color: 'Rose gold',
    scene: ['date', 'gift', 'ceremony'],
    price: 38.9,
    originalPrice: 58.9,
    rating: 4.8,
    reviewCount: 83,
    label: 'New',
    imageTone: 'rose',
    short: 'A feminine open ring with petal curves and understated zircon shimmer.',
    story: 'The lotus petal is simplified into two soft arcs, expressing renewal and calm beauty without becoming too ornate.',
    specs: {
      material: 'Rose gold-plated alloy, zircon',
      color: 'Rose gold',
      length: 'Adjustable open ring, US 6–8 fit',
      crowd: 'Women / romantic gift / occasion styling',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-NE-003',
    slug: 'pearl-moon-necklace',
    name: 'Pearl Moon Necklace',
    cnName: '月光珍珠项链',
    category: 'necklaces',
    collection: 'Pearl Collection',
    material: 'Freshwater-style pearl / silver alloy',
    color: 'Pearl white + silver',
    scene: ['ceremony', 'gift', 'birthday'],
    price: 52.9,
    originalPrice: 79.9,
    rating: 4.9,
    reviewCount: 151,
    label: 'Bestseller',
    imageTone: 'pearl',
    short: 'A luminous pearl piece inspired by moonlight and soft ceremonial moments.',
    story: 'Moonlight is a recurring image in Chinese poetry. This necklace expresses that softness with a pearl centerpiece and a restrained chain.',
    specs: {
      material: 'Freshwater-style pearl, silver alloy',
      color: 'Pearl white and silver',
      length: '39 + 6 cm extension chain',
      crowd: 'Women / ceremony / meaningful gift',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-BR-003',
    slug: 'clover-luck-bracelet',
    name: 'Clover Luck Bracelet',
    cnName: '四叶草幸运手链',
    category: 'bracelets',
    collection: 'Clover Collection',
    material: 'Gold-plated alloy / zircon / green stone',
    color: 'Gold + jade green',
    scene: ['gift', 'birthday', 'date'],
    price: 44.9,
    originalPrice: 66.9,
    rating: 4.8,
    reviewCount: 137,
    label: 'Gift Pick',
    imageTone: 'jade',
    short: 'A lucky clover bracelet with a luminous green centre and refined sparkle.',
    story: 'The clover becomes a cross-cultural symbol of luck, while the jade-green surface gives it a soft Chinese aesthetic signature.',
    specs: {
      material: 'Gold-plated alloy, zircon, simulated green jade',
      color: 'Champagne gold and jade green',
      length: '16–21 cm adjustable',
      crowd: 'Women / girlfriend gift / birthday',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-EA-003',
    slug: 'moon-jade-hoop-earrings',
    name: 'Moon Jade Hoop Earrings',
    cnName: '月环绿玉耳环',
    category: 'earrings',
    collection: 'Moon Ripple Collection',
    material: 'Silver alloy / green stone / zircon',
    color: 'Silver + jade green',
    scene: ['date', 'gift', 'commute'],
    price: 34.9,
    originalPrice: 49.9,
    rating: 4.6,
    reviewCount: 59,
    label: 'Limited',
    imageTone: 'silver',
    short: 'Lightweight hoops with jade-green details, made for polished everyday wear.',
    story: 'A small green stone sits inside a moon-like hoop, bringing a subtle cultural accent to a familiar international earring shape.',
    specs: {
      material: 'Silver alloy, green stone, zircon',
      color: 'Silver and jade green',
      length: 'Approx. 2.1 cm hoop',
      crowd: 'Women / commute / weekend styling',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  },
  {
    id: 'LUN-RI-003',
    slug: 'green-stone-halo-ring',
    name: 'Green Stone Halo Ring',
    cnName: '绿石光环戒指',
    category: 'rings',
    collection: 'Green Stone Collection',
    material: 'Silver alloy / zircon / green stone',
    color: 'Silver + light jade green',
    scene: ['gift', 'date', 'ceremony'],
    price: 46.9,
    originalPrice: 68.9,
    rating: 4.9,
    reviewCount: 112,
    label: 'Bestseller',
    imageTone: 'jade',
    short: 'A green centre stone surrounded by sparkling zircon for refined occasions.',
    story: 'The halo structure gives the jade-inspired centre a brighter appearance, echoing the idea of a treasured stone held by moonlight.',
    specs: {
      material: 'Silver alloy, zircon, simulated green jade',
      color: 'Silver and light jade green',
      length: 'US 6 / 7 / 8 optional',
      crowd: 'Women / gift / elegant occasion',
      packaging: 'LUNASSA gift box, polishing cloth, greeting card',
      service: '7-day return and exchange, 30-day warranty'
    }
  }
];

export const navigation = [
  { label: '首页', href: '/' },
  { label: '新品', href: '/new-arrivals' },
  { label: '项链', href: '/necklaces' },
  { label: '手链', href: '/bracelets' },
  { label: '戒指', href: '/rings' },
  { label: '耳饰', href: '/earrings' },
  { label: '礼物精选', href: '/gifts' },
  { label: '品牌故事', href: '/story' },
  { label: '联系我们', href: '/contact' }
];

export const collections = [
  {
    title: 'Green Stone Collection',
    cnTitle: '绿玉系列',
    href: '/necklaces?collection=Green%20Stone%20Collection',
    copy: 'Jade-inspired tones for calm, luminous daily elegance.',
    tone: 'jade'
  },
  {
    title: 'Clover Collection',
    cnTitle: '四叶草系列',
    href: '/necklaces?collection=Clover%20Collection',
    copy: 'A modern symbol of luck, softness and meaningful gifting.',
    tone: 'gold'
  },
  {
    title: 'Pearl Collection',
    cnTitle: '珍珠系列',
    href: '/necklaces?collection=Pearl%20Collection',
    copy: 'Moonlit pearls for ceremonies, dinners and quiet luxury.',
    tone: 'pearl'
  },
  {
    title: 'Gift Collection',
    cnTitle: '礼物系列',
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
  return products.filter((product) => product.label === 'New' || product.label === 'Limited');
}
