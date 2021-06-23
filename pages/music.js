import { QueryClientProvider, useQuery } from "react-query";
import Image from "next/image";

import Layout from "../src/components/layout";

function Music({ data, error }) {
  const { error: currentError, data: currentlyPlaying } = useQuery(
    `currentlyPlaying`,
    () => fetch(`/api/get-now-playing`).then((res) => res.json()),
    { refetchOnMount: true }
  );

  let artists = data.artists.items;
  let recentlyPlayed = data.recentlyPlayed.items;
  let topSongs = data.songs.items;

  console.log(data);

  if (error || currentError) {
    return <div>There was an error fetching data from spotify</div>;
  }

  return (
    <Layout>
      <>
        <div id="sandbox_header">
          <h3>Music</h3>
          <p>Being a big music nerd equates to listening to a lot of different stuff.</p>
          <b>Here are some of my recent favorites.</b>
        </div>

        <div id="music_container">
          {/* Display artists */}
          <div className="project_item_container">
            <div className="artists_container">
              {artists.map((artist) => (
                <div className="music_item artist">
                  <a href={`https://open.spotify.com/artist/${artist.id}`} target="_blank">
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
            <a href="https://github.com/eppu/shrtnr" target="_blank">
              <div className="music_item song"></div>
            </a>
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
  console.log(data);
  return { props: { data, error, revalidate: 60 } };
}

export default Music;
