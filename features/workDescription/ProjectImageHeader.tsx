import React from "react";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";
import { SlideData } from "@/lib/db";

interface ProjectImageHeaderProps {
  project: SlideData;
  id: string;
}

const ProjectImageHeader: React.FC<ProjectImageHeaderProps> = ({
  project,
  id,
}) => (
  <div className="relative w-full min-h-[120px] h-[30dvh]">
    <Image
      src={project.image[0]}
      alt={project.title}
      fill
      className="object-cover w-full h-full absolute inset-0 z-0 object-center"
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
);

export default ProjectImageHeader;
