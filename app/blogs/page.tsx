import config from "@/config/config";
import PostLink from "@/components/PostLink";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { desc } from "drizzle-orm";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata = {
  title: `Blog | ${config.title}`,
  description: "A blog about Javascript, React and Web Development",
};

const BlogsPage = async () => {
  const allBlogs = await db.select().from(blogs).orderBy(desc(blogs.created_at));
  return (
    <PageWrapper>
      <div className="flex flex-col gap-2 max-w-3xl mt-8">
        {allBlogs.map((blog, index) => (
          <PostLink slug={blog.slug} key={index} date={blog.created_at.toISOString()} title={blog.title} views={blog.count} />
        ))}
      </div>
    </PageWrapper>
  );
};

export default BlogsPage;
