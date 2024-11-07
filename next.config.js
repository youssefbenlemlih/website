const { createContentlayerPlugin } = require("next-contentlayer2");

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};
const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
});

module.exports = withContentlayer(nextConfig);
