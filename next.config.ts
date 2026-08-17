import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
