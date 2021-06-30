// React hook to let UI components easily connect to Sendgrid message sending action
import axios from "axios"
import { useState } from "react"

type FormState = {
  name: string
  email: string
  message: string
}

export type MessageState = {
  show: boolean
  type: "success" | "error" | null
  message: string | null
}

const defaultForm: FormState = {
  name: "",
  email: "",
  message: "",
}

const defaultMessage: MessageState = {
  show: false,
  type: null,
  message: null,
}

const useContactForm = () => {
  const [form, setForm] = useState<FormState>(defaultForm)

  const [messageState, setMessageState] = useState<MessageState>(defaultMessage)

  const handleSubmit = async () => {
    if (!form.name) {
      setMessageState({
        show: true,
        type: "error",
        message: "Please enter a name",
      })
      return
    }
    if (!form.email) {
      setMessageState({
        show: true,
        type: "error",
        message: "Please enter an email",
      })
      return
    }
    if (!form.message) {
      setMessageState({
        show: true,
        type: "error",
        message: "Please enter a message",
      })
      return
    }
    const resp = await axios({
      method: "POST",
      url: "/.netlify/functions/sendEmail",
      validateStatus: status => status >= 200 && status < 401,
      data: {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    })

    if (resp.status === 200) {
      setMessageState({
        show: true,
        type: "success",
        message: "Message Sent Successfully!",
      })
      setForm(defaultForm)
    } else {
      setMessageState({
        show: true,
        type: "error",
        message: "Could not send message.",
      })
    }
  }

  const handleClear = () => {
    setMessageState(defaultMessage)
    setForm(defaultForm)
  }

  const setFormField = (field: keyof FormState, value: string) => {
    setForm({ ...form, [field]: value })
    setMessageState(defaultMessage)
  }

  return {
    form,
    messageState,
    handleSubmit,
    handleClear,
    setFormField,
  }
}

export default useContactForm
