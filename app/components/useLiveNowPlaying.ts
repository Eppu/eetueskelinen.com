"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PublicNowPlaying } from "../utils/spotify";

// Tabbing back and forth shouldn't turn into a burst of requests, so ignore focus events
// that land within this window of the last attempt.
const MIN_REFETCH_INTERVAL_MS = 3_000;
const STATUS_TRANSITION_MS = 180;

const isSameNowPlaying = (current: PublicNowPlaying, next: PublicNowPlaying) => {
  if (current.state !== next.state) return false;
  if (!("track" in current) || !("track" in next)) return true;

  return (
    current.isPlaying === next.isPlaying &&
    current.track.name === next.track.name &&
    current.track.artists.join("|") === next.track.artists.join("|")
  );
};

// Classes for content that animates on change: the old content fades out drifting up a
// few pixels, and the new content (remounted via `key={changeCount}`) rises in from a few
// pixels below. Nothing plays on the first render. Reduced motion keeps only the fade.
// The element needs to be block or inline-block, since transforms don't apply inline.
export const liveChangeClasses = (isTransitioning: boolean, changeCount: number) =>
  [
    "transition duration-200 ease-in",
    isTransitioning && "opacity-0 motion-safe:-translate-y-1",
    changeCount > 0 && "motion-safe:animate-rise-in motion-reduce:animate-fade-in",
  ]
    .filter(Boolean)
    .join(" ");

interface LiveNowPlayingOptions {
  // Which changes get the exit/enter transition. Anything else is applied immediately.
  shouldAnimate?: (current: PublicNowPlaying, next: PublicNowPlaying) => boolean;
}

// Starts from the server-rendered state and refreshes it from /api/now-playing whenever
// the tab comes back into focus. For an animated change, `isTransitioning` is true briefly
// before it lands so callers can animate the old content out, and `changeCount` then goes
// up, which callers can use as a key to remount and animate the new content in.
export function useLiveNowPlaying(initial: PublicNowPlaying, { shouldAnimate }: LiveNowPlayingOptions = {}) {
  const [data, setData] = useState(initial);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [changeCount, setChangeCount] = useState(0);

  // Read through a ref so an inline callback doesn't recreate refetch on every render.
  const shouldAnimateRef = useRef(shouldAnimate);

  useEffect(() => {
    shouldAnimateRef.current = shouldAnimate;
  }, [shouldAnimate]);

  // Seeded as "just fetched", because the initial state was rendered on the server.
  const lastAttemptAt = useRef(Date.now());
  const inFlight = useRef(false);
  const transitionTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const latestData = useRef(initial);

  useEffect(() => {
    latestData.current = data;
  }, [data]);

  const refetch = useCallback(async () => {
    if (inFlight.current || Date.now() - lastAttemptAt.current < MIN_REFETCH_INTERVAL_MS) return;

    // Counted before the request so a failing endpoint gets backed off too.
    lastAttemptAt.current = Date.now();
    inFlight.current = true;

    try {
      const response = await fetch("/api/now-playing", { cache: "no-store" });
      if (!response.ok) return;

      const nextData = (await response.json()) as PublicNowPlaying;

      if (isSameNowPlaying(latestData.current, nextData)) return;

      if (shouldAnimateRef.current && !shouldAnimateRef.current(latestData.current, nextData)) {
        setData(nextData);
        return;
      }

      setIsTransitioning(true);

      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }

      transitionTimeout.current = setTimeout(() => {
        setData(nextData);
        setChangeCount((count) => count + 1);
        setIsTransitioning(false);
        transitionTimeout.current = null;
      }, STATUS_TRANSITION_MS);
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

  useEffect(() => {
    return () => {
      if (transitionTimeout.current) {
        clearTimeout(transitionTimeout.current);
      }
    };
  }, []);

  return { data, isTransitioning, changeCount };
}
