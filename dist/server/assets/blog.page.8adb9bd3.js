"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var withLayout = require("./withLayout.756aecbf.js");
require("classnames");
var jsxRuntime = require("react/jsx-runtime");
require("react");
require("react-headroom");
require("./MobileMenuIcon.5e3f6124.js");
var ContentContainer = require("./ContentContainer.b828408c.js");
var useBlogPosts = require("./useBlogPosts.fe3901ef.js");
require("./ExternalLink.0c3ec40c.js");
require("./ExternalLink.81ce11f5.js");
const BlogPage = () => {
  const {
    localPosts,
    remotePosts
  } = useBlogPosts.useBlogPosts();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.jsx(withLayout.Header, {
      title: "Posts",
      additionalText: "Read the latest posts from my blog"
    }), /* @__PURE__ */ jsxRuntime.jsx(ContentContainer.ContentContainer, {
      children: localPosts && localPosts.length > 0 && localPosts.map((post) => /* @__PURE__ */ jsxRuntime.jsx(useBlogPosts.PostItem, {
        path: post.path,
        title: post.title,
        date: post.date,
        description: post.description
      }))
    }), /* @__PURE__ */ jsxRuntime.jsx("hr", {
      className: "py-4"
    }), /* @__PURE__ */ jsxRuntime.jsx(withLayout.Header, {
      title: "The Practical Dev",
      additionalText: "Read my latest posts from dev.to"
    }), /* @__PURE__ */ jsxRuntime.jsx(ContentContainer.ContentContainer, {
      children: remotePosts && remotePosts.length > 0 && remotePosts.map((post) => /* @__PURE__ */ jsxRuntime.jsx(useBlogPosts.PostItem, {
        path: post.path,
        title: post.title,
        date: post.date,
        description: post.description,
        external: true
      }))
    })]
  });
};
var BlogPage$1 = withLayout.withNewLayout(BlogPage);
exports["default"] = BlogPage$1;
