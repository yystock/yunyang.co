import config from "@/config/config";
import PostLink from "@/components/PostLink";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { desc } from "drizzle-orm";
import { PageWrapper } from "@/components/PageWrapper";

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
    <PageWrapper>
      <div className="mx-auto flex flex-col gap-4 max-w-3xl mt-8">
        {allBlogs.map((blog, index) => (
          <PostLink slug={blog.slug} key={index} date={blog.created_at.toISOString()} title={blog.title} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default BlogsPage;
