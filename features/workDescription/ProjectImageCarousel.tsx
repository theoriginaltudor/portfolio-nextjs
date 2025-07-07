import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SlideWithPair from "./SlideWithPair";

interface ProjectImageCarouselProps {
  images: string[];
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({
  images,
}) => {
  if (!images || images.length === 0) return null;

  return images.length % 2 === 0 ? (
    <div className="w-full max-w-2xl mt-12">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {Array.from({ length: images.length / 2 }).map((_, idx) => (
            <CarouselItem key={idx} className="basis-full">
              <SlideWithPair images={images} index={idx} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  ) : (
    <div className="w-full max-w-2xl mt-12">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx} className="basis-full">
              <Image
                src={img}
                alt={`Project image ${idx + 1}`}
                className="w-full rounded-lg shadow-md"
                width={800}
                height={500}
                style={{ width: "100%", height: "auto" }}
                priority={idx === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default ProjectImageCarousel;
