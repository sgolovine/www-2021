import axios from "axios"

type Args = Record<"name" | "email" | "subject" | "message", string>

export async function sendEmail({
  name,
  email,
  subject,
  message,
}: Args): Promise<{ statusCode: number; body: string }> {
  const resp = await axios.post<string>("/.netlify/functions/sendEmail", {
    name,
    email,
    subject,
    message,
  })

  return {
    statusCode: resp.status,
    body: resp.data,
  }
}
