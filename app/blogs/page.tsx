import config from "@/config/config";
import PostLink from "@/components/PostLink";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { desc } from "drizzle-orm";

export const metadata = {
  title: `Blog | ${config.title}`,
  description: "A blog about Javascript, React and Web Development",
  openGraph: {
    title: "Blog",
    description: "A blog about Javascript, React and Web Development",
    url: `${config.siteUrl}/blog`,
  },
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
