'use client';

import Link from 'next/link';
import { type Product } from '@/data/products';
import { useCart } from './CartContext';

export function ProductDetailActions({ product }: { product: Product }) {
  const { addItem } = useCart();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '85200000000';
  const whatsappText = encodeURIComponent(`Hello LUNASSA, I want to know more about ${product.name}.`);

  return (
    <div className="detail-actions">
      <button className="primary-button" onClick={() => addItem(product.id)}>Add to Cart</button>
      <Link className="black-button" href="/checkout" onClick={() => addItem(product.id)}>Buy Now</Link>
      <a className="outline-button" href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
    </div>
  );
}
