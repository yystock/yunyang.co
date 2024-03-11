"use client";

import { useEffect } from "react";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SetupPage = () => {
  const onOpen = useLoginModal((state) => state.onOpen);
  const isOpen = useLoginModal((state) => state.isOpen);
  const router = useRouter();
  const onClose = useLoginModal((state) => state.onClose);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user && isOpen) {
      onClose();
      router.push("/");
    } else if (!isOpen && !session?.user) {
      onOpen();
    }
  }, [isOpen, onOpen, session]);

  return null;
};

export default SetupPage;
