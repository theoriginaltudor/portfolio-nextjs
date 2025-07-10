import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  distDir: "out",
  /* config options here */
};

export default nextConfig;
