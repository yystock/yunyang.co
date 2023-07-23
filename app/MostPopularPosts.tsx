import { desc } from "drizzle-orm";

import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import Carousel from "@/components/Carousel";

const MostPopularPosts = async () => {
  const topBlogs = await db.select().from(blogs).orderBy(desc(blogs.count)).limit(5);

  if (!topBlogs || topBlogs.length == 0) {
    return null;
  }

  return <Carousel topBlogs={topBlogs} />;
};

export default MostPopularPosts;
