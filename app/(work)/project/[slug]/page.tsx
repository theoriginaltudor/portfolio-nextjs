import React from "react";

import { notFound } from "next/navigation";
import { ProjectImageHeader } from "@/feature-components/work/project-page/project-image-header";
import { ProjectImageCarousel } from "@/feature-components/work/project-page/project-image-carousel";
import { fetchProjectData } from "@/feature-components/work/project-page/hooks/fetch-data";
import { buildImageUrls } from "@/feature-components/work/project-page/hooks/build-urls";
import { createClient } from "@/lib/supabase/server";
import { Skills } from "@/feature-components/work/project-page/skills";
import { ArticleBody } from "@/feature-components/work/project-page/article-body";

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

      <ArticleBody className="max-w-2xl text-base w-full px-4 mt-8">
        {project.long_description}
      </ArticleBody>

      {imageUrls.length > 1 && <ProjectImageCarousel images={imageUrls} />}
    </main>
  );
}
