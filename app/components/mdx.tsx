import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { JSX } from "react";

const components = {
  //   h1: (props: any) => (
  //     <h1 {...props} className="text-2xl">
  //       {props.children}
  //     </h1>
  //   ),
};

export function CustomMDX(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
