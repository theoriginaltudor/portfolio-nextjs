import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { slides } from "../db";
import { unstable_ViewTransition as ViewTransition } from "react";
import Article from "@/features/workDescription/Article";

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
      {/* Image header section */}
      <div
        className="relative w-full"
        style={{ height: "30dvh", minHeight: 120 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full h-full absolute inset-0 z-0"
          style={{ objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          <div className="bg-black/60 rounded-3xl px-6 py-4 w-full max-w-2xl text-center mx-auto backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
            <ViewTransition name={`slide-title-description-${id}`}>
              <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg mb-0 text-white drop-shadow max-w-2xl mx-auto">
                {project.description}
              </p>
            </ViewTransition>
          </div>
        </div>
      </div>
      <Article className="max-w-2xl text-base w-full px-4 mt-8">
        {project.longDescription}
      </Article>
    </main>
  );
}
