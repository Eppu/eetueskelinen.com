"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import GradientText from "./GradientText";
import type { PublicNowPlaying } from "../utils/spotify";

// Tabbing back and forth shouldn't turn into a burst of requests, so ignore focus events
// that land within this window of the last attempt.
const MIN_REFETCH_INTERVAL_MS = 10_000;

export default function NowPlayingLive({ initial }: { initial: PublicNowPlaying }) {
  const [data, setData] = useState(initial);

  // Seeded as "just fetched", because the initial state was rendered on the server.
  const lastAttemptAt = useRef(Date.now());
  const inFlight = useRef(false);

  const refetch = useCallback(async () => {
    if (inFlight.current || Date.now() - lastAttemptAt.current < MIN_REFETCH_INTERVAL_MS) return;

    // Counted before the request so a failing endpoint gets backed off too.
    lastAttemptAt.current = Date.now();
    inFlight.current = true;

    try {
      const response = await fetch("/api/now-playing", { cache: "no-store" });
      if (!response.ok) return;

      setData(await response.json());
    } catch {
      // Keep whatever is on screen. A failed background refresh shouldn't blank the line.
    } finally {
      inFlight.current = false;
    }
  }, []);

  useEffect(() => {
    // `focus` covers window and tab switching; `visibilitychange` catches the cases focus
    // misses, such as returning to a backgrounded tab that already held focus.
    const onReturn = () => {
      if (document.visibilityState === "visible") refetch();
    };

    window.addEventListener("focus", onReturn);
    document.addEventListener("visibilitychange", onReturn);

    return () => {
      window.removeEventListener("focus", onReturn);
      document.removeEventListener("visibilitychange", onReturn);
    };
  }, [refetch]);

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
  );
}
