import { SidebarNav } from "@/components/SideBar";
import { eq } from "drizzle-orm";
import { db } from "@/db/connection";
import { users } from "@/db/schema";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  description: "dashboard",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const userFound = await db.select().from(users).where(eq(users.id, user.id));
  if (userFound[0].role.localeCompare("yun")) {
    redirect("/");
  }
  return (
    <div className="flex w-full container mx-auto gap-8 min-h-screen">
      <div className="w-1/6 min-h-screen">
        <SidebarNav />
      </div>
      <div className="w-4/5"> {children}</div>
    </div>
  );
}
