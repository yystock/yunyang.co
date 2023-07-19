import { getCurrentUser } from "@/lib/session";
import { db } from "@/db/connection";
import { blogSchema } from "@/lib/validators/blog";
import { z } from "zod";
import { blogs, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { image, title, content, slug, published } = blogSchema.parse(body);

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
      content: content,
      image: image,
      user_id: currentUser.id,
      id: crypto.randomUUID(),
    });

    return new Response("OK");
  } catch (error) {
    console.log("BLOG_POST[ERR]:", error);
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response("Could not post to subreddit at this time. Please try later", { status: 500 });
  }
}
