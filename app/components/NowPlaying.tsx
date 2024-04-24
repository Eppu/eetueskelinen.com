import { getNowPlaying } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";

export default async function NowPlaying() {
  noStore();
  const res = await getNowPlaying();
  const song = await res.json();

  const isPlaying = song.is_playing;

  // only display the first artist and the text "and others" if there are multiple artists
  const artistName =
    song.item.artists.length > 1 ? `${song.item.artists[0].name} and others` : song.item.artists[0].name;

  return (
    isPlaying &&
    song.item && ( // If the song is playing and there is a song
      <p
        className="motion-safe:opacity-0 motion-safe:animate-fade-in-up md:text-2xl text-xl mt-8"
        style={{ animationDelay: "1500ms" }}
      >
        <a href="https://open.spotify.com/user/eetumro" target="_blank" rel="noopener noreferrer">
          He is currently listening to <strong>{song.item.name}</strong> by {artistName}
        </a>
      </p>
    )
  );
}
