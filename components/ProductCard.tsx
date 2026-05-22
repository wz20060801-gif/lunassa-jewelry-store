'use client';

import Link from 'next/link';
import { formatPrice, type Product } from '@/data/products';
import { useCart } from './CartContext';
import { ProductImage } from './ProductImage';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className="product-card-image" aria-label={`View ${product.name}`}>
        <ProductImage product={product} />
        <span className={`product-label label-${product.label.toLowerCase().replaceAll(' ', '-')}`}>{product.label}</span>
      </Link>
      <div className="product-card-body">
        <p className="product-material">{product.material}</p>
        <h3>{product.name}</h3>
        <p className="product-cn-name">{product.cnName}</p>
        <div className="rating">★★★★★ <span>{product.rating.toFixed(1)} · {product.reviewCount}</span></div>
        <div className="product-price-row">
          <strong>{formatPrice(product.price)}</strong>
          <del>{formatPrice(product.originalPrice)}</del>
        </div>
        <p className="personalise">Personalise it · Gift card available</p>
        <div className="card-actions">
          <button onClick={() => addItem(product.id)}>加入购物车</button>
          <Link href={`/products/${product.slug}`}>查看详情</Link>
        </div>
      </div>
    </article>
  );
}
