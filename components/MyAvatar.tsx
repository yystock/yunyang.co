import Image from "next/image";

export function MyAvatar() {
  return (
    <Image
      alt="myProfile"
      src={"/images/profile.jpg"}
      width={96}
      height={96}
      className="rounded-full backdrop-blur-md drop-shadow-[0px_0px_20px_#772223]"
    />
  );
}
