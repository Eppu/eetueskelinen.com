import Image from "next/image";

export interface MusicCardProps {
  artist: string;
  imageUrl: string;
  externalUrl: string;
  name: string;
  album: string;
}

export const MusicCard: React.FC<MusicCardProps> = ({ artist, imageUrl, externalUrl, name, album }) => {
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name} by ${artist} on Spotify`}
      className="group flex h-20 rounded-lg border border-neutral-800/90 bg-surface/50 shadow-md outline outline-1 outline-neutral-900 transition-all duration-200 ease-in-out hover:border-yellowgreen/40 hover:bg-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowgreenselection/90 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas md:h-32"
    >
      <div className="flex flex-row">
        <Image
          src={imageUrl}
          alt={`${name} album cover`}
          width={128}
          height={128}
          className="rounded-lg md:h-32 md:w-32 h-20 w-20"
        />
        <div className="ml-8 flex flex-col justify-evenly text-lg md:text-xl">
          <p className="line-clamp-1 font-semibold text-ink">{name}</p>
          <div>
            <p className="line-clamp-1 text-base font-medium text-ink md:text-lg">{artist}</p>
            <p className="line-clamp-1 text-base font-light italic text-mutedink md:text-lg">{album}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
