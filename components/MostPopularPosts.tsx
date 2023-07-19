import PostLink from "@/components/PostLink";
import { desc } from "drizzle-orm";

import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { formatDate } from "@/lib/utils";

const MostPopularPosts = async () => {
  const topBlogs = await db.select().from(blogs).orderBy(desc(blogs.count)).limit(3);

  return (
    <>
      {topBlogs.map((post) => (
        <PostLink key={post.slug} title={post.title} slug={post.slug} date={formatDate(post.created_at.toISOString())} />
      ))}
    </>
  );
};

export default MostPopularPosts;
