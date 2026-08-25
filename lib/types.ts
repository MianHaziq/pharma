// Domain types for the storefront. These mirror what a real backend/CMS would
// return, so the mock data in /data can later be swapped for API responses
// without touching UI components.

export type CurrencyCode = "PKR";

export type ProductArtKind =
  | "box"
  | "bottle"
  | "pillbottle"
  | "tube"
  | "jar"
  | "sachet"
  | "device"
  | "kit"
  | "dropper"
  | "spray";

export interface Brand {
  id: string;
  slug: string;
  name: string;
  /** Short text mark used when no logo image is available. */
  logoText: string;
  /** Path to the brand's logo image (in /public). Preferred over text. */
  logo?: string;
  /** The brand's specialty / category, shown as a small label. */
  category?: string;
  description: string;
  featured: boolean;
}

export interface Subcategory {
  id: string;
  slug: string;
  name: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Lucide icon name, resolved in the UI. */
  icon: string;
  /** Art tone key for illustrated imagery. */
  tone: string;
  subcategories: Subcategory[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  verified: boolean;
}

export type ProductTag =
  | "bestseller"
  | "new"
  | "featured"
  | "sale"
  | "wellness"
  | "limited";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brandId: string;
  categorySlug: string;
  subcategorySlug?: string;
  shortDescription: string;
  description: string;
  /**
   * Image sources. Demo entries use the scheme "art:<kind>:<tone>" and are
   * rendered as branded SVG illustrations; real URLs render via next/image.
   */
  images: string[];
  price: number;
  originalPrice?: number;
  currency: CurrencyCode;
  rating: number;
  reviewCount: number;
  stock: number;
  tags: ProductTag[];
  requiresPrescription: boolean;
  packSize?: string;
  keyBenefits?: string[];
  ingredients?: string[];
  usage?: string;
  warnings?: string;
  reviews?: Review[];
}

export interface Banner {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  tone: string;
  align?: "left" | "center";
  /** Illustration variant key, resolved in the UI (see BannerArt). */
  art?: string;
}

export type OrderStatus =
  | "placed"
  | "confirmed"
  | "processing"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled";

export interface OrderItem {
  productId: string;
  name: string;
  image: string;
  brand: string;
  price: number;
  quantity: number;
}

export interface OrderAddress {
  fullName: string;
  line1: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone: string;
}

export interface TrackingStep {
  status: OrderStatus;
  label: string;
  description: string;
  date?: string;
  done: boolean;
  current?: boolean;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  paymentMethod: string;
  deliveryMethod: string;
  address: OrderAddress;
  estimatedDelivery: string;
  timeline: TrackingStep[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  tone: string;
  content: string[];
}

export interface Address {
  id: string;
  label: string;
  fullName: string;
  line1: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

export interface CustomerProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  memberSince: string;
  loyaltyPoints: number;
}
