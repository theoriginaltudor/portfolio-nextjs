import React from "react";
import Image from "next/image";

interface SlideProps {
  images: string[];
  index: number;
}

/**
 * SlideWithPair displays two images side by side: a landscape (2/3 width) and a portrait (1/3 width).
 * The first image is at `index`, the second is at `index + images.length / 2`.
 */
const SlideWithPair: React.FC<SlideProps> = ({ images, index }) => {
  if (!images || images.length < 2 || images.length % 2 !== 0) return null;
  const half = images.length / 2;
  const img1 = images[index];
  const img2 = images[index + half];

  return (
    <div className="flex w-full gap-4 items-center">
      <div className="w-2/3">
        <Image
          src={img1}
          alt={`Feature image ${index + 1}`}
          className="rounded-lg object-cover w-full h-auto"
          width={600}
          height={400}
        />
      </div>
      <div className="w-1/3 flex items-center">
        <Image
          src={img2}
          alt={`Feature image ${index + 1 + half}`}
          className="rounded-lg object-cover w-full h-auto"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};

export default SlideWithPair;
