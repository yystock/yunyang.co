import * as z from "zod";
import { getCurrentUser } from "@/lib/session";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { eq, and } from "drizzle-orm";
import { blogSchema } from "@/lib/validators/blog";
import { revalidatePath } from "next/cache";
const routeContextSchema = z.object({
  params: z.object({
    blogId: z.string(),
  }),
});

export async function DELETE(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);
    const thePost = await verifyCurrentUserHasAccessToBlog(params.blogId);
    if (!thePost) {
      return new Response(null, { status: 403 });
    }

    await db.delete(blogs).where(eq(blogs.id, params.blogId));
    revalidatePath("/rss.xml");
    return new Response(null, { status: 204 });
  } catch (error) {
    console.log("[BlogS_DELETE]", error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}

export async function PATCH(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);

    const thePost = await verifyCurrentUserHasAccessToBlog(params.blogId);
    if (!thePost) {
      return new Response(null, { status: 403 });
    }

    const json = await req.json();
    const body = blogSchema.parse(json);
    await db
      .update(blogs)
      .set({
        title: body.title,
        slug: body.slug,
        content: body.content,
        image: body.image,
        published: body.published,
        description: body.description,
      })
      .where(eq(blogs.id, params.blogId));
    revalidatePath("/rss.xml");

    return new Response(null, { status: 200 });
  } catch (error) {
    console.log("[BlogS_PATCH]", error);
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }
    return new Response(null, { status: 500 });
  }
}

async function verifyCurrentUserHasAccessToBlog(blogId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return null;
  const thePost = await db
    .select()
    .from(blogs)
    .where(and(eq(blogs.id, blogId), eq(blogs.user_id, currentUser.id)));
  return thePost[0];
}
