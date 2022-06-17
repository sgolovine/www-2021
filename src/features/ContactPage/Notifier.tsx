import React from "react"
import { MessageState } from "~/hooks/useContactForm"

interface NotifierProps {
  messageState: MessageState
}

const Error: React.FC<{ children: string }> = ({ children }) => (
  <div className="my-2 p-4 border rounded bg-red-400 border-red-600">
    <p className="font-bold">{children}</p>
  </div>
)

const Success: React.FC<{ children: string }> = ({ children }) => (
  <div className="my-2 p-4 border rounded bg-green-400 border-green-600">
    <p className="font-bold">{children}</p>
  </div>
)

const Notifier: React.FC<NotifierProps> = ({ messageState }) => {
  if (
    !messageState.show ||
    messageState.type === null ||
    messageState.message === null
  )
    return null

  const WrapperComponent = messageState.type === "error" ? Error : Success

  return <WrapperComponent>{messageState.message}</WrapperComponent>
}

export default Notifier
