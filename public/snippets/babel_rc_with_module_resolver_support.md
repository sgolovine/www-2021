---
title: Babel RC with Module Resolver Support
description: This BabelRC configuration for React and React Native comes with Module Resolver Support as well as the proper presets for web and mobile
slug: babelrc-with-mod-resolver
tags: react,react-native,javascript
published: true
---

React Web

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

React Native

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
