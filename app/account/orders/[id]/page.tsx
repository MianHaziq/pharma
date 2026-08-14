import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getOrders, getOrderById } from "@/lib/orders";
import { OrderDetail } from "@/components/order/order-detail";

export function generateStaticParams() {
  return getOrders().map((o) => ({ id: o.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return { title: `Order ${id}` };
}

export default async function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = getOrderById(id);
  if (!order) notFound();

  return (
    <div>
      <Link
        href="/account/orders"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
      >
        <ArrowLeft size={16} />
        Back to orders
      </Link>
      <div className="mt-5">
        <OrderDetail order={order} />
      </div>
    </div>
  );
}
