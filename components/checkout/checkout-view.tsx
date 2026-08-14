"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Truck,
  Zap,
  Banknote,
  CreditCard,
  Smartphone,
  Lock,
  ShoppingBag,
  Check,
} from "lucide-react";
import { useStore, FREE_DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE } from "@/lib/store";
import { getBrandName } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { customerProfile, savedAddresses } from "@/data/account";
import { ProductImage } from "@/components/product/product-image";
import { EmptyState } from "@/components/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const provinces = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Gilgit-Baltistan",
  "Azad Kashmir",
];

const EXPRESS_FEE = 499;

const deliveryOptions = [
  {
    id: "standard",
    label: "Standard Delivery",
    eta: "3–5 business days",
    icon: Truck,
  },
  {
    id: "express",
    label: "Express Delivery",
    eta: "1–2 business days",
    icon: Zap,
  },
] as const;

const paymentOptions = [
  {
    id: "cod",
    label: "Cash on Delivery",
    desc: "Pay in cash when your order arrives",
    icon: Banknote,
  },
  {
    id: "card",
    label: "Credit / Debit Card",
    desc: "Visa, Mastercard — secure payment",
    icon: CreditCard,
  },
  {
    id: "online",
    label: "Online Payment",
    desc: "JazzCash, EasyPaisa & bank transfer",
    icon: Smartphone,
  },
] as const;

function SectionCard({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5 sm:p-6">
      <h2 className="flex items-center gap-3 text-base font-semibold text-foreground">
        <span className="tnum grid h-7 w-7 place-items-center rounded-full bg-brand text-sm font-semibold text-primary-foreground">
          {step}
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function CheckoutView() {
  const router = useRouter();
  const { cartLines, cartCount, subtotal, discount, hydrated, clearCart } = useStore();

  const [delivery, setDelivery] = useState<"standard" | "express">("standard");
  const [payment, setPayment] = useState<"cod" | "card" | "online">("cod");
  const [province, setProvince] = useState(provinces[0]);
  const [submitting, setSubmitting] = useState(false);

  const merchandise = subtotal - discount;
  const deliveryFee =
    delivery === "express"
      ? EXPRESS_FEE
      : merchandise >= FREE_DELIVERY_THRESHOLD
        ? 0
        : STANDARD_DELIVERY_FEE;
  const total = merchandise + deliveryFee;

  if (!hydrated) {
    return (
      <div className="container-page py-8">
        <Skeleton className="h-9 w-40" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <Skeleton className="h-96 w-full rounded-2xl" />
          <Skeleton className="h-72 w-full rounded-2xl" />
        </div>
      </div>
    );
  }

  if (cartLines.length === 0) {
    return (
      <div className="container-page py-10">
        <EmptyState
          icon={ShoppingBag}
          title="Your cart is empty"
          description="Add some products to your cart before checking out."
          actionLabel="Start shopping"
          actionHref="/shop"
        />
      </div>
    );
  }

  function placeOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);

    const order = {
      id: `PH-${10250 + Math.floor(merchandise % 900)}`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      items: cartLines.map((l) => ({
        productId: l.product.id,
        name: l.product.name,
        image: l.product.images[0],
        brand: getBrandName(l.product.brandId),
        price: l.product.price,
        quantity: l.quantity,
      })),
      subtotal,
      discount,
      deliveryFee,
      total,
      paymentMethod: paymentOptions.find((p) => p.id === payment)!.label,
      deliveryMethod: deliveryOptions.find((d) => d.id === delivery)!.label,
      customer: {
        firstName: String(form.get("firstName") ?? ""),
        lastName: String(form.get("lastName") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
      },
      address: {
        line1: String(form.get("address") ?? ""),
        city: String(form.get("city") ?? ""),
        province,
        postalCode: String(form.get("postalCode") ?? ""),
        country: "Pakistan",
      },
    };

    try {
      window.localStorage.setItem("vitalcare.lastOrder", JSON.stringify(order));
    } catch {
      // ignore persistence failure in demo
    }

    window.setTimeout(() => {
      clearCart();
      router.push("/order-confirmation");
    }, 700);
  }

  return (
    <div className="container-page py-8">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Checkout
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Complete your details to place your order securely.
      </p>

      <form onSubmit={placeOrder} className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          {/* Customer info */}
          <SectionCard step={1} title="Customer information">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="firstName" label="First name" defaultValue={customerProfile.firstName} required />
              <Field id="lastName" label="Last name" defaultValue={customerProfile.lastName} required />
              <Field id="email" label="Email" type="email" defaultValue={customerProfile.email} required />
              <Field id="phone" label="Phone" type="tel" defaultValue={customerProfile.phone} required />
            </div>
          </SectionCard>

          {/* Delivery address */}
          <SectionCard step={2} title="Delivery address">
            <div className="grid gap-4">
              <Field
                id="address"
                label="Street address"
                defaultValue={savedAddresses[0].line1}
                required
                className="sm:col-span-2"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="city" label="City" defaultValue={savedAddresses[0].city} required />
                <div className="space-y-1.5">
                  <Label htmlFor="province">Province / State</Label>
                  <Select value={province} onValueChange={setProvince}>
                    <SelectTrigger id="province" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map((p) => (
                        <SelectItem key={p} value={p}>
                          {p}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Field id="postalCode" label="Postal code" defaultValue={savedAddresses[0].postalCode} required />
                <Field id="country" label="Country" defaultValue="Pakistan" readOnly />
              </div>
            </div>
          </SectionCard>

          {/* Delivery method */}
          <SectionCard step={3} title="Delivery method">
            <div className="grid gap-3 sm:grid-cols-2">
              {deliveryOptions.map((opt) => {
                const fee =
                  opt.id === "express"
                    ? EXPRESS_FEE
                    : merchandise >= FREE_DELIVERY_THRESHOLD
                      ? 0
                      : STANDARD_DELIVERY_FEE;
                const active = delivery === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setDelivery(opt.id)}
                    className={cn(
                      "flex items-start gap-3 rounded-xl border p-4 text-left transition-colors",
                      active ? "border-brand bg-brand-tint/50 ring-1 ring-brand" : "border-border hover:border-brand/40",
                    )}
                  >
                    <opt.icon size={20} className="mt-0.5 shrink-0 text-brand" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.eta}</p>
                      <p className="tnum mt-1 text-sm font-semibold text-foreground">
                        {fee === 0 ? "Free" : formatPrice(fee)}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border",
                        active ? "border-brand bg-brand text-primary-foreground" : "border-border",
                      )}
                    >
                      {active && <Check size={13} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </SectionCard>

          {/* Payment */}
          <SectionCard step={4} title="Payment method">
            <div className="space-y-3">
              {paymentOptions.map((opt) => {
                const active = payment === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setPayment(opt.id)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl border p-4 text-left transition-colors",
                      active ? "border-brand bg-brand-tint/50 ring-1 ring-brand" : "border-border hover:border-brand/40",
                    )}
                  >
                    <opt.icon size={20} className="shrink-0 text-brand" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.desc}</p>
                    </div>
                    <span
                      className={cn(
                        "grid h-5 w-5 shrink-0 place-items-center rounded-full border",
                        active ? "border-brand bg-brand text-primary-foreground" : "border-border",
                      )}
                    >
                      {active && <Check size={13} />}
                    </span>
                  </button>
                );
              })}
            </div>

            {payment === "card" && (
              <div className="mt-4 grid gap-4 rounded-xl border border-dashed border-border p-4 sm:grid-cols-2">
                <Field id="cardName" label="Name on card" placeholder="Ayesha Khan" className="sm:col-span-2" />
                <Field id="cardNumber" label="Card number" placeholder="4242 4242 4242 4242" className="sm:col-span-2" />
                <Field id="cardExpiry" label="Expiry" placeholder="MM / YY" />
                <Field id="cardCvc" label="CVC" placeholder="123" />
                <p className="text-xs text-muted-foreground sm:col-span-2">
                  Demo only — no real payment is processed and no card details are stored.
                </p>
              </div>
            )}
          </SectionCard>
        </div>

        {/* Summary */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">Order summary</h2>

            <ul className="mt-4 max-h-64 space-y-3 overflow-y-auto pr-1">
              {cartLines.map((l) => (
                <li key={l.productId} className="flex items-center gap-3">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border">
                    <ProductImage src={l.product.images[0]} alt={l.product.name} showWatermark={false} sizes="48px" />
                    <span className="tnum absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-foreground px-1 text-[10px] font-bold text-background">
                      {l.quantity}
                    </span>
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground">
                    {l.product.name}
                  </span>
                  <span className="tnum text-sm font-medium text-foreground">
                    {formatPrice(l.lineTotal)}
                  </span>
                </li>
              ))}
            </ul>

            <dl className="mt-5 space-y-3 border-t border-border pt-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal ({cartCount})</dt>
                <dd className="tnum font-medium text-foreground">{formatPrice(subtotal)}</dd>
              </div>
              {discount > 0 && (
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Discount</dt>
                  <dd className="tnum font-medium text-sale">−{formatPrice(discount)}</dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Delivery</dt>
                <dd className="tnum font-medium text-foreground">
                  {deliveryFee === 0 ? <span className="text-brand">Free</span> : formatPrice(deliveryFee)}
                </dd>
              </div>
            </dl>

            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <span className="text-base font-semibold text-foreground">Total</span>
              <span className="tnum text-xl font-semibold text-foreground">{formatPrice(total)}</span>
            </div>

            <Button type="submit" size="lg" className="mt-5 w-full" disabled={submitting}>
              {submitting ? "Placing order…" : `Place order · ${formatPrice(total)}`}
            </Button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock size={13} />
              Your information is encrypted and secure
            </p>
          </div>

          <Button asChild variant="ghost" className="mt-3 w-full text-brand hover:text-brand-deep">
            <Link href="/cart">Back to cart</Link>
          </Button>
        </div>
      </form>
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
      <Input id={id} name={id} suppressHydrationWarning {...props} />
    </div>
  );
}
