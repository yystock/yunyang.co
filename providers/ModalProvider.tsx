"use client";

import { useEffect, useState } from "react";

import { SubscribeModal } from "@/components/modals/SubscribeModal";
import { LoginModal } from "@/components/modals/LoginModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <LoginModal />
      <SubscribeModal />
    </>
  );
};
