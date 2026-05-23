import Link from 'next/link';
import { collections, products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductImage } from '@/components/ProductImage';

const editorialTiles = [
  {
    title: 'New product',
    cn: '新品系列',
    copy: 'Five new creations inspired by moonlight, water, jade and cultural elegance.',
    href: '/new-arrivals',
    tone: 'silver' as const
  },
  {
    title: 'Necklace',
    cn: '项链',
    copy: 'Four refined necklaces with blue and green stone signatures.',
    href: '/necklaces',
    tone: 'jade' as const
  },
  {
    title: 'Selected Gifts',
    cn: '礼物精选',
    copy: 'Gift-ready pieces with box, card and cultural story included.',
    href: '/gifts',
    tone: 'pearl' as const
  }
];

export default function HomePage() {
  const newArrivals = products.slice(0, 5);
  const bestSellers = products.filter((product) => product.label === 'Bestseller' || product.label === 'Gift Pick').slice(0, 4);

  return (
    <main>
      <section className="luxury-hero" aria-label="LUNASSA campaign hero">
        <div className="luxury-hero-image" />
        <div className="luxury-hero-overlay" />
        <div className="luxury-hero-content">
          <p className="hero-kicker">LUNASSA HIGH JEWELRY · 东方月色珠宝</p>
          <h1>Moonlit Jade</h1>
          <p>Chinese cultural elegance, refined for women around the world.</p>
          <div className="luxury-hero-actions">
            <Link className="hero-white-button" href="/new-arrivals">Discover the Creations</Link>
            <Link className="hero-line-button" href="/series/self-tide">Discover the Collection</Link>
          </div>
        </div>
      </section>

      <section className="luxury-intro">
        <p className="eyebrow">Cultural jewelry for global women</p>
        <h2>Inspired by the ebb and flow of moonlight, LUNASSA captures the interplay of light, jade and refined cultural elegance.</h2>
        <p>
          In a state of dynamic transformation, LUNASSA’s creations embody modern craftsmanship, superior materials and a slow luxury rhythm.
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
          <h2>New product</h2>
          <p>Five carefully selected LUNASSA creations for global women, gift giving and everyday elegance.</p>
        </div>
        <div className="product-grid five-grid">
          {newArrivals.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="center-action">
          <Link className="outline-button" href="/new-arrivals">View All New product</Link>
        </div>
      </section>

      <section className="full-bleed-story">
        <div className="story-campaign-image" />
        <div className="story-campaign-copy">
          <p className="eyebrow">LUNASSA signature</p>
          <h2>THE SELF-TIDE COLLECTION</h2>
          <p>
            Moonlit blue stones, silver settings and quiet tide-like movement create a modern series for women who define elegance in their own rhythm.
          </p>
          <Link className="hero-white-button dark-text" href="/series/self-tide">Shop the Collection</Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading centered">
          <p className="eyebrow">series</p>
          <h2>Brand collections</h2>
          <p>Two cultural jewelry series with distinct visual atmospheres: fluid blue self-expression and grounded green blessing.</p>
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
        <p>LUNASSA 提取“月、玉、水、祝福”等东方意象，转化成更适合海外消费者理解和佩戴的现代珠宝语言。</p>
        <Link className="outline-button" href="/story">Read More</Link>
      </section>

      {bestSellers.length > 0 && (
        <section className="section-block luxury-product-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Loved pieces</p>
              <h2>Selected Gifts</h2>
            </div>
            <Link href="/gifts">Gift-ready picks</Link>
          </div>
          <div className="product-grid four-grid">
            {bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
      )}

      <section className="scenario-section luxury-scenarios">
        <div className="scenario-card">
          <p className="eyebrow">Gifts for Her</p>
          <h3>Birthday Gift</h3>
          <p>Gift box, greeting card and gentle cultural storytelling included.</p>
          <Link href="/gifts">Shop gifts</Link>
        </div>
        <div className="scenario-card">
          <p className="eyebrow">Everyday Necklace</p>
          <h3>Everyday Luxury</h3>
          <p>Clean silhouettes for shirts, knitwear and simple dresses.</p>
          <Link href="/necklaces">Shop necklaces</Link>
        </div>
        <div className="scenario-card">
          <p className="eyebrow">series</p>
          <h3>Self-Tide / Earth-Bound</h3>
          <p>Choose between aquatic blue confidence and grounded jade blessing.</p>
          <Link href="/series">Explore series</Link>
        </div>
      </section>

      <section className="consultation-cta luxury-consultation">
        <div>
          <p className="eyebrow">Private consultation</p>
          <h2>Need help choosing a gift?</h2>
          <p>Contact us by WhatsApp, Emile or Instagram before checkout.</p>
        </div>
        <div className="cta-actions">
          <Link className="primary-button" href="/contact">Contact Us</Link>
          <Link className="outline-button" href="/gifts">Selected Gifts</Link>
        </div>
      </section>
    </main>
  );
}
