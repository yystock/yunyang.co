import HeroBanner from "@/components/Hero";
import MostPopularPosts from "@/app/MostPopularPosts";
import { PageWrapper } from "@/components/PageWrapper";
import BlogList from "@/app/BlogList";

export const revalidate = 43200;

export default async function Home() {
  return (
    <>
      <PageWrapper>
        <HeroBanner />

        <MostPopularPosts />
        <BlogList />
      </PageWrapper>
    </>
  );
}
