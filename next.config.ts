import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/document-checklist/united-states',
        destination: '/document-checklist/united-states-of-america',
        permanent: true,
      },
      {
        source: '/document-checklist/schengen',
        destination: '/document-checklist/schengen-countries',
        permanent: true,
      },
      {
        source: '/document-checklist/turkey',
        destination: '/document-checklist/turkiye',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
