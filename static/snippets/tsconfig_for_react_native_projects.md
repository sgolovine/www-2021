---
title: TSConfig For React Native Projects
description: Typescript configuration for React Native Projects.
slug: ts-config-for-react-native-projects
tags: react,javascript
published: true
---

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
