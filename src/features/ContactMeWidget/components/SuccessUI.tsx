import { CheckCircle } from "~/icons/CheckCircle"
import { CloseIcon } from "~/icons/Close"
import { labels } from "../constants/labels"

export const SuccessUI = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="flex-grow">
        <div className="flex flex-row items-center justify-end pb-4">
          <button className="text-brand-yellow hover:text-brand-yellow-darker active:text-brand-yellow-lighter">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-row items-center justify-center">
          <CheckCircle className="h-48 w-48 stroke-brand-yellow" />
        </div>
        <h1 className="text-xl text-center pt-6">{labels.submitMessage}</h1>
      </div>
      <button
        onClick={onClose}
        className="bg-gray-500 hover:bg-gray-600 active:bg-gray-400 active:text-zinc-900 p-2 rounded-lg shadow-lg text-brand-yellow font-medium"
      >
        {labels.closeWindow}
      </button>
    </div>
  )
}
