import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
interface ViewsCounterProps {
  slug: string;
}

const ViewsCounter = async ({ slug }: ViewsCounterProps) => {
  const data = await db.select().from(blogs).where(eq(blogs.slug, slug));

  return <>{data[0]?.count}</>;
};

export default ViewsCounter;
