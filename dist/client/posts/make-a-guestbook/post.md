---
title: Building a Guest Book for my Site
description: I've always wanted to have an old school guestbook for my site. I finally built one using Netlify Functions and Github Gist.
date: Feb 17, 2021
slug: make-a-guestbook
published: true
---

Back in the 90's, it was common for websites to have guest books for visitors to
sign. With the exponential growth of the internet in the 2000's, these "Guest
Books" gave way to social media, and you hardly ever see them anymore.

The other day I started to wonder, how hard would it be to implement on these
days with modern technology. Back then, running a guest book involved setting up
a database and back end, but these days there are tools like Fauna and Gist that
lets you store data without database and takes minimal effort to setup.

## The Setup

My biggest hurdle when setting up my guest book is figuring out where to put the
data. I decided the best place would be in a Gist, when a user submitted their
message, a serverless function would pick it up, call Github to get the current
gist, append the users message to the end, and send it back up to Github.

## Keeping everything secure

One of the reasons guest books died on the internet was it was easy to get
hacked, so one of my biggest considerations was how to secure this thing.
Luckily this turned out to be pretty straightforward. First off since the data
was stored in a gist, I didn't have to worry about my backend getting hacked and
worst case scenario, I could just wipe the gist.

However I still wanted to sanitize the input so I used DOMPurify to sanitize any
user input prior to submission, my guest book accepts any text however if you
try adding a `<script src="verybadscript.js"></script>`, the site will strip
that away before sending up the data.

The last security related hurdle was how was I going to allow users to add to
the guest book anonymously. The Github API allows you to read gists without
authentication; however, you must be authenticated to update it. To get around
this I moved the update logic into a serverless function, this way I could
furnish an access token to the API call without exposing any secrets to
the client.

## The UI

The User Interface was probably the easiest part, but still required some
thought. I had two pieces of state that I had to keep up with: user submission
state, and guest book loading state.

I settled on two pieces of state: `submissionState` and `guestbookLoading`.
The first piece of state track the user submission, and functions like a state
machine with either "pre", "submitting" or "post" states. The second piece of
state tracks the loading of the guest book gist. There is one last piece of
state that is crucial: `shouldFetchGuestbook`.

Whenever you sign the guest book, you want to see your submission. The issue I
ran into is after submitting your message, there was no way to inform the
guest book to reload it's data. To solve this i used `shouldFetchGuestbook`
along with a `useEffect` hook that would re-fetch the data anytime the flag was
flipped to true.

## What's Next

I'm not quite done tweaking the guest book. Some improvements:

- Guest book submissions to the bottom of the document, they should go to the
  top
- There's no profanity filter in place. Shit, I should probably add one....
- Bot detection/prevention: I'm not doing anything right now to prevent bots
  from making repeated submissions. This is not a huge deal as the worst that
  can happen is I hit Github's rate limit for their API. I didn't want to bog down
  the user experience with a Captcha but a solution will be needed eventually.

You can sign my guest book [here](https://sunnygolovine.com/guestbook)
