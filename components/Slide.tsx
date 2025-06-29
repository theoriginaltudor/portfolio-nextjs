import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface SlideProps {
  image: string;
  title: string;
  description: string;
  overlay?: boolean;
}

export default function Slide({
  image,
  title,
  description,
  overlay,
}: SlideProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="relative w-full h-[32rem] min-w-[32rem] max-w-5xl rounded-xl overflow-hidden bg-card flex items-end justify-start mb-4 shrink-0">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full absolute inset-0 z-0"
        priority
      />
      {/* Overlay for side slides */}
      {overlay && (
        <div
          className="absolute inset-0 z-10"
          style={{
            background: isDark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
          }}
        />
      )}
      <div
        className={`relative z-20 m-6 p-4 rounded-lg shadow-xl backdrop-blur-sm
          ${isDark ? "bg-black/80 text-white" : "bg-white/80 text-black"}
        `}
        style={{
          boxShadow: isDark
            ? "0 4px 32px 8px rgba(0,0,0,0.7), 0 0 0 0 rgba(0,0,0,0)"
            : "0 4px 32px 8px rgba(255,255,255,0.7), 0 0 0 0 rgba(0,0,0,0)",
        }}
      >
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-muted-foreground text-left">{description}</p>
      </div>
      {/* Gradient shadow fade effect */}
      <div
        className="absolute left-0 bottom-0 w-full h-32 pointer-events-none z-15"
        style={{
          background: isDark
            ? "linear-gradient(180deg, transparent 0%, #000 100%)"
            : "linear-gradient(180deg, transparent 0%, #fff 100%)",
        }}
      />
    </div>
  );
}
