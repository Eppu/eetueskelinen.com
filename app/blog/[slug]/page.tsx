import type { Metadata } from "next";
import { CustomMDX } from "@/app/components/mdx";
import { formatDateToString, getBlogPosts } from "@/app/utils/blog";
import { notFound } from "next/navigation";
import { incrementViews, getViewCount } from "@/app/db/actions";
import { cache } from "react";
import TableOfContents from "@/app/components/TableOfContents";

const isLocal = process.env.NODE_ENV === "development";

function getDisplayType(type?: string) {
  if (!type) {
    return "post";
  }

  return type;
}

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
    description: summary,
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
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post || process.env.BLOG_ENABLED !== "true") {
    return notFound();
  }

  let incrementViewCount = cache(incrementViews);
  incrementViewCount(post.slug);

  let showToc = post.headings.length > 0 && post.metadata.toc !== false;

  return (
    <section>
      <div className="flex-auto min-w-0 max-w-6xl mb-40 mt-8 lg:mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article className="prose prose-xl prose-quoteless prose-neutral prose-invert max-w-none">
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-neutral-400">
                <span className="rounded-full border border-neutral-700 px-3 py-1 uppercase tracking-[0.2em] text-[0.7rem] text-neutral-300">
                  {getDisplayType(post.metadata.type)}
                </span>
                {post.metadata.growthStage && (
                  <span className="rounded-full border border-neutral-700 px-3 py-1 capitalize text-neutral-300">
                    {post.metadata.growthStage}
                  </span>
                )}
                {post.metadata.draft && (
                  <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-200">
                    Draft
                  </span>
                )}
                <span>{post.readingTime} min read</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light leading-[1.1] md:leading-tight tracking-wide mt-0 mb-8">
                {post.metadata.title}
              </h1>

              {post.metadata.summary && (
                <p className="text-2xl text-neutral-300 font-normal md:font-medium md:mt-0">{post.metadata.summary}</p>
              )}

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500 border-y border-neutral-800 py-4">
                <p className="mb-0">Published on {formatDateToString(post.metadata.publishedAt)}</p>
                {post.metadata.updatedAt && (
                  <p className="mb-0">Updated on {formatDateToString(post.metadata.updatedAt)}</p>
                )}
              </div>

              {post.metadata.topics && post.metadata.topics.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {post.metadata.topics.map((topic) => (
                    <span key={topic} className="rounded-full bg-neutral-900/80 border border-neutral-800 px-3 py-1 text-neutral-300">
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-10">
              <CustomMDX source={post.content} />
            </div>
          </article>

          {showToc && (
            <div className="lg:sticky lg:top-8 z-10 w-full col-start-1 row-start-1 lg:col-start-2 max-lg:-mx-5 px-5">
               <TableOfContents headings={post.headings} />
            </div>
          )}
        </div>
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
