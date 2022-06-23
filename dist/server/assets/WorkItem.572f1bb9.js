"use strict";
var classnames = require("classnames");
var ExternalLink = require("./ExternalLink.0c3ec40c.js");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var classnames__default = /* @__PURE__ */ _interopDefaultLegacy(classnames);
const WorkItem = ({
  name,
  description,
  project_type,
  url
}) => {
  const typeDotClasses = classnames__default["default"]("h-3", "w-3", "rounded-full", {
    "bg-blue-400": project_type === "professional",
    "bg-green-400": project_type === "side-project"
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "pb-12",
    children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "flex flex-row items-center justify-between",
      children: [/* @__PURE__ */ jsxRuntime.jsx(ExternalLink.ExternalLink, {
        label: name,
        href: url,
        lg: true,
        external: true
      }), /* @__PURE__ */ jsxRuntime.jsxs("span", {
        className: "flex flex-row items-center",
        children: [/* @__PURE__ */ jsxRuntime.jsx("span", {
          className: typeDotClasses
        }), /* @__PURE__ */ jsxRuntime.jsx("p", {
          className: "text-sm font-bold p-1",
          children: project_type === "professional" ? "Professional Project" : "Side Project"
        })]
      })]
    }), /* @__PURE__ */ jsxRuntime.jsx("p", {
      className: "py-2",
      children: description
    })]
  });
};
exports.WorkItem = WorkItem;
