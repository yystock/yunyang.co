"use client";

import { User } from "next-auth";
import { FC } from "react";
import Button from "./Button";
import { useSubscribeModal } from "@/hooks/useSubscribeModal";

interface UserMenuProps {
  user?: User;
}

const UserMenu: FC<UserMenuProps> = ({ user }) => {
  const subscribeModal = useSubscribeModal();

  return (
    <div>
      {user ? (
        <>
          <Button label="subscribe" onClick={() => subscribeModal.onOpen()} />
        </>
      ) : (
        <Button label="subscribe" onClick={() => subscribeModal.onOpen()} />
      )}
    </div>
  );
};

export default UserMenu;
