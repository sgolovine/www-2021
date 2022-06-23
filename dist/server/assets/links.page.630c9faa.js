"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var withLayout = require("./withLayout.756aecbf.js");
require("classnames");
var jsxRuntime = require("react/jsx-runtime");
require("react");
require("react-headroom");
require("./MobileMenuIcon.5e3f6124.js");
var ContentContainer = require("./ContentContainer.b828408c.js");
var LinkItem = require("./LinkItem.d7ca4fe1.js");
var useData = require("./useData.99ff2243.js");
require("./ExternalLink.81ce11f5.js");
const LinkPage = () => {
  const {
    siteData
  } = useData.useData();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(withLayout.Header, {
      title: "Links"
    }), /* @__PURE__ */ jsxRuntime.jsxs(ContentContainer.ContentContainer, {
      children: [/* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "Phone",
        href: siteData.linkedin,
        type: "phone",
        icon: "phone",
        showPreviewOnHover: true
      }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "Email",
        href: siteData.email,
        type: "email",
        icon: "email",
        showPreviewOnHover: true
      }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "Instagram",
        href: siteData.instagram,
        icon: "instagram",
        showPreviewOnHover: true
      }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "Twitter",
        href: siteData.twitter,
        icon: "twitter",
        showPreviewOnHover: true
      }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "Github",
        href: siteData.github,
        icon: "github",
        showPreviewOnHover: true
      }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "LinkedIn",
        href: siteData.linkedin,
        icon: "linkedin",
        showPreviewOnHover: true
      }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
        title: "The Practical Dev",
        href: siteData.dev_to,
        icon: "devto",
        showPreviewOnHover: true
      })]
    })]
  });
};
var LinkPage$1 = withLayout.withNewLayout(LinkPage);
exports["default"] = LinkPage$1;
