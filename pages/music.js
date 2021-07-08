import { QueryClientProvider, useQuery } from "react-query";
import Image from "next/image";

import Layout from "../src/components/layout";

function Music({ data, error }) {
  const { error: currentError, data: currentlyPlaying } = useQuery(
    `currentlyPlaying`,
    () => fetch(`/api/get-now-playing`).then((res) => res.json()),
    { refetchOnMount: true }
  );

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
          <div className="row">
            <div class="col-xs-12">
              <h1 className="about_title animate__animated fadeInUpSmall">Music</h1>
            </div>
          </div>
          <p className="animate__animated fadeInUpSmall delay-100ms">
            I get geeky about music, which means I also listen to a lot of stuff.
          </p>
          <p className="animate__animated fadeInUpSmall delay-100ms">
            <strong>
              Here are some of{" "}
              <a href="https://open.spotify.com/user/eetumro?si=6a2eba04f8b34567" target="_blank" rel="noreferrer">
                <span className="spotify_header_link">my favorites</span>
              </a>{" "}
              from the past 6 months.
            </strong>
          </p>
        </div>

        <div className="music_container">
          {/* Display artists */}
          <div className="project_item_container music_item_container">
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
          <div className="project_item_container music_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-250ms">Currently playing</h4>
            <div className="currently_playing_container">
              {/* This can also be a playing_item */}
              <div className="music_item currently_playing delay-500ms animate__animated fadeInUpSmall">
                {/* If a song is currently playing... */}
                {currentlyPlaying && currentlyPlaying.isPlaying ? (
                  <>
                    <a href={currentlyPlaying.songUrl} target="_blank" rel="noreferrer">
                      <Image src={currentlyPlaying.albumImageUrl} height="150px" width="150px" fixed></Image>
                      <div className="song_info">
                        <strong class="currently_playing_title">{currentlyPlaying.name}</strong>
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

        {/* Top songs */}
        <div className="music_container" style={{ paddingTop: "0" }}>
          <div className="project_item_container music_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-500ms">Top songs</h4>
            <div className="song_list_container delay-750ms animate__animated fadeInUpSmall">
              {topSongs.map((song, i) => {
                return (
                  <div className="music_item top_item">
                    <a href={song.external_urls.spotify} target="_blank" rel="noreferrer">
                      <Image src={song.album.images[0].url} height="100px" width="100px" fixed></Image>
                      <div className="song_info">
                        <strong class="top_song_title">{song.name}</strong>
                        <div className="song_details">
                          <p className="artist_name">{song.artists.map((_artist) => _artist.name).join(`, `)}</p>
                          <p className="album_name">{song.album.name}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recently listened */}
          <div className="project_item_container music_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-500ms">Recently listened</h4>
            <div className="song_list_container delay-750ms animate__animated fadeInUpSmall">
              {recentlyPlayed.map((song, i) => {
                return (
                  <div className="music_item top_item">
                    <a href={song.track.external_urls.spotify} target="_blank" rel="noreferrer">
                      <Image src={song.track.album.images[0].url} height="100px" width="100px" fixed></Image>
                      <div className="song_info">
                        <strong class="top_song_title">{song.track.name}</strong>
                        <div className="song_details">
                          <p className="artist_name">{song.track.artists.map((_artist) => _artist.name).join(`, `)}</p>
                          <p className="album_name">{song.track.album.name}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div class="col-xs-6">ONE</div>
          <div class="col-xs-6">TWO</div>
        </div> */}

        {/* <div className="music_container">
          <div className="col-xs-12 col-sm-6 wow animate__ fadeInUpSmall">
            <p>:D :D :D </p>
          </div>
          <div className="col-xs-12 col-sm-6 wow animate__ fadeInUpSmall">
            <p>:D :D :D </p>
          </div>
        </div> */}
      </>
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-spotify-data`);
  let error = null;
  if (response.status !== 200) {
    error = `There was an error: ${response.status}`;
  }
  const data = await response.json();
  return { props: { data, error, revalidate: 60 } };
}

export default Music;
