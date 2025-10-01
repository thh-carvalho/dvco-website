import type { NextConfig } from "next";

const isProd = process.env.NEXT_PUBLIC_IMAGE_BASE_PATH === 'production';

const nextConfig: NextConfig = {
  // Use the correct basePath and assetPrefix for production builds
  basePath: isProd ? `/dvco-website/` : ``,
  output: "export", // Enables static exports
  reactStrictMode: true,

  // This is the crucial part for images to work in a static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
