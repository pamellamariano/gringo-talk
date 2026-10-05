import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/gringo-talk.html",
      },
    ];
  },
};

export default nextConfig;
