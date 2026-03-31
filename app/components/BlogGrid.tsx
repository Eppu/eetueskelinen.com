import Link from "next/link";
import { formatDateToString } from "../utils/blog";
import type { BlogPost } from "../utils/blog";

type BlogGridProps = {
  posts: BlogPost[];
};

export default function BlogGrid({ posts }: BlogGridProps) {
  if (!posts.length) {
    return (
      <>
        <hr className="mt-1 mb-9 border-neutral-800" />
        <p className="mb-14 text-lg font-light text-mutedink">
          No posts found 🤷‍♂️ I probably haven't gotten around to writing anything yet. Check back soon!
        </p>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          className="group relative mb-0 rounded-xl border border-neutral-800/90 bg-surface/40 p-5 shadow-md transition-all duration-200 ease-in-out hover:border-yellowgreen/40 hover:bg-surface/80 md:mb-4"
          key={post.slug}
        >
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-ink transition-colors duration-200 group-hover:text-yellowgreenselection md:text-xl">
              {post.metadata.title}
            </h2>
            {post.metadata.draft && (
              <span className="rounded-full bg-yellowgreen/20 px-2 py-1 text-xs font-medium text-yellowgreen">
                Draft
              </span>
            )}
          </div>
          <p className="mt-3 text-sm text-mutedink">{formatDateToString(post.metadata.publishedAt)}</p>
          {post.metadata.summary && (
            <p className="mt-4 line-clamp-3 text-base font-light leading-relaxed text-mutedink">
              {post.metadata.summary}
            </p>
          )}
          <div className="mt-5 text-sm font-medium text-yellowgreenlight">Read post</div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition-shadow duration-200 group-focus-visible:ring-2 group-focus-visible:ring-yellowgreenselection/90" />
        </Link>
      ))}
    </div>
  );
}
