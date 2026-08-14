# VitalCare Pharmacy — Storefront

A production-quality, fully responsive **pharmacy / healthcare e-commerce storefront** built with Next.js, TypeScript, Tailwind CSS and shadcn/ui. It ships with realistic mock data and is structured so products, categories, banners, orders and content can later be served from an admin dashboard / API without rewriting the UI.

> This is a demonstration storefront — not a real pharmacy. Product info, brands, prices and content are illustrative placeholders and are not medical advice.

## Tech stack

- **Next.js 16** (App Router, RSC) + **TypeScript** (strict, no `any`)
- **Tailwind CSS v4** with a custom apothecary design system
- **shadcn/ui** (Radix primitives) + **lucide-react** icons
- **next/font** — Fraunces (display) + Inter (UI)
- **sonner** for toasts
- Client state via React Context, persisted to `localStorage`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## What's included

**Storefront pages**

- `/` — homepage: hero, categories, featured products, promo banners, best sellers, why-choose-us, brands, health journal, newsletter
- `/shop` — full catalog with sidebar filters (category, brand, price, rating, availability), sort, active-filter chips, load-more, and a mobile filter drawer
- `/category/[slug]` — category landing with banner, subcategory pills and filters
- `/product/[slug]` — gallery, prescription notice, quantity + add/buy/wishlist, benefits, tabbed details, frequently-bought-together, reviews, related products
- `/search` — live suggestions in the header + a dedicated results page (products, categories, brands)
- `/cart`, `/checkout`, `/order-confirmation` — full cart and a mock 4-step checkout with order summary
- `/account`, `/account/orders`, `/account/orders/[id]`, `/account/profile`, `/account/addresses`
- `/wishlist` — local-state wishlist with move-to-cart
- `/track` — order tracking with a timeline component
- `/blog`, `/blog/[slug]` — health & wellness content
- `/about`, `/contact`, `/delivery`, `/returns`, `/privacy`, `/terms`, `/faq`
- Custom `not-found` page

**States handled:** loading skeletons, empty (cart / wishlist / search / no-results), out-of-stock, disabled, hover, focus-visible, and toast notifications.

## Architecture — swapping mock data for a real backend

All data lives in [`/data`](./data) as typed objects and is read exclusively through a query layer in [`/lib`](./lib) — **no component imports raw data directly**. To connect a backend, replace the function bodies in:

- [`lib/catalog.ts`](./lib/catalog.ts) — products, categories, brands, search, filtering/sorting
- [`lib/orders.ts`](./lib/orders.ts) — orders & tracking

The component layer stays unchanged. Types are defined in [`lib/types.ts`](./lib/types.ts) and mirror a typical CMS/commerce API shape (e.g. `Product` with `slug`, `images`, `price`, `originalPrice`, `rating`, `stock`, `tags`, `requiresPrescription`, `ingredients`, `usage`, `warnings`).

### Product imagery

Demo images use the scheme `art:<kind>:<tone>` and render as branded SVG illustrations via [`components/product/product-art.tsx`](./components/product/product-art.tsx) — consistent, offline and never broken. When real image URLs are added to a product's `images` array, [`ProductImage`](./components/product/product-image.tsx) automatically renders them through `next/image` instead. No component changes required.

## Project structure

```
app/                 Routes (App Router)
components/
  layout/            Header, footer, mobile bottom bar, logo
  product/           Card, grid, gallery, art, rating, price, badges, purchase
  shop/              Filter sidebar, product browser (filters + sort + pagination)
  cart/ checkout/    Cart, order summary, checkout, confirmation
  account/ order/    Account nav, order cards, timeline, order detail
  ...
data/                Typed mock data (products, categories, brands, banners, orders, blog, pages)
lib/                 Query layer (catalog, orders), store, types, formatting, tones
```

## Design system

A calm, premium "modern apothecary" identity: deep teal-green primary, warm paper-white background, forest-ink text, subtle mint tint bands and a reserved vermilion for sale/discount only. Fraunces headlines paired with Inter, tabular figures for prices, hairline borders, a consistent radius, and the pharmacy "+" reused as a section marker. Tokens live in [`app/globals.css`](./app/globals.css).
