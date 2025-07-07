import React from "react";

import { notFound } from "next/navigation";
import { slides } from "@/lib/db";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
// ...existing code...
import ProjectImageCarousel from "@/features/workDescription/ProjectImageCarousel";

interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  let project;
  if (!isNaN(Number(id))) {
    project = slides[parseInt(id) - 1];
  }
  if (!project) {
    project = slides.find(
      (slide) =>
        slide.title.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
    );
  }
  if (!project) return notFound();

  return (
    <main className="flex flex-col items-center flex-1 w-full">
      <ProjectImageHeader project={project} id={id} />
      <Article className="max-w-2xl text-base w-full px-4 mt-8">
        {project.longDescription}
      </Article>
      {/* Carousel of project images */}
      {project.image && project.image.length > 0 && (
        <ProjectImageCarousel images={project.image} />
      )}
    </main>
  );
}
