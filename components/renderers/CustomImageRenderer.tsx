"use client";
import Image from "next/image";

function CustomImageRenderer({ data }: any) {
  const src = data.file.url;

  return (
    <div className="flex flex-col items-center mt-4  mb-12">
      <div className="relative w-full min-h-[20rem]">
        <Image alt="image" className="object-contain" fill src={src} />
      </div>
      <p>{data.caption}</p>
    </div>
  );
}

export default CustomImageRenderer;
