import { blogs } from "@/db/schema";
import * as z from "zod";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const insertBlogSchema = createInsertSchema(blogs, {
  content: z.any(),
});
export const blogSchema = insertBlogSchema.pick({
  image: true,
  title: true,
  slug: true,
  content: true,
  published: true,
});

export const selectBlogSchema = createSelectSchema(blogs, {
  content: z.any(),
});
