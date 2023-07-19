"use client";

import EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "react-hot-toast";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@tanstack/react-query";
import { blogSchema } from "@/lib/validators/blog";
import axios from "axios";

import "@/styles/editor.css";
import Button from "./Button";

type FormData = z.infer<typeof blogSchema>;
interface EditorProps {
  blog?: FormData;
  id?: string;
}
export const Editor: React.FC<EditorProps> = ({ blog, id }) => {
  const defaultValues = blog
    ? {
        ...blog,
      }
    : {
        title: "",
        content: "",
        slug: "",
        published: false,
        image: "",
      };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(blogSchema),
    defaultValues,
  });

  const ref = useRef<EditorJS>();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const body = blog ? blogSchema.parse(blog) : null;

  const { mutate: createPost } = useMutation({
    mutationFn: async ({ title, content, slug, image, published }: FormData) => {
      const payload: FormData = { title, content, image, slug, published };
      if (!id) {
        const { data } = await axios.post("/api/blogs", payload);
        return data;
      } else {
        const { data } = await axios.patch(`/api/blogs/${id}`, payload);
        return data;
      }
    },
    onError: () => {
      return toast.error("Your post was not published. Please try again.");
    },
    onSuccess: () => {
      router.push("/dashboard/admin");
      router.refresh();
      return toast.success("Your post has been published.");
    },
  });

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const CheckList = (await import("@editorjs/checklist")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;
    const SimpleImage = (await import("@editorjs/simple-image")).default;

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: body?.content,
        tools: {
          header: Header,
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: "/api/link",
            },
          },
          image: {
            class: SimpleImage,
          },
          checkList: {
            class: CheckList,
            inlineToolbar: true,
          },
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length) {
      for (const [_key, value] of Object.entries(errors)) {
        value;
        toast.error("Something went wrong.");
      }
    }
  }, [errors]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  async function onSubmit(data: FormData) {
    const blocks = await ref.current?.save();

    const payload: FormData = {
      title: data.title,
      content: blocks,
      slug: data.slug,
      image: data.image,
      published: data.published,
    };

    createPost(payload);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className="w-full p-4 bg-zinc-50 rounded-lg border border-zinc-200">
      <form id="blog-form" className="w-fit" onSubmit={handleSubmit(onSubmit)}>
        <div className="prose prose-stone dark:prose-invert">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={blog?.title}
            placeholder="Title"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
            {...register("title")}
          />
          <TextareaAutosize
            {...register("slug")}
            placeholder="Slug"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />
          <TextareaAutosize
            {...register("image")}
            placeholder="Image"
            className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
          />

          <label htmlFor="">Published</label>
          <input type="checkbox" placeholder="Published" {...register("published")} className="mx-3" />
          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-gray-500">
            Use <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">Tab</kbd> to open the command menu.
          </p>
        </div>
      </form>
      <button type="submit" form="blog-form">
        Submit
      </button>
    </div>
  );
};
