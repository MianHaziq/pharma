import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { getTint } from "@/lib/tones";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  const tint = getTint(post.tone);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      {/* Illustrated header */}
      <div
        className="relative flex aspect-[16/9] items-center justify-center overflow-hidden"
        style={{ backgroundColor: tint.bg }}
      >
        <svg viewBox="0 0 400 225" className="h-full w-full" aria-hidden="true">
          <g opacity={0.5} fill={tint.ring}>
            <circle cx="60" cy="50" r="46" />
            <circle cx="330" cy="180" r="60" />
          </g>
          <g fill={tint.icon}>
            <rect x="176" y="86" width="16" height="52" rx="6" />
            <rect x="163" y="99" width="52" height="16" rx="6" />
          </g>
        </svg>
        <span
          className="absolute left-3.5 top-3.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
          style={{ backgroundColor: "rgba(255,255,255,0.85)", color: tint.text }}
        >
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock size={13} />
            {post.readTime}
          </span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-2 line-clamp-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          Read article
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
