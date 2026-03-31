import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";

export type BlogMetadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary?: string;
  draft?: boolean;
};

export type BlogPost = {
  metadata: BlogMetadata;
  slug: string;
  tweetIds: string[];
  content: string;
};

// Frontmatter parsing and MDX file reading code originally by Lee Robinson (@leerob)
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    return { metadata: {} as BlogMetadata, content: fileContent.trim() };
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<BlogMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");

    if (!key || valueArr.length === 0) {
      return;
    }

    const metadataKey = key.trim() as keyof BlogMetadata;
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

    if (metadataKey === "draft") {
      metadata.draft = value === "true";
      return;
    }

    metadata[metadataKey] = value;
  });

  return { metadata: metadata as BlogMetadata, content };
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content: string): string[] {
  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);

  if (!tweetMatches) {
    return [];
  }

  return tweetMatches
    .map((tweet) => tweet.match(/[0-9]+/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => match[0]);
}

function getMDXData(dir: string): BlogPost[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const tweetIds = extractTweetIds(content);

    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

export function getBlogPosts(): BlogPost[] {
  return getMDXData(path.join(process.cwd(), "content")).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );
}

export function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

export function formatDateToString(date: string) {
  noStore();
  let currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date).getTime();
  let timeDifference = Math.abs(currentDate - targetDate);
  let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // TODO: Replace this with isMatch and formatDistanceToNow from date-fns
  if (daysAgo < 1) {
    return "Today";
  } else if (daysAgo < 7) {
    return `${fullDate} (${daysAgo}d ago)`;
  } else if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysAgo < 365) {
    const monthsAgo = Math.floor(daysAgo / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysAgo / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
