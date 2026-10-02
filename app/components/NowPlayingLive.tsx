"use client";

import Link from "next/link";
import GradientText from "./GradientText";
import PlayingBars from "./PlayingBars";
import { liveChangeClasses, useLiveNowPlaying } from "./useLiveNowPlaying";
import type { PublicNowPlaying } from "../utils/spotify";

export default function NowPlayingLive({ initial }: { initial: PublicNowPlaying }) {
  const { data, isTransitioning, changeCount } = useLiveNowPlaying(initial);

  if (data.state === "error" || data.state === "idle") return null;

  const song = data.track;
  const isPlaying = data.isPlaying;
  const isRecent = data.state === "recent";

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
    <p
      className="motion-safe:opacity-0 motion-safe:animate-fade-in-up md:text-2xl text-xl mt-8"
      style={{ animationDelay: "1500ms" }}
    >
      <span key={changeCount} className={`block ${liveChangeClasses(isTransitioning, changeCount)}`}>
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
      </span>
    </p>
  );
}
