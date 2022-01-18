---
title: "Babel RC with Module Resolver Support "
slug: babelrc-with-mod-resolver
tags: react,react-native,javascript
published: true
---
`babel.config.js` for Gatsby Based projects. Here make sure that the proper presets are added and installed

<!-- Make sure to change the language -->
```javascript

module.exports = {
  presets: [
    "babel-preset-gatsby",
    "@babel/preset-react",
    "@babel/preset-typescript",
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

```


`babel.config.js` for React Native Projects. The primary change here are the presets

```javascript

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};

```
