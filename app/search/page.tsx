import Link from 'next/link';
import { ProductBrowser } from '@/components/ProductBrowser';

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q ?? '';

  return (
    <main>
      <section className="page-hero compact-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <span>Search</span></div>
        <p className="eyebrow">Search LUNASSA</p>
        <h1>Search Products</h1>
        <p>Search by product name, Chinese name, material or collection.</p>
      </section>
      <ProductBrowser query={query} />
    </main>
  );
}
