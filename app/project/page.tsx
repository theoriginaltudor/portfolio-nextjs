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

import { slides } from "./db";

export default function ProjectPage() {
  return (
    <div className="flex-1 max-w-10/12 md:max-w-7xl mx-auto py-6 px-2 md:py-12 md:px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Relevant work</h1>
      <p className="text-muted-foreground mb-8 text-center max-w-2xl">
        An overview of project I worked on, showcasing my skills.
      </p>
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Slide
                image={slide.image}
                title={slide.title}
                description={slide.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <div style={{ viewTransitionName: "avatar-group" }}>
          <AvatarWithShadow className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
}
