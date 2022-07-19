import create from "zustand"
import { FormErrors, FormState } from "./types/FormState"

interface State {
  form: FormState
  errors: FormErrors
  visible: boolean
}

interface Actions {
  setFormState: (key: keyof FormState, value: string) => void
  setErrors: (key: keyof FormErrors, value: boolean) => void
  toggleModal: () => void
}

interface Store {
  state: State
  actions: Actions
}

const initialState: State = {
  form: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  errors: {
    name: false,
    email: false,
    subject: false,
    message: false,
  },
  visible: false,
}

export const useContactWidgetStore = create<Store>(set => {
  const setFormState = (key: keyof FormState, value: string) => {
    set(store => ({
      ...store,
      state: {
        ...store.state,
        form: {
          ...store.state.form,
          [key]: value,
        },
        errors: {
          ...store.state.errors,
          [key]: false,
        },
      },
    }))
  }

  const setErrors = (key: keyof FormErrors, value: boolean) => {
    set(store => ({
      ...store,
      state: {
        ...store.state,
        errors: {
          ...store.state.errors,
          [key]: value,
        },
      },
    }))
  }

  const toggleModal = () => {
    set(store => {
      if (store.state.visible) {
        // Modal is open. Clear state and close
        return {
          ...store,
          // We do not need to to pass 'visible'
          // Since it's false in initialState
          state: initialState,
        }
      } else {
        // Modal is closed. Simply open it
        return {
          ...store,
          state: {
            ...store.state,
            visible: true,
          },
        }
      }
    })
  }

  return {
    state: initialState,
    actions: {
      setFormState,
      setErrors,
      toggleModal,
    },
  }
})
