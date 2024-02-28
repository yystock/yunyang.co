import { getCurrentUser } from "@/lib/session";
import { db } from "@/db/connection";
import { blogSchema } from "@/lib/validators/blog";
import { z } from "zod";
import { blogs, users } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { image, title, content, slug, published, description } = blogSchema.parse(body);

    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new Response("Unauthorized", { status: 401 });
    }
    const selected = await db.select().from(users).where(eq(users.id, currentUser.id));
    if (selected[0].role !== "yun") {
      return new Response("Permission denied", { status: 401 });
    }

    await db.insert(blogs).values({
      title: title,
      slug: slug,
      published: published,
      description: description,
      content: content,
      image: image,
      user_id: currentUser.id,
      id: crypto.randomUUID(),
    });
    revalidatePath("/rss.xml");

    return new Response("OK");
  } catch (error) {
    console.log("BLOG_POST[ERR]:", error);
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response("Could not create a blog at this time. Please try later", { status: 500 });
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  try {
    const { limit, page } = z
      .object({
        limit: z.string(),
        page: z.string(),
      })
      .parse({
        limit: url.searchParams.get("limit"),
        page: url.searchParams.get("page"),
      });

    const allBlogs = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.created_at))
      .limit(parseInt(limit))
      .offset((parseInt(page) - 1) * parseInt(limit));
    return NextResponse.json(allBlogs);
  } catch (error) {
    console.log("BLOG_GET[ERR]:", error);
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }
    return new Response("Could not fetch posts", { status: 500 });
  }
}
