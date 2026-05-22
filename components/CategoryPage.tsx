import Link from 'next/link';
import { categoryMeta, type ProductCategory } from '@/data/products';
import { ProductBrowser } from './ProductBrowser';

type CategoryPageProps = {
  slug: ProductCategory | 'new-arrivals' | 'gifts';
};

export function CategoryPage({ slug }: CategoryPageProps) {
  const meta = categoryMeta[slug];

  return (
    <main>
      <section className="page-hero compact-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <span>{meta.title}</span></div>
        <p className="eyebrow">LUNASSA Catalogue</p>
        <h1>{meta.title}</h1>
        <p className="cn-title">{meta.cnTitle}</p>
        <p>{meta.intro}</p>
      </section>
      <ProductBrowser category={slug} title={meta.title} />
      <section className="seo-story">
        <p className="eyebrow">Collection inspiration</p>
        <h2>{meta.cnTitle} · Design Notes</h2>
        <p>{meta.seo}</p>
      </section>
    </main>
  );
}
