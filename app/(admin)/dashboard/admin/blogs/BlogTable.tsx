"use client";

import { FC, useState } from "react";

import { selectBlogSchema } from "@/lib/validators/blog";
import z from "zod";
import { cn, formatDate, getPagesCut, range } from "@/lib/utils";
import Modal from "@/components/modals/Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Button from "@/components/Button";

type FormData = z.infer<typeof selectBlogSchema>;
interface BlogTableProps {
  data: FormData[];
  pagesCount: number;
  currentPage: number;
}

const BlogTable: FC<BlogTableProps> = ({ data, pagesCount, currentPage }) => {
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount: 5, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/blogs/${id}`);
      router.refresh();

      toast.success("Blogs deleted.");
    } catch (error: any) {
      toast.error("Someting is wrong .");
    } finally {
      setLoading(false);
      setOpen(false);
      setId("");
    }
  };

  return (
    <>
      <Modal isOpen={open} onClick={() => setOpen(false)}>
        <div className="mt-2 mb-4">Are you sure to delete this blog</div>
        <div className="flex gap-2">
          <span className="flex-grow" />
          <Button onClick={() => setOpen(false)} isLoading={loading} label="Close" />
          <Button onClick={() => onDelete()} isLoading={loading} label="Delete" className="bg-destructive" />
        </div>
      </Modal>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase bg-background">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                CreatedAt
              </th>
              <th scope="col" className="px-6 py-3">
                Views
              </th>
              <th scope="col" className="px-6 py-3">
                Published?
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((x) => {
              return (
                <tr key={x.id} className="bg-background border-b  hover:bg-accent">
                  <th scope="row" className="px-6 py-4 font-mediumwhitespace-nowrap ">
                    {x.title}
                  </th>
                  <td className="px-6 py-4">{formatDate(x.created_at.toISOString())}</td>
                  <td className="px-6 py-4">{x.count}</td>
                  <td className="px-6 py-4">{x.published.toString()}</td>

                  <td className="px-6 py-4 flex gap-2">
                    <a href={`/dashboard/admin/blogs/${x.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      Edit
                    </a>
                    <button
                      onClick={() => {
                        setId(x.id);
                        setOpen(true);
                      }}
                      className="font-medium text-destructive hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal  ">
            Showing <span className="font-semibold ">{currentPage}</span> of <span className="font-semibold ">{pagesCount}</span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href={`/dashboard/admin/blogs/?page=${currentPage - 1}`}
                className={cn(
                  "flex items-center justify-center px-3 h-8 ml-0 leading-tight  bg-background border rounded-l-lg ",
                  isFirstPage ? "disabled: cursor-not-allowed" : "hover:bg-accent hover:text-foreground"
                )}
              >
                Previous
              </a>
            </li>
            {pages.map((page) => (
              <li key={page}>
                <a
                  href={"/"}
                  className={cn(
                    "flex items-center justify-center px-3 h-8 leading-tight  bg-background border hover:bg-accent hover:text-foreground",
                    currentPage === page ? "bg-accent" : "bg-background"
                  )}
                >
                  {page}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`/dashboard/admin/blogs/?page=${currentPage + 1}`}
                className={cn(
                  "flex items-center justify-center px-3 h-8 leading-tight  bg-background border rounded-r-lg",
                  isLastPage ? "disabled: cursor-not-allowed" : " hover:bg-accent hover:text-foreground"
                )}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BlogTable;
