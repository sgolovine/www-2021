import { useMutation } from "@tanstack/react-query"
import { useEffect, useRef } from "react"
import styled, { keyframes } from "styled-components"
import { Mail } from "~/icons/Mail"
import { ContactForm } from "./components/ContactForm"
import { SuccessUI } from "./components/SuccessUI"
import { sendEmail } from "./services/sendEmail"
import { useContactWidgetStore } from "./store"

export const ContactMe = () => {
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
        <Sheet className="fixed bg-gray-700 w-96 right-16 rounded-lg shadow-xl">
          {isSuccess ? (
            <SuccessUI onClose={closeModal} />
          ) : (
            <ContactForm
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
      <button
        onClick={openModal}
        className="fixed bottom-10 right-10 bg-brand-yellow hover:bg-brand-yellow-darker active:bg-brand-yellow-lighter p-4 rounded-full drop-shadow-lg"
      >
        <Mail />
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
