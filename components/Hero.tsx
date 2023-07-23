import Link from "next/link";
import Image from "next/image";
import { MyAvatar } from "./MyAvatar";

export default function HeroBanner() {
  return (
    <div className="flex relatiive mt-4 space-y-6 justify-center">
      <div className="p-4 w-56 rounded-full">
        <MyAvatar />
      </div>

      <h1 className="font-display text-3xl font-black  0 sm:text-4xl">
        {`Hi, I'm `}
        <span className="text-accent">Yun Yang</span>
      </h1>

      <div>I'm a full stack developer. </div>
    </div>
  );
}
