import type { Metadata } from "next";
import Link from "next/link";
import { Package, Award, MapPin, Truck, ArrowRight, Headset } from "lucide-react";
import { getOrders } from "@/lib/orders";
import { customerProfile, savedAddresses } from "@/data/account";
import { OrderCard } from "@/components/account/order-card";

export const metadata: Metadata = {
  title: "My account",
  description: "Manage your orders, profile and addresses.",
};

export default function AccountDashboard() {
  const orders = getOrders();
  const active = orders.filter((o) => o.status !== "delivered").length;

  const stats = [
    { icon: Package, label: "Total orders", value: orders.length.toString() },
    { icon: Truck, label: "Active orders", value: active.toString() },
    {
      icon: Award,
      label: "Loyalty points",
      value: customerProfile.loyaltyPoints.toLocaleString(),
    },
    {
      icon: MapPin,
      label: "Saved addresses",
      value: savedAddresses.length.toString(),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand">
              <s.icon size={19} />
            </span>
            <p className="tnum mt-3 text-2xl font-semibold text-foreground">
              {s.value}
            </p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Recent orders</h2>
          <Link
            href="/account/orders"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-brand-deep"
          >
            View all
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="mt-4 space-y-4">
          {orders.slice(0, 2).map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>

      {/* Help tiles */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/track"
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
            <Truck size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Track an order</p>
            <p className="text-xs text-muted-foreground">
              Follow your delivery in real time
            </p>
          </div>
          <ArrowRight size={17} className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
        </Link>
        <Link
          href="/contact"
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-tint text-brand">
            <Headset size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Need help?</p>
            <p className="text-xs text-muted-foreground">
              Our pharmacists are here 7 days a week
            </p>
          </div>
          <ArrowRight size={17} className="ml-auto text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
        </Link>
      </div>
    </div>
  );
}
