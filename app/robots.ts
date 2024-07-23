export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/files/",
      },
    ],
    sitemap: "https://eetueskelinen.com/sitemap.xml",
    host: "https://eetueskelinen.com",
  };
}
