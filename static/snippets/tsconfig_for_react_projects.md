---
title: TSConfig For React Projects
tags: react,javascript
slug: ts-config-for-react-projects
published: true
---

TSConfig.json for React Web Projects

<!-- Make sure to change the language -->
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