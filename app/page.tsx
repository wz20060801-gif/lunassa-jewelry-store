import Link from 'next/link';
import { collections, products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductImage } from '@/components/ProductImage';

export default function HomePage() {
  const newArrivals = products.filter((product) => product.label === 'New').slice(0, 4);
  const bestSellers = products.filter((product) => product.label === 'Bestseller').slice(0, 4);

  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">LUNASSA · Cultural jewelry for global women</p>
          <h1>Elegance in Every Detail</h1>
          <p>Light luxury jewelry inspired by moonlight, jade, cloud patterns and the quiet poetry of Chinese aesthetics.</p>
          <div className="hero-actions">
            <Link className="primary-button" href="/new-arrivals">Shop New Arrivals</Link>
            <Link className="outline-button" href="/story">Discover Our Story</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="model-card">
            <ProductImage tone="jade" label="Replace with model wearing necklace" large />
          </div>
          <div className="hero-note">
            <span>Green Stone Collection</span>
            <strong>温润绿意 · Modern jade mood</strong>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">New season</p>
          <h2>新品系列</h2>
          <Link href="/new-arrivals">View all</Link>
        </div>
        <div className="product-grid four-grid">
          {newArrivals.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading centered">
          <p className="eyebrow">Signature routes</p>
          <h2>品牌系列入口</h2>
          <p>先建立高级感，再进入系列、商品、预约咨询与客服路径。</p>
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

      <section className="brand-strip">
        <div>
          <p className="eyebrow">Brand story</p>
          <h2>把东方文化，做成日常可以佩戴的轻奢珠宝</h2>
        </div>
        <p>LUNASSA 不是把传统符号直接堆在商品上，而是提取“月、玉、云、水纹、竹、莲”等东方意象，转化成更适合海外消费者理解和佩戴的现代珠宝语言。</p>
        <Link className="outline-button" href="/story">Read More</Link>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Loved pieces</p>
          <h2>Best Sellers</h2>
          <Link href="/gifts">Gift-ready picks</Link>
        </div>
        <div className="product-grid four-grid">
          {bestSellers.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="section-block scenario-section">
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

      <section className="consultation-cta">
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
