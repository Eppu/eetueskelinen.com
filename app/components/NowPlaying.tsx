import { getMostRecentlyPlayed } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";
import Image from "next/image";
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
  const albumImage = song?.album?.images?.[0]?.url;

  let nowPlayingMessage: string = "";

  if (!isPlaying && !isRecent) {
    nowPlayingMessage = "He was just listening to";
  } else if (isPlaying) {
    nowPlayingMessage = "He is currently listening to";
  } else if (isRecent) {
    nowPlayingMessage = "He last listened to";
  }

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
          className="group/np inline-flex items-center gap-3 align-middle transition-opacity duration-200"
        >
          {albumImage && (
            <span className="relative inline-block shrink-0 align-middle">
              <span
                aria-hidden="true"
                className={`absolute inset-0 rounded-md transition-opacity duration-500 ${
                  isPlaying ? "opacity-100" : "opacity-0"
                } motion-safe:animate-pulse`}
                style={{ boxShadow: "0 0 24px 2px rgba(157, 250, 5, 0.35)" }}
              />
              <Image
                src={albumImage}
                alt=""
                width={40}
                height={40}
                className="relative h-9 w-9 md:h-10 md:w-10 rounded-md object-cover ring-1 ring-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out group-hover/np:scale-[1.06]"
              />
              {isPlaying && (
                <span
                  className="absolute -bottom-1 -right-1 inline-flex items-end justify-center h-4 w-4 rounded-full bg-neutral-950 ring-1 ring-white/10 px-[3px] py-[3px] gap-[1.5px]"
                  aria-hidden="true"
                >
                  <span className="w-[2px] bg-yellowgreen animate-music-bar" style={{ animationDelay: "0ms" }} />
                  <span className="w-[2px] bg-yellowgreen animate-music-bar" style={{ animationDelay: "150ms" }} />
                  <span className="w-[2px] bg-yellowgreenlight animate-music-bar" style={{ animationDelay: "300ms" }} />
                </span>
              )}
            </span>
          )}
          <GradientText animated>{song.name}</GradientText>
        </Link>{" "}
        by {artistName}.
      </p>
    )
  );
}

export function NowPlayingSkeleton() {
  return (
    <p className="md:text-2xl text-xl mt-8" aria-hidden="true">
      <span className="inline-flex items-center gap-3 align-middle">
        <span className="inline-block h-9 w-9 md:h-10 md:w-10 rounded-md bg-neutral-900 motion-safe:animate-pulse" />
        <span className="inline-block h-6 w-56 max-w-full rounded-md bg-neutral-900 motion-safe:animate-pulse" />
      </span>
    </p>
  );
}
