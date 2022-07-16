import { useEffect, useRef, useState } from "react"
import styled, { keyframes } from "styled-components"
import { Mail } from "~/icons/Mail"
import { initialState } from "./constants/formState"
import { ContactForm } from "./ContactForm"
import { FormState } from "./types/FormState"

export const ContactMe = () => {
  const sheetRef = useRef<HTMLDivElement>(null)

  const [sheetVisible, setSheetVisible] = useState<boolean>(true)
  const [formState, setFormState] = useState<FormState>(initialState)

  useEffect(() => {
    const clickOutEvent = (e: any) => {
      if (sheetRef.current && !sheetRef.current.contains(e.target)) {
        setSheetVisible(false)
      }
    }

    document.addEventListener("mousedown", clickOutEvent)

    return () => {
      document.removeEventListener("mousedown", clickOutEvent)
    }
  }, [sheetRef])

  const handleTriggerClick = () => setSheetVisible(prevState => !prevState)

  const closeModal = () => {
    setSheetVisible(false)
    setFormState(initialState)
  }

  const handleSubmit = () => {
    // TODO: Handle Submit Stuff
    closeModal()
  }

  return (
    <>
      {/* Sheet */}
      {sheetVisible && (
        <Sheet
          ref={sheetRef}
          className="fixed bg-gray-700 w-96 right-16 rounded-lg shadow-xl p-4 overflow-y-scroll"
        >
          <ContactForm
            name={formState.name}
            email={formState.email}
            subject={formState.subject}
            message={formState.message}
            onCancel={closeModal}
            onClose={closeModal}
            onSubmit={handleSubmit}
            onEmailChange={(val: string) =>
              setFormState(prev => ({ ...prev, email: val }))
            }
            onNameChange={(val: string) =>
              setFormState(prev => ({ ...prev, name: val }))
            }
            onSubjectChange={(val: string) =>
              setFormState(prev => ({ ...prev, subject: val }))
            }
            onMessageChange={(val: string) =>
              setFormState(prev => ({ ...prev, message: val }))
            }
          />
        </Sheet>
      )}
      {/* Trigger */}
      <button
        onClick={handleTriggerClick}
        className="fixed bottom-10 right-10 bg-brand-yellow hover:bg-brand-yellow-darker active:bg-brand-yellow-lighter p-4 rounded-full drop-shadow-lg"
      >
        <Mail />
      </button>
    </>
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
