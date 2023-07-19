import { Editor } from "@/components/Editor";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";
import React from "react";

interface EditBlogProps {
  params: {
    blogId: string;
  };
}

export default async function EditBlog({ params }: EditBlogProps) {
  const blog = await db.select().from(blogs).where(eq(blogs.id, params.blogId));

  return (
    <div>
      <Editor blog={blog[0]} id={blog[0].id} />
    </div>
  );
}
