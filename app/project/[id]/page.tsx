import React from "react";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = params;
  if (!id) return notFound();
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Project: {id}</h1>
      <p className="text-lg">
        This is a dummy project page for project ID: {id}.
      </p>
    </main>
  );
}
