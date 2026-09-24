import type { MDXComponents } from "mdx/types";
import { components } from "@/app/components/mdx";

// Required by @next/mdx in the App Router.
export function useMDXComponents(): MDXComponents {
  return components;
}
