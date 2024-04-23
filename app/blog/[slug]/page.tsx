import type { Metadata } from "next";
import { CustomMDX } from "@/app/components/mdx";
import { getBlogPosts } from "@/app/utils/blog";
import { notFound } from "next/navigation";
import { dmSans, playfairDisplay } from "@/app/utils/fonts";

const components = {
  h1: (props: any) => <h1 style={{ color: "tomato" }}>{props.children}</h1>,
  p: (props: any) => <p style={{ color: "gray" }}>{props.children} </p>,
};

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt, updatedAt, summary } = post.metadata;

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
      <p>Published on {post.metadata.publishedAt}</p>
      {post.metadata.updatedAt && <p>Updated on {post.metadata.updatedAt}</p>}
      <article className="prose prose-xl prose-quoteless prose-neutral prose-invert max-w-none">
        <div className={dmSans.className}>
          <div className="flex flex-col">
            <div className={playfairDisplay.className}>
              <h1 className="text-6xl font-light md:leading-loose tracking-wide mb-0">{post.metadata.title}</h1>
            </div>
            {post.metadata.summary && (
              // Maybe change this to a brighter color
              <p className="text-2xl text-neutral-400 font-medium md:mt-0">{post.metadata.summary}</p>
            )}
          </div>
          <CustomMDX source={post.content} />
        </div>
      </article>
    </section>
  );
}
