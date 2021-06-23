import { QueryClientProvider, useQuery } from "react-query";
import Image from "next/image";

import Layout from "../src/components/layout";

function Music({ data, error }) {
  const { error: currentError, data: currentlyPlaying } = useQuery(
    `currentlyPlaying`,
    () => fetch(`/api/get-now-playing`).then((res) => res.json()),
    { refetchOnMount: true }
  );

  console.log(currentlyPlaying);

  if (error || currentError) {
    return <div>There was an error fetching data from spotify</div>;
  }

  let artists = data.artists.items;
  let recentlyPlayed = data.recentlyPlayed.items;
  let topSongs = data.songs.items;

  return (
    <Layout>
      <>
        <div id="sandbox_header">
          <h3 className="animate__animated fadeInUpSmall">Music</h3>
          <p className="animate__animated fadeInUpSmall delay-100ms">
            Being a big music nerd equates to listening to a lot of different stuff.
          </p>
          <p className="animate__animated fadeInUpSmall delay-100ms">
            <strong>Here are some of my recent favorites.</strong>
          </p>
        </div>

        <div id="music_container">
          {/* Display artists */}
          <div className="project_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-100ms">Top artists</h4>
            <div className="artists_container delay-250ms animate__animated fadeInUpSmall">
              {artists.map((artist) => (
                <div className="music_item artist">
                  <a href={`https://open.spotify.com/artist/${artist.id}`} target="_blank" rel="noreferrer">
                    <Image
                      alt={"A promo picture of " + artist.name}
                      src={artist.images.filter((image) => image.height >= 150).slice(-1)[0].url}
                      width="150px"
                      height="150px"
                    />
                    <p>{artist.name}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="project_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-100ms">Currently playing</h4>
            <div className="currently_playing_container">
              {/* This can also be a playing_item */}
              <div className="music_item currently_playing delay-250ms animate__animated fadeInUpSmall">
                {/* If a song is currently playing... */}
                {currentlyPlaying && currentlyPlaying.isPlaying ? (
                  <>
                    <a href={currentlyPlaying.songUrl} target="_blank" rel="noreferrer">
                      <Image src={currentlyPlaying.albumImageUrl} height="150px" width="150px" fixed></Image>
                      <div className="song_info">
                        <strong>{currentlyPlaying.name}</strong>
                        <div className="song_details">
                          <p className="artist_name">{currentlyPlaying.artist}</p>
                          <p className="album_name">{currentlyPlaying.album}</p>
                        </div>
                      </div>
                    </a>
                  </>
                ) : (
                  <div className="not_playing">
                    <p>Nothing playing 😴</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-spotify-data`);
  let error = null;
  if (response.status !== 200) {
    error = `There was an error: ${response.status}`;
  }
  const data = await response.json();
  return { props: { data, error, revalidate: 60 } };
}

export default Music;
