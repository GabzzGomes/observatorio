import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  images: {
    unoptimized: isDev,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api.opara.local",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
