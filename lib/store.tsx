"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";
import { getProductById } from "./catalog";
import { discountPercent } from "./format";
import type { Product } from "./types";

// ─────────────────────────────────────────────────────────────
// Client-side store for cart + wishlist, persisted to localStorage.
// Swap the persistence layer for API calls when a backend exists —
// the hook surface (useStore) stays identical.
// ─────────────────────────────────────────────────────────────

const CART_KEY = "poultrimed.cart";
const WISHLIST_KEY = "poultrimed.wishlist";
export const FREE_DELIVERY_THRESHOLD = 3000;
export const STANDARD_DELIVERY_FEE = 199;

export interface CartLine {
  productId: string;
  quantity: number;
}

export interface ResolvedCartLine extends CartLine {
  product: Product;
  lineTotal: number;
  lineOriginalTotal: number;
}

interface StoreValue {
  // Cart
  cart: CartLine[];
  cartLines: ResolvedCartLine[];
  cartCount: number;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  isInCart: (productId: string) => boolean;
  cartQuantity: (productId: string) => number;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  // Wishlist
  wishlist: string[];
  wishlistCount: number;
  wishlistProducts: Product[];
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  moveToCart: (productId: string) => void;
  hydrated: boolean;
}

const StoreContext = createContext<StoreValue | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount. Reading storage during render/SSR is
  // impossible without a hydration mismatch, so this one-shot effect is the
  // correct place to seed client state.
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    setCart(readStorage<CartLine[]>(CART_KEY, []));
    setWishlist(readStorage<string[]>(WISHLIST_KEY, []));
    setHydrated(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const addToCart = useCallback((productId: string, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return;
    setCart((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        return prev.map((l) =>
          l.productId === productId
            ? { ...l, quantity: Math.min(l.quantity + quantity, product.stock) }
            : l,
        );
      }
      return [...prev, { productId, quantity: Math.min(quantity, product.stock) }];
    });
    toast.success("Added to cart", { description: product.name });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    const product = getProductById(productId);
    const max = product?.stock ?? 99;
    setCart((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.productId !== productId)
        : prev.map((l) =>
            l.productId === productId
              ? { ...l, quantity: Math.min(quantity, max) }
              : l,
          ),
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((l) => l.productId !== productId));
    toast("Removed from cart");
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((productId: string) => {
    const product = getProductById(productId);
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        toast("Removed from wishlist");
        return prev.filter((id) => id !== productId);
      }
      toast.success("Saved to wishlist", { description: product?.name });
      return [...prev, productId];
    });
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  }, []);

  const moveToCart = useCallback(
    (productId: string) => {
      addToCart(productId, 1);
      setWishlist((prev) => prev.filter((id) => id !== productId));
    },
    [addToCart],
  );

  const cartLines = useMemo<ResolvedCartLine[]>(() => {
    return cart
      .map((line) => {
        const product = getProductById(line.productId);
        if (!product) return null;
        return {
          ...line,
          product,
          lineTotal: product.price * line.quantity,
          lineOriginalTotal:
            (product.originalPrice ?? product.price) * line.quantity,
        };
      })
      .filter((l): l is ResolvedCartLine => l !== null);
  }, [cart]);

  const subtotal = useMemo(
    () => cartLines.reduce((sum, l) => sum + l.lineOriginalTotal, 0),
    [cartLines],
  );
  const discount = useMemo(
    () =>
      cartLines.reduce(
        (sum, l) => sum + (l.lineOriginalTotal - l.lineTotal),
        0,
      ),
    [cartLines],
  );
  const merchandiseTotal = subtotal - discount;
  const deliveryFee =
    merchandiseTotal === 0 || merchandiseTotal >= FREE_DELIVERY_THRESHOLD
      ? 0
      : STANDARD_DELIVERY_FEE;
  const total = merchandiseTotal + deliveryFee;

  const cartCount = useMemo(
    () => cart.reduce((sum, l) => sum + l.quantity, 0),
    [cart],
  );

  const wishlistProducts = useMemo(
    () =>
      wishlist
        .map((id) => getProductById(id))
        .filter((p): p is Product => Boolean(p)),
    [wishlist],
  );

  const value = useMemo<StoreValue>(
    () => ({
      cart,
      cartLines,
      cartCount,
      subtotal,
      discount,
      deliveryFee,
      total,
      isInCart: (id) => cart.some((l) => l.productId === id),
      cartQuantity: (id) => cart.find((l) => l.productId === id)?.quantity ?? 0,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      wishlist,
      wishlistCount: wishlist.length,
      wishlistProducts,
      isInWishlist: (id) => wishlist.includes(id),
      toggleWishlist,
      removeFromWishlist,
      moveToCart,
      hydrated,
    }),
    [
      cart,
      cartLines,
      cartCount,
      subtotal,
      discount,
      deliveryFee,
      total,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      wishlist,
      wishlistProducts,
      toggleWishlist,
      removeFromWishlist,
      moveToCart,
      hydrated,
    ],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

export { discountPercent };
