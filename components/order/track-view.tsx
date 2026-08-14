"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, PackageSearch } from "lucide-react";
import { getOrderById } from "@/lib/orders";
import type { Order } from "@/lib/types";
import { OrderDetail } from "./order-detail";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TrackView({ initialId = "" }: { initialId?: string }) {
  const [value, setValue] = useState(initialId);
  const [searched, setSearched] = useState(Boolean(initialId));
  const [order, setOrder] = useState<Order | undefined>(() =>
    initialId ? getOrderById(initialId) : undefined,
  );

  function lookup(e: React.FormEvent) {
    e.preventDefault();
    setOrder(getOrderById(value.trim()));
    setSearched(true);
  }

  return (
    <div className="container-page py-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Track your order
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Enter your order number to see the latest delivery status.
        </p>

        <form onSubmit={lookup} className="mx-auto mt-6 flex max-w-md gap-2">
          <div className="relative flex-1">
            <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. PH-10245"
              aria-label="Order number"
              className="pl-10"
              suppressHydrationWarning
            />
          </div>
          <Button type="submit">Track</Button>
        </form>
        {!searched && (
          <p className="mt-3 text-xs text-muted-foreground">
            Try demo order <button type="button" onClick={() => { setValue("PH-10245"); setOrder(getOrderById("PH-10245")); setSearched(true); }} className="font-semibold text-brand hover:underline">PH-10245</button>
          </p>
        )}
      </div>

      <div className="mx-auto mt-10 max-w-4xl">
        {searched && order && <OrderDetail order={order} />}
        {searched && !order && (
          <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-card px-6 py-14 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-muted text-muted-foreground">
              <PackageSearch size={26} />
            </span>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              We couldn&apos;t find that order
            </h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Please check your order number and try again. You can find it in
              your confirmation email or your account.
            </p>
            <Button asChild variant="outline" className="mt-5">
              <Link href="/account/orders">View my orders</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
