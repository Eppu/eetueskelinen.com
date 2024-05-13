import { getSpotifyData } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Title from "../components/Title";

export default async function Music() {
  noStore();
  let res = await getSpotifyData();

  if (res.responseArtists.status !== 200 || res.responseRecently.status !== 200 || res.responseTracks.status !== 200) {
    console.warn("Spotify response was not successful: ", res);
    return (
      <p className="md:text-2xl text-xl mt-8" style={{ animationDelay: "0ms" }}>
        Oh no, couldn't fetch the data from Spotify. :(
        <br /> <br />
        Please try again later!
      </p>
    );
  }

  const artists = await res.responseArtists.json();
  const recently = await res.responseRecently.json();
  const tracks = await res.responseTracks.json();

  console.log("recently", JSON.stringify(recently.items, null, 2));

  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Music</Title>
      <p>
        Tracks and artists I've listened to the most during the past month, according to{" "}
        <a href="https://open.spotify.com/user/eetumro" target="_blank" rel="noopener noreferrer">
          Spotify
        </a>
        .
      </p>
      {/* <div className="grid grid-cols-2 gap-4"> */}
      {/* <div> */}
      <h2 className="md:text-2xl text-xl mt-8">Top artists</h2>
      <ul>
        {artists.items.map((artist) => (
          <li key={artist.id}>
            <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
              {artist.name}
            </a>
          </li>
        ))}
      </ul>

      <h2 className="md:text-2xl text-xl mt-8">Top tracks</h2>
      <ul>
        {tracks.items.map((track) => (
          <li key={track.id}>
            <a href={track.external_urls.spotify} target="_blank" rel="noreferrer">
              {track.name} by {track.artists[0].name}
            </a>
          </li>
        ))}
      </ul>
      {/* </div> */}
      {/* <div> */}
      <h2 className="md:text-2xl text-xl mt-8">Recently played tracks</h2>
      <ul>
        {recently.items.map((recent) => (
          <li key={recent.id}>
            <a href={recent.track.external_urls.spotify} target="_blank" rel="noreferrer">
              {recent.track.name} by {recent.track.artists[0].name}
            </a>
          </li>
        ))}
      </ul>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
