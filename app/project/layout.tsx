import React, { Suspense } from "react";
import AvatarWithShadow from "@/components/AvatarWithShadow";
import LayoutMessage from "@/features/workDescription/LayoutMessage";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50">
        <Suspense>
          <LayoutMessage />
        </Suspense>
        <AvatarWithShadow size="small" />
      </div>
    </>
  );
}
