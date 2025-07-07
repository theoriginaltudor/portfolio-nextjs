import { slides } from "@/lib/db";
import { google } from "@ai-sdk/google";
import { cosineSimilarity, embed, embedMany, generateObject } from "ai";
import z from "zod";

export const model = google("gemini-2.0-flash");
const embeddingModel = google.textEmbeddingModel("text-embedding-004");
const values = slides.map((slide) => slide.title + " " + slide.description + " " + slide.longDescription);
const { embeddings } = await embedMany({
  model: embeddingModel,
  values,
})

const vectorDatabase = embeddings.map(
  (embedding, index) => ({
    value: slides[index].id,
    embedding,
  }),
);

export const schema = z.object({
  path: z
    .string()
    .describe(
      "The path name to navigate to. Must be one of: 'contact', 'project' (which is for all projects)."
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
  const searchTerm = await embed({
    model: embeddingModel,
    value: message,
  });
  const entries = vectorDatabase.map((entry) => {
    return {
      value: entry.value,
      similarity: cosineSimilarity(
        entry.embedding,
        searchTerm.embedding,
      ),
    };
  });
  const sortedEntries = entries.sort(
    (a, b) => b.similarity - a.similarity,
  );
  console.log("Sorted entries:", sortedEntries);
  if (sortedEntries[0].similarity > 0.8) {
    const bestMatch = sortedEntries[0].value;
    return {
      object: {
        path: bestMatch,
        response: "The information you requested can be found on this page.",
      },
      tokens: 0, // No tokens used for this response
    };
  }
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
