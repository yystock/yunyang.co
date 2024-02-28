"use client";
import { FC } from "react";
import { BlogListType } from "@/lib/validators/blog";
import { formatDate } from "@/lib/utils";
import Button from "./Button";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import Link from "next/link";

interface PaginationProps {
  initialBlogs: BlogListType[];
}

const Pagination: FC<PaginationProps> = ({ initialBlogs }) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["infinite-query"],
    queryFn: async ({ pageParam = 1 }) => {
      const query = `/api/blogs?limit=${2}&page=${pageParam}`;
      const { data } = await axios.get(query);
      return data as BlogListType[];
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });

  const blogs = data?.pages.flatMap((page) => page) ?? initialBlogs;

  return (
    <div className="px-10 max-w-3xl mt-16 mx-auto">
      <div className="flex flex-col gap-1  mb-8">
        {blogs.map((b, i) => {
          return (
            <Link href={`/blogs/${b.slug}`} key={i} scroll={false}>
              <article className="flex flex-row gap-2 items-center">
                <div className="text-accent">{formatDate(b.created_at)}</div>
                <p>{b.title}</p>
                <span className="flex-grow" />
                <div>{b.count} Views</div>
              </article>
            </Link>
          );
        })}
      </div>
      <Button
        label={isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        className="max-w-sm mx-auto"
      />
      <div className="text-center text-accent mt-2">{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export default Pagination;
