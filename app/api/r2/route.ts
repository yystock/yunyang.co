import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const data = await req.formData();
  console.log(data);
  const file: File | null = data.get("file") as unknown as File;
  //   const { file } = await req.json();

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const id = randomUUID();
  const url = `${process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER}/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "X-CF-Secret": process.env.CLOUDFLARE_WORKER_SECRET as string,
    },
    body: file,
  });
  // Uint8Array.from(atob(file.replace(/^data[^,]+,/, "")), (v) => v.charCodeAt(0))

  return NextResponse.json({ url: url });
}
