import { create } from "zustand";

interface useSubscribeModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSubscribeModal = create<useSubscribeModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
