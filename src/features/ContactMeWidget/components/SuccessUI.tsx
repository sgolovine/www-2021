import classNames from "classnames"
import { CheckCircle } from "~/icons/CheckCircle"
import { CloseIcon } from "~/icons/Close"
import { labels } from "../constants/labels"

interface Props {
  onClose: () => void
  lightTheme: boolean
}

export const SuccessUI: React.FC<Props> = ({ onClose, lightTheme }) => {
  const closeButtonClasses = classNames(
    lightTheme
      ? ["text-gray-800", "hover:text-gray-600", "active:text-gray-700"]
      : [
          "text-brand-yellow",
          "hover:text-brand-yellow-darker",
          "active:text-brand-yellow-lighter",
        ]
  )

  const mainIconClasses = classNames(
    "h-48",
    "w-48",
    lightTheme ? "stroke-gray-800" : "stroke-brand-yellow"
  )

  const buttonClasses = classNames(
    "p-2",
    "rounded-lg",
    "shadow-lg",
    "font-medium",
    lightTheme
      ? [
          "bg-gray-300",
          "hover:bg-gray-400",
          "active:bg-gray-200",
          "text-gray-800",
        ]
      : [
          "bg-gray-500",
          "hover:bg-gray-600",
          "active:bg-gray-400",
          "active:text-zinc-900",
          "text-brand-yellow",
        ]
  )

  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex-grow h-full">
        <div className="flex flex-row items-center justify-end pb-4">
          <button onClick={onClose} className={closeButtonClasses}>
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-center">
          <CheckCircle className={mainIconClasses} />
        </div>
        <h1 className="text-xl text-center pt-6">{labels.submitMessage}</h1>
      </div>
      <button onClick={onClose} className={buttonClasses}>
        {labels.closeWindow}
      </button>
    </div>
  )
}
