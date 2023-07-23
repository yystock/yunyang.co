import HeroBanner from "@/components/Hero";
import MostPopularPosts from "@/app/MostPopularPosts";

export default async function Home() {
  return (
    <>
      <HeroBanner />

      <MostPopularPosts />
    </>
  );
}
