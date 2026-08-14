import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { privacyPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: privacyPage.intro,
};

export default function PrivacyPage() {
  return <ContentPage page={privacyPage} />;
}
