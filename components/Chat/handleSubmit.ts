"use server";
import { redirect } from "next/navigation";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
export async function handleSubmit(formData: FormData) {
  const message = formData.get("message")?.toString() || "";
  const response = await getAIRoute(message);
  redirect(`/${response.trimEnd()}`);
}

const model = google("gemini-2.0-flash");

const getAIRoute = async (message: string): Promise<string> => {
  const { text } = await generateText({
    model,
    system:
      "You're an assistant helping a user to navigate a portfolio website." +
      "The only valid responses are 'contact', 'projects', 'project/1', 'project/2', 'project/3', nothing else.",
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });
  return text;
};
