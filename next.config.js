module.exports = {
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    nextImageExportOptimizer: {
      imageFolderPath: "public/images",
      exportFolderPath: "dist",
      quality: 75,
    },
  },
  env: {
    storePicturesInWEBP: true,
    generateAndUseBlurImages: true,
  },
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
      {
        source: "/contact",
        destination: "/links",
        permanent: false,
      },
    ]
  },
}
