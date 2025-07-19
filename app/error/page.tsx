"use client";

export default function ErrorPage({ params }: { params: { reason?: string } }) {
  return <p>Sorry, something went wrong: {params.reason}</p>;
}
