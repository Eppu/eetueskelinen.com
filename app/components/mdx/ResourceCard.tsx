import { ExternalLink, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import { playfairDisplay } from "../../utils/fonts";

type ResourceCardProps = {
  title: string;
  url: string;
  description?: string;
  domain?: string;
  imageUrl?: string;
};

export default function ResourceCard({ title, url, description, domain, imageUrl }: ResourceCardProps) {
  // Try to extract domain if not provided
  let displayDomain = domain;
  if (!displayDomain) {
    try {
      displayDomain = new URL(url).hostname.replace("www.", "");
    } catch {
      displayDomain = url;
    }
  }

  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 my-8 transition-all hover:bg-neutral-900/80 hover:border-neutral-700 hover:shadow-md hover:-translate-y-1 no-underline"
    >
      {imageUrl && (
        <div className="w-full sm:w-48 h-48 sm:h-auto shrink-0 bg-neutral-950 border-b sm:border-b-0 sm:border-r border-neutral-800 relative">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
      
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className={`${playfairDisplay.className} text-xl font-bold text-neutral-100 group-hover:text-yellowgreenlight transition-colors m-0 leading-tight flex items-start gap-2`}>
            {title}
          </h3>
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-neutral-400 line-clamp-3 m-0">
              {description}
            </p>
          )}
        </div>
        
        <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-500">
          <span className="flex items-center gap-2 group-hover:text-neutral-400 transition-colors">
            <LinkIcon className="h-3 w-3" />
            {displayDomain}
          </span>
          <span className="flex items-center gap-1 group-hover:text-yellowgreenlight transition-colors">
            Visit <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </a>
  );
}
