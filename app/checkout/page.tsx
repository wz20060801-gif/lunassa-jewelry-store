'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { formatPrice } from '@/data/products';
import { useCart } from '@/components/CartContext';

export default function CheckoutPage() {
  const { items, grandTotal, subtotal, discountAmount, clearCart } = useCart();
  const [status, setStatus] = useState('');

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({
        customer: Object.fromEntries(form.entries()),
        items: items.map(({ product, quantity }) => ({ id: product.id, name: product.name, quantity, price: product.price }))
      })
    });
    const data = await response.json();
    if (data.ok) {
      setStatus(`Mock order created: ${data.orderId}. Replace this API with Stripe/PayPal before real sales.`);
      clearCart();
    }
  }

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Secure checkout</p>
        <h1>Checkout</h1>
        <p>This template includes checkout UI. Connect Stripe, PayPal or Shopify Payments before accepting real payments.</p>
      </section>

      <section className="checkout-layout">
        <form className="checkout-form" onSubmit={submitOrder}>
          <h2>Contact & Shipping</h2>
          <div className="form-grid">
            <label>First name<input name="firstName" required /></label>
            <label>Last name<input name="lastName" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Phone<input name="phone" /></label>
            <label className="wide">Address<input name="address" required /></label>
            <label>City<input name="city" required /></label>
            <label>Country / Region<input name="country" required /></label>
            <label>Postal code<input name="postalCode" required /></label>
          </div>

          <h2>Payment Method</h2>
          <div className="payment-options">
            <label><input type="radio" name="payment" value="stripe" defaultChecked /> Stripe Card</label>
            <label><input type="radio" name="payment" value="paypal" /> PayPal</label>
            <label><input type="radio" name="payment" value="shopify" /> Shopify Payments</label>
          </div>
          <button className="black-button full" disabled={items.length === 0}>Create Mock Order</button>
          {status && <p className="success-message">{status}</p>}
        </form>

        <aside className="order-summary">
          <h2>Order</h2>
          {items.length === 0 && <p>Your bag is empty. <Link href="/new-arrivals">Continue shopping</Link>.</p>}
          {items.map(({ product, quantity }) => (
            <div className="summary-product" key={product.id}>
              <span>{product.name} × {quantity}</span>
              <strong>{formatPrice(product.price * quantity)}</strong>
            </div>
          ))}
          <div className="summary-line"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-line"><span>Discount</span><strong>-{formatPrice(discountAmount)}</strong></div>
          <div className="summary-total"><span>Total</span><strong>{formatPrice(grandTotal)}</strong></div>
        </aside>
      </section>
    </main>
  );
}
