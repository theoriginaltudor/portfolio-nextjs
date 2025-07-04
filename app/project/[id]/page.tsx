import React from "react";
import { notFound } from "next/navigation";
import { slides } from "../db";

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
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1
        className="text-3xl font-bold mb-4"
        style={{ viewTransitionName: "slide-title" }}
      >
        {project.title}
      </h1>
      <p
        className="text-lg mb-4"
        style={{ viewTransitionName: "slide-description" }}
      >
        {project.description}
      </p>
      <p className="max-w-2xl text-base text-muted-foreground text-center">
        {project.longDescription}
      </p>
    </main>
  );
}
