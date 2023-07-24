"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS: {
  label: string;
  href: ComponentProps<typeof Link>["href"];
  activePath: RegExp;
}[] = [
  {
    label: "Home",
    href: "/",
    activePath: /^\/$/,
  },
  {
    label: "Blog",
    href: "/blogs",
    activePath: /^\/blogs*/,
  },
  {
    label: "About",
    href: "/about",
    activePath: /^\/about*/,
  },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row flex-wrap items-center gap-2">
      {NAV_LINKS.map(({ label, href, activePath }) => (
        <Link key={label} href={href} className="relative px-3 py-1 font-semibold">
          {!!pathname && activePath.test(pathname) && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 -bottom-2 z-10 border-b-2 border-b-accent"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}

          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
