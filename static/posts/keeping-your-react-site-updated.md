---
title: Keeping your Javascript project up to date
description: A few tips and tricks to keeping dependencies in your JS project fresh
date: Apr 14, 2021
slug: keeping-your-react-project-updated
---

I dread nothing more than running `yarn oudated` on a React project I haven't
touched in a few months and seeing an output that looks something like this:

```bash
➜ yarn outdated
yarn outdated v1.22.10
info Color legend :
 "<red>"    : Major Update backward-incompatible updates
 "<yellow>" : Minor Update backward-compatible features
 "<green>"  : Patch Update backward-compatible bug fixes
Package                  Current  Wanted   Latest   Package Type    URL
@babel/core              7.12.13  7.13.15  7.13.15  devDependencies https://babel.dev/docs/en/next/babel-core
@babel/preset-react      7.12.13  7.13.13  7.13.13  devDependencies https://babel.dev/docs/en/next/babel-preset-react
@babel/preset-typescript 7.12.13  7.13.0   7.13.0   devDependencies https://babel.dev/docs/en/next/babel-preset-typescript
@types/node              14.14.25 14.14.37 14.14.37 devDependencies https://github.com/DefinitelyTyped/DefinitelyTyped.git
@types/react             17.0.1   17.0.3   17.0.3   devDependencies https://github.com/DefinitelyTyped/DefinitelyTyped.git
@types/react-dom         17.0.0   17.0.3   17.0.3   devDependencies https://github.com/DefinitelyTyped/DefinitelyTyped.git
autoprefixer             10.2.4   10.2.5   10.2.5   devDependencies https://github.com/postcss/autoprefixer#readme
dompurify                2.2.6    2.2.7    2.2.7    dependencies    https://github.com/cure53/DOMPurify
jsdom                    16.4.0   16.5.3   16.5.3   dependencies    https://github.com/jsdom/jsdom#readme
netlify-cli              3.5.0    3.18.0   3.18.0   devDependencies https://github.com/netlify/cli
next                     10.0.6   10.1.3   10.1.3   dependencies    https://nextjs.org
postcss                  8.2.4    8.2.10   8.2.10   devDependencies https://postcss.org/
react                    17.0.1   17.0.2   17.0.2   dependencies    https://reactjs.org/
react-device-detect      1.15.0   1.17.0   1.17.0   dependencies    https://github.com/duskload/react-device-detect#readme
react-dom                17.0.1   17.0.2   17.0.2   dependencies    https://reactjs.org/
react-query              3.9.8    3.13.8   3.13.8   dependencies    https://github.com/tannerlinsley/react-query#readme
tailwindcss              2.0.2    2.1.1    2.1.1    devDependencies https://tailwindcss.com
ts-prune                 0.8.8    0.8.9    0.9.0    devDependencies https://github.com/nadeesha/ts-prune#readme
typescript               4.1.3    4.2.4    4.2.4    devDependencies https://www.typescriptlang.org/
✨  Done in 2.61s.

```

This is the current state of this website though by the time you are reading
this I would have updated the site. Because this project is not one I'm in
frequently, a developing pain point is every time I need to make an update to my
site, that update always starts with upgrading the dependencies in the project.
So today I want to cover a few ways to avoid this issue.

## The "Fast" Way

If you are confident upgrading all your packages to the latest version won't
break anything, you can run `npm upgrade --latest` or `yarn upgrade --latest` to
upgrade all the packages in your `package.json` to the latest version.

One might think that you could upgrade individual packages by running `npm/yarn upgrade <package_name>` and while that is true, it only updates the version in
your Lockfile, which is not a big help.

## The "Slow" Way

The slow or manual way is to simply upgrade the packages in your `package.json` by
referencing the output of `npm/yarn outdated`. This way is good if your project
is picky about package versions and you need to test every upgraded package to
make sure things work. While slow, it's the best way of making sure you don't
break anything.

## The "Automatic" Way.

If you looked at the last two ways and though to yourself "well this still
sucks" then I agree with you. In fact the best way I found to keep packages up
to date is to use a dependency bot like Dependabot or Renovatebot. These bots will
automatically keep your project up to date by figuring out which packages are
outdated and automatically open PR's for them. So all you have to do it approve
and merge the PR.

[Dependabot](https://dependabot.com/)

[Renovatebot](https://github.com/renovatebot/renovate)

Both of these bots do largely the same thing and it doesn't really matter which
one you get, and for personal projects both are free.

And while these bots are great for ongoing maintenance, I would not recommend
using them out of the gate if you have a ton of outdated dependencies. The
reason is they will create a PR for every outdated dependency, and if you have
CI that needs to run before a PR is merged, this may turn out to be more of a
hassle for what it's worth. My suggestion is to use option 1 or option 2 to
update all your dependencies then utilize dependency bots for all subsequent
updates.
