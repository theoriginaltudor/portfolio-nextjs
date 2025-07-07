import { slides } from "@/lib/db";
import { google } from "@ai-sdk/google";
import { cosineSimilarity, embed, embedMany } from "ai";

const embeddingModel = google.textEmbeddingModel("text-embedding-004");


const values = slides.map((slide) => slide.title + " " + slide.description + " " + slide.longDescription);
let vectorDatabase: { value: string; embedding: number[] }[] | null = null;

const getVectorDatabase = async () => {
  if (vectorDatabase) return vectorDatabase;
  const { embeddings } = await embedMany({
    model: embeddingModel,
    values,
  });
  vectorDatabase = embeddings.map((embedding, index) => ({
    value: slides[index].id,
    embedding,
  }));
  return vectorDatabase;
};

/**
 * Returns a JSON object with path and response if similarity > 0.8, otherwise returns false.
 * @param message The user message to embed and compare.
 * @returns {{ path: string; response: string } | false}
 */
export const getBestAIRouteFromEmbedding = async (
  message: string
): Promise<{ path: string; response: string } | false> => {
  const vectorDatabase = await getVectorDatabase();
  const searchTerm = await embed({
    model: embeddingModel,
    value: message,
  });
  const entries = vectorDatabase.map((entry) => {
    return {
      value: entry.value,
      similarity: cosineSimilarity(entry.embedding, searchTerm.embedding),
    };
  });
  const sortedEntries = entries.sort((a, b) => b.similarity - a.similarity);
  if (sortedEntries[0] && sortedEntries[0].similarity > 0.8) {
    return {
      path: sortedEntries[0].value,
      response: "The information you requested can be found on this page.",
    };
  }
  return false;
};
