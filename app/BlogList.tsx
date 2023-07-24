import { desc } from "drizzle-orm";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import Pagination from "@/components/Pagination";

const BlogList = async () => {
  const initialBlogs = await db.select().from(blogs).orderBy(desc(blogs.created_at)).limit(2);

  if (!initialBlogs || initialBlogs.length == 0) {
    return null;
  }
  const blogList = initialBlogs.map((obj) => ({
    ...obj,
    created_at: obj.created_at.toISOString(),
  }));
  return <Pagination initialBlogs={blogList} />;
};

export default BlogList;
