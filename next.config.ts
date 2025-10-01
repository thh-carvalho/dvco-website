import type { NextConfig } from "next";

const nextConfig = {
  assetPrefix:'https://thh-carvalho/dvco-website',
  output: "export",
  reactStrictMode: true
};

const isProd = process.env.NODE_ENV === 'production';

    module.exports = {
      basePath: isProd ? '/dvco-website' : '',
      assetPrefix: isProd ? '/dvco-website/' : '',
      images: {
        unoptimized: true,
      },
    };
export default nextConfig;
