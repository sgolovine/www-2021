"use strict";
var jsxRuntime = require("react/jsx-runtime");
var classnames = require("classnames");
var react = require("react");
var Headroom = require("react-headroom");
var MobileMenuIcon = require("./MobileMenuIcon.5e3f6124.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var classnames__default = /* @__PURE__ */ _interopDefaultLegacy(classnames);
var Headroom__default = /* @__PURE__ */ _interopDefaultLegacy(Headroom);
const Header = ({
  title,
  additionalText
}) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
  className: "my-4 text-center",
  children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
    className: "hidden md:block text-4xl font-heading font-extrabold text-brand-yellow pb-4",
    children: title
  }), additionalText && /* @__PURE__ */ jsxRuntime.jsx("p", {
    children: additionalText
  })]
});
const NewHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsx(Headroom__default["default"], {
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "border-b border-gray-700 mb-4 shadow bg-off-black",
      children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "flex md:hidden flex-row items-center justify-end py-4 max-w-3xl mx-auto px-4",
        children: /* @__PURE__ */ jsxRuntime.jsx(MobileMenuIcon.MobileMenuButton, {
          open: mobileMenuOpen,
          onClick: () => setMobileMenuOpen((prevState) => !prevState)
        })
      }), mobileMenuOpen && /* @__PURE__ */ jsxRuntime.jsx(MobileMenuIcon.MobileMenu, {
        closeMenu: () => setMobileMenuOpen(false)
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "hidden md:flex flex-row items-center justify-evenly py-4 max-w-3xl mx-auto",
        children: MobileMenuIcon.sidebarRoutes.map((route) => /* @__PURE__ */ jsxRuntime.jsx("a", {
          className: "text-lg font-heading font-bold hover:bg-brand-yellow hover:text-off-black px-2 py-1 rounded-sm",
          href: route.route,
          children: route.name
        }, route.key))
      })]
    })
  });
};
const NewLayout = ({
  children,
  noContentMargin
}) => {
  const classes = classnames__default["default"]("mx-auto", {
    "px-4": !noContentMargin,
    "max-w-3xl": !noContentMargin,
    "my-4": !noContentMargin
  });
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    children: [/* @__PURE__ */ jsxRuntime.jsx(NewHeader, {}), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: classes,
      children
    })]
  });
};
const withNewLayout = (Component, noContentMargin) => ({
  ...props
}) => /* @__PURE__ */ jsxRuntime.jsx(NewLayout, {
  noContentMargin,
  children: /* @__PURE__ */ jsxRuntime.jsx(Component, {
    ...props
  })
});
exports.Header = Header;
exports.withNewLayout = withNewLayout;
