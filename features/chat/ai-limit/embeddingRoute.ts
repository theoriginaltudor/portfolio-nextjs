import { slides } from "@/lib/db";
import { google } from "@ai-sdk/google";
import { cosineSimilarity, embed, embedMany } from "ai";

const embeddingModel = google.textEmbeddingModel("text-embedding-004");


const values = slides.map((slide) => slide.title + " " + slide.description + " " + slide.longDescription);
let vectorDatabase: { value: string; embedding: number[] }[] | null = null;

const getVectorDatabase = async (): Promise<{ vectorDatabase: typeof vectorDatabase; tokens: number }> => {
  if (vectorDatabase) return { vectorDatabase, tokens: 0 };
  const { embeddings, usage } = await embedMany({
    model: embeddingModel,
    values,
  });
  vectorDatabase = embeddings.map((embedding, index) => ({
    value: slides[index].slug,
    embedding,
  }));
  return { vectorDatabase, tokens: usage.tokens };
};

/**
 * Returns a response object containing path, response, and tokens
 * @param message The user message to embed and compare.
 * @returns {Promise<{ pathResponse?: { path: string; response: string }; tokens: number }>}
 */
export const getBestAIRouteFromEmbedding = async (
  message: string
): Promise<{ pathResponse?: { path: string; response: string }; tokens: number }> => {
  const { vectorDatabase, tokens } = await getVectorDatabase();
  const searchTerm = await embed({
    model: embeddingModel,
    value: message,
  });
  const entries = vectorDatabase?.map((entry) => {
    return {
      value: entry.value,
      similarity: cosineSimilarity(entry.embedding, searchTerm.embedding),
    };
  });
  const sortedEntries = entries?.sort((a, b) => b.similarity - a.similarity);

  if (sortedEntries?.[0] && sortedEntries[0].similarity > 0.4) {
    return {
      pathResponse: {
        path: `project/${sortedEntries[0].value}`,
        response: "The information you requested can be found on this page."
      },
      tokens
    };
  }
  return { tokens };
};
