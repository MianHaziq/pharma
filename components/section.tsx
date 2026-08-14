import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  spacing = "md",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg";
  id?: string;
}) {
  const pad = {
    sm: "py-8 sm:py-10",
    md: "py-10 sm:py-14",
    lg: "py-12 sm:py-16",
  }[spacing];
  return (
    <section id={id} className={cn("container-page", pad, className)}>
      {children}
    </section>
  );
}
