import Image from "next/image";

export interface MusicCardProps {
  artist: string;
  imageUrl: string;
  externalUrl: string;
  name: string;
  album: string;
}

const PlayIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="translate-x-[1px]"
  >
    <path d="M8 5.5v13l11-6.5L8 5.5z" />
  </svg>
);

export const MusicCard: React.FC<MusicCardProps> = ({ artist, imageUrl, externalUrl, name, album }) => {
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${name} by ${artist} on Spotify`}
      className="group relative md:h-32 h-20 rounded-lg flex bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 ease-out outline outline-1 outline-zinc-800 hover:outline-yellowgreen/40 focus-visible:outline-yellowgreen focus-visible:outline-2 hover:shadow-[0_8px_30px_-10px_rgba(157,250,5,0.25)] hover:-translate-y-0.5"
    >
      <div className="flex flex-row min-w-0 w-full">
        <div className="relative md:h-32 md:w-32 h-20 w-20 shrink-0 overflow-hidden rounded-l-lg">
          <Image
            src={imageUrl}
            alt={`${name} album cover`}
            width={128}
            height={128}
            className="md:h-32 md:w-32 h-20 w-20 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-neutral-950/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          >
            <span className="flex items-center justify-center h-9 w-9 md:h-11 md:w-11 rounded-full bg-yellowgreen text-neutral-900 shadow-[0_4px_24px_rgba(157,250,5,0.45)] scale-90 group-hover:scale-100 transition-transform duration-300 ease-out">
              <PlayIcon />
            </span>
          </div>
        </div>
        <div className="flex flex-col ml-6 md:ml-8 mr-4 md:text-xl text-lg justify-evenly min-w-0">
          <p className="font-semibold line-clamp-1 transition-colors duration-200 group-hover:text-yellowgreenselection">
            {name}
          </p>
          <div className="min-w-0">
            <p className="font-medium md:text-lg text-base line-clamp-1">{artist}</p>
            <p className="font-light opacity-50 md:text-lg text-base line-clamp-1 italic">{album}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
