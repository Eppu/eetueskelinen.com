import { getBlogPosts } from "../utils/blog";
import type { Metadata } from "next";
import Title from "../components/Title";
import BlogGrid from "../components/BlogGrid";

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
      <BlogGrid posts={posts} />
    </section>
  );
}
