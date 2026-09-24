import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
};

// Plugins are referenced by name so the config stays serializable for Turbopack.
// remark-frontmatter strips the YAML block; metadata is still read by app/utils/blog.ts.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-frontmatter"],
  },
});

export default withMDX(nextConfig);
