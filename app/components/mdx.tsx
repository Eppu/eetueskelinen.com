import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";

async function Code({ children, ...props }) {
  console.log("children", children);
  console.log("props", props);
  // TODO: Figure out why highlight wants to add a sh__token--string to the end of each line. It causes duplicate line breaks.
  // Update: Doesn't seem to happen on Mac, only on Windows. Maybe a line ending issue? 🤷‍♂️
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  //   h1: (props: any) => (
  //     <h1 {...props} className="text-2xl">
  //       {props.children}
  //     </h1>
  //   ),
  code: Code,
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
