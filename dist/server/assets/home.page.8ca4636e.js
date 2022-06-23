"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var classnames = require("classnames");
var react = require("react");
var MobileMenuIcon = require("./MobileMenuIcon.5e3f6124.js");
var jsxRuntime = require("react/jsx-runtime");
var LinkItem = require("./LinkItem.d7ca4fe1.js");
var useBlogPosts = require("./useBlogPosts.fe3901ef.js");
var WorkItem = require("./WorkItem.572f1bb9.js");
var useData = require("./useData.99ff2243.js");
require("./ExternalLink.81ce11f5.js");
require("./ExternalLink.0c3ec40c.js");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var classnames__default = /* @__PURE__ */ _interopDefaultLegacy(classnames);
const HomeNav = () => {
  const routesToRender = MobileMenuIcon.sidebarRoutes.filter((route) => route.route !== "/");
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "flex flex-row items-center justify-evenly py-4",
    children: routesToRender.map((route) => /* @__PURE__ */ jsxRuntime.jsx("a", {
      className: "text-lg font-heading font-bold hover:bg-brand-yellow hover:text-off-black px-2 py-1 rounded-sm",
      href: route.route,
      children: route.name
    }, route.key))
  });
};
const PunkSVG = ({
  showShades = false,
  eyeColorLeft = "white",
  eyeColorRight = "black"
}) => /* @__PURE__ */ jsxRuntime.jsxs("svg", {
  viewBox: "0 0 425 548",
  fill: "none",
  id: "sgg-punk",
  children: [/* @__PURE__ */ jsxRuntime.jsx("defs", {
    id: "defs1226"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 175)",
    fill: eyeColorRight,
    id: "eye-right-look-right"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 175)",
    fill: eyeColorLeft,
    id: "eye-right-look-left"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 150)",
    fill: "#C4C4C4",
    stroke: "#C4C4C4",
    id: "rect642"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 150)",
    fill: "#C4C4C4",
    stroke: "#C4C4C4",
    id: "rect644"
  }), /* @__PURE__ */ jsxRuntime.jsxs("g", {
    id: "eye-left",
    children: [/* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(225 175)",
      fill: eyeColorRight,
      id: "eye-left-look-right"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(200 175)",
      fill: eyeColorLeft,
      id: "eye-left-look-left"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(200 150)",
      fill: "#C4C4C4",
      stroke: "#C4C4C4",
      id: "rect650"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(225 150)",
      fill: "#C4C4C4",
      stroke: "#C4C4C4",
      id: "rect652"
    })]
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 323)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect654"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 298)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect656"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 300)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect658"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 273)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect660"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 275)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect662"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 249)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect664"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 250)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect666"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 225)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect668"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 225)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect670"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 200)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect672"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 200)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect674"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 175)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect676"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 175)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect678"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 150)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect680"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 150)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect682"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 125)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect684"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 125)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect686"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 100)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect688"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 100)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect690"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 75)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect692"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 75)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect694"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 373)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect696"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 398)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect698"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 423)",
    fill: "#C4A754",
    stroke: "#C4A754",
    id: "rect700"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 448)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect702"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 473)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect704"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 498)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect706"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 523)",
    fill: "#000000",
    stroke: "#000000",
    id: "bottom-row-1"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 523)",
    fill: "#000000",
    stroke: "#000000",
    id: "bottom-row-4"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 498)",
    fill: "#C4A754",
    stroke: "#C4A754",
    id: "rect712"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 473)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect714"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 448)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect716"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect718"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect720"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect-fa-121212"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect724"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 175)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect726"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect728"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect730"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 150)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect732"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect734"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect736"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 200)",
    fill: "#111111",
    id: "rect738"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect740"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect742"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect744"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 175)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect746"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect748"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect750"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 150)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect752"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect754"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect756"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect758"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect760"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect762"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect764"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect766"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect768"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect770"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect772"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect774"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect776"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect778"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect780"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect782"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 125)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect784"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect786"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect788"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 100)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect790"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect792"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect794"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 75)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect796"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 150)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect798"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 150)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect800"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 150)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect802"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 175)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect804"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 175)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect806"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 175)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect808"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect810"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect812"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect814"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect816"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect818"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect820"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect822"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect824"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect826"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect828"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect830"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect832"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect834"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect836"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect838"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect840"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 325)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect842"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 325)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect844"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 325)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect846"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect848"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect850"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect852"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect854"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect856"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 325)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect858"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect860"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 225)",
    fill: "#111111",
    id: "rect862"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect864"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect866"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 325)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect868"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect870"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 200)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect872"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 225)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect874"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 250)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect876"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 300)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect878"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 325)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect880"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 275)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect882"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 523)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "bottom-row-2"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 498)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect886"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 473)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect888"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 448)",
    fill: "#C4A754",
    stroke: "#C4A754",
    id: "rect890"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 423)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect892"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 398)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect894"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 373)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect896"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 523)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "bottom-row-3"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 498)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect900"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 473)",
    fill: "#C4A754",
    stroke: "#C4A754",
    id: "rect902"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 448)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect904"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 423)",
    fill: "#D4B386",
    stroke: "#D4B386",
    id: "rect906"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "150",
    y: "323",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect908"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "150",
    y: "323",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect910"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "150",
    y: "299",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect912"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "150",
    y: "299",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect914"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "150",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect916"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "150",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect918"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "323",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect920"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "323",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect922"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect924"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect926"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "373",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect928"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "373",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect930"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect932"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "175",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect934"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect936"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect938"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "373",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect940"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "373",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect942"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect944"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect946"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect948"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "200",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect950"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect952"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect954"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "373",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect956"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "373",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect958"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect960"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect962"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect964"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "225",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect966"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect968"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect970"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect972"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect974"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect976"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect978"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect980"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect982"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "373",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect984"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "373",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect986"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect988"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect990"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect992"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect994"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 348)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect996"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect998"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1000"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "373",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1002"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "373",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1004"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1006"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1008"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1010"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1012"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "448",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1014"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "448",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1016"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "373",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1018"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "373",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1020"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1022"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1024"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1026"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1028"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "448",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1030"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "325",
    y: "448",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1032"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1034"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1036"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1038"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1040"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "448",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1042"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "300",
    y: "448",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1044"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1046"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1048"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1050"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1052"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "448",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1054"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "275",
    y: "448",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1056"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "398",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1058"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1060"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "398",
    width: "25",
    height: "25",
    stroke: "black",
    strokeOpacity: "0.2",
    id: "rect1062"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "423",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1064"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1066"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "423",
    width: "25",
    height: "25",
    stroke: "black",
    strokeOpacity: "0.2",
    id: "rect1068"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "448",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1070"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "448",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1072"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "250",
    y: "448",
    width: "25",
    height: "25",
    stroke: "black",
    strokeOpacity: "0.2",
    id: "rect1074"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "348",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1076"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "348",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1078"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "323",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1080"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "375",
    y: "323",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1082"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "323",
    width: "25",
    height: "25",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1084"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    x: "350",
    y: "323",
    width: "25",
    height: "25",
    stroke: "black",
    id: "rect1086"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 300)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1088"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 275)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1090"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 250)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1092"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 225)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1094"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(375 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1096"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1098"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1100"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1102"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1104"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1106"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1108"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1110"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1112"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1114"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1116"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(100 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1118"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(125 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1120"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1122"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(150)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1124"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1126"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(175)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1128"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1130"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(200)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1132"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1134"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(225)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1136"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1138"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(250)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1140"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1142"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(275)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1144"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1146"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(300)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1148"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1150"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(325)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1152"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(350 25)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1154"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(75 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1156"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(50 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1158"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(25 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1160"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(0 50)",
    fill: "#D83F2F",
    stroke: "#D83F2F",
    id: "rect1162"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(100 150)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1164"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(75 175)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect-fa-121212"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(100 200)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1168"
  }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
    width: "25",
    height: "25",
    transform: "translate(100 225)",
    fill: "#000000",
    stroke: "#000000",
    id: "rect1170"
  }), /* @__PURE__ */ jsxRuntime.jsxs("g", {
    id: "shades",
    style: showShades ? {
      display: "block"
    } : {
      display: "none"
    },
    children: [/* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(150,125)",
      fill: "#111111",
      id: "rect1172",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(125,125)",
      fill: "#111111",
      id: "rect1174",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(100,125)",
      fill: "#111111",
      id: "rect1176",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(175,125)",
      fill: "#111111",
      id: "rect1178",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(200,125)",
      fill: "#111111",
      id: "rect1180",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(225,125)",
      fill: "#111111",
      id: "rect1182",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(250,125)",
      fill: "#111111",
      id: "rect1184",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(275,125)",
      fill: "#111111",
      id: "rect1186",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(300,125)",
      fill: "#111111",
      id: "rect1188",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(325,125)",
      fill: "#111111",
      id: "rect1190",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(350,125)",
      fill: "#111111",
      id: "rect1192",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(375,125)",
      fill: "#111111",
      id: "rect1194",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(400,125)",
      fill: "#111111",
      id: "rect1196",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(375,150)",
      fill: "#111111",
      id: "rect1198",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(250,150)",
      fill: "#111111",
      id: "rect1200",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(350,175)",
      fill: "#111111",
      id: "rect1202",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(225,175)",
      fill: "#111111",
      id: "rect1204",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(350,150)",
      fill: "#111111",
      id: "rect1206",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(225,150)",
      fill: "#111111",
      id: "rect1208",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(325,150)",
      fill: "#111111",
      id: "rect1210",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(200,150)",
      fill: "#111111",
      id: "rect1212",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(325,175)",
      fill: "#111111",
      id: "rect1214",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(200,175)",
      fill: "#111111",
      id: "rect1216",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(300,150)",
      fill: "#111111",
      id: "rect1218",
      x: "0",
      y: "0"
    }), /* @__PURE__ */ jsxRuntime.jsx("rect", {
      width: "25",
      height: "25",
      transform: "translate(175,150)",
      fill: "#111111",
      id: "rect1220",
      x: "0",
      y: "0"
    })]
  })]
});
const PUNK_COLORS = ["#8c5851", "#8972b1", "#6a8494", "#75a475"];
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.floor(min));
}
function removeItemAtIndex(array, item) {
  const index = array.indexOf(item);
  return [...array.slice(0, index), ...array.slice(index + 1)];
}
const usePunk = () => {
  const [showShades, setShowShades] = react.useState(false);
  const [bgColor, setBgColor] = react.useState(PUNK_COLORS[0]);
  const [lookDirection, setLookDirection] = react.useState("right");
  const eyeColorLeft = lookDirection === "left" ? "black" : "white";
  const eyeColorRight = lookDirection === "right" ? "black" : "white";
  react.useEffect(() => {
    function handleMouseEvent(evt) {
      if (!showShades) {
        if (evt.clientX * 2 > window.innerWidth) {
          setLookDirection("right");
        } else {
          setLookDirection("left");
        }
      }
    }
    if (window && typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseEvent);
      return () => window.removeEventListener("mousemove", handleMouseEvent);
    }
  }, [showShades]);
  const onBackgroundClick = () => {
    const allColorsExceptSelected = removeItemAtIndex(PUNK_COLORS, bgColor);
    const randomColorIndex = getRandomIntInclusive(0, allColorsExceptSelected.length - 1);
    const randomColor = PUNK_COLORS[randomColorIndex];
    setBgColor(randomColor);
  };
  const toggleShades = () => setShowShades((prevShades) => !prevShades);
  return {
    eyeColorLeft,
    eyeColorRight,
    bgColor,
    showShades,
    onBackgroundClick,
    toggleShades
  };
};
const Punk = () => {
  const {
    eyeColorLeft,
    eyeColorRight,
    bgColor,
    onBackgroundClick,
    toggleShades,
    showShades
  } = usePunk();
  return /* @__PURE__ */ jsxRuntime.jsx("div", {
    className: "punk-border-container",
    children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
      onClick: onBackgroundClick,
      className: "punk-container",
      style: {
        backgroundColor: bgColor
      },
      children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "punk-container-top",
        children: /* @__PURE__ */ jsxRuntime.jsx("button", {
          type: "button",
          className: "punk-button",
          onClick: toggleShades,
          children: /* @__PURE__ */ jsxRuntime.jsx("div", {
            children: showShades ? /* @__PURE__ */ jsxRuntime.jsx("img", {
              src: "/assets/eyes.png",
              alt: "eyes",
              placeholder: "none",
              height: 48,
              width: 48
            }) : /* @__PURE__ */ jsxRuntime.jsx("img", {
              src: "/assets/sunglasses.png",
              alt: "shades",
              placeholder: "none",
              height: 48,
              width: 48
            })
          })
        })
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "punk-container-bottom",
        children: /* @__PURE__ */ jsxRuntime.jsx("div", {
          className: "punk-svg-container",
          children: /* @__PURE__ */ jsxRuntime.jsx(PunkSVG, {
            showShades,
            eyeColorLeft,
            eyeColorRight
          })
        })
      })]
    })
  });
};
const locationMapsUrl = "https://www.google.com/maps/place/Denver,+CO";
const employerWebsiteUrl = "https://ascendum.com/";
const tiptrackUrl = "https://tiptrack.app";
const awesomeDevtoolsUrl = "https://awesomedevtools.com";
const otherProjectsUrl = "https://sunnygolovine.com/work";
const sectionClasses = classnames__default["default"](["py-4"]);
const headingClasses = classnames__default["default"](["my-4", "text-3xl", "font-heading", "font-extrabold", "italic"]);
const IndexPage = () => {
  const {
    siteData
  } = useData.useData();
  const {
    recentPosts
  } = useBlogPosts.useBlogPosts();
  const workItems = siteData.work_data.filter((item) => item.show_in_recent_projects);
  const [mobileMenuOpen, setMobileMenuOpen] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", {
    className: "max-w-3xl mx-auto my-4",
    children: [/* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "flex md:hidden p-4 flex-row justify-end items-center",
      children: /* @__PURE__ */ jsxRuntime.jsx(MobileMenuIcon.MobileMenuButton, {
        open: mobileMenuOpen,
        onClick: () => setMobileMenuOpen((prevState) => !prevState)
      })
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "block md:hidden",
      children: mobileMenuOpen && /* @__PURE__ */ jsxRuntime.jsx(MobileMenuIcon.MobileMenu, {
        closeMenu: () => setMobileMenuOpen(false)
      })
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      className: "flex flex-row justify-center",
      children: /* @__PURE__ */ jsxRuntime.jsx(Punk, {})
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "my-4",
      children: [/* @__PURE__ */ jsxRuntime.jsx("h1", {
        className: "text-5xl font-heading font-black italic text-center",
        children: "Sunny Golovine"
      }), /* @__PURE__ */ jsxRuntime.jsx("div", {
        className: "hidden md:block",
        children: /* @__PURE__ */ jsxRuntime.jsx(HomeNav, {})
      })]
    }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
      className: "px-4 md:px-0",
      children: [/* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: sectionClasses,
        children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
          className: headingClasses,
          children: "About Me"
        }), /* @__PURE__ */ jsxRuntime.jsxs("p", {
          className: "text-lg",
          children: ["Hey! My name is Sunny Golovine. I'm a full stack software engineer from", " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
            className: "text-brand-yellow",
            href: locationMapsUrl,
            children: "Denver, CO\xA0"
          }), "specializing in Web and Mobile Development. I currently work for \xA0", /* @__PURE__ */ jsxRuntime.jsx("a", {
            className: "text-brand-yellow",
            href: employerWebsiteUrl,
            children: "Ascendum Solutions"
          }), ". On the side I work on\xA0", /* @__PURE__ */ jsxRuntime.jsx("a", {
            className: "text-brand-yellow",
            href: tiptrackUrl,
            children: "TipTrack"
          }), ",", " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
            className: "text-brand-yellow",
            href: awesomeDevtoolsUrl,
            children: "AwesomeDevtools"
          }), " ", "and a bunch of", " ", /* @__PURE__ */ jsxRuntime.jsx("a", {
            className: "text-brand-yellow",
            href: otherProjectsUrl,
            children: "other awesome projects"
          }), "."]
        })]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: sectionClasses,
        children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
          className: headingClasses,
          children: "My Work"
        }), workItems.map((item, index) => /* @__PURE__ */ jsxRuntime.jsx(WorkItem.WorkItem, {
          name: item.name,
          description: item.description,
          project_type: item.project_type,
          url: item.url
        }, index))]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: sectionClasses,
        children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
          className: headingClasses,
          children: "Recent Posts"
        }), recentPosts.map((post) => /* @__PURE__ */ jsxRuntime.jsx(useBlogPosts.PostItem, {
          path: post.path,
          title: post.title,
          date: post.date,
          description: post.description,
          external: post.type === "remote"
        }))]
      }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
        className: sectionClasses,
        children: [/* @__PURE__ */ jsxRuntime.jsx("h2", {
          className: headingClasses,
          children: "Connect With Me"
        }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
          title: "Email",
          href: siteData.email,
          type: "email",
          icon: "email",
          showPreviewOnHover: true
        }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
          title: "LinkedIn",
          href: siteData.linkedin,
          type: "linkedin",
          icon: "linkedin",
          showPreviewOnHover: true
        }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
          title: "Github",
          href: siteData.github,
          icon: "github",
          showPreviewOnHover: true
        }), /* @__PURE__ */ jsxRuntime.jsx(LinkItem.LinkItem, {
          title: "The Practical Dev",
          href: siteData.dev_to,
          icon: "devto",
          showPreviewOnHover: true
        })]
      })]
    })]
  });
};
var HomePage = IndexPage;
exports["default"] = HomePage;
