import Link from "next/link";
import Image from "next/image";
import { MyAvatar } from "./MyAvatar";
import config from "@/config/config";
import { Github, Mail, Twitter } from "lucide-react";
import Icons from "./Icons";

export default function HeroBanner() {
  return (
    <div className="mt-16 flex relative h-64 space-x-8 justify-center items-center">
      <div className="p-4 h-32 rounded-full">
        <MyAvatar />
      </div>
      <div className="w-1/2">
        <h1 className="py-2 text-3xl font-black sm:text-4xl">
          {`Hello, My name is `}
          <span className="text-accent">Yun Yang</span>
        </h1>

        <div>I am a full stack software engineer with a primary focus on JavaScript/TypeScript technologies.</div>
        <div className="mt-3 flex gap-2">
          <Icons name="react" className="h-7 w-7" />
          <Icons name="next" className="h-7 w-7" />
          <Icons name="node" className="h-7 w-7" />
          |
          <Icons name="go" className="h-7 w-7" />
          <Icons name="python" className="h-7 w-7" />
        </div>

        <div className="flex gap-2 mt-8">
          Find me:
          <Link key="github" href={config.social.github}>
            <Github size={24} />
          </Link>
          <Link key="github" href={config.social.twitter}>
            <Twitter size={24} />
          </Link>
          <Link key="mail" href={config.social.email}>
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
