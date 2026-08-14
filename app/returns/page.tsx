import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { returnsPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Returns & refunds",
  description: returnsPage.intro,
};

export default function ReturnsPage() {
  return <ContentPage page={returnsPage} />;
}
