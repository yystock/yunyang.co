import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import NavItems from "./NavItems";
import Logo from "./Logo";
import { getCurrentUser } from "@/lib/session";
import UserMenu from "./UserMenu";

const Nav = async () => {
  const currentUser = await getCurrentUser();

  return (
    <header className="container bg-background mx-auto max-w-7xl flex flex-row items-center  gap-8 p-4 sm:min-h-[74px]">
      <Logo />
      <NavItems />
      <span className="flex-grow" />
      <ThemeSwitch />
      <UserMenu user={currentUser} />
    </header>
  );
};

export default Nav;