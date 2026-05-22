import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link className="primary-button" href="/">Back to Home</Link>
      </section>
    </main>
  );
}
