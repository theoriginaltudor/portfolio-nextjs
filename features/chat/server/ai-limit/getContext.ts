import { google } from "@ai-sdk/google";
import { embed } from "ai";

import { createClient } from "@/lib/supabase/server"; // Adjust the import path as necessary 
import { Database } from "@/types/database.types";

const embeddingModel = google.textEmbeddingModel("text-embedding-004");


export const getSimilarArticles = async (
  message: string
): Promise<{ context: string; tokens: number }> => {
  try {
    const supabase = await createClient();
    const searchTerm = await embed({
      model: embeddingModel,
      value: message,
    });

    // Call the search_articles function in Supabase
    const { data, error } = await supabase.rpc(
      "search_articles",
      {
        query_embedding: searchTerm.embedding,
        match_threshold: 0.4,
        match_count: 3,
      }
    ) as {
      data: Database["public"]["Functions"]["search_articles"]["Returns"] | null;
      error: Error | null;
    };

    if (error) {
      console.error("Error fetching data from Supabase:", error);
      return { context: "", tokens: searchTerm.usage.tokens };
    }

    if (data && data.length > 0) {
      // Fetch skills for all articles in parallel
      const articleIds = data.map((article) => article.id);
      const skillsMap: Record<number, string[]> = {};

      if (articleIds.length > 0) {
        const { data: skillsData, error: skillsError } = await supabase
          .from("articles_skills")
          .select("article_id, skills(name)")
          .in("article_id", articleIds);

        if (!skillsError && skillsData) {
          for (const row of skillsData as { article_id: number; skills: { name: string }[] }[]) {
            if (!skillsMap[row.article_id]) skillsMap[row.article_id] = [];
            if (Array.isArray(row.skills)) {
              for (const skill of row.skills) {
                if (skill && skill.name) skillsMap[row.article_id].push(skill.name);
              }
            }
          }
        }
      }

      const context = data.reduce((acc, article, idx) => {
        const skillsArr = skillsMap[article.id] || [];
        const skills = skillsArr.join(", ");
        // Log the skills for each article by title
        console.log(`Skills for article '[36m${article.title}[0m':`, skillsArr);
        const articleContext =
          `Slug: project/${article.slug}\n` +
          `Title: ${article.title}\n` +
          (skills ? `Skills: ${skills}\n` : "") +
          `Description: ${article.description}\n` +
          `Article body: ${article.long_description}`;
        return acc + (idx > 0 ? "\n-----break------\n" : "") + articleContext;
      }, "");
      return {
        context,
        tokens: searchTerm.usage.tokens,
      };
    }

    return { context: "", tokens: searchTerm.usage.tokens };
  } catch (error) {
    console.error("Error in getBestAIRouteFromEmbedding:", error);
    throw error;
  }
};
