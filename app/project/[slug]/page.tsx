import React from "react";

import { notFound } from "next/navigation";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
import ProjectImageCarousel from "@/features/workDescription/ProjectImageCarousel";
import Skills from "@/features/workDescription/Skills";
import { fetchProjectData } from "@/features/workDescription/hooks/fetchData";
import { buildImageUrls } from "@/features/workDescription/hooks/buildUrls";
import { createClient } from "@/lib/supabase/server";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  const supabase = await createClient();
  const { project, projectError } = await fetchProjectData(supabase, slug);
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

  const imageUrls = await buildImageUrls(supabase, images);

  if (!imageUrls.length) {
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
        image={imageUrls[0]}
      />

      <Skills skills={skills.map((s) => s.name)} />

      <Article className="max-w-2xl text-base w-full px-4 mt-8">
        {project.long_description}
      </Article>

      {imageUrls.length > 1 && <ProjectImageCarousel images={imageUrls} />}
    </main>
  );
}
