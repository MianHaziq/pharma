"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Heart, ShoppingCart, User } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Shop", href: "/shop", icon: LayoutGrid },
  { label: "Wishlist", href: "/wishlist", icon: Heart, badge: "wishlist" as const },
  { label: "Cart", href: "/cart", icon: ShoppingCart, badge: "cart" as const },
  { label: "Account", href: "/account", icon: User },
];

export function MobileBottomBar() {
  const pathname = usePathname();
  const { cartCount, wishlistCount, hydrated } = useStore();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 backdrop-blur lg:hidden"
      aria-label="Primary"
    >
      <div className="mx-auto grid max-w-md grid-cols-5">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const count =
            item.badge === "cart"
              ? cartCount
              : item.badge === "wishlist"
                ? wishlistCount
                : 0;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium transition-colors",
                active ? "text-brand" : "text-muted-foreground",
              )}
            >
              <span className="relative">
                <Icon size={21} strokeWidth={active ? 2.1 : 1.75} />
                {hydrated && item.badge && count > 0 && (
                  <span className="tnum absolute -right-2 -top-1.5 grid h-4 min-w-4 place-items-center rounded-full bg-brand px-1 text-[9px] font-bold text-primary-foreground">
                    {count > 9 ? "9+" : count}
                  </span>
                )}
              </span>
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
