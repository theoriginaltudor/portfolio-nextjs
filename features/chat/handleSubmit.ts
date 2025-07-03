"use server";
import { redirect } from "next/navigation";
import { getAIRoute } from "./ai-limit/aiRoute";
import { checkAndUpdateTokenLimit } from "./ai-limit/checkAndUpdateTokenLimit";
import { addTokensForIP } from "./ai-limit/addTokensForIP";

import { NextApiRequest } from "next"; // Add this import if not already present

export async function handleSubmit(formData: FormData, req: NextApiRequest) {
  const tokenCheck = checkAndUpdateTokenLimit(req);
  if (tokenCheck.blocked && tokenCheck.redirectUrl) {
    redirect(tokenCheck.redirectUrl);
  }

  const message = formData.get("message")?.toString() || "";
  const { object, tokens } = await getAIRoute(message);

  // Add the actual tokens used to the IP's count
  const addResult = addTokensForIP(req, tokens);
  if (addResult.blocked && addResult.redirectUrl) {
    redirect(addResult.redirectUrl);
  }

  redirect(
    `/${object.path.trimEnd()}?message=${encodeURIComponent(object.response)}`
  );
}
