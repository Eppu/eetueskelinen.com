import { getSpotifyData } from "../utils/spotify";
import { unstable_noStore as noStore } from "next/cache";
import Title from "../components/Title";
import Image from "next/image";
import { MusicCard } from "../components/MusicCard";
import ExternalLink from "../components/ExternalLink";

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
      <p className="text-xl mb-4">
        Tracks and artists I've listened to the most during the past month, according to{" "}
        <ExternalLink href="https://open.spotify.com/user/eetumro">Spotify</ExternalLink>.
      </p>

      <h2 className="md:text-2xl text-xl my-8 font-medium">Top artists</h2>
      <ul className="mb-10 flex flex-row md:gap-8 gap-4">
        {artists.items.map((artist, i) => (
          <li key={artist.id}>
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              className="group block focus-visible:outline-none"
            >
              <div className="flex items-center flex-col">
                <div className="relative max-w-xs overflow-hidden rounded-full ring-2 ring-transparent transition-all duration-300 ease-out group-hover:ring-yellowgreen group-hover:scale-[1.04] group-focus-visible:ring-yellowgreen">
                  <Image
                    src={artist.images[0].url}
                    alt={artist.name}
                    className="rounded-full object-cover aspect-square"
                    width={128}
                    height={128}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -top-1 -left-1 flex items-center justify-center h-7 w-7 rounded-full bg-yellowgreen text-neutral-900 text-sm font-bold shadow-md"
                  >
                    {i + 1}
                  </span>
                </div>

                <p className="text-center mt-3 text-xl font-medium transition-colors duration-200 group-hover:text-yellowgreenselection">
                  {artist.name}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
        <div>
          <h2 className="md:text-2xl text-xl mt-8 mb-4 font-medium">Top tracks</h2>
          <ul className="mb-2">
            {tracks.items.map((track) => (
              <li key={track.id} className="mb-4">
                <MusicCard
                  artist={track.artists[0].name}
                  imageUrl={track.album.images[0].url}
                  externalUrl={track.external_urls.spotify}
                  name={track.name}
                  album={track.album.name}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="md:text-2xl text-xl mt-8 mb-4 font-medium">Recently played tracks</h2>
          <ul className="mb-2">
            {recently.items.map((recent) => (
              <li key={`recent-${recent.track.id}`} className="mb-4">
                <MusicCard
                  artist={recent.track.artists[0].name}
                  imageUrl={recent.track.album.images[0].url}
                  externalUrl={recent.track.external_urls.spotify}
                  name={recent.track.name}
                  album={recent.track.album.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
