import { useEffect } from "react";
import Link from "next/link";
import Layout from "../src/components/layout";
import Image from "next/image";
import NextImage from "next/image";

function Home({ data, error }) {
  const recentSong = data.recentlyPlayed ? data.recentlyPlayed.items[0].track.name : null;
  const recentSongArtist = data.recentlyPlayed
    ? data.recentlyPlayed.items[0].track.artists.map((_artist) => _artist.name).join(`, `)
    : null;

  // Set up listeners for labels
  useEffect(() => {
    const projectContainers = document.getElementsByClassName("project_item_container");
    for (const container of projectContainers) {
      // When the mouse enters the element, set the opacity of its label
      container.addEventListener("mouseenter", (e) => {
        const label = e.target.querySelector(".label");
        label.style.opacity = 1;
        label.style.left = "-8%";
      });

      // When the mouse leaves the element, set the opacity of its label
      container.addEventListener("mouseleave", (e) => {
        const label = e.target.querySelector(".label");
        label.style.opacity = 0;
        label.style.left = "-13%";
      });
    }
  }, []);

  return (
    <Layout title="UX Engineer and Developer">
      <>
        <div style={{ height: "100vh", display: "flex" }}>
          <div id="main_content" className="hero">
            <Image
              id="prof_pic_hero"
              src="/images/eetu.jpg"
              className="animate__animated fadeInUpSmall"
              alt="Eetu Eskelinen looking to the up right"
              width={300}
              height={300}
              layout="raw"
              priority
              placeholder="blur"
              blurDataURL="/images/eetu.jpg"
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
                  <a target="_blank" noopener href="https://futurice.com">
                    Futurice
                  </a>
                </span>{" "}
                as a ✨ Software Developer ✨.{" "}
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
              {recentSong != null && (
                <p id="spotify_track_info" className="hidden animate__animated fadeInUpSmall delay-500ms">
                  The last song I listened to was{" "}
                  <Link
                    id="spotify_song"
                    href="/music"
                    target="_blank"
                    className="spotify_header_link"
                    legacyBehavior>
                    <span className="spotify_header_link"> {recentSong}</span>
                  </Link>{" "}
                  by {recentSongArtist}! 🎵
                </p>
              )}
              <br />
            </div>
          </div>
        </div>

        <h2 style={{ fontFamily: "Epilogue, sans-serif" }} className="wow animate__animated fadeInUpSmall">
          Work
        </h2>
        <div id="sandbox_container">
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <Link href="/projects/mohavi">

              <div className="label">Mohavi</div>
              <div className="old_project_item">
                <NextImage
                  src="/images/project_panels/mohavi.jpg"
                  alt="Mohavi"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                  placeholder="blur"
                  blurDataURL="/images/project_panels/mohavi.jpg"
                />
              </div>

            </Link>
          </div>
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <Link href="/projects/kamerastore">

              <div className="label">Kamerastore</div>
              <div className="old_project_item">
                <NextImage
                  src="/images/project_panels/kamerastore.jpg"
                  alt="Kamerastore"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                  placeholder="blur"
                  blurDataURL="/images/project_panels/mohavi.jpg"
                />
              </div>

            </Link>
          </div>
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <Link href="/projects/slush">

              <div className="label">Slush</div>
              <div className="old_project_item">
                <NextImage
                  src="/images/project_panels/slush.jpg"
                  alt="Slush"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                  placeholder="blur"
                  blurDataURL="/images/project_panels/mohavi.jpg"
                />
              </div>

            </Link>
          </div>
          <div className="project_item_container wow animate__animated fadeInUpSmall">
            <Link href="/projects/newsforyou">

              <div className="label">News For You</div>
              <div className="old_project_item">
                <NextImage
                  src="/images/project_panels/nfy.jpg"
                  alt="News For You"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "10px" }}
                  placeholder="blur"
                  blurDataURL="/images/project_panels/mohavi.jpg"
                />
              </div>

            </Link>
          </div>
        </div>
      </>
    </Layout>
  );

  function desktopListeners() {}
}

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}/api/get-spotify-data`
  );
  let error = null;
  if (response.status !== 200) {
    error = `There was an error: ${response.status}`;
  }
  const data = await response.json();
  return { props: { data, error }, revalidate: 1 };
}

export default Home;
