import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { slides } from "../db";
import { unstable_ViewTransition as ViewTransition } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

interface ProjectPageProps {
  params: { id: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  if (!id) return notFound();

  let project;
  if (!isNaN(Number(id))) {
    project = slides[parseInt(id) - 1];
  }
  if (!project) {
    project = slides.find(
      (slide) =>
        slide.title.toLowerCase().replace(/\s+/g, "-") === id.toLowerCase()
    );
  }
  if (!project) return notFound();

  return (
    <main className="flex flex-col items-center flex-1 w-full">
      {/* Image header section */}
      <div
        className="relative w-full"
        style={{ height: "30dvh", minHeight: 120 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover w-full h-full absolute inset-0 z-0"
          style={{ objectPosition: "center" }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 drop-shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
          <div className="bg-black/60 rounded-3xl px-6 py-4 w-full max-w-2xl text-center mx-auto backdrop-blur-sm shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
            <ViewTransition name={`slide-title-description-${id}`}>
              <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">
                {project.title}
              </h1>
              <p className="text-lg mb-0 text-white drop-shadow max-w-2xl mx-auto">
                {project.description}
              </p>
            </ViewTransition>
          </div>
        </div>
      </div>
      {/* Main content */}
      <article className="max-w-2xl text-base w-full px-4 mt-8">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSanitize]}
          components={components}
        >
          {project.longDescription}
        </ReactMarkdown>
      </article>
    </main>
  );
}

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="underline text-indigo-600 hover:text-indigo-800" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <i className="text-red-400" {...props} />
  ),
  code: (props: {
    inline?: boolean;
    className?: string;
    children?: React.ReactNode;
  }) =>
    props.inline ? (
      <code className="px-1 bg-gray-200 rounded text-sm" {...props}>
        {props.children}
      </code>
    ) : (
      <pre
        className="bg-gray-900 text-white p-4 rounded overflow-x-auto"
        {...props}
      >
        <code>{props.children}</code>
      </pre>
    ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc ml-6" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal ml-6" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="mb-1" {...props} />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table className="min-w-full border-collapse" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => <tr {...props} />,
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="border px-2 py-1" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="border px-2 py-1 font-bold" {...props} />
  ),
};
