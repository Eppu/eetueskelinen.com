import fs from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";

type Metadata = {
  title: string;
  publishedAt: string;
  updatedAt?: string;
  summary?: string;
  draft?: boolean;
  type?: string;
  topics?: string[];
  growthStage?: "seedling" | "budding" | "evergreen" | string;
  toc?: boolean;
  aliases?: string[];
  canonical?: string;
};

type Heading = {
  depth: number;
  title: string;
  slug: string;
};

export type BlogPost = {
  metadata: Metadata;
  slug: string;
  tweetIds: string[];
  content: string;
  readingTime: number;
  headings: Heading[];
};

// Frontmatter parsing and MDX file reading code originally by Lee Robinson (@leerob)
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  let parseValue = (value: string) => {
    let trimmedValue = value.trim();

    if (!trimmedValue.length) {
      return "";
    }

    if (trimmedValue === "true") {
      return true;
    }

    if (trimmedValue === "false") {
      return false;
    }

    if (/^-?\d+(\.\d+)?$/.test(trimmedValue)) {
      return Number(trimmedValue);
    }

    if (trimmedValue.startsWith("[") && trimmedValue.endsWith("]")) {
      try {
        return JSON.parse(trimmedValue);
      } catch {
        return trimmedValue;
      }
    }

    return trimmedValue.replace(/^['"](.*)['"]$/, "$1");
  };

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    metadata[key.trim() as keyof Metadata] = parseValue(value) as never;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
}

function estimateReadingTime(content: string) {
  let words = content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_\[\]\(\)!-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

function extractHeadings(content: string): Heading[] {
  let headings: Heading[] = [];
  let inCodeFence = false;

  content.split("\n").forEach((line) => {
    if (line.trim().startsWith("```")) {
      inCodeFence = !inCodeFence;
      return;
    }

    if (inCodeFence) {
      return;
    }

    let headingMatch = /^(#{2,4})\s+(.+?)\s*$/.exec(line);
    if (!headingMatch) {
      return;
    }

    let title = headingMatch[2].replace(/<[^>]+>/g, "").trim();
    headings.push({
      depth: headingMatch[1].length,
      title,
      slug: slugify(title),
    });
  });

  return headings;
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
      readingTime: estimateReadingTime(content),
      headings: extractHeadings(content),
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "content"));
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
