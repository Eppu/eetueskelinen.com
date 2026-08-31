import { getBlogPosts } from "../utils/blog";
import type { Metadata } from "next";
import Title from "../components/Title";
import BlogGrid from "../components/BlogGrid";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts and ideas on design, development, and life.",
};

export default function BlogPage() {
  if (process.env.BLOG_ENABLED !== "true") {
    return notFound();
  }

  let posts = getBlogPosts().filter((post) => process.env.NODE_ENV === "development" || !post.metadata.draft);

  return (
    <section className="flex flex-col md:py-16 max-w-7xl">
      <Title>Blog</Title>
      <p className="text-xl mb-14">
        Musings on design, development, and life. I write about things I find interesting, challenging, or just plain
        fun, with a growing bias toward more garden-like, interconnected writing.
      </p>

      <BlogGrid posts={posts} />
    </section>
  );
}
