import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Layout from "../src/components/layout";

function Music() {
  let [artists, setArtists] = useState({});
  let [recentlyPlayed, setRecentlyPlayed] = useState([]);
  let [topSongs, setTopSongs] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const artistCount = 3;
  const songCount = 10;

  useEffect(() => {
    setIsLoading(true);

    fetch(`/api/get-spotify-data`)
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.artists.items);
        setRecentlyPlayed(data.recentlyPlayed.items);
        setTopSongs(data.songs.items);
        setIsLoading(false);
      });
  }, []);

  const { error: currentError, data: currentlyPlaying } = useQuery(
    `currentlyPlaying`,
    () => fetch(`/api/get-now-playing`).then((res) => res.json()),
    { refetchOnMount: true }
  );

  if (currentError) {
    return <div>There was an error fetching data from spotify</div>;
  }

  return (
    <Layout title="Music">
      <>
        <div id="sandbox_header">
          <div id="main_content" className="row">
            <div className="col-xs-12">
              <h1 className="about_title animate__animated fadeInUpSmall">Music</h1>
            </div>
          </div>
          <p className="animate__animated fadeInUpSmall delay-100ms">
            I get geeky about music, which means I also listen to a lot of different stuff.
          </p>
          <p className="animate__animated fadeInUpSmall delay-100ms">
            <strong>
              Here are some of{" "}
              <a
                href="https://open.spotify.com/user/eetumro?si=6a2eba04f8b34567"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                <span className="spotify_header_link">my favorites</span>
              </a>{" "}
              from the past month.
            </strong>
          </p>
        </div>

        <div className="music_container">
          {/* Display artists */}
          <div className="project_item_container music_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-100ms">Top artists</h4>
            <div className="artists_container delay-250ms animate__animated fadeInUpSmall">
              {artists.length > 0
                ? artists.map((artist, i) => (
                    <div className="music_item artist" key={i}>
                      <a
                        href={`https://open.spotify.com/artist/${artist.id}`}
                        target="_blank"
                        rel="noreferrer noopener nofollow"
                      >
                        <Image
                          className="animate__animated animate__fadeIn"
                          alt={"A promo picture of " + artist.name}
                          src={artist.images.filter((image) => image.height >= 150).slice(-1)[0].url}
                          width="150px"
                          height="150px"
                        />
                        <p className="animate__animated fadeInUpSmall delay-100ms">{artist.name}</p>
                      </a>
                    </div>
                  ))
                : // Show skeleton during loading
                  [...Array(artistCount)].map((el, index) => (
                    <SkeletonTheme color="#fff" highlightColor="#fafafa" key={index}>
                      <div className="music_item artist" key={index}>
                        <a target="_blank" rel="noreferrer">
                          <Skeleton height={150} width={150} />
                          <p>
                            <Skeleton />
                          </p>
                        </a>
                      </div>
                    </SkeletonTheme>
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
                    <a href={currentlyPlaying.songUrl} target="_blank" rel="noreferrer noopener nofollow">
                      <div className="album-cover">
                        <Image
                          className="animate__animated animate__fadeIn"
                          src={currentlyPlaying.albumImageUrl}
                          height="150px"
                          width="150px"
                          fixed="true"
                        ></Image>
                      </div>
                      <div className="song_info animate__animated fadeInUpSmall">
                        <strong className="currently_playing_title">{currentlyPlaying.name}</strong>
                        <div className="song_details">
                          <p className="artist_name">{currentlyPlaying.artist}</p>
                          <p className="album_name">{currentlyPlaying.album}</p>
                        </div>
                      </div>
                    </a>
                  </>
                ) : (
                  <div className="not_playing animate__animated fadeInUpSmall">
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
              {topSongs.length > 0
                ? topSongs.map((song, i) => {
                    return (
                      <div className="music_item top_item" key={i}>
                        <a href={song.external_urls.spotify} target="_blank" rel="noreferrer noopener nofollow">
                          <div className="album-cover">
                            <Image
                              className="animate__animated animate__fadeIn"
                              src={song.album.images[0].url}
                              height="100px"
                              width="100px"
                              fixed="true"
                            />
                          </div>
                          <div className="song_info">
                            <strong className="top_song_title">{song.name}</strong>
                            <div className="song_details">
                              <p className="artist_name">{song.artists.map((_artist) => _artist.name).join(`, `)}</p>
                              <p className="album_name">{song.album.name}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })
                : // Show skeleton during loading
                  [...Array(songCount)].map((el, index) => (
                    <div className="music_item top_item" key={index}>
                      <a target="_blank" rel="noreferrer">
                        <div width={100} fixed="true">
                          <Skeleton width={100} height={100} />
                        </div>
                        <div className="song_info">
                          <strong className="top_song_title">
                            <Skeleton width={225} />
                          </strong>
                          <div className="song_details">
                            <p className="artist_name">
                              <Skeleton />
                            </p>
                            <p className="album_name">
                              <Skeleton />
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
            </div>
          </div>

          {/* Recently listened */}
          <div className="project_item_container music_item_container">
            <h4 className="animate__animated animate__fadeInUp delay-500ms">Recently listened</h4>
            <div className="song_list_container delay-750ms animate__animated fadeInUpSmall">
              {recentlyPlayed
                ? recentlyPlayed.map((song, i) => {
                    return (
                      <div className="music_item top_item" key={i}>
                        <a href={song.track.external_urls.spotify} target="_blank" rel="noreferrer noopener nofollow">
                          <div className="album-cover">
                            <Image
                              className="animate__animated animate__fadeIn"
                              src={song.track.album.images[0].url}
                              height="100px"
                              width="100px"
                              fixed="true"
                            />
                          </div>
                          <div className="song_info">
                            <strong className="top_song_title">{song.track.name}</strong>
                            <div className="song_details">
                              <p className="artist_name">
                                {song.track.artists.map((_artist) => _artist.name).join(`, `)}
                              </p>
                              <p className="album_name">{song.track.album.name}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })
                : // Show skeleton during loading
                  [...Array(songCount)].map((el, index) => (
                    <div className="music_item top_item" key={index}>
                      <a target="_blank" rel="noreferrer">
                        <div width={100} fixed="true">
                          <Skeleton width={100} height={100} />
                        </div>
                        <div className="song_info">
                          <strong className="top_song_title">
                            <Skeleton width={250} />
                          </strong>
                          <div className="song_details">
                            <p className="artist_name">
                              <Skeleton duration={2} width={225} />
                            </p>
                            <p className="album_name">
                              <Skeleton duration={3} width={175} />
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Music;
