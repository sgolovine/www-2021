module.exports = {
  presets: [
    "babel-preset-gatsby",
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        loose: true,
      },
    ],
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "~": "./src",
        },
      },
    ],
  ],
}
