interface PlayingBarsProps {
  className?: string;
}

// Three bouncing bars, used wherever a track is shown as playing right now.
const PlayingBars: React.FC<PlayingBarsProps> = ({ className = "" }) => {
  return (
    <span className={`inline-flex items-end w-3 h-3 gap-0.5 ${className}`} aria-hidden="true">
      <span className="w-0.5 bg-neutral-500 animate-music-bar" style={{ animationDelay: "0ms" }} />
      <span className="w-0.5 bg-neutral-500 animate-music-bar" style={{ animationDelay: "150ms" }} />
      <span className="w-0.5 bg-neutral-600 animate-music-bar" style={{ animationDelay: "300ms" }} />
    </span>
  );
};

export default PlayingBars;
