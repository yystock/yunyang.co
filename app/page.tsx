import HeroBanner from "@/components/Hero";
import MostPopularPosts from "@/app/MostPopularPosts";
import { PageWrapper } from "@/components/PageWrapper";
// import { db } from "@/db/connection";
// import { blogs } from "@/db/schema";
// import { desc } from "drizzle-orm";
import Carousel from "@/components/Carousel";
import BlogList from "@/app/BlogList";

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
