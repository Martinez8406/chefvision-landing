/** @type {import('next').NextConfig} */

const SAMPLE_MENU_URL =
  "https://app.chefvision.pl/menu/e1137650-eb5e-4323-9a90-83e2db4f048c"

const nextConfig = {
  // The built-in trailing-slash redirect is checked before user redirects,
  // which would make /przyklad/ a second hop. Handle that path here, and
  // keep the same slash redirect for every other URL.
  skipTrailingSlashRedirect: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/przyklad",
        destination: SAMPLE_MENU_URL,
        permanent: true,
      },
      {
        source: "/przyklad/",
        destination: SAMPLE_MENU_URL,
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
