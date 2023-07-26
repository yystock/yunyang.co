import { db } from "@/db/connection";
import { blogs } from "@/db/schema";

const sitemap = async (): Promise<{ url: string; lastModified?: string | Date | undefined }[]> => {
  const allPosts = await db.select().from(blogs);

  const posts = allPosts.map((post) => ({
    url: `https://yunyang-co.vercel.app/blog/${post.slug}`,
    lastModified: post.updated_at ? post.updated_at.toISOString().split("T")[0] : post.created_at.toISOString().split("T")[0],
  }));

  const routes = ["", "/blogs", "/about"].map((route) => ({
    url: `https://yunyang-co.vercel.app/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};

export default sitemap;
