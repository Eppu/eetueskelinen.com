import type { ReactNode } from "react";
import { PlayCircle } from "lucide-react";

type VideoContainerProps = {
  src: string;
  title: string;
  poster?: string;
  caption?: ReactNode;
};

export default function VideoContainer({ src, title, poster, caption }: VideoContainerProps) {
  // If it's a YouTube URL, extract the ID and embed
  const ytMatch = src.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  
  return (
    <figure className="my-10 group/video rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 shadow-lg">
      <div className="relative aspect-video w-full bg-neutral-950 flex items-center justify-center">
        {ytMatch ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${ytMatch[1]}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            controls
            preload="metadata"
            poster={poster}
            title={title}
          >
            <source src={src} type="video/mp4" />
            <p>Your browser doesn't support HTML video. Here is a <a href={src}>link to the video</a> instead.</p>
          </video>
        )}
      </div>
      {caption && (
        <figcaption className="border-t border-neutral-800 bg-neutral-900/90 px-6 py-4 text-center text-sm italic text-neutral-400 shadow-inner">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
