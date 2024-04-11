import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomMDX } from "@/app/components/mdx";
import { getBlogPosts } from "@/app/utils/blog";
import { notFound } from "next/navigation";

const components = {
  h1: (props: any) => <h1 style={{ color: "tomato" }}>{props.children}</h1>,
  p: (props: any) => <p style={{ color: "gray" }}>{props.children} </p>,
};

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt, updatedAt } = post.metadata;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      publishedTime: publishedAt,
      url: `https://eetueskelinen.com/blog/${post.slug}`,
    },
  };
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return notFound();
  }
  return (
    <section>
      <h1>{post.metadata.title}</h1>
      <p>Published on {post.metadata.publishedAt}</p>
      {post.metadata.updatedAt && <p>Updated on {post.metadata.updatedAt}</p>}
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
