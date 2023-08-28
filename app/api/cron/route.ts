import { NextResponse } from "next/server";
import { db } from "@/db/connection";
import { blogs } from "@/db/schema";
import { sql } from "drizzle-orm";
import { Resend } from "resend";
import NotificationEmail from "@/components/emails/NotificationEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const my_email = process.env.MY_EMAIL as string;

export async function GET(request: Request) {
  try {
    const allBlogs = await db.select({ sum: sql<number>`sum(count)` }).from(blogs);

    const messages = `Total views: ${allBlogs[0].sum}`;

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [my_email],
      subject: `Report from yunyang.co`,
      react: NotificationEmail({ message: messages }),
    });

    return new NextResponse(JSON.stringify(allBlogs), { status: 200 });
  } catch (error) {
    console.log("[CRONJOB]_ERROR");

    return new Response("CRON JOB ERROR", { status: 400 });
  }
}
