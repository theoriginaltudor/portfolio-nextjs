"use server";
import { redirect } from "next/navigation";
import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";
export async function handleSubmit(formData: FormData) {
  const message = formData.get("message")?.toString() || "";
  const response = await getAIRoute(message);
  redirect(
    `/${response.path.trimEnd()}?message=${encodeURIComponent(
      response.response
    )}`
  );
}

const model = google("gemini-2.0-flash");

const getAIRoute = async (message: string): Promise<z.infer<typeof schema>> => {
  const { object } = await generateObject({
    model,
    schema,
    system:
      "You're an assistant helping a user to navigate a portfolio website.",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  return object;
};

const schema = z.object({
  path: z
    .string()
    .describe(
      "The path name to navigate to. Must be one of: 'contact', 'projects', 'project/1', 'project/2', 'project/3'."
    ),
  response: z
    .string()
    .describe(
      "A short message to the user, such as: 'The information you requested can be found on this page.'"
    ),
});
