---
title: Allowlist/Blocklist for Zustand Persist
description: Persist only specified keys in your zustand state.
slug: zustand-persist
tags: react,zustand
published: true
---
Zustand is a simple and easy to use state management library for React. Recently they added support for native persistence in. This snippet shows how to setup persistence in Zustand with an allowlist/blocklist.

Below you will find examples in both Javascript and Typescript, use the version that you need, both are not required.

### Snippet

```javascript
export function partializeState(state, keys) {
  return Object.fromEntries(
    Object.entries(state).filter(([key]) => {
      return keys.includes(key);
    })
  );
}

```

```typescript
export function partializeState<Store>(state: Store, keys: (keyof Store)[]) {
  return Object.fromEntries(
    Object.entries(state).filter(([key]) => {
      return keys.includes(key as keyof Store);
    })
  );
}
```


### Usage

```javascript
import create from "zustand";
import { persist } from "zustand/middleware";
import { partializeState } from "./helpers";

export const useStore = create(
  persist(
    (set, get) => {
      // ...
    },
    {
      name: "name-of-your-store",
      partialize: partializeState,
    }
  )
);

```


```typescript
import create from "zustand";
import { persist } from "zustand/middleware";
import { partializeState } from "./helpers";

export const useStore = create(
  persist<IStore>(
    (set, get) => {
      // ...
    },
    {
      name: "name-of-your-store",
      partialize: partializeState,
    }
  )
);
```