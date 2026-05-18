import type { ReactNode } from "react";

type QuoteCardProps = {
  children: ReactNode;
  sourceTitle?: string;
  author?: string;
  year?: string;
  sourceLink?: string;
};

export default function QuoteCard({ children, sourceTitle, author, year, sourceLink }: QuoteCardProps) {
  return (
    <figure className="my-10 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-6 py-5 shadow-sm">
      <blockquote className="m-0 text-lg leading-relaxed text-neutral-200 [&_p]:mb-0">{children}</blockquote>
      {(sourceTitle || author || year) && (
        <figcaption className="mt-4 flex flex-wrap items-center gap-2 text-sm text-neutral-400 not-italic">
          {sourceTitle && (
            sourceLink ? (
              <a href={sourceLink} className="text-yellowgreenlight transition-colors hover:text-yellowgreen">
                {sourceTitle}
              </a>
            ) : (
              <span className="text-neutral-300">{sourceTitle}</span>
            )
          )}
          {author && <span>{author}</span>}
          {year && <span>{year}</span>}
        </figcaption>
      )}
    </figure>
  );
}