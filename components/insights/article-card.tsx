import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/types";
import { postImage } from "@/lib/portfolio";
import { formatDate } from "@/lib/format";
import { Photo } from "@/components/photo";
import { cn } from "@/lib/utils";

export function ArticleCard({
  post,
  className,
  priority = false,
}: {
  post: BlogPost;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:border-emerald/30 hover:shadow-[var(--shadow-elevated)]",
        className,
      )}
    >
      <Photo
        src={postImage(post)}
        alt={post.title}
        priority={priority}
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
        className="aspect-[16/10]"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      >
        <span className="absolute left-4 top-4 rounded-md bg-emerald-deep/80 px-2.5 py-1 font-mono text-[0.64rem] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
          {post.category}
        </span>
      </Photo>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 font-mono text-[0.7rem] tracking-wide text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="text-line-strong">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 font-display text-lg leading-snug tracking-tight text-ink transition-colors group-hover:text-emerald">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-emerald">
          Read article
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
