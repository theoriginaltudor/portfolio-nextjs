import React from "react";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Tables } from "@/types/database.types";

interface ProjectImageHeaderProps {
  project: Tables<"articles">;
  id: number;
  image: string;
}

const ProjectImageHeader: React.FC<ProjectImageHeaderProps> = ({
  project,
  id,
  image,
}) => (
  <div className="relative w-full min-h-[120px] h-[70dvh]">
    <Image
      src={image}
      alt={project.title}
      fill
      className="object-cover w-full h-full absolute inset-0 z-0 object-center"
      priority
      sizes="100vw"
    />
    {/* gradient overlay for better contrast, responsive to theme */}
    <div
      className="absolute inset-0 z-5 pointer-events-none"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%)",
      }}
      data-dark="true"
    />
    {/* Light theme gradient overlay */}
    <div
      className="absolute inset-0 z-5 pointer-events-none dark:hidden"
      style={{
        background:
          "linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0) 100%)",
      }}
      data-dark="false"
    />
    <div className="absolute inset-x-0 bottom-0 flex items-end justify-center z-10 pb-8 px-4">
      <ViewTransition name={`slide-title-description-${id}`}>
        <h1 className="text-5xl font-bold text-center drop-shadow-lg rounded-lg py-4 px-6 text-white dark:text-white">
          {project.title}
        </h1>
      </ViewTransition>
    </div>
  </div>
);

export default ProjectImageHeader;
