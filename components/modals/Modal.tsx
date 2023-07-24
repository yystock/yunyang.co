"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export default function Modal({ isOpen, onClick, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    // backdrop|overlay

    <motion.div
      key="modal"
      onClick={onClick}
      className="fixed z-10 inset-0 flex items-center justify-center bg-black/60 backdrop-opacity-10 backdrop-invert-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="relatiive mx-auto w-10/12 md:w-1/3 md:max-w-[600px] py-4 px-4 rounded-md flex flex-col bg-background items-center"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={onClick} className="p-1 border-0 hover:opacity-70 absolute top-3 right-7">
          <X />
        </button>
        <div>{children}</div>
      </motion.div>
    </motion.div>
  );
}
