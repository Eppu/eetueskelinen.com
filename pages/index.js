import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../src/components/layout";

function Home({ data, error }) {
  let recentSong = data.recentlyPlayed.items[0].track.name;
  let recentSongArtist = data.recentlyPlayed.items[0].track.artists.map((_artist) => _artist.name).join(`, `);

  return (
    <Layout>
      <>
        <div style={{ height: "100vh", display: "flex" }}>
          <div className="hero">
            <img
              id="prof_pic_hero"
              src="/images/image.jpg"
              className="animate__animated fadeInUpSmall"
              alt="Eetu Eskelinen looking to the up right"
            />
            <div id="hero_page_container" style={{ position: "relative", color: "black" }}>
              <h1 id="title" className="animate__animated fadeInUpSmall">
                🖖 Hey, I'm&nbsp;Eetu!
              </h1>
              <p id="title_subheader" className="animate__animated fadeInUpSmall delay-250ms">
                I'm a UX Engineer and Developer excited about solving human problems using technology.
              </p>

              <p className="animate__animated fadeInUpSmall delay-250ms">
                I currently work at{" "}
                <span className="kt_header_link">
                  <a target="_blank" href="https://futurice.com">
                    Futurice
                  </a>
                </span>{" "}
                as a 💫 Software Developer 💫.{" "}
              </p>
              <p className="animate__animated fadeInUpSmall delay-250ms">
                You can reach me via{" "}
                <span className="kt_header_link">
                  <a href="mailto:hello@eetueskelinen.com">email</a>
                </span>{" "}
                or learn more about my background via my{" "}
                <span className="kt_header_link">
                  <a href="files/resume.pdf" target="_blank">
                    resume
                  </a>
                </span>
                . 📫
              </p>

              <p id="spotify_track_info" className="hidden animate__animated fadeInUpSmall delay-500ms">
                The last song I listened to was{" "}
                <Link id="spotify_song" href="/music" target="_blank" className="spotify_header_link">
                  <span className="spotify_header_link"> {recentSong}</span>
                </Link>{" "}
                by {recentSongArtist}!
              </p>
              <br />
            </div>
          </div>
        </div>

        <h2 style={{ fontFamily: "Epilogue, sans-serif" }} className="wow animate__animated fadeInUpSmall">
          Work
        </h2>
        <div id="sandbox_container">
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <a href="projects/mohavi.html">
              <div className="label">Mohavi</div>
              <div className="old_project_item" id="mohavi_panel"></div>
            </a>
          </div>
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <a href="projects/kamerastore.html">
              <div className="label">Kamerastore</div>
              <div className="old_project_item" id="kamerastore_panel"></div>
            </a>
          </div>
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <a href="projects/slush.html">
              <div className="label">Slush</div>
              <div className="old_project_item" id="slush_panel"></div>
            </a>
          </div>
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <a href="projects/newsforyou.html">
              <div className="label">News For You</div>
              <div className="old_project_item" id="nfy_panel"></div>
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
  return { props: { data, error }, revalidate: 30 };
}

export default Home;
