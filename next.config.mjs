/** @type {import('next').NextConfig} */
// Spoke app: served by Vercel at https://lecbricks11.vercel.app/letbricks and
// proxied by the hub at https://primegearlab.com/letbricks.
// basePath makes /_next/static, next/link and next/image all live under /letbricks,
// so the hub's single rewrite rule (/letbricks/:path* -> spoke/letbricks/:path*) covers every asset.
// No assetPrefix on purpose: with basePath it is redundant, and a cross-origin prefix
// would bypass the hub proxy.
const nextConfig = {
  basePath: "/letbricks",
  trailingSlash: false,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.letbricks.com", pathname: "/wp-content/uploads/**" },
    ],
  },
};
export default nextConfig;
