import { createContext, ReactNode, useState } from "react"

type Form = Record<
  | "country"
  | "education"
  | "jobTitle"
  | "includeKeywords"
  | "excludeKeywords"
  | "currentEmployer",
  string
>

interface RecruiterSearchContext {
  form: Form
  setFormField: (field: keyof Form, newValue: string) => void
}

export const recruiterSearchContext = createContext<RecruiterSearchContext>(
  {} as RecruiterSearchContext
)

export const RecruiterSearchContextProvider: React.FC<{
  children: ReactNode
}> = ({ children }) => {
  const [form, setForm] = useState<Form>({
    country: "",
    education: "",
    jobTitle: "",
    includeKeywords: "",
    excludeKeywords: "",
    currentEmployer: "",
  })

  const setFormField = (field: keyof Form, newValue: string) => {
    setForm(prevState => ({
      ...prevState,
      [field]: newValue,
    }))
  }

  const value: RecruiterSearchContext = {
    form,
    setFormField,
  }
  return (
    <recruiterSearchContext.Provider value={value}>
      {children}
    </recruiterSearchContext.Provider>
  )
}
