import Link from "next/link";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="mt-4 space-y-6">
      <Image
        src="/images/MyAvatar.svg"
        alt={"MyAvatar"}
        className="h-48 w-48 rounded-full sm:h-48 sm:w-48 md:float-left md:mr-6"
        width={192}
        height={192}
        priority
      />

      <h1 className="font-display text-3xl font-black text-zinc-800 dark:text-zinc-200 sm:text-4xl">
        {`Hi, I'm `}
        <span className="text-foreground">Yun Yang</span>
      </h1>

      <div>I'm a full stack developer. </div>
    </div>
  );
}
