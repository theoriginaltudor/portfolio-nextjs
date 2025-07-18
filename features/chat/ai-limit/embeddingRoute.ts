import { google } from "@ai-sdk/google";
import { embed } from "ai";

import { createClient } from "../../../lib/supabase/server"; // Adjust the import path as necessary 

const embeddingModel = google.textEmbeddingModel("text-embedding-004");

export const getBestAIRouteFromEmbedding = async (
  message: string
): Promise<{ pathResponse?: { path: string; response: string }; tokens: number }> => {
  const supabase = await createClient();
  const searchTerm = await embed({
    model: embeddingModel,
    value: message,
  });

  // Call the match_articles function in Supabase
  const { data, error } = await supabase.rpc('match_articles', {
    query_embedding: searchTerm.embedding,
    match_threshold: 0.5,
    match_count: 1
  });

  if (error) {
    return { tokens: searchTerm.usage.tokens };
  }

  if (data && data.length > 0 && data[0].similarity > 0.7) {
    return {
      pathResponse: {
        path: `project/${data[0].slug}`,
        response: "The information you requested can be found on this page."
      },
      tokens: searchTerm.usage.tokens
    };
  }
  return { tokens: searchTerm.usage.tokens };
};
