import Link from "next/link";

import ViewsCounter from "@/components/views-counter/ViewsCounter";
import { formatDate } from "@/lib/utils";

interface PostLinkProps {
  slug: string;
  title: string;
  date: string;
}

const PostLink = ({ slug, title, date }: PostLinkProps) => {
  return (
    <article className="space-y-2">
      <Link href={`/blogs/${slug}`} className="block font-display text-2xl font-bold sm:text-3xl">
        {title}
      </Link>

      <div className="text-base font-medium sm:text-lg">
        <time>{formatDate(date)}</time>

        <span className="mx-1">&bull;</span>

        <span>
          <ViewsCounter slug={slug} />
          {` views`}
        </span>
      </div>
    </article>
  );
};

export default PostLink;
