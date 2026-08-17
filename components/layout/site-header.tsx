"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, Phone, Mail } from "lucide-react";
import { primaryNav, company } from "@/data/company";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-paper/80 shadow-[0_1px_0_0_rgb(6_35_28_/_0.04)] backdrop-blur-xl",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo tone={transparent ? "light" : "ink"} />

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  transparent
                    ? "text-white/75 hover:text-white"
                    : "text-ink/70 hover:text-emerald",
                  active && (transparent ? "text-white" : "text-emerald"),
                )}
              >
                {item.label}
                {active && (
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-px h-px",
                      transparent ? "bg-gold-soft" : "bg-gold",
                    )}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="lg"
            variant={transparent ? "onDark" : "default"}
            className="hidden sm:inline-flex"
          >
            <Link href="/contact">
              Contact us
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <MobileMenu transparent={transparent} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(
          "inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden",
          transparent ? "text-white hover:bg-white/10" : "text-ink hover:bg-muted",
        )}
      >
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent side="right" className="w-[88%] max-w-sm gap-0 p-0">
        <SheetHeader className="border-b border-line p-5">
          <SheetTitle asChild>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col p-4">
          {primaryNav.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-3.5 text-[0.95rem] font-medium transition-colors",
                  isActive(pathname, item.href)
                    ? "bg-mint text-emerald"
                    : "text-ink hover:bg-muted",
                )}
              >
                {item.label}
                <ArrowRight size={16} className="text-muted-foreground" />
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button asChild size="xl" className="mt-4">
              <Link href="/contact">Contact us</Link>
            </Button>
          </SheetClose>
        </nav>

        <div className="mt-auto border-t border-line bg-muted/40 p-5">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2.5 text-sm font-medium text-ink"
          >
            <Phone size={16} className="text-emerald" />
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="mt-3 flex items-center gap-2.5 text-sm font-medium text-ink"
          >
            <Mail size={16} className="text-emerald" />
            {company.email}
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
