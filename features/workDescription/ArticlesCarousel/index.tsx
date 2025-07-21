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
import { getArticlesImage } from "./useArticleImages";

import type { SupabaseClient } from "@supabase/supabase-js";
import { Tables } from "@/types/database.types";

interface ArticlesCarouselProps {
  articles: Pick<Tables<"articles">, "id" | "slug" | "title" | "description">[];
  supabaseClient: SupabaseClient;
}

const ArticlesCarousel = async ({
  articles,
  supabaseClient,
}: ArticlesCarouselProps) => {
  const articleIds = articles.map((a) => a.id);
  const imagePaths = await getArticlesImage({ articleIds, supabaseClient });

  return (
    <Carousel className="w-full" opts={{ loop: true }}>
      <CarouselContent>
        {articles.map((article) => {
          const image = imagePaths.find((img) => img.article_id === article.id);
          return (
            <CarouselItem
              key={article.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Link href={`/project/${article.slug}`} prefetch>
                <Slide
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  imagePath={image?.path}
                  supabaseClient={supabaseClient}
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
