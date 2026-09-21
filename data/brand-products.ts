import type { BrandProductShot } from "@/lib/types";

// Product artwork supplied by the client, one folder per principal. Each shot
// has a thumbnail for the grid and a full-size file behind it, so the dense
// datasheets stay readable when opened. Alt text is transcribed from the
// artwork itself - nothing here is invented copy.
//
// NOTE: several sheets filed under Leads Pharma carry another company's
// branding (Top Pharma, Faber, MultiVet). Grouping follows the client's own
// folders - confirm attribution before launch.

export const brandProducts: Record<string, BrandProductShot[]> = {
  "brand-toppharma": [
    {
      src: "/products/top-pharma/01-debat-powder-t.webp",
      full: "/products/top-pharma/01-debat-powder.webp",
      alt: "Debat powder",
      wide: true,
    },
    {
      src: "/products/top-pharma/02-diasulfina-100-l-oral-solution-t.webp",
      full: "/products/top-pharma/02-diasulfina-100-l-oral-solution.webp",
      alt: "Diasulfina 100-L oral solution",
      wide: true,
    },
    {
      src: "/products/top-pharma/03-albex-oral-suspension-t.webp",
      full: "/products/top-pharma/03-albex-oral-suspension.webp",
      alt: "Albex oral suspension",
      wide: true,
    },
    {
      src: "/products/top-pharma/04-electro-vit-c-oral-solution-t.webp",
      full: "/products/top-pharma/04-electro-vit-c-oral-solution.webp",
      alt: "Electro Vit-C oral solution",
      wide: true,
    },
    {
      src: "/products/top-pharma/05-icc-o-bactin-powder-furaltadone-20-t.webp",
      full: "/products/top-pharma/05-icc-o-bactin-powder-furaltadone-20.webp",
      alt: "ICC-O-Bactin powder - furaltadone 20%",
      wide: true,
    },
    {
      src: "/products/top-pharma/06-colimicin-colistin-sulphate-t.webp",
      full: "/products/top-pharma/06-colimicin-colistin-sulphate.webp",
      alt: "Colimicin - colistin sulphate",
      wide: true,
    },
    {
      src: "/products/top-pharma/07-vety-florocare-oral-solution-florfenicol-t.webp",
      full: "/products/top-pharma/07-vety-florocare-oral-solution-florfenicol.webp",
      alt: "Vety Florocare oral solution - florfenicol",
      wide: true,
    },
    {
      src: "/products/top-pharma/08-inter-flox-liquid-t.webp",
      full: "/products/top-pharma/08-inter-flox-liquid.webp",
      alt: "Inter Flox liquid",
      wide: false,
    },
    {
      src: "/products/top-pharma/09-soluvit-e-plus-liquid-t.webp",
      full: "/products/top-pharma/09-soluvit-e-plus-liquid.webp",
      alt: "Soluvit E Plus liquid",
      wide: true,
    },
    {
      src: "/products/top-pharma/10-lispam-powder-t.webp",
      full: "/products/top-pharma/10-lispam-powder.webp",
      alt: "Lispam powder",
      wide: false,
    },
    {
      src: "/products/top-pharma/11-phoscasan-liquid-t.webp",
      full: "/products/top-pharma/11-phoscasan-liquid.webp",
      alt: "Phoscasan liquid",
      wide: true,
    },
    {
      src: "/products/top-pharma/12-cemox-bacteriolytic-effect-t.webp",
      full: "/products/top-pharma/12-cemox-bacteriolytic-effect.webp",
      alt: "Cemox - bacteriolytic effect",
      wide: true,
    },
    {
      src: "/products/top-pharma/13-antamine-antiviral-effect-t.webp",
      full: "/products/top-pharma/13-antamine-antiviral-effect.webp",
      alt: "Antamine - antiviral effect",
      wide: false,
    },
    {
      src: "/products/top-pharma/14-tyloprim-crd-liquid-t.webp",
      full: "/products/top-pharma/14-tyloprim-crd-liquid.webp",
      alt: "Tyloprim CRD liquid",
      wide: false,
    },
  ],
  "brand-leads": [
    {
      src: "/products/leads-pharma/01-vety-s-t-p-v-c-liquid-fosfotyl-and-coli-nor-rang-t.webp",
      full: "/products/leads-pharma/01-vety-s-t-p-v-c-liquid-fosfotyl-and-coli-nor-rang.webp",
      alt: "Vety S.T.P, V.C Liquid, Fosfotyl and Coli-Nor range sheet",
      wide: false,
    },
    {
      src: "/products/leads-pharma/02-acidex-foxigen-broad-spectrum-disinfectant-t.webp",
      full: "/products/leads-pharma/02-acidex-foxigen-broad-spectrum-disinfectant.webp",
      alt: "Acidex Foxigen broad-spectrum disinfectant",
      wide: true,
    },
    {
      src: "/products/leads-pharma/03-acidex-fg-power-160-disinfectant-t.webp",
      full: "/products/leads-pharma/03-acidex-fg-power-160-disinfectant.webp",
      alt: "Acidex FG Power 160 disinfectant",
      wide: true,
    },
    {
      src: "/products/leads-pharma/04-disinfectant-range-complete-hygiene-solution-t.webp",
      full: "/products/leads-pharma/04-disinfectant-range-complete-hygiene-solution.webp",
      alt: "Disinfectant range - complete hygiene solution",
      wide: false,
    },
    {
      src: "/products/leads-pharma/05-acidex-fg-cid-120-broad-spectrum-disinfectant-t.webp",
      full: "/products/leads-pharma/05-acidex-fg-cid-120-broad-spectrum-disinfectant.webp",
      alt: "Acidex FG CID 120 broad-spectrum disinfectant",
      wide: true,
    },
    {
      src: "/products/leads-pharma/06-acidex-chlor-tab-50-effervescent-tablet-disinfec-t.webp",
      full: "/products/leads-pharma/06-acidex-chlor-tab-50-effervescent-tablet-disinfec.webp",
      alt: "Acidex Chlor Tab 50 effervescent tablet disinfectant",
      wide: false,
    },
    {
      src: "/products/leads-pharma/07-fogides-pf-two-step-fumigant-disinfectant-t.webp",
      full: "/products/leads-pharma/07-fogides-pf-two-step-fumigant-disinfectant.webp",
      alt: "Fogides PF two-step fumigant disinfectant",
      wide: false,
    },
    {
      src: "/products/leads-pharma/08-acidex-chlor-tab-50-chlorine-based-disinfectant-t.webp",
      full: "/products/leads-pharma/08-acidex-chlor-tab-50-chlorine-based-disinfectant.webp",
      alt: "Acidex Chlor Tab 50 chlorine-based disinfectant",
      wide: false,
    },
    {
      src: "/products/leads-pharma/09-nicofrin-injection-t.webp",
      full: "/products/leads-pharma/09-nicofrin-injection.webp",
      alt: "Nicofrin injection",
      wide: true,
    },
    {
      src: "/products/leads-pharma/10-target-crd-injection-t.webp",
      full: "/products/leads-pharma/10-target-crd-injection.webp",
      alt: "Target CRD injection",
      wide: true,
    },
    {
      src: "/products/leads-pharma/11-spin-c-water-soluble-powder-t.webp",
      full: "/products/leads-pharma/11-spin-c-water-soluble-powder.webp",
      alt: "Spin-C water-soluble powder",
      wide: false,
    },
    {
      src: "/products/leads-pharma/12-tritin-le-powder-t.webp",
      full: "/products/leads-pharma/12-tritin-le-powder.webp",
      alt: "Tritin-LE powder",
      wide: true,
    },
    {
      src: "/products/leads-pharma/13-virox-td-ws-powder-t.webp",
      full: "/products/leads-pharma/13-virox-td-ws-powder.webp",
      alt: "Virox TD W/S powder - antiviral and antibacterial, 5 kg",
      wide: false,
    },
  ],
  "brand-multivet": [
    {
      src: "/products/multivet-pharma/01-neochlor-powder-neomycin-sulphate-and-chlortetra-t.webp",
      full: "/products/multivet-pharma/01-neochlor-powder-neomycin-sulphate-and-chlortetra.webp",
      alt: "Neochlor powder - neomycin sulphate and chlortetracycline",
      wide: false,
    },
    {
      src: "/products/multivet-pharma/02-intracin-plus-powder-enrofloxacin-colistin-and-a-t.webp",
      full: "/products/multivet-pharma/02-intracin-plus-powder-enrofloxacin-colistin-and-a.webp",
      alt: "Intracin Plus powder - enrofloxacin, colistin and amantadine",
      wide: false,
    },
    {
      src: "/products/multivet-pharma/03-pozadol-water-soluble-powder-t.webp",
      full: "/products/multivet-pharma/03-pozadol-water-soluble-powder.webp",
      alt: "Pozadol water-soluble powder",
      wide: false,
    },
    {
      src: "/products/multivet-pharma/04-neochlor-water-soluble-powder-jars-t.webp",
      full: "/products/multivet-pharma/04-neochlor-water-soluble-powder-jars.webp",
      alt: "Neochlor water-soluble powder jars",
      wide: false,
    },
  ],
  "brand-innomax": [
    {
      src: "/products/innomax-international/01-fosfotyl-powder-t.webp",
      full: "/products/innomax-international/01-fosfotyl-powder.webp",
      alt: "Fosfotyl powder",
      wide: false,
    },
    {
      src: "/products/innomax-international/02-vety-oxol-liquid-t.webp",
      full: "/products/innomax-international/02-vety-oxol-liquid.webp",
      alt: "Vety Oxol liquid",
      wide: false,
    },
  ],
};
