"use client";

import { FieldErrors, FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegisterReturn;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({ id, label, type = "text", disabled, register, required, errors }) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register}
        placeholder=" "
        type={type}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-background 
          border
          border-1
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4

          ${errors[id] ? "border-destructive" : ""}
          ${errors[id] ? "focus:border-destructive" : "focus:border-2"}
        `}
      />
      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          left-4
          top-5 
          z-10 
          origin-[0]  
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-destructive" : "text-foreground"}
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
