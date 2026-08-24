import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/format";
import { photo } from "@/lib/images";
import { Ph } from "@/components/site/ph";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  const more = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <div className="sec sec--tight sec--tint">
        <div className="wrap wrap--narrow">
          <nav aria-label="Breadcrumb" className="note" style={{ display: "flex", gap: 8, marginBottom: 22 }}>
            <Link href="/insights">← Insights</Link>
          </nav>
          <div data-anim="rise">
            <p className="eyebrow">{post.category} · {post.readTime}</p>
            <h1 className="d1">{post.title}</h1>
            <p className="lead mt-24">{post.excerpt}</p>
            <p className="note mt-16">{post.author} · {formatDate(post.date)}</p>
          </div>
        </div>
      </div>

      <div className="sec">
        <div className="wrap wrap--narrow">
          <div data-anim="rise" style={{ marginBottom: 40 }}>
            <Ph className="r-169" src={photo("freeRange", 1200, 78)} alt={post.title} />
          </div>
          <article data-anim="rise">
            {post.content.map((p, i) => (<p key={i} className="lead" style={{ color: "var(--ink)", fontWeight: 400, marginBottom: 20 }}>{p}</p>))}
          </article>
          <div className="btns mt-40" data-anim="rise">
            <Link href="/contact" className="btn">Ask our technical team <span className="arw">→</span></Link>
            <Link href="/insights" className="btn btn--ghost">More articles</Link>
          </div>
        </div>
      </div>

      <div className="sec sec--tint">
        <div className="wrap">
          <div className="sec-head" data-anim="rise"><p className="eyebrow">Keep reading</p><h2 className="d2">More notes from the field.</h2></div>
          <div className="grid g3" data-stagger="70">
            {more.map((p) => (
              <Link href={`/insights/${p.slug}`} className="artcard" data-anim="rise" key={p.id} style={{ color: "inherit" }}>
                <div className="artcard__img"><Ph anim={false} className="ph--flat" src={photo("farmHouse", 640, 76)} alt={p.title} /></div>
                <div className="artcard__b"><div className="artcard__meta">{p.category} · {p.readTime.replace(" read", "")}</div><span className="d4">{p.title}</span><p>{p.excerpt}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
