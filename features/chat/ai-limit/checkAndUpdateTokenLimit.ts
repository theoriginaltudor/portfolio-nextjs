import { ipTokenCache } from "./ipTokenCache";
import { getClientIP } from "./getClientIP";

export interface TokenCheckResult {
  blocked: boolean;
  redirectUrl?: string;
}

import { NextApiRequest } from "next";

export function checkAndUpdateTokenLimit(
  req: NextApiRequest
): TokenCheckResult {
  const ip = getClientIP(req);
  if (!ip) {
    return {
      blocked: true,
      redirectUrl: `/contact?pageMessage=${encodeURIComponent(
        "Unable to determine your IP address."
      )}`,
    };
  }
  const now = Date.now();
  const entry = ipTokenCache[ip] || { tokens: 0, blockedUntil: 0 };

  // Check if blocked
  if (entry.blockedUntil && now < entry.blockedUntil) {
    return {
      blocked: true,
      redirectUrl: `/contact?pageMessage=${encodeURIComponent(
        "Too many questions. Blocked for 24h."
      )}`,
    };
  }

  // Increment token count
  entry.tokens = (entry.tokens || 0) + 1;
  if (entry.tokens > 1000) {
    entry.blockedUntil = now + 24 * 60 * 60 * 1000; // 24h block
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
