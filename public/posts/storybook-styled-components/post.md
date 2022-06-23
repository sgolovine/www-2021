---
title: Integrating Styled Components into Storybook
description: How to setup Storybook to work nicely with Styled Components custom theme.
date: Jan 27, 2022
slug: storybook-styled-components-integration
published: true
---

My team at work just started working on a new React application. For our tech stack we decided to go with Styled Components for theming and Storybook for prototyping. Styled Components is one of the best ways you can theme your React App, rather than giving you a rigid theme or design system to adhere to, they let you create a theme how you see fit and just give you the tools to make that theme global. Storybook is one of the best things to happen to frontend development, allowing developers to quickly prototype their components in a vacuum.

Everything was smooth sailing with this tech stack until we started to build a custom theme. Quickly we saw that our styles were only reflected on the website, not in Storybook. This was a major problem because if developers can't use Styled Components with Storybook, it makes one or the other completely moot. After an afternoon of learning about Storybook and how [decorators](https://storybook.js.org/docs/react/writing-stories/decorators) work, we found a neat solution to the problem.

When you integrate Storybook into a project, you're really spinning up a whole new React project inside of your existing one and just sharing the components. As such, any "boilerplate" you have to setup things like your Redux Store, Styles, etc, must all be "boilerplated" again when using Storybook. Before we start, this post assumes that you already have a styled components theme setup.

## Create a Theme Provider

While this step is not required, it will make it easier to keep everything in one place. Lets say you have an `App.js` that looks like this:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import appTheme from '~/styles/theme'
import { ThemeProvider } from 'styled-components'
import App from './App'

const Wrapper = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<Wrapper />, document.getElementById('app'))
```

Since we are going to be using the ThemeProvider in two places, it will make things simpler to create a custom theme provider. 

```javascript
import React from 'react'
import appTheme from '~/styles/theme'
import { ThemeProvider } from 'styled-components'

export const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  )
}
```

Now change your `App.js` to use the new custom provider.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { CustomThemeProvider } from '~/styles/provider'
import App from './App'

const Wrapper = () => {
  return (
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  )
}

ReactDOM.render(<Wrapper />, document.getElementById('app'))
```


## Create a Custom Decorator

Now that we have created a custom theme provider and implemented it in our `App.js`, the next step is to implement it inside Storybook. To start, if you don't already have a `preview.js` file in your `.storybook` folder, go ahead and create that file. Then add the following code:

```javascript
import React from 'react'
// Your custom theme provider
import { CustomThemeProvider } from '~/styles/provider'

export const decorators = [
  (Story) => {
    <CustomThemeProvider>
      <Story />
    </CustomThemeProvider>
  }
]
```

And that's it! Decorators in Storybook wrap the "Story" and by wrapping all your stories with your custom theme provider, all your stories in Storybook will now be able to pull from your Styled Components theme.