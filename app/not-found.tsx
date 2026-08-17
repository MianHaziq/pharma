import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-emerald-deep">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep to-emerald-950" />
      <div className="container-page relative py-24 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold-soft">
          Error · 404
        </p>
        <h1 className="mt-6 font-display text-5xl tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-white/70">
          The page you're looking for may have moved or no longer exists. Let's get
          you back on track.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="xl" variant="onDark">
            <Link href="/">
              <Home data-icon="inline-start" />
              Back to home
            </Link>
          </Button>
          <Button asChild size="xl" variant="outlineDark">
            <Link href="/solutions">
              Explore solutions
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
