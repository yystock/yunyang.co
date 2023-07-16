"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Modal from "@/components/modals/Modal";
import { useSubscribeModal } from "@/hooks/useSubscribeModal";

export const SubscribeModal = () => {
  const subscribeModal = useSubscribeModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <Modal isOpen={subscribeModal.isOpen} onClick={subscribeModal.onClose}>
      <div>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">Modal</div>
        </div>
      </div>
    </Modal>
  );
};
