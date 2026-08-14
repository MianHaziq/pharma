import { Check } from "lucide-react";
import type { TrackingStep } from "@/lib/types";
import { cn } from "@/lib/utils";

export function OrderTimeline({ steps }: { steps: TrackingStep[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        const complete = step.done;
        const current = step.current;
        return (
          <li key={step.status} className="relative flex gap-4 pb-8 last:pb-0">
            {/* Connector */}
            {!isLast && (
              <span
                className={cn(
                  "absolute left-[15px] top-8 h-[calc(100%-1rem)] w-0.5",
                  complete ? "bg-brand" : "bg-border",
                )}
                aria-hidden
              />
            )}
            {/* Marker */}
            <span
              className={cn(
                "relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 transition-colors",
                complete
                  ? "border-brand bg-brand text-primary-foreground"
                  : current
                    ? "border-brand bg-card text-brand"
                    : "border-border bg-card text-muted-foreground",
              )}
            >
              {complete ? (
                <Check size={16} />
              ) : (
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    current ? "bg-brand" : "bg-border",
                  )}
                />
              )}
            </span>

            <div className={cn("pt-0.5", !complete && !current && "opacity-60")}>
              <p
                className={cn(
                  "text-sm font-semibold",
                  current ? "text-brand" : "text-foreground",
                )}
              >
                {step.label}
                {current && (
                  <span className="ml-2 rounded-full bg-brand-tint px-2 py-0.5 text-[11px] font-medium text-brand-deep">
                    In progress
                  </span>
                )}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {step.description}
              </p>
              {step.date && (
                <p className="mt-1 text-xs text-muted-foreground/80">{step.date}</p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
