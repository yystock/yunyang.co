"use client";

import ViewsCounter from "@/components/views-counter/ViewsCounter";
import { useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface BlogViewsProps {
  slug: string;
}

const BlogViews = ({ slug }: BlogViewsProps) => {
  const queryClient = useQueryClient();

  const queryKey = ["views", slug];

  const mutation = useMutation({
    mutationFn: () =>
      fetch(`/api/views/${slug}`, { method: "POST" }).then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error("Error incrementing views");
        }
        return data;
      }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(queryKey, data);
    },
    onError: async () => {
      // Refetch if there is an error
      await queryClient.invalidateQueries({ queryKey });
    },
  });

  useEffect(() => {
    // Will run twice in development mode due to React Strict mode
    mutation.mutate();
  }, []);

  return (
    <p className="text-accent">
      <ViewsCounter slug={slug} />
      {` views`}
    </p>
  );
};

export default BlogViews;
