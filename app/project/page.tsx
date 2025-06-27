"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AvatarWithShadow from "@/components/AvatarWithShadow";

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
];

export default function ProjectPage() {
  const [current, setCurrent] = React.useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">My Projects</h1>
      <p className="text-muted-foreground mb-8 text-center">
        A showcase of my work and experiments.
      </p>
      <div className="relative w-full max-w-lg flex flex-col items-center">
        <div className="w-full h-64 rounded-xl overflow-hidden bg-card flex items-center justify-center mb-4">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            width={400}
            height={256}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <h2 className="text-xl font-semibold mb-1">{slides[current].title}</h2>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          {slides[current].description}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
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
