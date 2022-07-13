---
title: Configuring NetlifyCMS with JS instead of YAML 
description: Wouldn't it be nice to have your NetlifyCMS configuration in JS rather than YAML? Here's how you can do that.
date: Jul 12, 2022
slug: netlify-cms-in-js
published: true
---

I've been using NetlifyCMS for years, it's the CMS that powers parts of this website. The reason I really like NetlifyCMS is that it's completely free and keeps your data in you git repo rather than a server somewhere. Though there is one gripe I've always had with it: the config format. Your configuration for NetlifyCMS is just one YAML file, and that file can get pretty darn large depending on how you have the CMS configured. This was always an issue because the large config file was hard to maintain and prone to errors. But as I recently found out, you can actually store you configuration as plain JS code instead. 

While you typically add NetlifyCMS to your site by creating an `admin` folder in your public directory and putting an HTML file inside that loads NetlifyCMS. But there is another way to initialize, and that is by using the `CMS.init()` function from [netlify-cms-app](https://www.npmjs.com/package/netlify-cms-app). Take this piece of code:

```js
import CMS from 'netlify-cms-app'

CMS.init()

```

This is the most basic way of manually initializing NetlifyCMS, but you can also supply a `config` object to it like so:

```js
import CMS from 'netlify-cms-app'

CMS.init({
  config: { /** Your Config */ }
})
```

Using this config object, you can configure your CMS right in your Javascript code. This provides you with a number of advantages. Take for example you want to use a local backend when running the CMS locally but use a git backend when running it in production. You can configure this quite easily:

```js
import CMS from 'netlify-cms-app'

const isDev = process.env.NODE_ENV === 'development'

const devBackend = { name: 'git-gateway'}
const prodBackend = { name: 'github', repo: 'username/repo', branch: 'main'}

CMS.init({
  config: {
    backend: isDev ? devBackend : prodBackend
    // ...rest of your CMS config
  }
})

```

Another awesome thing you can do is you no longer have to keep your entire configuration in one file. This can be very beneficial if you have many collections in your CMS.

```js
import CMS from 'netlify-cms-app'
import blogCollection from './collections/blog'
import photoCollection from './collections/photos'
import seoCollection from './collections/seo'

CMS.init({
  config: {
    // ...
    collections: [
      blogCollection,
      photoCollection,
      seoCollection
    ]
  }
})
```

Lastly, if you use typescript then you can have a fully typed configuration with some helper types from NetlifyCMS

```ts
import CMS from 'netlify-cms-app'

const devBackend: CmsBackend = {
  // ...
}

const prodBackend: CmsBackend = {
  // ...
}

const blogCollection: CmsCollection = {
  // ...
}

const photosCollection: CmsCollection = {
  // ...
}

const seoCollection: CmsCollection = {
  // ...
}

CMS.init({
  config: {
    backend: isDev ? devBackend : prodBackend
    collections: [
      blogCollection,
      photoCollection,
      seoCollection
    ]
  }
})
```

Having your CMS configuration in JS code rather than YAML lends itself to many benefits. If you want to feel more confident in your NetlifyCMS configurations, I suggest migrating your config from YAML to JS.