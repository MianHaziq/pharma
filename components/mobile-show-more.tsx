"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Shows only the first `initial` grid items on mobile with a "Show all" button;
// always shows everything from the `sm` breakpoint up. Items use display:contents
// wrappers so the parent grid layout is unaffected.
export function MobileShowMore({
  children,
  initial = 4,
  className,
  label = "Show all",
}: {
  children: React.ReactNode;
  initial?: number;
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const items = React.Children.toArray(children);

  return (
    <>
      <div className={className}>
        {items.map((child, i) => (
          <div
            key={i}
            className={!open && i >= initial ? "hidden sm:contents" : "contents"}
          >
            {child}
          </div>
        ))}
      </div>
      {items.length > initial && !open && (
        <div className="mt-8 flex justify-center sm:hidden">
          <Button variant="outline" size="lg" onClick={() => setOpen(true)}>
            {label} ({items.length})
            <ChevronDown data-icon="inline-end" />
          </Button>
        </div>
      )}
    </>
  );
}
