import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const range = (start: number, end: number) => {
  return [...Array(end - start).keys()].map((el) => el + start);
};

export const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }: { pagesCount: number; pagesCutCount: number; currentPage: number }) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);
  console.log("ceiling", ceiling);
  console.log("floor", floor);

  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
};
