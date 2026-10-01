import { getMostRecentlyPlayed } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import GradientText from "./GradientText";
import PlayingBars from "./PlayingBars";

export default async function NowPlaying() {
  noStore();
  const res = await getMostRecentlyPlayed();

  // Nothing to show, and nothing a visitor can act on. getMostRecentlyPlayed has
  // already logged the reason, and /music surfaces it in the UI.
  if (res.state === "error" || res.state === "idle") {
    return null;
  }

  const song = res.track;
  const isPlaying = res.isPlaying;
  const isRecent = res.state === "recent";

  let nowPlayingMessage: string = "";

  if (!isPlaying && !isRecent) {
    nowPlayingMessage = "He was just listening to";
  } else if (isPlaying) {
    nowPlayingMessage = "He is currently listening to";
  } else if (isRecent) {
    nowPlayingMessage = "He last listened to";
  }

  // only display the first artist and the text "and others" if there are multiple artists
  const artistName = song.artists.length > 1 ? `${song.artists[0]} and others` : song.artists[0];

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
          {isPlaying && <PlayingBars className="ml-1 mb-1" />}{" "}
          <GradientText animated>{song.name}</GradientText>
        </Link>{" "}
        by {artistName}.
      </p>
    )
  );
}
