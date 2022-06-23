"use strict";
var ExternalLink = require("./ExternalLink.0c3ec40c.js");
var jsxRuntime = require("react/jsx-runtime");
function formatPostDate(date) {
  if (date) {
    return new Date(date).toLocaleDateString();
  }
  return "";
}
const PostItem = ({
  path,
  title,
  date,
  description,
  external
}) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
  className: "pb-12",
  children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "flex flex-row justify-between items-start",
    children: [/* @__PURE__ */ jsxRuntime.jsx(ExternalLink.ExternalLink, {
      lg: true,
      noIcon: external,
      external,
      href: path,
      label: title
    }), date && /* @__PURE__ */ jsxRuntime.jsx("p", {
      children: formatPostDate(date)
    })]
  }), description && /* @__PURE__ */ jsxRuntime.jsx("p", {
    className: "py-2",
    children: description
  })]
});
const useBlogPosts = () => ({
  localPosts: [],
  remotePosts: [],
  recentPosts: []
});
exports.PostItem = PostItem;
exports.useBlogPosts = useBlogPosts;
