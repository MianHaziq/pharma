import { Star, CheckCircle2 } from "lucide-react";
import type { Review } from "@/lib/types";
import { Rating } from "./rating";
import { formatDate, compactNumber } from "@/lib/format";
import { Button } from "@/components/ui/button";

// Synthesise a plausible star distribution from the aggregate rating.
function distribution(rating: number): number[] {
  const five = Math.round((rating / 5) * 78);
  const four = Math.round((rating / 5) * 15);
  const three = Math.max(2, 100 - five - four - 4);
  return [five, four, three, 3, 1];
}

export function ProductReviews({
  rating,
  reviewCount,
  reviews = [],
}: {
  rating: number;
  reviewCount: number;
  reviews?: Review[];
}) {
  const dist = distribution(rating);

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
      {/* Summary */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-border bg-card p-6 text-center">
          <p className="tnum font-display text-5xl font-semibold text-foreground">
            {rating.toFixed(1)}
          </p>
          <Rating value={rating} showValue={false} size="md" className="mt-2 justify-center" />
          <p className="mt-2 text-sm text-muted-foreground">
            Based on {compactNumber(reviewCount)} reviews
          </p>

          <div className="mt-5 space-y-1.5">
            {dist.map((pct, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="tnum flex w-8 items-center gap-0.5 text-xs text-muted-foreground">
                  {5 - i}
                  <Star size={11} className="fill-gold text-gold" strokeWidth={0} />
                </span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <span
                    className="block h-full rounded-full bg-gold"
                    style={{ width: `${pct}%` }}
                  />
                </span>
                <span className="tnum w-8 text-right text-xs text-muted-foreground">
                  {pct}%
                </span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="mt-6 w-full">
            Write a review
          </Button>
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-border">
        {reviews.map((review) => (
          <article key={review.id} className="py-5 first:pt-0">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-tint text-sm font-semibold text-brand">
                  {review.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {review.author}
                  </p>
                  {review.verified && (
                    <span className="flex items-center gap-1 text-xs text-brand">
                      <CheckCircle2 size={12} />
                      Verified purchase
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                {formatDate(review.date)}
              </span>
            </div>
            <Rating value={review.rating} showValue={false} className="mt-3" />
            <h4 className="mt-2 text-sm font-semibold text-foreground">
              {review.title}
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {review.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
