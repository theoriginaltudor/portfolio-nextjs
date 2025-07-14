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
import { supabase } from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";

interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
}

interface ArticlesCarouselProps {
  articles: Article[];
}

const ArticlesCarousel = async ({ articles }: ArticlesCarouselProps) => {
  const articleIds = articles.map((a) => a.id);
  let images: Tables<"images">[] = [];
  if (articleIds.length) {
    const { data, error } = await supabase
      .from("images")
      .select("*")
      .in("article_id", articleIds)
      .like("path", "%_1%");
    if (!error && data) images = data as Tables<"images">[];
  }

  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {articles.map((article) => {
          const image = images.find((img) => img.article_id === article.id);
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
                  imagePath={image?.path}
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
