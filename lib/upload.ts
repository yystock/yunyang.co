"use server";
import { randomUUID } from "crypto";

export async function upload(file: File) {
  if (!file) {
    return null;
  }
  console.log(file);

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

  return { url: url };
}
