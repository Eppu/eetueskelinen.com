import { MAIN_CONTENT_ID } from "../utils/constants";

export default function SkipToContentLink() {
  return (
    <a
      className="absolute left-4 top-4 z-50 -translate-y-24 rounded-lg border border-neutral-800/90 bg-surface px-3 py-2 text-sm font-medium text-ink opacity-0 shadow-lg transition-all duration-200 ease-in-out focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
      href={`#${MAIN_CONTENT_ID}`}
    >
      Skip to main content
    </a>
  );
}
