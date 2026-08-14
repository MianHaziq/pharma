"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  User,
  MapPin,
  Heart,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const items = [
  { label: "Dashboard", href: "/account", icon: LayoutDashboard, exact: true },
  { label: "My Orders", href: "/account/orders", icon: Package },
  { label: "Profile", href: "/account/profile", icon: User },
  { label: "Addresses", href: "/account/addresses", icon: MapPin },
  { label: "Wishlist", href: "/wishlist", icon: Heart },
];

export function AccountNav() {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <nav className="lg:sticky lg:top-28">
      {/* Mobile: horizontal scroll */}
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 lg:hidden">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex shrink-0 items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors",
              isActive(item.href, item.exact)
                ? "border-brand bg-brand text-primary-foreground"
                : "border-border bg-card text-foreground",
            )}
          >
            <item.icon size={16} />
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop: vertical */}
      <div className="hidden rounded-2xl border border-border bg-card p-2 lg:block">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
              isActive(item.href, item.exact)
                ? "bg-brand-tint text-brand-deep"
                : "text-foreground hover:bg-muted",
            )}
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={() => toast("Signed out (demo)")}
          className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-sale"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </div>
    </nav>
  );
}
