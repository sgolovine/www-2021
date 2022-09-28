import classNames from "classnames"

const formContainerClasses = classNames(
  "my-6",
  "grid",
  "grid-cols-1",
  "md:grid-cols-2",
  "gap-3",
  "md:gap-5"
)
const formItemContainer = classNames("flex", "flex-col")
const formInputClasses = classNames("border", "px-4", "py-2", "rounded-md")
const labelClasses = classNames("text-sm", "font-bold", "text-gray-700")

export {
  formContainerClasses,
  formItemContainer,
  formInputClasses,
  labelClasses,
}
