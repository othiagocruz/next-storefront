import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    hasura: {
      stale: 60,
      revalidate: 300,
      expire: 86400,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**/**",
      },
    ],
  },
};

export default nextConfig;
