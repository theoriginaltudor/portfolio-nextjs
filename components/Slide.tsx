import * as React from "react";
import Image from "next/image";
import { unstable_ViewTransition as ViewTransition } from "react";
import { supabase } from "@/lib/supabaseClient";

interface SlideProps {
  id: number;
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = async ({
  id,
  title,
  description,
}: SlideProps) => {
  const { data: image, error } = await supabase
    .from("images")
    .select("path")
    .eq("article_id", id)
    .limit(1)
    .single();

  if (error) {
    console.error("Error fetching image:", error);
    return null;
  }

  return (
    <div className="relative h-[70dvh] w-full md:w-96">
      <div className="w-full h-full max-w-5xl rounded-xl overflow-hidden bg-card flex items-start justify-start mb-4 shrink-0">
        <Image
          src={image?.path || ""}
          alt={title}
          fill
          className="object-cover w-full h-full absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white dark:from-black to-transparent flex items-start">
          <div className="p-6 w-1/2">
            <ViewTransition name={`slide-title-description-${id}`}>
              <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">
                {title}
              </h2>
              <p className="text-sm text-left text-black dark:text-white">
                {description}
              </p>
            </ViewTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
