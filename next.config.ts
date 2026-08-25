import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Products/catalog is hidden for now — real products will be uploaded later.
  // Temporary (307) redirects so the placeholder catalog isn't reachable by URL.
  // To bring it back: delete this redirects() block and restore the nav links
  // (Products → /solutions in site-header NAV and the footer).
  async redirects() {
    return [
      { source: "/solutions", destination: "/", permanent: false },
      { source: "/solutions/:category", destination: "/", permanent: false },
      { source: "/products/:slug", destination: "/", permanent: false },
    ];
  },
  images: {
    // Editorial photography is served from Unsplash for this demo. Swap these
    // for the client's own asset host (or a CMS domain) when real photography
    // is connected — no component changes required.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    qualities: [60, 70, 80, 90],
  },
};

export default nextConfig;
