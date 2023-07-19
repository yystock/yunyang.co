import { redirect } from "next/navigation";

import { db } from "@/db/connection";
import { getCurrentUser } from "@/lib/session";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Admin() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const userFound = await db.select().from(users).where(eq(users.id, user.id));
  if (userFound[0].role.localeCompare("yun")) {
    redirect("/");
  }

  return <div>Admin</div>;
}
