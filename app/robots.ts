import type { MetadataRoute } from "next";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://yunyang-co.vercel.app/sitemap.xml",
    host: "https://yunyang-co.vercel.app",
  };
};

export default robots;
