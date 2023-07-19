"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface LogoProps {
  redirect?: boolean;
}

const Logo: FC<LogoProps> = ({ redirect = true }) => {
  const router = useRouter();
  if (redirect) {
    return (
      <Image onClick={() => router.push("/")} className="hidden md:block cursor-pointer" src="/images/logo.svg" height="68" width="68" alt="Logo" />
    );
  } else {
    return <Image className="hidden md:block cursor-pointer" src="/images/logo.svg" height="68" width="68" alt="Logo" />;
  }
};

export default Logo;
