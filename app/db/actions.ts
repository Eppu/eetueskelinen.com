"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

export async function incrementViews(slug: string) {
  noStore();
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug) DO UPDATE SET count = views.count + 1
  `;
}

export async function getViewCount(slug: string) {
  if (!process.env.POSTGRES_URL) {
    return [];
  }
  noStore();
  let { rows } = await sql`SELECT count FROM views WHERE slug = ${slug}`;
  return rows[0]?.count || 0;
}
