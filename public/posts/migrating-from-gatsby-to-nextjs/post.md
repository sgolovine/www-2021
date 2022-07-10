---
title: Migrating from Gatsby to NextJS
description: Instead of rebuilding my website this year, I migrated it from Gatsby to NextJS. Here's how that went.
date: Jul 9, 2022
slug: migrating-from-gatsby-to-nextjs
published: false
---

I have a tradition of sorts, every year I will rebuild my website from scratch. This year thought as it was getting to be around that time, I found myself looking at my website and not really wanting to change the design in any meaningful way. That's when I decided that this year rather than a full rebuild, I would instead migrate my site from Gatsby to NextJS.

My first attempt at a migration happened about a month ago when I tried to move from Gatsby to a combination of Vite and [vite-plugin-ssr](https://vite-plugin-ssr.com/). Though this seemed like the ideal solution at first, I quickly found myself writing far too much code to work around some of the limitations of the plugin, before scrapping the work altogether and migrating to NextJS instead.

## But Why

I'm sure you are wondering, why migrate? There is nothing inherently wrong with Gatsby as a framework, in-fact when you compare feature sets, it's pretty dang close to what NextJS offers. For me it came down to two reasons: first NextJS recently came out with their own compiler which uses [SWC](https://swc.rs/) under the hood, this was much faster than Gatsby's webpack implementation. The other big reason is React 18, Gatsby kinda has support for React 18 with full support in the works, NextJS already has full support. But beyond that the other big reason was simply: I wanted to (if I'm being honest this was the main reason).

## Getting Ready

Prior to moving to NextJS I made some changes to my current site to get it ready. The first thing I did was move the file structure to [Bulletproof React](https://github.com/alan2207/bulletproof-react), with this new file structure I completely stopped using the `pages` folder that Gatsby requires you to use, simply re-exporting my pages from `features` in the proper file.

```javascript
import { HomePage } from '../features/HomePage'

export default HomePage
```

The main benefit this provided was that it separated my sites logic from the logic of Gatsby. Though NextJS utilizes the same file based routing structure, I wanted to separate the UI logic from page level logic when I migrated over and only use the page files for NextJS specific logic. Looking forward, keeping the UI logic separate will aid in any future migrations to another framework that might not use the same folder structure.

Finally before moving over, I removed all GraphQL references in the code and stubbed out the returns. My GraphQL was all consolidated in hooks so I didn't have to worry about messing with a ton of UI logic to get it all wrangled out. All my data hooks looked like this in the end:

```javascript
export const useSiteData = () => {
  return {
    siteData: [],
    resumeData: [],
    links: [],
  }
}

```

## The Move

The process of actually moving from Gatsby to NextJS was fairly painless. Remove all the Gatsby packages, remove your old configs, install NextJS, create your new configs and update your package.json scripts. Done! 

There is actually not a whole lot to be said about this part, I didn't run into any wired errors or bugs and I didn't have to scour StackOverflow or Github Issues for a solution to an obscure problem. I was almost shocked that my site was back up and running so quickly, alas without any data...

## Hooking Everything Back Up

Now that the site was back up and running, the next step was to get everything back up like my CMS, Blog Posts and Snippets.

First came my CMS. Rather than loading the CMS through an index file in the `public/admin` folder, I instead opted to use `CMS.init()` which initialized the UI locally within my site. This yielded one big advantage: a typed configuration. One of the most painful parts of NetlifyCMS was having to write all your configurations out in YAML. I had to use a number of tools such as [yaml-merge]() and [yamllint]() to validate and build the configuration which was crumbsome. Moving my config inside of my JS allowed me to painlessly recreate the config, split it up based on collections, and add certain conditional logic based on the deployed environment.

Next came the blog and snippets. In my site, blog posts and snippets are basically the same under the hood, the only exception is blog posts have dates whereas snippets do not. I managed to put everything together here using node tools and [MDXRemote](https://github.com/hashicorp/next-mdx-remote). Using MDXRemote here was crucial because of some of the assumption that MDX makes, namely that your MDX will live right next to your website code. While this might be fine for some, I wanted a clear separation of concerns between my UI and content.

On the `/blog` and `/snippets` level I simply query metadata off each post using this function:

```javascript

export const getLocalPosts = () => {
  const files = glob.sync("**/*.md", { cwd: postsDirectory })
  const postMeta = files
    .map(file => {
      const postPath = path.join(postsDirectory, file)
      const postFile = fs.readFileSync(postPath, "utf-8")
      const postData = matter(postFile)
      const fm = postData.data
      const blogPost: RawBlogPost = {
        id: fm.slug,
        title: fm.title,
        description: fm.description,
        path: `/post/${fm.slug}`,
        type: BlogPostType.Local,
        rawDate: fm.date,
        published: fm.published,
        filePath: file,
      }
      return blogPost
    })
    .filter(post => post.published)
    .sort(sortDescendingByDate)

  return postMeta
}

```

Besides querying the frontmatter from each post, I also return the filepath to the UI, this allows my slug pages to properly pick up each post based on just the slug. There are many ways of approaching slugs when building blogs, personally I have always done it in the most manual way possible, a `slug` field in my frontmatter. This allows me to have a "Title that is really really long" but a nice "readable_slug". 

On my slug pages I then take the slug and fetch the post using MDXRemote.

```javascript

export const getPost = async (slug: string) => {
  const allPostMeta = getLocalPosts()
  const post = allPostMeta.filter(post => post.id === slug)[0]
  const { filePath } = post

  const postPath = path.join(postsDirectory, filePath)
  const postFile = fs.readFileSync(postPath, "utf-8")
  const { compiledSource, frontmatter } = await serialize(postFile, {
    parseFrontmatter: true,
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  })

```

Because MDX is built on top of [remark](https://unifiedjs.com/), I added a plugin that will add [prism](https://prismjs.com/) classnames to my code blocks, allowing for syntax highlighting in my code examples like you see in this post. This method of fetching posts is not the most ideal and optimized, in the future I will most likely rework this to be more efficient (I'll write about it when I do).

Besides blog posts, there was also the matter of hooking up my CMS to the website. This was pretty painless and followed the same rough pattern as setting up blog posts. I also created a helper function that will fetch this data all at once and format it to use on the site:

```javascript

import path from "path"
import fs from "fs"
import { ProjectType, SiteData, Work } from "~/model/SiteData"

const cmsRoot = path.resolve(process.cwd(), "public", "cms", "site-data")

export const getSiteData = (): SiteData => {
  const bioRawFile = fs.readFileSync(path.join(cmsRoot, "bio.json"), "utf-8")
  const contactRawFile = fs.readFileSync(
    path.join(cmsRoot, "contact.json"),
    "utf-8"
  )
  const workRawFile = fs.readFileSync(path.join(cmsRoot, "work.json"), "utf-8")

  const bioJSON = JSON.parse(bioRawFile)
  const contactJSON = JSON.parse(contactRawFile)
  const workJSON = JSON.parse(workRawFile)

  const allWork: Work[] = workJSON["work-data"]
    .map((workItem: any) => ({
      showInRecents: workItem["show-in-recent-projects"],
      name: workItem.name,
      url: workItem.url ?? false,
      description: workItem.description,
      projectType:
        workItem["project-type"] === "side-project"
          ? ProjectType.SideProject
          : ProjectType.ProfessionalProject,
    }))
    .filter(Boolean)

  return {
    bio: bioJSON.bio,
    phoneNumber: contactJSON["phone-number"],
    phoneNumberAlt: contactJSON["phone-number-alt"],
    email: contactJSON.email,
    github: contactJSON.github,
    instagram: contactJSON.instagram,
    twitter: contactJSON.twitter,
    devTo: contactJSON["dev-to"],
    website: contactJSON.website,
    linkedin: contactJSON.linkedin,
    work: allWork,
    recentWork: allWork.filter(item => item.showInRecents),
  }
}

```

This helper is by no means perfect and my next steps will be to modify it so it only returns the fields that you request.

## Better Layouts

One thing that I didn't like about the previous iteration of my site was how layouts were done. Most of the theme was hard coded as a global style which is perfectly fine until you have a page that needs to **not** have those styles. The page in question here is `/admin` which hosts my instance of NetlifyCMS. My websites global styles were getting applied inside the CMS and made for a very janky looking UI.

After some false starts trying to over-ride those styles, I decided to rework my layouts and use [per page layouts](https://nextjs.org/docs/basic-features/layouts#per-page-layouts). From there I created a `<Layout />` component and refactored all my pages to look like this:


```javascript
import { Layout } from "~/components/layout"
import { LinkPage, LinkPageProps } from "~/features/LinkPage"
import { NextPageWithLayout, StaticProps } from "./_app"

const Page: NextPageWithLayout<LinkPageProps> = props => <LinkPage {...props} />

// ...

Page.getLayout = page => (
  <>
    <Head>
      <title>Sunny Golovine :: Links</title>
    </Head>
    <Layout pageTitle="Links">{page}</Layout>
  </>
)

// ...

export default Page
```

Inside of the `<Layout />` component, I added a `<GlobalStyle />` component which used `createGlobalStyle` from [styled-components](https://styled-components.com/). Now with my global styles getting injected at the page level, I can create new pages that either support the existing website theme, or create pages that break with the theme and do something completely different.

Putting this all together, my pages in `src/pages` only do 3 things:

1. Fetch the data
2. Provide the layout
3. Render the component

This gives me a ton of flexibility and makes for easier debugging because its never a question of where the source of a problem is, if there is an issue fetching it will always be on one of those pages or inside an api helper, the UI code stays "dumb", only ever accepting and displaying data.

## Looking Ahead

My website is an ongoing piece of work that will never truly be complete. My next steps in upgrading my website is to optimize my blog posts, rework snippets to be searchable and taggable and more tightly integrate my CMS with my website. You can check out the source code to this website [here](https://github.com/sgolovine/sunnygolovine.com).