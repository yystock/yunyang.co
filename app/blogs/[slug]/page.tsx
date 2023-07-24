import config from "@/config/config";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Blocks, { DataProp } from "editorjs-blocks-react-renderer";
import BlogViews from "./BlogViews";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;
export async function generateStaticParams() {
  const allBlogs = await db.select().from(blogs);

  return allBlogs.map((blog) => {
    return {
      slug: blog.slug,
    };
  });
}

export const generateMetadata = async ({ params }: BlogPageProps) => {
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
    <div className="max-w-3xl mx-auto relative min-h-screen mt-8">
      <div className="text-center font-bold text-2xl my-1">{blog.title}</div>
      <div className="flex flex-row justify-center mx-auto">
        <div>{formatDate(blog.created_at.toISOString())}</div>
        <span className="mx-1">&bull;</span>
        <BlogViews slug={blog.slug} />
      </div>
      <div className="relative w-full h-72 mt-4 mb-8">{blog.image && <Image src={blog.image} fill={true} alt={blog.title} />}</div>

      <Blocks data={blog.content as DataProp} />
    </div>
  );
};

export default BlogPage;
