import dayjs from "dayjs";
import { NextResponse } from "next/server";
import { Feed } from "feed";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";

export const GET = async () => {
  const feed = new Feed({
    title: "Yun's Blog RSS",
    description: "The RSS feed for my blog",
    id: "https://yunyang-co.vercel.app/",
    link: "https://yunyang-co.vercel.app/",
    image: "https://yunyang-co.vercel.app/cover-pic.jpg",
    favicon: "https://yunyang-co.vercel.app/favicon-32x32.png",
    copyright: `All rights reserved ${new Date().getFullYear()}, Yun`,
    author: {
      name: "Yun",
      link: "https://yunyang-co.vercel.app/",
    },
  });
  const allBlogs = await db.select().from(blogs);
  for (const post of allBlogs) {
    feed.addItem({
      title: post.title,
      id: `https://yunyang-co.vercel.app/blog/${post.slug}`,
      link: `https://yunyang-co.vercel.app/blog/${post.slug}`,
      description: post.description ? post.description : undefined,
      date: dayjs(post.created_at).toDate(),
      image: `https://yunyang-co.vercel.app${post.image}`,
    });
  }

  const content = feed.rss2();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
