"use client";

import { useState } from "react";
import { MapPin, Plus, Pencil, Trash2, Check } from "lucide-react";
import { toast } from "sonner";
import { savedAddresses } from "@/data/account";
import type { Address } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function AddressesManager() {
  const [addresses, setAddresses] = useState<Address[]>(savedAddresses);
  const [open, setOpen] = useState(false);

  function makeDefault(id: string) {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id })),
    );
    toast.success("Default address updated");
  }

  function remove(id: string) {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    toast("Address removed");
  }

  function addAddress(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const newAddress: Address = {
      id: `addr-${addresses.length + 1}-${String(form.get("postalCode") ?? "")}`,
      label: String(form.get("label") || "Address"),
      fullName: String(form.get("fullName") ?? ""),
      line1: String(form.get("line1") ?? ""),
      city: String(form.get("city") ?? ""),
      province: String(form.get("province") ?? ""),
      postalCode: String(form.get("postalCode") ?? ""),
      country: "Pakistan",
      phone: String(form.get("phone") ?? ""),
      isDefault: addresses.length === 0,
    };
    setAddresses((prev) => [...prev, newAddress]);
    setOpen(false);
    toast.success("Address added");
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Saved addresses</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage where your orders are delivered.
          </p>
        </div>
        <Button onClick={() => setOpen(true)} className="gap-2">
          <Plus size={17} />
          <span className="hidden sm:inline">Add address</span>
        </Button>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={cn(
              "rounded-2xl border bg-card p-5",
              addr.isDefault ? "border-brand/40 ring-1 ring-brand/20" : "border-border",
            )}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <MapPin size={16} className="text-brand" />
                {addr.label}
              </span>
              {addr.isDefault && (
                <span className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-2 py-0.5 text-[11px] font-semibold text-brand-deep">
                  <Check size={11} />
                  Default
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              <span className="font-medium text-foreground">{addr.fullName}</span>
              <br />
              {addr.line1}
              <br />
              {addr.city}, {addr.province} {addr.postalCode}
              <br />
              {addr.phone}
            </p>
            <div className="mt-4 flex items-center gap-1 border-t border-border pt-3">
              {!addr.isDefault && (
                <button
                  type="button"
                  onClick={() => makeDefault(addr.id)}
                  className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-muted"
                >
                  Set as default
                </button>
              )}
              <button
                type="button"
                onClick={() => toast("Edit address (demo)")}
                className="ml-auto inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Pencil size={14} />
                Edit
              </button>
              <button
                type="button"
                onClick={() => remove(addr.id)}
                className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-sale/10 hover:text-sale"
              >
                <Trash2 size={14} />
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {addresses.length === 0 && (
        <div className="mt-5 rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <p className="text-sm text-muted-foreground">
            You have no saved addresses yet.
          </p>
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add a new address</DialogTitle>
          </DialogHeader>
          <form onSubmit={addAddress} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="label" label="Label" placeholder="Home, Office…" required />
              <Field id="fullName" label="Full name" required />
              <Field id="line1" label="Street address" required className="sm:col-span-2" />
              <Field id="city" label="City" required />
              <Field id="province" label="Province" required />
              <Field id="postalCode" label="Postal code" required />
              <Field id="phone" label="Phone" type="tel" required />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save address</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
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
      <Input id={id} name={id} {...props} />
    </div>
  );
}
