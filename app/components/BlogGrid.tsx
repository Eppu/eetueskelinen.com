import Link from "next/link";
import { formatDateToString } from "../utils/blog";
import { DraftIndicatorDot } from "./DraftIndicatorDot";

export default function BlogGrid({ posts }) {
  if (posts.length) {
    return (
      <>
        <hr className="mt-1 mb-9 border-neutral-800" />
        <p className="text-lg mb-14 font-light">
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
          className="md:text-xl text-lg relative mb-0 md:mb-4 hover:scale-105 transition-all duration-200 ease-in-out
                rounded-md shadow-md motion-reduce:transition-none
                "
          key={post.slug}
        >
          {/* Post card */}
          <div className="font-semibold flex flex-col gap-4 outline-zinc-800 outline outline-1 p-4 rounded-md hover:bg-neutral-800 hover:text-neutral-100 transition-all duration-300 ease-in-out">
            {post.metadata.title}
            <p className="font-light opacity-50 text-sm">{formatDateToString(post.metadata.publishedAt)}</p>
            {/* {post.metadata.summary && <p className="text-lg text-neutral-400">{post.metadata.summary}</p>} */}
          </div>
          {post.metadata.draft && <DraftIndicatorDot />}
        </Link>
      ))}
    </div>
  );
}
