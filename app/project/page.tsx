"use client";

import * as React from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";
import Slide from "@/components/Slide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "/tc1_1.jpg",
    title: "Project One",
    description: "A brief description of Project One.",
  },
  {
    image: "/globe.svg",
    title: "Project Two",
    description: "A brief description of Project Two.",
  },
  {
    image: "/window.svg",
    title: "Project Three",
    description: "A brief description of Project Three.",
  },
  {
    image: "/tc1_1.jpg",
    title: "Project One",
    description: "A brief description of Project One.",
  },
  {
    image: "/globe.svg",
    title: "Project Two",
    description: "A brief description of Project Two.",
  },
  {
    image: "/window.svg",
    title: "Project Three",
    description: "A brief description of Project Three.",
  },
];

export default function ProjectPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Relevant work</h1>
      <p className="text-muted-foreground mb-8 text-center">
        An overview of project I worked on, showcasing my skills.
      </p>
      <div className="">
        <Carousel className="w-full">
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx} className="basis-1/3">
                <Slide
                  image={slide.image}
                  title={slide.title}
                  description={slide.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/* Fixed AvatarWithShadow in bottom right */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <div style={{ viewTransitionName: "avatar-group" }}>
          <AvatarWithShadow className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
}
