import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { deliveryPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Delivery information",
  description: deliveryPage.intro,
};

export default function DeliveryPage() {
  return <ContentPage page={deliveryPage} />;
}
