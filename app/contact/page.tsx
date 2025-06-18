import React from "react";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-lg">
        You can reach me at{" "}
        <a href="mailto:dummy@email.com" className="underline text-blue-600">
          dummy@email.com
        </a>
        .
      </p>
    </main>
  );
}
