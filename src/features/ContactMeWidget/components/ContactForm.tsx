import classNames from "classnames"
import { ChangeEvent } from "react"
import { CloseIcon } from "~/icons/Close"
import { Loading } from "~/icons/Loading"
import { labels } from "../constants/labels"
import { useContactWidgetStore } from "../store"
import { FormErrors } from "../types/FormState"

const containerClasses = classNames("flex", "flex-col")

interface Errors extends FormErrors {
  sendError: boolean
}

interface Props {
  onSubmit: () => void
  onClose: () => void
  errors: Errors
  loading: boolean
  lightTheme: boolean
}

export const ContactForm: React.FC<Props> = ({
  onSubmit,
  onClose,
  errors,
  loading,
  lightTheme,
}) => {
  const inputClasses = classNames(
    "my-2",
    "p-2",
    "rounded",
    "shadow-lg",
    lightTheme ? ["bg-gray-100", "text-black"] : ["bg-gray-800", "text-white"]
  )

  const labelClasses = classNames(
    "font-medium",
    lightTheme ? "text-gray-800" : "text-brand-yellow"
  )

  const closeButtonClasses = classNames(
    lightTheme
      ? ["text-gray-800", "hover:text-gray-600", "active:text-gray-700"]
      : [
          "text-brand-yellow",
          "hover:text-brand-yellow-darker",
          "active:text-brand-yellow-lighter",
        ]
  )

  const { state, actions } = useContactWidgetStore()
  const { name, email, subject, message } = state.form

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    actions.setFormState("name", e.target.value)
  }

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    actions.setFormState("email", e.target.value)
  }

  const onSubjectChange = (e: ChangeEvent<HTMLInputElement>) => {
    actions.setFormState("subject", e.target.value)
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    actions.setFormState("message", e.target.value)
  }

  return (
    <div className="h-full">
      {loading && (
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          className="absolute h-full w-full p-4 rounded-lg flex flex-row items-center justify-center"
        >
          <div className="animate-spin">
            <Loading />
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex flex-row items-center justify-between pb-2">
          <h1 className="text-2xl text-center">{labels.header}</h1>
          <button onClick={onClose} className={closeButtonClasses}>
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        {errors.sendError && (
          <div className="border p-2 mb-2 rounded drop-shadow-lg bg-red-600 border-red-500">
            <p className="font-medium">Error Sending Message</p>
          </div>
        )}

        <div className={containerClasses}>
          <label className={labelClasses}>{labels.nameLabel}</label>
          <input
            placeholder={labels.namePlaceholder}
            value={name}
            onChange={onNameChange}
            className={classNames(inputClasses, {
              "border-2": errors.name,
              "border-red-500": errors.name,
            })}
          />
        </div>
        <div className={containerClasses}>
          <label className={labelClasses}>{labels.emailLabel}</label>
          <input
            placeholder={labels.emailPlaceholder}
            name={email}
            onChange={onEmailChange}
            className={classNames(inputClasses, {
              "border-2": errors.email,
              "border-red-500": errors.email,
            })}
          />
        </div>
        <div className={containerClasses}>
          <label className={labelClasses}>{labels.subjectLabel}</label>
          <input
            placeholder={labels.subjectPlaceholder}
            value={subject}
            onChange={onSubjectChange}
            className={classNames(inputClasses, {
              "border-2": errors.subject,
              "border-red-500": errors.subject,
            })}
          />
        </div>
        <div className={containerClasses}>
          <label className={labelClasses}>{labels.messageLabel}</label>
          <textarea
            value={message}
            onChange={onMessageChange}
            cols={10}
            className={classNames(inputClasses, "h-28", "resize-none", {
              "border-2": errors.message,
              "border-red-500": errors.message,
            })}
            placeholder={labels.messagePlaceholder}
          />
        </div>
        <div className="grid grid-cols-2 mt-4 gap-4">
          <button
            onClick={onSubmit}
            className="bg-green-700 hover:bg-green-800 active:bg-green-600 p-2 rounded-lg shadow-lg text-gray-200"
          >
            {labels.submitBtnText}
          </button>
          <button
            onClick={onClose}
            className="bg-red-700 hover:bg-red-800 active:bg-red-600 p-2 rounded-lg shadow-lg text-gray-200"
          >
            {labels.cancelBtnText}
          </button>
        </div>
      </div>
    </div>
  )
}
