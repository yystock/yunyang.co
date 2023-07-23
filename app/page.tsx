import HeroBanner from "@/components/Hero";
import MostPopularPosts from "@/app/MostPopularPosts";
import { PageWrapper } from "@/components/PageWrapper";

export default async function Home() {
  return (
    <>
      <PageWrapper>
        <HeroBanner />

        <MostPopularPosts />
      </PageWrapper>
    </>
  );
}
