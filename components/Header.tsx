'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { navigation } from '@/data/products';
import { useCart } from './CartContext';

export function Header() {
  const router = useRouter();
  const { totalQuantity } = useCart();
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setSeriesOpen(false);
  }

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (value) router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <>
      <div className="announcement">Free Worldwide Shipping Over $59 · LUNASSA Gift Box Included</div>
      <header className="site-header">
        <Link className="logo" href="/" aria-label="LUNASSA home" onClick={closeMenu}>
          LUNASSA
          <span>东方月色珠宝</span>
        </Link>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          Menu
        </button>

        <nav className={`main-nav ${menuOpen ? 'main-nav-open' : ''}`}>
          {navigation.map((item) => (
            item.children ? (
              <div
                key={item.href}
                className={`nav-dropdown ${seriesOpen ? 'nav-dropdown-open' : ''}`}
                onMouseEnter={() => setSeriesOpen(true)}
                onMouseLeave={() => setSeriesOpen(false)}
              >
                <button
                  className="nav-dropdown-button"
                  type="button"
                  onClick={() => setSeriesOpen((open) => !open)}
                  aria-expanded={seriesOpen}
                >
                  {item.label}
                  <span>⌄</span>
                </button>
                <div className="nav-dropdown-menu">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} onClick={closeMenu}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="header-actions">
          <form onSubmit={onSearch} className="search-form">
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search jewelry" />
          </form>
          <Link className="icon-link" href="/account">Account</Link>
          <Link className="cart-link" href="/cart">Cart <span>{totalQuantity}</span></Link>
        </div>
      </header>
    </>
  );
}
