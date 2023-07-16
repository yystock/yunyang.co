"use client";

import { useEffect, useState } from "react";

import { SubscribeModal } from "@/components/modals/SubscribeModal";

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
      <SubscribeModal />
    </>
  );
};
