import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <Head>
        <title>Eetu Eskelinen - UX Engineer and Developer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
        <meta
          name="description"
          content="Eetu Eskelinen is a UX Engineer and developer currently based in Tampere, Finland!"
        />
        <meta property="og:title" content="Eetu Eskelinen - UX Engineer" />
        <meta
          property="og:description"
          content="Eetu Eskelinen is a UX Engineer and developer currently based in Tampere, Finland!"
        />
        <meta property="og:image" content="https://eetueskelinen.com/images/og_image.jpg" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,%20900i" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script src="/scripts/parallax.min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Raleway:200,400,700" rel="stylesheet" type="text/css" />
        <script src="https://kit.fontawesome.com/e5746cfe5f.js" crossOrigin="anonymous"></script>

        {/* Mess with wowjs later */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <script src="/scripts/script.js" type="text/javascript"></script>

        {/* <script>
                fetch('https://spotify-recent.herokuapp.com/recent')
                    .then(response => response.json())
                    .then(data => {
                        // Song
                        document.getElementById("spotify_song").innerHTML = data.name;
                        // Artist 
                        document.getElementById("spotify_artist").innerHTML = " by " + data.artist['#text'] + "! &#x1F3B5";
                        // document.getElementById("spotify_track_info").style.visibility = "visible";
                        document.getElementById("spotify_track_info").classList.remove('hidden');
                        document.getElementById("spotify_track_info").classList.add('shown');
                    });
            </script> */}
      </Head>
      <div className="navbar_container animate__animated animate__fadeIn">
        <div id="progress_bar"></div>
        <div className="row navbar" style={{ maxWidth: "1000px", margin: "auto" }}>
          {/* <div class="col-xs-1"></div>  */}
          <div id="logo_cont" className="col-xs-5">
            <Link href="/">Eetu Eskelinen</Link>
          </div>
          {/* <div class="col-xs-1"></div>  */}
          <div id="nav_links" className="col-xs-7" style={{ zIndex: 9999 }}>
            <Link href="/about">About</Link>
            <Link href="/music">Music</Link>
            <Link href="/etc">Etc</Link>
          </div>
          {/* <div class="col-xs-1"></div>  */}
        </div>
      </div>
    </>
  );
}
