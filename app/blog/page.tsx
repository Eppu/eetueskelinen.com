import Link from "next/link";
import { getBlogPosts } from "../utils/blog";
import { formatDateToString } from "../utils/blog";
import type { Metadata } from "next";
import Title from "../components/Title";
import { DraftIndicatorDot } from "../components/DraftIndicatorDot";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts and ideas on design, development, and life.",
};

export default function BlogPage() {
  let posts = getBlogPosts();

  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Blog</Title>
      <p className="text-xl mb-14">
        Musings on design, development, and life. I write about things I find interesting, challenging, or just plain
        fun.
      </p>
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
      {/* </ul> */}
    </section>
  );
}
