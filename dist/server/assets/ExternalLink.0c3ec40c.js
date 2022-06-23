"use strict";
var classnames = require("classnames");
var ExternalLink$1 = require("./ExternalLink.81ce11f5.js");
var jsxRuntime = require("react/jsx-runtime");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var classnames__default = /* @__PURE__ */ _interopDefaultLegacy(classnames);
const ExternalLink = ({
  label,
  href,
  external = false,
  noIcon = false,
  containerClassnames,
  textClassnames,
  iconClassnames,
  sm,
  lg
}) => {
  const containerClasses = classnames__default["default"](containerClassnames, "flex", "flex-row", "items-center");
  const textClasses = classnames__default["default"](textClassnames, "font-bold", "text-brand-link", {
    "hover:text-brand-yellow": !!href,
    "text-lg": lg,
    "text-sm": sm
  });
  const iconClasses = classnames__default["default"](iconClassnames, "h-6", "w-6", "ml-2", "text-brand-yellow");
  if (href && external) {
    return /* @__PURE__ */ jsxRuntime.jsxs("span", {
      className: containerClasses,
      children: [/* @__PURE__ */ jsxRuntime.jsx("a", {
        className: textClasses,
        href,
        children: label
      }), !noIcon && /* @__PURE__ */ jsxRuntime.jsx(ExternalLink$1.ExternalLinkIcon, {
        className: iconClasses
      })]
    });
  }
  if (href) {
    return /* @__PURE__ */ jsxRuntime.jsx("a", {
      className: textClasses,
      href,
      children: label
    });
  }
  return /* @__PURE__ */ jsxRuntime.jsx("p", {
    className: textClasses,
    children: label
  });
};
exports.ExternalLink = ExternalLink;
