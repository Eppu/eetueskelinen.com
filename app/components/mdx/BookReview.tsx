import React, { ReactNode } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { playfairDisplay } from "../../utils/fonts";

type BookReviewProps = {
  title: string;
  author: string;
  coverUrl?: string;
  rating?: number;
  children: ReactNode;
};

export default function BookReview({ title, author, coverUrl, rating = 0, children }: BookReviewProps) {
  return (
    <div className="my-8 flex flex-col md:flex-row shadow-sm border border-neutral-800 bg-neutral-900/50 rounded-2xl overflow-hidden group hover:border-neutral-700 transition-colors">
      <div className="w-full md:w-48 bg-neutral-950 flex flex-col items-center p-6 border-b md:border-b-0 md:border-r border-neutral-800 shrink-0">
        {coverUrl ? (
          <Image src={coverUrl} alt={`Cover of ${title}`} width={120} height={180} className="rounded object-cover shadow-md" />
        ) : (
          <div className="w-[120px] h-[180px] bg-neutral-800 rounded flex items-center justify-center text-neutral-500 font-medium text-center px-4">
            No Cover
          </div>
        )}
        <div className="mt-4 flex gap-1 justify-center text-yellowgreenlight">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-current" : "text-neutral-700"}`}
              strokeWidth={i < rating ? 0 : 1}
            />
          ))}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className={`${playfairDisplay.className} text-xl md:text-2xl font-bold text-neutral-100 m-0`}>{title}</h3>
        <p className="text-sm font-medium tracking-wider uppercase text-neutral-400 mt-1 mb-4">By {author}</p>
        <div className="prose prose-invert prose-neutral prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}
