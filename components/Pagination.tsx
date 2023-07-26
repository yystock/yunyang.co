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
    <div className="px-10 max-w-3xl mt-16 mx-auto">
      <div className="flex flex-col gap-1  mb-8">
        {blogs.map((b, i) => {
          return (
            <Link href={`/blogs/${b.slug}`} key={i}>
              <article className="flex flex-row gap-2">
                <div className="text-accent">{formatDate(b.created_at)}</div>
                <h2>{b.title}</h2>
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
