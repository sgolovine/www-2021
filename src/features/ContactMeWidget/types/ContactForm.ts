export interface ContactFormProps {
  name: string
  email: string
  subject: string
  message: string
  onNameChange: (val: string) => void
  onEmailChange: (val: string) => void
  onSubjectChange: (val: string) => void
  onMessageChange: (val: string) => void
  onClose: () => void
  onSubmit: () => void
  onCancel: () => void
}
