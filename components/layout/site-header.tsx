"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

// Design routes mapped onto the app's real Next routes.
export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Brands", href: "/research" },
  { label: "Products", href: "/solutions" },
  { label: "Segments", href: "/industries" },
  { label: "Why Us", href: "/quality" },
  { label: "Insights", href: "/insights" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on route change; lock scroll while it's open.
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="site-head" id="head">
        <div className="site-head__in">
          <Logo />
          <nav className="nav" aria-label="Main">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className={isActive(pathname, item.href) ? "on" : ""}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="head-cta">
            <span className="head-phone">+92 336 8883 198</span>
            <Link href="/contact" className="btn">Contact us</Link>
            <button className="burger" aria-label="Open menu" onClick={() => setOpen(true)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer${open ? " open" : ""}`} id="drawer">
        <button className="drawer__x" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
        {[...NAV, { label: "Contact", href: "/contact" }].map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
