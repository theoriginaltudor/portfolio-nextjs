import * as React from "react";
import { supabase } from "@/lib/supabaseClient";
import ArticlesCarousel from "@/features/workDescription/ArticlesCarousel";

export default async function ProjectPage() {
  const { data: articles, error } = await supabase.from("articles").select("*");
  return (
    <main className="flex-1 max-w-10/12 md:max-w-7xl mx-auto py-6 px-2 md:py-12 md:px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Relevant work</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-2xl">
        An overview of project I worked on, showcasing my skills.
      </p>
      {error && (
        <p className="text-red-500">Error loading articles: {error.message}</p>
      )}
      {/* TODO: fix tablet view */}
      {articles && <ArticlesCarousel articles={articles} />}
    </main>
  );
}
