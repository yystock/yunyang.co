/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "pbs.twimg.com" },
      { hostname: "worker-ai-anystyles.yy763831702.workers.dev" },
    ],
  },
};

module.exports = nextConfig;
