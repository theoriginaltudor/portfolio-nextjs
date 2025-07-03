import Image from "next/image";
import React from "react";
import AvatarWithMessage from "@/features/contact/AvatarWithMessage";
import ContactInfoCard from "@/features/contact/ContactInfoCard";
import { cn } from "@/lib/utils";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const message = (await searchParams).message as string | undefined;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div
        className={cn(
          "flex flex-col md:flex-row items-center justify-center p-8 md:gap-8",
          message ? "gap-12" : "gap-20"
        )}
      >
        <AvatarWithMessage message={message} />
        <div className="hidden md:flex flex-col gap-20">
          <Image
            src="/Sketch_arrow.png"
            alt="background sketch arrow"
            width={250}
            height={150}
            className="object-contain"
          />
          <Image
            src="/Sketch_arrow.png"
            alt="background sketch arrow"
            width={250}
            height={150}
            className="object-contain rotate-180 -scale-x-100"
          />
        </div>
        <ContactInfoCard />
      </div>
    </main>
  );
}
