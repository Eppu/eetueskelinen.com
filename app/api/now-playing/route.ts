import { getMostRecentlyPlayed, toPublicNowPlaying, type PublicNowPlaying } from "@/app/utils/spotify";

export const dynamic = "force-dynamic";

// This endpoint is public and fans out to a rate-limited third party, so hold the last
// answer briefly. Refreshing on focus stays responsive at this window, while a client
// hammering the route can't turn into a burst of Spotify calls. Module scope means the
// cache is per serverless instance, which is coarse but enough to blunt the sharp edge.
const CACHE_TTL_MS = 10_000;

let cached: { at: number; data: PublicNowPlaying } | null = null;

export async function GET() {
  if (!cached || Date.now() - cached.at > CACHE_TTL_MS) {
    cached = { at: Date.now(), data: toPublicNowPlaying(await getMostRecentlyPlayed()) };
  }

  return Response.json(cached.data, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
