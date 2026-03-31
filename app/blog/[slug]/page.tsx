import type { Metadata } from "next";
import { CustomMDX } from "@/app/components/mdx";
import { formatDateToString, getBlogPosts } from "@/app/utils/blog";
import { notFound } from "next/navigation";
import { playfairDisplay } from "@/app/utils/fonts";
import { incrementViews } from "@/app/db/actions";
import { cache } from "react";

const isLocal = process.env.NODE_ENV === "development";

export async function generateMetadata(props): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  if (!isLocal && post.metadata.draft) {
    return notFound();
  }

  let { title, publishedAt, updatedAt, summary } = post.metadata;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: updatedAt,
      description: summary,
      url: `https://eetueskelinen.com/blog/${post.slug}`,
    },
  };
}

// Using SSR instead of SSG for this, since I might add dynamic content in the future
export default async function Blog(props) {
  const params = await props.params;
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post || process.env.BLOG_ENABLED !== "true") {
    return notFound();
  }

  let incrementViewCount = cache(incrementViews);
  incrementViewCount(post.slug);

  return (
    <section>
      <div className="mt-8 mb-40 flex-auto min-w-0 max-w-3xl md:flex-row lg:mx-auto">
        <article className="prose prose-xl prose-quoteless prose-neutral prose-invert max-w-none">
          <div className="flex flex-col">
            {post.metadata.draft && (
              <div className="mb-2 w-fit rounded-md bg-yellowgreen/20 px-2 py-1 text-sm font-medium text-yellowgreen">
                Draft
              </div>
            )}
            <div className={playfairDisplay.className}>
              <h1 className="text-5xl md:text-6xl font-light leading-[1.1] md:leading-tight tracking-wide mt-6 mb-8">
                {post.metadata.title}
              </h1>
            </div>
            {post.metadata.summary && (
              <p className="mt-0 text-2xl font-normal text-mutedink md:font-medium">{post.metadata.summary}</p>
            )}
          </div>
          <hr className="mt-1 mb-2 md:mt-2 md:mb-4 border-neutral-800" />

          {/* Metadata section */}
          <div className="flex flex-row justify-between text-mutedink">
            <div className="ml-auto flex w-full flex-col">
              <p className="mb-0 text-sm">Published on {formatDateToString(post.metadata.publishedAt)}</p>
              {post.metadata.updatedAt && (
                <p className="mb-0 mt-1 text-sm">Updated on {formatDateToString(post.metadata.updatedAt)}</p>
              )}
              {/* TODO: Uncomment this when we want to actually show a view count on the posts */}
              {/* Could also probably use Suspense for this */}
              {/* <Views slug={post.slug} /> */}
            </div>
          </div>

          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
}

// TODO: Uncomment these when we want to actually show a view count on the posts
// let incrementViewCount = cache(incrementViews);

// async function Views({ slug }) {
//   const views = await getViewCount(slug);
//   await incrementViewCount(slug);

//   if (!views) {
//     return;
//   }
//   return <p className="text-sm mt-1">{views} views</p>;
// }
