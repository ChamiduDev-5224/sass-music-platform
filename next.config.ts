import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com','aceternity.com'], // Add your image domain here
  },
  eslint:{
    ignoreDuringBuilds:true,
  },
  typescript:{
    ignoreBuildErrors:true
  }
  /* config options here */
};

export default nextConfig;
