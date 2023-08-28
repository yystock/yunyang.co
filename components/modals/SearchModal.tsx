"use client";

import Modal from "@/components/modals/Modal";
import { useSearchModal } from "@/hooks/useSearchModal";
import Input from "@/components/Input";
import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const SearchModal = () => {
  const searchModal = useSearchModal();
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchTerm = useDebounce(searchInput, 300);

  return (
    <Modal isOpen={searchModal.isOpen} onClick={searchModal.onClose}>
      <div className="flex flex-col items-center space-y-2 text-center">
        <input
          type="text"
          className="h-[90%] w-full bg-transparent text-lg outline-none"
          autoFocus
          onChange={async (event) => {
            setSearchInput(event.target.value);
          }}
          placeholder="Search posts"
        />
      </div>
    </Modal>
  );
};
