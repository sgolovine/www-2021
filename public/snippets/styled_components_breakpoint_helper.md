---
title: Styled Components Breakpoint Helper
description: A breakpoint helper for styled components.
slug: styled-components-breakpoint-helper
tags: styled-components, css
published: true
---

Helper:

```javascript

import { CSSObject, css } from "styled-components";

// Add more sizes as you see fit
type Sizes = "xs" | "sm" | "md" | "lg" | "xl";

const breakpoints: Record<Sizes, string> = {
  xs: "(max-width: 320px)",
  sm: "(min-width: 321px) and (max-width: 375px)",
  md: "(min-width: 376px) and (max-width: 414px)",
  lg: "(min-width: 415px) and (max-width: 767px)",
  xl: "(min-width: 768px)",
// More Sizes
};

export const Breakpoint = (breakpoint: Sizes, styles: CSSObject) => css`
  @media ${breakpoints[breakpoint]} {
    ${css(styles)}
  }
`;


```


Usage:


```javascript

const StyledThing = styled.div`
  ${Breakpoint('sm', {
    color: red;
  })};
`


```
