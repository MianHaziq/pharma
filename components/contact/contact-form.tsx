"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    window.setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      form.reset();
      toast.success("Message sent", {
        description: "Thanks for reaching out — we'll reply within 24 hours.",
      });
      window.setTimeout(() => setSent(false), 3000);
    }, 700);
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required suppressHydrationWarning />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required suppressHydrationWarning />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required suppressHydrationWarning />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required suppressHydrationWarning />
      </div>
      <Button type="submit" size="lg" disabled={submitting} className="gap-2">
        {sent ? <Check size={17} /> : <Send size={16} />}
        {sent ? "Message sent" : submitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
