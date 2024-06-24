import { MAIN_CONTENT_ID } from "../layout";

export default function SkipToContentLink() {
  return (
    <a
      className="
    absolute opacity-80 font-medium left-4 top-4 transform -translate-y-20 transition-transform duration-200 ease-in-out shadow-md p-2 rounded-lg
    focus:translate-y-0 focus:bg-neutral-800 focus:shadow-lg
  "
      href={`#${MAIN_CONTENT_ID}`}
    >
      Skip to main content
    </a>
  );
}
