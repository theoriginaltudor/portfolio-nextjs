import { google } from "@ai-sdk/google";
import { cosineSimilarity, embed, embedMany } from "ai";
import { createClient } from "../../../lib/supabase/server";
import { Tables } from "../../../types/database.types";

const embeddingModel = google.textEmbeddingModel("text-embedding-004");

let vectorDatabase: { value: string; embedding: number[] }[] | null = null;



const getVectorDatabase = async (): Promise<{ vectorDatabase: typeof vectorDatabase; tokens: number }> => {
  if (vectorDatabase) return { vectorDatabase, tokens: 0 };
  const supabase = await createClient();
  const { data: articles, error } = await supabase
    .from("articles")
    .select("slug, title, description, long_description")
    .order("id", { ascending: true });
  if (error || !articles) throw new Error("Failed to fetch articles from Supabase");
  const values = (articles as Tables<'articles'>[]).map((article) => `${article.title} ${article.description} ${article.long_description}`);
  const { embeddings, usage } = await embedMany({
    model: embeddingModel,
    values,
  });
  vectorDatabase = embeddings.map((embedding, index) => ({
    value: (articles as Tables<'articles'>[])[index].slug,
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
