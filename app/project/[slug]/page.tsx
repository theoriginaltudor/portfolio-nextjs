import React from "react";

import { notFound } from "next/navigation";
import { SlideData, slides } from "@/lib/db";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
import ProjectImageCarousel from "@/features/workDescription/ProjectImageCarousel";
import Skills from "@/features/workDescription/Skills";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  if (!slug) return notFound();

  // Find project by slug property
  const project: SlideData | undefined = slides.find(
    (slide) => slide.slug === slug
  );
  if (!project) return notFound();

  return (
    <main className="flex flex-col items-center flex-1 w-full">
      <ProjectImageHeader project={project} id={project.id} />

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
    slug: slide.slug,
  }));
}
