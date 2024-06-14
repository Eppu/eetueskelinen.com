import { MetadataRoute } from "next";
import { getBlogPosts } from "./utils/blog";

// Get all blog post slugs
const posts = getBlogPosts();

if (!posts) {
  console.log("No posts found in sitemap.ts");
}

// Generate mappings for posts that can then be added to the sitemap in the sitemap function
function generateBlogPostMappings(posts) {
  return posts.map((post) => {
    return {
      url: `https://eetueskelinen.com/blog/${post.slug}`,
      lastModified: new Date(post.metadata.updatedAt || post.metadata.publishedAt),
      changeFrequency: "monthly",
      priority: 0.5,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  // Add the blog post mappings to the sitemap
  const blogPostMappings = generateBlogPostMappings(posts);
  return [
    {
      url: "https://eetueskelinen.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://eetueskelinen.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: "https://eetueskelinen.com/work",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://eetueskelinen.com/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...blogPostMappings,
  ];
}
