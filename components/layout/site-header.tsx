"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  Truck,
  Phone,
  ChevronDown,
  Package,
  MapPin,
} from "lucide-react";
import { useStore } from "@/lib/store";
import { getAllCategories, getProductCountByCategory } from "@/lib/catalog";
import { announcementText } from "@/data/banners";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { SearchBar } from "@/components/search/search-bar";
import { Icon } from "@/components/icon";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = getAllCategories();

const primaryNav = [
  { label: "All Products", href: "/shop" },
  { label: "Best Sellers", href: "/shop?filter=bestsellers" },
  { label: "Offers", href: "/shop?filter=offers" },
  { label: "Medical Devices", href: "/category/medical-devices" },
  { label: "Health Tips", href: "/blog" },
];

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="tnum absolute -right-1.5 -top-1.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-primary-foreground ring-2 ring-card">
      {count > 99 ? "99+" : count}
    </span>
  );
}

export function SiteHeader() {
  const { cartCount, wishlistCount, hydrated } = useStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-brand-deep text-primary-foreground">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2 font-medium">
            <Truck size={14} />
            <span>{announcementText}</span>
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <Link href="/track" className="transition-opacity hover:opacity-80">
              Track order
            </Link>
            <a
              href="tel:+92111222333"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
            >
              <Phone size={13} />
              +92 111 222 333
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 bg-card/95 backdrop-blur transition-shadow",
          scrolled ? "shadow-[var(--shadow-nav)]" : "",
        )}
      >
        {/* Main row */}
        <div className="container-page flex h-16 items-center gap-3 lg:h-[70px] lg:gap-6">
          {/* Mobile menu */}
          <MobileMenu />

          <Logo className="shrink-0" />

          {/* Desktop search */}
          <div className="hidden flex-1 lg:block">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="ml-auto flex items-center gap-1 lg:ml-0">
            <Link
              href="/account"
              className="hidden items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted sm:flex"
            >
              <User size={19} strokeWidth={1.75} />
              <span className="hidden xl:inline">Account</span>
            </Link>

            <Link
              href="/wishlist"
              className="relative hidden rounded-lg p-2 text-foreground transition-colors hover:bg-muted sm:inline-flex"
              aria-label="Wishlist"
            >
              <Heart size={20} strokeWidth={1.75} />
              {hydrated && <CountBadge count={wishlistCount} />}
            </Link>

            <Link
              href="/cart"
              className="relative inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              aria-label="Cart"
            >
              <span className="relative">
                <ShoppingCart size={20} strokeWidth={1.75} />
                {hydrated && <CountBadge count={cartCount} />}
              </span>
              <span className="hidden xl:inline">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="container-page pb-3 lg:hidden">
          <SearchBar placeholder="Search products…" />
        </div>

        {/* Desktop nav row */}
        <nav className="hidden border-t border-border lg:block">
          <div className="container-page flex h-11 items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:bg-muted">
                <Menu size={16} />
                Shop by Category
                <ChevronDown size={15} className="text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="w-[560px] p-3"
              >
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted"
                    >
                      <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand">
                        <Icon name={cat.icon} size={18} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">
                          {cat.name}
                        </span>
                        <span className="tnum block text-xs text-muted-foreground">
                          {getProductCountByCategory(cat.slug)} products
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <span className="mx-1 h-5 w-px bg-border" />

            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Icon name="ShieldCheck" size={15} className="text-brand" />
              100% genuine products
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </SheetTrigger>
      <SheetContent side="left" className="w-[86%] max-w-sm gap-0 p-0">
        <SheetHeader className="border-b border-border p-4">
          <SheetTitle asChild>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <nav className="p-3">
            <MobileLink href="/shop" onClick={() => setOpen(false)}>
              All Products
            </MobileLink>
            <MobileLink href="/blog" onClick={() => setOpen(false)}>
              Health Tips
            </MobileLink>
            <MobileLink href="/track" onClick={() => setOpen(false)}>
              Track Order
            </MobileLink>
          </nav>

          <div className="border-t border-border p-3">
            <p className="px-2 pb-2 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Shop by category
            </p>
            <div className="grid gap-0.5">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 transition-colors hover:bg-muted"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-tint text-brand">
                    <Icon name={cat.icon} size={18} />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-border p-3">
            <MobileLink href="/account" onClick={() => setOpen(false)} icon={<User size={18} />}>
              My Account
            </MobileLink>
            <MobileLink href="/account/orders" onClick={() => setOpen(false)} icon={<Package size={18} />}>
              My Orders
            </MobileLink>
            <MobileLink href="/wishlist" onClick={() => setOpen(false)} icon={<Heart size={18} />}>
              Wishlist
            </MobileLink>
            <MobileLink href="/account/addresses" onClick={() => setOpen(false)} icon={<MapPin size={18} />}>
              Addresses
            </MobileLink>
          </div>
        </div>

        <div className="border-t border-border bg-muted/40 p-4">
          <a
            href="tel:+92111222333"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone size={16} className="text-brand" />
            +92 111 222 333
          </a>
          <p className="mt-1 text-xs text-muted-foreground">
            Support 7 days a week, 9am–9pm
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function MobileLink({
  href,
  children,
  onClick,
  icon,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
}) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        onClick={onClick}
        className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
      >
        {icon && <span className="text-muted-foreground">{icon}</span>}
        {children}
      </Link>
    </SheetClose>
  );
}
