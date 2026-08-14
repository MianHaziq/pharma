import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { aboutPage } from "@/data/pages";

export const metadata: Metadata = {
  title: "About VitalCare",
  description: aboutPage.intro,
};

export default function AboutPage() {
  return <ContentPage page={aboutPage} />;
}
