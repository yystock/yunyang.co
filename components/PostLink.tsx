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
    <article className=" px-4 py-3 rounded-lg hover:shadow-2xl">
      <Link href={`/blogs/${slug}`} className="block text-xl font-bold sm:text-2xl" scroll={false}>
        {title}
      </Link>

      <div className="font-medium text-md">
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
