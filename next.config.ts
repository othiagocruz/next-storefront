import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://cdn.shadcnstudio.com/ss-assets/components/card/image-11.png?width=300&format=auto"
      ),
    ],
  },
};

export default nextConfig;
