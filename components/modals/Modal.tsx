"use client";
import { motion } from "framer-motion";

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
      onClick={onClick}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div>{children}</div>
      </motion.div>
    </motion.div>
  );
}
