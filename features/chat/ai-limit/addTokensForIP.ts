import { ipTokenCache } from "./ipTokenCache";
import { getClientIP } from "./getClientIP";

import type { NextApiRequest } from "next";

export function addTokensForIP(
  req: NextApiRequest,
  tokens: number
): { blocked: boolean; redirectUrl?: string } {
  const ip = getClientIP(req);
  if (!ip) {
    return {
      blocked: true,
      redirectUrl:
        "/contact?pageMessage=" + encodeURIComponent("IP address not found."),
    };
  }
  const now = Date.now();
  const entry = ipTokenCache[ip] || { tokens: 0, blockedUntil: 0 };

  entry.tokens = (entry.tokens || 0) + tokens;
  if (entry.tokens > 1000) {
    entry.blockedUntil = now + 24 * 60 * 60 * 1000;
    ipTokenCache[ip] = entry;
    return {
      blocked: true,
      redirectUrl: `/contact?pageMessage=${encodeURIComponent(
        "Too many questions. Blocked for 24h."
      )}`,
    };
  }
  ipTokenCache[ip] = entry;
  return { blocked: false };
}
