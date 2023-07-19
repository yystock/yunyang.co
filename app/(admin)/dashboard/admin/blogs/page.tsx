import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import Link from "next/link";
import { desc, sql } from "drizzle-orm";

import React from "react";
import BlogTable from "./BlogTable";

interface DashboardBlogsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function DashboardBlogs({ searchParams }: DashboardBlogsProps) {
  const { page, per_page } = searchParams;
  const take = typeof per_page === "string" ? parseInt(per_page) : 5;
  const skip = typeof page === "string" ? (parseInt(page) - 1) * take : 0;
  const allBlogs = await db.select().from(blogs).orderBy(desc(blogs.created_at)).limit(take).offset(skip);

  const totalBlogs = await db.select({ count: sql<number>`count(*)` }).from(blogs);
  const pageCount = totalBlogs[0].count === 0 ? 1 : Math.ceil(totalBlogs[0].count / take);
  const currentPage = skip / take + 1;
  return (
    <div className="flex flex-col">
      <div className="flex justify-between pt-8 items-center">
        <h1>Blogs</h1>

        <Link className="p-3 bg-accent rounded-3xl" href="/dashboard/admin/blogs/add">
          Add Blog
        </Link>
      </div>
      {allBlogs ? (
        <div className="mt-10">
          <BlogTable data={allBlogs} pagesCount={pageCount} currentPage={currentPage} />
        </div>
      ) : (
        <div>No Blogs Found</div>
      )}
    </div>
  );
}
