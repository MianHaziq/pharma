import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { termsPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: termsPage.intro,
};

export default function TermsPage() {
  return <ContentPage page={termsPage} />;
}
