import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of use",
  description: `The terms that govern your use of the ${company.name} website.`,
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      updated="1 August 2026"
      intro={`These terms govern your use of the ${company.legalName} website. By using the site, you agree to them.`}
      sections={[
        {
          heading: "Using this website",
          body: [
            "You may use this website for lawful, informational purposes. You agree not to misuse it, interfere with its operation or attempt to access it in any way other than through the interface we provide.",
          ],
        },
        {
          heading: "Product information",
          body: [
            "Information about products is provided for general reference. Availability, registration and approved indications vary by country. Always follow the approved local label and the guidance of a qualified veterinarian.",
            "Nothing on this website is veterinary advice, a diagnosis or a treatment recommendation for any specific animal or operation.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The content, design, trademarks and logos on this site are owned by or licensed to the company and are protected by law. You may not reproduce or reuse them without permission.",
          ],
        },
        {
          heading: "No warranties",
          body: [
            "The website is provided “as is” without warranties of any kind. We do not guarantee that it will be uninterrupted, error-free or that the information is complete or current at all times.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the fullest extent permitted by law, we are not liable for any indirect or consequential loss arising from your use of, or inability to use, this website.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these terms from time to time. Continued use of the site after changes take effect means you accept the revised terms.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about these terms can be sent to ${company.email}. This is a design demonstration for a fictional company; the terms are illustrative placeholder content.`,
          ],
        },
      ]}
    />
  );
}
