"use client";

import { Loader2 } from "lucide-react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: IconType;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ isLoading, label, onClick, disabled, icon: Icon, className }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        `relative
       disabled:opacity-70 
       disabled:cursor-not-allowed 
       rounded-lg hover:opacity-80 transition w-full
        bg-accent
        text-md
        px-2 p-2
        font-semibold
        border-2
        flex
        items-center
        justify-center`,
        className
      )}
    >
      {isLoading && <Loader2 />}
      {Icon && (
        <Icon
          size={24}
          className="mx-4
      
          "
        />
      )}

      {label}
    </button>
  );
};

export default Button;
