"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var withLayout = require("./withLayout.756aecbf.js");
require("classnames");
var jsxRuntime = require("react/jsx-runtime");
require("react");
require("react-headroom");
require("./MobileMenuIcon.5e3f6124.js");
var WorkItem = require("./WorkItem.572f1bb9.js");
var useData = require("./useData.99ff2243.js");
require("./ExternalLink.0c3ec40c.js");
require("./ExternalLink.81ce11f5.js");
const WorkPage = () => {
  const {
    siteData
  } = useData.useData();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(withLayout.Header, {
      title: "Work"
    }), /* @__PURE__ */ jsxRuntime.jsx("div", {
      children: siteData.work_data.map((item, index) => /* @__PURE__ */ jsxRuntime.jsx(WorkItem.WorkItem, {
        name: item.name,
        description: item.description,
        project_type: item.project_type,
        url: item.url
      }, index))
    })]
  });
};
var WorkPage$1 = withLayout.withNewLayout(WorkPage);
exports["default"] = WorkPage$1;
