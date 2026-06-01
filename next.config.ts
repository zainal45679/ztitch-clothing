import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4500",
        pathname: "/uploads/**", // ✅ FIXED
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;