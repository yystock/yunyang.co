"use client";
import { FC } from "react";
import { BlogListType } from "@/lib/validators/blog";
import { formatDate } from "@/lib/utils";
import Button from "./Button";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

interface PaginationProps {
  initialBlogs: BlogListType[];
}

const Pagination: FC<PaginationProps> = ({ initialBlogs }) => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ["infinite-query"],
    async ({ pageParam = 1 }) => {
      const query = `/api/blogs?limit=${2}&page=${pageParam}`;
      const { data } = await axios.get(query);
      return data as BlogListType[];
    },

    {
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      initialData: { pages: [initialBlogs], pageParams: [1] },
    }
  );

  const blogs = data?.pages.flatMap((page) => page) ?? initialBlogs;

  return (
    <div className="px-10 ">
      {blogs.map((b, i) => {
        return (
          <article className="flex flex-row " key={i}>
            <div>{formatDate(b.created_at)}</div>
            <h2>{b.title}</h2>
            <div>{b.count} Views</div>
          </article>
        );
      })}
      <Button
        label={isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      />
      <div>{isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "Nothing more to load"}</div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </div>
  );
};

export default Pagination;
