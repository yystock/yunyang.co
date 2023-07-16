"use client";

import Modal from "@/components/modals/Modal";
import { useLoginModal } from "@/hooks/useLoginModal";
import Logo from "../Logo";
import AuthForm from "../AuthForm";

export const LoginModal = () => {
  const loginModal = useLoginModal();

  return (
    <Modal isOpen={loginModal.isOpen} onClick={loginModal.onClose}>
      <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <Logo />
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        </div>
        <AuthForm />
      </div>
    </Modal>
  );
};
