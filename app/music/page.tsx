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

  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Music</Title>
      <p className="md:text-2xl text-xl mb-8">
        Tracks and artists I've listened to the most during the past month, according to{" "}
        <a href="https://open.spotify.com/user/eetumro" target="_blank" rel="noopener noreferrer">
          Spotify
        </a>
        .
      </p>
      {/* <div className="grid grid-cols-2 gap-4"> */}
      {/* <div> */}
      <h2 className="md:text-2xl text-xl mt-8 mb-4">Top artists</h2>
      <ul className="mb-2 flex flex-row gap-8">
        {artists.items.map((artist) => (
          <li key={artist.id} className="mb-1">
            <a href={artist.external_urls.spotify} target="_blank" rel="noreferrer">
              <div className="flex items-center flex-col">
                <img src={artist.images[0].url} alt={artist.name} className="rounded-full h-32 w-32 inline-block" />
                <p className="text-center mt-2 text-xl font-medium">{artist.name}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="md:text-2xl text-xl mt-8 mb-4">Top tracks</h2>
          <ul className="mb-2">
            {tracks.items.map((track) => (
              <li key={track.id} className="mb-2">
                {/* card for track information and image */}
                <a href={track.external_urls.spotify} target="_blank" rel="noreferrer">
                  <div className="h-32 rounded-lg border border-neutral-900 shadow-md flex flex-row">
                    <img src={track.album.images[0].url} alt={track.name} className="rounded-lg h-32 w-32" />
                    <div className="flex flex-col">
                      <p>{track.name}</p>
                      <p>by {track.artists[0].name}</p>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          {/* </div> */}
          {/* <div> */}
        </div>
        <div>
          <h2 className="md:text-2xl text-xl mt-8 mb-4">Recently played tracks</h2>
          <ul className="mb-2">
            {recently.items.map((recent) => (
              <li key={`recent-${recent.track.id}`} className="mb-2">
                <a href={recent.track.external_urls.spotify} target="_blank" rel="noreferrer">
                  {recent.track.name} by {recent.track.artists[0].name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
