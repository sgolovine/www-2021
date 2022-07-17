import classNames from "classnames"
import { ChangeEvent } from "react"
import { CloseIcon } from "~/icons/Close"
import { labels } from "../constants/labels"
import { useContactWidgetStore } from "../store"

const containerClasses = classNames("flex", "flex-col")

const inputClasses = classNames(
  "my-2",
  "bg-gray-800",
  "p-2",
  "text-white",
  "rounded",
  "shadow-lg"
)

const labelClasses = classNames("text-brand-yellow", "font-medium")

export const ContactForm: React.FC<{
  onSubmit: () => void
  onClose: () => void
}> = ({ onSubmit, onClose }) => {
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
    <div>
      <div className="flex flex-row items-center justify-between pb-4">
        <h1 className="text-2xl text-center">{labels.header}</h1>
        <button
          onClick={onClose}
          className="text-brand-yellow hover:text-brand-yellow-darker active:text-brand-yellow-lighter"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <div className={containerClasses}>
        <label className={labelClasses}>{labels.nameLabel}</label>
        <input
          placeholder={labels.namePlaceholder}
          value={name}
          onChange={onNameChange}
          className={inputClasses}
        />
      </div>
      <div className={containerClasses}>
        <label className={labelClasses}>{labels.emailLabel}</label>
        <input
          placeholder={labels.emailPlaceholder}
          name={email}
          onChange={onEmailChange}
          className={inputClasses}
        />
      </div>
      <div className={containerClasses}>
        <label className={labelClasses}>{labels.subjectLabel}</label>
        <input
          placeholder={labels.subjectPlaceholder}
          value={subject}
          onChange={onSubjectChange}
          className={inputClasses}
        />
      </div>
      <div className={containerClasses}>
        <label className={labelClasses}>{labels.messageLabel}</label>
        <textarea
          value={message}
          onChange={onMessageChange}
          cols={10}
          className={classNames(inputClasses, "h-28")}
          placeholder={labels.messagePlaceholder}
        />
      </div>
      <div className="grid grid-cols-2 mt-4 gap-4">
        <button
          onClick={onSubmit}
          className="bg-green-700 p-2 rounded-lg shadow-lg text-gray-200"
        >
          {labels.submitBtnText}
        </button>
        <button
          onClick={onClose}
          className="bg-red-700 p-2 rounded-lg shadow-lg text-gray-200"
        >
          {labels.cancelBtnText}
        </button>
      </div>
    </div>
  )
}
