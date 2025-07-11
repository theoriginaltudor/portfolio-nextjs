import React from "react";

import { notFound } from "next/navigation";
import { SlideData, slides } from "@/lib/db";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
import ProjectImageCarousel from "@/features/workDescription/ProjectImageCarousel";
import Skills from "@/features/workDescription/Skills";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  // Find project by string id property
  const project: SlideData | undefined = slides.find(
    (slide) => slide.id === id
  );
  if (!project) return notFound();

  return (
    <main className="flex flex-col items-center flex-1 w-full">
      <ProjectImageHeader project={project} id={id} />

      <Skills skills={project.skills} />

      <Article className="max-w-2xl text-base w-full px-4 mt-8">
        {project.longDescription}
      </Article>
      {/* Carousel of project images */}
      {project.image && project.image.length > 1 && (
        <ProjectImageCarousel images={project.image} />
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return slides.map((slide) => ({
    id: slide.id,
  }));
}
