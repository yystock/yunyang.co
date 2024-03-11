"use client";

import { User } from "next-auth";
import { FC } from "react";
import Button from "./Button";
import { useSubscribeModal } from "@/hooks/useSubscribeModal";
import LogoutButton from "./logout";

interface UserMenuProps {
  user?: User;
}

const UserMenu: FC<UserMenuProps> = ({ user }) => {
  const subscribeModal = useSubscribeModal();

  return (
    <div>
      {user ? (
        <div className="flex items-center">
          <Button label="subscribe" onClick={() => subscribeModal.onOpen()} />
          <LogoutButton />
        </div>
      ) : (
        <Button label="subscribe" onClick={() => subscribeModal.onOpen()} />
      )}
    </div>
  );
};

export default UserMenu;
