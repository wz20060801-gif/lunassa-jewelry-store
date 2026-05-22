# LUNASSA Jewelry Independent Store

LUNASSA is a Chinese-culture-inspired, mid-to-high-end jewelry independent website built with Next.js App Router. It combines a brand official site, product catalogue, online purchase path, appointment consultation, customer service and brand storytelling.

## Included pages

- Home: announcement bar, navigation, hero, new arrivals, collections, best sellers, gift scenarios, brand story and consultation CTA.
- Catalogue pages: `/new-arrivals`, `/necklaces`, `/bracelets`, `/rings`, `/earrings`, `/gifts`.
- Product detail pages: `/products/[slug]`.
- Search: `/search?q=jade`.
- Cart: quantity change, remove item, coupon code `LUNASSA10`.
- Checkout: mock checkout UI for Stripe / PayPal / Shopify Payments integration later.
- Account: mock member center.
- Brand story, contact and appointment pages.

## Tech stack

- Next.js 16 App Router
- React 19
- TypeScript
- CSS without UI dependency
- Local product data in `data/products.ts`
- LocalStorage cart
- Mock API routes for contact and checkout

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Replace product data

Edit:

```bash
data/products.ts
```

You can replace product names, prices, materials, images and descriptions. The current template uses CSS placeholders; when you add real photos, you can replace `ProductImage` with Next.js `<Image />` components and store photos in `public/images`.

## Environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=85200000000
NEXT_PUBLIC_SUPPORT_EMAIL=hello@lunassa.com
```

## Payment integration notes

`app/checkout/page.tsx` and `app/api/checkout/route.ts` currently create mock orders only. Before real sales, replace the mock endpoint with one of:

- Stripe Checkout Session
- PayPal Orders API
- Shopify Storefront / Checkout integration

Do not put secret payment keys in client components. Store private keys in Vercel Environment Variables and use server API routes.

## GitHub upload

```bash
git init
git add .
git commit -m "Initial LUNASSA Next.js store"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lunassa-jewelry-store.git
git push -u origin main
```

## Deploy to Vercel

1. Sign in to Vercel.
2. Add New Project.
3. Import your GitHub repository.
4. Framework Preset should be Next.js.
5. Add environment variables if needed.
6. Click Deploy.

Vercel will automatically create preview deployments for pushes/branches and a production deployment for the production branch.

## Custom domain

After deployment, go to Vercel Project → Settings → Domains, then add your domain such as `lunassa.com` and follow the DNS instructions.

## Suggested next upgrades

- Replace placeholder visuals with real campaign/product images.
- Connect Stripe or PayPal.
- Connect a database for orders, customers and favorites.
- Add product reviews CMS.
- Add email CRM automation for abandoned cart and gift campaigns.
- Add analytics: Vercel Analytics, Google Analytics, Meta Pixel and TikTok Pixel.
