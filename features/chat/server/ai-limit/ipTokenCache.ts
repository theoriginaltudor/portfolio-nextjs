// Simple in-memory cache for IP token tracking (demo only, resets on server restart)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (!(global as any).ipTokenCache) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (global as any).ipTokenCache = {};
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ipTokenCache = (global as any).ipTokenCache as Record<
  string,
  { tokens: number; blockedUntil: number; lastUpdated: number }
>;
