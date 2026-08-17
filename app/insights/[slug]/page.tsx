import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { postImage } from "@/lib/portfolio";
import { formatDate } from "@/lib/format";
import { Photo } from "@/components/photo";
import { Reveal } from "@/components/reveal";
import { Monogram } from "@/components/monogram";
import { ArticleCard } from "@/components/insights/article-card";
import { CtaBand } from "@/components/cta-band";

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

function initialsOf(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      {/* Header */}
      <header className="border-b border-line bg-mint/40 pt-28 pb-12 sm:pt-36">
        <div className="container-page max-w-3xl">
          <nav className="font-mono text-[0.72rem] tracking-wide text-muted-foreground">
            <Link href="/insights" className="inline-flex items-center gap-2 hover:text-emerald">
              <ArrowLeft size={13} />
              All insights
            </Link>
          </nav>
          <span className="mt-6 inline-block font-mono text-[0.72rem] uppercase tracking-wider text-emerald">
            {post.category}
          </span>
          <h1 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-3">
            <Monogram initials={initialsOf(post.author)} className="h-11 w-11 text-sm" />
            <div className="text-sm">
              <div className="font-medium text-ink">{post.author}</div>
              <div className="font-mono text-[0.72rem] tracking-wide text-muted-foreground">
                {formatDate(post.date)} · {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cover */}
      <div className="container-page -mt-2 max-w-4xl">
        <Reveal>
          <Photo
            src={postImage(post, 1600, 80)}
            alt={post.title}
            priority
            sizes="(min-width: 1024px) 900px, 100vw"
            className="mt-8 aspect-[16/9] rounded-3xl"
          />
        </Reveal>
      </div>

      {/* Body */}
      <div className="container-page max-w-3xl py-14 lg:py-20">
        <div className="space-y-6">
          {post.content.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl leading-relaxed text-ink"
                  : "text-[1.05rem] leading-relaxed text-ink/80"
              }
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-mint/40 p-6">
          <p className="font-mono text-[0.72rem] leading-relaxed tracking-wide text-muted-foreground">
            This article is original demo content for a fictional company and is
            not a substitute for advice from your own veterinarian.
          </p>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-line bg-mint/40">
        <div className="container-page py-16 lg:py-20">
          <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
            More insights
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <ArticleCard post={p} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 lg:py-28">
        <CtaBand
          title="Questions about your flock's health?"
          description="Our veterinary team is here to help with programs, products and technical guidance."
          primary={{ label: "Contact our team", href: "/contact" }}
          secondary={{ label: "Explore solutions", href: "/solutions" }}
        />
      </div>
    </article>
  );
}
