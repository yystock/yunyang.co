import { db } from "@/db/connection";
import { z } from "zod";
import { users } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username } = body;

    if (!email || !username) {
      return NextResponse.error();
    }

    await db.insert(users).values({
      email: email,
      username: username,
      id: crypto.randomUUID(),
    });

    return new Response("OK");
  } catch (error) {
    console.log("USER_POST[ERR]:", error);
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response("Could not subscribe this time. Please try later", { status: 500 });
  }
}
