"use strict";
var jsxRuntime = require("react/jsx-runtime");
const sidebarRoutes = [{
  name: "Home",
  route: "/",
  enabled: true,
  key: "home"
}, {
  name: "Work",
  route: "/work",
  enabled: true,
  key: "work"
}, {
  name: "Blog",
  route: "/blog",
  enabled: true,
  key: "blog"
}, {
  name: "Links",
  route: "/links",
  enabled: true,
  key: "links"
}, {
  name: "Resume",
  route: "/resume",
  enabled: true,
  key: "resume"
}, {
  name: "Snippets",
  route: "/snippets",
  enabled: true,
  key: "snippets"
}, {
  name: "Contact",
  route: "/contact",
  enabled: true,
  key: "contact"
}].filter((item) => item.enabled);
const MobileMenu = ({
  closeMenu
}) => /* @__PURE__ */ jsxRuntime.jsx("div", {
  className: "absolute z-50 bg-off-black background w-full shadow-bottom",
  children: /* @__PURE__ */ jsxRuntime.jsx("ul", {
    className: "block text-center",
    children: sidebarRoutes.length > 0 && sidebarRoutes.map((route) => /* @__PURE__ */ jsxRuntime.jsx("li", {
      className: "py-2 uppercase font-bold text-lg",
      children: /* @__PURE__ */ jsxRuntime.jsx("a", {
        onClick: closeMenu,
        href: route.route,
        className: "text-brand-link",
        children: route.name.toUpperCase()
      })
    }, route.key))
  })
});
const CloseIcon = ({
  className = "h-6 w-6 text-brand-yellow"
}) => /* @__PURE__ */ jsxRuntime.jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className,
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /* @__PURE__ */ jsxRuntime.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M6 18L18 6M6 6l12 12"
  })
});
const Menu = () => /* @__PURE__ */ jsxRuntime.jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  className: "h-6 w-6 text-brand-yellow",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /* @__PURE__ */ jsxRuntime.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M4 6h16M4 12h16M4 18h16"
  })
});
const MobileMenuButton = ({
  open,
  onClick
}) => /* @__PURE__ */ jsxRuntime.jsxs("button", {
  type: "button",
  className: "md:hidden flex flex-row items-center space-between border p-1 rounded border-gray-600",
  onClick,
  children: [/* @__PURE__ */ jsxRuntime.jsx("p", {
    className: "text-lg font-bold font-heading pr-2",
    children: "Menu"
  }), open ? /* @__PURE__ */ jsxRuntime.jsx(CloseIcon, {}) : /* @__PURE__ */ jsxRuntime.jsx(Menu, {})]
});
exports.MobileMenu = MobileMenu;
exports.MobileMenuButton = MobileMenuButton;
exports.sidebarRoutes = sidebarRoutes;
