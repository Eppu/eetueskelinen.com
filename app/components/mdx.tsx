import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import Image from "next/image";
import React from "react";
import { playfairDisplay } from "../utils/fonts";
import { slugify } from "../utils/blog";

function Code({ children, ...props }) {
  // highlight wants to add a sh__token--string to the end of each line on Windows. It causes duplicate line breaks on local envs, but is not a problem in production.
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function NextImage(props) {
  console.log("got image props: ", props);
  return <Image alt={props.alt} className="rounded-3xl" {...props} />;
}

function createHeading(level) {
  return ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      {
        id: slug,
        // className: `${playfairDisplay.className} tracking-wide`
      },
      // [
      //   React.createElement("a", {
      //     href: `#${slug}`,
      //     key: `link-${slug}`,
      //     className: `anchor`,
      //   }),
      // ],
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
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
