module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["i.scdn.co"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  outputFileTracing: false,
};
