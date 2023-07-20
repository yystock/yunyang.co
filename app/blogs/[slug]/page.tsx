import config from "@/config/config";
import PostLink from "@/components/PostLink";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  const allBlogs = await db.select().from(blogs);

  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

interface BlogPageProps {
  params: {
    slug: string;
  };
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

const BlogsPage = async () => {
  const allBlogs = await db.select().from(blogs).orderBy(desc(blogs.created_at));
  return (
    <div>
      <h1 className="my-10 font-display text-3xl font-bold sm:text-4xl">Blogs</h1>
      {allBlogs.map((blog) => (
        <PostLink slug={blog.slug} key={blog.slug} date={blog.created_at.toISOString()} title={blog.title} />
      ))}
    </div>
  );
};

export default BlogsPage;
