"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const sidebarNav: {
  title: string;
  href: ComponentProps<typeof Link>["href"];
}[] = [
  {
    title: "Admin",
    href: "/dashboard/admin",
  },
  {
    title: "Blogs",
    href: "/dashboard/admin/blogs",
  },
  {
    title: "Subscribers",
    href: "/dashboard/admin/subscribers",
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return sidebarNav.length ? (
    <div className="w-full h-full">
      {sidebarNav.map((item, index) => (
        <div key={index} className={cn("pb-4")}>
          <div className="grid grid-flow-row auto-rows-max text-sm">
            <Link
              href={item.href}
              className={cn("flex w-full items-center rounded-md p-2 hover:underline", {
                "bg-accent": pathname === item.href,
              })}
            >
              {item.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
