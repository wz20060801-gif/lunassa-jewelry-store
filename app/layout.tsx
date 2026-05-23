import type { Metadata } from 'next';
import './globals.css';
import './lunassa-updates.css';
import { CartProvider } from '@/components/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LUNASSA | Chinese-Inspired Light Luxury Jewelry',
  description: 'LUNASSA is a Chinese-inspired jewelry brand for global consumers, combining cultural storytelling, elegant product catalogues, online purchase and consultation.',
  keywords: ['LUNASSA', 'jewelry', 'Chinese culture', 'jade necklace', 'light luxury jewelry'],
  openGraph: {
    title: 'LUNASSA Jewelry',
    description: 'Elegance in every detail. Chinese-inspired jewelry for everyday moments.',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
