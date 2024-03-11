import Link from "next/link";

import ViewsCounter from "@/components/views-counter/ViewsCounter";
import { formatDate } from "@/lib/utils";

interface PostLinkProps {
  slug: string;
  title: string;
  date: string;
  views: number;
}

const PostLink = ({ slug, title, date, views }: PostLinkProps) => {
  return (
    <article className=" px-4 py-3 rounded-lg hover:shadow-2xl">
      <Link href={`/blogs/${slug}`} className="block text-xl font-bold sm:text-2xl" scroll={false}>
        {title}
      </Link>

      <div className="font-medium text-md">
        <time>{formatDate(date)}</time>

        <span className="mx-1">&bull;</span>

        <span>
          {views}
          {` views`}
        </span>
      </div>
    </article>
  );
};

export default PostLink;
