import HeroBanner from "@/components/Hero";
import MostPopularPosts from "@/components/MostPopularPosts";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <section>
        <h2 className="font-display text-3xl font-bold text-zinc-800 dark:text-zinc-200 sm:text-4xl">Most Popular Posts</h2>
        <div className="my-8 flex flex-col gap-6">
          <MostPopularPosts />
        </div>
        <hr className="my-12 h-[1px] bg-zinc-200 dark:bg-zinc-600" />
      </section>
    </div>
  );
}
