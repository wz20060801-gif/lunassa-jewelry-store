import Link from 'next/link';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <h2>LUNASSA</h2>
        <p>Chinese-inspired light luxury jewelry for everyday rituals, meaningful gifts and elegant moments abroad.</p>
      </div>
      <div>
        <h3>Shop</h3>
        <Link href="/new-arrivals">New Arrivals</Link>
        <Link href="/necklaces">Necklaces</Link>
        <Link href="/bracelets">Bracelets</Link>
        <Link href="/rings">Rings</Link>
        <Link href="/earrings">Earrings</Link>
      </div>
      <div>
        <h3>Service</h3>
        <Link href="/gifts">Gift Selection</Link>
        <Link href="/appointment">Appointment</Link>
        <Link href="/contact">WhatsApp & Email</Link>
        <Link href="/cart">Cart</Link>
      </div>
      <div>
        <h3>Trust</h3>
        <p>7-day returns</p>
        <p>30-day warranty</p>
        <p>Gift box + cloth + card</p>
        <p>Support: hello@lunassa.com</p>
      </div>
      <div className="footer-bottom">
        <p>© 2026 LUNASSA. All rights reserved.</p>
        <p>Privacy Policy · Terms · Shipping · Returns</p>
      </div>
    </footer>
  );
}
