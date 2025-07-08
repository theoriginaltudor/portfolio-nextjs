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
  <div className="relative w-full min-h-[120px] h-[50dvh]">
    <Image
      src={project.image[0]}
      alt={project.title}
      fill
      className="object-cover w-full h-full absolute inset-0 z-0 object-center"
      priority
      sizes="100vw"
    />
    {/* overlay for better contrast */}
    <div className="absolute inset-0 bg-black/30 z-5" />
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <ViewTransition name={`slide-title-description-${id}`}>
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          {project.title}
        </h1>
      </ViewTransition>
    </div>
  </div>
);

export default ProjectImageHeader;
