import { getNowPlaying } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";

export default async function NowPlaying() {
  noStore();
  let res = await getNowPlaying();

  if (res.status === 204) {
    // No content, just return null
    return null;
  }

  if (res.status !== 200) {
    console.warn("Spotify response was not successful: ", res);
    // Return null to avoid error messages. This doesn't display anything on the page.
    // Also makes it possible to run the site without Spotify API keys.
    return null;
  }

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
          He is currently listening to <i>{song.item.name}</i> by {artistName}.
        </a>
      </p>
    )
  );
}
