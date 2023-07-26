import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Blog | Yun",
    short_name: "Yun",
    description: "Software Developer with a passion for JavaScript Technologies",
    icons: [
      {
        src: "/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    start_url: "/",
    theme_color: "#059669",
    background_color: "#111827",
    display: "minimal-ui",
  };
};

export default manifest;
