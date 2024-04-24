import { getNowPlaying } from "../utils/spotify";

export default async function NowPlaying() {
  const res = await getNowPlaying();
  const song = await res.json();

  const isPlaying = song.is_playing;

  // only display the first artist and the text "and others" if there are multiple artists
  const artistName =
    song.item.artists.length > 1 ? `${song.item.artists[0].name} and others` : song.item.artists[0].name;

  return (
    isPlaying &&
    song.item && ( // If the song is playing and there is a song
      <p
        className="motion-safe:opacity-0 motion-safe:animate-fade-in-up md:text-2xl text-xl mt-8"
        style={{ animationDelay: "1500ms" }}
      >
        <a href="https://open.spotify.com/user/eetumro" target="_blank" rel="noopener noreferrer">
          He is currently listening to <strong>{song.item.name}</strong> by {artistName}
        </a>
      </p>
      //   <div className="flex items-center justify-center">
      //     <img src={song.item.album.images[0].url} alt="Album cover" className="rounded-full" />
      //     <div className="ml-3">
      //       <h3 className="text-lg font-semibold">{song.item.name}</h3>
      //       <p className="text-sm">{song.item.artists.map((artist) => artist.name).join(", ")}</p>
      //     </div>
      //   </div>
    )
  );
}
