import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Use the correct basePath and assetPrefix for production builds
  basePath: isProd ? "/dvco-website" : "",
  assetPrefix: isProd ? "/dvco-website/" : "",

  output: "export", // Enables static exports
  reactStrictMode: true,

  // This is the crucial part for images to work in a static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
