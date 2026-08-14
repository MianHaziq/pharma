import type { Metadata } from "next";
import { TrackView } from "@/components/order/track-view";

export const metadata: Metadata = {
  title: "Track your order",
  description: "Track the delivery status of your VitalCare Pharmacy order.",
};

export default async function TrackPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order = "" } = await searchParams;
  return <TrackView initialId={order} />;
}
