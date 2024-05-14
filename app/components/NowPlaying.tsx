import { getNowPlaying, getMostRecentlyPlayed } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function NowPlaying() {
  noStore();
  let res = await getMostRecentlyPlayed();

  if (!res) {
    console.warn("No Spotify data found");
    return null;
  }

  const song = res.item.track;
  const isPlaying = res.isPlaying;
  const isRecent = res.type === "recent";
  console.log("isPlaying", isPlaying);
  console.log("isRecent", isRecent);

  let nowPlayingMessage: string = "";

  if (!isPlaying && !isRecent) {
    nowPlayingMessage = "He was just listening to";
  } else if (isPlaying) {
    nowPlayingMessage = "He is currently listening to";
  } else if (isRecent) {
    nowPlayingMessage = "He last listened to";
  }

  // only display the first artist and the text "and others" if there are multiple artists
  const artistName = song.artists.length > 1 ? `${song.artists[0].name} and others` : song.artists[0].name;

  return (
    song && ( // If the song is playing and there is a song
      <p
        className="motion-safe:opacity-0 motion-safe:animate-fade-in-up md:text-2xl text-xl mt-8"
        style={{ animationDelay: "1500ms" }}
      >
        <Link href="/music">
          {nowPlayingMessage} <i>{song.name}</i> by {artistName}.
        </Link>
      </p>
    )
  );
}
