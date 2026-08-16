import type { Metadata } from "next";
import { Package } from "lucide-react";
import { getOrders } from "@/lib/orders";
import { OrderCard } from "@/components/account/order-card";
import { EmptyState } from "@/components/empty-state";

export const metadata: Metadata = {
  title: "My orders",
  description: "View and track all your PoultriMed orders.",
};

export default function OrdersPage() {
  const orders = getOrders();

  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">My orders</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        {orders.length} orders placed
      </p>

      {orders.length > 0 ? (
        <div className="mt-5 space-y-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <EmptyState
          className="mt-6"
          icon={Package}
          title="No orders yet"
          description="When you place your first order, it will appear here."
          actionLabel="Start shopping"
          actionHref="/shop"
        />
      )}
    </div>
  );
}
