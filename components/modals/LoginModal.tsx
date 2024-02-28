"use client";

import Modal from "@/components/modals/Modal";
import { useLoginModal } from "@/hooks/useLoginModal";
import Logo from "../Logo";
import AuthForm from "../AuthForm";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const router = useRouter();
  const pathname = usePathname();

  if (pathname !== "/login") return null;
  return (
    <Modal isOpen={loginModal.isOpen} onClick={loginModal.onClose}>
      <div className="flex flex-col justify-center space-y-6 w-full">
        <div className="flex flex-col items-center space-y-2 text-center">
          {/* <button
            onClick={(e) => {
              e.stopPropagation();
              router.push("/");
              loginModal.onClose();
            }}
          > */}
          <Logo className="h-12 w-12" />
          {/* </button> */}

          <h1 className="text-xl lg:text-2xl font-semibold tracking-tight">Welcome back</h1>
        </div>
        <AuthForm />
      </div>
    </Modal>
  );
};
