'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

export default function AccountPage() {
  const [email, setEmail] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoggedIn(true);
  }

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Member center</p>
        <h1>Account</h1>
        <p>Order tracking, favorites and address management. Replace mock login with Clerk, Auth.js or Shopify customer accounts later.</p>
      </section>

      <section className="account-layout">
        {!loggedIn ? (
          <form className="contact-form" onSubmit={login}>
            <h2>Login / Register</h2>
            <label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
            <button className="black-button">Continue with email</button>
            <p className="muted">This is a front-end mock account page for early launch prototype.</p>
          </form>
        ) : (
          <div className="dashboard">
            <h2>Welcome, {email}</h2>
            <div className="dashboard-grid">
              <article><h3>Orders</h3><p>No real orders yet. Connect database and payment provider.</p><Link href="/new-arrivals">Shop now</Link></article>
              <article><h3>Favorites</h3><p>Save favorite products in a future version.</p><Link href="/gifts">Explore gifts</Link></article>
              <article><h3>Address Book</h3><p>Add shipping addresses after account integration.</p><Link href="/checkout">Checkout demo</Link></article>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
