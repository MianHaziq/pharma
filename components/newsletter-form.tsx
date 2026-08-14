"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    toast.success("You're subscribed!", {
      description: "Thanks for joining — watch your inbox for health tips.",
    });
    setEmail("");
    window.setTimeout(() => setDone(false), 3000);
  }

  return (
    <form onSubmit={submit} className={cn("flex flex-col gap-2.5 sm:flex-row", className)}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        suppressHydrationWarning
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="h-11 flex-1 rounded-lg border border-border bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand/50 focus:ring-2 focus:ring-brand/15"
      />
      <Button type="submit" className="h-11 shrink-0 gap-2">
        {done ? <Check size={16} /> : null}
        {done ? "Subscribed" : "Subscribe"}
      </Button>
    </form>
  );
}
