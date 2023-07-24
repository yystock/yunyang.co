import * as React from "react";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import config from "@/config/config";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="max-w-6xl container mt-32 flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a href={config.social.github} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              yun
            </a>
            . Hosted on{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Vercel
            </a>
            . Contact me{" "}
            <a href={config.social.email} target="_blank" rel="noreferrer" className="font-medium underline underline-offset-4">
              Email
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
