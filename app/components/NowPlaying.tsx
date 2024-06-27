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
    song && (
      <p
        className="motion-safe:opacity-0 motion-safe:animate-fade-in-up md:text-2xl text-xl mt-8"
        style={{ animationDelay: "1500ms" }}
      >
        {nowPlayingMessage}{" "}
        <Link
          href="/music"
          className="
          group 
        hover:brightness-75 hover:scale-125"
        >
          <span className="emoji-top opacity-0 transform  group-hover:opacity-100 group-hover:-translate-x-10 group-hover:-translate-y-7 transition duration-150 ease-in-out absolute group-hover:inline-block">
            <span className="inline-block animate-bounce">
              <span className="inline-block -rotate-12">🎶</span>
            </span>
          </span>
          <span className="emoji-left opacity-0 transform  group-hover:opacity-100 group-hover:-translate-x-10 group-hover:translate-y-6 transition duration-200 ease-in-out  absolute group-hover:inline-block">
            <div className="inline-block animate-bounce">
              <div className="inline-block rotate-6">🎷</div>
            </div>
          </span>
          <GradientText animated>{song.name}</GradientText>
          <span className="emoji-right opacity-0 transform  group-hover:opacity-100 group-hover:translate-x-3 group-hover:-translate-y-6 transition duration-250 ease-in-out  absolute group-hover:inline-block">
            <div className="inline-block animate-bounce ">
              <div className="inline-block -rotate-90 ">🎸</div>
            </div>
          </span>
          <span className="inline-block emoji-bottom opacity-0 transform rotate-6 group-hover:opacity-100 group-hover:translate-x-4 group-hover:translate-y-6 transition duration-300 ease-in-out absolute group-hover:inline-block ">
            <div className="inline-block animate-bounce">🎹</div>
          </span>
          {/* <span className="absolute left-full top-0 hidden group-hover:inline"> 🎵🎉</span> */}
        </Link>{" "}
        by {artistName}.
      </p>
    )
  );
}
