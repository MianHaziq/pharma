import { orders } from "@/data/orders";
import type { Order } from "./types";

export function getOrders(): Order[] {
  return orders;
}

export function getOrderById(id: string): Order | undefined {
  return orders.find((o) => o.id.toLowerCase() === id.toLowerCase());
}
