import { ipTokenCache } from "./ipTokenCache";
import { getClientIP } from "./getClientIP";

export interface TokenCheckResult {
  blocked: boolean;
  redirectUrl?: string;
}
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export function checkAndUpdateTokenLimit(
  headers: ReadonlyHeaders
): TokenCheckResult {
  const ip = getClientIP(headers);
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
      redirectUrl: `/contact?message=${encodeURIComponent(
        "You have reached your limit for the day. Come back in 24h and we can chat again."
      )}`,
    };
  }
  return { blocked: false };
}
