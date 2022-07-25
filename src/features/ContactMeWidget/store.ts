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
  openModal: () => void
  closeModal: () => void
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

  const openModal = () => {
    set(store => ({
      ...store,
      state: {
        ...store.state,
        visible: true,
      },
    }))
  }

  const closeModal = () => {
    set(store => ({
      ...store,
      state: {
        ...store.state,
        visible: false,
      },
    }))
  }

  return {
    state: initialState,
    actions: {
      setFormState,
      setErrors,
      openModal,
      closeModal,
    },
  }
})
