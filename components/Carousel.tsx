"use client";
import { FC, useEffect, useRef, useState } from "react";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { selectBlogSchema } from "@/lib/validators/blog";
import z from "zod";
import Link from "next/link";
import { motion } from "framer-motion";

type FormData = z.infer<typeof selectBlogSchema>;

interface CarouselProps {
  topBlogs: FormData[];
}

const Carousel: FC<CarouselProps> = ({ topBlogs }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (carousel.current !== null && carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current;
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      maxScrollWidth.current = carousel.current ? carousel.current.scrollWidth - carousel.current.offsetWidth : 0;
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  return (
    <section className="relative h-[21rem] mt-4 overflow-hidden pl-6 py-2 divide-y-2 divide-y-accent">
      <div className="flex justify-between mb-4">
        <h2 className="font-display text-xl font-bold">Featured Blogs</h2>
        <div className="flex gap-3">
          <button
            className="cursor-pointer flex w-[15%] items-center justify-center border-0 bg-none opacity-50 hover:text-foreground  hover:opacity-90 hover:outline-none focus:text-foreground focus:no-underline focus:opacity-90 focus:outline-none disabled:cursor-not-allowed"
            type="button"
            onClick={movePrev}
            disabled={isDisabled("prev")}
          >
            <span className="h-8 w-8">
              <ArrowLeft />
            </span>
          </button>
          <button
            className="cursor-pointer flex w-[15%] items-center justify-center border-0 bg-none opacity-50 hover:text-foreground  hover:opacity-90 hover:outline-none focus:text-foreground focus:no-underline focus:opacity-90 focus:outline-none disabled:cursor-not-allowed"
            type="button"
            onClick={moveNext}
            disabled={isDisabled("next")}
          >
            <span className="h-8 w-8">
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>

      <motion.div
        id="inner"
        ref={carousel}
        className="overflow-hidden h-full relative flex w-full gap-10 scroll-smooth snap-x snap-mandatory touch-pan-x"
      >
        {topBlogs.map((post, index) => (
          <div className="flex flex-col sm:min-w-[98%] md:min-w-[40%] lg:min-w-[30%] p-2">
            <div key={index} className="relative w-full snap-center flex-col flex h-[30rem]">
              {post.image && (
                <Link href={`/blogs/${post.slug}`}>
                  <Image fill={true} src={post.image} alt="{{title}}" />
                </Link>
              )}
            </div>
            <Link className="font-bold text-xl text-foreground h-full w-full" href={post.slug} aria-label={post.title}>
              {post.title}
            </Link>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Carousel;
