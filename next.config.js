module.exports = {
  async redirects() {
    return [
      {
        source: "/blog/post/:slug",
        destination: "/post/:slug",
        permanent: true,
      },
      {
        source: "/snippets/snippet/:slug",
        destination: "/snippet/:slug",
        permanent: true,
      },
    ]
  },
}
