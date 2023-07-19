import Link from "next/link";

import ViewsCounter from "@/components/ViewsCounter";
import { formatDate } from "@/lib/utils";

interface PostLinkProps {
  slug: string;
  title: string;
  date: string;
}

const PostLink = ({ slug, title, date }: PostLinkProps) => {
  return (
    <article className="space-y-2">
      <Link href={`/blog/${slug}`} className="block font-display text-2xl font-bold text-emerald-700 dark:text-emerald-600 sm:text-3xl">
        {title}
      </Link>

      <div className="text-base font-medium text-zinc-800 dark:text-zinc-200 sm:text-lg">
        <time>{formatDate(date)}</time>

        <span className="mx-2">&bull;</span>

        <span>
          <ViewsCounter slug={slug} />
          {` views`}
        </span>
      </div>
    </article>
  );
};

export default PostLink;
