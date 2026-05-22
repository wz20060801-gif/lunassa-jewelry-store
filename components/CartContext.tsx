'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products, type Product } from '@/data/products';

type CartLine = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  items: Array<{ product: Product; quantity: number }>;
  totalQuantity: number;
  subtotal: number;
  discountCode: string;
  discountAmount: number;
  grandTotal: number;
  setDiscountCode: (code: string) => void;
  addItem: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = 'lunassa-cart-v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [discountCode, setDiscountCode] = useState('');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) setLines(JSON.parse(saved) as CartLine[]);
    } catch {
      setLines([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const items = useMemo(() => {
    return lines
      .map((line) => {
        const product = products.find((item) => item.id === line.productId);
        return product ? { product, quantity: line.quantity } : null;
      })
      .filter(Boolean) as Array<{ product: Product; quantity: number }>;
  }, [lines]);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const normalizedCode = discountCode.trim().toUpperCase();
  const discountAmount = normalizedCode === 'LUNASSA10' ? subtotal * 0.1 : 0;
  const grandTotal = Math.max(subtotal - discountAmount, 0);

  function addItem(productId: string, quantity = 1) {
    setLines((current) => {
      const existing = current.find((line) => line.productId === productId);
      if (existing) {
        return current.map((line) =>
          line.productId === productId ? { ...line, quantity: line.quantity + quantity } : line
        );
      }
      return [...current, { productId, quantity }];
    });
  }

  function updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setLines((current) => current.map((line) => (line.productId === productId ? { ...line, quantity } : line)));
  }

  function removeItem(productId: string) {
    setLines((current) => current.filter((line) => line.productId !== productId));
  }

  function clearCart() {
    setLines([]);
    setDiscountCode('');
  }

  const value: CartContextValue = {
    lines,
    items,
    totalQuantity,
    subtotal,
    discountCode,
    discountAmount,
    grandTotal,
    setDiscountCode,
    addItem,
    updateQuantity,
    removeItem,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
}
