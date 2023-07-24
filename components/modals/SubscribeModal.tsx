"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "@/components/modals/Modal";
import { useSubscribeModal } from "@/hooks/useSubscribeModal";
import Input from "../Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../Button";

export const SubscribeModal = () => {
  const subscribeModal = useSubscribeModal();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      username: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    await axios
      .post("/api/users", data)
      .then((callback) => {
        if (callback.status === 200) {
          toast.success("Subscribed!!");
          router.refresh();
          subscribeModal.onClose();
        } else {
          toast.error("Something went wrong");
          toast.error(callback.statusText);
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal isOpen={subscribeModal.isOpen} onClick={subscribeModal.onClose}>
      <div className="flex flex-col space-y-4 py-2 pb-4 w-full">
        <div className="text-center font-semibold text-xl my-4">Subscribe to Weekly Newsletter</div>
        <Input id="email" label="Email" disabled={loading} register={register("email")} errors={errors} required />
        <Input id="username" label="Username" disabled={loading} register={register("username")} errors={errors} required />
        <Button label="Subscribe" onClick={handleSubmit(onSubmit)} />
      </div>
    </Modal>
  );
};
