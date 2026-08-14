import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getTint } from "@/lib/tones";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Health & wellness journal",
  description:
    "Practical, easy-to-read health and wellness guidance from the VitalCare team.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  const tint = getTint(featured.tone);

  return (
    <div className="container-page py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Health Tips" }]} />

      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Health &amp; wellness</span>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The VitalCare journal
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Practical, easy-to-read guidance to help you and your family live a
          little healthier every day. All articles are placeholder demo content
          and are not a substitute for professional medical advice.
        </p>
      </div>

      {/* Featured */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group mt-10 grid overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:border-brand/30 hover:shadow-[var(--shadow-elevated)] md:grid-cols-2"
      >
        <div
          className="relative flex min-h-56 items-center justify-center"
          style={{ backgroundColor: tint.bg }}
        >
          <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true">
            <g opacity={0.5} fill={tint.ring}>
              <circle cx="70" cy="70" r="60" />
              <circle cx="330" cy="240" r="80" />
            </g>
            <g fill={tint.icon}>
              <rect x="184" y="110" width="20" height="70" rx="8" />
              <rect x="167" y="127" width="70" height="20" rx="8" />
            </g>
          </svg>
          <span
            className="absolute left-4 top-4 rounded-full bg-card/85 px-3 py-1 text-xs font-semibold"
            style={{ color: tint.text }}
          >
            {featured.category}
          </span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {featured.readTime}
            </span>
            <span>·</span>
            <span>{formatDate(featured.date)}</span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {featured.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
            Read article
            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      {/* Grid */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
