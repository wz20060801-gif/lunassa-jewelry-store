import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatPrice, getProductBySlug, products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetailActions } from '@/components/ProductDetailActions';
import { ProductImage } from '@/components/ProductImage';

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | LUNASSA`,
    description: product.short
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  return (
    <main>
      <section className="product-detail-layout">
        <div className="detail-gallery">
          <ProductImage product={product} large imageIndex={0} />
          <div className="thumb-row">
            <ProductImage product={product} label="Front" imageIndex={0} />
            <ProductImage product={product} label="Detail" imageIndex={1} />
            <ProductImage product={product} label="Worn" imageIndex={2} />
          </div>
        </div>
        <div className="detail-info">
          <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href={`/${product.category}`}>{product.category}</Link> / <span>{product.name}</span></div>
          <span className={`product-label label-${product.label.toLowerCase().replaceAll(' ', '-')}`}>{product.label}</span>
          <h1>{product.name}</h1>
          <p className="cn-title">{product.cnName}</p>
          <div className="detail-rating">★★★★★ <span>{product.rating.toFixed(1)} · {product.reviewCount} reviews</span></div>
          <div className="detail-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.originalPrice)}</del></div>
          <p className="detail-short">{product.short}</p>
          <ProductDetailActions product={product} />
          <div className="service-badges">
            <span>Gift box included</span>
            <span>7-day returns</span>
            <span>30-day warranty</span>
          </div>
          <div className="detail-panel">
            <h2>Product Details</h2>
            <dl>
              <div><dt>Material</dt><dd>{product.specs.material}</dd></div>
              <div><dt>Color</dt><dd>{product.specs.color}</dd></div>
              <div><dt>Length / Size</dt><dd>{product.specs.length}</dd></div>
              <div><dt>Suitable for</dt><dd>{product.specs.crowd}</dd></div>
              <div><dt>Packaging</dt><dd>{product.specs.packaging}</dd></div>
              <div><dt>After-sales</dt><dd>{product.specs.service}</dd></div>
            </dl>
          </div>
          <div className="detail-panel story-panel">
            <h2>Design Story</h2>
            <p>{product.story}</p>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Reviews</p>
          <h2>What customers say</h2>
        </div>
        <div className="review-grid">
          <article><strong>★★★★★</strong><p>“The packaging feels premium and the stone looks very elegant in daylight.”</p><span>— Amelia, Singapore</span></article>
          <article><strong>★★★★★</strong><p>“Bought it as a birthday gift. The cultural story card made it feel more meaningful.”</p><span>— Chloe, Canada</span></article>
          <article><strong>★★★★☆</strong><p>“Easy to match with work outfits. I like that it is not too flashy.”</p><span>— Mia, Australia</span></article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-block">
          <div className="section-heading">
            <p className="eyebrow">Recommended</p>
            <h2>You may also like</h2>
          </div>
          <div className="product-grid four-grid">
            {related.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </section>
      )}
    </main>
  );
}
