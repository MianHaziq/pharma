import { company, socials } from "@/data/company";

// Organization + WebSite structured data. This is the highest-leverage signal
// for the branded query "bilal pharmaceuticals" — it helps Google build a
// knowledge panel and tie this domain to the brand name.
//
// Only VERIFIED fields from data/company.ts are emitted. Placeholder data
// (founding year, testimonials, unfilled socials) is deliberately excluded —
// invalid structured data hurts more than it helps.

const base = `https://${company.domain}`;

// Real social profile URLs only. Currently all socials are "#" placeholders, so
// `sameAs` resolves to []. TODO: add real profile URLs to `socials` in
// data/company.ts and they flow into sameAs automatically.
const sameAs = socials
  .map((s): string => s.href)
  .filter((href) => href !== "#" && href.startsWith("http"));

const organization = {
  "@type": "Organization",
  "@id": `${base}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: base,
  logo: `${base}/logo-bi.png`,
  image: `${base}/BilalPharmaLogo.jpeg`,
  description: company.description,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.hq.line1,
    addressLocality: "Islamabad",
    addressRegion: "Islamabad Capital Territory",
    addressCountry: "PK",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      email: company.email,
      contactType: "sales",
      areaServed: "PK",
      availableLanguage: ["en", "ur"],
    },
    {
      "@type": "ContactPoint",
      telephone: company.phone2,
      contactType: "customer support",
      areaServed: "PK",
    },
  ],
  founder: { "@type": "Person", name: company.ceo },
  areaServed: { "@type": "Country", name: "Pakistan" },
  ...(sameAs.length > 0 ? { sameAs } : {}),
};

const website = {
  "@type": "WebSite",
  "@id": `${base}/#website`,
  url: base,
  name: company.name,
  description: company.descriptionShort,
  publisher: { "@id": `${base}/#organization` },
  inLanguage: "en",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Static, developer-authored data — no user input is interpolated.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
