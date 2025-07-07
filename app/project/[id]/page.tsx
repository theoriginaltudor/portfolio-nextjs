import React from "react";
import { notFound } from "next/navigation";
import { slides } from "@/lib/db";
import Article from "@/features/workDescription/Article";
import ProjectImageHeader from "@/features/workDescription/ProjectImageHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SlideWithPair from "@/features/workDescription/SlideWithPair";

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
      {project.image &&
        project.image.length > 0 &&
        project.image.length % 2 === 0 && (
          <div className="w-full max-w-2xl mt-12">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {Array.from({ length: project.image.length / 2 }).map(
                  (_, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <SlideWithPair images={project.image} index={idx} />
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        )}
    </main>
  );
}
