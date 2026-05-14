/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: 'i.postimg.cc' },
      { hostname: 'images.unsplash.com' },
      { hostname: 'i.pravatar.cc' },
      { hostname: 'randomuser.me' },
    ],
  },
};

export default nextConfig;
