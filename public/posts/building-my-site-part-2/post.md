---
title: Building SunnyGolovine.com - Part 2
description: In my last post I talked about some of the decisions I made when
  building my site. In this post I'll talk about the architecture
date: Feb 08, 2021
slug: building-my-site-part-2
published: true
---

In my last post I talked about some of the decisions I made leading up to
building my site. In this post I wanted to talk more about the architecture
decisions that went into building SunnyGolovine.com

## Getting Data

One decision I did not include in my last post was the decision **not** to use a
CMS for managing content on the site. However, I also didn't want to have all my
data in my code, I needed something in the middle.

My solution for now is to keep all website data, with the exception of blog
posts, in JSON. The data is kept in the `/data` folder while blog posts are kept
in the `/posts` folder. As far as getting the data to display on the site, I had
several options. The simplest method was to use `getStaticProps` in my pages to
grab JSON data from my `/data` folder. The problem is this solution just doesn't
scale. I wanted a single API that I could route my data into and then plug into
any component in the app. My solution to this was React Context.

For the longest time I never quite understood Context, I knew I had to dive into
it eventually. So when the problem of getting data into my site presented
itself, I found a perfect candidate for Context.

I currently use two Contexts: Site Context and Resume Context. With each context
I import JSON files and combine the data into one object. From there I just use
hte `useContext` hook to provide data wherever it's needed. I previously did
this with Redux however for a unidirectional data flow, Redux is way to much
overhead.

## Optimizing Images

I never put much thought into image optimization. NextJS after all recently
introduced `next/image` which automatically optimizes your images. I put it in
and didn't think much of it until my builds started to fail. Digging into the
issue, it turns out that `next/image` with it's default loader is not compatible
with `next export`.

My solution here was to use another image optimization library called
`next-optimized-images`. While the docs looked pretty scary at first, getting
image optimization boiled down to adding a just a few lines of code to my
Next configuration.

## Sending Emails

If someone wants to reach out to discuss hiring me for something, I want to make
it as easy as possible for that person to reach me. As such, having just a link
to my email and LinkedIn profile wasn't enough, I needed "Send me a Message"
component.

Luckily this problem couldn't be easier to solve using Netlify. Netlify gives
you two options when it comes to solving this problem: Forms or Functions.
Netlify forms lets users submit forms on your site and will be collected by
Netlify.

While this solution seems the most straightforward, it came with two
drawbacks. First, the setup in a React project isn't straightforward and
requires some workarounds, having already done this on a previous project, I
wasn't looking forward to it. Second, getting the message to Netlify was only
one piece of the puzzle. I would then have to route that message to my inbox or
check Netlify religiously for any new messages, not ideal.

The alternative to Forms is to use Functions. Netlify Functions lets you write
serverless functions that you can trigger from your frontend. This is great if
you don't need a full on API but you still need a backend. I ended up writing a
basic mailer function using Sendgrid and then had the messages routed to my
Inbox.

There are still some drawbacks here, on Sendgrid's default plan I'm limited to
just 100 messages per day so if I ever start getting high amounts of traffic on
my site, I may have to reconsider this approach.

## Looking Forward

This site is still an active work in progress and there are still more things I
want to implement. Namely a Dark Theme, SEO and Performance. My Lighthouse score
is still >90% so there's a good bit of work to do.
