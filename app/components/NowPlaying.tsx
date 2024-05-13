import { getNowPlaying, getMostRecentlyPlayed } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function NowPlaying() {
  noStore();
  let res = await getMostRecentlyPlayed();

  // console.log("res", res);

  // let getMostRecentlyPlayedRes = await getMostRecentlyPlayed();
  // console.log("getMostRecentlyPlayedRes", getMostRecentlyPlayedRes);

  // if (res.status === 204) {
  //   console.log("res status is 204");
  //   // No content, just return null
  //   return null;
  // }

  // if (res.status !== 200) {
  //   console.warn("Spotify response was not successful: ", res);
  //   // Return null to avoid error messages. This doesn't display anything on the page.
  //   // Also makes it possible to run the site without Spotify API keys.
  //   return null;
  // }

  const song = res.item.track;
  // console.log("song", song);
  const isPlaying = res.isPlaying;
  console.log("isPlaying", isPlaying);

  // only display the first artist and the text "and others" if there are multiple artists
  const artistName = song.artists.length > 1 ? `${song.artists[0].name} and others` : song.artists[0].name;

  return (
    song && ( // If the song is playing and there is a song
      <p
        className="motion-safe:opacity-0 motion-safe:animate-fade-in-up md:text-2xl text-xl mt-8"
        style={{ animationDelay: "1500ms" }}
      >
        <Link href="/music">
          {isPlaying ? "He is currently listening to" : "He last listened to"} <i>{song.name}</i> by {artistName}.
        </Link>
      </p>
    )
  );
}
