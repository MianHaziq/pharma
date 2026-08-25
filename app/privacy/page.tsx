import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${company.name} collects, uses and protects personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="1 August 2026"
      intro={`This policy explains how ${company.legalName} handles the information you share with us through this website and our business relationships.`}
      sections={[
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly — such as your name, company, email and message when you contact us, request documentation or subscribe to updates.",
            "We also collect limited technical information automatically, including device and browser details and how you use the site, to help us keep it secure and improve it.",
          ],
        },
        {
          heading: "How we use information",
          list: [
            "To respond to enquiries and provide technical and commercial support.",
            "To send updates and insights you have requested.",
            "To operate, secure and improve our website and services.",
            "To meet legal, regulatory and pharmacovigilance obligations.",
          ],
        },
        {
          heading: "Cookies & analytics",
          body: [
            "We use a small number of cookies to run the site and understand aggregate usage. You can control cookies through your browser settings; disabling some may affect how the site works.",
          ],
        },
        {
          heading: "Sharing information",
          body: [
            "We do not sell personal information. We share it only with trusted service providers who help us operate, and where required by law or regulation.",
          ],
        },
        {
          heading: "Data security & retention",
          body: [
            "We apply appropriate technical and organisational measures to protect personal information, and we keep it only as long as necessary for the purposes described here or as required by law.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on your location, you may have rights to access, correct, delete or restrict the use of your personal information. To exercise these rights, contact us using the details below.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about this policy can be sent to ${company.email}. This is a design demonstration for a fictional company; the policy is illustrative placeholder content.`,
          ],
        },
      ]}
    />
  );
}
