import Link from 'next/link';
import { collections, products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductImage } from '@/components/ProductImage';

const editorialTiles = [
  {
    title: 'New Arrivals',
    cn: '新品系列',
    copy: 'Moonlight, jade and cloud motifs reimagined for modern gifting.',
    href: '/new-arrivals',
    tone: 'jade' as const
  },
  {
    title: 'Necklaces',
    cn: '锁骨链与项链',
    copy: 'Large visual focus, minimal words, refined everyday sparkle.',
    href: '/necklaces',
    tone: 'gold' as const
  },
  {
    title: 'Gift Selection',
    cn: '礼物精选',
    copy: 'Gift box, card and cultural story included for each piece.',
    href: '/gifts',
    tone: 'pearl' as const
  }
];

export default function HomePage() {
  const newArrivals = products.filter((product) => product.label === 'New').slice(0, 4);
  const bestSellers = products.filter((product) => product.label === 'Bestseller').slice(0, 4);

  return (
    <main>
      <section className="luxury-hero" aria-label="LUNASSA campaign hero">
        <div className="luxury-hero-image" />
        <div className="luxury-hero-overlay" />
        <div className="luxury-hero-content">
          <p className="hero-kicker">LUNASSA HIGH JEWELRY · Oriental Moonlight Jewelry</p>
          <h1>Moonlit Jade</h1>
          <p>Chinese cultural elegance, refined for women around the world.</p>
          <div className="luxury-hero-actions">
            <Link className="hero-white-button" href="/new-arrivals">Discover the Creations</Link>
            <Link className="hero-line-button" href="/story">Discover the Collection</Link>
          </div>
        </div>
      </section>

      <section className="luxury-intro">
        <p className="eyebrow">Cultural jewelry for global women</p>
        <h2>nspired by the ebb and flow of moonlight, Lunassa captures the ever-changing interplay of light and shadow, creating timeless elegance. </h2>
        <p>
          In a state of dynamic transformation, Lunassa’s creative masterpieces embody innovative craftsmanship and superior materials.
        </p>
      </section>

      <section className="editorial-row" aria-label="Featured entrances">
        {editorialTiles.map((tile) => (
          <Link key={tile.title} href={tile.href} className="editorial-tile">
            <ProductImage tone={tile.tone} label={tile.title} />
            <div>
              <p>{tile.cn}</p>
              <h2>{tile.title}</h2>
              <span>{tile.copy}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="section-block luxury-product-section">
        <div className="section-heading centered">
          <p className="eyebrow">New season</p>
          <h2>新品系列</h2>
          <p>以东方月色、玉石、云纹与花叶意象为灵感，适合日常、送礼与轻正式场景。</p>
        </div>
        <div className="product-grid four-grid">
          {newArrivals.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="center-action">
          <Link className="outline-button" href="/new-arrivals">View All New Arrivals</Link>
        </div>
      </section>

      <section className="full-bleed-story">
        <div className="story-campaign-image" />
        <div className="story-campaign-copy">
          <p className="eyebrow">LUNASSA signature</p>
          <h2>Green Stone Collection</h2>
          <p>
            温润绿意与细密锆石光泽结合，把“玉”的东方含蓄转化为海外消费者也容易理解的现代珠宝语言。
          </p>
          <Link className="hero-white-button dark-text" href="/bracelets">Shop the Collection</Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading centered">
          <p className="eyebrow">Collections</p>
          <h2>品牌系列入口</h2>
          <p>用系列故事提升品牌质感，而不是一上来堆满折扣信息。</p>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <Link key={collection.title} href={collection.href} className="collection-card">
              <ProductImage tone={collection.tone} label={collection.title} />
              <div>
                <p>{collection.cnTitle}</p>
                <h3>{collection.title}</h3>
                <span>{collection.copy}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-strip luxury-brand-strip">
        <div>
          <p className="eyebrow">Brand story</p>
          <h2>把东方文化，做成日常可以佩戴的轻奢珠宝</h2>
        </div>
        <p>LUNASSA 提取“月、玉、云、水纹、竹、莲”等东方意象，转化成更适合海外消费者理解和佩戴的现代珠宝语言。</p>
        <Link className="outline-button" href="/story">Read More</Link>
      </section>

      <section className="section-block luxury-product-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Loved pieces</p>
            <h2>Best Sellers</h2>
          </div>
          <Link href="/gifts">Gift-ready picks</Link>
        </div>
        <div className="product-grid four-grid">
          {bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="scenario-section luxury-scenarios">
        <div className="scenario-card">
          <p className="eyebrow">Gifts for Her</p>
          <h3>送女友 / Birthday Gift</h3>
          <p>Gift box, greeting card and gentle cultural storytelling included.</p>
          <Link href="/gifts">Shop gifts</Link>
        </div>
        <div className="scenario-card">
          <p className="eyebrow">Everyday Necklace</p>
          <h3>通勤佩戴 / Everyday Luxury</h3>
          <p>Clean silhouettes for shirts, knitwear and simple dresses.</p>
          <Link href="/necklaces">Shop necklaces</Link>
        </div>
        <div className="scenario-card">
          <p className="eyebrow">Date Styling</p>
          <h3>约会穿搭 / Soft Sparkle</h3>
          <p>Jade tones, pearl light and restrained zircon shine.</p>
          <Link href="/earrings">Shop earrings</Link>
        </div>
      </section>

      <section className="consultation-cta luxury-consultation">
        <div>
          <p className="eyebrow">Private consultation</p>
          <h2>Need help choosing a gift?</h2>
          <p>Book a styling consultation or contact us by WhatsApp before checkout.</p>
        </div>
        <div className="cta-actions">
          <Link className="primary-button" href="/appointment">预约咨询</Link>
          <Link className="outline-button" href="/contact">WhatsApp Us</Link>
        </div>
      </section>
    </main>
  );
}
