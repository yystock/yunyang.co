import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";

export const runtime = "edge";

interface ViewsProp {
  params: {
    slug: string;
  };
}

export const GET = async (request: NextRequest, { params }: ViewsProp) => {
  const slug = params.slug;

  const view = await db.select().from(blogs).where(eq(blogs.slug, slug));
  if (!view || view.length == 0) {
    return NextResponse.json(
      {
        slug,
        count: 0,
      },
      {
        status: 400,
      }
    );
  }

  return NextResponse.json({ slug, count: view[0].count });
};

export const POST = async (request: NextRequest, { params }: ViewsProp) => {
  try {
    const slug = params.slug;

    const blog = await db.select().from(blogs).where(eq(blogs.slug, slug));

    if (!blog || blog.length == 0) {
      return new NextResponse("Not found", { status: 404 });
    }

    const currentCount = blog[0].count;

    await db
      .update(blogs)
      .set({ count: currentCount + 1 })
      .where(eq(blogs.slug, slug));

    return NextResponse.json({ slug, count: currentCount + 1 });
  } catch (error) {
    console.log("Views_POST[ERR]:", error);

    return new Response("Could not post to views at this time. Please try later", { status: 500 });
  }
};
