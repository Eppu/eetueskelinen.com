import type { Metadata } from "next";
import { CustomMDX } from "@/app/components/mdx";
import { formatDateToString, getBlogPosts } from "@/app/utils/blog";
import { notFound } from "next/navigation";
import { dmSans, playfairDisplay } from "@/app/utils/fonts";
import { unstable_noStore as noStore } from "next/cache";
import { incrementViews, getViewCount } from "@/app/db/actions";
import { cache } from "react";

const isLocal = process.env.NODE_ENV === "development";

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
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
export default async function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post || process.env.BLOG_ENABLED !== "true") {
    return notFound();
  }

  let incrementViewCount = cache(incrementViews);
  incrementViewCount(post.slug);

  return (
    <section>
      <div className="flex-auto min-w-0 max-w-3xl mb-40 md:flex-row mt-8 lg:mx-auto">
        <article className="prose prose-xl prose-quoteless prose-neutral prose-invert max-w-none">
          <div className="flex flex-col">
            {post.metadata.draft && (
              <div className="bg-yellow-500 text-neutral-900 text-sm font-medium rounded-md px-2 py-1 mb-2">Draft</div>
            )}
            <div className={playfairDisplay.className}>
              <h1 className="text-5xl md:text-6xl font-light leading-[1.1] md:leading-tight tracking-wide mt-6 mb-8">
                {post.metadata.title}
              </h1>
            </div>
            {post.metadata.summary && (
              // Maybe change this to a brighter color

              <p className="text-2xl text-neutral-400 font-normal md:font-medium md:mt-0">{post.metadata.summary}</p>
            )}
          </div>
          <hr className="mt-1 mb-2 md:mt-2 md:mb-4 border-neutral-800" />

          {/* Metadata section */}
          <div className="flex flex-row justify-between text-neutral-500">
            <div className="flex flex-col ml-auto w-full ">
              <p className="text-sm  mb-0">Published on {formatDateToString(post.metadata.publishedAt)}</p>
              {post.metadata.updatedAt && (
                <p className="text-sm  mt-1 mb-0">Updated on {formatDateToString(post.metadata.updatedAt)}</p>
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
