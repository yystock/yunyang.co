import config from "@/config/config";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogViews from "./BlogViews";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;
export async function generateStaticParams() {
  const allBlogs = await db.select().from(blogs);
  console.log("all blogs", allBlogs);
  return allBlogs.map((blog) => {
    return {
      slug: blog.slug,
    };
  });
}

export const generateMetadata = async ({ params }: BlogPageProps) => {
  console.log(params.slug);
  const slug = params?.slug.toString();

  const select = await db.select().from(blogs).where(eq(blogs.slug, slug));

  if (!select || select.length == 0) {
    notFound();
  }
  const blog = select[0];

  return {
    title: `${blog.title} | ${config.title}`,
    description: blog.title,
    openGraph: {
      title: blog.title,
      description: blog.title,
      url: `${config.siteUrl}/blogs/${blog.slug}`,
      type: "article",
      images: [
        {
          url: `${blog.image}`,
          width: 1200,
          height: 630,
        },
      ],
      authors: [config.author.name],
      publishedTime: blog.created_at.toISOString(),
    },
  } satisfies Metadata;
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const select = await db.select().from(blogs).where(eq(blogs.slug, params.slug));

  if (!select || select.length == 0) {
    notFound();
  }

  const blog = select[0];

  return (
    <div>
      <div>{blog.title}</div>
      <div>{blog.count}</div>
      <div>{blog.created_at.toISOString()}</div>
      <div>{blog.image}</div>
      <BlogViews slug={blog.slug} />
      <div></div>
    </div>
  );
};

export default BlogPage;
