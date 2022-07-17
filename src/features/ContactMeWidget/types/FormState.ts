type FormKeys = "name" | "email" | "subject" | "message"

export type FormState = Record<FormKeys, string>

export type FormErrors = Record<FormKeys | "sendError", boolean>
