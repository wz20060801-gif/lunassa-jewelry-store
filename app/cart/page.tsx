'use client';

import Link from 'next/link';
import { formatPrice } from '@/data/products';
import { ProductImage } from '@/components/ProductImage';
import { useCart } from '@/components/CartContext';

export default function CartPage() {
  const { items, subtotal, discountCode, setDiscountCode, discountAmount, grandTotal, updateQuantity, removeItem } = useCart();

  return (
    <main>
      <section className="page-hero compact-hero">
        <p className="eyebrow">Shopping Bag</p>
        <h1>Your Cart</h1>
        <p>Modify quantity, apply coupon and continue to checkout.</p>
      </section>

      <section className="cart-layout">
        <div className="cart-list">
          {items.length === 0 && (
            <div className="empty-state">
              <h2>Your cart is empty</h2>
              <p>Explore LUNASSA collections and add your first piece.</p>
              <Link className="primary-button" href="/new-arrivals">Shop New Arrivals</Link>
            </div>
          )}
          {items.map(({ product, quantity }) => (
            <article className="cart-item" key={product.id}>
              <ProductImage product={product} />
              <div>
                <h2>{product.name}</h2>
                <p>{product.cnName}</p>
                <span>{product.material}</span>
                <strong>{formatPrice(product.price)}</strong>
              </div>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(product.id, quantity - 1)}>-</button>
                <input value={quantity} onChange={(event) => updateQuantity(product.id, Number(event.target.value) || 1)} />
                <button onClick={() => updateQuantity(product.id, quantity + 1)}>+</button>
              </div>
              <button className="text-button" onClick={() => removeItem(product.id)}>Remove</button>
            </article>
          ))}
        </div>

        <aside className="order-summary">
          <h2>Order Summary</h2>
          <label>
            Coupon code
            <input value={discountCode} onChange={(event) => setDiscountCode(event.target.value)} placeholder="Try LUNASSA10" />
          </label>
          <div className="summary-line"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
          <div className="summary-line"><span>Discount</span><strong>-{formatPrice(discountAmount)}</strong></div>
          <div className="summary-line"><span>Shipping</span><strong>{subtotal >= 59 || subtotal === 0 ? 'Free' : '$6.90'}</strong></div>
          <div className="summary-total"><span>Total</span><strong>{formatPrice(grandTotal + (subtotal >= 59 || subtotal === 0 ? 0 : 6.9))}</strong></div>
          <Link className="black-button full" href="/checkout">Checkout</Link>
          <p className="muted">Stripe / PayPal / Shopify Payments can be connected in production.</p>
        </aside>
      </section>
    </main>
  );
}
