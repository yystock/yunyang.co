import Link from "next/link";
import Image from "next/image";
import { MyAvatar } from "./MyAvatar";
import config from "@/config/config";
import { Github, Mail } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="flex relatiive h-64 space-y-6 justify-center items-center">
      <div className="p-4 h-32 rounded-full">
        <MyAvatar />
      </div>
      <div className="w-1/2">
        <h1 className="text-3xl font-black sm:text-4xl">
          {`Hello, My name is `}
          <span className="text-accent">Yun</span>
        </h1>

        <div>I am a full stack software engineer with a primary focus on JavaScript technologies.</div>
        <div className="flex gap-1">
          <Image className="block" src="/images/react.svg" height="24" width="24" alt="react" />
          <Image className="block" src="/images/next-js.svg" height="24" width="24" alt="next" />
          <Image className="block" src="/images/node-js.svg" height="24" width="24" alt="node" />
          |
          <Image className="block" src="/images/golang.svg" height="24" width="24" alt="golang" />
          <Image className="block" src="/images/python.svg" height="24" width="24" alt="python" />
        </div>

        <div className="flex gap-2 mt-8">
          Find me:
          <Link href={config.social.github}>
            <Github size={24} />
          </Link>
          <Link href={config.social.email}>
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}
