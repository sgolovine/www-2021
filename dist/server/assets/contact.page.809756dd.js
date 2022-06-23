"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var classnames = require("classnames");
var jsxRuntime = require("react/jsx-runtime");
var withLayout = require("./withLayout.756aecbf.js");
var react = require("react");
require("react-headroom");
require("./MobileMenuIcon.5e3f6124.js");
var ContentContainer = require("./ContentContainer.b828408c.js");
var axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var classnames__default = /* @__PURE__ */ _interopDefaultLegacy(classnames);
var axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
const Button = ({
  title = "Button Title!",
  onClick = () => null,
  additionalClassNames = ""
}) => /* @__PURE__ */ jsxRuntime.jsx("button", {
  type: "button",
  className: classnames__default["default"](["h-12", "w-44", "border-4", "py-2", "px-6", "rounded", "shadow", "border-brand-yellow", "text-brand-white", "font-bold"], additionalClassNames),
  onClick,
  children: title
});
const TextInput = ({
  value,
  onChange,
  label,
  placeholder
}) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
  className: "mb-4 flex flex-col",
  children: [label && /* @__PURE__ */ jsxRuntime.jsx("label", {
    className: "text-brand-yellow font-bold mb-0 pb-0 uppercase text-xs",
    children: label
  }), /* @__PURE__ */ jsxRuntime.jsx("input", {
    className: "mt-0 border-4 border-brand-yellow shadow rounded-sm text-xl bg-gray-900 text-brand-white px-2 py-1",
    value,
    onChange: (e) => onChange(e.target.value),
    placeholder
  })]
});
const TextArea = ({
  value,
  onChange,
  placeholder,
  label,
  maxLength
}) => /* @__PURE__ */ jsxRuntime.jsxs("div", {
  className: "mb-4 flex flex-col",
  children: [label && /* @__PURE__ */ jsxRuntime.jsx("label", {
    className: "text-brand-yellow font-bold mb-0 pb-0 uppercase text-xs",
    children: label
  }), /* @__PURE__ */ jsxRuntime.jsx("textarea", {
    rows: 12,
    className: "mt-0 border-4 border-brand-yellow shadow rounded-sm text-xl bg-gray-900 text-brand-white px-2 py-1",
    value,
    onChange: (e) => onChange(e.target.value),
    placeholder,
    maxLength
  })]
});
const Section = ({
  children
}) => /* @__PURE__ */ jsxRuntime.jsx("div", {
  className: "pb-6",
  children
});
const defaultForm = {
  name: "",
  email: "",
  message: ""
};
const defaultMessage = {
  show: false,
  type: null,
  message: null
};
const useContactForm = () => {
  const [form, setForm] = react.useState(defaultForm);
  const [messageState, setMessageState] = react.useState(defaultMessage);
  const handleSubmit = async () => {
    if (!form.name) {
      setMessageState({
        show: true,
        type: "error",
        message: "Please enter a name"
      });
      return;
    }
    if (!form.email) {
      setMessageState({
        show: true,
        type: "error",
        message: "Please enter an email"
      });
      return;
    }
    if (!form.message) {
      setMessageState({
        show: true,
        type: "error",
        message: "Please enter a message"
      });
      return;
    }
    const resp = await axios__default["default"]({
      method: "POST",
      url: "/.netlify/functions/sendEmail",
      validateStatus: (status) => status >= 200 && status < 401,
      data: {
        name: form.name,
        email: form.email,
        message: form.message
      }
    });
    if (resp.status === 200) {
      setMessageState({
        show: true,
        type: "success",
        message: "Message Sent Successfully!"
      });
      setForm(defaultForm);
    } else {
      setMessageState({
        show: true,
        type: "error",
        message: "Could not send message."
      });
    }
  };
  const handleClear = () => {
    setMessageState(defaultMessage);
    setForm(defaultForm);
  };
  const setFormField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    });
    setMessageState(defaultMessage);
  };
  return {
    form,
    messageState,
    handleSubmit,
    handleClear,
    setFormField
  };
};
const Error = ({
  children
}) => /* @__PURE__ */ jsxRuntime.jsx("div", {
  className: "my-2 p-4 border rounded bg-red-400 border-red-600",
  children: /* @__PURE__ */ jsxRuntime.jsx("p", {
    className: "font-bold",
    children
  })
});
const Success = ({
  children
}) => /* @__PURE__ */ jsxRuntime.jsx("div", {
  className: "my-2 p-4 border rounded bg-green-400 border-green-600",
  children: /* @__PURE__ */ jsxRuntime.jsx("p", {
    className: "font-bold",
    children
  })
});
const Notifier = ({
  messageState
}) => {
  if (!messageState.show || messageState.type === null || messageState.message === null)
    return null;
  const WrapperComponent = messageState.type === "error" ? Error : Success;
  return /* @__PURE__ */ jsxRuntime.jsx(WrapperComponent, {
    children: messageState.message
  });
};
const ContactPage = () => {
  const {
    form,
    messageState,
    handleSubmit,
    handleClear,
    setFormField
  } = useContactForm();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [/* @__PURE__ */ jsxRuntime.jsx(withLayout.Header, {
      title: "Contact",
      additionalText: "Enter your information below to send me a message. You can also email me directly at sunny@glvn.co"
    }), /* @__PURE__ */ jsxRuntime.jsxs(ContentContainer.ContentContainer, {
      children: [/* @__PURE__ */ jsxRuntime.jsx(Notifier, {
        messageState
      }), /* @__PURE__ */ jsxRuntime.jsx(Section, {
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", {
          className: "flex flex-col w-full",
          children: [/* @__PURE__ */ jsxRuntime.jsx(TextInput, {
            value: form.name,
            onChange: (newText) => setFormField("name", newText),
            label: "Name",
            placeholder: "John Doe"
          }), /* @__PURE__ */ jsxRuntime.jsx(TextInput, {
            value: form.email,
            onChange: (newText) => setFormField("email", newText),
            label: "Email",
            placeholder: "john_doe@gmail.com"
          }), /* @__PURE__ */ jsxRuntime.jsx(TextArea, {
            value: form.message,
            onChange: (newText) => setFormField("message", newText),
            label: "Message",
            placeholder: "Hey Sunny ...."
          }), /* @__PURE__ */ jsxRuntime.jsxs("div", {
            children: [/* @__PURE__ */ jsxRuntime.jsx(Button, {
              additionalClassNames: "mr-2",
              title: "Send",
              onClick: handleSubmit
            }), /* @__PURE__ */ jsxRuntime.jsx(Button, {
              title: "Clear",
              onClick: handleClear
            })]
          })]
        })
      })]
    })]
  });
};
var ContactPage$1 = withLayout.withNewLayout(ContactPage);
exports["default"] = ContactPage$1;
