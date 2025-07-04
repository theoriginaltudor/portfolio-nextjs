import React from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
        <AvatarWithShadow className="w-16 h-16" />
      </div>
    </>
  );
}
