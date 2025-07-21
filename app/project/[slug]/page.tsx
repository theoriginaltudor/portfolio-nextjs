import React from "react";

import { notFound } from "next/navigation";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
import ProjectImageCarousel from "@/features/workDescription/ProjectImageCarousel";
import Skills from "@/features/workDescription/Skills";
import type { Tables } from "@/types/database.types";
import { createClient } from "@/lib/supabase/server";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}
// Types for joined response using DB types
interface JoinedSkill extends Tables<"articles_skills"> {
  skills: Tables<"skills">;
}

interface JoinedProject extends Tables<"articles"> {
  images: Pick<Tables<"images">, "path">[];
  articles_skills: JoinedSkill[];
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const supabase = await createClient();

  // Fetch article with joined images and skills
  const { data: project, error: projectError } = await supabase
    .from("articles")
    .select(
      `id, slug, title, description, long_description, images(path), articles_skills(article_id, skill_id, skills(id, name))`
    )
    .eq("slug", slug)
    .single<JoinedProject>();

  if (projectError) {
    console.error("Error fetching project:", projectError);
    return notFound();
  }
  if (!project) {
    console.warn("Project not found for slug:", slug);
    return notFound();
  }

  // Defensive checks for joined data
  const images = project.images || [];
  const skills = (project.articles_skills || [])
    .map((s) => s.skills)
    .filter(Boolean);

  if (!images.length) {
    console.warn("No images found for project:", project.id);
  }
  if (!skills.length) {
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

      {images.length > 1 && (
        <ProjectImageCarousel images={images.map((img) => img.path)} />
      )}
    </main>
  );
}
