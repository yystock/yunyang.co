import { NextResponse } from "next/server";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { sql } from "drizzle-orm";

export const GET = async () => {
  const result = await db
    .select({
      sum: sql<number>`SUM(${blogs.count})`,
    })
    .from(blogs);

  let count = 0;
  if (result.length > 0 && result[0].sum) {
    count = result[0].sum;
  }

  return NextResponse.json({ count });
};
