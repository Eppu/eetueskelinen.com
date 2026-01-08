import { getNowPlaying, getMostRecentlyPlayed } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import GradientText from "./GradientText";

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
        {/* TODO: Don't know if I like the gradient yet. Another option would be to just use a <i>. */}
        {/* {nowPlayingMessage} <i>{song.name}</i> by {artistName}. */}
        {nowPlayingMessage}{" "}
        <Link
          href="/music"
          className="
        hover:brightness-75 hover:scale-125"
        >
          {isPlaying && (
            <span className="inline-flex items-end w-3 h-3 ml-1 mb-1 gap-0.5" aria-hidden="true">
              <span className="w-0.5 bg-neutral-500 animate-music-bar" style={{ animationDelay: "0ms" }} />
              <span className="w-0.5 bg-neutral-500 animate-music-bar" style={{ animationDelay: "150ms" }} />
              <span className="w-0.5 bg-neutral-600 animate-music-bar" style={{ animationDelay: "300ms" }} />
            </span>
          )}{" "}
          <GradientText animated>{song.name}</GradientText>
        </Link>{" "}
        by {artistName}.
      </p>
    )
  );
}
