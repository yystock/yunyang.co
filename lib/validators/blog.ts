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
const selectBlogListSchema = createSelectSchema(blogs, {
  created_at: z.string(),
});

const blogCardSchema = selectBlogSchema.pick({
  count: true,
  title: true,
  image: true,
  slug: true,
  created_at: true,
});
const blogListSchema = selectBlogListSchema.pick({
  count: true,
  title: true,
  image: true,
  slug: true,
  created_at: true,
});
export type BlogCardType = z.infer<typeof blogCardSchema>;
export type BlogListType = z.infer<typeof blogListSchema>;
