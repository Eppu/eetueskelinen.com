"use client";

import { MusicCard } from "./MusicCard";
import PlayingBars from "./PlayingBars";
import { liveChangeClasses, useLiveNowPlaying } from "./useLiveNowPlaying";
import type { PublicNowPlaying } from "../utils/spotify";

// What the card shows: a track while one is current, otherwise nothing. Keyed on that so
// the card also animates when it appears or goes away.
const trackKey = (nowPlaying: PublicNowPlaying) =>
  nowPlaying.state === "current" ? (nowPlaying.track.url ?? nowPlaying.track.name) : "none";

const trackChanged = (current: PublicNowPlaying, next: PublicNowPlaying) => trackKey(current) !== trackKey(next);

// The music page's "Currently playing" column. It only shows a track that is playing or
// paused right now; the last played one is already at the top of "Recently played".
export default function CurrentlyPlayingLive({ initial }: { initial: PublicNowPlaying }) {
  // To keep movement down, play/pause only cross-fades the indicator; the card itself
  // animates only when the track changes.
  const { data, isTransitioning, changeCount } = useLiveNowPlaying(initial, { shouldAnimate: trackChanged });

  if (data.state !== "current") return null;

  const { track, isPlaying } = data;

  // The card needs art and a link to render; without them there's nothing to show.
  if (!track.imageUrl || !track.url) return null;

  return (
    <div>
      <h2 className="md:text-2xl text-xl my-8 font-medium flex items-center gap-3">
        Currently playing
        {/* Both indicators share one grid cell and cross-fade, so the heading never shifts. */}
        <span className="inline-grid items-center [&>*]:col-start-1 [&>*]:row-start-1">
          <span className={`transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}>
            <PlayingBars />
          </span>
          <span
            className={`transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
            aria-hidden={isPlaying}
          >
            <span className="text-base font-light opacity-50 italic">paused</span>
          </span>
        </span>
      </h2>
      <div key={changeCount} className={`mb-10 ${liveChangeClasses(isTransitioning, changeCount)}`}>
        <MusicCard
          artist={track.artists[0]}
          imageUrl={track.imageUrl}
          externalUrl={track.url}
          name={track.name}
          album={track.album ?? ""}
        />
      </div>
    </div>
  );
}
