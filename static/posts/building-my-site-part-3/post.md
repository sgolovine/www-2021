---
title: Building SunnyGolovine.com - Part 3
description:
  With most of the site up, in this post I want to talk about landing pages and
  the my blogging workflow
date: Feb 10, 2021
slug: building-my-site-part-3
published: true
---

With the site nearing completion I still had two things that needed doing:
Adding a links landing page and building a better blogging workflow

## Links Landing Page

If you've ever seen something like Linktree or Blue Social, the idea isn't far
off, a simple landing page that directs your visitors to connect with you on
social media, email you, etc.

I had previously a built a version and hosted it on
[sunny.gg](https://sunny.gg). However this time around I wanted something that
was integrated into my bigger site. Doing this was pretty straightforward, my
frontend code for sunny.gg was already written in React and used TailwindCSS so
I was good to go there. The incompatibility came to which framework it used.
While I built sunny.gg to use Gatsby, I built this site on top of NextJS.
Beyond that I also used a different contact form backend, using Netlify
Forms rather than SendGrid (which I use now on this site).

The first step would be to get data routed. For this I repeated React Context
API pattern I was already using to fetch data for other parts of the site, I
simply added another Context that would provide data to this landing page. This
was a pretty straightforward task and from there I moved on to migrating my
contact form to use SendGrid.

I had already written all the logic around sending a message to SendGrid via
Netlify Functions; however, in it's current state the logic was bound to a
component. I quickly refactored this logic, moving it from the component it was
in to a hook that could be used by both components, you can see how I setup the
hook [here](https://github.com/sgolovine/sunnygolovine.com/blob/master/src/hooks/useContactForm.tsx).

With the data and contact form being adapted to NextJS, I was able to copy the
project wholesale from the old repository and drop it into my new site, easy
peasy.

## Blogging Workflow

One other annoyance I wanted ot solve for the site was the blogging workflow.
Because I opted not to use a CMS, there was zero user friendliness around
creating a blog post. Here I opted for a minimal setup using a few scripts:

`createPost.js` - The first script I created was to help me create new blog
posts. My blog posts use FrontMatter for metadata so the script does 2 thing:
One it creates the file in `/posts`, the second thing it does is automatically
pre-fill the FrontMatter in the new post so I don't have to worry about missing a
field. I also added several checks to make sure the blog post filename doesn't
collide with any other post filenames.

`deletePost.js` - Just as the name implies, this script just deletes a given
post. Apparently at some point I decided that simply deleting a post using `rm -rf` was too difficult.

`listPosts.js` - Again just as the name implies, give you a list of files in
the `/posts` directory.

All three of these commands are linked in package.json under the commands:
post:create, post:delete, and post:ls. With these commands I can more quickly
create blog posts with less hassle, and ever increasing laziness.

You can find these scripts [here](https://github.com/sgolovine/sunnygolovine.com/tree/master/scripts)

## Looking Forward

That's it for now. The site is coming along nicely but there are still places to
improve. One big issue is the image used in my landing page isn't optimized like
it was in Gatsby. Gatsby has one of the best image optimization libraries and
replicating that with NextJS has proved to be more challenging that I previously
thought.
