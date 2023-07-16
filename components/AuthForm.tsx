"use client";

import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";
import Button from "@/components/Button";
import { toast } from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const AuthForm: FC<AuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const user = await signIn("google");
      console.log("user", user);
    } catch (error) {
      toast.error("There was an error logging in with Google");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button label={"Google"} isLoading={isLoading} onClick={loginWithGoogle} disabled={isLoading} icon={BsGoogle} />
    </div>
  );
};

export default AuthForm;
