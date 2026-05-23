'use client';

import { useMemo, useState } from 'react';
import { products, type Product, type ProductCategory } from '@/data/products';
import { ProductCard } from './ProductCard';

type ProductBrowserProps = {
  category?: ProductCategory | 'gifts' | 'new-arrivals';
  query?: string;
  title?: string;
};

const materials = ['All', 'Silver alloy', 'Zircon', 'Blue stone', 'Green jade'];
const colors = ['All', 'Moonlit blue', 'Azure blue', 'Ice blue', 'Soft jade green', 'Deep jade green', 'Silver'];
const scenes = ['All', 'gift', 'birthday', 'commute', 'date', 'ceremony'];

type SortKey = 'featured' | 'price-low' | 'price-high' | 'rating';

export function ProductBrowser({ category, query = '', title }: ProductBrowserProps) {
  const [material, setMaterial] = useState('All');
  const [color, setColor] = useState('All');
  const [scene, setScene] = useState('All');
  const [sort, setSort] = useState<SortKey>('featured');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [visible, setVisible] = useState(8);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    let items = [...products];
    if (category === 'gifts') items = items.filter((product) => product.scene.includes('gift') || product.label === 'Gift Pick');
    if (category === 'new-arrivals') items = items.filter((product) => product.label === 'New' || product.label === 'Limited' || product.label === 'Bestseller' || product.label === 'Gift Pick');
    if (category && category !== 'gifts' && category !== 'new-arrivals') {
      items = items.filter((product) => product.category === category);
    }

    items = items.filter((product) => {
      const matchesQuery = normalizedQuery
        ? [product.name, product.cnName, product.material, product.collection].join(' ').toLowerCase().includes(normalizedQuery)
        : true;
      const matchesMaterial = material === 'All' || product.material.toLowerCase().includes(material.toLowerCase());
      const matchesColor = color === 'All' || product.color.toLowerCase().includes(color.toLowerCase());
      const matchesScene = scene === 'All' || product.scene.includes(scene as Product['scene'][number]);
      const matchesMin = minPrice ? product.price >= Number(minPrice) : true;
      const matchesMax = maxPrice ? product.price <= Number(maxPrice) : true;
      return matchesQuery && matchesMaterial && matchesColor && matchesScene && matchesMin && matchesMax;
    });

    if (sort === 'price-low') items.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') items.sort((a, b) => b.price - a.price);
    if (sort === 'rating') items.sort((a, b) => b.rating - a.rating);

    return items;
  }, [category, query, material, color, scene, sort, minPrice, maxPrice]);

  return (
    <section className="browser-section">
      <div className="browser-toolbar">
        <div>
          <p className="eyebrow">{title ? 'Curated catalogue' : 'Search results'}</p>
          <h2>{title ?? `Results for “${query}”`}</h2>
          <p className="muted">{filtered.length} products</p>
        </div>
        <label>
          Sorting
          <select value={sort} onChange={(event) => setSort(event.target.value as SortKey)}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </label>
      </div>

      <div className="catalog-layout">
        <aside className="filters-panel">
          <h3>Filters & Sorting</h3>
          <label>
            Material
            <select value={material} onChange={(event) => setMaterial(event.target.value)}>
              {materials.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Color
            <select value={color} onChange={(event) => setColor(event.target.value)}>
              {colors.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Scene
            <select value={scene} onChange={(event) => setScene(event.target.value)}>
              {scenes.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <div className="price-range">
            <label>
              Min price
              <input value={minPrice} onChange={(event) => setMinPrice(event.target.value)} type="number" min="0" placeholder="$0" />
            </label>
            <label>
              Max price
              <input value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} type="number" min="0" placeholder="$100" />
            </label>
          </div>
          <button className="ghost-button" onClick={() => { setMaterial('All'); setColor('All'); setScene('All'); setMinPrice(''); setMaxPrice(''); setSort('featured'); }}>
            Reset filters
          </button>
        </aside>

        <div className="product-flow">
          <div className="product-grid">
            {filtered.slice(0, visible).map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p className="empty-state">No products are available in this collection yet.</p>}
          {visible < filtered.length && (
            <button className="see-more" onClick={() => setVisible((value) => value + 4)}>See More</button>
          )}
        </div>
      </div>
    </section>
  );
}
