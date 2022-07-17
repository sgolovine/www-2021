import { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { Mail } from "~/icons/Mail"
import { ContactForm } from "./components/ContactForm"
import { SuccessUI } from "./components/SuccessUI"
import { useContactWidgetStore } from "./store"

export const ContactMe = () => {
  const sheetRef = useRef<HTMLDivElement>(null)
  const store = useContactWidgetStore()
  const { setErrors, setHasSubmitted, toggleModal } = store.actions

  useEffect(() => {
    const clickOutEvent = (e: any) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target)) {
        toggleModal()
      }
    }

    document.addEventListener("mousedown", clickOutEvent)

    return () => {
      document.removeEventListener("mousedown", clickOutEvent)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetRef])

  const handleSubmit = () => {
    const mockError = false
    // TODO: Placeholder for error states
    if (mockError) {
      setErrors("sendError", true)
    }

    // If the submission went ok.
    setHasSubmitted()
  }

  return (
    <div ref={sheetRef}>
      {/* Sheet */}
      {store.state.visible && (
        <Sheet className="fixed bg-gray-700 w-96 right-16 rounded-lg shadow-xl p-4 overflow-y-scroll">
          {store.state.hasSubmitted ? (
            <SuccessUI onClose={toggleModal} />
          ) : (
            <ContactForm onClose={toggleModal} onSubmit={handleSubmit} />
          )}
        </Sheet>
      )}
      {/* Trigger */}
      <button
        onClick={toggleModal}
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

    height: 34rem;

    width: 24rem;
  }
`

const Sheet = styled.div`
  animation: ${slideUp} 0.25s ease-in;
  animation-fill-mode: forwards;
`
