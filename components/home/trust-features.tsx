import { trustFeatures } from "@/data/site";
import { Icon } from "@/components/icon";

export function TrustFeatures() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trustFeatures.map((feature) => (
        <div
          key={feature.title}
          className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-tint text-brand">
            <Icon name={feature.icon} size={21} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
