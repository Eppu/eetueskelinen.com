import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import Image from "next/image";
import React from "react";
import { playfairDisplay } from "../utils/fonts";
import { getBlogPosts, slugify } from "../utils/blog";
import BigQuote from "./mdx/BigQuote";
import Callout from "./mdx/Callout";
import AsideNote from "./mdx/AsideNote";
import AcademicReference from "./mdx/AcademicReference";
import LinkPreview from "./mdx/LinkPreview";
import QuoteCard from "./mdx/QuoteCard";
import References from "./mdx/References";
import Spacer from "./mdx/Spacer";
import Jargon from "./mdx/Jargon";
import Dialogue from "./mdx/Dialogue";
import BookReview from "./mdx/BookReview";
import DeepDive from "./mdx/DeepDive";
import ImageGallery from "./mdx/ImageGallery";
import GardenNotice from "./mdx/GardenNotice";
import Timeline, { TimelineItem } from "./mdx/Timeline";
import ResourceCard from "./mdx/ResourceCard";
import ProsCons from "./mdx/ProsCons";
import VideoContainer from "./mdx/VideoContainer";
import Changelog, { ChangelogItem } from "./mdx/Changelog";
import Highlight from "./mdx/Highlight";
import TerminalWindow from "./mdx/TerminalWindow";
import KeyTakeaways from "./mdx/KeyTakeaways";

function Code({ children, ...props }) {
  // highlight wants to add a sh__token--string to the end of each line on Windows. It causes duplicate line breaks on local envs, but is not a problem in production.
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function NextImage(props) {
  return <Image alt={props.alt} className="rounded-3xl" {...props} />;
}

function formatReadingTime(minutes) {
  return `${minutes} min read`;
}

function createInternalLinkComponents() {
  let posts = getBlogPosts();

  return ({ href, children, ...props }) => {
    if (typeof href === "string") {
      let normalizedHref = href.split("#")[0].split("?")[0];
      let match = normalizedHref.match(/^\/blog\/([^/]+)$/);

      if (match) {
        let post = posts.find((entry) => entry.slug === match[1]);
        if (post) {
          return (
            <LinkPreview
              href={href}
              title={post.metadata.title}
              description={post.metadata.summary}
              date={post.metadata.publishedAt}
              readingTime={formatReadingTime(post.readingTime)}
            >
              {children}
            </LinkPreview>
          );
        }
      }
      
      if (href.startsWith("http")) {
        return (
          <LinkPreview href={href} isExternal={true}>
            {children}
          </LinkPreview>
        );
      }
    }

    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  };
}

function createHeading(level) {
  return ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        className: `${playfairDisplay.className} tracking-wide`,
      },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: `anchor`,
        }),
      ],
      children
    );
  };
}

const components = {
  //   h1: (props: any) => (
  //     <h1 {...props} className="text-2xl">
  //       {props.children}
  //     </h1>
  //   ),

  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  code: Code,
  Image: NextImage,
  BigQuote,
  Callout,
  Alert: Callout,
  Disclaimer: Callout,
  AssumedAudience: Callout,
  AsideNote,
  Footnote: AsideNote,
  Spacer,
  QuoteCard,
  References,
  AcademicReference,
  Jargon,
  Dialogue,
  BookReview,
  DeepDive,
  ImageGallery,
  GardenNotice,
  Timeline,
  TimelineItem,
  ResourceCard,
  ProsCons,
  VideoContainer,
  Changelog,
  ChangelogItem,
  Highlight,
  TerminalWindow,
  KeyTakeaways,
  a: createInternalLinkComponents(),
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
