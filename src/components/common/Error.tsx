import React from "react"
import { CloseIcon } from "~/icons/Close"

interface Props {
  message: string
}

export const Error: React.FC<Props> = ({ message }) => (
  <div className="rounded p-2 bg-red-400">
    <div className="flex flex-row items-center">
      <CloseIcon className="h-12 w-12 text-brand-white" />
      <p className="text-lg font-bold text-brand-white">{message}</p>
    </div>
  </div>
)
