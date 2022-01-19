---
title: TSConfig For React Projects
description: Typescript configuration for React Web and Native Projects.
slug: ts-config-for-react-projects
tags: react,javascript
published: true
---

React Web:

```json
  {
  "compilerOptions": {
    "strict": true,
    "target": "ESNext",
    "module": "ESNext",
    "jsx": "preserve",
    "moduleResolution": "node",
    "lib": ["DOM", "ES5", "ES6"],
    "allowJs": false,
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    },
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", ".cache", "public"]
}

```


React Native:

```json
  {
    "compileOnSave": true,
    "compilerOptions": {
      "strict": true,
      "target": "ES2020",
      "module": "ES6",
      "jsx": "react-native",
      "moduleResolution": "node",
      "allowJs": true,
      "skipLibCheck": true,
      "allowSyntheticDefaultImports": true,
      "noEmit": true,
      "forceConsistentCasingInFileNames": true,
      "esModuleInterop": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noUnusedLocals": true,
      "noFallthroughCasesInSwitch": true,
      "noImplicitOverride": true,
      "noImplicitReturns": true,
      "noUnusedParameters": true,
      "allowUnreachableCode": false,
      "baseUrl": ".",
      "paths": {
        "~/*": ["./src/*"]
      }
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "ios", "android", ".vscode", ".github"]
  }

```
