import React from "react";

import { notFound } from "next/navigation";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
import ProjectImageCarousel from "@/features/workDescription/ProjectImageCarousel";
import Skills from "@/features/workDescription/Skills";
import { supabase } from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const { data: project, error: projectError } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single<Tables<"articles">>();
  if (projectError) {
    console.error("Error fetching project:", projectError);
    return notFound();
  }
  if (!project) {
    console.warn("Project not found for slug:", slug);
    return notFound();
  }
  const { data: images, error: imagesError } = await supabase
    .from("images")
    .select("*")
    .eq("article_id", project.id);

  if (imagesError) {
    console.error("Error fetching images:", imagesError);
    return notFound();
  }
  if (!images) {
    console.warn("No images found for project:", project.id);
  }

  const { data: skillsArticles, error: skillsArticlesError } = await supabase
    .from("articles_skills")
    .select("*")
    .eq("article_id", project.id);

  if (skillsArticlesError) {
    console.error("Error fetching skills articles:", skillsArticlesError);
    return notFound();
  }

  if (!skillsArticles) {
    console.warn("No skills articles found for project:", project.id);
  }

  const { data: skills, error: skillsError } = await supabase
    .from("skills")
    .select("*")
    .in(
      "id",
      skillsArticles.map((s) => s.skill_id)
    );
  if (skillsError) {
    console.error("Error fetching skills:", skillsError);
    return notFound();
  }
  if (!skills) {
    console.warn("No skills found for project:", project.id);
  }

  return (
    <main className="flex flex-col items-center flex-1 w-full">
      <ProjectImageHeader
        project={project}
        id={project.id}
        image={images[0]?.path}
      />

      <Skills skills={skills.map((s) => s.name)} />

      <Article className="max-w-2xl text-base w-full px-4 mt-8">
        {project.long_description}
      </Article>

      {images && images.length > 1 && (
        <ProjectImageCarousel images={images.map((img) => img.path)} />
      )}
    </main>
  );
}
