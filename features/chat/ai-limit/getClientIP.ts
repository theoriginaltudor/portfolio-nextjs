// Get client IP address from Next.js API route request
import type { NextApiRequest } from "next";

export function getClientIP(req: NextApiRequest): string | null {
  // x-forwarded-for may be a comma-separated list of IPs
  const xForwardedFor = req.headers["x-forwarded-for"];
  if (typeof xForwardedFor === "string") {
    return xForwardedFor.split(",")[0].trim();
  } else if (Array.isArray(xForwardedFor) && xForwardedFor.length > 0) {
    return xForwardedFor[0].split(",")[0].trim();
  }
  // Fallbacks for direct connection
  return (
    req.socket?.remoteAddress || req.headers["x-real-ip"]?.toString() || null
  );
}
