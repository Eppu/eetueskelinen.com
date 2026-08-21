import { getMostRecentlyPlayed, toPublicNowPlaying } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import NowPlayingLive from "./NowPlayingLive";

// Fetches on the server so the line is in the initial HTML, then hands off to the client
// component, which refreshes it whenever the tab comes back into focus.
export default async function NowPlaying() {
  noStore();

  const initial = toPublicNowPlaying(await getMostRecentlyPlayed());

  return <NowPlayingLive initial={initial} />;
}
