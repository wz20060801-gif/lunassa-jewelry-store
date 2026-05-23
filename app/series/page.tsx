import Link from 'next/link';

export default function SeriesIndexPage() {
  return (
    <main className="series-page series-index">
      <section className="series-hero">
        <div className="breadcrumbs"><Link href="/">Home</Link> / <span>series</span></div>
        <p className="eyebrow">LUNASSA series</p>
        <h1>series</h1>
        <p>Explore the two cultural jewelry series created for LUNASSA.</p>
      </section>

      <section className="series-index-grid">
        <Link href="/series/self-tide" className="series-index-card self-tide-card">
          <span>THE SELF-TIDE COLLECTION</span>
          <p>Moonlit blue stones, water movement and self-expression.</p>
        </Link>
        <Link href="/series/earth-bound" className="series-index-card earth-bound-card">
          <span>THE EARTH-BOUND COLLECTION</span>
          <p>Green jade tones, grounded blessing and cultural warmth.</p>
        </Link>
      </section>
    </main>
  );
}
