---
title: ESLint Config for React/React Native
description: This configuration will get you started with ESLint for either web or mobile project. Comes with package.json script and VSCode support.
slug: eslint-config
tags: react,react-native

published: true
---

React Native

```javascript
module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
    'react-native/react-native': true,
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'import'],
  extends: ['plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/first': 2,
    'import/no-default-export': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    // Re-enable later
    // 'react-native/no-color-literals': 2,
    'react/no-unescaped-entities': 0,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-gesture-handler',
            importNames: [
              'TouchableOpacity',
              'ScrollView',
              'TextInput',
              'FlatList',
            ],
            message: 'Please use imports from react-native instead',
          },
          {
            name: 'react-native',
            importNames: ['SafeAreaView'],
            message:
              'Please use SafeAreaView from react-native-safe-area-context',
          }
        ],
      },
    ],
  },
};
```

React Web

```javascript
module.exports = {
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
  },
  plugins: ["react", "@typescript-eslint", "import"],
  extends: ["plugin:react/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/first": 2,
    "import/no-default-export": 2,
    "import/no-self-import": 2,
    "import/no-cycle": 2,
    // Re-enable later
    // 'react-native/no-color-literals': 2,
    "react/no-unescaped-entities": 0,
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
};
```

VSCode Configuration

```json

{
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.lintTask.enable": true,
  "eslint.lintTask.options": "eslint \"**/*.{ts,tsx}\"",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}

```

package.json script

```json
{
  "lint": "eslint \"**/*.{ts,tsx}\""
}


```


