import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, Info } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { getTint } from "@/lib/tones";
import { formatDate } from "@/lib/format";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogCard } from "@/components/blog/blog-card";
import { SectionHeader } from "@/components/section-header";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const tint = getTint(post.tone);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="pb-4">
      <div className="container-page py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Poultry Guides", href: "/blog" },
            { label: post.title },
          ]}
        />

        <div className="mx-auto mt-6 max-w-2xl">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: tint.bg, color: tint.text }}
          >
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>
        </div>

        {/* Hero art */}
        <div
          className="mx-auto mt-6 flex aspect-[2/1] max-w-3xl items-center justify-center overflow-hidden rounded-2xl"
          style={{ backgroundColor: tint.bg }}
        >
          <svg viewBox="0 0 400 200" className="h-full w-full" aria-hidden="true">
            <g opacity={0.5} fill={tint.ring}>
              <circle cx="60" cy="40" r="50" />
              <circle cx="340" cy="170" r="70" />
            </g>
            <g fill={tint.icon}>
              <rect x="186" y="70" width="18" height="60" rx="7" />
              <rect x="170" y="86" width="60" height="18" rx="7" />
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="mx-auto mt-8 max-w-2xl">
          <div className="space-y-5">
            {post.content.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-foreground"
                    : "text-base leading-relaxed text-foreground/80"
                }
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8 flex gap-3 rounded-xl border border-border bg-muted/40 p-4">
            <Info size={18} className="mt-0.5 shrink-0 text-brand" />
            <p className="text-sm text-muted-foreground">
              This article is placeholder demo content for illustration only and
              is not veterinary advice. Always consult your own veterinarian for
              guidance specific to your flock.
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
        </div>
      </div>

      {/* Related */}
      <div className="border-t border-border bg-muted/30">
        <div className="container-page py-12">
          <SectionHeader title="More from the journal" linkHref="/blog" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
