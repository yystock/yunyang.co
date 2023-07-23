"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { View } from "@/types/views";

interface ViewsFetcherProps {
  slug: string;
}

const ViewsFetcher = ({ slug }: ViewsFetcherProps) => {
  const { data } = useQuery({
    queryKey: ["views", slug],
    queryFn: () => axios.get(`/api/views/${slug}`) as Promise<View>,
    placeholderData: {
      slug,
      count: 0,
    },
    suspense: true,
  });

  return <>{data?.count}</>;
};

export default ViewsFetcher;
