---
title: Fuzzy Git Branch Checkout
description: If you use JIRA at work then your git branches likely look like PROJ-12345-description. Here's a little script you can use to checkout these branches quicker
date: May 17, 2021
slug: fuzzy-git-branch-search
published: true
---

Hey everyone, like many developers I use JIRA for issue tracking at work. One thing to know about JIRA is the git integration it offers but with one caveat, the branches all have to follow a common naming convention. After a few weeks of creating branches, running `git branch` in my local repository yields a list that looks something like this:

```bash
feat/ABC-111-something
feature/ABC-123-something-else
bugfix/ABC-543-fix-some-bug
feature/ABC-432-do-some-feature
....and more
```

If you have 3-5 branches on your local machine it's not that big of a deal, but get 20+ and it starts taking some effort to find the branch you're looking for, especially if you work in an environment where features are very close together so branches end up looking like

```bash
feat/ABC-123-implement-foobar-on-mod-1
feat/ABC-125-implement-foobaz-on-mod-1
```

The other day I got tired of looking through this massive list of branches and asked myself: "can we make checking out these branches better?". So like any programmer, I made a script on my lunch break to fuzzy search these branches

## The Script

```bash
#!/bin/bash

function path-search() {
  if [ -z "$1" ]; then
    echo "Branch not supplied"
    return 1
  fi

  branch=$(git branch | grep $1 | xargs)

  if [ -z "$branch" ]; then
    echo "No matching braches found"
    return 1
  fi

  git checkout $branch
  echo "Successfully checked out branch $branch"
  return 0
}
```

This script is far from perfect but it gets the job done. Feel free to add this to your dot files and edit as you see fit.
