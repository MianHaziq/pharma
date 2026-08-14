"use client";

import { useState } from "react";
import { toast } from "sonner";
import { customerProfile } from "@/data/account";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function ProfileForm() {
  const [saving, setSaving] = useState(false);

  function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    window.setTimeout(() => {
      setSaving(false);
      toast.success("Profile updated", {
        description: "Your changes have been saved.",
      });
    }, 600);
  }

  return (
    <form onSubmit={save} className="space-y-6">
      <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <h2 className="text-base font-semibold text-foreground">
          Personal details
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <Field id="firstName" label="First name" defaultValue={customerProfile.firstName} />
          <Field id="lastName" label="Last name" defaultValue={customerProfile.lastName} />
          <Field id="email" label="Email" type="email" defaultValue={customerProfile.email} />
          <Field id="phone" label="Phone" type="tel" defaultValue={customerProfile.phone} />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
        <h2 className="text-base font-semibold text-foreground">Communication</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose how you&apos;d like to hear from us.
        </p>
        <div className="mt-4 space-y-3">
          <label className="flex cursor-pointer items-start gap-3 text-sm">
            <Checkbox defaultChecked className="mt-0.5" />
            <span>
              <span className="font-medium text-foreground">Email updates</span>
              <span className="block text-muted-foreground">
                Order updates, health tips and exclusive offers.
              </span>
            </span>
          </label>
          <label className="flex cursor-pointer items-start gap-3 text-sm">
            <Checkbox defaultChecked className="mt-0.5" />
            <span>
              <span className="font-medium text-foreground">SMS notifications</span>
              <span className="block text-muted-foreground">
                Delivery alerts for your orders.
              </span>
            </span>
          </label>
        </div>
      </section>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" disabled={saving}>
          {saving ? "Saving…" : "Save changes"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  className,
  ...props
}: {
  id: string;
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} suppressHydrationWarning {...props} />
    </div>
  );
}
