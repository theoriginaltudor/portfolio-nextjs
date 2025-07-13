import * as React from "react";
import Slide from "@/components/Slide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Link from "next/link";

interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
}

interface ArticlesCarouselProps {
  articles: Article[];
}

const ArticlesCarousel: React.FC<ArticlesCarouselProps> = ({ articles }) => {
  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {articles.map((article) => {
          return (
            <CarouselItem
              key={article.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/project/${article.slug}`}>
                <Slide
                  id={article.id}
                  title={article.title}
                  description={article.description}
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ArticlesCarousel;
