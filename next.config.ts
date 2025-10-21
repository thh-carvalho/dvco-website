import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use the correct basePath and assetPrefix for production builds
  // basePath: `/dvco-website`,
  // output: "export", // Enables static exports
  // reactStrictMode: true,

  // // This is the crucial part for images to work in a static export
  // images: {
  //   unoptimized: true,
  // },
};

export default nextConfig;
