import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { FC } from "react";

interface AvatarWithShadowProps {
  className?: string;
  isLoading?: boolean;
}

const AvatarWithShadow: FC<AvatarWithShadowProps> = ({
  className,
  isLoading,
}) => (
  <div className={cn("relative w-64 h-64", className)}>
    <Avatar className="w-full h-full">
      <AvatarImage src="/tc1_1.jpg" alt="Avatar" />
      <AvatarFallback className="text-7xl">TC</AvatarFallback>
    </Avatar>
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 rounded-full z-[-1] shadow-[0_0_0_8px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-[-8px] before:rounded-full before:bg-[conic-gradient(from_0deg_at_50%_50%,#ff0080_0%,#7928ca_25%,#0070f3_50%,#00ffb8_75%,#ff0080_100%)] before:blur-[12px] before:opacity-60 before:z-[-2]",
        isLoading && "animate-pulse"
      )}
    />
  </div>
);

export default AvatarWithShadow;
