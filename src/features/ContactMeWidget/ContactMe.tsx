import { useMutation } from "@tanstack/react-query"
import classNames from "classnames"
import { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { Mail } from "~/icons/Mail"
import { ContactForm } from "./components/ContactForm"
import { SuccessUI } from "./components/SuccessUI"
import { sendEmail } from "./services/sendEmail"
import { useContactWidgetStore } from "./store"

interface Props {
  lightTheme?: boolean
}

export const ContactMe: React.FC<Props> = ({ lightTheme }) => {
  const triggerClasses = classNames(
    "fixed",
    "bottom-10",
    "right-10",
    "p-4",
    "rounded-full",
    "drop-shadow-lg",
    lightTheme
      ? ["bg-white", "hover:bg-gray-300", "active:bg-gray-200"]
      : [
          "bg-brand-yellow",
          "hover:bg-brand-yellow-darker",
          "active:bg-brand-yellow-lighter",
        ]
  )

  const sheetClasses = classNames(
    "fixed",
    "w-96",
    "right-16",
    "rounded-lg",
    "shadow-xl",
    lightTheme ? "bg-white" : "bg-gray-700"
  )

  const sheetRef = useRef<HTMLDivElement>(null)
  const store = useContactWidgetStore()
  const { setErrors, openModal, closeModal } = store.actions
  const { errors, form } = store.state
  const { isLoading, isError, isSuccess, mutate } = useMutation(sendEmail)

  useEffect(() => {
    const clickOutEvent = (e: any) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target)) {
        closeModal()
      }
    }

    document.addEventListener("mousedown", clickOutEvent)

    return () => {
      document.removeEventListener("mousedown", clickOutEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetRef])

  const handleSubmit = () => {
    // validate name
    if (!form.name) {
      setErrors("name", true)
      return
    }

    // validate email
    if (!form.email) {
      setErrors("email", true)
      return
    }

    // validate subject
    if (!form.subject) {
      setErrors("subject", true)
      return
    }

    // validate message
    if (!form.message) {
      setErrors("message", true)
      return
    }

    mutate({
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    })
  }

  return (
    <div ref={sheetRef}>
      {/* Sheet */}
      {store.state.visible && (
        <Sheet className={sheetClasses}>
          {isSuccess ? (
            <SuccessUI onClose={closeModal} lightTheme={lightTheme ?? false} />
          ) : (
            <ContactForm
              lightTheme={lightTheme ?? false}
              loading={isLoading}
              errors={{
                ...errors,
                sendError: isError,
              }}
              onClose={closeModal}
              onSubmit={handleSubmit}
            />
          )}
        </Sheet>
      )}
      {/* Trigger */}
      <button onClick={openModal} className={triggerClasses}>
        <div className="h-6 w-6">
          <Mail />
        </div>
      </button>
    </div>
  )
}

const slideUp = keyframes`
  from {
    bottom: -7rem;
    height: 0px;
    width: 0px;
  }
  to {
    bottom: 7rem;
    min-height: 34rem;
    width: 24rem;
  }
`

const Sheet = styled.div`
  animation: ${slideUp} 0.25s ease-in;
  animation-fill-mode: forwards;
`
