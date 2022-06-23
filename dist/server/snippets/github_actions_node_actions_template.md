---
title: Github Actions Node Actions Template
description: Run Node package commands in Github Actions
slug: node-github-actions-workflow-template
tags: node,javascript,github-actions
published: true
---
Things to change:

1. Update your desired node version
2. In the "Cache Node Modules", update `yarn.lock` to your lockfile.
3. Update the installation step with your package manager.
4. Add any additional commands you require
5. Update active branches OR enable workflow_dispatch (for manual running)


Base Template:

```yaml
name: Pull Request CI


# on: workflow_dispatch

on:
  pull_request:
    branches:
      - main

jobs:
  pr-tests:
    runs-on: ubuntu-latest

    env:
      CI: true

    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Setup NodeJS
        uses: actions/setup-node@v1
        with:
          node-version: "16.13.2"

      - name: Cache Node Modules
        id: cache-node-modules
        uses: actions/cache@v2
        with:
          path: node_modules
          key: node-modules-${{ hashFiles('yarn.lock') }}

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn install

      - name: Run Node Command
        run: yarn your_package_command

      # Any Additional Commands

```



