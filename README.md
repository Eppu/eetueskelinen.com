<a href="https://eetueskelinen.com" target="_blank"><img alt="Vercel deployment status badge" src="https://img.shields.io/github/deployments/Eppu/portfolio-next/production?label=vercel&logo=vercel"></a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Copy the sample `.env` files and fill in necessary information.

To get Spotify stats working you'll need to get a client ID, client secret and refresh token from [Spotify](https://developer.spotify.com/documentation/general/guides/authorization/).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

For blog view count tracking you'll need a Postgres database. I use Vercel Postgres for this.

You can set up the database schema with the following SQL:

```sql
CREATE TABLE views (
    slug VARCHAR(255) PRIMARY KEY,
    count INT DEFAULT 0
);
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
