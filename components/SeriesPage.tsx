import Link from 'next/link';
import { getProductsBySeries, type ProductSeries } from '@/data/products';
import { ProductCard } from './ProductCard';

type SeriesPageProps = {
  series: ProductSeries;
  title: string;
  subtitle: string;
  copy: string;
  mood: 'self-tide' | 'earth-bound';
};

export function SeriesPage({ series, title, subtitle, copy, mood }: SeriesPageProps) {
  const items = getProductsBySeries(series);

  return (
    <main className={`series-page ${mood}`}>
      <section className="series-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <Link href="/series">series</Link> / <span>{title}</span></div>
        <p className="eyebrow">LUNASSA series</p>
        <h1>{title}</h1>
        <p className="cn-title">{subtitle}</p>
        <p>{copy}</p>
      </section>

      <section className="series-products">
        <div className="section-heading centered">
          <p className="eyebrow">Curated products</p>
          <h2>{items.length} creations</h2>
        </div>
        <div className="product-grid two-grid">
          {items.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </main>
  );
}
