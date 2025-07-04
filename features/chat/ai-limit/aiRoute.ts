import { google } from "@ai-sdk/google";
import { generateObject } from "ai";
import z from "zod";

export const model = google("gemini-2.0-flash");

export const schema = z.object({
  path: z
    .string()
    .describe(
      "The path name to navigate to. Must be one of: 'contact', 'project' (which is for all projects), 'project/1', 'project/2', 'project/3'."
    ),
  response: z
    .string()
    .describe(
      "A short message to the user, such as: 'The information you requested can be found on this page.'"
    ),
});

export const getAIRoute = async (
  message: string
): Promise<{ object: z.infer<typeof schema>; tokens: number }> => {
  const { object, usage } = await generateObject({
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
    maxTokens: 700,
  });
  return { object, tokens: usage.totalTokens };
};
