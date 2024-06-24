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
      rel="noreferrer"
      className="md:h-32 h-20 rounded-lg border-neutral-900 shadow-md flex bg-neutral-900 bg-opacity-50 hover:bg-opacity-100 transition-all duration-200 ease-in-out
    outline-zinc-800 outline outline-1 focus:ring focus:ring-yellowgreen"
    >
      <div className="flex flex-row">
        <Image
          src={imageUrl}
          alt={`${name} album cover`}
          width={128}
          height={128}
          className="rounded-lg md:h-32 md:w-32 h-20 w-20"
        />
        <div className="flex flex-col ml-8 md:text-xl text-lg justify-evenly">
          <p className="font-semibold line-clamp-1">{name}</p>
          <div>
            <p className="font-medium md:text-lg text-base line-clamp-1">{artist}</p>
            <p className="font-light opacity-50 md:text-lg text-base line-clamp-1 italic">{album}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
