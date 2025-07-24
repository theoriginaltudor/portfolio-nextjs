'use server';

import { createClient } from "@/lib/supabase/server";
import { TablesUpdate } from "@/types/database.types";
import { revalidatePath } from "next/cache";

export const updateArticle = async (formData: FormData, path: string): Promise<{ success: boolean }> => {
  try {
    if (!formData.get("id")) {
      console.error("Article ID is required for update.");
      return { success: false };
    }

    const { title, long_description, skills, id } = Object.fromEntries(formData.entries());
    const articleId = Number(id);
    const supabase = await createClient();

    // Check if we're updating skills or article content
    if (skills) {
      // Route 1: Update skills (articles_skills table)
      await updateSkills(skills.toString(), articleId, supabase);
    } else {
      // Route 2: Update article content (articles table)
      await updateArticleContent({ title, long_description }, articleId, supabase);
    }

    revalidatePath(path);
    return { success: true };
  } catch (error) {
    console.error("Error in updateArticle:", error);
    return { success: false };
  }
}

const updateArticleContent = async (
  data: { title: FormDataEntryValue | null; long_description: FormDataEntryValue | null },
  articleId: number,
  supabase: Awaited<ReturnType<typeof createClient>>
) => {
  // Build update object with only defined values
  const updateData: TablesUpdate<"articles"> = {};
  if (data.title) updateData.title = data.title.toString();
  if (data.long_description) updateData.long_description = data.long_description.toString();

  // Only update if there's something to update
  if (Object.keys(updateData).length === 0) {
    console.log("No article content to update.");
    return;
  }

  const { error } = await supabase
    .from("articles")
    .update(updateData)
    .eq("id", articleId);

  if (error) {
    throw new Error(`Failed to update article: ${error.message}`);
  }
}

const updateSkills = async (
  skills: string,
  articleId: number,
  supabase: Awaited<ReturnType<typeof createClient>>
) => {
  // TODO: Implement skills update logic
  // This will involve updating the articles_skills junction table
  throw new Error(`Skills update functionality is not implemented yet for article ${articleId} with skills: ${skills}`);
}