"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { View } from "@/types/views";

interface ViewsCounterProps {
  slug: string;
}

const ViewsCounter = async ({ slug }: ViewsCounterProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["views", slug],
    queryFn: async () => {
      const { data } = await axios.get(`/api/views/${slug}`);
      return data as View;
    },
    placeholderData: {
      slug,
      count: 0,
    },
  });
  return <>{data ? data?.count : isLoading ? "loading..." : "error..."}</>;
};

export default ViewsCounter;
