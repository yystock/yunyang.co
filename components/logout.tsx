import React from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut();

      router.push("/");
      toast.success("User logged in");
    } catch (error) {
      toast.error("There was an error logging in with Google");
    }
  };
  return <Button onClick={logout} label="Logout" />;
}
